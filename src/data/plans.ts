import type { Dictionary } from "@/i18n";

export type PlanId = "1m" | "3m" | "6m" | "12m";
export type FeatureKey = keyof Dictionary["pricing"]["feature"];
export type Currency = "EUR" | "USD";

export type Plan = {
  id: PlanId;
  priceEur: number;
  priceUsd: number;
  features: FeatureKey[];
  highlighted?: boolean;
  /**
   * Stripe Payment Link URL. Paste the link from
   * dashboard.stripe.com → Payments → Payment Links.
   * Leave empty string to fall back to WhatsApp checkout.
   */
  stripeLink?: string;
  /** Hide checkout CTAs and show an out-of-stock state. */
  outOfStock?: boolean;
};

const baseFeatures: FeatureKey[] = [
  "antifreeze",
  "instant",
  "premium_live",
  "fullhd",
  "epg",
  "worldwide",
  "adult",
  "support_247",
];

// ─── PASTE YOUR 4 STRIPE PAYMENT LINKS HERE ──────────────────────────────
// Get them from: https://dashboard.stripe.com/payment-links
// One link per plan. Empty string = falls back to WhatsApp checkout.
export const STRIPE_LINKS: Record<PlanId, string> = {
  "1m": "", // 1 month → WhatsApp only
  "3m": "https://t.co/CCwl0eBnuQ",
  "6m": "https://t.co/xEHFqYdLhS",
  "12m": "https://t.co/lkLStZ4sch",
};
// ─────────────────────────────────────────────────────────────────────────

export const plans: Plan[] = [
  { id: "1m", priceEur: 15, priceUsd: 16, features: baseFeatures, stripeLink: STRIPE_LINKS["1m"], outOfStock: true },
  { id: "3m", priceEur: 30, priceUsd: 33, features: baseFeatures, stripeLink: STRIPE_LINKS["3m"] },
  { id: "6m", priceEur: 50, priceUsd: 55, features: baseFeatures, stripeLink: STRIPE_LINKS["6m"] },
  {
    id: "12m",
    priceEur: 60,
    priceUsd: 65,
    features: [
      "antifreeze",
      "instant",
      "premium_live",
      "fullhd",
      "epg",
      "worldwide",
      "adult",
      "vip_support",
    ],
    highlighted: true,
    stripeLink: STRIPE_LINKS["12m"],
  },
];

const currencyByLocale: Record<string, Currency> = {
  fr: "EUR",
  de: "EUR",
  en: "USD",
};

export function currencyForLocale(lang: string): Currency {
  return currencyByLocale[lang] ?? "EUR";
}

export function priceFor(plan: Plan, currency: Currency): number {
  return currency === "EUR" ? plan.priceEur : plan.priceUsd;
}

export function formatPrice(plan: Plan, lang: string): string {
  const currency = currencyForLocale(lang);
  const value = priceFor(plan, currency);
  const symbol = currency === "EUR" ? "€" : "$";
  // EUR: "60 €" (after), USD: "$60" (before) — keep it simple, no decimals for round prices
  return currency === "EUR" ? `${value} ${symbol}` : `${symbol}${value}`;
}

const monthsByPlan: Record<PlanId, number> = {
  "1m": 1,
  "3m": 3,
  "6m": 6,
  "12m": 12,
};

/**
 * Returns the effective price per month as a string like "10 €/Monat",
 * "≈ 8,30 €/Monat", "$5/mo". Used to show buyers the real cost-per-month
 * of multi-month plans so the 12m's value is unambiguous.
 */
export function formatPerMonth(plan: Plan, lang: string): string {
  const currency = currencyForLocale(lang);
  const total = priceFor(plan, currency);
  const months = monthsByPlan[plan.id];
  const perMonth = total / months;
  const exact = Number.isInteger(perMonth);
  // Locale-aware formatting — EUR uses comma decimal, USD uses dot.
  const localeNum =
    currency === "EUR"
      ? perMonth.toFixed(exact ? 0 : 2).replace(".", ",")
      : perMonth.toFixed(exact ? 0 : 2);
  const suffix =
    lang === "fr" ? "/mois" : lang === "de" ? "/Monat" : "/mo";
  const prefix = exact ? "" : "≈ ";
  return currency === "EUR"
    ? `${prefix}${localeNum} €${suffix}`
    : `${prefix}$${localeNum}${suffix}`;
}

/** Price per month for the 1m plan — used as the "regular" anchor for strikethroughs. */
export function basePerMonth(lang: string): string {
  return formatPerMonth(plans[0], lang);
}
