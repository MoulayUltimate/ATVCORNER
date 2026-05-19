"use client";

import { useEffect, useState } from "react";
import { PROMO_CODE, PROMO_PERCENT } from "@/lib/promo";

type Props = { lang: string };

const STORAGE_KEY = "atv_promo_popup_dismissed";

export function PromoPopup({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let scrolled = false;
    let timeElapsed = false;
    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      if (scrolled && timeElapsed) {
        triggered = true;
        setOpen(true);
      }
    };

    const onScroll = () => {
      if (window.scrollY > 300) {
        scrolled = true;
        trigger();
      }
    };

    const timer = window.setTimeout(() => {
      timeElapsed = true;
      trigger();
    }, 10_000);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Body scroll lock while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  const goToPricing = () => {
    close();
    // Tiny delay so the close animation feels natural
    setTimeout(() => {
      const el = document.getElementById("pricing");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = `/${lang}/pricing`;
      }
    }, 50);
  };

  if (!open) return null;

  const t =
    lang === "fr"
      ? {
          eyebrow: "Offre exclusive",
          title: `Économisez ${PROMO_PERCENT}% sur votre abonnement`,
          desc: "Utilisez ce code à la caisse Stripe ou indiquez-le par WhatsApp pour bénéficier de la réduction.",
          codeHelp: "Cliquez pour copier le code",
          copied: "Code copié !",
          cta: "Voir les tarifs",
          dismiss: "Non merci, peut-être plus tard",
          close: "Fermer",
        }
      : lang === "de"
      ? {
          eyebrow: "Exklusives Angebot",
          title: `Sparen Sie ${PROMO_PERCENT}% auf Ihr Abo`,
          desc: "Geben Sie diesen Code an der Stripe-Kasse ein oder nennen Sie ihn per WhatsApp, um den Rabatt zu erhalten.",
          codeHelp: "Zum Kopieren klicken",
          copied: "Code kopiert!",
          cta: "Preise ansehen",
          dismiss: "Nein danke, vielleicht später",
          close: "Schließen",
        }
      : {
          eyebrow: "Exclusive offer",
          title: `Save ${PROMO_PERCENT}% on your subscription`,
          desc: "Apply this code at Stripe checkout or mention it on WhatsApp to claim your discount.",
          codeHelp: "Click to copy the code",
          copied: "Code copied!",
          cta: "View pricing",
          dismiss: "No thanks, maybe later",
          close: "Close",
        };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={t.close}
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_.25s_ease-out_both]"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-emerald-400/30 shadow-2xl shadow-emerald-500/20 animate-[popIn_.35s_cubic-bezier(.2,.9,.3,1.2)_both]">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        {/* Close X */}
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6 18 18M6 18 18 6" />
          </svg>
        </button>

        <div className="px-7 pt-9 pb-7 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-extrabold uppercase tracking-[0.22em]">
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {t.eyebrow}
          </span>

          <h2
            id="promo-popup-title"
            className="mt-5 text-2xl sm:text-3xl font-display font-extrabold text-white text-balance leading-tight"
          >
            {t.title}
          </h2>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            {t.desc}
          </p>

          {/* Code box */}
          <button
            type="button"
            onClick={copy}
            className="group mt-6 w-full inline-flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-emerald-400/10 border-2 border-dashed border-emerald-400/40 hover:border-emerald-400/70 hover:bg-emerald-400/15 transition-all"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300/80">
                {copied ? t.copied : t.codeHelp}
              </span>
              <span className="font-mono font-extrabold text-2xl tracking-[0.25em] text-emerald-300">
                {PROMO_CODE}
              </span>
            </div>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-300 group-hover:bg-emerald-400/30 transition-colors">
              {copied ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="w-5 h-5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden>
                  <rect x="9" y="9" width="11" height="11" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15V5a2 2 0 0 1 2-2h10" />
                </svg>
              )}
            </span>
          </button>

          <button
            type="button"
            onClick={goToPricing}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-emerald-500/30"
          >
            {t.cta}
            <span aria-hidden>→</span>
          </button>

          <button
            type="button"
            onClick={close}
            className="mt-4 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {t.dismiss}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(12px) scale(.95) }
          100% { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  );
}
