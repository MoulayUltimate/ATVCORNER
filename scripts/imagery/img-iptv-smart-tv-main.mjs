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
    es: {
      title: "IPTV directamente en tu Smart TV",
      cardTitle: "Sin ningún aparato adicional",
      lines: ["Samsung, LG y Android TV reproducen IPTV", "directamente con la aplicación adecuada."],
    },
    it: {
      title: "IPTV direttamente sulla tua Smart TV",
      cardTitle: "Senza alcun apparecchio aggiuntivo",
      lines: ["Samsung, LG e Android TV riproducono l'IPTV", "direttamente con l'app giusta."],
    },
  },
});
