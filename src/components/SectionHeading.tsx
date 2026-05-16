type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <header
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`mb-4 text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-400 flex items-center gap-2 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="inline-block h-px w-6 bg-emerald-400/60" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-headline text-3xl sm:text-4xl md:text-5xl text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 text-base leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
