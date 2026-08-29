import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 450, y: 300 },
  grade: { slope: 1.1, intercept: -0.1, sat: 1.0 },
  str: {
    de: {
      title: "Kabel schlägt WLAN",
      pill: "LAN bevorzugen",
      cardTitle: "10 Mbit/s HD · 25 Mbit/s 4K",
      lines: ["Die meisten Boxen haben Ethernet —", "die stabilste Verbindung für Live-Sport."],
    },
    en: {
      title: "Wired beats wireless",
      pill: "Prefer LAN",
      cardTitle: "10 Mbps HD · 25 Mbps 4K",
      lines: ["Most boxes include ethernet —", "the most stable link for live sport."],
    },
    fr: {
      title: "Le câble bat le Wi-Fi",
      pill: "Préférez le LAN",
      cardTitle: "10 Mbps HD · 25 Mbps 4K",
      lines: ["La plupart des box ont un port ethernet —", "le lien le plus stable pour le direct."],
    },
  },
});
