import { testimonials } from "@/data/testimonials";
import type { Dictionary } from "@/i18n";

type Props = { dict: Dictionary; lang: string };

const TRUSTPILOT_GREEN = "#00B67A";

function StarBox({ size = 22 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size, background: TRUSTPILOT_GREEN }}
      aria-hidden
    >
      <svg viewBox="0 0 20 20" width={size * 0.78} height={size * 0.78} fill="#fff">
        <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.71l-5.18 2.73.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
      </svg>
    </span>
  );
}

function StarRow({ count = 5, size = 22 }: { count?: number; size?: number }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarBox key={i} size={size} />
      ))}
    </div>
  );
}

function timeAgo(days: number, lang: string) {
  if (lang === "fr") return days === 1 ? "il y a 1 jour" : `il y a ${days} jours`;
  if (lang === "de") return days === 1 ? "vor 1 Tag" : `vor ${days} Tagen`;
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

function verifiedLabel(lang: string) {
  if (lang === "fr") return "Achat vérifié";
  if (lang === "de") return "Verifizierter Kauf";
  return "Verified purchase";
}

function excellentLabel(lang: string) {
  if (lang === "fr") return "Excellent";
  if (lang === "de") return "Hervorragend";
  return "Excellent";
}

function basedOnLabel(lang: string, count: string) {
  if (lang === "fr") return `Basé sur ${count} avis`;
  if (lang === "de") return `Basierend auf ${count} Bewertungen`;
  return `Based on ${count} reviews`;
}

export function TrustpilotReviews({ dict, lang }: Props) {
  const quotes = dict.reviews.quotes;

  return (
    <div className="mt-12">
      {/* Trust score banner */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-extrabold text-white">4.9</span>
          <span className="text-zinc-500">/ 5</span>
        </div>
        <StarRow size={26} />
        <div className="flex flex-col leading-tight">
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: TRUSTPILOT_GREEN }}
          >
            {excellentLabel(lang)}
          </span>
          <span className="text-xs text-zinc-400">
            {basedOnLabel(lang, "2,847")}
          </span>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {testimonials.map((t, i) => {
          const quote = quotes[i] ?? "";
          return (
            <article
              key={t.id}
              className="rounded-xl bg-white p-5 flex flex-col gap-3 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <StarRow size={20} />
              <p className="text-[15px] leading-snug font-semibold text-zinc-900 flex-1">
                {quote}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: TRUSTPILOT_GREEN }}
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div className="flex flex-col leading-tight min-w-0">
                    <span className="text-sm font-semibold text-zinc-900 truncate">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-zinc-500 truncate">
                      <span className="mr-1" aria-hidden>{t.flag}</span>
                      {t.country}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-zinc-400 shrink-0 ml-2">
                  {timeAgo(t.daysAgo, lang)}
                </span>
              </div>
              <div
                className="inline-flex items-center gap-1 text-[11px] font-semibold"
                style={{ color: TRUSTPILOT_GREEN }}
              >
                <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor" aria-hidden>
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z" />
                </svg>
                {verifiedLabel(lang)}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
