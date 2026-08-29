// DESCRIPTIVE — the Roku setup path. Base: byPGiMRlFj8 (TV on hutch, TV at x220-370 y40-130).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 160, w: 344 },
  marker: { x: 295, y: 88, from: [200, 150] },
  pill: null,
  grade: { slope: 1.04, intercept: -0.16, sat: 1.02 },
  str: {
    en: { title: "Roku setup, step by step", cardTitle: "Three steps on any Roku",
      lines: ["1  Install an IPTV player from the store", "2  Enter your Xtream Codes login", "3  Build favourites from 66,000+ channels"] },
    de: { title: "Roku-Einrichtung Schritt für Schritt", cardTitle: "Drei Schritte auf jedem Roku",
      lines: ["1  IPTV-Player aus dem Store laden", "2  Xtream-Codes-Daten eingeben", "3  Favoriten aus 66.000+ Sendern"] },
    fr: { title: "Installation Roku pas à pas", cardTitle: "Trois étapes sur tout Roku",
      lines: ["1  Installer un lecteur IPTV du store", "2  Saisir vos identifiants Xtream Codes", "3  Créer des favoris parmi 66 000+"] },
  },
});
