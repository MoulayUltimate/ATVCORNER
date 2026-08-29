import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 460, y: 300 },
  grade: { slope: 1.05, intercept: -0.06, sat: 1.06 },
  str: {
    en: {
      title: "Coast to coast, over your own broadband",
      pill: "No dish, no box",
      cardTitle: "Works anywhere with a stable line",
      lines: ["10 Mbps for HD, 25 Mbps for 4K —", "province matters less than stability."],
    },
    de: {
      title: "Von Küste zu Küste, über Ihr Breitband",
      pill: "Ohne Schüssel",
      cardTitle: "Überall mit stabiler Leitung",
      lines: ["10 Mbit/s für HD, 25 Mbit/s für 4K —", "die Provinz zählt weniger als Stabilität."],
    },
    fr: {
      title: "D'un océan à l'autre, via votre connexion",
      pill: "Sans parabole",
      cardTitle: "Partout avec une ligne stable",
      lines: ["10 Mbps pour la HD, 25 Mbps pour la 4K —", "la province compte moins que la stabilité."],
    },
  },
});
