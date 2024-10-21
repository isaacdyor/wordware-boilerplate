"use server";

import { PrismaClient } from "@prisma/client";
import { stripe } from "@/lib/stripe/config";
import Stripe from "stripe";

const prisma = new PrismaClient();

// Change to control trial period length
const TRIAL_PERIOD_DAYS = 0;

const upsertProductRecord = async (product: Stripe.Product) => {
  try {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {
        active: product.active,
        name: product.name,
        description: product.description ?? null,
        image: product.images?.[0] ?? null,
        metadata: product.metadata,
      },
      create: {
        id: product.id,
        active: product.active,
        name: product.name,
        description: product.description ?? null,
        image: product.images?.[0] ?? null,
        metadata: product.metadata,
      },
    });
    console.log(`Product inserted/updated: ${product.id}`);
  } catch (error) {
    throw new Error(`Product insert/update failed: ${error}`);
  }
};

const upsertPriceRecord = async (
  price: Stripe.Price,
  retryCount = 0,
  maxRetries = 3,
) => {
  try {
    await prisma.price.upsert({
      where: { id: price.id },
      update: {
        productId: typeof price.product === "string" ? price.product : "",
        active: price.active,
        currency: price.currency,
        type: price.type,
        unitAmount: price.unit_amount ?? null,
        interval: price.recurring?.interval ?? null,
        intervalCount: price.recurring?.interval_count ?? null,
        trialPeriodDays:
          price.recurring?.trial_period_days ?? TRIAL_PERIOD_DAYS,
      },
      create: {
        id: price.id,
        productId: typeof price.product === "string" ? price.product : "",
        active: price.active,
        currency: price.currency,
        type: price.type,
        unitAmount: price.unit_amount ?? null,
        interval: price.recurring?.interval ?? null,
        intervalCount: price.recurring?.interval_count ?? null,
        trialPeriodDays:
          price.recurring?.trial_period_days ?? TRIAL_PERIOD_DAYS,
      },
    });
    console.log(`Price inserted/updated: ${price.id}`);
  } catch (error) {
    if (error.code === "P2002" && retryCount < maxRetries) {
      console.log(`Retry attempt ${retryCount + 1} for price ID: ${price.id}`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await upsertPriceRecord(price, retryCount + 1, maxRetries);
    } else {
      throw new Error(`Price insert/update failed: ${error}`);
    }
  }
};

const deleteProductRecord = async (product: Stripe.Product) => {
  try {
    await prisma.product.delete({
      where: { id: product.id },
    });
    console.log(`Product deleted: ${product.id}`);
  } catch (error) {
    throw new Error(`Product deletion failed: ${error}`);
  }
};

const deletePriceRecord = async (price: Stripe.Price) => {
  try {
    await prisma.price.delete({
      where: { id: price.id },
    });
    console.log(`Price deleted: ${price.id}`);
  } catch (error) {
    throw new Error(`Price deletion failed: ${error}`);
  }
};

const upsertCustomerRecord = async (uuid: string, customerId: string) => {
  try {
    await prisma.customer.upsert({
      where: { id: uuid },
      update: { stripeCustomerId: customerId },
      create: { id: uuid, stripeCustomerId: customerId },
    });
    return customerId;
  } catch (error) {
    throw new Error(`Customer record creation failed: ${error}`);
  }
};

const createCustomerInStripe = async (uuid: string, email: string) => {
  const customerData = { metadata: { supabaseUUID: uuid }, email: email };
  const newCustomer = await stripe.customers.create(customerData);
  if (!newCustomer) throw new Error("Stripe customer creation failed.");
  return newCustomer.id;
};

const createOrRetrieveCustomer = async ({
  email,
  uuid,
}: {
  email: string;
  uuid: string;
}) => {
  try {
    const existingCustomer = await prisma.customer.findUnique({
      where: { id: uuid },
    });

    let stripeCustomerId: string | undefined;
    if (existingCustomer?.stripeCustomerId) {
      const existingStripeCustomer = await stripe.customers.retrieve(
        existingCustomer.stripeCustomerId,
      );
      stripeCustomerId = existingStripeCustomer.id;
    } else {
      const stripeCustomers = await stripe.customers.list({ email: email });
      stripeCustomerId =
        stripeCustomers.data.length > 0
          ? stripeCustomers.data[0].id
          : undefined;
    }

    const stripeIdToInsert = stripeCustomerId
      ? stripeCustomerId
      : await createCustomerInStripe(uuid, email);
    if (!stripeIdToInsert) throw new Error("Stripe customer creation failed.");

    if (existingCustomer && stripeCustomerId) {
      if (existingCustomer.stripeCustomerId !== stripeCustomerId) {
        await prisma.customer.update({
          where: { id: uuid },
          data: { stripeCustomerId: stripeCustomerId },
        });
        console.warn(`Customer record mismatched Stripe ID. Record updated.`);
      }
      return stripeCustomerId;
    } else {
      console.warn(`Customer record was missing. A new record was created.`);
      const upsertedStripeCustomer = await upsertCustomerRecord(
        uuid,
        stripeIdToInsert,
      );
      if (!upsertedStripeCustomer)
        throw new Error("Customer record creation failed.");
      return upsertedStripeCustomer;
    }
  } catch (error) {
    throw new Error(`Customer lookup/creation failed: ${error}`);
  }
};

const copyBillingDetailsToCustomer = async (
  uuid: string,
  payment_method: Stripe.PaymentMethod,
) => {
  const customer = payment_method.customer as string;
  const { name, phone, address } = payment_method.billing_details;
  if (!name || !phone || !address) return;
  await stripe.customers.update(customer, { name, phone, address });
  try {
    await prisma.user.update({
      where: { id: uuid },
      data: {
        billingAddress: address,
        paymentMethod: payment_method[payment_method.type],
      },
    });
  } catch (error) {
    throw new Error(`Customer update failed: ${error}`);
  }
};

const manageSubscriptionStatusChange = async (
  subscriptionId: string,
  customerId: string,
  createAction = false,
) => {
  try {
    const customer = await prisma.customer.findFirst({
      where: { stripeCustomerId: customerId },
    });

    if (!customer) throw new Error(`Customer not found: ${customerId}`);

    const { id: uuid } = customer;

    const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ["default_payment_method"],
    });

    const subscriptionData = {
      id: subscription.id,
      userId: uuid,
      metadata: subscription.metadata,
      status: subscription.status,
      priceId: subscription.items.data[0].price.id,
      quantity: subscription.quantity,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      cancelAt: subscription.cancel_at
        ? new Date(subscription.cancel_at * 1000)
        : null,
      canceledAt: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000)
        : null,
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      created: new Date(subscription.created * 1000),
      endedAt: subscription.ended_at
        ? new Date(subscription.ended_at * 1000)
        : null,
      trialStart: subscription.trial_start
        ? new Date(subscription.trial_start * 1000)
        : null,
      trialEnd: subscription.trial_end
        ? new Date(subscription.trial_end * 1000)
        : null,
    };

    await prisma.subscription.upsert({
      where: { id: subscription.id },
      update: subscriptionData,
      create: subscriptionData,
    });

    console.log(
      `Inserted/updated subscription [${subscription.id}] for user [${uuid}]`,
    );

    if (createAction && subscription.default_payment_method && uuid)
      await copyBillingDetailsToCustomer(
        uuid,
        subscription.default_payment_method as Stripe.PaymentMethod,
      );
  } catch (error) {
    throw new Error(`Subscription insert/update failed: ${error}`);
  }
};

export {
  upsertProductRecord,
  upsertPriceRecord,
  deleteProductRecord,
  deletePriceRecord,
  createOrRetrieveCustomer,
  manageSubscriptionStatusChange,
};
