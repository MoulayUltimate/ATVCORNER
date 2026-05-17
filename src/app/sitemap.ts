import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/channels", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/setup", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    // SEO landing pages (keyword-targeted)
    { path: "/iptv-premium", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/iptv-8k", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iptv-4k", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/m3u-playlist", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/xtream-codes", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/iptv-sport", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/best-iptv-alternatives", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/refund", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal-notice", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/dmca", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    for (const r of paths) {
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${siteConfig.url}/${l}${r.path}`;
      }
      entries.push({
        url: `${siteConfig.url}/${lang}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
