/**
 * Professional, broadcaster-style league cards.
 * Each variant uses the league's official brand colors + typographic identity
 * (no cartoon mascots). Inspired by how DAZN, Fubo, beIN render league selectors.
 */

type LeagueKey =
  | "Premier League"
  | "La Liga"
  | "Serie A"
  | "Bundesliga"
  | "Ligue 1"
  | "Champions League"
  | "NBA"
  | "Formula 1";

type Props = { league: string; country: string };

const variants: Record<LeagueKey, { bg: string; node: React.ReactNode }> = {
  "Premier League": {
    bg: "from-[#37003c] via-[#37003c] to-[#1e0024]",
    node: (
      <div className="flex flex-col items-center">
        <span className="font-display font-extrabold text-white tracking-[0.05em] uppercase text-[15px] leading-none">
          Premier
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5 font-display font-extrabold text-[#00ff87] uppercase text-[13px] tracking-[0.15em]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ff87]" />
          League
        </span>
      </div>
    ),
  },
  "La Liga": {
    bg: "from-[#ee2737] to-[#9e0a18]",
    node: (
      <div className="flex flex-col items-center">
        <span className="font-display italic font-black text-white text-4xl leading-none">La</span>
        <span className="font-display font-black text-white text-2xl tracking-[0.2em] leading-none mt-1">
          LIGA
        </span>
      </div>
    ),
  },
  "Serie A": {
    bg: "from-[#0066b3] to-[#003366]",
    node: (
      <div className="flex flex-col items-center">
        <span className="font-display font-black italic text-white text-5xl leading-none">A</span>
        <span className="mt-1 font-display font-bold text-white text-[11px] tracking-[0.3em] leading-none">
          SERIE
        </span>
      </div>
    ),
  },
  Bundesliga: {
    bg: "from-[#d20515] to-[#7a0010]",
    node: (
      <div className="text-center">
        <span className="font-display font-black text-white text-[16px] tracking-[0.05em] uppercase leading-tight">
          Bundes
          <br />
          liga
        </span>
      </div>
    ),
  },
  "Ligue 1": {
    bg: "from-[#091c3e] to-[#1e3a8a]",
    node: (
      <div className="flex items-baseline gap-2">
        <span className="font-display font-bold text-white text-[13px] tracking-[0.25em] uppercase">
          Ligue
        </span>
        <span className="font-display font-black text-white text-5xl leading-none">1</span>
      </div>
    ),
  },
  "Champions League": {
    bg: "from-[#0a1c4d] via-[#0a1c4d] to-[#020a24]",
    node: (
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1.5 mb-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="w-3 h-3 text-white"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l2.6 6.6L22 9.5l-5.4 4.7L18 22l-6-3.5L6 22l1.4-7.8L2 9.5l7.4-.9z" />
            </svg>
          ))}
        </div>
        <span className="font-display font-extrabold text-white uppercase tracking-[0.2em] text-[12px] leading-none">
          UEFA
        </span>
        <span className="font-display font-extrabold text-white uppercase tracking-[0.05em] text-[16px] leading-none mt-1">
          Champions
        </span>
      </div>
    ),
  },
  NBA: {
    bg: "from-[#1d428a] via-[#1d428a] to-[#c8102e]",
    node: (
      <span className="font-display font-black text-white text-5xl tracking-[0.05em] leading-none">
        NBA
      </span>
    ),
  },
  "Formula 1": {
    bg: "from-[#15151e] to-[#e10600]",
    node: (
      <div className="flex items-baseline">
        <span className="font-display font-black italic text-white text-6xl leading-none">F</span>
        <span className="font-display font-black italic text-[#e10600] bg-white px-1 rounded-sm text-6xl leading-none ml-0.5">
          1
        </span>
      </div>
    ),
  },
};

export function LeagueCard({ league, country }: Props) {
  const v = variants[league as LeagueKey];
  return (
    <div
      className={`group relative aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br ${
        v?.bg ?? "from-zinc-800 to-zinc-900"
      } border border-white/10 hover:border-white/25 transition-colors`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {v?.node ?? (
          <span className="font-display font-bold text-white text-xl">{league}</span>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-[11px] text-white/80 font-medium">{country}</p>
      </div>
    </div>
  );
}
