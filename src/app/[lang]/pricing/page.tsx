import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PricingGrid } from "@/components/PricingGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CheckIcon } from "@/components/CheckIcon";
import { whatsappUrl } from "@/lib/site";
import { getDictionary, hasLocale, locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.pricing_page.meta_title,
    description: dict.pricing_page.meta_desc,
    alternates: {
      canonical: `/${lang}/pricing`,
      languages: {
        "fr-FR": "/fr/pricing",
        "en-US": "/en/pricing",
        "de-DE": "/de/pricing",
      },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const pp = dict.pricing_page;

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
            {pp.hero_badge}
          </span>
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance max-w-3xl mx-auto">
            {pp.hero_title_a}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {pp.hero_title_accent}
            </span>
            {pp.hero_title_b}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {pp.hero_desc}
          </p>
        </div>
      </section>

      <section className="container-luxe -mt-8 pb-12">
        <PricingGrid dict={dict} lang={lang} />

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
            {/* Credit Card */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-300" aria-hidden>
                <rect x="2.5" y="5.5" width="19" height="13" rx="1.8" />
                <path d="M2.5 10h19" />
                <path strokeLinecap="round" d="M6 15h3" />
              </svg>
              <span className="font-semibold text-zinc-200">
                {lang === "fr" ? "Carte bancaire" : lang === "de" ? "Kreditkarte" : "Credit Card"}
              </span>
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

      {/* Comparison row */}
      <section className="container-luxe py-12">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-headline text-3xl sm:text-4xl text-white">
                {pp.compare_title_a}{" "}
                <span className="text-emerald-400">{pp.compare_title_accent}</span>
              </h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                {pp.compare_desc}
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pp.compare_bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-zinc-200">
                    <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <a
                href={whatsappUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold text-lg hover:scale-[1.02] transition-transform shadow-2xl shadow-emerald-500/30"
              >
                {pp.compare_cta}
                <span className="block mt-1 font-normal text-xs opacity-70">
                  {pp.compare_cta_sub}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20">
        <SectionHeading
          eyebrow={pp.faq_eyebrow}
          title={pp.faq_title}
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FaqAccordion items={dict.faq.items} />
        </div>
      </section>
    </>
  );
}
