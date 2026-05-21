import Link from "next/link";
import Script from "next/script";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { FaqAccordion } from "@/components/FaqAccordion";
import type { BlogPost, BlogBlock } from "@/data/blog";
import type { Locale } from "@/i18n";

type Props = {
  post: BlogPost;
  lang: Locale;
  related: BlogPost[];
};

const t = {
  fr: {
    back: "← Tous les articles",
    cta: "Activer mon abonnement",
    faqTitle: "Questions fréquentes",
    relatedTitle: "À lire aussi",
    by: "par",
    updated: "Mis à jour",
    published: "Publié",
    readMin: "min de lecture",
  },
  en: {
    back: "← All posts",
    cta: "Activate my subscription",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Read next",
    by: "by",
    updated: "Updated",
    published: "Published",
    readMin: "min read",
  },
  de: {
    back: "← Alle Beiträge",
    cta: "Mein Abo aktivieren",
    faqTitle: "Häufige Fragen",
    relatedTitle: "Auch lesen",
    by: "von",
    updated: "Aktualisiert",
    published: "Veröffentlicht",
    readMin: "Min. Lesezeit",
  },
} as const;

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "p":
      return <p className="text-zinc-300 leading-relaxed mt-5">{b.text}</p>;
    case "h2":
      return (
        <h2 className="mt-12 text-2xl md:text-3xl font-display font-bold text-white">
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 text-xl font-display font-semibold text-emerald-300">
          {b.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5 text-zinc-300">
          {b.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed">
              <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-2.5 text-zinc-300 list-decimal list-outside pl-5 marker:text-emerald-400 marker:font-bold">
          {b.items.map((item, i) => (
            <li key={i} className="leading-relaxed pl-2">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="mt-6 border-l-4 border-emerald-400/60 pl-5 italic text-zinc-200">
          {b.text}
        </blockquote>
      );
    case "cta":
      return (
        <div className="mt-8 glass-card rounded-2xl p-6 border-emerald-400/30 bg-emerald-400/5">
          <p className="text-emerald-200 font-semibold">{b.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export function BlogArticle({ post, lang, related }: Props) {
  const tr = t[lang];
  const loc = post.i18n[lang];
  const dateLocale = lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: loc.title,
    description: loc.metaDesc,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: `${siteConfig.url}/${lang}/blog/${post.slug}`,
    inLanguage: lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US",
    keywords: post.keywords.join(", "),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: `${siteConfig.url}/${lang}/blog` },
      { "@type": "ListItem", position: 2, name: loc.title, item: `${siteConfig.url}/${lang}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <article className="container-luxe pt-24 pb-16 max-w-3xl">
        <div className="mb-6">
          <Link
            href={`/${lang}/blog`}
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {tr.back}
          </Link>
        </div>
        <header className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-400/10 border border-emerald-400/20">
            {loc.category}
          </span>
          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl mt-5 text-white text-balance leading-tight">
            {loc.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span>
              {tr.by} <span className="text-zinc-300">{post.author}</span>
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {tr.published}{" "}
              {new Date(post.date).toLocaleDateString(dateLocale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>
              {loc.readMinutes} {tr.readMin}
            </span>
          </div>
        </header>

        <div className="text-lg text-zinc-200 leading-relaxed border-l-2 border-emerald-400/40 pl-5 italic">
          {loc.excerpt}
        </div>

        <div className="mt-2">
          {loc.body.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>

        {loc.faq.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              {tr.faqTitle}
            </h2>
            <div className="mt-6">
              <FaqAccordion items={loc.faq} />
            </div>
          </section>
        )}

        <div className="mt-16 glass-card rounded-3xl p-8 text-center">
          <p className="text-xl font-display font-bold text-white">
            {lang === "fr"
              ? "Prêt à passer à l'IPTV premium ?"
              : lang === "de"
              ? "Bereit für Premium-IPTV?"
              : "Ready to go premium IPTV?"}
          </p>
          <p className="mt-2 text-zinc-300 text-sm">
            {lang === "fr"
              ? "66 000+ chaînes, 4K/8K, activation 5 minutes, garantie 7 jours."
              : lang === "de"
              ? "66.000+ Sender, 4K/8K, Aktivierung 5 Minuten, 7 Tage Garantie."
              : "66,000+ channels, 4K/8K, 5-minute activation, 7-day guarantee."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold gold-glow transition-transform"
            >
              {tr.cta}
            </a>
            <Link
              href={`/${lang}/pricing`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-semibold hover:bg-white/10 transition-colors"
            >
              {lang === "fr" ? "Voir les tarifs" : lang === "de" ? "Preise ansehen" : "View pricing"}
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-luxe pb-24 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            {tr.relatedTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => {
              const rloc = p.i18n[lang];
              return (
                <Link
                  key={p.slug}
                  href={`/${lang}/blog/${p.slug}`}
                  className="glass-card rounded-2xl p-6 hover:border-emerald-400/40 transition-colors group"
                >
                  <p className="text-xs font-bold tracking-wider uppercase text-emerald-300">
                    {rloc.category}
                  </p>
                  <h3 className="mt-3 text-base font-display font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {rloc.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <Script
        id={`ld-article-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id={`ld-faq-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Script
        id={`ld-breadcrumb-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
