import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: dict.legal.refund.meta_title,
    description: dict.legal.refund.meta_desc,
    alternates: {
      canonical: `/${lang}/refund`,
      languages: {
        "fr-FR": "/fr/refund",
        "en-US": "/en/refund",
        "de-DE": "/de/refund",
      },
    },
  };
}

export default async function RefundPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const lr = dict.legal.refund;

  return (
    <article className="container-luxe py-20 max-w-3xl">
      <h1 className="text-display text-4xl sm:text-5xl text-white">
        {lr.title}
      </h1>
      <p className="mt-4 text-zinc-400">
        {lr.intro}
      </p>
      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        {lr.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-2xl font-display font-bold text-white">{s.h}</h2>
            <p className="mt-3">{s.p}</p>
          </section>
        ))}
      </div>
      <a
        href={whatsappUrl(undefined, lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-500 text-white font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-emerald-500/25"
      >
        {lr.cta}
      </a>
    </article>
  );
}
