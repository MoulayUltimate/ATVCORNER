import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: dict.legal.terms.meta_title,
    description: dict.legal.terms.meta_desc,
    alternates: {
      canonical: `/${lang}/terms`,
      languages: {
        "fr-FR": "/fr/terms",
        "en-US": "/en/terms",
        "de-DE": "/de/terms",
      },
    },
  };
}

const dateLocale: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  de: "de-DE",
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const lt = dict.legal.terms;

  return (
    <article className="container-luxe py-20 max-w-3xl">
      <h1 className="text-display text-4xl sm:text-5xl text-white">
        {lt.title}
      </h1>
      <p className="mt-4 text-zinc-400">
        {dict.legal.last_updated} {new Date().toLocaleDateString(dateLocale[lang])}.
      </p>
      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        {lt.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-display font-bold text-white">{s.h}</h2>
            <p className="mt-3">{s.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
