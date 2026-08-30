// Locale resolution for the tools data records.
//
// This deliberately lives outside `types.ts`: that module is marked
// `server-only`, and `toolLocaleOf` is a real runtime function (not an
// erased type), so a client component importing it would drag the
// server-only guard into the browser bundle and fail the build.
import type { Locale } from "@/i18n";

/** Fallback chain used when a locale's translation has not landed yet. */
const TOOL_FALLBACK: Record<Locale, Locale[]> = {
  fr: ["en"],
  en: ["fr"],
  de: ["en", "fr"],
  es: ["en", "fr"],
  it: ["en", "fr"],
};

/** Resolve `.i18n[locale]` for any tools record, falling back rather than throwing. */
export function toolLocaleOf<T>(i18n: Partial<Record<Locale, T>>, locale: Locale): T {
  const hit = i18n[locale];
  if (hit) return hit;
  for (const alt of TOOL_FALLBACK[locale] ?? []) {
    const f = i18n[alt];
    if (f) return f;
  }
  return Object.values(i18n)[0] as T;
}
