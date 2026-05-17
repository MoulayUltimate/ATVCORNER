import Link from "next/link";
import Script from "next/script";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { CheckIcon } from "@/components/CheckIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { SeoContent } from "@/lib/seo-content";
import type { Locale } from "@/i18n";

export function SeoLandingPage({
  content,
  lang,
  slug,
}: {
  content: SeoContent;
  lang: Locale;
  slug: string;
}) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
            {content.eyebrow}
          </span>
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance max-w-3xl mx-auto">
            {content.h1}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {content.h1Accent}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {content.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold gold-glow transition-transform"
            >
              {content.cta}
            </a>
            <Link
              href={`/${lang}/pricing`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-semibold hover:bg-white/10 transition-colors"
            >
              {lang === "fr" ? "Voir les tarifs" : lang === "de" ? "Preise ansehen" : "View pricing"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.features.map((f) => (
            <div
              key={f.h}
              className="glass-card rounded-2xl p-6 hover:border-emerald-400/40 transition-colors"
            >
              <CheckIcon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-4 text-lg font-display font-bold text-white">
                {f.h}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {f.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          {content.sections.map((s) => (
            <article key={s.h} className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                {s.h}
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed">{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            FAQ
          </p>
          <h2 className="mt-4 text-center text-3xl md:text-4xl font-display font-bold text-white">
            {lang === "fr"
              ? "Questions fréquentes"
              : lang === "de"
              ? "Häufige Fragen"
              : "Frequently asked questions"}
          </h2>
          <div className="mt-10">
            <FaqAccordion items={content.faq} />
          </div>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="glass-card rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            {lang === "fr"
              ? "Prêt à commencer ?"
              : lang === "de"
              ? "Bereit loszulegen?"
              : "Ready to start?"}
          </h2>
          <p className="mt-3 text-zinc-300 max-w-xl mx-auto">
            {lang === "fr"
              ? "Test gratuit 24h sur simple demande WhatsApp. Activation immédiate après paiement."
              : lang === "de"
              ? "Kostenloser 24h-Test auf einfache WhatsApp-Anfrage. Sofortige Aktivierung nach Zahlung."
              : "Free 24h trial on simple WhatsApp request. Instant activation after payment."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold gold-glow transition-transform"
            >
              {content.cta}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-semibold hover:bg-white/10 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <Script
        id={`ld-faq-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
