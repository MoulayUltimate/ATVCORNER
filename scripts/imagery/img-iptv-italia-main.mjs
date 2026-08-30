import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 470, y: 62 },
  marker: { x: 455, y: 114, from: [470, 78] },
  grade: { slope: 1.08, intercept: -0.05, sat: 1.08 },
  str: {
    it: {
      title: "IPTV Italia — un accesso, tutto in diretta",
      pill: "Roma",
      cardTitle: "66.000+ canali, da 5 €/mese",
      lines: ["Serie A, Champions League e", "canali italiani in 4K/8K."],
    },
    en: {
      title: "IPTV Italy — one login, all of it live",
      pill: "Rome",
      cardTitle: "66,000+ channels, from €5/mo",
      lines: ["Serie A, Champions League and", "Italian channels in 4K/8K."],
    },
  },
});
