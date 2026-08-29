/**
 * Shared composer for the batch-2 article images. Each caller passes a spec:
 *   { W,H, card:{x,y,w}, pill:{x,y}|null, marker:{x,y,from:[x,y]}|null, grade:{}, str:{de,en,fr} }
 * Coordinates are authored in 600-wide space, read off grid.mjs.
 */
import {
  AUTHOR_W, scaled, titleBar, card, pill, leader, marker, gradeFilter, embed, render,
} from "./lib/compose.mjs";

export async function make(spec) {
  const [photo, out, locale = "de"] = process.argv.slice(2);
  if (!photo || !out) { console.error("usage: <photo> <out.png> <de|en|fr>"); process.exit(1); }
  const S = spec.str[locale];
  const { W = 1820, H = 1024 } = spec;

  let body = titleBar(S.title, { opacity: 0.9 });
  if (spec.marker) {
    body += leader(spec.marker.from[0], spec.marker.from[1], spec.marker.x, spec.marker.y);
    body += marker(1, spec.marker.x, spec.marker.y);
  }
  if (spec.pill && S.pill) body += pill(spec.pill.x, spec.pill.y, S.pill);
  if (S.cardTitle) {
    // The render() audit checks TEXT fit, not the card rectangle — a card placed
    // too low is silently clipped by the canvas edge. Catch it here.
    const pad = 18, size = 12.5;
    const cardH = pad + 12 + 26 + (size + 5) * ((S.lines || []).length) + pad - 4;
    const canvasH = (H * 600) / W;
    if (spec.card.y + cardH > canvasH) {
      throw new Error(
        `card overflows canvas: y=${spec.card.y} + h=${cardH.toFixed(1)} = ` +
        `${(spec.card.y + cardH).toFixed(1)} > ${canvasH.toFixed(1)} (${locale}). Move the card up.`,
      );
    }
    body += card({
      x: spec.card.x, y: spec.card.y, w: spec.card.w,
      title: S.cardTitle,
      lines: (S.lines || []).map((text) => ({ text })),
    });
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`
    + `<defs>${gradeFilter(spec.grade || {})}</defs>`
    + `<image x="0" y="0" width="${W}" height="${H}" filter="url(#grade)" href="${await embed(photo)}" preserveAspectRatio="xMidYMid slice"/>`
    + scaled(W, body)
    + `</svg>`;

  await render({ svg, w: W, h: H, out });
  console.log(`  wrote ${out} (${locale}, canvas ${AUTHOR_W})`);
}
