/**
 * DESCRIPTIVE in-body image for "IPTV ruckelt?" — the four fastest fixes.
 * Base: Unsplash uWaRsN-CqY0 (network cabling). Left third is dark → card sits there.
 *   node scripts/imagery/img-iptv-ruckelt-steps.mjs <photo> <out.png> <de|en|fr|es|it>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr|es|it>"); process.exit(1); }

const STR = {
  de: {
    title: "Buffering beheben: 4 schnelle Schritte",
    cardTitle: "In dieser Reihenfolge prüfen",
    lines: ["1  Bandbreite am Gerät messen", "2  LAN-Kabel statt WLAN testen", "3  Auf 5-GHz-Band wechseln", "4  Dekoder auf Software umstellen"],
    pill: "Meist in Minuten gelöst",
  },
  en: {
    title: "Fixing buffering — the four fastest steps",
    cardTitle: "Check in this order",
    lines: ["1  Measure bandwidth at the device", "2  Try ethernet instead of Wi-Fi", "3  Switch to the 5 GHz band", "4  Set the decoder to software"],
    pill: "Usually solved in minutes",
  },
  fr: {
    title: "Corriger le buffering : 4 étapes rapides",
    cardTitle: "À vérifier dans cet ordre",
    lines: ["1  Mesurer le débit sur l'appareil", "2  Tester le câble au lieu du Wi-Fi", "3  Passer sur la bande 5 GHz", "4  Décodage en mode logiciel"],
    pill: "Réglé en quelques minutes",
  },
  es: {
    title: "Cortes de IPTV: los 4 pasos rápidos",
    cardTitle: "Comprueba en este orden",
    lines: ["1  Mide el ancho de banda en el aparato", "2  Prueba cable en lugar de wifi", "3  Pasa a la banda de 5 GHz", "4  Pon la decodificación en software"],
    pill: "Suele resolverse en minutos",
  },
  it: {
    title: "Blocchi IPTV: i 4 passi rapidi",
    cardTitle: "Verifica in quest'ordine",
    lines: ["1  Misura la banda sull'apparecchio", "2  Prova il cavo invece del wifi", "3  Passa alla banda 5 GHz", "4  Imposta la decodifica su software"],
    pill: "Di solito si risolve in minuti",
  },
}[locale];

const W = 1820, H = 1024;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + card({ x: 24, y: 96, w: 336, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) })
  + pill(452, 300, STR.pill),
);

const defs = `<defs>${gradeFilter({ slope: 1.1, intercept: -0.16, sat: 0.9 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
