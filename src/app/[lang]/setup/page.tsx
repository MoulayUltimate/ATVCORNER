import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { devices } from "@/data/devices";
import { SectionHeading } from "@/components/SectionHeading";
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
    title: dict.setup_page.meta_title,
    description: dict.setup_page.meta_desc,
    alternates: {
      canonical: `/${lang}/setup`,
      languages: {
        "fr-FR": "/fr/setup",
        "en-US": "/en/setup",
        "de-DE": "/de/setup",
      },
    },
  };
}

const iconMap: Record<string, string> = {
  tv: "tv",
  cast: "fire",
  smartphone: "smartphone",
  phone_iphone: "apple",
  router: "router",
  laptop: "laptop",
};

function DeviceIcon({ icon }: { icon: string }) {
  const k = iconMap[icon] ?? "tv";
  // Use neutral SVG glyphs (no emoji) so all locales look consistent
  const paths: Record<string, React.ReactNode> = {
    tv: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18v12H3zM8 21h8M12 17v4" />,
    fire: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 1-5 1 2 3 3 3-4Z" />,
    smartphone: <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10v18H7zM11 18h2" />,
    apple: <path strokeLinecap="round" strokeLinejoin="round" d="M16 13c0-3 2-4 2-4-1-2-3-2-4-2-2 0-2 1-3 1s-2-1-3-1-3 1-3 4c0 4 3 9 5 9 1 0 2-1 3-1s2 1 3 1 3-3 3-5c-2-1-3-1-3-2Z" />,
    router: <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h16v6H4zM7 17h.01M11 17h.01M8 13a4 4 0 1 1 8 0M5 13a7 7 0 1 1 14 0" />,
    laptop: <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14v10H5zM3 19h18" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7" aria-hidden>
      {paths[k]}
    </svg>
  );
}

export default async function SetupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const sp = dict.setup_page;

  return (
    <>
      <section className="hero-gradient">
        <div className="container-luxe py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/30">
            {sp.hero_badge}
          </span>
          <h1 className="text-display text-5xl sm:text-6xl md:text-7xl mt-6 text-white text-balance max-w-3xl mx-auto">
            {sp.hero_title_a}<span className="text-emerald-400">{sp.hero_title_accent}</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {sp.hero_desc}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-500 text-white font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-emerald-500/25"
            >
              {sp.hero_cta_help}
            </a>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all"
            >
              {sp.hero_cta_pick} ↓
            </a>
          </div>
        </div>
      </section>

      <section id="guides" className="container-luxe py-20">
        <SectionHeading
          eyebrow={sp.pick_eyebrow}
          title={
            <>
              {sp.pick_title_a} <span className="text-emerald-400">{sp.pick_title_accent}</span>
            </>
          }
          description={sp.pick_desc}
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {devices.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="group glass-card rounded-2xl p-5 sm:p-6 text-center hover:border-emerald-400/40 hover:-translate-y-1 transition-all flex flex-col items-center"
            >
              <span className="text-emerald-400">
                <DeviceIcon icon={d.icon} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white leading-tight">
                {d.name}
              </h3>
            </a>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-20 space-y-6">
        {devices.map((d) => (
          <article
            key={d.id}
            id={d.id}
            className="glass-card rounded-3xl p-7 sm:p-10 scroll-mt-24"
          >
            <header className="flex items-center gap-5 mb-7">
              <span className="w-14 h-14 rounded-2xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center shrink-0">
                <DeviceIcon icon={d.icon} />
              </span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-emerald-400/80">
                  {sp.official_guide}
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {d.name}
                </h2>
              </div>
            </header>
            <ol className="space-y-4">
              {d.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-zinc-950 font-display font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-zinc-200 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section className="container-luxe pb-20">
        <div className="relative overflow-hidden rounded-3xl glass-card border border-emerald-400/30 px-8 sm:px-14 py-14 sm:py-16 text-center">
          <span
            aria-hidden
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div className="relative">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4">
              {sp.remote_eyebrow}
            </p>
            <h2 className="text-display text-3xl sm:text-5xl text-white max-w-2xl mx-auto text-balance">
              {sp.remote_title_a}{" "}
              <span className="text-emerald-400">{sp.remote_title_accent}</span>.
            </h2>
            <p className="mt-4 text-zinc-300 max-w-xl mx-auto">
              {sp.remote_desc}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:scale-[1.03] transition-transform shadow-2xl shadow-emerald-500/30"
            >
              {sp.remote_cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
