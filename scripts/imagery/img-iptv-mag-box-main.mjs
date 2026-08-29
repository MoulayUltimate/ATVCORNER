import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 450, y: 300 },
  grade: { slope: 1.1, intercept: -0.1, sat: 1.0 },
  str: {
    de: {
      title: "IPTV für die MAG Box",
      pill: "Ohne App",
      cardTitle: "Portal-URL statt Player",
      lines: ["MAC-Adresse senden, Portal eintragen,", "Box neu starten — mehr nicht."],
    },
    en: {
      title: "IPTV for the MAG box",
      pill: "No app needed",
      cardTitle: "A portal URL, not a player",
      lines: ["Send the MAC, enter the portal,", "reboot the box — that is all."],
    },
    fr: {
      title: "IPTV pour la MAG box",
      pill: "Sans application",
      cardTitle: "Une URL de portail",
      lines: ["Envoyez la MAC, saisissez le portail,", "redémarrez la box — c'est tout."],
    },
  },
});
