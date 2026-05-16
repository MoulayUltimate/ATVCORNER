import { plans, formatPrice } from "@/data/plans";
import { whatsappUrl } from "@/lib/site";
import { CheckIcon } from "./CheckIcon";
import type { Dictionary } from "@/i18n";

type Props = { dict: Dictionary; lang: string };

export function PricingGrid({ dict, lang }: Props) {
  const pricing = dict.pricing;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {plans.map((p) => {
        const featured = p.highlighted;
        const durationLabel = pricing.duration[p.id];
        const badgeLabel = pricing.badge[p.id];
        const priceLabel = formatPrice(p, lang);
        return (
          <article
            key={p.id}
            className={`relative flex flex-col rounded-2xl p-7 transition-all duration-500 ${
              featured
                ? "bg-gradient-to-b from-emerald-400/15 via-zinc-900/80 to-zinc-950 border border-emerald-400/40 shadow-2xl shadow-emerald-500/10 lg:scale-105"
                : "glass-card hover:border-white/20 hover:-translate-y-1"
            }`}
          >
            {featured && (
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

            <a
              href={whatsappUrl(
                `${pricing.cta} — ${durationLabel} (${priceLabel}).`,
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
          </article>
        );
      })}
    </div>
  );
}
