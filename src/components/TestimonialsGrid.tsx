import { testimonials } from "@/data/testimonials";
import type { Dictionary } from "@/i18n";

type Props = { dict: Dictionary };

export function TestimonialsGrid({ dict }: Props) {
  const quotes = dict.reviews.quotes;
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {testimonials.map((t, i) => {
        const quote = quotes[i] ?? "";
        return (
          <figure
            key={t.id}
            className="glass-card rounded-2xl p-5 flex flex-col gap-3 hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center gap-0.5 text-emerald-400" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                  <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.71l-5.18 2.73.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[15px] leading-relaxed text-zinc-200 flex-1">
              “{quote}”
            </blockquote>
            <figcaption className="flex items-center gap-2 text-sm">
              <span className="text-lg leading-none" aria-hidden>
                {t.flag}
              </span>
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">{t.country}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
