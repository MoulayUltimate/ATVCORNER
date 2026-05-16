import type { Dictionary } from "@/i18n";

export type PlanId = "1m" | "3m" | "6m" | "12m";
export type FeatureKey = keyof Dictionary["pricing"]["feature"];

export type Plan = {
  id: PlanId;
  price: number;
  currency: "USD" | "EUR";
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
  { id: "1m", price: 12.99, currency: "USD", features: baseFeatures },
  { id: "3m", price: 24.99, currency: "USD", features: baseFeatures },
  { id: "6m", price: 34.99, currency: "USD", features: baseFeatures },
  {
    id: "12m",
    price: 49.99,
    currency: "USD",
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
