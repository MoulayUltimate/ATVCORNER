// DESCRIPTIVE — the three routes compared. Base: -MOGreUeELE (empty stadium seats).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 120, w: 352 },
  pill: null,
  grade: { slope: 1.06, intercept: -0.12, sat: 1.04 },
  str: {
    de: { title: "Drei Wege zum selben Spiel", cardTitle: "Abdeckung und Monatspreis",
      lines: ["1  Einzelabos — 40–100 €, je Liga", "2  Sportpakete — nie vollständig", "3  IPTV — 4.200 Kanäle, ab 5 €"] },
    en: { title: "Three routes to the same match", cardTitle: "Coverage versus monthly cost",
      lines: ["1  Single subs — $45–110, per league", "2  Sport packages — never complete", "3  IPTV — 4,200 channels, from $5"] },
    fr: { title: "Trois voies vers le même match", cardTitle: "Couverture et prix mensuel",
      lines: ["1  Abos séparés — 40–100 €, par ligue", "2  Bouquets sport — jamais complets", "3  IPTV — 4 200 chaînes, dès 5 €"] },
  },
});
