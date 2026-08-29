import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 274 },
  pill: { x: 470, y: 60 },
  marker: { x: 322, y: 176, from: [436, 80] },
  grade: { slope: 1.1, intercept: -0.06, sat: 1.08 },
  str: {
    en: {
      title: "IPTV USA — every network in one place",
      pill: "Empire State",
      cardTitle: "66,000+ channels, from $5/mo",
      lines: ["American networks plus NFL, NBA,", "MLB and NHL — all in 4K/8K."],
    },
    de: {
      title: "IPTV USA — alle Sender an einem Ort",
      pill: "Empire State",
      cardTitle: "66.000+ Sender, ab 5 €/Monat",
      lines: ["US-Sender, NFL, NBA, MLB, NHL —", "dazu Internationales in 4K/8K."],
    },
    fr: {
      title: "IPTV USA — toutes les chaînes réunies",
      pill: "Empire State",
      cardTitle: "66 000+ chaînes, dès 5 €/mois",
      lines: ["Chaînes américaines, NFL, NBA,", "MLB, NHL — le tout en 4K/8K."],
    },
  },
});
