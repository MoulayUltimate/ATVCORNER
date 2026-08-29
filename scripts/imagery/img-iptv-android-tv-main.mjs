import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 310 },
  pill: { x: 460, y: 300 },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    de: {
      title: "IPTV auf Android TV & Box",
      pill: "Größte App-Auswahl",
      cardTitle: "TiviMate, IBO, Smarters Pro",
      lines: ["Alle Player aus dem Play Store —", "Box, Shield, Google TV oder Smart TV."],
    },
    en: {
      title: "IPTV on Android TV & boxes",
      pill: "Widest app choice",
      cardTitle: "TiviMate, IBO, Smarters Pro",
      lines: ["Every player from the Play Store —", "box, Shield, Google TV or Smart TV."],
    },
    fr: {
      title: "IPTV sur Android TV & box",
      pill: "Le plus grand choix",
      cardTitle: "TiviMate, IBO, Smarters Pro",
      lines: ["Tous les lecteurs via le Play Store —", "box, Shield, Google TV ou Smart TV."],
    },
  },
});
