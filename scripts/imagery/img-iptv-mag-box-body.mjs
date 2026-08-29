import { make } from "./_make.mjs";

await make({
  card: { x: 24, y: 60, w: 320 },
  grade: { slope: 1.2, intercept: -0.1, sat: 1.1 },
  str: {
    de: {
      title: "Wenn das Portal nicht lädt",
      cardTitle: "Drei Ursachen decken fast alles ab",
      lines: ["1  Tippfehler in der Portal-URL", "2  MAC-Adresse stimmt nicht überein", "3  Neustart wurde ausgelassen"],
    },
    en: {
      title: "When the portal will not load",
      cardTitle: "Three causes cover nearly all",
      lines: ["1  A typo in the portal URL", "2  The MAC address does not match", "3  The reboot was skipped"],
    },
    fr: {
      title: "Quand le portail ne charge pas",
      cardTitle: "Trois causes couvrent presque tout",
      lines: ["1  Faute de frappe dans l'URL", "2  L'adresse MAC ne correspond pas", "3  Le redémarrage a été omis"],
    },
  },
});
