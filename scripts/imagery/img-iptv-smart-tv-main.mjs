// MAIN — IPTV on a Smart TV. Base: SepE36FqFTY (living room, TV at x340-470 y120-180).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 46, w: 316 },
  marker: { x: 404, y: 150, from: [340, 96] },
  pill: null,
  grade: { slope: 1.06, intercept: -0.16, sat: 1.05 },
  str: {
    de: { title: "IPTV direkt auf dem Smart TV", cardTitle: "Kein Zusatzgerät nötig",
      lines: ["Samsung, LG und Android TV spielen", "IPTV mit der richtigen App direkt ab."] },
    en: { title: "IPTV straight on your Smart TV", cardTitle: "No extra hardware needed",
      lines: ["Samsung, LG and Android TV play IPTV", "directly with the right app."] },
    fr: { title: "L'IPTV directement sur Smart TV", cardTitle: "Aucun boîtier nécessaire",
      lines: ["Samsung, LG et Android TV lisent l'IPTV", "directement avec la bonne application."] },
  },
});
