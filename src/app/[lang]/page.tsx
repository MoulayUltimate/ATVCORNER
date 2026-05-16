import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { HeroMockup } from "@/components/HeroMockup";
import { plans } from "@/data/plans";
import { vodHighlights, sportsHighlights, whatsappReviews } from "@/data/channels";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { PricingGrid } from "@/components/PricingGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { LeagueCard } from "@/components/LeagueCard";
import { getDictionary, hasLocale } from "@/i18n";

const benefitIcons = {
  uhd: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm6 14h6"
    />
  ),
  no_buffer: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m13 3-8 11h6l-1 7 8-11h-6l1-7Z"
    />
  ),
  support: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M21 12a9 9 0 1 0-17.5 3M3 12v4a2 2 0 0 0 2 2h2v-6H5a2 2 0 0 0-2 0Zm18 0v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 0Z"
    />
  ),
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const benefitKeys: (keyof typeof benefitIcons)[] = ["uhd", "no_buffer", "support"];

  const deviceIcons: Record<string, React.ReactNode> = {
    "Smart TV": (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v12H3zM8 21h8M12 17v4" />
    ),
    "Fire Stick": (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 1-5 1 2 3 3 3-4Z" />
    ),
    Android: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10v18H7zM11 18h2" />
    ),
    iOS: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8v18H8zM11 18h2M9 6h6" />
    ),
    "Windows / Mac": (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H4zM2 20h20M9 16v4M15 16v4" />
    ),
    "MAG Box": (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16v10H4zM7 11h.01M7 14h6" />
    ),
  };

  const steps = [
    { n: "01", title: dict.how.step1_title, text: dict.how.step1_text },
    { n: "02", title: dict.how.step2_title, text: dict.how.step2_text },
    { n: "03", title: dict.how.step3_title, text: dict.how.step3_text },
  ];

  const stats = [
    { v: "66K+", l: dict.stats.channels },
    { v: "70K+", l: dict.stats.vod },
    { v: "4K / 8K", l: dict.stats.quality },
    { v: "5 min", l: dict.stats.activation },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,211,102,0.10),transparent_60%)]"
        />
        <div className="container-luxe pt-16 pb-20 md:pt-24 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-400 flex items-center gap-2">
              <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
              {dict.hero.eyebrow}
            </p>

            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-5 text-white text-balance">
              {dict.hero.title_a} <span className="text-emerald-400">{dict.hero.title_accent}</span> {dict.hero.title_b}
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
              {dict.hero.desc}{" "}
              <span className="text-white font-semibold">{dict.hero.from_price}</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 transition-colors"
              >
                {dict.hero.cta_primary}
              </a>
              <Link
                href={`/${lang}/pricing`}
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/15 text-white font-medium hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                {dict.hero.cta_secondary}
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-300">
              {benefitKeys.map((k) => (
                <li key={k} className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 text-emerald-400"
                    aria-hidden
                  >
                    {benefitIcons[k]}
                  </svg>
                  <span>{dict.hero.benefits[k]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-5">
            <HeroMockup />
          </div>
        </div>

        {/* Trust strip */}
        <div className="container-luxe pb-12 border-t border-white/5 pt-10">
          <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-500 mb-6">
            {dict.hero.trust_strip}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-zinc-500">
            {[
              "Netflix",
              "Prime Video",
              "Disney+",
              "Apple TV+",
              "HBO Max",
              "Paramount+",
              "Hulu",
              "Canal+",
            ].map((l) => (
              <span
                key={l}
                className="font-display font-semibold text-base sm:text-lg hover:text-zinc-200 transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS */}
      <section className="py-20 md:py-24 border-t border-white/5">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={dict.sports.eyebrow}
            title={<>{dict.sports.title}</>}
            description={dict.sports.desc}
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sportsHighlights.map((s) => (
              <LeagueCard key={s.league} league={s.league} country={s.country} />
            ))}
          </div>
        </div>
      </section>

      {/* VOD */}
      <section className="py-20 md:py-24 overflow-hidden border-t border-white/5">
        <div className="container-luxe flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-3 flex items-center gap-2">
              <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
              {dict.vod.eyebrow}
            </p>
            <h2 className="text-headline text-3xl sm:text-4xl md:text-5xl text-white">
              {dict.vod.title}
            </h2>
          </div>
          <Link
            href={`/${lang}/channels`}
            className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-medium hover:gap-2.5 transition-all"
          >
            {dict.vod.see_all} <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="relative">
          <div className="flex gap-4 animate-marquee w-max">
            {[...vodHighlights, ...vodHighlights].map((v, i) => (
              <article
                key={i}
                className="w-[200px] sm:w-[240px] aspect-[2/3] relative rounded-xl overflow-hidden border border-white/10 group shrink-0 bg-zinc-900"
              >
                {v.poster && (
                  <Image
                    src={v.poster}
                    alt={v.title}
                    fill
                    sizes="240px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-white font-display font-semibold text-base leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">{v.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="container-luxe py-20 md:py-24 border-t border-white/5">
        <SectionHeading
          eyebrow={dict.pricing.eyebrow}
          title={<>{dict.pricing.title}</>}
          description={dict.pricing.desc}
        />
        <div className="mt-12">
          <PricingGrid dict={dict} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 border-t border-white/5">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={dict.how.eyebrow}
            title={<>{dict.how.title}</>}
          />
          <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <p className="font-display font-extrabold text-5xl text-emerald-400/70">
                  {s.n}
                </p>
                <h3 className="mt-4 text-xl font-display font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICES */}
      <section className="py-20 md:py-24 border-t border-white/5">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={dict.devices.eyebrow}
            title={<>{dict.devices.title}</>}
            description={dict.devices.desc}
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {dict.devices.items.map((d) => (
              <div
                key={d.name}
                className="glass-card rounded-2xl p-6 text-center hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="w-6 h-6"
                    aria-hidden
                  >
                    {deviceIcons[d.name]}
                  </svg>
                </span>
                <h3 className="text-sm font-display font-bold text-white">
                  {d.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 leading-snug">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="container-luxe py-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((s) => (
            <div key={s.l} className="px-4 text-center first:pl-0 last:pr-0">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {s.v}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP REVIEWS — screenshots only */}
      <section className="container-luxe py-20 md:py-24">
        <SectionHeading
          eyebrow={dict.reviews.eyebrow}
          title={<>{dict.reviews.title}</>}
          description={dict.reviews.desc}
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {whatsappReviews.map((r) => (
            <div
              key={r.id}
              className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-emerald-400/40 transition-colors"
            >
              <Image
                src={r.image}
                alt={`${siteConfig.name} — WhatsApp`}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
          >
            {dict.reviews.cta} <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-luxe py-20 md:py-24 border-t border-white/5">
        <SectionHeading
          eyebrow={dict.faq.eyebrow}
          title={dict.faq.title}
          description={dict.faq.desc}
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FaqAccordion items={dict.faq.items} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 sm:px-14 py-14 sm:py-20 text-center">
          <h2 className="text-display text-3xl sm:text-4xl md:text-5xl text-white text-balance max-w-2xl mx-auto">
            {dict.cta.title}
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            {dict.cta.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 transition-colors"
            >
              {dict.cta.primary}
            </a>
            <Link
              href={`/${lang}/pricing`}
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/15 text-white font-medium hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              {dict.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: dict.faq.items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Script
        id="ld-products"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${siteConfig.name} Premium Streaming`,
            description: siteConfig.shortDesc,
            brand: { "@type": "Brand", name: siteConfig.name },
            offers: plans.map((p) => ({
              "@type": "Offer",
              name: dict.pricing.duration[p.id],
              price: p.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/${lang}/pricing#${p.id}`,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "12483",
            },
          }),
        }}
      />
    </>
  );
}
