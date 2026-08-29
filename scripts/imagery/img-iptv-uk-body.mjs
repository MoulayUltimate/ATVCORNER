import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 310 },
  pill: { x: 450, y: 300 },
  grade: { slope: 1.1, intercept: -0.1, sat: 1.0 },
  str: {
    en: {
      title: "Broadband, not an aerial",
      pill: "Wired is best",
      cardTitle: "What stability actually needs",
      lines: ["10 Mbps HD · 25 Mbps 4K, measured", "at the TV — not on a laptop upstairs."],
    },
    de: {
      title: "Breitband statt Antenne",
      pill: "Kabel ist am besten",
      cardTitle: "Was Stabilität wirklich braucht",
      lines: ["10 Mbit/s HD · 25 Mbit/s 4K, gemessen", "am Fernseher, nicht am Notebook oben."],
    },
    fr: {
      title: "Le haut débit, pas une antenne",
      pill: "Le filaire d'abord",
      cardTitle: "Ce qu'exige vraiment la stabilité",
      lines: ["10 Mbps HD · 25 Mbps 4K, mesurés", "au téléviseur, pas sur un portable."],
    },
  },
});
