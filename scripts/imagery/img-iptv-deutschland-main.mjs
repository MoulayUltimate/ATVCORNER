// MAIN — /iptv-deutschland. Base: z1_N_3zs760 (Berlin TV tower, sphere at ~308,215).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 240, w: 330 },
  marker: { x: 308, y: 214, from: [214, 214] },
  pill: { x: 168, y: 214 },
  grade: { slope: 1.05, intercept: -0.04, sat: 1.08 },
  str: {
    de: { title: "IPTV für Deutschland", pill: "Alle DE-Sender", cardTitle: "66.000+ Sender, ab 5 €/Monat",
      lines: ["Deutsche Programme, Bundesliga und", "internationale Sender in einem Zugang."] },
    en: { title: "IPTV for Germany", pill: "All DE channels", cardTitle: "66,000+ channels, from $5/mo",
      lines: ["German programming, Bundesliga and", "international channels in one login."] },
    fr: { title: "L'IPTV pour l'Allemagne", pill: "Chaînes DE", cardTitle: "66 000+ chaînes, dès 5 €/mois",
      lines: ["Programmes allemands, Bundesliga et", "chaînes internationales en un accès."] },
  },
});
