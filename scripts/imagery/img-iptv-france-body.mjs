import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [290, 74] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    fr: {
      title: "Ce que cela remplace chez vous",
      cardTitle: "Un abonnement, pas trois",
      lines: ["Bouquet opérateur + box", "Options sport payantes", "Services streaming séparés"],
    },
    de: {
      title: "Was es bei Ihnen ersetzt",
      cardTitle: "Ein Abo statt drei",
      lines: ["Anbieter-Paket + Box-Miete", "Kostenpflichtige Sportoptionen", "Einzelne Streamingdienste"],
    },
    en: {
      title: "What it replaces at home",
      cardTitle: "One subscription, not three",
      lines: ["Operator package + box rental", "Paid sport options", "Separate streaming services"],
    },
  },
});
