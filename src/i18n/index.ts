import "server-only";

import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";

const dictionaries = { fr, en, de } as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof fr;

export const locales: Locale[] = ["fr", "en", "de"];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  de: "🇩🇪",
};

export function hasLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
