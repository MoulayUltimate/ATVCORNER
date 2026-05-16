"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const options = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
] as const;

type Props = { lang: string };

export function LanguageSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const current = options.find((o) => o.code === lang) ?? options[0];

  function pick(code: string) {
    // Persist user choice for the proxy
    document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;

    // Swap the locale segment in the URL
    const parts = pathname.split("/");
    // parts[0] = "", parts[1] = current locale
    if (parts.length >= 2 && (options as readonly { code: string }[]).some((o) => o.code === parts[1])) {
      parts[1] = code;
    } else {
      parts.splice(1, 0, code);
    }
    const next = parts.join("/") || `/${code}`;
    router.push(next);
    router.refresh();
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
      >
        <span className="text-base leading-none" aria-hidden>
          {current.flag}
        </span>
        <span className="hidden sm:inline uppercase text-xs tracking-wider">{current.code}</span>
        <svg viewBox="0 0 24 24" className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[160px] py-1 rounded-xl bg-zinc-900 border border-white/10 shadow-xl shadow-black/50 z-50"
        >
          {options.map((o) => (
            <li key={o.code}>
              <button
                role="option"
                aria-selected={o.code === lang}
                onClick={() => pick(o.code)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left ${
                  o.code === lang
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-zinc-200 hover:bg-white/5"
                }`}
              >
                <span className="text-base" aria-hidden>{o.flag}</span>
                <span>{o.label}</span>
                {o.code === lang && (
                  <svg viewBox="0 0 24 24" className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
