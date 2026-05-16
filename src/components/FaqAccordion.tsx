type Item = { q: string; a: string };
type Props = { items: readonly Item[] };

export function FaqAccordion({ items }: Props) {
  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <details
          key={i}
          className="glass-card rounded-2xl overflow-hidden group transition-all open:bg-white/[0.06] open:border-emerald-400/30"
        >
          <summary className="flex items-center justify-between cursor-pointer list-none p-5 sm:p-6 gap-4">
            <span className="font-semibold text-white text-base sm:text-lg pr-4 text-balance">
              {faq.q}
            </span>
            <span
              aria-hidden
              className="shrink-0 w-9 h-9 rounded-full bg-white/5 group-hover:bg-emerald-400/15 flex items-center justify-center transition-transform duration-300 group-open:rotate-45 group-open:bg-emerald-400 group-open:text-zinc-950"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <div className="px-5 sm:px-6 pb-6 -mt-1 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}
