// DESCRIPTIVE — the three setup steps. Base: byPGiMRlFj8 (TV on hutch, TV at x220-370 y40-130).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 160, w: 340 },
  marker: { x: 295, y: 88, from: [200, 150] },
  pill: null,
  grade: { slope: 1.04, intercept: -0.16, sat: 1.02 },
  str: {
    de: { title: "Einrichtung in 3 Schritten", cardTitle: "Auf jedem System gleich",
      lines: ["1  IPTV-Player installieren", "2  Xtream-Codes-Daten eingeben", "3  Sender und EPG laden automatisch"] },
    en: { title: "Setup in 3 steps", cardTitle: "The same on every system",
      lines: ["1  Install an IPTV player", "2  Enter your Xtream Codes login", "3  Channels and EPG load automatically"] },
    fr: { title: "Installation en 3 étapes", cardTitle: "Identique sur chaque système",
      lines: ["1  Installer un lecteur IPTV", "2  Saisir les identifiants Xtream Codes", "3  Chaînes et EPG se chargent seuls"] },
  },
});
