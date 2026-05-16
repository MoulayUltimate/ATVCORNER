/**
 * Custom stylized league emblems — inspired by, not copying, official logos.
 * Each mark uses the league's signature colors + shape language for instant recognition.
 */

type Props = { className?: string };

export function PremierLeagueLogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="pl-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38003c" />
          <stop offset="100%" stopColor="#963cff" />
        </linearGradient>
      </defs>
      {/* Lion crown silhouette */}
      <circle cx="60" cy="60" r="48" fill="url(#pl-g)" opacity="0.95" />
      <path
        d="M40 50c0-8 8-14 20-14s20 6 20 14c0 4-2 8-6 10v6c0 8-6 14-14 14s-14-6-14-14v-6c-4-2-6-6-6-10z"
        fill="#00ff87"
      />
      <circle cx="52" cy="56" r="3" fill="#38003c" />
      <circle cx="68" cy="56" r="3" fill="#38003c" />
      <path d="M55 68c2 3 8 3 10 0" stroke="#38003c" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="60" y="98" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="11" fill="#fff" letterSpacing="1">
        PREMIER
      </text>
    </svg>
  );
}

export function LaLigaLogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="ll-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ee2737" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M30 28h60v40c0 18-14 32-30 38-16-6-30-20-30-38V28z"
        fill="url(#ll-g)"
        opacity="0.95"
      />
      <text x="60" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="28" fill="#fff" fontStyle="italic">
        La
      </text>
      <text x="60" y="88" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="22" fill="#fff" letterSpacing="2">
        LIGA
      </text>
    </svg>
  );
}

export function SerieALogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="sa-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#008fd7" />
          <stop offset="100%" stopColor="#003d82" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="48" fill="url(#sa-g)" opacity="0.95" />
      <text x="60" y="55" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="38" fill="#fff" fontStyle="italic">
        A
      </text>
      <text x="60" y="80" textAnchor="middle" fontFamily="system-ui" fontWeight="700" fontSize="11" fill="#fff" letterSpacing="3">
        SERIE
      </text>
      <path d="M30 90h60" stroke="#fff" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

export function BundesligaLogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="bl-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d20515" />
          <stop offset="100%" stopColor="#7a0010" />
        </linearGradient>
      </defs>
      <rect x="14" y="36" width="92" height="48" rx="6" fill="url(#bl-g)" opacity="0.95" />
      <text x="60" y="68" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="20" fill="#fff" letterSpacing="1">
        BUNDES
      </text>
      <text x="60" y="100" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="14" fill="#d20515" letterSpacing="3">
        LIGA
      </text>
    </svg>
  );
}

export function Ligue1Logo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="l1-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#091c3e" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      {/* Hexagon (France shape inspiration) */}
      <polygon
        points="60,16 100,38 100,82 60,104 20,82 20,38"
        fill="url(#l1-g)"
        opacity="0.95"
      />
      <text x="60" y="62" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="36" fill="#fff">
        1
      </text>
      <text x="60" y="84" textAnchor="middle" fontFamily="system-ui" fontWeight="700" fontSize="11" fill="#fff" letterSpacing="3">
        LIGUE
      </text>
    </svg>
  );
}

export function ChampionsLeagueLogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <radialGradient id="ucl-g">
          <stop offset="0%" stopColor="#1a4ee6" />
          <stop offset="100%" stopColor="#0a1c4d" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="48" fill="url(#ucl-g)" opacity="0.95" />
      {/* 8-star pattern */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 60 + Math.cos(rad) * 28;
        const cy = 60 + Math.sin(rad) * 28;
        return (
          <polygon
            key={i}
            points="0,-7 2,-2 7,-2 3,1 5,7 0,3 -5,7 -3,1 -7,-2 -2,-2"
            fill="#fff"
            transform={`translate(${cx} ${cy})`}
          />
        );
      })}
      <circle cx="60" cy="60" r="14" fill="#fff" />
      <text x="60" y="65" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="11" fill="#0a1c4d">
        UCL
      </text>
    </svg>
  );
}

export function NBALogo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="nba-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d428a" />
          <stop offset="50%" stopColor="#fff" />
          <stop offset="50%" stopColor="#c8102e" />
          <stop offset="100%" stopColor="#c8102e" />
        </linearGradient>
      </defs>
      <rect x="30" y="20" width="60" height="80" rx="30" fill="url(#nba-g)" opacity="0.95" />
      {/* Player silhouette */}
      <circle cx="60" cy="42" r="6" fill="#fff" />
      <path d="M60 50c-8 0-10 8-10 14v18h6v-12h8v12h6V64c0-6-2-14-10-14z" fill="#fff" />
      <text x="60" y="92" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontSize="11" fill="#fff" letterSpacing="2">
        NBA
      </text>
    </svg>
  );
}

export function F1Logo({ className = "w-32 h-32" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="f1-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#15151e" />
          <stop offset="100%" stopColor="#e10600" />
        </linearGradient>
        <pattern id="checker" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#fff" />
          <rect x="4" y="4" width="4" height="4" fill="#fff" />
        </pattern>
      </defs>
      <rect x="14" y="36" width="92" height="48" rx="6" fill="url(#f1-g)" opacity="0.95" />
      <rect x="76" y="36" width="30" height="48" rx="6" fill="url(#checker)" opacity="0.5" />
      <text x="48" y="74" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontStyle="italic" fontSize="38" fill="#fff">
        F
      </text>
      <text x="68" y="74" textAnchor="middle" fontFamily="system-ui" fontWeight="900" fontStyle="italic" fontSize="38" fill="#e10600">
        1
      </text>
    </svg>
  );
}

export const leagueLogoMap: Record<string, React.ComponentType<Props>> = {
  "Premier League": PremierLeagueLogo,
  "La Liga": LaLigaLogo,
  "Serie A": SerieALogo,
  Bundesliga: BundesligaLogo,
  "Ligue 1": Ligue1Logo,
  "Champions League": ChampionsLeagueLogo,
  NBA: NBALogo,
  "Formula 1": F1Logo,
};
