import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 460, y: 300 },
  grade: { slope: 1.12, intercept: -0.08, sat: 1.05 },
  str: {
    de: {
      title: "IPTV auf Apple TV — ohne Jailbreak",
      pill: "Aus dem App Store",
      cardTitle: "In 5 Minuten startklar",
      lines: ["Player installieren, Xtream-Codes eintragen,", "Senderliste lädt automatisch."],
    },
    en: {
      title: "IPTV on Apple TV — no jailbreak",
      pill: "From the App Store",
      cardTitle: "Ready in 5 minutes",
      lines: ["Install a player, enter Xtream Codes,", "the channel list loads on its own."],
    },
    fr: {
      title: "IPTV sur Apple TV — sans jailbreak",
      pill: "Depuis l'App Store",
      cardTitle: "Prêt en 5 minutes",
      lines: ["Installez un lecteur, saisissez Xtream Codes,", "la liste se charge d'elle-même."],
    },
  },
});
