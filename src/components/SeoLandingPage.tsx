import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import { CheckIcon } from "@/components/CheckIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { SeoContent, SeoPage } from "@/lib/seo-content";
import { getRelatedPages, relatedHeading } from "@/lib/seo-links";
import { BuyBand } from "@/components/BuyBand";
import type { Locale } from "@/i18n";
import { pick } from "@/i18n/pick";

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
  es: {
    keyFacts: "Lo esencial",
    buyNow: "Comprar por WhatsApp",
    seePlans: "Ver precios",
    ctaTrust: "Activo en 5 minutos · Garantía de devolución de 7 días · Sin permanencia",
    ctaLead: "¿Listo para empezar? Tus credenciales llegan por WhatsApp en menos de 5 minutos.",
    faqTitle: "Preguntas frecuentes",
  },
  it: {
    keyFacts: "L'essenziale",
    buyNow: "Acquista su WhatsApp",
    seePlans: "Vedi i prezzi",
    ctaTrust: "Attivo in 5 minuti · Garanzia di rimborso di 7 giorni · Senza vincoli",
    ctaLead: "Pronto a iniziare? Le credenziali arrivano su WhatsApp in meno di 5 minuti.",
    faqTitle: "Domande frequenti",
  },
};

export function SeoLandingPage({
  content,
  lang,
  slug,
}: {
  content: SeoContent;
  lang: Locale;
  slug: string;
}) {
  const tr = pick(t, lang);
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
            {pick(relatedHeading, lang)}
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
                  {lang === "fr" ? "Découvrir" : lang === "de" ? "Ansehen" : lang === "es" ? "Descubrir" : lang === "it" ? "Scopri" : "Read more"}
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
            inLanguage:
              lang === "fr"
                ? "fr-FR"
                : lang === "de"
                  ? "de-DE"
                  : lang === "es"
                    ? "es-ES"
                    : lang === "it"
                      ? "it-IT"
                      : "en-US",
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
