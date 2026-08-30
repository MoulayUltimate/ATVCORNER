import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 40, w: 300 },
  pill: { x: 450, y: 300 },
  grade: { slope: 1.14, intercept: -0.12, sat: 1.0 },
  str: {
    de: {
      title: "Ist IPTV legal? Die kurze Antwort",
      pill: "Technik: ja",
      cardTitle: "Die Technik ist unstrittig",
      lines: ["Entscheidend ist der Anbieter,", "nicht der Übertragungsweg."],
    },
    en: {
      title: "Is IPTV legal? The short answer",
      pill: "Technology: yes",
      cardTitle: "The technology is not in question",
      lines: ["What matters is the provider,", "not the delivery method."],
    },
    fr: {
      title: "L'IPTV est-elle légale ? En bref",
      pill: "Technologie : oui",
      cardTitle: "La technologie n'est pas en cause",
      lines: ["Ce qui compte est le fournisseur,", "pas le mode de diffusion."],
    },
    es: {
      title: "¿Es legal el IPTV? En breve",
      pill: "Tecnología: sí",
      cardTitle: "La tecnología no está en duda",
      lines: ["Lo que cuenta es el proveedor,", "no el modo de difusión."],
    },
    it: {
      title: "L'IPTV è legale? In breve",
      pill: "Tecnologia: sì",
      cardTitle: "La tecnologia non è in discussione",
      lines: ["Ciò che conta è il fornitore,", "non il modo di diffusione."],
    },
  },
});
