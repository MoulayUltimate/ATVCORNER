import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, whatsappUrl } from "@/lib/site";
import type { Dictionary } from "@/i18n";

type Props = { lang: string; dict: Dictionary };

export function Footer({ lang, dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#050505]">
      <div className="container-luxe py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Logo size="lg" href={`/${lang}`} />
          <p className="mt-5 max-w-md text-zinc-400 leading-relaxed">
            {dict.footer.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium hover:bg-emerald-500/15 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-4">
            {dict.footer.nav_title}
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href={`/${lang}/pricing`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.pricing}</Link></li>
            <li><Link href={`/${lang}/channels`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.channels}</Link></li>
            <li><Link href={`/${lang}/setup`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.setup}</Link></li>
            <li><Link href={`/${lang}/tools`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.tools}</Link></li>
            <li><Link href={`/${lang}/blog`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.blog}</Link></li>
            <li><Link href={`/${lang}/about`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.about}</Link></li>
            <li><Link href={`/${lang}/contact`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.nav.contact}</Link></li>
            <li><Link href={`/${lang}#faq`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.faq.eyebrow}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-4">
            {lang === "fr" ? "Guides IPTV" : lang === "de" ? "IPTV-Guides" : "IPTV Guides"}
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href={`/${lang}/iptv-subscription`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{lang === "fr" ? "Abonnement IPTV" : lang === "de" ? "IPTV Abonnement" : "IPTV Subscription"}</Link></li>
            <li><Link href={`/${lang}/iptv-firestick`} className="text-zinc-400 hover:text-emerald-400 transition-colors">IPTV Firestick</Link></li>
            <li><Link href={`/${lang}/iptv-smarters-pro`} className="text-zinc-400 hover:text-emerald-400 transition-colors">IPTV Smarters Pro</Link></li>
            <li><Link href={`/${lang}/cable-tv-alternative`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{lang === "fr" ? "Alternative au câble" : lang === "de" ? "Kabel-Alternative" : "Cable TV Alternative"}</Link></li>
            <li><Link href={`/${lang}/iptv-free-trial`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{lang === "fr" ? "Essai gratuit" : lang === "de" ? "Gratis-Test" : "Free Trial"}</Link></li>
            <li><Link href={`/${lang}/best-iptv-service`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{lang === "fr" ? "Meilleur service IPTV" : lang === "de" ? "Bester IPTV Service" : "Best IPTV Service"}</Link></li>
            <li><Link href={`/${lang}/iptv-sport`} className="text-zinc-400 hover:text-emerald-400 transition-colors">IPTV Sport</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/90 mb-4">
            {dict.footer.legal_title}
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href={`/${lang}/privacy`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.privacy}</Link></li>
            <li><Link href={`/${lang}/terms`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.terms}</Link></li>
            <li><Link href={`/${lang}/refund`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.refund}</Link></li>
            <li><Link href={`/${lang}/legal-notice`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.legal_notice}</Link></li>
            <li><Link href={`/${lang}/cookies`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.cookies}</Link></li>
            <li><Link href={`/${lang}/dmca`} className="text-zinc-400 hover:text-emerald-400 transition-colors">{dict.footer.dmca}</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-luxe py-6 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-zinc-500">
          © {year} {siteConfig.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
