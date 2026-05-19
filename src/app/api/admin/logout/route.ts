// POST /api/admin/logout — clears the admin cookie. Always 200.

import { logout } from "@/lib/admin-auth";

export async function POST() {
  await logout();
  return Response.json({ ok: true });
}
