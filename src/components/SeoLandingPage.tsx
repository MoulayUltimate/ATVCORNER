import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { CheckIcon } from "@/components/CheckIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { SeoContent, SeoPage } from "@/lib/seo-content";
import { getRelatedPages, relatedHeading } from "@/lib/seo-links";
import type { Locale } from "@/i18n";

const t = {
  fr: {
    keyFacts: "L'essentiel en bref",
    buyNow: "Acheter sur WhatsApp",
    seePlans: "Voir les tarifs",
    ctaTrust: "Activation en 5 minutes · Garantie satisfait ou remboursé 7 jours · Sans engagement",
    ctaLead: "Prêt à commencer ? Vos identifiants arrivent en moins de 5 minutes sur WhatsApp.",
    faqTitle: "Questions fréquentes",
  },
  en: {
    keyFacts: "The essentials",
    buyNow: "Buy on WhatsApp",
    seePlans: "See plans",
    ctaTrust: "Active in 5 minutes · 7-day money-back guarantee · No contract",
    ctaLead: "Ready to start? Your login arrives on WhatsApp in under 5 minutes.",
    faqTitle: "Frequently asked questions",
  },
  de: {
    keyFacts: "Das Wichtigste in Kürze",
    buyNow: "Auf WhatsApp kaufen",
    seePlans: "Preise ansehen",
    ctaTrust: "In 5 Minuten aktiv · 7 Tage Geld-zurück-Garantie · Ohne Vertragsbindung",
    ctaLead: "Bereit loszulegen? Ihre Zugangsdaten kommen in unter 5 Minuten per WhatsApp.",
    faqTitle: "Häufige Fragen",
  },
} as const;

function BuyBand({ lang, label, source }: { lang: Locale; label: string; source: string }) {
  const tr = t[lang];
  return (
    <div className="mt-10 glass-card rounded-2xl p-6 sm:p-7 border-emerald-400/30 bg-emerald-400/5">
      <p className="text-emerald-100 font-semibold leading-relaxed">{tr.ctaLead}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappUrl(undefined, lang)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-source={source}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold gold-glow transition-transform whitespace-nowrap"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden>
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.4 2.1 7.7L.3 31.7l8.2-2.1A15.5 15.5 0 0 0 16 31.6C24.6 31.6 31.6 24.6 31.6 16 31.6 7.4 24.6.4 16 .4Zm0 28.4a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.7-.3-.5A12.8 12.8 0 1 1 16 28.8Z" />
          </svg>
          {label}
        </a>
        <Link
          href={`/${lang}/pricing`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-zinc-200 font-semibold hover:bg-white/10 hover:border-emerald-400/40 transition-colors whitespace-nowrap"
        >
          {tr.seePlans}
        </Link>
      </div>
      <p className="mt-4 text-xs text-zinc-400">{tr.ctaTrust}</p>
    </div>
  );
}

export function SeoLandingPage({
  content,
  lang,
  slug,
}: {
  content: SeoContent;
  lang: Locale;
  slug: string;
}) {
  const tr = t[lang];
  const relatedLinks = getRelatedPages(slug as SeoPage, lang);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Split the prose so the in-body image and the mid-page buy band land inside
  // the reading flow rather than after it.
  const mid = Math.ceil(content.sections.length / 2);
  const first = content.sections.slice(0, mid);
  const rest = content.sections.slice(mid);

  return (
    <>
      <article className="container-luxe pt-8 sm:pt-12 pb-16 max-w-3xl">
        <header className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-400/10 border border-emerald-400/20">
            {content.eyebrow}
          </span>
          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl mt-5 text-white text-balance leading-tight">
            {content.h1}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {content.h1Accent}
            </span>
          </h1>
        </header>

        {content.cover && (
          <figure className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <Image
              src={content.cover}
              alt={`${content.h1} ${content.h1Accent}`}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto"
            />
          </figure>
        )}

        <p className="text-lg text-zinc-200 leading-relaxed border-l-2 border-emerald-400/40 pl-5">
          {content.intro}
        </p>

        <BuyBand lang={lang} label={content.cta} source="seo-hero" />

        {/* Key facts — the old feature grid, folded into the reading flow */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            {tr.keyFacts}
          </h2>
          <ul className="mt-5 space-y-3">
            {content.features.map((f) => (
              <li key={f.h} className="flex gap-3 text-zinc-300 leading-relaxed">
                <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-white">{f.h}</span>
                  {" — "}
                  {f.p}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {first.map((s) => (
          <section key={s.h}>
            <h2 className="mt-12 text-2xl md:text-3xl font-display font-bold text-white">
              {s.h}
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">{s.p}</p>
          </section>
        ))}

        {content.image && (
          <figure className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto"
              />
            </div>
            {content.image.caption && (
              <figcaption className="mt-3 text-center text-xs text-zinc-500">
                {content.image.caption}
              </figcaption>
            )}
          </figure>
        )}

        {rest.map((s) => (
          <section key={s.h}>
            <h2 className="mt-12 text-2xl md:text-3xl font-display font-bold text-white">
              {s.h}
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">{s.p}</p>
          </section>
        ))}

        <BuyBand lang={lang} label={content.cta} source="seo-body" />

        {content.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              {tr.faqTitle}
            </h2>
            <div className="mt-6">
              <FaqAccordion items={content.faq} />
            </div>
          </section>
        )}
      </article>

      {relatedLinks.length > 0 && (
        <section className="container-luxe pb-24 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            {relatedHeading[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedLinks.map((r) => (
              <Link
                key={r.slug}
                href={`/${lang}/${r.slug}`}
                className="glass-card rounded-2xl p-6 hover:border-emerald-400/40 transition-colors group"
              >
                <h3 className="text-base font-display font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {r.label}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{r.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium">
                  {lang === "fr" ? "Découvrir" : lang === "de" ? "Ansehen" : "Read more"}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Script
        id={`ld-faq-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Script
        id={`ld-article-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.metaTitle,
            description: content.metaDesc,
            inLanguage: lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US",
            mainEntityOfPage: `${siteConfig.url}/${lang}/${slug}`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
            },
            ...(content.cover ? { image: `${siteConfig.url}${content.cover}` } : {}),
          }),
        }}
      />
    </>
  );
}
