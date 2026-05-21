import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n";

type Props = {
  posts: BlogPost[];
  lang: Locale;
};

const t = {
  fr: {
    eyebrow: "Blog · Guides IPTV",
    title: "Le blog",
    titleAccent: "ATV Corner",
    intro:
      "Guides experts, comparatifs, tutoriels d'installation et conseils pour tirer le meilleur de votre abonnement IPTV.",
    readMin: "min de lecture",
    readMore: "Lire l'article",
  },
  en: {
    eyebrow: "Blog · IPTV Guides",
    title: "The",
    titleAccent: "ATV Corner blog",
    intro:
      "Expert guides, comparisons, setup tutorials and tips to get the most out of your IPTV subscription.",
    readMin: "min read",
    readMore: "Read article",
  },
  de: {
    eyebrow: "Blog · IPTV-Guides",
    title: "Der",
    titleAccent: "ATV-Corner-Blog",
    intro:
      "Experten-Guides, Vergleiche, Einrichtungs-Tutorials und Tipps für das Beste aus Ihrem IPTV-Abo.",
    readMin: "Min. Lesezeit",
    readMore: "Artikel lesen",
  },
} as const;

export function BlogIndex({ posts, lang }: Props) {
  const tr = t[lang];
  const dateLocale = lang === "fr" ? "fr-FR" : lang === "de" ? "de-DE" : "en-US";

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
            {tr.eyebrow}
          </span>
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance max-w-3xl mx-auto">
            {tr.title}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {tr.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {tr.intro}
          </p>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const loc = post.i18n[lang];
            return (
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="group glass-card rounded-2xl p-7 hover:border-emerald-400/40 transition-colors flex flex-col"
              >
                <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-400/10 border border-emerald-400/20">
                  {loc.category}
                </span>
                <h2 className="mt-4 text-xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {loc.title}
                </h2>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-1">
                  {loc.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(dateLocale, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>
                    {loc.readMinutes} {tr.readMin}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
