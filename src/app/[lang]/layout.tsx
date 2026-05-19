import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { PromoPopup } from "@/components/PromoPopup";
import { SalesNotification } from "@/components/SalesNotification";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { siteConfig } from "@/lib/site";
import { getDictionary, hasLocale, locales, type Locale } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0e12",
  width: "device-width",
  initialScale: 1,
};

const ogLocaleMap: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  de: "de_DE",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${dict.footer.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.shortDesc,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "fr-FR": "/fr",
        "en-US": "/en",
        "de-DE": "/de",
        "x-default": "/fr",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[lang],
      url: `${siteConfig.url}/${lang}`,
      title: `${siteConfig.name} | ${dict.footer.tagline}`,
      description: siteConfig.shortDesc,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${dict.footer.tagline}`,
      description: siteConfig.shortDesc,
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18142154553"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DWS58BCDTL');
            gtag('config', 'AW-18142154553');

            // WhatsApp click → Google Ads conversion (Add to cart)
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) !== 'undefined') { window.location = url; }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18142154553/CmtNCIfStK4cELme7cpD',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            };

            // Auto-track any click on a WhatsApp (wa.me) link, anywhere on the site.
            // Links open in _blank so navigation isn't blocked — we just fire the event.
            document.addEventListener('click', function(e) {
              var a = e.target && e.target.closest ? e.target.closest('a[href*="wa.me/"]') : null;
              if (!a) return;
              try {
                gtag('event', 'conversion', {
                  'send_to': 'AW-18142154553/CmtNCIfStK4cELme7cpD',
                  'value': 1.0,
                  'currency': 'USD'
                });
              } catch (err) {}
            }, true);
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <AnalyticsTracker lang={lang} />
        <Navbar lang={lang} dict={dict} />
        <PromoPopup lang={lang} />
        {lang === "de" && <SalesNotification />}
        <main className="flex-1 pt-20">{children}</main>
        <Footer lang={lang} dict={dict} />
        <WhatsAppFab
          lang={lang}
          label={dict.wa_fab.label}
          aria={dict.wa_fab.aria}
          responseHint={
            lang === "fr"
              ? "Réponse en < 5 min"
              : lang === "de"
              ? "Antwort in < 5 Min"
              : "Reply in < 5 min"
          }
        />

        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              email: siteConfig.email,
              sameAs: Object.values(siteConfig.social),
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  availableLanguage: ["French", "English", "German"],
                  areaServed: ["FR", "BE", "CH", "DE", "AT", "GB", "US", "CA", "MA", "DZ", "TN", "EU"],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
