import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
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
    title: dict.dmca_page.meta_title,
    description: dict.dmca_page.meta_desc,
    alternates: {
      canonical: `/${lang}/dmca`,
      languages: {
        "fr-FR": "/fr/dmca",
        "en-US": "/en/dmca",
        "de-DE": "/de/dmca",
      },
    },
  };
}

const dateLocale: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  de: "de-DE",
};

export default async function DmcaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const dp = dict.dmca_page;

  return (
    <article className="container-luxe py-20 max-w-3xl prose-luxe">
      <h1 className="text-display text-4xl sm:text-5xl text-white">
        {dp.title}
      </h1>
      <p className="mt-4 text-zinc-400">
        {dict.legal.last_updated}{" "}
        {new Date().toLocaleDateString(dateLocale[lang])}.
      </p>

      <p className="mt-8 text-zinc-300 leading-relaxed">{dp.intro}</p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        {dp.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-display font-bold text-white">
              {s.h}
            </h2>
            <p className="mt-3 whitespace-pre-line">{s.p}</p>
          </section>
        ))}
        <section className="glass-card rounded-2xl p-6 mt-8">
          <p className="text-sm text-zinc-400">
            <span className="block text-white font-semibold mb-2">
              {siteConfig.name}
            </span>
            <a
              className="text-emerald-400 hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
