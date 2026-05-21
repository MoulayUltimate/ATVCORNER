import Link from "next/link";
import type { SeoExtras } from "@/data/tools/seoExtras";
import type { Locale } from "@/i18n";

type LabelMap = {
  related: string;
  broadcasters: string;
  byDevice: string;
  faqExtra: string;
  th: { provider: string; coverage: string; price: string; note: string };
};

const LABELS: Record<Locale, LabelMap> = {
  fr: {
    related: "À voir aussi",
    broadcasters: "Diffuseurs et alternatives",
    byDevice: "Par appareil",
    faqExtra: "Plus de questions",
    th: { provider: "Diffuseur", coverage: "Couverture", price: "Prix", note: "Particularité" },
  },
  en: {
    related: "Related guides",
    broadcasters: "Broadcasters and alternatives",
    byDevice: "By device",
    faqExtra: "More questions",
    th: { provider: "Broadcaster", coverage: "Coverage", price: "Price", note: "Note" },
  },
  de: {
    related: "Verwandte Seiten",
    broadcasters: "Sender und Alternativen",
    byDevice: "Pro Ger\u00e4t",
    faqExtra: "Weitere Fragen",
    th: { provider: "Sender", coverage: "Abdeckung", price: "Preis", note: "Besonderheit" },
  },
};

export function SeoSections({
  lang,
  extras,
  langPrefix = `/${"fr"}`,
}: {
  lang: Locale;
  extras: SeoExtras;
  langPrefix?: string;
}) {
  const labels = LABELS[lang];

  return (
    <>
      {extras.intro && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-4xl">
            <p className="text-zinc-300 leading-relaxed text-lg">{extras.intro}</p>
          </div>
        </section>
      )}

      {extras.sections.length > 0 && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-4xl space-y-8">
            {extras.sections.map((s, i) => (
              <article key={i}>
                <h2 className="text-2xl font-bold mb-3">{s.h2}</h2>
                <p className="text-zinc-300 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {extras.broadcasters && extras.broadcasters.length > 0 && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-5xl">
            <h2 className="text-2xl font-bold mb-6">{labels.broadcasters}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-400 border-b border-white/10">
                    <th className="py-3 pr-4 font-semibold">{labels.th.provider}</th>
                    <th className="py-3 pr-4 font-semibold">{labels.th.coverage}</th>
                    <th className="py-3 pr-4 font-semibold">{labels.th.price}</th>
                    <th className="py-3 pr-4 font-semibold">{labels.th.note}</th>
                  </tr>
                </thead>
                <tbody>
                  {extras.broadcasters.map((b) => (
                    <tr key={b.name} className="border-b border-white/5">
                      <td className="py-3 pr-4 font-bold text-white">{b.name}</td>
                      <td className="py-3 pr-4 text-zinc-300">{b.coverage}</td>
                      <td className="py-3 pr-4 text-zinc-300">{b.price}</td>
                      <td className="py-3 pr-4 text-zinc-400">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {extras.byDevice && extras.byDevice.length > 0 && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-5xl">
            <h2 className="text-2xl font-bold mb-6">{labels.byDevice}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extras.byDevice.map((d) => (
                <div key={d.device} className="glass-card p-5 rounded-xl">
                  <h3 className="text-sm font-bold text-emerald-300 mb-2">{d.device}</h3>
                  <p className="text-sm text-zinc-300">{d.how}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {extras.extraFaq.length > 0 && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">{labels.faqExtra}</h2>
            <div className="space-y-3">
              {extras.extraFaq.map((f, i) => (
                <details key={i} className="glass-card rounded-xl p-5">
                  <summary className="font-semibold cursor-pointer">{f.q}</summary>
                  <p className="mt-3 text-zinc-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {extras.related.length > 0 && (
        <section className="py-10 border-t border-white/5">
          <div className="container-luxe max-w-5xl">
            <h2 className="text-2xl font-bold mb-6">{labels.related}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {extras.related.map((r) => (
                <Link
                  key={r.href}
                  href={`${langPrefix}${r.href}`}
                  className="glass-card p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <span className="text-zinc-200">{r.label}</span>
                  <span className="text-emerald-400">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
