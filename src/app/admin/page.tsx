// Admin dashboard — server component.
//
// Reads the cookie, redirects unauthenticated visitors to /admin/login,
// and otherwise renders the dashboard shell. Stats fetching is moved to
// a client child so the operator can switch ranges without a full reload.

import { redirect } from "next/navigation";
import { isAdminAuthed } from "@/lib/admin-auth";
import { AdminDashboard } from "./AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthed())) redirect("/admin/login");
  return <AdminDashboard />;
}
