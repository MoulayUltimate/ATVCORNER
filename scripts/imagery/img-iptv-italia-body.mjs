import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [290, 74] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    it: {
      title: "Cosa sostituisce a casa tua",
      cardTitle: "Un abbonamento, non tre",
      lines: ["Pacchetto operatore + decoder", "Opzioni sport a pagamento", "Servizi di streaming separati"],
    },
    en: {
      title: "What it replaces at home",
      cardTitle: "One subscription, not three",
      lines: ["Operator package + box rental", "Paid sport options", "Separate streaming services"],
    },
  },
});
