import { make } from "./_make.mjs";

await make({
  card: { x: 290, y: 40, w: 292 },
  marker: { x: 130, y: 120, from: [290, 74] },
  grade: { slope: 1.06, intercept: -0.12, sat: 1.05 },
  str: {
    es: {
      title: "Lo que sustituye en tu casa",
      cardTitle: "Una suscripción, no tres",
      lines: ["Paquete del operador + descodificador", "Opciones deportivas de pago", "Servicios de streaming sueltos"],
    },
    en: {
      title: "What it replaces at home",
      cardTitle: "One subscription, not three",
      lines: ["Operator package + box rental", "Paid sport options", "Separate streaming services"],
    },
  },
});
