// POST /api/admin/login { password } → 200 + Set-Cookie on success, 401 otherwise.
//
// Returning a body shape the login page can branch on (`ok: boolean`), but
// kept intentionally bland so a brute-forcer learns nothing beyond
// pass/fail.

import type { NextRequest } from "next/server";
import { tryLogin } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  let body: { password?: unknown };
  try {
    body = (await req.json()) as { password?: unknown };
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (typeof body.password !== "string") {
    return Response.json({ ok: false }, { status: 400 });
  }

  // A few hundred ms of artificial delay flattens trivial timing oracles
  // and slows down brute-force loops without hurting the legit admin.
  await new Promise((r) => setTimeout(r, 300));

  const ok = await tryLogin(body.password);
  if (!ok) return Response.json({ ok: false }, { status: 401 });
  return Response.json({ ok: true });
}
