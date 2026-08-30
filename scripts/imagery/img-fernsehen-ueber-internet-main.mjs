import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 310 },
  pill: { x: 460, y: 300 },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    de: {
      title: "Fernsehen über Internet — die drei Wege",
      pill: "Eine Leitung",
      cardTitle: "Mediathek, Streaming oder IPTV",
      lines: ["Alle drei nutzen dieselbe Leitung —", "aber sie hören an anderer Stelle auf."],
    },
    en: {
      title: "TV over the internet — the three routes",
      pill: "One line",
      cardTitle: "Catch-up, streaming or IPTV",
      lines: ["All three use the same line —", "but each stops somewhere different."],
    },
    fr: {
      title: "La TV par internet — les trois voies",
      pill: "Une seule ligne",
      cardTitle: "Replay, streaming ou IPTV",
      lines: ["Les trois utilisent la même ligne —", "mais s'arrêtent à des endroits différents."],
    },
    es: {
      title: "La TV por internet — las tres vías",
      pill: "Una sola línea",
      cardTitle: "A la carta, streaming o IPTV",
      lines: ["Las tres usan la misma línea —", "pero cada una se detiene en un punto."],
    },
    it: {
      title: "La TV via internet — le tre vie",
      pill: "Una sola linea",
      cardTitle: "On demand, streaming o IPTV",
      lines: ["Tutte e tre usano la stessa linea —", "ma ognuna si ferma in un punto diverso."],
    },
  },
});
