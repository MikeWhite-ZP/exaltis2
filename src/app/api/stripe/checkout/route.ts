import { NextResponse } from "next/server";
import { z } from "zod";
import { stripe, STRIPE_PRICES, type PlanKey } from "@/lib/stripe";
import { SITE } from "@/lib/utils";

export const runtime = "nodejs";

const Body = z.object({
  plan: z.enum(["core", "core-plus", "enterprise"]),
  email: z.string().email().optional(),
  customerId: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { plan, email, customerId } = Body.parse(json);

    const price = STRIPE_PRICES[plan as PlanKey];
    if (!price) {
      return NextResponse.json(
        { error: `Stripe price ID not configured for ${plan}` },
        { status: 500 },
      );
    }

    const setupFeePrice = process.env.STRIPE_PRICE_SETUP_FEE;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        { price, quantity: 1 },
        ...(setupFeePrice ? [{ price: setupFeePrice, quantity: 1 }] : []),
      ],
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      customer: customerId,
      customer_email: customerId ? undefined : email,
      subscription_data: {
        metadata: { plan },
      },
      success_url: `${SITE.url}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE.url}/pricing`,
      metadata: { plan, source: "exaltis-website" },
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unable to create checkout session" },
      { status: 400 },
    );
  }
}
