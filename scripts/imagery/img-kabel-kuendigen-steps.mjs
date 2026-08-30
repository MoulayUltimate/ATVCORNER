/**
 * DESCRIPTIVE in-body image for "Kabel kündigen" — the four-step sequence.
 * Base: Unsplash VzDWL6A2uYw (person doing admin on a laptop at home).
 * Subject occupies x 280-460; card sits top-left over the plain wall.
 *   node scripts/imagery/img-kabel-kuendigen-steps.mjs <photo> <out.png> <de|en|fr|es|it>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr|es|it>"); process.exit(1); }

const STR = {
  de: {
    title: "Umstieg in 4 Schritten",
    cardTitle: "Reihenfolge entscheidet",
    lines: ["1  IPTV parallel starten (5 Min)", "2  1–2 Wochen doppelt schauen", "3  Frist prüfen, schriftlich kündigen", "4  Receiver erst danach zurück"],
    pill: "Keine Lücke",
  },
  en: {
    title: "Switching in 4 steps",
    cardTitle: "The order is what matters",
    lines: ["1  Start IPTV in parallel (5 min)", "2  Watch both for 1–2 weeks", "3  Check notice, cancel in writing", "4  Return the box only after that"],
    pill: "No gap",
  },
  fr: {
    title: "Le changement en 4 étapes",
    cardTitle: "L'ordre fait tout",
    lines: ["1  Lancer l'IPTV en parallèle (5 min)", "2  Regarder les deux 1–2 semaines", "3  Vérifier le préavis, résilier par écrit", "4  Rendre le décodeur ensuite"],
    pill: "Aucune coupure",
  },
  es: {
    title: "El cambio en 4 pasos",
    cardTitle: "Lo que importa es el orden",
    lines: ["1  Activa el IPTV en paralelo (5 min)", "2  Ve ambos 1-2 semanas", "3  Revisa el preaviso y cancela", "4  Devuelve el equipo después"],
    pill: "Sin hueco",
  },
  it: {
    title: "Il cambio in 4 passi",
    cardTitle: "Ciò che conta è l'ordine",
    lines: ["1  Avvia l'IPTV in parallelo (5 min)", "2  Guarda entrambi 1-2 settimane", "3  Verifica il preavviso e disdici", "4  Restituisci l'apparecchio dopo"],
    pill: "Nessun vuoto",
  },
}[locale];

const W = 1820, H = 1024;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + card({ x: 24, y: 176, w: 348, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) })
  + pill(468, 60, STR.pill),
);

const defs = `<defs>${gradeFilter({ slope: 1.05, intercept: -0.14, sat: 1.0 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
