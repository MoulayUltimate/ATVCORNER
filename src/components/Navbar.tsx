"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/i18n";

type Props = { lang: string; dict: Dictionary };

export function Navbar({ lang, dict }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/pricing`, label: dict.nav.pricing },
    { href: `/${lang}/channels`, label: dict.nav.channels },
    { href: `/${lang}/setup`, label: dict.nav.setup },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0e12]/85 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between py-4">
        <Logo href={`/${lang}`} />

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.href === `/${lang}`
                ? pathname === `/${lang}` || pathname === `/${lang}/`
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all ${
                    active
                      ? "text-emerald-400 bg-emerald-400/10 ring-1 ring-emerald-400/20"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} />
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-semibold text-sm hover:bg-emerald-300 transition-colors"
          >
            {dict.nav.cta}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-luxe pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => {
              const active =
                item.href === `/${lang}`
                  ? pathname === `/${lang}` || pathname === `/${lang}/`
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium ${
                      active
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold"
              >
                {dict.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
