import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig, whatsappUrl } from "@/lib/site";
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
    title: dict.about_page.meta_title,
    description: dict.about_page.meta_desc,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        "fr-FR": "/fr/about",
        "en-US": "/en/about",
        "de-DE": "/de/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const ap = dict.about_page;

  return (
    <article className="container-luxe py-20 max-w-4xl">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
          {ap.eyebrow}
        </p>
        <h1 className="mt-4 text-display text-4xl sm:text-5xl md:text-6xl text-white">
          {ap.title_a}{" "}
          <span className="text-emerald-400">{ap.title_accent}</span>{" "}
          {ap.title_b}
        </h1>
        <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {ap.intro}
        </p>
      </div>

      <section className="mt-16 glass-card rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
          {ap.story_title}
        </h2>
        <div className="mt-6 space-y-5 text-zinc-300 leading-relaxed">
          <p>{ap.story_p1}</p>
          <p>{ap.story_p2}</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center">
          {ap.values_title}
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ap.values.map((v) => (
            <div
              key={v.h}
              className="glass-card rounded-2xl p-6 hover:border-emerald-400/40 transition-colors"
            >
              <h3 className="text-lg font-display font-bold text-white">
                {v.h}
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {v.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
          {ap.contact_title}
        </h2>
        <p className="mt-4 text-zinc-300 max-w-xl mx-auto leading-relaxed">
          {ap.contact_p}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-semibold hover:bg-white/10 transition-colors"
          >
            {ap.cta_contact}
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-200 font-semibold hover:bg-white/10 transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
    </article>
  );
}
