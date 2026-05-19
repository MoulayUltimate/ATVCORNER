"use client";

import { useEffect, useState } from "react";

// German cities and first-name/last-initial pairs — anonymized social proof.
const NAMES = [
  "Lukas M.",
  "Hannah B.",
  "Maximilian K.",
  "Lea S.",
  "Jonas W.",
  "Sophie R.",
  "Niklas H.",
  "Marie T.",
  "Felix G.",
  "Anna L.",
  "Paul S.",
  "Emma F.",
  "Leon D.",
  "Mia P.",
  "Tim B.",
  "Laura V.",
  "Daniel K.",
  "Sarah O.",
  "Tobias R.",
  "Julia E.",
];

const CITIES = [
  "Berlin",
  "Hamburg",
  "München",
  "Köln",
  "Frankfurt",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
  "Dortmund",
  "Bremen",
  "Hannover",
  "Nürnberg",
  "Dresden",
  "Essen",
  "Bochum",
  "Wuppertal",
  "Bonn",
  "Mannheim",
  "Karlsruhe",
  "Wiesbaden",
];

const PLANS = [
  { label: "Jahresabo Premium (12 Monate)", weight: 5 },
  { label: "Fußball Halbsaison (6 Monate)", weight: 3 },
  { label: "Saison-Paket (3 Monate)", weight: 2 },
];

// Weighted random plan choice — 12m most likely.
function pickPlan() {
  const total = PLANS.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (const p of PLANS) {
    r -= p.weight;
    if (r <= 0) return p.label;
  }
  return PLANS[0].label;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

type Sale = {
  id: number;
  name: string;
  city: string;
  plan: string;
  minutesAgo: number;
};

let nextId = 1;

function makeSale(): Sale {
  return {
    id: nextId++,
    name: pick(NAMES),
    city: pick(CITIES),
    plan: pickPlan(),
    minutesAgo: 1 + Math.floor(Math.random() * 9), // "vor 1–9 Minuten"
  };
}

export function SalesNotification() {
  const [sale, setSale] = useState<Sale | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cycleTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    let mounted = true;

    const showOne = () => {
      if (!mounted) return;
      setSale(makeSale());
      setVisible(true);
      // Visible for ~5s
      hideTimer = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        // Then wait ~12s before the next one
        cycleTimer = setTimeout(showOne, 12_000);
      }, 5_000);
    };

    // First notification appears 8s after page load
    cycleTimer = setTimeout(showOne, 8_000);

    return () => {
      mounted = false;
      clearTimeout(cycleTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!sale) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-[55] w-[300px] sm:w-[320px] max-w-[calc(100vw-2rem)] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3 rounded-2xl bg-zinc-900/95 border border-emerald-400/30 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur">
        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-zinc-950"
          style={{ background: "#00B67A" }}
          aria-hidden
        >
          {sale.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="text-[13px] leading-snug text-zinc-100">
            <span className="font-semibold text-white">{sale.name}</span>
            <span className="text-zinc-400"> aus </span>
            <span className="font-semibold text-white">{sale.city}</span>
            <span className="text-zinc-400"> hat soeben das </span>
            <span className="font-semibold text-emerald-300">{sale.plan}</span>
            <span className="text-zinc-400"> gekauft.</span>
          </p>
          <p className="mt-1 text-[11px] text-zinc-500 inline-flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            vor {sale.minutesAgo} {sale.minutesAgo === 1 ? "Minute" : "Minuten"}
          </p>
        </div>
      </div>
    </div>
  );
}
