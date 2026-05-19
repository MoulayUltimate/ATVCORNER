import { plans, formatPrice } from "@/data/plans";
import { whatsappUrl } from "@/lib/site";
import { CheckIcon } from "./CheckIcon";
import { PROMO_CODE } from "@/lib/promo";
import type { Dictionary } from "@/i18n";

type Props = { dict: Dictionary; lang: string };

export function PricingGrid({ dict, lang }: Props) {
  const pricing = dict.pricing;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {plans.map((p) => {
        const featured = p.highlighted;
        const soldOut = p.outOfStock;
        const durationLabel = pricing.duration[p.id];
        const badgeLabel = pricing.badge[p.id];
        const priceLabel = formatPrice(p, lang);
        return (
          <article
            key={p.id}
            aria-disabled={soldOut || undefined}
            className={`relative flex flex-col rounded-2xl p-7 transition-all duration-500 ${
              soldOut
                ? "glass-card opacity-60 grayscale"
                : featured
                ? "bg-gradient-to-b from-emerald-400/15 via-zinc-900/80 to-zinc-950 border border-emerald-400/40 shadow-2xl shadow-emerald-500/10 lg:scale-105"
                : "glass-card hover:border-white/20 hover:-translate-y-1"
            }`}
          >
            {soldOut && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-zinc-200 text-zinc-900 text-[11px] font-extrabold tracking-widest shadow-lg shadow-black/30">
                {pricing.out_of_stock}
              </span>
            )}
            {featured && !soldOut && (
              <>
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-400 text-zinc-950 text-[11px] font-extrabold tracking-widest shadow-lg shadow-emerald-500/30">
                  {pricing.best_seller}
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/30"
                />
              </>
            )}

            <header className="mb-6">
              <h3
                className={`text-base font-semibold ${
                  featured ? "text-emerald-300" : "text-zinc-300"
                }`}
              >
                {durationLabel}
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span
                  className={`text-5xl font-display font-extrabold tracking-tight ${
                    featured ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {priceLabel}
                </span>
              </div>
              <p
                className={`mt-2 text-[11px] font-bold tracking-[0.2em] uppercase ${
                  featured ? "text-emerald-400/90" : "text-emerald-400/80"
                }`}
              >
                {badgeLabel}
              </p>
              {p.id === "12m" && (
                <p className="mt-2 text-xs text-emerald-400 font-semibold">
                  {pricing.savings_12m}
                </p>
              )}
            </header>

            <ul className="flex-1 space-y-3 mb-7">
              {p.features.map((fk) => (
                <li
                  key={fk}
                  className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                >
                  <CheckIcon className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{pricing.feature[fk]}</span>
                </li>
              ))}
            </ul>

            {soldOut ? (
              <button
                type="button"
                disabled
                aria-disabled
                className="block text-center w-full py-3.5 rounded-full font-semibold bg-white/5 text-zinc-400 border border-white/10 cursor-not-allowed"
              >
                {pricing.out_of_stock}
              </button>
            ) : p.stripeLink ? (
              <div className="space-y-2.5">
                <a
                  href={p.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-3.5 rounded-full font-semibold transition-all ${
                    featured
                      ? "bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 hover:scale-[1.03] shadow-xl shadow-emerald-500/30"
                      : "bg-white text-zinc-950 hover:bg-zinc-100"
                  }`}
                >
                  {lang === "fr"
                    ? "Commencer"
                    : lang === "de"
                    ? "Loslegen"
                    : "Get started"}
                </a>
                <a
                  href={whatsappUrl(
                    `${pricing.cta} — ${durationLabel} (${priceLabel}). Code: ${PROMO_CODE}`,
                    lang,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-2.5 rounded-full text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <svg viewBox="0 0 32 32" fill="#25D366" className="w-4 h-4" aria-hidden>
                      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.4 2.1 7.7L.3 31.7l8.2-2.1A15.5 15.5 0 0 0 16 31.6C24.6 31.6 31.6 24.6 31.6 16 31.6 7.4 24.6.4 16 .4Zm0 28.4a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.7-.3-.5A12.8 12.8 0 1 1 16 28.8Zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1a10.5 10.5 0 0 1-5.2-4.5c-.4-.7.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.7H10c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7s1.6 4.3 1.8 4.6c.2.3 3.2 4.9 7.7 6.8a25.8 25.8 0 0 0 2.6.9c1.1.4 2.1.3 2.9.2.9-.1 2.7-1.1 3.1-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.8-.5Z" />
                    </svg>
                    {lang === "fr"
                      ? "Ou demander sur WhatsApp"
                      : lang === "de"
                      ? "Oder per WhatsApp anfragen"
                      : "Or ask on WhatsApp"}
                  </span>
                </a>
              </div>
            ) : (
              <a
                href={whatsappUrl(
                  `${pricing.cta} — ${durationLabel} (${priceLabel}).`,
                  lang,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-3.5 rounded-full font-semibold transition-all ${
                  featured
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 hover:scale-[1.03] shadow-xl shadow-emerald-500/30"
                    : "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-emerald-400/40"
                }`}
              >
                {pricing.cta}
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}
