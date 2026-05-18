/**
 * Custom stylized broadcaster emblems — inspired by, not copying, official logos.
 * Each mark uses the channel's signature colors + lettering for instant recognition,
 * rendered as our own SVG interpretation (no trademarked artwork).
 */

type Props = { className?: string };

// Shared dark pill background for "on-black" brand cards
const PillDark = ({ children }: { children: React.ReactNode }) => (
  <>
    <rect width="200" height="80" rx="12" fill="#0c0c0f" />
    {children}
  </>
);

// --- Sky Sport (UK · DE · IT) ---
export function SkySportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <defs>
        <linearGradient id="sky-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00A6E6" />
          <stop offset="100%" stopColor="#0046B5" />
        </linearGradient>
      </defs>
      <rect width="200" height="80" rx="12" fill="url(#sky-bg)" />
      <text
        x="100"
        y="44"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="800"
        fontStyle="italic"
        fontSize="34"
        fill="#fff"
        letterSpacing="-2"
      >
        sky
      </text>
      <text
        x="100"
        y="64"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="800"
        fontSize="13"
        fill="#fff"
        letterSpacing="3"
      >
        SPORT
      </text>
    </svg>
  );
}

// --- DAZN (DE · IT · ES) ---
export function DAZNLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="12" fill="#F8F800" />
      <text
        x="100"
        y="55"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontStyle="italic"
        fontSize="42"
        fill="#000"
        letterSpacing="-2"
      >
        DAZN
      </text>
    </svg>
  );
}

// --- beIN Sports (FR · MENA) ---
export function BeInSportsLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <defs>
        <linearGradient id="bein-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7E1F86" />
          <stop offset="100%" stopColor="#4A0E58" />
        </linearGradient>
      </defs>
      <rect width="200" height="80" rx="12" fill="url(#bein-bg)" />
      <text
        x="100"
        y="38"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontStyle="italic"
        fontSize="24"
        fill="#fff"
        letterSpacing="-0.5"
      >
        beIN
      </text>
      {/* dot accent above the 'i' */}
      <circle cx="93" cy="20" r="2.4" fill="#FFD200" />
      <text
        x="100"
        y="60"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="800"
        fontSize="13"
        fill="#fff"
        letterSpacing="4"
      >
        SPORTS
      </text>
    </svg>
  );
}

// --- Canal+ Sport (France) ---
export function CanalPlusSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <PillDark>
        <text
          x="92"
          y="38"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="22"
          fill="#fff"
          letterSpacing="1"
        >
          CANAL
        </text>
        {/* the "+" mark in brand red */}
        <text
          x="138"
          y="38"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="22"
          fill="#fff"
        >
          +
        </text>
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          fontSize="13"
          fill="#E2C275"
          letterSpacing="4"
        >
          SPORT
        </text>
      </PillDark>
    </svg>
  );
}

// --- RMC Sport (France) ---
export function RMCSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <defs>
        <linearGradient id="rmc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#003C8F" />
          <stop offset="100%" stopColor="#001F4D" />
        </linearGradient>
      </defs>
      <rect width="200" height="80" rx="12" fill="url(#rmc-bg)" />
      {/* diagonal red stripe accent */}
      <path d="M0 60 L200 36 L200 44 L0 68 Z" fill="#E60012" opacity="0.85" />
      <text
        x="100"
        y="38"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontStyle="italic"
        fontSize="28"
        fill="#fff"
        letterSpacing="1"
      >
        RMC
      </text>
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontSize="13"
        fill="#fff"
        letterSpacing="4"
      >
        SPORT
      </text>
    </svg>
  );
}

// --- TNT Sports (UK) ---
export function TNTSportsLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <PillDark>
        <text
          x="100"
          y="42"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="30"
          fill="#FFCD00"
          letterSpacing="4"
        >
          TNT
        </text>
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          fontSize="11"
          fill="#fff"
          letterSpacing="4"
        >
          SPORTS
        </text>
      </PillDark>
    </svg>
  );
}

// --- Sky Bundesliga (Germany) ---
export function SkyBundesligaLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <defs>
        <linearGradient id="skybl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00A6E6" />
          <stop offset="100%" stopColor="#0046B5" />
        </linearGradient>
      </defs>
      <rect width="200" height="80" rx="12" fill="url(#skybl-bg)" />
      <text
        x="100"
        y="36"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="800"
        fontStyle="italic"
        fontSize="22"
        fill="#fff"
        letterSpacing="-1"
      >
        sky
      </text>
      <text
        x="100"
        y="60"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="800"
        fontSize="13"
        fill="#fff"
        letterSpacing="2"
      >
        BUNDESLIGA
      </text>
    </svg>
  );
}

// --- Sport1 (Germany · AT) ---
export function Sport1Logo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="12" fill="#D7102A" />
      {/* diagonal wedge */}
      <path d="M0 80 L200 0 L200 14 L0 80 Z" fill="#fff" opacity="0.08" />
      <text
        x="100"
        y="53"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontStyle="italic"
        fontSize="36"
        fill="#fff"
        letterSpacing="-1.5"
      >
        SPORT
      </text>
      <text
        x="167"
        y="53"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontStyle="italic"
        fontSize="36"
        fill="#fff"
      >
        1
      </text>
    </svg>
  );
}

// --- ServusTV (Austria) ---
export function ServusTVLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <PillDark>
        {/* small "bull" hint with two horns */}
        <path
          d="M86 16 L94 22 M114 16 L106 22"
          stroke="#E73B30"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="100"
          y="42"
          textAnchor="middle"
          fontFamily="ui-serif, Georgia, serif"
          fontWeight="700"
          fontStyle="italic"
          fontSize="22"
          fill="#fff"
        >
          Servus
        </text>
        <text
          x="100"
          y="64"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="15"
          fill="#E73B30"
          letterSpacing="4"
        >
          TV
        </text>
      </PillDark>
    </svg>
  );
}

// --- ORF Sport+ (Austria) ---
export function ORFSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="12" fill="#E30613" />
      {/* white block under ORF for contrast */}
      <rect x="58" y="16" width="84" height="28" rx="4" fill="#fff" />
      <text
        x="100"
        y="36"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontSize="22"
        fill="#E30613"
        letterSpacing="2"
      >
        ORF
      </text>
      <text
        x="100"
        y="62"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontSize="13"
        fill="#fff"
        letterSpacing="3"
      >
        SPORT
      </text>
      <text
        x="175"
        y="62"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="900"
        fontSize="14"
        fill="#fff"
      >
        +
      </text>
    </svg>
  );
}

// --- Eurosport (Pan-Europe) ---
export function EurosportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <PillDark>
        {/* yellow ring */}
        <circle cx="44" cy="40" r="14" fill="#FFD200" />
        <circle cx="44" cy="40" r="6" fill="#0c0c0f" />
        <text
          x="116"
          y="48"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          fontSize="20"
          fill="#fff"
          letterSpacing="-0.5"
        >
          eurosport
        </text>
      </PillDark>
    </svg>
  );
}

// --- Movistar+ (Spain) ---
export function MovistarPlusLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <PillDark>
        {/* green dot accent */}
        <circle cx="32" cy="40" r="9" fill="#19E5C9" />
        <text
          x="116"
          y="48"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          fontSize="20"
          fill="#fff"
          letterSpacing="-0.5"
        >
          movistar
        </text>
        <text
          x="180"
          y="48"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="900"
          fontSize="22"
          fill="#19E5C9"
        >
          +
        </text>
      </PillDark>
    </svg>
  );
}

export type BroadcasterItem = {
  name: string;
  region: string;
  Component: React.ComponentType<Props>;
};

export const broadcasters: BroadcasterItem[] = [
  { name: "Sky Sport", region: "UK · DE · IT", Component: SkySportLogo },
  { name: "DAZN", region: "DE · IT · ES", Component: DAZNLogo },
  { name: "beIN Sports", region: "FR · MENA", Component: BeInSportsLogo },
  { name: "Canal+ Sport", region: "France", Component: CanalPlusSportLogo },
  { name: "RMC Sport", region: "France", Component: RMCSportLogo },
  { name: "TNT Sports", region: "UK", Component: TNTSportsLogo },
  { name: "Sky Bundesliga", region: "Germany", Component: SkyBundesligaLogo },
  { name: "Sport1", region: "Germany · AT", Component: Sport1Logo },
  { name: "ServusTV", region: "Austria", Component: ServusTVLogo },
  { name: "ORF Sport+", region: "Austria", Component: ORFSportLogo },
  { name: "Eurosport", region: "Pan-Europe", Component: EurosportLogo },
  { name: "Movistar+", region: "Spain", Component: MovistarPlusLogo },
];
