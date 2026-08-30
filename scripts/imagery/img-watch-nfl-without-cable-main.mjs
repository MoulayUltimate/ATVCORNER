import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 314 },
  pill: { x: 452, y: 300 },
  grade: { slope: 1.06, intercept: -0.08, sat: 1.08 },
  str: {
    en: {
      title: "Watch the NFL without cable",
      pill: "No single service",
      cardTitle: "No one package has every game",
      lines: ["Rights split across national, out-of-market", "and weeknight deals — plan before you pay."],
    },
    de: {
      title: "NFL ohne Kabelanschluss schauen",
      pill: "Kein Dienst allein",
      cardTitle: "Kein Paket hat alle Spiele",
      lines: ["Rechte verteilt auf national, auswärts", "und Wochentage — vorher planen."],
    },
    fr: {
      title: "Regarder la NFL sans câble",
      pill: "Aucun service seul",
      cardTitle: "Aucun pack n'a tous les matchs",
      lines: ["Droits répartis : national, hors marché", "et semaine — planifiez avant de payer."],
    },
    es: {
      title: "Ver la NFL sin cable",
      pill: "Ningún servicio solo",
      cardTitle: "Ningún paquete los tiene todos",
      lines: ["Derechos repartidos entre nacional, fuera de", "zona y noches entre semana — planifica antes."],
    },
    it: {
      title: "Guardare la NFL senza cavo",
      pill: "Nessun servizio da solo",
      cardTitle: "Nessun pacchetto li ha tutti",
      lines: ["Diritti divisi tra nazionale, fuori zona", "e serate infrasettimanali — pianifica prima."],
    },
  },
});
