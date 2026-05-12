import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const Body = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  company: z.string().max(200).optional(),
  phone: z.string().max(40).optional(),
  fleetSize: z.string().max(40).optional(),
  message: z.string().max(5000).optional(),
  source: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Body.parse(json);

    // Optional: send transactional email or persist to DB.
    // We keep it simple here and log; a production deploy can wire Resend / Postmark / Loops.
    console.log("[contact]", { ...data, ts: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Invalid submission" },
      { status: 400 },
    );
  }
}
