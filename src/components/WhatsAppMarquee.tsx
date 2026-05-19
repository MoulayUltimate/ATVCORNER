import Image from "next/image";
import { whatsappReviews } from "@/data/channels";

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

function excellentLabel(lang: string) {
  if (lang === "fr") return "Excellent";
  if (lang === "de") return "Hervorragend";
  return "Excellent";
}

function basedOnLabel(lang: string) {
  if (lang === "fr") return "Basé sur 2 847 avis";
  if (lang === "de") return "Basierend auf 2.847 Bewertungen";
  return "Based on 2,847 reviews";
}

type Props = { lang: string };

// Trustpilot-style rating banner + auto-scrolling WhatsApp screenshot marquee.
export function WhatsAppMarquee({ lang }: Props) {
  const track = [...whatsappReviews, ...whatsappReviews];
  return (
    <div className="mt-12">
      {/* Trustpilot rating banner */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-extrabold text-white">4.9</span>
          <span className="text-zinc-500">/ 5</span>
        </div>
        <div className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarBox key={i} size={26} />
          ))}
        </div>
        <div className="flex flex-col leading-tight">
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: TRUSTPILOT_GREEN }}
          >
            {excellentLabel(lang)}
          </span>
          <span className="text-xs text-zinc-400">{basedOnLabel(lang)}</span>
        </div>
      </div>

      {/* Auto-scrolling WhatsApp screenshots */}
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-5 wa-marquee-track w-max">
          {track.map((r, i) => (
            <div
              key={`${r.id}-${i}`}
              className="relative shrink-0 w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg shadow-black/30"
            >
              <Image
                src={r.image}
                alt="WhatsApp customer conversation"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
