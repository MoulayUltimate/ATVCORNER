import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // 301 legacy WordPress URLs to the new homepage so Google preserves the
  // SEO authority on re-crawl instead of seeing 404s. The proxy then
  // resolves "/" → "/{lang}" based on geo/Accept-Language.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      { source: "/default", destination: "/", permanent: true },
      { source: "/default/", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/downloads", destination: "/", permanent: true },
      { source: "/downloads/:path*", destination: "/", permanent: true },
    ];
  },
};

export default config;
