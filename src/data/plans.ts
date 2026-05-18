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
  "1m": "",
  "3m": "",
  "6m": "",
  "12m": "",
};
// ─────────────────────────────────────────────────────────────────────────

export const plans: Plan[] = [
  { id: "1m", priceEur: 15, priceUsd: 16, features: baseFeatures, stripeLink: STRIPE_LINKS["1m"] },
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
