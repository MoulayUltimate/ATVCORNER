"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { whatsappUrl } from "@/lib/site";

type Option = { id: string; label: string; weight?: number };
type Question = { id: string; question: string; options: Option[] };

type Copy = {
  h1: string;
  intro: string;
  step: string;
  of: string;
  back: string;
  next: string;
  finish: string;
  questions: Question[];
  resultTitle: string;
  resultIntro: string;
  resultPlan: { name: string; desc: string; price: string }[];
  restart: string;
  cta: string;
};

const COPY: Record<Locale, Copy> = {
  fr: {
    h1: "Trouvez votre abonnement football idéal",
    intro: "Répondez à 6 questions. On vous recommande le plan ATV Corner qui colle exactement à vos besoins.",
    step: "Étape",
    of: "sur",
    back: "Précédent",
    next: "Suivant",
    finish: "Voir mon résultat",
    questions: [
      {
        id: "country",
        question: "Dans quel pays regardez-vous ?",
        options: [
          { id: "fr", label: "France" }, { id: "de", label: "Allemagne" }, { id: "es", label: "Espagne" },
          { id: "it", label: "Italie" }, { id: "be", label: "Belgique" }, { id: "ch", label: "Suisse" }, { id: "other", label: "Autre Europe" },
        ],
      },
      {
        id: "leagues",
        question: "Quels championnats suivez-vous principalement ?",
        options: [
          { id: "one", label: "Un seul (par ex. Ligue 1 ou Premier League)", weight: 1 },
          { id: "two", label: "Deux ou trois", weight: 2 },
          { id: "all", label: "Tous les grands championnats européens", weight: 3 },
          { id: "ucl", label: "Surtout la Champions League", weight: 2 },
        ],
      },
      {
        id: "quality",
        question: "Quelle qualité d'image visez-vous ?",
        options: [
          { id: "hd", label: "HD standard", weight: 1 },
          { id: "4k", label: "4K HDR si disponible", weight: 2 },
          { id: "8k", label: "Maximum (8K, contenus premium)", weight: 3 },
        ],
      },
      {
        id: "screens",
        question: "Combien d'écrans en simultané ?",
        options: [
          { id: "1", label: "1 (moi seul)", weight: 1 },
          { id: "2", label: "2 (mon partenaire ou enfant)", weight: 2 },
          { id: "3", label: "3 ou plus", weight: 3 },
        ],
      },
      {
        id: "device",
        question: "Sur quel appareil principal ?",
        options: [
          { id: "tv", label: "Smart TV" }, { id: "fire", label: "Fire Stick" }, { id: "android", label: "Android TV" },
          { id: "apple", label: "Apple TV" }, { id: "mobile", label: "Mobile / tablette" },
        ],
      },
      {
        id: "budget",
        question: "Budget mensuel maximum ?",
        options: [
          { id: "low", label: "< 15€", weight: 1 },
          { id: "mid", label: "15 à 25€", weight: 2 },
          { id: "high", label: "Pas de limite", weight: 3 },
        ],
      },
    ],
    resultTitle: "Voici votre plan recommandé",
    resultIntro: "D'après vos réponses, le plan suivant est le meilleur compromis qualité/prix :",
    resultPlan: [
      { name: "Essentiel", desc: "1 écran, HD, idéal pour suivre un championnat principal.", price: "15€/mois" },
      { name: "Premium", desc: "2 écrans, 4K HDR, tous les championnats européens.", price: "20€/mois" },
      { name: "Élite", desc: "3 écrans, 4K/8K, multi-cam, support VIP 24/7.", price: "28€/mois" },
    ],
    restart: "Recommencer",
    cta: "Activer ce plan sur WhatsApp",
  },
  en: {
    h1: "Find your perfect football subscription",
    intro: "Answer 6 questions. We'll recommend the ATV Corner plan that fits your needs exactly.",
    step: "Step",
    of: "of",
    back: "Back",
    next: "Next",
    finish: "See my result",
    questions: [
      {
        id: "country",
        question: "Which country are you watching from?",
        options: [
          { id: "fr", label: "France" }, { id: "de", label: "Germany" }, { id: "es", label: "Spain" },
          { id: "it", label: "Italy" }, { id: "be", label: "Belgium" }, { id: "ch", label: "Switzerland" }, { id: "other", label: "Other Europe" },
        ],
      },
      {
        id: "leagues",
        question: "Which leagues do you mainly follow?",
        options: [
          { id: "one", label: "Just one (e.g. Ligue 1 or Premier League)", weight: 1 },
          { id: "two", label: "Two or three", weight: 2 },
          { id: "all", label: "All major European leagues", weight: 3 },
          { id: "ucl", label: "Mostly Champions League", weight: 2 },
        ],
      },
      {
        id: "quality",
        question: "What picture quality do you target?",
        options: [
          { id: "hd", label: "Standard HD", weight: 1 },
          { id: "4k", label: "4K HDR when available", weight: 2 },
          { id: "8k", label: "Max (8K, premium content)", weight: 3 },
        ],
      },
      {
        id: "screens",
        question: "How many simultaneous screens?",
        options: [
          { id: "1", label: "1 (just me)", weight: 1 },
          { id: "2", label: "2 (partner or kid)", weight: 2 },
          { id: "3", label: "3 or more", weight: 3 },
        ],
      },
      {
        id: "device",
        question: "Which main device?",
        options: [
          { id: "tv", label: "Smart TV" }, { id: "fire", label: "Fire Stick" }, { id: "android", label: "Android TV" },
          { id: "apple", label: "Apple TV" }, { id: "mobile", label: "Mobile / tablet" },
        ],
      },
      {
        id: "budget",
        question: "Maximum monthly budget?",
        options: [
          { id: "low", label: "< €15", weight: 1 },
          { id: "mid", label: "€15 – €25", weight: 2 },
          { id: "high", label: "No limit", weight: 3 },
        ],
      },
    ],
    resultTitle: "Here's your recommended plan",
    resultIntro: "Based on your answers, this is the best price/quality match for you:",
    resultPlan: [
      { name: "Essential", desc: "1 screen, HD, perfect for a single main league.", price: "€15/mo" },
      { name: "Premium", desc: "2 screens, 4K HDR, all European leagues.", price: "€20/mo" },
      { name: "Elite", desc: "3 screens, 4K/8K, multi-cam, 24/7 VIP support.", price: "€28/mo" },
    ],
    restart: "Restart",
    cta: "Activate this plan on WhatsApp",
  },
  de: {
    h1: "Finden Sie Ihr perfektes Fußball-Abo",
    intro: "Beantworten Sie 6 Fragen. Wir empfehlen den ATV-Corner-Plan, der genau zu Ihnen passt.",
    step: "Schritt",
    of: "von",
    back: "Zurück",
    next: "Weiter",
    finish: "Mein Ergebnis sehen",
    questions: [
      {
        id: "country",
        question: "Aus welchem Land schauen Sie?",
        options: [
          { id: "fr", label: "Frankreich" }, { id: "de", label: "Deutschland" }, { id: "es", label: "Spanien" },
          { id: "it", label: "Italien" }, { id: "be", label: "Belgien" }, { id: "ch", label: "Schweiz" }, { id: "other", label: "Anderes Europa" },
        ],
      },
      {
        id: "leagues",
        question: "Welche Ligen verfolgen Sie hauptsächlich?",
        options: [
          { id: "one", label: "Nur eine (z. B. Bundesliga oder Premier League)", weight: 1 },
          { id: "two", label: "Zwei oder drei", weight: 2 },
          { id: "all", label: "Alle großen europäischen Ligen", weight: 3 },
          { id: "ucl", label: "Vor allem Champions League", weight: 2 },
        ],
      },
      {
        id: "quality",
        question: "Welche Bildqualität streben Sie an?",
        options: [
          { id: "hd", label: "Standard-HD", weight: 1 },
          { id: "4k", label: "4K HDR sofern verfügbar", weight: 2 },
          { id: "8k", label: "Maximum (8K, Premium-Inhalte)", weight: 3 },
        ],
      },
      {
        id: "screens",
        question: "Wie viele Bildschirme gleichzeitig?",
        options: [
          { id: "1", label: "1 (nur ich)", weight: 1 },
          { id: "2", label: "2 (Partner oder Kind)", weight: 2 },
          { id: "3", label: "3 oder mehr", weight: 3 },
        ],
      },
      {
        id: "device",
        question: "Welches Hauptgerät?",
        options: [
          { id: "tv", label: "Smart TV" }, { id: "fire", label: "Fire Stick" }, { id: "android", label: "Android TV" },
          { id: "apple", label: "Apple TV" }, { id: "mobile", label: "Mobile / Tablet" },
        ],
      },
      {
        id: "budget",
        question: "Maximales Monatsbudget?",
        options: [
          { id: "low", label: "< 15€", weight: 1 },
          { id: "mid", label: "15 – 25€", weight: 2 },
          { id: "high", label: "Keine Grenze", weight: 3 },
        ],
      },
    ],
    resultTitle: "Ihr empfohlener Plan",
    resultIntro: "Basierend auf Ihren Antworten passt dieser Plan am besten:",
    resultPlan: [
      { name: "Essential", desc: "1 Bildschirm, HD, perfekt für eine Haupt-Liga.", price: "15€/Monat" },
      { name: "Premium", desc: "2 Bildschirme, 4K HDR, alle europäischen Ligen.", price: "20€/Monat" },
      { name: "Elite", desc: "3 Bildschirme, 4K/8K, Multi-Cam, 24/7 VIP-Support.", price: "28€/Monat" },
    ],
    restart: "Neu starten",
    cta: "Diesen Plan auf WhatsApp aktivieren",
  },
};

export function RecommenderQuiz({ lang }: { lang: Locale }) {
  const c = COPY[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const total = c.questions.length;
  const current = c.questions[step];

  const score = () => {
    let s = 0;
    let count = 0;
    for (const q of c.questions) {
      const sel = answers[q.id];
      if (!sel) continue;
      const opt = q.options.find((o) => o.id === sel);
      if (opt?.weight) {
        s += opt.weight;
        count += 1;
      }
    }
    const avg = count > 0 ? s / count : 1;
    if (avg >= 2.4) return 2; // Elite
    if (avg >= 1.6) return 1; // Premium
    return 0; // Essential
  };

  if (done) {
    const idx = score();
    const plan = c.resultPlan[idx];
    return (
      <div className="min-h-screen bg-[#0b0d11] text-white">
        <section className="hero-gradient pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="container-luxe text-center">
            <div className="text-xs font-bold text-emerald-400 tracking-widest">{c.resultTitle}</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mt-3">{plan.name}</h1>
            <div className="text-3xl text-emerald-300 font-bold mt-2">{plan.price}</div>
          </div>
        </section>
        <section className="py-10">
          <div className="container-luxe max-w-2xl">
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-zinc-300">{c.resultIntro}</p>
              <p className="text-lg mt-4">{plan.desc}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold hover:bg-emerald-300 transition-colors"
              >
                {c.cta}
              </a>
              <Link
                href={`/${lang}/pricing`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 ring-1 ring-white/10 font-semibold hover:bg-white/10 transition-colors"
              >
                Pricing →
              </Link>
              <button
                onClick={() => { setDone(false); setStep(0); setAnswers({}); }}
                className="px-6 py-3 rounded-full ring-1 ring-white/10 font-semibold hover:bg-white/5"
              >
                {c.restart}
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white">
      <section className="hero-gradient pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-luxe text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            TOOLS · QUIZ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">{c.h1}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-300">{c.intro}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-luxe max-w-2xl">
          <div className="text-xs font-bold text-emerald-400 tracking-widest mb-2">
            {c.step} {step + 1} {c.of} {total}
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all"
              style={{ width: `${((step + 1) / total) * 100}%` }}
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-5">{current.question}</h2>
          <div className="space-y-2">
            {current.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setAnswers({ ...answers, [current.id]: opt.id })}
                className={`block w-full text-left p-4 rounded-xl ring-1 transition-all ${
                  answers[current.id] === opt.id
                    ? "bg-emerald-400/10 ring-emerald-400/50 text-emerald-100"
                    : "bg-white/[0.02] ring-white/10 hover:ring-emerald-400/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-5 py-2.5 rounded-full ring-1 ring-white/10 font-semibold disabled:opacity-40 hover:bg-white/5"
            >
              ← {c.back}
            </button>
            {step < total - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!answers[current.id]}
                className="px-6 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-bold disabled:opacity-40 hover:bg-emerald-300"
              >
                {c.next} →
              </button>
            ) : (
              <button
                onClick={() => setDone(true)}
                disabled={!answers[current.id]}
                className="px-6 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-bold disabled:opacity-40 hover:bg-emerald-300"
              >
                {c.finish}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
