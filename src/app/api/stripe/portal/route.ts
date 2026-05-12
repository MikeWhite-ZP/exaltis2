import { NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { SITE } from "@/lib/utils";

export const runtime = "nodejs";

const Body = z.object({
  customerId: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const { customerId } = Body.parse(await req.json());
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${SITE.url}/billing`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unable to create portal session" },
      { status: 400 },
    );
  }
}
