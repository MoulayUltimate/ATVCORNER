import "server-only";
import type { Locale } from "@/i18n";

export type LocalizedString = Record<Locale, string>;
export type LocalizedStrings = Record<Locale, string[]>;
export type LocalizedFaq = Record<Locale, { q: string; a: string }[]>;

export type ToolMeta = {
  slug: string;
  category: "interactive" | "guide" | "comparison";
  title: LocalizedString;
  description: LocalizedString;
  metaTitle: LocalizedString;
  metaDesc: LocalizedString;
  icon: string;
};

export type LeagueData = {
  slug: string;
  name: string;
  shortName: string;
  countriesCovered: string[];
  teamsCount: number;
  matchdayCount: number;
  startMonth: string;
  endMonth: string;
  flagship: string[];
  i18n: Record<
    Locale,
    {
      h1: string;
      metaTitle: string;
      metaDesc: string;
      intro: string;
      benefits: string[];
      whyAtv: string;
      devices: string;
      countries: string;
      faq: { q: string; a: string }[];
    }
  >;
};

export type CountryData = {
  slug: string;
  name: string;
  flag: string;
  topLeagues: string[];
  topTeams: string[];
  language: string;
  i18n: Record<
    Locale,
    {
      h1: string;
      metaTitle: string;
      metaDesc: string;
      intro: string;
      popularLeagues: string;
      popularTeams: string;
      devices: string;
      faq: { q: string; a: string }[];
    }
  >;
};

export type TeamData = {
  slug: string;
  name: string;
  shortName: string;
  league: string;
  country: string;
  competitions: string[];
  founded: number;
  stadium: string;
  i18n: Record<
    Locale,
    {
      h1: string;
      metaTitle: string;
      metaDesc: string;
      intro: string;
      whyFollow: string;
      whereToWatch: string;
      faq: { q: string; a: string }[];
    }
  >;
};

export type DeviceCategory = {
  id: string;
  name: LocalizedString;
  os: string;
  compatible: boolean;
  apps: string[];
  setupSlug?: string;
  i18n: Record<
    Locale,
    {
      summary: string;
      steps: string[];
      pros: string[];
      cons?: string[];
    }
  >;
};

export type ComparisonProvider = {
  id: string;
  name: string;
  isAtv: boolean;
  monthlyPrice: number;
  currency: string;
  leagues: number;
  channels: number | string;
  vod: boolean;
  quality: string;
  devices: number | string;
  countries: number | string;
  support: string;
  highlight?: LocalizedString;
};
