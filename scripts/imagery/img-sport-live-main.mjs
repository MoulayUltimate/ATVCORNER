// MAIN — watching live sport. Base: B7FUVavJyfk (friends watching a game; TV x330-600 y25-180).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 222, w: 320 },
  pill: null,
  grade: { slope: 1.08, intercept: -0.14, sat: 1.06 },
  str: {
    de: { title: "Sport live streamen — alle Wege", cardTitle: "4.200 Sportkanäle, ein Zugang",
      lines: ["Statt drei Abos parallel zu halten:", "alle großen Ligen in einer Oberfläche."] },
    en: { title: "Streaming live sport — every route", cardTitle: "4,200 sport channels, one login",
      lines: ["Instead of holding three subscriptions:", "every major league in one interface."] },
    fr: { title: "Le sport en direct — toutes les voies", cardTitle: "4 200 chaînes sport, un accès",
      lines: ["Au lieu de cumuler trois abonnements :", "tous les grands championnats en une interface."] },
  },
});
