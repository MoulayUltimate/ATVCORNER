import type { Locale } from "@/i18n";

/**
 * Read a locale-keyed map safely.
 *
 * Component copy is translated locale by locale; this lets a locale ship
 * before every string is translated, falling back to English (then French)
 * instead of crashing or rendering `undefined`.
 */
export function pick<T>(map: Partial<Record<Locale, T>>, lang: Locale): T {
  return (map[lang] ?? map.en ?? map.fr ?? Object.values(map)[0]) as T;
}
