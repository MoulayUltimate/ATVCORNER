import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [290, 74] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    de: {
      title: "Drei Schritte zur Senderliste",
      cardTitle: "So läuft die Einrichtung",
      lines: ["1  App Store → Player installieren", "2  Xtream-Codes-Daten eintragen", "3  Favoriten anlegen, fertig"],
    },
    en: {
      title: "Three steps to a channel list",
      cardTitle: "How setup runs",
      lines: ["1  App Store → install a player", "2  Enter your Xtream Codes details", "3  Build favourites, done"],
    },
    fr: {
      title: "Trois étapes vers la liste",
      cardTitle: "Comment se passe l'installation",
      lines: ["1  App Store → installer un lecteur", "2  Saisir vos identifiants Xtream", "3  Créer des favoris, terminé"],
    },
  },
});
