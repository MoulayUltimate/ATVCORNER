/**
 * Pure CSS hero mockup — a stylized smart-TV streaming UI.
 * Replaces the AI-collage hero image; renders crisp at any resolution.
 */

const featured = {
  title: "UEFA Champions League",
  sub: "Demi-finale · En direct",
  bg: "from-[#0a1c4d] via-[#1a4ee6] to-[#020a24]",
};

const tiles = [
  { label: "Premier League", bg: "from-[#37003c] to-[#963cff]" },
  { label: "Formula 1", bg: "from-[#15151e] to-[#e10600]" },
  { label: "La Liga", bg: "from-[#ee2737] to-[#9e0a18]" },
  { label: "NBA", bg: "from-[#1d428a] to-[#c8102e]" },
  { label: "Serie A", bg: "from-[#0066b3] to-[#003366]" },
  { label: "Ligue 1", bg: "from-[#091c3e] to-[#1e3a8a]" },
];

export function HeroMockup() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 bg-emerald-500/10 blur-3xl rounded-full"
      />

      {/* TV bezel */}
      <div className="relative rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0a0c12]">
          {/* Top bar */}
          <div className="absolute top-0 inset-x-0 h-9 flex items-center justify-between px-4 bg-gradient-to-b from-black/60 to-transparent z-10">
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-[11px] text-white tracking-tight">
                ATV<span className="text-emerald-400">Corner</span>
              </span>
              <span className="hidden sm:flex items-center gap-3 text-[9px] font-medium uppercase tracking-widest text-white/60">
                <span className="text-white">Accueil</span>
                <span>Films</span>
                <span>Séries</span>
                <span>Sport</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-full bg-red-500/90 text-white text-[8px] font-bold tracking-widest">
              <span className="w-1 h-1 rounded-full bg-white" />
              LIVE
            </div>
          </div>

          {/* Featured banner */}
          <div className={`relative h-[58%] bg-gradient-to-br ${featured.bg} flex items-end`}>
            {/* Star pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              {[
                [12, 28], [28, 18], [50, 12], [72, 22], [88, 30],
                [18, 48], [40, 42], [62, 50], [80, 44],
              ].map(([x, y], i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className="absolute w-2 h-2 text-white"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2l2.6 6.6L22 9.5l-5.4 4.7L18 22l-6-3.5L6 22l1.4-7.8L2 9.5l7.4-.9z" />
                </svg>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-transparent to-transparent" />
            <div className="relative p-4 sm:p-5">
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-1.5">
                En direct · 4K HDR
              </p>
              <h3 className="font-display font-extrabold text-white text-base sm:text-xl leading-tight">
                {featured.title}
              </h3>
              <p className="text-[10px] text-white/70 mt-1">{featured.sub}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400 text-zinc-950 text-[10px] font-bold">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Regarder
              </div>
            </div>
          </div>

          {/* Tile rail */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] p-3 pt-2">
            <p className="text-[9px] font-semibold tracking-widest uppercase text-white/50 mb-2">
              Sport en direct
            </p>
            <div className="grid grid-cols-6 gap-1.5">
              {tiles.map((t) => (
                <div
                  key={t.label}
                  className={`aspect-[3/4] rounded-md bg-gradient-to-br ${t.bg} relative overflow-hidden ring-1 ring-white/10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-1">
                    <p className="text-[7px] font-bold text-white leading-tight truncate">
                      {t.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TV stand */}
        <div className="mx-auto mt-2 h-1.5 w-24 bg-zinc-800 rounded-b-lg" />
      </div>

      {/* Floating badges — pushed outside the TV bezel */}
      <div className="absolute -bottom-5 -left-3 sm:-left-5 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 shadow-xl shadow-black/40 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 leading-none">Chaînes live</p>
          <p className="font-display font-extrabold text-white text-sm leading-tight mt-0.5">66 000+</p>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-3 sm:-right-5 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 shadow-xl shadow-black/40 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 leading-none">Activation</p>
          <p className="font-display font-extrabold text-white text-sm leading-tight mt-0.5">5 minutes</p>
        </div>
      </div>
    </div>
  );
}
