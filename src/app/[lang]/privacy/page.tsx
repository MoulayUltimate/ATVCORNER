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
    title: dict.legal.privacy.meta_title,
    description: dict.legal.privacy.meta_desc,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        "fr-FR": "/fr/privacy",
        "en-US": "/en/privacy",
        "de-DE": "/de/privacy",
      },
    },
  };
}

const dateLocale: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  de: "de-DE",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const lp = dict.legal.privacy;

  return (
    <article className="container-luxe py-20 max-w-3xl prose-luxe">
      <h1 className="text-display text-4xl sm:text-5xl text-white">
        {lp.title}
      </h1>
      <p className="mt-4 text-zinc-400">
        {dict.legal.last_updated} {new Date().toLocaleDateString(dateLocale[lang])}.
      </p>

      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        {lp.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-display font-bold text-white">{s.h}</h2>
            <p className="mt-3">{s.p}</p>
          </section>
        ))}
        <section>
          <h2 className="text-2xl font-display font-bold text-white">{lp.contact_h}</h2>
          <p className="mt-3">
            {lp.contact_p}{" "}
            <a className="text-emerald-400 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
