export type ChannelCategory = {
  id: string;
  name: string;
  icon: string;
  count: number;
  highlights: string[];
};

export const categories: ChannelCategory[] = [
  {
    id: "sports",
    name: "Sports en Direct",
    icon: "sports_soccer",
    count: 4200,
    highlights: [
      "Premier League",
      "La Liga",
      "Serie A",
      "Bundesliga",
      "Ligue 1",
      "Champions League",
      "Europa League",
      "NBA",
      "NFL",
      "UFC",
      "Formule 1",
      "MotoGP",
    ],
  },
  {
    id: "movies",
    name: "Cinéma & VOD",
    icon: "movie",
    count: 70000,
    highlights: ["Blockbusters 4K", "Sorties cinéma", "Classiques", "Documentaires", "Anime"],
  },
  {
    id: "series",
    name: "Séries Premium",
    icon: "live_tv",
    count: 18000,
    highlights: ["HBO", "Netflix Originals", "Apple TV+", "Disney+", "Prime Video"],
  },
  {
    id: "intl",
    name: "Chaînes Internationales",
    icon: "public",
    count: 66000,
    highlights: ["🇫🇷 France", "🇪🇸 España", "🇮🇹 Italia", "🇩🇪 Deutschland", "🇬🇧 UK", "🇺🇸 USA", "🇨🇦 Canada", "🇲🇦 Maroc", "🇩🇿 Algérie", "🇹🇳 Tunisie"],
  },
  {
    id: "kids",
    name: "Jeunesse & Famille",
    icon: "child_care",
    count: 320,
    highlights: ["Disney Channel", "Cartoon Network", "Nickelodeon", "Boomerang", "Gulli"],
  },
  {
    id: "news",
    name: "Info & Documentaires",
    icon: "newspaper",
    count: 540,
    highlights: ["BFM TV", "CNN", "BBC", "Al Jazeera", "France 24", "National Geographic"],
  },
];

export const vodHighlights = [
  { title: "Avatar: The Way of Water", tag: "4K ULTRA HD", category: "Sci-Fi", poster: "/stitch/vod/avatar.png" },
  { title: "The Super Mario Bros. Movie", tag: "FAMILY", category: "Animation", poster: "/stitch/vod/super-mario-bros.png" },
  { title: "Tulsa King", tag: "PREMIUM SERIES", category: "Drama", poster: "/stitch/vod/tulsa-king.png" },
  { title: "Demon Slayer: Mugen Train", tag: "ANIME 4K", category: "Anime", poster: "/stitch/vod/demon-slayer.png" },
  { title: "Mrs. Davis", tag: "EXCLUSIVE", category: "Thriller", poster: "/stitch/vod/mrs-davis.png" },
  { title: "The Boys", tag: "PRIME ORIGINAL", category: "Drama", poster: "/stitch/vod/the-boys.png" },
  { title: "Bupkis", tag: "PEACOCK", category: "Comedy", poster: "/stitch/vod/bupkis.png" },
  { title: "The Pod", tag: "EXCLUSIVE", category: "Documentary", poster: "/stitch/vod/the-pod.png" },
];

export const sportsHighlights = [
  { league: "Premier League", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Angleterre", color: "from-purple-600 to-purple-900" },
  { league: "La Liga", country: "🇪🇸 Espagne", color: "from-red-600 to-orange-700" },
  { league: "Serie A", country: "🇮🇹 Italie", color: "from-blue-600 to-blue-900" },
  { league: "Bundesliga", country: "🇩🇪 Allemagne", color: "from-red-700 to-rose-900" },
  { league: "Ligue 1", country: "🇫🇷 France", color: "from-blue-700 to-indigo-900" },
  { league: "Champions League", country: "🏆 Europe", color: "from-emerald-500 to-emerald-800" },
  { league: "NBA", country: "🇺🇸 USA", color: "from-orange-600 to-red-800" },
  { league: "Formula 1", country: "🌍 Mondial", color: "from-red-500 to-zinc-900" },
];

// WhatsApp customer review screenshots (real conversations — images only, no fabricated quotes).
// s1 and s2 show the service running on a TV — keep those first so they appear before the fold of the marquee.
export const whatsappReviews = [
  { id: "r1", image: "/stitch/reviews/s1.png" },
  { id: "r2", image: "/stitch/reviews/s2.png" },
  { id: "r3", image: "/stitch/reviews/s6.png" },
  { id: "r4", image: "/stitch/reviews/s3.png" },
  { id: "r5", image: "/stitch/reviews/s4.png" },
];
