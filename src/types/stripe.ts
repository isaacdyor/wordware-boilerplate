import { Price, Product, Subscription } from "@prisma/client";

export interface ProductWithPrices extends Product {
  prices: Price[];
}

export interface PriceWithProduct extends Price {
  product: Product | null;
}

export interface SubscriptionWithProduct extends Subscription {
  price: PriceWithProduct | null;
}
