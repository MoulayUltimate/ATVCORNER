import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories, sportsHighlights, vodHighlights } from "@/data/channels";
import { SectionHeading } from "@/components/SectionHeading";
import { LeagueCard } from "@/components/LeagueCard";
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
    title: dict.channels_page.meta_title,
    description: dict.channels_page.meta_desc,
    alternates: {
      canonical: `/${lang}/channels`,
      languages: {
        "fr-FR": "/fr/channels",
        "en-US": "/en/channels",
        "de-DE": "/de/channels",
      },
    },
  };
}

const localeNumber: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  de: "de-DE",
};

export default async function ChannelsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const cp = dict.channels_page;

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
              {cp.hero_badge}
            </span>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance">
              {cp.hero_title_a}{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                {cp.hero_title_accent}
              </span>{" "}
              {cp.hero_title_b}
            </h1>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-xl">
              {cp.hero_desc_a}{" "}
              <strong className="text-white">{cp.hero_desc_strong}</strong>{" "}
              {cp.hero_desc_b}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-emerald-500/25"
              >
                {cp.hero_cta_order}
              </a>
              <a
                href={whatsappUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all"
              >
                {cp.hero_cta_trial}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-emerald-400/10 rounded-[40px] blur-3xl" aria-hidden />
            <div className="relative glass-card rounded-[28px] p-4 sm:p-6 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/stitch/brand/devices-hero.png"
                  alt="ATV Corner"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 0 1 18 0M6 12a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0M12 12v.01" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-display font-extrabold text-white">+66,000</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">{cp.stat_live}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-luxe py-20">
        <SectionHeading
          eyebrow={cp.cat_eyebrow}
          title={
            <>
              {cp.cat_title_a} <span className="text-emerald-400">{cp.cat_title_accent}</span>
              {cp.cat_title_b}
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group relative overflow-hidden rounded-2xl glass-card p-7 hover:-translate-y-1 hover:border-emerald-400/30 transition-all duration-500"
            >
              <span
                aria-hidden
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-400/10 blur-3xl"
              />
              <div className="relative">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400/80">
                  {c.count.toLocaleString(localeNumber[lang])}+
                </p>
                <h3 className="text-2xl font-display font-bold text-white mt-2">{c.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.highlights.map((h) => (
                    <li
                      key={h}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPORTS */}
      <section className="py-20 bg-[#0a0c10]">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={cp.sports_eyebrow}
            title={
              <>
                {cp.sports_title_a}{" "}
                <span className="text-emerald-400">{cp.sports_title_accent}</span>
              </>
            }
            description={cp.sports_desc}
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sportsHighlights.map((s) => (
              <LeagueCard key={s.league} league={s.league} country={s.country} />
            ))}
          </div>
        </div>
      </section>

      {/* VOD */}
      <section className="container-luxe py-20">
        <SectionHeading
          eyebrow={cp.vod_eyebrow}
          title={
            <>
              <span className="text-emerald-400">{cp.vod_title_accent}</span> {cp.vod_title_b}
            </>
          }
          description={cp.vod_desc}
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {vodHighlights.map((v) => (
            <article
              key={v.title}
              className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900"
            >
              {v.poster && (
                <Image
                  src={v.poster}
                  alt={v.title}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="self-start px-2 py-0.5 rounded bg-emerald-400 text-zinc-950 text-[10px] font-extrabold tracking-widest mb-2">
                  {v.tag}
                </span>
                <h3 className="text-white font-display font-bold text-lg leading-snug">{v.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">{v.category}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/pricing`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-emerald-500/25"
          >
            {cp.see_pricing} →
          </Link>
        </div>
      </section>
    </>
  );
}
