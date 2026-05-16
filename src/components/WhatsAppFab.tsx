import { whatsappUrl } from "@/lib/site";

type Props = {
  label?: string;
  aria?: string;
};

export function WhatsAppFab({
  label = "Buy on WhatsApp !!",
  aria = "Buy on WhatsApp",
}: Props) {
  // Split the trailing "!!" so we can animate it
  const match = label.match(/^(.*?)(\s*!+)\s*$/);
  const main = match ? match[1].trim() : label;
  const bang = match ? match[2].trim() : "";

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={aria}
      className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3"
    >
      {/* Floating label pill — hidden on small screens */}
      <span
        className="wa-label hidden sm:flex items-center px-4 py-2 rounded-full bg-[#25D366] text-white font-display font-bold text-sm shadow-lg whitespace-nowrap select-none leading-none"
      >
        <span className="inline-block">{main}</span>
        {bang && (
          <span className="wa-bang text-yellow-300 ml-1 inline-block">{bang}</span>
        )}
      </span>

      {/* FAB button */}
      <span className="relative flex items-center justify-center w-14 h-14">
        {/* Outer ping ring */}
        <span
          aria-hidden
          className="wa-ping absolute inset-0 rounded-full bg-[#25D366]"
        />
        {/* Inner solid button */}
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 group-hover:bg-emerald-400 transition-colors">
          <svg
            viewBox="0 0 32 32"
            className="wa-wiggle w-7 h-7"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M16.001 3C9.373 3 4 8.373 4 15c0 2.475.762 4.78 2.062 6.69L4 29l7.488-1.974A11.94 11.94 0 0 0 16 27c6.628 0 12-5.373 12-12s-5.372-12-11.999-12Zm0 21.692c-1.85 0-3.633-.502-5.197-1.45l-.372-.222-4.444 1.17 1.187-4.328-.241-.385A9.674 9.674 0 0 1 6.308 15C6.308 9.65 10.65 5.308 16 5.308S25.692 9.65 25.692 15 21.351 24.692 16.001 24.692Zm5.508-7.252c-.302-.151-1.785-.881-2.062-.981-.276-.101-.477-.151-.679.151-.201.301-.778.98-.953 1.18-.176.202-.351.227-.653.075-.302-.151-1.274-.469-2.426-1.494-.896-.799-1.5-1.787-1.676-2.088-.176-.302-.019-.466.132-.617.135-.135.302-.351.453-.526.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.527-.075-.151-.679-1.639-.93-2.245-.244-.586-.493-.507-.679-.516l-.579-.01a1.112 1.112 0 0 0-.804.376c-.276.302-1.054 1.03-1.054 2.511 0 1.481 1.079 2.913 1.229 3.114.151.201 2.123 3.243 5.144 4.546.719.31 1.279.495 1.716.633.721.229 1.378.197 1.897.12.579-.087 1.785-.729 2.037-1.434.252-.706.252-1.31.176-1.434-.075-.125-.276-.201-.578-.352Z"
            />
          </svg>
        </span>
      </span>
    </a>
  );
}
