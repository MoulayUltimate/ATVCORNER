// MAIN — /iptv-roku. Base: 9ebgTVUbTho (HDMI cable, connector at ~310,150; right side clear).
import { make } from "./_make.mjs";
await make({
  card: { x: 352, y: 190, w: 236 },
  marker: { x: 312, y: 150, from: [400, 176] },
  pill: null,
  grade: { slope: 1.04, intercept: -0.02, sat: 1.02 },
  str: {
    en: { title: "IPTV on Roku", cardTitle: "One login, any device",
      lines: ["Xtream Codes or M3U —", "and an HDMI fallback", "if the store lacks a player."] },
    de: { title: "IPTV auf Roku", cardTitle: "Ein Zugang, jedes Gerät",
      lines: ["Xtream Codes oder M3U —", "plus HDMI-Ausweg, falls", "der Store keinen Player hat."] },
    fr: { title: "L'IPTV sur Roku", cardTitle: "Un accès, tout appareil",
      lines: ["Xtream Codes ou M3U —", "et un recours HDMI si", "le store n'a pas de lecteur."] },
  },
});
