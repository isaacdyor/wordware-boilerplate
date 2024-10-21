import { db } from "@/lib/db";
import { ProductWithPrices, SubscriptionWithProduct } from "@/types/stripe";
import { cache } from "react";

export const getUser = cache(async () => {
  // Note: This should be implemented based on your authentication strategy
  // This is a placeholder
  return await db.user.findFirst();
});

export const getSubscription = cache(
  async (): Promise<SubscriptionWithProduct | null> => {
    return await db.subscription.findFirst({
      where: {
        status: {
          in: ["trialing", "active"],
        },
      },
      include: {
        price: {
          include: {
            product: true,
          },
        },
      },
    });
  },
);

export const getProducts = cache(async (): Promise<ProductWithPrices[]> => {
  return (await db.product.findMany({
    where: {
      active: true,
    },
    include: {
      prices: {
        where: {
          active: true,
        },
        orderBy: {
          unitAmount: "asc",
        },
      },
    },
  })) as ProductWithPrices[];
});

export const getUserDetails = cache(async () => {
  return await db.user.findFirst();
});
