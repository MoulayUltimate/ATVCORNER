/**
 * MAIN / cover for "Kabel kündigen & zu IPTV wechseln".
 * Base: Unsplash PR-YSolYqUI (satellite dish on a tiled roof, wide open sky).
 * Dish sits at ~x 460, y 280 in 600-space — the thing you get to leave behind.
 *   node scripts/imagery/img-kabel-kuendigen-main.mjs <photo> <out.png> <de|en|fr|es|it>
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, marker, gradeFilter, embed, render,
} from "./lib/compose.mjs";

const [photo, out, locale = "de"] = process.argv.slice(2);
if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr|es|it>"); process.exit(1); }

const STR = {
  de: {
    title: "Kabel kündigen, ohne einen Tag ohne TV",
    pill: "Kann weg",
    cardTitle: "40–100 €/Monat → ab 5 €/Monat",
    lines: ["Erst IPTV parallel testen, dann kündigen —", "so entsteht keine Lücke dazwischen."],
  },
  en: {
    title: "Cancel cable without losing a day of TV",
    pill: "This can go",
    cardTitle: "$45–110/mo → from $5/mo",
    lines: ["Test IPTV in parallel first, then cancel —", "that way no gap opens up."],
  },
  fr: {
    title: "Résilier le câble sans un jour sans TV",
    pill: "Peut disparaître",
    cardTitle: "40–100 €/mois → dès 5 €/mois",
    lines: ["Testez l'IPTV en parallèle, puis résiliez —", "aucune coupure entre les deux."],
  },
  es: {
    title: "Deja el cable sin perder un día de TV",
    pill: "Esto puede irse",
    cardTitle: "40-80 €/mes → desde 5 €/mes",
    lines: ["Prueba el IPTV en paralelo y después cancela —", "así no se abre ningún hueco."],
  },
  it: {
    title: "Lascia il cavo senza perdere un giorno di TV",
    pill: "Questo può sparire",
    cardTitle: "40-80 €/mese → da 5 €/mese",
    lines: ["Prova l'IPTV in parallelo e poi disdici —", "così non si apre alcun vuoto."],
  },
}[locale];

const W = 1820, H = 1024;
const DISH_X = 462, DISH_Y = 278;

const layer = scaled(W,
  titleBar(STR.title, { opacity: 0.9 })
  + leader(452, 212, DISH_X, DISH_Y - 8)
  + marker(1, DISH_X, DISH_Y - 8)
  + pill(430, 200, STR.pill)
  + card({ x: 26, y: 64, w: 344, title: STR.cardTitle, lines: STR.lines.map((text) => ({ text })) }),
);

const defs = `<defs>${gradeFilter({ slope: 1.1, intercept: -0.04, sat: 1.05 })}</defs>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
  + defs
  + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
  + layer
  + `</svg>`;

await render({ svg, w: W, h: H, out });
console.log(`  wrote ${out} (${locale}, author canvas ${AUTHOR_W} wide)`);
