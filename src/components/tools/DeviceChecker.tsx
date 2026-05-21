"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";
import type { DeviceCategory } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";

type Copy = {
  h1: string;
  intro: string;
  choose: string;
  result: string;
  steps: string;
  pros: string;
  cons: string;
  cta: string;
  faq: string;
  faqItems: { q: string; a: string }[];
};

const COPY: Record<Locale, Copy> = {
  fr: {
    h1: "Vérificateur de compatibilité — Puis-je utiliser ATV Corner ?",
    intro: "Choisissez votre appareil. Vous obtenez le guide d'installation exact, les apps recommandées, et une estimation du temps de mise en route.",
    choose: "Choisissez votre appareil",
    result: "Résultat de compatibilité",
    steps: "Étapes d'installation",
    pros: "Avantages",
    cons: "À savoir",
    cta: "Activer mon abonnement maintenant",
    faq: "Questions fréquentes",
    faqItems: [
      { q: "Quel est l'appareil le plus simple pour débuter ?", a: "Le Fire TV Stick 4K Max — 40€, branché en HDMI, 5 minutes d'installation, 4K HDR et Dolby Atmos." },
      { q: "Ai-je besoin d'un VPN ?", a: "Non, ATV Corner fonctionne partout en Europe sans VPN. Aucun abonnement officiel ne couvre 100 % du foot — nous regroupons les flux légaux européens dans une interface." },
      { q: "Combien de flux simultanés sont autorisés ?", a: "1 flux en simultané par défaut, 2 ou 3 selon le plan. Voir notre page Tarifs." },
      { q: "Est-ce compatible avec ma vieille TV ?", a: "Si votre TV n'est pas une Smart TV, branchez un Fire Stick (40€) ou un Chromecast Google TV (40€) — toute TV à port HDMI devient compatible." },
    ],
  },
  en: {
    h1: "Device Compatibility Checker — Can I use ATV Corner?",
    intro: "Pick your device. Get the exact setup guide, recommended apps, and a time-to-watch estimate.",
    choose: "Pick your device",
    result: "Compatibility result",
    steps: "Setup steps",
    pros: "Pros",
    cons: "Good to know",
    cta: "Activate my subscription now",
    faq: "Frequently asked questions",
    faqItems: [
      { q: "What's the easiest device to start with?", a: "Fire TV Stick 4K Max — €40, plugs into HDMI, 5-minute setup, 4K HDR and Dolby Atmos." },
      { q: "Do I need a VPN?", a: "No, ATV Corner works Europe-wide with no VPN. No official subscription covers 100 % of football — we aggregate legal European feeds in one interface." },
      { q: "How many simultaneous streams are allowed?", a: "1 stream by default, 2 or 3 depending on your plan. See our Pricing page." },
      { q: "Does it work with my old TV?", a: "If your TV is not a Smart TV, add a Fire Stick (€40) or Chromecast with Google TV (€40) — any TV with an HDMI port becomes compatible." },
    ],
  },
  de: {
    h1: "Gerätekompatibilität — Kann ich ATV Corner nutzen?",
    intro: "Wählen Sie Ihr Gerät. Sie erhalten die genaue Anleitung, empfohlene Apps und eine Zeitschätzung bis zur Wiedergabe.",
    choose: "Gerät auswählen",
    result: "Kompatibilitätsergebnis",
    steps: "Einrichtungsschritte",
    pros: "Vorteile",
    cons: "Gut zu wissen",
    cta: "Abo jetzt aktivieren",
    faq: "Häufige Fragen",
    faqItems: [
      { q: "Welches Gerät ist am einfachsten?", a: "Fire TV Stick 4K Max — 40€, HDMI-Anschluss, 5-Minuten-Setup, 4K HDR und Dolby Atmos." },
      { q: "Brauche ich ein VPN?", a: "Nein, ATV Corner funktioniert europaweit ohne VPN. Kein offizielles Abo deckt 100 % des Fußballs ab — wir bündeln legale europäische Feeds in einer Oberfläche." },
      { q: "Wie viele Streams gleichzeitig?", a: "1 Stream standardmäßig, 2 oder 3 je nach Tarif. Siehe Preisseite." },
      { q: "Funktioniert es mit meinem alten TV?", a: "Wenn Ihr TV kein Smart TV ist, einfach Fire Stick (40€) oder Chromecast mit Google TV (40€) anschließen — jedes TV mit HDMI wird kompatibel." },
    ],
  },
};

export function DeviceChecker({ lang, devices }: { lang: Locale; devices: DeviceCategory[] }) {
  const c = COPY[lang];
  const [selected, setSelected] = useState<DeviceCategory | null>(null);

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-luxe text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            TOOLS · DEVICE CHECKER
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-300">{c.intro}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe">
          <h2 className="text-xl font-bold mb-5">{c.choose}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {devices.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelected(d)}
                className={`text-left p-4 rounded-xl ring-1 transition-all ${
                  selected?.id === d.id
                    ? "bg-emerald-400/10 ring-emerald-400/50 text-emerald-100"
                    : "bg-white/[0.02] ring-white/10 hover:ring-emerald-400/30"
                }`}
              >
                <div className="font-bold text-sm">{d.name[lang]}</div>
                <div className="text-xs text-zinc-400 mt-1">{d.os}</div>
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-10 glass-card p-6 sm:p-8 rounded-2xl ring-1 ring-emerald-400/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/15 text-emerald-300 text-xs font-bold">
                  ✓ {c.result}
                </span>
                <span className="text-zinc-400 text-sm">{selected.name[lang]}</span>
              </div>
              <p className="text-zinc-200 leading-relaxed">{selected.i18n[lang].summary}</p>

              <h3 className="mt-6 mb-3 text-lg font-bold">{c.steps}</h3>
              <ol className="space-y-2">
                {selected.i18n[lang].steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-none w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold inline-flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-zinc-300">{s}</span>
                  </li>
                ))}
              </ol>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-sm font-bold text-emerald-300 mb-2">{c.pros}</h3>
                  <ul className="space-y-1.5">
                    {selected.i18n[lang].pros.map((p, i) => (
                      <li key={i} className="text-sm text-zinc-300">• {p}</li>
                    ))}
                  </ul>
                </div>
                {selected.i18n[lang].cons && (
                  <div>
                    <h3 className="text-sm font-bold text-amber-300 mb-2">{c.cons}</h3>
                    <ul className="space-y-1.5">
                      {selected.i18n[lang].cons!.map((p, i) => (
                        <li key={i} className="text-sm text-zinc-300">• {p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl(undefined, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors"
                >
                  {c.cta}
                </a>
                <Link
                  href={`/${lang}/setup`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 ring-1 ring-white/10 font-semibold hover:bg-white/10 transition-colors"
                >
                  Setup guides →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 border-t border-white/5 mb-16">
        <div className="container-luxe max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{c.faq}</h2>
          <div className="space-y-3">
            {c.faqItems.map((f, i) => (
              <details key={i} className="glass-card rounded-xl p-5">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-zinc-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
