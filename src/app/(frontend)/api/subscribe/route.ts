import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter subscribe endpoint.
 * Browser posts { email, source? } here (same origin, no CORS). We validate,
 * then store the address in the Payload "subscribers" collection via the
 * Local API. The list lives in our own Postgres (RLS-protected) and is
 * visible/exportable in the /admin panel — no third-party service or keys.
 */
export async function POST(req: Request) {
  let email = "";
  let source = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
    source = typeof body?.source === "string" ? body.source.trim().slice(0, 80) : "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const payload = await getPayload({ config: configPromise });

    // Already subscribed? Treat as success (idempotent), don't duplicate.
    const existing = await payload.find({
      collection: "subscribers",
      where: { email: { equals: email } },
      limit: 1,
    });
    if (existing.totalDocs > 0) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    await payload.create({
      collection: "subscribers",
      data: { email, source: source || undefined },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Unique-constraint race (two near-simultaneous signups) lands here too —
    // the address is stored, so it's effectively a success for the user.
    const message = err instanceof Error ? err.message : String(err);
    if (/unique|duplicate/i.test(message)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    console.error("subscribe error:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
