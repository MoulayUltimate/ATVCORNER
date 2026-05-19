import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// AI crawlers we explicitly welcome so that LLM-powered answer engines
// (ChatGPT, Perplexity, Claude, Gemini, etc.) can cite atvcorner.com.
// Without an explicit Allow some bots default to a more conservative crawl.
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
];

const sharedDisallow = ["/api/", "/admin/", "/_next/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: sharedDisallow,
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: sharedDisallow,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
