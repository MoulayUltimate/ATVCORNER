import "server-only";

import fr from "./dictionaries/fr.json";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";
import es from "./dictionaries/es.json";
import it from "./dictionaries/it.json";

const dictionaries = { fr, en, de, es, it } as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof fr;

export const locales: Locale[] = ["fr", "en", "de", "es", "it"];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  de: "🇩🇪",
  es: "🇪🇸",
  it: "🇮🇹",
};

export function hasLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
