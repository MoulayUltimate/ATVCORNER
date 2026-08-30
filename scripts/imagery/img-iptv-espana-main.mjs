import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 470, y: 62 },
  marker: { x: 372, y: 130, from: [452, 74] },
  grade: { slope: 1.08, intercept: -0.05, sat: 1.08 },
  str: {
    es: {
      title: "IPTV España — un acceso, todo en directo",
      pill: "Madrid",
      cardTitle: "66.000+ canales, desde 5 €/mes",
      lines: ["LaLiga, Champions League y", "canales españoles en 4K/8K."],
    },
    en: {
      title: "IPTV Spain — one login, all of it live",
      pill: "Madrid",
      cardTitle: "66,000+ channels, from €5/mo",
      lines: ["LaLiga, Champions League and", "Spanish channels in 4K/8K."],
    },
  },
});
