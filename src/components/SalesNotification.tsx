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

// Short plan labels — keep the pill on a single line.
const PLANS = [
  { label: "Jahresabo", weight: 5 },
  { label: "6-Monats-Paket", weight: 3 },
  { label: "3-Monats-Paket", weight: 2 },
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
};

let nextId = 1;

function makeSale(): Sale {
  return {
    id: nextId++,
    name: pick(NAMES),
    city: pick(CITIES),
    plan: pickPlan(),
  };
}

// Cap total notifications per session so the buyer is nudged once,
// not pestered. After this many, the toast goes silent for the session.
const MAX_PER_SESSION = 3;
const STORAGE_KEY = "atv_sales_shown";
const DISMISS_KEY = "atv_sales_dismissed";

export function SalesNotification() {
  const [sale, setSale] = useState<Sale | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect a per-session dismissal — if user closed it, never show again.
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;

    let cycleTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    let mounted = true;

    const getShown = () =>
      parseInt(sessionStorage.getItem(STORAGE_KEY) ?? "0", 10) || 0;

    const showOne = () => {
      if (!mounted) return;
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
      const shown = getShown();
      if (shown >= MAX_PER_SESSION) return;

      setSale(makeSale());
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, String(shown + 1));

      // Visible for ~4s
      hideTimer = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        // Longer breathing room between toasts — 35s — so it never feels spammy.
        if (getShown() < MAX_PER_SESSION) {
          cycleTimer = setTimeout(showOne, 35_000);
        }
      }, 4_000);
    };

    // First notification appears 15s after page load — let the page settle first.
    cycleTimer = setTimeout(showOne, 15_000);

    return () => {
      mounted = false;
      clearTimeout(cycleTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!sale) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-36 sm:bottom-6 left-4 sm:left-6 z-[55] max-w-[calc(100vw-2rem)] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/95 border border-emerald-400/25 pl-2.5 pr-1.5 py-1.5 shadow-xl shadow-black/40 backdrop-blur">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"
          aria-hidden
        />
        <p className="text-[12px] leading-tight text-zinc-200 whitespace-nowrap">
          <span className="font-semibold text-white">{sale.name}</span>
          <span className="text-zinc-400"> · {sale.city} · </span>
          <span className="font-semibold text-emerald-300">{sale.plan}</span>
        </p>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Schließen"
          className="shrink-0 w-5 h-5 inline-flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-200 hover:bg-white/5 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
