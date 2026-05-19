import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { HeroMockup } from "@/components/HeroMockup";
import { plans, currencyForLocale, priceFor } from "@/data/plans";
import { vodHighlights, sportsHighlights } from "@/data/channels";
import { TrustpilotReviews } from "@/components/TrustpilotReviews";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { PricingGrid } from "@/components/PricingGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { LeagueCard } from "@/components/LeagueCard";
import { DeviceBrandIcon } from "@/components/DeviceBrandIcon";
import { broadcasters } from "@/components/BroadcasterLogos";
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
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold hover:bg-emerald-300 transition-colors"
              >
                {dict.hero.cta_primary}
              </a>
              <a
                href={whatsappUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-medium hover:border-white/30 hover:bg-white/5 transition-colors"
              >
                <svg viewBox="0 0 32 32" fill="#25D366" className="w-5 h-5" aria-hidden>
                  <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.4 2.1 7.7L.3 31.7l8.2-2.1A15.5 15.5 0 0 0 16 31.6C24.6 31.6 31.6 24.6 31.6 16 31.6 7.4 24.6.4 16 .4Zm0 28.4a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.7-.3-.5A12.8 12.8 0 1 1 16 28.8Zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1a10.5 10.5 0 0 1-5.2-4.5c-.4-.7.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.7H10c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7s1.6 4.3 1.8 4.6c.2.3 3.2 4.9 7.7 6.8a25.8 25.8 0 0 0 2.6.9c1.1.4 2.1.3 2.9.2.9-.1 2.7-1.1 3.1-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.8-.5Z" />
                </svg>
                {lang === "fr" ? "Discuter sur WhatsApp" : lang === "de" ? "Auf WhatsApp chatten" : "Chat on WhatsApp"}
              </a>
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

        {/* Social-proof badges (rating + customers + secure) */}
        <div className="container-luxe pb-2 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200">
              <svg viewBox="0 0 24 24" fill="#FBBF24" className="w-4 h-4" aria-hidden>
                <path d="M12 2 14.9 8.6 22 9.3l-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" />
              </svg>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-zinc-400">
                {lang === "fr"
                  ? "· 2 800+ avis clients"
                  : lang === "de"
                  ? "· 2.800+ Kundenbewertungen"
                  : "· 2,800+ customer reviews"}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-400" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 10v-2a4 4 0 0 0-3-3.87M15 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="font-bold text-white">12 000+</span>
              <span className="text-zinc-400">
                {lang === "fr"
                  ? "abonnés actifs"
                  : lang === "de"
                  ? "aktive Abonnenten"
                  : "active subscribers"}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-400" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
              </svg>
              <span className="font-semibold text-white">
                {lang === "fr"
                  ? "Garantie 7 jours"
                  : lang === "de"
                  ? "7 Tage Geld zurück"
                  : "7-day money-back"}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-400" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
              </svg>
              <span className="font-semibold text-white">
                {lang === "fr"
                  ? "Activation en 5 min"
                  : lang === "de"
                  ? "Aktivierung in 5 Min."
                  : "Activated in 5 min"}
              </span>
            </span>
          </div>
        </div>

        {/* Trust strip */}
        <div className="container-luxe pb-12 border-t border-white/5 pt-10 mt-4">
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

      {/* WATCH YOUR TEAM — broadcaster strip */}
      <section className="py-20 md:py-24 border-t border-white/5 relative overflow-hidden">
        <span
          aria-hidden
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl"
        />
        <div className="container-luxe relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-3 inline-flex items-center gap-2">
              <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
              {lang === "fr"
                ? "Match en direct · Tous les week-ends"
                : lang === "de"
                ? "Live-Spiele · Jedes Wochenende"
                : "Live matches · Every weekend"}
              <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
            </p>
            <h2 className="text-headline text-3xl sm:text-4xl md:text-5xl text-white text-balance">
              {lang === "fr" ? (
                <>
                  Regardez votre <span className="text-emerald-400">équipe préférée</span> jouer en direct.
                </>
              ) : lang === "de" ? (
                <>
                  Schauen Sie Ihre <span className="text-emerald-400">Lieblingsmannschaft</span> live spielen.
                </>
              ) : (
                <>
                  Watch your <span className="text-emerald-400">favorite team</span> play live.
                </>
              )}
            </h2>
            <p className="mt-5 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {lang === "fr"
                ? "PSG, Marseille, Lyon, Bayern, Dortmund, Red Bull Salzbourg, Real Madrid, Barça, Manchester… Chaque match du week-end, en direct et en 4K, sur les chaînes officielles des plus grands diffuseurs européens."
                : lang === "de"
                ? "Bayern, Dortmund, RB Leipzig, RB Salzburg, Real Madrid, Barça, PSG, Manchester… Jedes Wochenendspiel live in 4K, über die offiziellen Sender der größten europäischen Sportkanäle."
                : "Bayern, Dortmund, Real Madrid, Barça, PSG, Manchester City, Arsenal, Red Bull Salzburg, AC Milan… Every weekend fixture live in 4K, through the official feeds of Europe's biggest sports broadcasters."}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {broadcasters.map(({ name, region, Component }) => (
              <div
                key={name}
                className="glass-card rounded-2xl p-4 flex flex-col items-center text-center hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <Component className="w-full h-16" />
                <p className="mt-3 text-xs text-zinc-500 leading-snug">{region}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-zinc-500 max-w-2xl mx-auto">
            {lang === "fr"
              ? "Sky, DAZN, beIN, Canal+, RMC, TNT, Sport1, ServusTV, ORF, Eurosport — toutes les chaînes officielles des ligues majeures, en HD, 4K et 8K."
              : lang === "de"
              ? "Sky, DAZN, beIN, Canal+, RMC, TNT, Sport1, ServusTV, ORF, Eurosport — alle offiziellen Sender der großen Ligen, in HD, 4K und 8K."
              : "Sky, DAZN, beIN, Canal+, RMC, TNT, Sport1, ServusTV, ORF, Eurosport — every official channel of the major leagues, in HD, 4K and 8K."}
          </p>
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
      <section id="pricing" className="container-luxe py-20 md:py-24 border-t border-white/5 scroll-mt-24">
        <SectionHeading
          eyebrow={dict.pricing.eyebrow}
          title={<>{dict.pricing.title}</>}
          description={dict.pricing.desc}
        />
        <div className="mt-12">
          <PricingGrid dict={dict} lang={lang} />
        </div>

        {/* Trust line under plans */}
        <div className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
            </svg>
            <span>
              {lang === "fr"
                ? "Tous les abonnements incluent une garantie satisfait ou remboursé sous 7 jours."
                : lang === "de"
                ? "Alle Abos enthalten eine 7-tägige Geld-zurück-Garantie."
                : "All plans include a 7-day money-back guarantee."}
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-zinc-400">
            <span className="text-zinc-500">
              {lang === "fr"
                ? "Paiement sécurisé via"
                : lang === "de"
                ? "Sichere Zahlung über"
                : "Secure payment via"}
            </span>

            {/* PayPal */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0070BA]" aria-hidden>
                <path d="M7.5 21h-3a.5.5 0 0 1-.5-.6L6.4 3.6A.7.7 0 0 1 7.1 3h6.5c3.1 0 5.3 1.7 5 4.7-.4 3.8-3.2 5.7-7 5.7H9.5l-.9 5.9a.7.7 0 0 1-.7.7H7.5Z" />
                <path opacity="0.6" d="M16.7 8.6c-.4 3.4-3 5.1-6.5 5.1H8.7l-1 6.6h2.8c.3 0 .6-.2.6-.5l.7-4.5h1.7c3.4 0 5.9-1.7 6.3-4.9.2-1.4-.4-2.6-1.4-3.3-.1.4-.3 1.1-.7 1.5Z" />
              </svg>
              <span className="font-semibold text-zinc-200">PayPal</span>
            </span>

            {/* Stripe */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#635BFF]" aria-hidden>
                <path d="M11.2 9.3c0-.7.6-1 1.5-1 1.3 0 3 .4 4.3 1.1V5.5C15.6 4.9 14.2 4.7 12.7 4.7c-3.6 0-6 1.9-6 5 0 4.9 6.7 4.1 6.7 6.2 0 .8-.7 1-1.6 1-1.4 0-3.3-.6-4.8-1.4v3.9c1.6.7 3.3 1 4.8 1 3.7 0 6.2-1.8 6.2-5 0-5.3-6.8-4.3-6.8-6.1Z" />
              </svg>
              <span className="font-semibold text-zinc-200">Stripe</span>
            </span>

            {/* Klarna */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#FFA8CD" />
                <path d="M7 6.5h2.4v11H7v-11Zm9.3 0c0 2.1-.8 4.1-2.1 5.7l3 5.3h-2.8L11.9 13c-.3-.4-.3-1 0-1.5 1-1.4 1.6-3.1 1.6-5h2.8Z" fill="#0B0B0B" />
              </svg>
              <span className="font-semibold text-zinc-200">Klarna</span>
            </span>

            {/* Apple Pay */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white" aria-hidden>
                <path d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.2v-.5ZM14.5 6.4c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 2 0 2.5-1.2Z" />
              </svg>
              <span className="font-semibold text-zinc-200">Apple Pay</span>
            </span>

            {/* Crypto */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F7931A]" aria-hidden>
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 9.1c.7-.5 1-1.3.9-2.2-.2-1.3-1.3-1.8-2.7-1.9V5.4h-1.2v1.5h-1V5.4h-1.2v1.6H8.5v1.2h.9c.4 0 .5.1.5.5v4.5c0 .4-.1.5-.5.5h-.9v1.3h1.8v1.6h1.2v-1.6h1v1.6h1.2v-1.6c1.7-.1 3-.7 3.2-2.2.1-1-.3-1.7-1.4-2.1Zm-3.8-2.8h.4c1 0 1.9.2 1.9 1.1 0 .9-.9 1.1-1.9 1.1h-.4V8.3Zm.6 5.3h-.6v-2.3h.6c1.2 0 2.2.2 2.2 1.2s-1 1.1-2.2 1.1Z" />
              </svg>
              <span className="font-semibold text-zinc-200">Crypto</span>
            </span>
          </div>
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
                  <DeviceBrandIcon kind={d.name} className="w-6 h-6" />
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

      {/* CUSTOMER REVIEWS — Trustpilot-style */}
      <section className="container-luxe py-20 md:py-24">
        <SectionHeading
          eyebrow={dict.reviews.eyebrow}
          title={<>{dict.reviews.title}</>}
          description={dict.reviews.desc}
        />
        <TrustpilotReviews dict={dict} lang={lang} />
        <div className="mt-10 text-center">
          <a
            href={whatsappUrl(undefined, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
          >
            {dict.reviews.cta} <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* SAFE & LEGAL — reassurance band (especially for DE traffic) */}
      <section className="container-luxe py-20 md:py-24 border-t border-white/5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-400 mb-3 inline-flex items-center gap-2">
                <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
                {lang === "fr"
                  ? "Sécurité & Confiance"
                  : lang === "de"
                  ? "Sicherheit & Vertrauen"
                  : "Security & Trust"}
              </p>
              <h2 className="text-headline text-3xl sm:text-4xl text-white text-balance">
                {lang === "fr" ? (
                  <>
                    Service <span className="text-emerald-400">privé et sécurisé</span>, du paiement au visionnage.
                  </>
                ) : lang === "de" ? (
                  <>
                    <span className="text-emerald-400">Privater & sicherer</span> Service — vom Bezahlen bis zum Anschauen.
                  </>
                ) : (
                  <>
                    A <span className="text-emerald-400">private & secure</span> service — from checkout to streaming.
                  </>
                )}
              </h2>
              <p className="mt-5 text-zinc-400 leading-relaxed">
                {lang === "fr"
                  ? "Aucune installation invasive, aucun partage de données. Vous recevez vos identifiants par WhatsApp et regardez sur vos applications habituelles."
                  : lang === "de"
                  ? "Keine invasive Installation, keine Weitergabe Ihrer Daten. Sie erhalten Ihre Zugangsdaten per WhatsApp und schauen über Ihre gewohnten Apps."
                  : "No invasive install, no data sharing. You get your credentials via WhatsApp and watch through your usual apps."}
              </p>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  t:
                    lang === "fr"
                      ? "Paiement protégé"
                      : lang === "de"
                      ? "Geschützte Zahlung"
                      : "Protected payment",
                  d:
                    lang === "fr"
                      ? "PayPal, carte bancaire, crypto — tous nos paiements transitent par des opérateurs régulés."
                      : lang === "de"
                      ? "PayPal, Kreditkarte, Krypto — alle Zahlungen laufen über regulierte Anbieter."
                      : "PayPal, credit card, crypto — every payment goes through regulated processors.",
                },
                {
                  t:
                    lang === "fr"
                      ? "Garantie 7 jours"
                      : lang === "de"
                      ? "7-Tage Geld-zurück-Garantie"
                      : "7-day money-back guarantee",
                  d:
                    lang === "fr"
                      ? "Pas satisfait ? Remboursement intégral sous 7 jours, sans question."
                      : lang === "de"
                      ? "Nicht zufrieden? Vollständige Rückerstattung innerhalb von 7 Tagen, ohne Fragen."
                      : "Not happy? Full refund within 7 days — no questions asked.",
                },
                {
                  t:
                    lang === "fr"
                      ? "Connexion chiffrée"
                      : lang === "de"
                      ? "Verschlüsselte Verbindung"
                      : "Encrypted connection",
                  d:
                    lang === "fr"
                      ? "Le flux est délivré en HTTPS et reste invisible pour les tiers."
                      : lang === "de"
                      ? "Der Stream läuft über HTTPS und bleibt für Dritte unsichtbar."
                      : "Stream delivered over HTTPS, invisible to third parties.",
                },
                {
                  t:
                    lang === "fr"
                      ? "Aucune donnée personnelle vendue"
                      : lang === "de"
                      ? "Keine Weitergabe Ihrer Daten"
                      : "We never sell your data",
                  d:
                    lang === "fr"
                      ? "Nous ne stockons que l'essentiel et ne partageons rien avec des tiers commerciaux."
                      : lang === "de"
                      ? "Wir speichern nur das Nötigste und geben nichts an Werbenetzwerke weiter."
                      : "We store only what's necessary and share nothing with advertisers.",
                },
                {
                  t:
                    lang === "fr"
                      ? "Support humain 7j/7"
                      : lang === "de"
                      ? "Echter Support 7 Tage/Woche"
                      : "Real human support 7 days/week",
                  d:
                    lang === "fr"
                      ? "Une équipe basée en Europe, réponse en moins de 5 minutes sur WhatsApp."
                      : lang === "de"
                      ? "Ein Team mit Sitz in Europa, Antwort in weniger als 5 Minuten per WhatsApp."
                      : "European-based team, replies in under 5 minutes on WhatsApp.",
                },
                {
                  t:
                    lang === "fr"
                      ? "Annulation à tout moment"
                      : lang === "de"
                      ? "Jederzeit kündbar"
                      : "Cancel anytime",
                  d:
                    lang === "fr"
                      ? "Pas d'engagement, pas de reconduction tacite. Vous décidez."
                      : lang === "de"
                      ? "Keine Bindung, keine automatische Verlängerung. Sie entscheiden."
                      : "No commitment, no auto-renewal. You stay in control.",
                },
              ].map((it) => (
                <li
                  key={it.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-emerald-400/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/20">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-emerald-400" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{it.t}</p>
                      <p className="mt-1 text-zinc-400 text-sm leading-relaxed">{it.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
              href={whatsappUrl(undefined, lang)}
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
            offers: plans.map((p) => {
              const currency = currencyForLocale(lang);
              return {
                "@type": "Offer",
                name: dict.pricing.duration[p.id],
                price: priceFor(p, currency),
                priceCurrency: currency,
                availability: "https://schema.org/InStock",
                url: `${siteConfig.url}/${lang}/pricing#${p.id}`,
              };
            }),
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
