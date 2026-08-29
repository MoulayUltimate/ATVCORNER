import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 420, y: 248 },
  marker: { x: 178, y: 284, from: [366, 254] },
  grade: { slope: 1.1, intercept: -0.05, sat: 1.08 },
  str: {
    en: {
      title: "IPTV UK — no dish, no contract",
      pill: "Tower Bridge",
      cardTitle: "66,000+ channels, from $5/mo",
      lines: ["Premier League and European football,", "delivered over your own broadband."],
    },
    de: {
      title: "IPTV UK — ohne Schüssel, ohne Vertrag",
      pill: "Tower Bridge",
      cardTitle: "66.000+ Sender, ab 5 €/Monat",
      lines: ["Premier League und europäischer Fußball,", "geliefert über Ihr eigenes Breitband."],
    },
    fr: {
      title: "IPTV UK — sans parabole, sans contrat",
      pill: "Tower Bridge",
      cardTitle: "66 000+ chaînes, dès 5 €/mois",
      lines: ["Premier League et football européen,", "via votre propre connexion."],
    },
  },
});
