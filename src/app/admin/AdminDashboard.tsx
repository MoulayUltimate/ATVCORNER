"use client";

// Client-side dashboard. Fetches /api/admin/stats?range=... whenever the
// operator switches the time range and renders the KPI cards + tables.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Range, Stats } from "@/lib/analytics/types";

type StatsResponse = {
  ok: boolean;
  backend: "upstash" | "memory";
  stats: Stats;
};

const RANGE_LABELS: Record<Range, string> = {
  today: "Today",
  "7d": "Last 7 days",
  "30d": "Last 30 days",
};

export function AdminDashboard() {
  const [range, setRange] = useState<Range>("7d");
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setErr(null);
    fetch(`/api/admin/stats?range=${range}`, { cache: "no-store" })
      .then(async (r) => {
        if (r.status === 401) {
          router.replace("/admin/login");
          return null;
        }
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return (await r.json()) as StatsResponse;
      })
      .then((d) => {
        if (cancelled || !d) return;
        setData(d);
      })
      .catch((e) => {
        if (cancelled) return;
        setErr(e instanceof Error ? e.message : "Failed to load stats");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [range, router]);

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Real visitor data {data && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] uppercase tracking-wide">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                    data.backend === "upstash" ? "bg-emerald-400" : "bg-amber-400"
                  }`}
                />
                {data.backend === "upstash" ? "Persistent" : "In-memory"}
              </span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <RangeSwitch range={range} setRange={setRange} />
          <button
            onClick={onLogout}
            className="rounded-lg border border-white/10 hover:border-white/20 px-3 py-1.5 text-sm text-zinc-300 hover:text-white transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      {err && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 px-4 py-3 mb-6">
          {err}
        </div>
      )}

      {loading && !data ? (
        <div className="text-zinc-500 text-sm py-12 text-center">Loading…</div>
      ) : data ? (
        <Body stats={data.stats} />
      ) : null}
    </main>
  );
}

function RangeSwitch({
  range,
  setRange,
}: {
  range: Range;
  setRange: (r: Range) => void;
}) {
  const ranges: Range[] = ["today", "7d", "30d"];
  return (
    <div className="inline-flex rounded-lg border border-white/10 bg-zinc-900 p-1">
      {ranges.map((r) => (
        <button
          key={r}
          onClick={() => setRange(r)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
            range === r
              ? "bg-emerald-500 text-zinc-950"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {RANGE_LABELS[r]}
        </button>
      ))}
    </div>
  );
}

function Body({ stats }: { stats: Stats }) {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Kpi
          label="Visitors"
          value={stats.visitors.toLocaleString()}
          sub={`Excl. Morocco: ${stats.visitorsExcludingMA.toLocaleString()}`}
          accent="emerald"
        />
        <Kpi
          label="Pageviews"
          value={stats.pageviews.toLocaleString()}
          sub={`${stats.totalEvents.toLocaleString()} total events`}
        />
        <Kpi
          label="WhatsApp clicks"
          value={stats.whatsappClicks.toLocaleString()}
          sub={`${stats.totalClicks.toLocaleString()} clicks tracked`}
          accent="emerald"
        />
        <Kpi
          label="Avg time on site"
          value={formatDuration(stats.avgSessionSeconds)}
          sub={`Median ${formatDuration(stats.medianSessionSeconds)}`}
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Card title="Plan clicks">
          {stats.planClicks.length === 0 ? (
            <Empty />
          ) : (
            <Table
              head={["Plan", "Clicks"]}
              rows={stats.planClicks.map((p) => [
                <span key="p" className="font-mono uppercase">{p.plan}</span>,
                p.clicks.toLocaleString(),
              ])}
            />
          )}
        </Card>

        <Card title="Top countries">
          {stats.topCountries.length === 0 ? (
            <Empty />
          ) : (
            <Table
              head={["Country", "Visitors"]}
              rows={stats.topCountries.map((c) => [
                <span key="c" className="font-mono">
                  {c.country}
                </span>,
                c.visitors.toLocaleString(),
              ])}
            />
          )}
        </Card>

        <Card title="Traffic sources">
          {stats.topReferrers.length === 0 ? (
            <Empty />
          ) : (
            <Table
              head={["Source", "Visitors"]}
              rows={stats.topReferrers.map((r) => [
                r.host,
                r.visitors.toLocaleString(),
              ])}
            />
          )}
        </Card>

        <Card title="Per day">
          {stats.perDay.length === 0 ? (
            <Empty />
          ) : (
            <Table
              head={["Day", "Visitors", "WA clicks"]}
              rows={stats.perDay.map((d) => [
                d.day,
                d.visitors.toLocaleString(),
                d.whatsappClicks.toLocaleString(),
              ])}
            />
          )}
        </Card>
      </div>
    </>
  );
}

function Kpi({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: "emerald";
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
      <div className="text-[11px] uppercase tracking-wide text-zinc-500">
        {label}
      </div>
      <div
        className={`mt-1 text-2xl font-bold ${
          accent === "emerald" ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </div>
      {sub && <div className="mt-1 text-xs text-zinc-500">{sub}</div>}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/60 overflow-hidden">
      <header className="px-4 py-3 border-b border-white/5 text-sm font-semibold text-zinc-200">
        {title}
      </header>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th
              key={h}
              className={`pb-2 text-[11px] uppercase tracking-wide text-zinc-500 font-medium ${
                i === 0 ? "text-left" : "text-right"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, i) => (
          <tr
            key={i}
            className="border-t border-white/5 first:border-t-0 hover:bg-white/[0.02]"
          >
            {cells.map((c, j) => (
              <td
                key={j}
                className={`py-2 ${
                  j === 0 ? "text-zinc-200 text-left" : "text-zinc-300 text-right tabular-nums"
                }`}
              >
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Empty() {
  return (
    <p className="text-sm text-zinc-500 py-4 text-center">No data in this range yet.</p>
  );
}

function formatDuration(sec: number): string {
  if (sec <= 0) return "—";
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (m < 60) return `${m}m ${s.toString().padStart(2, "0")}s`;
  const h = Math.floor(m / 60);
  return `${h}h ${(m % 60).toString().padStart(2, "0")}m`;
}
