import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import type { Locale } from "@/i18n";
import { pick } from "@/i18n/pick";

const copy = {
  fr: {
    lead: "Prêt à commencer ? Vos identifiants arrivent en moins de 5 minutes sur WhatsApp.",
    buy: "Démarrer mon abonnement",
    plans: "Voir les tarifs",
    trust: "Activation en 5 minutes · Garantie satisfait ou remboursé 7 jours · Sans engagement",
  },
  en: {
    lead: "Ready to start? Your login arrives on WhatsApp in under 5 minutes.",
    buy: "Start my subscription",
    plans: "See plans",
    trust: "Active in 5 minutes · 7-day money-back guarantee · No contract",
  },
  de: {
    lead: "Bereit loszulegen? Ihre Zugangsdaten kommen in unter 5 Minuten per WhatsApp.",
    buy: "Abonnement starten",
    plans: "Preise ansehen",
    trust: "In 5 Minuten aktiv · 7 Tage Geld-zurück-Garantie · Ohne Vertragsbindung",
  },
  es: {
    lead: "¿Listo para empezar? Tus credenciales llegan por WhatsApp en menos de 5 minutos.",
    buy: "Iniciar mi suscripción",
    plans: "Ver precios",
    trust: "Activo en 5 minutos · Garantía de devolución de 7 días · Sin permanencia",
  },
  it: {
    lead: "Pronto a iniziare? Le credenziali arrivano su WhatsApp in meno di 5 minuti.",
    buy: "Avvia il mio abbonamento",
    plans: "Vedi i prezzi",
    trust: "Attivo in 5 minuti · Garanzia di rimborso di 7 giorni · Senza vincoli",
  },
};

/**
 * The standard conversion band. Every content page ends with one so no page is
 * a dead end; `source` is carried into the WhatsApp link for attribution.
 */
export function BuyBand({
  lang,
  source,
  label,
  lead,
  className = "",
}: {
  lang: Locale;
  source: string;
  /** Override the buy-button text (SEO pages pass their own page-specific CTA). */
  label?: string;
  /** Override the lead sentence. */
  lead?: string;
  className?: string;
}) {
  const c = pick(copy, lang);
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-7 border-emerald-400/30 bg-emerald-400/5 ${className}`}
    >
      <p className="text-emerald-100 font-semibold leading-relaxed">{lead ?? c.lead}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappUrl(undefined, lang)}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-source={source}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-950 font-bold gold-glow transition-transform whitespace-nowrap"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden>
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.4 2.1 7.7L.3 31.7l8.2-2.1A15.5 15.5 0 0 0 16 31.6C24.6 31.6 31.6 24.6 31.6 16 31.6 7.4 24.6.4 16 .4Zm0 28.4a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.7-.3-.5A12.8 12.8 0 1 1 16 28.8Z" />
          </svg>
          {label ?? c.buy}
        </a>
        <Link
          href={`/${lang}/pricing`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-zinc-200 font-semibold hover:bg-white/10 hover:border-emerald-400/40 transition-colors whitespace-nowrap"
        >
          {c.plans}
        </Link>
      </div>
      <p className="mt-4 text-xs text-zinc-400">{c.trust}</p>
    </div>
  );
}

/** Full-width section wrapper, for pages that drop it in at the end. */
export function BuyBandSection({
  lang,
  source,
  label,
  lead,
}: {
  lang: Locale;
  source: string;
  label?: string;
  lead?: string;
}) {
  return (
    <section className="container-luxe pb-24 max-w-3xl">
      <BuyBand lang={lang} source={source} label={label} lead={lead} />
    </section>
  );
}
