"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";
import type { DeviceCategory } from "@/data/tools/types";
import { whatsappUrl } from "@/lib/site";

import { pick } from "@/i18n/pick";
import { toolLocaleOf } from "@/data/tools/locale";

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

const COPY: Partial<Record<Locale, Copy>> = {
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
  es: {
    h1: "Compatibilidad de dispositivos — ¿puedo usar ATV Corner?",
    intro: "Elige tu dispositivo. Obtendrás las instrucciones exactas, las aplicaciones recomendadas y una estimación del tiempo hasta la reproducción.",
    choose: "Elegir dispositivo",
    result: "Resultado de compatibilidad",
    steps: "Pasos de instalación",
    pros: "Ventajas",
    cons: "Conviene saber",
    cta: "Activar la suscripción",
    faq: "Preguntas frecuentes",
    faqItems: [
      { q: "¿Qué dispositivo es el más sencillo?", a: "El Fire TV Stick 4K Max: 40 €, se conecta al HDMI, se instala en 5 minutos y da 4K HDR con Dolby Atmos." },
      { q: "¿Necesito una VPN?", a: "No, ATV Corner funciona en toda Europa sin VPN. Ninguna suscripción oficial cubre el 100 % del fútbol; nosotros reunimos las emisiones europeas en una sola interfaz." },
      { q: "¿Cuántas emisiones simultáneas?", a: "Una por defecto, dos o tres según el plan. Consulta la página de precios." },
      { q: "¿Funciona con mi televisor antiguo?", a: "Si tu televisor no es inteligente, basta con conectar un Fire Stick (40 €) o un Chromecast con Google TV (40 €): cualquier televisor con HDMI pasa a ser compatible." },
    ],
  },
  it: {
    h1: "Compatibilità dei dispositivi — posso usare ATV Corner?",
    intro: "Scegli il tuo dispositivo. Otterrai le istruzioni esatte, le app consigliate e una stima del tempo necessario alla riproduzione.",
    choose: "Scegli il dispositivo",
    result: "Risultato di compatibilità",
    steps: "Passaggi di installazione",
    pros: "Vantaggi",
    cons: "Buono a sapersi",
    cta: "Attiva l'abbonamento",
    faq: "Domande frequenti",
    faqItems: [
      { q: "Quale dispositivo è il più semplice?", a: "Il Fire TV Stick 4K Max: 40 €, si collega all'HDMI, si installa in 5 minuti e dà 4K HDR con Dolby Atmos." },
      { q: "Mi serve una VPN?", a: "No, ATV Corner funziona in tutta Europa senza VPN. Nessun abbonamento ufficiale copre il 100 % del calcio; noi riuniamo le trasmissioni europee in un'unica interfaccia." },
      { q: "Quante trasmissioni contemporanee?", a: "Una per impostazione predefinita, due o tre a seconda del piano. Consulta la pagina dei prezzi." },
      { q: "Funziona con il mio vecchio televisore?", a: "Se il tuo televisore non è smart, basta collegare un Fire Stick (40 €) o un Chromecast con Google TV (40 €): qualsiasi televisore con HDMI diventa compatibile." },
    ],
  },
};

export function DeviceChecker({ lang, devices }: { lang: Locale; devices: DeviceCategory[] }) {
  const c = pick(COPY, lang);
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
                <div className="font-bold text-sm">{pick(d.name, lang)}</div>
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
                <span className="text-zinc-400 text-sm">{pick(selected.name, lang)}</span>
              </div>
              <p className="text-zinc-200 leading-relaxed">{toolLocaleOf(selected.i18n, lang).summary}</p>

              <h3 className="mt-6 mb-3 text-lg font-bold">{c.steps}</h3>
              <ol className="space-y-2">
                {toolLocaleOf(selected.i18n, lang).steps.map((s, i) => (
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
                    {toolLocaleOf(selected.i18n, lang).pros.map((p, i) => (
                      <li key={i} className="text-sm text-zinc-300">• {p}</li>
                    ))}
                  </ul>
                </div>
                {toolLocaleOf(selected.i18n, lang).cons && (
                  <div>
                    <h3 className="text-sm font-bold text-amber-300 mb-2">{c.cons}</h3>
                    <ul className="space-y-1.5">
                      {toolLocaleOf(selected.i18n, lang).cons!.map((p, i) => (
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
