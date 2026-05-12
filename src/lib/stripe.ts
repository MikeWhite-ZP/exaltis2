import Stripe from "stripe";

declare global {
  // eslint-disable-next-line no-var
  var __stripe: Stripe | undefined;
}

export const stripe =
  globalThis.__stripe ||
  new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
    // Cast keeps us flexible across Stripe SDK versions
    apiVersion: "2024-10-28.acacia" as any,
    appInfo: {
      name: "Exaltis SaaS",
      version: "1.0.0",
      url: "https://exaltis.org",
    },
    typescript: true,
  });

if (process.env.NODE_ENV !== "production") globalThis.__stripe = stripe;

export const STRIPE_PRICES = {
  core: process.env.STRIPE_PRICE_CORE || "",
  "core-plus": process.env.STRIPE_PRICE_CORE_PLUS || "",
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE || "",
} as const;

export type PlanKey = keyof typeof STRIPE_PRICES;
