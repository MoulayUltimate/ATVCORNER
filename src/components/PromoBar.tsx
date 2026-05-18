"use client";

import { useState } from "react";
import { PROMO_CODE, PROMO_PERCENT } from "@/lib/promo";

type Props = { lang: string };

export function PromoBar({ lang }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore — fallback is the user reading the code visually
    }
  };

  const t =
    lang === "fr"
      ? {
          tag: "Offre limitée",
          body: `Économisez ${PROMO_PERCENT}% sur tous les abonnements avec le code`,
          copy: "Copier",
          copied: "Copié !",
        }
      : lang === "de"
      ? {
          tag: "Limitiertes Angebot",
          body: `Sparen Sie ${PROMO_PERCENT}% auf alle Abos mit dem Code`,
          copy: "Kopieren",
          copied: "Kopiert!",
        }
      : {
          tag: "Limited offer",
          body: `Save ${PROMO_PERCENT}% on every plan with code`,
          copy: "Copy",
          copied: "Copied!",
        };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-zinc-950">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.5),transparent_60%)]"
      />
      <div className="container-luxe py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-950 opacity-50 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-950" />
          </span>
          <span className="uppercase tracking-widest text-[10px] font-extrabold">
            {t.tag}
          </span>
        </span>
        <span className="text-zinc-950/90">{t.body}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 text-emerald-300 font-mono font-bold tracking-widest text-xs hover:bg-zinc-900 transition-colors"
          aria-label={`${t.copy} ${PROMO_CODE}`}
        >
          {PROMO_CODE}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="w-3.5 h-3.5"
            aria-hidden
          >
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
            ) : (
              <>
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 0 1 2-2h10" />
              </>
            )}
          </svg>
          <span className="sr-only">{copied ? t.copied : t.copy}</span>
        </button>
      </div>
    </div>
  );
}
