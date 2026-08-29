import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [290, 70] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    en: {
      title: "What it replaces in a US home",
      cardTitle: "One subscription, not three",
      lines: ["Cable package + box rental", "Paid sports tier", "Separate streaming add-ons"],
    },
    de: {
      title: "Was es im US-Haushalt ersetzt",
      cardTitle: "Ein Abo statt drei",
      lines: ["Kabelpaket + Receiver-Miete", "Kostenpflichtige Sportstufe", "Einzelne Streaming-Zusätze"],
    },
    fr: {
      title: "Ce que cela remplace chez vous",
      cardTitle: "Un abonnement, pas trois",
      lines: ["Bouquet câble + décodeur", "Option sport payante", "Streaming séparés"],
    },
  },
});
