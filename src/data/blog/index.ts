import "server-only";

import type { BlogPost } from "./types";
import { m3uPlaylistGuide } from "./posts/m3u-playlist-guide";
import { xtreamCodesExplained } from "./posts/xtream-codes-explained";
import { fourKvsEightKIptv } from "./posts/4k-vs-8k-iptv";
import { ottPremiumVsIptv } from "./posts/ott-premium-vs-iptv";
import { tivimateVsSmarters } from "./posts/tivimate-vs-smarters";
import { smartStbPortalUrl } from "./posts/smart-stb-portal-url";

export type { BlogPost, BlogPostLocale, BlogBlock } from "./types";

export const blogPosts: BlogPost[] = [
  m3uPlaylistGuide,
  xtreamCodesExplained,
  fourKvsEightKIptv,
  ottPremiumVsIptv,
  tivimateVsSmarters,
  smartStbPortalUrl,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const blogSlugs: string[] = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
