import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 320 },
  grade: { slope: 1.1, intercept: -0.1, sat: 1.0 },
  str: {
    de: {
      title: "Wo jeder Weg aufhört",
      cardTitle: "Die Grenze der drei Wege",
      lines: ["1  Mediathek — läuft nach Frist ab", "2  Streaming — kein lineares TV", "3  IPTV — braucht stabile Leitung"],
    },
    en: {
      title: "Where each route stops",
      cardTitle: "The limit of the three routes",
      lines: ["1  Catch-up — expires after a window", "2  Streaming — no linear TV", "3  IPTV — needs a stable line"],
    },
    fr: {
      title: "Où s'arrête chaque voie",
      cardTitle: "La limite des trois voies",
      lines: ["1  Replay — expire après un délai", "2  Streaming — pas de TV linéaire", "3  IPTV — exige une ligne stable"],
    },
  },
});
