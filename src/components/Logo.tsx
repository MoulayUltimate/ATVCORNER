import Link from "next/link";

export function Logo({
  size = "md",
  href = "/",
}: {
  size?: "sm" | "md" | "lg";
  href?: string;
}) {
  const sizes = {
    sm: { wrap: "gap-2", icon: "h-7 w-7", text: "text-lg" },
    md: { wrap: "gap-3", icon: "h-9 w-9", text: "text-xl" },
    lg: { wrap: "gap-3", icon: "h-12 w-12", text: "text-3xl" },
  } as const;
  const s = sizes[size];

  return (
    <Link href={href} className={`flex items-center ${s.wrap} group`} aria-label="ATV Corner home">
      <span
        className={`${s.icon} relative flex items-center justify-center rounded-lg bg-emerald-400`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-2/3 w-2/3 text-zinc-950"
          aria-hidden
        >
          <path d="M5 4l14 8-14 8V4z" fill="currentColor" />
        </svg>
      </span>
      <span className={`font-display font-extrabold tracking-tight ${s.text} text-white`}>
        ATV<span className="text-emerald-400">Corner</span>
      </span>
    </Link>
  );
}
