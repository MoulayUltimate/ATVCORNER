import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 470, y: 62 },
  marker: { x: 372, y: 130, from: [452, 74] },
  grade: { slope: 1.08, intercept: -0.05, sat: 1.08 },
  str: {
    fr: {
      title: "IPTV France — un abo, tout le direct",
      pill: "Tour Eiffel",
      cardTitle: "66 000+ chaînes, dès 5 €/mois",
      lines: ["Ligue 1, Champions League et", "chaînes internationales en 4K/8K."],
    },
    de: {
      title: "IPTV Frankreich — ein Abo, alles live",
      pill: "Eiffelturm",
      cardTitle: "66.000+ Sender, ab 5 €/Monat",
      lines: ["Ligue 1, Champions League und", "internationale Sender in 4K/8K."],
    },
    en: {
      title: "IPTV France — one plan, all of it live",
      pill: "Eiffel Tower",
      cardTitle: "66,000+ channels, from $5/mo",
      lines: ["Ligue 1, Champions League and", "international channels in 4K/8K."],
    },
  },
});
