// Brand-recognizable device icons. Pure SVG, currentColor-friendly.
// Keys match values used in src/data/devices.ts (icon field) AND
// the device names used on the homepage devices grid.

type Props = {
  kind: string;
  className?: string;
};

export function DeviceBrandIcon({ kind, className = "w-8 h-8" }: Props) {
  switch (kind) {
    // --- Smart TV (Samsung / LG) ---
    case "tv":
    case "Smart TV":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
          <rect x="2.5" y="4" width="19" height="13" rx="1.6" />
          <path d="M8 20.5h8M12 17v3.5" strokeLinecap="round" />
          <circle cx="18.5" cy="7" r="0.6" fill="currentColor" />
        </svg>
      );

    // --- Amazon Fire TV Stick (flame) ---
    case "cast":
    case "Fire Stick":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.5c.6 2.8 3.2 4.2 3.7 6.8.4 2-.4 3.4-1.6 4.2.2-.9-.1-1.9-.9-2.6.4 2.1-1.6 3.3-1.6 5.2 0 1.4 1 2.4 2.2 2.4 2.8 0 5.2-2.5 5.2-5.6 0-4.6-4.6-5.7-5-10.4-.6 1-1.7 1.8-2 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 12c-1.8 1-2.8 2.6-2.8 4.4 0 2.6 2.1 4.6 4.8 4.6"
          />
        </svg>
      );

    // --- Android (robot head) ---
    case "smartphone":
    case "Android":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 14.5C4 10.9 7.6 8 12 8s8 2.9 8 6.5H4Z"
          />
          <path strokeLinecap="round" d="M5.5 6 7 8M18.5 6 17 8" />
          <circle cx="9" cy="12" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="12" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );

    // --- Apple (iOS / Apple TV) ---
    case "phone_iphone":
    case "iOS":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2.1-.9-3.4-.9-1.8 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3 0 1.8-.8 3.4-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.2-2.5 1-1.5 1.4-2.9 1.4-3-.1 0-2.8-1-2.8-4.3ZM13.9 4.7c.7-.8 1.1-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.2-.6 2.9-1.4Z" />
        </svg>
      );

    // --- Windows (4-pane logo) ---
    case "laptop":
    case "Windows / Mac":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M3.5 5.7 11 4.7v6.6H3.5V5.7Zm0 12.6v-5.6H11v6.6l-7.5-1Zm8.5-7H21V4l-9 1.2v6.1Zm0 8L21 20v-7.3h-9V19.3Z" />
        </svg>
      );

    // --- MAG Box / Enigma2 (set-top box) ---
    case "router":
    case "MAG Box":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
          <rect x="2.5" y="7" width="19" height="10" rx="1.6" />
          <path strokeLinecap="round" d="M6 12h5" />
          <circle cx="16" cy="12" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="18.5" cy="12" r="0.7" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" d="M8 4 12 7M16 4 12 7M3 20l3-3M21 20l-3-3" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path strokeLinecap="round" d="M8 21h8M12 17v4" />
        </svg>
      );
  }
}
