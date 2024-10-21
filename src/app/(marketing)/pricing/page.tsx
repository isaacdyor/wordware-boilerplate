import { getProducts, getSubscription } from "@/actions/stripe/queries";
import { Pricing } from "@/components/pricing";
import { getUser } from "@/lib/supabase/server";

export default async function PricingPage() {
  const { user } = await getUser();
  const [products, subscription] = await Promise.all([
    getProducts(),
    getSubscription(),
  ]);

  console.log(products);

  return (
    <Pricing user={user} products={products} subscription={subscription} />
  );
}
