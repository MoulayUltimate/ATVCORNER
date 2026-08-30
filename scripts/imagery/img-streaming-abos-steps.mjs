// DESCRIPTIVE — the four-step cleanup. Base: jpqyfK7GB4w (stacking coins; stacks at y280-330).
import { make } from "./_make.mjs";
await make({
  card: { x: 24, y: 40, w: 344 },
  pill: null,
  grade: { slope: 1.04, intercept: -0.12, sat: 1.02 },
  str: {
    de: { title: "Vom Stapel zu einer Rechnung", cardTitle: "Aufräumen in 4 Schritten",
      lines: ["1  Kontoauszug: was zahle ich wirklich?", "2  Nach Nutzung sortieren", "3  Ungenutzte sofort kündigen", "4  Rest auf einen Zugang bündeln"] },
    en: { title: "From a stack to a single bill", cardTitle: "Cleaning up in 4 steps",
      lines: ["1  Statement: what do I really pay?", "2  Sort by actual usage", "3  Cancel the unused immediately", "4  Consolidate the rest onto one"] },
    fr: { title: "De la pile à une seule facture", cardTitle: "Le tri en 4 étapes",
      lines: ["1  Relevé : combien je paie vraiment ?", "2  Trier selon l'usage réel", "3  Résilier les inutilisés", "4  Regrouper le reste sur un accès"] },
    es: {
      title: "De la pila a una sola factura",
      cardTitle: "La limpieza en 4 pasos",
      lines: ["1  Extracto: ¿cuánto pago de verdad?", "2  Ordenar según el uso real", "3  Cancelar lo que no se usa", "4  Reunir el resto en un acceso"],
    },
    it: {
      title: "Dalla pila a un'unica bolletta",
      cardTitle: "La pulizia in 4 passi",
      lines: ["1  Estratto: quanto pago davvero?", "2  Ordinare secondo l'uso reale", "3  Disdire ciò che non si usa", "4  Riunire il resto in un accesso"],
    },
  },
});
