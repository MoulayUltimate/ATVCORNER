"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n";
import { whatsappUrl } from "@/lib/site";

type Copy = {
  h1: string;
  intro: string;
  labelSpeed: string;
  labelStreams: string;
  result: string;
  recommend: string;
  bandwidth: string;
  tips: string;
  tipsList: string[];
  cta: string;
  qualities: { id: string; label: string; need: number; desc: string }[];
  faq: string;
  faqItems: { q: string; a: string }[];
};

const COPY: Record<Locale, Copy> = {
  fr: {
    h1: "Test de débit pour le football en direct",
    intro: "Entrez votre vitesse de connexion (en Mbps). Le calculateur vous dit en quelle qualité vous pouvez streamer le football, et combien de flux votre ligne peut tenir.",
    labelSpeed: "Votre vitesse de téléchargement (Mbps)",
    labelStreams: "Nombre de flux simultanés souhaités",
    result: "Verdict",
    recommend: "Qualité recommandée",
    bandwidth: "Besoins de débit minimum",
    tips: "Conseils dépannage",
    tipsList: [
      "Connectez votre appareil principal en câble Ethernet plutôt qu'en Wi-Fi",
      "Privilégiez la 5 GHz (Wi-Fi 5/6) — la 2,4 GHz est trop chargée",
      "Coupez les téléchargements en arrière-plan pendant un match en direct",
      "Si votre débit est sous 10 Mbps, désactivez la lecture automatique HD dans l'app",
      "Un VPN peut réduire votre débit de 20 à 40 % — ATV Corner n'en a pas besoin",
    ],
    cta: "Activer mon abonnement",
    qualities: [
      { id: "sd", label: "SD (480p)", need: 3, desc: "Confort sur smartphone uniquement" },
      { id: "hd", label: "HD (720p)", need: 5, desc: "Smart TV moyenne, multi-cam basique" },
      { id: "fullhd", label: "Full HD (1080p)", need: 8, desc: "Qualité standard 2026 sur Smart TV" },
      { id: "4k", label: "4K HDR", need: 25, desc: "Premium — chocs européens, Champions League" },
      { id: "8k", label: "8K (sélectionné)", need: 50, desc: "Pour TV 8K, contenus 8K natifs" },
    ],
    faq: "Questions fréquentes",
    faqItems: [
      { q: "Combien de débit pour la Premier League en 4K ?", a: "25 Mbps minimum en téléchargement stable. Comptez 40 Mbps pour deux flux 4K simultanés (par exemple deux écrans dans la maison)." },
      { q: "Le Wi-Fi suffit-il ?", a: "Oui, en Wi-Fi 5/6 sur la bande 5 GHz, à proximité du routeur. Pour le 4K stable, l'Ethernet reste préférable." },
      { q: "Pourquoi mon flux bufferise ?", a: "Causes courantes : débit insuffisant, Wi-Fi saturé, ou serveur DNS lent. Changez de DNS (1.1.1.1 ou 8.8.8.8) et activez le QoS sur votre routeur." },
      { q: "Un VPN aide-t-il ?", a: "Avec ATV Corner, non — vous n'en avez pas besoin. Un VPN ralentit la connexion sans bénéfice." },
    ],
  },
  en: {
    h1: "Speed Test for Live Football Streaming",
    intro: "Enter your connection speed (in Mbps). The calculator tells you what quality you can stream football at and how many simultaneous feeds your line supports.",
    labelSpeed: "Your download speed (Mbps)",
    labelStreams: "Number of simultaneous streams",
    result: "Verdict",
    recommend: "Recommended quality",
    bandwidth: "Minimum bandwidth needs",
    tips: "Troubleshooting tips",
    tipsList: [
      "Connect your main device by Ethernet cable instead of Wi-Fi",
      "Prefer 5 GHz (Wi-Fi 5/6) — 2.4 GHz is too congested",
      "Pause background downloads during a live match",
      "If your speed is under 10 Mbps, disable HD autoplay in the app",
      "A VPN cuts your speed by 20–40 % — ATV Corner doesn't need one",
    ],
    cta: "Activate my subscription",
    qualities: [
      { id: "sd", label: "SD (480p)", need: 3, desc: "Comfortable on smartphone only" },
      { id: "hd", label: "HD (720p)", need: 5, desc: "Average Smart TV, basic multi-cam" },
      { id: "fullhd", label: "Full HD (1080p)", need: 8, desc: "Standard 2026 quality on Smart TV" },
      { id: "4k", label: "4K HDR", need: 25, desc: "Premium — European fixtures, Champions League" },
      { id: "8k", label: "8K (curated)", need: 50, desc: "For 8K TV, native 8K content" },
    ],
    faq: "Frequently asked questions",
    faqItems: [
      { q: "How much bandwidth do I need for Premier League in 4K?", a: "25 Mbps minimum stable download. Plan for 40 Mbps for two simultaneous 4K feeds (e.g. two TVs in the home)." },
      { q: "Is Wi-Fi enough?", a: "Yes, on Wi-Fi 5/6 on the 5 GHz band, near the router. For stable 4K, Ethernet remains preferred." },
      { q: "Why does my stream buffer?", a: "Common causes: insufficient speed, congested Wi-Fi, or slow DNS. Switch DNS (1.1.1.1 or 8.8.8.8) and enable QoS on your router." },
      { q: "Does a VPN help?", a: "With ATV Corner, no — you don't need one. A VPN only slows your connection with no benefit." },
    ],
  },
  de: {
    h1: "Geschwindigkeitstest für Live-Fußball",
    intro: "Geben Sie Ihre Verbindungsgeschwindigkeit (in Mbps) ein. Der Rechner sagt Ihnen, in welcher Qualität Sie Fußball streamen können und wie viele parallele Feeds Ihre Leitung unterstützt.",
    labelSpeed: "Ihre Download-Geschwindigkeit (Mbps)",
    labelStreams: "Anzahl paralleler Streams",
    result: "Ergebnis",
    recommend: "Empfohlene Qualität",
    bandwidth: "Mindest-Bandbreitenbedarf",
    tips: "Tipps zur Fehlerbehebung",
    tipsList: [
      "Hauptgerät per Ethernet-Kabel statt WLAN anschließen",
      "5 GHz (Wi-Fi 5/6) bevorzugen — 2,4 GHz ist überlastet",
      "Hintergrund-Downloads während eines Live-Spiels pausieren",
      "Bei unter 10 Mbps die HD-Autoplay-Funktion in der App deaktivieren",
      "VPN reduziert die Geschwindigkeit um 20–40 % — ATV Corner braucht keins",
    ],
    cta: "Abo jetzt aktivieren",
    qualities: [
      { id: "sd", label: "SD (480p)", need: 3, desc: "Komfortabel nur auf Smartphone" },
      { id: "hd", label: "HD (720p)", need: 5, desc: "Durchschnittlicher Smart TV, einfaches Multi-Cam" },
      { id: "fullhd", label: "Full HD (1080p)", need: 8, desc: "Standard-Qualität 2026 auf Smart TV" },
      { id: "4k", label: "4K HDR", need: 25, desc: "Premium — europäische Topspiele, Champions League" },
      { id: "8k", label: "8K (kuratiert)", need: 50, desc: "Für 8K-TV, natives 8K-Material" },
    ],
    faq: "Häufige Fragen",
    faqItems: [
      { q: "Welche Bandbreite für Premier League in 4K?", a: "25 Mbps Mindestdownload, stabil. Für zwei parallele 4K-Feeds (z. B. zwei TVs im Haus) 40 Mbps einplanen." },
      { q: "Reicht WLAN aus?", a: "Ja, mit Wi-Fi 5/6 im 5-GHz-Band, in Router-Nähe. Für stabiles 4K bleibt Ethernet vorzuziehen." },
      { q: "Warum buffert mein Stream?", a: "Häufige Ursachen: zu wenig Geschwindigkeit, überlastetes WLAN oder langsames DNS. DNS wechseln (1.1.1.1 oder 8.8.8.8) und QoS am Router aktivieren." },
      { q: "Hilft ein VPN?", a: "Bei ATV Corner nein — Sie brauchen keins. Ein VPN drosselt die Verbindung ohne Nutzen." },
    ],
  },
};

export function SpeedTest({ lang }: { lang: Locale }) {
  const c = COPY[lang];
  const [speed, setSpeed] = useState(50);
  const [streams, setStreams] = useState(1);

  const effective = speed / streams;
  const verdict = useMemo(() => {
    const sorted = [...c.qualities].sort((a, b) => b.need - a.need);
    return sorted.find((q) => effective >= q.need) ?? null;
  }, [effective, c.qualities]);

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-luxe text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            TOOLS · SPEED TEST
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-300">{c.intro}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-2xl">
            <label className="block">
              <span className="text-sm font-semibold text-zinc-300">{c.labelSpeed}</span>
              <input
                type="range"
                min={1}
                max={500}
                step={1}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full mt-3 accent-emerald-400"
              />
              <div className="text-3xl font-extrabold text-emerald-300 mt-2">{speed} Mbps</div>
            </label>

            <label className="block mt-6">
              <span className="text-sm font-semibold text-zinc-300">{c.labelStreams}</span>
              <div className="flex gap-2 mt-3">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setStreams(n)}
                    className={`px-4 py-2 rounded-xl ring-1 font-bold transition-colors ${
                      streams === n
                        ? "bg-emerald-400 text-zinc-950 ring-emerald-400"
                        : "bg-white/5 ring-white/10 text-zinc-300 hover:bg-white/10"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </label>
          </div>

          <div className="glass-card p-6 rounded-2xl ring-1 ring-emerald-400/20">
            <div className="text-xs font-bold text-emerald-400 tracking-widest">{c.result}</div>
            {verdict ? (
              <>
                <div className="text-3xl font-extrabold mt-2">{verdict.label}</div>
                <p className="text-zinc-300 mt-2">{verdict.desc}</p>
                <div className="mt-4 text-sm text-zinc-400">
                  {effective.toFixed(0)} Mbps {streams > 1 ? `× ${streams}` : ""} = {speed} Mbps
                </div>
              </>
            ) : (
              <div className="mt-2 text-amber-300 font-bold">
                {lang === "fr" ? "Trop juste pour le streaming HD stable." : lang === "en" ? "Too low for stable HD streaming." : "Zu niedrig für stabiles HD-Streaming."}
              </div>
            )}

            <div className="mt-6">
              <div className="text-sm font-bold mb-2">{c.bandwidth}</div>
              <ul className="space-y-1">
                {c.qualities.map((q) => (
                  <li key={q.id} className="flex justify-between text-sm">
                    <span className="text-zinc-300">{q.label}</span>
                    <span className="text-zinc-400">{q.need} Mbps</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe max-w-3xl">
          <h2 className="text-2xl font-bold mb-5">{c.tips}</h2>
          <ul className="space-y-3">
            {c.tipsList.map((t, i) => (
              <li key={i} className="flex gap-3 glass-card rounded-xl p-4">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-zinc-300">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a
              href={whatsappUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors"
            >
              {c.cta}
            </a>
          </div>
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
