import { make } from "./_make.mjs";

await make({
  card: { x: 288, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [288, 74] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    en: {
      title: "What each route actually covers",
      cardTitle: "Four ways, one gap each",
      lines: ["1  Aerial — national games only", "2  Streaming bundle — $70-100/mo", "3  Out-of-market pack — extra", "4  IPTV — ~4,200 sport channels"],
    },
    de: {
      title: "Was jeder Weg wirklich abdeckt",
      cardTitle: "Vier Wege, je eine Lücke",
      lines: ["1  Antenne — nur nationale Spiele", "2  Streaming-Paket — 70-100 $/Monat", "3  Auswärtspaket — zusätzlich", "4  IPTV — ~4.200 Sportkanäle"],
    },
    fr: {
      title: "Ce que couvre chaque voie",
      cardTitle: "Quatre voies, quatre lacunes",
      lines: ["1  Antenne — matchs nationaux", "2  Forfait streaming — 70-100 $/mois", "3  Pack hors marché — en plus", "4  IPTV — ~4 200 chaînes sport"],
    },
  },
});
