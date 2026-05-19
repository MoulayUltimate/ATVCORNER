import Image from "next/image";
import { whatsappReviews } from "@/data/channels";

// Auto-scrolling horizontal marquee of WhatsApp screenshots.
// Duplicated track for a seamless loop, paused on hover.
export function WhatsAppMarquee() {
  const track = [...whatsappReviews, ...whatsappReviews];
  return (
    <div
      className="relative mt-12 overflow-hidden"
      // Edge fade so screenshots dissolve into the background instead of cutting hard.
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
  );
}
