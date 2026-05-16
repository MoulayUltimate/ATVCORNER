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

export const plans: Plan[] = [
  { id: "1m", priceEur: 15, priceUsd: 16, features: baseFeatures },
  { id: "3m", priceEur: 30, priceUsd: 33, features: baseFeatures },
  { id: "6m", priceEur: 50, priceUsd: 55, features: baseFeatures },
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
