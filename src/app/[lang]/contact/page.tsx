import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { whatsappUrl, siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
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
    title: dict.contact_page.meta_title,
    description: dict.contact_page.meta_desc,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        "fr-FR": "/fr/contact",
        "en-US": "/en/contact",
        "de-DE": "/de/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const cp = dict.contact_page;

  const channels = [
    {
      name: "WhatsApp",
      desc: cp.ch_whatsapp_desc,
      cta: cp.ch_whatsapp_cta,
      href: whatsappUrl(),
      accent: "from-emerald-400 to-emerald-600",
    },
    {
      name: "E-mail",
      desc: siteConfig.email,
      cta: cp.ch_email_cta,
      href: `mailto:${siteConfig.email}`,
      accent: "from-emerald-400 to-emerald-600",
    },
    {
      name: "Telegram",
      desc: cp.ch_telegram_desc,
      cta: cp.ch_telegram_cta,
      href: siteConfig.social.telegram,
      accent: "from-sky-400 to-blue-600",
    },
  ];

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
            {cp.hero_badge}
          </span>
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance max-w-3xl mx-auto">
            {cp.hero_title_a} <span className="text-emerald-400">{cp.hero_title_accent}</span> {cp.hero_title_b}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {cp.hero_desc}
          </p>
        </div>
      </section>

      <section className="container-luxe py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-8 hover:-translate-y-1 hover:border-emerald-400/30 transition-all flex flex-col"
            >
              <h3 className="text-2xl font-display font-bold text-white">
                {c.name}
              </h3>
              <p className="mt-2 text-zinc-400 flex-1">{c.desc}</p>
              <span
                className={`mt-6 inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full bg-gradient-to-r ${c.accent} text-zinc-950 font-semibold text-sm group-hover:scale-105 transition-transform`}
              >
                {c.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-luxe py-20">
        <SectionHeading
          eyebrow={cp.faq_eyebrow}
          title={
            <>
              {cp.faq_title_a}{" "}
              <span className="text-emerald-400">{cp.faq_title_accent}</span>{" "}
              {cp.faq_title_b}
            </>
          }
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cp.faq_items.map((f) => (
            <div key={f.q} className="glass-card rounded-2xl p-7">
              <h3 className="text-lg font-display font-bold text-white">
                {f.q}
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
