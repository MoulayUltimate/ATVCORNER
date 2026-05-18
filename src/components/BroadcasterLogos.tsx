/**
 * Custom stylized broadcaster emblems — inspired by, not copying, official logos.
 * Each mark uses the channel's signature colors + lettering for instant recognition.
 */

type Props = { className?: string };

// --- Pan-European / UK ---

export function SkySportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#0072CE" />
      <text x="100" y="36" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="26" fill="#fff" letterSpacing="-1">
        sky
      </text>
      <text x="100" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="16" fill="#fff" letterSpacing="2">
        SPORT
      </text>
    </svg>
  );
}

export function DAZNLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#F8F800" />
      <text x="100" y="54" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="38" fill="#000" letterSpacing="-2">
        DAZN
      </text>
    </svg>
  );
}

export function BeInSportsLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#7E1F86" />
      <text x="100" y="36" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontStyle="italic" fontSize="22" fill="#fff" letterSpacing="0.5">
        beIN
      </text>
      <text x="100" y="60" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#fff" letterSpacing="2">
        SPORTS
      </text>
    </svg>
  );
}

export function EurosportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#000" />
      <circle cx="46" cy="40" r="16" fill="#FFD200" />
      <text x="112" y="48" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="18" fill="#fff" letterSpacing="0.5">
        eurosport
      </text>
    </svg>
  );
}

export function TNTSportsLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#000" />
      <text x="100" y="38" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="26" fill="#FFCD00" letterSpacing="3">
        TNT
      </text>
      <text x="100" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#fff" letterSpacing="3">
        SPORTS
      </text>
    </svg>
  );
}

// --- France ---

export function CanalPlusSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#000" />
      <text x="100" y="36" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="22" fill="#fff">
        CANAL+
      </text>
      <text x="100" y="60" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#E2C275" letterSpacing="3">
        SPORT
      </text>
    </svg>
  );
}

export function RMCSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#003C8F" />
      <text x="100" y="38" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontStyle="italic" fontSize="26" fill="#fff" letterSpacing="1">
        RMC
      </text>
      <text x="100" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#E60012" letterSpacing="3">
        SPORT
      </text>
    </svg>
  );
}

// --- Germany ---

export function SkyBundesligaLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#0072CE" />
      <text x="100" y="34" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="22" fill="#fff" letterSpacing="-1">
        sky
      </text>
      <text x="100" y="58" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="13" fill="#fff" letterSpacing="2">
        BUNDESLIGA
      </text>
    </svg>
  );
}

export function Sport1Logo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#D7102A" />
      <text x="100" y="52" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontStyle="italic" fontSize="34" fill="#fff" letterSpacing="-1">
        SPORT1
      </text>
    </svg>
  );
}

// --- Austria ---

export function ServusTVLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#1B1B1B" />
      <text x="100" y="38" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="22" fill="#fff" letterSpacing="0.5">
        Servus
      </text>
      <text x="100" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#E73B30" letterSpacing="3">
        TV
      </text>
    </svg>
  );
}

export function ORFSportLogo({ className = "w-full h-20" }: Props) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden>
      <rect width="200" height="80" rx="10" fill="#E30613" />
      <text x="100" y="38" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="22" fill="#fff" letterSpacing="3">
        ORF
      </text>
      <text x="100" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="800" fontSize="14" fill="#fff" letterSpacing="2">
        SPORT +
      </text>
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
];
