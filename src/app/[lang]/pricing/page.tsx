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

      <section className="container-luxe -mt-8 pb-20">
        <PricingGrid dict={dict} />
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
                href={whatsappUrl()}
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
