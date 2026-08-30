import "server-only";

import type { BlogPost } from "./types";
import { m3uPlaylistGuide } from "./posts/m3u-playlist-guide";
import { xtreamCodesExplained } from "./posts/xtream-codes-explained";
import { fourKvsEightKIptv } from "./posts/4k-vs-8k-iptv";
import { ottPremiumVsIptv } from "./posts/ott-premium-vs-iptv";
import { tivimateVsSmarters } from "./posts/tivimate-vs-smarters";
import { smartStbPortalUrl } from "./posts/smart-stb-portal-url";
import { wasIstIptv } from "./posts/was-ist-iptv";
import { iptvRuckeltBeheben } from "./posts/iptv-ruckelt-beheben";
import { kabelKuendigenIptv } from "./posts/kabel-kuendigen-iptv";
import { kostenlosFernsehen } from "./posts/kostenlos-fernsehen";
import { istIptvLegal } from "./posts/ist-iptv-legal";
import { watchNflWithoutCable } from "./posts/watch-nfl-without-cable";
import { iptvAnbieterErkennen } from "./posts/iptv-anbieter-erkennen";
import { iptvSmartTvEinrichten } from "./posts/iptv-smart-tv-einrichten";
import { sportLiveStreamen } from "./posts/sport-live-streamen";
import { streamingAbosBuendeln } from "./posts/streaming-abos-buendeln";
import { fernsehenUeberInternet } from "./posts/fernsehen-ueber-internet";
import { iptvKaufenRatgeber } from "./posts/iptv-kaufen-ratgeber";
import { fussballOhneAbo } from "./posts/fussball-ohne-abo-schauen";

export type { BlogPost, BlogPostLocale, BlogBlock } from "./types";

export const blogPosts: BlogPost[] = [
  m3uPlaylistGuide,
  xtreamCodesExplained,
  fourKvsEightKIptv,
  ottPremiumVsIptv,
  tivimateVsSmarters,
  smartStbPortalUrl,
  wasIstIptv,
  iptvRuckeltBeheben,
  kabelKuendigenIptv,
  kostenlosFernsehen,
  istIptvLegal,
  watchNflWithoutCable,
  iptvAnbieterErkennen,
  iptvSmartTvEinrichten,
  sportLiveStreamen,
  streamingAbosBuendeln,
  fernsehenUeberInternet,
  iptvKaufenRatgeber,
  fussballOhneAbo,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const blogSlugs: string[] = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
