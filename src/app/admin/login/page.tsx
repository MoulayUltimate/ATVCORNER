// Single-input admin login. Posts to /api/admin/login, on 200 redirects
// to /admin. Renders inline error on 401.

"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/admin");
        router.refresh();
        return;
      }
      setErr("Incorrect password.");
    } catch {
      setErr("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl"
      >
        <h1 className="text-xl font-semibold mb-1">ATV Corner — Admin</h1>
        <p className="text-sm text-zinc-400 mb-6">
          Enter the admin password to view analytics.
        </p>
        <label className="block text-xs font-medium uppercase tracking-wide text-zinc-400 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-lg bg-zinc-950 border border-white/10 px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400/60"
        />
        {err && (
          <p className="mt-3 text-sm text-rose-400" role="alert">
            {err}
          </p>
        )}
        <button
          type="submit"
          disabled={loading || password.length === 0}
          className="mt-6 w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-semibold py-2.5 transition-colors"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
