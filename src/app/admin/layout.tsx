// Admin section layout. Intentionally minimal — no Navbar/Footer/PromoPopup
// from the marketing layout, so the dashboard renders chrome-free and the
// site's analytics tracker doesn't pollute its own data with admin sessions.
//
// This layout is the *root* for the /admin tree (the marketing site's root
// is [lang]/layout.tsx). We declare <html>/<body> here and import the
// shared stylesheet directly.

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin · ATV Corner",
  // Critical: keep the admin section out of search engines and crawlers.
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
