import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 200, w: 320 },
  pill: { x: 420, y: 74 },
  marker: { x: 258, y: 118, from: [376, 84] },
  grade: { slope: 1.08, intercept: -0.05, sat: 1.08 },
  str: {
    en: {
      title: "IPTV Canada — every league included",
      pill: "CN Tower",
      cardTitle: "66,000+ channels, from $5/mo",
      lines: ["NHL, NBA, MLB and MLS live, plus", "English and French programming."],
    },
    de: {
      title: "IPTV Kanada — ein Abo, alle Ligen",
      pill: "CN Tower",
      cardTitle: "66.000+ Sender, ab 5 €/Monat",
      lines: ["NHL, NBA, MLB und MLS live, dazu", "Programme auf Englisch und Französisch."],
    },
    fr: {
      title: "IPTV Canada — un abo, toutes les ligues",
      pill: "Tour CN",
      cardTitle: "66 000+ chaînes, dès 5 €/mois",
      lines: ["LNH, NBA, MLB et MLS en direct, plus", "des programmes en anglais et français."],
    },
  },
});
