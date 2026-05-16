import Link from "next/link";
import { getDictionary, defaultLocale } from "@/i18n";

export default function NotFound() {
  // not-found.tsx renders without route params, so we fall back to the default locale.
  const dict = getDictionary(defaultLocale);
  const nf = dict.not_found;
  return (
    <section className="container-luxe min-h-[70vh] flex flex-col items-center justify-center text-center py-24">
      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400">
        {nf.eyebrow}
      </p>
      <h1 className="text-display text-6xl sm:text-7xl mt-4 text-white">
        {nf.title_a} <span className="text-emerald-400">{nf.title_accent}</span>
      </h1>
      <p className="mt-5 max-w-md text-zinc-400">
        {nf.desc}
      </p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-9 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold hover:scale-[1.03] transition-transform shadow-xl shadow-emerald-500/25"
      >
        ← {nf.cta}
      </Link>
    </section>
  );
}
