// SEO landing page content — keyword-targeted per page & language.
// Keep semantic, original, no competitor brand names, no piracy language.

import type { Locale } from "@/i18n";

export type SeoContent = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  features: { h: string; p: string }[];
  sections: { h: string; p: string }[];
  faq: { q: string; a: string }[];
  cta: string;
  /** Hero/OG image (stock photo + vector labels), locale-specific. */
  cover?: string;
  /** In-body descriptive image, rendered between the sections. */
  image?: { src: string; alt: string; caption?: string };
};

export type Page =
  | "iptv-premium"
  | "iptv-8k"
  | "iptv-4k"
  | "m3u-playlist"
  | "xtream-codes"
  | "iptv-sport"
  | "best-iptv-alternatives"
  | "iptv-free-trial"
  | "best-iptv-service"
  | "iptv-subscription"
  | "iptv-firestick"
  | "iptv-smarters-pro"
  | "cable-tv-alternative"
  | "iptv-deutschland"
  | "iptv-roku"
  | "iptv-usa"
  | "iptv-apple-tv"
  | "iptv-android-tv"
  | "iptv-mag-box"
  | "iptv-canada"
  | "iptv-uk"
  | "iptv-france"
  | "iptv-espana"
  | "iptv-italia";

const content: Record<Page, Partial<Record<Locale, SeoContent>>> =
  {} as Record<Page, Partial<Record<Locale, SeoContent>>>;

Object.assign(content, {
  // ===========================================================================
  // /iptv-premium — Targets "premium", "ott premium", "ott", "premium ott"
  // ===========================================================================
  "iptv-premium": {
    fr: {
      metaTitle: "Abonnement IPTV Premium — OTT 8K & Streaming Pro",
      metaDesc:
        "Abonnement IPTV Premium ATV Corner : OTT 4K/8K Ultra HD, 66 000+ chaînes, sports, films, séries. Activation instantanée, anti-freeze, support 24/7.",
      eyebrow: "IPTV Premium · OTT 4K/8K",
      h1: "L'abonnement IPTV",
      h1Accent: "Premium",
      intro:
        "ATV Corner Premium combine la puissance d'un service OTT de nouvelle génération avec une stabilité serveur professionnelle. Vous obtenez plus de 66 000 chaînes internationales, une bibliothèque VOD illimitée et la qualité 4K/8K Ultra HD sur tous vos écrans.",
      features: [
        { h: "Qualité OTT 8K", p: "Encodage premium HEVC/H.265, bitrate adaptatif, zéro pixelisation même en sport live." },
        { h: "Serveurs Tier 1", p: "Infrastructure européenne redondante avec CDN — moins de 0,1 % de coupures mesurées sur 30 jours." },
        { h: "Catalogue Premium", p: "Toutes les chaînes premium : sports, cinéma, séries, jeunesse, info, internationales." },
        { h: "Activation immédiate", p: "Identifiants livrés en moins de 5 minutes par WhatsApp ou email après paiement sécurisé." },
      ],
      sections: [
        {
          h: "Qu'est-ce qu'un service IPTV Premium ?",
          p: "Un service IPTV premium (Over-The-Top, OTT) diffuse la télévision via internet plutôt que par satellite ou câble. Avec ATV Corner Premium, vous bénéficiez d'un accès direct à des serveurs haut débit qui transmettent chaque flux en temps réel, sans tampon ni perte de qualité. C'est l'évolution naturelle de la TV : plus de chaînes, meilleure qualité, accessible partout.",
        },
        {
          h: "Pourquoi choisir ATV Corner Premium",
          p: "Beaucoup de services OTT proposent un catalogue limité ou des serveurs surchargés. ATV Corner Premium investit dans une infrastructure Tier 1 européenne : nos serveurs sont dimensionnés pour 10× la charge réelle, garantissant une stabilité exceptionnelle pendant les matchs de Champions League, les blockbusters cinéma et les pics d'audience.",
        },
        {
          h: "Compatibilité totale",
          p: "L'abonnement Premium fonctionne sur Smart TV (Samsung, LG, Android TV), Amazon Fire TV Stick, Apple TV, iPhone, iPad, smartphones Android, MAG Box, Enigma2, Windows, macOS et Linux. Un seul abonnement, tous vos écrans.",
        },
      ],
      faq: [
        { q: "Quelle différence entre IPTV et OTT premium ?", a: "OTT (Over-The-Top) désigne tout service de streaming livré via internet, comme Netflix ou Prime Video. L'IPTV premium est une forme d'OTT spécialisée dans la diffusion en direct de chaînes TV — sport, info, divertissement — avec EPG et catalogue VOD intégré." },
        { q: "Le service Premium est-il plus cher ?", a: "Non. Nos prix démarrent à 15 € pour un mois et 60 € pour 12 mois. La qualité Premium est incluse par défaut sur tous nos plans." },
        { q: "Quelle garantie en cas d'insatisfaction ?", a: "Vous bénéficiez d'une garantie satisfait ou remboursé sous 7 jours, sans question. Si la qualité ou la stabilité ne vous convient pas, nous remboursons intégralement votre abonnement." },
      ],
      cta: "Regarder maintenant",
    },
    en: {
      metaTitle: "Premium IPTV Subscription — 8K OTT Streaming",
      metaDesc:
        "ATV Corner Premium IPTV: 4K/8K Ultra HD OTT streaming, 66,000+ international channels, sports, movies, series. Instant activation, anti-freeze, 24/7 support.",
      eyebrow: "Premium IPTV · 4K/8K OTT",
      h1: "The",
      h1Accent: "Premium",
      intro:
        "ATV Corner Premium combines next-generation OTT streaming with professional-grade server stability. You get 66,000+ international channels, unlimited VOD, and 4K/8K Ultra HD quality on every screen.",
      features: [
        { h: "8K OTT Quality", p: "Premium HEVC/H.265 encoding, adaptive bitrate, zero pixelation — even on live sports." },
        { h: "Tier 1 Servers", p: "Redundant European infrastructure with CDN — under 0.1% measured downtime over 30 days." },
        { h: "Premium Catalog", p: "All premium channels: sports, cinema, series, kids, news, international." },
        { h: "Instant Activation", p: "Credentials delivered in under 5 minutes via WhatsApp or email after secure payment." },
      ],
      sections: [
        {
          h: "What is a Premium IPTV service?",
          p: "A premium IPTV (Over-The-Top, OTT) service streams television over the internet rather than satellite or cable. With ATV Corner Premium, you get direct access to high-bandwidth servers that deliver every stream in real time, with no buffering or quality loss. It's the natural evolution of TV: more channels, better quality, available anywhere.",
        },
        {
          h: "Why choose ATV Corner Premium",
          p: "Many OTT services offer limited catalogs or overloaded servers. ATV Corner Premium invests in Tier 1 European infrastructure — our servers are sized for 10× actual load, guaranteeing exceptional stability during Champions League matches, blockbuster releases, and peak hours.",
        },
        {
          h: "Full compatibility",
          p: "The Premium subscription works on Smart TV (Samsung, LG, Android TV), Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android phones, MAG Box, Enigma2, Windows, macOS and Linux. One subscription, every screen.",
        },
      ],
      faq: [
        { q: "What's the difference between IPTV and premium OTT?", a: "OTT (Over-The-Top) refers to any streaming service delivered via internet, like Netflix or Prime Video. Premium IPTV is a specialized form of OTT focused on live TV channel delivery — sports, news, entertainment — with EPG and integrated VOD library." },
        { q: "Is the Premium service more expensive?", a: "No. Our prices start at $16 for one month and $65 for 12 months. Premium quality is included by default on all our plans." },
        { q: "What guarantee do I have if I'm not satisfied?", a: "You're covered by a 7-day money-back guarantee, no questions asked. If the quality or stability doesn't meet your expectations, we refund your subscription in full." },
      ],
      cta: "Watch now",
    },
    de: {
      metaTitle: "Premium IPTV Abo — 8K OTT Streaming",
      metaDesc:
        "ATV Corner Premium IPTV: 4K/8K Ultra HD OTT Streaming, 66.000+ internationale Sender, Sport, Filme, Serien. Sofortige Aktivierung, anti-freeze, 24/7 Support.",
      eyebrow: "Premium IPTV · 4K/8K OTT",
      h1: "Das",
      h1Accent: "Premium",
      intro:
        "ATV Corner Premium kombiniert OTT-Streaming der nächsten Generation mit professioneller Serverstabilität. Sie erhalten über 66.000 internationale Sender, unbegrenztes VOD und 4K/8K Ultra HD-Qualität auf jedem Bildschirm.",
      features: [
        { h: "8K OTT-Qualität", p: "Premium HEVC/H.265-Kodierung, adaptive Bitrate, keine Pixelierung — auch bei Live-Sport." },
        { h: "Tier-1-Server", p: "Redundante europäische Infrastruktur mit CDN — unter 0,1% gemessene Ausfallzeit in 30 Tagen." },
        { h: "Premium-Katalog", p: "Alle Premium-Sender: Sport, Kino, Serien, Kinder, Nachrichten, international." },
        { h: "Sofortige Aktivierung", p: "Zugangsdaten in unter 5 Minuten per WhatsApp oder E-Mail nach sicherer Bezahlung." },
      ],
      sections: [
        {
          h: "Was ist ein Premium-IPTV-Dienst?",
          p: "Ein Premium-IPTV-Dienst (Over-The-Top, OTT) überträgt Fernsehen über das Internet statt über Satellit oder Kabel. Mit ATV Corner Premium erhalten Sie direkten Zugriff auf Hochleistungsserver, die jeden Stream in Echtzeit ohne Puffer oder Qualitätsverlust liefern.",
        },
        {
          h: "Warum ATV Corner Premium wählen",
          p: "Viele OTT-Dienste bieten begrenzte Kataloge oder überlastete Server. ATV Corner Premium investiert in Tier-1-Infrastruktur in Europa — unsere Server sind für die 10-fache tatsächliche Last dimensioniert und garantieren außergewöhnliche Stabilität bei Champions-League-Spielen, Blockbustern und Spitzenzeiten.",
        },
        {
          h: "Volle Kompatibilität",
          p: "Das Premium-Abonnement funktioniert auf Smart TV (Samsung, LG, Android TV), Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android-Handys, MAG Box, Enigma2, Windows, macOS und Linux.",
        },
      ],
      faq: [
        { q: "Was ist der Unterschied zwischen IPTV und Premium-OTT?", a: "OTT (Over-The-Top) bezeichnet jeden Streaming-Dienst, der über das Internet bereitgestellt wird, wie Netflix oder Prime Video. Premium-IPTV ist eine spezialisierte OTT-Form für Live-TV-Sender — Sport, Nachrichten, Unterhaltung — mit EPG und integrierter VOD-Bibliothek." },
        { q: "Ist der Premium-Service teurer?", a: "Nein. Unsere Preise beginnen bei 15 € für einen Monat und 60 € für 12 Monate. Premium-Qualität ist in allen Plänen enthalten." },
        { q: "Welche Garantie habe ich bei Unzufriedenheit?", a: "Sie genießen eine 7-tägige Geld-zurück-Garantie, ohne Fragen. Wenn Qualität oder Stabilität nicht überzeugen, erstatten wir Ihr Abo vollständig." },
      ],
      cta: "Jetzt schauen",
    },
  },

  // ===========================================================================
  // /iptv-8k — Targets "8k", "strong 8k", "8k vip", "8k player vip"
  // ===========================================================================
  "iptv-8k": {
    fr: {
      metaTitle: "IPTV 8K Ultra HD — Streaming 8K VIP",
      metaDesc:
        "IPTV 8K Ultra HD ATV Corner : la résolution la plus élevée du marché, encodage HEVC, débit garanti. Sport en 8K, films 8K, serveurs premium.",
      eyebrow: "IPTV 8K Ultra HD · VIP Stream",
      h1: "Le streaming",
      h1Accent: "8K Ultra HD",
      intro:
        "L'IPTV 8K représente la nouvelle frontière du streaming : 7680×4320 pixels, 16× plus de détails qu'en Full HD. ATV Corner met à votre disposition une infrastructure capable de délivrer ces flux haute densité, pour une expérience cinéma à domicile inégalée.",
      features: [
        { h: "Résolution 8K", p: "Jusqu'à 7680×4320 pixels — 4× la définition 4K, 16× la Full HD." },
        { h: "Encodage HEVC", p: "Compression H.265 / AV1 optimale — moins de bande passante, qualité maximale." },
        { h: "Sport 8K Live", p: "Premier League, Champions League, F1 — en 8K natif sur les chaînes compatibles." },
        { h: "Bitrate VIP garanti", p: "20-40 Mbps stables sur tout l'abonnement, sans throttling." },
      ],
      sections: [
        {
          h: "L'IPTV 8K, c'est quoi exactement ?",
          p: "L'IPTV 8K désigne le streaming de chaînes télé et de contenu VOD en résolution Ultra HD 8K (7680×4320 pixels). Cette qualité d'image est rendue possible par les codecs HEVC (H.265) et AV1, qui compressent efficacement des flux énormes tout en préservant les détails. Pour en profiter, vous avez besoin d'un téléviseur ou d'une box compatible 8K et d'une connexion internet d'au moins 50 Mbps.",
        },
        {
          h: "Pourquoi le 8K VIP ATV Corner se démarque",
          p: "Tous les services ne diffusent pas vraiment en 8K — beaucoup upscalent du 4K. Chez ATV Corner, les chaînes annoncées en 8K sont des flux 8K natifs encodés en HEVC, avec un bitrate VIP stable. Notre infrastructure CDN européenne garantit cette qualité sans throttling pendant les pics d'audience.",
        },
        {
          h: "Compatibilité matérielle",
          p: "Pour profiter du 8K vous avez besoin de : (1) un téléviseur 8K (Samsung QN800, LG ZX, Sony Z9K…), (2) une box compatible 8K ou Fire TV Stick 4K Max minimum, (3) une connexion internet stable d'au moins 50 Mbps. Pour les écrans 4K, le service rétrograde automatiquement le flux.",
        },
      ],
      faq: [
        { q: "Faut-il une TV 8K pour profiter du service ?", a: "Non. Le flux 8K se rétrograde automatiquement en 4K ou Full HD selon votre écran. Vous bénéficiez toujours de la meilleure qualité disponible." },
        { q: "Quel débit internet pour le 8K ?", a: "Recommandé : 50 Mbps minimum, 80 Mbps confortable. Notre encodage HEVC est optimisé pour passer même sur connexions limitées." },
        { q: "Le 8K VIP est-il un plan séparé ?", a: "Non — la qualité 8K est incluse dans tous nos abonnements ATV Corner. Aucun supplément." },
      ],
      cta: "Voir les plans 8K",
    },
    en: {
      metaTitle: "8K IPTV — Ultra HD Streaming VIP",
      metaDesc:
        "ATV Corner 8K Ultra HD IPTV: the highest resolution on the market, HEVC encoding, guaranteed bitrate. 8K sports, 8K movies, premium servers.",
      eyebrow: "8K Ultra HD IPTV · VIP Stream",
      h1: "Streaming in",
      h1Accent: "8K Ultra HD",
      intro:
        "8K IPTV represents the new streaming frontier: 7680×4320 pixels, 16× more detail than Full HD. ATV Corner delivers an infrastructure capable of streaming these high-density feeds, for an unmatched home cinema experience.",
      features: [
        { h: "8K Resolution", p: "Up to 7680×4320 pixels — 4× the definition of 4K, 16× Full HD." },
        { h: "HEVC Encoding", p: "Optimal H.265 / AV1 compression — lower bandwidth, maximum quality." },
        { h: "Live 8K Sports", p: "Premier League, Champions League, F1 — in native 8K on compatible channels." },
        { h: "Guaranteed VIP Bitrate", p: "Stable 20-40 Mbps across the entire subscription, no throttling." },
      ],
      sections: [
        {
          h: "What exactly is 8K IPTV?",
          p: "8K IPTV refers to streaming TV channels and VOD content in 8K Ultra HD resolution (7680×4320 pixels). This image quality is made possible by HEVC (H.265) and AV1 codecs, which efficiently compress huge streams while preserving detail. To enjoy it, you need an 8K-compatible TV or box and at least 50 Mbps internet.",
        },
        {
          h: "Why ATV Corner 8K VIP stands out",
          p: "Not all services actually stream in 8K — many upscale from 4K. At ATV Corner, channels advertised as 8K are native 8K feeds encoded in HEVC with a stable VIP bitrate. Our European CDN infrastructure guarantees this quality without throttling during peak hours.",
        },
        {
          h: "Hardware compatibility",
          p: "To enjoy 8K you need: (1) an 8K TV (Samsung QN800, LG ZX, Sony Z9K…), (2) an 8K-compatible box or Fire TV Stick 4K Max minimum, (3) stable internet of at least 50 Mbps. On 4K screens, the service automatically downscales.",
        },
      ],
      faq: [
        { q: "Do I need an 8K TV to use the service?", a: "No. The 8K stream automatically downscales to 4K or Full HD based on your screen. You always get the best available quality." },
        { q: "What internet speed for 8K?", a: "Recommended: 50 Mbps minimum, 80 Mbps comfortable. Our HEVC encoding is optimized to pass even on limited connections." },
        { q: "Is 8K VIP a separate plan?", a: "No — 8K quality is included in all our ATV Corner subscriptions. No extra charge." },
      ],
      cta: "View 8K plans",
    },
    de: {
      metaTitle: "8K IPTV — Ultra HD Streaming VIP",
      metaDesc:
        "ATV Corner 8K Ultra HD IPTV: höchste Auflösung am Markt, HEVC-Kodierung, garantierte Bitrate. 8K Sport, 8K Filme, Premium-Server.",
      eyebrow: "8K Ultra HD IPTV · VIP Stream",
      h1: "Streaming in",
      h1Accent: "8K Ultra HD",
      intro:
        "8K IPTV ist die neue Streaming-Grenze: 7680×4320 Pixel, 16× mehr Details als Full HD. ATV Corner stellt die Infrastruktur bereit, um diese hochdichten Streams zu liefern.",
      features: [
        { h: "8K-Auflösung", p: "Bis zu 7680×4320 Pixel — 4× 4K-Auflösung, 16× Full HD." },
        { h: "HEVC-Kodierung", p: "Optimale H.265 / AV1-Kompression — geringere Bandbreite, maximale Qualität." },
        { h: "Live 8K Sport", p: "Premier League, Champions League, F1 — natives 8K auf kompatiblen Sendern." },
        { h: "Garantierte VIP-Bitrate", p: "Stabile 20-40 Mbps im gesamten Abo, kein Throttling." },
      ],
      sections: [
        {
          h: "Was ist 8K-IPTV genau?",
          p: "8K-IPTV bezeichnet das Streaming von TV-Sendern und VOD-Inhalten in 8K Ultra HD-Auflösung (7680×4320 Pixel). Diese Bildqualität wird durch HEVC- (H.265) und AV1-Codecs ermöglicht.",
        },
        {
          h: "Warum ATV Corner 8K VIP herausragt",
          p: "Nicht alle Dienste streamen tatsächlich in 8K — viele skalieren von 4K hoch. Bei ATV Corner sind als 8K beworbene Sender native 8K-Streams mit stabiler VIP-Bitrate.",
        },
        {
          h: "Hardware-Kompatibilität",
          p: "Für 8K benötigen Sie: (1) einen 8K-Fernseher, (2) eine 8K-kompatible Box oder Fire TV Stick 4K Max, (3) stabiles Internet von mindestens 50 Mbps.",
        },
      ],
      faq: [
        { q: "Benötige ich einen 8K-Fernseher?", a: "Nein. Der 8K-Stream wird automatisch auf 4K oder Full HD herunterskaliert." },
        { q: "Welche Internetgeschwindigkeit für 8K?", a: "Empfohlen: mindestens 50 Mbps, 80 Mbps komfortabel." },
        { q: "Ist 8K VIP ein separater Plan?", a: "Nein — 8K-Qualität ist in allen Abos enthalten." },
      ],
      cta: "8K-Pläne anzeigen",
    },
  },

  // ===========================================================================
  // /iptv-4k — Targets "4k", "4k vip", "4kliveiptv"
  // ===========================================================================
  "iptv-4k": {
    fr: {
      metaTitle: "IPTV 4K Live — Streaming Ultra HD 4K VIP",
      metaDesc:
        "IPTV 4K live ATV Corner : streaming Ultra HD 4K en direct, sports 4K, films 4K, séries 4K. Serveurs VIP, anti-freeze, activation immédiate.",
      eyebrow: "IPTV 4K Live · VIP Stream",
      h1: "Le streaming",
      h1Accent: "4K Live",
      intro:
        "L'IPTV 4K offre une définition 4× supérieure au Full HD (3840×2160 pixels), pour des images d'une netteté incroyable. ATV Corner diffuse en 4K natif sur les chaînes sport, cinéma et séries premium, avec une stabilité serveur exceptionnelle.",
      features: [
        { h: "4K natif", p: "3840×2160 pixels — pas d'upscaling, vraie qualité Ultra HD." },
        { h: "HDR10 & Dolby Vision", p: "Plage dynamique élargie pour des noirs profonds et des couleurs vibrantes." },
        { h: "Sports 4K Live", p: "Football, Formula 1, NBA, UFC — diffusés en 4K sur les chaînes compatibles." },
        { h: "VOD 4K illimitée", p: "Blockbusters, séries premium, documentaires — tout en 4K HDR." },
      ],
      sections: [
        {
          h: "Pourquoi choisir l'IPTV 4K ?",
          p: "Le 4K Ultra HD est devenu le standard du streaming premium. Avec quatre fois plus de pixels que le Full HD, chaque image gagne en finesse, en profondeur et en réalisme. C'est particulièrement marquant sur les retransmissions sportives — un match de Premier League en 4K HDR est une expérience radicalement différente.",
        },
        {
          h: "4K VIP : la promesse ATV Corner",
          p: "Notre catalogue 4K Live couvre les championnats majeurs (Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League), les compétitions internationales (NBA, F1, MotoGP, UFC) et toute la VOD premium. Le bitrate est calibré pour une diffusion stable même sur connexions ADSL ou 4G.",
        },
        {
          h: "Configuration recommandée",
          p: "Pour profiter du 4K, vous avez besoin d'un téléviseur 4K (la plupart des modèles vendus depuis 2018), d'une box compatible (Fire TV Stick 4K, Apple TV 4K, Android TV box) et d'une connexion internet d'au moins 25 Mbps. Sur écran Full HD, le flux est automatiquement adapté.",
        },
      ],
      faq: [
        { q: "Le 4K marche-t-il sur Fire TV Stick ?", a: "Oui, à condition d'avoir le modèle Fire TV Stick 4K ou 4K Max. Le modèle de base est limité au Full HD." },
        { q: "Combien de chaînes en 4K ?", a: "Plus de 1 500 chaînes 4K live + l'ensemble du catalogue VOD 4K HDR." },
        { q: "Le 4K consomme-t-il beaucoup de data ?", a: "Environ 7-10 Go/h pour un flux 4K HDR. Sur fibre c'est imperceptible ; sur 4G, prévoir un forfait illimité." },
      ],
      cta: "Regarder maintenant",
    },
    en: {
      metaTitle: "4K Live IPTV — Ultra HD 4K VIP Streaming",
      metaDesc:
        "ATV Corner 4K live IPTV: Ultra HD 4K live streaming, 4K sports, 4K movies, 4K series. VIP servers, anti-freeze, instant activation.",
      eyebrow: "4K Live IPTV · VIP Stream",
      h1: "Streaming in",
      h1Accent: "4K Live",
      intro:
        "4K IPTV offers 4× the resolution of Full HD (3840×2160 pixels), for incredibly sharp images. ATV Corner streams in native 4K on premium sports, cinema, and series channels, with exceptional server stability.",
      features: [
        { h: "Native 4K", p: "3840×2160 pixels — no upscaling, true Ultra HD quality." },
        { h: "HDR10 & Dolby Vision", p: "Extended dynamic range for deep blacks and vibrant colors." },
        { h: "Live 4K Sports", p: "Football, Formula 1, NBA, UFC — broadcast in 4K on compatible channels." },
        { h: "Unlimited 4K VOD", p: "Blockbusters, premium series, documentaries — all in 4K HDR." },
      ],
      sections: [
        {
          h: "Why choose 4K IPTV?",
          p: "4K Ultra HD has become the premium streaming standard. With four times more pixels than Full HD, each image gains in detail, depth, and realism. The effect is especially striking on sports broadcasts.",
        },
        {
          h: "4K VIP: the ATV Corner promise",
          p: "Our 4K Live catalog covers major championships, international competitions, and the entire premium VOD library. Bitrate is calibrated for stable delivery even on ADSL or 4G connections.",
        },
        {
          h: "Recommended setup",
          p: "To enjoy 4K, you need a 4K TV (most models sold since 2018), a compatible box (Fire TV Stick 4K, Apple TV 4K, Android TV box), and at least 25 Mbps internet.",
        },
      ],
      faq: [
        { q: "Does 4K work on Fire TV Stick?", a: "Yes, provided you have the Fire TV Stick 4K or 4K Max model. The base model is limited to Full HD." },
        { q: "How many 4K channels?", a: "Over 1,500 live 4K channels plus the full 4K HDR VOD library." },
        { q: "Does 4K use a lot of data?", a: "About 7-10 GB/h for a 4K HDR stream. On fiber it's imperceptible; on 4G, plan an unlimited package." },
      ],
      cta: "Watch now",
    },
    de: {
      metaTitle: "4K Live IPTV — Ultra HD 4K VIP Streaming",
      metaDesc:
        "ATV Corner 4K Live IPTV: Ultra HD 4K Live-Streaming, 4K Sport, 4K Filme, 4K Serien. VIP-Server, anti-freeze, sofortige Aktivierung.",
      eyebrow: "4K Live IPTV · VIP Stream",
      h1: "Streaming in",
      h1Accent: "4K Live",
      intro:
        "4K IPTV bietet die 4-fache Auflösung von Full HD (3840×2160 Pixel) für unglaublich scharfe Bilder. ATV Corner streamt in nativem 4K auf Premium-Sender für Sport, Kino und Serien.",
      features: [
        { h: "Natives 4K", p: "3840×2160 Pixel — kein Upscaling, echte Ultra HD-Qualität." },
        { h: "HDR10 & Dolby Vision", p: "Erweiterter Dynamikbereich für tiefe Schwarztöne und lebendige Farben." },
        { h: "Live 4K Sport", p: "Fußball, Formel 1, NBA, UFC — in 4K auf kompatiblen Sendern." },
        { h: "Unbegrenztes 4K VOD", p: "Blockbuster, Premium-Serien, Dokus — alles in 4K HDR." },
      ],
      sections: [
        {
          h: "Warum 4K IPTV wählen?",
          p: "4K Ultra HD ist zum Premium-Streaming-Standard geworden. Mit viermal mehr Pixeln als Full HD gewinnt jedes Bild an Details, Tiefe und Realismus.",
        },
        {
          h: "4K VIP: das ATV Corner-Versprechen",
          p: "Unser 4K Live-Katalog deckt die wichtigsten Meisterschaften, internationalen Wettbewerbe und die gesamte Premium-VOD-Bibliothek ab.",
        },
        {
          h: "Empfohlene Konfiguration",
          p: "Für 4K benötigen Sie einen 4K-Fernseher, eine kompatible Box (Fire TV Stick 4K, Apple TV 4K, Android TV-Box) und mindestens 25 Mbps Internet.",
        },
      ],
      faq: [
        { q: "Funktioniert 4K auf Fire TV Stick?", a: "Ja, sofern Sie das Fire TV Stick 4K oder 4K Max Modell haben." },
        { q: "Wie viele 4K-Sender?", a: "Über 1.500 Live-4K-Sender plus die gesamte 4K HDR VOD-Bibliothek." },
        { q: "Verbraucht 4K viele Daten?", a: "Etwa 7-10 GB/h für einen 4K HDR-Stream." },
      ],
      cta: "Jetzt schauen",
    },
  },

  // ===========================================================================
  // /m3u-playlist — Targets "m3u", "m3u playlist", "playlist"
  // ===========================================================================
  "m3u-playlist": {
    fr: {
      metaTitle: "Playlist M3U IPTV — Configuration & Lecteurs",
      metaDesc:
        "Playlist M3U ATV Corner : URL personnalisée, compatible VLC, TiviMate, IBO Player, Smarters Pro. Configuration en 3 étapes, support 24/7.",
      eyebrow: "Playlist M3U · Configuration IPTV",
      h1: "Playlist",
      h1Accent: "M3U",
      intro:
        "La playlist M3U est le format standard pour charger vos chaînes IPTV dans n'importe quel lecteur compatible. Avec ATV Corner, vous recevez une URL M3U personnelle, sécurisée, qui ouvre l'accès à 66 000+ chaînes en un seul lien.",
      features: [
        { h: "URL M3U unique", p: "Un seul lien sécurisé contient toutes vos chaînes — playlist mise à jour en continu." },
        { h: "Compatible partout", p: "Fonctionne avec VLC, TiviMate, IBO Player, Smarters Pro, Perfect Player et tout lecteur M3U standard." },
        { h: "EPG intégré", p: "Le guide TV électronique multilingue est inclus directement dans la playlist." },
        { h: "Mise à jour auto", p: "Pas besoin de retélécharger — les nouvelles chaînes apparaissent automatiquement." },
      ],
      sections: [
        {
          h: "Qu'est-ce qu'une playlist M3U ?",
          p: "Une playlist M3U (.m3u ou .m3u8) est un simple fichier texte qui liste des URL de flux vidéo/audio. Dans le monde IPTV, ce format est le standard universel : il contient les liens vers vos chaînes, leurs catégories, leurs logos et leur guide EPG. Tous les lecteurs IPTV modernes savent lire un fichier M3U — c'est ce qui rend ce format si pratique.",
        },
        {
          h: "Comment utiliser votre playlist ATV Corner",
          p: "Après votre abonnement, vous recevez un email/WhatsApp avec une URL M3U personnelle de la forme http://serveur.atvcorner.com/get.php?username=...&password=...&type=m3u_plus. Vous copiez cette URL dans votre lecteur préféré (TiviMate, IBO Player, VLC, etc.) et toutes vos chaînes apparaissent instantanément, classées par catégories.",
        },
        {
          h: "Lecteurs compatibles recommandés",
          p: "Sur Android TV / Fire TV : TiviMate (le plus complet), IBO Player, OTT Navigator. Sur iOS / Apple TV : IPTV Smarters Pro, GSE Smart IPTV. Sur PC : VLC Media Player (gratuit), MyIPTV Player (Windows). Sur Samsung/LG : Smart IPTV ou Set IPTV via leurs stores respectifs.",
        },
      ],
      faq: [
        { q: "Quelle différence entre M3U et M3U8 ?", a: "M3U est le format historique, M3U8 est sa version UTF-8 qui supporte les caractères internationaux. ATV Corner fournit du M3U Plus, qui inclut métadonnées et logos." },
        { q: "Puis-je télécharger le fichier M3U ?", a: "Oui — votre URL renvoie directement le fichier. Mais nous recommandons d'utiliser l'URL en direct dans votre lecteur, ainsi les nouvelles chaînes s'ajoutent automatiquement." },
        { q: "L'URL M3U expire-t-elle ?", a: "Elle reste valide tant que votre abonnement est actif. À chaque renouvellement, la même URL continue de fonctionner." },
      ],
      cta: "Recevoir ma playlist M3U",
    },
    en: {
      metaTitle: "M3U IPTV Playlist — Setup & Players",
      metaDesc:
        "ATV Corner M3U playlist: personal URL, compatible with VLC, TiviMate, IBO Player, Smarters Pro. 3-step setup, 24/7 support.",
      eyebrow: "M3U Playlist · IPTV Setup",
      h1: "M3U",
      h1Accent: "Playlist",
      intro:
        "The M3U playlist is the standard format to load your IPTV channels into any compatible player. With ATV Corner, you receive a personal, secure M3U URL that unlocks 66,000+ channels in a single link.",
      features: [
        { h: "Unique M3U URL", p: "One secure link contains all your channels — continuously updated playlist." },
        { h: "Universal Compatibility", p: "Works with VLC, TiviMate, IBO Player, Smarters Pro, Perfect Player and any standard M3U player." },
        { h: "Integrated EPG", p: "Multilingual TV guide included directly in the playlist." },
        { h: "Auto-Update", p: "No need to re-download — new channels appear automatically." },
      ],
      sections: [
        {
          h: "What is an M3U playlist?",
          p: "An M3U playlist (.m3u or .m3u8) is a simple text file that lists video/audio stream URLs. In the IPTV world, this format is the universal standard: it contains links to your channels, their categories, logos, and EPG guide.",
        },
        {
          h: "How to use your ATV Corner playlist",
          p: "After subscribing, you receive an email/WhatsApp with a personal M3U URL. You copy this URL into your preferred player (TiviMate, IBO Player, VLC, etc.) and all your channels appear instantly, sorted by categories.",
        },
        {
          h: "Recommended compatible players",
          p: "On Android TV / Fire TV: TiviMate, IBO Player, OTT Navigator. On iOS / Apple TV: IPTV Smarters Pro, GSE Smart IPTV. On PC: VLC Media Player (free), MyIPTV Player (Windows).",
        },
      ],
      faq: [
        { q: "What's the difference between M3U and M3U8?", a: "M3U is the historical format, M3U8 is its UTF-8 version supporting international characters. ATV Corner provides M3U Plus, including metadata and logos." },
        { q: "Can I download the M3U file?", a: "Yes — your URL directly returns the file. But we recommend using the live URL in your player so new channels add automatically." },
        { q: "Does the M3U URL expire?", a: "It remains valid as long as your subscription is active. On renewal, the same URL continues to work." },
      ],
      cta: "Get my M3U playlist",
    },
    de: {
      metaTitle: "M3U IPTV-Playlist — Einrichtung & Player",
      metaDesc:
        "ATV Corner M3U-Playlist: persönliche URL, kompatibel mit VLC, TiviMate, IBO Player, Smarters Pro. Einrichtung in 3 Schritten, 24/7 Support.",
      eyebrow: "M3U-Playlist · IPTV-Einrichtung",
      h1: "M3U-",
      h1Accent: "Playlist",
      intro:
        "Die M3U-Playlist ist das Standardformat zum Laden Ihrer IPTV-Sender in jeden kompatiblen Player. Mit ATV Corner erhalten Sie eine persönliche, sichere M3U-URL, die Zugriff auf über 66.000 Sender in einem einzigen Link bietet.",
      features: [
        { h: "Eindeutige M3U-URL", p: "Ein sicherer Link enthält alle Ihre Sender — kontinuierlich aktualisierte Playlist." },
        { h: "Universelle Kompatibilität", p: "Funktioniert mit VLC, TiviMate, IBO Player, Smarters Pro, Perfect Player und jedem Standard-M3U-Player." },
        { h: "Integriertes EPG", p: "Mehrsprachiger TV-Guide direkt in der Playlist enthalten." },
        { h: "Auto-Update", p: "Kein erneutes Herunterladen nötig — neue Sender erscheinen automatisch." },
      ],
      sections: [
        {
          h: "Was ist eine M3U-Playlist?",
          p: "Eine M3U-Playlist (.m3u oder .m3u8) ist eine einfache Textdatei, die Video-/Audio-Stream-URLs auflistet. In der IPTV-Welt ist dieses Format der universelle Standard.",
        },
        {
          h: "So verwenden Sie Ihre ATV Corner-Playlist",
          p: "Nach Ihrem Abonnement erhalten Sie eine E-Mail/WhatsApp mit einer persönlichen M3U-URL. Sie kopieren diese URL in Ihren bevorzugten Player und alle Sender erscheinen sofort.",
        },
        {
          h: "Empfohlene kompatible Player",
          p: "Auf Android TV / Fire TV: TiviMate, IBO Player, OTT Navigator. Auf iOS / Apple TV: IPTV Smarters Pro, GSE Smart IPTV. Auf PC: VLC Media Player.",
        },
      ],
      faq: [
        { q: "Was ist der Unterschied zwischen M3U und M3U8?", a: "M3U ist das historische Format, M3U8 ist die UTF-8-Version. ATV Corner liefert M3U Plus." },
        { q: "Kann ich die M3U-Datei herunterladen?", a: "Ja — wir empfehlen jedoch die Live-URL für automatische Updates." },
        { q: "Läuft die M3U-URL ab?", a: "Sie bleibt aktiv, solange Ihr Abonnement läuft." },
      ],
      cta: "Meine M3U-Playlist erhalten",
    },
  },

  // ===========================================================================
  // /xtream-codes — Targets "xtream", "xtream codes", "xtream codes api", "compte xtream"
  // ===========================================================================
  "xtream-codes": {
    fr: {
      metaTitle: "Compte Xtream Codes API — Identifiants IPTV",
      metaDesc:
        "Compte Xtream Codes API ATV Corner : identifiants username/password sécurisés, compatible IPTV Smarters Pro, TiviMate, IBO Player. Activation immédiate.",
      eyebrow: "Xtream Codes · API IPTV",
      h1: "Compte",
      h1Accent: "Xtream Codes",
      intro:
        "Le protocole Xtream Codes API est devenu le standard pour les abonnements IPTV modernes. Avec ATV Corner, vous recevez des identifiants Xtream personnels (host, username, password) qui ouvrent l'accès à votre catalogue depuis n'importe quel lecteur compatible.",
      features: [
        { h: "Identifiants sécurisés", p: "Host + username + password unique, transmis par WhatsApp ou email chiffré." },
        { h: "API standard", p: "Compatible avec tous les lecteurs IPTV majeurs — un seul format, partout." },
        { h: "Catalogue structuré", p: "L'API renvoie chaînes live, films VOD, séries, catégorisés et avec posters HD." },
        { h: "EPG synchronisé", p: "Guide TV électronique livré automatiquement via l'API, multilingue." },
      ],
      sections: [
        {
          h: "Qu'est-ce que Xtream Codes API ?",
          p: "Xtream Codes est un protocole d'authentification et de livraison de contenu IPTV. Plutôt qu'une simple URL M3U, l'API expose vos chaînes, films et séries via des endpoints structurés, ce qui permet aux applications de proposer une interface riche : navigation par catégorie, fiches détaillées, posters, recherche, favoris. C'est devenu le standard de facto du marché.",
        },
        {
          h: "Avantages du compte Xtream ATV Corner",
          p: "Avec un compte Xtream Codes ATV Corner, vous bénéficiez : (1) d'une connexion plus fluide qu'une simple playlist M3U, (2) d'une interface enrichie dans votre lecteur (posters, descriptions, EPG), (3) d'une mise à jour automatique du catalogue, (4) d'une sécurité accrue grâce à l'authentification username/password.",
        },
        {
          h: "Lecteurs supportant Xtream Codes",
          p: "IPTV Smarters Pro (iOS, Android, Apple TV, Fire TV), TiviMate Premium, IBO Player, OTT Navigator, GSE Smart IPTV, Perfect Player, XCIPTV Player. La plupart proposent un mode « Login with Xtream Codes API » au premier lancement.",
        },
      ],
      faq: [
        { q: "Quelle différence avec une URL M3U ?", a: "L'URL M3U liste juste les chaînes ; l'API Xtream Codes fournit en plus des métadonnées riches (posters, descriptions, EPG, catégorisation) et une interface utilisateur enrichie." },
        { q: "Comment recevoir mon compte Xtream ?", a: "Après paiement, vous recevez par WhatsApp ou email vos identifiants : Host (URL du serveur), Username et Password. Vous les saisissez dans votre lecteur compatible." },
        { q: "Puis-je avoir M3U + Xtream sur le même abonnement ?", a: "Oui, les deux formats sont fournis avec chaque abonnement ATV Corner. Vous choisissez celui qui convient à votre lecteur." },
      ],
      cta: "Obtenir mes identifiants Xtream",
    },
    en: {
      metaTitle: "Xtream Codes API Account — IPTV Credentials",
      metaDesc:
        "ATV Corner Xtream Codes API account: secure username/password credentials, compatible with IPTV Smarters Pro, TiviMate, IBO Player. Instant activation.",
      eyebrow: "Xtream Codes · IPTV API",
      h1: "Xtream Codes",
      h1Accent: "Account",
      intro:
        "The Xtream Codes API protocol has become the standard for modern IPTV subscriptions. With ATV Corner, you receive personal Xtream credentials (host, username, password) that unlock your catalog from any compatible player.",
      features: [
        { h: "Secure Credentials", p: "Host + username + password, delivered via WhatsApp or encrypted email." },
        { h: "Standard API", p: "Compatible with all major IPTV players — one format, everywhere." },
        { h: "Structured Catalog", p: "The API returns live channels, VOD movies, series, categorized with HD posters." },
        { h: "Synced EPG", p: "Electronic TV guide delivered automatically via the API, multilingual." },
      ],
      sections: [
        {
          h: "What is Xtream Codes API?",
          p: "Xtream Codes is an authentication and content delivery protocol for IPTV. Rather than a simple M3U URL, the API exposes your channels, movies and series through structured endpoints, enabling apps to offer a rich interface: category browsing, detailed cards, posters, search, favorites.",
        },
        {
          h: "Benefits of the ATV Corner Xtream account",
          p: "With an ATV Corner Xtream Codes account, you get: (1) smoother connection than a simple M3U playlist, (2) enhanced interface in your player (posters, descriptions, EPG), (3) automatic catalog updates, (4) increased security via username/password authentication.",
        },
        {
          h: "Players supporting Xtream Codes",
          p: "IPTV Smarters Pro (iOS, Android, Apple TV, Fire TV), TiviMate Premium, IBO Player, OTT Navigator, GSE Smart IPTV, Perfect Player, XCIPTV Player.",
        },
      ],
      faq: [
        { q: "What's the difference vs an M3U URL?", a: "An M3U URL just lists channels; the Xtream Codes API additionally provides rich metadata (posters, descriptions, EPG, categorization) and an enhanced user interface." },
        { q: "How do I receive my Xtream account?", a: "After payment, you receive your credentials by WhatsApp or email: Host (server URL), Username and Password." },
        { q: "Can I have both M3U + Xtream on the same subscription?", a: "Yes, both formats are provided with every ATV Corner subscription." },
      ],
      cta: "Get my Xtream credentials",
    },
    de: {
      metaTitle: "Xtream Codes API-Konto — IPTV-Zugangsdaten",
      metaDesc:
        "ATV Corner Xtream Codes API-Konto: sichere Username/Password-Zugangsdaten, kompatibel mit IPTV Smarters Pro, TiviMate, IBO Player.",
      eyebrow: "Xtream Codes · IPTV-API",
      h1: "Xtream Codes",
      h1Accent: "Konto",
      intro:
        "Das Xtream Codes API-Protokoll ist zum Standard für moderne IPTV-Abonnements geworden. Mit ATV Corner erhalten Sie persönliche Xtream-Zugangsdaten (Host, Username, Password).",
      features: [
        { h: "Sichere Zugangsdaten", p: "Host + Username + Passwort, geliefert per WhatsApp oder verschlüsselter E-Mail." },
        { h: "Standard-API", p: "Kompatibel mit allen wichtigen IPTV-Playern — ein Format, überall." },
        { h: "Strukturierter Katalog", p: "Die API liefert Live-Sender, VOD-Filme, Serien — kategorisiert mit HD-Postern." },
        { h: "Synchronisierter EPG", p: "Elektronischer TV-Guide automatisch über die API geliefert." },
      ],
      sections: [
        {
          h: "Was ist Xtream Codes API?",
          p: "Xtream Codes ist ein Authentifizierungs- und Content-Delivery-Protokoll für IPTV mit strukturierten Endpoints für Apps.",
        },
        {
          h: "Vorteile des ATV Corner Xtream-Kontos",
          p: "(1) Flüssigere Verbindung als reine M3U, (2) erweiterte Benutzeroberfläche mit Postern und EPG, (3) automatische Katalog-Updates, (4) erhöhte Sicherheit.",
        },
        {
          h: "Player mit Xtream-Codes-Unterstützung",
          p: "IPTV Smarters Pro, TiviMate Premium, IBO Player, OTT Navigator, GSE Smart IPTV, Perfect Player.",
        },
      ],
      faq: [
        { q: "Unterschied zu einer M3U-URL?", a: "Eine M3U-URL listet nur Sender; die Xtream Codes API liefert zusätzlich umfangreiche Metadaten." },
        { q: "Wie erhalte ich mein Xtream-Konto?", a: "Nach der Zahlung erhalten Sie Zugangsdaten per WhatsApp oder E-Mail." },
        { q: "Beides M3U + Xtream im selben Abo?", a: "Ja, beide Formate sind in jedem ATV Corner-Abonnement enthalten." },
      ],
      cta: "Meine Xtream-Zugangsdaten erhalten",
    },
  },

  // ===========================================================================
  // /iptv-sport — Targets "live streaming", "live streaming app", "internet protocol tv live streaming"
  // ===========================================================================
  "iptv-sport": {
    fr: {
      metaTitle: "IPTV Sport en Direct — Live Streaming Premium",
      metaDesc:
        "IPTV Sport ATV Corner : Premier League, Champions League, Ligue 1, La Liga, Serie A, Bundesliga, F1, NBA, UFC en live streaming 4K/8K. Zéro coupure.",
      eyebrow: "IPTV Sport · Live Streaming 4K",
      h1: "Sport en",
      h1Accent: "Live Streaming",
      intro:
        "Le sport en live streaming change la façon de regarder vos compétitions favorites. ATV Corner diffuse plus de 4 200 chaînes sportives en direct — football européen, F1, NBA, UFC, tennis, MotoGP — en qualité 4K/8K, avec une latence quasi-temps-réel et zéro coupure pendant les pics d'audience.",
      features: [
        { h: "Football européen complet", p: "Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Eredivisie, Liga Portugal — toutes les divisions principales." },
        { h: "Compétitions UEFA & FIFA", p: "Champions League, Europa League, Conference League, Coupe du Monde, Euro, Copa America." },
        { h: "Sports US & internationaux", p: "NBA, NFL, MLB, NHL, UFC, F1, MotoGP, ATP/WTA, golf, MMA, boxe." },
        { h: "Multi-commentaires", p: "Choisissez la langue de commentaire : français, anglais, espagnol, allemand, arabe selon les chaînes." },
      ],
      sections: [
        {
          h: "Pourquoi le live streaming IPTV pour le sport ?",
          p: "Le streaming via internet protocol (IPTV) offre plusieurs avantages sur le sport : (1) accès à des chaînes étrangères pour des angles différents, (2) qualité 4K systématique, (3) absence d'abonnement multi-bouquets (un seul abonnement couvre tout), (4) regarder depuis n'importe où — domicile, vacances, déplacement professionnel.",
        },
        {
          h: "Stabilité pendant les pics sportifs",
          p: "Les grands matchs (Real Madrid–Barcelone, finales de Champions League, Super Bowl) sont les pires moments pour les serveurs IPTV mal dimensionnés. Notre infrastructure ATV Corner est calibrée pour 10× la charge réelle, ce qui garantit un flux fluide même quand des millions de fans regardent simultanément.",
        },
        {
          h: "Applications de live streaming recommandées",
          p: "Pour le sport, TiviMate offre la meilleure expérience grâce à son EPG sport spécifique et ses raccourcis « chaînes favorites ». IBO Player et IPTV Smarters Pro sont d'excellentes alternatives multi-plateformes. Sur Apple TV, GSE Smart IPTV gère parfaitement les flux à fort bitrate.",
        },
      ],
      faq: [
        { q: "Quelle latence sur les matchs en direct ?", a: "Entre 8 et 15 secondes selon votre connexion — comparable à la TNT et meilleur que beaucoup de services satellite." },
        { q: "Tous les championnats sont-ils inclus ?", a: "Oui — toutes les divisions principales européennes, les compétitions UEFA/FIFA, NBA, NFL, F1, MotoGP, UFC, tennis Grand Chelem, golf majeurs." },
        { q: "Peut-on regarder en multi-écrans ?", a: "L'abonnement standard couvre un écran à la fois. Pour multi-écrans (matchs simultanés sur tablette + TV), contactez-nous pour une offre dédiée." },
      ],
      cta: "Voir les chaînes sport",
    },
    en: {
      metaTitle: "Live Sports IPTV — Premium Live Streaming",
      metaDesc:
        "ATV Corner Sports IPTV: Premier League, Champions League, La Liga, Serie A, Bundesliga, F1, NBA, UFC in 4K/8K live streaming. Zero downtime.",
      eyebrow: "Sports IPTV · 4K Live Streaming",
      h1: "Sports",
      h1Accent: "Live Streaming",
      intro:
        "Live sports streaming changes how you watch your favorite competitions. ATV Corner streams over 4,200 live sports channels — European football, F1, NBA, UFC, tennis, MotoGP — in 4K/8K, with near-real-time latency and zero downtime at peak hours.",
      features: [
        { h: "Full European Football", p: "Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Eredivisie, Liga Portugal." },
        { h: "UEFA & FIFA Competitions", p: "Champions League, Europa League, Conference League, World Cup, Euros, Copa America." },
        { h: "US & International Sports", p: "NBA, NFL, MLB, NHL, UFC, F1, MotoGP, ATP/WTA, golf, MMA, boxing." },
        { h: "Multi-commentary", p: "Choose commentary language: French, English, Spanish, German, Arabic depending on the channel." },
      ],
      sections: [
        {
          h: "Why live streaming IPTV for sports?",
          p: "Internet protocol live streaming offers several advantages for sports: (1) access to foreign channels for different angles, (2) systematic 4K quality, (3) no multi-package subscription needed, (4) watch from anywhere — home, vacation, business trip.",
        },
        {
          h: "Stability during peak sports events",
          p: "Major matches are the worst moments for poorly-sized IPTV servers. ATV Corner's infrastructure is calibrated for 10× actual load, guaranteeing smooth streaming even when millions of fans watch simultaneously.",
        },
        {
          h: "Recommended live streaming apps",
          p: "For sports, TiviMate offers the best experience with its specific sports EPG. IBO Player and IPTV Smarters Pro are excellent multi-platform alternatives.",
        },
      ],
      faq: [
        { q: "What's the live match latency?", a: "Between 8 and 15 seconds depending on your connection — comparable to digital terrestrial TV and better than many satellite services." },
        { q: "Are all championships included?", a: "Yes — all major European divisions, UEFA/FIFA competitions, NBA, NFL, F1, MotoGP, UFC, tennis Grand Slams, major golf." },
        { q: "Can I watch on multiple screens?", a: "The standard subscription covers one screen at a time. Contact us for a multi-screen offer." },
      ],
      cta: "View sports channels",
    },
    de: {
      metaTitle: "Live-Sport IPTV — Premium Live-Streaming",
      metaDesc:
        "ATV Corner Sport-IPTV: Premier League, Champions League, La Liga, Serie A, Bundesliga, F1, NBA, UFC im 4K/8K-Live-Streaming. Null Ausfälle.",
      eyebrow: "Sport-IPTV · 4K Live-Streaming",
      h1: "Sport",
      h1Accent: "Live-Streaming",
      intro:
        "Live-Sport-Streaming verändert die Art, wie Sie Ihre Lieblingswettbewerbe verfolgen. ATV Corner streamt über 4.200 Live-Sportsender — europäischer Fußball, F1, NBA, UFC, Tennis, MotoGP — in 4K/8K.",
      features: [
        { h: "Kompletter europäischer Fußball", p: "Bundesliga, Premier League, La Liga, Serie A, Ligue 1." },
        { h: "UEFA- & FIFA-Wettbewerbe", p: "Champions League, Europa League, WM, EM, Copa America." },
        { h: "US- & internationaler Sport", p: "NBA, NFL, MLB, NHL, UFC, F1, MotoGP, ATP/WTA, Golf, Boxen." },
        { h: "Mehrsprachiger Kommentar", p: "Wählen Sie die Kommentarsprache: Deutsch, Englisch, Französisch, Spanisch, Arabisch." },
      ],
      sections: [
        {
          h: "Warum Live-Streaming-IPTV für Sport?",
          p: "Internet-Protocol-Live-Streaming bietet mehrere Vorteile für Sport: (1) Zugriff auf ausländische Sender, (2) systematische 4K-Qualität, (3) keine Multi-Paket-Abonnements, (4) überall ansehen.",
        },
        {
          h: "Stabilität bei Spitzenereignissen",
          p: "Große Spiele sind die schlimmsten Momente für schlecht dimensionierte IPTV-Server. Unsere Infrastruktur ist für die 10-fache tatsächliche Last kalibriert.",
        },
        {
          h: "Empfohlene Live-Streaming-Apps",
          p: "Für Sport bietet TiviMate die beste Erfahrung. IBO Player und IPTV Smarters Pro sind ausgezeichnete plattformübergreifende Alternativen.",
        },
      ],
      faq: [
        { q: "Wie hoch ist die Live-Match-Latenz?", a: "Zwischen 8 und 15 Sekunden je nach Verbindung." },
        { q: "Sind alle Meisterschaften enthalten?", a: "Ja — alle wichtigen europäischen Ligen, UEFA/FIFA-Wettbewerbe, NBA, NFL, F1, MotoGP, UFC, Tennis-Grand-Slams." },
        { q: "Kann ich auf mehreren Bildschirmen schauen?", a: "Das Standard-Abo deckt einen Bildschirm gleichzeitig ab. Kontaktieren Sie uns für ein Multi-Screen-Angebot." },
      ],
      cta: "Sport-Sender anzeigen",
    },
  },
});

// ===========================================================================
// /best-iptv-alternatives — Targets competitor brand queries
// (NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365,
//  TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV…)
// Neutral comparison page — no disparagement, factual positioning only.
// ===========================================================================
content["best-iptv-alternatives"] = {
  fr: {
    metaTitle: "Meilleures Alternatives IPTV 2026 — Comparatif",
    metaDesc:
      "Comparatif 2026 des services IPTV : NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV. Pourquoi ATV Corner se démarque.",
    eyebrow: "Comparatif IPTV · Édition 2026",
    h1: "Meilleures alternatives",
    h1Accent: "IPTV 2026",
    intro:
      "Vous comparez les services IPTV du marché — NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV ? Voici un comparatif factuel des critères qui comptent : qualité d'image, stabilité, catalogue, support et prix. ATV Corner se positionne comme l'alternative premium 4K/8K, couverte par une garantie satisfait ou remboursé sous 7 jours.",
    features: [
      { h: "66 000+ chaînes", p: "Catalogue plus large que la majorité des services concurrents — France, Europe, USA, Maghreb, monde." },
      { h: "Vraie qualité 8K", p: "Flux 8K natifs encodés HEVC, là où beaucoup d'acteurs annoncent du 8K mais diffusent du 4K upscalé." },
      { h: "Anti-freeze garanti", p: "Infrastructure Tier 1 européenne dimensionnée pour les pics — Champions League, F1, finales." },
      { h: "Garantie 7 jours", p: "Satisfait ou remboursé sous 7 jours, sans question. Activez sans risque et jugez par vous-même." },
    ],
    sections: [
      {
        h: "Comment choisir entre les services IPTV concurrents",
        p: "Le marché de l'IPTV compte des dizaines d'offres : NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, FooxTV, TVnow, Smartiflix, 7IPTV, SixStarIPTV, et beaucoup d'autres. Pour bien choisir, comparez quatre critères objectifs : (1) la taille réelle du catalogue, (2) la qualité maximale supportée — 4K natif ou simple Full HD upscalé, (3) la stabilité serveur pendant les pics d'audience sportifs, (4) la qualité du support client en cas de panne. Le prix seul est rarement un bon indicateur — un abonnement très peu cher cache souvent des serveurs surchargés.",
      },
      {
        h: "Pourquoi ATV Corner comme alternative premium",
        p: "ATV Corner a été conçu pour le segment premium du marché : 66 000+ chaînes (au-dessus de la moyenne du secteur), résolutions jusqu'au 8K natif, infrastructure CDN européenne calibrée pour 10× la charge réelle, support 24/7 en français, anglais, allemand et arabe. Nos abonnements démarrent à 15 €/mois et descendent à 5 €/mois sur le plan annuel — compétitifs sans sacrifier la qualité. La garantie satisfait ou remboursé 7 jours vous permet d'activer sans risque et de comparer directement avec votre service actuel.",
      },
      {
        h: "Migrer depuis un autre service IPTV",
        p: "Si vous utilisez déjà NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV ou un autre service, la migration vers ATV Corner prend moins de 5 minutes. Vos identifiants Xtream Codes ou URL M3U remplacent simplement ceux de votre ancien service dans la même application (TiviMate, IBO Player, IPTV Smarters, VLC…). Aucune réinstallation, aucun nouveau matériel — juste un meilleur flux.",
      },
      {
        h: "Critères de comparaison objectifs",
        p: "Pour comparer honnêtement deux services IPTV, vérifiez : la résolution réelle (lancez un fichier mediainfo sur un flux 4K annoncé), la latence des chaînes sport en live, le nombre de positions du catalogue VOD (et la fréquence de mise à jour), la présence d'un vrai EPG multilingue, les options de paiement (Stripe/PayPal pour la traçabilité), et la réactivité du support sur WhatsApp en cas de coupure. ATV Corner se mesure favorablement sur ces six critères face aux acteurs établis du marché.",
      },
    ],
    faq: [
      { q: "Quelle est la meilleure alternative à NigmaTV ?", a: "ATV Corner propose un catalogue plus large (66 000+ chaînes vs catalogue standard), une vraie qualité 8K native et une garantie satisfait ou remboursé 7 jours. Vous pouvez activer sans risque et comparer directement les deux services." },
      { q: "ATV Corner est-il meilleur que SphereIPTV, SonixIPTV ou AeroTV ?", a: "Chaque service a ses forces. ATV Corner se distingue par l'infrastructure Tier 1 européenne dimensionnée pour les pics sportifs, le support multilingue 24/7 et la garantie satisfait ou remboursé 7 jours — comparez sans risque." },
      { q: "Puis-je migrer depuis WorldIPTV, Streamex, King365, TVnow ou Smartiflix ?", a: "Oui. La migration est immédiate : vous remplacez vos identifiants Xtream Codes ou votre URL M3U dans votre lecteur actuel (TiviMate, IBO Player, Smarters Pro, VLC). Aucun nouveau matériel nécessaire." },
      { q: "Quel est le critère le plus important pour comparer ?", a: "La stabilité pendant les grands événements sportifs. Un service avec moins de chaînes mais zéro coupure pendant Real-Barça vaut mieux qu'un catalogue immense qui freeze. C'est exactement le créneau d'ATV Corner." },
      { q: "Comment activer ATV Corner sans risque ?", a: "Activez votre abonnement via WhatsApp : +44 7796 630011. Vous êtes couvert par notre garantie satisfait ou remboursé sous 7 jours — remboursement intégral si la qualité ne vous convient pas." },
    ],
    cta: "Regarder maintenant",
  },
  en: {
    metaTitle: "Best IPTV Alternatives 2026 — Comparison",
    metaDesc:
      "2026 IPTV comparison: NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV. Why ATV Corner stands out.",
    eyebrow: "IPTV Comparison · 2026 Edition",
    h1: "Best IPTV",
    h1Accent: "Alternatives 2026",
    intro:
      "Comparing IPTV services — NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV? Here's a factual comparison of what matters: image quality, stability, catalog, support, and pricing. ATV Corner positions itself as the premium 4K/8K alternative, backed by a 7-day money-back guarantee.",
    features: [
      { h: "66,000+ Channels", p: "Larger catalog than most competitor services — France, Europe, US, MENA, worldwide." },
      { h: "Real 8K Quality", p: "Native 8K streams in HEVC, where many providers advertise 8K but deliver upscaled 4K." },
      { h: "Guaranteed Anti-Freeze", p: "Tier 1 European infrastructure sized for peaks — Champions League, F1, finals." },
      { h: "7-Day Money-Back", p: "Full refund within 7 days, no questions asked. Activate risk-free and judge for yourself." },
    ],
    sections: [
      {
        h: "How to choose between competing IPTV services",
        p: "The IPTV market has dozens of offers: NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, FooxTV, TVnow, Smartiflix, 7IPTV, SixStarIPTV, and many more. To choose well, compare four objective criteria: (1) real catalog size, (2) maximum supported quality — native 4K or just Full HD upscaled, (3) server stability during sports peaks, (4) customer support quality during outages. Price alone is rarely a good indicator — very cheap subscriptions often hide overloaded servers.",
      },
      {
        h: "Why ATV Corner as a premium alternative",
        p: "ATV Corner was built for the premium segment: 66,000+ channels (above industry average), resolutions up to native 8K, European CDN infrastructure calibrated for 10× actual load, 24/7 support in French, English, German and Arabic. Our subscriptions start at $16/month and drop to $5/month on the annual plan — competitive without sacrificing quality. Our 7-day money-back guarantee lets you activate risk-free and compare directly with your current service.",
      },
      {
        h: "Migrating from another IPTV service",
        p: "If you already use NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV or another service, migrating to ATV Corner takes less than 5 minutes. Your Xtream Codes credentials or M3U URL simply replace the old ones in the same app (TiviMate, IBO Player, IPTV Smarters, VLC…). No reinstall, no new hardware — just a better stream.",
      },
      {
        h: "Objective comparison criteria",
        p: "To honestly compare two IPTV services, check: real resolution (run mediainfo on an advertised 4K stream), latency of live sports channels, VOD catalog size (and update frequency), presence of a real multilingual EPG, payment options (Stripe/PayPal for traceability), and WhatsApp support responsiveness during outages. ATV Corner measures favorably on these six criteria against established market players.",
      },
    ],
    faq: [
      { q: "What's the best alternative to NigmaTV?", a: "ATV Corner offers a larger catalog (66,000+ channels vs standard catalog), real native 8K quality and a 7-day money-back guarantee. You can activate risk-free and compare both services directly." },
      { q: "Is ATV Corner better than SphereIPTV, SonixIPTV or AeroTV?", a: "Each service has its strengths. ATV Corner stands out for its Tier 1 European infrastructure sized for sports peaks, 24/7 multilingual support and a 7-day money-back guarantee — compare risk-free." },
      { q: "Can I migrate from WorldIPTV, Streamex, King365, TVnow or Smartiflix?", a: "Yes. Migration is immediate: replace your Xtream Codes credentials or M3U URL in your current player (TiviMate, IBO Player, Smarters Pro, VLC). No new hardware needed." },
      { q: "What's the most important comparison criterion?", a: "Stability during major sports events. A service with fewer channels but zero downtime during Real-Barça beats a huge catalog that freezes. That's exactly ATV Corner's niche." },
      { q: "How to activate ATV Corner risk-free?", a: "Activate your subscription via WhatsApp: +44 7796 630011. You're covered by our 7-day money-back guarantee — full refund if quality doesn't meet your expectations." },
    ],
    cta: "Watch now",
  },
  de: {
    metaTitle: "Beste IPTV-Alternativen 2026 — Vergleich",
    metaDesc:
      "IPTV-Vergleich 2026: NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV. Warum ATV Corner heraussticht.",
    eyebrow: "IPTV-Vergleich · Ausgabe 2026",
    h1: "Beste IPTV-",
    h1Accent: "Alternativen 2026",
    intro:
      "Sie vergleichen IPTV-Dienste — NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV? Hier ein sachlicher Vergleich dessen, was zählt: Bildqualität, Stabilität, Katalog, Support und Preis. ATV Corner positioniert sich als Premium-4K/8K-Alternative, abgesichert durch eine 7-tägige Geld-zurück-Garantie.",
    features: [
      { h: "66.000+ Sender", p: "Größerer Katalog als die meisten Konkurrenzdienste — Frankreich, Europa, USA, MENA, weltweit." },
      { h: "Echte 8K-Qualität", p: "Native 8K-Streams in HEVC, wo viele Anbieter 8K bewerben aber hochskaliertes 4K liefern." },
      { h: "Garantiertes Anti-Freeze", p: "Tier-1-Infrastruktur in Europa, dimensioniert für Spitzen — Champions League, F1, Finale." },
      { h: "7-Tage Geld-zurück", p: "Volle Rückerstattung innerhalb von 7 Tagen, ohne Fragen. Aktivieren Sie risikofrei und urteilen Sie selbst." },
    ],
    sections: [
      {
        h: "Wie zwischen konkurrierenden IPTV-Diensten wählen",
        p: "Der IPTV-Markt hat Dutzende von Angeboten: NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, FooxTV, TVnow, Smartiflix, 7IPTV, SixStarIPTV und viele mehr. Vergleichen Sie vier objektive Kriterien: (1) reale Katalogfgröße, (2) maximale unterstützte Qualität — natives 4K oder nur hochskaliertes Full HD, (3) Serverstabilität bei Sportspitzen, (4) Kundensupport-Qualität bei Ausfällen.",
      },
      {
        h: "Warum ATV Corner als Premium-Alternative",
        p: "ATV Corner wurde für das Premium-Segment entwickelt: 66.000+ Sender, Auflösungen bis natives 8K, europäische CDN-Infrastruktur für die 10-fache tatsächliche Last kalibriert, 24/7-Support auf Französisch, Englisch, Deutsch und Arabisch. Unsere Abos beginnen bei 15 €/Monat und sinken auf 5 €/Monat im Jahresplan — wettbewerbsfähig ohne Qualitätskompromisse.",
      },
      {
        h: "Migration von einem anderen IPTV-Dienst",
        p: "Wenn Sie bereits NigmaTV, SphereIPTV, SonixIPTV, AeroTV, WorldIPTV, Streamex, King365, TVnow, FooxTV, Smartiflix, 7IPTV, SixStarIPTV oder einen anderen Dienst nutzen, dauert der Wechsel zu ATV Corner weniger als 5 Minuten. Ihre Xtream-Codes-Zugangsdaten oder M3U-URL ersetzen einfach die alten in derselben App. Keine Neuinstallation, keine neue Hardware.",
      },
      {
        h: "Objektive Vergleichskriterien",
        p: "Um zwei IPTV-Dienste ehrlich zu vergleichen, prüfen Sie: reale Auflösung, Latenz der Live-Sport-Sender, VOD-Kataloggröße, Vorhandensein eines mehrsprachigen EPG, Zahlungsoptionen (Stripe/PayPal), und WhatsApp-Support-Reaktionsfähigkeit bei Ausfällen.",
      },
    ],
    faq: [
      { q: "Was ist die beste Alternative zu NigmaTV?", a: "ATV Corner bietet einen größeren Katalog, echte native 8K-Qualität und eine 7-tägige Geld-zurück-Garantie. Aktivieren Sie risikofrei und vergleichen Sie beide Dienste direkt." },
      { q: "Ist ATV Corner besser als SphereIPTV, SonixIPTV oder AeroTV?", a: "Jeder Dienst hat seine Stärken. ATV Corner zeichnet sich durch Tier-1-Infrastruktur in Europa, 24/7-mehrsprachigen Support und eine 7-tägige Geld-zurück-Garantie aus — vergleichen Sie risikofrei." },
      { q: "Kann ich von WorldIPTV, Streamex, King365, TVnow oder Smartiflix migrieren?", a: "Ja. Die Migration ist sofortig: ersetzen Sie Ihre Xtream-Codes-Zugangsdaten oder M3U-URL in Ihrem aktuellen Player. Keine neue Hardware nötig." },
      { q: "Was ist das wichtigste Vergleichskriterium?", a: "Stabilität bei großen Sportveranstaltungen. Ein Dienst mit weniger Sendern aber null Ausfallzeit bei Real-Barça schlägt einen riesigen Katalog der einfriert." },
      { q: "Wie ATV Corner risikofrei aktivieren?", a: "Aktivieren Sie Ihr Abo per WhatsApp: +44 7796 630011. Sie sind durch unsere 7-tägige Geld-zurück-Garantie abgesichert — volle Rückerstattung bei Unzufriedenheit." },
    ],
    cta: "Jetzt schauen",
  },
};

// ===========================================================================
// /iptv-free-trial — Targets "iptv free trial", "free trial iptv",
// "iptv free trial 2026", "iptv 72 hour free trial", "iptv 24 hour free trial",
// "try iptv free". Highest buy-intent, lowest KD cluster.
// ===========================================================================
content["iptv-free-trial"] = {
  fr: {
    metaTitle: "Essai IPTV Gratuit 24h — Test IPTV Sans Engagement",
    metaDesc:
      "Obtenez un essai IPTV gratuit chez ATV Corner : testez 66 000+ chaînes en 4K/8K pendant 24h, sans carte bancaire. Activation en 5 min par WhatsApp. Essai IPTV 2026 sans engagement.",
    eyebrow: "Essai IPTV Gratuit · Sans engagement",
    h1: "Essai IPTV",
    h1Accent: "gratuit 24h",
    intro:
      "Un essai IPTV gratuit vous permet de tester le service avant de payer. Chez ATV Corner, votre essai gratuit débloque l'accès complet à plus de 66 000 chaînes en 4K/8K, aux films et séries VOD, pendant 24 heures — sans carte bancaire et sans engagement. L'activation prend moins de 5 minutes par WhatsApp.",
    features: [
      { h: "Essai 100 % gratuit", p: "Testez la qualité réelle, la stabilité et le catalogue avant tout paiement. Aucune carte bancaire demandée." },
      { h: "Activation en 5 min", p: "Envoyez un message WhatsApp, recevez vos identifiants d'essai IPTV gratuit en moins de 5 minutes." },
      { h: "Accès complet 4K/8K", p: "L'essai gratuit débloque le même catalogue que l'abonnement payant : sport, cinéma, chaînes internationales." },
      { h: "Sans engagement", p: "Aucun renouvellement automatique. Vous ne payez que si l'essai vous convainc." },
    ],
    sections: [
      {
        h: "Comment obtenir un essai IPTV gratuit ?",
        p: "Pour obtenir votre essai IPTV gratuit ATV Corner, contactez-nous sur WhatsApp au +44 7796 630011 et demandez votre test. Nous vous envoyons vos identifiants Xtream Codes ou votre lien M3U en moins de 5 minutes. Chargez-les dans votre lecteur préféré (TiviMate, IBO Player, IPTV Smarters Pro, VLC) et l'accès complet à 66 000+ chaînes s'ouvre immédiatement. Aucune carte bancaire, aucune donnée de paiement n'est requise pour l'essai.",
      },
      {
        h: "Essai IPTV gratuit 24h ou 72h : que tester ?",
        p: "Pendant votre essai IPTV gratuit, testez les points qui comptent vraiment : la stabilité pendant un match de sport en direct, la vitesse de zapping entre les chaînes, la qualité réelle des flux 4K/8K, et la richesse du catalogue VOD. C'est la meilleure façon de juger un service IPTV avant de vous abonner. Si vous avez besoin de plus de temps que 24h pour décider, demandez simplement une extension à notre support.",
      },
      {
        h: "Après l'essai : abonnement à partir de 5 €/mois",
        p: "Si votre essai gratuit vous convainc, l'abonnement ATV Corner démarre à 15 € pour un mois et descend à 5 €/mois sur le plan annuel (60 € pour 12 mois). Chaque abonnement inclut la qualité 4K/8K, les 66 000+ chaînes, le catalogue VOD complet et une garantie satisfait ou remboursé sous 7 jours. Vous passez de l'essai à l'abonnement complet sans rien réinstaller.",
      },
    ],
    faq: [
      { q: "L'essai IPTV est-il vraiment gratuit ?", a: "Oui. L'essai ATV Corner est 100 % gratuit, sans carte bancaire ni donnée de paiement. Vous testez l'accès complet pendant 24h et ne payez que si vous décidez de vous abonner." },
      { q: "Comment activer mon essai IPTV gratuit ?", a: "Contactez-nous sur WhatsApp (+44 7796 630011) et demandez votre essai. Vous recevez vos identifiants en moins de 5 minutes, à charger dans TiviMate, IBO Player, IPTV Smarters Pro ou VLC." },
      { q: "Puis-je obtenir un essai IPTV de 72 heures ?", a: "Notre essai standard est de 24h, suffisant pour tester la stabilité et la qualité. Si vous avez besoin de plus de temps, demandez une extension à notre support WhatsApp." },
      { q: "Ai-je besoin d'une carte bancaire pour l'essai ?", a: "Non. Aucune carte bancaire ni information de paiement n'est requise pour l'essai IPTV gratuit. C'est un vrai test sans engagement." },
      { q: "Que se passe-t-il à la fin de l'essai gratuit ?", a: "Rien d'automatique. L'essai s'arrête simplement. Si vous êtes convaincu, vous choisissez un abonnement à partir de 5 €/mois ; sinon, aucun paiement n'est prélevé." },
    ],
    cta: "Demander mon essai gratuit",
  },
  en: {
    metaTitle: "Free IPTV Trial 24h — Test IPTV No Commitment",
    metaDesc:
      "Get a free IPTV trial at ATV Corner: test 66,000+ channels in 4K/8K for 24h, no credit card. Activated in 5 min via WhatsApp. Free IPTV trial 2026, no commitment.",
    eyebrow: "Free IPTV Trial · No commitment",
    h1: "Free IPTV",
    h1Accent: "trial 24h",
    intro:
      "A free IPTV trial lets you test the service before you pay. At ATV Corner, your free trial unlocks full access to 66,000+ channels in 4K/8K, plus VOD movies and series, for 24 hours — no credit card and no commitment. Activation takes under 5 minutes via WhatsApp.",
    features: [
      { h: "100% Free Trial", p: "Test real quality, stability and catalog before any payment. No credit card required." },
      { h: "5-Minute Activation", p: "Send a WhatsApp message and receive your free IPTV trial credentials in under 5 minutes." },
      { h: "Full 4K/8K Access", p: "The free trial unlocks the same catalog as the paid plan: sports, cinema, international channels." },
      { h: "No Commitment", p: "No auto-renewal. You only pay if the trial convinces you." },
    ],
    sections: [
      {
        h: "How do I get a free IPTV trial?",
        p: "To get your ATV Corner free IPTV trial, message us on WhatsApp at +44 7796 630011 and request your test. We send your Xtream Codes credentials or M3U link in under 5 minutes. Load them into your favorite player (TiviMate, IBO Player, IPTV Smarters Pro, VLC) and full access to 66,000+ channels opens instantly. No credit card and no payment details are required for the trial.",
      },
      {
        h: "Free IPTV trial 24h or 72h: what to test",
        p: "During your free IPTV trial, test what really matters: stability during a live sports match, channel zapping speed, real 4K/8K stream quality, and VOD catalog depth. It's the best way to judge an IPTV service before subscribing. If you need more than 24h to decide, just ask our support for an extension.",
      },
      {
        h: "After the trial: plans from $5/month",
        p: "If your free trial convinces you, an ATV Corner subscription starts at $16 for one month and drops to $5/month on the annual plan ($65 for 12 months). Every plan includes 4K/8K quality, 66,000+ channels, the full VOD catalog, and a 7-day money-back guarantee. You move from trial to full subscription without reinstalling anything.",
      },
    ],
    faq: [
      { q: "Is the IPTV trial really free?", a: "Yes. The ATV Corner trial is 100% free, with no credit card or payment details. You test full access for 24h and only pay if you decide to subscribe." },
      { q: "How do I activate my free IPTV trial?", a: "Message us on WhatsApp (+44 7796 630011) and request your trial. You receive your credentials in under 5 minutes, ready to load into TiviMate, IBO Player, IPTV Smarters Pro or VLC." },
      { q: "Can I get a 72-hour IPTV free trial?", a: "Our standard trial is 24h, enough to test stability and quality. If you need more time, ask our WhatsApp support for an extension." },
      { q: "Do I need a credit card for the trial?", a: "No. No credit card or payment information is required for the free IPTV trial. It's a genuine no-commitment test." },
      { q: "What happens when the free trial ends?", a: "Nothing automatic. The trial simply stops. If you're convinced, you pick a plan from $5/month; otherwise, no payment is taken." },
    ],
    cta: "Request my free trial",
  },
  de: {
    metaTitle: "Kostenloser IPTV Test 24h — IPTV testen ohne Vertrag",
    metaDesc:
      "Kostenloser IPTV Test bei ATV Corner: 66.000+ Sender in 4K/8K für 24h testen, ohne Kreditkarte. Aktivierung in 5 Min per WhatsApp. Gratis IPTV Test 2026, ohne Vertrag.",
    eyebrow: "Kostenloser IPTV Test · Ohne Vertrag",
    h1: "Kostenloser IPTV",
    h1Accent: "Test 24h",
    intro:
      "Ein kostenloser IPTV Test lässt Sie den Dienst vor der Zahlung testen. Bei ATV Corner schaltet Ihr Gratis-Test vollen Zugriff auf über 66.000 Sender in 4K/8K sowie VOD-Filme und -Serien für 24 Stunden frei — ohne Kreditkarte und ohne Vertrag. Die Aktivierung dauert unter 5 Minuten per WhatsApp.",
    features: [
      { h: "100% kostenloser Test", p: "Testen Sie echte Qualität, Stabilität und Katalog vor jeder Zahlung. Keine Kreditkarte nötig." },
      { h: "Aktivierung in 5 Min", p: "Senden Sie eine WhatsApp-Nachricht und erhalten Sie Ihre Gratis-Test-Zugangsdaten in unter 5 Minuten." },
      { h: "Voller 4K/8K-Zugriff", p: "Der Gratis-Test schaltet denselben Katalog frei wie das bezahlte Abo: Sport, Kino, internationale Sender." },
      { h: "Ohne Vertrag", p: "Keine automatische Verlängerung. Sie zahlen nur, wenn der Test Sie überzeugt." },
    ],
    sections: [
      {
        h: "Wie bekomme ich einen kostenlosen IPTV Test?",
        p: "Für Ihren kostenlosen ATV Corner IPTV Test schreiben Sie uns auf WhatsApp unter +44 7796 630011 und fragen nach Ihrem Test. Wir senden Ihre Xtream-Codes-Zugangsdaten oder Ihren M3U-Link in unter 5 Minuten. Laden Sie diese in Ihren bevorzugten Player (TiviMate, IBO Player, IPTV Smarters Pro, VLC) und der volle Zugriff auf 66.000+ Sender öffnet sich sofort. Keine Kreditkarte, keine Zahlungsdaten für den Test erforderlich.",
      },
      {
        h: "Kostenloser IPTV Test 24h oder 72h: was testen?",
        p: "Testen Sie während Ihres kostenlosen IPTV Tests, was wirklich zählt: Stabilität während eines Live-Sportspiels, Zapping-Geschwindigkeit, echte 4K/8K-Streamqualität und VOD-Katalogtiefe. Das ist der beste Weg, einen IPTV-Dienst vor dem Abo zu beurteilen. Wenn Sie mehr als 24h zur Entscheidung brauchen, fragen Sie unseren Support nach einer Verlängerung.",
      },
      {
        h: "Nach dem Test: Abos ab 5 €/Monat",
        p: "Wenn Ihr Gratis-Test Sie überzeugt, beginnt ein ATV Corner Abo bei 15 € für einen Monat und sinkt auf 5 €/Monat im Jahresplan (60 € für 12 Monate). Jedes Abo umfasst 4K/8K-Qualität, 66.000+ Sender, den vollen VOD-Katalog und eine 7-tägige Geld-zurück-Garantie. Sie wechseln vom Test zum vollen Abo, ohne etwas neu zu installieren.",
      },
    ],
    faq: [
      { q: "Ist der IPTV Test wirklich kostenlos?", a: "Ja. Der ATV Corner Test ist 100% kostenlos, ohne Kreditkarte oder Zahlungsdaten. Sie testen vollen Zugriff für 24h und zahlen nur, wenn Sie sich für ein Abo entscheiden." },
      { q: "Wie aktiviere ich meinen kostenlosen IPTV Test?", a: "Schreiben Sie uns auf WhatsApp (+44 7796 630011) und fragen Sie nach Ihrem Test. Sie erhalten Ihre Zugangsdaten in unter 5 Minuten, bereit für TiviMate, IBO Player, IPTV Smarters Pro oder VLC." },
      { q: "Kann ich einen 72-Stunden-IPTV-Test bekommen?", a: "Unser Standard-Test dauert 24h, genug um Stabilität und Qualität zu testen. Wenn Sie mehr Zeit brauchen, fragen Sie unseren WhatsApp-Support nach einer Verlängerung." },
      { q: "Brauche ich eine Kreditkarte für den Test?", a: "Nein. Für den kostenlosen IPTV Test sind keine Kreditkarte oder Zahlungsinformationen nötig. Es ist ein echter Test ohne Vertrag." },
      { q: "Was passiert am Ende des Gratis-Tests?", a: "Nichts Automatisches. Der Test stoppt einfach. Wenn Sie überzeugt sind, wählen Sie ein Abo ab 5 €/Monat; andernfalls wird keine Zahlung fällig." },
    ],
    cta: "Meinen Gratis-Test anfragen",
  },
};

// ===========================================================================
// /best-iptv-service — Targets "iptv service", "iptv services",
// "best iptv service", "best iptv service 2026", "iptv providers",
// "iptv provider", "best iptv provider(s)", "iptv service provider(s)".
// Primary commercial money page.
// ===========================================================================
content["best-iptv-service"] = {
  fr: {
    metaTitle: "Meilleur Service IPTV 2026 — Fournisseur IPTV Premium",
    metaDesc:
      "ATV Corner, meilleur service IPTV 2026 : 66 000+ chaînes 4K/8K, fournisseur IPTV fiable, activation instantanée, support 24/7. Comparez les fournisseurs IPTV et testez gratuitement.",
    eyebrow: "Meilleur Service IPTV · 2026",
    h1: "Le meilleur",
    h1Accent: "service IPTV",
    intro:
      "Un service IPTV diffuse la télévision en direct et à la demande via internet. Le meilleur fournisseur IPTV combine un large catalogue, une qualité 4K/8K stable et un support réactif. ATV Corner réunit ces trois critères : 66 000+ chaînes, infrastructure serveur Tier 1 européenne et support 24/7 en quatre langues — avec un essai gratuit pour juger avant de payer.",
    features: [
      { h: "66 000+ chaînes", p: "L'un des plus larges catalogues du marché : France, Europe, USA, Maghreb et chaînes internationales." },
      { h: "Fournisseur fiable", p: "Serveurs Tier 1 européens redondants, moins de 0,1 % de coupures mesurées — un service IPTV stable même en pic." },
      { h: "Qualité 4K/8K", p: "Flux natifs encodés HEVC/H.265, bitrate adaptatif, zéro pixelisation en sport live." },
      { h: "Support 24/7", p: "Assistance WhatsApp en français, anglais, allemand et arabe, avec réponse en moins de 5 minutes." },
    ],
    sections: [
      {
        h: "Qu'est-ce qu'un service IPTV et comment choisir un fournisseur ?",
        p: "Un service IPTV (Internet Protocol Television) diffuse des chaînes TV et du contenu à la demande via une connexion internet, sans antenne ni câble. Pour choisir le meilleur fournisseur IPTV, comparez quatre critères : la taille réelle du catalogue de chaînes, la qualité maximale supportée (4K natif ou HD upscalé), la stabilité des serveurs pendant les grands événements sportifs, et la réactivité du support client. ATV Corner se positionne dans le segment premium sur ces quatre critères.",
      },
      {
        h: "Pourquoi ATV Corner est le meilleur service IPTV en 2026",
        p: "ATV Corner combine ce que les meilleurs services IPTV offrent séparément : un catalogue de 66 000+ chaînes, une vraie qualité 4K/8K native, une infrastructure CDN européenne calibrée pour 10× la charge réelle, et un support multilingue 24/7. Contrairement aux fournisseurs IPTV low-cost aux serveurs surchargés, notre service maintient la stabilité pendant les pics — Champions League, F1, finales. C'est ce qui distingue un service IPTV premium d'une offre bon marché.",
      },
      {
        h: "Comparer les fournisseurs IPTV : le prix ne fait pas tout",
        p: "Beaucoup comparent les fournisseurs IPTV uniquement sur le prix. C'est une erreur : un abonnement très bas cache souvent des serveurs saturés qui freezent pendant les matchs. Le bon indicateur, c'est le rapport qualité/stabilité/support. ATV Corner démarre à 15 €/mois (5 €/mois sur l'annuel) tout en offrant une infrastructure premium et une garantie satisfait ou remboursé 7 jours. Vous pouvez même commencer par un essai IPTV gratuit pour comparer notre service à votre fournisseur actuel.",
      },
      {
        h: "Activation instantanée, tous appareils",
        p: "Le service IPTV ATV Corner s'active en moins de 5 minutes après paiement : vous recevez vos identifiants Xtream Codes ou votre lien M3U par WhatsApp. Il fonctionne sur Smart TV (Samsung, LG, Android TV), Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS et Linux — via TiviMate, IBO Player, IPTV Smarters Pro ou VLC. Un seul abonnement pour tous vos écrans.",
      },
    ],
    faq: [
      { q: "Quel est le meilleur service IPTV en 2026 ?", a: "Le meilleur service IPTV combine un large catalogue, une qualité 4K/8K stable et un support réactif. ATV Corner réunit 66 000+ chaînes, une infrastructure Tier 1 européenne et un support 24/7, avec un essai gratuit pour juger avant de vous abonner." },
      { q: "Comment choisir un fournisseur IPTV fiable ?", a: "Vérifiez quatre critères : la taille du catalogue, la qualité réelle des flux (4K natif vs upscalé), la stabilité serveur en pic sportif, et la qualité du support. Évitez de choisir sur le seul prix — les offres très basses cachent souvent des serveurs surchargés." },
      { q: "Combien coûte un bon service IPTV ?", a: "Un service IPTV premium fiable coûte généralement entre 5 et 15 €/mois. Chez ATV Corner, l'abonnement démarre à 15 € pour un mois et descend à 5 €/mois sur le plan annuel, qualité 4K/8K et 66 000+ chaînes incluses." },
      { q: "Puis-je tester le service avant de payer ?", a: "Oui. ATV Corner propose un essai IPTV gratuit de 24h, sans carte bancaire. Vous testez l'accès complet et ne vous abonnez que si le service vous convainc." },
      { q: "Le service fonctionne-t-il sur tous les appareils ?", a: "Oui. Notre service IPTV fonctionne sur Smart TV, Fire TV Stick, Apple TV, smartphones, tablettes, MAG Box, Enigma2 et ordinateurs, via TiviMate, IBO Player, IPTV Smarters Pro ou VLC." },
    ],
    cta: "Tester le service gratuitement",
  },
  en: {
    metaTitle: "Best IPTV Service 2026 — Premium IPTV Provider",
    metaDesc:
      "ATV Corner, best IPTV service 2026: 66,000+ 4K/8K channels, reliable IPTV provider, instant activation, 24/7 support. Compare IPTV providers and try it free.",
    eyebrow: "Best IPTV Service · 2026",
    h1: "The best",
    h1Accent: "IPTV service",
    intro:
      "An IPTV service streams live and on-demand television over the internet. The best IPTV provider combines a large catalog, stable 4K/8K quality, and responsive support. ATV Corner delivers all three: 66,000+ channels, Tier 1 European server infrastructure, and 24/7 support in four languages — with a free trial so you can judge before you pay.",
    features: [
      { h: "66,000+ Channels", p: "One of the largest catalogs available: France, Europe, US, MENA and international channels." },
      { h: "Reliable Provider", p: "Redundant Tier 1 European servers, under 0.1% measured downtime — a stable IPTV service even at peak." },
      { h: "4K/8K Quality", p: "Native HEVC/H.265 streams, adaptive bitrate, zero pixelation on live sports." },
      { h: "24/7 Support", p: "WhatsApp help in English, French, German and Arabic, with replies in under 5 minutes." },
    ],
    sections: [
      {
        h: "What is an IPTV service and how to choose a provider?",
        p: "An IPTV service (Internet Protocol Television) delivers TV channels and on-demand content over an internet connection, with no aerial or cable. To choose the best IPTV provider, compare four criteria: real channel catalog size, maximum supported quality (native 4K vs upscaled HD), server stability during major sports events, and customer support responsiveness. ATV Corner positions itself in the premium segment across all four.",
      },
      {
        h: "Why ATV Corner is the best IPTV service in 2026",
        p: "ATV Corner combines what the best IPTV services offer separately: a 66,000+ channel catalog, real native 4K/8K quality, European CDN infrastructure calibrated for 10× actual load, and 24/7 multilingual support. Unlike low-cost IPTV providers with overloaded servers, our service holds stability during peaks — Champions League, F1, finals. That's what separates a premium IPTV service from a cheap offer.",
      },
      {
        h: "Comparing IPTV providers: price isn't everything",
        p: "Many compare IPTV providers on price alone. That's a mistake: a very cheap subscription often hides saturated servers that freeze during matches. The right indicator is the quality/stability/support ratio. ATV Corner starts at $16/month ($5/month on annual) while offering premium infrastructure and a 7-day money-back guarantee. You can even start with a free IPTV trial to compare our service against your current provider.",
      },
      {
        h: "Instant activation, every device",
        p: "The ATV Corner IPTV service activates in under 5 minutes after payment: you receive your Xtream Codes credentials or M3U link via WhatsApp. It works on Smart TV (Samsung, LG, Android TV), Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS and Linux — via TiviMate, IBO Player, IPTV Smarters Pro or VLC. One subscription for every screen.",
      },
    ],
    faq: [
      { q: "What is the best IPTV service in 2026?", a: "The best IPTV service combines a large catalog, stable 4K/8K quality, and responsive support. ATV Corner brings together 66,000+ channels, Tier 1 European infrastructure and 24/7 support, with a free trial so you can judge before subscribing." },
      { q: "How do I choose a reliable IPTV provider?", a: "Check four criteria: catalog size, real stream quality (native 4K vs upscaled), server stability at sports peaks, and support quality. Avoid choosing on price alone — very cheap offers often hide overloaded servers." },
      { q: "How much does a good IPTV service cost?", a: "A reliable premium IPTV service typically costs $5 to $16/month. At ATV Corner, subscriptions start at $16 for one month and drop to $5/month on the annual plan, with 4K/8K quality and 66,000+ channels included." },
      { q: "Can I test the service before paying?", a: "Yes. ATV Corner offers a free 24h IPTV trial, no credit card required. You test full access and only subscribe if the service convinces you." },
      { q: "Does the service work on all devices?", a: "Yes. Our IPTV service works on Smart TV, Fire TV Stick, Apple TV, phones, tablets, MAG Box, Enigma2 and computers, via TiviMate, IBO Player, IPTV Smarters Pro or VLC." },
    ],
    cta: "Try the service free",
  },
  de: {
    metaTitle: "Bester IPTV Anbieter 2026 — Premium IPTV Service",
    metaDesc:
      "ATV Corner, bester IPTV Service 2026: 66.000+ 4K/8K-Sender, zuverlässiger IPTV Anbieter, sofortige Aktivierung, 24/7 Support. IPTV Anbieter vergleichen und gratis testen.",
    eyebrow: "Bester IPTV Service · 2026",
    h1: "Der beste",
    h1Accent: "IPTV Service",
    intro:
      "Ein IPTV Service überträgt Live- und On-Demand-Fernsehen über das Internet. Der beste IPTV Anbieter kombiniert einen großen Katalog, stabile 4K/8K-Qualität und reaktionsschnellen Support. ATV Corner liefert alle drei: 66.000+ Sender, Tier-1-Serverinfrastruktur in Europa und 24/7-Support in vier Sprachen — mit einem kostenlosen Test, um vor der Zahlung zu urteilen.",
    features: [
      { h: "66.000+ Sender", p: "Einer der größten verfügbaren Kataloge: Frankreich, Europa, USA, MENA und internationale Sender." },
      { h: "Zuverlässiger Anbieter", p: "Redundante Tier-1-Server in Europa, unter 0,1% gemessene Ausfallzeit — ein stabiler IPTV Service auch bei Spitzen." },
      { h: "4K/8K-Qualität", p: "Native HEVC/H.265-Streams, adaptive Bitrate, keine Pixelierung bei Live-Sport." },
      { h: "24/7 Support", p: "WhatsApp-Hilfe auf Deutsch, Englisch, Französisch und Arabisch, mit Antwort in unter 5 Minuten." },
    ],
    sections: [
      {
        h: "Was ist ein IPTV Service und wie wählt man einen Anbieter?",
        p: "Ein IPTV Service (Internet Protocol Television) liefert TV-Sender und On-Demand-Inhalte über eine Internetverbindung, ohne Antenne oder Kabel. Um den besten IPTV Anbieter zu wählen, vergleichen Sie vier Kriterien: reale Katalogfgröße, maximale unterstützte Qualität (natives 4K vs hochskaliertes HD), Serverstabilität bei großen Sportereignissen und Support-Reaktionsfähigkeit. ATV Corner positioniert sich bei allen vier im Premium-Segment.",
      },
      {
        h: "Warum ATV Corner der beste IPTV Service 2026 ist",
        p: "ATV Corner kombiniert, was die besten IPTV-Dienste getrennt bieten: einen Katalog mit 66.000+ Sendern, echte native 4K/8K-Qualität, europäische CDN-Infrastruktur für die 10-fache tatsächliche Last kalibriert und 24/7-mehrsprachigen Support. Anders als IPTV-Billiganbieter mit überlasteten Servern hält unser Service die Stabilität bei Spitzen — Champions League, F1, Finale. Das unterscheidet einen Premium-IPTV-Service von einem billigen Angebot.",
      },
      {
        h: "IPTV Anbieter vergleichen: der Preis ist nicht alles",
        p: "Viele vergleichen IPTV Anbieter nur nach dem Preis. Das ist ein Fehler: ein sehr günstiges Abo verbirgt oft überlastete Server, die bei Spielen einfrieren. Der richtige Indikator ist das Verhältnis von Qualität, Stabilität und Support. ATV Corner beginnt bei 15 €/Monat (5 €/Monat im Jahresplan) und bietet dabei Premium-Infrastruktur und eine 7-tägige Geld-zurück-Garantie. Sie können sogar mit einem kostenlosen IPTV Test starten, um unseren Service mit Ihrem aktuellen Anbieter zu vergleichen.",
      },
      {
        h: "Sofortige Aktivierung, jedes Gerät",
        p: "Der ATV Corner IPTV Service wird in unter 5 Minuten nach Zahlung aktiviert: Sie erhalten Ihre Xtream-Codes-Zugangsdaten oder Ihren M3U-Link per WhatsApp. Er funktioniert auf Smart TV (Samsung, LG, Android TV), Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS und Linux — über TiviMate, IBO Player, IPTV Smarters Pro oder VLC. Ein Abo für jeden Bildschirm.",
      },
    ],
    faq: [
      { q: "Was ist der beste IPTV Service 2026?", a: "Der beste IPTV Service kombiniert einen großen Katalog, stabile 4K/8K-Qualität und reaktionsschnellen Support. ATV Corner vereint 66.000+ Sender, Tier-1-Infrastruktur in Europa und 24/7-Support, mit einem kostenlosen Test zum Urteilen vor dem Abo." },
      { q: "Wie wähle ich einen zuverlässigen IPTV Anbieter?", a: "Prüfen Sie vier Kriterien: Katalogfgröße, echte Streamqualität (natives 4K vs hochskaliert), Serverstabilität bei Sportspitzen und Support-Qualität. Wählen Sie nicht nur nach dem Preis — sehr günstige Angebote verbergen oft überlastete Server." },
      { q: "Was kostet ein guter IPTV Service?", a: "Ein zuverlässiger Premium-IPTV-Service kostet typischerweise 5 bis 15 €/Monat. Bei ATV Corner beginnen Abos bei 15 € für einen Monat und sinken auf 5 €/Monat im Jahresplan, inklusive 4K/8K-Qualität und 66.000+ Sendern." },
      { q: "Kann ich den Service vor der Zahlung testen?", a: "Ja. ATV Corner bietet einen kostenlosen 24h-IPTV-Test, ohne Kreditkarte. Sie testen vollen Zugriff und abonnieren nur, wenn der Service Sie überzeugt." },
      { q: "Funktioniert der Service auf allen Geräten?", a: "Ja. Unser IPTV Service funktioniert auf Smart TV, Fire TV Stick, Apple TV, Smartphones, Tablets, MAG Box, Enigma2 und Computern, über TiviMate, IBO Player, IPTV Smarters Pro oder VLC." },
    ],
    cta: "Service gratis testen",
  },
};

// =============================================================================
// /iptv-subscription — Targets "iptv subscription", "abonnement iptv", "iptv abo"
// =============================================================================
content["iptv-subscription"] = {
  fr: {
    metaTitle: "Abonnement IPTV — 66 000+ Chaînes, 4K/8K & Essai Gratuit",
    metaDesc:
      "Abonnement IPTV ATV Corner : 66 000+ chaînes, 70 000+ films et séries en 4K/8K. Dès 5 €/mois, activation en 5 minutes, essai gratuit et garantie 7 jours.",
    eyebrow: "Abonnement IPTV · Dès 5 €/mois",
    h1: "L'abonnement IPTV",
    h1Accent: "sans compromis",
    intro:
      "Un abonnement IPTV ATV Corner vous donne accès à plus de 66 000 chaînes internationales et 70 000 films et séries en 4K/8K Ultra HD, sur tous vos écrans. Activation en moins de 5 minutes, sans engagement, à partir de 5 €/mois.",
    features: [
      { h: "66 000+ chaînes", p: "Sport, cinéma, séries, info, jeunesse et chaînes du monde entier réunies dans un seul abonnement." },
      { h: "4K / 8K Ultra HD", p: "Encodage HEVC/H.265 et bitrate adaptatif pour une image nette, même sur le sport en direct." },
      { h: "Dès 5 €/mois", p: "Formules 1, 3, 6 et 12 mois. Le plan annuel revient à 5 €/mois, sans frais cachés." },
      { h: "Activation en 5 min", p: "Vos identifiants Xtream Codes ou lien M3U livrés par WhatsApp juste après le paiement." },
    ],
    sections: [
      {
        h: "Qu'est-ce qu'un abonnement IPTV ?",
        p: "Un abonnement IPTV (Internet Protocol Television) permet de recevoir la télévision en direct et à la demande via votre connexion internet, sans antenne ni décodeur câble. Avec ATV Corner, un seul abonnement débloque 66 000+ chaînes et une bibliothèque de 70 000+ films et 18 000+ séries. Le flux arrive en temps réel sur votre Smart TV, Firestick, smartphone ou box, avec guide des programmes (EPG) intégré. C'est plus de contenu qu'un bouquet câble ou satellite, pour une fraction du prix.",
      },
      {
        h: "Comment choisir la durée de son abonnement IPTV",
        p: "ATV Corner propose quatre durées : 1 mois pour tester (15 €), 3 mois (30 €), 6 mois (50 €) et 12 mois (60 €, soit 5 €/mois). Plus la durée est longue, plus le coût mensuel baisse. Chaque formule inclut exactement le même catalogue, la même qualité 4K/8K et le même support 24/7 — vous ne payez pas plus cher pour une meilleure image. Vous pouvez commencer par un essai gratuit de 24h pour vérifier la stabilité avant de vous engager, puis passer à l'abonnement annuel pour le meilleur tarif.",
      },
      {
        h: "Un abonnement, tous vos appareils",
        p: "Votre abonnement IPTV ATV Corner fonctionne sur Smart TV Samsung, LG et Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS et Linux — via les applications TiviMate, IBO Player, IPTV Smarters Pro ou VLC. Vous pouvez regarder à la maison puis reprendre sur mobile, sans réinstallation. Le support technique vous accompagne par WhatsApp en moins de 5 minutes pour la configuration de chaque appareil.",
      },
      {
        h: "Quelle durée convient à qui",
        p: "Les quatre durées incluent le même catalogue, la même qualité 4K/8K et le même support — la seule différence est le coût mensuel. La formule mensuelle à 15 € a du sens si vous souhaitez d'abord suivre le service sur une saison ou un tournoi. Trois mois à 30 € reviennent à 10 €/mois et couvrent typiquement une demi-saison sportive. Six mois à 50 € situent le coût autour de 8,30 €/mois. L'abonnement annuel à 60 € ramène le tarif à 5 €/mois, de loin l'option la moins chère. Comme rien ne se reconduit automatiquement, choisir une durée longue ne comporte aucun risque de prélèvement non souhaité.",
      },
      {
        h: "Ce que vous recevez après le paiement",
        p: "Vos identifiants arrivent par WhatsApp en moins de cinq minutes. Selon le format souhaité, il s'agit soit d'un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit d'un lien M3U. Xtream Codes est l'option la plus moderne : le lecteur charge la liste des chaînes, le guide, les films et les séries de façon dynamique et à la demande, ce qui est nettement plus rapide sur un gros catalogue. Le M3U est une simple URL de playlist, adaptée à VLC ou Kodi. Les deux livrent exactement le même contenu.",
      },
      {
        h: "Plusieurs appareils dans le même foyer",
        p: "Un abonnement est lié à vos identifiants, pas à un appareil unique. Vous pouvez donc saisir les mêmes informations sur le téléviseur du salon, sur un téléphone et sur une tablette, et reprendre sur chacun sans racheter quoi que ce soit. Le seul point à surveiller est le nombre de connexions simultanées autorisées par votre formule : plusieurs personnes souhaitant regarder des chaînes différentes au même moment en nécessitent davantage. Le nombre réellement utile dépend du foyer ; en cas de doute, demandez avant l'achat et nous réglons cela en un message.",
      },
      {
        h: "Résiliation, reconduction et remboursement",
        p: "Rien ne se reconduit automatiquement. Votre accès expire simplement à la fin de la durée achetée, et vous décidez activement de racheter ou non. Cela supprime les frictions habituelles liées aux préavis, formulaires et échéances manquées propres aux contrats câble et satellite. Durant les sept premiers jours s'applique en outre une garantie satisfait ou remboursé : si la qualité ou la stabilité ne convainc pas, nous remboursons intégralement. Comme vous pouvez tester gratuitement 24 heures au préalable, ce cas devrait rester rare — la garantie couvre le reste.",
      },
      {
        h: "Comment savoir avant d'acheter si cela convient",
        p: "Le test le plus fiable prend un quart d'heure et ne coûte rien. Lancez l'accès gratuit de 24 heures délibérément à un moment où vous regardez habituellement la télévision — pour le sport, au coup d'envoi et non le matin. Vérifiez alors trois points : que les chaînes que vous regardez vraiment figurent dans la liste et fonctionnent de façon stable ; que le guide des programmes est correctement rempli ; et que l'image reste fluide sur votre appareil précis. Si l'un de ces points échoue, écrivez-nous — il s'agit le plus souvent d'un réglage corrigeable en deux minutes.",
      },
    ],
    faq: [
      { q: "Combien coûte un abonnement IPTV ATV Corner ?", a: "Les abonnements démarrent à 15 € pour un mois et descendent à 5 €/mois avec la formule annuelle à 60 €. Toutes les formules incluent 66 000+ chaînes, la qualité 4K/8K et le support 24/7." },
      { q: "L'abonnement est-il sans engagement ?", a: "Oui. Aucun engagement, aucune reconduction automatique. Vous choisissez la durée et vous renouvelez uniquement si vous le souhaitez, avec une garantie satisfait ou remboursé de 7 jours." },
      { q: "Puis-je essayer avant de payer ?", a: "Oui, un essai gratuit de 24h est disponible sans carte bancaire. Vous testez l'accès complet, puis vous vous abonnez seulement si la qualité vous convainc." },
      { q: "En combien de temps l'abonnement est-il actif ?", a: "En moins de 5 minutes. Après paiement, vous recevez vos identifiants Xtream Codes ou votre lien M3U par WhatsApp ou email, prêts à l'emploi." },
      { q: "Sur quels appareils fonctionne l'abonnement ?", a: "Sur Smart TV, Fire TV Stick, Apple TV, smartphones, tablettes, MAG Box, Enigma2 et ordinateurs, via TiviMate, IBO Player, IPTV Smarters Pro ou VLC." },
    ],
    cta: "Démarrer mon abonnement",
  },
  en: {
    metaTitle: "IPTV Subscription — 66,000+ Channels, 4K/8K & Free Trial",
    metaDesc:
      "ATV Corner IPTV subscription: 66,000+ channels, 70,000+ movies and series in 4K/8K. From $5/mo, 5-minute activation, free trial and 7-day money-back guarantee.",
    eyebrow: "IPTV Subscription · From $5/mo",
    h1: "The IPTV subscription",
    h1Accent: "with no compromise",
    intro:
      "An ATV Corner IPTV subscription gives you 66,000+ international channels and 70,000+ movies and series in 4K/8K Ultra HD, on every screen. Activated in under 5 minutes, no contract, from $5/mo.",
    features: [
      { h: "66,000+ channels", p: "Sports, cinema, series, news, kids and channels from around the world in a single subscription." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 encoding and adaptive bitrate for a sharp picture, even on live sports." },
      { h: "From $5/mo", p: "1, 3, 6 and 12-month plans. The annual plan works out to $5/mo, with no hidden fees." },
      { h: "Active in 5 min", p: "Your Xtream Codes credentials or M3U link delivered via WhatsApp right after payment." },
    ],
    sections: [
      {
        h: "What is an IPTV subscription?",
        p: "An IPTV (Internet Protocol Television) subscription delivers live and on-demand TV through your internet connection — no aerial, no cable box. With ATV Corner, one subscription unlocks 66,000+ channels plus a library of 70,000+ movies and 18,000+ series. The stream arrives in real time on your Smart TV, Firestick, phone or box, with a built-in program guide (EPG). That's more content than a cable or satellite package, for a fraction of the price.",
      },
      {
        h: "How to choose your IPTV subscription length",
        p: "ATV Corner offers four durations: 1 month to try ($16), 3 months ($33), 6 months ($55) and 12 months ($65, i.e. about $5/mo). The longer the term, the lower the monthly cost. Every plan includes the exact same catalog, the same 4K/8K quality and the same 24/7 support — you never pay more for better picture. You can start with a free 24-hour trial to check stability before committing, then move to the annual plan for the best rate.",
      },
      {
        h: "One subscription, all your devices",
        p: "Your ATV Corner IPTV subscription works on Samsung, LG and Android Smart TVs, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS and Linux — through the TiviMate, IBO Player, IPTV Smarters Pro or VLC apps. Watch at home, then pick up on mobile, with no reinstall. Technical support helps you set up each device via WhatsApp in under 5 minutes.",
      },
      {
        h: "Which term makes sense for whom",
        p: "All four terms include the same catalogue, the same 4K/8K quality and the same support — the only difference is the cost per month. The monthly plan at $16 makes sense if you want to follow the service through a single season or tournament first. Three months at $33 works out to $11/mo and typically covers half a sporting season. Six months at $55 lands near $9/mo. The annual plan at $65 brings the cost down to roughly $5/mo, making it by far the cheapest option. Because nothing auto-renews, choosing a longer term carries no risk of an unwanted follow-on charge.",
      },
      {
        h: "What you receive after payment",
        p: "Your credentials arrive on WhatsApp within five minutes. Depending on the format you want, that is either an Xtream Codes trio of server URL, username and password, or an M3U link. Xtream Codes is the more modern option: the player loads the channel list, guide, films and series dynamically and only as needed, which is noticeably faster with a large catalogue. M3U is a single playlist URL suited to VLC or Kodi. Both deliver exactly the same content. If you are unsure which format suits your device, support will tell you in a message beforehand.",
      },
      {
        h: "Several devices in the same household",
        p: "A subscription is tied to your credentials, not to one device. You can therefore enter the same details on the living-room television, on a phone and on a tablet, and pick up where you left off on each without buying anything again. The one thing to keep in mind is the number of simultaneous connections your plan allows — several people wanting different channels at the same moment need more of them. How many you actually need depends on the household; if you are unsure, ask before buying and we will sort it out in a message.",
      },
      {
        h: "Cancelling, renewing and refunds",
        p: "Nothing renews automatically. Your access simply expires at the end of the term you bought, and you actively decide whether to buy again. That removes the familiar friction of notice periods, forms and missed deadlines that comes with cable and satellite contracts. Within the first seven days a money-back guarantee also applies: if the quality or stability does not convince you, we refund in full. Because you can test free for 24 hours beforehand, that should rarely be necessary — the guarantee exists for the remainder.",
      },
      {
        h: "How to tell before buying whether it fits",
        p: "The most reliable test takes fifteen minutes and costs nothing. Start the free 24-hour access deliberately at a time you normally watch — for sport that means kick-off, not the morning. Check three things while you are there: whether the channels you actually watch are in the list and run stably; whether the programme guide is populated correctly; and whether the picture stays smooth on your specific device. If any of those falls short, message us — usually it is a setting that takes two minutes to correct.",
      },
    ],
    faq: [
      { q: "How much is an ATV Corner IPTV subscription?", a: "Subscriptions start at $16 for one month and drop to about $5/mo on the annual $65 plan. Every plan includes 66,000+ channels, 4K/8K quality and 24/7 support." },
      { q: "Is the subscription contract-free?", a: "Yes. No contract, no auto-renewal. You choose the length and renew only if you want to, backed by a 7-day money-back guarantee." },
      { q: "Can I try before I pay?", a: "Yes, a free 24-hour trial is available with no credit card. You test full access, then subscribe only if the quality convinces you." },
      { q: "How fast is the subscription activated?", a: "In under 5 minutes. After payment you receive your Xtream Codes credentials or M3U link by WhatsApp or email, ready to use." },
      { q: "Which devices does the subscription work on?", a: "Smart TV, Fire TV Stick, Apple TV, phones, tablets, MAG Box, Enigma2 and computers, via TiviMate, IBO Player, IPTV Smarters Pro or VLC." },
    ],
    cta: "Start my subscription",
  },
  de: {
    metaTitle: "IPTV Abonnement — 66.000+ Sender, 4K/8K & Gratis-Test",
    metaDesc:
      "ATV Corner IPTV Abonnement: 66.000+ Sender, 70.000+ Filme und Serien in 4K/8K. Ab 5 €/Monat, Aktivierung in 5 Minuten, Gratis-Test und 7-Tage-Garantie.",
    eyebrow: "IPTV Abonnement · Ab 5 €/Monat",
    h1: "Das IPTV Abonnement",
    h1Accent: "ohne Kompromiss",
    intro:
      "Ein ATV Corner IPTV Abonnement bietet 66.000+ internationale Sender und 70.000+ Filme und Serien in 4K/8K Ultra HD, auf jedem Bildschirm. Aktiviert in unter 5 Minuten, ohne Vertragsbindung, ab 5 €/Monat.",
    features: [
      { h: "66.000+ Sender", p: "Sport, Kino, Serien, News, Kinder und Sender aus aller Welt in einem einzigen Abo." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265-Kodierung und adaptive Bitrate für ein scharfes Bild, auch bei Live-Sport." },
      { h: "Ab 5 €/Monat", p: "Laufzeiten von 1, 3, 6 und 12 Monaten. Das Jahresabo entspricht 5 €/Monat, ohne versteckte Kosten." },
      { h: "In 5 Min aktiv", p: "Ihre Xtream-Codes-Zugangsdaten oder Ihr M3U-Link per WhatsApp direkt nach der Zahlung." },
    ],
    sections: [
      {
        h: "Was ist ein IPTV Abonnement?",
        p: "Ein IPTV-Abonnement (Internet Protocol Television) liefert Live- und Abruf-Fernsehen über Ihre Internetverbindung — ohne Antenne, ohne Kabelreceiver. Mit ATV Corner schaltet ein Abo 66.000+ Sender sowie eine Bibliothek mit 70.000+ Filmen und 18.000+ Serien frei. Der Stream kommt in Echtzeit auf Ihren Smart TV, Firestick, Ihr Handy oder Ihre Box, mit integriertem Programmführer (EPG). Das ist mehr Inhalt als ein Kabel- oder Satellitenpaket, zu einem Bruchteil des Preises.",
      },
      {
        h: "So wählen Sie die Laufzeit Ihres IPTV-Abos",
        p: "ATV Corner bietet vier Laufzeiten: 1 Monat zum Testen (15 €), 3 Monate (30 €), 6 Monate (50 €) und 12 Monate (60 €, also 5 €/Monat). Je länger die Laufzeit, desto niedriger der Monatspreis. Jedes Abo enthält genau denselben Katalog, dieselbe 4K/8K-Qualität und denselben 24/7-Support — Sie zahlen nie mehr für ein besseres Bild. Starten Sie mit einem kostenlosen 24h-Test, um die Stabilität zu prüfen, und wechseln Sie dann zum Jahresabo für den besten Preis.",
      },
      {
        h: "Ein Abo, alle Ihre Geräte",
        p: "Ihr ATV Corner IPTV-Abonnement funktioniert auf Samsung-, LG- und Android-Smart-TVs, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS und Linux — über die Apps TiviMate, IBO Player, IPTV Smarters Pro oder VLC. Schauen Sie zu Hause und setzen Sie unterwegs fort, ohne Neuinstallation. Der technische Support hilft per WhatsApp in unter 5 Minuten bei der Einrichtung jedes Geräts.",
      },
      {
        h: "Welche Laufzeit sich für wen lohnt",
        p: "Alle vier Laufzeiten enthalten denselben Katalog, dieselbe 4K/8K-Qualität und denselben Support — der einzige Unterschied ist der Preis pro Monat. Der Monatstarif zu 15 € ist sinnvoll, wenn Sie den Dienst zunächst über eine Saison oder ein einzelnes Turnier begleiten möchten. Drei Monate zu 30 € entsprechen 10 €/Monat und decken typischerweise eine halbe Sportsaison ab. Sechs Monate zu 50 € landen bei etwa 8,30 €/Monat. Das Jahresabo zu 60 € senkt die Kosten auf 5 €/Monat und ist damit die mit Abstand günstigste Variante. Weil keine automatische Verlängerung greift, entsteht durch die längere Laufzeit kein Risiko einer ungewollten Folgebuchung.",
      },
      {
        h: "Was Sie nach der Zahlung erhalten",
        p: "Innerhalb von fünf Minuten kommen Ihre Zugangsdaten per WhatsApp. Je nach gewünschtem Format ist das entweder ein Xtream-Codes-Trio aus Server-URL, Benutzername und Passwort oder ein M3U-Link. Xtream Codes ist die modernere Variante: Der Player lädt Senderliste, Programmführer, Filme und Serien dynamisch und nur bei Bedarf, was besonders bei großen Katalogen spürbar schneller ist. M3U ist eine einzelne Playlist-URL und eignet sich für VLC oder Kodi. Beide liefern exakt denselben Inhalt. Wenn Sie unsicher sind, welches Format zu Ihrem Gerät passt, sagt Ihnen der Support das vorab in einer Nachricht.",
      },
      {
        h: "Mehrere Geräte im selben Haushalt",
        p: "Ein Abo ist an Ihre Zugangsdaten gebunden, nicht an ein einzelnes Gerät. Sie können dieselben Daten also auf dem Fernseher im Wohnzimmer, auf dem Handy und auf dem Tablet hinterlegen und dort jeweils weiterschauen, ohne etwas neu zu kaufen. Zu beachten ist lediglich die Zahl gleichzeitiger Verbindungen, die Ihre Formel erlaubt — mehrere Personen, die zur selben Zeit unterschiedliche Sender schauen möchten, benötigen entsprechend mehr davon. Wie viele Sie tatsächlich brauchen, hängt vom Haushalt ab; fragen Sie im Zweifel vor dem Kauf kurz nach, dann klären wir das in einer Nachricht.",
      },
      {
        h: "Kündigung, Verlängerung und Rückerstattung",
        p: "Es gibt keine automatische Verlängerung. Ihr Zugang läuft am Ende der gebuchten Laufzeit einfach aus, und Sie entscheiden aktiv, ob Sie erneut buchen. Damit entfällt der übliche Ärger mit Kündigungsfristen, Formularen und Fristversäumnissen, den Kabel- und Satellitenverträge mit sich bringen. Innerhalb der ersten sieben Tage gilt zusätzlich eine Geld-zurück-Garantie: Wenn Qualität oder Stabilität nicht überzeugen, erstatten wir den Betrag vollständig. Weil Sie zuvor bereits 24 Stunden kostenlos testen können, sollte dieser Fall selten eintreten — die Garantie existiert für den Rest.",
      },
      {
        h: "Woran Sie vor dem Kauf erkennen, ob es passt",
        p: "Der zuverlässigste Test dauert eine Viertelstunde und kostet nichts. Starten Sie den kostenlosen 24-Stunden-Zugang bewusst zu einer Zeit, in der Sie üblicherweise fernsehen — bei Sport also zur Anstoßzeit, nicht am Vormittag. Prüfen Sie dabei drei Dinge: ob die Sender, die Sie wirklich schauen, in der Liste stehen und stabil laufen; ob der Programmführer korrekt gefüllt ist; und ob das Bild auf Ihrem konkreten Gerät flüssig bleibt. Fällt einer dieser Punkte durch, schreiben Sie uns — meist liegt es an einer Einstellung, die sich in zwei Minuten korrigieren lässt.",
      },
    ],
    faq: [
      { q: "Was kostet ein ATV Corner IPTV Abonnement?", a: "Abos beginnen bei 15 € für einen Monat und sinken auf 5 €/Monat beim Jahresabo für 60 €. Jedes Abo enthält 66.000+ Sender, 4K/8K-Qualität und 24/7-Support." },
      { q: "Ist das Abo ohne Vertragsbindung?", a: "Ja. Keine Bindung, keine automatische Verlängerung. Sie wählen die Laufzeit und verlängern nur, wenn Sie möchten, abgesichert durch eine 7-tägige Geld-zurück-Garantie." },
      { q: "Kann ich vor der Zahlung testen?", a: "Ja, ein kostenloser 24-Stunden-Test ist ohne Kreditkarte verfügbar. Sie testen den vollen Zugriff und abonnieren nur, wenn die Qualität Sie überzeugt." },
      { q: "Wie schnell ist das Abo aktiv?", a: "In unter 5 Minuten. Nach der Zahlung erhalten Sie Ihre Xtream-Codes-Zugangsdaten oder Ihren M3U-Link per WhatsApp oder E-Mail, einsatzbereit." },
      { q: "Auf welchen Geräten funktioniert das Abo?", a: "Smart TV, Fire TV Stick, Apple TV, Handys, Tablets, MAG Box, Enigma2 und Computer, über TiviMate, IBO Player, IPTV Smarters Pro oder VLC." },
    ],
    cta: "Abonnement starten",
  },
};

// =============================================================================
// /iptv-firestick — Targets "iptv firestick", "iptv fire stick", "firestick iptv"
// =============================================================================
content["iptv-firestick"] = {
  fr: {
    metaTitle: "IPTV Firestick — Installer & Regarder sur Amazon Fire TV Stick",
    metaDesc:
      "IPTV sur Firestick avec ATV Corner : 66 000+ chaînes en 4K sur votre Amazon Fire TV Stick. Installation en 5 minutes via IPTV Smarters Pro ou TiviMate, essai gratuit.",
    eyebrow: "IPTV Firestick · Fire TV Stick",
    h1: "IPTV sur",
    h1Accent: "Firestick",
    intro:
      "L'Amazon Fire TV Stick est l'appareil le plus simple pour regarder l'IPTV sur votre téléviseur. Avec ATV Corner, installez 66 000+ chaînes en 4K sur votre Firestick en 5 minutes, via IPTV Smarters Pro ou TiviMate.",
    features: [
      { h: "Compatible tous Firestick", p: "Fire TV Stick Lite, 4K et 4K Max — l'abonnement fonctionne sur toutes les générations." },
      { h: "Installation en 5 min", p: "Via l'application Downloader puis IPTV Smarters Pro ou TiviMate, sans PC ni manipulation complexe." },
      { h: "Image 4K fluide", p: "Le Firestick 4K Max décode nos flux HEVC/H.265 sans coupure, même sur le sport en direct." },
      { h: "Support pas à pas", p: "Notre équipe vous guide par WhatsApp pour l'installation sur Firestick en moins de 5 minutes." },
    ],
    sections: [
      {
        h: "Comment installer l'IPTV sur un Firestick",
        p: "Sur votre Amazon Fire TV Stick, ouvrez l'Appstore et installez l'application Downloader. Autorisez les applications inconnues dans les paramètres du développeur, puis téléchargez IPTV Smarters Pro ou TiviMate. Ouvrez l'application et saisissez les identifiants Xtream Codes que ATV Corner vous envoie par WhatsApp après l'abonnement. Vos 66 000+ chaînes et 70 000+ films se chargent avec le guide des programmes. L'ensemble prend moins de 5 minutes et ne nécessite ni ordinateur ni compétence technique.",
      },
      {
        h: "Quel Firestick choisir pour l'IPTV en 4K",
        p: "Le Fire TV Stick Lite convient pour le HD et le 1080p. Pour profiter pleinement de nos flux 4K/8K Ultra HD, le Fire TV Stick 4K ou 4K Max est recommandé : son processeur plus puissant décode le HEVC/H.265 sans ralentissement et gère mieux les applications IPTV. Une connexion internet d'au moins 25 Mbps est conseillée pour le 4K. Quel que soit votre modèle, l'abonnement ATV Corner s'installe de la même façon.",
      },
      {
        h: "IPTV Smarters Pro ou TiviMate sur Firestick ?",
        p: "IPTV Smarters Pro est le plus simple : interface claire, EPG intégré, idéal pour débuter. TiviMate offre une expérience plus avancée avec un guide des programmes soigné et un enregistrement (version Premium), mais demande un peu plus de configuration. Les deux fonctionnent parfaitement avec ATV Corner sur Firestick via vos identifiants Xtream Codes. Vous pouvez tester les deux et garder celle que vous préférez — notre support vous aide à choisir.",
      },
      {
        h: "Quel Fire TV Stick pour quelle qualité",
        p: "Le Fire TV Stick Lite suffit pour la HD et le 1080p et reste l'option la moins chère, mais atteint ses limites sur du contenu 4K en HEVC/H.265. Les Fire TV Stick 4K et 4K Max disposent d'un processeur nettement plus rapide, décodent le HEVC sans saccades et lancent les applications IPTV sensiblement plus vite — le 4K Max ajoute un Wi-Fi plus rapide, utile dans les immeubles saturés de réseaux. Pour une 4K durablement fluide, l'un de ces deux modèles est le choix raisonnable. Quel que soit le modèle, l'installation est identique et les mêmes identifiants fonctionnent sur toutes les générations.",
      },
      {
        h: "Configurer Downloader et les applications inconnues",
        p: "Avant d'installer un lecteur, deux réglages sont nécessaires. Ouvrez d'abord l'Appstore et installez Downloader. Rendez-vous ensuite dans les Paramètres, puis Mon Fire TV, Options de développeur, et autorisez l'installation d'applications inconnues pour Downloader. Sans cette étape, l'installation échoue sans message, ce qui constitue de loin l'obstacle le plus fréquent. Saisissez ensuite dans Downloader l'adresse du lecteur souhaité et confirmez l'installation. L'ensemble se fait à la télécommande ; aucun ordinateur n'est nécessaire à aucun moment.",
      },
      {
        h: "Après l'installation : les trois réglages qui comptent",
        p: "Une fois le lecteur configuré, trois ajustements méritent d'être faits. D'abord le mode de décodage : si l'image n'est pas nette, passez de matériel à logiciel dans les réglages, ou l'inverse — cela corrige la plupart des saccades sur les clés anciennes. Ensuite le guide des programmes : rechargez l'EPG une fois manuellement pour que titres et horaires s'affichent correctement. Enfin la liste de favoris : se constituer une sélection parmi 66 000+ chaînes transforme une liste ingérable en un appareil qu'on utilise volontiers chaque jour. Les trois prennent moins de cinq minutes.",
      },
      {
        h: "Surveiller l'espace de stockage et les performances",
        p: "Le Fire TV Stick dispose de peu de mémoire interne, et les lecteurs IPTV stockent localement listes de chaînes, données EPG et vignettes. Quand ce cache devient trop volumineux, cela se manifeste par des blocages au changement de chaîne ou un démarrage lent. Videz le cache de temps en temps dans les réglages et désinstallez les applications inutilisées. Redémarrer la clé avant une longue session — surtout avant un match — aide également plus qu'on ne le croit, car cela met fin aux processus d'arrière-plan qui consomment puissance de calcul et bande passante.",
      },
      {
        h: "Le réseau : là où la plupart échouent",
        p: "Le Fire TV Stick n'a pas de port ethernet et fonctionne donc en Wi-Fi par défaut — or c'est précisément là que naissent la plupart des problèmes de buffering. Trois mesures aident de façon fiable. Passez sur la bande 5 GHz, bien moins encombrée que le 2,4 GHz. Placez le routeur à découvert plutôt que dans un meuble ou juste derrière le téléviseur, dont la face arrière métallique atténue le signal. Et si cela ne suffit pas, un adaptateur ethernet pour le port micro-USB de la clé coûte quelques euros et stabilise la connexion. Comptez 10 Mbps pour la HD et 25 Mbps pour la 4K.",
      },
      {
        h: "Quand la clé atteint ses limites",
        p: "Les Fire TV Stick des premières générations fonctionnent encore, mais peinent visiblement sur du contenu 4K en HEVC — surtout avec d'autres applications actives en arrière-plan. Avant d'acheter du matériel neuf, testez en HD : si la même chaîne passe correctement à une résolution inférieure, la cause est la puissance de calcul et non votre connexion ou notre serveur. Dans ce cas, un Fire TV Stick 4K ou 4K Max apporte le gain le plus net pour un coût modéré. Le même accès fonctionne aussi tel quel sur une Apple TV ou une box Android TV récente.",
      },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur mon Firestick ?", a: "Installez Downloader depuis l'Appstore, autorisez les applications inconnues, téléchargez IPTV Smarters Pro ou TiviMate, puis saisissez les identifiants Xtream Codes envoyés par ATV Corner. Comptez moins de 5 minutes." },
      { q: "L'IPTV fonctionne-t-elle sur tous les Firestick ?", a: "Oui, sur Fire TV Stick Lite, 4K et 4K Max. Pour la qualité 4K/8K, les modèles 4K et 4K Max sont recommandés pour leur processeur plus rapide." },
      { q: "Ai-je besoin d'un ordinateur pour installer l'IPTV sur Firestick ?", a: "Non. Tout se fait directement depuis le Firestick avec l'application Downloader et l'application IPTV de votre choix." },
      { q: "Quelle connexion internet pour l'IPTV 4K sur Firestick ?", a: "Une connexion d'au moins 25 Mbps est recommandée pour le 4K stable. Le HD fonctionne dès 10 Mbps." },
      { q: "Puis-je tester l'IPTV sur Firestick avant de payer ?", a: "Oui. ATV Corner propose un essai gratuit de 24h que vous pouvez installer sur votre Firestick avant de vous abonner." },
    ],
    cta: "Installer sur Firestick",
  },
  en: {
    metaTitle: "IPTV Firestick — Install & Watch on Amazon Fire TV Stick",
    metaDesc:
      "IPTV on Firestick with ATV Corner: 66,000+ channels in 4K on your Amazon Fire TV Stick. 5-minute setup via IPTV Smarters Pro or TiviMate, free trial available.",
    eyebrow: "IPTV Firestick · Fire TV Stick",
    h1: "IPTV on",
    h1Accent: "Firestick",
    intro:
      "The Amazon Fire TV Stick is the easiest device to watch IPTV on your TV. With ATV Corner, install 66,000+ channels in 4K on your Firestick in 5 minutes, via IPTV Smarters Pro or TiviMate.",
    features: [
      { h: "Every Firestick supported", p: "Fire TV Stick Lite, 4K and 4K Max — the subscription works on all generations." },
      { h: "5-minute setup", p: "Via the Downloader app then IPTV Smarters Pro or TiviMate, no PC or complex steps." },
      { h: "Smooth 4K picture", p: "The Firestick 4K Max decodes our HEVC/H.265 streams with no buffering, even on live sports." },
      { h: "Step-by-step support", p: "Our team guides you via WhatsApp through the Firestick install in under 5 minutes." },
    ],
    sections: [
      {
        h: "How to install IPTV on a Firestick",
        p: "On your Amazon Fire TV Stick, open the Appstore and install the Downloader app. Allow unknown apps in developer settings, then download IPTV Smarters Pro or TiviMate. Open the app and enter the Xtream Codes credentials ATV Corner sends via WhatsApp after you subscribe. Your 66,000+ channels and 70,000+ movies load with the program guide. The whole thing takes under 5 minutes and needs no computer or technical skill.",
      },
      {
        h: "Which Firestick to choose for 4K IPTV",
        p: "The Fire TV Stick Lite handles HD and 1080p. To get the most from our 4K/8K Ultra HD streams, the Fire TV Stick 4K or 4K Max is recommended: its faster processor decodes HEVC/H.265 without lag and runs IPTV apps more smoothly. An internet connection of at least 25 Mbps is advised for 4K. Whatever your model, the ATV Corner subscription installs the same way.",
      },
      {
        h: "IPTV Smarters Pro or TiviMate on Firestick?",
        p: "IPTV Smarters Pro is the simplest: clean interface, built-in EPG, ideal for beginners. TiviMate offers a more advanced experience with a polished program guide and recording (Premium version), but takes a little more setup. Both work perfectly with ATV Corner on Firestick using your Xtream Codes credentials. You can try both and keep the one you prefer — our support helps you choose.",
      },
      {
        h: "Which Fire TV Stick for which quality",
        p: "The Fire TV Stick Lite handles HD and 1080p and is the cheapest option, but reaches its limits with 4K material in HEVC/H.265. The Fire TV Stick 4K and 4K Max have a considerably faster processor, decode HEVC without stuttering and launch IPTV apps noticeably quicker — the 4K Max adds faster Wi-Fi on top, which helps in flats crowded with networks. For consistently smooth 4K, one of those two is the sensible choice. Whichever model you have, the setup is identical and the same credentials work across every generation.",
      },
      {
        h: "Setting up Downloader and unknown apps correctly",
        p: "Before installing a player you need two settings in place. First open the Appstore and install Downloader. Then go to Settings, My Fire TV, Developer Options, and allow installation of unknown apps for Downloader. Without that step the install fails silently, which is the single most common stumbling block. After that, enter the address of your chosen player in Downloader and confirm the installation. The whole process runs from the remote; a computer is never required at any point.",
      },
      {
        h: "After installing: the three settings that matter",
        p: "Once the player is set up, three adjustments are worth making. First the decoder mode: if the picture isn't clean, switch from hardware to software in settings, or the reverse — that fixes most stuttering on older sticks. Second the programme guide: reload the EPG once manually so titles and times appear correctly. Third the favourites list: curating your own selection out of 66,000+ channels turns an unmanageable list into a device you are happy to use daily. All three together take under five minutes.",
      },
      {
        h: "Keeping an eye on storage and performance",
        p: "The Fire TV Stick has comparatively little internal storage, and IPTV players cache channel lists, EPG data and thumbnails locally. When that cache grows too large it shows up as hanging when changing channels or as slow app startup. Clear the cache occasionally in the app settings and uninstall apps you don't use. Restarting the stick before longer sessions — especially before a match — also helps more than people expect, because it ends background processes that would otherwise consume both processing power and bandwidth.",
      },
      {
        h: "Networking: where most people come unstuck",
        p: "The Fire TV Stick has no ethernet port, so it sits on Wi-Fi by default — and that is exactly where most buffering problems originate. Three measures reliably help. Move to the 5 GHz band, which is far less congested than 2.4 GHz. Place the router in the open rather than in a cabinet or directly behind the television, whose metal backing dampens the signal. And if neither is enough, an ethernet adapter for the stick's micro-USB port costs very little and stabilises the connection. Plan for 10 Mbps for HD and 25 Mbps for 4K.",
      },
      {
        h: "When the stick reaches its limits",
        p: "Early-generation Fire TV Sticks still run, but visibly struggle with 4K material in HEVC — particularly with other apps active in the background. Before buying new hardware, it is worth testing in HD: if the same channel plays cleanly at a lower resolution, the cause is processing power rather than your connection or our server. In that case a Fire TV Stick 4K or 4K Max delivers the largest noticeable improvement for comparatively little money. Alternatively, the same login works unchanged on an Apple TV or a current Android TV box.",
      },
    ],
    faq: [
      { q: "How do I install IPTV on my Firestick?", a: "Install Downloader from the Appstore, allow unknown apps, download IPTV Smarters Pro or TiviMate, then enter the Xtream Codes credentials sent by ATV Corner. It takes under 5 minutes." },
      { q: "Does IPTV work on every Firestick?", a: "Yes, on Fire TV Stick Lite, 4K and 4K Max. For 4K/8K quality, the 4K and 4K Max models are recommended for their faster processor." },
      { q: "Do I need a computer to install IPTV on Firestick?", a: "No. Everything is done directly from the Firestick using the Downloader app and the IPTV app of your choice." },
      { q: "What internet speed for 4K IPTV on Firestick?", a: "At least 25 Mbps is recommended for stable 4K. HD works from 10 Mbps." },
      { q: "Can I test IPTV on Firestick before paying?", a: "Yes. ATV Corner offers a free 24-hour trial you can install on your Firestick before subscribing." },
    ],
    cta: "Install on Firestick",
  },
  de: {
    metaTitle: "IPTV Firestick — Auf Amazon Fire TV Stick installieren",
    metaDesc:
      "IPTV auf Firestick mit ATV Corner: 66.000+ Sender in 4K auf Ihrem Amazon Fire TV Stick. Einrichtung in 5 Minuten über IPTV Smarters Pro oder TiviMate, Gratis-Test.",
    eyebrow: "IPTV Firestick · Fire TV Stick",
    h1: "IPTV auf",
    h1Accent: "Firestick",
    intro:
      "Der Amazon Fire TV Stick ist das einfachste Gerät, um IPTV auf Ihrem Fernseher zu schauen. Mit ATV Corner installieren Sie 66.000+ Sender in 4K in 5 Minuten auf Ihrem Firestick, über IPTV Smarters Pro oder TiviMate.",
    features: [
      { h: "Jeder Firestick unterstützt", p: "Fire TV Stick Lite, 4K und 4K Max — das Abo funktioniert auf allen Generationen." },
      { h: "Einrichtung in 5 Min", p: "Über die Downloader-App, dann IPTV Smarters Pro oder TiviMate, ohne PC oder komplizierte Schritte." },
      { h: "Flüssiges 4K-Bild", p: "Der Firestick 4K Max dekodiert unsere HEVC/H.265-Streams ohne Buffering, auch bei Live-Sport." },
      { h: "Schritt-für-Schritt-Support", p: "Unser Team führt Sie per WhatsApp in unter 5 Minuten durch die Firestick-Installation." },
    ],
    sections: [
      {
        h: "So installieren Sie IPTV auf einem Firestick",
        p: "Öffnen Sie auf Ihrem Amazon Fire TV Stick den Appstore und installieren Sie die Downloader-App. Erlauben Sie unbekannte Apps in den Entwicklereinstellungen, laden Sie dann IPTV Smarters Pro oder TiviMate herunter. Öffnen Sie die App und geben Sie die Xtream-Codes-Zugangsdaten ein, die ATV Corner nach dem Abo per WhatsApp sendet. Ihre 66.000+ Sender und 70.000+ Filme laden mit Programmführer. Das Ganze dauert unter 5 Minuten und braucht weder Computer noch technisches Wissen.",
      },
      {
        h: "Welcher Firestick für 4K-IPTV",
        p: "Der Fire TV Stick Lite eignet sich für HD und 1080p. Um unsere 4K/8K-Ultra-HD-Streams voll zu nutzen, wird der Fire TV Stick 4K oder 4K Max empfohlen: Sein schnellerer Prozessor dekodiert HEVC/H.265 ohne Ruckeln und führt IPTV-Apps flüssiger aus. Für 4K wird eine Internetverbindung von mindestens 25 Mbit/s empfohlen. Unabhängig vom Modell installiert sich das ATV-Corner-Abo auf dieselbe Weise.",
      },
      {
        h: "IPTV Smarters Pro oder TiviMate auf Firestick?",
        p: "IPTV Smarters Pro ist am einfachsten: klare Oberfläche, integrierter EPG, ideal für Einsteiger. TiviMate bietet ein fortgeschritteneres Erlebnis mit einem edlen Programmführer und Aufnahme (Premium-Version), erfordert aber etwas mehr Einrichtung. Beide funktionieren einwandfrei mit ATV Corner auf dem Firestick über Ihre Xtream-Codes-Zugangsdaten. Sie können beide testen und die bevorzugte behalten — unser Support hilft bei der Wahl.",
      },
      {
        h: "Welcher Fire TV Stick für welche Qualität",
        p: "Der Fire TV Stick Lite reicht für HD und 1080p und ist die günstigste Variante, stößt bei 4K-Material mit HEVC/H.265 aber an seine Grenzen. Der Fire TV Stick 4K und der 4K Max haben den deutlich schnelleren Prozessor, dekodieren HEVC ohne Ruckeln und starten IPTV-Apps merklich zügiger — beim 4K Max kommt zusätzlich schnelleres WLAN hinzu, was in Wohnungen mit vielen Netzwerken hilft. Für dauerhaft flüssiges 4K ist eines dieser beiden Modelle die vernünftige Wahl. Unabhängig vom Modell bleibt die Einrichtung identisch, und dieselben Zugangsdaten funktionieren auf allen Generationen.",
      },
      {
        h: "Downloader und unbekannte Apps richtig einstellen",
        p: "Bevor Sie einen Player installieren, brauchen Sie zwei Einstellungen. Öffnen Sie zuerst den Appstore und installieren Sie Downloader. Gehen Sie anschließend in die Einstellungen, dort zu Mein Fire TV, weiter zu Entwickleroptionen, und erlauben Sie die Installation unbekannter Apps für Downloader. Ohne diesen Schritt bricht die Installation kommentarlos ab, was die häufigste Stolperstelle überhaupt ist. Danach geben Sie in Downloader die Adresse des gewünschten Players ein und bestätigen die Installation. Der gesamte Vorgang läuft mit der Fernbedienung ab; ein Computer wird zu keinem Zeitpunkt benötigt.",
      },
      {
        h: "Nach der Installation: die drei Einstellungen, die zählen",
        p: "Ist der Player eingerichtet, lohnen sich drei Anpassungen. Erstens der Dekoder-Modus: Läuft das Bild nicht sauber, wechseln Sie in den Einstellungen von Hardware auf Software oder umgekehrt — das behebt die meisten Ruckler auf älteren Sticks. Zweitens der Programmführer: Laden Sie den EPG einmal manuell neu, damit Sendungsnamen und Zeiten korrekt erscheinen. Drittens die Favoritenliste: Aus 66.000+ Sendern eine eigene Auswahl zu bauen, macht aus einer unübersichtlichen Liste ein Gerät, das man täglich gern benutzt. Alle drei Schritte dauern zusammen keine fünf Minuten.",
      },
      {
        h: "Speicherplatz und Leistung im Blick behalten",
        p: "Der Fire TV Stick hat vergleichsweise wenig internen Speicher, und IPTV-Player legen Senderlisten, EPG-Daten und Vorschaubilder lokal ab. Wird dieser Zwischenspeicher zu groß, äußert sich das als Hängen beim Umschalten oder als langsamer App-Start. Leeren Sie den Cache gelegentlich in den App-Einstellungen und deinstallieren Sie Apps, die Sie nicht nutzen. Ein Neustart des Sticks vor längeren Sitzungen — besonders vor einem Spiel — hilft ebenfalls mehr, als man vermutet, weil er Hintergrundprozesse beendet, die sonst Rechenleistung und Bandbreite beanspruchen.",
      },
      {
        h: "Netzwerk: der Punkt, an dem die meisten scheitern",
        p: "Der Fire TV Stick hat keinen LAN-Anschluss, hängt also standardmäßig am WLAN — und genau dort entstehen die meisten Buffering-Probleme. Drei Maßnahmen helfen zuverlässig. Wechseln Sie auf das 5-GHz-Band, das deutlich weniger überfüllt ist als 2,4 GHz. Stellen Sie den Router frei auf und nicht in einen Schrank oder direkt hinter den Fernseher, dessen Metallrückwand das Signal dämpft. Und wenn beides nicht reicht, gibt es für wenige Euro einen Ethernet-Adapter für den Micro-USB-Anschluss des Sticks, der die Verbindung stabilisiert. Rechnen Sie mit 10 Mbit/s für HD und 25 Mbit/s für 4K.",
      },
      {
        h: "Wenn der Stick an seine Grenzen kommt",
        p: "Ältere Fire TV Sticks der ersten Generationen laufen zwar weiterhin, tun sich mit 4K-Material in HEVC aber sichtbar schwer — vor allem, wenn im Hintergrund noch andere Apps aktiv sind. Bevor Sie ein neues Gerät kaufen, lohnt sich ein Test in HD: Läuft derselbe Sender in niedrigerer Auflösung sauber, ist die Ursache die Rechenleistung und nicht Ihre Leitung oder unser Server. In dem Fall bringt ein Fire TV Stick 4K oder 4K Max für vergleichsweise wenig Geld den größten spürbaren Sprung. Alternativ funktioniert derselbe Zugang unverändert auf einem Apple TV oder einer aktuellen Android-TV-Box.",
      },
    ],
    faq: [
      { q: "Wie installiere ich IPTV auf meinem Firestick?", a: "Installieren Sie Downloader aus dem Appstore, erlauben Sie unbekannte Apps, laden Sie IPTV Smarters Pro oder TiviMate herunter und geben Sie die von ATV Corner gesendeten Xtream-Codes-Zugangsdaten ein. Es dauert unter 5 Minuten." },
      { q: "Funktioniert IPTV auf jedem Firestick?", a: "Ja, auf Fire TV Stick Lite, 4K und 4K Max. Für 4K/8K-Qualität werden die Modelle 4K und 4K Max wegen ihres schnelleren Prozessors empfohlen." },
      { q: "Brauche ich einen Computer, um IPTV auf dem Firestick zu installieren?", a: "Nein. Alles wird direkt vom Firestick aus mit der Downloader-App und der IPTV-App Ihrer Wahl erledigt." },
      { q: "Welche Internetgeschwindigkeit für 4K-IPTV auf dem Firestick?", a: "Für stabiles 4K werden mindestens 25 Mbit/s empfohlen. HD funktioniert ab 10 Mbit/s." },
      { q: "Kann ich IPTV auf dem Firestick vor der Zahlung testen?", a: "Ja. ATV Corner bietet einen kostenlosen 24-Stunden-Test, den Sie vor dem Abo auf Ihrem Firestick installieren können." },
    ],
    cta: "Auf Firestick installieren",
  },
};

// =============================================================================
// /iptv-smarters-pro — Targets "iptv smarters pro", "iptv smarters"
// =============================================================================
content["iptv-smarters-pro"] = {
  fr: {
    metaTitle: "IPTV Smarters Pro — Configurer avec ATV Corner (Guide 2026)",
    metaDesc:
      "Utilisez IPTV Smarters Pro avec ATV Corner : 66 000+ chaînes en 4K via vos identifiants Xtream Codes. Configuration en 5 minutes sur Firestick, Android, iOS et Smart TV.",
    eyebrow: "IPTV Smarters Pro · Xtream Codes",
    h1: "IPTV Smarters Pro",
    h1Accent: "avec ATV Corner",
    intro:
      "IPTV Smarters Pro est l'une des applications IPTV les plus populaires : interface claire, EPG intégré et lecture 4K fluide. Connectez ATV Corner en 5 minutes avec vos identifiants Xtream Codes et accédez à 66 000+ chaînes.",
    features: [
      { h: "Connexion Xtream Codes", p: "Saisissez l'URL, l'utilisateur et le mot de passe fournis par ATV Corner — aucune configuration manuelle des chaînes." },
      { h: "EPG intégré", p: "Le guide des programmes se charge automatiquement, avec affiches, catégories et rappels." },
      { h: "Multi-plateformes", p: "Disponible sur Firestick, Android, Android TV, iPhone, iPad et Smart TV compatibles." },
      { h: "Lecture 4K/8K", p: "L'application gère nos flux HEVC/H.265 en 4K/8K sans coupure sur un appareil récent." },
    ],
    sections: [
      {
        h: "Comment configurer IPTV Smarters Pro",
        p: "Téléchargez IPTV Smarters Pro depuis le store de votre appareil (ou via Downloader sur Firestick). À l'ouverture, choisissez « Login with Xtream Codes API », puis saisissez le nom, l'URL du serveur, l'utilisateur et le mot de passe que ATV Corner vous envoie par WhatsApp après l'abonnement. L'application importe automatiquement vos 66 000+ chaînes, 70 000+ films et le guide EPG. En moins de 5 minutes, tout est prêt — aucune liste M3U à gérer manuellement.",
      },
      {
        h: "IPTV Smarters Pro sur tous vos appareils",
        p: "IPTV Smarters Pro fonctionne sur Amazon Fire TV Stick, smartphones et tablettes Android, Android TV, iPhone, iPad et de nombreuses Smart TV. Vos identifiants ATV Corner sont valables sur plusieurs appareils : configurez-les une fois, puis reprenez la même expérience partout. L'interface reste identique d'un appareil à l'autre, ce qui simplifie la prise en main pour toute la famille.",
      },
      {
        h: "Résoudre les problèmes courants",
        p: "Si une chaîne ne se lance pas, vérifiez d'abord votre connexion internet (25 Mbps recommandés pour le 4K) et changez le format de décodage dans les réglages (Hardware/Software). Si l'EPG ne s'affiche pas, actualisez-le depuis les paramètres. En cas d'erreur de connexion, contrôlez que l'URL et les identifiants sont saisis exactement comme envoyés. Notre support ATV Corner règle la plupart des cas par WhatsApp en quelques minutes.",
      },
      {
        h: "Xtream Codes ou M3U — quel format choisir",
        p: "Au premier lancement, l'application propose deux voies. La connexion via l'API Xtream Codes est le meilleur choix dans presque tous les cas : le lecteur charge chaînes, guide, films et séries séparément et à la demande, ce qui garde un démarrage rapide même sur un gros catalogue et présente des catégories bien triées. La voie M3U charge à l'inverse une playlist unique en entier et convient quand votre fournisseur ne propose pas de trio Xtream. Comme ATV Corner fournit les deux formats, nous recommandons Xtream Codes et n'envoyons le lien M3U que sur demande.",
      },
      {
        h: "Configurer l'interface avant de commencer",
        p: "Juste après l'import, trois réglages rapides rendent l'usage quotidien nettement plus agréable. Créez d'abord des favoris : se constituer une liste parmi 66 000+ chaînes est l'étape la plus utile, car elle transforme le changement de chaîne d'une recherche en un simple choix. Masquez ensuite les catégories que vous n'utilisez jamais — cela raccourcit chaque navigation. Réglez enfin l'écran d'accueil pour qu'il ouvre directement sur le direct ou sur vos favoris plutôt que sur la vue d'ensemble. Ces trois options se trouvent dans les réglages de l'application.",
      },
      {
        h: "EPG, enregistrement et profils multiples",
        p: "Le guide des programmes arrive automatiquement via Xtream Codes et couvre généralement plusieurs jours. S'il n'affiche aucun titre, une actualisation manuelle dans les réglages suffit presque toujours ; réinstaller l'application n'est jamais nécessaire pour cela. La fonction d'enregistrement écrit sur le stockage local de l'appareil : elle atteint donc vite ses limites sur un Fire TV Stick peu spacieux, alors qu'elle reste praticable sur un appareil Android TV doté d'un stockage USB. Plusieurs profils peuvent être créés si le foyer souhaite des listes de favoris distinctes.",
      },
      {
        h: "Quand une chaîne ne démarre pas",
        p: "Si une seule chaîne reste noire alors que les autres fonctionnent, la cause n'est presque jamais vos identifiants. Vérifiez d'abord le mode de décodage dans les réglages et passez de matériel à logiciel ou l'inverse — nos flux sont en HEVC/H.265, et certains appareils décodent mal ce codec en matériel. Si rien ne démarre ensuite, testez la même chaîne sur un second appareil. Si elle fonctionne là-bas, le premier appareil est en cause ; si elle ne fonctionne nulle part, écrivez-nous sur WhatsApp — nous répondons en moins de cinq minutes et vérifions la chaîne directement.",
      },
      {
        h: "Sur quels appareils l'application fonctionne",
        p: "IPTV Smarters Pro est volontairement très répandue : Amazon Fire TV Stick de toutes générations, téléphones et tablettes Android, Android TV et Google TV, iPhone et iPad, ainsi que de nombreuses Smart TV. Comme vos identifiants sont liés à l'abonnement et non à un appareil, vous configurez l'application une fois puis répétez l'opération sur les autres appareils en deux minutes chacun. L'interface reste identique partout, ce qui facilite la prise en main pour tout le foyer. Le seul point à surveiller est le nombre de connexions simultanées permis par votre formule.",
      },
      {
        h: "Alternatives si l'application ne vous convient pas",
        p: "IPTV Smarters Pro n'est pas la seule option, et selon les goûts une autre application conviendra mieux. Beaucoup considèrent TiviMate comme le programme le plus abouti sur Android TV : le guide est plus lisible et la navigation à la télécommande plus rapide, mais l'installation demande un peu plus d'efforts et les fonctions complètes sont payantes. IBO Player est plus léger et reste fluide sur les appareils modestes. VLC, enfin, lit les listes M3U mais n'offre ni EPG ni catégories. Les quatre fonctionnent avec les mêmes identifiants ATV Corner, sans coût supplémentaire.",
      },
    ],
    faq: [
      { q: "IPTV Smarters Pro est-il gratuit ?", a: "L'application IPTV Smarters Pro est gratuite à télécharger. Vous avez besoin d'un abonnement IPTV comme ATV Corner pour y accéder au contenu via vos identifiants Xtream Codes." },
      { q: "Comment connecter ATV Corner à IPTV Smarters Pro ?", a: "Choisissez « Login with Xtream Codes API » et saisissez l'URL, l'utilisateur et le mot de passe envoyés par ATV Corner. Les chaînes et l'EPG se chargent automatiquement." },
      { q: "Sur quels appareils fonctionne IPTV Smarters Pro ?", a: "Sur Firestick, Android, Android TV, iPhone, iPad et de nombreuses Smart TV. Vos identifiants ATV Corner fonctionnent sur plusieurs appareils." },
      { q: "Pourquoi une chaîne ne se lance pas ?", a: "Le plus souvent à cause de la connexion ou du format de décodage. Passez de Hardware à Software dans les réglages et vérifiez votre débit. Notre support vous aide si besoin." },
      { q: "Puis-je utiliser IPTV Smarters Pro avec un essai gratuit ?", a: "Oui. L'essai gratuit de 24h d'ATV Corner s'utilise dans IPTV Smarters Pro exactement comme un abonnement complet." },
    ],
    cta: "Obtenir mes identifiants",
  },
  en: {
    metaTitle: "IPTV Smarters Pro — Set Up with ATV Corner (2026 Guide)",
    metaDesc:
      "Use IPTV Smarters Pro with ATV Corner: 66,000+ channels in 4K via your Xtream Codes login. 5-minute setup on Firestick, Android, iOS and Smart TV.",
    eyebrow: "IPTV Smarters Pro · Xtream Codes",
    h1: "IPTV Smarters Pro",
    h1Accent: "with ATV Corner",
    intro:
      "IPTV Smarters Pro is one of the most popular IPTV apps: clean interface, built-in EPG and smooth 4K playback. Connect ATV Corner in 5 minutes with your Xtream Codes login and access 66,000+ channels.",
    features: [
      { h: "Xtream Codes login", p: "Enter the URL, username and password from ATV Corner — no manual channel setup at all." },
      { h: "Built-in EPG", p: "The program guide loads automatically, with posters, categories and reminders." },
      { h: "Cross-platform", p: "Available on Firestick, Android, Android TV, iPhone, iPad and compatible Smart TVs." },
      { h: "4K/8K playback", p: "The app handles our HEVC/H.265 streams in 4K/8K without buffering on a recent device." },
    ],
    sections: [
      {
        h: "How to set up IPTV Smarters Pro",
        p: "Download IPTV Smarters Pro from your device's store (or via Downloader on Firestick). On opening, choose \u201cLogin with Xtream Codes API\u201d, then enter the name, server URL, username and password ATV Corner sends via WhatsApp after you subscribe. The app automatically imports your 66,000+ channels, 70,000+ movies and the EPG guide. In under 5 minutes everything is ready — no M3U playlist to manage by hand.",
      },
      {
        h: "IPTV Smarters Pro on all your devices",
        p: "IPTV Smarters Pro runs on Amazon Fire TV Stick, Android phones and tablets, Android TV, iPhone, iPad and many Smart TVs. Your ATV Corner credentials work across several devices: set them up once, then pick up the same experience everywhere. The interface stays identical from one device to the next, which makes it easy for the whole household.",
      },
      {
        h: "Fixing common issues",
        p: "If a channel won't play, first check your internet connection (25 Mbps recommended for 4K) and switch the decoder format in settings (Hardware/Software). If the EPG doesn't show, refresh it from settings. On a login error, confirm the URL and credentials are entered exactly as sent. ATV Corner support resolves most cases via WhatsApp in a few minutes.",
      },
      {
        h: "Xtream Codes or M3U — which format to choose",
        p: "On first launch the app offers two routes. Logging in through the Xtream Codes API is the better choice in almost every case: the player loads channels, guide, films and series separately and only as needed, which keeps startup fast even with a large catalogue and gives you cleanly sorted categories. The M3U route instead loads a single playlist in full and suits situations where your provider offers no Xtream trio. Since ATV Corner supplies both formats, we recommend Xtream Codes and send the M3U link only on request.",
      },
      {
        h: "Setting up the interface before you start",
        p: "Straight after the import, three quick adjustments make daily use considerably more pleasant. Build favourites first: curating your own list out of 66,000+ channels is the single most valuable step, because it turns channel changing from searching into choosing. Second, hide categories you never use — that shortens every navigation. Third, set the start screen to open directly on live TV or on your favourites rather than the overview. All three live in the app settings under their respective headings.",
      },
      {
        h: "EPG, recording and multiple profiles",
        p: "The programme guide comes automatically over Xtream Codes and usually covers several days. If it shows no titles, a manual refresh in settings almost always fixes it; reinstalling the app is never necessary for that. The recording function writes to the device's local storage, so it hits limits quickly on a Fire TV Stick with little space — on an Android TV device with USB storage it is far more practical. Multiple profiles can be created where different people in the household want separate favourites lists.",
      },
      {
        h: "When a channel won't start",
        p: "If a single channel stays black while others play, the cause is almost never your login. Check the decoder mode in settings first and switch from hardware to software or the reverse — our streams run in HEVC/H.265, and some devices decode that codec imperfectly in hardware. If nothing plays after that, test the same channel on a second device. If it works there, the first device is the cause; if it works nowhere, message us on WhatsApp — we reply in under five minutes and check the channel directly.",
      },
      {
        h: "Which devices run the app",
        p: "IPTV Smarters Pro is deliberately widely available: Amazon Fire TV Stick in every generation, Android phones and tablets, Android TV and Google TV, iPhone and iPad, plus many Smart TVs. Because your credentials are tied to the subscription rather than to a device, you set the app up once and repeat the process on further devices in about two minutes each. The interface stays identical throughout, which makes it easier for everyone in the household to learn. The only thing to watch is the number of simultaneous connections your plan allows.",
      },
      {
        h: "Alternatives if the app doesn't suit you",
        p: "IPTV Smarters Pro is not the only option, and depending on taste another app may suit you better. Many consider TiviMate the most polished program for Android TV: the guide is clearer and remote navigation faster, though setup takes a little more effort and full functionality is paid. IBO Player is leaner and runs smoothly on weaker devices. VLC, finally, plays M3U lists but offers neither EPG nor categories. All four work with the same ATV Corner credentials, so you can switch between them at no extra cost.",
      },
    ],
    faq: [
      { q: "Is IPTV Smarters Pro free?", a: "The IPTV Smarters Pro app is free to download. You need an IPTV subscription like ATV Corner to access content through your Xtream Codes login." },
      { q: "How do I connect ATV Corner to IPTV Smarters Pro?", a: "Choose \u201cLogin with Xtream Codes API\u201d and enter the URL, username and password sent by ATV Corner. Channels and EPG load automatically." },
      { q: "Which devices run IPTV Smarters Pro?", a: "Firestick, Android, Android TV, iPhone, iPad and many Smart TVs. Your ATV Corner credentials work across several devices." },
      { q: "Why won't a channel play?", a: "Usually the connection or decoder format. Switch from Hardware to Software in settings and check your speed. Our support helps if needed." },
      { q: "Can I use IPTV Smarters Pro with a free trial?", a: "Yes. The ATV Corner 24-hour free trial works in IPTV Smarters Pro exactly like a full subscription." },
    ],
    cta: "Get my login",
  },
  de: {
    metaTitle: "IPTV Smarters Pro — Mit ATV Corner einrichten (Guide 2026)",
    metaDesc:
      "Nutzen Sie IPTV Smarters Pro mit ATV Corner: 66.000+ Sender in 4K über Ihren Xtream-Codes-Login. Einrichtung in 5 Minuten auf Firestick, Android, iOS und Smart TV.",
    eyebrow: "IPTV Smarters Pro · Xtream Codes",
    h1: "IPTV Smarters Pro",
    h1Accent: "mit ATV Corner",
    intro:
      "IPTV Smarters Pro ist eine der beliebtesten IPTV-Apps: klare Oberfläche, integrierter EPG und flüssige 4K-Wiedergabe. Verbinden Sie ATV Corner in 5 Minuten mit Ihrem Xtream-Codes-Login und greifen Sie auf 66.000+ Sender zu.",
    features: [
      { h: "Xtream-Codes-Login", p: "Geben Sie URL, Benutzername und Passwort von ATV Corner ein — keine manuelle Sendereinrichtung." },
      { h: "Integrierter EPG", p: "Der Programmführer lädt automatisch, mit Postern, Kategorien und Erinnerungen." },
      { h: "Plattformübergreifend", p: "Verfügbar auf Firestick, Android, Android TV, iPhone, iPad und kompatiblen Smart TVs." },
      { h: "4K/8K-Wiedergabe", p: "Die App verarbeitet unsere HEVC/H.265-Streams in 4K/8K ohne Buffering auf einem aktuellen Gerät." },
    ],
    sections: [
      {
        h: "So richten Sie IPTV Smarters Pro ein",
        p: "Laden Sie IPTV Smarters Pro aus dem Store Ihres Geräts herunter (oder über Downloader auf dem Firestick). Wählen Sie beim Öffnen \u201eLogin with Xtream Codes API\u201c und geben Sie Namen, Server-URL, Benutzername und Passwort ein, die ATV Corner nach dem Abo per WhatsApp sendet. Die App importiert automatisch Ihre 66.000+ Sender, 70.000+ Filme und den EPG-Guide. In unter 5 Minuten ist alles bereit — keine M3U-Playlist zum manuellen Verwalten.",
      },
      {
        h: "IPTV Smarters Pro auf all Ihren Geräten",
        p: "IPTV Smarters Pro läuft auf Amazon Fire TV Stick, Android-Handys und -Tablets, Android TV, iPhone, iPad und vielen Smart TVs. Ihre ATV-Corner-Zugangsdaten funktionieren auf mehreren Geräten: einmal einrichten, dann überall dieselbe Erfahrung. Die Oberfläche bleibt von Gerät zu Gerät identisch, was die Bedienung für die ganze Familie erleichtert.",
      },
      {
        h: "Häufige Probleme beheben",
        p: "Wenn ein Sender nicht startet, prüfen Sie zuerst Ihre Internetverbindung (25 Mbit/s für 4K empfohlen) und wechseln Sie das Dekoderformat in den Einstellungen (Hardware/Software). Zeigt der EPG nichts an, aktualisieren Sie ihn in den Einstellungen. Bei einem Login-Fehler prüfen Sie, ob URL und Zugangsdaten exakt wie gesendet eingegeben sind. Der ATV-Corner-Support löst die meisten Fälle per WhatsApp in wenigen Minuten.",
      },
      {
        h: "Xtream Codes oder M3U — welches Format wählen",
        p: "Beim ersten Start bietet die App zwei Wege an. Die Anmeldung über die Xtream Codes API ist in fast allen Fällen die bessere Wahl: Der Player lädt Sender, Programmführer, Filme und Serien getrennt und nur bei Bedarf, wodurch der Start auch bei großen Katalogen schnell bleibt und Kategorien sauber sortiert erscheinen. Der M3U-Weg lädt stattdessen eine einzelne Playlist komplett und eignet sich, wenn Ihr Anbieter kein Xtream-Trio liefert. Da ATV Corner beide Formate bereitstellt, empfehlen wir Xtream Codes und schicken den M3U-Link nur auf Wunsch mit.",
      },
      {
        h: "Die Oberfläche einrichten, bevor Sie loslegen",
        p: "Direkt nach dem Import lohnen sich drei Handgriffe, die den Alltag deutlich angenehmer machen. Legen Sie zuerst Favoriten an: Aus 66.000+ Sendern eine eigene Liste zu bauen, ist der wichtigste Schritt überhaupt, weil er das Umschalten von Suchen in Auswählen verwandelt. Blenden Sie zweitens Kategorien aus, die Sie nie nutzen — das verkürzt jede Navigation. Stellen Sie drittens die Startseite so ein, dass sie direkt bei Live-TV oder bei Ihren Favoriten öffnet, statt bei der Übersicht. Alle drei Einstellungen finden Sie in den App-Einstellungen unter der jeweiligen Rubrik.",
      },
      {
        h: "EPG, Aufnahme und Mehrfachprofile",
        p: "Der Programmführer wird über Xtream Codes automatisch mitgeliefert und deckt in der Regel mehrere Tage ab. Zeigt er keine Titel, hilft ein manuelles Neuladen in den Einstellungen fast immer; ein Neuinstallieren der App ist dafür nie nötig. Die Aufnahmefunktion schreibt auf den lokalen Speicher des Geräts, weshalb sie auf einem Fire TV Stick mit wenig Platz schnell an Grenzen stößt — auf einem Android-TV-Gerät mit USB-Speicher ist sie praktikabler. Mehrere Profile lassen sich anlegen, wenn im Haushalt unterschiedliche Favoritenlisten gewünscht sind.",
      },
      {
        h: "Wenn ein Sender nicht startet",
        p: "Bleibt ein einzelner Sender schwarz, während andere laufen, liegt es fast nie am Zugang. Prüfen Sie zuerst den Dekoder-Modus in den Einstellungen und wechseln Sie von Hardware auf Software oder umgekehrt — unsere Streams laufen in HEVC/H.265, und manche Geräte dekodieren diesen Codec in Hardware fehlerhaft. Startet danach immer noch nichts, testen Sie denselben Sender auf einem zweiten Gerät. Läuft er dort, ist das erste Gerät die Ursache; läuft er nirgends, schreiben Sie uns kurz auf WhatsApp — wir antworten in unter fünf Minuten und prüfen den Sender direkt.",
      },
      {
        h: "Auf welchen Geräten die App läuft",
        p: "IPTV Smarters Pro ist bewusst breit verfügbar: Amazon Fire TV Stick in allen Generationen, Android-Smartphones und -Tablets, Android TV und Google TV, iPhone und iPad sowie viele Smart TVs. Weil Ihre Zugangsdaten an das Abo und nicht an ein Gerät gebunden sind, richten Sie die App einmal ein und wiederholen den Vorgang auf weiteren Geräten in jeweils zwei Minuten. Die Oberfläche bleibt dabei überall gleich, was die Einarbeitung für alle im Haushalt vereinfacht. Zu beachten ist lediglich die Zahl gleichzeitiger Verbindungen Ihrer Formel.",
      },
      {
        h: "Alternativen, falls die App nicht passt",
        p: "IPTV Smarters Pro ist nicht die einzige Option, und je nach Geschmack ist eine andere App die bessere. TiviMate gilt vielen als das ausgereifteste Programm für Android TV: Der Programmführer ist übersichtlicher und die Bedienung mit der Fernbedienung schneller, dafür ist die Einrichtung etwas aufwendiger und die volle Funktionalität kostenpflichtig. IBO Player ist schlanker und läuft auch auf schwächeren Geräten flüssig. VLC schließlich spielt M3U-Listen ab, bietet aber weder EPG noch Kategorien. Alle vier funktionieren mit denselben ATV-Corner-Zugangsdaten, sodass Sie ohne Zusatzkosten wechseln können.",
      },
    ],
    faq: [
      { q: "Ist IPTV Smarters Pro kostenlos?", a: "Die App IPTV Smarters Pro ist kostenlos herunterzuladen. Sie benötigen ein IPTV-Abo wie ATV Corner, um über Ihren Xtream-Codes-Login auf Inhalte zuzugreifen." },
      { q: "Wie verbinde ich ATV Corner mit IPTV Smarters Pro?", a: "Wählen Sie \u201eLogin with Xtream Codes API\u201c und geben Sie die von ATV Corner gesendete URL, Benutzername und Passwort ein. Sender und EPG laden automatisch." },
      { q: "Auf welchen Geräten läuft IPTV Smarters Pro?", a: "Firestick, Android, Android TV, iPhone, iPad und viele Smart TVs. Ihre ATV-Corner-Zugangsdaten funktionieren auf mehreren Geräten." },
      { q: "Warum startet ein Sender nicht?", a: "Meist die Verbindung oder das Dekoderformat. Wechseln Sie in den Einstellungen von Hardware zu Software und prüfen Sie Ihre Geschwindigkeit. Unser Support hilft bei Bedarf." },
      { q: "Kann ich IPTV Smarters Pro mit einem Gratis-Test nutzen?", a: "Ja. Der 24-Stunden-Gratis-Test von ATV Corner funktioniert in IPTV Smarters Pro genau wie ein vollständiges Abo." },
    ],
    cta: "Zugangsdaten erhalten",
  },
};

// =============================================================================
// /cable-tv-alternative — Targets "cable tv alternative", "cut the cord", "alternative to cable"
// =============================================================================
content["cable-tv-alternative"] = {
  fr: {
    metaTitle: "Alternative au Câble — Remplacez Votre Abonnement TV | IPTV",
    metaDesc:
      "La meilleure alternative au câble et au satellite : 66 000+ chaînes et 70 000+ films en 4K dès 5 €/mois, sans engagement. Coupez le cordon avec ATV Corner.",
    eyebrow: "Alternative au câble · Sans engagement",
    h1: "La meilleure alternative",
    h1Accent: "au câble",
    intro:
      "Payez-vous 40 à 100 € par mois pour le câble ? ATV Corner est l'alternative moderne : 66 000+ chaînes et 70 000+ films en 4K/8K, sans engagement, dès 5 €/mois. Coupez le cordon sans rien perdre.",
    features: [
      { h: "Jusqu'à 90 % d'économie", p: "Le câble coûte 40 à 100 €/mois. ATV Corner démarre à 5 €/mois pour bien plus de contenu." },
      { h: "Sans engagement", p: "Aucun contrat de 12 ou 24 mois, aucune reconduction. Vous annulez quand vous voulez." },
      { h: "Plus de chaînes", p: "66 000+ chaînes internationales contre 80 à 200 pour un bouquet câble classique." },
      { h: "Aucun matériel loué", p: "Pas de décodeur à louer ni de technicien. Vous utilisez la Smart TV ou le Firestick que vous avez déjà." },
    ],
    sections: [
      {
        h: "Pourquoi couper le cordon du câble",
        p: "Les abonnements câble et satellite cumulent les défauts : prix élevés, contrats longs, location de décodeur, bouquets sport en supplément et catalogue limité. L'IPTV inverse le modèle. Pour une fraction du prix, ATV Corner réunit 66 000+ chaînes, 70 000+ films et 18 000+ séries en 4K/8K, sans engagement. Vous gardez vos chaînes préférées, le sport et l'international, mais vous supprimez le décodeur, le technicien et la facture à trois chiffres.",
      },
      {
        h: "Ce que vous gardez en passant à l'IPTV",
        p: "Passer du câble à l'IPTV ne veut pas dire perdre du contenu — au contraire. Vous conservez les chaînes de sport (Premier League, Ligue 1, Champions League, NBA, F1), l'info, le cinéma et la jeunesse, et vous ajoutez des milliers de chaînes internationales absentes des bouquets classiques. Le guide des programmes (EPG) reste intégré, et la bibliothèque VOD remplace la location payante à la demande. La qualité 4K/8K dépasse souvent celle du câble, limité en 4K.",
      },
      {
        h: "Migrer sans coupure ni matériel",
        p: "Vous n'avez besoin d'aucun nouvel équipement : votre Smart TV, un Fire TV Stick, un smartphone ou une box Android suffisent. Après l'abonnement, ATV Corner vous envoie vos identifiants par WhatsApp en moins de 5 minutes ; vous les saisissez dans TiviMate ou IPTV Smarters Pro et vous regardez immédiatement. Vous pouvez même tester gratuitement 24h en parallèle de votre câble actuel, puis résilier ce dernier une fois convaincu.",
      },
      {
        h: "Les postes cachés d'une facture câble",
        p: "Le prix affiché est rarement ce qui rend une facture câble coûteuse. S'y ajoutent généralement la location du décodeur, un supplément HD, des bouquets sport ou cinéma, parfois un second décodeur pour une autre pièce, et des frais de mise en service. Chaque poste paraît anodin isolément ; ensemble, beaucoup de foyers atteignent 60 à 90 € par mois. Il vaut la peine de reprendre une facture réelle ligne par ligne et de multiplier le total par douze — cette étape est presque toujours omise, et c'est précisément pourquoi le montant annuel surprend. Un abonnement annuel ATV Corner coûte 60 € pour douze mois.",
      },
      {
        h: "Ce que vous conservez réellement en changeant",
        p: "La crainte la plus fréquente lors d'un changement est de perdre des contenus familiers, et elle est généralement infondée. Le sport en direct est intégralement conservé — environ 4 200 chaînes sport couvrent Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League, Europa League, NBA, NFL, UFC, Formule 1 et MotoGP. Information, documentaires, programmes jeunesse et chaînes régionales sont également inclus, aux côtés de milliers de chaînes internationales qu'aucun bouquet câble ne propose. Le guide des programmes reste, et une médiathèque de 70 000+ films et 18 000+ séries remplace la location payante à l'unité.",
      },
      {
        h: "Changer sans un seul jour sans télévision",
        p: "Comme l'IPTV passe par votre ligne internet et non par la prise câble, les deux systèmes fonctionnent en parallèle. C'est la clé d'un changement sans coupure. Lancez d'abord le nouvel accès et faites-le tourner une à deux semaines à côté de votre abonnement existant — de préférence sur une période incluant les heures de pointe et du sport en direct, car la stabilité ne se révèle que là. Ce n'est qu'une fois certain que vous résiliez par écrit, et vous renvoyez le décodeur en location après la fin effective du contrat, pas avant.",
      },
      {
        h: "Aucun technicien, aucun rendez-vous, aucun engagement",
        p: "Avec le câble, l'attente d'un rendez-vous technicien, une prise installée à demeure et un engagement de 12 à 24 mois font partie du lot. Rien de tout cela ne s'applique ici. Aucun matériel neuf n'est nécessaire : une Smart TV, un Fire TV Stick, une Apple TV, un téléphone ou une box Android suffisent, et la plupart des foyers en possèdent déjà un. L'installation se fait à distance en quelques minutes, et comme le téléviseur n'est plus rattaché à une prise précise, vous pouvez le placer librement ou utiliser l'abonnement dans une seconde pièce.",
      },
      {
        h: "Pour qui le changement est moins intéressant",
        p: "Honnêtement, l'IPTV ne convient pas à toutes les situations. Si votre connexion internet reste durablement sous 10 Mbps ou fluctue fortement, le câble ou le satellite demeure le choix le plus fiable, car il fonctionne indépendamment de votre ligne de données. De même, qui ne regarde que deux ou trois chaînes classiques et dispose déjà d'un tarif de base très bas économisera peu. Le changement est le plus rentable là où plusieurs options payantes sont souscrites, où des chaînes internationales manquent, ou lorsque plusieurs appareils du foyer doivent être desservis.",
      },
      {
        h: "Vérifier d'abord, décider ensuite",
        p: "Le chemin le plus simple vers une décision solide passe par un test plutôt que par un tableau. L'accès gratuit de 24 heures fonctionne sans carte bancaire et s'utilise sans difficulté en parallèle de votre contrat actuel. Surveillez trois points pendant ce temps : la présence et la stabilité des chaînes que vous regardez vraiment ; le bon remplissage du guide des programmes ; et la fluidité de l'image sur votre appareil aux heures de pointe. Si le test est concluant, une garantie satisfait ou remboursé de sept jours s'ajoute après l'achat.",
      },
    ],
    faq: [
      { q: "L'IPTV est-elle une vraie alternative au câble ?", a: "Oui. ATV Corner offre 66 000+ chaînes et 70 000+ films en 4K/8K, soit bien plus qu'un bouquet câble, sans décodeur ni engagement, dès 5 €/mois." },
      { q: "Combien puis-je économiser en quittant le câble ?", a: "Le câble coûte 40 à 100 €/mois. Avec ATV Corner à partir de 5 €/mois, l'économie peut atteindre 90 % tout en accédant à plus de contenu." },
      { q: "Ai-je besoin de nouveau matériel ?", a: "Non. Une Smart TV, un Fire TV Stick, un smartphone ou une box Android suffisent. Aucun décodeur à louer ni technicien à faire venir." },
      { q: "Vais-je perdre le sport et mes chaînes préférées ?", a: "Non. Vous gardez le sport, l'info, le cinéma et la jeunesse, et vous ajoutez des milliers de chaînes internationales, avec guide des programmes intégré." },
      { q: "Puis-je tester avant de résilier mon câble ?", a: "Oui. Un essai gratuit de 24h vous permet de comparer ATV Corner à votre câble actuel avant de résilier." },
    ],
    cta: "Couper le cordon",
  },
  en: {
    metaTitle: "Cable TV Alternative — Replace Your TV Package | IPTV",
    metaDesc:
      "The best alternative to cable and satellite: 66,000+ channels and 70,000+ movies in 4K from $5/mo, no contract. Cut the cord with ATV Corner IPTV.",
    eyebrow: "Cable TV alternative · No contract",
    h1: "The best alternative",
    h1Accent: "to cable",
    intro:
      "Paying $45 to $110 a month for cable? ATV Corner is the modern alternative: 66,000+ channels and 70,000+ movies in 4K/8K, no contract, from $5/mo. Cut the cord without losing a thing.",
    features: [
      { h: "Up to 90% savings", p: "Cable runs $45–110/mo. ATV Corner starts at $5/mo for far more content." },
      { h: "No contract", p: "No 12 or 24-month agreement, no auto-renewal. Cancel whenever you want." },
      { h: "More channels", p: "66,000+ international channels versus 80–200 on a typical cable package." },
      { h: "No rented hardware", p: "No box to rent, no technician. Use the Smart TV or Firestick you already own." },
    ],
    sections: [
      {
        h: "Why cut the cord on cable",
        p: "Cable and satellite subscriptions stack up drawbacks: high prices, long contracts, rented set-top boxes, sports as a paid add-on and a limited catalog. IPTV flips the model. For a fraction of the price, ATV Corner brings together 66,000+ channels, 70,000+ movies and 18,000+ series in 4K/8K, with no contract. You keep your favorite channels, sports and international feeds — but drop the box, the technician and the three-figure bill.",
      },
      {
        h: "What you keep when you switch to IPTV",
        p: "Moving from cable to IPTV doesn't mean losing content — the opposite. You keep sports channels (Premier League, La Liga, Champions League, NBA, F1), news, cinema and kids, and you add thousands of international channels missing from standard packages. The program guide (EPG) stays built in, and the VOD library replaces paid on-demand rentals. The 4K/8K quality often beats cable, which is limited on 4K.",
      },
      {
        h: "Switch with no downtime or hardware",
        p: "You need no new equipment: your Smart TV, a Fire TV Stick, a phone or an Android box is enough. After you subscribe, ATV Corner sends your credentials via WhatsApp in under 5 minutes; you enter them in TiviMate or IPTV Smarters Pro and watch right away. You can even run a free 24-hour trial alongside your current cable, then cancel it once you're convinced.",
      },
      {
        h: "The hidden line items on a cable bill",
        p: "The headline price is rarely what makes a cable bill expensive. Added to it you typically find box rental, an HD surcharge, sport or film packages, sometimes a second box for another room, and one-off connection fees. Each item looks harmless alone; together many households reach $60 to $90 a month. It is worth going through a real bill line by line and multiplying the total by twelve — that step is almost always skipped, which is precisely why the annual figure comes as a surprise. An ATV Corner annual plan is $65 for twelve months.",
      },
      {
        h: "What you actually keep when you switch",
        p: "The most common worry about switching is losing familiar content, and it is usually unfounded. Live sport survives in full — around 4,200 sport channels cover Premier League, Bundesliga, La Liga, Serie A, Ligue 1, Champions League, Europa League, NBA, NFL, UFC, Formula 1 and MotoGP. News, documentaries, children's programming and regional channels are included too, alongside thousands of international channels no cable package carries. The programme guide stays, and an on-demand library of 70,000+ films and 18,000+ series replaces the paid one-off rental.",
      },
      {
        h: "Switching without a day without television",
        p: "Because IPTV runs over your internet line rather than the cable socket, both systems work in parallel. That is the key to a switch with no gap. Start the new access first and run it alongside your existing service for a week or two — ideally across a period that includes prime time and live sport, since stability only reveals itself there. Only once you are sure do you cancel in writing, and you return the rented box after the contract has genuinely ended, not before.",
      },
      {
        h: "No technician, no appointment, no lock-in",
        p: "With cable, waiting for a technician's appointment, a fixed installed socket and a 12 to 24 month commitment come with the package. None of that applies here. You need no new hardware: a Smart TV, a Fire TV Stick, an Apple TV, a phone or an Android box is enough, and most households already own one. Setup happens remotely in a few minutes, and because the television is no longer tethered to a particular socket you can place it freely or use the subscription in a second room.",
      },
      {
        h: "Who benefits less from switching",
        p: "Honestly, IPTV does not suit every situation. If your internet connection sits permanently below 10 Mbps or fluctuates heavily, cable or satellite remains the more dependable choice because it works independently of your data line. Equally, someone who watches only two or three traditional channels and already has a very cheap basic tariff saves little. The switch pays off most clearly where several add-on packages are booked, where international channels are missing, or where multiple devices in the household need serving.",
      },
      {
        h: "Check first, then decide",
        p: "The simplest route to a sound decision runs through a test rather than a spreadsheet. The free 24-hour access runs without a credit card and works comfortably alongside your existing contract. Watch three things while you have it: whether the channels you genuinely watch are present and stable; whether the programme guide is populated correctly; and whether the picture stays smooth on your device at prime time. If the test goes well, a seven-day money-back guarantee applies after purchase on top of it.",
      },
    ],
    faq: [
      { q: "Is IPTV a real alternative to cable?", a: "Yes. ATV Corner offers 66,000+ channels and 70,000+ movies in 4K/8K — far more than a cable package, with no box or contract, from $5/mo." },
      { q: "How much can I save by leaving cable?", a: "Cable costs $45–110/mo. With ATV Corner from $5/mo, savings can reach 90% while accessing more content." },
      { q: "Do I need new hardware?", a: "No. A Smart TV, Fire TV Stick, phone or Android box is enough. No box to rent and no technician visit." },
      { q: "Will I lose sports and my favorite channels?", a: "No. You keep sports, news, cinema and kids, and add thousands of international channels, with a built-in program guide." },
      { q: "Can I test before cancelling my cable?", a: "Yes. A free 24-hour trial lets you compare ATV Corner to your current cable before cancelling." },
    ],
    cta: "Cut the cord",
  },
  de: {
    metaTitle: "Kabel-TV-Alternative — Ersetzen Sie Ihr TV-Paket | IPTV",
    metaDesc:
      "Die beste Alternative zu Kabel und Satellit: 66.000+ Sender und 70.000+ Filme in 4K ab 5 €/Monat, ohne Vertrag. Schneiden Sie das Kabel mit ATV Corner.",
    eyebrow: "Kabel-Alternative · Ohne Vertrag",
    h1: "Die beste Alternative",
    h1Accent: "zum Kabel",
    intro:
      "Zahlen Sie 40 bis 100 € im Monat für Kabel? ATV Corner ist die moderne Alternative: 66.000+ Sender und 70.000+ Filme in 4K/8K, ohne Vertrag, ab 5 €/Monat. Schneiden Sie das Kabel, ohne etwas zu verlieren.",
    features: [
      { h: "Bis zu 90 % Ersparnis", p: "Kabel kostet 40–100 €/Monat. ATV Corner beginnt bei 5 €/Monat für weit mehr Inhalt." },
      { h: "Ohne Vertrag", p: "Kein 12- oder 24-Monats-Vertrag, keine automatische Verlängerung. Jederzeit kündbar." },
      { h: "Mehr Sender", p: "66.000+ internationale Sender gegenüber 80–200 bei einem typischen Kabelpaket." },
      { h: "Keine Mietgeräte", p: "Kein Receiver zu mieten, kein Techniker. Nutzen Sie den Smart TV oder Firestick, den Sie bereits haben." },
    ],
    sections: [
      {
        h: "Warum das Kabel kappen",
        p: "Kabel- und Satelliten-Abos häufen Nachteile: hohe Preise, lange Verträge, gemietete Receiver, Sport als kostenpflichtiges Extra und ein begrenzter Katalog. IPTV dreht das Modell um. Für einen Bruchteil des Preises vereint ATV Corner 66.000+ Sender, 70.000+ Filme und 18.000+ Serien in 4K/8K, ohne Vertrag. Sie behalten Ihre Lieblingssender, Sport und internationale Feeds — aber lassen Receiver, Techniker und die dreistellige Rechnung hinter sich.",
      },
      {
        h: "Was Sie beim Wechsel zu IPTV behalten",
        p: "Der Wechsel von Kabel zu IPTV bedeutet keinen Inhaltsverlust — im Gegenteil. Sie behalten Sportsender (Premier League, La Liga, Champions League, NBA, F1), News, Kino und Kinderprogramm und fügen Tausende internationale Sender hinzu, die in Standardpaketen fehlen. Der Programmführer (EPG) bleibt integriert, und die VOD-Bibliothek ersetzt kostenpflichtige Abruf-Leihen. Die 4K/8K-Qualität übertrifft oft das im 4K begrenzte Kabel.",
      },
      {
        h: "Wechseln ohne Ausfall oder Hardware",
        p: "Sie brauchen keine neue Ausrüstung: Ihr Smart TV, ein Fire TV Stick, ein Handy oder eine Android-Box genügt. Nach dem Abo sendet ATV Corner Ihre Zugangsdaten per WhatsApp in unter 5 Minuten; Sie geben sie in TiviMate oder IPTV Smarters Pro ein und schauen sofort. Sie können sogar einen kostenlosen 24h-Test parallel zu Ihrem aktuellen Kabel laufen lassen und dieses kündigen, sobald Sie überzeugt sind.",
      },
      {
        h: "Die versteckten Posten einer Kabelrechnung",
        p: "Der Grundpreis ist selten das, was eine Kabelrechnung teuer macht. Dazu kommen üblicherweise die Receiver-Miete, ein HD-Aufpreis, Sport- oder Filmpakete, gelegentlich eine zweite Box für ein weiteres Zimmer und einmalige Anschlussgebühren. Jeder Posten wirkt für sich harmlos, in Summe landen viele Haushalte bei 60 bis 90 € im Monat. Es lohnt sich, eine reale Rechnung Zeile für Zeile durchzugehen und die Summe auf zwölf Monate hochzurechnen — genau dieser Schritt wird fast immer übersprungen, und genau deshalb überrascht der Jahresbetrag. Ein Jahresabo bei ATV Corner kostet 60 € für zwölf Monate.",
      },
      {
        h: "Was Sie beim Wechsel tatsächlich behalten",
        p: "Die häufigste Sorge beim Umstieg ist der Verlust vertrauter Inhalte, und sie ist meist unbegründet. Live-Sport bleibt vollständig erhalten — rund 4.200 Sportkanäle decken Bundesliga, Premier League, La Liga, Serie A, Ligue 1, Champions League, Europa League, NBA, NFL, UFC, Formel 1 und MotoGP ab. Nachrichten, Dokumentationen, Kinderprogramm und Regionalsender sind ebenfalls dabei, ergänzt um Tausende internationale Sender, die in keinem Kabelpaket enthalten sind. Der Programmführer bleibt, und die Mediathek mit 70.000+ Filmen und 18.000+ Serien ersetzt die kostenpflichtige Einzelleihe.",
      },
      {
        h: "Der Umstieg ohne einen Tag ohne Fernsehen",
        p: "Weil IPTV über Ihre Internetleitung läuft und nicht über die Kabeldose, funktionieren beide Systeme parallel. Genau das ist der Schlüssel zu einem Wechsel ohne Lücke. Starten Sie den neuen Zugang zuerst und lassen Sie ihn ein bis zwei Wochen neben dem bestehenden Anschluss laufen — bevorzugt über eine Zeit, die auch Prime Time und Live-Sport einschließt, weil sich Stabilität nur dort wirklich zeigt. Erst wenn Sie sicher sind, kündigen Sie schriftlich und schicken den Mietreceiver zurück, nachdem der Vertrag tatsächlich beendet ist, nicht vorher.",
      },
      {
        h: "Kein Techniker, kein Termin, keine Bindung",
        p: "Beim Kabelanschluss gehören Wartezeit auf einen Technikertermin, ein fest verlegter Anschluss und eine Bindung über 12 bis 24 Monate zum Paket. Nichts davon gilt hier. Sie brauchen kein neues Gerät: Ein Smart TV, ein Fire TV Stick, ein Apple TV, ein Handy oder eine Android-Box genügt, und die meisten Haushalte besitzen bereits eines davon. Die Einrichtung erfolgt aus der Ferne in wenigen Minuten, und weil der Fernseher nicht mehr an einer bestimmten Dose hängt, können Sie ihn frei im Raum platzieren oder das Abo im Zweitzimmer mitnutzen.",
      },
      {
        h: "Für wen sich der Wechsel weniger lohnt",
        p: "Ehrlicherweise passt IPTV nicht in jedem Fall. Wenn Ihre Internetverbindung dauerhaft unter 10 Mbit/s liegt oder stark schwankt, bleibt ein Kabel- oder Satellitenanschluss die zuverlässigere Wahl, weil er unabhängig von der Datenleitung funktioniert. Auch wer ausschließlich zwei oder drei klassische Sender schaut und ohnehin einen sehr günstigen Basistarif hat, spart wenig. Der Wechsel lohnt sich dort am deutlichsten, wo mehrere Zusatzpakete gebucht sind, wo internationale Sender fehlen oder wo mehrere Geräte im Haushalt versorgt werden sollen.",
      },
      {
        h: "Erst prüfen, dann entscheiden",
        p: "Der einfachste Weg zu einer belastbaren Entscheidung führt über einen Test statt über eine Tabelle. Der kostenlose 24-Stunden-Zugang läuft ohne Kreditkarte und lässt sich problemlos parallel zum bestehenden Vertrag nutzen. Achten Sie dabei auf drei Punkte: ob die Sender, die Sie tatsächlich schauen, vorhanden und stabil sind; ob der Programmführer korrekt gefüllt ist; und ob das Bild auf Ihrem Gerät zur Prime Time flüssig bleibt. Fällt der Test positiv aus, gilt nach dem Kauf zusätzlich eine Geld-zurück-Garantie von sieben Tagen.",
      },
    ],
    faq: [
      { q: "Ist IPTV eine echte Alternative zum Kabel?", a: "Ja. ATV Corner bietet 66.000+ Sender und 70.000+ Filme in 4K/8K — weit mehr als ein Kabelpaket, ohne Receiver oder Vertrag, ab 5 €/Monat." },
      { q: "Wie viel kann ich beim Verlassen des Kabels sparen?", a: "Kabel kostet 40–100 €/Monat. Mit ATV Corner ab 5 €/Monat kann die Ersparnis 90 % erreichen, bei mehr Inhalt." },
      { q: "Brauche ich neue Hardware?", a: "Nein. Ein Smart TV, Fire TV Stick, Handy oder eine Android-Box genügt. Kein Receiver zu mieten und kein Technikerbesuch." },
      { q: "Verliere ich Sport und meine Lieblingssender?", a: "Nein. Sie behalten Sport, News, Kino und Kinderprogramm und fügen Tausende internationale Sender hinzu, mit integriertem Programmführer." },
      { q: "Kann ich testen, bevor ich mein Kabel kündige?", a: "Ja. Ein kostenloser 24-Stunden-Test lässt Sie ATV Corner mit Ihrem aktuellen Kabel vergleichen, bevor Sie kündigen." },
    ],
    cta: "Kabel kappen",
  },
};

// =============================================================================
// /iptv-deutschland — DE market page. The /tools/in/germany page is football-only,
// so the German market had no general IPTV landing page.
// =============================================================================
content["iptv-deutschland"] = {
  de: {
    metaTitle: "IPTV Deutschland — 66.000+ Sender, Bundesliga & 4K ab 5 €/Monat",
    metaDesc:
      "IPTV in Deutschland: 66.000+ Sender inklusive aller deutschen Programme, Bundesliga und Champions League in 4K/8K. Ab 5 €/Monat, Aktivierung in 5 Minuten.",
    eyebrow: "IPTV Deutschland · Ab 5 €/Monat",
    h1: "IPTV für",
    h1Accent: "Deutschland",
    intro:
      "Alle deutschen Sender, die Bundesliga und über 66.000 internationale Programme in einem Zugang — in 4K/8K, ohne Kabelvertrag und ohne Receiver. Aktiviert in unter 5 Minuten, ab 5 €/Monat.",
    features: [
      { h: "Deutsche Sender komplett", p: "Öffentlich-rechtliche und private Programme, dazu Regionalsender und Spartenkanäle." },
      { h: "Bundesliga & Champions League", p: "Rund 4.200 Sportkanäle — Bundesliga, DFB-Pokal, Champions League, Formel 1 und NBA." },
      { h: "Server in Europa", p: "Redundante Tier-1-Infrastruktur, dimensioniert für ein Vielfaches der tatsächlichen Last." },
      { h: "Ohne Vertragsbindung", p: "1, 3, 6 oder 12 Monate. Keine automatische Verlängerung, 7 Tage Geld-zurück-Garantie." },
    ],
    sections: [
      {
        h: "Warum IPTV in Deutschland?",
        p: "Ein klassischer Kabel- oder Satellitenanschluss kostet in Deutschland meist 40 bis 100 € im Monat, bindet über 12 bis 24 Monate und liefert 80 bis 200 Sender. IPTV kehrt dieses Verhältnis um: Mit ATV Corner erhalten Sie 66.000+ Sender, 70.000+ Filme und 18.000+ Serien in 4K/8K ab 5 €/Monat — über Ihre bestehende Internetleitung, ohne Techniker, ohne Kabeldose und ohne Mietreceiver. Sport, Kino und internationale Programme sind enthalten statt als kostenpflichtige Zusatzpakete.",
      },
      {
        h: "Deutsche Programme und Bundesliga live",
        p: "Für deutsche Haushalte zählt vor allem, dass die gewohnten Sender vollständig da sind: öffentlich-rechtliche Programme, private Vollprogramme, Nachrichten-, Dokumentations- und Kindersender sowie regionale Angebote. Dazu kommen rund 4.200 Sportkanäle mit Bundesliga, DFB-Pokal, Champions League, Europa League, Formel 1, MotoGP und NBA. Weil dieselbe Partie oft auch international übertragen wird, gibt es meist mehrere Wege zu einem Spiel.",
      },
      {
        h: "Einrichtung, Geräte und Bandbreite",
        p: "Sie brauchen kein neues Gerät. IPTV läuft auf Smart TVs von Samsung und LG, auf Android TV und Google TV, auf dem Amazon Fire TV Stick, Apple TV, Handy, Tablet, MAG Box, Enigma2 sowie auf Windows, macOS und Linux — über TiviMate, IBO Player, IPTV Smarters Pro oder VLC. Für HD genügen 10 Mbit/s, für flüssiges 4K sind 25 Mbit/s empfehlenswert. Nach der Zahlung erhalten Sie Ihre Xtream-Codes-Zugangsdaten oder Ihren M3U-Link in unter 5 Minuten per WhatsApp.",
      },
      {
        h: "Ist IPTV in Deutschland legal?",
        p: "Die Technik hinter IPTV ist in Deutschland völlig legal — sie beschreibt lediglich die Übertragung von Fernsehen über das Internetprotokoll statt über Kabel oder Satellit. Große deutsche Anbieter nutzen dieselbe Grundtechnik. Entscheidend ist nicht die Technologie, sondern die Seriosität des Dienstes, den Sie wählen: reguläre Zahlungswege statt anonymer Verfahren, eine verschlüsselte HTTPS-Auslieferung, ein erreichbarer Support und eine klar formulierte Rückerstattungsregel. ATV Corner erfüllt alle vier Punkte und lässt Sie vorab 24 Stunden kostenlos testen, damit Sie den Dienst beurteilen können, bevor Geld fließt. Zusätzlich gilt eine Geld-zurück-Garantie von sieben Tagen.",
      },
      {
        h: "Welche Geräte deutsche Haushalte typischerweise nutzen",
        p: "In den meisten deutschen Wohnzimmern steht bereits alles, was nötig ist. Smart TVs von Samsung mit Tizen und von LG mit webOS spielen IPTV über einen Player aus dem jeweiligen Store; Geräte von Sony, Philips, TCL und Hisense laufen meist unter Android TV oder Google TV und bieten damit die größte App-Auswahl. Dazu kommen der Amazon Fire TV Stick, Apple TV, MAG Box und Enigma2-Receiver sowie Handys, Tablets und Computer unter Windows, macOS und Linux. Als Player haben sich TiviMate, IBO Player und IPTV Smarters Pro etabliert; VLC funktioniert für einfache M3U-Listen.",
      },
      {
        h: "Kabel, Satellit und IPTV im direkten Kostenvergleich",
        p: "Rechnen Sie ehrlich nach, was ein klassischer Anschluss tatsächlich kostet: Grundgebühr, Receiver-Miete und die Sport- oder Filmpakete, die separat gebucht werden. Viele Haushalte kommen damit auf 60 bis 90 € im Monat, verteilt auf Posten, die einzeln harmlos wirken. Ein ATV Corner Jahresabo kostet 60 € — für zwölf Monate, nicht für einen. Selbst der Monatstarif von 15 € liegt deutlich darunter und enthält bereits Sport, Kino, Kinderprogramm und internationale Sender. Es entfallen zusätzlich der Technikertermin, die Vertragsbindung über 12 bis 24 Monate und die Rückgabe des Mietreceivers am Ende.",
      },
      {
        h: "In fünf Minuten startklar",
        p: "Der Ablauf ist bewusst kurz gehalten. Sie wählen eine Laufzeit, schließen die Zahlung ab und erhalten Ihre Zugangsdaten in unter fünf Minuten per WhatsApp — entweder als Xtream-Codes-Trio aus Server-URL, Benutzername und Passwort oder als M3U-Link. Diese Daten tragen Sie einmal in die App Ihrer Wahl ein. Der Player lädt daraufhin selbstständig die vollständige Senderliste, den Programmführer über mehrere Tage sowie den Film- und Serienkatalog. Danach lohnt sich ein einziger zusätzlicher Schritt: Legen Sie Favoriten an. Aus 66.000+ Sendern eine eigene Liste zu bauen, ist der Unterschied zwischen Unübersichtlichkeit und echtem Alltagsnutzen.",
      },
      {
        h: "Was der Katalog neben Live-TV enthält",
        p: "Neben dem linearen Fernsehen steht eine Mediathek bereit, die den Abruf-Teil vollständig abdeckt: rund 70.000 Filme und 18.000 Serien, jeweils mit Poster, Beschreibung und Staffel-Struktur. Damit entfällt die kostenpflichtige Einzelleihe, die bei Kabelanbietern üblich ist. Hinzu kommen etwa 320 Kinder- und Familienkanäle sowie rund 540 Nachrichten- und Dokumentationssender, sodass auch Haushalte mit unterschiedlichen Sehgewohnheiten abgedeckt sind. Die Inhalte werden in HEVC/H.265 mit adaptiver Bitrate ausgeliefert, was besonders bei schnellen Bewegungen im Sport den Unterschied zwischen einem sauberen Bild und sichtbaren Kompressionsartefakten ausmacht.",
      },
      {
        h: "Stabilität zur Prime Time — worauf es ankommt",
        p: "Der eigentliche Qualitätsunterschied zwischen Anbietern zeigt sich nicht am Dienstagnachmittag, sondern am Samstagabend und beim Anpfiff, wenn sehr viele Zuschauer gleichzeitig denselben Stream anfordern. Genau dann entscheidet die Serverkapazität darüber, ob das Bild sauber bleibt oder in Standbilder und Ladekreise zerfällt. Sehr günstige Angebote sparen fast immer an dieser Stelle, weil sie für den Kunden vor dem Kauf unsichtbar ist. ATV Corner betreibt deshalb eine redundante Tier-1-Infrastruktur in Europa, die auf ein Vielfaches der tatsächlichen Last ausgelegt ist. Prüfen lässt sich das am einfachsten selbst: Starten Sie den kostenlosen Test bewusst zur Anstoßzeit und nicht am Vormittag.",
      },
    ],
    faq: [
      { q: "Sind alle deutschen Sender enthalten?", a: "Ja. Öffentlich-rechtliche und private Programme, Nachrichten-, Dokumentations-, Kinder- und Regionalsender sind Teil der 66.000+ Sender, dazu Tausende internationale Programme." },
      { q: "Kann ich die Bundesliga über IPTV schauen?", a: "Ja. Rund 4.200 Sportkanäle decken Bundesliga, DFB-Pokal, Champions League, Europa League, Formel 1, MotoGP und NBA ab — ohne kostenpflichtige Zusatzpakete." },
      { q: "Was kostet IPTV in Deutschland?", a: "Die Abos starten bei 15 € für einen Monat und sinken auf 5 €/Monat im Jahresabo für 60 €. Jede Laufzeit enthält denselben Katalog und dieselbe 4K/8K-Qualität." },
      { q: "Brauche ich einen neuen Fernseher oder Receiver?", a: "Nein. Ein Smart TV, Fire TV Stick, Apple TV, Handy, Tablet oder eine Android-Box genügt. Kein Mietreceiver und kein Technikertermin." },
      { q: "Welche Internetgeschwindigkeit brauche ich?", a: "Rund 10 Mbit/s für HD und mindestens 25 Mbit/s für flüssiges 4K. Eine stabile Verbindung ist wichtiger als eine hohe Maximalgeschwindigkeit." },
    ],
    cta: "Jetzt in Deutschland starten",
    cover: "/blog/iptv-deutschland-main-de.jpg",
    image: { src: "/blog/iptv-deutschland-body-de.jpg", alt: "Was IPTV in Deutschland abdeckt: öffentlich-rechtliche und private Sender, 4.200 Sportkanäle mit Bundesliga und Champions League, 70.000+ Filme in 4K/8K.", caption: "Deutsche Sender, Sport und Katalog in einem Zugang." },
  },
  en: {
    metaTitle: "IPTV Germany — 66,000+ Channels, Bundesliga & 4K from $5/mo",
    metaDesc:
      "IPTV in Germany: 66,000+ channels including every German programme, Bundesliga and Champions League in 4K/8K. From $5/mo, activated in 5 minutes.",
    eyebrow: "IPTV Germany · From $5/mo",
    h1: "IPTV for",
    h1Accent: "Germany",
    intro:
      "Every German channel, the Bundesliga and over 66,000 international programmes in one login — in 4K/8K, with no cable contract and no receiver. Active in under 5 minutes, from $5/mo.",
    features: [
      { h: "German channels in full", p: "Public-service and commercial programmes, plus regional and special-interest channels." },
      { h: "Bundesliga & Champions League", p: "Around 4,200 sport channels — Bundesliga, DFB-Pokal, Champions League, Formula 1 and NBA." },
      { h: "Servers in Europe", p: "Redundant Tier 1 infrastructure, sized for a multiple of actual load." },
      { h: "No contract", p: "1, 3, 6 or 12 months. No auto-renewal, 7-day money-back guarantee." },
    ],
    sections: [
      {
        h: "Why IPTV in Germany?",
        p: "A traditional cable or satellite connection in Germany typically costs $45 to $110 a month, ties you in for 12 to 24 months and delivers 80 to 200 channels. IPTV reverses that ratio: with ATV Corner you get 66,000+ channels, 70,000+ movies and 18,000+ series in 4K/8K from $5/mo — over your existing internet line, with no technician, no cable socket and no rented receiver. Sport, cinema and international programming are included rather than sold as paid add-ons.",
      },
      {
        h: "German programming and Bundesliga live",
        p: "What matters most for German households is that the familiar channels are all there: public-service broadcasters, commercial networks, news, documentary and children's channels, plus regional output. On top of that come around 4,200 sport channels carrying Bundesliga, DFB-Pokal, Champions League, Europa League, Formula 1, MotoGP and NBA. Because the same fixture is often broadcast internationally too, there's usually more than one route to a given match.",
      },
      {
        h: "Setup, devices and bandwidth",
        p: "You need no new hardware. IPTV runs on Samsung and LG Smart TVs, on Android TV and Google TV, on the Amazon Fire TV Stick, Apple TV, phone, tablet, MAG Box, Enigma2 and on Windows, macOS and Linux — via TiviMate, IBO Player, IPTV Smarters Pro or VLC. HD needs 10 Mbps; 25 Mbps is advisable for smooth 4K. After payment your Xtream Codes credentials or M3U link arrive within 5 minutes on WhatsApp.",
      },
      {
        h: "Is IPTV legal in Germany?",
        p: "The technology behind IPTV is entirely legal in Germany — it simply describes delivering television over the internet protocol rather than by cable or satellite. Major German providers use the same underlying technique. What matters is not the technology but the seriousness of the service you choose: regulated payment methods rather than anonymous ones, encrypted HTTPS delivery, reachable support and a clearly worded refund policy. ATV Corner meets all four and lets you test free for 24 hours beforehand, so you can judge the service before any money changes hands. A seven-day money-back guarantee applies on top of that.",
      },
      {
        h: "The devices German households typically use",
        p: "Most German living rooms already contain everything required. Samsung Smart TVs running Tizen and LG sets running webOS play IPTV through a player from their respective stores; Sony, Philips, TCL and Hisense sets generally run Android TV or Google TV and therefore offer the widest app selection. Add to that the Amazon Fire TV Stick, Apple TV, MAG Box and Enigma2 receivers, plus phones, tablets and computers on Windows, macOS and Linux. TiviMate, IBO Player and IPTV Smarters Pro have become the established players; VLC works for straightforward M3U lists.",
      },
      {
        h: "Cable, satellite and IPTV compared on cost",
        p: "Work out honestly what a traditional connection really costs: the base fee, the box rental and the sport or film packages booked separately. Plenty of households reach 60 to 90 € a month that way, split across line items that each look harmless. An ATV Corner annual plan is 60 € — for twelve months, not one. Even the monthly rate of 15 € sits well below that and already includes sport, cinema, children's programming and international channels. You also drop the technician appointment, the 12 to 24 month commitment, and returning the rented receiver at the end.",
      },
      {
        h: "Up and running in five minutes",
        p: "The process is deliberately short. You choose a term, complete payment, and receive your credentials within five minutes on WhatsApp — either an Xtream Codes trio of server URL, username and password, or an M3U link. You enter those once into the app of your choice. The player then loads the full channel list, a program guide covering several days, and the film and series catalogue on its own. After that, one further step is worth taking: build a favourites list. Curating your own selection out of 66,000+ channels is the difference between an unmanageable list and something genuinely useful day to day.",
      },
      {
        h: "What the catalogue holds beyond live TV",
        p: "Alongside linear television sits an on-demand library that covers the catch-up side completely: around 70,000 films and 18,000 series, each with artwork, a description and season structure. That removes the paid one-off rental common with cable providers. Add roughly 320 children's and family channels plus around 540 news and documentary channels, so households with differing viewing habits are covered too. Everything is delivered in HEVC/H.265 with adaptive bitrate, which during fast motion in sport is the difference between a clean picture and visible compression artefacts.",
      },
    ],
    faq: [
      { q: "Are all German channels included?", a: "Yes. Public-service and commercial programmes, news, documentary, children's and regional channels are part of the 66,000+ lineup, alongside thousands of international ones." },
      { q: "Can I watch the Bundesliga over IPTV?", a: "Yes. Around 4,200 sport channels cover Bundesliga, DFB-Pokal, Champions League, Europa League, Formula 1, MotoGP and NBA — with no paid add-on packages." },
      { q: "What does IPTV cost in Germany?", a: "Plans start at $16 for one month and drop to about $5/mo on the annual plan. Every term includes the same catalogue and the same 4K/8K quality." },
      { q: "Do I need a new TV or receiver?", a: "No. A Smart TV, Fire TV Stick, Apple TV, phone, tablet or Android box is enough. No rented receiver and no technician visit." },
      { q: "What internet speed do I need?", a: "Around 10 Mbps for HD and at least 25 Mbps for smooth 4K. A stable connection matters more than a high peak speed." },
    ],
    cta: "Start in Germany",
    cover: "/blog/iptv-deutschland-main-en.jpg",
    image: { src: "/blog/iptv-deutschland-body-en.jpg", alt: "What IPTV covers in Germany: public-service and commercial channels, 4,200 sport channels with Bundesliga and Champions League, 70,000+ films in 4K/8K.", caption: "German channels, sport and catalogue in one login." },
  },
  fr: {
    metaTitle: "IPTV Allemagne — 66 000+ chaînes, Bundesliga & 4K dès 5 €/mois",
    metaDesc:
      "IPTV en Allemagne : 66 000+ chaînes dont tous les programmes allemands, Bundesliga et Champions League en 4K/8K. Dès 5 €/mois, activation en 5 minutes.",
    eyebrow: "IPTV Allemagne · Dès 5 €/mois",
    h1: "L'IPTV pour",
    h1Accent: "l'Allemagne",
    intro:
      "Toutes les chaînes allemandes, la Bundesliga et plus de 66 000 programmes internationaux dans un seul accès — en 4K/8K, sans contrat câble ni décodeur. Actif en moins de 5 minutes, dès 5 €/mois.",
    features: [
      { h: "Chaînes allemandes complètes", p: "Programmes publics et privés, plus les chaînes régionales et thématiques." },
      { h: "Bundesliga & Champions League", p: "Environ 4 200 chaînes sport — Bundesliga, DFB-Pokal, Champions League, F1 et NBA." },
      { h: "Serveurs en Europe", p: "Infrastructure Tier 1 redondante, dimensionnée pour plusieurs fois la charge réelle." },
      { h: "Sans engagement", p: "1, 3, 6 ou 12 mois. Aucune reconduction, garantie satisfait ou remboursé 7 jours." },
    ],
    sections: [
      {
        h: "Pourquoi l'IPTV en Allemagne ?",
        p: "Un abonnement câble ou satellite classique coûte en Allemagne 40 à 100 € par mois, engage sur 12 à 24 mois et propose 80 à 200 chaînes. L'IPTV inverse ce rapport : avec ATV Corner, vous obtenez 66 000+ chaînes, 70 000+ films et 18 000+ séries en 4K/8K dès 5 €/mois — via votre connexion internet existante, sans technicien, sans prise câble et sans décodeur en location. Sport, cinéma et programmes internationaux sont inclus au lieu d'être vendus en options payantes.",
      },
      {
        h: "Programmes allemands et Bundesliga en direct",
        p: "Pour un foyer allemand, l'essentiel est que les chaînes habituelles soient toutes présentes : programmes du service public, chaînes privées, information, documentaires, jeunesse et offres régionales. S'y ajoutent environ 4 200 chaînes sport diffusant Bundesliga, DFB-Pokal, Champions League, Europa League, Formule 1, MotoGP et NBA. Comme une même rencontre est souvent diffusée aussi à l'international, il existe généralement plusieurs chemins vers un match.",
      },
      {
        h: "Installation, appareils et débit",
        p: "Aucun nouvel appareil n'est nécessaire. L'IPTV fonctionne sur les Smart TV Samsung et LG, sur Android TV et Google TV, sur l'Amazon Fire TV Stick, l'Apple TV, téléphone, tablette, MAG Box, Enigma2 ainsi que sur Windows, macOS et Linux — via TiviMate, IBO Player, IPTV Smarters Pro ou VLC. La HD demande 10 Mbps ; 25 Mbps sont conseillés pour une 4K fluide. Après paiement, vos identifiants Xtream Codes ou votre lien M3U arrivent en moins de 5 minutes par WhatsApp.",
      },
      {
        h: "L'IPTV est-elle légale en Allemagne ?",
        p: "La technologie derrière l'IPTV est parfaitement légale en Allemagne — elle décrit simplement la diffusion de la télévision via le protocole internet plutôt que par câble ou satellite. De grands fournisseurs allemands utilisent la même technique de base. Ce qui compte n'est pas la technologie mais le sérieux du service choisi : des moyens de paiement régulés plutôt qu'anonymes, une livraison chiffrée en HTTPS, un support joignable et une règle de remboursement clairement formulée. ATV Corner remplit ces quatre critères et vous laisse tester gratuitement 24 heures au préalable, afin de juger avant tout paiement. S'y ajoute une garantie satisfait ou remboursé de sept jours.",
      },
      {
        h: "Les appareils que les foyers allemands utilisent",
        p: "La plupart des salons allemands contiennent déjà tout le nécessaire. Les Smart TV Samsung sous Tizen et les téléviseurs LG sous webOS lisent l'IPTV via un lecteur de leur magasin respectif ; les appareils Sony, Philips, TCL et Hisense tournent généralement sous Android TV ou Google TV et offrent donc le plus large choix d'applications. S'y ajoutent l'Amazon Fire TV Stick, l'Apple TV, les MAG Box et récepteurs Enigma2, ainsi que téléphones, tablettes et ordinateurs sous Windows, macOS et Linux. TiviMate, IBO Player et IPTV Smarters Pro se sont imposés comme lecteurs ; VLC convient aux listes M3U simples.",
      },
      {
        h: "Câble, satellite et IPTV : le comparatif des coûts",
        p: "Calculez honnêtement ce que coûte réellement un abonnement classique : forfait de base, location du décodeur et bouquets sport ou cinéma souscrits séparément. Beaucoup de foyers atteignent ainsi 60 à 90 € par mois, répartis en lignes qui semblent anodines prises séparément. Un abonnement annuel ATV Corner coûte 60 € — pour douze mois, pas pour un. Même le tarif mensuel de 15 € reste nettement en dessous et inclut déjà sport, cinéma, programmes jeunesse et chaînes internationales. Vous supprimez également le rendez-vous technicien, l'engagement de 12 à 24 mois et le renvoi du décodeur en location.",
      },
      {
        h: "Prêt en cinq minutes",
        p: "Le déroulé est volontairement court. Vous choisissez une durée, réglez le paiement et recevez vos identifiants en moins de cinq minutes par WhatsApp — soit un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit un lien M3U. Vous saisissez ces données une seule fois dans l'application de votre choix. Le lecteur charge ensuite de lui-même la liste complète des chaînes, un guide des programmes sur plusieurs jours et le catalogue de films et séries. Une étape supplémentaire mérite alors d'être faite : créer des favoris. Se constituer une sélection parmi 66 000+ chaînes fait toute la différence au quotidien.",
      },
      {
        h: "Ce que contient le catalogue au-delà du direct",
        p: "À côté de la télévision linéaire se trouve une médiathèque qui couvre entièrement la partie à la demande : environ 70 000 films et 18 000 séries, chacun avec affiche, description et structure par saisons. Cela supprime la location payante à l'unité, courante chez les câblo-opérateurs. S'y ajoutent environ 320 chaînes jeunesse et famille ainsi que quelque 540 chaînes d'information et de documentaires, de quoi couvrir des foyers aux habitudes différentes. Le tout est diffusé en HEVC/H.265 avec bitrate adaptatif, ce qui, lors des mouvements rapides du sport, fait la différence entre une image nette et des artefacts visibles.",
      },
    ],
    faq: [
      { q: "Toutes les chaînes allemandes sont-elles incluses ?", a: "Oui. Les programmes publics et privés, l'information, les documentaires, la jeunesse et les chaînes régionales font partie des 66 000+ chaînes, aux côtés de milliers de programmes internationaux." },
      { q: "Puis-je regarder la Bundesliga via l'IPTV ?", a: "Oui. Environ 4 200 chaînes sport couvrent Bundesliga, DFB-Pokal, Champions League, Europa League, Formule 1, MotoGP et NBA — sans bouquets payants supplémentaires." },
      { q: "Combien coûte l'IPTV en Allemagne ?", a: "Les abonnements démarrent à 15 € pour un mois et descendent à 5 €/mois en formule annuelle à 60 €. Chaque durée inclut le même catalogue et la même qualité 4K/8K." },
      { q: "Faut-il un nouveau téléviseur ou décodeur ?", a: "Non. Une Smart TV, un Fire TV Stick, une Apple TV, un téléphone, une tablette ou une box Android suffisent. Aucun décodeur en location, aucun technicien." },
      { q: "Quelle vitesse internet faut-il ?", a: "Environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K fluide. Une connexion stable compte plus qu'un débit maximal élevé." },
    ],
    cta: "Démarrer en Allemagne",
    cover: "/blog/iptv-deutschland-main-fr.jpg",
    image: { src: "/blog/iptv-deutschland-body-fr.jpg", alt: "Ce que couvre l'IPTV en Allemagne : chaînes publiques et privées, 4 200 chaînes sport avec Bundesliga et Champions League, 70 000+ films en 4K/8K.", caption: "Chaînes allemandes, sport et catalogue en un accès." },
  },
};

// =============================================================================
// /iptv-roku — device gap. DataForSEO: "roku streaming stick hd" 27,100/mo, KD 16.
// We had /iptv-firestick but nothing for Roku.
// =============================================================================
content["iptv-roku"] = {
  en: {
    metaTitle: "IPTV on Roku — How to Set It Up (2026 Guide)",
    metaDesc:
      "How to watch IPTV on a Roku: which players work, the step-by-step setup, and what to do when an app isn't in the Roku Channel Store. 66,000+ channels in 4K.",
    eyebrow: "IPTV on Roku · Setup guide",
    h1: "IPTV on your",
    h1Accent: "Roku",
    intro:
      "Roku is one of the most common streaming devices in the US — and it handles IPTV, though not the same way a Fire TV Stick does. Here's exactly how to set it up, and the reliable fallback when a player isn't in the Channel Store.",
    features: [
      { h: "Works on current Roku models", p: "Streaming Stick, Streambar, Roku Express and Roku TV sets all play IPTV via a compatible player." },
      { h: "Xtream Codes or M3U", p: "Enter the credentials we send, or load your M3U link — the channel list and EPG build themselves." },
      { h: "Screen mirroring fallback", p: "If a player isn't in the Channel Store, cast from a phone or use an HDMI stick instead." },
      { h: "4K where the model supports it", p: "Roku 4K models handle our HEVC/H.265 streams; 25 Mbps is the practical minimum." },
    ],
    sections: [
      {
        h: "How IPTV works on Roku",
        p: "Roku is a more closed platform than Android TV or Fire OS: you install from the Roku Channel Store rather than sideloading freely. That means IPTV works through whichever compatible player is available in the store in your region, into which you enter your Xtream Codes details (server URL, username, password) or your M3U link. Once entered, the player pulls the full channel list, the program guide and the film and series catalogue — the same 66,000+ channels you'd get on any other device.",
      },
      {
        h: "Setting it up step by step",
        p: "Connect the Roku to your network, ideally by ethernet where the model has a port. Open the Channel Store and install an IPTV player that supports Xtream Codes or M3U. Launch it and enter the credentials ATV Corner sends on WhatsApp within 5 minutes of payment. Give the guide a moment to populate, then build a favourites list — out of 66,000+ channels, a curated list is what makes the device usable day to day.",
      },
      {
        h: "When a player isn't available",
        p: "Roku's store varies by region and its IPTV selection is narrower than Android's. If you can't find a suitable player, you have two dependable options. You can mirror or cast from a phone or tablet running IPTV Smarters Pro, which works but ties up the phone. Or you can add an HDMI device to the same television — an Amazon Fire TV Stick 4K, an Apple TV or an Android TV box gives you the full range of players and is the more comfortable long-term answer.",
      },
      {
        h: "Roku versus Fire TV Stick for IPTV",
        p: "The honest comparison matters here because it decides how smooth your setup will be. A Fire TV Stick runs Fire OS, an Android derivative, so it accepts sideloaded players and gives you TiviMate, IBO Player and IPTV Smarters Pro directly. Roku deliberately does not allow that: everything installs from its own Channel Store, whose IPTV selection is narrower and varies by region. Roku wins on simplicity and on remote quality; Fire TV wins decisively on app choice. If you already own a Roku, the pages below get you running on it. If you are buying a device specifically for IPTV, a Fire TV Stick 4K is the less frustrating purchase.",
      },
      {
        h: "Bandwidth, quality and your network",
        p: "IPTV is a continuous real-time stream with no large buffer to absorb dips, so consistency matters more than headline speed. Plan for at least 10 Mbps for HD and 25 Mbps for stable 4K, measured on the Roku itself rather than on a laptop elsewhere in the house. Where your model has an ethernet port, use it: a wired connection removes the interference and congestion that cause most buffering complaints, and it matters most during live sport when everyone is watching at once. On Wi-Fi, prefer the 5 GHz band and keep the router in the open rather than inside a cabinet.",
      },
      {
        h: "Fixing the problems that actually come up",
        p: "Three issues account for most Roku support messages. If the channel list refuses to load, the cause is almost always a single wrong character in the server URL, username or password — the port included — so check the entry character by character against what we sent. If playback stutters on one channel but not others, restart the Roku before assuming a wider fault; background processes on older models are a common culprit. And if the guide shows no programme titles, refresh the EPG manually from the player's settings and give it a minute to populate rather than reinstalling.",
      },
      {
        h: "What the subscription actually includes",
        p: "The device is only the delivery mechanism; the catalogue is identical whichever hardware you use. That means 66,000+ live channels, around 4,200 of them sport, covering Premier League, Bundesliga, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formula 1 and MotoGP. Alongside those sit roughly 70,000 films and 18,000 series on demand, with artwork and season structure, plus around 320 children's channels and 540 news and documentary channels. Everything is encoded in HEVC/H.265 with adaptive bitrate, and the same login works across your other devices without buying anything again.",
      },
      {
        h: "Support, guarantee and trying it first",
        p: "Because Roku's app situation varies by region, this is a page where testing before paying is genuinely useful rather than a formality. A free 24-hour trial runs without a credit card, which lets you confirm that a suitable player exists in your own Channel Store before committing to a term. If it does not, our support will tell you plainly and point you to the HDMI route instead. Messages on WhatsApp are answered in under five minutes, including before purchase, and every plan carries a seven-day money-back guarantee on top of the trial.",
      },
    ],
    faq: [
      { q: "Can I watch IPTV on a Roku?", a: "Yes, through an IPTV player from the Roku Channel Store that supports Xtream Codes or M3U. Roku is more closed than Android TV, so the selection is narrower, but the credentials work the same way." },
      { q: "How do I set up IPTV on Roku?", a: "Install a compatible IPTV player from the Channel Store, open it and enter the server URL, username and password ATV Corner sends you — or your M3U link. Channels and the guide load automatically." },
      { q: "What if the IPTV app isn't in the Roku Channel Store?", a: "Either cast from a phone running IPTV Smarters Pro, or plug a Fire TV Stick, Apple TV or Android box into the same television for the full choice of players." },
      { q: "Does IPTV work in 4K on Roku?", a: "On 4K-capable Roku models, yes. Our streams are HEVC/H.265, and around 25 Mbps is the practical minimum for smooth 4K." },
      { q: "Is ethernet better than Wi-Fi on Roku?", a: "Yes where the model has a port. A wired connection removes the fluctuation that causes buffering, which matters most during live sport." },
    ],
    cta: "Get my Roku login",
    cover: "/blog/iptv-roku-main-en.jpg",
    image: { src: "/blog/iptv-roku-body-en.jpg", alt: "Setting up IPTV on a Roku in three steps: install a compatible player, enter your Xtream Codes login, build favourites from 66,000+ channels.", caption: "The same three steps on any Roku model." },
  },
  de: {
    metaTitle: "IPTV auf Roku einrichten — Anleitung 2026",
    metaDesc:
      "IPTV auf einem Roku schauen: welche Player funktionieren, die Einrichtung Schritt für Schritt und die Lösung, wenn eine App im Channel Store fehlt.",
    eyebrow: "IPTV auf Roku · Anleitung",
    h1: "IPTV auf Ihrem",
    h1Accent: "Roku",
    intro:
      "Roku gehört zu den verbreitetsten Streaming-Geräten — und spielt IPTV ab, allerdings anders als ein Fire TV Stick. Hier steht, wie die Einrichtung läuft und was Sie tun, wenn ein Player nicht im Channel Store ist.",
    features: [
      { h: "Für aktuelle Roku-Modelle", p: "Streaming Stick, Streambar, Roku Express und Roku-TVs spielen IPTV über einen passenden Player ab." },
      { h: "Xtream Codes oder M3U", p: "Zugangsdaten eingeben oder M3U-Link laden — Senderliste und EPG bauen sich selbst auf." },
      { h: "Screen Mirroring als Ausweg", p: "Fehlt ein Player im Store, casten Sie vom Handy oder nutzen einen HDMI-Stick." },
      { h: "4K je nach Modell", p: "4K-fähige Roku-Geräte verarbeiten unsere HEVC/H.265-Streams; 25 Mbit/s sind das praktische Minimum." },
    ],
    sections: [
      {
        h: "Wie IPTV auf Roku funktioniert",
        p: "Roku ist eine geschlossenere Plattform als Android TV oder Fire OS: Installiert wird aus dem Roku Channel Store, nicht per freiem Sideloading. IPTV läuft daher über den jeweils verfügbaren kompatiblen Player, in den Sie Ihre Xtream-Codes-Daten (Server-URL, Benutzername, Passwort) oder Ihren M3U-Link eintragen. Danach lädt der Player die vollständige Senderliste, den Programmführer sowie den Film- und Serienkatalog — dieselben 66.000+ Sender wie auf jedem anderen Gerät.",
      },
      {
        h: "Die Einrichtung Schritt für Schritt",
        p: "Verbinden Sie den Roku mit dem Netzwerk, bei Modellen mit LAN-Anschluss möglichst per Kabel. Öffnen Sie den Channel Store und installieren Sie einen IPTV-Player mit Xtream-Codes- oder M3U-Unterstützung. Starten Sie ihn und geben Sie die Zugangsdaten ein, die ATV Corner innerhalb von 5 Minuten nach der Zahlung per WhatsApp sendet. Lassen Sie den Programmführer kurz laden und legen Sie anschließend Favoriten an — bei 66.000+ Sendern ist eine eigene Liste das, was das Gerät alltagstauglich macht.",
      },
      {
        h: "Wenn kein Player verfügbar ist",
        p: "Das Roku-Angebot unterscheidet sich je nach Region, und die IPTV-Auswahl ist schmaler als bei Android. Finden Sie keinen passenden Player, haben Sie zwei verlässliche Wege. Sie können vom Handy oder Tablet mit IPTV Smarters Pro spiegeln beziehungsweise casten — das funktioniert, bindet aber das Handy. Oder Sie ergänzen ein HDMI-Gerät am selben Fernseher: Ein Amazon Fire TV Stick 4K, ein Apple TV oder eine Android-TV-Box bringt die volle Player-Auswahl mit und ist auf Dauer die bequemere Lösung.",
      },
      {
        h: "Roku im Vergleich zum Fire TV Stick",
        p: "Der ehrliche Vergleich ist hier wichtig, weil er darüber entscheidet, wie reibungslos die Einrichtung verläuft. Ein Fire TV Stick läuft unter Fire OS, einem Android-Abkömmling, und akzeptiert daher per Sideloading installierte Player — TiviMate, IBO Player und IPTV Smarters Pro stehen direkt zur Verfügung. Roku lässt das bewusst nicht zu: Installiert wird ausschließlich aus dem eigenen Channel Store, dessen IPTV-Auswahl schmaler ist und sich je nach Region unterscheidet. Roku punktet bei der Einfachheit und der Fernbedienung, Fire TV eindeutig bei der App-Auswahl. Wer bereits einen Roku besitzt, kommt mit dieser Anleitung ans Ziel. Wer ein Gerät gezielt für IPTV kauft, fährt mit einem Fire TV Stick 4K entspannter.",
      },
      {
        h: "Bandbreite, Qualität und Ihr Netzwerk",
        p: "IPTV ist ein kontinuierlicher Echtzeit-Stream ohne großen Puffer, der Schwankungen ausgleichen könnte. Deshalb zählt Gleichmäßigkeit mehr als die maximale Geschwindigkeit im Tarif. Rechnen Sie mit mindestens 10 Mbit/s für HD und 25 Mbit/s für stabiles 4K — gemessen am Roku selbst und nicht am Notebook im Nebenzimmer. Hat Ihr Modell einen LAN-Anschluss, nutzen Sie ihn: Eine Kabelverbindung nimmt genau jene Störungen und Auslastungsspitzen heraus, die den größten Teil aller Buffering-Beschwerden verursachen, und das fällt bei Live-Sport am stärksten ins Gewicht. Im WLAN sollten Sie das 5-GHz-Band wählen und den Router frei aufstellen statt in einen Schrank.",
      },
      {
        h: "Die Probleme beheben, die tatsächlich auftreten",
        p: "Drei Fälle machen den Großteil aller Support-Anfragen zu Roku aus. Lädt die Senderliste nicht, liegt es fast immer an einem einzigen falschen Zeichen in Server-URL, Benutzername oder Passwort — den Port eingeschlossen. Prüfen Sie die Eingabe Zeichen für Zeichen gegen das, was wir Ihnen gesendet haben. Ruckelt die Wiedergabe nur bei einem Sender und nicht bei anderen, starten Sie den Roku neu, bevor Sie einen größeren Fehler vermuten; Hintergrundprozesse sind bei älteren Modellen eine häufige Ursache. Zeigt der Programmführer keine Sendungstitel, aktualisieren Sie den EPG manuell in den Einstellungen und geben Sie ihm eine Minute, statt neu zu installieren.",
      },
      {
        h: "Was im Abo tatsächlich enthalten ist",
        p: "Das Gerät ist nur der Weg zum Inhalt; der Katalog ist auf jeder Hardware identisch. Das bedeutet 66.000+ Live-Sender, davon rund 4.200 Sportkanäle mit Bundesliga, Premier League, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formel 1 und MotoGP. Daneben stehen etwa 70.000 Filme und 18.000 Serien auf Abruf bereit, mit Poster und Staffel-Struktur, dazu rund 320 Kinderkanäle sowie 540 Nachrichten- und Dokumentationssender. Alles wird in HEVC/H.265 mit adaptiver Bitrate ausgeliefert, und dieselben Zugangsdaten funktionieren auf Ihren übrigen Geräten, ohne dass Sie erneut etwas kaufen müssen.",
      },
      {
        h: "Support, Garantie und der Test vorab",
        p: "Weil die App-Lage bei Roku je nach Region schwankt, ist ein Test vor dem Kauf hier wirklich nützlich und keine Formsache. Der kostenlose 24-Stunden-Test läuft ohne Kreditkarte und erlaubt Ihnen, vorab zu prüfen, ob in Ihrem eigenen Channel Store ein passender Player verfügbar ist, bevor Sie sich auf eine Laufzeit festlegen. Ist das nicht der Fall, sagt Ihnen unser Support das offen und verweist auf den HDMI-Weg. Nachrichten auf WhatsApp werden in unter fünf Minuten beantwortet, auch schon vor dem Kauf, und zusätzlich zum Test gilt für jedes Abo eine siebentägige Geld-zurück-Garantie.",
      },
    ],
    faq: [
      { q: "Kann ich IPTV auf einem Roku schauen?", a: "Ja, über einen IPTV-Player aus dem Roku Channel Store, der Xtream Codes oder M3U unterstützt. Roku ist geschlossener als Android TV, die Auswahl also schmaler — die Zugangsdaten funktionieren aber gleich." },
      { q: "Wie richte ich IPTV auf Roku ein?", a: "Installieren Sie einen kompatiblen IPTV-Player aus dem Channel Store, öffnen Sie ihn und geben Sie Server-URL, Benutzername und Passwort von ATV Corner ein — oder Ihren M3U-Link. Sender und Guide laden automatisch." },
      { q: "Was tun, wenn die IPTV-App nicht im Roku Store ist?", a: "Entweder vom Handy mit IPTV Smarters Pro casten, oder einen Fire TV Stick, Apple TV oder eine Android-Box an denselben Fernseher anschließen." },
      { q: "Funktioniert IPTV in 4K auf Roku?", a: "Auf 4K-fähigen Roku-Modellen ja. Unsere Streams laufen in HEVC/H.265, rund 25 Mbit/s sind das praktische Minimum für flüssiges 4K." },
      { q: "Ist LAN besser als WLAN am Roku?", a: "Ja, sofern das Modell einen Anschluss hat. Eine Kabelverbindung nimmt die Schwankungen heraus, die Buffering verursachen — besonders relevant bei Live-Sport." },
    ],
    cta: "Zugangsdaten für Roku holen",
    cover: "/blog/iptv-roku-main-de.jpg",
    image: { src: "/blog/iptv-roku-body-de.jpg", alt: "IPTV auf einem Roku in drei Schritten einrichten: kompatiblen Player installieren, Xtream-Codes-Daten eingeben, Favoriten aus 66.000+ Sendern anlegen.", caption: "Dieselben drei Schritte auf jedem Roku-Modell." },
  },
  fr: {
    metaTitle: "IPTV sur Roku — comment l'installer (guide 2026)",
    metaDesc:
      "Regarder l'IPTV sur un Roku : quels lecteurs fonctionnent, l'installation pas à pas et la solution quand une application manque au Channel Store.",
    eyebrow: "IPTV sur Roku · Guide",
    h1: "L'IPTV sur votre",
    h1Accent: "Roku",
    intro:
      "Le Roku est l'un des appareils de streaming les plus répandus — et il lit l'IPTV, mais pas de la même façon qu'un Fire TV Stick. Voici comment l'installer, et la solution fiable quand un lecteur manque au Channel Store.",
    features: [
      { h: "Compatible modèles récents", p: "Streaming Stick, Streambar, Roku Express et téléviseurs Roku lisent l'IPTV via un lecteur compatible." },
      { h: "Xtream Codes ou M3U", p: "Saisissez les identifiants envoyés ou chargez votre lien M3U — chaînes et EPG se construisent seuls." },
      { h: "Recours par recopie d'écran", p: "Si aucun lecteur n'est disponible, diffusez depuis un téléphone ou ajoutez une clé HDMI." },
      { h: "4K selon le modèle", p: "Les Roku 4K gèrent nos flux HEVC/H.265 ; 25 Mbps constituent le minimum pratique." },
    ],
    sections: [
      {
        h: "Comment l'IPTV fonctionne sur Roku",
        p: "Roku est une plateforme plus fermée qu'Android TV ou Fire OS : on installe depuis le Roku Channel Store, sans sideloading libre. L'IPTV passe donc par le lecteur compatible disponible dans votre région, dans lequel vous saisissez vos identifiants Xtream Codes (URL du serveur, nom d'utilisateur, mot de passe) ou votre lien M3U. Le lecteur récupère ensuite la liste complète des chaînes, le guide des programmes et le catalogue de films et séries — les mêmes 66 000+ chaînes que sur n'importe quel autre appareil.",
      },
      {
        h: "L'installation pas à pas",
        p: "Reliez le Roku au réseau, de préférence par câble sur les modèles dotés d'un port. Ouvrez le Channel Store et installez un lecteur IPTV compatible Xtream Codes ou M3U. Lancez-le et saisissez les identifiants qu'ATV Corner envoie par WhatsApp dans les 5 minutes suivant le paiement. Laissez le guide se charger, puis créez une liste de favoris — parmi 66 000+ chaînes, c'est ce qui rend l'appareil utilisable au quotidien.",
      },
      {
        h: "Quand aucun lecteur n'est disponible",
        p: "L'offre Roku varie selon les régions et son choix d'applications IPTV est plus restreint que sur Android. Si vous ne trouvez pas de lecteur adapté, deux solutions fiables s'offrent à vous. Vous pouvez diffuser depuis un téléphone ou une tablette avec IPTV Smarters Pro — cela fonctionne mais mobilise le téléphone. Ou vous ajoutez un appareil HDMI sur le même téléviseur : un Amazon Fire TV Stick 4K, une Apple TV ou une box Android TV offre tout le choix de lecteurs et reste la solution la plus confortable à long terme.",
      },
      {
        h: "Roku face au Fire TV Stick pour l'IPTV",
        p: "La comparaison honnête compte ici, car elle détermine la fluidité de votre installation. Un Fire TV Stick tourne sous Fire OS, un dérivé d'Android, et accepte donc les lecteurs installés manuellement : TiviMate, IBO Player et IPTV Smarters Pro sont directement accessibles. Roku ne l'autorise volontairement pas : tout s'installe depuis son propre Channel Store, dont la sélection IPTV est plus restreinte et varie selon les régions. Roku l'emporte sur la simplicité et la télécommande, Fire TV nettement sur le choix d'applications. Si vous possédez déjà un Roku, ce guide vous mène au but. Si vous achetez un appareil spécifiquement pour l'IPTV, un Fire TV Stick 4K sera moins frustrant.",
      },
      {
        h: "Débit, qualité et votre réseau",
        p: "L'IPTV est un flux continu en temps réel, sans gros tampon pour absorber les creux : la régularité compte donc davantage que la vitesse annoncée. Prévoyez au moins 10 Mbps pour la HD et 25 Mbps pour une 4K stable, mesurés sur le Roku lui-même et non sur un portable dans une autre pièce. Si votre modèle dispose d'un port ethernet, utilisez-le : une connexion filaire supprime précisément les interférences et les saturations à l'origine de la plupart des plaintes de buffering, ce qui pèse surtout lors du sport en direct. En Wi-Fi, privilégiez la bande 5 GHz et placez le routeur à découvert plutôt que dans un meuble.",
      },
      {
        h: "Résoudre les problèmes qui surviennent vraiment",
        p: "Trois cas représentent l'essentiel des demandes de support concernant Roku. Si la liste des chaînes refuse de charger, la cause est presque toujours un seul caractère erroné dans l'URL du serveur, le nom d'utilisateur ou le mot de passe — port compris. Vérifiez la saisie caractère par caractère face à ce que nous vous avons envoyé. Si la lecture saccade sur une chaîne mais pas sur les autres, redémarrez le Roku avant de supposer une panne plus large ; les processus en arrière-plan sont fréquents sur les modèles anciens. Si le guide n'affiche aucun titre, actualisez l'EPG manuellement dans les réglages et laissez-lui une minute plutôt que de réinstaller.",
      },
      {
        h: "Ce que l'abonnement contient réellement",
        p: "L'appareil n'est que le moyen d'accès ; le catalogue reste identique quel que soit le matériel. Cela représente 66 000+ chaînes en direct, dont environ 4 200 chaînes sport couvrant Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League, NBA, NFL, UFC, Formule 1 et MotoGP. S'y ajoutent quelque 70 000 films et 18 000 séries à la demande, avec affiches et structure par saisons, ainsi qu'environ 320 chaînes jeunesse et 540 chaînes d'information et de documentaires. Tout est encodé en HEVC/H.265 avec bitrate adaptatif, et les mêmes identifiants fonctionnent sur vos autres appareils sans nouvel achat.",
      },
      {
        h: "Support, garantie et test préalable",
        p: "Comme la disponibilité des applications Roku varie selon les régions, tester avant de payer est ici réellement utile et non une simple formalité. L'essai gratuit de 24 heures fonctionne sans carte bancaire et vous permet de vérifier qu'un lecteur adapté existe dans votre propre Channel Store avant de vous engager sur une durée. Si ce n'est pas le cas, notre support vous le dira franchement et vous orientera vers la solution HDMI. Les messages sur WhatsApp reçoivent une réponse en moins de cinq minutes, y compris avant l'achat, et chaque formule bénéficie en plus d'une garantie satisfait ou remboursé de sept jours.",
      },
    ],
    faq: [
      { q: "Puis-je regarder l'IPTV sur un Roku ?", a: "Oui, via un lecteur IPTV du Roku Channel Store compatible Xtream Codes ou M3U. Roku étant plus fermé qu'Android TV, le choix est plus restreint, mais les identifiants fonctionnent de la même façon." },
      { q: "Comment installer l'IPTV sur Roku ?", a: "Installez un lecteur IPTV compatible depuis le Channel Store, ouvrez-le et saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe envoyés par ATV Corner — ou votre lien M3U." },
      { q: "Que faire si l'application IPTV n'est pas dans le Channel Store ?", a: "Diffusez depuis un téléphone avec IPTV Smarters Pro, ou branchez un Fire TV Stick, une Apple TV ou une box Android sur le même téléviseur." },
      { q: "L'IPTV fonctionne-t-elle en 4K sur Roku ?", a: "Sur les modèles Roku compatibles 4K, oui. Nos flux sont en HEVC/H.265 et environ 25 Mbps constituent le minimum pratique pour une 4K fluide." },
      { q: "Le câble est-il préférable au Wi-Fi sur Roku ?", a: "Oui lorsque le modèle dispose d'un port. Une connexion filaire supprime les variations à l'origine du buffering, ce qui compte surtout pour le sport en direct." },
    ],
    cta: "Obtenir mes identifiants Roku",
    cover: "/blog/iptv-roku-main-fr.jpg",
    image: { src: "/blog/iptv-roku-body-fr.jpg", alt: "Installer l'IPTV sur un Roku en trois étapes : installer un lecteur compatible, saisir vos identifiants Xtream Codes, créer des favoris parmi 66 000+ chaînes.", caption: "Les mêmes trois étapes sur tout modèle Roku." },
  },
};

// =============================================================================
// /iptv-usa — "iptv usa" (2,900/mo, KD 0, commercial, +24% YoY)
// =============================================================================
content["iptv-usa"] = {
  en: {
    metaTitle: "IPTV USA — 66,000+ Channels, NFL & NBA in 4K from $5/mo",
    metaDesc:
      "IPTV for the USA: every major American network, NFL, NBA, MLB and NHL, plus 66,000+ international channels in 4K/8K. No contract,active in 5 minutes, from $5/mo.",
    eyebrow: "IPTV USA · From $5/mo",
    h1: "IPTV for the",
    h1Accent: "United States",
    intro:
      "American networks, live NFL, NBA, MLB and NHL, and 66,000+ international channels in one subscription — streamed over your existing internet connection in 4K/8K, with no cable contract and no rented box. Activated in under 5 minutes, from $5/mo.",
    cover: "/blog/iptv-usa-main-en.jpg",
    image: {
      src: "/blog/iptv-usa-body-en.jpg",
      alt: "What an IPTV subscription replaces in a US household: cable box, sports add-on packages and separate streaming services.",
      caption: "One subscription in place of a cable package plus its paid sports add-ons.",
    },
    features: [
      { h: "American networks", p: "National and regional channels, news, entertainment and kids, without a cable contract." },
      { h: "NFL, NBA, MLB, NHL", p: "Around 4,200 sport channels covering the major US leagues plus MLS, UFC and Formula 1." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 with adaptive bitrate, so fast motion in sport stays clean." },
      { h: "From $5/mo", p: "1, 3, 6 and 12-month plans, no contract and a 7-day money-back guarantee." },
    ],
    sections: [
      { h: "Why American households are dropping cable", p: "A US cable or satellite package typically runs $45 to $110 a month once the box rental, the HD surcharge and the sports tier are added, and it usually locks you in for a year or two. IPTV inverts that arithmetic: the same living room, the same television, but the signal arrives over the internet connection you already pay for. At ATV Corner that means 66,000+ channels and a library of 70,000+ films and 18,000+ series from $5/mo, with nothing to install on the wall and no contract to exit later." },
      { h: "Live sport without the add-on tiers", p: "Sport is where cable bills quietly inflate, because the leagues most people actually watch sit behind a premium tier that is sold separately. Around 4,200 sport channels are included here by default — NFL, NBA, MLB, NHL and MLS, alongside international coverage of the Premier League, La Liga, Serie A, Bundesliga, Ligue 1, the Champions League, UFC, Formula 1 and MotoGP. If you follow a league that plays overseas, that international layer is usually the part a domestic package cannot match at any price." },
      { h: "Which devices work in a US home", p: "Almost certainly one you already own. Samsung and LG smart televisions, Sony, TCL and Hisense sets running Android TV or Google TV, the Amazon Fire TV Stick, Apple TV, MAG boxes, Enigma2 receivers, iPhones, iPads, Android phones and tablets, and computers on Windows, macOS and Linux all work. The playback app is your choice: TiviMate, IBO Player and IPTV Smarters Pro are the established options, and VLC handles a plain M3U link." },
      { h: "The bandwidth you actually need", p: "This matters more than most providers admit, because an IPTV stream is continuous and real-time with no large buffer to smooth over dips. Plan on roughly 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the device you watch on rather than on a laptop in another room. Consistency beats peak speed: a steady 30 Mbps line delivers a better picture than an erratic 200 Mbps one, which is why a wired connection is worth using wherever the device offers a port." },
      { h: "How activation works", p: "There is no technician and no appointment. You pick a term, complete payment, and your credentials arrive on WhatsApp within five minutes — either an Xtream Codes trio of server URL, username and password, or an M3U link. You enter those once into your chosen app, and it loads the full channel list, a multi-day programme guide and the film and series catalogue on its own. Most people are watching inside ten minutes of deciding to subscribe." },
      { h: "Time zones, regional feeds and the guide", p: "The United States spans several time zones, and a channel list that ignores that is frustrating to live with. The programme guide arrives populated so you can see what is on now and later rather than scrolling blind, and the catalogue carries both national feeds and international channels for viewers who want programming from elsewhere. The single most useful thing you can do after setup is build a favourites list — curating your own selection out of 66,000+ channels is what turns a large catalogue into something usable every evening." },
      { h: "What it costs against what you pay now", p: "Add up an honest month of cable: the base package, the box rental, the HD fee, the sports tier and any second box for another room. Plenty of American households land between $60 and $90. An ATV Corner annual plan is $65 — for twelve months, not one. The monthly plan is $16, three months $33, six months $55. Every term carries the same catalogue, the same 4K/8K quality and the same 24/7 support; the only variable is the cost per month." },
      { h: "Test it before you cancel anything", p: "Because IPTV runs over your internet line rather than the coaxial socket, it works in parallel with whatever you have now. That makes the sensible order obvious: start a free 24-hour trial, run it alongside your current service for a week or two — deliberately including prime time and a live game, since that is when server capacity shows itself — and only then decide. No credit card is needed for the trial, and every paid plan carries a 7-day money-back guarantee on top." },
    ],
    faq: [
      { q: "Does IPTV work anywhere in the USA?", a: "Yes. It runs over your internet connection rather than a cable line, so location only matters insofar as your broadband is stable. Plan on 10 Mbps for HD and 25 Mbps for smooth 4K." },
      { q: "Can I watch NFL and NBA games?", a: "Yes. Around 4,200 sport channels are included, covering NFL, NBA, MLB, NHL and MLS alongside international leagues — without the paid sports tier a cable package would charge for." },
      { q: "How much does IPTV cost in the USA?", a: "Plans start at $16 for one month and drop to about $5/mo on the annual $65 plan. Every plan includes 66,000+ channels, 4K/8K quality and 24/7 support." },
      { q: "Do I need a cable box or a technician?", a: "Neither. A Smart TV, Fire TV Stick, Apple TV, phone, tablet or computer is enough, and setup is remote — your credentials arrive on WhatsApp in under 5 minutes." },
      { q: "Can I try it before subscribing?", a: "Yes. A free 24-hour trial runs without a credit card and works alongside your existing service, so you can compare directly before cancelling anything." },
    ],
    cta: "Start my US subscription",
  },
  de: {
    metaTitle: "IPTV USA — 66.000+ Sender, NFL & NBA in 4K ab 5 €/Monat",
    metaDesc:
      "IPTV für die USA: amerikanische Sender, NFL, NBA, MLB und NHL sowie 66.000+ internationale Programme in 4K/8K. Ohne Vertrag, in 5 Minuten aktiv, ab 5 €/Monat.",
    eyebrow: "IPTV USA · Ab 5 €/Monat",
    h1: "IPTV für die",
    h1Accent: "USA",
    intro:
      "Amerikanische Sender, NFL, NBA, MLB und NHL live sowie 66.000+ internationale Programme in einem Abo — über Ihre bestehende Internetverbindung in 4K/8K, ohne Kabelvertrag und ohne Mietreceiver. In unter 5 Minuten aktiv, ab 5 €/Monat.",
    cover: "/blog/iptv-usa-main-de.jpg",
    image: {
      src: "/blog/iptv-usa-body-de.jpg",
      alt: "Was ein IPTV-Abo in einem US-Haushalt ersetzt: Kabelreceiver, kostenpflichtige Sportpakete und einzelne Streamingdienste.",
      caption: "Ein Abo statt Kabelpaket plus kostenpflichtiger Sport-Zusatzpakete.",
    },
    features: [
      { h: "Amerikanische Sender", p: "Nationale und regionale Programme, News, Unterhaltung und Kinderkanäle — ohne Kabelvertrag." },
      { h: "NFL, NBA, MLB, NHL", p: "Rund 4.200 Sportkanäle mit den großen US-Ligen sowie MLS, UFC und Formel 1." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 mit adaptiver Bitrate — auch schnelle Bewegungen im Sport bleiben sauber." },
      { h: "Ab 5 €/Monat", p: "Laufzeiten von 1, 3, 6 und 12 Monaten, ohne Vertragsbindung, mit 7 Tagen Geld-zurück-Garantie." },
    ],
    sections: [
      { h: "Warum US-Haushalte das Kabel kündigen", p: "Ein amerikanisches Kabel- oder Satellitenpaket kostet mit Receiver-Miete, HD-Aufpreis und Sportstufe typischerweise 45 bis 110 Dollar im Monat und bindet meist für ein bis zwei Jahre. IPTV dreht diese Rechnung um: dasselbe Wohnzimmer, derselbe Fernseher, aber das Signal kommt über die Internetleitung, die Sie ohnehin bezahlen. Bei ATV Corner sind das 66.000+ Sender und eine Bibliothek mit 70.000+ Filmen und 18.000+ Serien ab 5 €/Monat — ohne Installation an der Wand und ohne Vertrag, aus dem man später wieder herauskommen muss." },
      { h: "Live-Sport ohne kostenpflichtige Zusatzstufen", p: "Beim Sport wachsen Kabelrechnungen still an, weil ausgerechnet die Ligen, die die meisten wirklich schauen, in einer separat verkauften Premiumstufe liegen. Hier sind rund 4.200 Sportkanäle standardmäßig enthalten — NFL, NBA, MLB, NHL und MLS, dazu internationale Übertragungen von Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League, UFC, Formel 1 und MotoGP. Wer eine Liga verfolgt, die im Ausland spielt, findet genau in dieser internationalen Ebene das, was ein rein nationales Paket zu keinem Preis bietet." },
      { h: "Welche Geräte in einem US-Haushalt funktionieren", p: "Mit hoher Wahrscheinlichkeit eines, das Sie schon besitzen. Smart TVs von Samsung und LG, Geräte von Sony, TCL und Hisense unter Android TV oder Google TV, der Amazon Fire TV Stick, Apple TV, MAG-Boxen, Enigma2-Receiver, iPhones, iPads, Android-Handys und -Tablets sowie Computer unter Windows, macOS und Linux funktionieren alle. Die Abspiel-App wählen Sie selbst: TiviMate, IBO Player und IPTV Smarters Pro sind die etablierten Optionen, VLC verarbeitet einen einfachen M3U-Link." },
      { h: "Die Bandbreite, die Sie wirklich brauchen", p: "Dieser Punkt ist wichtiger, als die meisten Anbieter zugeben, denn ein IPTV-Stream läuft kontinuierlich in Echtzeit und hat keinen großen Puffer, der Einbrüche ausgleicht. Rechnen Sie mit etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen auf dem Gerät, auf dem Sie schauen, und nicht auf einem Notebook im Nebenzimmer. Gleichmäßigkeit schlägt Spitzengeschwindigkeit: Eine stabile 30-Mbit-Leitung liefert ein besseres Bild als eine schwankende 200-Mbit-Leitung — weshalb sich eine Kabelverbindung überall dort lohnt, wo das Gerät einen Anschluss bietet." },
      { h: "Wie die Aktivierung abläuft", p: "Es gibt keinen Techniker und keinen Termin. Sie wählen eine Laufzeit, schließen die Zahlung ab, und Ihre Zugangsdaten kommen innerhalb von fünf Minuten per WhatsApp — entweder als Xtream-Codes-Trio aus Server-URL, Benutzername und Passwort oder als M3U-Link. Diese tragen Sie einmal in die gewünschte App ein, die daraufhin selbstständig die vollständige Senderliste, einen mehrtägigen Programmführer sowie den Film- und Serienkatalog lädt. Die meisten schauen zehn Minuten nach der Kaufentscheidung." },
      { h: "Zeitzonen, Regionalsender und der Programmführer", p: "Die USA erstrecken sich über mehrere Zeitzonen, und eine Senderliste, die das ignoriert, ist im Alltag mühsam. Der Programmführer kommt gefüllt an, sodass Sie sehen, was jetzt und später läuft, statt blind zu scrollen. Der Katalog enthält sowohl nationale Feeds als auch internationale Sender für alle, die Programme von anderswo sehen möchten. Das Nützlichste nach der Einrichtung ist eine Favoritenliste — aus 66.000+ Sendern eine eigene Auswahl zu bauen, macht aus einem großen Katalog etwas, das man jeden Abend gern benutzt." },
      { h: "Was es kostet — gegen das, was Sie heute zahlen", p: "Rechnen Sie einen ehrlichen Kabelmonat zusammen: Grundpaket, Receiver-Miete, HD-Gebühr, Sportstufe und ein etwaiger Zweitreceiver für ein anderes Zimmer. Viele amerikanische Haushalte landen zwischen 60 und 90 Dollar. Ein ATV Corner Jahresabo kostet 60 € — für zwölf Monate, nicht für einen. Der Monatstarif liegt bei 15 €, drei Monate bei 30 €, sechs Monate bei 50 €. Jede Laufzeit enthält denselben Katalog, dieselbe 4K/8K-Qualität und denselben 24/7-Support; die einzige Variable ist der Preis pro Monat." },
      { h: "Testen, bevor Sie irgendetwas kündigen", p: "Weil IPTV über Ihre Internetleitung läuft und nicht über die Koaxdose, funktioniert es parallel zu dem, was Sie heute haben. Damit ist die sinnvolle Reihenfolge offensichtlich: Starten Sie einen kostenlosen 24-Stunden-Test, lassen Sie ihn ein bis zwei Wochen neben dem bestehenden Dienst laufen — bewusst inklusive Prime Time und eines Live-Spiels, denn dann zeigt sich die Serverkapazität — und entscheiden Sie erst danach. Für den Test ist keine Kreditkarte nötig, und auf jedes bezahlte Abo kommt zusätzlich eine 7-tägige Geld-zurück-Garantie." },
    ],
    faq: [
      { q: "Funktioniert IPTV überall in den USA?", a: "Ja. Es läuft über Ihre Internetverbindung statt über eine Kabelleitung; der Standort spielt nur insofern eine Rolle, als Ihr Anschluss stabil sein muss. Rechnen Sie mit 10 Mbit/s für HD und 25 Mbit/s für flüssiges 4K." },
      { q: "Kann ich NFL- und NBA-Spiele sehen?", a: "Ja. Rund 4.200 Sportkanäle sind enthalten und decken NFL, NBA, MLB, NHL und MLS sowie internationale Ligen ab — ohne die kostenpflichtige Sportstufe, die ein Kabelpaket berechnen würde." },
      { q: "Was kostet IPTV für die USA?", a: "Die Abos starten bei 15 € für einen Monat und sinken auf etwa 5 €/Monat im Jahresabo für 60 €. Jedes Abo enthält 66.000+ Sender, 4K/8K-Qualität und 24/7-Support." },
      { q: "Brauche ich einen Kabelreceiver oder einen Techniker?", a: "Weder noch. Ein Smart TV, Fire TV Stick, Apple TV, Handy, Tablet oder Computer genügt, und die Einrichtung erfolgt aus der Ferne — die Zugangsdaten kommen in unter 5 Minuten per WhatsApp." },
      { q: "Kann ich vor dem Abo testen?", a: "Ja. Ein kostenloser 24-Stunden-Test läuft ohne Kreditkarte und funktioniert parallel zu Ihrem bestehenden Dienst, sodass Sie direkt vergleichen können, bevor Sie etwas kündigen." },
    ],
    cta: "US-Abo starten",
  },
  fr: {
    metaTitle: "IPTV USA — 66 000+ chaînes, NFL & NBA en 4K dès 5 €/mois",
    metaDesc:
      "IPTV pour les États-Unis : chaînes américaines, NFL, NBA, MLB et NHL, plus 66 000+ chaînes internationales en 4K/8K. Sans engagement, actif en 5 minutes, dès 5 €/mois.",
    eyebrow: "IPTV USA · Dès 5 €/mois",
    h1: "L'IPTV pour les",
    h1Accent: "États-Unis",
    intro:
      "Les chaînes américaines, la NFL, la NBA, la MLB et la NHL en direct, et 66 000+ chaînes internationales dans un seul abonnement — diffusées via votre connexion internet existante en 4K/8K, sans contrat câble ni décodeur en location. Actif en moins de 5 minutes, dès 5 €/mois.",
    cover: "/blog/iptv-usa-main-fr.jpg",
    image: {
      src: "/blog/iptv-usa-body-fr.jpg",
      alt: "Ce qu'un abonnement IPTV remplace dans un foyer américain : décodeur câble, bouquets sport payants et services de streaming séparés.",
      caption: "Un abonnement à la place d'un bouquet câble et de ses options sport payantes.",
    },
    features: [
      { h: "Chaînes américaines", p: "Programmes nationaux et régionaux, info, divertissement et jeunesse — sans contrat câble." },
      { h: "NFL, NBA, MLB, NHL", p: "Environ 4 200 chaînes sport couvrant les grandes ligues US ainsi que MLS, UFC et Formule 1." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 avec bitrate adaptatif : les mouvements rapides du sport restent nets." },
      { h: "Dès 5 €/mois", p: "Formules 1, 3, 6 et 12 mois, sans engagement, avec garantie satisfait ou remboursé 7 jours." },
    ],
    sections: [
      { h: "Pourquoi les foyers américains quittent le câble", p: "Un bouquet câble ou satellite américain revient généralement à 45 à 110 dollars par mois une fois ajoutés la location du décodeur, le supplément HD et l'option sport, et il engage le plus souvent sur un à deux ans. L'IPTV renverse ce calcul : le même salon, le même téléviseur, mais le signal arrive par la connexion internet que vous payez déjà. Chez ATV Corner, cela représente 66 000+ chaînes et une bibliothèque de 70 000+ films et 18 000+ séries dès 5 €/mois, sans installation murale ni contrat dont il faudra sortir plus tard." },
      { h: "Le sport en direct sans options payantes", p: "C'est sur le sport que les factures câble gonflent discrètement, car les ligues que la plupart des gens regardent vraiment se trouvent dans une offre premium vendue séparément. Ici, environ 4 200 chaînes sport sont incluses par défaut — NFL, NBA, MLB, NHL et MLS, aux côtés des retransmissions internationales de Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League, UFC, Formule 1 et MotoGP. Si vous suivez un championnat joué à l'étranger, cette couche internationale est précisément ce qu'un bouquet national ne propose à aucun prix." },
      { h: "Quels appareils fonctionnent dans un foyer américain", p: "Très probablement un que vous possédez déjà. Les Smart TV Samsung et LG, les téléviseurs Sony, TCL et Hisense sous Android TV ou Google TV, l'Amazon Fire TV Stick, l'Apple TV, les MAG box, les récepteurs Enigma2, iPhone, iPad, téléphones et tablettes Android, ainsi que les ordinateurs sous Windows, macOS et Linux fonctionnent tous. L'application de lecture est votre choix : TiviMate, IBO Player et IPTV Smarters Pro sont les options établies, et VLC gère un simple lien M3U." },
      { h: "Le débit réellement nécessaire", p: "Ce point compte plus que la plupart des fournisseurs ne l'admettent, car un flux IPTV est continu et en temps réel, sans gros tampon pour absorber les creux. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil où vous regardez et non sur un portable dans une autre pièce. La régularité prime sur la vitesse de pointe : une ligne stable à 30 Mbps donne une meilleure image qu'une ligne instable à 200 Mbps, d'où l'intérêt d'une connexion filaire partout où l'appareil dispose d'un port." },
      { h: "Comment se passe l'activation", p: "Aucun technicien, aucun rendez-vous. Vous choisissez une durée, réglez le paiement, et vos identifiants arrivent en moins de cinq minutes par WhatsApp — soit un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit un lien M3U. Vous les saisissez une seule fois dans l'application choisie, qui charge ensuite d'elle-même la liste complète des chaînes, un guide des programmes sur plusieurs jours et le catalogue de films et séries. La plupart des gens regardent dix minutes après avoir décidé." },
      { h: "Fuseaux horaires, chaînes régionales et guide", p: "Les États-Unis s'étendent sur plusieurs fuseaux horaires, et une liste de chaînes qui l'ignore devient pénible au quotidien. Le guide des programmes arrive rempli, ce qui vous permet de voir ce qui passe maintenant et plus tard plutôt que de faire défiler à l'aveugle. Le catalogue comprend à la fois des flux nationaux et des chaînes internationales pour ceux qui veulent des programmes d'ailleurs. La chose la plus utile après l'installation reste de créer une liste de favoris : se constituer une sélection parmi 66 000+ chaînes transforme un grand catalogue en quelque chose d'agréable chaque soir." },
      { h: "Ce que cela coûte face à ce que vous payez", p: "Additionnez honnêtement un mois de câble : bouquet de base, location du décodeur, supplément HD, option sport et éventuel second décodeur pour une autre pièce. Beaucoup de foyers américains se situent entre 60 et 90 dollars. Un abonnement annuel ATV Corner coûte 60 € — pour douze mois, pas pour un. La formule mensuelle est à 15 €, trois mois à 30 €, six mois à 50 €. Chaque durée inclut le même catalogue, la même qualité 4K/8K et le même support 24/7 ; la seule variable est le coût mensuel." },
      { h: "Testez avant de résilier quoi que ce soit", p: "Comme l'IPTV passe par votre ligne internet et non par la prise coaxiale, elle fonctionne en parallèle de ce que vous avez aujourd'hui. L'ordre logique s'impose donc : lancez un essai gratuit de 24 heures, faites-le tourner une à deux semaines à côté de votre service actuel — en incluant délibérément les heures de pointe et un match en direct, car c'est là que la capacité serveur se révèle — puis décidez seulement ensuite. Aucune carte bancaire n'est requise pour l'essai, et chaque formule payante s'accompagne en plus d'une garantie de 7 jours." },
    ],
    faq: [
      { q: "L'IPTV fonctionne-t-elle partout aux États-Unis ?", a: "Oui. Elle passe par votre connexion internet plutôt que par une ligne câble ; l'emplacement ne compte que dans la mesure où votre débit doit être stable. Prévoyez 10 Mbps pour la HD et 25 Mbps pour une 4K fluide." },
      { q: "Puis-je regarder les matchs de NFL et de NBA ?", a: "Oui. Environ 4 200 chaînes sport sont incluses, couvrant NFL, NBA, MLB, NHL et MLS ainsi que les championnats internationaux — sans l'option sport payante qu'un bouquet câble facturerait." },
      { q: "Combien coûte l'IPTV pour les États-Unis ?", a: "Les formules démarrent à 15 € pour un mois et descendent à environ 5 €/mois avec l'abonnement annuel à 60 €. Chaque formule inclut 66 000+ chaînes, la qualité 4K/8K et le support 24/7." },
      { q: "Faut-il un décodeur câble ou un technicien ?", a: "Ni l'un ni l'autre. Une Smart TV, un Fire TV Stick, une Apple TV, un téléphone, une tablette ou un ordinateur suffit, et l'installation se fait à distance — vos identifiants arrivent en moins de 5 minutes par WhatsApp." },
      { q: "Puis-je essayer avant de m'abonner ?", a: "Oui. Un essai gratuit de 24 heures fonctionne sans carte bancaire et en parallèle de votre service existant, ce qui permet de comparer directement avant de résilier quoi que ce soit." },
    ],
    cta: "Démarrer mon abonnement US",
  },
};

// =============================================================================
// /iptv-apple-tv — "iptv apple tv" (DE 170/mo KD 1, commercial)
// =============================================================================
content["iptv-apple-tv"] = {
  de: {
    metaTitle: "IPTV auf Apple TV — Einrichten in 5 Minuten, 66.000+ Sender",
    metaDesc:
      "IPTV auf Apple TV: 66.000+ Sender in 4K/8K über eine App aus dem App Store. Einrichtung in 5 Minuten mit Xtream Codes, ohne Jailbreak, ab 5 €/Monat.",
    eyebrow: "IPTV Apple TV · Ab 5 €/Monat",
    h1: "IPTV auf",
    h1Accent: "Apple TV",
    intro:
      "Das Apple TV ist eines der stabilsten Geräte für IPTV: genug Rechenleistung für 4K in HEVC, ein Ethernet-Anschluss an den größeren Modellen und Apps direkt aus dem App Store — kein Sideloading nötig. Einrichtung in unter 5 Minuten, ab 5 €/Monat.",
    cover: "/blog/iptv-apple-tv-main-de.jpg",
    image: {
      src: "/blog/iptv-apple-tv-body-de.jpg",
      alt: "IPTV auf Apple TV einrichten: App installieren, Xtream-Codes-Daten eingeben, Senderliste lädt automatisch.",
      caption: "Drei Schritte vom App Store bis zur vollständigen Senderliste.",
    },
    features: [
      { h: "Apps aus dem App Store", p: "Kein Sideloading, kein Jailbreak — der Player wird regulär installiert." },
      { h: "4K ohne Ruckeln", p: "Der Apple-Chip dekodiert HEVC/H.265 souverän, auch bei schnellem Sport." },
      { h: "Ethernet möglich", p: "Die größeren Modelle haben einen LAN-Anschluss — die stabilste Verbindung überhaupt." },
      { h: "In 5 Minuten aktiv", p: "Xtream-Codes-Daten per WhatsApp, einmal eingeben, fertig." },
    ],
    sections: [
      { h: "Warum Apple TV für IPTV gut funktioniert", p: "Viele Streaming-Geräte scheitern nicht am Netzwerk, sondern an der Rechenleistung: Sobald 4K-Material in HEVC/H.265 ankommt, geraten schwache Prozessoren ins Stocken. Genau hier liegt die Stärke des Apple TV. Der verbaute Chip dekodiert diesen Codec ohne Mühe, auch wenn im Hintergrund noch andere Apps laufen. Dazu kommt ein Vorteil, den die meisten Sticks nicht bieten: Die größeren Modelle besitzen einen Ethernet-Anschluss, und eine Kabelverbindung beseitigt genau jene Störungen, die den größten Teil aller Buffering-Beschwerden verursachen." },
      { h: "Die Einrichtung Schritt für Schritt", p: "Öffnen Sie den App Store auf dem Apple TV und installieren Sie einen IPTV-Player — IPTV Smarters Pro und IBO Player sind dort regulär verfügbar. Beim ersten Start wählen Sie die Anmeldung über die Xtream Codes API und tragen Server-URL, Benutzername und Passwort ein, die wir Ihnen nach dem Abo per WhatsApp senden. Die App lädt daraufhin selbstständig die Senderliste, den Programmführer über mehrere Tage sowie den Film- und Serienkatalog. Ein Computer wird zu keinem Zeitpunkt gebraucht, und es ist kein Jailbreak nötig." },
      { h: "Kein Sideloading — der entscheidende Unterschied", p: "Auf einem Fire TV Stick installiert man Player über den Umweg Downloader und muss dafür die Installation unbekannter Apps erlauben. Auf dem Apple TV entfällt dieser Schritt vollständig: Die Player liegen im offiziellen App Store und aktualisieren sich wie jede andere App. Das macht die Einrichtung nicht nur schneller, sondern auch dauerhaft wartungsärmer, weil nach einem Systemupdate nichts erneut freigeschaltet werden muss. Für Haushalte, in denen nicht jeder technisch versiert ist, ist das der praktisch wichtigste Unterschied." },
      { h: "Netzwerk: Kabel schlägt WLAN", p: "Wenn Ihr Modell einen LAN-Anschluss hat, nutzen Sie ihn. Ein IPTV-Stream läuft kontinuierlich in Echtzeit und hat keinen großen Puffer, der Schwankungen ausgleicht — deshalb zählt Gleichmäßigkeit mehr als die Höchstgeschwindigkeit im Tarif. Rechnen Sie mit rund 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen am Apple TV selbst und nicht am Notebook im Nebenzimmer. Bleiben Sie im WLAN, wählen Sie das 5-GHz-Band und stellen Sie den Router frei auf, nicht in einen Schrank oder hinter den Fernseher." },
      { h: "Welche App auf dem Apple TV", p: "IPTV Smarters Pro ist der unkomplizierteste Einstieg: klare Oberfläche, integrierter Programmführer, Anmeldung über Xtream Codes in unter einer Minute. IBO Player ist schlanker und für manche übersichtlicher. Beide funktionieren mit denselben Zugangsdaten, sodass Sie ohne Zusatzkosten wechseln können, wenn Ihnen eine Bedienung besser gefällt. VLC spielt zwar M3U-Listen ab, bietet aber weder EPG noch Kategorien und eignet sich daher eher zum schnellen Prüfen als zum täglichen Schauen." },
      { h: "Was im Zugang enthalten ist", p: "Das Gerät bestimmt nur, wie Sie schauen — der Katalog bleibt derselbe. Das sind 66.000+ Live-Sender, davon rund 4.200 Sportkanäle mit Bundesliga, Premier League, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formel 1 und MotoGP. Dazu kommen etwa 70.000 Filme und 18.000 Serien auf Abruf mit Poster und Staffel-Struktur, rund 320 Kinderkanäle und 540 Nachrichten- und Dokumentationssender. Dieselben Zugangsdaten funktionieren parallel auf Ihren anderen Geräten." },
      { h: "Wenn ein Sender nicht startet", p: "Bleibt ein einzelner Sender schwarz, während andere laufen, liegt es fast nie am Zugang. Prüfen Sie zuerst die Dekoder-Einstellung in der App und wechseln Sie testweise zwischen Hardware und Software. Startet danach nichts, testen Sie denselben Sender auf einem zweiten Gerät: Läuft er dort, liegt es am Apple TV; läuft er nirgends, schreiben Sie uns. Der Support antwortet auf WhatsApp in unter fünf Minuten und prüft den Sender direkt, statt Sie auf ein Ticketsystem zu verweisen." },
      { h: "Erst testen, dann abonnieren", p: "Sie müssen nichts kündigen und nichts riskieren, um zu sehen, ob es passt. Der kostenlose 24-Stunden-Test läuft ohne Kreditkarte und lässt sich parallel zu einem bestehenden Anschluss auf demselben Apple TV einrichten. Achten Sie dabei auf drei Dinge: ob Ihre Sender vorhanden sind, ob der Programmführer korrekt gefüllt ist und ob das Bild zur Prime Time flüssig bleibt. Überzeugt das Ergebnis, gilt nach dem Kauf zusätzlich eine Geld-zurück-Garantie von sieben Tagen." },
      {
        h: "Mehrere Apple-Geräte im Haushalt",
        p: "Weil die Zugangsdaten an das Abo und nicht an ein Gerät gebunden sind, richten Sie dieselben Daten auf dem Apple TV im Wohnzimmer, auf dem iPhone und auf dem iPad ein und schauen dort jeweils weiter, ohne erneut zu kaufen. Auf iPhone und iPad installieren Sie denselben Player aus dem App Store und melden sich identisch an. Zu beachten ist allein die Zahl gleichzeitiger Verbindungen, die Ihre Formel erlaubt: Wenn zwei Personen zur selben Zeit unterschiedliche Sender sehen möchten, brauchen Sie entsprechend mehr davon. Wie viele in Ihrem Haushalt sinnvoll sind, klären wir vor dem Kauf in einer kurzen Nachricht.",
      },
    ],
    faq: [
      { q: "Wie richte ich IPTV auf dem Apple TV ein?", a: "Installieren Sie IPTV Smarters Pro oder IBO Player aus dem App Store, wählen Sie die Anmeldung über Xtream Codes und tragen Sie die per WhatsApp gesendeten Daten ein. Es dauert unter fünf Minuten." },
      { q: "Brauche ich einen Jailbreak für IPTV auf Apple TV?", a: "Nein. Die Player sind regulär im App Store verfügbar. Weder Jailbreak noch Sideloading sind nötig, anders als beim Fire TV Stick." },
      { q: "Welche Internetgeschwindigkeit braucht das Apple TV?", a: "Etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K. Wenn Ihr Modell einen LAN-Anschluss hat, ist eine Kabelverbindung deutlich zuverlässiger als WLAN." },
      { q: "Funktioniert IPTV auf allen Apple-TV-Generationen?", a: "Auf allen Modellen mit tvOS und App-Store-Zugang. Für flüssiges 4K empfiehlt sich ein neueres Modell, ältere Geräte eignen sich gut für HD." },
      { q: "Kann ich dasselbe Abo auf iPhone und iPad nutzen?", a: "Ja. Die Zugangsdaten sind an das Abo gebunden, nicht an ein Gerät. Beachten Sie lediglich die Zahl gleichzeitiger Verbindungen Ihrer Formel." },
    ],
    cta: "Auf Apple TV starten",
  },
  en: {
    metaTitle: "IPTV on Apple TV — Set Up in 5 Minutes, 66,000+ Channels",
    metaDesc:
      "IPTV on Apple TV: 66,000+ channels in 4K/8K through an App Store player. Five-minute setup with Xtream Codes, no jailbreak, no sideloading, from $5/mo.",
    eyebrow: "IPTV Apple TV · From $5/mo",
    h1: "IPTV on",
    h1Accent: "Apple TV",
    intro:
      "Apple TV is one of the most reliable devices for IPTV: enough processing power for 4K in HEVC, an ethernet port on the larger models, and players available directly from the App Store — no sideloading required. Set up in under 5 minutes, from $5/mo.",
    cover: "/blog/iptv-apple-tv-main-en.jpg",
    image: {
      src: "/blog/iptv-apple-tv-body-en.jpg",
      alt: "Setting up IPTV on Apple TV: install the app, enter Xtream Codes details, the channel list loads automatically.",
      caption: "Three steps from the App Store to a full channel list.",
    },
    features: [
      { h: "Players from the App Store", p: "No sideloading and no jailbreak — the player installs normally." },
      { h: "4K without stutter", p: "Apple's chip decodes HEVC/H.265 comfortably, even during fast sport." },
      { h: "Ethernet available", p: "The larger models have a LAN port — the most stable connection there is." },
      { h: "Active in 5 minutes", p: "Xtream Codes details by WhatsApp, entered once, done." },
    ],
    sections: [
      { h: "Why Apple TV works well for IPTV", p: "Most streaming devices fail on processing power rather than networking: as soon as 4K material in HEVC/H.265 arrives, weaker processors start to stumble. This is precisely where Apple TV is strong. Its chip decodes that codec without effort, even with other apps running in the background. On top of that comes an advantage most sticks lack: the larger models include an ethernet port, and a wired connection eliminates exactly the interference that causes the bulk of buffering complaints." },
      { h: "Setting it up, step by step", p: "Open the App Store on your Apple TV and install an IPTV player — IPTV Smarters Pro and IBO Player are both available there normally. On first launch, choose to log in through the Xtream Codes API and enter the server URL, username and password we send on WhatsApp after you subscribe. The app then loads the channel list, a multi-day programme guide and the film and series catalogue on its own. No computer is needed at any point, and there is no jailbreak involved." },
      { h: "No sideloading — the difference that matters", p: "On a Fire TV Stick you install players by way of Downloader and have to permit installation from unknown sources first. On Apple TV that step disappears entirely: the players sit in the official App Store and update like any other app. That makes setup faster and, more importantly, lower-maintenance over time, because nothing needs re-enabling after a system update. In a household where not everyone is technical, this is the practical difference that counts most." },
      { h: "Networking: wired beats wireless", p: "If your model has a LAN port, use it. An IPTV stream runs continuously in real time with no large buffer to smooth over dips, so consistency matters more than the peak speed in your tariff. Plan on around 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the Apple TV itself rather than a laptop in another room. If you stay wireless, choose the 5 GHz band and put the router in the open, not inside a cabinet or behind the television." },
      { h: "Which app to use on Apple TV", p: "IPTV Smarters Pro is the most straightforward starting point: clear interface, built-in programme guide, Xtream Codes login in under a minute. IBO Player is leaner and some find it easier to navigate. Both work with the same credentials, so you can switch at no extra cost if one suits you better. VLC will play M3U lists but offers neither an EPG nor categories, which makes it better for quickly checking a feed than for daily viewing." },
      { h: "What the access includes", p: "The device only determines how you watch — the catalogue stays the same. That means 66,000+ live channels, around 4,200 of them sport, covering Premier League, Bundesliga, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formula 1 and MotoGP. Alongside sit roughly 70,000 films and 18,000 series on demand with artwork and season structure, plus around 320 children's channels and 540 news and documentary channels. The same credentials work in parallel on your other devices." },
      { h: "When a channel won't start", p: "If one channel stays black while others play, the cause is almost never your login. Check the decoder setting in the app first and switch between hardware and software as a test. If nothing plays after that, try the same channel on a second device: if it works there, the Apple TV is the issue; if it works nowhere, message us. Support replies on WhatsApp in under five minutes and checks the channel directly rather than routing you into a ticket queue." },
      { h: "Test first, subscribe second", p: "You needn't cancel anything or take a risk to find out whether this fits. The free 24-hour trial runs without a credit card and can be set up on the same Apple TV alongside an existing service. Watch three things while you have it: whether your channels are present, whether the programme guide is populated correctly, and whether the picture stays smooth at prime time. If the result convinces you, a seven-day money-back guarantee applies after purchase as well." },
    ],
    faq: [
      { q: "How do I set up IPTV on Apple TV?", a: "Install IPTV Smarters Pro or IBO Player from the App Store, choose the Xtream Codes login, and enter the details sent on WhatsApp. It takes under five minutes." },
      { q: "Do I need a jailbreak for IPTV on Apple TV?", a: "No. The players are available normally in the App Store. Neither jailbreaking nor sideloading is required, unlike on the Fire TV Stick." },
      { q: "What internet speed does Apple TV need?", a: "Around 10 Mbps for HD and at least 25 Mbps for stable 4K. If your model has a LAN port, a wired connection is considerably more reliable than Wi-Fi." },
      { q: "Does IPTV work on every Apple TV generation?", a: "On any model running tvOS with App Store access. For smooth 4K a newer model is advisable; older units handle HD well." },
      { q: "Can I use the same subscription on iPhone and iPad?", a: "Yes. Credentials are tied to the subscription rather than a device. Just keep the number of simultaneous connections your plan allows in mind." },
    ],
    cta: "Start on Apple TV",
  },
  fr: {
    metaTitle: "IPTV sur Apple TV — installation en 5 min, 66 000+ chaînes",
    metaDesc:
      "IPTV sur Apple TV : 66 000+ chaînes en 4K/8K via une application de l'App Store. Installation en 5 minutes avec Xtream Codes, sans jailbreak, dès 5 €/mois.",
    eyebrow: "IPTV Apple TV · Dès 5 €/mois",
    h1: "L'IPTV sur",
    h1Accent: "Apple TV",
    intro:
      "L'Apple TV est l'un des appareils les plus fiables pour l'IPTV : assez de puissance pour la 4K en HEVC, un port ethernet sur les modèles les plus grands, et des lecteurs disponibles directement dans l'App Store — sans installation manuelle. Prêt en moins de 5 minutes, dès 5 €/mois.",
    cover: "/blog/iptv-apple-tv-main-fr.jpg",
    image: {
      src: "/blog/iptv-apple-tv-body-fr.jpg",
      alt: "Installer l'IPTV sur Apple TV : installer l'application, saisir les identifiants Xtream Codes, la liste des chaînes se charge automatiquement.",
      caption: "Trois étapes de l'App Store à la liste complète des chaînes.",
    },
    features: [
      { h: "Lecteurs depuis l'App Store", p: "Aucune installation manuelle, aucun jailbreak — le lecteur s'installe normalement." },
      { h: "4K sans saccades", p: "La puce Apple décode le HEVC/H.265 sans effort, même sur du sport rapide." },
      { h: "Ethernet disponible", p: "Les modèles les plus grands ont un port LAN — la connexion la plus stable qui soit." },
      { h: "Actif en 5 minutes", p: "Identifiants Xtream Codes par WhatsApp, saisis une fois, terminé." },
    ],
    sections: [
      { h: "Pourquoi l'Apple TV convient bien à l'IPTV", p: "La plupart des appareils de streaming échouent sur la puissance de calcul plutôt que sur le réseau : dès que du contenu 4K en HEVC/H.265 arrive, les processeurs faibles commencent à trébucher. C'est précisément là que l'Apple TV excelle. Sa puce décode ce codec sans effort, même avec d'autres applications ouvertes en arrière-plan. S'y ajoute un avantage que la plupart des clés n'offrent pas : les modèles les plus grands intègrent un port ethernet, et une connexion filaire élimine exactement les interférences à l'origine de l'essentiel des plaintes de buffering." },
      { h: "L'installation étape par étape", p: "Ouvrez l'App Store sur votre Apple TV et installez un lecteur IPTV — IPTV Smarters Pro et IBO Player y sont disponibles normalement. Au premier lancement, choisissez la connexion via l'API Xtream Codes et saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe que nous envoyons par WhatsApp après l'abonnement. L'application charge ensuite d'elle-même la liste des chaînes, un guide des programmes sur plusieurs jours et le catalogue de films et séries. Aucun ordinateur n'est nécessaire, et aucun jailbreak n'entre en jeu." },
      { h: "Pas d'installation manuelle : la différence qui compte", p: "Sur un Fire TV Stick, on installe les lecteurs en passant par Downloader et il faut d'abord autoriser les applications de sources inconnues. Sur l'Apple TV, cette étape disparaît totalement : les lecteurs se trouvent dans l'App Store officiel et se mettent à jour comme n'importe quelle application. Cela rend l'installation plus rapide et, surtout, moins exigeante dans la durée, car rien n'a besoin d'être réautorisé après une mise à jour système. Dans un foyer où tout le monde n'est pas technicien, c'est la différence la plus concrète." },
      { h: "Réseau : le câble bat le Wi-Fi", p: "Si votre modèle dispose d'un port LAN, utilisez-le. Un flux IPTV est continu et en temps réel, sans gros tampon pour absorber les creux : la régularité compte donc plus que le débit maximal de votre offre. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'Apple TV lui-même plutôt que sur un portable dans une autre pièce. En sans-fil, choisissez la bande 5 GHz et placez le routeur à découvert, pas dans un meuble ni derrière le téléviseur." },
      { h: "Quelle application sur l'Apple TV", p: "IPTV Smarters Pro est le point de départ le plus simple : interface claire, guide intégré, connexion Xtream Codes en moins d'une minute. IBO Player est plus léger et certains le trouvent plus lisible. Les deux fonctionnent avec les mêmes identifiants, vous pouvez donc changer sans coût si l'un vous convient mieux. VLC lit les listes M3U mais n'offre ni EPG ni catégories, ce qui le destine davantage à une vérification rapide qu'à un usage quotidien." },
      { h: "Ce que l'accès comprend", p: "L'appareil détermine seulement comment vous regardez — le catalogue reste identique. Cela représente 66 000+ chaînes en direct, dont environ 4 200 chaînes sport couvrant Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League, NBA, NFL, UFC, Formule 1 et MotoGP. S'y ajoutent quelque 70 000 films et 18 000 séries à la demande avec affiches et structure par saisons, ainsi qu'environ 320 chaînes jeunesse et 540 chaînes d'information et de documentaires. Les mêmes identifiants fonctionnent en parallèle sur vos autres appareils." },
      { h: "Quand une chaîne ne démarre pas", p: "Si une chaîne reste noire alors que les autres fonctionnent, la cause n'est presque jamais vos identifiants. Vérifiez d'abord le réglage de décodage dans l'application et alternez entre matériel et logiciel pour tester. Si rien ne démarre ensuite, essayez la même chaîne sur un second appareil : si elle fonctionne là-bas, l'Apple TV est en cause ; si elle ne fonctionne nulle part, écrivez-nous. Le support répond sur WhatsApp en moins de cinq minutes et vérifie la chaîne directement." },
      { h: "Tester d'abord, s'abonner ensuite", p: "Vous n'avez rien à résilier ni aucun risque à prendre pour savoir si cela convient. L'essai gratuit de 24 heures fonctionne sans carte bancaire et peut s'installer sur le même Apple TV à côté d'un service existant. Surveillez trois choses : la présence de vos chaînes, le bon remplissage du guide, et la fluidité de l'image aux heures de pointe. Si le résultat convainc, une garantie satisfait ou remboursé de sept jours s'ajoute après l'achat." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur Apple TV ?", a: "Installez IPTV Smarters Pro ou IBO Player depuis l'App Store, choisissez la connexion Xtream Codes et saisissez les identifiants envoyés par WhatsApp. Cela prend moins de cinq minutes." },
      { q: "Faut-il un jailbreak pour l'IPTV sur Apple TV ?", a: "Non. Les lecteurs sont disponibles normalement dans l'App Store. Ni jailbreak ni installation manuelle ne sont nécessaires, contrairement au Fire TV Stick." },
      { q: "Quel débit internet faut-il pour l'Apple TV ?", a: "Environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable. Si votre modèle a un port LAN, le filaire est nettement plus fiable que le Wi-Fi." },
      { q: "L'IPTV fonctionne-t-elle sur toutes les générations d'Apple TV ?", a: "Sur tout modèle sous tvOS avec accès à l'App Store. Pour une 4K fluide, un modèle récent est conseillé ; les anciens conviennent bien à la HD." },
      { q: "Puis-je utiliser le même abonnement sur iPhone et iPad ?", a: "Oui. Les identifiants sont liés à l'abonnement et non à un appareil. Tenez seulement compte du nombre de connexions simultanées permis par votre formule." },
    ],
    cta: "Démarrer sur Apple TV",
  },
};

// =============================================================================
// /iptv-android-tv — "iptv android box" (DE 480/mo KD 0) + "iptv android tv" (US 170 KD 13, +21%)
// =============================================================================
content["iptv-android-tv"] = {
  de: {
    metaTitle: "IPTV auf Android TV & Android Box — 66.000+ Sender in 4K",
    metaDesc:
      "IPTV auf Android TV, Google TV, Android-Box und Nvidia Shield: 66.000+ Sender in 4K/8K mit TiviMate oder Smarters Pro. Einrichtung in 5 Minuten, ab 5 €/Monat.",
    eyebrow: "IPTV Android TV · Ab 5 €/Monat",
    h1: "IPTV auf",
    h1Accent: "Android TV",
    intro:
      "Android TV bietet die größte App-Auswahl aller Streaming-Plattformen — TiviMate, IBO Player und IPTV Smarters Pro laufen alle darauf. Ob Android-Box, Google TV, Nvidia Shield oder Smart TV von Sony, Philips oder TCL: 66.000+ Sender in 4K/8K, aktiv in unter 5 Minuten.",
    cover: "/blog/iptv-android-tv-main-de.jpg",
    image: {
      src: "/blog/iptv-android-tv-body-de.jpg",
      alt: "IPTV auf Android TV einrichten: Player aus dem Play Store, Xtream-Codes-Login, Favoritenliste anlegen.",
      caption: "Vom Play Store zur fertigen Favoritenliste in drei Schritten.",
    },
    features: [
      { h: "Größte App-Auswahl", p: "TiviMate, IBO Player und IPTV Smarters Pro sind alle über den Play Store verfügbar." },
      { h: "Box, Shield oder Smart TV", p: "Android-Boxen, Nvidia Shield, Google TV und Sony-, Philips- oder TCL-Geräte funktionieren gleich." },
      { h: "Oft mit LAN-Anschluss", p: "Die meisten Boxen haben Ethernet — die stabilste Verbindung für Live-Sport." },
      { h: "4K / 8K in HEVC", p: "Adaptive Bitrate hält das Bild sauber, auch bei schnellen Bewegungen." },
    ],
    sections: [
      { h: "Warum Android TV die flexibelste Plattform ist", p: "Der entscheidende Unterschied zu anderen Systemen liegt nicht in der Hardware, sondern in der Offenheit. Auf Android TV und Google TV steht der Play Store zur Verfügung, und damit praktisch jeder ernsthafte IPTV-Player: TiviMate, IBO Player und IPTV Smarters Pro lassen sich regulär installieren. Roku erlaubt das nicht, und auf dem Fire TV Stick führt der Weg über Downloader und die Freigabe unbekannter Apps. Wer die Wahl zwischen mehreren Playern behalten möchte, ohne Umwege zu gehen, fährt mit Android TV am unkompliziertesten." },
      { h: "Box, Stick, Shield oder Smart TV — was passt", p: "Alle vier funktionieren mit denselben Zugangsdaten, unterscheiden sich aber in der Leistung. Eine günstige Android-Box reicht für HD und meist auch für 1080p, gerät bei 4K in HEVC aber an ihre Grenzen. Die Nvidia Shield liegt am oberen Ende und dekodiert 4K souverän. Smart TVs von Sony, Philips, TCL und Hisense mit Android TV oder Google TV brauchen gar kein Zusatzgerät. Ein praktischer Vorteil vieler Boxen gegenüber Sticks: Sie besitzen einen Ethernet-Anschluss." },
      { h: "Die Einrichtung in wenigen Minuten", p: "Öffnen Sie den Play Store auf dem Gerät und installieren Sie den gewünschten Player. Beim ersten Start wählen Sie die Anmeldung über die Xtream Codes API und tragen Server-URL, Benutzername und Passwort ein, die wir nach dem Abo per WhatsApp senden. Die App lädt daraufhin Senderliste, Programmführer und den Film- und Serienkatalog automatisch. Anschließend lohnen sich zwei Handgriffe: Favoriten anlegen und ungenutzte Kategorien ausblenden — aus 66.000+ Sendern wird dadurch eine Liste, die man täglich gern benutzt." },
      { h: "TiviMate oder Smarters Pro auf Android TV", p: "TiviMate gilt vielen als das ausgereifteste Programm speziell für Android TV: Der Programmführer ist übersichtlicher und die Bedienung mit der Fernbedienung schneller, dafür ist die Einrichtung etwas aufwendiger und der volle Funktionsumfang kostenpflichtig. IPTV Smarters Pro ist der schnellere Einstieg mit klarer Oberfläche. IBO Player ist am schlanksten und läuft auch auf schwächeren Boxen flüssig. Alle drei nutzen dieselben Zugangsdaten, sodass Sie ohne Zusatzkosten ausprobieren können, welche Bedienung Ihnen liegt." },
      { h: "Netzwerk und Bandbreite", p: "Hat Ihre Box einen LAN-Anschluss, nutzen Sie ihn — das ist die wirksamste Einzelmaßnahme gegen Ruckeln. Ein IPTV-Stream läuft kontinuierlich in Echtzeit ohne großen Puffer, weshalb Gleichmäßigkeit mehr zählt als die Höchstgeschwindigkeit im Tarif. Rechnen Sie mit rund 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen am Gerät selbst. Bleiben Sie im WLAN, wählen Sie das 5-GHz-Band und stellen Sie den Router frei auf statt in einen Schrank." },
      { h: "Leistung im Blick behalten", p: "Günstige Android-Boxen haben oft wenig Arbeitsspeicher, und IPTV-Player legen Senderlisten, EPG-Daten und Vorschaubilder lokal ab. Wird dieser Zwischenspeicher zu groß, äußert sich das als Hängen beim Umschalten oder als langsamer App-Start. Leeren Sie den Cache gelegentlich in den App-Einstellungen und deinstallieren Sie, was Sie nicht nutzen. Ein Neustart vor längeren Sitzungen — besonders vor einem Spiel — beendet Hintergrundprozesse und hilft spürbar mehr, als die meisten erwarten." },
      { h: "Was der Zugang enthält", p: "Das Gerät bestimmt nur den Weg zum Inhalt; der Katalog ist überall derselbe. Das sind 66.000+ Live-Sender, davon rund 4.200 Sportkanäle mit Bundesliga, Premier League, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formel 1 und MotoGP. Dazu etwa 70.000 Filme und 18.000 Serien auf Abruf, rund 320 Kinderkanäle sowie 540 Nachrichten- und Dokumentationssender. Dieselben Zugangsdaten funktionieren parallel auf Handy, Tablet und einem zweiten Fernseher." },
      { h: "Vor dem Kauf testen", p: "Weil der Play Store und die Player kostenlos sind, kostet ein Test nur Ihre Zeit. Der kostenlose 24-Stunden-Zugang läuft ohne Kreditkarte und lässt sich auf derselben Box neben einem bestehenden Anschluss einrichten. Starten Sie ihn bewusst zur Prime Time oder zur Anstoßzeit, nicht am Vormittag — nur dann zeigt sich, ob die Serverkapazität hält. Überzeugt das Ergebnis, gilt nach dem Kauf zusätzlich eine Geld-zurück-Garantie von sieben Tagen." },
      {
        h: "Google TV und Android TV — der Unterschied",
        p: "Beide Bezeichnungen tauchen auf Verpackungen auf und stiften regelmäßig Verwirrung. Technisch ist Google TV lediglich eine neuere Oberfläche, die auf Android TV aufsetzt: Der darunterliegende Unterbau, der Play Store und die Kompatibilität mit IPTV-Playern sind identisch. Für die Einrichtung bedeutet das, dass Sie in beiden Fällen exakt gleich vorgehen und dieselben Apps verwenden können. Unterschiede gibt es nur an der Oberfläche, etwa bei der Startseite und den Empfehlungen. Wenn auf Ihrem Fernseher oder Ihrer Box eines von beidem steht, funktioniert alles in dieser Anleitung Beschriebene unverändert.",
      },
    ],
    faq: [
      { q: "Welche App ist die beste für Android TV?", a: "TiviMate gilt als die ausgereifteste für Android TV, IPTV Smarters Pro ist der schnellere Einstieg und IBO Player der schlankeste. Alle drei laufen mit denselben Zugangsdaten." },
      { q: "Funktioniert IPTV auf jeder Android-Box?", a: "Ja, sofern der Play Store oder eine Installation der App möglich ist. Für flüssiges 4K in HEVC ist eine leistungsfähigere Box oder eine Nvidia Shield empfehlenswert." },
      { q: "Brauche ich eine Box, wenn mein Fernseher Android TV hat?", a: "Nein. Sony-, Philips-, TCL- und Hisense-Geräte mit Android TV oder Google TV installieren den Player direkt — ein Zusatzgerät ist nicht nötig." },
      { q: "Welche Internetgeschwindigkeit brauche ich?", a: "Etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen am Gerät. Hat die Box einen LAN-Anschluss, ist Kabel deutlich zuverlässiger als WLAN." },
      { q: "Warum ruckelt es auf meiner Android-Box?", a: "Meist wegen zu wenig Rechenleistung oder einem vollen Cache. Leeren Sie den Cache, starten Sie das Gerät neu und wechseln Sie in den App-Einstellungen zwischen Hardware- und Software-Dekodierung." },
    ],
    cta: "Auf Android TV starten",
  },
  en: {
    metaTitle: "IPTV on Android TV & Android Box — 66,000+ Channels in 4K",
    metaDesc:
      "IPTV on Android TV, Google TV, Android boxes and Nvidia Shield: 66,000+ channels in 4K/8K with TiviMate or Smarters Pro. Five-minute setup, from $5/mo.",
    eyebrow: "IPTV Android TV · From $5/mo",
    h1: "IPTV on",
    h1Accent: "Android TV",
    intro:
      "Android TV offers the widest app selection of any streaming platform — TiviMate, IBO Player and IPTV Smarters Pro all run on it. Whether you use an Android box, Google TV, an Nvidia Shield or a Sony, Philips or TCL set: 66,000+ channels in 4K/8K, active in under 5 minutes.",
    cover: "/blog/iptv-android-tv-main-en.jpg",
    image: {
      src: "/blog/iptv-android-tv-body-en.jpg",
      alt: "Setting up IPTV on Android TV: install a player from the Play Store, log in with Xtream Codes, build a favourites list.",
      caption: "From the Play Store to a finished favourites list in three steps.",
    },
    features: [
      { h: "Widest app selection", p: "TiviMate, IBO Player and IPTV Smarters Pro are all available through the Play Store." },
      { h: "Box, Shield or Smart TV", p: "Android boxes, Nvidia Shield, Google TV and Sony, Philips or TCL sets all work the same way." },
      { h: "Often has ethernet", p: "Most boxes include a LAN port — the most stable connection for live sport." },
      { h: "4K / 8K in HEVC", p: "Adaptive bitrate keeps the picture clean, even during fast motion." },
    ],
    sections: [
      { h: "Why Android TV is the most flexible platform", p: "The decisive difference from other systems is openness rather than hardware. Android TV and Google TV give you the Play Store, and with it practically every serious IPTV player: TiviMate, IBO Player and IPTV Smarters Pro all install normally. Roku does not permit that, and on the Fire TV Stick the route runs through Downloader and enabling unknown apps. If you want to keep a choice of players without workarounds, Android TV is the least complicated platform to be on." },
      { h: "Box, stick, Shield or Smart TV — what suits", p: "All four work with the same credentials but differ in performance. A budget Android box is fine for HD and usually 1080p, but reaches its limits with 4K in HEVC. The Nvidia Shield sits at the top end and decodes 4K comfortably. Sony, Philips, TCL and Hisense sets running Android TV or Google TV need no extra device at all. One practical advantage many boxes hold over sticks: they include an ethernet port." },
      { h: "Setting it up in a few minutes", p: "Open the Play Store on the device and install your chosen player. On first launch, select the Xtream Codes API login and enter the server URL, username and password we send on WhatsApp after you subscribe. The app then loads the channel list, programme guide and film and series catalogue automatically. Two follow-up steps are worth the effort: build favourites and hide categories you never use — that is what turns 66,000+ channels into a list you are happy to use daily." },
      { h: "TiviMate or Smarters Pro on Android TV", p: "Many consider TiviMate the most polished program built specifically for Android TV: the guide is clearer and remote navigation faster, though setup takes more effort and full functionality is paid. IPTV Smarters Pro is the quicker start with a clean interface. IBO Player is the leanest and runs smoothly even on weaker boxes. All three use the same credentials, so you can try them at no extra cost and keep whichever suits how you navigate." },
      { h: "Networking and bandwidth", p: "If your box has a LAN port, use it — it is the single most effective change against stuttering. An IPTV stream runs continuously in real time with no large buffer, so consistency matters more than the peak speed in your tariff. Plan on around 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the device itself. If you stay wireless, choose the 5 GHz band and place the router in the open rather than inside a cabinet." },
      { h: "Keeping an eye on performance", p: "Budget Android boxes often have little memory, and IPTV players cache channel lists, EPG data and thumbnails locally. When that cache grows too large it shows up as hanging when changing channels or slow app startup. Clear the cache occasionally in the app settings and uninstall what you don't use. Restarting before longer sessions — especially before a match — ends background processes and helps noticeably more than most people expect." },
      { h: "What the access includes", p: "The device only determines the route to the content; the catalogue is the same everywhere. That means 66,000+ live channels, around 4,200 of them sport, covering Premier League, Bundesliga, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formula 1 and MotoGP. Alongside sit roughly 70,000 films and 18,000 series on demand, around 320 children's channels and 540 news and documentary channels. The same credentials work in parallel on a phone, a tablet and a second television." },
      { h: "Test before you buy", p: "Because the Play Store and the players are free, a test costs only your time. The free 24-hour access runs without a credit card and can be set up on the same box alongside an existing service. Start it deliberately at prime time or kick-off rather than mid-morning — only then does it show whether server capacity holds. If the result convinces you, a seven-day money-back guarantee applies after purchase as well." },
    ],
    faq: [
      { q: "Which app is best for Android TV?", a: "TiviMate is considered the most polished for Android TV, IPTV Smarters Pro is the quicker start, and IBO Player is the leanest. All three run with the same credentials." },
      { q: "Does IPTV work on any Android box?", a: "Yes, provided the Play Store or app installation is available. For smooth 4K in HEVC, a more capable box or an Nvidia Shield is advisable." },
      { q: "Do I need a box if my TV already runs Android TV?", a: "No. Sony, Philips, TCL and Hisense sets running Android TV or Google TV install the player directly — no extra device is required." },
      { q: "What internet speed do I need?", a: "Around 10 Mbps for HD and at least 25 Mbps for stable 4K, measured at the device. If the box has a LAN port, wired is considerably more reliable than Wi-Fi." },
      { q: "Why does my Android box stutter?", a: "Usually too little processing power or a full cache. Clear the cache, restart the device, and switch between hardware and software decoding in the app settings." },
    ],
    cta: "Start on Android TV",
  },
  fr: {
    metaTitle: "IPTV sur Android TV & box Android — 66 000+ chaînes en 4K",
    metaDesc:
      "IPTV sur Android TV, Google TV, box Android et Nvidia Shield : 66 000+ chaînes en 4K/8K avec TiviMate ou Smarters Pro. Installation en 5 minutes, dès 5 €/mois.",
    eyebrow: "IPTV Android TV · Dès 5 €/mois",
    h1: "L'IPTV sur",
    h1Accent: "Android TV",
    intro:
      "Android TV offre le plus large choix d'applications de toutes les plateformes de streaming — TiviMate, IBO Player et IPTV Smarters Pro y fonctionnent tous. Box Android, Google TV, Nvidia Shield ou téléviseur Sony, Philips ou TCL : 66 000+ chaînes en 4K/8K, actives en moins de 5 minutes.",
    cover: "/blog/iptv-android-tv-main-fr.jpg",
    image: {
      src: "/blog/iptv-android-tv-body-fr.jpg",
      alt: "Installer l'IPTV sur Android TV : lecteur depuis le Play Store, connexion Xtream Codes, création des favoris.",
      caption: "Du Play Store à une liste de favoris terminée en trois étapes.",
    },
    features: [
      { h: "Le plus large choix d'apps", p: "TiviMate, IBO Player et IPTV Smarters Pro sont tous disponibles via le Play Store." },
      { h: "Box, Shield ou Smart TV", p: "Box Android, Nvidia Shield, Google TV et appareils Sony, Philips ou TCL fonctionnent de la même façon." },
      { h: "Souvent un port ethernet", p: "La plupart des box ont un port LAN — la connexion la plus stable pour le sport en direct." },
      { h: "4K / 8K en HEVC", p: "Le bitrate adaptatif garde l'image nette, même sur les mouvements rapides." },
    ],
    sections: [
      { h: "Pourquoi Android TV est la plateforme la plus souple", p: "La différence décisive avec les autres systèmes tient à l'ouverture plutôt qu'au matériel. Android TV et Google TV donnent accès au Play Store, et donc à pratiquement tous les lecteurs IPTV sérieux : TiviMate, IBO Player et IPTV Smarters Pro s'installent normalement. Roku ne l'autorise pas, et sur le Fire TV Stick le chemin passe par Downloader et l'autorisation des applications inconnues. Si vous voulez conserver le choix entre plusieurs lecteurs sans détour, Android TV est la plateforme la moins compliquée." },
      { h: "Box, clé, Shield ou Smart TV — que choisir", p: "Les quatre fonctionnent avec les mêmes identifiants mais diffèrent en performance. Une box Android d'entrée de gamme convient à la HD et généralement au 1080p, mais atteint ses limites en 4K HEVC. La Nvidia Shield se situe en haut de gamme et décode la 4K sans difficulté. Les téléviseurs Sony, Philips, TCL et Hisense sous Android TV ou Google TV n'ont besoin d'aucun appareil supplémentaire. Un avantage pratique de nombreuses box sur les clés : elles disposent d'un port ethernet." },
      { h: "L'installation en quelques minutes", p: "Ouvrez le Play Store sur l'appareil et installez le lecteur de votre choix. Au premier lancement, sélectionnez la connexion via l'API Xtream Codes et saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe envoyés par WhatsApp après l'abonnement. L'application charge ensuite automatiquement la liste des chaînes, le guide et le catalogue de films et séries. Deux étapes valent l'effort ensuite : créer des favoris et masquer les catégories inutilisées — c'est ce qui transforme 66 000+ chaînes en une liste agréable au quotidien." },
      { h: "TiviMate ou Smarters Pro sur Android TV", p: "Beaucoup considèrent TiviMate comme le programme le plus abouti conçu spécifiquement pour Android TV : le guide est plus lisible et la navigation à la télécommande plus rapide, mais l'installation demande plus d'efforts et les fonctions complètes sont payantes. IPTV Smarters Pro offre un démarrage plus rapide avec une interface claire. IBO Player est le plus léger et reste fluide même sur les box modestes. Les trois utilisent les mêmes identifiants." },
      { h: "Réseau et débit", p: "Si votre box a un port LAN, utilisez-le — c'est la mesure la plus efficace contre les saccades. Un flux IPTV est continu et en temps réel, sans gros tampon : la régularité compte donc plus que le débit maximal de votre offre. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil lui-même. En sans-fil, choisissez la bande 5 GHz et placez le routeur à découvert plutôt que dans un meuble." },
      { h: "Surveiller les performances", p: "Les box Android bon marché disposent souvent de peu de mémoire, et les lecteurs IPTV stockent localement listes de chaînes, données EPG et vignettes. Quand ce cache devient trop volumineux, cela se traduit par des blocages au changement de chaîne ou un démarrage lent. Videz le cache de temps en temps et désinstallez ce que vous n'utilisez pas. Redémarrer avant une longue session — surtout avant un match — met fin aux processus d'arrière-plan et aide nettement plus qu'on ne l'imagine." },
      { h: "Ce que l'accès comprend", p: "L'appareil ne détermine que le chemin vers le contenu ; le catalogue reste identique partout. Cela représente 66 000+ chaînes en direct, dont environ 4 200 chaînes sport couvrant Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League, NBA, NFL, UFC, Formule 1 et MotoGP. S'y ajoutent quelque 70 000 films et 18 000 séries à la demande, environ 320 chaînes jeunesse et 540 chaînes d'information et de documentaires." },
      { h: "Tester avant d'acheter", p: "Comme le Play Store et les lecteurs sont gratuits, un test ne coûte que votre temps. L'accès gratuit de 24 heures fonctionne sans carte bancaire et peut s'installer sur la même box à côté d'un service existant. Lancez-le délibérément aux heures de pointe ou au coup d'envoi plutôt qu'en matinée — ce n'est qu'alors que l'on voit si la capacité serveur tient. Si le résultat convainc, une garantie de sept jours s'ajoute après l'achat." },
    ],
    faq: [
      { q: "Quelle application est la meilleure pour Android TV ?", a: "TiviMate est considérée comme la plus aboutie sur Android TV, IPTV Smarters Pro offre le démarrage le plus rapide et IBO Player est la plus légère. Les trois fonctionnent avec les mêmes identifiants." },
      { q: "L'IPTV fonctionne-t-elle sur toutes les box Android ?", a: "Oui, dès lors que le Play Store ou l'installation de l'application est possible. Pour une 4K HEVC fluide, une box plus puissante ou une Nvidia Shield est conseillée." },
      { q: "Faut-il une box si mon téléviseur est déjà sous Android TV ?", a: "Non. Les appareils Sony, Philips, TCL et Hisense sous Android TV ou Google TV installent le lecteur directement — aucun appareil supplémentaire n'est nécessaire." },
      { q: "Quel débit internet faut-il ?", a: "Environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil. Si la box a un port LAN, le filaire est nettement plus fiable que le Wi-Fi." },
      { q: "Pourquoi ma box Android saccade-t-elle ?", a: "Le plus souvent par manque de puissance ou à cause d'un cache plein. Videz le cache, redémarrez l'appareil et alternez entre décodage matériel et logiciel dans les réglages." },
    ],
    cta: "Démarrer sur Android TV",
  },
};

// =============================================================================
// /iptv-mag-box — "iptv mag box" (US 320/mo KD 15, DE 70 KD 0, transactional)
// =============================================================================
content["iptv-mag-box"] = {
  de: {
    metaTitle: "IPTV für MAG Box — Portal-URL einrichten, 66.000+ Sender",
    metaDesc:
      "IPTV auf der MAG Box: Portal-URL eintragen, MAC-Adresse hinterlegen, 66.000+ Sender in 4K. Einrichtung in wenigen Minuten ohne Zusatz-App, ab 5 €/Monat.",
    eyebrow: "IPTV MAG Box · Ab 5 €/Monat",
    h1: "IPTV für die",
    h1Accent: "MAG Box",
    intro:
      "Die MAG Box braucht keine zusätzliche App: Sie tragen eine Portal-URL ein, wir hinterlegen Ihre MAC-Adresse, und die Senderliste erscheint direkt auf der Oberfläche. 66.000+ Sender, eingerichtet in wenigen Minuten, ab 5 €/Monat.",
    cover: "/blog/iptv-mag-box-main-de.jpg",
    image: {
      src: "/blog/iptv-mag-box-body-de.jpg",
      alt: "MAG Box für IPTV einrichten: MAC-Adresse auslesen, Portal-URL in den Systemeinstellungen eintragen, Box neu starten.",
      caption: "MAC auslesen, Portal eintragen, neu starten — mehr ist es nicht.",
    },
    features: [
      { h: "Keine App nötig", p: "Die Box arbeitet nativ mit einer Portal-URL — kein Player, kein Sideloading." },
      { h: "MAC-basierter Zugang", p: "Wir hinterlegen Ihre MAC-Adresse; die Box meldet sich danach selbstständig an." },
      { h: "Stabiles Ethernet", p: "MAG-Boxen haben einen LAN-Anschluss — ideal für unterbrechungsfreien Live-Sport." },
      { h: "Sofort startklar", p: "Nach dem Neustart lädt die Box Senderliste und Programmführer automatisch." },
    ],
    sections: [
      { h: "Wie sich die MAG Box von anderen Geräten unterscheidet", p: "Auf einem Fire TV Stick oder einer Android-Box installieren Sie zuerst einen Player und tragen dort Zugangsdaten ein. Die MAG Box geht einen anderen Weg: Sie ist von Haus aus ein IPTV-Empfänger und arbeitet mit einem sogenannten Portal. Sie hinterlegen eine URL in den Systemeinstellungen, wir verknüpfen Ihre MAC-Adresse damit, und nach einem Neustart erscheint die Senderliste direkt auf der Oberfläche. Es gibt keine App zu aktualisieren und keine unbekannten Quellen freizugeben — für viele ist genau das der Reiz." },
      { h: "MAC-Adresse und Portal-URL", p: "Zwei Angaben genügen. Die MAC-Adresse Ihrer Box finden Sie in den Systemeinstellungen unter den Geräteinformationen; sie hat das Format 00:1A:79:XX:XX:XX. Diese schicken Sie uns per WhatsApp, wir verknüpfen sie mit Ihrem Abo und senden Ihnen die passende Portal-URL zurück. Die tragen Sie unter Einstellungen, Systemeinstellungen, Server, Portale ein und starten die Box neu. Wichtig ist die exakte Schreibweise: Ein einziges falsches Zeichen in der URL führt dazu, dass das Portal nicht lädt." },
      { h: "Die Einrichtung Schritt für Schritt", p: "Rufen Sie im Hauptmenü die Einstellungen auf und öffnen Sie die Systemeinstellungen. Unter Servern finden Sie den Punkt Portale. Tragen Sie im ersten Feld einen frei wählbaren Namen ein und in das zweite die von uns gesendete URL. Speichern Sie mit der entsprechenden Farbtaste der Fernbedienung und starten Sie die Box anschließend neu — dieser Neustart ist nicht optional, ohne ihn übernimmt die Box das Portal nicht. Nach dem Hochfahren lädt sie Senderliste, Programmführer und Kategorien selbstständig." },
      { h: "Welche MAG-Modelle funktionieren", p: "Die Portal-Methode ist über die Modellreihen hinweg gleich geblieben, weshalb sowohl ältere als auch aktuelle Boxen damit arbeiten. Der praktische Unterschied liegt in der Leistung: Ältere Modelle sind für HD und 1080p ausgelegt und stoßen bei 4K-Material in HEVC an ihre Grenzen, während neuere Geräte 4K sauber wiedergeben. Wenn Sie unsicher sind, welches Modell Sie besitzen, steht die Bezeichnung in denselben Geräteinformationen wie die MAC-Adresse — schicken Sie sie uns einfach mit, dann sagen wir Ihnen, was zu erwarten ist." },
      { h: "Ethernet nutzen, wenn möglich", p: "MAG-Boxen besitzen einen LAN-Anschluss, und den sollten Sie verwenden. Ein IPTV-Stream läuft kontinuierlich in Echtzeit und hat keinen großen Puffer, der Schwankungen ausgleicht — deshalb zählt eine gleichmäßige Verbindung mehr als eine hohe Maximalgeschwindigkeit. Rechnen Sie mit rund 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K. Wo ein Kabel nicht möglich ist, hilft ein Powerline-Adapter oft mehr als WLAN, weil er die typischen Störungen und Auslastungsspitzen umgeht." },
      { h: "Wenn das Portal nicht lädt", p: "Drei Ursachen decken fast alle Fälle ab. Erstens ein Tippfehler in der Portal-URL — prüfen Sie sie Zeichen für Zeichen gegen das, was wir gesendet haben. Zweitens eine nicht übermittelte oder falsch notierte MAC-Adresse; sie muss exakt mit der auf der Box übereinstimmen. Drittens ein ausgelassener Neustart, ohne den die Box die neue Einstellung nicht übernimmt. Bleibt es dabei, schreiben Sie uns: Der Support antwortet auf WhatsApp in unter fünf Minuten und prüft die Verknüpfung direkt auf unserer Seite." },
      { h: "Was im Zugang enthalten ist", p: "Der Katalog ist unabhängig vom Gerät identisch. Das sind 66.000+ Live-Sender, davon rund 4.200 Sportkanäle mit Bundesliga, Premier League, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formel 1 und MotoGP. Dazu kommen etwa 70.000 Filme und 18.000 Serien auf Abruf, rund 320 Kinderkanäle sowie 540 Nachrichten- und Dokumentationssender. Wenn Sie zusätzlich auf Handy oder Tablet schauen möchten, senden wir Ihnen für dieselbe Laufzeit auch Xtream-Codes-Daten." },
      { h: "Vorab testen", p: "Auch mit einer MAG Box können Sie vor dem Kauf prüfen, ob alles läuft. Schicken Sie uns Ihre MAC-Adresse für den kostenlosen 24-Stunden-Test; wir verknüpfen sie ohne Zahlungsdaten und senden die Portal-URL. Achten Sie beim Test auf drei Punkte: ob Ihre Sender in der Liste stehen, ob der Programmführer gefüllt ist und ob das Bild zur Prime Time stabil bleibt. Überzeugt das Ergebnis, gilt nach dem Kauf zusätzlich eine Geld-zurück-Garantie von sieben Tagen." },
      {
        h: "MAG Box oder moderner Player — was passt besser",
        p: "Die MAG Box hat einen klaren Vorzug: Sie tut genau eine Sache und tut sie zuverlässig, ohne Apps, Updates oder Berechtigungen. Wer ein Gerät sucht, das nach der Einrichtung einfach jahrelang läuft, fährt damit gut. Die Kehrseite ist die Oberfläche, die im Vergleich zu modernen Playern wie TiviMate schlichter wirkt, sowie die begrenzte Leistung älterer Modelle bei 4K-Material. Wenn Sie Wert auf einen komfortablen Programmführer, Aufnahmefunktionen oder eine schnelle Suche legen, ist eine Android-TV-Box mit TiviMate die flexiblere Wahl — mit denselben Zugangsdaten, die wir Ihnen ohnehin senden.",
      },
    ],
    faq: [
      { q: "Wie richte ich IPTV auf einer MAG Box ein?", a: "Schicken Sie uns Ihre MAC-Adresse, tragen Sie die zurückgesendete Portal-URL unter Einstellungen, Systemeinstellungen, Server, Portale ein und starten Sie die Box neu. Danach lädt die Senderliste automatisch." },
      { q: "Wo finde ich die MAC-Adresse meiner MAG Box?", a: "In den Systemeinstellungen unter den Geräteinformationen. Sie hat das Format 00:1A:79:XX:XX:XX und steht meist auch auf einem Aufkleber an der Unterseite der Box." },
      { q: "Brauche ich eine App für die MAG Box?", a: "Nein. Die Box ist ein nativer IPTV-Empfänger und arbeitet direkt mit einer Portal-URL — kein Player, kein Sideloading, keine App-Updates." },
      { q: "Warum lädt mein Portal nicht?", a: "Fast immer ein Tippfehler in der URL, eine falsch übermittelte MAC-Adresse oder ein ausgelassener Neustart. Prüfen Sie alle drei Punkte; unser Support kontrolliert die Verknüpfung auf Wunsch direkt." },
      { q: "Kann ich dasselbe Abo auf dem Handy nutzen?", a: "Ja. Wir senden Ihnen für dieselbe Laufzeit zusätzlich Xtream-Codes-Daten, mit denen Sie auf Handy, Tablet oder einem zweiten Gerät schauen können." },
    ],
    cta: "MAG Box aktivieren",
  },
  en: {
    metaTitle: "IPTV for MAG Box — Set the Portal URL, 66,000+ Channels",
    metaDesc:
      "IPTV on a MAG box: enter a portal URL, register your MAC address, get 66,000+ channels in 4K. Set up in minutes with no extra app, from $5/mo.",
    eyebrow: "IPTV MAG Box · From $5/mo",
    h1: "IPTV for the",
    h1Accent: "MAG Box",
    intro:
      "A MAG box needs no additional app: you enter a portal URL, we register your MAC address, and the channel list appears directly in the interface. 66,000+ channels, set up in minutes, from $5/mo.",
    cover: "/blog/iptv-mag-box-main-en.jpg",
    image: {
      src: "/blog/iptv-mag-box-body-en.jpg",
      alt: "Setting up a MAG box for IPTV: read the MAC address, enter the portal URL in system settings, reboot the box.",
      caption: "Read the MAC, enter the portal, reboot — that is the whole process.",
    },
    features: [
      { h: "No app required", p: "The box works natively with a portal URL — no player, no sideloading." },
      { h: "MAC-based access", p: "We register your MAC address and the box then signs in on its own." },
      { h: "Stable ethernet", p: "MAG boxes include a LAN port — ideal for uninterrupted live sport." },
      { h: "Ready straight away", p: "After the reboot the box loads the channel list and guide automatically." },
    ],
    sections: [
      { h: "How a MAG box differs from other devices", p: "On a Fire TV Stick or an Android box you first install a player and enter credentials into it. The MAG box takes a different route: it is an IPTV receiver by design and works with what is called a portal. You store a URL in the system settings, we link your MAC address to it, and after a reboot the channel list appears directly in the interface. There is no app to update and no unknown sources to permit — for many people that is precisely the appeal." },
      { h: "MAC address and portal URL", p: "Two pieces of information are all it takes. Your box's MAC address sits in the system settings under device information, in the format 00:1A:79:XX:XX:XX. You send that to us on WhatsApp, we link it to your subscription and send the matching portal URL back. You enter that under Settings, System Settings, Servers, Portals, then restart the box. Exact spelling matters here: a single wrong character in the URL will stop the portal loading." },
      { h: "Setting it up, step by step", p: "From the main menu open Settings and go to System Settings. Under Servers you will find Portals. Put any name you like in the first field and the URL we sent in the second. Save using the corresponding colour key on the remote, then reboot the box — that reboot is not optional; without it the box will not adopt the portal. Once it comes back up, it loads the channel list, programme guide and categories on its own." },
      { h: "Which MAG models work", p: "The portal method has stayed consistent across model generations, which is why both older and current boxes work with it. The practical difference is performance: older models are built for HD and 1080p and reach their limits with 4K material in HEVC, while newer units handle 4K cleanly. If you are unsure which model you have, the designation sits in the same device information screen as the MAC address — send it along and we will tell you what to expect." },
      { h: "Use ethernet where you can", p: "MAG boxes include a LAN port, and you should use it. An IPTV stream runs continuously in real time with no large buffer to absorb dips, so a steady connection matters more than a high maximum speed. Plan on around 10 Mbps for HD and at least 25 Mbps for stable 4K. Where a cable is impossible, a powerline adapter often helps more than Wi-Fi, because it sidesteps the interference and congestion that cause most complaints." },
      { h: "When the portal won't load", p: "Three causes account for nearly every case. First, a typo in the portal URL — check it character by character against what we sent. Second, a MAC address that was never sent or was noted down incorrectly; it must match the one on the box exactly. Third, a skipped reboot, without which the box does not adopt the new setting. If it still fails, message us: support replies on WhatsApp in under five minutes and checks the link on our side directly." },
      { h: "What the access includes", p: "The catalogue is identical regardless of device. That means 66,000+ live channels, around 4,200 of them sport, covering Premier League, Bundesliga, La Liga, Serie A, Ligue 1, Champions League, NBA, NFL, UFC, Formula 1 and MotoGP. Alongside sit roughly 70,000 films and 18,000 series on demand, around 320 children's channels and 540 news and documentary channels. If you also want to watch on a phone or tablet, we send Xtream Codes details for the same term as well." },
      { h: "Test it first", p: "Even with a MAG box you can confirm everything works before buying. Send us your MAC address for the free 24-hour trial; we link it without any payment details and send the portal URL. Watch three things during the trial: whether your channels are in the list, whether the guide is populated, and whether the picture stays stable at prime time. If the result convinces you, a seven-day money-back guarantee applies after purchase too." },
    ],
    faq: [
      { q: "How do I set up IPTV on a MAG box?", a: "Send us your MAC address, enter the portal URL we return under Settings, System Settings, Servers, Portals, and reboot the box. The channel list then loads automatically." },
      { q: "Where do I find my MAG box's MAC address?", a: "In the system settings under device information. It uses the format 00:1A:79:XX:XX:XX and is usually printed on a sticker underneath the box as well." },
      { q: "Do I need an app for a MAG box?", a: "No. The box is a native IPTV receiver and works directly with a portal URL — no player, no sideloading, no app updates." },
      { q: "Why won't my portal load?", a: "Almost always a typo in the URL, an incorrectly supplied MAC address, or a skipped reboot. Check all three; our support will verify the link on our side if you ask." },
      { q: "Can I use the same subscription on my phone?", a: "Yes. We also send Xtream Codes details for the same term, which let you watch on a phone, tablet or a second device." },
    ],
    cta: "Activate my MAG box",
  },
  fr: {
    metaTitle: "IPTV pour MAG Box — configurer l'URL du portail, 66 000+ chaînes",
    metaDesc:
      "IPTV sur MAG box : saisir une URL de portail, enregistrer l'adresse MAC, 66 000+ chaînes en 4K. Installation en quelques minutes sans application, dès 5 €/mois.",
    eyebrow: "IPTV MAG Box · Dès 5 €/mois",
    h1: "L'IPTV pour la",
    h1Accent: "MAG Box",
    intro:
      "La MAG box n'a besoin d'aucune application supplémentaire : vous saisissez une URL de portail, nous enregistrons votre adresse MAC, et la liste des chaînes apparaît directement dans l'interface. 66 000+ chaînes, installées en quelques minutes, dès 5 €/mois.",
    cover: "/blog/iptv-mag-box-main-fr.jpg",
    image: {
      src: "/blog/iptv-mag-box-body-fr.jpg",
      alt: "Configurer une MAG box pour l'IPTV : relever l'adresse MAC, saisir l'URL du portail dans les réglages système, redémarrer la box.",
      caption: "Relever la MAC, saisir le portail, redémarrer — c'est toute la procédure.",
    },
    features: [
      { h: "Aucune application requise", p: "La box fonctionne nativement avec une URL de portail — sans lecteur ni installation manuelle." },
      { h: "Accès par adresse MAC", p: "Nous enregistrons votre adresse MAC et la box se connecte ensuite d'elle-même." },
      { h: "Ethernet stable", p: "Les MAG box ont un port LAN — idéal pour du sport en direct sans interruption." },
      { h: "Prêt immédiatement", p: "Après le redémarrage, la box charge automatiquement la liste et le guide." },
    ],
    sections: [
      { h: "En quoi la MAG box diffère des autres appareils", p: "Sur un Fire TV Stick ou une box Android, vous installez d'abord un lecteur puis y saisissez des identifiants. La MAG box emprunte une autre voie : c'est un récepteur IPTV par conception, qui fonctionne avec ce qu'on appelle un portail. Vous enregistrez une URL dans les réglages système, nous y associons votre adresse MAC, et après un redémarrage la liste des chaînes apparaît directement dans l'interface. Aucune application à mettre à jour, aucune source inconnue à autoriser — pour beaucoup, c'est précisément l'attrait." },
      { h: "Adresse MAC et URL de portail", p: "Deux informations suffisent. L'adresse MAC de votre box se trouve dans les réglages système, rubrique informations de l'appareil, au format 00:1A:79:XX:XX:XX. Vous nous l'envoyez par WhatsApp, nous l'associons à votre abonnement et vous renvoyons l'URL de portail correspondante. Vous la saisissez sous Réglages, Réglages système, Serveurs, Portails, puis redémarrez la box. L'exactitude compte ici : un seul caractère erroné dans l'URL empêche le portail de charger." },
      { h: "L'installation étape par étape", p: "Depuis le menu principal, ouvrez les Réglages puis les Réglages système. Sous Serveurs se trouve la rubrique Portails. Indiquez le nom de votre choix dans le premier champ et l'URL que nous avons envoyée dans le second. Enregistrez avec la touche de couleur correspondante de la télécommande, puis redémarrez la box — ce redémarrage n'est pas facultatif : sans lui, la box n'adopte pas le portail. Une fois relancée, elle charge d'elle-même la liste des chaînes, le guide et les catégories." },
      { h: "Quels modèles MAG fonctionnent", p: "La méthode du portail est restée constante d'une génération à l'autre, si bien que les box anciennes comme récentes fonctionnent. La différence pratique tient à la puissance : les modèles anciens sont conçus pour la HD et le 1080p et atteignent leurs limites sur du contenu 4K en HEVC, tandis que les plus récents gèrent la 4K proprement. Si vous ignorez quel modèle vous possédez, sa désignation figure sur le même écran d'informations que l'adresse MAC — transmettez-la et nous vous dirons à quoi vous attendre." },
      { h: "Utiliser l'ethernet quand c'est possible", p: "Les MAG box disposent d'un port LAN, et il faut l'utiliser. Un flux IPTV est continu et en temps réel, sans gros tampon pour absorber les creux : une connexion régulière compte donc davantage qu'une vitesse maximale élevée. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable. Là où le câble est impossible, un adaptateur CPL aide souvent plus que le Wi-Fi, car il contourne les interférences et les saturations à l'origine de la plupart des plaintes." },
      { h: "Quand le portail ne charge pas", p: "Trois causes couvrent presque tous les cas. D'abord une faute de frappe dans l'URL du portail — vérifiez-la caractère par caractère face à ce que nous avons envoyé. Ensuite une adresse MAC non transmise ou mal recopiée ; elle doit correspondre exactement à celle de la box. Enfin un redémarrage omis, sans lequel la box n'applique pas le nouveau réglage. Si le problème persiste, écrivez-nous : le support répond sur WhatsApp en moins de cinq minutes et vérifie l'association de notre côté." },
      { h: "Ce que l'accès comprend", p: "Le catalogue est identique quel que soit l'appareil. Cela représente 66 000+ chaînes en direct, dont environ 4 200 chaînes sport couvrant Ligue 1, Premier League, La Liga, Serie A, Bundesliga, Champions League, NBA, NFL, UFC, Formule 1 et MotoGP. S'y ajoutent quelque 70 000 films et 18 000 séries à la demande, environ 320 chaînes jeunesse et 540 chaînes d'information et de documentaires. Si vous souhaitez aussi regarder sur téléphone ou tablette, nous envoyons également des identifiants Xtream Codes pour la même durée." },
      { h: "Tester au préalable", p: "Même avec une MAG box, vous pouvez vérifier que tout fonctionne avant d'acheter. Envoyez-nous votre adresse MAC pour l'essai gratuit de 24 heures ; nous l'associons sans aucune donnée de paiement et vous transmettons l'URL du portail. Pendant l'essai, surveillez trois points : la présence de vos chaînes dans la liste, le remplissage du guide, et la stabilité de l'image aux heures de pointe. Si le résultat convainc, une garantie de sept jours s'ajoute après l'achat." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur une MAG box ?", a: "Envoyez-nous votre adresse MAC, saisissez l'URL de portail renvoyée sous Réglages, Réglages système, Serveurs, Portails, puis redémarrez la box. La liste des chaînes se charge ensuite automatiquement." },
      { q: "Où trouver l'adresse MAC de ma MAG box ?", a: "Dans les réglages système, rubrique informations de l'appareil. Elle utilise le format 00:1A:79:XX:XX:XX et figure généralement aussi sur une étiquette sous la box." },
      { q: "Faut-il une application pour la MAG box ?", a: "Non. La box est un récepteur IPTV natif qui fonctionne directement avec une URL de portail — sans lecteur, sans installation manuelle, sans mises à jour d'application." },
      { q: "Pourquoi mon portail ne charge-t-il pas ?", a: "Presque toujours une faute de frappe dans l'URL, une adresse MAC mal transmise, ou un redémarrage omis. Vérifiez ces trois points ; notre support contrôle l'association de son côté sur demande." },
      { q: "Puis-je utiliser le même abonnement sur mon téléphone ?", a: "Oui. Nous envoyons également des identifiants Xtream Codes pour la même durée, qui permettent de regarder sur téléphone, tablette ou un second appareil." },
    ],
    cta: "Activer ma MAG Box",
  },
};

// =============================================================================
// /iptv-canada — "iptv canada" (27,100/mo, KD 14, +49% YoY) + "best iptv canada"
// (4,400, KD 37) + "iptv subscription canada" (720, KD 10). Largest cluster found.
// =============================================================================
content["iptv-canada"] = {
  en: {
    metaTitle: "IPTV Canada — 66,000+ Channels, NHL & Bilingual, from $5/mo",
    metaDesc:
      "IPTV for Canada: Canadian and international channels, NHL, NBA, MLB and MLS, English and French programming in 4K/8K. No contract, active in 5 minutes, from $5/mo.",
    eyebrow: "IPTV Canada · From $5/mo",
    h1: "IPTV for",
    h1Accent: "Canada",
    intro:
      "Canadian and international channels in one subscription, with NHL, NBA, MLB and MLS live, English and French programming, and 66,000+ channels in 4K/8K — delivered over the internet you already pay for. No cable contract, no rented box, activated in under 5 minutes from $5/mo.",
    cover: "/blog/iptv-canada-main-en.jpg",
    image: {
      src: "/blog/iptv-canada-body-en.jpg",
      alt: "What a Canadian household replaces with one IPTV subscription: cable package, box rental and paid sports add-ons.",
      caption: "One subscription in place of a cable package and its sports tier.",
    },
    features: [
      { h: "NHL, NBA, MLB, MLS", p: "Around 4,200 sport channels covering the leagues Canadians actually follow, plus international football." },
      { h: "English and French", p: "Programming in both official languages, alongside channels from around the world." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 with adaptive bitrate, so fast motion on ice or court stays clean." },
      { h: "From $5/mo", p: "1, 3, 6 and 12-month plans, no contract, with a 7-day money-back guarantee." },
    ],
    sections: [
      { h: "Why Canadian households are leaving cable", p: "Canadian television has long been among the more expensive in the developed world once you total the base package, the box rental and the sports tier that carries the games you actually want. The commitment usually runs a year or two on top. IPTV changes the arithmetic rather than the living room: the same television, the same sofa, but the signal arrives over the internet connection already in the house. With ATV Corner that is 66,000+ channels and a library of 70,000+ films and 18,000+ series from $5/mo, with nothing mounted on the wall and no contract to escape later." },
      { h: "Hockey, basketball and the rest of the sporting calendar", p: "Sport is the reason most Canadian households hesitate to cut the cord, because the leagues that matter tend to sit behind a premium tier sold separately. Around 4,200 sport channels are included here by default, covering NHL, NBA, MLB and MLS alongside international football — the Premier League, La Liga, Serie A, Bundesliga, Ligue 1 and the Champions League — plus UFC, Formula 1 and MotoGP. For anyone following a European league from Canada, that international layer is usually the part a domestic package cannot match at any price." },
      { h: "Both official languages, and dozens more", p: "A Canadian channel list that ignores French is only half useful, and one that stops at English and French misses much of what the country actually watches. The catalogue carries programming in both official languages alongside channels from across Europe, the Middle East, Asia and Latin America. For bilingual households, and for families who want news or entertainment from where they grew up, that breadth is generally the deciding factor rather than the price — a domestic cable package simply does not carry it." },
      { h: "Winter, bandwidth and why stability matters here", p: "An IPTV stream is continuous and real time, with no large buffer to smooth over a dip, so a steady connection matters more than a high headline speed. Plan on roughly 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the device you actually watch on rather than a laptop elsewhere in the house. A consistent 30 Mbps line will outperform an erratic 200 Mbps one. Where the device offers an ethernet port, use it — that single change removes most buffering complaints, and it matters most on a Saturday night when everyone is watching at once." },
      { h: "Which devices work in a Canadian home", p: "Almost certainly one already in the house. Samsung and LG smart televisions, Sony, TCL and Hisense sets running Android TV or Google TV, the Amazon Fire TV Stick, Apple TV, MAG boxes, Enigma2 receivers, iPhones, iPads, Android phones and tablets, and computers on Windows, macOS and Linux all work. The playback app is your choice: TiviMate, IBO Player and IPTV Smarters Pro are the established options, and VLC handles a plain M3U link for a quick check." },
      { h: "How activation works", p: "There is no technician and no appointment window to wait through. You choose a term, complete payment, and your credentials arrive on WhatsApp within five minutes — either an Xtream Codes trio of server URL, username and password, or an M3U link. You enter those once into your chosen app and it loads the full channel list, a multi-day programme guide and the film and series catalogue by itself. Most people are watching within ten minutes of deciding to subscribe, from anywhere with a stable connection." },
      { h: "What it costs against a Canadian cable bill", p: "Total an honest month: the base package, the box rental, the HD fee, the sports tier, and a second box if another room needs one. Many households land well into three figures. An ATV Corner annual plan is $65 — for twelve months, not one. The monthly plan is $16, three months $33, six months $55. Every term carries the same catalogue, the same 4K/8K quality and the same 24/7 support; the only variable is the cost per month, which is why the annual plan works out cheapest by a wide margin." },
      { h: "Test it before you cancel anything", p: "Because IPTV runs over your internet line rather than the cable outlet, it works in parallel with whatever you have now. That makes the sensible order obvious: start a free 24-hour trial, run it alongside your current service for a week or two — deliberately including prime time and a live game, since that is when server capacity reveals itself — and only then decide whether to cancel. No credit card is needed for the trial, and every paid plan carries a 7-day money-back guarantee on top of it." },
    ],
    faq: [
      { q: "Does IPTV work across Canada?", a: "Yes. It runs over your internet connection rather than a cable line, so your province matters only insofar as your broadband is stable. Plan on 10 Mbps for HD and 25 Mbps for smooth 4K." },
      { q: "Can I watch NHL and NBA games?", a: "Yes. Around 4,200 sport channels are included, covering NHL, NBA, MLB and MLS alongside international football — without the paid sports tier a cable package charges for." },
      { q: "Are French-language channels included?", a: "Yes. The catalogue carries programming in both official languages, plus channels from Europe, the Middle East, Asia and Latin America." },
      { q: "How much does IPTV cost in Canada?", a: "Plans start at $16 for one month and drop to about $5/mo on the annual $65 plan. Every plan includes 66,000+ channels, 4K/8K quality and 24/7 support." },
      { q: "Can I try it before subscribing?", a: "Yes. A free 24-hour trial runs without a credit card and works alongside your existing service, so you can compare directly before cancelling anything." },
    ],
    cta: "Start my Canada subscription",
  },
  de: {
    metaTitle: "IPTV Kanada — 66.000+ Sender, NHL & zweisprachig, ab 5 €/Monat",
    metaDesc:
      "IPTV für Kanada: kanadische und internationale Sender, NHL, NBA, MLB und MLS, Programme auf Englisch und Französisch in 4K/8K. Ohne Vertrag, in 5 Minuten aktiv.",
    eyebrow: "IPTV Kanada · Ab 5 €/Monat",
    h1: "IPTV für",
    h1Accent: "Kanada",
    intro:
      "Kanadische und internationale Sender in einem Abo, mit NHL, NBA, MLB und MLS live, Programmen auf Englisch und Französisch sowie 66.000+ Sendern in 4K/8K — über die Internetleitung, die Sie ohnehin bezahlen. Ohne Kabelvertrag, ohne Mietreceiver, in unter 5 Minuten aktiv ab 5 €/Monat.",
    cover: "/blog/iptv-canada-main-de.jpg",
    image: {
      src: "/blog/iptv-canada-body-de.jpg",
      alt: "Was ein kanadischer Haushalt mit einem IPTV-Abo ersetzt: Kabelpaket, Receiver-Miete und kostenpflichtige Sportpakete.",
      caption: "Ein Abo statt Kabelpaket und kostenpflichtiger Sportstufe.",
    },
    features: [
      { h: "NHL, NBA, MLB, MLS", p: "Rund 4.200 Sportkanäle mit den Ligen, die in Kanada zählen, dazu internationaler Fußball." },
      { h: "Englisch und Französisch", p: "Programme in beiden Amtssprachen, dazu Sender aus aller Welt." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 mit adaptiver Bitrate — schnelle Bewegungen auf Eis und Court bleiben sauber." },
      { h: "Ab 5 €/Monat", p: "Laufzeiten von 1, 3, 6 und 12 Monaten, ohne Bindung, mit 7 Tagen Geld-zurück-Garantie." },
    ],
    sections: [
      { h: "Warum kanadische Haushalte das Kabel verlassen", p: "Kanadisches Fernsehen gehört seit Langem zu den teureren weltweit, sobald man Grundpaket, Receiver-Miete und jene Sportstufe zusammenrechnet, die tatsächlich die gewünschten Spiele enthält. Dazu kommt meist eine Bindung über ein bis zwei Jahre. IPTV verändert nicht das Wohnzimmer, sondern die Rechnung: derselbe Fernseher, dasselbe Sofa, aber das Signal kommt über die Internetleitung, die im Haus ohnehin liegt. Bei ATV Corner sind das 66.000+ Sender und eine Bibliothek mit 70.000+ Filmen und 18.000+ Serien ab 5 €/Monat, ohne Wandmontage und ohne Vertrag, aus dem man später wieder herauskommen muss." },
      { h: "Eishockey, Basketball und der restliche Sportkalender", p: "Sport ist der Grund, warum die meisten kanadischen Haushalte vor dem Wechsel zögern, denn ausgerechnet die entscheidenden Ligen liegen in einer separat verkauften Premiumstufe. Hier sind rund 4.200 Sportkanäle standardmäßig enthalten und decken NHL, NBA, MLB und MLS ab, dazu internationalen Fußball — Premier League, La Liga, Serie A, Bundesliga, Ligue 1 und Champions League — sowie UFC, Formel 1 und MotoGP. Wer aus Kanada eine europäische Liga verfolgt, findet genau in dieser internationalen Ebene das, was ein rein nationales Paket zu keinem Preis bietet." },
      { h: "Beide Amtssprachen — und Dutzende weitere", p: "Eine kanadische Senderliste, die Französisch ignoriert, ist nur halb brauchbar, und eine, die bei Englisch und Französisch aufhört, verfehlt einen großen Teil dessen, was im Land tatsächlich geschaut wird. Der Katalog enthält Programme in beiden Amtssprachen sowie Sender aus Europa, dem Nahen Osten, Asien und Lateinamerika. Für zweisprachige Haushalte und für Familien, die Nachrichten oder Unterhaltung aus ihrer Herkunftsregion sehen möchten, ist diese Breite meist ausschlaggebender als der Preis — ein nationales Kabelpaket führt sie schlicht nicht." },
      { h: "Winter, Bandbreite und warum Stabilität hier zählt", p: "Ein IPTV-Stream läuft kontinuierlich in Echtzeit und hat keinen großen Puffer, der einen Einbruch ausgleicht. Deshalb zählt eine gleichmäßige Verbindung mehr als eine hohe Zahl im Tarif. Rechnen Sie mit etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen auf dem Gerät, auf dem Sie wirklich schauen, und nicht auf einem Notebook im Nebenzimmer. Eine konstante 30-Mbit-Leitung schlägt eine schwankende 200-Mbit-Leitung. Wo das Gerät einen Ethernet-Anschluss hat, nutzen Sie ihn — diese eine Änderung beseitigt die meisten Buffering-Beschwerden, und sie wirkt am stärksten am Samstagabend, wenn alle gleichzeitig schauen." },
      { h: "Welche Geräte in einem kanadischen Haushalt funktionieren", p: "Mit hoher Wahrscheinlichkeit eines, das ohnehin im Haus steht. Smart TVs von Samsung und LG, Geräte von Sony, TCL und Hisense unter Android TV oder Google TV, der Amazon Fire TV Stick, Apple TV, MAG-Boxen, Enigma2-Receiver, iPhones, iPads, Android-Handys und -Tablets sowie Computer unter Windows, macOS und Linux funktionieren alle. Die Abspiel-App wählen Sie selbst: TiviMate, IBO Player und IPTV Smarters Pro sind etabliert, VLC verarbeitet für eine schnelle Prüfung einen einfachen M3U-Link." },
      { h: "Wie die Aktivierung abläuft", p: "Es gibt keinen Techniker und kein Zeitfenster, auf das man warten müsste. Sie wählen eine Laufzeit, schließen die Zahlung ab, und Ihre Zugangsdaten kommen innerhalb von fünf Minuten per WhatsApp — entweder als Xtream-Codes-Trio aus Server-URL, Benutzername und Passwort oder als M3U-Link. Diese tragen Sie einmal in die gewünschte App ein, die daraufhin selbstständig die vollständige Senderliste, einen mehrtägigen Programmführer sowie den Film- und Serienkatalog lädt. Die meisten schauen zehn Minuten nach der Kaufentscheidung." },
      { h: "Was es gegen eine kanadische Kabelrechnung kostet", p: "Rechnen Sie einen ehrlichen Monat zusammen: Grundpaket, Receiver-Miete, HD-Gebühr, Sportstufe und ein zweiter Receiver, falls ein weiteres Zimmer versorgt werden soll. Viele Haushalte landen deutlich im dreistelligen Bereich. Ein ATV Corner Jahresabo kostet 60 € — für zwölf Monate, nicht für einen. Der Monatstarif liegt bei 15 €, drei Monate bei 30 €, sechs Monate bei 50 €. Jede Laufzeit enthält denselben Katalog, dieselbe 4K/8K-Qualität und denselben 24/7-Support; die einzige Variable ist der Preis pro Monat." },
      { h: "Testen, bevor Sie irgendetwas kündigen", p: "Weil IPTV über Ihre Internetleitung läuft und nicht über die Kabeldose, funktioniert es parallel zu dem, was Sie heute haben. Damit ist die sinnvolle Reihenfolge offensichtlich: Starten Sie einen kostenlosen 24-Stunden-Test, lassen Sie ihn ein bis zwei Wochen neben dem bestehenden Dienst laufen — bewusst inklusive Prime Time und eines Live-Spiels, denn dann zeigt sich die Serverkapazität — und entscheiden Sie erst danach über die Kündigung. Für den Test ist keine Kreditkarte nötig, und auf jedes bezahlte Abo kommt zusätzlich eine 7-tägige Geld-zurück-Garantie." },
    ],
    faq: [
      { q: "Funktioniert IPTV in ganz Kanada?", a: "Ja. Es läuft über Ihre Internetverbindung statt über eine Kabelleitung; die Provinz spielt nur insofern eine Rolle, als Ihr Anschluss stabil sein muss. Rechnen Sie mit 10 Mbit/s für HD und 25 Mbit/s für flüssiges 4K." },
      { q: "Kann ich NHL- und NBA-Spiele sehen?", a: "Ja. Rund 4.200 Sportkanäle sind enthalten und decken NHL, NBA, MLB und MLS sowie internationalen Fußball ab — ohne die kostenpflichtige Sportstufe eines Kabelpakets." },
      { q: "Sind französischsprachige Sender enthalten?", a: "Ja. Der Katalog enthält Programme in beiden Amtssprachen sowie Sender aus Europa, dem Nahen Osten, Asien und Lateinamerika." },
      { q: "Was kostet IPTV für Kanada?", a: "Die Abos starten bei 15 € für einen Monat und sinken auf etwa 5 €/Monat im Jahresabo für 60 €. Jedes Abo enthält 66.000+ Sender, 4K/8K-Qualität und 24/7-Support." },
      { q: "Kann ich vor dem Abo testen?", a: "Ja. Ein kostenloser 24-Stunden-Test läuft ohne Kreditkarte und parallel zu Ihrem bestehenden Dienst, sodass Sie direkt vergleichen können, bevor Sie etwas kündigen." },
    ],
    cta: "Kanada-Abo starten",
  },
  fr: {
    metaTitle: "IPTV Canada — 66 000+ chaînes, LNH & bilingue, dès 5 €/mois",
    metaDesc:
      "IPTV pour le Canada : chaînes canadiennes et internationales, LNH, NBA, MLB et MLS, programmes en anglais et en français en 4K/8K. Sans engagement, actif en 5 minutes.",
    eyebrow: "IPTV Canada · Dès 5 €/mois",
    h1: "L'IPTV pour le",
    h1Accent: "Canada",
    intro:
      "Chaînes canadiennes et internationales dans un seul abonnement, avec la LNH, la NBA, la MLB et la MLS en direct, des programmes en anglais et en français, et 66 000+ chaînes en 4K/8K — via la connexion internet que vous payez déjà. Sans contrat câble, sans décodeur en location, actif en moins de 5 minutes dès 5 €/mois.",
    cover: "/blog/iptv-canada-main-fr.jpg",
    image: {
      src: "/blog/iptv-canada-body-fr.jpg",
      alt: "Ce qu'un foyer canadien remplace avec un abonnement IPTV : bouquet câble, location de décodeur et options sport payantes.",
      caption: "Un abonnement à la place d'un bouquet câble et de son option sport.",
    },
    features: [
      { h: "LNH, NBA, MLB, MLS", p: "Environ 4 200 chaînes sport couvrant les ligues que suivent les Canadiens, plus le football international." },
      { h: "Anglais et français", p: "Des programmes dans les deux langues officielles, aux côtés de chaînes du monde entier." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 avec bitrate adaptatif : les mouvements rapides sur glace ou sur parquet restent nets." },
      { h: "Dès 5 €/mois", p: "Formules 1, 3, 6 et 12 mois, sans engagement, avec garantie satisfait ou remboursé 7 jours." },
    ],
    sections: [
      { h: "Pourquoi les foyers canadiens quittent le câble", p: "La télévision canadienne compte depuis longtemps parmi les plus chères des pays développés, une fois additionnés le bouquet de base, la location du décodeur et l'option sport qui contient réellement les matchs souhaités. S'y ajoute généralement un engagement d'un à deux ans. L'IPTV ne change pas le salon mais le calcul : le même téléviseur, le même canapé, mais le signal arrive par la connexion internet déjà présente. Chez ATV Corner, cela représente 66 000+ chaînes et une bibliothèque de 70 000+ films et 18 000+ séries dès 5 €/mois, sans installation murale ni contrat dont il faudra sortir." },
      { h: "Hockey, basketball et le reste du calendrier sportif", p: "Le sport est la raison pour laquelle la plupart des foyers canadiens hésitent à couper le câble, car les ligues qui comptent se trouvent dans une offre premium vendue séparément. Ici, environ 4 200 chaînes sport sont incluses par défaut et couvrent la LNH, la NBA, la MLB et la MLS, aux côtés du football international — Premier League, La Liga, Serie A, Bundesliga, Ligue 1 et Champions League — ainsi que l'UFC, la Formule 1 et le MotoGP. Pour qui suit un championnat européen depuis le Canada, cette couche internationale est précisément ce qu'un bouquet national ne propose à aucun prix." },
      { h: "Les deux langues officielles — et des dizaines d'autres", p: "Une liste de chaînes canadienne qui ignore le français n'est qu'à moitié utile, et une qui s'arrête à l'anglais et au français manque une grande part de ce que le pays regarde réellement. Le catalogue propose des programmes dans les deux langues officielles ainsi que des chaînes d'Europe, du Moyen-Orient, d'Asie et d'Amérique latine. Pour les foyers bilingues, et pour les familles qui souhaitent de l'information ou du divertissement de leur région d'origine, cette ampleur pèse généralement plus que le prix — un bouquet câble national ne la propose tout simplement pas." },
      { h: "Hiver, débit et pourquoi la stabilité compte ici", p: "Un flux IPTV est continu et en temps réel, sans gros tampon pour absorber un creux : une connexion régulière compte donc plus qu'un chiffre élevé dans l'offre. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil où vous regardez vraiment et non sur un portable ailleurs dans la maison. Une ligne constante à 30 Mbps surpasse une ligne instable à 200 Mbps. Là où l'appareil dispose d'un port ethernet, utilisez-le : ce seul changement élimine la plupart des plaintes de buffering, et il pèse surtout le samedi soir." },
      { h: "Quels appareils fonctionnent dans un foyer canadien", p: "Très probablement un qui se trouve déjà dans la maison. Les Smart TV Samsung et LG, les téléviseurs Sony, TCL et Hisense sous Android TV ou Google TV, l'Amazon Fire TV Stick, l'Apple TV, les MAG box, les récepteurs Enigma2, iPhone, iPad, téléphones et tablettes Android, ainsi que les ordinateurs sous Windows, macOS et Linux fonctionnent tous. L'application de lecture est votre choix : TiviMate, IBO Player et IPTV Smarters Pro sont établies, et VLC gère un simple lien M3U pour une vérification rapide." },
      { h: "Comment se passe l'activation", p: "Aucun technicien, aucune plage horaire à attendre. Vous choisissez une durée, réglez le paiement, et vos identifiants arrivent en moins de cinq minutes par WhatsApp — soit un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit un lien M3U. Vous les saisissez une fois dans l'application choisie, qui charge ensuite d'elle-même la liste complète des chaînes, un guide sur plusieurs jours et le catalogue de films et séries. La plupart des gens regardent dix minutes après avoir décidé." },
      { h: "Ce que cela coûte face à une facture câble canadienne", p: "Additionnez un mois honnête : bouquet de base, location du décodeur, supplément HD, option sport et un second décodeur si une autre pièce doit être desservie. Beaucoup de foyers dépassent largement les trois chiffres. Un abonnement annuel ATV Corner coûte 60 € — pour douze mois, pas pour un. La formule mensuelle est à 15 €, trois mois à 30 €, six mois à 50 €. Chaque durée inclut le même catalogue, la même qualité 4K/8K et le même support 24/7 ; la seule variable est le coût mensuel." },
      { h: "Testez avant de résilier quoi que ce soit", p: "Comme l'IPTV passe par votre ligne internet et non par la prise câble, elle fonctionne en parallèle de ce que vous avez aujourd'hui. L'ordre logique s'impose : lancez un essai gratuit de 24 heures, faites-le tourner une à deux semaines à côté de votre service actuel — en incluant délibérément les heures de pointe et un match en direct, car c'est là que la capacité serveur se révèle — puis décidez seulement ensuite de résilier. Aucune carte bancaire n'est requise pour l'essai, et chaque formule payante s'accompagne en plus d'une garantie de 7 jours." },
    ],
    faq: [
      { q: "L'IPTV fonctionne-t-elle partout au Canada ?", a: "Oui. Elle passe par votre connexion internet plutôt que par une ligne câble ; votre province ne compte que dans la mesure où votre débit doit être stable. Prévoyez 10 Mbps pour la HD et 25 Mbps pour une 4K fluide." },
      { q: "Puis-je regarder les matchs de LNH et de NBA ?", a: "Oui. Environ 4 200 chaînes sport sont incluses, couvrant LNH, NBA, MLB et MLS ainsi que le football international — sans l'option sport payante d'un bouquet câble." },
      { q: "Les chaînes francophones sont-elles incluses ?", a: "Oui. Le catalogue propose des programmes dans les deux langues officielles, plus des chaînes d'Europe, du Moyen-Orient, d'Asie et d'Amérique latine." },
      { q: "Combien coûte l'IPTV au Canada ?", a: "Les formules démarrent à 15 € pour un mois et descendent à environ 5 €/mois avec l'abonnement annuel à 60 €. Chaque formule inclut 66 000+ chaînes, la 4K/8K et le support 24/7." },
      { q: "Puis-je essayer avant de m'abonner ?", a: "Oui. Un essai gratuit de 24 heures fonctionne sans carte bancaire et en parallèle de votre service existant, ce qui permet de comparer avant de résilier quoi que ce soit." },
    ],
    cta: "Démarrer mon abonnement Canada",
  },
};

// =============================================================================
// /iptv-uk — "iptv uk" (12,100/mo, KD 0) + "iptv subscription uk" (2,900, KD 2,
// +21% YoY) + "best iptv uk" (2,400, KD 1, CPC $5.30). Lowest-difficulty cluster.
// =============================================================================
content["iptv-uk"] = {
  en: {
    metaTitle: "IPTV UK — 66,000+ Channels, Premier League & 4K from $5/mo",
    metaDesc:
      "IPTV for the UK: British and international channels, Premier League and Champions League, 66,000+ channels in 4K/8K. No contract, active in 5 minutes, from $5/mo.",
    eyebrow: "IPTV UK · From $5/mo",
    h1: "IPTV for the",
    h1Accent: "United Kingdom",
    intro:
      "British and international channels in one subscription, with the Premier League, the Champions League and 66,000+ channels in 4K/8K — delivered over the broadband you already pay for. No aerial, no satellite dish, no contract, activated in under 5 minutes from $5/mo.",
    cover: "/blog/iptv-uk-main-en.jpg",
    image: {
      src: "/blog/iptv-uk-body-en.jpg",
      alt: "What a UK household replaces with one IPTV subscription: satellite package, box rental and paid sports channels.",
      caption: "One subscription in place of a satellite package and its sports add-ons.",
    },
    features: [
      { h: "Premier League & more", p: "Around 4,200 sport channels covering English football, European leagues, F1 and UFC." },
      { h: "British + international", p: "UK programming alongside channels from across Europe, Asia, Africa and the Americas." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 with adaptive bitrate, so a fast counter-attack stays sharp." },
      { h: "From $5/mo", p: "1, 3, 6 and 12-month plans, no contract, with a 7-day money-back guarantee." },
    ],
    sections: [
      { h: "Why UK households are dropping satellite and cable", p: "A British television package rarely stops at its advertised price. Add the box rental, the HD upgrade and the sports channels that actually carry the matches, and many households pass three figures a month while locked into a twelve or eighteen month term. IPTV changes the delivery rather than the room: the same television, the same sofa, but the signal comes over the broadband already in the house. With ATV Corner that means 66,000+ channels and a library of 70,000+ films and 18,000+ series from $5/mo, with no dish on the wall and no contract to argue your way out of later." },
      { h: "Football, and the rest of the sporting calendar", p: "Sport is the reason most British households hesitate, because the fixtures people care about are split across premium tiers sold separately — and following a full season often means paying two providers rather than one. Around 4,200 sport channels are included here by default, covering English football alongside La Liga, Serie A, Bundesliga, Ligue 1 and the Champions League, plus the NBA, NFL, UFC, Formula 1 and MotoGP. For anyone who follows more than one competition, that breadth is usually where the saving actually comes from." },
      { h: "International channels a domestic package will not carry", p: "The UK is one of the most linguistically varied countries in Europe, and a channel list that stops at British programming misses much of what households actually watch. The catalogue carries channels from across Europe, the Middle East, Asia, Africa and the Americas alongside UK programming. For families who want news, drama or sport from where they or their parents grew up, that layer is generally the deciding factor rather than the monthly price, because no domestic package offers it at any tier." },
      { h: "Broadband, and what stability really requires", p: "An IPTV stream is continuous and real time, with no large buffer to absorb a dip, so consistency matters more than the headline speed on your bill. Plan on roughly 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the device you actually watch on rather than a laptop upstairs. A steady 30 Mbps line will outperform an erratic 200 Mbps one. Where the device has an ethernet port, use it — that single change removes most buffering complaints, and it matters most at 3pm on a Saturday when the whole street is streaming." },
      { h: "Which devices work in a British home", p: "Almost certainly one already in the house. Samsung and LG smart televisions, Sony, TCL and Hisense sets running Android TV or Google TV, the Amazon Fire TV Stick, Apple TV, MAG boxes, Enigma2 receivers, iPhones, iPads, Android phones and tablets, and computers on Windows, macOS and Linux all work. The playback app is your choice: TiviMate, IBO Player and IPTV Smarters Pro are the established options, and VLC handles a plain M3U link for a quick check." },
      { h: "How activation works", p: "There is no engineer visit and no morning spent waiting for an appointment slot. You choose a term, complete payment, and your credentials arrive on WhatsApp within five minutes — either an Xtream Codes trio of server URL, username and password, or an M3U link. You enter those once into your chosen app and it loads the full channel list, a multi-day programme guide and the film and series catalogue by itself. Most people are watching within ten minutes of deciding to subscribe." },
      { h: "What it costs against a UK TV bill", p: "Total an honest month: the base package, the box rental, the HD fee, the sports channels and a second box if another room needs one. Plenty of households find the real figure well above what they thought they were paying. An ATV Corner annual plan is $65 — for twelve months, not one. The monthly plan is $16, three months $33, six months $55. Every term carries the same catalogue, the same 4K/8K quality and the same 24/7 support, so the only variable is the cost per month." },
      { h: "Test it before you cancel anything", p: "Because IPTV runs over your broadband rather than an aerial or a dish, it works in parallel with whatever you have now. That makes the order obvious: start a free 24-hour trial, run it alongside your current service for a week or two — deliberately including a Saturday afternoon and an evening fixture, since that is when server capacity reveals itself — and only then decide whether to cancel. No credit card is needed for the trial, and every paid plan carries a 7-day money-back guarantee on top." },
    ],
    faq: [
      { q: "Does IPTV work across the UK?", a: "Yes. It runs over your broadband rather than an aerial or satellite dish, so location matters only insofar as your connection is stable. Plan on 10 Mbps for HD and 25 Mbps for smooth 4K." },
      { q: "Can I watch Premier League matches?", a: "Around 4,200 sport channels are included, covering English football alongside the European leagues, the Champions League, NBA, NFL, UFC and Formula 1 — without separate premium sports tiers." },
      { q: "Do I need a dish or an aerial?", a: "No. IPTV is delivered entirely over your internet connection. A Smart TV, Fire TV Stick, Apple TV, phone, tablet or computer is all the hardware required." },
      { q: "How much does IPTV cost in the UK?", a: "Plans start at $16 for one month and drop to about $5/mo on the annual $65 plan. Every plan includes 66,000+ channels, 4K/8K quality and 24/7 support." },
      { q: "Can I try it before subscribing?", a: "Yes. A free 24-hour trial runs without a credit card and works alongside your existing service, so you can compare directly before cancelling anything." },
    ],
    cta: "Start my UK subscription",
  },
  de: {
    metaTitle: "IPTV UK — 66.000+ Sender, Premier League & 4K ab 5 €/Monat",
    metaDesc:
      "IPTV für Großbritannien: britische und internationale Sender, Premier League und Champions League, 66.000+ Sender in 4K/8K. Ohne Vertrag, in 5 Minuten aktiv.",
    eyebrow: "IPTV UK · Ab 5 €/Monat",
    h1: "IPTV für",
    h1Accent: "Großbritannien",
    intro:
      "Britische und internationale Sender in einem Abo, mit Premier League, Champions League und 66.000+ Sendern in 4K/8K — über die Breitbandleitung, die Sie ohnehin bezahlen. Ohne Antenne, ohne Satellitenschüssel, ohne Vertrag, in unter 5 Minuten aktiv ab 5 €/Monat.",
    cover: "/blog/iptv-uk-main-de.jpg",
    image: {
      src: "/blog/iptv-uk-body-de.jpg",
      alt: "Was ein britischer Haushalt mit einem IPTV-Abo ersetzt: Satellitenpaket, Receiver-Miete und kostenpflichtige Sportsender.",
      caption: "Ein Abo statt Satellitenpaket und kostenpflichtiger Sport-Zusätze.",
    },
    features: [
      { h: "Premier League und mehr", p: "Rund 4.200 Sportkanäle mit englischem Fußball, europäischen Ligen, F1 und UFC." },
      { h: "Britisch + international", p: "UK-Programme sowie Sender aus Europa, Asien, Afrika und Amerika." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 mit adaptiver Bitrate — auch ein schneller Konter bleibt scharf." },
      { h: "Ab 5 €/Monat", p: "Laufzeiten von 1, 3, 6 und 12 Monaten, ohne Bindung, mit 7 Tagen Geld-zurück-Garantie." },
    ],
    sections: [
      { h: "Warum britische Haushalte Satellit und Kabel verlassen", p: "Ein britisches Fernsehpaket bleibt selten beim beworbenen Preis. Rechnet man Receiver-Miete, HD-Aufschlag und die Sportsender hinzu, die tatsächlich die Spiele führen, überschreiten viele Haushalte den dreistelligen Bereich pro Monat — bei einer Bindung über zwölf oder achtzehn Monate. IPTV ändert nicht das Zimmer, sondern den Übertragungsweg: derselbe Fernseher, dasselbe Sofa, aber das Signal kommt über das Breitband, das im Haus ohnehin liegt. Bei ATV Corner sind das 66.000+ Sender und eine Bibliothek mit 70.000+ Filmen und 18.000+ Serien ab 5 €/Monat, ohne Schüssel an der Wand." },
      { h: "Fußball und der restliche Sportkalender", p: "Sport ist der Grund, warum die meisten britischen Haushalte zögern, denn die Spiele, die zählen, verteilen sich auf separat verkaufte Premiumstufen — eine ganze Saison zu verfolgen bedeutet oft, zwei Anbieter zu bezahlen statt einen. Hier sind rund 4.200 Sportkanäle standardmäßig enthalten und decken englischen Fußball ebenso ab wie La Liga, Serie A, Bundesliga, Ligue 1 und Champions League, dazu NBA, NFL, UFC, Formel 1 und MotoGP. Wer mehr als einen Wettbewerb verfolgt, findet genau hier die tatsächliche Ersparnis." },
      { h: "Internationale Sender, die kein nationales Paket führt", p: "Großbritannien gehört zu den sprachlich vielfältigsten Ländern Europas, und eine Senderliste, die bei britischen Programmen aufhört, verfehlt einen großen Teil dessen, was Haushalte wirklich schauen. Der Katalog enthält neben UK-Programmen Sender aus Europa, dem Nahen Osten, Asien, Afrika und Amerika. Für Familien, die Nachrichten, Serien oder Sport aus ihrer Herkunftsregion sehen möchten, ist diese Ebene meist ausschlaggebender als der Monatspreis, weil kein nationales Paket sie in irgendeiner Stufe anbietet." },
      { h: "Breitband und was Stabilität wirklich verlangt", p: "Ein IPTV-Stream läuft kontinuierlich in Echtzeit und hat keinen großen Puffer, der einen Einbruch auffängt. Deshalb zählt Gleichmäßigkeit mehr als die Zahl auf Ihrer Rechnung. Rechnen Sie mit etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen auf dem Gerät, auf dem Sie wirklich schauen, und nicht auf einem Notebook im Obergeschoss. Eine konstante 30-Mbit-Leitung schlägt eine schwankende 200-Mbit-Leitung. Wo das Gerät einen Ethernet-Anschluss hat, nutzen Sie ihn — das beseitigt die meisten Buffering-Beschwerden, gerade samstagnachmittags." },
      { h: "Welche Geräte in einem britischen Haushalt funktionieren", p: "Mit hoher Wahrscheinlichkeit eines, das ohnehin im Haus steht. Smart TVs von Samsung und LG, Geräte von Sony, TCL und Hisense unter Android TV oder Google TV, der Amazon Fire TV Stick, Apple TV, MAG-Boxen, Enigma2-Receiver, iPhones, iPads, Android-Handys und -Tablets sowie Computer unter Windows, macOS und Linux funktionieren alle. Die Abspiel-App wählen Sie selbst: TiviMate, IBO Player und IPTV Smarters Pro sind etabliert, VLC verarbeitet einen einfachen M3U-Link." },
      { h: "Wie die Aktivierung abläuft", p: "Es gibt keinen Technikerbesuch und keinen Vormittag, den man auf ein Zeitfenster verwendet. Sie wählen eine Laufzeit, schließen die Zahlung ab, und Ihre Zugangsdaten kommen innerhalb von fünf Minuten per WhatsApp — entweder als Xtream-Codes-Trio aus Server-URL, Benutzername und Passwort oder als M3U-Link. Diese tragen Sie einmal in die gewünschte App ein, die daraufhin selbstständig Senderliste, mehrtägigen Programmführer sowie Film- und Serienkatalog lädt. Die meisten schauen zehn Minuten nach der Entscheidung." },
      { h: "Was es gegen eine britische TV-Rechnung kostet", p: "Rechnen Sie einen ehrlichen Monat zusammen: Grundpaket, Receiver-Miete, HD-Gebühr, Sportsender und ein zweiter Receiver, falls ein weiteres Zimmer versorgt werden soll. Viele Haushalte stellen fest, dass der reale Betrag deutlich über dem liegt, was sie zu zahlen glaubten. Ein ATV Corner Jahresabo kostet 60 € — für zwölf Monate, nicht für einen. Der Monatstarif liegt bei 15 €, drei Monate bei 30 €, sechs Monate bei 50 €. Jede Laufzeit enthält denselben Katalog und denselben Support." },
      { h: "Testen, bevor Sie irgendetwas kündigen", p: "Weil IPTV über Ihr Breitband läuft und nicht über Antenne oder Schüssel, funktioniert es parallel zu dem, was Sie heute haben. Damit ist die Reihenfolge offensichtlich: Starten Sie einen kostenlosen 24-Stunden-Test, lassen Sie ihn ein bis zwei Wochen neben dem bestehenden Dienst laufen — bewusst inklusive eines Samstagnachmittags und eines Abendspiels, denn dann zeigt sich die Serverkapazität — und entscheiden Sie erst danach. Für den Test ist keine Kreditkarte nötig, dazu kommt eine 7-tägige Geld-zurück-Garantie." },
      {
        h: "Mehrere Geräte und Zimmer im selben Haushalt",
        p: "Die Zugangsdaten sind an das Abo gebunden und nicht an ein einzelnes Gerät. Sie können sie also auf dem Fernseher im Wohnzimmer, auf einem zweiten Gerät im Schlafzimmer und auf Handy oder Tablet hinterlegen, ohne erneut zu kaufen. Beim Kabel wäre dafür ein zweiter Mietreceiver samt monatlicher Gebühr nötig. Zu beachten ist allein die Zahl gleichzeitiger Verbindungen, die Ihre Formel erlaubt: Wenn zwei Personen zur selben Zeit unterschiedliche Sender schauen möchten, brauchen Sie entsprechend mehr davon. Wie viele in Ihrem Haushalt sinnvoll sind, klären wir vor dem Kauf in einer kurzen Nachricht auf WhatsApp.",
      },
    ],
    faq: [
      { q: "Funktioniert IPTV in ganz Großbritannien?", a: "Ja. Es läuft über Ihr Breitband statt über Antenne oder Satellit; der Standort spielt nur insofern eine Rolle, als Ihre Verbindung stabil sein muss. Rechnen Sie mit 10 Mbit/s für HD und 25 Mbit/s für flüssiges 4K." },
      { q: "Kann ich Premier-League-Spiele sehen?", a: "Rund 4.200 Sportkanäle sind enthalten und decken englischen Fußball sowie die europäischen Ligen, Champions League, NBA, NFL, UFC und Formel 1 ab — ohne separate Premium-Sportstufen." },
      { q: "Brauche ich eine Schüssel oder Antenne?", a: "Nein. IPTV wird vollständig über Ihre Internetverbindung geliefert. Ein Smart TV, Fire TV Stick, Apple TV, Handy, Tablet oder Computer genügt als Hardware." },
      { q: "Was kostet IPTV in Großbritannien?", a: "Die Abos starten bei 15 € für einen Monat und sinken auf etwa 5 €/Monat im Jahresabo für 60 €. Jedes Abo enthält 66.000+ Sender, 4K/8K und 24/7-Support." },
      { q: "Kann ich vor dem Abo testen?", a: "Ja. Ein kostenloser 24-Stunden-Test läuft ohne Kreditkarte und parallel zu Ihrem bestehenden Dienst, sodass Sie vor einer Kündigung direkt vergleichen können." },
    ],
    cta: "UK-Abo starten",
  },
  fr: {
    metaTitle: "IPTV Royaume-Uni — 66 000+ chaînes, Premier League dès 5 €/mois",
    metaDesc:
      "IPTV pour le Royaume-Uni : chaînes britanniques et internationales, Premier League et Champions League, 66 000+ chaînes en 4K/8K. Sans engagement, actif en 5 minutes.",
    eyebrow: "IPTV Royaume-Uni · Dès 5 €/mois",
    h1: "L'IPTV pour le",
    h1Accent: "Royaume-Uni",
    intro:
      "Chaînes britanniques et internationales dans un seul abonnement, avec la Premier League, la Champions League et 66 000+ chaînes en 4K/8K — via la connexion que vous payez déjà. Sans antenne, sans parabole, sans engagement, actif en moins de 5 minutes dès 5 €/mois.",
    cover: "/blog/iptv-uk-main-fr.jpg",
    image: {
      src: "/blog/iptv-uk-body-fr.jpg",
      alt: "Ce qu'un foyer britannique remplace avec un abonnement IPTV : bouquet satellite, location de décodeur et chaînes sport payantes.",
      caption: "Un abonnement à la place d'un bouquet satellite et de ses options sport.",
    },
    features: [
      { h: "Premier League et plus", p: "Environ 4 200 chaînes sport couvrant le football anglais, les ligues européennes, la F1 et l'UFC." },
      { h: "Britannique + international", p: "Programmes du Royaume-Uni et chaînes d'Europe, d'Asie, d'Afrique et des Amériques." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 avec bitrate adaptatif : même une contre-attaque rapide reste nette." },
      { h: "Dès 5 €/mois", p: "Formules 1, 3, 6 et 12 mois, sans engagement, avec garantie satisfait ou remboursé 7 jours." },
    ],
    sections: [
      { h: "Pourquoi les foyers britanniques quittent le satellite et le câble", p: "Un bouquet télé britannique s'arrête rarement à son prix affiché. En ajoutant la location du décodeur, le supplément HD et les chaînes sport qui diffusent réellement les matchs, beaucoup de foyers dépassent les trois chiffres par mois, avec un engagement de douze ou dix-huit mois. L'IPTV ne change pas la pièce mais le mode de livraison : le même téléviseur, le même canapé, mais le signal arrive par la connexion déjà présente. Chez ATV Corner, cela représente 66 000+ chaînes et une bibliothèque de 70 000+ films et 18 000+ séries dès 5 €/mois, sans parabole au mur." },
      { h: "Le football et le reste du calendrier sportif", p: "Le sport est la raison pour laquelle la plupart des foyers britanniques hésitent, car les rencontres qui comptent se répartissent entre des offres premium vendues séparément — suivre une saison complète impose souvent de payer deux fournisseurs au lieu d'un. Ici, environ 4 200 chaînes sport sont incluses par défaut et couvrent le football anglais comme La Liga, la Serie A, la Bundesliga, la Ligue 1 et la Champions League, ainsi que la NBA, la NFL, l'UFC, la Formule 1 et le MotoGP. Pour qui suit plusieurs compétitions, c'est précisément là que se situe l'économie." },
      { h: "Des chaînes internationales qu'aucun bouquet national ne propose", p: "Le Royaume-Uni compte parmi les pays les plus divers d'Europe sur le plan linguistique, et une liste de chaînes qui s'arrête aux programmes britanniques manque une grande part de ce que les foyers regardent réellement. Le catalogue propose, à côté des programmes du Royaume-Uni, des chaînes d'Europe, du Moyen-Orient, d'Asie, d'Afrique et des Amériques. Pour les familles qui souhaitent information, fiction ou sport de leur région d'origine, cette couche pèse généralement plus que le prix mensuel, car aucun bouquet national ne la propose." },
      { h: "Le débit et ce que la stabilité exige vraiment", p: "Un flux IPTV est continu et en temps réel, sans gros tampon pour absorber un creux : la régularité compte donc plus que le débit annoncé sur votre facture. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil où vous regardez vraiment et non sur un portable à l'étage. Une ligne constante à 30 Mbps surpasse une ligne instable à 200 Mbps. Là où l'appareil dispose d'un port ethernet, utilisez-le : cela élimine la plupart des plaintes de buffering, surtout le samedi après-midi." },
      { h: "Quels appareils fonctionnent dans un foyer britannique", p: "Très probablement un qui se trouve déjà dans la maison. Les Smart TV Samsung et LG, les téléviseurs Sony, TCL et Hisense sous Android TV ou Google TV, l'Amazon Fire TV Stick, l'Apple TV, les MAG box, les récepteurs Enigma2, iPhone, iPad, téléphones et tablettes Android, ainsi que les ordinateurs sous Windows, macOS et Linux fonctionnent tous. L'application de lecture est votre choix : TiviMate, IBO Player et IPTV Smarters Pro sont établies, et VLC gère un simple lien M3U." },
      { h: "Comment se passe l'activation", p: "Aucune visite de technicien, aucune matinée passée à attendre un créneau. Vous choisissez une durée, réglez le paiement, et vos identifiants arrivent en moins de cinq minutes par WhatsApp — soit un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit un lien M3U. Vous les saisissez une fois dans l'application choisie, qui charge ensuite d'elle-même la liste complète des chaînes, un guide sur plusieurs jours et le catalogue de films et séries." },
      { h: "Ce que cela coûte face à une facture britannique", p: "Additionnez un mois honnête : bouquet de base, location du décodeur, supplément HD, chaînes sport et un second décodeur si une autre pièce doit être desservie. Beaucoup de foyers découvrent que le montant réel dépasse largement ce qu'ils pensaient payer. Un abonnement annuel ATV Corner coûte 60 € — pour douze mois, pas pour un. La formule mensuelle est à 15 €, trois mois à 30 €, six mois à 50 €. Chaque durée inclut le même catalogue et le même support." },
      { h: "Testez avant de résilier quoi que ce soit", p: "Comme l'IPTV passe par votre connexion et non par une antenne ou une parabole, elle fonctionne en parallèle de ce que vous avez aujourd'hui. L'ordre s'impose : lancez un essai gratuit de 24 heures, faites-le tourner une à deux semaines à côté de votre service actuel — en incluant délibérément un samedi après-midi et un match en soirée, car c'est là que la capacité serveur se révèle — puis décidez seulement ensuite. Aucune carte bancaire n'est requise, et une garantie de 7 jours s'ajoute après l'achat." },
    ],
    faq: [
      { q: "L'IPTV fonctionne-t-elle partout au Royaume-Uni ?", a: "Oui. Elle passe par votre connexion plutôt que par une antenne ou une parabole ; l'emplacement ne compte que dans la mesure où votre débit doit être stable. Prévoyez 10 Mbps pour la HD et 25 Mbps pour une 4K fluide." },
      { q: "Puis-je regarder les matchs de Premier League ?", a: "Environ 4 200 chaînes sport sont incluses, couvrant le football anglais ainsi que les ligues européennes, la Champions League, la NBA, la NFL, l'UFC et la Formule 1 — sans offres sport premium séparées." },
      { q: "Faut-il une parabole ou une antenne ?", a: "Non. L'IPTV est livrée entièrement via votre connexion internet. Une Smart TV, un Fire TV Stick, une Apple TV, un téléphone, une tablette ou un ordinateur suffit." },
      { q: "Combien coûte l'IPTV au Royaume-Uni ?", a: "Les formules démarrent à 15 € pour un mois et descendent à environ 5 €/mois avec l'abonnement annuel à 60 €. Chaque formule inclut 66 000+ chaînes, la 4K/8K et le support 24/7." },
      { q: "Puis-je essayer avant de m'abonner ?", a: "Oui. Un essai gratuit de 24 heures fonctionne sans carte bancaire et en parallèle de votre service existant, ce qui permet de comparer avant de résilier." },
    ],
    cta: "Démarrer mon abonnement UK",
  },
};

// =============================================================================
// /iptv-france — "iptv france" (9,900/mo, commercial, CPC 1.60 €). Sits beside
// "abonnement iptv" (22,200) and "meilleur iptv" (8,100), which /iptv-subscription
// and /best-iptv-service already own — this page takes the geo intent only.
// =============================================================================
content["iptv-france"] = {
  fr: {
    metaTitle: "IPTV France — 66 000+ chaînes, Ligue 1 & 4K dès 5 €/mois",
    metaDesc:
      "IPTV pour la France : chaînes françaises et internationales, Ligue 1 et Champions League, 66 000+ chaînes en 4K/8K. Sans engagement, actif en 5 minutes, dès 5 €/mois.",
    eyebrow: "IPTV France · Dès 5 €/mois",
    h1: "L'IPTV pour la",
    h1Accent: "France",
    intro:
      "Les chaînes françaises et internationales dans un seul abonnement, avec la Ligue 1, la Champions League et 66 000+ chaînes en 4K/8K — via la connexion internet que vous payez déjà. Sans box en location, sans engagement, actif en moins de 5 minutes dès 5 €/mois.",
    cover: "/blog/iptv-france-main-fr.jpg",
    image: {
      src: "/blog/iptv-france-body-fr.jpg",
      alt: "Ce qu'un foyer français remplace avec un abonnement IPTV : bouquet opérateur, location de box et options sport payantes.",
      caption: "Un abonnement à la place d'un bouquet opérateur et de ses options.",
    },
    features: [
      { h: "Ligue 1 et Champions League", p: "Environ 4 200 chaînes sport couvrant le football français et européen, la F1 et l'UFC." },
      { h: "Chaînes françaises + monde", p: "Programmes nationaux et régionaux, aux côtés de chaînes d'Europe, du Maghreb, d'Afrique et d'Amérique." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 avec bitrate adaptatif : une contre-attaque rapide reste nette." },
      { h: "Dès 5 €/mois", p: "Formules 1, 3, 6 et 12 mois, sans engagement, garantie satisfait ou remboursé 7 jours." },
    ],
    sections: [
      { h: "Pourquoi les foyers français changent", p: "Un bouquet opérateur français s'arrête rarement à son prix affiché. En ajoutant la location de la box, les options sport et les services de streaming souscrits à côté, beaucoup de foyers dépassent 40 à 100 € par mois sans jamais le voir comme une facture unique. L'IPTV ne change pas le salon mais le mode de livraison : le même téléviseur, mais le signal arrive par la connexion déjà présente. Chez ATV Corner, cela représente 66 000+ chaînes et une bibliothèque de 70 000+ films et 18 000+ séries dès 5 €/mois, sans matériel loué ni engagement." },
      { h: "Le football, et le reste du calendrier", p: "C'est sur le sport que les factures gonflent, car les rencontres qui comptent se répartissent entre des offres vendues séparément — suivre une saison complète impose souvent deux abonnements. Ici, environ 4 200 chaînes sport sont incluses par défaut : Ligue 1, Ligue 2, Coupe de France, Champions League et Europa League, aux côtés de la Premier League, La Liga, Serie A et Bundesliga, ainsi que la NBA, la NFL, l'UFC, la Formule 1 et le MotoGP. Pour qui suit plus d'une compétition, c'est précisément là que se situe l'économie." },
      { h: "Les chaînes internationales qu'aucun bouquet ne propose", p: "La France est l'un des pays les plus divers d'Europe, et une liste de chaînes qui s'arrête aux programmes nationaux manque une grande part de ce que les foyers regardent réellement. Le catalogue propose, à côté des chaînes françaises, des programmes d'Europe, du Maghreb, du Moyen-Orient, d'Afrique subsaharienne et d'Amérique latine. Pour les familles qui souhaitent de l'information ou du divertissement de leur région d'origine, cette couche pèse généralement plus que le prix mensuel, car aucun bouquet national ne la propose à aucun palier." },
      { h: "Fibre, ADSL et ce qu'exige la stabilité", p: "Un flux IPTV est continu et en temps réel, sans gros tampon pour absorber un creux : la régularité compte donc plus que le débit annoncé. Prévoyez environ 10 Mbps pour la HD et au moins 25 Mbps pour une 4K stable, mesurés sur l'appareil où vous regardez et non sur un portable ailleurs. En fibre, la marge est confortable ; en ADSL, la HD reste tout à fait jouable mais la 4K devient exigeante. Là où l'appareil dispose d'un port ethernet, utilisez-le : cela élimine la plupart des plaintes de buffering, surtout en soirée." },
      { h: "Quels appareils fonctionnent en France", p: "Très probablement un que vous possédez déjà. Les Smart TV Samsung et LG, les téléviseurs Sony, TCL et Hisense sous Android TV ou Google TV, l'Amazon Fire TV Stick, l'Apple TV, les MAG box, les récepteurs Enigma2, iPhone, iPad, téléphones et tablettes Android, ainsi que les ordinateurs sous Windows, macOS et Linux fonctionnent tous. L'application est votre choix : TiviMate, IBO Player et IPTV Smarters Pro sont les options établies, et VLC gère un lien M3U pour une vérification rapide." },
      { h: "Comment se passe l'activation", p: "Aucun technicien, aucun créneau à attendre. Vous choisissez une durée, réglez le paiement, et vos identifiants arrivent en moins de cinq minutes par WhatsApp — soit un trio Xtream Codes composé de l'URL du serveur, d'un nom d'utilisateur et d'un mot de passe, soit un lien M3U. Vous les saisissez une fois dans l'application choisie, qui charge ensuite d'elle-même la liste complète des chaînes, un guide sur plusieurs jours et le catalogue de films et séries. La plupart des gens regardent dix minutes après avoir décidé." },
      { h: "Ce que cela coûte face à une facture française", p: "Additionnez un mois honnête : abonnement de base, location de la box, options sport, et les services de streaming souscrits en parallèle. Beaucoup de foyers découvrent un total nettement supérieur à ce qu'ils pensaient payer. Un abonnement annuel ATV Corner coûte 60 € — pour douze mois, pas pour un. La formule mensuelle est à 15 €, trois mois à 30 €, six mois à 50 €. Chaque durée inclut le même catalogue, la même qualité 4K/8K et le même support 24/7 ; la seule variable est le coût mensuel." },
      { h: "Testez avant de résilier quoi que ce soit", p: "Comme l'IPTV passe par votre connexion et non par la prise opérateur, elle fonctionne en parallèle de ce que vous avez aujourd'hui. L'ordre logique s'impose : lancez un essai gratuit de 24 heures, faites-le tourner une à deux semaines à côté de votre offre actuelle — en incluant délibérément un soir de match, car c'est là que la capacité serveur se révèle — puis décidez seulement ensuite. Aucune carte bancaire n'est requise pour l'essai, et chaque formule payante s'accompagne d'une garantie de 7 jours." },
    ],
    faq: [
      { q: "L'IPTV fonctionne-t-elle partout en France ?", a: "Oui. Elle passe par votre connexion internet plutôt que par une prise opérateur ; votre région ne compte que dans la mesure où votre débit doit être stable. Prévoyez 10 Mbps pour la HD et 25 Mbps pour une 4K fluide." },
      { q: "Puis-je regarder la Ligue 1 et la Champions League ?", a: "Oui. Environ 4 200 chaînes sport sont incluses, couvrant le football français et européen ainsi que la NBA, la NFL, l'UFC et la Formule 1 — sans options sport payantes séparées." },
      { q: "Faut-il une box ou un technicien ?", a: "Ni l'un ni l'autre. Une Smart TV, un Fire TV Stick, une Apple TV, un téléphone, une tablette ou un ordinateur suffit, et l'installation se fait à distance en moins de 5 minutes." },
      { q: "Combien coûte l'IPTV en France ?", a: "Les formules démarrent à 15 € pour un mois et descendent à 5 €/mois avec l'abonnement annuel à 60 €. Chaque formule inclut 66 000+ chaînes, la 4K/8K et le support 24/7." },
      { q: "L'ADSL suffit-il pour l'IPTV ?", a: "Pour la HD, oui, dès environ 10 Mbps stables. Pour une 4K fluide, 25 Mbps sont recommandés, ce qui est plus confortable en fibre. La régularité compte plus que le débit maximal." },
    ],
    cta: "Démarrer mon abonnement France",
  },
  de: {
    metaTitle: "IPTV Frankreich — 66.000+ Sender, Ligue 1 & 4K ab 5 €/Monat",
    metaDesc:
      "IPTV für Frankreich: französische und internationale Sender, Ligue 1 und Champions League, 66.000+ Sender in 4K/8K. Ohne Vertrag, in 5 Minuten aktiv, ab 5 €/Monat.",
    eyebrow: "IPTV Frankreich · Ab 5 €/Monat",
    h1: "IPTV für",
    h1Accent: "Frankreich",
    intro:
      "Französische und internationale Sender in einem Abo, mit Ligue 1, Champions League und 66.000+ Sendern in 4K/8K — über die Internetleitung, die Sie ohnehin bezahlen. Ohne Mietbox, ohne Vertragsbindung, in unter 5 Minuten aktiv ab 5 €/Monat.",
    cover: "/blog/iptv-france-main-de.jpg",
    image: {
      src: "/blog/iptv-france-body-de.jpg",
      alt: "Was ein französischer Haushalt mit einem IPTV-Abo ersetzt: Anbieter-Paket, Box-Miete und kostenpflichtige Sportoptionen.",
      caption: "Ein Abo statt Anbieter-Paket und dessen Zusatzoptionen.",
    },
    features: [
      { h: "Ligue 1 und Champions League", p: "Rund 4.200 Sportkanäle mit französischem und europäischem Fußball, F1 und UFC." },
      { h: "Französisch + international", p: "Nationale und regionale Programme, dazu Sender aus Europa, dem Maghreb, Afrika und Amerika." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 mit adaptiver Bitrate — auch ein schneller Konter bleibt scharf." },
      { h: "Ab 5 €/Monat", p: "Laufzeiten 1, 3, 6 und 12 Monate, ohne Bindung, mit 7 Tagen Geld-zurück-Garantie." },
    ],
    sections: [
      { h: "Warum französische Haushalte wechseln", p: "Ein französisches Anbieter-Paket bleibt selten beim beworbenen Preis. Rechnet man Box-Miete, Sportoptionen und die parallel gebuchten Streamingdienste hinzu, überschreiten viele Haushalte 40 bis 100 € im Monat, ohne das je als eine Rechnung zu sehen. IPTV ändert nicht das Wohnzimmer, sondern den Übertragungsweg: derselbe Fernseher, aber das Signal kommt über die vorhandene Leitung. Bei ATV Corner sind das 66.000+ Sender und eine Bibliothek mit 70.000+ Filmen und 18.000+ Serien ab 5 €/Monat, ohne Mietgerät und ohne Bindung." },
      { h: "Fußball und der restliche Kalender", p: "Beim Sport wachsen die Rechnungen, weil die entscheidenden Spiele auf separat verkaufte Angebote verteilt sind — eine ganze Saison zu verfolgen bedeutet oft zwei Abos. Hier sind rund 4.200 Sportkanäle standardmäßig enthalten: Ligue 1, Ligue 2, Coupe de France, Champions League und Europa League, dazu Premier League, La Liga, Serie A und Bundesliga sowie NBA, NFL, UFC, Formel 1 und MotoGP. Wer mehr als einen Wettbewerb verfolgt, findet genau hier die Ersparnis." },
      { h: "Internationale Sender, die kein Paket führt", p: "Frankreich gehört zu den vielfältigsten Ländern Europas, und eine Senderliste, die bei nationalen Programmen aufhört, verfehlt einen großen Teil dessen, was Haushalte wirklich schauen. Der Katalog enthält neben französischen Sendern Programme aus Europa, dem Maghreb, dem Nahen Osten, Subsahara-Afrika und Lateinamerika. Für Familien, die Nachrichten oder Unterhaltung aus ihrer Herkunftsregion sehen möchten, wiegt diese Ebene meist schwerer als der Monatspreis." },
      { h: "Glasfaser, ADSL und was Stabilität verlangt", p: "Ein IPTV-Stream läuft kontinuierlich in Echtzeit ohne großen Puffer — deshalb zählt Gleichmäßigkeit mehr als der beworbene Wert. Rechnen Sie mit etwa 10 Mbit/s für HD und mindestens 25 Mbit/s für stabiles 4K, gemessen am Gerät, auf dem Sie schauen. Mit Glasfaser ist die Reserve komfortabel; über ADSL bleibt HD gut machbar, 4K wird anspruchsvoll. Wo das Gerät einen Ethernet-Anschluss hat, nutzen Sie ihn — das beseitigt die meisten Buffering-Beschwerden, gerade abends." },
      { h: "Welche Geräte funktionieren", p: "Mit hoher Wahrscheinlichkeit eines, das Sie schon besitzen. Smart TVs von Samsung und LG, Geräte von Sony, TCL und Hisense unter Android TV oder Google TV, der Amazon Fire TV Stick, Apple TV, MAG-Boxen, Enigma2-Receiver, iPhones, iPads, Android-Geräte und Computer unter Windows, macOS und Linux funktionieren alle. Die App wählen Sie selbst: TiviMate, IBO Player und IPTV Smarters Pro sind etabliert, VLC verarbeitet einen M3U-Link." },
      { h: "Wie die Aktivierung abläuft", p: "Kein Techniker, kein Zeitfenster. Sie wählen eine Laufzeit, schließen die Zahlung ab, und Ihre Zugangsdaten kommen innerhalb von fünf Minuten per WhatsApp — entweder als Xtream-Codes-Trio oder als M3U-Link. Diese tragen Sie einmal in die App ein, die daraufhin selbstständig Senderliste, mehrtägigen Programmführer sowie Film- und Serienkatalog lädt. Die meisten schauen zehn Minuten nach der Entscheidung." },
      { h: "Was es gegen eine französische Rechnung kostet", p: "Rechnen Sie einen ehrlichen Monat zusammen: Grundabo, Box-Miete, Sportoptionen und die parallel laufenden Streamingdienste. Viele Haushalte stellen fest, dass der reale Betrag deutlich über dem liegt, was sie zu zahlen glaubten. Ein ATV Corner Jahresabo kostet 60 € — für zwölf Monate. Der Monatstarif liegt bei 15 €, drei Monate bei 30 €, sechs Monate bei 50 €. Jede Laufzeit enthält denselben Katalog und denselben Support." },
      { h: "Testen, bevor Sie kündigen", p: "Weil IPTV über Ihre Leitung läuft und nicht über die Anbieter-Dose, funktioniert es parallel zu dem, was Sie heute haben. Die Reihenfolge ist damit klar: Starten Sie einen kostenlosen 24-Stunden-Test, lassen Sie ihn ein bis zwei Wochen neben dem bestehenden Angebot laufen — bewusst inklusive eines Spielabends — und entscheiden Sie erst danach. Für den Test ist keine Kreditkarte nötig, dazu kommt eine 7-tägige Geld-zurück-Garantie." },
      {
        h: "Mehrere Geräte und Zimmer",
        p: "Die Zugangsdaten sind an das Abo gebunden und nicht an ein Gerät. Sie hinterlegen sie also auf dem Fernseher im Wohnzimmer, auf einem zweiten Gerät im Schlafzimmer und auf Handy oder Tablet, ohne erneut zu kaufen. Bei einem Anbieter-Paket wäre dafür eine zweite Mietbox samt monatlicher Gebühr fällig. Zu beachten ist allein die Zahl gleichzeitiger Verbindungen: Wenn zwei Personen zur selben Zeit unterschiedliche Sender schauen möchten, brauchen Sie entsprechend mehr davon. Was in Ihrem Haushalt sinnvoll ist, klären wir vor dem Kauf in einer kurzen Nachricht.",
      },
      {
        h: "Wenn Sie im Ausland leben",
        p: "Ein Fall, der in französischen Vergleichen fast nie vorkommt: Wer außerhalb Frankreichs lebt und französische Programme sehen möchte, findet dafür bei nationalen Anbietern selten eine Lösung, weil deren Angebote an den heimischen Anschluss gebunden sind. Weil IPTV ausschließlich über die Internetverbindung läuft, entfällt diese Bindung — dieselben Zugangsdaten funktionieren dort, wo Sie gerade sind, solange die Leitung stabil ist. Für Auslandsfranzosen und für Haushalte, die ohnehin zwischen zwei Ländern pendeln, ist das häufig der eigentliche Grund für den Wechsel.",
      },
    ],
    faq: [
      { q: "Funktioniert IPTV in ganz Frankreich?", a: "Ja. Es läuft über Ihre Internetverbindung statt über eine Anbieter-Dose; die Region spielt nur insofern eine Rolle, als Ihr Anschluss stabil sein muss. Rechnen Sie mit 10 Mbit/s für HD und 25 Mbit/s für flüssiges 4K." },
      { q: "Kann ich Ligue 1 und Champions League sehen?", a: "Ja. Rund 4.200 Sportkanäle sind enthalten und decken französischen und europäischen Fußball sowie NBA, NFL, UFC und Formel 1 ab — ohne separate Sportoptionen." },
      { q: "Brauche ich eine Box oder einen Techniker?", a: "Weder noch. Ein Smart TV, Fire TV Stick, Apple TV, Handy, Tablet oder Computer genügt, und die Einrichtung erfolgt aus der Ferne in unter 5 Minuten." },
      { q: "Was kostet IPTV in Frankreich?", a: "Die Abos starten bei 15 € für einen Monat und sinken auf 5 €/Monat im Jahresabo für 60 €. Jedes Abo enthält 66.000+ Sender, 4K/8K und 24/7-Support." },
      { q: "Reicht ADSL für IPTV?", a: "Für HD ja, ab etwa 10 stabilen Mbit/s. Für flüssiges 4K werden 25 Mbit/s empfohlen, was mit Glasfaser komfortabler ist. Gleichmäßigkeit zählt mehr als der Maximalwert." },
    ],
    cta: "Frankreich-Abo starten",
  },
  en: {
    metaTitle: "IPTV France — 66,000+ Channels, Ligue 1 & 4K from $5/mo",
    metaDesc:
      "IPTV for France: French and international channels, Ligue 1 and Champions League, 66,000+ channels in 4K/8K. No contract, active in 5 minutes, from $5/mo.",
    eyebrow: "IPTV France · From $5/mo",
    h1: "IPTV for",
    h1Accent: "France",
    intro:
      "French and international channels in one subscription, with Ligue 1, the Champions League and 66,000+ channels in 4K/8K — over the broadband you already pay for. No rented box, no contract, activated in under 5 minutes from $5/mo.",
    cover: "/blog/iptv-france-main-en.jpg",
    image: {
      src: "/blog/iptv-france-body-en.jpg",
      alt: "What a French household replaces with one IPTV subscription: operator package, box rental and paid sport options.",
      caption: "One subscription in place of an operator package and its add-ons.",
    },
    features: [
      { h: "Ligue 1 and Champions League", p: "Around 4,200 sport channels covering French and European football, F1 and UFC." },
      { h: "French + international", p: "National and regional programming alongside channels from Europe, North Africa and the Americas." },
      { h: "4K / 8K Ultra HD", p: "HEVC/H.265 with adaptive bitrate, so a fast counter-attack stays sharp." },
      { h: "From $5/mo", p: "1, 3, 6 and 12-month plans, no contract, with a 7-day money-back guarantee." },
    ],
    sections: [
      { h: "Why French households are switching", p: "A French operator package rarely stops at its advertised price. Add the box rental, the sport options and the streaming services subscribed alongside, and many households pass $45 to $110 a month without ever seeing it as one bill. IPTV changes the delivery rather than the room: the same television, but the signal arrives over the line already in the house. With ATV Corner that means 66,000+ channels and a library of 70,000+ films and 18,000+ series from $5/mo, with no rented hardware and no lock-in." },
      { h: "Football, and the rest of the calendar", p: "Sport is where bills inflate, because the fixtures that matter are split across separately sold offerings — following a full season often means two subscriptions. Here around 4,200 sport channels are included by default: Ligue 1, Ligue 2, Coupe de France, Champions League and Europa League, alongside the Premier League, La Liga, Serie A and Bundesliga, plus the NBA, NFL, UFC, Formula 1 and MotoGP. For anyone following more than one competition, that is exactly where the saving sits." },
      { h: "International channels no package carries", p: "France is among the most diverse countries in Europe, and a channel list that stops at national programming misses much of what households actually watch. Alongside French channels the catalogue carries programming from across Europe, North Africa, the Middle East, sub-Saharan Africa and Latin America. For families who want news or entertainment from where they grew up, that layer generally weighs more than the monthly price." },
      { h: "Fibre, ADSL and what stability requires", p: "An IPTV stream runs continuously in real time with no large buffer, so consistency matters more than the advertised figure. Plan on around 10 Mbps for HD and at least 25 Mbps for stable 4K, measured on the device you watch on. On fibre the headroom is comfortable; over ADSL, HD remains perfectly workable while 4K becomes demanding. Where the device has an ethernet port, use it — that removes most buffering complaints, especially in the evening." },
      { h: "Which devices work", p: "Almost certainly one you already own. Samsung and LG smart televisions, Sony, TCL and Hisense sets on Android TV or Google TV, the Amazon Fire TV Stick, Apple TV, MAG boxes, Enigma2 receivers, iPhones, iPads, Android devices and computers on Windows, macOS and Linux all work. The app is your choice: TiviMate, IBO Player and IPTV Smarters Pro are the established options, and VLC handles an M3U link." },
      { h: "How activation works", p: "No technician and no appointment window. You choose a term, complete payment, and your credentials arrive on WhatsApp within five minutes — either an Xtream Codes trio or an M3U link. You enter those once into your app, which then loads the channel list, a multi-day guide and the film and series catalogue on its own. Most people are watching ten minutes after deciding." },
      { h: "What it costs against a French bill", p: "Total an honest month: the base subscription, the box rental, the sport options and the streaming services running alongside. Many households find the real figure well above what they thought they paid. An ATV Corner annual plan is $65 — for twelve months. The monthly plan is $16, three months $33, six months $55. Every term carries the same catalogue and the same support." },
      { h: "Test before cancelling anything", p: "Because IPTV runs over your line rather than the operator socket, it works in parallel with what you have now. The order is therefore clear: start a free 24-hour trial, run it alongside your current offering for a week or two — deliberately including a match night — and only then decide. No credit card is needed for the trial, and a 7-day money-back guarantee applies on top." },
      {
        h: "Several devices and rooms",
        p: "Credentials are tied to the subscription rather than to a device. You can therefore enter them on the living-room television, a second set in the bedroom and a phone or tablet, without buying anything again. With an operator package that would mean a second rented box and a monthly fee. The only thing to watch is the number of simultaneous connections: if two people want different channels at the same moment, you need more of them. What makes sense for your household we settle before purchase in a short message.",
      },
      {
        h: "If you live outside France",
        p: "A case that almost never appears in French comparisons: anyone living outside France who wants French programming rarely finds a solution with domestic providers, because their offerings are tied to a home connection. Since IPTV runs purely over the internet, that tie disappears — the same credentials work wherever you are, as long as the line is stable. For French expatriates, and for households that split time between two countries, this is frequently the actual reason for switching.",
      },
    ],
    faq: [
      { q: "Does IPTV work across France?", a: "Yes. It runs over your internet connection rather than an operator socket, so your region matters only insofar as your line is stable. Plan on 10 Mbps for HD and 25 Mbps for smooth 4K." },
      { q: "Can I watch Ligue 1 and the Champions League?", a: "Yes. Around 4,200 sport channels are included, covering French and European football plus the NBA, NFL, UFC and Formula 1 — with no separate paid sport options." },
      { q: "Do I need a box or a technician?", a: "Neither. A Smart TV, Fire TV Stick, Apple TV, phone, tablet or computer is enough, and setup is remote in under 5 minutes." },
      { q: "How much does IPTV cost in France?", a: "Plans start at $16 for one month and drop to about $5/mo on the annual $65 plan. Every plan includes 66,000+ channels, 4K/8K and 24/7 support." },
      { q: "Is ADSL enough for IPTV?", a: "For HD yes, from around 10 stable Mbps. For smooth 4K, 25 Mbps is recommended, which is more comfortable on fibre. Consistency matters more than the maximum figure." },
    ],
    cta: "Start my France subscription",
  },
};

/**
 * Locales fall back when a translation has not landed yet, so adding a locale
 * never breaks the build or 500s a page. es/it fall back to English.
 */
const FALLBACK: Record<Locale, Locale[]> = {
  fr: ["en"],
  en: ["fr"],
  de: ["en", "fr"],
  es: ["en", "fr"],
  it: ["en", "fr"],
};

// --- es/it for /iptv-subscription -------------------------------------------
content["iptv-subscription"].es = {
  metaTitle: "Suscripción IPTV — 66.000+ canales, 4K/8K y prueba gratis",
  metaDesc:
    "Suscripción IPTV de ATV Corner: 66.000+ canales, 70.000+ películas y series en 4K/8K. Desde 5 €/mes, activación en 5 minutos, prueba gratuita y garantía de 7 días.",
  eyebrow: "Suscripción IPTV · Desde 5 €/mes",
  h1: "La suscripción IPTV",
  h1Accent: "sin concesiones",
  intro:
    "Una suscripción IPTV de ATV Corner te da acceso a más de 66.000 canales internacionales y a 70.000 películas y series en 4K/8K Ultra HD, en cualquier pantalla. Activada en menos de 5 minutos, sin permanencia, desde 5 €/mes.",
  features: [
    { h: "66.000+ canales", p: "Deporte, cine, series, informativos, infantil y canales de todo el mundo en una sola suscripción." },
    { h: "4K / 8K Ultra HD", p: "Codificación HEVC/H.265 y bitrate adaptativo para una imagen nítida, incluso en deporte en directo." },
    { h: "Desde 5 €/mes", p: "Planes de 1, 3, 6 y 12 meses. El plan anual sale a 5 €/mes, sin costes ocultos." },
    { h: "Activa en 5 min", p: "Tus credenciales Xtream Codes o tu enlace M3U llegan por WhatsApp justo después del pago." },
  ],
  sections: [
    { h: "¿Qué es una suscripción IPTV?", p: "Una suscripción IPTV (Internet Protocol Television) entrega televisión en directo y bajo demanda a través de tu conexión a internet, sin antena ni descodificador de cable. Con ATV Corner, una sola suscripción desbloquea más de 66.000 canales y una biblioteca de 70.000 películas y 18.000 series. La emisión llega en tiempo real a tu Smart TV, Firestick, móvil o box, con guía de programación (EPG) integrada. Es más contenido que un paquete de cable o satélite, por una fracción del precio." },
    { h: "Cómo elegir la duración de tu suscripción", p: "ATV Corner ofrece cuatro duraciones: 1 mes para probar (15 €), 3 meses (30 €), 6 meses (50 €) y 12 meses (60 €, es decir 5 €/mes). Cuanto más larga es la duración, menor es el coste mensual. Todos los planes incluyen exactamente el mismo catálogo, la misma calidad 4K/8K y el mismo soporte 24/7: no pagas más por mejor imagen. Puedes empezar con una prueba gratuita de 24 horas para comprobar la estabilidad antes de comprometerte y pasar después al plan anual, que es el más económico." },
    { h: "Una suscripción, todos tus dispositivos", p: "Tu suscripción IPTV de ATV Corner funciona en Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS y Linux, mediante las aplicaciones TiviMate, IBO Player, IPTV Smarters Pro o VLC. Puedes ver en casa y continuar en el móvil sin reinstalar nada. El soporte técnico te acompaña por WhatsApp en menos de 5 minutos para configurar cada dispositivo." },
    { h: "Qué duración conviene a quién", p: "Los cuatro planes incluyen el mismo catálogo, la misma calidad y el mismo soporte; la única diferencia es el coste por mes. El plan mensual de 15 € tiene sentido si quieres seguir el servicio durante una temporada o un torneo concreto. Tres meses por 30 € equivalen a 10 €/mes y cubren normalmente media temporada deportiva. Seis meses por 50 € se sitúan en torno a 8,30 €/mes. El plan anual de 60 € baja el coste a 5 €/mes, con diferencia el más barato. Como no hay renovación automática, elegir una duración larga no conlleva ningún riesgo." },
    { h: "Qué recibes después del pago", p: "Tus credenciales llegan por WhatsApp en menos de cinco minutos. Según el formato que prefieras, será un trío Xtream Codes con URL del servidor, usuario y contraseña, o un enlace M3U. Xtream Codes es la opción más moderna: el reproductor carga canales, guía, películas y series de forma dinámica y solo cuando hace falta, lo que resulta notablemente más rápido con un catálogo grande. El M3U es una única URL de lista, adecuada para VLC o Kodi. Ambos entregan exactamente el mismo contenido." },
    { h: "Varios dispositivos en el mismo hogar", p: "Una suscripción está vinculada a tus credenciales, no a un dispositivo concreto. Puedes introducir los mismos datos en el televisor del salón, en un móvil y en una tableta, y retomar la reproducción en cada uno sin volver a comprar nada. Lo único a tener en cuenta es el número de conexiones simultáneas que permite tu plan: si varias personas quieren ver canales distintos al mismo tiempo, necesitarás más. Cuántas te convienen depende del hogar; si tienes dudas, pregúntanos antes de comprar y lo resolvemos en un mensaje." },
    { h: "Cancelación, renovación y reembolso", p: "No hay renovación automática. Tu acceso simplemente caduca al final de la duración contratada y decides activamente si vuelves a contratar. Eso elimina las fricciones habituales de preavisos, formularios y plazos incumplidos propias de los contratos de cable y satélite. Durante los siete primeros días se aplica además una garantía de devolución: si la calidad o la estabilidad no te convencen, reembolsamos el importe íntegro. Como puedes probar gratis 24 horas antes, ese caso debería ser raro." },
    { h: "Cómo saber antes de comprar si te encaja", p: "La prueba más fiable dura un cuarto de hora y no cuesta nada. Inicia el acceso gratuito de 24 horas deliberadamente en un momento en el que sueles ver la televisión: para el deporte, a la hora del partido y no por la mañana. Comprueba tres cosas: que los canales que ves realmente estén en la lista y funcionen de forma estable, que la guía de programación esté correctamente cargada y que la imagen se mantenga fluida en tu dispositivo concreto. Si algo falla, escríbenos: casi siempre es un ajuste que se corrige en dos minutos." },
  ],
  faq: [
    { q: "¿Cuánto cuesta una suscripción IPTV de ATV Corner?", a: "Las suscripciones empiezan en 15 € por un mes y bajan a 5 €/mes con el plan anual de 60 €. Todos los planes incluyen 66.000+ canales, calidad 4K/8K y soporte 24/7." },
    { q: "¿La suscripción tiene permanencia?", a: "No. Sin permanencia y sin renovación automática. Tú eliges la duración y renuevas solo si quieres, con una garantía de devolución de 7 días." },
    { q: "¿Puedo probar antes de pagar?", a: "Sí, hay una prueba gratuita de 24 horas sin tarjeta de crédito. Pruebas el acceso completo y te suscribes solo si la calidad te convence." },
    { q: "¿En cuánto tiempo se activa la suscripción?", a: "En menos de 5 minutos. Tras el pago recibes tus credenciales Xtream Codes o tu enlace M3U por WhatsApp o correo, listos para usar." },
    { q: "¿En qué dispositivos funciona la suscripción?", a: "En Smart TV, Fire TV Stick, Apple TV, móviles, tabletas, MAG Box, Enigma2 y ordenadores, mediante TiviMate, IBO Player, IPTV Smarters Pro o VLC." },
  ],
  cta: "Iniciar mi suscripción",
};

content["iptv-subscription"].it = {
  metaTitle: "Abbonamento IPTV — 66.000+ canali, 4K/8K e prova gratuita",
  metaDesc:
    "Abbonamento IPTV di ATV Corner: 66.000+ canali, 70.000+ film e serie in 4K/8K. Da 5 €/mese, attivazione in 5 minuti, prova gratuita e garanzia di 7 giorni.",
  eyebrow: "Abbonamento IPTV · Da 5 €/mese",
  h1: "L'abbonamento IPTV",
  h1Accent: "senza compromessi",
  intro:
    "Un abbonamento IPTV di ATV Corner ti dà accesso a oltre 66.000 canali internazionali e a 70.000 film e serie in 4K/8K Ultra HD, su ogni schermo. Attivo in meno di 5 minuti, senza vincoli, da 5 €/mese.",
  features: [
    { h: "66.000+ canali", p: "Sport, cinema, serie, informazione, bambini e canali da tutto il mondo in un solo abbonamento." },
    { h: "4K / 8K Ultra HD", p: "Codifica HEVC/H.265 e bitrate adattivo per un'immagine nitida, anche sullo sport in diretta." },
    { h: "Da 5 €/mese", p: "Piani da 1, 3, 6 e 12 mesi. Il piano annuale equivale a 5 €/mese, senza costi nascosti." },
    { h: "Attivo in 5 min", p: "Le credenziali Xtream Codes o il link M3U arrivano su WhatsApp subito dopo il pagamento." },
  ],
  sections: [
    { h: "Che cos'è un abbonamento IPTV?", p: "Un abbonamento IPTV (Internet Protocol Television) porta la televisione in diretta e on demand attraverso la tua connessione internet, senza antenna né decoder via cavo. Con ATV Corner, un solo abbonamento sblocca oltre 66.000 canali e una libreria di 70.000 film e 18.000 serie. Il flusso arriva in tempo reale sulla tua Smart TV, sul Firestick, sul telefono o sulla box, con guida ai programmi (EPG) integrata. È più contenuto di un pacchetto via cavo o satellitare, a una frazione del prezzo." },
    { h: "Come scegliere la durata dell'abbonamento", p: "ATV Corner propone quattro durate: 1 mese per provare (15 €), 3 mesi (30 €), 6 mesi (50 €) e 12 mesi (60 €, cioè 5 €/mese). Più lunga è la durata, più basso è il costo mensile. Tutti i piani includono esattamente lo stesso catalogo, la stessa qualità 4K/8K e la stessa assistenza 24/7: non paghi di più per un'immagine migliore. Puoi iniziare con una prova gratuita di 24 ore per verificare la stabilità prima di impegnarti e passare poi al piano annuale, il più conveniente." },
    { h: "Un abbonamento, tutti i tuoi dispositivi", p: "Il tuo abbonamento IPTV ATV Corner funziona su Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2, Windows, macOS e Linux, tramite le app TiviMate, IBO Player, IPTV Smarters Pro o VLC. Puoi guardare a casa e riprendere sul telefono senza reinstallare nulla. L'assistenza tecnica ti segue su WhatsApp in meno di 5 minuti per configurare ogni dispositivo." },
    { h: "Quale durata conviene a chi", p: "I quattro piani includono lo stesso catalogo, la stessa qualità e la stessa assistenza; l'unica differenza è il costo mensile. Il piano mensile da 15 € ha senso se vuoi seguire il servizio per una stagione o un torneo specifico. Tre mesi a 30 € equivalgono a 10 €/mese e coprono di norma metà stagione sportiva. Sei mesi a 50 € si attestano intorno a 8,30 €/mese. Il piano annuale a 60 € abbassa il costo a 5 €/mese, di gran lunga il più economico. Poiché non c'è rinnovo automatico, scegliere una durata lunga non comporta alcun rischio." },
    { h: "Cosa ricevi dopo il pagamento", p: "Le credenziali arrivano su WhatsApp in meno di cinque minuti. A seconda del formato che preferisci, sarà un trio Xtream Codes con URL del server, nome utente e password, oppure un link M3U. Xtream Codes è l'opzione più moderna: il lettore carica canali, guida, film e serie in modo dinamico e solo quando serve, il che risulta molto più rapido con un catalogo ampio. L'M3U è un singolo URL di playlist, adatto a VLC o Kodi. Entrambi forniscono esattamente lo stesso contenuto." },
    { h: "Più dispositivi nella stessa casa", p: "Un abbonamento è legato alle tue credenziali, non a un singolo dispositivo. Puoi inserire gli stessi dati sul televisore del salotto, su un telefono e su un tablet, e riprendere la visione su ciascuno senza acquistare nulla di nuovo. L'unico aspetto da considerare è il numero di connessioni simultanee consentite dal tuo piano: se più persone vogliono guardare canali diversi nello stesso momento, ne servono di più. Quante ne occorrono dipende dalla famiglia; in caso di dubbio chiedi prima dell'acquisto e lo risolviamo in un messaggio." },
    { h: "Disdetta, rinnovo e rimborso", p: "Non c'è rinnovo automatico. Il tuo accesso scade semplicemente al termine della durata acquistata e sei tu a decidere attivamente se acquistare di nuovo. Questo elimina le solite seccature di preavvisi, moduli e scadenze mancate tipiche dei contratti via cavo e satellitari. Nei primi sette giorni si applica inoltre una garanzia di rimborso: se qualità o stabilità non convincono, rimborsiamo l'intero importo. Poiché puoi provare gratuitamente per 24 ore prima, questo caso dovrebbe essere raro." },
    { h: "Come capire prima dell'acquisto se fa per te", p: "La verifica più affidabile dura un quarto d'ora e non costa nulla. Avvia l'accesso gratuito di 24 ore deliberatamente in un momento in cui guardi di solito la televisione: per lo sport, all'ora della partita e non di mattina. Controlla tre cose: che i canali che guardi davvero siano nell'elenco e funzionino in modo stabile, che la guida ai programmi sia caricata correttamente e che l'immagine resti fluida sul tuo dispositivo specifico. Se qualcosa non va, scrivici: quasi sempre è un'impostazione che si corregge in due minuti." },
  ],
  faq: [
    { q: "Quanto costa un abbonamento IPTV di ATV Corner?", a: "Gli abbonamenti partono da 15 € per un mese e scendono a 5 €/mese con il piano annuale da 60 €. Tutti i piani includono 66.000+ canali, qualità 4K/8K e assistenza 24/7." },
    { q: "L'abbonamento è senza vincoli?", a: "Sì. Nessun vincolo e nessun rinnovo automatico. Scegli tu la durata e rinnovi solo se vuoi, con una garanzia di rimborso di 7 giorni." },
    { q: "Posso provare prima di pagare?", a: "Sì, è disponibile una prova gratuita di 24 ore senza carta di credito. Provi l'accesso completo e ti abboni solo se la qualità ti convince." },
    { q: "In quanto tempo si attiva l'abbonamento?", a: "In meno di 5 minuti. Dopo il pagamento ricevi le credenziali Xtream Codes o il link M3U via WhatsApp o email, pronti all'uso." },
    { q: "Su quali dispositivi funziona l'abbonamento?", a: "Su Smart TV, Fire TV Stick, Apple TV, telefoni, tablet, MAG Box, Enigma2 e computer, tramite TiviMate, IBO Player, IPTV Smarters Pro o VLC." },
  ],
  cta: "Avvia il mio abbonamento",
};

// --- es/it for /iptv-free-trial ---------------------------------------------
content["iptv-free-trial"].es = {
  metaTitle: "Prueba IPTV gratis 24 h — sin tarjeta, activa en 5 minutos",
  metaDesc:
    "Prueba IPTV gratuita de 24 horas sin tarjeta de crédito: 66.000+ canales en 4K/8K, activación por WhatsApp en 5 minutos. Compruébalo antes de pagar nada.",
  eyebrow: "Prueba gratis 24 h · Sin tarjeta",
  h1: "Prueba IPTV",
  h1Accent: "gratis 24 horas",
  intro:
    "Comprueba el servicio en tu propio televisor antes de pagar nada: 24 horas de acceso completo a más de 66.000 canales en 4K/8K, sin tarjeta de crédito y activado por WhatsApp en menos de 5 minutos.",
  features: [
    { h: "Sin tarjeta de crédito", p: "No pedimos datos de pago para la prueba. Solo un mensaje de WhatsApp." },
    { h: "Acceso completo", p: "La prueba incluye el catálogo entero, no una selección reducida." },
    { h: "Activa en 5 minutos", p: "Recibes credenciales Xtream Codes o un enlace M3U listos para usar." },
    { h: "Sin compromiso", p: "Si no te convence, no haces nada: la prueba caduca sola." },
  ],
  sections: [
    { h: "Por qué probar antes de pagar", p: "Ninguna reseña te dice si un servicio funciona en tu casa, con tu conexión y en tu televisor. Eso solo lo demuestra una prueba. Por eso ofrecemos 24 horas de acceso completo sin pedir datos de pago: si el servicio no convence, no has arriesgado nada, y si convence, has comprobado exactamente lo que vas a comprar. Un proveedor que te deja verificar primero y pagar después tiene menos incentivos para ocultar nada." },
    { h: "Cómo funciona la prueba", p: "Escríbenos por WhatsApp indicando qué dispositivo usas. Te devolvemos unas credenciales Xtream Codes (URL del servidor, usuario y contraseña) o un enlace M3U, junto con la aplicación recomendada para tu equipo. Las introduces una vez y el reproductor carga la lista completa de canales, la guía de programación de varios días y el catálogo de películas y series. Todo el proceso suele durar menos de cinco minutos y no requiere conocimientos técnicos." },
    { h: "Qué comprobar durante las 24 horas", p: "Tres cosas, y en este orden. Primero, que los canales que realmente ves estén en la lista: no te fijes en el número total, busca los tuyos. Segundo, que la guía de programación aparezca correctamente rellenada, porque una guía vacía hace incómodo el uso diario. Tercero, y más importante, que la imagen se mantenga estable en horario de máxima audiencia o a la hora de un partido: por la mañana casi cualquier servicio funciona bien, así que probar entonces no demuestra nada." },
    { h: "El momento adecuado para probar", p: "Este punto decide el valor de toda la prueba. La capacidad de servidor de un proveedor solo se revela cuando muchos espectadores piden el mismo flujo a la vez, es decir entre las 20 y las 23 horas o durante un partido concurrido. Si inicias la prueba un martes por la mañana, obtendrás un resultado excelente que no te dice nada sobre cómo se comportará el servicio cuando de verdad lo necesites. Elige deliberadamente el peor momento posible." },
    { h: "Qué necesitas", p: "Una conexión estable desde 10 Mbps para HD o 25 Mbps para 4K fluido, medidos en el aparato donde vas a ver, y un dispositivo que probablemente ya tengas: Smart TV, Fire TV Stick, Apple TV, móvil, tableta, MAG Box o un ordenador. La aplicación la eliges tú entre TiviMate, IBO Player, IPTV Smarters Pro o VLC. No hace falta comprar nada ni instalar equipos adicionales." },
    { h: "Qué pasa cuando termina la prueba", p: "Nada automático. El acceso simplemente caduca y decides tú si quieres suscribirte. No guardamos datos de pago porque nunca los pedimos, así que no hay ningún cobro que cancelar ni ninguna suscripción que interrumpir. Si decides continuar, eliges una duración —desde 15 € por un mes hasta 60 € por doce, es decir 5 €/mes— y a partir de la compra se aplica además una garantía de devolución de 7 días." },
    { h: "Cómo se compara con una prueba de cable o satélite", p: "Los operadores clásicos también ofrecen ofertas de entrada, pero casi siempre exigen tarjeta, un contrato de doce o veinticuatro meses y un plazo de preaviso que hay que recordar. La promoción es barata; lo caro llega después, cuando el precio sube automáticamente y ya estás dentro de la permanencia. Nuestra prueba invierte esa lógica: no hay contrato que empiece, ningún precio que suba y nada que cancelar a tiempo. Terminas las 24 horas exactamente en la misma posición en la que empezaste, salvo que ahora sabes si el servicio funciona en tu casa." },
    { h: "Errores frecuentes que arruinan una prueba", p: "El más común es probar sobre Wi-Fi débil y culpar al proveedor de los cortes. Si puedes, conecta el televisor por cable durante la prueba, o al menos sitúate cerca del router. El segundo error es juzgar el servicio por un único canal: si un canal concreto falla y los demás van perfectos, el problema es de esa fuente y no del servidor. El tercero es instalar tres aplicaciones a la vez y confundirse con ajustes distintos; empieza con una sola, la que te recomendemos para tu dispositivo, y añade otras después si quieres comparar." },
    { h: "Si algo no funciona durante la prueba", p: "Escríbenos en ese mismo momento en lugar de descartar el servicio. La mayoría de los problemas durante una prueba no son del servicio sino de la configuración: un modo de decodificación equivocado en la aplicación, una conexión Wi-Fi saturada o una guía que necesita recargarse. Nuestro soporte responde por WhatsApp en menos de cinco minutos y revisa el ajuste contigo. Si aun así no funciona, lo sabrás con certeza y no habrás pagado nada." },
  ],
  faq: [
    { q: "¿La prueba IPTV es realmente gratuita?", a: "Sí. 24 horas de acceso completo sin tarjeta de crédito y sin datos de pago. La prueba caduca sola, no hay nada que cancelar." },
    { q: "¿Qué incluye la prueba?", a: "El catálogo completo: más de 66.000 canales, 70.000 películas y 18.000 series en 4K/8K, con guía de programación. No es una selección reducida." },
    { q: "¿Cuándo conviene hacer la prueba?", a: "En horario de máxima audiencia o a la hora de un partido. Por la mañana casi cualquier servicio va bien, así que probar entonces no demuestra nada sobre la capacidad del servidor." },
    { q: "¿Qué necesito para probar?", a: "Una conexión desde 10 Mbps para HD o 25 Mbps para 4K, y un dispositivo que ya tengas: Smart TV, Fire TV Stick, Apple TV, móvil, tableta u ordenador." },
    { q: "¿Qué pasa al terminar las 24 horas?", a: "El acceso caduca y decides tú si te suscribes. No hay cobros automáticos porque nunca pedimos datos de pago para la prueba." },
  ],
  cta: "Solicitar mi prueba gratis",
};

content["iptv-free-trial"].it = {
  metaTitle: "Prova IPTV gratuita 24 h — senza carta, attiva in 5 minuti",
  metaDesc:
    "Prova IPTV gratuita di 24 ore senza carta di credito: 66.000+ canali in 4K/8K, attivazione via WhatsApp in 5 minuti. Verifica prima di pagare qualsiasi cosa.",
  eyebrow: "Prova gratuita 24 h · Senza carta",
  h1: "Prova IPTV",
  h1Accent: "gratuita 24 ore",
  intro:
    "Verifica il servizio sul tuo televisore prima di pagare qualsiasi cosa: 24 ore di accesso completo a oltre 66.000 canali in 4K/8K, senza carta di credito e attivato su WhatsApp in meno di 5 minuti.",
  features: [
    { h: "Senza carta di credito", p: "Non chiediamo dati di pagamento per la prova. Basta un messaggio WhatsApp." },
    { h: "Accesso completo", p: "La prova include l'intero catalogo, non una selezione ridotta." },
    { h: "Attiva in 5 minuti", p: "Ricevi credenziali Xtream Codes o un link M3U pronti all'uso." },
    { h: "Nessun impegno", p: "Se non convince, non fai nulla: la prova scade da sola." },
  ],
  sections: [
    { h: "Perché provare prima di pagare", p: "Nessuna recensione può dirti se un servizio funziona a casa tua, con la tua connessione e sul tuo televisore. Solo una prova lo dimostra. Per questo offriamo 24 ore di accesso completo senza chiedere dati di pagamento: se il servizio non convince non hai rischiato nulla, e se convince hai verificato esattamente ciò che stai per acquistare. Un fornitore che ti lascia controllare prima e pagare dopo ha meno interesse a nascondere qualcosa." },
    { h: "Come funziona la prova", p: "Scrivici su WhatsApp indicando quale dispositivo usi. Ti rispondiamo con credenziali Xtream Codes (URL del server, nome utente e password) o un link M3U, insieme all'app consigliata per il tuo apparecchio. Le inserisci una volta e il lettore carica l'elenco completo dei canali, la guida ai programmi di più giorni e il catalogo di film e serie. L'intera procedura dura di norma meno di cinque minuti e non richiede conoscenze tecniche." },
    { h: "Cosa verificare nelle 24 ore", p: "Tre cose, e in quest'ordine. Primo, che i canali che guardi davvero siano nell'elenco: non guardare il numero totale, cerca i tuoi. Secondo, che la guida ai programmi risulti correttamente popolata, perché una guida vuota rende scomodo l'uso quotidiano. Terzo, e più importante, che l'immagine resti stabile in prima serata o all'ora di una partita: di mattina quasi ogni servizio funziona bene, quindi provare allora non dimostra nulla." },
    { h: "Il momento giusto per provare", p: "Questo punto decide il valore dell'intera prova. La capacità server di un fornitore si rivela solo quando molti spettatori richiedono lo stesso flusso contemporaneamente, cioè tra le 20 e le 23 o durante una partita molto seguita. Se avvii la prova un martedì mattina otterrai un risultato eccellente che non dice nulla su come si comporterà il servizio quando ti servirà davvero. Scegli deliberatamente il momento peggiore possibile." },
    { h: "Cosa ti serve", p: "Una connessione stabile da 10 Mbps per l'HD o 25 Mbps per un 4K fluido, misurati sull'apparecchio su cui guarderai, e un dispositivo che probabilmente possiedi già: Smart TV, Fire TV Stick, Apple TV, telefono, tablet, MAG Box o un computer. L'app la scegli tu tra TiviMate, IBO Player, IPTV Smarters Pro o VLC. Non serve acquistare né installare hardware aggiuntivo." },
    { h: "Cosa succede quando la prova finisce", p: "Nulla di automatico. L'accesso semplicemente scade e sei tu a decidere se abbonarti. Non conserviamo dati di pagamento perché non li chiediamo mai, quindi non c'è alcun addebito da annullare né alcun abbonamento da interrompere. Se decidi di continuare, scegli una durata — da 15 € per un mese fino a 60 € per dodici, cioè 5 €/mese — e dall'acquisto si applica inoltre una garanzia di rimborso di 7 giorni." },
    { h: "Come si confronta con una prova via cavo o satellitare", p: "Gli operatori classici propongono anch'essi offerte d'ingresso, ma quasi sempre richiedono una carta, un contratto di dodici o ventiquattro mesi e un termine di disdetta da ricordare. La promozione costa poco; il costo vero arriva dopo, quando il prezzo sale automaticamente e sei già dentro il vincolo. La nostra prova ribalta questa logica: non c'è alcun contratto che parte, nessun prezzo che sale e nulla da disdire in tempo. Finisci le 24 ore esattamente nella posizione in cui hai iniziato, con in più la certezza di sapere se il servizio funziona a casa tua." },
    { h: "Errori frequenti che rovinano una prova", p: "Il più comune è provare su un Wi-Fi debole e attribuire al fornitore le interruzioni. Se possibile, collega il televisore via cavo durante la prova, o almeno sistemati vicino al router. Il secondo errore è giudicare il servizio da un solo canale: se un canale specifico si blocca e gli altri vanno perfettamente, il problema è di quella sorgente e non del server. Il terzo è installare tre app contemporaneamente e confondersi tra impostazioni diverse; parti da una sola, quella che ti consigliamo per il tuo dispositivo, e aggiungine altre dopo se vuoi confrontare." },
    { h: "Se qualcosa non funziona durante la prova", p: "Scrivici in quel momento invece di scartare il servizio. La maggior parte dei problemi durante una prova non riguarda il servizio ma la configurazione: una modalità di decodifica sbagliata nell'app, una connessione Wi-Fi satura o una guida da ricaricare. La nostra assistenza risponde su WhatsApp in meno di cinque minuti e verifica l'impostazione con te. Se comunque non funziona, lo saprai con certezza e non avrai pagato nulla." },
  ],
  faq: [
    { q: "La prova IPTV è davvero gratuita?", a: "Sì. 24 ore di accesso completo senza carta di credito e senza dati di pagamento. La prova scade da sola, non c'è nulla da disdire." },
    { q: "Cosa include la prova?", a: "Il catalogo completo: oltre 66.000 canali, 70.000 film e 18.000 serie in 4K/8K, con guida ai programmi. Non è una selezione ridotta." },
    { q: "Quando conviene fare la prova?", a: "In prima serata o all'ora di una partita. Di mattina quasi ogni servizio funziona bene, quindi provare allora non dimostra nulla sulla capacità del server." },
    { q: "Cosa mi serve per provare?", a: "Una connessione da 10 Mbps per l'HD o 25 Mbps per il 4K, e un dispositivo che già possiedi: Smart TV, Fire TV Stick, Apple TV, telefono, tablet o computer." },
    { q: "Cosa succede dopo le 24 ore?", a: "L'accesso scade e decidi tu se abbonarti. Non ci sono addebiti automatici perché non chiediamo mai dati di pagamento per la prova." },
  ],
  cta: "Richiedi la prova gratuita",
};

// --- es/it for /best-iptv-service -------------------------------------------
content["best-iptv-service"].es = {
  metaTitle: "El mejor servicio IPTV en 2026 — cómo elegir sin equivocarte",
  metaDesc:
    "Qué distingue a un buen servicio IPTV: estabilidad en directo, catálogo real, guía completa y soporte. Criterios verificables y prueba gratis de 24 h.",
  eyebrow: "Guía de compra · Actualizada 2026",
  h1: "El mejor servicio IPTV",
  h1Accent: "y cómo reconocerlo",
  intro:
    "No existe un «mejor servicio IPTV» universal: existe el que aguanta la hora del partido con tu conexión y tiene tus canales. Estos son los criterios que puedes verificar tú mismo, y cómo los cumple ATV Corner con 66.000+ canales desde 5 €/mes.",
  features: [
    { h: "Estabilidad en directo", p: "Lo único que de verdad separa a los proveedores: aguantar en horario punta." },
    { h: "Catálogo verificable", p: "66.000+ canales, 70.000 películas y 18.000 series, comprobables en la prueba." },
    { h: "Soporte real", p: "Respuesta por WhatsApp en menos de 5 minutos, no un formulario sin respuesta." },
    { h: "Prueba antes de pagar", p: "24 horas de acceso completo sin tarjeta, y garantía de 7 días después." },
  ],
  sections: [
    { h: "Por qué las listas de «mejores servicios» sirven de poco", p: "La mayoría de las clasificaciones que encontrarás comparan cifras de catálogo y precios, que son precisamente los dos datos más fáciles de inflar y los que menos predicen tu experiencia. Un proveedor puede anunciar 100.000 canales contando duplicados, versiones regionales y emisiones muertas. Lo que decide si estarás contento dentro de tres meses es algo que ninguna lista puede medir por ti: si el flujo aguanta en tu casa, con tu conexión, a la hora en la que tú ves la televisión." },
    { h: "Criterio 1 — Estabilidad en horario punta", p: "Este es el criterio que realmente separa a los proveedores, y el único que hay que probar activamente. Entre las 20 y las 23 horas, y sobre todo durante un partido muy seguido, miles de espectadores piden el mismo flujo al mismo tiempo. Un servidor infradimensionado se nota justo ahí: microcortes, caída de resolución o congelación en el momento del gol. Cualquier proveedor va bien un martes por la mañana, así que una prueba matinal no demuestra absolutamente nada." },
    { h: "Criterio 2 — Tus canales, no el número total", p: "Ignora la cifra global y haz una lista de los ocho o diez canales que ves de verdad. Después comprueba, uno a uno, que estén presentes y funcionen. Un servicio con 30.000 canales que incluye los tuyos es infinitamente mejor para ti que uno con 100.000 que no los tiene. Presta atención también a las versiones: un canal deportivo puede existir en la lista pero solo en un idioma que no entiendes o en una versión regional sin los derechos que te interesan." },
    { h: "Criterio 3 — La guía de programación", p: "La EPG es el detalle que separa un servicio utilizable a diario de una lista de enlaces. Sin guía tienes que recordar qué se emite y cuándo, saltar de canal a ciegas y renunciar a cualquier función de grabación programada. Una buena guía cubre varios días, se corresponde con el canal correcto y está en el idioma adecuado. Es también un buen indicador de seriedad: mantener la EPG cuesta trabajo, así que un proveedor que la cuida suele cuidar el resto." },
    { h: "Criterio 4 — Calidad de imagen real", p: "«4K» en una página de precios no significa que todo el catálogo esté en 4K, y ningún proveedor honesto lo pretendería: la resolución depende de la fuente. Lo que sí puedes exigir es codificación HEVC/H.265 y bitrate adaptativo, que permiten mantener la imagen fluida cuando tu conexión fluctúa en lugar de congelar la reproducción. Compruébalo en la prueba mirando un canal en movimiento rápido, como fútbol o motor: ahí es donde la compresión mala se hace visible al instante." },
    { h: "Criterio 5 — Soporte que responde", p: "Antes o después necesitarás ayuda: un dispositivo nuevo, una aplicación actualizada, un ajuste que se ha perdido. Lo relevante no es que exista una página de contacto sino cuánto tarda una respuesta útil. Pruébalo antes de comprar: escribe una pregunta técnica concreta durante la prueba gratuita y mide el tiempo. Nuestro soporte responde por WhatsApp en menos de cinco minutos, y esa es una promesa que puedes verificar antes de pagar nada." },
    { h: "Criterio 6 — Condiciones sin trampas", p: "Lee qué pasa al final del periodo contratado. Los servicios que renuevan automáticamente y esconden la cancelación detrás de un formulario cuentan con tu olvido. En ATV Corner no hay renovación automática: el acceso simplemente caduca y decides tú si vuelves. Añade a eso una garantía de devolución de 7 días desde la compra, y el riesgo económico de equivocarte se reduce prácticamente a cero." },
    { h: "Cómo puntúa ATV Corner en estos criterios", p: "Más de 66.000 canales en directo, entre ellos 4.200 deportivos, con 70.000 películas y 18.000 series en 4K/8K. Guía de programación integrada de varios días. Codificación HEVC/H.265 con bitrate adaptativo. Activación en menos de cinco minutos con credenciales por WhatsApp. Soporte 24/7 con respuesta bajo cinco minutos. Precios de 15 € a 60 €, es decir 5 €/mes en el plan anual, sin permanencia. La valoración media es de 4,9/5 sobre más de 2.800 reseñas, con 12.000 suscriptores." },
    { h: "El método de prueba en un cuarto de hora", p: "Pide la prueba gratuita de 24 horas y actívala deliberadamente en horario punta. Con la lista de tus canales delante, comprueba los ocho o diez que realmente ves. Abre la guía de programación y confirma que está rellenada varios días. Mira diez minutos seguidos de un contenido con movimiento rápido. Escribe una pregunta al soporte y cronometra. Si esas cuatro comprobaciones salen bien, has verificado más sobre el servicio que cualquier clasificación que puedas leer." },
  ],
  faq: [
    { q: "¿Cuál es el mejor servicio IPTV?", a: "El que aguanta en horario punta con tu conexión y tiene tus canales. Ninguna clasificación puede medir eso por ti: solo lo demuestra una prueba en tu propio televisor a la hora en que ves la televisión." },
    { q: "¿Sirve de algo comparar el número de canales?", a: "Poco. Las cifras se inflan con duplicados y versiones regionales. Es más útil listar los ocho o diez canales que ves de verdad y comprobarlos uno a uno durante la prueba." },
    { q: "¿Cuánto debería costar un buen servicio IPTV?", a: "En ATV Corner, de 15 € por un mes a 60 € por doce, es decir 5 €/mes. Un precio mucho más bajo suele implicar servidores infradimensionados que fallan en horario punta." },
    { q: "¿Cómo pruebo la estabilidad antes de comprar?", a: "Activa la prueba gratuita de 24 horas entre las 20 y las 23 horas o durante un partido concurrido, y mira diez minutos seguidos. Por la mañana casi cualquier servicio funciona bien." },
    { q: "¿Qué garantías ofrece ATV Corner?", a: "Prueba gratuita de 24 horas sin tarjeta, garantía de devolución de 7 días desde la compra, sin permanencia y sin renovación automática." },
  ],
  cta: "Probar el servicio gratis",
};

content["best-iptv-service"].it = {
  metaTitle: "Il miglior servizio IPTV nel 2026 — come scegliere senza sbagliare",
  metaDesc:
    "Cosa distingue un buon servizio IPTV: stabilità in diretta, catalogo reale, guida completa e assistenza. Criteri verificabili e prova gratuita di 24 h.",
  eyebrow: "Guida all'acquisto · Aggiornata 2026",
  h1: "Il miglior servizio IPTV",
  h1Accent: "e come riconoscerlo",
  intro:
    "Non esiste un «miglior servizio IPTV» universale: esiste quello che regge l'ora della partita con la tua connessione e ha i tuoi canali. Ecco i criteri che puoi verificare da solo, e come li soddisfa ATV Corner con 66.000+ canali da 5 €/mese.",
  features: [
    { h: "Stabilità in diretta", p: "L'unica cosa che davvero separa i fornitori: reggere nelle ore di punta." },
    { h: "Catalogo verificabile", p: "66.000+ canali, 70.000 film e 18.000 serie, controllabili durante la prova." },
    { h: "Assistenza reale", p: "Risposta su WhatsApp in meno di 5 minuti, non un modulo senza risposta." },
    { h: "Prova prima di pagare", p: "24 ore di accesso completo senza carta, e garanzia di 7 giorni dopo." },
  ],
  sections: [
    { h: "Perché le classifiche dei «migliori servizi» servono a poco", p: "La maggior parte delle classifiche che troverai confronta numeri di catalogo e prezzi, cioè proprio i due dati più facili da gonfiare e quelli che meno prevedono la tua esperienza. Un fornitore può dichiarare 100.000 canali contando duplicati, versioni regionali e trasmissioni ormai morte. Ciò che decide se sarai soddisfatto fra tre mesi è qualcosa che nessuna classifica può misurare al posto tuo: se il flusso regge a casa tua, con la tua connessione, nell'orario in cui guardi la televisione." },
    { h: "Criterio 1 — Stabilità nelle ore di punta", p: "È il criterio che davvero separa i fornitori, e l'unico da testare attivamente. Tra le 20 e le 23, e soprattutto durante una partita molto seguita, migliaia di spettatori richiedono lo stesso flusso nello stesso momento. Un server sottodimensionato si vede esattamente lì: microinterruzioni, calo di risoluzione o blocco proprio sul gol. Qualsiasi fornitore funziona bene un martedì mattina, quindi una prova mattutina non dimostra assolutamente nulla." },
    { h: "Criterio 2 — I tuoi canali, non il numero totale", p: "Ignora la cifra complessiva e scrivi un elenco degli otto o dieci canali che guardi davvero. Poi verifica, uno a uno, che siano presenti e funzionino. Un servizio con 30.000 canali che include i tuoi è infinitamente migliore, per te, di uno con 100.000 che non li ha. Fai attenzione anche alle versioni: un canale sportivo può esistere nell'elenco ma solo in una lingua che non capisci o in una versione regionale priva dei diritti che ti interessano." },
    { h: "Criterio 3 — La guida ai programmi", p: "L'EPG è il dettaglio che separa un servizio usabile ogni giorno da un semplice elenco di link. Senza guida devi ricordare cosa va in onda e quando, saltare da un canale all'altro alla cieca e rinunciare a qualsiasi funzione di registrazione programmata. Una buona guida copre più giorni, corrisponde al canale corretto ed è nella lingua giusta. È anche un buon indicatore di serietà: mantenere l'EPG costa lavoro, quindi un fornitore che se ne occupa di solito cura anche il resto." },
    { h: "Criterio 4 — Qualità dell'immagine reale", p: "«4K» su una pagina prezzi non significa che l'intero catalogo sia in 4K, e nessun fornitore onesto lo sosterrebbe: la risoluzione dipende dalla sorgente. Ciò che puoi invece pretendere è la codifica HEVC/H.265 e il bitrate adattivo, che permettono di mantenere l'immagine fluida quando la connessione oscilla anziché bloccare la riproduzione. Verificalo durante la prova guardando un canale con movimento rapido, come calcio o motori: è lì che una compressione scadente diventa subito visibile." },
    { h: "Criterio 5 — Assistenza che risponde", p: "Prima o poi ti servirà aiuto: un dispositivo nuovo, un'app aggiornata, un'impostazione andata persa. Ciò che conta non è l'esistenza di una pagina contatti ma quanto tempo passa prima di una risposta utile. Mettila alla prova prima di comprare: scrivi una domanda tecnica precisa durante la prova gratuita e misura il tempo. La nostra assistenza risponde su WhatsApp in meno di cinque minuti, ed è una promessa che puoi verificare prima di pagare qualsiasi cosa." },
    { h: "Criterio 6 — Condizioni senza trappole", p: "Leggi cosa succede alla fine del periodo acquistato. I servizi che si rinnovano automaticamente e nascondono la disdetta dietro un modulo contano sulla tua dimenticanza. In ATV Corner non c'è rinnovo automatico: l'accesso semplicemente scade e sei tu a decidere se tornare. Aggiungi una garanzia di rimborso di 7 giorni dall'acquisto, e il rischio economico di sbagliare si riduce praticamente a zero." },
    { h: "Come si posiziona ATV Corner su questi criteri", p: "Oltre 66.000 canali in diretta, di cui 4.200 sportivi, con 70.000 film e 18.000 serie in 4K/8K. Guida ai programmi integrata su più giorni. Codifica HEVC/H.265 con bitrate adattivo. Attivazione in meno di cinque minuti con credenziali su WhatsApp. Assistenza 24/7 con risposta sotto i cinque minuti. Prezzi da 15 € a 60 €, cioè 5 €/mese sul piano annuale, senza vincoli. La valutazione media è di 4,9/5 su oltre 2.800 recensioni, con 12.000 abbonati." },
    { h: "Il metodo di verifica in un quarto d'ora", p: "Richiedi la prova gratuita di 24 ore e attivala deliberatamente in orario di punta. Con l'elenco dei tuoi canali davanti, controlla gli otto o dieci che guardi davvero. Apri la guida ai programmi e conferma che sia popolata su più giorni. Guarda dieci minuti consecutivi di un contenuto con movimento rapido. Scrivi una domanda all'assistenza e cronometra. Se queste quattro verifiche vanno a buon fine, hai accertato sul servizio più di quanto ti dirà qualsiasi classifica." },
  ],
  faq: [
    { q: "Qual è il miglior servizio IPTV?", a: "Quello che regge nelle ore di punta con la tua connessione e ha i tuoi canali. Nessuna classifica può misurarlo al posto tuo: lo dimostra solo una prova sul tuo televisore nell'orario in cui guardi la TV." },
    { q: "Serve confrontare il numero di canali?", a: "Poco. Le cifre si gonfiano con duplicati e versioni regionali. È più utile elencare gli otto o dieci canali che guardi davvero e verificarli uno a uno durante la prova." },
    { q: "Quanto dovrebbe costare un buon servizio IPTV?", a: "In ATV Corner, da 15 € per un mese a 60 € per dodici, cioè 5 €/mese. Un prezzo molto più basso di solito implica server sottodimensionati che cedono nelle ore di punta." },
    { q: "Come verifico la stabilità prima di comprare?", a: "Attiva la prova gratuita di 24 ore tra le 20 e le 23 o durante una partita molto seguita, e guarda dieci minuti consecutivi. Di mattina quasi ogni servizio funziona bene." },
    { q: "Quali garanzie offre ATV Corner?", a: "Prova gratuita di 24 ore senza carta, garanzia di rimborso di 7 giorni dall'acquisto, senza vincoli e senza rinnovo automatico." },
  ],
  cta: "Prova il servizio gratis",
};

// --- es/it for /iptv-sport --------------------------------------------------
content["iptv-sport"].es = {
  metaTitle: "IPTV deportes — 4.200 canales, fútbol, F1 y boxeo en 4K",
  metaDesc:
    "IPTV deportes con 4.200 canales: LaLiga, Champions, Premier League, F1, MotoGP, NBA y boxeo en 4K sin cortes. Desde 5 €/mes, prueba gratis de 24 h.",
  eyebrow: "4.200 canales deportivos · 4K",
  h1: "IPTV deportes",
  h1Accent: "sin cortes",
  intro:
    "4.200 canales deportivos en una sola suscripción: LaLiga, Champions League, Premier League, Serie A, Fórmula 1, MotoGP, NBA, tenis y boxeo, en 4K y sin los cortes que arruinan un gol. Desde 5 €/mes.",
  features: [
    { h: "4.200 canales de deporte", p: "Fútbol, motor, baloncesto, tenis, rugby, boxeo y deportes de combate." },
    { h: "Directo estable en punta", p: "Servidores dimensionados para los grandes partidos, cuando más se nota." },
    { h: "4K con HEVC/H.265", p: "Bitrate adaptativo: la imagen se mantiene fluida en las jugadas rápidas." },
    { h: "Multideporte simultáneo", p: "Cambia entre partidos al instante en lugar de elegir uno solo." },
  ],
  sections: [
    { h: "Todo el deporte en una suscripción", p: "El problema del deporte hoy no es la falta de contenido sino su fragmentación: los derechos están repartidos entre operadores distintos, y seguir todas las competiciones que te interesan suele implicar tres o cuatro abonos. Una suscripción IPTV de ATV Corner reúne 4.200 canales deportivos en un mismo acceso: fútbol nacional e internacional, motor, baloncesto, tenis, rugby, ciclismo y deportes de combate, sin sumar facturas ni saltar de aplicación en aplicación." },
    { h: "Fútbol: ligas y competiciones europeas", p: "LaLiga, Premier League, Serie A, Bundesliga y Ligue 1, junto a la Champions League, la Europa League y las competiciones de selecciones. También encontrarás ligas menos cubiertas por los operadores clásicos, desde la Eredivisie y la Liga Portugal hasta campeonatos sudamericanos. Los canales están disponibles en varias versiones de idioma cuando la fuente lo permite, lo que resulta útil si prefieres los comentarios en el idioma original." },
    { h: "Motor: Fórmula 1, MotoGP y resistencia", p: "El deporte de motor es la prueba de fuego de cualquier servicio de streaming, porque el movimiento rápido y los travellings a alta velocidad dejan al descubierto de inmediato una compresión deficiente. Nuestra codificación HEVC/H.265 con bitrate adaptativo está pensada precisamente para eso. Encontrarás la Fórmula 1 con sus sesiones de entrenamientos y clasificación, MotoGP, Fórmula E, WRC y las carreras de resistencia como las 24 Horas de Le Mans." },
    { h: "Baloncesto, tenis y deportes de combate", p: "La NBA con la temporada regular y los playoffs, la EuroLeague y las ligas nacionales. En tenis, los cuatro Grand Slams, los Masters 1000 y los torneos ATP y WTA, incluidas las pistas secundarias que rara vez llegan a la televisión abierta. En deportes de combate, boxeo internacional, UFC y las principales veladas de artes marciales mixtas, que suelen emitirse de madrugada y son justo donde una guía de programación fiable marca la diferencia." },
    { h: "Por qué la estabilidad importa más en deporte", p: "En una película, un microcorte de dos segundos es una molestia menor: rebobinas. En un directo deportivo, esos dos segundos pueden ser el gol, la adelantada o el nocaut, y no hay forma de recuperarlos. Además, el deporte concentra la demanda: miles de espectadores piden exactamente el mismo flujo en el mismo minuto. Por eso el único momento útil para evaluar un servicio deportivo es durante un partido concurrido, nunca un martes por la mañana." },
    { h: "Seguir varios partidos a la vez", p: "En una jornada de liga con partidos simultáneos, o durante una fase de grupos, el cambio rápido entre canales pesa más que la resolución. Con credenciales Xtream Codes el reproductor carga los canales de forma dinámica, así que saltar de un encuentro a otro es prácticamente instantáneo en lugar de exigir una recarga completa de la lista. Aplicaciones como TiviMate permiten además crear un grupo de favoritos solo con los canales deportivos, lo que evita recorrer 66.000 entradas en pleno partido." },
    { h: "Qué conexión necesitas", p: "Para deporte en HD basta con unos 10 Mbps estables; para 4K conviene contar con 25 Mbps, medidos en el aparato donde vas a ver y no en el router. La palabra clave es estables: una conexión que promedia 50 Mbps pero cae a 5 cada pocos minutos dará peor resultado que una de 20 Mbps constante. Si puedes, conecta el televisor por cable Ethernet para los partidos importantes; es la mejora más barata y eficaz que existe." },
    { h: "En qué pantalla ver el deporte", p: "El televisor del salón sigue siendo la mejor opción para un partido completo, y ahí un Fire TV Stick 4K o un Android TV con TiviMate dan el resultado más fluido. Para las competiciones que se solapan, muchos espectadores dejan el partido principal en el televisor y siguen el segundo en una tableta con la misma suscripción, ya que las credenciales no están atadas a un dispositivo concreto. Para el deporte de madrugada, el móvil con auriculares evita despertar a la casa. Lo único que conviene planificar de antemano es el número de conexiones simultáneas que necesitas." },
    { h: "Cómo verificarlo antes de pagar", p: "Pide la prueba gratuita de 24 horas y actívala deliberadamente a la hora de un partido importante. Comprueba que las competiciones que sigues estén presentes, que la guía muestre correctamente los horarios y que la imagen aguante diez minutos seguidos de juego. Si esas tres cosas se cumplen en el peor momento posible, se cumplirán el resto del tiempo. La suscripción cuesta desde 15 € al mes, o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Cuántos canales de deporte incluye?", a: "4.200 canales deportivos, con fútbol, motor, baloncesto, tenis, rugby, ciclismo y deportes de combate, incluidos en cualquier plan sin coste adicional." },
    { q: "¿Puedo ver LaLiga y la Champions League?", a: "Sí, junto a la Premier League, la Serie A, la Bundesliga, la Ligue 1 y la Europa League, en varias versiones de idioma cuando la fuente lo permite." },
    { q: "¿Aguanta la calidad durante los grandes partidos?", a: "Los servidores están dimensionados para los picos de demanda y la codificación HEVC/H.265 con bitrate adaptativo mantiene la imagen fluida. Compruébalo tú mismo con la prueba gratuita durante un partido." },
    { q: "¿Qué velocidad de conexión necesito?", a: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el dispositivo de visionado. La estabilidad importa más que el pico máximo." },
    { q: "¿Puedo cambiar rápido entre partidos simultáneos?", a: "Sí. Con Xtream Codes los canales se cargan de forma dinámica y el cambio es casi instantáneo. En TiviMate puedes crear un grupo de favoritos solo con canales deportivos." },
  ],
  cta: "Ver el deporte sin cortes",
};

content["iptv-sport"].it = {
  metaTitle: "IPTV sport — 4.200 canali, calcio, F1 e boxe in 4K",
  metaDesc:
    "IPTV sport con 4.200 canali: Serie A, Champions, Premier League, F1, MotoGP, NBA e boxe in 4K senza interruzioni. Da 5 €/mese, prova gratuita di 24 h.",
  eyebrow: "4.200 canali sportivi · 4K",
  h1: "IPTV sport",
  h1Accent: "senza interruzioni",
  intro:
    "4.200 canali sportivi in un solo abbonamento: Serie A, Champions League, Premier League, LaLiga, Formula 1, MotoGP, NBA, tennis e boxe, in 4K e senza le interruzioni che rovinano un gol. Da 5 €/mese.",
  features: [
    { h: "4.200 canali sportivi", p: "Calcio, motori, basket, tennis, rugby, boxe e sport da combattimento." },
    { h: "Diretta stabile nei picchi", p: "Server dimensionati per le partite importanti, quando si nota di più." },
    { h: "4K con HEVC/H.265", p: "Bitrate adattivo: l'immagine resta fluida nelle azioni veloci." },
    { h: "Più sport in contemporanea", p: "Passa da una partita all'altra all'istante invece di sceglierne una sola." },
  ],
  sections: [
    { h: "Tutto lo sport in un abbonamento", p: "Il problema dello sport oggi non è la mancanza di contenuti ma la loro frammentazione: i diritti sono distribuiti tra operatori diversi, e seguire tutte le competizioni che ti interessano richiede spesso tre o quattro abbonamenti. Un abbonamento IPTV di ATV Corner riunisce 4.200 canali sportivi in un unico accesso: calcio nazionale e internazionale, motori, basket, tennis, rugby, ciclismo e sport da combattimento, senza sommare fatture né saltare da un'app all'altra." },
    { h: "Calcio: campionati e competizioni europee", p: "Serie A, Premier League, LaLiga, Bundesliga e Ligue 1, insieme a Champions League, Europa League e alle competizioni per nazionali. Troverai anche campionati meno coperti dagli operatori classici, dall'Eredivisie alla Liga Portugal fino ai tornei sudamericani. I canali sono disponibili in più versioni linguistiche quando la sorgente lo consente, il che è utile se preferisci la telecronaca in lingua originale." },
    { h: "Motori: Formula 1, MotoGP e endurance", p: "Il motorsport è la prova del nove per qualsiasi servizio di streaming, perché il movimento rapido e le riprese ad alta velocità mettono subito a nudo una compressione scadente. La nostra codifica HEVC/H.265 con bitrate adattivo è pensata esattamente per questo. Trovi la Formula 1 con prove libere e qualifiche, la MotoGP, la Formula E, il WRC e le gare di durata come la 24 Ore di Le Mans." },
    { h: "Basket, tennis e sport da combattimento", p: "L'NBA con stagione regolare e playoff, l'EuroLeague e i campionati nazionali. Nel tennis, i quattro Slam, i Masters 1000 e i tornei ATP e WTA, compresi i campi secondari che raramente arrivano sulla TV generalista. Negli sport da combattimento, boxe internazionale, UFC e le principali serate di arti marziali miste, che spesso vanno in onda nel cuore della notte ed è proprio lì che una guida ai programmi affidabile fa la differenza." },
    { h: "Perché nello sport la stabilità conta di più", p: "In un film, una microinterruzione di due secondi è un fastidio minore: riavvolgi. In una diretta sportiva, quei due secondi possono essere il gol, il sorpasso o il knockout, e non c'è modo di recuperarli. Inoltre lo sport concentra la domanda: migliaia di spettatori richiedono esattamente lo stesso flusso nello stesso minuto. Per questo l'unico momento utile per valutare un servizio sportivo è durante una partita molto seguita, mai un martedì mattina." },
    { h: "Seguire più partite contemporaneamente", p: "In una giornata di campionato con partite in contemporanea, o durante una fase a gironi, il cambio rapido tra canali pesa più della risoluzione. Con credenziali Xtream Codes il lettore carica i canali in modo dinamico, quindi passare da un incontro all'altro è praticamente istantaneo invece di richiedere una ricarica completa dell'elenco. App come TiviMate permettono inoltre di creare un gruppo di preferiti con i soli canali sportivi, evitando di scorrere 66.000 voci in piena partita." },
    { h: "Quale connessione ti serve", p: "Per lo sport in HD bastano circa 10 Mbps stabili; per il 4K conviene disporre di 25 Mbps, misurati sull'apparecchio su cui guarderai e non sul router. La parola chiave è stabili: una connessione che in media fa 50 Mbps ma scende a 5 ogni pochi minuti darà un risultato peggiore di una da 20 Mbps costante. Se puoi, collega il televisore via cavo Ethernet per le partite importanti; è il miglioramento più economico ed efficace che esista." },
    { h: "Su quale schermo guardare lo sport", p: "Il televisore del salotto resta la scelta migliore per una partita intera, e lì un Fire TV Stick 4K o un Android TV con TiviMate danno il risultato più fluido. Per le competizioni che si sovrappongono, molti spettatori lasciano la partita principale sul televisore e seguono la seconda su un tablet con lo stesso abbonamento, dato che le credenziali non sono legate a un singolo dispositivo. Per lo sport notturno, il telefono con le cuffie evita di svegliare la casa. L'unica cosa da pianificare in anticipo è il numero di connessioni simultanee che ti servono." },
    { h: "Come verificarlo prima di pagare", p: "Richiedi la prova gratuita di 24 ore e attivala deliberatamente all'ora di una partita importante. Verifica che le competizioni che segui siano presenti, che la guida mostri correttamente gli orari e che l'immagine regga dieci minuti consecutivi di gioco. Se queste tre condizioni si verificano nel momento peggiore possibile, si verificheranno anche nel resto del tempo. L'abbonamento costa da 15 € al mese, oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Quanti canali sportivi sono inclusi?", a: "4.200 canali sportivi, con calcio, motori, basket, tennis, rugby, ciclismo e sport da combattimento, inclusi in qualsiasi piano senza costi aggiuntivi." },
    { q: "Posso guardare la Serie A e la Champions League?", a: "Sì, insieme a Premier League, LaLiga, Bundesliga, Ligue 1 ed Europa League, in più versioni linguistiche quando la sorgente lo consente." },
    { q: "La qualità regge durante le partite importanti?", a: "I server sono dimensionati per i picchi di domanda e la codifica HEVC/H.265 con bitrate adattivo mantiene l'immagine fluida. Verificalo tu stesso con la prova gratuita durante una partita." },
    { q: "Che velocità di connessione mi serve?", a: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul dispositivo di visione. La stabilità conta più del picco massimo." },
    { q: "Posso passare rapidamente tra partite in contemporanea?", a: "Sì. Con Xtream Codes i canali si caricano in modo dinamico e il cambio è quasi istantaneo. In TiviMate puoi creare un gruppo di preferiti con i soli canali sportivi." },
  ],
  cta: "Guarda lo sport senza interruzioni",
};

// --- es/it for /cable-tv-alternative ----------------------------------------
content["cable-tv-alternative"].es = {
  metaTitle: "Alternativa al cable y satélite — 66.000 canales por 5 €/mes",
  metaDesc:
    "Deja el cable o el satélite sin perder canales: 66.000+ canales y 70.000 películas por 5 €/mes, sin permanencia, sin instalador y sin descodificador.",
  eyebrow: "Alternativa al cable · Desde 5 €/mes",
  h1: "La alternativa",
  h1Accent: "al cable y al satélite",
  intro:
    "Más canales que un paquete premium de cable, por una fracción del precio y sin contrato de dos años: 66.000+ canales y 70.000 películas desde 5 €/mes, activados en cinco minutos sin técnico ni antena.",
  features: [
    { h: "Sin permanencia", p: "Ningún contrato de 12 o 24 meses, ningún preaviso que recordar." },
    { h: "Sin instalación", p: "Nada de técnico, antena, cableado ni descodificador alquilado." },
    { h: "Desde 5 €/mes", p: "Frente a los 40-80 € mensuales habituales de un paquete premium." },
    { h: "Más contenido", p: "66.000+ canales y 70.000 películas, frente a unos cientos de canales." },
  ],
  sections: [
    { h: "Qué pagas realmente con el cable", p: "Una factura de cable o satélite rara vez es solo el precio del paquete. Suele incluir el alquiler del descodificador, un suplemento por cada televisor adicional, opciones deportivas facturadas aparte y, muy a menudo, una tarifa promocional que sube automáticamente al cabo de doce meses. Sumado todo, un hogar que quiere deporte y cine paga con frecuencia entre 40 y 80 € al mes. La comparación honesta no es con el precio de la oferta de entrada sino con lo que aparece en la factura el decimotercer mes." },
    { h: "Lo que cambia al pasarte a IPTV", p: "Desaparecen tres cosas a la vez: el hardware, el contrato y el instalador. No hay descodificador que devolver, ni antena que orientar, ni cita con un técnico. Tu suscripción llega como unas credenciales por WhatsApp y funciona sobre el equipo que ya tienes: Smart TV, Fire TV Stick, Apple TV, móvil, tableta u ordenador. La configuración inicial son unos cinco minutos, y a partir de ahí el uso diario se parece bastante a la televisión de siempre, con su guía de programación y su zapeo." },
    { h: "El catálogo comparado", p: "Un paquete premium de cable ofrece típicamente entre 150 y 300 canales, con un servicio de vídeo bajo demanda limitado y a menudo de pago adicional. ATV Corner incluye más de 66.000 canales en directo, entre ellos 4.200 deportivos, además de 70.000 películas y 18.000 series accesibles sin coste extra. La diferencia más visible está en los canales internacionales: seguir un campeonato extranjero o ver canales en tu idioma de origen es exactamente el terreno donde los operadores nacionales se quedan cortos." },
    { h: "El punto débil real: la conexión", p: "Sería deshonesto no señalarlo. El cable y el satélite llegan por una infraestructura dedicada que no depende de tu ancho de banda; el IPTV usa tu conexión a internet. Si tu línea es inestable o compartida entre muchos dispositivos, lo notarás. La regla práctica son 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el aparato donde vas a ver. Si tu conexión cumple eso, el cambio es transparente; si no, conviene comprobarlo con la prueba gratuita antes de cancelar nada." },
    { h: "Cancelar el cable sin quedarte sin nada", p: "El orden recomendado es sencillo y evita el hueco incómodo entre un servicio y otro. Primero activa la prueba gratuita de 24 horas y compruébala en horario punta. Si convence, contrata un mes de IPTV y convive unas semanas con los dos servicios. Solo entonces envía la baja del cable, respetando el preaviso que figura en tu contrato, que suele ser de uno a tres meses. De ese modo nunca te quedas sin televisión y decides con la experiencia hecha, no con una promesa." },
    { h: "Varios televisores en casa", p: "Aquí la diferencia económica es especialmente marcada. Los operadores clásicos facturan cada terminal adicional, con lo que un hogar con tres televisores paga tres alquileres de descodificador. Con IPTV, tus credenciales funcionan en cualquier dispositivo sin coste por aparato; lo único que hay que dimensionar es el número de conexiones simultáneas, que solo importa si varias personas quieren ver canales distintos al mismo tiempo. Si tienes dudas sobre cuántas necesitas, pregúntanos antes de comprar." },
    { h: "Qué se pierde y qué no", p: "Conservas los canales, la guía de programación, el zapeo y el vídeo bajo demanda, y ganas un catálogo internacional que ningún operador nacional iguala. Lo que no se traslada son las funciones ligadas al hardware del operador: la grabación en el disco del descodificador y algunas prestaciones propietarias de su interfaz. Muchas aplicaciones IPTV ofrecen alternativas, pero conviene saberlo antes de dar el paso en lugar de descubrirlo después. Para la mayoría de los hogares no es un obstáculo; para quien graba mucho, sí es un punto a valorar." },
    { h: "Cuánto ahorras al año", p: "Con un paquete premium en torno a 50 € al mes, el gasto anual ronda los 600 €. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, e incluye el deporte que en el cable suele ser una opción facturada aparte. Aun contando con un margen amplio, el ahorro se sitúa en varios cientos de euros al año. Y como no hay renovación automática ni permanencia, ese cálculo no depende de que recuerdes cancelar en una fecha concreta." },
    { h: "Cómo probarlo sin riesgo", p: "La prueba gratuita de 24 horas no pide tarjeta de crédito y da acceso al catálogo completo. Actívala en el momento en que sueles ver la televisión, no por la mañana, y comprueba tres cosas: que tus canales habituales estén, que la guía esté rellenada y que la imagen aguante en tu televisor concreto. Si decides continuar, la garantía de devolución de 7 días cubre además los primeros días de la suscripción, de modo que el riesgo económico real es prácticamente nulo." },
  ],
  faq: [
    { q: "¿Es el IPTV una alternativa real al cable?", a: "Sí, si tu conexión es estable. Ofrece muchos más canales y películas por una fracción del precio, sin contrato ni hardware, pero depende de tu ancho de banda mientras que el cable no." },
    { q: "¿Cuánto ahorro al dejar el cable?", a: "Un paquete premium ronda los 600 € al año. El plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido en lugar de facturado aparte." },
    { q: "¿Tengo que devolver el descodificador?", a: "El de tu operador sí, según sus condiciones. El IPTV no necesita hardware propio: funciona en tu Smart TV, Fire TV Stick, Apple TV, móvil, tableta u ordenador." },
    { q: "¿Cuándo debo cancelar el cable?", a: "Después de probar, no antes. Activa la prueba gratuita, contrata un mes, convive unas semanas con ambos servicios y envía la baja respetando el preaviso de tu contrato." },
    { q: "¿Qué conexión necesito?", a: "10 Mbps estables para HD y 25 Mbps para 4K, medidos en el dispositivo de visionado. La estabilidad importa más que la velocidad máxima anunciada." },
  ],
  cta: "Probar la alternativa gratis",
};

content["cable-tv-alternative"].it = {
  metaTitle: "Alternativa a cavo e satellite — 66.000 canali a 5 €/mese",
  metaDesc:
    "Lascia il cavo o il satellite senza perdere canali: 66.000+ canali e 70.000 film a 5 €/mese, senza vincoli, senza installatore e senza decoder.",
  eyebrow: "Alternativa al cavo · Da 5 €/mese",
  h1: "L'alternativa",
  h1Accent: "a cavo e satellite",
  intro:
    "Più canali di un pacchetto premium via cavo, a una frazione del prezzo e senza contratto biennale: 66.000+ canali e 70.000 film da 5 €/mese, attivi in cinque minuti senza tecnico né antenna.",
  features: [
    { h: "Senza vincoli", p: "Nessun contratto da 12 o 24 mesi, nessun preavviso da ricordare." },
    { h: "Senza installazione", p: "Niente tecnico, antenna, cablaggio o decoder a noleggio." },
    { h: "Da 5 €/mese", p: "Contro i 40-80 € mensili tipici di un pacchetto premium." },
    { h: "Più contenuti", p: "66.000+ canali e 70.000 film, contro qualche centinaio di canali." },
  ],
  sections: [
    { h: "Cosa paghi davvero con il cavo", p: "Una bolletta via cavo o satellitare raramente è solo il prezzo del pacchetto. Di norma include il noleggio del decoder, un supplemento per ogni televisore aggiuntivo, opzioni sportive fatturate a parte e, molto spesso, una tariffa promozionale che sale automaticamente dopo dodici mesi. Sommando tutto, una famiglia che vuole sport e cinema paga spesso tra i 40 e gli 80 € al mese. Il confronto onesto non è con il prezzo dell'offerta d'ingresso ma con quello che compare in bolletta al tredicesimo mese." },
    { h: "Cosa cambia passando all'IPTV", p: "Spariscono tre cose insieme: l'hardware, il contratto e l'installatore. Non c'è alcun decoder da restituire, nessuna antenna da orientare, nessun appuntamento con un tecnico. Il tuo abbonamento arriva come credenziali su WhatsApp e funziona sull'apparecchio che già possiedi: Smart TV, Fire TV Stick, Apple TV, telefono, tablet o computer. La configurazione iniziale richiede circa cinque minuti, e da lì in poi l'uso quotidiano somiglia molto alla televisione di sempre, con la sua guida ai programmi e il suo zapping." },
    { h: "Il catalogo a confronto", p: "Un pacchetto premium via cavo offre tipicamente tra 150 e 300 canali, con un servizio on demand limitato e spesso a pagamento aggiuntivo. ATV Corner include oltre 66.000 canali in diretta, di cui 4.200 sportivi, oltre a 70.000 film e 18.000 serie accessibili senza costi extra. La differenza più evidente riguarda i canali internazionali: seguire un campionato estero o guardare canali nella tua lingua d'origine è esattamente il terreno su cui gli operatori nazionali restano indietro." },
    { h: "Il vero punto debole: la connessione", p: "Sarebbe disonesto non segnalarlo. Cavo e satellite arrivano da un'infrastruttura dedicata che non dipende dalla tua banda; l'IPTV usa la tua connessione internet. Se la tua linea è instabile o condivisa tra molti dispositivi, lo noterai. La regola pratica sono 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sull'apparecchio su cui guarderai. Se la tua connessione rispetta questi valori il passaggio è trasparente; altrimenti conviene verificarlo con la prova gratuita prima di disdire qualsiasi cosa." },
    { h: "Disdire il cavo senza restare senza nulla", p: "L'ordine consigliato è semplice ed evita il fastidioso vuoto tra un servizio e l'altro. Prima attiva la prova gratuita di 24 ore e verificala in orario di punta. Se convince, acquista un mese di IPTV e convivi qualche settimana con entrambi i servizi. Solo allora invia la disdetta del cavo, rispettando il preavviso indicato nel contratto, di norma da uno a tre mesi. In questo modo non resti mai senza televisione e decidi sulla base dell'esperienza, non di una promessa." },
    { h: "Più televisori in casa", p: "Qui la differenza economica è particolarmente marcata. Gli operatori classici fatturano ogni terminale aggiuntivo, quindi una famiglia con tre televisori paga tre noleggi di decoder. Con l'IPTV le tue credenziali funzionano su qualsiasi dispositivo senza costi per apparecchio; l'unica cosa da dimensionare è il numero di connessioni simultanee, che conta solo se più persone vogliono guardare canali diversi nello stesso momento. Se hai dubbi su quante ne servono, chiedi prima dell'acquisto." },
    { h: "Cosa si perde e cosa no", p: "Conservi i canali, la guida ai programmi, lo zapping e il video on demand, e guadagni un catalogo internazionale che nessun operatore nazionale eguaglia. Ciò che non si trasferisce sono le funzioni legate all'hardware dell'operatore: la registrazione sul disco del decoder e alcune funzionalità proprietarie della sua interfaccia. Molte app IPTV offrono alternative, ma è meglio saperlo prima di fare il passo che scoprirlo dopo. Per la maggior parte delle famiglie non è un ostacolo; per chi registra molto, è un punto da valutare." },
    { h: "Quanto risparmi in un anno", p: "Con un pacchetto premium intorno ai 50 € al mese, la spesa annua si aggira sui 600 €. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, e include lo sport che via cavo è di solito un'opzione fatturata a parte. Anche considerando un margine ampio, il risparmio si colloca su diverse centinaia di euro all'anno. E poiché non ci sono rinnovo automatico né vincoli, quel calcolo non dipende dal fatto che tu ricordi di disdire entro una data precisa." },
    { h: "Come provarlo senza rischi", p: "La prova gratuita di 24 ore non richiede carta di credito e dà accesso al catalogo completo. Attivala nel momento in cui guardi di solito la televisione, non di mattina, e verifica tre cose: che i tuoi canali abituali ci siano, che la guida sia popolata e che l'immagine regga sul tuo televisore specifico. Se decidi di continuare, la garanzia di rimborso di 7 giorni copre inoltre i primi giorni dell'abbonamento, così il rischio economico reale è praticamente nullo." },
  ],
  faq: [
    { q: "L'IPTV è una vera alternativa al cavo?", a: "Sì, se la tua connessione è stabile. Offre molti più canali e film a una frazione del prezzo, senza contratto né hardware, ma dipende dalla tua banda mentre il cavo no." },
    { q: "Quanto risparmio lasciando il cavo?", a: "Un pacchetto premium si aggira sui 600 € all'anno. Il piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso invece che fatturato a parte." },
    { q: "Devo restituire il decoder?", a: "Quello del tuo operatore sì, secondo le sue condizioni. L'IPTV non richiede hardware proprio: funziona su Smart TV, Fire TV Stick, Apple TV, telefono, tablet o computer." },
    { q: "Quando devo disdire il cavo?", a: "Dopo aver provato, non prima. Attiva la prova gratuita, acquista un mese, convivi qualche settimana con entrambi i servizi e invia la disdetta rispettando il preavviso del contratto." },
    { q: "Quale connessione mi serve?", a: "10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul dispositivo di visione. La stabilità conta più della velocità massima dichiarata." },
  ],
  cta: "Prova l'alternativa gratis",
};

// --- es/it for /iptv-firestick ----------------------------------------------
content["iptv-firestick"].es = {
  metaTitle: "IPTV en Fire TV Stick — instalación en 5 minutos, 66.000 canales",
  metaDesc:
    "Instala IPTV en tu Amazon Fire TV Stick en 5 minutos: 66.000+ canales en 4K con TiviMate o IPTV Smarters. Guía paso a paso y prueba gratis de 24 h.",
  eyebrow: "Fire TV Stick · Instalación en 5 min",
  h1: "IPTV en Fire TV Stick",
  h1Accent: "listo en 5 minutos",
  intro:
    "El Fire TV Stick es la forma más barata de convertir cualquier televisor en un receptor IPTV completo. Con ATV Corner accedes a 66.000+ canales en 4K desde 5 €/mes, y la instalación no requiere ningún conocimiento técnico.",
  features: [
    { h: "Funciona en todo modelo", p: "Fire TV Stick Lite, 4K, 4K Max y Fire TV Cube." },
    { h: "TiviMate o Smarters", p: "Elige la aplicación que prefieras; ambas están soportadas." },
    { h: "Instalación en 5 min", p: "Descarga, credenciales y ya está: sin ordenador ni cables." },
    { h: "4K con HEVC", p: "El 4K Max aprovecha por completo la codificación H.265." },
  ],
  sections: [
    { h: "Por qué el Fire Stick es la mejor puerta de entrada", p: "Cuesta menos que dos meses de un paquete de cable, cabe en el bolsillo y convierte cualquier televisor con puerto HDMI en un receptor IPTV completo, incluido un modelo antiguo sin funciones inteligentes. A diferencia de las aplicaciones preinstaladas en muchos televisores, el sistema de Amazon permite instalar aplicaciones externas, que es exactamente lo que hace falta para el IPTV. Y como es un dispositivo dedicado, no compite por recursos con el resto del software del televisor, lo que se traduce en una navegación más fluida." },
    { h: "Qué modelo elegir", p: "El Fire TV Stick Lite basta para ver en HD y es la opción más económica. El 4K y el 4K Max añaden decodificación 4K por hardware y compatibilidad con HEVC/H.265, que es la codificación que usamos: si tienes un televisor 4K, la diferencia se nota en las imágenes con movimiento rápido. El 4K Max añade además más memoria y Wi-Fi 6, lo que reduce las esperas al abrir la aplicación y ayuda si tu red está saturada. El Fire TV Cube es la versión de sobremesa, más potente y con Ethernet incluido." },
    { h: "Instalar la aplicación", p: "En los ajustes del Fire Stick, entra en Mi Fire TV, después en Opciones de desarrollador, y activa la instalación de aplicaciones de origen desconocido. Instala Downloader desde la tienda de Amazon, ábrelo e introduce la dirección que te facilitamos por WhatsApp para descargar TiviMate o IPTV Smarters Pro. La descarga tarda unos segundos y la instalación es automática. Todo el proceso se hace con el mando del televisor, sin necesidad de ordenador ni de conectar cables." },
    { h: "Introducir tus credenciales", p: "Abre la aplicación y elige añadir una lista. Si te hemos enviado credenciales Xtream Codes, introduce la URL del servidor, el usuario y la contraseña; si prefieres el formato M3U, pega la URL única. La aplicación descarga entonces la lista de canales, la guía de programación y el catálogo de películas y series, lo que suele llevar entre uno y dos minutos la primera vez. Escribir con el mando es lo más tedioso del proceso: la aplicación de Fire TV en el móvil incluye un teclado que lo hace mucho más rápido." },
    { h: "Ajustes que mejoran la experiencia", p: "En TiviMate, activa la decodificación por hardware: descarga el trabajo en el chip del Fire Stick en lugar del procesador y elimina la mayoría de los tirones. Ajusta el búfer a un valor medio; demasiado bajo provoca cortes en conexiones irregulares, demasiado alto retrasa el cambio de canal. Crea un grupo de favoritos con los veinte canales que ves de verdad para no recorrer una lista de 66.000 entradas cada noche. Y desactiva las notificaciones de Amazon, que pueden aparecer en pantalla en pleno partido." },
    { h: "Red: el factor que más pesa", p: "El Fire Stick es pequeño y su antena Wi-Fi también. Si el televisor está lejos del router o hay paredes de por medio, ese será el cuello de botella antes que cualquier ajuste de la aplicación. La solución más eficaz es el adaptador Ethernet oficial de Amazon, que se conecta al puerto de alimentación y permite usar cable de red: elimina de golpe la mayoría de los problemas de cortes. Si no es posible, sitúa el router más cerca o usa un repetidor en la banda de 5 GHz." },
    { h: "Problemas frecuentes y solución", p: "Si la imagen se congela cada pocos minutos, revisa primero el Wi-Fi y después activa la decodificación por hardware. Si la aplicación se cierra al abrirla, suele bastar con borrar su caché desde los ajustes del Fire Stick. Si faltan canales o la guía está vacía, fuerza una recarga de la lista dentro de la aplicación. Y si el mando no responde bien al escribir, usa la aplicación de Fire TV en el móvil. Nuestro soporte revisa cualquiera de estos casos por WhatsApp en menos de cinco minutos." },
    { h: "Probarlo antes de comprar", p: "Puedes hacer toda la instalación durante la prueba gratuita de 24 horas, sin tarjeta de crédito. Es la mejor manera de comprobar que tu Fire Stick concreto, con tu red concreta, da el resultado que esperas. Actívala en horario punta y mira diez minutos seguidos de un contenido con movimiento rápido. Si funciona bien, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿En qué Fire TV Stick funciona?", a: "En todos: Lite, 4K, 4K Max y Fire TV Cube. Los modelos 4K decodifican HEVC/H.265 por hardware, que es la codificación que usamos, así que rinden mejor en 4K." },
    { q: "¿Cuánto tarda la instalación?", a: "Unos cinco minutos: activar orígenes desconocidos, instalar Downloader, descargar TiviMate o IPTV Smarters e introducir tus credenciales. Todo con el mando, sin ordenador." },
    { q: "¿Qué aplicación conviene más?", a: "TiviMate ofrece la mejor interfaz de televisión y gestión de favoritos; IPTV Smarters Pro es más sencilla de configurar. Ambas funcionan con nuestras credenciales Xtream Codes o M3U." },
    { q: "¿Por qué se corta la imagen en el Fire Stick?", a: "Casi siempre es el Wi-Fi. Usa el adaptador Ethernet oficial de Amazon o acerca el router, y activa la decodificación por hardware en los ajustes de la aplicación." },
    { q: "¿Puedo probar antes de pagar?", a: "Sí. La prueba gratuita de 24 horas no pide tarjeta y permite hacer la instalación completa para comprobar el resultado en tu propio equipo." },
  ],
  cta: "Activar en mi Fire Stick",
};

content["iptv-firestick"].it = {
  metaTitle: "IPTV su Fire TV Stick — installazione in 5 minuti, 66.000 canali",
  metaDesc:
    "Installa l'IPTV sul tuo Amazon Fire TV Stick in 5 minuti: 66.000+ canali in 4K con TiviMate o IPTV Smarters. Guida passo passo e prova gratuita di 24 h.",
  eyebrow: "Fire TV Stick · Installazione in 5 min",
  h1: "IPTV su Fire TV Stick",
  h1Accent: "pronto in 5 minuti",
  intro:
    "Il Fire TV Stick è il modo più economico per trasformare qualsiasi televisore in un ricevitore IPTV completo. Con ATV Corner accedi a 66.000+ canali in 4K da 5 €/mese, e l'installazione non richiede alcuna competenza tecnica.",
  features: [
    { h: "Funziona su ogni modello", p: "Fire TV Stick Lite, 4K, 4K Max e Fire TV Cube." },
    { h: "TiviMate o Smarters", p: "Scegli l'app che preferisci; sono supportate entrambe." },
    { h: "Installazione in 5 min", p: "Download, credenziali e via: senza computer né cavi." },
    { h: "4K con HEVC", p: "Il 4K Max sfrutta pienamente la codifica H.265." },
  ],
  sections: [
    { h: "Perché il Fire Stick è la porta d'ingresso migliore", p: "Costa meno di due mesi di un pacchetto via cavo, sta in tasca e trasforma qualsiasi televisore con porta HDMI in un ricevitore IPTV completo, compreso un modello datato privo di funzioni smart. A differenza delle app preinstallate su molti televisori, il sistema di Amazon consente di installare applicazioni esterne, che è esattamente ciò che serve per l'IPTV. E trattandosi di un dispositivo dedicato, non compete per le risorse con il resto del software del televisore, il che si traduce in una navigazione più fluida." },
    { h: "Quale modello scegliere", p: "Il Fire TV Stick Lite basta per guardare in HD ed è l'opzione più economica. Il 4K e il 4K Max aggiungono la decodifica 4K via hardware e la compatibilità HEVC/H.265, che è la codifica che usiamo: se hai un televisore 4K, la differenza si nota nelle immagini con movimento rapido. Il 4K Max aggiunge inoltre più memoria e il Wi-Fi 6, riducendo le attese all'apertura dell'app e aiutando se la rete è congestionata. Il Fire TV Cube è la versione da tavolo, più potente e con Ethernet integrata." },
    { h: "Installare l'app", p: "Nelle impostazioni del Fire Stick, entra in Il mio Fire TV, poi in Opzioni sviluppatore, e attiva l'installazione di app da origini sconosciute. Installa Downloader dallo store Amazon, aprilo e inserisci l'indirizzo che ti forniamo su WhatsApp per scaricare TiviMate o IPTV Smarters Pro. Il download richiede pochi secondi e l'installazione è automatica. L'intera procedura si svolge con il telecomando del televisore, senza bisogno di computer né di collegare cavi." },
    { h: "Inserire le credenziali", p: "Apri l'app e scegli di aggiungere una playlist. Se ti abbiamo inviato credenziali Xtream Codes, inserisci l'URL del server, il nome utente e la password; se preferisci il formato M3U, incolla l'URL unico. L'app scarica quindi l'elenco dei canali, la guida ai programmi e il catalogo di film e serie, operazione che richiede di norma uno o due minuti la prima volta. Scrivere con il telecomando è la parte più noiosa: l'app Fire TV per telefono include una tastiera che rende tutto molto più rapido." },
    { h: "Impostazioni che migliorano l'esperienza", p: "In TiviMate, attiva la decodifica hardware: sposta il lavoro sul chip del Fire Stick invece che sul processore ed elimina la maggior parte degli scatti. Imposta il buffer su un valore medio; troppo basso provoca interruzioni su connessioni irregolari, troppo alto rallenta il cambio canale. Crea un gruppo di preferiti con i venti canali che guardi davvero, per non scorrere un elenco di 66.000 voci ogni sera. E disattiva le notifiche Amazon, che possono comparire sullo schermo in piena partita." },
    { h: "Rete: il fattore che pesa di più", p: "Il Fire Stick è piccolo e lo è anche la sua antenna Wi-Fi. Se il televisore è lontano dal router o ci sono muri di mezzo, sarà quello il collo di bottiglia prima di qualsiasi impostazione dell'app. La soluzione più efficace è l'adattatore Ethernet ufficiale Amazon, che si collega alla porta di alimentazione e permette di usare un cavo di rete: elimina di colpo la maggior parte dei problemi di interruzione. Se non è possibile, avvicina il router o usa un ripetitore sulla banda 5 GHz." },
    { h: "Problemi frequenti e soluzioni", p: "Se l'immagine si blocca ogni pochi minuti, controlla prima il Wi-Fi e poi attiva la decodifica hardware. Se l'app si chiude all'avvio, di solito basta svuotarne la cache dalle impostazioni del Fire Stick. Se mancano canali o la guida è vuota, forza un ricaricamento della playlist dall'app. E se il telecomando non risponde bene durante la digitazione, usa l'app Fire TV sul telefono. La nostra assistenza verifica ognuno di questi casi su WhatsApp in meno di cinque minuti." },
    { h: "Provarlo prima di comprare", p: "Puoi eseguire l'intera installazione durante la prova gratuita di 24 ore, senza carta di credito. È il modo migliore per verificare che il tuo specifico Fire Stick, sulla tua specifica rete, dia il risultato che ti aspetti. Attivala in orario di punta e guarda dieci minuti consecutivi di un contenuto con movimento rapido. Se funziona bene, l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni. Vale la pena fare la prova sul televisore che userai davvero ogni sera, e non su un secondo apparecchio più vicino al router: è l'unico test che riflette le condizioni reali di casa tua." },
  ],
  faq: [
    { q: "Su quale Fire TV Stick funziona?", a: "Su tutti: Lite, 4K, 4K Max e Fire TV Cube. I modelli 4K decodificano HEVC/H.265 via hardware, la codifica che usiamo, quindi rendono meglio in 4K." },
    { q: "Quanto dura l'installazione?", a: "Circa cinque minuti: attivare le origini sconosciute, installare Downloader, scaricare TiviMate o IPTV Smarters e inserire le credenziali. Tutto con il telecomando, senza computer." },
    { q: "Quale app conviene di più?", a: "TiviMate offre la migliore interfaccia da televisore e gestione dei preferiti; IPTV Smarters Pro è più semplice da configurare. Entrambe funzionano con le nostre credenziali Xtream Codes o M3U." },
    { q: "Perché l'immagine si interrompe sul Fire Stick?", a: "Quasi sempre è il Wi-Fi. Usa l'adattatore Ethernet ufficiale Amazon o avvicina il router, e attiva la decodifica hardware nelle impostazioni dell'app." },
    { q: "Posso provare prima di pagare?", a: "Sì. La prova gratuita di 24 ore non richiede carta e permette di eseguire l'installazione completa per verificare il risultato sul tuo apparecchio." },
  ],
  cta: "Attiva sul mio Fire Stick",
};

// --- es/it for /iptv-premium ------------------------------------------------
content["iptv-premium"].es = {
  metaTitle: "IPTV premium — 66.000 canales en 4K/8K desde 5 €/mes",
  metaDesc:
    "IPTV premium con 66.000+ canales, 70.000 películas y 18.000 series en 4K/8K. Servidores estables, soporte 24/7 y activación en 5 minutos desde 5 €/mes.",
  eyebrow: "IPTV premium · 4K/8K",
  h1: "IPTV premium",
  h1Accent: "sin compromisos",
  intro:
    "Un servicio pensado para quien no acepta cortes: 66.000+ canales, 70.000 películas y 18.000 series en 4K/8K, sobre servidores dimensionados para el horario punta. Desde 5 €/mes, activado en menos de cinco minutos.",
  features: [
    { h: "66.000+ canales", p: "Deporte, cine, series, informativos e internacionales en un solo acceso." },
    { h: "4K/8K con HEVC", p: "Codificación H.265 y bitrate adaptativo para una imagen estable." },
    { h: "Soporte 24/7", p: "Respuesta por WhatsApp en menos de 5 minutos, cualquier día." },
    { h: "4,9/5 · 2.800 reseñas", p: "12.000 suscriptores y una garantía de devolución de 7 días." },
  ],
  sections: [
    { h: "Qué significa «premium» de verdad", p: "En este sector la palabra se usa con demasiada ligereza, casi siempre para justificar un precio más alto sin nada detrás. Para nosotros significa tres compromisos concretos y verificables: servidores con capacidad suficiente para el horario punta, un catálogo mantenido en el que los canales muertos se retiran, y un soporte que responde en minutos y no en días. Ninguno de los tres se aprecia en una página de precios; los tres se comprueban en quince minutos con una prueba gratuita." },
    { h: "El catálogo en detalle", p: "Más de 66.000 canales en directo, de los cuales 4.200 son deportivos, junto a una videoteca de 70.000 películas y 18.000 series. La cobertura internacional es lo que más diferencia a un servicio premium: canales europeos, árabes, asiáticos, africanos y americanos conviven en la misma lista, lo que permite seguir competiciones extranjeras o ver televisión en tu idioma de origen sin contratar un segundo servicio. Todo el catálogo está incluido en cualquier plan, sin módulos de pago adicionales." },
    { h: "Calidad de imagen y codificación", p: "Emitimos en HEVC/H.265 con bitrate adaptativo. En la práctica esto significa dos cosas. Primero, que se transporta la misma calidad con menos ancho de banda que el códec H.264 más antiguo, lo que ayuda si tu conexión no es excepcional. Segundo, que cuando tu red fluctúa, la calidad baja un escalón durante unos segundos en lugar de congelar la imagen. La resolución final siempre depende de la fuente: nadie puede ofrecer 8K en un canal que emite en HD, y quien lo prometa está mintiendo." },
    { h: "Estabilidad: dónde se gana o se pierde", p: "Un servicio se juzga en el peor momento, no en el mejor. Entre las 20 y las 23 horas, y sobre todo durante un partido muy seguido, miles de espectadores piden simultáneamente el mismo flujo. Ahí es donde un servidor infradimensionado revela microcortes y caídas de resolución. Nuestra infraestructura está dimensionada para esos picos, pero no te pedimos que nos creas: la prueba gratuita existe precisamente para que lo verifiques en el peor momento posible." },
    { h: "Compatibilidad con tus dispositivos", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2, Windows, macOS y Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IBO Player, IPTV Smarters Pro por su sencillez de configuración, y VLC para uso puntual en ordenador. Tus credenciales no están vinculadas a un dispositivo, así que puedes usarlas en varios equipos y continuar la reproducción donde la dejaste." },
    { h: "Activación y soporte", p: "Tras el pago recibes por WhatsApp tus credenciales Xtream Codes o tu enlace M3U, normalmente en menos de cinco minutos. Si es tu primera instalación, te indicamos la aplicación adecuada para tu dispositivo concreto y te acompañamos paso a paso. El soporte funciona 24 horas al día porque los problemas de televisión aparecen por la noche y los fines de semana, no en horario de oficina. Puedes ponerlo a prueba antes de pagar, escribiendo una pregunta técnica durante la prueba gratuita." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes en el plan anual. Los cuatro planes incluyen exactamente el mismo catálogo, la misma calidad y el mismo soporte; solo cambia el coste mensual. No hay renovación automática, así que el acceso caduca por sí solo y decides tú si vuelves. Durante los siete primeros días se aplica además una garantía de devolución íntegra." },
    { h: "Lo que este servicio no es", p: "No es un sustituto de una buena conexión: si tu línea cae por debajo de 10 Mbps estables, ningún proveedor podrá darte una experiencia fluida. No promete que el 100 % del catálogo esté en 4K, porque la resolución la fija la fuente original. Y no incluye la grabación en disco duro propia de un descodificador de operador, aunque varias aplicaciones ofrecen alternativas. Preferimos decirlo antes de la compra: un servicio que promete todo a todo el mundo suele cumplir poco." },
    { h: "Cómo comprobarlo en quince minutos", p: "Solicita la prueba gratuita de 24 horas, que no requiere tarjeta de crédito, y actívala deliberadamente en horario punta. Comprueba que tus ocho o diez canales habituales estén presentes y funcionen, que la guía de programación esté rellenada varios días, que la imagen aguante diez minutos seguidos de contenido con movimiento rápido, y cronometra la respuesta del soporte a una pregunta técnica. Cuatro comprobaciones, un cuarto de hora, y sabrás más que leyendo cualquier comparativa." },
  ],
  faq: [
    { q: "¿Qué incluye el servicio premium?", a: "66.000+ canales en directo con 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, guía de programación y soporte 24/7. Todo incluido en cualquier plan, sin módulos de pago." },
    { q: "¿Está todo el catálogo en 4K?", a: "No, y ningún proveedor honesto lo afirmaría: la resolución depende siempre de la fuente. Lo que sí garantizamos es codificación HEVC/H.265 con bitrate adaptativo para mantener la imagen estable." },
    { q: "¿Cuánto cuesta?", a: "De 15 € por un mes a 60 € por doce, es decir 5 €/mes en el plan anual. Todos los planes tienen el mismo catálogo y la misma calidad; solo cambia el coste mensual." },
    { q: "¿Cómo compruebo la estabilidad?", a: "Con la prueba gratuita de 24 horas, activada entre las 20 y las 23 horas o durante un partido concurrido. Por la mañana casi cualquier servicio funciona bien y la prueba no demuestra nada." },
    { q: "¿Hay permanencia?", a: "No. Sin permanencia y sin renovación automática: el acceso caduca solo y decides si vuelves. Los siete primeros días están cubiertos por una garantía de devolución." },
  ],
  cta: "Empezar con IPTV premium",
};

content["iptv-premium"].it = {
  metaTitle: "IPTV premium — 66.000 canali in 4K/8K da 5 €/mese",
  metaDesc:
    "IPTV premium con 66.000+ canali, 70.000 film e 18.000 serie in 4K/8K. Server stabili, assistenza 24/7 e attivazione in 5 minuti da 5 €/mese.",
  eyebrow: "IPTV premium · 4K/8K",
  h1: "IPTV premium",
  h1Accent: "senza compromessi",
  intro:
    "Un servizio pensato per chi non accetta interruzioni: 66.000+ canali, 70.000 film e 18.000 serie in 4K/8K, su server dimensionati per le ore di punta. Da 5 €/mese, attivo in meno di cinque minuti.",
  features: [
    { h: "66.000+ canali", p: "Sport, cinema, serie, informazione e internazionali in un solo accesso." },
    { h: "4K/8K con HEVC", p: "Codifica H.265 e bitrate adattivo per un'immagine stabile." },
    { h: "Assistenza 24/7", p: "Risposta su WhatsApp in meno di 5 minuti, ogni giorno." },
    { h: "4,9/5 · 2.800 recensioni", p: "12.000 abbonati e una garanzia di rimborso di 7 giorni." },
  ],
  sections: [
    { h: "Cosa significa davvero «premium»", p: "In questo settore la parola viene usata con troppa leggerezza, quasi sempre per giustificare un prezzo più alto senza nulla dietro. Per noi significa tre impegni concreti e verificabili: server con capacità sufficiente per le ore di punta, un catalogo curato in cui i canali morti vengono rimossi, e un'assistenza che risponde in minuti e non in giorni. Nessuno dei tre si vede in una pagina prezzi; tutti e tre si verificano in un quarto d'ora con una prova gratuita." },
    { h: "Il catalogo in dettaglio", p: "Oltre 66.000 canali in diretta, di cui 4.200 sportivi, insieme a una videoteca di 70.000 film e 18.000 serie. La copertura internazionale è ciò che distingue di più un servizio premium: canali europei, arabi, asiatici, africani e americani convivono nello stesso elenco, il che permette di seguire competizioni estere o guardare la televisione nella tua lingua d'origine senza sottoscrivere un secondo servizio. L'intero catalogo è incluso in qualsiasi piano, senza moduli a pagamento aggiuntivi." },
    { h: "Qualità dell'immagine e codifica", p: "Trasmettiamo in HEVC/H.265 con bitrate adattivo. In pratica questo significa due cose. Primo, che si trasporta la stessa qualità con meno banda rispetto al più vecchio codec H.264, il che aiuta se la tua connessione non è eccezionale. Secondo, che quando la rete oscilla, la qualità scende di un gradino per qualche secondo invece di bloccare l'immagine. La risoluzione finale dipende sempre dalla sorgente: nessuno può offrire l'8K su un canale che trasmette in HD, e chi lo promette sta mentendo." },
    { h: "Stabilità: dove si vince o si perde", p: "Un servizio si giudica nel momento peggiore, non in quello migliore. Tra le 20 e le 23, e soprattutto durante una partita molto seguita, migliaia di spettatori richiedono contemporaneamente lo stesso flusso. È lì che un server sottodimensionato rivela microinterruzioni e cali di risoluzione. La nostra infrastruttura è dimensionata per quei picchi, ma non ti chiediamo di crederci: la prova gratuita esiste proprio perché tu lo verifichi nel momento peggiore possibile." },
    { h: "Compatibilità con i tuoi dispositivi", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2, Windows, macOS e Linux. Le app consigliate sono TiviMate per la sua interfaccia da televisore, IBO Player, IPTV Smarters Pro per la semplicità di configurazione, e VLC per un uso occasionale su computer. Le tue credenziali non sono legate a un dispositivo, quindi puoi usarle su più apparecchi e riprendere la visione dove l'avevi lasciata." },
    { h: "Attivazione e assistenza", p: "Dopo il pagamento ricevi su WhatsApp le credenziali Xtream Codes o il link M3U, di norma in meno di cinque minuti. Se è la tua prima installazione, ti indichiamo l'app adatta al tuo dispositivo specifico e ti seguiamo passo passo. L'assistenza funziona 24 ore su 24 perché i problemi televisivi si presentano di sera e nei fine settimana, non in orario d'ufficio. Puoi metterla alla prova prima di pagare, scrivendo una domanda tecnica durante la prova gratuita." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese sul piano annuale. Tutti e quattro i piani includono esattamente lo stesso catalogo, la stessa qualità e la stessa assistenza; cambia solo il costo mensile. Non c'è rinnovo automatico, quindi l'accesso scade da solo e sei tu a decidere se tornare. Nei primi sette giorni si applica inoltre una garanzia di rimborso integrale." },
    { h: "Cosa questo servizio non è", p: "Non è un sostituto di una buona connessione: se la tua linea scende sotto i 10 Mbps stabili, nessun fornitore potrà darti un'esperienza fluida. Non promette che il 100 % del catalogo sia in 4K, perché la risoluzione la fissa la sorgente originale. E non include la registrazione su disco propria di un decoder d'operatore, sebbene diverse app offrano alternative. Preferiamo dirlo prima dell'acquisto: un servizio che promette tutto a tutti di solito mantiene poco." },
    { h: "Come verificarlo in un quarto d'ora", p: "Richiedi la prova gratuita di 24 ore, che non necessita di carta di credito, e attivala deliberatamente in orario di punta. Verifica che i tuoi otto o dieci canali abituali siano presenti e funzionino, che la guida ai programmi sia popolata su più giorni, che l'immagine regga dieci minuti consecutivi di contenuto con movimento rapido, e cronometra la risposta dell'assistenza a una domanda tecnica. Quattro verifiche, un quarto d'ora, e saprai più di quanto ti dirà qualsiasi comparativa." },
  ],
  faq: [
    { q: "Cosa include il servizio premium?", a: "66.000+ canali in diretta con 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, guida ai programmi e assistenza 24/7. Tutto incluso in qualsiasi piano, senza moduli a pagamento." },
    { q: "L'intero catalogo è in 4K?", a: "No, e nessun fornitore onesto lo sosterrebbe: la risoluzione dipende sempre dalla sorgente. Ciò che garantiamo è la codifica HEVC/H.265 con bitrate adattivo per mantenere l'immagine stabile." },
    { q: "Quanto costa?", a: "Da 15 € per un mese a 60 € per dodici, cioè 5 €/mese sul piano annuale. Tutti i piani hanno lo stesso catalogo e la stessa qualità; cambia solo il costo mensile." },
    { q: "Come verifico la stabilità?", a: "Con la prova gratuita di 24 ore, attivata tra le 20 e le 23 o durante una partita molto seguita. Di mattina quasi ogni servizio funziona bene e la prova non dimostra nulla." },
    { q: "Ci sono vincoli?", a: "No. Nessun vincolo e nessun rinnovo automatico: l'accesso scade da solo e decidi tu se tornare. I primi sette giorni sono coperti da una garanzia di rimborso." },
  ],
  cta: "Inizia con IPTV premium",
};

// --- es/it for /m3u-playlist ------------------------------------------------
content["m3u-playlist"].es = {
  metaTitle: "Lista M3U IPTV — enlace estable, 66.000 canales, 5 minutos",
  metaDesc:
    "Lista M3U IPTV lista para usar: un enlace, 66.000+ canales con guía EPG, compatible con VLC, TiviMate, Kodi y Smarters. Desde 5 €/mes con prueba gratis.",
  eyebrow: "Lista M3U · Enlace único",
  h1: "Lista M3U",
  h1Accent: "estable y completa",
  intro:
    "Un único enlace M3U que abre 66.000+ canales con guía de programación, compatible con VLC, TiviMate, Kodi, IPTV Smarters y prácticamente cualquier reproductor. Entregado por WhatsApp en menos de cinco minutos.",
  features: [
    { h: "Un solo enlace", p: "Nada que descargar ni actualizar a mano: la URL se refresca sola." },
    { h: "Compatible con todo", p: "VLC, TiviMate, Kodi, IPTV Smarters, IBO Player, Enigma2 y MAG." },
    { h: "Con guía EPG", p: "Programación de varios días asociada al canal correcto." },
    { h: "66.000+ canales", p: "Más 70.000 películas y 18.000 series en la misma lista." },
  ],
  sections: [
    { h: "Qué es exactamente una lista M3U", p: "Un archivo M3U es, en su origen, una simple lista de reproducción de texto: una sucesión de entradas donde cada una asocia un nombre a una dirección de flujo. Aplicado al IPTV, cada línea corresponde a un canal y apunta al servidor que lo emite. La ventaja de este formato es su universalidad: existe desde hace décadas y prácticamente cualquier reproductor sabe leerlo, desde VLC en un ordenador hasta las aplicaciones dedicadas de televisión." },
    { h: "Enlace remoto frente a archivo descargado", p: "Puedes encontrar listas M3U en dos formas: un archivo que descargas o una URL remota. Nosotros entregamos siempre una URL, y la diferencia es importante. Un archivo descargado queda congelado en el momento de la descarga: cuando se añaden canales o cambian direcciones de servidor, tu copia queda obsoleta y hay que rehacerla a mano. Una URL remota se consulta cada vez que abres la aplicación, así que las actualizaciones del catálogo llegan solas sin que tengas que tocar nada." },
    { h: "Cómo instalarla", p: "El procedimiento es idéntico en casi todas las aplicaciones. Abre tu reproductor, busca la opción de añadir una lista o playlist, elige el tipo M3U o «lista remota» y pega la URL que te enviamos por WhatsApp. La aplicación descarga entonces el índice completo, lo que tarda entre unos segundos y un par de minutos la primera vez según el tamaño del catálogo. A partir de ahí los canales aparecen organizados por categorías y ya puedes empezar a ver." },
    { h: "La guía de programación", p: "Una lista M3U desnuda es solo una sucesión de canales sin información sobre qué se emite. La guía EPG se añade como una segunda URL, normalmente en formato XMLTV, que la aplicación cruza con la lista para asociar cada programa a su canal. Nosotros entregamos ambas juntas. Si tu aplicación pide una «URL EPG» separada, es esa segunda dirección la que hay que pegar; si la guía aparece vacía, casi siempre es porque ese campo se ha quedado sin rellenar." },
    { h: "Elegir el reproductor adecuado", p: "VLC es la opción más rápida para una comprobación puntual en ordenador, pero su interfaz no está pensada para el uso diario en televisión. TiviMate ofrece la mejor experiencia en Android TV y Fire TV, con una guía tipo mosaico y gestión de favoritos. IPTV Smarters Pro es la más sencilla de configurar y existe en casi todas las plataformas. Kodi es la más flexible pero requiere configurar el complemento PVR Simple Client, lo que la hace menos inmediata." },
    { h: "M3U o Xtream Codes", p: "Ambos formatos dan acceso exactamente al mismo contenido, así que la elección es puramente técnica. El M3U carga toda la lista de una vez, lo que resulta simple y universal pero puede tardar en un catálogo de decenas de miles de entradas. Xtream Codes carga los canales, la guía y la videoteca de forma dinámica, solo cuando hacen falta, lo que acelera notablemente la apertura y el cambio de canal. Si tu aplicación admite ambos, Xtream Codes suele ser mejor elección; el M3U sigue siendo imbatible en compatibilidad." },
    { h: "Problemas frecuentes", p: "Si la lista no carga, comprueba primero que has pegado la URL completa, incluida la parte final: los gestores de portapapeles cortan a veces las direcciones largas. Si carga pero muchos canales fallan, suele ser un problema de red y no de la lista. Si los canales van bien pero la guía está vacía, falta la URL EPG. Y si la lista funcionaba y deja de hacerlo, verifica que tu suscripción sigue activa antes de rehacer la configuración." },
    { h: "Seguridad y buenas prácticas", p: "Tu URL M3U contiene tus credenciales de acceso: trátala como una contraseña. No la publiques en foros ni la compartas en redes sociales, porque cualquiera que la tenga puede consumir tus conexiones simultáneas y degradar tu propia experiencia. Si sospechas que se ha filtrado, escríbenos y te generamos una nueva. Conviene también no acumular la misma lista en cinco aplicaciones distintas que se conecten a la vez sin que lo sepas." },
    { h: "Probarla antes de comprar", p: "La prueba gratuita de 24 horas entrega una URL M3U completa, sin tarjeta de crédito. Es la forma más directa de verificar que tu reproductor la lee correctamente, que tus canales están presentes y que la guía se rellena. Actívala en horario punta para que la prueba sea significativa. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Qué es una lista M3U IPTV?", a: "Una lista de reproducción donde cada línea asocia un canal a la dirección del servidor que lo emite. Nosotros la entregamos como URL remota, que se actualiza sola cuando cambia el catálogo." },
    { q: "¿En qué aplicaciones funciona?", a: "En VLC, TiviMate, Kodi, IPTV Smarters Pro, IBO Player, receptores Enigma2 y MAG Box. El M3U es el formato más universal que existe." },
    { q: "¿Por qué está vacía la guía de programación?", a: "Porque falta la URL EPG. Se añade aparte de la lista, en el campo «URL EPG» o «guía» de la aplicación. Te enviamos ambas direcciones juntas." },
    { q: "¿Es mejor M3U o Xtream Codes?", a: "Dan el mismo contenido. Xtream Codes carga los canales de forma dinámica y es más rápido con catálogos grandes; el M3U gana en compatibilidad universal." },
    { q: "¿Puedo compartir mi enlace M3U?", a: "No conviene: contiene tus credenciales y quien lo tenga consume tus conexiones simultáneas. Si crees que se ha filtrado, escríbenos y generamos uno nuevo." },
  ],
  cta: "Recibir mi lista M3U",
};

content["m3u-playlist"].it = {
  metaTitle: "Playlist M3U IPTV — link stabile, 66.000 canali, 5 minuti",
  metaDesc:
    "Playlist M3U IPTV pronta all'uso: un link, 66.000+ canali con guida EPG, compatibile con VLC, TiviMate, Kodi e Smarters. Da 5 €/mese con prova gratuita.",
  eyebrow: "Playlist M3U · Link unico",
  h1: "Playlist M3U",
  h1Accent: "stabile e completa",
  intro:
    "Un unico link M3U che apre 66.000+ canali con guida ai programmi, compatibile con VLC, TiviMate, Kodi, IPTV Smarters e praticamente qualsiasi lettore. Consegnato su WhatsApp in meno di cinque minuti.",
  features: [
    { h: "Un solo link", p: "Niente da scaricare o aggiornare a mano: l'URL si rinfresca da sé." },
    { h: "Compatibile con tutto", p: "VLC, TiviMate, Kodi, IPTV Smarters, IBO Player, Enigma2 e MAG." },
    { h: "Con guida EPG", p: "Programmazione su più giorni associata al canale corretto." },
    { h: "66.000+ canali", p: "Più 70.000 film e 18.000 serie nella stessa playlist." },
  ],
  sections: [
    { h: "Che cos'è esattamente una playlist M3U", p: "Un file M3U è, all'origine, una semplice playlist di testo: una successione di voci in cui ciascuna associa un nome a un indirizzo di flusso. Applicato all'IPTV, ogni riga corrisponde a un canale e punta al server che lo trasmette. Il vantaggio di questo formato è la sua universalità: esiste da decenni e praticamente qualsiasi lettore sa leggerlo, da VLC su computer alle app dedicate per televisore." },
    { h: "Link remoto contro file scaricato", p: "Puoi trovare playlist M3U in due forme: un file da scaricare o un URL remoto. Noi consegniamo sempre un URL, e la differenza è importante. Un file scaricato resta congelato al momento del download: quando vengono aggiunti canali o cambiano gli indirizzi dei server, la tua copia diventa obsoleta e va rifatta a mano. Un URL remoto viene consultato ogni volta che apri l'app, quindi gli aggiornamenti del catalogo arrivano da soli senza che tu debba toccare nulla." },
    { h: "Come installarla", p: "La procedura è identica in quasi tutte le app. Apri il lettore, cerca l'opzione per aggiungere una playlist, scegli il tipo M3U o «playlist remota» e incolla l'URL che ti inviamo su WhatsApp. L'app scarica quindi l'indice completo, operazione che richiede da pochi secondi a un paio di minuti la prima volta a seconda della dimensione del catalogo. Da lì in poi i canali compaiono organizzati per categorie e puoi iniziare a guardare." },
    { h: "La guida ai programmi", p: "Una playlist M3U nuda è solo una successione di canali senza informazioni su cosa vada in onda. La guida EPG si aggiunge come secondo URL, di norma in formato XMLTV, che l'app incrocia con la playlist per associare ogni programma al suo canale. Noi consegniamo entrambi insieme. Se la tua app chiede un «URL EPG» separato, è quel secondo indirizzo da incollare; se la guida risulta vuota, quasi sempre è perché quel campo è rimasto senza valore." },
    { h: "Scegliere il lettore giusto", p: "VLC è l'opzione più rapida per una verifica occasionale su computer, ma la sua interfaccia non è pensata per l'uso quotidiano sul televisore. TiviMate offre la migliore esperienza su Android TV e Fire TV, con una guida a griglia e la gestione dei preferiti. IPTV Smarters Pro è la più semplice da configurare ed esiste su quasi tutte le piattaforme. Kodi è la più flessibile ma richiede di configurare il componente PVR Simple Client, il che la rende meno immediata." },
    { h: "M3U o Xtream Codes", p: "Entrambi i formati danno accesso esattamente allo stesso contenuto, quindi la scelta è puramente tecnica. L'M3U carica l'intera playlist in una volta, il che è semplice e universale ma può risultare lento con un catalogo di decine di migliaia di voci. Xtream Codes carica canali, guida e videoteca in modo dinamico, solo quando servono, il che accelera notevolmente l'apertura e il cambio canale. Se la tua app supporta entrambi, Xtream Codes è di solito la scelta migliore; l'M3U resta imbattibile per compatibilità." },
    { h: "Problemi frequenti", p: "Se la playlist non si carica, verifica prima di aver incollato l'URL completo, parte finale inclusa: i gestori degli appunti a volte troncano gli indirizzi lunghi. Se si carica ma molti canali non partono, di solito è un problema di rete e non della playlist. Se i canali funzionano ma la guida è vuota, manca l'URL EPG. E se la playlist funzionava e smette di farlo, controlla che il tuo abbonamento sia ancora attivo prima di rifare la configurazione." },
    { h: "Sicurezza e buone pratiche", p: "Il tuo URL M3U contiene le credenziali di accesso: trattalo come una password. Non pubblicarlo su forum né condividerlo sui social, perché chiunque lo possieda può consumare le tue connessioni simultanee e peggiorare la tua stessa esperienza. Se sospetti che sia trapelato, scrivici e te ne generiamo uno nuovo. Conviene inoltre non accumulare la stessa playlist su cinque app diverse che si collegano contemporaneamente a tua insaputa." },
    { h: "Provarla prima di comprare", p: "La prova gratuita di 24 ore fornisce un URL M3U completo, senza carta di credito. È il modo più diretto per verificare che il tuo lettore lo legga correttamente, che i tuoi canali siano presenti e che la guida si popoli. Attivala in orario di punta perché la prova sia significativa. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Che cos'è una playlist M3U IPTV?", a: "Una playlist in cui ogni riga associa un canale all'indirizzo del server che lo trasmette. Noi la consegniamo come URL remoto, che si aggiorna da sé quando cambia il catalogo." },
    { q: "Su quali app funziona?", a: "Su VLC, TiviMate, Kodi, IPTV Smarters Pro, IBO Player, ricevitori Enigma2 e MAG Box. L'M3U è il formato più universale che esista." },
    { q: "Perché la guida ai programmi è vuota?", a: "Perché manca l'URL EPG. Si aggiunge separatamente dalla playlist, nel campo «URL EPG» o «guida» dell'app. Ti inviamo entrambi gli indirizzi insieme." },
    { q: "Meglio M3U o Xtream Codes?", a: "Danno lo stesso contenuto. Xtream Codes carica i canali in modo dinamico ed è più rapido con cataloghi grandi; l'M3U vince sulla compatibilità universale." },
    { q: "Posso condividere il mio link M3U?", a: "Meglio di no: contiene le tue credenziali e chi lo possiede consuma le tue connessioni simultanee. Se pensi che sia trapelato, scrivici e ne generiamo uno nuovo." },
  ],
  cta: "Ricevi la mia playlist M3U",
};

// --- /iptv-espana -----------------------------------------------------------
content["iptv-espana"] = {} as Partial<Record<Locale, SeoContent>>;
content["iptv-espana"].es = {
  metaTitle: "IPTV España — 66.000 canales, LaLiga y 4K desde 5 €/mes",
  metaDesc:
    "IPTV en España con 66.000+ canales: LaLiga, Champions, canales españoles y 70.000 películas en 4K. Activación en 5 minutos, prueba gratis de 24 h.",
  eyebrow: "IPTV España · Desde 5 €/mes",
  h1: "IPTV en España",
  h1Accent: "canales y fútbol en 4K",
  intro:
    "Canales españoles, LaLiga y competiciones europeas, más 70.000 películas y 18.000 series en 4K, en un solo acceso. Sin permanencia, sin instalador y sin descodificador: activado por WhatsApp en menos de cinco minutos desde 5 €/mes.",
  features: [
    { h: "Canales españoles", p: "Generalistas, autonómicos, informativos, infantiles y temáticos." },
    { h: "LaLiga y Champions", p: "4.200 canales deportivos con fútbol nacional y europeo." },
    { h: "Sin permanencia", p: "Ningún contrato de 12 o 24 meses ni preaviso que recordar." },
    { h: "Activo en 5 minutos", p: "Credenciales por WhatsApp, sobre el equipo que ya tienes." },
  ],
  cover: "/blog/iptv-espana-main-es.jpg",
  image: {
    src: "/blog/iptv-espana-body-es.jpg",
    alt: "Lo que cubre el IPTV en España: canales generalistas y autonómicos, 4.200 canales deportivos con LaLiga y Champions, y 70.000 películas en 4K/8K.",
    caption: "Canales españoles, deporte y videoteca en un mismo acceso.",
  },
  sections: [
    { h: "Qué cubre el IPTV en España", p: "Una suscripción de ATV Corner reúne en una sola lista lo que en el mercado español suele estar repartido entre varios contratos. Están los canales generalistas y de televisión en abierto, los canales autonómicos, los informativos de veinticuatro horas, los infantiles y una amplia oferta temática de documentales, cine y series. A eso se suman más de 66.000 canales internacionales, así que puedes seguir televisión de otros países en el mismo acceso, algo que ningún operador nacional cubre bien." },
    { h: "Fútbol: LaLiga y competiciones europeas", p: "El fútbol es el motivo por el que la mayoría de los hogares españoles paga televisión, y también el que más encarece la factura, porque los derechos están repartidos y las opciones deportivas se facturan aparte del paquete base. Nuestros 4.200 canales deportivos incluyen LaLiga, la Champions League, la Europa League, la Copa del Rey y las principales ligas europeas, con Premier League, Serie A, Bundesliga y Ligue 1. El deporte está incluido en cualquier plan, no como suplemento." },
    { h: "Qué pagas hoy y qué pasarías a pagar", p: "En el mercado español, un paquete que combine fútbol y cine se sitúa habitualmente en varias decenas de euros al mes, a lo que suele añadirse el alquiler del descodificador y, con frecuencia, una tarifa promocional que sube automáticamente al cabo del primer año. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que alquilar. La comparación honesta no es contra el precio de la oferta de entrada sino contra la factura del decimotercer mes." },
    { h: "Más allá de la Península: Canarias, Baleares y expatriados", p: "El IPTV llega por internet, así que no depende de la cobertura de una antena ni del despliegue de fibra de un operador concreto en tu zona. Eso resulta especialmente útil fuera de la Península, donde la oferta comercial es más limitada, y para los españoles que viven en el extranjero: con las mismas credenciales puedes ver canales españoles desde cualquier país, sin cambiar de suscripción y sin depender de qué operador local tenga acuerdos con las cadenas." },
    { h: "Qué conexión necesitas en España", p: "La regla práctica son 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el dispositivo donde vas a ver y no en el router. La cobertura de fibra en España es de las mejores de Europa, así que la mayoría de los hogares cumple ese requisito con holgura; el problema, cuando aparece, casi nunca es la velocidad contratada sino el Wi-Fi. Si el televisor está lejos del router, un cable Ethernet o un adaptador resuelve más problemas que cualquier ajuste de la aplicación." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores con Windows, macOS o Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su sencillez, IBO Player y VLC para uso puntual. Tus credenciales no están atadas a un aparato concreto, así que puedes empezar un partido en el salón y terminarlo en el móvil." },
    { h: "Cómo dejar tu operador sin quedarte sin televisión", p: "El orden importa, porque los contratos españoles suelen incluir un preaviso y a veces una permanencia pendiente. Primero activa la prueba gratuita de 24 horas y compruébala en horario punta o durante un partido. Si convence, contrata un mes de IPTV y convive unas semanas con los dos servicios. Solo entonces cursa la baja, revisando antes las condiciones de tu contrato para no pagar penalización. Así nunca te quedas sin señal y decides con la experiencia hecha." },
    { h: "Cómo verificarlo antes de pagar", p: "Pide la prueba gratuita de 24 horas, que no requiere tarjeta de crédito, y actívala deliberadamente cuando de verdad ves la televisión: a la hora de un partido, no un martes por la mañana. Comprueba que tus canales habituales estén presentes y funcionen, que la guía de programación esté rellenada varios días y que la imagen aguante diez minutos seguidos de fútbol. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce. Los cuatro planes incluyen exactamente el mismo catálogo de 66.000+ canales, la misma calidad 4K/8K y el mismo soporte 24/7; lo único que cambia es el coste mensual. No hay renovación automática, así que el acceso caduca solo y decides tú si vuelves. La valoración media del servicio es de 4,9/5 sobre más de 2.800 reseñas, con 12.000 suscriptores." },
  ],
  faq: [
    { q: "¿Funciona el IPTV en España?", a: "Sí. Llega por tu conexión a internet, así que funciona en toda España, incluidas Canarias y Baleares, sin antena ni descodificador. Basta con 10 Mbps estables para HD y 25 Mbps para 4K." },
    { q: "¿Puedo ver LaLiga y la Champions League?", a: "Sí. Los 4.200 canales deportivos incluyen LaLiga, Champions, Europa League, Copa del Rey y las grandes ligas europeas, sin coste adicional sobre el plan que elijas." },
    { q: "¿Cuánto cuesta el IPTV en España?", a: "De 15 € por un mes a 60 € por doce, es decir 5 €/mes en el plan anual. El deporte está incluido, no facturado aparte como suele ocurrir en los paquetes tradicionales." },
    { q: "¿Puedo ver canales españoles desde el extranjero?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión a internet, sin cambiar de suscripción ni depender del operador local." },
    { q: "¿Hay permanencia o penalización por baja?", a: "No. Sin permanencia y sin renovación automática: el acceso caduca solo. Los siete primeros días están cubiertos por una garantía de devolución íntegra." },
  ],
  cta: "Empezar en España",
};

content["iptv-espana"].en = {
  metaTitle: "IPTV Spain — 66,000 channels, LaLiga and 4K from €5/month",
  metaDesc:
    "IPTV in Spain with 66,000+ channels: LaLiga, Champions League, Spanish channels and 70,000 films in 4K. Active in 5 minutes, 24h free trial.",
  eyebrow: "IPTV Spain · From €5/month",
  h1: "IPTV in Spain",
  h1Accent: "channels and football in 4K",
  intro:
    "Spanish channels, LaLiga and European competitions, plus 70,000 films and 18,000 series in 4K, on a single login. No contract, no installer and no set-top box: activated on WhatsApp in under five minutes from €5/month.",
  features: [
    { h: "Spanish channels", p: "National, regional, news, children's and thematic channels." },
    { h: "LaLiga and Champions", p: "4,200 sport channels covering domestic and European football." },
    { h: "No contract", p: "No 12- or 24-month tie-in and no notice period to remember." },
    { h: "Active in 5 minutes", p: "Credentials on WhatsApp, on hardware you already own." },
  ],
  cover: "/blog/iptv-espana-main-en.jpg",
  image: {
    src: "/blog/iptv-espana-body-en.jpg",
    alt: "What IPTV covers in Spain: national and regional channels, 4,200 sport channels with LaLiga and Champions League, and 70,000 films in 4K/8K.",
    caption: "Spanish channels, sport and catalogue on one login.",
  },
  sections: [
    { h: "What IPTV covers in Spain", p: "An ATV Corner subscription gathers into one list what the Spanish market usually splits across several contracts. You get the national free-to-air channels, the regional broadcasters, twenty-four-hour news, children's channels and a wide thematic offering of documentaries, film and series. On top of that sit more than 66,000 international channels, so you can follow television from other countries on the same login — something no domestic operator covers well." },
    { h: "Football: LaLiga and European competitions", p: "Football is why most Spanish households pay for television at all, and it is also what inflates the bill, because rights are split between providers and sport is billed on top of the base package. Our 4,200 sport channels include LaLiga, the Champions League, the Europa League, the Copa del Rey and the major European leagues, with the Premier League, Serie A, Bundesliga and Ligue 1. Sport is included in every plan rather than sold as an add-on." },
    { h: "What you pay now versus what you would pay", p: "In the Spanish market, a package combining football and film typically runs to several tens of euros a month, usually with set-top box rental on top and, very often, a promotional rate that rises automatically after the first year. An ATV Corner annual plan costs €60, that is €5/month, with sport included and no hardware to rent. The honest comparison is not against the introductory offer but against the bill in month thirteen." },
    { h: "Beyond the mainland: islands and expatriates", p: "IPTV arrives over the internet, so it does not depend on aerial coverage or on whether a particular operator has rolled out fibre in your area. That matters especially outside mainland Spain, where the commercial offering is thinner, and for Spaniards living abroad: the same credentials let you watch Spanish channels from any country, without switching subscription or depending on which local operator has deals with the broadcasters." },
    { h: "The connection you need in Spain", p: "The working rule is 10 Mbps stable for HD and 25 Mbps for 4K, measured on the device you will actually watch on rather than at the router. Spain has some of the best fibre coverage in Europe, so most households clear that comfortably; when problems do appear, the cause is almost never the contracted speed but the Wi-Fi. If the television sits far from the router, an Ethernet cable or adapter fixes more than any in-app setting will." },
    { h: "Which devices it works on", p: "Samsung, LG and Android TV smart televisions, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2 receivers and computers running Windows, macOS or Linux. The recommended apps are TiviMate for its television-style interface, IPTV Smarters Pro for ease of setup, IBO Player, and VLC for occasional use. Your credentials are not tied to one device, so you can start a match in the living room and finish it on your phone." },
    { h: "Leaving your operator without losing television", p: "The order matters, because Spanish contracts usually carry a notice period and sometimes an outstanding tie-in. First activate the free 24-hour trial and test it at peak time or during a match. If it convinces you, buy one month of IPTV and run both services side by side for a few weeks. Only then cancel, checking your contract terms first so you avoid a penalty. That way you are never without a signal and you decide on experience rather than a promise." },
    { h: "How to verify it before paying", p: "Request the free 24-hour trial, which needs no credit card, and start it deliberately when you actually watch television: at kick-off, not on a Tuesday morning. Check that your usual channels are present and working, that the programme guide is populated across several days, and that the picture holds through ten unbroken minutes of football. After that, a subscription runs from €15 a month or €5/month on the annual plan, with a 7-day money-back guarantee." },
    { h: "Pricing and terms", p: "Four durations: €15 for one month, €30 for three, €50 for six and €60 for twelve. All four plans include exactly the same 66,000+ channel catalogue, the same 4K/8K quality and the same 24/7 support; only the monthly cost changes. There is no automatic renewal, so access simply expires and you decide whether to come back. The service averages 4.9/5 across more than 2,800 reviews, with 12,000 subscribers." },
  ],
  faq: [
    { q: "Does IPTV work in Spain?", a: "Yes. It arrives over your internet connection, so it works across Spain including the Canaries and Balearics, with no aerial or set-top box. 10 Mbps stable is enough for HD and 25 Mbps for 4K." },
    { q: "Can I watch LaLiga and the Champions League?", a: "Yes. The 4,200 sport channels cover LaLiga, the Champions League, the Europa League, the Copa del Rey and the major European leagues, at no extra cost over the plan you pick." },
    { q: "How much does IPTV cost in Spain?", a: "From €15 for one month to €60 for twelve, that is €5/month. Sport is included rather than billed separately as it usually is in traditional packages." },
    { q: "Can I watch Spanish channels from abroad?", a: "Yes. The same credentials work from any country with an internet connection, without changing subscription or depending on a local operator." },
    { q: "Is there a contract or cancellation fee?", a: "No. No tie-in and no automatic renewal: access simply expires. The first seven days are covered by a full money-back guarantee." },
  ],
  cta: "Get started in Spain",
};

// --- /iptv-italia -----------------------------------------------------------
content["iptv-italia"] = {} as Partial<Record<Locale, SeoContent>>;
content["iptv-italia"].it = {
  metaTitle: "IPTV Italia — 66.000 canali, Serie A e 4K da 5 €/mese",
  metaDesc:
    "IPTV in Italia con 66.000+ canali: Serie A, Champions, canali italiani e 70.000 film in 4K. Attivazione in 5 minuti, prova gratuita di 24 ore.",
  eyebrow: "IPTV Italia · Da 5 €/mese",
  h1: "IPTV in Italia",
  h1Accent: "canali e calcio in 4K",
  intro:
    "Canali italiani, Serie A e competizioni europee, più 70.000 film e 18.000 serie in 4K, su un unico accesso. Senza vincoli, senza installatore e senza decoder: attivo su WhatsApp in meno di cinque minuti da 5 €/mese.",
  features: [
    { h: "Canali italiani", p: "Generalisti, informazione, bambini, sport e tematici." },
    { h: "Serie A e Champions", p: "4.200 canali sportivi con calcio nazionale ed europeo." },
    { h: "Senza vincoli", p: "Nessun contratto da 12 o 24 mesi né preavviso da ricordare." },
    { h: "Attivo in 5 minuti", p: "Credenziali su WhatsApp, sull'apparecchio che già possiedi." },
  ],
  cover: "/blog/iptv-italia-main-it.jpg",
  image: {
    src: "/blog/iptv-italia-body-it.jpg",
    alt: "Cosa copre l'IPTV in Italia: canali generalisti e tematici, 4.200 canali sportivi con Serie A e Champions League, e 70.000 film in 4K/8K.",
    caption: "Canali italiani, sport e videoteca in un solo accesso.",
  },
  sections: [
    { h: "Cosa copre l'IPTV in Italia", p: "Un abbonamento ATV Corner riunisce in un unico elenco ciò che sul mercato italiano è normalmente diviso tra più contratti. Ci sono i canali generalisti in chiaro, l'informazione ventiquattr'ore, i canali per bambini e un'ampia offerta tematica di documentari, cinema e serie. A questi si aggiungono oltre 66.000 canali internazionali, così puoi seguire la televisione di altri paesi sullo stesso accesso: un terreno che nessun operatore nazionale copre davvero bene." },
    { h: "Calcio: Serie A e competizioni europee", p: "Il calcio è il motivo per cui la maggior parte delle famiglie italiane paga la televisione, ed è anche ciò che fa lievitare la bolletta, perché i diritti sono ripartiti tra operatori diversi e seguire un campionato intero richiede spesso due abbonamenti. I nostri 4.200 canali sportivi comprendono la Serie A, la Champions League, l'Europa League, la Coppa Italia e i maggiori campionati europei, con Premier League, LaLiga, Bundesliga e Ligue 1. Lo sport è incluso in ogni piano, non venduto come opzione." },
    { h: "Quanto paghi oggi e quanto pagheresti", p: "Sul mercato italiano, seguire il calcio per intero e avere anche cinema e serie significa di norma sommare più abbonamenti, per un totale che si colloca su diverse decine di euro al mese, spesso con il noleggio del decoder in aggiunta e una tariffa promozionale che sale automaticamente dopo il primo anno. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da noleggiare. Il confronto onesto non è con l'offerta d'ingresso ma con la bolletta del tredicesimo mese." },
    { h: "Dove la TV tradizionale arriva male", p: "L'IPTV viaggia su internet, quindi non dipende dall'orientamento di una parabola né dalla copertura del digitale terrestre nella tua zona. Questo conta soprattutto nelle aree montane e nei piccoli centri, dove la ricezione terrestre è storicamente più incerta, e per gli italiani che vivono all'estero: con le stesse credenziali puoi guardare i canali italiani da qualsiasi paese, senza cambiare abbonamento e senza dipendere dagli accordi di un operatore locale." },
    { h: "Quale connessione serve in Italia", p: "La regola pratica è 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sull'apparecchio su cui guarderai e non sul router. La copertura in fibra italiana è cresciuta molto negli ultimi anni, ma resta disomogenea, quindi vale la pena misurare prima di acquistare. Quando compaiono problemi, la causa è quasi sempre il Wi-Fi e non la velocità contrattuale: se il televisore è lontano dal router, un cavo Ethernet risolve più di qualsiasi impostazione dell'app." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer con Windows, macOS o Linux. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la semplicità di configurazione, IBO Player e VLC per un uso occasionale. Le credenziali non sono legate a un singolo apparecchio, quindi puoi iniziare una partita in salotto e finirla sul telefono." },
    { h: "Lasciare l'operatore senza restare senza TV", p: "L'ordine conta, perché i contratti italiani prevedono di norma un preavviso e talvolta un vincolo ancora attivo. Prima attiva la prova gratuita di 24 ore e verificala in orario di punta o durante una partita. Se convince, acquista un mese di IPTV e convivi qualche settimana con entrambi i servizi. Solo allora invia la disdetta, controllando prima le condizioni del contratto per evitare penali. Così non resti mai senza segnale e decidi sull'esperienza, non su una promessa." },
    { h: "Come verificarlo prima di pagare", p: "Richiedi la prova gratuita di 24 ore, che non necessita di carta di credito, e attivala deliberatamente quando guardi davvero la televisione: all'ora della partita, non un martedì mattina. Verifica che i tuoi canali abituali siano presenti e funzionanti, che la guida ai programmi sia popolata su più giorni e che l'immagine regga dieci minuti consecutivi di calcio. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici. Tutti e quattro i piani includono esattamente lo stesso catalogo di 66.000+ canali, la stessa qualità 4K/8K e la stessa assistenza 24/7; cambia solo il costo mensile. Non c'è rinnovo automatico, quindi l'accesso scade da solo e sei tu a decidere se tornare. Il servizio ha una valutazione media di 4,9/5 su oltre 2.800 recensioni, con 12.000 abbonati." },
  ],
  faq: [
    { q: "L'IPTV funziona in Italia?", a: "Sì. Arriva tramite la tua connessione internet, quindi funziona in tutta Italia senza parabola né decoder, comprese le zone dove il digitale terrestre riceve male. Bastano 10 Mbps stabili per l'HD e 25 Mbps per il 4K." },
    { q: "Posso guardare la Serie A e la Champions League?", a: "Sì. I 4.200 canali sportivi comprendono Serie A, Champions League, Europa League, Coppa Italia e i maggiori campionati europei, senza costi aggiuntivi sul piano scelto." },
    { q: "Quanto costa l'IPTV in Italia?", a: "Da 15 € per un mese a 60 € per dodici, cioè 5 €/mese sul piano annuale. Lo sport è incluso invece che fatturato a parte come accade di solito." },
    { q: "Posso guardare i canali italiani dall'estero?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione internet, senza cambiare abbonamento né dipendere da un operatore locale." },
    { q: "Ci sono vincoli o penali di disdetta?", a: "No. Nessun vincolo e nessun rinnovo automatico: l'accesso scade da solo. I primi sette giorni sono coperti da una garanzia di rimborso integrale." },
  ],
  cta: "Inizia in Italia",
};

content["iptv-italia"].en = {
  metaTitle: "IPTV Italy — 66,000 channels, Serie A and 4K from €5/month",
  metaDesc:
    "IPTV in Italy with 66,000+ channels: Serie A, Champions League, Italian channels and 70,000 films in 4K. Active in 5 minutes, 24h free trial.",
  eyebrow: "IPTV Italy · From €5/month",
  h1: "IPTV in Italy",
  h1Accent: "channels and football in 4K",
  intro:
    "Italian channels, Serie A and European competitions, plus 70,000 films and 18,000 series in 4K, on a single login. No contract, no installer and no set-top box: activated on WhatsApp in under five minutes from €5/month.",
  features: [
    { h: "Italian channels", p: "General, news, children's, sport and thematic channels." },
    { h: "Serie A and Champions", p: "4,200 sport channels covering domestic and European football." },
    { h: "No contract", p: "No 12- or 24-month tie-in and no notice period to remember." },
    { h: "Active in 5 minutes", p: "Credentials on WhatsApp, on hardware you already own." },
  ],
  cover: "/blog/iptv-italia-main-en.jpg",
  image: {
    src: "/blog/iptv-italia-body-en.jpg",
    alt: "What IPTV covers in Italy: general and thematic channels, 4,200 sport channels with Serie A and Champions League, and 70,000 films in 4K/8K.",
    caption: "Italian channels, sport and catalogue on one login.",
  },
  sections: [
    { h: "What IPTV covers in Italy", p: "An ATV Corner subscription gathers into one list what the Italian market normally splits across several contracts. You get the free-to-air general channels, twenty-four-hour news, children's channels and a wide thematic offering of documentaries, film and series. On top of that sit more than 66,000 international channels, so you can follow television from other countries on the same login — ground no domestic operator really covers well." },
    { h: "Football: Serie A and European competitions", p: "Football is why most Italian households pay for television, and it is also what inflates the bill, because rights are split between operators and following a full season often takes two subscriptions. Our 4,200 sport channels include Serie A, the Champions League, the Europa League, the Coppa Italia and the major European leagues, with the Premier League, LaLiga, Bundesliga and Ligue 1. Sport is included in every plan rather than sold as an option." },
    { h: "What you pay now versus what you would pay", p: "On the Italian market, following football in full while also having film and series usually means stacking subscriptions, for a total in the tens of euros a month, often with box rental on top and a promotional rate that rises automatically after the first year. An ATV Corner annual plan costs €60, that is €5/month, with sport included and no hardware to rent. The honest comparison is not against the introductory offer but against the bill in month thirteen." },
    { h: "Where traditional TV reaches poorly", p: "IPTV travels over the internet, so it does not depend on dish alignment or on digital terrestrial coverage in your area. That matters most in mountain regions and small towns, where terrestrial reception has always been patchier, and for Italians living abroad: the same credentials let you watch Italian channels from any country, without switching subscription or depending on a local operator's deals." },
    { h: "The connection you need in Italy", p: "The working rule is 10 Mbps stable for HD and 25 Mbps for 4K, measured on the device you will actually watch on rather than at the router. Italian fibre coverage has grown a great deal in recent years but remains uneven, so it is worth measuring before you buy. When problems appear, the cause is almost always Wi-Fi rather than the contracted speed: if the television sits far from the router, an Ethernet cable fixes more than any in-app setting." },
    { h: "Which devices it works on", p: "Samsung, LG and Android TV smart televisions, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, Enigma2 receivers and computers running Windows, macOS or Linux. The recommended apps are TiviMate for its television-style interface, IPTV Smarters Pro for ease of setup, IBO Player, and VLC for occasional use. Credentials are not tied to one device, so you can start a match in the living room and finish it on your phone." },
    { h: "Leaving your operator without losing television", p: "The order matters, because Italian contracts usually carry a notice period and sometimes a tie-in that is still running. First activate the free 24-hour trial and test it at peak time or during a match. If it convinces you, buy one month of IPTV and run both services side by side for a few weeks. Only then send the cancellation, checking your contract terms first to avoid a penalty. That way you are never without a signal and you decide on experience rather than a promise." },
    { h: "How to verify it before paying", p: "Request the free 24-hour trial, which needs no credit card, and start it deliberately when you actually watch television: at kick-off, not on a Tuesday morning. Check that your usual channels are present and working, that the programme guide is populated across several days, and that the picture holds through ten unbroken minutes of football. After that, a subscription runs from €15 a month or €5/month on the annual plan, with a 7-day money-back guarantee." },
    { h: "Pricing and terms", p: "Four durations: €15 for one month, €30 for three, €50 for six and €60 for twelve. All four plans include exactly the same 66,000+ channel catalogue, the same 4K/8K quality and the same 24/7 support; only the monthly cost changes. There is no automatic renewal, so access simply expires and you decide whether to come back. The service averages 4.9/5 across more than 2,800 reviews, with 12,000 subscribers." },
  ],
  faq: [
    { q: "Does IPTV work in Italy?", a: "Yes. It arrives over your internet connection, so it works across Italy with no dish or set-top box, including areas where digital terrestrial reception is poor. 10 Mbps stable is enough for HD and 25 Mbps for 4K." },
    { q: "Can I watch Serie A and the Champions League?", a: "Yes. The 4,200 sport channels cover Serie A, the Champions League, the Europa League, the Coppa Italia and the major European leagues, at no extra cost over the plan you pick." },
    { q: "How much does IPTV cost in Italy?", a: "From €15 for one month to €60 for twelve, that is €5/month. Sport is included rather than billed separately as it usually is." },
    { q: "Can I watch Italian channels from abroad?", a: "Yes. The same credentials work from any country with an internet connection, without changing subscription or depending on a local operator." },
    { q: "Is there a contract or cancellation fee?", a: "No. No tie-in and no automatic renewal: access simply expires. The first seven days are covered by a full money-back guarantee." },
  ],
  cta: "Get started in Italy",
};

// --- es/it for /xtream-codes ------------------------------------------------
content["xtream-codes"].es = {
  metaTitle: "Xtream Codes IPTV — credenciales listas, 66.000 canales",
  metaDesc:
    "Credenciales Xtream Codes listas para usar: URL, usuario y contraseña para 66.000+ canales con EPG y VOD. Compatible con TiviMate y Smarters, desde 5 €/mes.",
  eyebrow: "Xtream Codes · API",
  h1: "Xtream Codes",
  h1Accent: "rápido y con VOD",
  intro:
    "Tres datos —URL del servidor, usuario y contraseña— abren 66.000+ canales, la guía de programación y una videoteca de 70.000 películas. Más rápido que una lista M3U y entregado por WhatsApp en menos de cinco minutos.",
  features: [
    { h: "Carga dinámica", p: "Los canales se piden solo cuando hacen falta: apertura casi instantánea." },
    { h: "Videoteca incluida", p: "70.000 películas y 18.000 series navegables por carátulas." },
    { h: "EPG integrada", p: "La guía llega con las credenciales, sin URL adicional." },
    { h: "TiviMate y Smarters", p: "Compatible con las principales aplicaciones IPTV." },
  ],
  sections: [
    { h: "Qué es Xtream Codes", p: "Xtream Codes no es una aplicación sino un protocolo de comunicación entre tu reproductor y el servidor. En lugar de descargar una lista completa de canales, la aplicación consulta al servidor solo lo que necesita en cada momento: la lista de categorías al abrir, los canales de una categoría al entrar en ella, la guía de un canal al seleccionarlo. Esa forma de trabajar es la que explica su ventaja principal frente al formato M3U clásico." },
    { h: "Los tres datos que recibes", p: "Tras el pago te enviamos por WhatsApp una URL de servidor, un nombre de usuario y una contraseña. Es todo lo que necesitas. En la aplicación eliges añadir una cuenta de tipo «Xtream Codes» o «Xtream Codes API» y rellenas los tres campos. Un error frecuente es incluir una barra final en la URL o confundir el puerto: copia y pega exactamente lo que te enviamos, sin añadir ni quitar nada, y funcionará a la primera." },
    { h: "Por qué es más rápido que M3U", p: "Una lista M3U de 66.000 entradas es un archivo de texto considerable que la aplicación debe descargar y analizar entero antes de mostrar nada. Con catálogos grandes eso puede suponer una espera perceptible cada vez que abres el reproductor. Xtream Codes evita ese trabajo: pide solo el fragmento que vas a ver. En la práctica notarás una apertura mucho más rápida y un cambio de canal más ágil, sobre todo en dispositivos modestos como un Fire TV Stick." },
    { h: "La videoteca, la diferencia real", p: "Esta es la ventaja que más se aprecia en el uso diario. Con M3U, las películas y series aparecen como canales más dentro de una lista interminable. Con Xtream Codes, la aplicación recibe metadatos: carátulas, sinopsis, año, duración y categorías. El resultado es una interfaz de videoteca navegable, parecida a la de un servicio de streaming, donde puedes explorar por género en lugar de desplazarte por miles de líneas de texto buscando un título." },
    { h: "Configurarlo en tu aplicación", p: "En TiviMate elige «Añadir lista de reproducción» y después «Xtream Codes». En IPTV Smarters Pro selecciona «Login with Xtream Codes API». En IBO Player introduce los datos en la sección de cuenta. El procedimiento es el mismo en todas: pegar los tres campos y esperar a que se cargue el catálogo, algo que suele tardar menos de un minuto. Si te ayuda, la aplicación de Fire TV en el móvil incluye un teclado que evita escribir con el mando." },
    { h: "Cuándo conviene usar M3U en su lugar", p: "Xtream Codes es mejor casi siempre, pero no siempre está disponible. Algunos reproductores antiguos, ciertos receptores Enigma2 y VLC solo entienden listas M3U. En esos casos el formato clásico sigue siendo la opción correcta y da acceso exactamente al mismo contenido, aunque sin la interfaz de videoteca y con una carga inicial más lenta. Puedes pedirnos ambos formatos: son dos maneras de acceder a la misma suscripción, no dos productos distintos." },
    { h: "Errores frecuentes y solución", p: "Si la aplicación responde «credenciales inválidas», revisa que no se haya colado un espacio al final del usuario, cosa habitual al pegar desde WhatsApp. Si conecta pero no aparece ningún canal, casi siempre es que la carga del catálogo se interrumpió: fuerza una actualización desde los ajustes de la aplicación. Si los canales van bien pero la videoteca está vacía, comprueba que tu reproductor admite realmente la API y no solo el M3U disfrazado." },
    { h: "Seguridad de tus credenciales", p: "Tus datos de Xtream Codes son una contraseña de acceso: no los publiques ni los compartas. Quien los tenga consume tus conexiones simultáneas, lo que degrada tu propia experiencia y puede llegar a bloquear la sesión en pleno partido. Si sospechas que se han filtrado, escríbenos y generamos credenciales nuevas sin coste. Conviene además no dejarlas configuradas en dispositivos que ya no usas, porque algunas aplicaciones siguen conectándose en segundo plano." },
    { h: "Probarlo antes de comprar", p: "La prueba gratuita de 24 horas entrega credenciales Xtream Codes completas, sin tarjeta de crédito. Es la forma directa de comprobar que tu aplicación las acepta, que la videoteca se carga con carátulas y que la guía aparece rellenada. Actívala en horario punta para que la prueba diga algo útil. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Qué son las credenciales Xtream Codes?", a: "Una URL de servidor, un usuario y una contraseña. Con esos tres datos tu aplicación accede a los canales, la guía de programación y la videoteca, sin necesidad de una URL de lista separada." },
    { q: "¿Es mejor que una lista M3U?", a: "En general sí. Carga los canales de forma dinámica, así que abre más rápido, y muestra películas y series como una videoteca con carátulas en lugar de líneas de texto. El M3U gana solo en compatibilidad con reproductores antiguos." },
    { q: "¿Qué aplicaciones lo admiten?", a: "TiviMate, IPTV Smarters Pro, IBO Player y la mayoría de las aplicaciones IPTV modernas, en Android TV, Fire TV, iOS y Windows. VLC y algunos Enigma2 antiguos solo aceptan M3U." },
    { q: "¿Por qué dice «credenciales inválidas»?", a: "Casi siempre por un espacio de más al pegar desde WhatsApp o por una barra final añadida a la URL. Copia y pega exactamente lo que te enviamos, sin modificar nada." },
    { q: "¿Puedo pedir los dos formatos?", a: "Sí. Xtream Codes y M3U son dos formas de acceder a la misma suscripción, no dos productos. Pídenos el que te falte y te lo enviamos." },
  ],
  cta: "Recibir mis credenciales",
};

content["xtream-codes"].it = {
  metaTitle: "Xtream Codes IPTV — credenziali pronte, 66.000 canali",
  metaDesc:
    "Credenziali Xtream Codes pronte all'uso: URL, utente e password per 66.000+ canali con EPG e VOD. Compatibili con TiviMate e Smarters, da 5 €/mese.",
  eyebrow: "Xtream Codes · API",
  h1: "Xtream Codes",
  h1Accent: "veloce e con VOD",
  intro:
    "Tre dati — URL del server, nome utente e password — aprono 66.000+ canali, la guida ai programmi e una videoteca di 70.000 film. Più rapido di una playlist M3U e consegnato su WhatsApp in meno di cinque minuti.",
  features: [
    { h: "Caricamento dinamico", p: "I canali si richiedono solo quando servono: apertura quasi istantanea." },
    { h: "Videoteca inclusa", p: "70.000 film e 18.000 serie sfogliabili per copertine." },
    { h: "EPG integrata", p: "La guida arriva con le credenziali, senza URL aggiuntivo." },
    { h: "TiviMate e Smarters", p: "Compatibile con le principali app IPTV." },
  ],
  sections: [
    { h: "Che cos'è Xtream Codes", p: "Xtream Codes non è un'applicazione ma un protocollo di comunicazione tra il lettore e il server. Invece di scaricare un elenco completo di canali, l'app chiede al server solo ciò che le serve in quel momento: l'elenco delle categorie all'apertura, i canali di una categoria quando ci entri, la guida di un canale quando lo selezioni. È questo modo di lavorare a spiegare il suo vantaggio principale rispetto al formato M3U classico." },
    { h: "I tre dati che ricevi", p: "Dopo il pagamento ti inviamo su WhatsApp un URL del server, un nome utente e una password. È tutto ciò che serve. Nell'app scegli di aggiungere un account di tipo «Xtream Codes» o «Xtream Codes API» e compili i tre campi. Un errore frequente è includere una barra finale nell'URL o sbagliare la porta: copia e incolla esattamente ciò che ti inviamo, senza aggiungere né togliere nulla, e funzionerà al primo tentativo." },
    { h: "Perché è più veloce dell'M3U", p: "Una playlist M3U da 66.000 voci è un file di testo consistente che l'app deve scaricare e analizzare per intero prima di mostrare qualcosa. Con cataloghi grandi questo può comportare un'attesa percepibile ogni volta che apri il lettore. Xtream Codes evita quel lavoro: richiede solo il frammento che stai per guardare. In pratica noterai un'apertura molto più rapida e un cambio canale più agile, soprattutto su dispositivi modesti come un Fire TV Stick." },
    { h: "La videoteca, la vera differenza", p: "È il vantaggio che si apprezza di più nell'uso quotidiano. Con l'M3U, film e serie compaiono come canali qualsiasi dentro un elenco interminabile. Con Xtream Codes l'app riceve i metadati: copertine, trame, anno, durata e categorie. Il risultato è un'interfaccia da videoteca navigabile, simile a quella di un servizio di streaming, dove puoi esplorare per genere invece di scorrere migliaia di righe di testo alla ricerca di un titolo." },
    { h: "Configurarlo nella tua app", p: "In TiviMate scegli «Aggiungi playlist» e poi «Xtream Codes». In IPTV Smarters Pro seleziona «Login with Xtream Codes API». In IBO Player inserisci i dati nella sezione account. La procedura è la stessa ovunque: incollare i tre campi e attendere il caricamento del catalogo, di norma meno di un minuto. Se ti è utile, l'app Fire TV per telefono include una tastiera che evita di digitare con il telecomando." },
    { h: "Quando conviene usare l'M3U", p: "Xtream Codes è migliore quasi sempre, ma non è sempre disponibile. Alcuni lettori datati, certi ricevitori Enigma2 e VLC comprendono soltanto playlist M3U. In quei casi il formato classico resta la scelta corretta e dà accesso esattamente allo stesso contenuto, pur senza l'interfaccia da videoteca e con un caricamento iniziale più lento. Puoi chiederci entrambi i formati: sono due modi di accedere allo stesso abbonamento, non due prodotti diversi." },
    { h: "Errori frequenti e soluzioni", p: "Se l'app risponde «credenziali non valide», controlla che non si sia infilato uno spazio in fondo al nome utente, cosa comune incollando da WhatsApp. Se si collega ma non compare alcun canale, quasi sempre il caricamento del catalogo si è interrotto: forza un aggiornamento dalle impostazioni dell'app. Se i canali funzionano ma la videoteca è vuota, verifica che il tuo lettore supporti davvero l'API e non solo l'M3U mascherato." },
    { h: "Sicurezza delle credenziali", p: "I tuoi dati Xtream Codes sono una password di accesso: non pubblicarli e non condividerli. Chi li possiede consuma le tue connessioni simultanee, il che peggiora la tua esperienza e può arrivare a bloccare la sessione in piena partita. Se sospetti che siano trapelati, scrivici e generiamo credenziali nuove senza costi. Conviene inoltre non lasciarle configurate su dispositivi che non usi più, perché alcune app continuano a collegarsi in background." },
    { h: "Provarlo prima di comprare", p: "La prova gratuita di 24 ore fornisce credenziali Xtream Codes complete, senza carta di credito. È il modo diretto per verificare che la tua app le accetti, che la videoteca si carichi con le copertine e che la guida risulti popolata. Attivala in orario di punta perché la prova dica qualcosa di utile. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Cosa sono le credenziali Xtream Codes?", a: "Un URL del server, un nome utente e una password. Con questi tre dati la tua app accede ai canali, alla guida ai programmi e alla videoteca, senza bisogno di un URL di playlist separato." },
    { q: "È meglio di una playlist M3U?", a: "In generale sì. Carica i canali in modo dinamico, quindi apre più in fretta, e mostra film e serie come una videoteca con copertine invece che righe di testo. L'M3U vince solo sulla compatibilità con lettori datati." },
    { q: "Quali app lo supportano?", a: "TiviMate, IPTV Smarters Pro, IBO Player e la maggior parte delle app IPTV moderne, su Android TV, Fire TV, iOS e Windows. VLC e alcuni Enigma2 datati accettano solo l'M3U." },
    { q: "Perché dice «credenziali non valide»?", a: "Quasi sempre per uno spazio di troppo incollando da WhatsApp o per una barra finale aggiunta all'URL. Copia e incolla esattamente ciò che ti inviamo, senza modificare nulla." },
    { q: "Posso chiedere entrambi i formati?", a: "Sì. Xtream Codes e M3U sono due modi di accedere allo stesso abbonamento, non due prodotti. Chiedici quello che ti manca e te lo inviamo." },
  ],
  cta: "Ricevi le mie credenziali",
};

// --- es/it for /best-iptv-alternatives --------------------------------------
content["best-iptv-alternatives"].es = {
  metaTitle: "Alternativas al IPTV — comparativa honesta 2026",
  metaDesc:
    "Cable, satélite, TDT, streaming y IPTV comparados sin adornos: qué gana cada uno, qué pierde y cuál te conviene según lo que ves y lo que pagas.",
  eyebrow: "Comparativa · Actualizada 2026",
  h1: "Alternativas al IPTV",
  h1Accent: "comparadas sin adornos",
  intro:
    "Cable, satélite, TDT, plataformas de streaming e IPTV resuelven problemas distintos. Esta comparativa dice qué gana y qué pierde cada opción, incluida la nuestra, para que elijas por lo que ves y no por lo que promete un anuncio.",
  features: [
    { h: "Cinco opciones reales", p: "Cable, satélite, TDT, streaming e IPTV, con sus límites." },
    { h: "Coste anual comparado", p: "Lo que pagas de verdad al año, no el precio de la oferta." },
    { h: "Dónde falla cada una", p: "Incluida la nuestra: el IPTV depende de tu conexión." },
    { h: "Cuál elegir", p: "Recomendación según lo que ves y cuánta gente hay en casa." },
  ],
  sections: [
    { h: "Televisión digital terrestre (TDT)", p: "Es la opción gratuita y sigue siendo la mejor para quien solo quiere las cadenas generalistas. No paga cuota, no depende de internet y funciona durante un apagón de red. A cambio, el catálogo se limita a unas decenas de canales nacionales y autonómicos, no hay vídeo bajo demanda, y el deporte de pago sencillamente no está. Si lo que ves cabe en la TDT, cualquier otra opción de esta lista es dinero mal gastado." },
    { h: "Cable y fibra del operador", p: "La ventaja real del cable es la fiabilidad: llega por una infraestructura dedicada, así que no compite con el resto del tráfico de tu casa ni se degrada porque alguien esté descargando. Es la opción más estable que existe. El precio es el problema: paquetes de 150 a 300 canales por varias decenas de euros al mes, con alquiler de descodificador, deporte facturado aparte y una tarifa promocional que sube al cabo del primer año. Añade contrato de doce o veinticuatro meses y preaviso para darse de baja." },
    { h: "Satélite", p: "Cubre donde no llega la fibra, que sigue siendo su mejor argumento en zonas rurales y de montaña. La señal es estable salvo con lluvia o nieve intensas, situación en la que puede degradarse justo cuando más se nota. Requiere antena parabólica orientada e instalación, lo que descarta de entrada a quien vive de alquiler o en una comunidad que no lo permita. El coste y las condiciones contractuales se parecen bastante a los del cable." },
    { h: "Plataformas de streaming", p: "Insuperables en series y películas originales, con interfaz cuidada y recomendaciones. El problema es la fragmentación: los catálogos están repartidos y seguir lo que te interesa suele exigir tres o cuatro suscripciones, cuyo total supera con facilidad al de un paquete de cable. Además apenas cubren televisión en directo: informativos, canales generalistas y deporte quedan fuera casi siempre, o llegan como un servicio adicional facturado por separado." },
    { h: "IPTV", p: "Reúne en un acceso lo que las demás opciones reparten: 66.000+ canales en directo, 4.200 deportivos, 70.000 películas y 18.000 series, por 5 €/mes en el plan anual y sin permanencia. Es la opción con más contenido por euro y la única que cubre bien la televisión internacional. Su punto débil es real y conviene decirlo: depende de tu conexión a internet, así que con una línea inestable la experiencia empeora, mientras que el cable seguiría funcionando igual." },
    { h: "El coste anual comparado", p: "La comparación útil es a doce meses, porque las ofertas de entrada distorsionan cualquier otra. Un paquete de cable con deporte ronda los 600 € al año una vez pasada la promoción. Tres o cuatro plataformas de streaming suman con facilidad entre 300 y 500 €, sin televisión en directo. El satélite se sitúa cerca del cable. La TDT cuesta cero. Un plan anual de ATV Corner cuesta 60 €, con el deporte incluido en lugar de sumado aparte." },
    { h: "Cuál elegir según lo que ves", p: "Si solo ves cadenas generalistas, quédate en la TDT y no pagues nada. Si tu prioridad son las series originales y no te importa la televisión en directo, una o dos plataformas de streaming bastan. Si tu conexión es inestable y el deporte en directo es innegociable, el cable sigue siendo la apuesta segura pese al precio. Si quieres deporte, cine y canales internacionales por el menor coste posible y tu línea es decente, el IPTV es la opción con más sentido." },
    { h: "Combinaciones que funcionan", p: "No hay obligación de elegir una sola. La combinación más eficiente que vemos entre nuestros clientes es TDT o IPTV para el directo y una única plataforma de streaming para las series originales, rotándola según lo que se estrene. Eso cubre prácticamente todo por menos de lo que cuesta un paquete premium de cable. Lo que casi nunca compensa es acumular tres plataformas de streaming y además un paquete de operador: ahí se paga dos veces por el mismo cine." },
    { h: "Cómo decidir sin arriesgar dinero", p: "Antes de cambiar nada, mide tu conexión en el televisor donde ves, no en el router: necesitas 10 Mbps estables para HD y 25 para 4K. Después activa la prueba gratuita de 24 horas en horario punta y comprueba si tus canales están y si la imagen aguanta. Si funciona, contrata un mes y convive unas semanas con tu servicio actual antes de darte de baja. Así decides con datos propios y no con una comparativa, esta incluida." },
  ],
  faq: [
    { q: "¿Cuál es la mejor alternativa al cable?", a: "Depende de tu conexión. Con una línea estable, el IPTV da mucho más contenido por bastante menos dinero. Con una línea irregular, el cable sigue siendo más fiable porque no depende de tu ancho de banda." },
    { q: "¿Sale más barato el streaming que el IPTV?", a: "Rara vez. Tres o cuatro plataformas suman entre 300 y 500 € al año y aun así no cubren televisión en directo ni deporte. Un plan anual de IPTV cuesta 60 € con el deporte incluido." },
    { q: "¿Merece la pena la TDT?", a: "Si solo ves cadenas generalistas, es la mejor opción y es gratuita. No tiene sentido pagar por nada de esta lista si tu consumo cabe en los canales en abierto." },
    { q: "¿Cuál es el punto débil del IPTV?", a: "Depende de tu conexión a internet. Con menos de 10 Mbps estables la experiencia empeora, mientras que el cable o el satélite seguirían funcionando igual porque usan infraestructura dedicada." },
    { q: "¿Puedo combinar varias opciones?", a: "Sí, y suele ser lo más eficiente: IPTV o TDT para el directo y una sola plataforma de streaming para las series, rotándola según los estrenos." },
  ],
  cta: "Probar la opción IPTV",
};

content["best-iptv-alternatives"].it = {
  metaTitle: "Alternative all'IPTV — confronto onesto 2026",
  metaDesc:
    "Cavo, satellite, digitale terrestre, streaming e IPTV a confronto senza fronzoli: cosa guadagna ciascuno, cosa perde e quale conviene a te.",
  eyebrow: "Confronto · Aggiornato 2026",
  h1: "Alternative all'IPTV",
  h1Accent: "a confronto senza fronzoli",
  intro:
    "Cavo, satellite, digitale terrestre, piattaforme di streaming e IPTV risolvono problemi diversi. Questo confronto dice cosa guadagna e cosa perde ogni opzione, la nostra compresa, perché tu scelga in base a ciò che guardi e non a ciò che promette una pubblicità.",
  features: [
    { h: "Cinque opzioni reali", p: "Cavo, satellite, digitale terrestre, streaming e IPTV, con i loro limiti." },
    { h: "Costo annuo a confronto", p: "Quello che paghi davvero in un anno, non il prezzo dell'offerta." },
    { h: "Dove ciascuna cede", p: "La nostra inclusa: l'IPTV dipende dalla tua connessione." },
    { h: "Quale scegliere", p: "Consiglio in base a cosa guardi e quante persone ci sono in casa." },
  ],
  sections: [
    { h: "Digitale terrestre", p: "È l'opzione gratuita e resta la migliore per chi vuole soltanto i canali generalisti. Non paghi un canone, non dipendi da internet e funziona anche durante un guasto alla rete. In cambio, il catalogo si limita a qualche decina di canali nazionali e locali, non c'è video on demand e lo sport a pagamento semplicemente non c'è. Se ciò che guardi sta nel digitale terrestre, qualsiasi altra opzione di questo elenco è denaro speso male." },
    { h: "Cavo e fibra dell'operatore", p: "Il vero vantaggio del cavo è l'affidabilità: arriva da un'infrastruttura dedicata, quindi non compete con il resto del traffico di casa né si degrada perché qualcuno sta scaricando. È l'opzione più stabile che esista. Il prezzo è il problema: pacchetti da 150 a 300 canali per diverse decine di euro al mese, con noleggio del decoder, sport fatturato a parte e una tariffa promozionale che sale dopo il primo anno. Aggiungi un contratto da dodici o ventiquattro mesi e il preavviso per disdire." },
    { h: "Satellite", p: "Copre dove la fibra non arriva, e resta questo il suo argomento migliore nelle zone rurali e di montagna. Il segnale è stabile salvo pioggia o neve intense, situazione in cui può degradarsi proprio quando si nota di più. Richiede una parabola orientata e l'installazione, il che esclude in partenza chi vive in affitto o in un condominio che non lo consente. Costo e condizioni contrattuali somigliano parecchio a quelli del cavo." },
    { h: "Piattaforme di streaming", p: "Imbattibili su serie e film originali, con interfacce curate e raccomandazioni. Il problema è la frammentazione: i cataloghi sono divisi e seguire ciò che ti interessa richiede spesso tre o quattro abbonamenti, il cui totale supera facilmente quello di un pacchetto via cavo. Inoltre coprono a malapena la televisione in diretta: informazione, canali generalisti e sport restano quasi sempre fuori, o arrivano come servizio aggiuntivo fatturato separatamente." },
    { h: "IPTV", p: "Riunisce in un accesso ciò che le altre opzioni dividono: 66.000+ canali in diretta, 4.200 sportivi, 70.000 film e 18.000 serie, a 5 €/mese sul piano annuale e senza vincoli. È l'opzione con più contenuti per euro e l'unica che copre bene la televisione internazionale. Il suo punto debole è reale ed è giusto dirlo: dipende dalla tua connessione internet, quindi con una linea instabile l'esperienza peggiora, mentre il cavo continuerebbe a funzionare uguale." },
    { h: "Il costo annuo a confronto", p: "Il confronto utile è su dodici mesi, perché le offerte d'ingresso distorcono qualsiasi altro calcolo. Un pacchetto via cavo con lo sport si aggira sui 600 € l'anno una volta finita la promozione. Tre o quattro piattaforme di streaming sommano facilmente tra i 300 e i 500 €, senza televisione in diretta. Il satellite si colloca vicino al cavo. Il digitale terrestre costa zero. Un piano annuale ATV Corner costa 60 €, con lo sport incluso invece che aggiunto a parte." },
    { h: "Quale scegliere in base a cosa guardi", p: "Se guardi solo canali generalisti, resta sul digitale terrestre e non pagare nulla. Se la tua priorità sono le serie originali e la diretta non ti interessa, una o due piattaforme di streaming bastano. Se la tua connessione è instabile e lo sport in diretta è irrinunciabile, il cavo resta la scelta sicura nonostante il prezzo. Se vuoi sport, cinema e canali internazionali al minor costo possibile e la tua linea è discreta, l'IPTV è l'opzione più sensata." },
    { h: "Combinazioni che funzionano", p: "Non c'è obbligo di sceglierne una sola. La combinazione più efficiente che vediamo tra i nostri clienti è digitale terrestre o IPTV per la diretta e una singola piattaforma di streaming per le serie originali, ruotandola in base alle uscite. Questo copre praticamente tutto per meno di quanto costi un pacchetto premium via cavo. Ciò che quasi mai conviene è accumulare tre piattaforme di streaming più un pacchetto d'operatore: lì si paga due volte lo stesso cinema." },
    { h: "Come decidere senza rischiare soldi", p: "Prima di cambiare qualsiasi cosa, misura la connessione sul televisore su cui guardi, non sul router: servono 10 Mbps stabili per l'HD e 25 per il 4K. Poi attiva la prova gratuita di 24 ore in orario di punta e verifica se i tuoi canali ci sono e se l'immagine regge. Se funziona, acquista un mese e convivi qualche settimana con il servizio attuale prima di disdire. Così decidi con dati tuoi e non con un confronto, questo incluso." },
  ],
  faq: [
    { q: "Qual è la migliore alternativa al cavo?", a: "Dipende dalla tua connessione. Con una linea stabile, l'IPTV dà molti più contenuti a parecchio meno. Con una linea irregolare, il cavo resta più affidabile perché non dipende dalla tua banda." },
    { q: "Lo streaming costa meno dell'IPTV?", a: "Raramente. Tre o quattro piattaforme sommano tra i 300 e i 500 € l'anno e comunque non coprono la diretta né lo sport. Un piano annuale IPTV costa 60 € con lo sport incluso." },
    { q: "Vale la pena il digitale terrestre?", a: "Se guardi solo canali generalisti, è la scelta migliore ed è gratuita. Non ha senso pagare per nulla di questo elenco se i tuoi consumi stanno nei canali in chiaro." },
    { q: "Qual è il punto debole dell'IPTV?", a: "Dipende dalla connessione internet. Sotto i 10 Mbps stabili l'esperienza peggiora, mentre cavo o satellite continuerebbero a funzionare uguale perché usano infrastruttura dedicata." },
    { q: "Posso combinare più opzioni?", a: "Sì, ed è spesso la scelta più efficiente: IPTV o digitale terrestre per la diretta e una sola piattaforma di streaming per le serie, ruotandola in base alle uscite." },
  ],
  cta: "Prova l'opzione IPTV",
};

// --- es/it for /iptv-4k -----------------------------------------------------
content["iptv-4k"].es = {
  metaTitle: "IPTV 4K — HEVC/H.265, imagen estable desde 5 €/mes",
  metaDesc:
    "IPTV en 4K con codificación HEVC/H.265 y bitrate adaptativo: 66.000+ canales y 70.000 películas sin cortes. Qué conexión necesitas y cómo comprobarlo.",
  eyebrow: "IPTV 4K · HEVC/H.265",
  h1: "IPTV en 4K",
  h1Accent: "sin cortes ni excusas",
  intro:
    "El 4K solo tiene valor si se sostiene en movimiento. Emitimos en HEVC/H.265 con bitrate adaptativo sobre 66.000+ canales y 70.000 películas, y te explicamos exactamente qué necesitas para verlo bien desde 5 €/mes.",
  features: [
    { h: "HEVC/H.265", p: "Misma calidad con menos ancho de banda que el códec H.264." },
    { h: "Bitrate adaptativo", p: "Baja un escalón cuando la red fluctúa, en vez de congelarse." },
    { h: "25 Mbps bastan", p: "Medidos en el dispositivo de visionado, no en el router." },
    { h: "Catálogo completo", p: "66.000+ canales y 70.000 películas incluidos en cualquier plan." },
  ],
  sections: [
    { h: "Qué significa realmente 4K en IPTV", p: "El 4K son 3840 por 2160 píxeles, cuatro veces la definición del Full HD. Pero en televisión por internet la resolución es solo la mitad de la historia: un flujo 4K mal comprimido se ve peor que un HD bien codificado, porque los artefactos de compresión aparecen justo en las escenas con movimiento. Por eso conviene desconfiar de cualquier proveedor que anuncie resolución sin decir nada sobre el códec y el bitrate que emplea." },
    { h: "Por qué usamos HEVC/H.265", p: "HEVC comprime aproximadamente el doble de eficientemente que el H.264 anterior: transporta la misma calidad de imagen con cerca de la mitad de ancho de banda. En la práctica eso significa que un hogar con una conexión normal puede ver 4K de verdad sin saturar la línea, y que en horas de mucho tráfico hay margen antes de que la calidad se resienta. Es la diferencia entre un 4K que funciona a diario y uno que solo funciona de madrugada." },
    { h: "El bitrate adaptativo, la parte que se nota", p: "Ninguna conexión doméstica es perfectamente constante: fluctúa cuando alguien más se conecta, cuando el Wi-Fi se congestiona o cuando la red del operador va cargada. Sin adaptación, cada caída se traduce en una congelación. Con bitrate adaptativo, el flujo baja un escalón de calidad durante unos segundos y sigue reproduciéndose. Preferimos una bajada momentánea de nitidez a una imagen detenida, sobre todo si lo que estás viendo es un partido." },
    { h: "Qué conexión necesitas de verdad", p: "Unos 25 Mbps estables bastan para 4K con HEVC, y 10 Mbps para HD. La palabra decisiva es estables, y el lugar de la medición importa tanto como el número: mide en el aparato donde vas a ver, no en el router y no con el móvil al lado de este. Una línea que promedia 100 Mbps pero cae a 5 cada pocos minutos dará peor resultado que una de 25 Mbps constante, y esa caída casi siempre ocurre en el último tramo Wi-Fi." },
    { h: "El televisor y el reproductor también cuentan", p: "Para ver 4K necesitas una pantalla 4K y un reproductor capaz de decodificar HEVC por hardware. La mayoría de los televisores de los últimos años lo hacen, pero algunos dispositivos externos antiguos no: un Fire TV Stick Lite, por ejemplo, no es un modelo 4K. Si tu reproductor no decodifica HEVC por hardware, intentará hacerlo por software y el resultado serán tirones aunque tu conexión sea excelente. Es el fallo más común y el más fácil de confundir con un problema del servicio." },
    { h: "No todo el catálogo está en 4K", p: "Conviene decirlo con claridad porque muchos proveedores lo esquivan: la resolución final la fija siempre la fuente original. Un canal que emite en HD llegará en HD por mucho que tu televisor y tu conexión estén preparados para más. Lo que sí garantizamos es que allí donde existe una fuente 4K, la emitimos en 4K con HEVC, y que el resto del catálogo llega con la mejor calidad disponible. Quien prometa 66.000 canales todos en 4K no está diciendo la verdad." },
    { h: "Ajustes que mejoran la imagen", p: "En tu aplicación, activa la decodificación por hardware: es el ajuste que más impacto tiene y el que más gente olvida. Ajusta el búfer a un valor medio, porque uno demasiado bajo provoca cortes en conexiones irregulares y uno demasiado alto retrasa el cambio de canal. En el televisor, desactiva los modos de mejora de imagen agresivos, que introducen retardo y artefactos sobre un flujo ya comprimido. Y si puedes, conecta por cable Ethernet." },
    { h: "Cómo comprobarlo antes de pagar", p: "La prueba gratuita de 24 horas da acceso al catálogo completo sin tarjeta de crédito. Actívala en horario punta y elige deliberadamente contenido con movimiento rápido: fútbol o motor, nunca un plano fijo. Diez minutos seguidos bastan para ver si la imagen se sostiene o si aparecen artefactos. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
    { h: "Cuándo el 4K no compensa", p: "Si tu televisor es de 43 pulgadas o menos y lo ves desde tres metros, la diferencia entre un buen HD y un 4K es prácticamente imperceptible para la mayoría de la gente. En ese caso, lo que mejora tu experiencia no es la resolución sino la estabilidad del flujo, y ahí el HD tiene ventaja porque exige menos ancho de banda. Pagar por resolución que tu pantalla y tu distancia de visionado no pueden aprovechar no tiene sentido; en nuestros planes, en cualquier caso, ambas están incluidas." },
  ],
  faq: [
    { q: "¿Qué conexión necesito para IPTV en 4K?", a: "Unos 25 Mbps estables, medidos en el dispositivo donde vas a ver y no en el router. Para HD bastan 10 Mbps. La estabilidad importa más que la velocidad máxima contratada." },
    { q: "¿Está todo el catálogo en 4K?", a: "No. La resolución la fija siempre la fuente original: un canal que emite en HD llega en HD. Donde existe fuente 4K la emitimos en 4K con HEVC/H.265." },
    { q: "¿Por qué se ve a tirones si mi conexión es buena?", a: "Casi siempre porque el reproductor no decodifica HEVC por hardware e intenta hacerlo por software. Activa la decodificación por hardware en la aplicación y comprueba que tu dispositivo sea un modelo 4K." },
    { q: "¿Qué es el bitrate adaptativo?", a: "Un mecanismo que baja la calidad un escalón durante unos segundos cuando tu red fluctúa, en lugar de congelar la imagen. Es lo que permite ver un partido sin interrupciones en una línea imperfecta." },
    { q: "¿Cuesta más el 4K?", a: "No. Todos los planes incluyen el mismo catálogo y la misma calidad, de 15 € por un mes a 60 € por doce, es decir 5 €/mes." },
  ],
  cta: "Ver en 4K",
};

content["iptv-4k"].it = {
  metaTitle: "IPTV 4K — HEVC/H.265, immagine stabile da 5 €/mese",
  metaDesc:
    "IPTV in 4K con codifica HEVC/H.265 e bitrate adattivo: 66.000+ canali e 70.000 film senza interruzioni. Quale connessione serve e come verificarlo.",
  eyebrow: "IPTV 4K · HEVC/H.265",
  h1: "IPTV in 4K",
  h1Accent: "senza interruzioni né scuse",
  intro:
    "Il 4K ha valore solo se regge in movimento. Trasmettiamo in HEVC/H.265 con bitrate adattivo su 66.000+ canali e 70.000 film, e ti spieghiamo esattamente cosa serve per vederlo bene da 5 €/mese.",
  features: [
    { h: "HEVC/H.265", p: "Stessa qualità con meno banda rispetto al codec H.264." },
    { h: "Bitrate adattivo", p: "Scende di un gradino quando la rete oscilla, invece di bloccarsi." },
    { h: "Bastano 25 Mbps", p: "Misurati sul dispositivo di visione, non sul router." },
    { h: "Catalogo completo", p: "66.000+ canali e 70.000 film inclusi in qualsiasi piano." },
  ],
  sections: [
    { h: "Cosa significa davvero 4K nell'IPTV", p: "Il 4K è 3840 per 2160 pixel, quattro volte la definizione del Full HD. Ma nella televisione via internet la risoluzione è solo metà della storia: un flusso 4K compresso male si vede peggio di un HD codificato bene, perché gli artefatti di compressione compaiono proprio nelle scene in movimento. Per questo conviene diffidare di qualsiasi fornitore che pubblicizzi la risoluzione senza dire nulla sul codec e sul bitrate che utilizza." },
    { h: "Perché usiamo HEVC/H.265", p: "L'HEVC comprime all'incirca il doppio più efficientemente del precedente H.264: trasporta la stessa qualità d'immagine con circa metà della banda. In pratica questo significa che una famiglia con una connessione normale può guardare vero 4K senza saturare la linea, e che nelle ore di traffico intenso c'è margine prima che la qualità ne risenta. È la differenza tra un 4K che funziona ogni giorno e uno che funziona solo di notte." },
    { h: "Il bitrate adattivo, la parte che si nota", p: "Nessuna connessione domestica è perfettamente costante: oscilla quando qualcun altro si collega, quando il Wi-Fi si congestiona o quando la rete dell'operatore è carica. Senza adattamento, ogni calo si traduce in un blocco. Con il bitrate adattivo, il flusso scende di un gradino di qualità per qualche secondo e continua a riprodursi. Preferiamo un calo momentaneo di nitidezza a un'immagine ferma, soprattutto se quello che stai guardando è una partita." },
    { h: "Quale connessione serve davvero", p: "Circa 25 Mbps stabili bastano per il 4K con HEVC, e 10 Mbps per l'HD. La parola decisiva è stabili, e il punto di misurazione conta quanto il numero: misura sull'apparecchio su cui guarderai, non sul router e non con il telefono accanto a esso. Una linea che in media fa 100 Mbps ma scende a 5 ogni pochi minuti darà un risultato peggiore di una da 25 Mbps costante, e quel calo avviene quasi sempre nell'ultimo tratto Wi-Fi." },
    { h: "Contano anche il televisore e il lettore", p: "Per vedere il 4K servono uno schermo 4K e un lettore capace di decodificare l'HEVC via hardware. La maggior parte dei televisori degli ultimi anni lo fa, ma alcuni dispositivi esterni datati no: un Fire TV Stick Lite, per esempio, non è un modello 4K. Se il tuo lettore non decodifica l'HEVC via hardware, proverà a farlo via software e il risultato saranno scatti anche con una connessione eccellente. È il guasto più comune e il più facile da confondere con un problema del servizio." },
    { h: "Non tutto il catalogo è in 4K", p: "Conviene dirlo chiaramente perché molti fornitori lo evitano: la risoluzione finale la fissa sempre la sorgente originale. Un canale che trasmette in HD arriverà in HD per quanto il televisore e la connessione siano pronti a di più. Ciò che garantiamo è che dove esiste una sorgente 4K la trasmettiamo in 4K con HEVC, e che il resto del catalogo arriva con la migliore qualità disponibile. Chi promette 66.000 canali tutti in 4K non sta dicendo la verità." },
    { h: "Impostazioni che migliorano l'immagine", p: "Nella tua app, attiva la decodifica hardware: è l'impostazione con più impatto e quella che più spesso viene dimenticata. Regola il buffer su un valore medio, perché troppo basso provoca interruzioni su connessioni irregolari e troppo alto rallenta il cambio canale. Sul televisore, disattiva le modalità di miglioramento immagine aggressive, che introducono ritardo e artefatti su un flusso già compresso. E se puoi, collega via cavo Ethernet." },
    { h: "Come verificarlo prima di pagare", p: "La prova gratuita di 24 ore dà accesso al catalogo completo senza carta di credito. Attivala in orario di punta e scegli deliberatamente contenuti con movimento rapido: calcio o motori, mai un'inquadratura fissa. Dieci minuti consecutivi bastano per capire se l'immagine regge o se compaiono artefatti. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
    { h: "Quando il 4K non conviene", p: "Se il tuo televisore è da 43 pollici o meno e lo guardi da tre metri, la differenza tra un buon HD e un 4K è praticamente impercettibile per la maggior parte delle persone. In quel caso, ciò che migliora l'esperienza non è la risoluzione ma la stabilità del flusso, e lì l'HD è avvantaggiato perché richiede meno banda. Pagare per una risoluzione che il tuo schermo e la tua distanza di visione non possono sfruttare non ha senso; nei nostri piani, in ogni caso, entrambe sono incluse." },
  ],
  faq: [
    { q: "Quale connessione serve per l'IPTV in 4K?", a: "Circa 25 Mbps stabili, misurati sul dispositivo su cui guarderai e non sul router. Per l'HD bastano 10 Mbps. La stabilità conta più della velocità massima contrattuale." },
    { q: "Tutto il catalogo è in 4K?", a: "No. La risoluzione la fissa sempre la sorgente originale: un canale che trasmette in HD arriva in HD. Dove esiste una sorgente 4K la trasmettiamo in 4K con HEVC/H.265." },
    { q: "Perché scatta se la mia connessione è buona?", a: "Quasi sempre perché il lettore non decodifica l'HEVC via hardware e prova a farlo via software. Attiva la decodifica hardware nell'app e verifica che il tuo dispositivo sia un modello 4K." },
    { q: "Che cos'è il bitrate adattivo?", a: "Un meccanismo che abbassa la qualità di un gradino per qualche secondo quando la rete oscilla, invece di bloccare l'immagine. È ciò che permette di guardare una partita senza interruzioni su una linea imperfetta." },
    { q: "Il 4K costa di più?", a: "No. Tutti i piani includono lo stesso catalogo e la stessa qualità, da 15 € per un mese a 60 € per dodici, cioè 5 €/mese." },
  ],
  cta: "Guarda in 4K",
};

// --- es/it for /iptv-8k -----------------------------------------------------
content["iptv-8k"].es = {
  metaTitle: "IPTV 8K — qué es real hoy y qué no, desde 5 €/mes",
  metaDesc:
    "IPTV 8K sin exageraciones: qué contenido existe realmente en 8K, qué conexión y qué televisor hacen falta, y por qué el 4K sigue siendo la apuesta sensata.",
  eyebrow: "IPTV 8K · Sin exageraciones",
  h1: "IPTV en 8K",
  h1Accent: "lo que es real hoy",
  intro:
    "El 8K existe, pero el contenido en 8K es escaso y las exigencias son altas. Esto es lo que hay de verdad, qué necesitas para aprovecharlo y por qué el 4K sigue siendo la elección sensata para casi todo el mundo.",
  features: [
    { h: "Soporte 8K real", p: "Donde existe fuente en 8K, la servimos en 8K con HEVC." },
    { h: "Catálogo escaso", p: "El contenido nativo en 8K sigue siendo muy limitado en todo el sector." },
    { h: "Exige mucho", p: "Televisor 8K, decodificación por hardware y conexión muy holgada." },
    { h: "Incluido sin recargo", p: "No cobramos más por resolución: todos los planes son iguales." },
  ],
  sections: [
    { h: "Qué es el 8K y qué exige", p: "El 8K son 7680 por 4320 píxeles, cuatro veces el 4K y dieciséis veces el Full HD. Esa cantidad de información impone requisitos en toda la cadena: una pantalla 8K, un reproductor que decodifique HEVC en 8K por hardware, y una conexión con margen amplio y estable. Basta con que uno de los tres eslabones falle para que el resultado sea peor que un 4K bien servido, lo que ocurre más a menudo de lo que la publicidad del sector sugiere." },
    { h: "Cuánto contenido 8K existe realmente", p: "Muy poco, y conviene ser honestos porque aquí es donde más se exagera en este mercado. Prácticamente ninguna cadena de televisión emite su programación regular en 8K: la producción, el almacenamiento y la distribución siguen siendo caros, y los derechos deportivos se negocian todavía en 4K como techo. Lo que sí existe es contenido puntual, demostraciones y algunas producciones específicas. Cualquier proveedor que anuncie un catálogo entero en 8K está describiendo algo que no existe en ninguna parte." },
    { h: "Nuestra posición", p: "Donde existe una fuente en 8K, la servimos en 8K con codificación HEVC. Donde no existe, servimos la mejor calidad disponible, que en la gran mayoría de los casos será 4K o Full HD. No inflamos la cifra ni cobramos un recargo por resolución: los cuatro planes incluyen exactamente el mismo catálogo y la misma calidad, y la única diferencia entre ellos es el coste mensual. Preferimos que compres sabiendo qué vas a recibir." },
    { h: "Qué conexión haría falta", p: "Un flujo 8K bien codificado con HEVC exige bastante más que los 25 Mbps del 4K, y sobre todo exige una estabilidad que pocas líneas domésticas mantienen de forma sostenida en horario punta. Si tu conexión ya va justa para 4K, el 8K no es una mejora sino una fuente de cortes. Antes de plantearlo, mide en el televisor donde ves y observa el comportamiento durante media hora, no el pico de una prueba de velocidad de diez segundos." },
    { h: "El televisor y la distancia de visionado", p: "Aquí está el argumento que casi nadie menciona. La ventaja del 8K sobre el 4K solo es perceptible en pantallas muy grandes vistas desde cerca. En un televisor de 55 o 65 pulgadas visto desde tres metros, que es la situación de la mayoría de los salones, el ojo humano no distingue el detalle adicional. Es decir: aunque tuvieras el contenido, la conexión y el aparato, es probable que no notaras diferencia respecto a un buen 4K." },
    { h: "Por qué el 4K sigue siendo la apuesta sensata", p: "El 4K tiene hoy contenido abundante, exigencias de red razonables y compatibilidad universal con los reproductores de los últimos años. Ofrece la mejor relación entre calidad percibida y fiabilidad, que es lo que de verdad determina si disfrutas viendo la televisión. Nuestra recomendación honesta para casi todos los hogares es optimizar para un 4K estable —conexión por cable, decodificación por hardware activada— antes que perseguir una resolución para la que apenas hay material." },
    { h: "Cuándo el 8K sí tiene sentido", p: "Hay casos legítimos. Si ya tienes un televisor 8K de gran formato, una conexión sobrada y estable, y te interesa específicamente el contenido de demostración o las producciones que sí existen en esa resolución, entonces poder recibirlo sin pagar un suplemento es una ventaja real. También tiene sentido como garantía a futuro: si la oferta crece en los próximos años, tu suscripción ya lo admite sin cambiar de plan ni de proveedor." },
    { h: "Cómo comprobar qué recibes", p: "La mayoría de las aplicaciones muestran la resolución del flujo en curso en su panel de información. Es la forma directa de ver qué te está llegando de verdad en cada canal, en lugar de fiarte de lo que anuncia una página de precios. Durante la prueba gratuita de 24 horas puedes revisarlo canal por canal en tus favoritos y hacerte una idea exacta del catálogo antes de pagar nada." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro incluyen el mismo catálogo de 66.000+ canales, 70.000 películas y 18.000 series, y la misma calidad, sea cual sea la resolución de la fuente. Sin permanencia, sin renovación automática y con garantía de devolución de 7 días desde la compra." },
  ],
  faq: [
    { q: "¿Hay contenido real en 8K?", a: "Muy poco. Prácticamente ninguna cadena emite su programación regular en 8K. Existe contenido puntual y algunas producciones específicas. Un proveedor que anuncie un catálogo entero en 8K describe algo que no existe." },
    { q: "¿Merece la pena el 8K frente al 4K?", a: "Para la mayoría, no. La diferencia solo se percibe en pantallas muy grandes vistas desde cerca. En un televisor de 55 o 65 pulgadas a tres metros, el ojo no distingue el detalle adicional." },
    { q: "¿Cobráis más por el 8K?", a: "No. Los cuatro planes incluyen el mismo catálogo y la misma calidad, de 15 € por un mes a 60 € por doce. No hay recargo por resolución." },
    { q: "¿Qué necesito para ver 8K?", a: "Un televisor 8K, un reproductor que decodifique HEVC en 8K por hardware y una conexión con margen amplio y muy estable. Si uno de los tres falla, verás peor que con un 4K bien servido." },
    { q: "¿Cómo sé en qué resolución estoy viendo?", a: "La mayoría de las aplicaciones muestran la resolución del flujo en su panel de información. Puedes revisarlo canal por canal durante la prueba gratuita de 24 horas." },
  ],
  cta: "Probar el catálogo",
};

content["iptv-8k"].it = {
  metaTitle: "IPTV 8K — cosa è reale oggi e cosa no, da 5 €/mese",
  metaDesc:
    "IPTV 8K senza esagerazioni: quali contenuti esistono davvero in 8K, quale connessione e quale televisore servono, e perché il 4K resta la scelta sensata.",
  eyebrow: "IPTV 8K · Senza esagerazioni",
  h1: "IPTV in 8K",
  h1Accent: "cosa è reale oggi",
  intro:
    "L'8K esiste, ma i contenuti in 8K sono scarsi e le richieste sono elevate. Ecco cosa c'è davvero, cosa ti serve per sfruttarlo e perché il 4K resta la scelta sensata per quasi tutti.",
  features: [
    { h: "Supporto 8K reale", p: "Dove esiste una sorgente in 8K, la serviamo in 8K con HEVC." },
    { h: "Catalogo scarso", p: "I contenuti nativi in 8K restano molto limitati in tutto il settore." },
    { h: "Richiede molto", p: "Televisore 8K, decodifica hardware e connessione con ampio margine." },
    { h: "Incluso senza extra", p: "Non facciamo pagare la risoluzione: tutti i piani sono uguali." },
  ],
  sections: [
    { h: "Cos'è l'8K e cosa richiede", p: "L'8K è 7680 per 4320 pixel, quattro volte il 4K e sedici volte il Full HD. Quella quantità di informazione impone requisiti su tutta la catena: uno schermo 8K, un lettore che decodifichi l'HEVC in 8K via hardware, e una connessione con margine ampio e stabile. Basta che uno dei tre anelli ceda perché il risultato sia peggiore di un 4K servito bene, cosa che accade più spesso di quanto la pubblicità del settore lasci intendere." },
    { h: "Quanti contenuti 8K esistono davvero", p: "Pochissimi, ed è giusto essere onesti perché è qui che in questo mercato si esagera di più. Praticamente nessuna emittente trasmette la programmazione regolare in 8K: produzione, archiviazione e distribuzione restano costose, e i diritti sportivi si negoziano ancora con il 4K come tetto. Ciò che esiste sono contenuti occasionali, dimostrazioni e alcune produzioni specifiche. Qualsiasi fornitore che pubblicizzi un intero catalogo in 8K sta descrivendo qualcosa che non esiste da nessuna parte." },
    { h: "La nostra posizione", p: "Dove esiste una sorgente in 8K, la serviamo in 8K con codifica HEVC. Dove non esiste, serviamo la migliore qualità disponibile, che nella grande maggioranza dei casi sarà 4K o Full HD. Non gonfiamo la cifra e non applichiamo un sovrapprezzo per la risoluzione: i quattro piani includono esattamente lo stesso catalogo e la stessa qualità, e l'unica differenza tra loro è il costo mensile. Preferiamo che tu acquisti sapendo cosa riceverai." },
    { h: "Quale connessione servirebbe", p: "Un flusso 8K ben codificato con HEVC richiede parecchio più dei 25 Mbps del 4K, e soprattutto richiede una stabilità che poche linee domestiche mantengono in modo continuativo nelle ore di punta. Se la tua connessione è già al limite per il 4K, l'8K non è un miglioramento ma una fonte di interruzioni. Prima di considerarlo, misura sul televisore su cui guardi e osserva il comportamento per mezz'ora, non il picco di un test di velocità da dieci secondi." },
    { h: "Il televisore e la distanza di visione", p: "Qui sta l'argomento che quasi nessuno menziona. Il vantaggio dell'8K sul 4K è percepibile solo su schermi molto grandi guardati da vicino. Su un televisore da 55 o 65 pollici visto da tre metri, che è la situazione della maggior parte dei salotti, l'occhio umano non distingue il dettaglio aggiuntivo. Vale a dire: anche avendo il contenuto, la connessione e l'apparecchio, probabilmente non noteresti differenza rispetto a un buon 4K." },
    { h: "Perché il 4K resta la scelta sensata", p: "Il 4K ha oggi contenuti abbondanti, richieste di rete ragionevoli e compatibilità universale con i lettori degli ultimi anni. Offre il miglior rapporto tra qualità percepita e affidabilità, che è ciò che davvero determina se ti godi la televisione. Il nostro consiglio onesto per quasi tutte le famiglie è ottimizzare per un 4K stabile — collegamento via cavo, decodifica hardware attivata — piuttosto che inseguire una risoluzione per cui esiste pochissimo materiale." },
    { h: "Quando l'8K ha senso", p: "Ci sono casi legittimi. Se hai già un televisore 8K di grande formato, una connessione abbondante e stabile, e ti interessano specificamente i contenuti dimostrativi o le produzioni che esistono davvero in quella risoluzione, allora poterlo ricevere senza pagare un supplemento è un vantaggio reale. Ha senso anche come garanzia per il futuro: se l'offerta crescerà nei prossimi anni, il tuo abbonamento la supporta già senza cambiare piano né fornitore." },
    { h: "Come verificare cosa ricevi", p: "La maggior parte delle app mostra la risoluzione del flusso in corso nel pannello informazioni. È il modo diretto per vedere cosa ti sta arrivando davvero su ogni canale, invece di fidarti di quanto dichiara una pagina prezzi. Durante la prova gratuita di 24 ore puoi controllarlo canale per canale nei tuoi preferiti e farti un'idea esatta del catalogo prima di pagare qualsiasi cosa." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro includono lo stesso catalogo di 66.000+ canali, 70.000 film e 18.000 serie, e la stessa qualità, qualunque sia la risoluzione della sorgente. Senza vincoli, senza rinnovo automatico e con garanzia di rimborso di 7 giorni dall'acquisto." },
  ],
  faq: [
    { q: "Esistono contenuti reali in 8K?", a: "Pochissimi. Praticamente nessuna emittente trasmette la programmazione regolare in 8K. Esistono contenuti occasionali e alcune produzioni specifiche. Un fornitore che pubblicizzi un intero catalogo in 8K descrive qualcosa che non esiste." },
    { q: "Vale la pena l'8K rispetto al 4K?", a: "Per la maggior parte delle persone no. La differenza si percepisce solo su schermi molto grandi guardati da vicino. Su un televisore da 55 o 65 pollici a tre metri, l'occhio non distingue il dettaglio aggiuntivo." },
    { q: "L'8K costa di più?", a: "No. I quattro piani includono lo stesso catalogo e la stessa qualità, da 15 € per un mese a 60 € per dodici. Non c'è sovrapprezzo per la risoluzione." },
    { q: "Cosa mi serve per guardare in 8K?", a: "Un televisore 8K, un lettore che decodifichi l'HEVC in 8K via hardware e una connessione con ampio margine e molto stabile. Se uno dei tre cede, vedrai peggio che con un 4K servito bene." },
    { q: "Come faccio a sapere in quale risoluzione sto guardando?", a: "La maggior parte delle app mostra la risoluzione del flusso nel pannello informazioni. Puoi controllarlo canale per canale durante la prova gratuita di 24 ore." },
  ],
  cta: "Prova il catalogo",
};

// --- es/it for /iptv-smarters-pro -------------------------------------------
content["iptv-smarters-pro"].es = {
  metaTitle: "IPTV Smarters Pro — configuración en 5 minutos, 66.000 canales",
  metaDesc:
    "Configura IPTV Smarters Pro paso a paso: credenciales Xtream Codes o M3U, EPG y VOD en Android, iOS, Fire TV y Windows. Desde 5 €/mes con prueba gratis.",
  eyebrow: "IPTV Smarters Pro · Guía",
  h1: "IPTV Smarters Pro",
  h1Accent: "configurado en 5 minutos",
  intro:
    "La aplicación IPTV más sencilla de configurar, disponible en casi todas las plataformas. Te damos las credenciales listas y la guía paso a paso para tener 66.000+ canales funcionando en menos de cinco minutos, desde 5 €/mes.",
  features: [
    { h: "En todas las plataformas", p: "Android, iOS, Fire TV, Android TV, Windows y macOS." },
    { h: "Xtream Codes o M3U", p: "Acepta ambos formatos; te enviamos el que prefieras." },
    { h: "EPG y VOD incluidos", p: "Guía de programación y videoteca con carátulas." },
    { h: "Multiusuario", p: "Varias cuentas configuradas en la misma aplicación." },
  ],
  sections: [
    { h: "Por qué elegir Smarters Pro", p: "Su virtud es que no exige nada de ti. La pantalla de inicio pregunta directamente por el tipo de acceso, rellenas tres campos y ya está funcionando. No hay que configurar complementos, ni entender qué es un PVR, ni ajustar rutas de archivo. Para una primera instalación es la vía más rápida, y sigue siendo la opción que recomendamos a quien quiere que algo funcione hoy sin dedicarle una tarde." },
    { h: "Instalarla en tu dispositivo", p: "En Android y en Google Play la encuentras directamente por su nombre. En iPhone e iPad está en la App Store. En Fire TV Stick, al no estar siempre en la tienda de Amazon, se instala mediante Downloader con la dirección que te facilitamos por WhatsApp, tras activar la instalación desde orígenes desconocidos en Mi Fire TV. En Windows y macOS existe versión de escritorio. En todos los casos la configuración posterior es idéntica." },
    { h: "Introducir tus credenciales", p: "Al abrirla verás dos opciones. «Login with Xtream Codes API» es la que recomendamos: pide URL del servidor, usuario y contraseña, y carga los canales de forma dinámica junto con la videoteca con carátulas. «Load Your Playlist or File/URL» es para el formato M3U y basta con pegar una única dirección. Ambas dan acceso al mismo contenido; la primera es más rápida y presenta mejor las películas y series." },
    { h: "Configurar la guía de programación", p: "Con Xtream Codes la guía llega incluida y no hay que hacer nada más. Con M3U, en cambio, la EPG es una segunda dirección que se añade aparte: si tu guía aparece vacía, ese campo es casi siempre el motivo. Te enviamos ambas direcciones juntas para evitarlo. Una vez cargada, la guía cubre varios días y permite ver qué se emite sin ir saltando de canal a ciegas." },
    { h: "Ajustes que conviene tocar", p: "Activa la decodificación por hardware en los ajustes del reproductor: es el cambio con más impacto sobre la fluidez y el que más se olvida. Elige el reproductor interno en lugar del externo si notas retardo al cambiar de canal. Ajusta el búfer a un valor medio, porque uno bajo corta en conexiones irregulares y uno alto ralentiza el zapeo. Y crea una lista de favoritos con los canales que ves de verdad para no recorrer decenas de miles de entradas." },
    { h: "Smarters Pro frente a TiviMate", p: "Smarters gana en sencillez y en cobertura de plataformas: existe en iOS, donde TiviMate no está, y se configura en menos pasos. TiviMate gana en experiencia de televisión: su guía en mosaico, la gestión de favoritos y el zapeo son claramente superiores en Android TV y Fire TV, aunque algunas funciones requieren la versión de pago. Si es tu primera instalación, empieza por Smarters; si acabas viendo a diario en el televisor, prueba TiviMate después." },
    { h: "Problemas frecuentes", p: "Si aparece «credenciales inválidas», revisa que no se haya colado un espacio al pegar desde WhatsApp, que es la causa más habitual. Si la aplicación carga pero no se ve ningún canal, fuerza una actualización del catálogo desde los ajustes. Si la imagen va a tirones con buena conexión, activa la decodificación por hardware. Y si se cierra sola al abrirla, borra su caché desde los ajustes del sistema del dispositivo antes de reinstalar nada." },
    { h: "Varios dispositivos y varias cuentas", p: "Smarters permite guardar varios perfiles, lo que resulta cómodo si gestionas el acceso de más de una persona o si quieres tener configurados a la vez el formato Xtream Codes y el M3U. Tus credenciales no están atadas a un aparato, así que puedes usarlas en el televisor, en el móvil y en una tableta. Lo único a dimensionar es el número de conexiones simultáneas, que solo importa si varias personas ven canales distintos a la vez." },
    { h: "Probarlo antes de pagar", p: "La prueba gratuita de 24 horas incluye credenciales completas sin tarjeta de crédito, así que puedes hacer la instalación entera y comprobar el resultado en tu propio equipo. Actívala en horario punta, verifica que tus canales estén, que la guía se rellene y que la imagen aguante diez minutos seguidos. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Cómo configuro IPTV Smarters Pro?", a: "Ábrela, elige «Login with Xtream Codes API» e introduce la URL del servidor, el usuario y la contraseña que te enviamos por WhatsApp. El catálogo se carga en menos de un minuto." },
    { q: "¿En qué dispositivos funciona?", a: "Android, iOS, Fire TV Stick, Android TV, Windows y macOS. En Fire TV se instala con Downloader tras activar los orígenes desconocidos." },
    { q: "¿Por qué dice «credenciales inválidas»?", a: "Casi siempre por un espacio de más al pegar desde WhatsApp o una barra final añadida a la URL. Copia y pega exactamente lo que te enviamos." },
    { q: "¿Es mejor Smarters Pro o TiviMate?", a: "Smarters es más sencilla y existe en iOS. TiviMate ofrece mejor experiencia de televisión en Android TV y Fire TV. Empieza por Smarters si es tu primera instalación." },
    { q: "¿Por qué está vacía la guía de programación?", a: "Si usas M3U, falta la URL EPG, que se añade aparte. Con credenciales Xtream Codes la guía llega incluida y no hay que configurar nada." },
  ],
  cta: "Recibir mis credenciales",
};

content["iptv-smarters-pro"].it = {
  metaTitle: "IPTV Smarters Pro — configurazione in 5 minuti, 66.000 canali",
  metaDesc:
    "Configura IPTV Smarters Pro passo passo: credenziali Xtream Codes o M3U, EPG e VOD su Android, iOS, Fire TV e Windows. Da 5 €/mese con prova gratuita.",
  eyebrow: "IPTV Smarters Pro · Guida",
  h1: "IPTV Smarters Pro",
  h1Accent: "configurato in 5 minuti",
  intro:
    "L'app IPTV più semplice da configurare, disponibile su quasi tutte le piattaforme. Ti diamo le credenziali pronte e la guida passo passo per avere 66.000+ canali funzionanti in meno di cinque minuti, da 5 €/mese.",
  features: [
    { h: "Su tutte le piattaforme", p: "Android, iOS, Fire TV, Android TV, Windows e macOS." },
    { h: "Xtream Codes o M3U", p: "Accetta entrambi i formati; ti inviamo quello che preferisci." },
    { h: "EPG e VOD inclusi", p: "Guida ai programmi e videoteca con copertine." },
    { h: "Multiutente", p: "Più account configurati nella stessa app." },
  ],
  sections: [
    { h: "Perché scegliere Smarters Pro", p: "Il suo pregio è che non chiede nulla a te. La schermata iniziale domanda direttamente il tipo di accesso, compili tre campi ed è già in funzione. Non serve configurare componenti aggiuntivi, né capire cosa sia un PVR, né sistemare percorsi di file. Per una prima installazione è la via più rapida, e resta l'opzione che consigliamo a chi vuole che qualcosa funzioni oggi senza dedicarci un pomeriggio." },
    { h: "Installarla sul tuo dispositivo", p: "Su Android e su Google Play la trovi direttamente per nome. Su iPhone e iPad è nell'App Store. Su Fire TV Stick, non essendo sempre nello store Amazon, si installa tramite Downloader con l'indirizzo che ti forniamo su WhatsApp, dopo aver attivato l'installazione da origini sconosciute in Il mio Fire TV. Su Windows e macOS esiste una versione desktop. In tutti i casi la configurazione successiva è identica." },
    { h: "Inserire le credenziali", p: "All'apertura vedrai due opzioni. «Login with Xtream Codes API» è quella che consigliamo: chiede URL del server, nome utente e password, e carica i canali in modo dinamico insieme alla videoteca con le copertine. «Load Your Playlist or File/URL» serve per il formato M3U e basta incollare un unico indirizzo. Entrambe danno accesso allo stesso contenuto; la prima è più rapida e presenta meglio film e serie." },
    { h: "Configurare la guida ai programmi", p: "Con Xtream Codes la guida arriva inclusa e non serve fare altro. Con l'M3U, invece, l'EPG è un secondo indirizzo da aggiungere separatamente: se la tua guida risulta vuota, quel campo è quasi sempre il motivo. Ti inviamo entrambi gli indirizzi insieme per evitarlo. Una volta caricata, la guida copre più giorni e permette di vedere cosa va in onda senza saltare da un canale all'altro alla cieca." },
    { h: "Impostazioni da sistemare", p: "Attiva la decodifica hardware nelle impostazioni del lettore: è la modifica con più impatto sulla fluidità e quella che più spesso si dimentica. Scegli il lettore interno invece di quello esterno se noti ritardo nel cambio canale. Regola il buffer su un valore medio, perché uno basso interrompe su connessioni irregolari e uno alto rallenta lo zapping. E crea un elenco di preferiti con i canali che guardi davvero, per non scorrere decine di migliaia di voci." },
    { h: "Smarters Pro contro TiviMate", p: "Smarters vince sulla semplicità e sulla copertura di piattaforme: esiste su iOS, dove TiviMate non c'è, e si configura in meno passaggi. TiviMate vince sull'esperienza da televisore: la guida a griglia, la gestione dei preferiti e lo zapping sono nettamente superiori su Android TV e Fire TV, anche se alcune funzioni richiedono la versione a pagamento. Se è la tua prima installazione parti da Smarters; se poi guardi ogni giorno sul televisore, prova TiviMate." },
    { h: "Problemi frequenti", p: "Se compare «credenziali non valide», controlla che non si sia infilato uno spazio incollando da WhatsApp, che è la causa più comune. Se l'app carica ma non si vede alcun canale, forza un aggiornamento del catalogo dalle impostazioni. Se l'immagine scatta con una buona connessione, attiva la decodifica hardware. E se si chiude da sola all'avvio, svuota la cache dalle impostazioni di sistema del dispositivo prima di reinstallare qualsiasi cosa." },
    { h: "Più dispositivi e più account", p: "Smarters consente di salvare più profili, il che è comodo se gestisci l'accesso di più di una persona o se vuoi avere configurati contemporaneamente il formato Xtream Codes e l'M3U. Le tue credenziali non sono legate a un apparecchio, quindi puoi usarle sul televisore, sul telefono e su un tablet. L'unica cosa da dimensionare è il numero di connessioni simultanee, che conta solo se più persone guardano canali diversi insieme." },
    { h: "Provarlo prima di pagare", p: "La prova gratuita di 24 ore include credenziali complete senza carta di credito, così puoi eseguire l'installazione intera e verificare il risultato sul tuo apparecchio. Attivala in orario di punta, controlla che i tuoi canali ci siano, che la guida si popoli e che l'immagine regga dieci minuti consecutivi. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni. Conviene fare la prova direttamente sull'apparecchio che userai ogni sera, perché è l'unico test che riflette davvero le condizioni di casa tua: la stessa app, sullo stesso televisore, sulla stessa rete e alla stessa ora in cui la guarderai." },
  ],
  faq: [
    { q: "Come configuro IPTV Smarters Pro?", a: "Aprila, scegli «Login with Xtream Codes API» e inserisci URL del server, nome utente e password che ti inviamo su WhatsApp. Il catalogo si carica in meno di un minuto." },
    { q: "Su quali dispositivi funziona?", a: "Android, iOS, Fire TV Stick, Android TV, Windows e macOS. Su Fire TV si installa con Downloader dopo aver attivato le origini sconosciute." },
    { q: "Perché dice «credenziali non valide»?", a: "Quasi sempre per uno spazio di troppo incollando da WhatsApp o una barra finale aggiunta all'URL. Copia e incolla esattamente ciò che ti inviamo." },
    { q: "Meglio Smarters Pro o TiviMate?", a: "Smarters è più semplice ed esiste su iOS. TiviMate offre una migliore esperienza da televisore su Android TV e Fire TV. Parti da Smarters se è la tua prima installazione." },
    { q: "Perché la guida ai programmi è vuota?", a: "Se usi l'M3U, manca l'URL EPG, che si aggiunge separatamente. Con le credenziali Xtream Codes la guida arriva inclusa e non serve configurare nulla." },
  ],
  cta: "Ricevi le mie credenziali",
};

// --- es/it for /iptv-roku ---------------------------------------------------
content["iptv-roku"].es = {
  metaTitle: "IPTV en Roku — qué funciona de verdad y qué no",
  metaDesc:
    "IPTV en Roku sin rodeos: qué reproductores existen, sus límites reales y las alternativas HDMI que funcionan mejor. 66.000+ canales desde 5 €/mes.",
  eyebrow: "Roku · Guía honesta",
  h1: "IPTV en Roku",
  h1Accent: "lo que funciona de verdad",
  intro:
    "Roku es la plataforma más cerrada del mercado y eso condiciona el IPTV. Te contamos qué reproductores existen realmente, dónde están sus límites y qué alternativa recomendamos si quieres la mejor experiencia con 66.000+ canales.",
  features: [
    { h: "Reproductores disponibles", p: "Existen opciones en la tienda de Roku, con funciones recortadas." },
    { h: "Compatible con M3U", p: "El formato clásico es el que mejor admiten estos reproductores." },
    { h: "Alternativa HDMI", p: "Un Fire TV Stick en otra entrada da una experiencia bastante mejor." },
    { h: "Mismo catálogo", p: "66.000+ canales y 70.000 películas, sea cual sea el dispositivo." },
  ],
  sections: [
    { h: "Por qué Roku es un caso aparte", p: "Roku no permite instalar aplicaciones fuera de su tienda oficial, a diferencia de Android TV o Fire TV. Eso significa que no puedes instalar TiviMate ni IPTV Smarters Pro, que son las dos aplicaciones que dan la mejor experiencia IPTV. Solo puedes usar los reproductores que Roku haya aprobado, y esos son notablemente más limitados. No es un problema de tu suscripción ni de nuestro servicio: es una decisión de plataforma que afecta a todos los proveedores por igual." },
    { h: "Qué reproductores existen", p: "En la tienda de Roku hay varios reproductores capaces de leer una lista M3U. Funcionan y sirven para ver canales, pero conviene saber de antemano qué se pierde: la guía de programación suele ser básica o inexistente, la videoteca de películas y series rara vez aparece con carátulas, y la gestión de favoritos es rudimentaria comparada con TiviMate. Para un uso sencillo de zapeo bastan; para un uso diario exigente, se quedan cortos." },
    { h: "Configurar la lista M3U", p: "El procedimiento es el mismo en casi todos ellos: abrir el reproductor, elegir añadir una lista y pegar la URL M3U que te enviamos por WhatsApp. Escribir una dirección larga con el mando de Roku es la parte más tediosa, así que la aplicación de Roku para móvil, que incluye teclado, ahorra bastante tiempo. Tras cargar la lista, los canales aparecen agrupados por categorías y ya puedes empezar a ver." },
    { h: "La alternativa que recomendamos", p: "Si quieres la mejor experiencia, la solución más práctica no es pelearse con las limitaciones de Roku sino añadir un Fire TV Stick en otra entrada HDMI del televisor. Cuesta poco, no exige renunciar a Roku para lo que ya usas, y te da acceso a TiviMate y a IPTV Smarters Pro con guía completa, videoteca con carátulas y zapeo rápido. Cambias de fuente con el mando del televisor según lo que quieras ver, y cada plataforma hace lo que mejor sabe." },
    { h: "Otras vías: duplicar pantalla", p: "Roku admite duplicación de pantalla desde Android y Windows, así que técnicamente puedes reproducir en el móvil y enviar la imagen al televisor. Funciona para una emisión puntual, pero no lo recomendamos como solución habitual: consume batería, la calidad depende del Wi-Fi en ambos extremos, cualquier notificación aparece en pantalla y la latencia hace incómodo el zapeo. Como recurso de emergencia está bien; como forma de ver un partido entero, no." },
    { h: "Qué conexión necesitas", p: "Las mismas cifras que en cualquier otro dispositivo: unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor y no en el router. Los modelos Roku más antiguos y los de gama baja tienen antenas Wi-Fi modestas, así que si el televisor está lejos del router notarás cortes que no son culpa del servicio. Los modelos con puerto Ethernet resuelven el problema de raíz; en los que no lo tienen, acercar el router es la mejora más eficaz." },
    { h: "Problemas frecuentes", p: "Si la lista no carga, comprueba que has pegado la URL completa: con el teclado del mando es fácil perder caracteres al final. Si los canales cortan pero tu conexión es buena, el cuello de botella suele ser el Wi-Fi del propio Roku. Si el reproductor se cierra al abrir ciertos canales, prueba otro reproductor de la tienda, porque el soporte de códecs varía bastante entre ellos. Y si la guía aparece vacía, es probable que ese reproductor simplemente no admita EPG." },
    { h: "Qué modelo de Roku tienes", p: "El comportamiento varía bastante según el aparato. Los Roku Express y los televisores con Roku integrado de gama de entrada tienen poca memoria, así que una lista de decenas de miles de canales tarda en cargar y el reproductor puede cerrarse solo. Los Roku Ultra y los modelos con puerto Ethernet van claramente mejor y además eliminan la variable del Wi-Fi. Si tu televisor lleva Roku integrado y es de hace varios años, es precisamente el escenario donde más compensa la solución del Fire TV Stick en otra entrada HDMI." },
    { h: "Probarlo antes de comprar", p: "La prueba gratuita de 24 horas incluye una URL M3U completa sin tarjeta de crédito, así que puedes comprobar en tu propio Roku si el resultado te convence antes de pagar. Es especialmente recomendable en este caso, porque la experiencia depende mucho del reproductor concreto y del modelo de Roku que tengas. Si decides continuar, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Se puede usar IPTV en Roku?", a: "Sí, mediante los reproductores compatibles con M3U de su tienda. Roku no permite instalar aplicaciones externas, así que TiviMate e IPTV Smarters Pro no están disponibles." },
    { q: "¿Por qué es peor la experiencia en Roku?", a: "Porque la plataforma es cerrada y solo admite reproductores aprobados. Suelen tener guía de programación básica o ausente, sin videoteca con carátulas y con favoritos rudimentarios." },
    { q: "¿Cuál es la mejor alternativa?", a: "Añadir un Fire TV Stick en otra entrada HDMI. Cuesta poco, conservas Roku para lo que ya usas y obtienes TiviMate o Smarters con guía completa y videoteca." },
    { q: "¿Sirve duplicar la pantalla desde el móvil?", a: "Para una emisión puntual sí, pero no como solución habitual: consume batería, la calidad depende del Wi-Fi en ambos extremos y la latencia hace incómodo el zapeo." },
    { q: "¿Necesito una suscripción distinta para Roku?", a: "No. Las mismas credenciales funcionan en cualquier dispositivo. Para Roku conviene el formato M3U, que te enviamos si nos lo pides." },
  ],
  cta: "Probar en mi Roku",
};

content["iptv-roku"].it = {
  metaTitle: "IPTV su Roku — cosa funziona davvero e cosa no",
  metaDesc:
    "IPTV su Roku senza giri di parole: quali lettori esistono, i loro limiti reali e le alternative HDMI che funzionano meglio. 66.000+ canali da 5 €/mese.",
  eyebrow: "Roku · Guida onesta",
  h1: "IPTV su Roku",
  h1Accent: "cosa funziona davvero",
  intro:
    "Roku è la piattaforma più chiusa del mercato e questo condiziona l'IPTV. Ti diciamo quali lettori esistono davvero, dove stanno i loro limiti e quale alternativa consigliamo se vuoi la migliore esperienza con 66.000+ canali.",
  features: [
    { h: "Lettori disponibili", p: "Esistono opzioni nello store Roku, con funzioni ridotte." },
    { h: "Compatibile con M3U", p: "Il formato classico è quello meglio supportato da questi lettori." },
    { h: "Alternativa HDMI", p: "Un Fire TV Stick su un'altra porta dà un'esperienza nettamente migliore." },
    { h: "Stesso catalogo", p: "66.000+ canali e 70.000 film, qualunque sia il dispositivo." },
  ],
  sections: [
    { h: "Perché Roku è un caso a parte", p: "Roku non consente di installare app al di fuori del suo store ufficiale, a differenza di Android TV o Fire TV. Questo significa che non puoi installare TiviMate né IPTV Smarters Pro, le due app che offrono la migliore esperienza IPTV. Puoi usare soltanto i lettori approvati da Roku, e quelli sono nettamente più limitati. Non è un problema del tuo abbonamento né del nostro servizio: è una scelta di piattaforma che riguarda tutti i fornitori allo stesso modo." },
    { h: "Quali lettori esistono", p: "Nello store Roku ci sono diversi lettori capaci di leggere una playlist M3U. Funzionano e servono a guardare i canali, ma conviene sapere in anticipo cosa si perde: la guida ai programmi è di norma basilare o assente, la videoteca di film e serie compare raramente con le copertine, e la gestione dei preferiti è rudimentale rispetto a TiviMate. Per un uso semplice di zapping bastano; per un uso quotidiano esigente, restano indietro." },
    { h: "Configurare la playlist M3U", p: "La procedura è la stessa in quasi tutti: aprire il lettore, scegliere di aggiungere una playlist e incollare l'URL M3U che ti inviamo su WhatsApp. Digitare un indirizzo lungo con il telecomando Roku è la parte più noiosa, quindi l'app Roku per telefono, che include una tastiera, fa risparmiare parecchio tempo. Dopo il caricamento della playlist, i canali compaiono raggruppati per categorie e puoi iniziare a guardare." },
    { h: "L'alternativa che consigliamo", p: "Se vuoi la migliore esperienza, la soluzione più pratica non è combattere con i limiti di Roku ma aggiungere un Fire TV Stick su un'altra porta HDMI del televisore. Costa poco, non ti obbliga a rinunciare a Roku per ciò che già usi, e ti dà accesso a TiviMate e IPTV Smarters Pro con guida completa, videoteca con copertine e zapping rapido. Cambi sorgente con il telecomando del televisore a seconda di cosa vuoi guardare, e ogni piattaforma fa ciò che sa fare meglio." },
    { h: "Altre vie: duplicare lo schermo", p: "Roku supporta la duplicazione dello schermo da Android e Windows, quindi tecnicamente puoi riprodurre sul telefono e inviare l'immagine al televisore. Funziona per una trasmissione occasionale, ma non lo consigliamo come soluzione abituale: consuma batteria, la qualità dipende dal Wi-Fi su entrambi i lati, qualsiasi notifica compare sullo schermo e la latenza rende scomodo lo zapping. Come rimedio d'emergenza va bene; come modo per guardare una partita intera, no." },
    { h: "Quale connessione serve", p: "Le stesse cifre di qualsiasi altro dispositivo: circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore e non sul router. I modelli Roku più datati e quelli di fascia bassa hanno antenne Wi-Fi modeste, quindi se il televisore è lontano dal router noterai interruzioni che non dipendono dal servizio. I modelli con porta Ethernet risolvono il problema alla radice; su quelli che non ce l'hanno, avvicinare il router è il miglioramento più efficace." },
    { h: "Problemi frequenti", p: "Se la playlist non si carica, verifica di aver incollato l'URL completo: con la tastiera del telecomando è facile perdere caratteri in fondo. Se i canali si interrompono ma la connessione è buona, il collo di bottiglia è di solito il Wi-Fi del Roku stesso. Se il lettore si chiude all'apertura di certi canali, prova un altro lettore dello store, perché il supporto ai codec varia parecchio tra loro. E se la guida risulta vuota, è probabile che quel lettore semplicemente non supporti l'EPG." },
    { h: "Quale modello di Roku possiedi", p: "Il comportamento varia parecchio a seconda dell'apparecchio. I Roku Express e i televisori con Roku integrato di fascia d'ingresso hanno poca memoria, quindi un elenco di decine di migliaia di canali impiega tempo a caricarsi e il lettore può chiudersi da solo. I Roku Ultra e i modelli con porta Ethernet vanno nettamente meglio ed eliminano anche la variabile Wi-Fi. Se il tuo televisore ha Roku integrato ed è di qualche anno fa, è proprio lo scenario in cui conviene di più la soluzione del Fire TV Stick su un'altra porta HDMI." },
    { h: "Provarlo prima di comprare", p: "La prova gratuita di 24 ore include un URL M3U completo senza carta di credito, così puoi verificare sul tuo Roku se il risultato ti convince prima di pagare. È particolarmente consigliabile in questo caso, perché l'esperienza dipende molto dal lettore specifico e dal modello di Roku che possiedi. Se decidi di continuare, l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Si può usare l'IPTV su Roku?", a: "Sì, tramite i lettori compatibili con M3U del suo store. Roku non consente di installare app esterne, quindi TiviMate e IPTV Smarters Pro non sono disponibili." },
    { q: "Perché l'esperienza su Roku è peggiore?", a: "Perché la piattaforma è chiusa e ammette solo lettori approvati. Di norma hanno guida ai programmi basilare o assente, nessuna videoteca con copertine e preferiti rudimentali." },
    { q: "Qual è la migliore alternativa?", a: "Aggiungere un Fire TV Stick su un'altra porta HDMI. Costa poco, mantieni Roku per ciò che già usi e ottieni TiviMate o Smarters con guida completa e videoteca." },
    { q: "Serve duplicare lo schermo dal telefono?", a: "Per una trasmissione occasionale sì, ma non come soluzione abituale: consuma batteria, la qualità dipende dal Wi-Fi su entrambi i lati e la latenza rende scomodo lo zapping." },
    { q: "Mi serve un abbonamento diverso per Roku?", a: "No. Le stesse credenziali funzionano su qualsiasi dispositivo. Per Roku conviene il formato M3U, che ti inviamo se ce lo chiedi." },
  ],
  cta: "Prova sul mio Roku",
};

// --- es/it for /iptv-apple-tv -----------------------------------------------
content["iptv-apple-tv"].es = {
  metaTitle: "IPTV en Apple TV — App Store, sin jailbreak, en 5 minutos",
  metaDesc:
    "Instala IPTV en Apple TV desde la App Store, sin jailbreak: 66.000+ canales en 4K con Smarters o IBO Player. Guía paso a paso y prueba gratis de 24 h.",
  eyebrow: "Apple TV · Sin jailbreak",
  h1: "IPTV en Apple TV",
  h1Accent: "directo desde la App Store",
  intro:
    "No hace falta jailbreak ni trucos: las aplicaciones IPTV están en la App Store de tvOS. Con ATV Corner accedes a 66.000+ canales en 4K desde 5 €/mes, configurado en menos de cinco minutos con el mando.",
  features: [
    { h: "Desde la App Store", p: "Aplicaciones oficiales en tvOS, sin jailbreak ni sideload." },
    { h: "4K con HEVC", p: "El Apple TV 4K decodifica H.265 por hardware, sin tirones." },
    { h: "Teclado del iPhone", p: "Escribe las credenciales desde el móvil en lugar del mando." },
    { h: "Ethernet integrado", p: "Los modelos con puerto de red eliminan el problema del Wi-Fi." },
  ],
  sections: [
    { h: "Por qué el Apple TV va tan bien con IPTV", p: "Es, en potencia bruta, el mejor reproductor doméstico para IPTV. Su procesador decodifica HEVC/H.265 por hardware sin despeinarse, tiene memoria de sobra para cargar catálogos de decenas de miles de canales, y el sistema no interrumpe la reproducción con notificaciones ni sugerencias. A eso se suma que los modelos superiores incluyen puerto Ethernet, que es la mejora individual con más impacto sobre la estabilidad de cualquier emisión en directo." },
    { h: "Qué aplicaciones usar", p: "IPTV Smarters Pro está en la App Store de tvOS y es la más sencilla de configurar. IBO Player es la otra opción sólida, con una interfaz algo más cuidada para la videoteca. TiviMate, que es la referencia en Android TV, no existe en tvOS: si vienes de un Fire TV Stick, ese es el cambio que notarás. Todas se instalan como cualquier otra aplicación, buscándolas por nombre en la tienda, sin jailbreak ni procedimientos raros." },
    { h: "Instalar y configurar", p: "Abre la App Store en el Apple TV, busca la aplicación por su nombre e instálala. Al abrirla, elige el acceso mediante Xtream Codes e introduce la URL del servidor, el usuario y la contraseña que te enviamos por WhatsApp. Si prefieres M3U, pega la URL única. El catálogo tarda entre unos segundos y un minuto en cargarse la primera vez, y a partir de ahí los canales aparecen organizados por categorías." },
    { h: "El truco del teclado del iPhone", p: "Escribir una URL larga con el mando del Apple TV es tedioso, pero hay una solución que mucha gente desconoce. Cuando aparece un campo de texto en pantalla, el iPhone o el iPad conectados a la misma cuenta muestran una notificación que convierte el móvil en teclado. Puedes pegar directamente desde el portapapeles, así que copiar las credenciales del mensaje de WhatsApp y pegarlas en el televisor lleva segundos en lugar de minutos." },
    { h: "Ajustes que mejoran el resultado", p: "En la aplicación, activa la decodificación por hardware si aparece como opción y ajusta el búfer a un valor medio. En los ajustes del Apple TV, fija la salida de vídeo a la resolución real de tu televisor en lugar de dejarla en automático, porque el cambio de modo entre canales introduce esperas de un par de segundos cada vez. Y desactiva el protector de pantalla agresivo, que puede saltar durante una emisión con poco movimiento." },
    { h: "Ethernet frente a Wi-Fi", p: "Si tu modelo tiene puerto de red, úsalo. Es la recomendación más aburrida y también la más eficaz: elimina de un golpe la mayor parte de los cortes que la gente atribuye al proveedor. El Wi-Fi del Apple TV es bueno, pero sigue compitiendo con el resto de los dispositivos de la casa y se degrada en horario punta, que es justo cuando estás viendo un partido. Si no puedes cablear, al menos usa la banda de 5 GHz." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el propio Apple TV y no en el router. La palabra importante sigue siendo estables: una línea que promedia mucho pero cae con frecuencia dará peor resultado que otra más modesta y constante. Los modelos 4K aprovechan HEVC por hardware, así que consumen menos ancho de banda del que cabría esperar para la calidad que muestran." },
    { h: "Problemas frecuentes", p: "Si la aplicación no acepta las credenciales, revisa que no se haya colado un espacio al pegarlas, que es el fallo más habitual. Si los canales cortan pese a una buena conexión, pasa a Ethernet antes de tocar cualquier otra cosa. Si la guía aparece vacía y usas M3U, falta la URL EPG, que se añade en un campo separado. Y si la aplicación se cierra al abrirla, desinstálala y vuelve a instalarla: en tvOS no hay opción de borrar caché por separado." },
    { h: "Probarlo antes de pagar", p: "La prueba gratuita de 24 horas no pide tarjeta de crédito y permite hacer la instalación completa en tu propio Apple TV. Actívala en horario punta y comprueba que tus canales estén, que la guía se rellene y que la imagen aguante diez minutos seguidos de contenido con movimiento rápido. Si te convence, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Necesito jailbreak para ver IPTV en Apple TV?", a: "No. IPTV Smarters Pro e IBO Player están en la App Store de tvOS y se instalan como cualquier otra aplicación, buscándolas por nombre." },
    { q: "¿Está TiviMate en Apple TV?", a: "No. TiviMate solo existe en Android TV y Fire TV. En tvOS las opciones son IPTV Smarters Pro e IBO Player, ambas compatibles con nuestras credenciales." },
    { q: "¿Cómo escribo las credenciales sin pelearme con el mando?", a: "Cuando aparece un campo de texto, el iPhone o iPad de la misma cuenta muestran una notificación que convierte el móvil en teclado, con opción de pegar desde el portapapeles." },
    { q: "¿Por qué se corta la imagen?", a: "Casi siempre por el Wi-Fi. Si tu modelo tiene puerto Ethernet, conéctalo por cable: es la mejora individual con más impacto sobre la estabilidad." },
    { q: "¿Qué modelo de Apple TV conviene?", a: "Cualquiera funciona, pero los modelos 4K decodifican HEVC/H.265 por hardware y los que incluyen puerto Ethernet eliminan la variable del Wi-Fi." },
  ],
  cta: "Activar en mi Apple TV",
};

content["iptv-apple-tv"].it = {
  metaTitle: "IPTV su Apple TV — App Store, senza jailbreak, in 5 minuti",
  metaDesc:
    "Installa l'IPTV su Apple TV dall'App Store, senza jailbreak: 66.000+ canali in 4K con Smarters o IBO Player. Guida passo passo e prova gratuita di 24 h.",
  eyebrow: "Apple TV · Senza jailbreak",
  h1: "IPTV su Apple TV",
  h1Accent: "direttamente dall'App Store",
  intro:
    "Non servono jailbreak né trucchi: le app IPTV sono nell'App Store di tvOS. Con ATV Corner accedi a 66.000+ canali in 4K da 5 €/mese, configurato in meno di cinque minuti con il telecomando.",
  features: [
    { h: "Dall'App Store", p: "App ufficiali su tvOS, senza jailbreak né sideload." },
    { h: "4K con HEVC", p: "L'Apple TV 4K decodifica l'H.265 via hardware, senza scatti." },
    { h: "Tastiera dell'iPhone", p: "Digita le credenziali dal telefono invece che dal telecomando." },
    { h: "Ethernet integrata", p: "I modelli con porta di rete eliminano il problema del Wi-Fi." },
  ],
  sections: [
    { h: "Perché l'Apple TV va così bene con l'IPTV", p: "È, in potenza bruta, il miglior lettore domestico per l'IPTV. Il suo processore decodifica l'HEVC/H.265 via hardware senza sforzo, ha memoria in abbondanza per caricare cataloghi da decine di migliaia di canali, e il sistema non interrompe la riproduzione con notifiche o suggerimenti. A questo si aggiunge che i modelli superiori includono una porta Ethernet, che è il singolo miglioramento con più impatto sulla stabilità di qualsiasi trasmissione in diretta." },
    { h: "Quali app usare", p: "IPTV Smarters Pro è nell'App Store di tvOS ed è la più semplice da configurare. IBO Player è l'altra opzione solida, con un'interfaccia un po' più curata per la videoteca. TiviMate, che è il riferimento su Android TV, non esiste su tvOS: se arrivi da un Fire TV Stick, è questo il cambiamento che noterai. Tutte si installano come qualsiasi altra app, cercandole per nome nello store, senza jailbreak né procedure strane." },
    { h: "Installare e configurare", p: "Apri l'App Store sull'Apple TV, cerca l'app per nome e installala. All'apertura, scegli l'accesso tramite Xtream Codes e inserisci URL del server, nome utente e password che ti inviamo su WhatsApp. Se preferisci l'M3U, incolla l'URL unico. Il catalogo impiega da pochi secondi a un minuto a caricarsi la prima volta, e da lì in poi i canali compaiono organizzati per categorie." },
    { h: "Il trucco della tastiera dell'iPhone", p: "Digitare un URL lungo con il telecomando dell'Apple TV è noioso, ma c'è una soluzione che in molti non conoscono. Quando compare un campo di testo sullo schermo, l'iPhone o l'iPad collegati allo stesso account mostrano una notifica che trasforma il telefono in tastiera. Puoi incollare direttamente dagli appunti, quindi copiare le credenziali dal messaggio WhatsApp e incollarle sul televisore richiede secondi invece di minuti." },
    { h: "Impostazioni che migliorano il risultato", p: "Nell'app, attiva la decodifica hardware se compare come opzione e regola il buffer su un valore medio. Nelle impostazioni dell'Apple TV, fissa l'uscita video alla risoluzione reale del tuo televisore invece di lasciarla in automatico, perché il cambio di modalità tra canali introduce attese di un paio di secondi ogni volta. E disattiva il salvaschermo aggressivo, che può attivarsi durante una trasmissione con poco movimento." },
    { h: "Ethernet contro Wi-Fi", p: "Se il tuo modello ha la porta di rete, usala. È il consiglio più noioso e anche il più efficace: elimina in un colpo la maggior parte delle interruzioni che le persone attribuiscono al fornitore. Il Wi-Fi dell'Apple TV è buono, ma compete comunque con gli altri dispositivi di casa e si degrada nelle ore di punta, che è esattamente quando stai guardando una partita. Se non puoi cablare, usa almeno la banda a 5 GHz." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sull'Apple TV stesso e non sul router. La parola che conta resta stabili: una linea che in media va forte ma cala di frequente darà un risultato peggiore di un'altra più modesta e costante. I modelli 4K sfruttano l'HEVC via hardware, quindi consumano meno banda di quanto ci si aspetterebbe per la qualità che mostrano." },
    { h: "Problemi frequenti", p: "Se l'app non accetta le credenziali, controlla che non si sia infilato uno spazio incollandole, che è l'errore più comune. Se i canali si interrompono nonostante una buona connessione, passa all'Ethernet prima di toccare qualsiasi altra cosa. Se la guida risulta vuota e usi l'M3U, manca l'URL EPG, da aggiungere in un campo separato. E se l'app si chiude all'avvio, disinstallala e reinstallala: su tvOS non esiste un'opzione separata per svuotare la cache." },
    { h: "Guardare su più schermi di casa", p: "Le credenziali non sono legate a un singolo apparecchio, quindi lo stesso abbonamento funziona sull'Apple TV del salotto, su un iPhone e su un iPad senza acquistare nulla di aggiuntivo. È comodo per le partite in contemporanea: lasci l'incontro principale sul televisore e segui il secondo sul tablet. L'unica cosa da pianificare in anticipo è il numero di connessioni simultanee incluse nel tuo piano, che conta soltanto quando più persone guardano canali diversi nello stesso momento. Se non sei sicuro di quante te ne servano, chiedicelo prima dell'acquisto e lo risolviamo in un messaggio." },
    { h: "Provarlo prima di pagare", p: "La prova gratuita di 24 ore non richiede carta di credito e permette di eseguire l'installazione completa sul tuo Apple TV. Attivala in orario di punta e verifica che i tuoi canali ci siano, che la guida si popoli e che l'immagine regga dieci minuti consecutivi di contenuto con movimento rapido. Se ti convince, l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Serve il jailbreak per l'IPTV su Apple TV?", a: "No. IPTV Smarters Pro e IBO Player sono nell'App Store di tvOS e si installano come qualsiasi altra app, cercandole per nome." },
    { q: "TiviMate è disponibile su Apple TV?", a: "No. TiviMate esiste solo su Android TV e Fire TV. Su tvOS le opzioni sono IPTV Smarters Pro e IBO Player, entrambe compatibili con le nostre credenziali." },
    { q: "Come digito le credenziali senza combattere col telecomando?", a: "Quando compare un campo di testo, l'iPhone o l'iPad dello stesso account mostrano una notifica che trasforma il telefono in tastiera, con l'opzione di incollare dagli appunti." },
    { q: "Perché l'immagine si interrompe?", a: "Quasi sempre per il Wi-Fi. Se il tuo modello ha la porta Ethernet, collegalo via cavo: è il singolo miglioramento con più impatto sulla stabilità." },
    { q: "Quale modello di Apple TV conviene?", a: "Funzionano tutti, ma i modelli 4K decodificano l'HEVC/H.265 via hardware e quelli con porta Ethernet eliminano la variabile Wi-Fi." },
  ],
  cta: "Attiva sul mio Apple TV",
};

// --- es/it for /iptv-android-tv ---------------------------------------------
content["iptv-android-tv"].es = {
  metaTitle: "IPTV en Android TV — TiviMate, Shield y Google TV en 5 min",
  metaDesc:
    "IPTV en Android TV, box, Nvidia Shield y Google TV: instala TiviMate o Smarters y accede a 66.000+ canales en 4K desde 5 €/mes. Guía y prueba gratis.",
  eyebrow: "Android TV · TiviMate",
  h1: "IPTV en Android TV",
  h1Accent: "la plataforma más abierta",
  intro:
    "Android TV es donde el IPTV rinde mejor: permite instalar TiviMate, la mejor aplicación del sector, sin restricciones. Con ATV Corner accedes a 66.000+ canales en 4K desde 5 €/mes, configurado en cinco minutos.",
  features: [
    { h: "TiviMate disponible", p: "La mejor interfaz de televisión del sector, exclusiva de Android." },
    { h: "Sin restricciones", p: "Instala cualquier aplicación, desde Google Play o por APK." },
    { h: "Todos los aparatos", p: "Box Android, Nvidia Shield, Google TV y televisores Sony, Philips o TCL." },
    { h: "4K con HEVC", p: "Decodificación por hardware en casi todos los modelos recientes." },
  ],
  sections: [
    { h: "Por qué Android TV es la mejor opción", p: "A diferencia de Roku o tvOS, Android TV deja instalar lo que quieras, y eso importa porque la aplicación IPTV de referencia solo existe aquí. TiviMate ofrece una guía en mosaico como la de un descodificador de operador, gestión de favoritos por grupos, zapeo casi instantáneo y grabación programada. Ninguna aplicación de otra plataforma se le acerca. Si estás eligiendo un aparato con el IPTV en mente, Android TV es la respuesta." },
    { h: "Qué dispositivo elegir", p: "Un box Android barato funciona, pero suele tener poca memoria, y con catálogos de decenas de miles de canales eso se traduce en esperas al abrir y en cierres inesperados. La Nvidia Shield es el aparato de referencia: potencia sobrada, Ethernet incluido y actualizaciones durante años. Los televisores Sony, Philips y TCL con Google TV integrado van bien y ahorran un mando más. El Chromecast con Google TV es el equilibrio más razonable entre precio y rendimiento." },
    { h: "Instalar TiviMate", p: "TiviMate está en Google Play, así que basta con buscarla e instalarla como cualquier otra aplicación. La versión gratuita permite una lista y las funciones básicas; la versión premium añade múltiples listas, grabación y personalización de la guía. Para empezar, la gratuita es suficiente para comprobar si te convence. IPTV Smarters Pro e IBO Player son alternativas válidas si prefieres algo más simple de configurar." },
    { h: "Introducir tus credenciales", p: "En TiviMate, elige «Añadir lista de reproducción» y después «Xtream Codes». Introduce la URL del servidor, el usuario y la contraseña que te enviamos por WhatsApp. La aplicación carga entonces los canales, la guía de programación de varios días y la videoteca con carátulas, algo que suele llevar menos de un minuto. Si prefieres M3U, la opción también está disponible, aunque Xtream Codes carga más rápido y presenta mejor las películas." },
    { h: "Ajustes que marcan la diferencia", p: "Activa la decodificación por hardware: es el ajuste con más impacto sobre la fluidez. Ajusta el búfer a un valor medio, porque uno bajo corta en conexiones irregulares y uno alto retrasa el zapeo. Configura los grupos de favoritos para tener a mano los veinte canales que ves de verdad. Y en la guía, activa la vista de mosaico con varias horas visibles, que es lo que hace que TiviMate se parezca a un descodificador de operador y no a una lista." },
    { h: "El teclado, un detalle que ahorra tiempo", p: "Escribir credenciales con el mando es la parte más lenta de cualquier instalación. En Android TV puedes emparejar un teclado Bluetooth, usar la aplicación Google TV en el móvil como mando con teclado, o instalar un gestor de portapapeles. Cualquiera de las tres opciones convierte cinco minutos de escritura torpe en unos segundos, y reduce además el riesgo de introducir mal un carácter y pensar que las credenciales fallan." },
    { h: "Red: Ethernet siempre que puedas", p: "La Nvidia Shield y la mayoría de los box Android incluyen puerto de red. Úsalo. Es la mejora más eficaz que existe sobre la estabilidad en directo y elimina de un golpe la mayor parte de los cortes que se atribuyen al proveedor. Si tu aparato solo tiene Wi-Fi, un adaptador USB a Ethernet cuesta poco y funciona en casi todos los modelos. En cualquier caso, necesitas 10 Mbps estables para HD y 25 para 4K, medidos en el propio dispositivo." },
    { h: "Problemas frecuentes", p: "Si la aplicación va lenta al abrir, el aparato se queda corto de memoria: cierra el resto de las aplicaciones o considera un modelo con más RAM. Si la imagen va a tirones con buena conexión, activa la decodificación por hardware. Si la guía aparece incompleta, fuerza una recarga desde los ajustes de la lista. Y si TiviMate se cierra sola, borra su caché desde los ajustes del sistema antes de reinstalar nada, porque suele bastar con eso." },
    { h: "Probarlo antes de comprar", p: "La prueba gratuita de 24 horas no pide tarjeta de crédito y permite hacer la instalación completa con TiviMate en tu propio aparato. Actívala en horario punta y comprueba que tus canales estén presentes, que la guía se rellene varios días y que la imagen aguante diez minutos seguidos de contenido con movimiento rápido. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Qué aplicación es mejor en Android TV?", a: "TiviMate, sin discusión: guía en mosaico, favoritos por grupos y zapeo casi instantáneo. IPTV Smarters Pro e IBO Player son alternativas más sencillas de configurar." },
    { q: "¿Qué dispositivo Android TV conviene?", a: "La Nvidia Shield es la referencia por potencia y Ethernet. El Chromecast con Google TV es el mejor equilibrio precio-rendimiento. Los box baratos funcionan pero se quedan cortos de memoria." },
    { q: "¿Puedo instalar aplicaciones fuera de Google Play?", a: "Sí. Android TV permite instalar por APK sin restricciones, a diferencia de Roku o tvOS. Por eso es la plataforma más flexible para IPTV." },
    { q: "¿Por qué se corta la imagen?", a: "Casi siempre el Wi-Fi. Usa el puerto Ethernet si tu aparato lo tiene, o un adaptador USB a Ethernet, y activa la decodificación por hardware en la aplicación." },
    { q: "¿TiviMate es de pago?", a: "La versión gratuita permite una lista y las funciones básicas, suficiente para empezar. La premium añade múltiples listas, grabación y personalización de la guía." },
  ],
  cta: "Activar en Android TV",
};

content["iptv-android-tv"].it = {
  metaTitle: "IPTV su Android TV — TiviMate, Shield e Google TV in 5 min",
  metaDesc:
    "IPTV su Android TV, box, Nvidia Shield e Google TV: installa TiviMate o Smarters e accedi a 66.000+ canali in 4K da 5 €/mese. Guida e prova gratuita.",
  eyebrow: "Android TV · TiviMate",
  h1: "IPTV su Android TV",
  h1Accent: "la piattaforma più aperta",
  intro:
    "Android TV è dove l'IPTV rende meglio: consente di installare TiviMate, la migliore app del settore, senza restrizioni. Con ATV Corner accedi a 66.000+ canali in 4K da 5 €/mese, configurato in cinque minuti.",
  features: [
    { h: "TiviMate disponibile", p: "La migliore interfaccia da televisore del settore, esclusiva Android." },
    { h: "Senza restrizioni", p: "Installa qualsiasi app, da Google Play o tramite APK." },
    { h: "Tutti gli apparecchi", p: "Box Android, Nvidia Shield, Google TV e televisori Sony, Philips o TCL." },
    { h: "4K con HEVC", p: "Decodifica hardware su quasi tutti i modelli recenti." },
  ],
  sections: [
    { h: "Perché Android TV è la scelta migliore", p: "A differenza di Roku o tvOS, Android TV lascia installare ciò che vuoi, e questo conta perché l'app IPTV di riferimento esiste solo qui. TiviMate offre una guida a griglia come quella di un decoder d'operatore, gestione dei preferiti per gruppi, zapping quasi istantaneo e registrazione programmata. Nessuna app di un'altra piattaforma le si avvicina. Se stai scegliendo un apparecchio pensando all'IPTV, Android TV è la risposta." },
    { h: "Quale dispositivo scegliere", p: "Un box Android economico funziona, ma di solito ha poca memoria, e con cataloghi da decine di migliaia di canali questo si traduce in attese all'apertura e chiusure inattese. La Nvidia Shield è l'apparecchio di riferimento: potenza abbondante, Ethernet inclusa e aggiornamenti per anni. I televisori Sony, Philips e TCL con Google TV integrato vanno bene e risparmiano un telecomando in più. Il Chromecast con Google TV è l'equilibrio più ragionevole tra prezzo e prestazioni." },
    { h: "Installare TiviMate", p: "TiviMate è su Google Play, quindi basta cercarla e installarla come qualsiasi altra app. La versione gratuita consente una playlist e le funzioni di base; la versione premium aggiunge playlist multiple, registrazione e personalizzazione della guida. Per iniziare, la gratuita è sufficiente a capire se ti convince. IPTV Smarters Pro e IBO Player sono alternative valide se preferisci qualcosa di più semplice da configurare." },
    { h: "Inserire le credenziali", p: "In TiviMate, scegli «Aggiungi playlist» e poi «Xtream Codes». Inserisci l'URL del server, il nome utente e la password che ti inviamo su WhatsApp. L'app carica quindi i canali, la guida ai programmi su più giorni e la videoteca con le copertine, operazione che richiede di norma meno di un minuto. Se preferisci l'M3U, anche quell'opzione è disponibile, benché Xtream Codes carichi più in fretta e presenti meglio i film." },
    { h: "Impostazioni che fanno la differenza", p: "Attiva la decodifica hardware: è l'impostazione con più impatto sulla fluidità. Regola il buffer su un valore medio, perché uno basso interrompe su connessioni irregolari e uno alto rallenta lo zapping. Configura i gruppi di preferiti per avere a portata i venti canali che guardi davvero. E nella guida, attiva la vista a griglia con più ore visibili, che è ciò che rende TiviMate simile a un decoder d'operatore e non a un semplice elenco." },
    { h: "La tastiera, un dettaglio che fa risparmiare tempo", p: "Digitare le credenziali con il telecomando è la parte più lenta di qualsiasi installazione. Su Android TV puoi abbinare una tastiera Bluetooth, usare l'app Google TV sul telefono come telecomando con tastiera, oppure installare un gestore degli appunti. Ognuna delle tre opzioni trasforma cinque minuti di digitazione goffa in pochi secondi, e riduce inoltre il rischio di sbagliare un carattere e credere che le credenziali non funzionino." },
    { h: "Rete: Ethernet ogni volta che puoi", p: "La Nvidia Shield e la maggior parte dei box Android includono una porta di rete. Usala. È il miglioramento più efficace che esista sulla stabilità in diretta ed elimina di colpo gran parte delle interruzioni che vengono attribuite al fornitore. Se il tuo apparecchio ha solo il Wi-Fi, un adattatore da USB a Ethernet costa poco e funziona su quasi tutti i modelli. In ogni caso servono 10 Mbps stabili per l'HD e 25 per il 4K, misurati sul dispositivo stesso." },
    { h: "Problemi frequenti", p: "Se l'app è lenta all'apertura, l'apparecchio è a corto di memoria: chiudi le altre app o valuta un modello con più RAM. Se l'immagine scatta con una buona connessione, attiva la decodifica hardware. Se la guida risulta incompleta, forza un ricaricamento dalle impostazioni della playlist. E se TiviMate si chiude da sola, svuota la sua cache dalle impostazioni di sistema prima di reinstallare qualsiasi cosa, perché di norma è sufficiente." },
    { h: "Provarlo prima di comprare", p: "La prova gratuita di 24 ore non richiede carta di credito e permette di eseguire l'installazione completa con TiviMate sul tuo apparecchio. Attivala in orario di punta e verifica che i tuoi canali siano presenti, che la guida si popoli su più giorni e che l'immagine regga dieci minuti consecutivi di contenuto con movimento rapido. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni. Conviene provare sull'apparecchio e sulla rete che userai davvero ogni sera, perché è l'unica verifica che riflette le condizioni reali di casa tua." },
  ],
  faq: [
    { q: "Quale app è migliore su Android TV?", a: "TiviMate, senza discussione: guida a griglia, preferiti per gruppi e zapping quasi istantaneo. IPTV Smarters Pro e IBO Player sono alternative più semplici da configurare." },
    { q: "Quale dispositivo Android TV conviene?", a: "La Nvidia Shield è il riferimento per potenza ed Ethernet. Il Chromecast con Google TV è il miglior equilibrio prezzo-prestazioni. I box economici funzionano ma restano a corto di memoria." },
    { q: "Posso installare app fuori da Google Play?", a: "Sì. Android TV consente l'installazione tramite APK senza restrizioni, a differenza di Roku o tvOS. Per questo è la piattaforma più flessibile per l'IPTV." },
    { q: "Perché l'immagine si interrompe?", a: "Quasi sempre il Wi-Fi. Usa la porta Ethernet se il tuo apparecchio ce l'ha, o un adattatore da USB a Ethernet, e attiva la decodifica hardware nell'app." },
    { q: "TiviMate è a pagamento?", a: "La versione gratuita consente una playlist e le funzioni di base, sufficiente per iniziare. La premium aggiunge playlist multiple, registrazione e personalizzazione della guida." },
  ],
  cta: "Attiva su Android TV",
};

// --- es/it for /iptv-mag-box ------------------------------------------------
content["iptv-mag-box"].es = {
  metaTitle: "IPTV para MAG Box — URL de portal y MAC, sin aplicaciones",
  metaDesc:
    "Configura tu MAG Box con URL de portal y dirección MAC: 66.000+ canales sin instalar nada. Compatible con MAG 250, 254, 322, 324, 420 y 524.",
  eyebrow: "MAG Box · Portal y MAC",
  h1: "IPTV para MAG Box",
  h1Accent: "sin instalar nada",
  intro:
    "El MAG no necesita aplicaciones: se configura con una URL de portal y tu dirección MAC, y arranca directamente en la televisión. Con ATV Corner accedes a 66.000+ canales desde 5 €/mes, listo en cinco minutos.",
  features: [
    { h: "Sin aplicaciones", p: "El portal se carga solo al encender: nada que instalar ni actualizar." },
    { h: "Modelos compatibles", p: "MAG 250, 254, 256, 322, 324, 349, 420 y 524, entre otros." },
    { h: "Arranque directo", p: "Enciendes y estás en la televisión, sin pasar por un menú." },
    { h: "Ethernet integrado", p: "Todos los modelos incluyen puerto de red: máxima estabilidad." },
  ],
  sections: [
    { h: "Por qué el MAG funciona distinto", p: "Un MAG no es un aparato de propósito general como un Fire Stick o un box Android: es un descodificador dedicado exclusivamente a la televisión. No instala aplicaciones ni tiene tienda. En su lugar, carga un portal remoto —una interfaz que vive en el servidor— y la muestra a pantalla completa al encender. Eso lo hace más limitado en posibilidades, pero también notablemente más estable y predecible, que es exactamente lo que mucha gente busca en un aparato de salón." },
    { h: "Qué necesitamos de ti", p: "Tu dirección MAC. Es un identificador único del aparato, con formato de seis pares de caracteres separados por dos puntos, y la encuentras en la pegatina de la parte inferior del MAG o en el menú de información del sistema. Nos la envías por WhatsApp, la damos de alta en el servidor y te devolvemos la URL del portal. Ese vínculo entre MAC y servidor es lo que sustituye al usuario y la contraseña de otras plataformas." },
    { h: "Configurar el portal", p: "Enciende el MAG y entra en el menú de sistema, normalmente pulsando el botón de ajustes del mando durante el arranque. Busca la sección de portales, introduce el nombre que quieras y pega la URL que te hemos enviado en el campo de dirección. Guarda y reinicia el aparato. Al volver a arrancar, el portal se carga solo y aparecen los canales organizados por categorías, con la guía de programación ya incorporada." },
    { h: "Qué modelos son compatibles", p: "Funcionan los MAG 250, 254 y 256 de la generación clásica, así como los 322, 324 y 349, y los modelos más recientes 420 y 524 con soporte 4K. Los aparatos antiguos se limitan a HD, lo que sigue bastando para la mayoría de los usos, y su ventaja es que son extremadamente estables. Si vas a comprar uno ahora y tienes televisor 4K, elige un 420 o un 524, porque decodifican HEVC/H.265 por hardware." },
    { h: "La ventaja del Ethernet", p: "Todos los MAG incluyen puerto de red, y esa es probablemente su mejor característica. Conectado por cable, un MAG es uno de los aparatos más fiables que existen para ver televisión en directo, porque elimina de raíz la variable que más problemas causa en el resto de las plataformas. Si tu router está lejos, un cable largo o un adaptador PLC sigue siendo mejor solución que recurrir al Wi-Fi con un adaptador USB." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K en los modelos que lo admiten, medidos en el propio aparato. Como el MAG va casi siempre por cable, la estabilidad suele estar garantizada y los problemas que aparecen son más habitualmente del lado del servidor o de la configuración que de la red doméstica. Eso hace que diagnosticar sea más sencillo que en un aparato conectado por Wi-Fi." },
    { h: "Cambiar de aparato o de MAC", p: "Como el acceso está vinculado a la dirección MAC, si cambias de MAG hay que actualizar el registro en el servidor. Escríbenos con la MAC nueva y lo ajustamos, normalmente en unos minutos y sin coste. Es también el motivo por el que no conviene compartir tu URL de portal: está asociada a tu aparato y a tus conexiones simultáneas, y un uso ajeno degrada tu propia experiencia." },
    { h: "Problemas frecuentes", p: "Si el portal no carga, comprueba primero que la URL esté escrita sin espacios y que el aparato tenga IP: en el menú de red debe aparecer una dirección asignada. Si carga pero sale un error de autorización, casi siempre es que la MAC registrada no coincide con la del aparato, cosa habitual tras cambiar de equipo. Si los canales van pero la guía está vacía, un reinicio del portal suele resolverlo. Y si todo falla, un reinicio de fábrica y volver a introducir la URL es más rápido que seguir tocando ajustes." },
    { h: "Probarlo antes de comprar", p: "Podemos dar de alta tu MAC para la prueba gratuita de 24 horas sin tarjeta de crédito, así que puedes comprobar el funcionamiento en tu propio MAG antes de pagar nada. Actívala en horario punta y verifica que tus canales estén, que la guía se rellene y que la imagen aguante. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual, con garantía de devolución de 7 días." },
  ],
  faq: [
    { q: "¿Qué necesitáis para configurar mi MAG?", a: "Solo la dirección MAC del aparato, que está en la pegatina inferior o en el menú de información del sistema. Con ella damos de alta el acceso y te enviamos la URL del portal." },
    { q: "¿Hay que instalar alguna aplicación?", a: "No. El MAG carga un portal remoto al encender y muestra los canales directamente. No hay tienda, ni instalaciones, ni actualizaciones que gestionar." },
    { q: "¿Qué modelos son compatibles?", a: "MAG 250, 254, 256, 322, 324, 349, 420 y 524, entre otros. Los modelos 420 y 524 admiten 4K con decodificación HEVC por hardware." },
    { q: "¿Por qué sale un error de autorización?", a: "Casi siempre porque la MAC registrada no coincide con la del aparato, algo habitual tras cambiar de equipo. Escríbenos con la MAC nueva y lo actualizamos en minutos." },
    { q: "¿Conviene conectarlo por cable?", a: "Sí. Todos los MAG incluyen puerto Ethernet y por cable son de los aparatos más fiables que existen para televisión en directo." },
  ],
  cta: "Registrar mi MAG",
};

content["iptv-mag-box"].it = {
  metaTitle: "IPTV per MAG Box — URL del portale e MAC, senza app",
  metaDesc:
    "Configura il tuo MAG Box con URL del portale e indirizzo MAC: 66.000+ canali senza installare nulla. Compatibile con MAG 250, 254, 322, 324, 420 e 524.",
  eyebrow: "MAG Box · Portale e MAC",
  h1: "IPTV per MAG Box",
  h1Accent: "senza installare nulla",
  intro:
    "Il MAG non ha bisogno di app: si configura con un URL di portale e il tuo indirizzo MAC, e si avvia direttamente sulla televisione. Con ATV Corner accedi a 66.000+ canali da 5 €/mese, pronto in cinque minuti.",
  features: [
    { h: "Senza app", p: "Il portale si carica da solo all'accensione: nulla da installare o aggiornare." },
    { h: "Modelli compatibili", p: "MAG 250, 254, 256, 322, 324, 349, 420 e 524, tra gli altri." },
    { h: "Avvio diretto", p: "Accendi e sei sulla televisione, senza passare da un menu." },
    { h: "Ethernet integrata", p: "Tutti i modelli hanno una porta di rete: massima stabilità." },
  ],
  sections: [
    { h: "Perché il MAG funziona diversamente", p: "Un MAG non è un apparecchio generalista come un Fire Stick o un box Android: è un decoder dedicato esclusivamente alla televisione. Non installa app e non ha uno store. Al suo posto carica un portale remoto — un'interfaccia che risiede sul server — e lo mostra a schermo intero all'accensione. Questo lo rende più limitato nelle possibilità, ma anche nettamente più stabile e prevedibile, che è esattamente ciò che molte persone cercano in un apparecchio da salotto." },
    { h: "Cosa ci serve da te", p: "Il tuo indirizzo MAC. È un identificativo unico dell'apparecchio, nel formato di sei coppie di caratteri separate da due punti, e lo trovi sull'etichetta nella parte inferiore del MAG o nel menu delle informazioni di sistema. Ce lo invii su WhatsApp, lo registriamo sul server e ti restituiamo l'URL del portale. Quel legame tra MAC e server è ciò che sostituisce nome utente e password delle altre piattaforme." },
    { h: "Configurare il portale", p: "Accendi il MAG ed entra nel menu di sistema, di norma premendo il tasto impostazioni del telecomando durante l'avvio. Cerca la sezione dei portali, inserisci il nome che preferisci e incolla l'URL che ti abbiamo inviato nel campo dell'indirizzo. Salva e riavvia l'apparecchio. Al nuovo avvio il portale si carica da solo e compaiono i canali organizzati per categorie, con la guida ai programmi già integrata." },
    { h: "Quali modelli sono compatibili", p: "Funzionano i MAG 250, 254 e 256 della generazione classica, così come i 322, 324 e 349, e i modelli più recenti 420 e 524 con supporto 4K. Gli apparecchi datati si limitano all'HD, il che resta sufficiente per la maggior parte degli usi, e il loro pregio è di essere estremamente stabili. Se stai comprando adesso e hai un televisore 4K, scegli un 420 o un 524, perché decodificano l'HEVC/H.265 via hardware." },
    { h: "Il vantaggio dell'Ethernet", p: "Tutti i MAG includono una porta di rete, ed è probabilmente la loro caratteristica migliore. Collegato via cavo, un MAG è uno degli apparecchi più affidabili che esistano per guardare la televisione in diretta, perché elimina alla radice la variabile che causa più problemi su tutte le altre piattaforme. Se il router è lontano, un cavo lungo o un adattatore PLC resta una soluzione migliore che ricorrere al Wi-Fi con un adattatore USB." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K sui modelli che lo supportano, misurati sull'apparecchio stesso. Poiché il MAG va quasi sempre via cavo, la stabilità è di norma garantita e i problemi che compaiono riguardano più spesso il lato server o la configurazione che non la rete domestica. Questo rende la diagnosi più semplice rispetto a un apparecchio collegato in Wi-Fi." },
    { h: "Cambiare apparecchio o MAC", p: "Poiché l'accesso è legato all'indirizzo MAC, se cambi MAG occorre aggiornare la registrazione sul server. Scrivici con il MAC nuovo e lo sistemiamo, di norma in pochi minuti e senza costi. È anche il motivo per cui non conviene condividere il tuo URL di portale: è associato al tuo apparecchio e alle tue connessioni simultanee, e un uso da parte di altri peggiora la tua stessa esperienza." },
    { h: "Problemi frequenti", p: "Se il portale non si carica, verifica prima che l'URL sia scritto senza spazi e che l'apparecchio abbia un IP: nel menu di rete deve comparire un indirizzo assegnato. Se si carica ma appare un errore di autorizzazione, quasi sempre il MAC registrato non coincide con quello dell'apparecchio, cosa comune dopo un cambio di dispositivo. Se i canali funzionano ma la guida è vuota, un riavvio del portale di norma risolve. E se tutto fallisce, un ripristino di fabbrica e il reinserimento dell'URL è più rapido che continuare a modificare impostazioni." },
    { h: "Provarlo prima di comprare", p: "Possiamo registrare il tuo MAC per la prova gratuita di 24 ore senza carta di credito, così puoi verificare il funzionamento sul tuo MAG prima di pagare qualsiasi cosa. Attivala in orario di punta e controlla che i tuoi canali ci siano, che la guida si popoli e che l'immagine regga. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale, con garanzia di rimborso di 7 giorni." },
  ],
  faq: [
    { q: "Cosa vi serve per configurare il mio MAG?", a: "Solo l'indirizzo MAC dell'apparecchio, che si trova sull'etichetta inferiore o nel menu delle informazioni di sistema. Con quello registriamo l'accesso e ti inviamo l'URL del portale." },
    { q: "Devo installare qualche app?", a: "No. Il MAG carica un portale remoto all'accensione e mostra i canali direttamente. Non c'è uno store, né installazioni, né aggiornamenti da gestire." },
    { q: "Quali modelli sono compatibili?", a: "MAG 250, 254, 256, 322, 324, 349, 420 e 524, tra gli altri. I modelli 420 e 524 supportano il 4K con decodifica HEVC via hardware." },
    { q: "Perché compare un errore di autorizzazione?", a: "Quasi sempre perché il MAC registrato non coincide con quello dell'apparecchio, cosa comune dopo un cambio di dispositivo. Scrivici con il MAC nuovo e lo aggiorniamo in pochi minuti." },
    { q: "Conviene collegarlo via cavo?", a: "Sì. Tutti i MAG hanno una porta Ethernet e via cavo sono tra gli apparecchi più affidabili che esistano per la televisione in diretta." },
  ],
  cta: "Registra il mio MAG",
};

// --- es/it for /iptv-usa ----------------------------------------------------
content["iptv-usa"].es = {
  metaTitle: "IPTV USA — canales americanos, NFL, NBA y MLB en 4K",
  metaDesc:
    "IPTV con canales estadounidenses: NFL, NBA, MLB, NHL, cadenas nacionales y locales en 4K. Sin contrato ni descodificador, desde 5 €/mes con prueba gratis.",
  eyebrow: "IPTV USA · Deporte americano",
  h1: "IPTV Estados Unidos",
  h1Accent: "todo el deporte americano",
  intro:
    "Cadenas estadounidenses, NFL, NBA, MLB y NHL en un solo acceso, con 70.000 películas y 18.000 series en 4K. Sin contrato de dos años ni descodificador alquilado: activado en cinco minutos desde 5 €/mes.",
  features: [
    { h: "Deporte americano", p: "NFL, NBA, MLB, NHL, universitario y combate, sin paquetes aparte." },
    { h: "Cadenas nacionales", p: "Generalistas, informativos 24 h, entretenimiento y locales." },
    { h: "Sin contrato", p: "Ni permanencia ni renovación automática ni alquiler de equipo." },
    { h: "Desde el extranjero", p: "Las mismas credenciales funcionan desde cualquier país." },
  ],
  sections: [
    { h: "Qué cubre el IPTV en Estados Unidos", p: "El mercado estadounidense es el más fragmentado del mundo: los derechos deportivos están repartidos entre cadenas nacionales, redes regionales y servicios de streaming, y seguir un solo deporte durante toda la temporada suele exigir tres o cuatro suscripciones. Una suscripción de ATV Corner reúne las cadenas generalistas, los informativos de veinticuatro horas, el entretenimiento y una amplia cobertura de canales locales en un mismo acceso, junto a más de 66.000 canales internacionales." },
    { h: "Los cuatro grandes deportes", p: "La NFL con la temporada regular y los playoffs, la NBA con sus partidos nocturnos y la postemporada, la MLB a lo largo de una temporada larguísima y la NHL de octubre a junio. A eso se añade el deporte universitario, que en Estados Unidos mueve audiencias comparables a las profesionales, y el boxeo y las artes marciales mixtas. Los 4.200 canales deportivos están incluidos en cualquier plan, no como una opción facturada aparte." },
    { h: "El problema de los blackouts regionales", p: "Conviene explicarlo porque es la particularidad más confusa del mercado estadounidense. Las redes deportivas regionales aplican restricciones geográficas: un partido de tu equipo local puede estar bloqueado precisamente en tu zona para proteger la asistencia al estadio o los acuerdos con la cadena local. Es una decisión de los titulares de los derechos, no de un proveedor concreto, y afecta a los servicios tradicionales igual que a cualquier otro. Con un catálogo internacional amplio suele haber versiones alternativas del mismo encuentro." },
    { h: "Qué pagas hoy con el cable", p: "Un paquete de cable estadounidense con deporte se sitúa habitualmente entre los 80 y los 150 dólares mensuales una vez sumados el alquiler del descodificador, los cargos por televisor adicional, las tasas de emisión regional y el fin de la tarifa promocional. Sobre doce meses eso supone más de mil dólares. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que devolver al darse de baja." },
    { h: "Ver canales americanos desde fuera", p: "Es uno de los usos más frecuentes de nuestro servicio. Los expatriados estadounidenses y los aficionados al deporte americano en Europa y Latinoamérica encuentran en el IPTV la vía más directa para seguir la NFL o la NBA en horario europeo, sin depender de qué operador local haya comprado los derechos ese año. Las mismas credenciales funcionan desde cualquier país con conexión a internet, sin cambiar de suscripción ni pagar un extra." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el dispositivo donde vas a ver y no en el router. La cobertura de banda ancha en Estados Unidos es muy desigual según el estado y el proveedor, así que conviene medir antes de contratar nada. Si el televisor está lejos del router, un cable Ethernet resuelve más problemas que cualquier ajuste de la aplicación, sobre todo en partidos nocturnos cuando la red del barrio va cargada." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su sencillez, IBO Player y VLC para uso puntual. Como las credenciales no están atadas a un aparato, puedes empezar un partido en el salón y terminarlo en el móvil sin volver a configurar nada." },
    { h: "Dejar el cable sin quedarte sin deporte", p: "El orden recomendado evita el hueco incómodo entre servicios. Activa primero la prueba gratuita de 24 horas y compruébala durante un partido, no un martes por la mañana. Si convence, contrata un mes y convive unas semanas con tu proveedor actual, idealmente cubriendo un fin de semana deportivo completo. Solo entonces cursa la baja, revisando las condiciones de tu contrato y devolviendo el equipo alquilado dentro del plazo para evitar cargos." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro planes incluyen el mismo catálogo de 66.000+ canales, 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, con soporte 24/7. Sin permanencia y sin renovación automática: el acceso caduca solo. Los siete primeros días están cubiertos por una garantía de devolución íntegra." },
  ],
  faq: [
    { q: "¿Puedo ver la NFL y la NBA?", a: "Sí. Los 4.200 canales deportivos cubren NFL, NBA, MLB, NHL, deporte universitario, boxeo y artes marciales mixtas, incluidos en cualquier plan sin coste adicional." },
    { q: "¿Qué pasa con los blackouts regionales?", a: "Las redes deportivas regionales aplican restricciones geográficas fijadas por los titulares de los derechos, no por el proveedor. Con un catálogo internacional amplio suele haber versiones alternativas del mismo partido." },
    { q: "¿Cuánto ahorro frente al cable?", a: "Un paquete estadounidense con deporte ronda los 80-150 dólares al mes, más de mil al año. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido." },
    { q: "¿Puedo ver canales americanos desde Europa?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión a internet, sin cambiar de suscripción ni depender del operador local." },
    { q: "¿Hay que devolver algún equipo?", a: "No hay equipo nuestro que devolver: el IPTV funciona en el aparato que ya tienes. El descodificador de tu operador anterior sí, según sus condiciones." },
  ],
  cta: "Empezar con IPTV USA",
};

content["iptv-usa"].it = {
  metaTitle: "IPTV USA — canali americani, NFL, NBA e MLB in 4K",
  metaDesc:
    "IPTV con canali statunitensi: NFL, NBA, MLB, NHL, reti nazionali e locali in 4K. Senza contratto né decoder, da 5 €/mese con prova gratuita.",
  eyebrow: "IPTV USA · Sport americano",
  h1: "IPTV Stati Uniti",
  h1Accent: "tutto lo sport americano",
  intro:
    "Reti statunitensi, NFL, NBA, MLB e NHL in un solo accesso, con 70.000 film e 18.000 serie in 4K. Senza contratto biennale né decoder a noleggio: attivo in cinque minuti da 5 €/mese.",
  features: [
    { h: "Sport americano", p: "NFL, NBA, MLB, NHL, universitario e combattimento, senza pacchetti a parte." },
    { h: "Reti nazionali", p: "Generaliste, informazione 24 h, intrattenimento e locali." },
    { h: "Senza contratto", p: "Né vincoli né rinnovo automatico né noleggio di apparecchi." },
    { h: "Dall'estero", p: "Le stesse credenziali funzionano da qualsiasi paese." },
  ],
  sections: [
    { h: "Cosa copre l'IPTV negli Stati Uniti", p: "Il mercato statunitense è il più frammentato al mondo: i diritti sportivi sono divisi tra reti nazionali, network regionali e servizi di streaming, e seguire un solo sport per un'intera stagione richiede spesso tre o quattro abbonamenti. Un abbonamento ATV Corner riunisce le reti generaliste, l'informazione ventiquattr'ore, l'intrattenimento e un'ampia copertura di canali locali in un unico accesso, insieme a oltre 66.000 canali internazionali." },
    { h: "I quattro grandi sport", p: "La NFL con stagione regolare e playoff, l'NBA con le partite notturne e la postseason, la MLB lungo una stagione lunghissima e l'NHL da ottobre a giugno. A questi si aggiunge lo sport universitario, che negli Stati Uniti muove ascolti paragonabili a quelli professionistici, insieme alla boxe e alle arti marziali miste. I 4.200 canali sportivi sono inclusi in qualsiasi piano, non come opzione fatturata a parte." },
    { h: "Il problema dei blackout regionali", p: "Conviene spiegarlo perché è la particolarità più confusa del mercato statunitense. I network sportivi regionali applicano restrizioni geografiche: una partita della tua squadra locale può essere bloccata proprio nella tua zona, per proteggere l'affluenza allo stadio o gli accordi con l'emittente locale. È una decisione dei titolari dei diritti, non di un fornitore specifico, e riguarda i servizi tradizionali quanto qualsiasi altro. Con un catalogo internazionale ampio di norma esistono versioni alternative dello stesso incontro." },
    { h: "Quanto paghi oggi con il cavo", p: "Un pacchetto via cavo statunitense con lo sport si colloca abitualmente tra gli 80 e i 150 dollari al mese, una volta sommati il noleggio del decoder, i costi per televisore aggiuntivo, le tasse di trasmissione regionale e la fine della tariffa promozionale. Su dodici mesi questo supera i mille dollari. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da restituire alla disdetta." },
    { h: "Guardare canali americani dall'estero", p: "È uno degli usi più frequenti del nostro servizio. Gli statunitensi espatriati e gli appassionati di sport americano in Europa trovano nell'IPTV la via più diretta per seguire la NFL o l'NBA in orario europeo, senza dipendere da quale operatore locale abbia acquistato i diritti quell'anno. Le stesse credenziali funzionano da qualsiasi paese con una connessione internet, senza cambiare abbonamento né pagare un extra." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul dispositivo su cui guarderai e non sul router. La copertura a banda larga negli Stati Uniti è molto disomogenea a seconda dello stato e del fornitore, quindi conviene misurare prima di sottoscrivere qualsiasi cosa. Se il televisore è lontano dal router, un cavo Ethernet risolve più problemi di qualsiasi impostazione dell'app, soprattutto nelle partite notturne quando la rete di quartiere è carica." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la semplicità, IBO Player e VLC per un uso occasionale. Poiché le credenziali non sono legate a un apparecchio, puoi iniziare una partita in salotto e finirla sul telefono senza riconfigurare nulla." },
    { h: "Lasciare il cavo senza restare senza sport", p: "L'ordine consigliato evita il fastidioso vuoto tra servizi. Attiva prima la prova gratuita di 24 ore e verificala durante una partita, non un martedì mattina. Se convince, acquista un mese e convivi qualche settimana con il fornitore attuale, coprendo idealmente un intero fine settimana sportivo. Solo allora invia la disdetta, controllando le condizioni del contratto e restituendo l'apparecchio noleggiato entro i termini per evitare addebiti." },
    { h: "Il fuso orario e come organizzarsi", p: "Seguire lo sport americano dall'Europa significa fare i conti con sei o nove ore di differenza: una partita NFL della domenica pomeriggio negli Stati Uniti va in onda in serata da noi, mentre il grosso dell'NBA cade nel cuore della notte. È qui che una guida ai programmi affidabile smette di essere un dettaglio e diventa lo strumento principale, perché ti permette di sapere in anticipo cosa parte e quando senza dover convertire fusi a mente. Vale la pena creare un gruppo di preferiti con le sole reti che segui davvero, così alle due di notte non ti trovi a scorrere decine di migliaia di voci." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro i piani includono lo stesso catalogo di 66.000+ canali, 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, con assistenza 24/7. Senza vincoli e senza rinnovo automatico: l'accesso scade da solo. I primi sette giorni sono coperti da una garanzia di rimborso integrale." },
  ],
  faq: [
    { q: "Posso guardare la NFL e l'NBA?", a: "Sì. I 4.200 canali sportivi coprono NFL, NBA, MLB, NHL, sport universitario, boxe e arti marziali miste, inclusi in qualsiasi piano senza costi aggiuntivi." },
    { q: "Come funzionano i blackout regionali?", a: "I network sportivi regionali applicano restrizioni geografiche stabilite dai titolari dei diritti, non dal fornitore. Con un catalogo internazionale ampio di norma esistono versioni alternative della stessa partita." },
    { q: "Quanto risparmio rispetto al cavo?", a: "Un pacchetto statunitense con lo sport si aggira sugli 80-150 dollari al mese, oltre mille all'anno. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso." },
    { q: "Posso guardare canali americani dall'Europa?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione internet, senza cambiare abbonamento né dipendere dall'operatore locale." },
    { q: "Devo restituire qualche apparecchio?", a: "Non c'è alcun apparecchio nostro da restituire: l'IPTV funziona su quello che già possiedi. Il decoder del tuo operatore precedente sì, secondo le sue condizioni." },
  ],
  cta: "Inizia con IPTV USA",
};

// --- es/it for /iptv-canada -------------------------------------------------
content["iptv-canada"].es = {
  metaTitle: "IPTV Canadá — NHL, NBA, MLB y canales bilingües en 4K",
  metaDesc:
    "IPTV en Canadá con canales en inglés y francés: NHL, NBA, MLB, MLS y 70.000 películas en 4K. Sin contrato ni descodificador, desde 5 €/mes.",
  eyebrow: "IPTV Canadá · Bilingüe",
  h1: "IPTV en Canadá",
  h1Accent: "en inglés y en francés",
  intro:
    "Canales canadienses en ambos idiomas oficiales, la NHL completa, NBA, MLB y MLS, más 70.000 películas y 18.000 series en 4K. Sin contrato ni equipo alquilado: activado en cinco minutos desde 5 €/mes.",
  features: [
    { h: "Bilingüe", p: "Canales en inglés y en francés, incluidos los de Quebec." },
    { h: "NHL completa", p: "Temporada regular, playoffs y la Copa Stanley sin paquetes aparte." },
    { h: "Sin contrato", p: "Ni permanencia, ni renovación automática, ni descodificador." },
    { h: "En todo el país", p: "Llega por internet: no depende de la cobertura por cable." },
  ],
  sections: [
    { h: "Qué cubre el IPTV en Canadá", p: "Canadá tiene una particularidad que ningún otro mercado comparte: la doble oferta lingüística. Una suscripción de ATV Corner incluye canales generalistas e informativos en inglés y en francés, con la programación de Quebec junto a la del resto del país, además de más de 66.000 canales internacionales. Para los hogares bilingües, o para quien se ha mudado entre provincias, eso resuelve en un solo acceso algo que normalmente exige contratar paquetes separados." },
    { h: "El hockey, primero", p: "La NHL es el deporte que define el consumo televisivo canadiense, y también el que encarece la factura, porque los derechos están repartidos y seguir a un equipo durante toda la temporada suele implicar más de una suscripción. Nuestros 4.200 canales deportivos cubren la temporada regular, los playoffs y la Copa Stanley, junto a la NBA con los Raptors, la MLB con los Blue Jays y la MLS. El deporte está incluido en cualquier plan, no facturado aparte." },
    { h: "Lo que se paga hoy en Canadá", p: "Los paquetes de televisión canadienses están entre los más caros del mundo desarrollado. Un paquete con deporte se sitúa habitualmente en varias decenas de dólares al mes una vez sumados el alquiler del descodificador, los cargos por terminal adicional y el fin de la tarifa promocional del primer año. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que devolver al darse de baja." },
    { h: "Donde el cable llega mal", p: "La geografía canadiense hace que la cobertura por cable sea desigual fuera de las grandes áreas urbanas, y en las provincias del norte y en zonas rurales las opciones se reducen a satélite o a paquetes limitados. El IPTV llega por internet, así que no depende del despliegue de un operador concreto en tu calle. Mientras tengas una conexión razonable, el catálogo es el mismo en Toronto que en una localidad pequeña de Saskatchewan." },
    { h: "El invierno y la conexión", p: "Es un detalle práctico que importa más de lo que parece. El satélite, muy extendido en Canadá, se degrada con nieve intensa y con hielo acumulado en la parabólica, justo en los meses en los que más televisión se ve. El IPTV no tiene ese problema porque no depende de una antena exterior, aunque a cambio necesita que tu conexión aguante. La regla son 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor y no en el router." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores con Windows, macOS o Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su sencillez, IBO Player y VLC. Tus credenciales no están atadas a un aparato, así que el mismo acceso vale para el salón, el móvil y una tableta." },
    { h: "Ver canales canadienses desde fuera", p: "Las mismas credenciales funcionan desde cualquier país con conexión a internet. Es un uso habitual entre canadienses que trabajan o estudian en el extranjero y quieren seguir la temporada de hockey en su idioma, o entre quienes pasan el invierno fuera del país. No hace falta cambiar de plan ni contratar nada adicional: el catálogo que ves en Canadá es el mismo que verás desde Europa o desde el sur." },
    { h: "Dejar tu proveedor sin quedarte sin nada", p: "El orden recomendado evita el hueco entre servicios. Activa primero la prueba gratuita de 24 horas y compruébala durante un partido de hockey en horario de máxima audiencia, no un martes por la mañana. Si convence, contrata un mes y convive unas semanas con tu proveedor actual. Solo entonces cursa la baja, revisando el preaviso de tu contrato y devolviendo el descodificador dentro del plazo para evitar cargos por equipo no retornado." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro incluyen el mismo catálogo de 66.000+ canales, 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, con soporte 24/7. Sin permanencia y sin renovación automática: el acceso caduca solo y decides tú si vuelves. Garantía de devolución de 7 días desde la compra." },
  ],
  faq: [
    { q: "¿Hay canales en francés y en inglés?", a: "Sí. La suscripción incluye canales generalistas e informativos en ambos idiomas oficiales, con la programación de Quebec junto a la del resto del país." },
    { q: "¿Puedo ver toda la temporada de la NHL?", a: "Sí. Los 4.200 canales deportivos cubren la temporada regular, los playoffs y la Copa Stanley, además de NBA, MLB y MLS, incluidos en cualquier plan." },
    { q: "¿Funciona fuera de las grandes ciudades?", a: "Sí. Llega por internet, así que no depende del despliegue de cable en tu calle. Solo necesitas 10 Mbps estables para HD o 25 para 4K." },
    { q: "¿Se ve afectado por la nieve como el satélite?", a: "No. El IPTV no usa antena exterior, así que la nieve y el hielo no lo degradan. A cambio depende de que tu conexión a internet se mantenga estable." },
    { q: "¿Puedo verlo desde el extranjero?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión, sin cambiar de plan ni pagar nada adicional." },
  ],
  cta: "Empezar en Canadá",
};

content["iptv-canada"].it = {
  metaTitle: "IPTV Canada — NHL, NBA, MLB e canali bilingui in 4K",
  metaDesc:
    "IPTV in Canada con canali in inglese e francese: NHL, NBA, MLB, MLS e 70.000 film in 4K. Senza contratto né decoder, da 5 €/mese.",
  eyebrow: "IPTV Canada · Bilingue",
  h1: "IPTV in Canada",
  h1Accent: "in inglese e in francese",
  intro:
    "Canali canadesi in entrambe le lingue ufficiali, l'NHL completa, NBA, MLB e MLS, più 70.000 film e 18.000 serie in 4K. Senza contratto né apparecchi a noleggio: attivo in cinque minuti da 5 €/mese.",
  features: [
    { h: "Bilingue", p: "Canali in inglese e in francese, compresi quelli del Québec." },
    { h: "NHL completa", p: "Stagione regolare, playoff e Stanley Cup senza pacchetti a parte." },
    { h: "Senza contratto", p: "Né vincoli, né rinnovo automatico, né decoder." },
    { h: "In tutto il paese", p: "Arriva via internet: non dipende dalla copertura via cavo." },
  ],
  sections: [
    { h: "Cosa copre l'IPTV in Canada", p: "Il Canada ha una particolarità che nessun altro mercato condivide: la doppia offerta linguistica. Un abbonamento ATV Corner include canali generalisti e d'informazione in inglese e in francese, con la programmazione del Québec accanto a quella del resto del paese, oltre a più di 66.000 canali internazionali. Per le famiglie bilingui, o per chi si è trasferito tra province, questo risolve in un solo accesso qualcosa che normalmente richiede pacchetti separati." },
    { h: "L'hockey, prima di tutto", p: "L'NHL è lo sport che definisce i consumi televisivi canadesi, ed è anche ciò che fa lievitare la bolletta, perché i diritti sono divisi e seguire una squadra per l'intera stagione richiede spesso più di un abbonamento. I nostri 4.200 canali sportivi coprono la stagione regolare, i playoff e la Stanley Cup, insieme all'NBA con i Raptors, alla MLB con i Blue Jays e alla MLS. Lo sport è incluso in qualsiasi piano, non fatturato a parte." },
    { h: "Quanto si paga oggi in Canada", p: "I pacchetti televisivi canadesi sono tra i più cari del mondo sviluppato. Un pacchetto con lo sport si colloca abitualmente su diverse decine di dollari al mese una volta sommati il noleggio del decoder, i costi per terminale aggiuntivo e la fine della tariffa promozionale del primo anno. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da restituire alla disdetta." },
    { h: "Dove il cavo arriva male", p: "La geografia canadese rende la copertura via cavo disomogenea fuori dalle grandi aree urbane, e nelle province settentrionali e nelle zone rurali le opzioni si riducono al satellite o a pacchetti limitati. L'IPTV arriva via internet, quindi non dipende dallo sviluppo di rete di un operatore specifico nella tua strada. Finché hai una connessione ragionevole, il catalogo è lo stesso a Toronto come in un piccolo centro del Saskatchewan." },
    { h: "L'inverno e la connessione", p: "È un dettaglio pratico che conta più di quanto sembri. Il satellite, molto diffuso in Canada, si degrada con la neve intensa e con il ghiaccio accumulato sulla parabola, proprio nei mesi in cui si guarda più televisione. L'IPTV non ha questo problema perché non dipende da un'antenna esterna, anche se in cambio richiede che la connessione regga. La regola è 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore e non sul router." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer con Windows, macOS o Linux. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la semplicità, IBO Player e VLC. Le tue credenziali non sono legate a un apparecchio, quindi lo stesso accesso vale per il salotto, il telefono e un tablet." },
    { h: "Guardare canali canadesi dall'estero", p: "Le stesse credenziali funzionano da qualsiasi paese con una connessione internet. È un uso abituale tra canadesi che lavorano o studiano all'estero e vogliono seguire la stagione di hockey nella propria lingua, o tra chi passa l'inverno fuori dal paese. Non serve cambiare piano né sottoscrivere nulla di aggiuntivo: il catalogo che vedi in Canada è lo stesso che vedrai dall'Europa o dal sud." },
    { h: "Lasciare il fornitore senza restare senza nulla", p: "L'ordine consigliato evita il vuoto tra servizi. Attiva prima la prova gratuita di 24 ore e verificala durante una partita di hockey in prima serata, non un martedì mattina. Se convince, acquista un mese e convivi qualche settimana con il fornitore attuale. Solo allora invia la disdetta, controllando il preavviso del contratto e restituendo il decoder entro i termini per evitare addebiti per apparecchi non resi." },
    { h: "Come verificarlo prima di pagare", p: "La prova gratuita di 24 ore non richiede carta di credito e dà accesso al catalogo completo. Il momento in cui la attivi decide quanto vale: scegli deliberatamente una serata con una partita di hockey molto seguita, perché è allora che migliaia di spettatori richiedono lo stesso flusso e la capacità dei server viene messa davvero alla prova. Controlla che le reti che guardi abitualmente ci siano in entrambe le lingue, che la guida ai programmi risulti popolata su più giorni e che l'immagine regga dieci minuti consecutivi di gioco. Se queste tre verifiche passano nel momento peggiore, passeranno anche nel resto del tempo." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro includono lo stesso catalogo di 66.000+ canali, 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, con assistenza 24/7. Senza vincoli e senza rinnovo automatico: l'accesso scade da solo e sei tu a decidere se tornare. Garanzia di rimborso di 7 giorni dall'acquisto." },
  ],
  faq: [
    { q: "Ci sono canali in francese e in inglese?", a: "Sì. L'abbonamento include canali generalisti e d'informazione in entrambe le lingue ufficiali, con la programmazione del Québec accanto a quella del resto del paese." },
    { q: "Posso vedere tutta la stagione NHL?", a: "Sì. I 4.200 canali sportivi coprono stagione regolare, playoff e Stanley Cup, oltre a NBA, MLB e MLS, inclusi in qualsiasi piano." },
    { q: "Funziona fuori dalle grandi città?", a: "Sì. Arriva via internet, quindi non dipende dallo sviluppo del cavo nella tua strada. Servono solo 10 Mbps stabili per l'HD o 25 per il 4K." },
    { q: "Risente della neve come il satellite?", a: "No. L'IPTV non usa un'antenna esterna, quindi neve e ghiaccio non lo degradano. In cambio dipende dal fatto che la connessione resti stabile." },
    { q: "Posso guardarlo dall'estero?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione, senza cambiare piano né pagare nulla di aggiuntivo." },
  ],
  cta: "Inizia in Canada",
};

// --- es/it for /iptv-uk -----------------------------------------------------
content["iptv-uk"].es = {
  metaTitle: "IPTV Reino Unido — Premier League y canales británicos en 4K",
  metaDesc:
    "IPTV en Reino Unido: Premier League, EFL, rugby, críquet y canales británicos en 4K, más 70.000 películas. Sin contrato ni licencia de equipo, desde 5 €/mes.",
  eyebrow: "IPTV Reino Unido · Premier League",
  h1: "IPTV en Reino Unido",
  h1Accent: "Premier League incluida",
  intro:
    "Canales británicos, la Premier League completa, EFL, rugby y críquet en un solo acceso, con 70.000 películas y 18.000 series en 4K. Sin contrato de dos años ni descodificador alquilado, desde 5 €/mes.",
  features: [
    { h: "Premier League", p: "Más EFL, FA Cup y las competiciones europeas de clubes." },
    { h: "Canales británicos", p: "Generalistas, informativos, documentales e infantiles." },
    { h: "Rugby y críquet", p: "Six Nations, Premiership, The Ashes y torneos internacionales." },
    { h: "Sin contrato", p: "Ni permanencia ni renovación automática ni equipo alquilado." },
  ],
  sections: [
    { h: "Qué cubre el IPTV en Reino Unido", p: "El mercado británico reparte los derechos entre varios operadores, de modo que ver toda la temporada de fútbol suele exigir dos o tres suscripciones simultáneas. Una suscripción de ATV Corner reúne los canales generalistas británicos, los informativos de veinticuatro horas, los documentales y la programación infantil junto a más de 66.000 canales internacionales, en un único acceso y sin sumar contratos ni facturas." },
    { h: "El fútbol: Premier League y más", p: "La Premier League es el motivo principal por el que se paga televisión en el Reino Unido, y también el que más encarece la factura, porque los partidos están repartidos entre emisores distintos según la jornada y el horario. Nuestros 4.200 canales deportivos cubren la Premier League, la EFL Championship y las divisiones inferiores, la FA Cup y las competiciones europeas de clubes, además de las grandes ligas del continente. Todo incluido en cualquier plan." },
    { h: "Rugby, críquet y el resto", p: "El deporte británico no se agota en el fútbol y ahí es donde un catálogo amplio marca la diferencia. Encontrarás el Six Nations y la Premiership de rugby, el críquet con The Ashes y los torneos internacionales, el golf con los grandes campeonatos, el tenis durante la temporada de hierba, el boxeo y las carreras de caballos. Son precisamente los deportes que en la oferta tradicional aparecen dispersos entre canales de pago distintos." },
    { h: "Lo que pagas hoy", p: "Un hogar británico que quiere fútbol completo y cine paga habitualmente varias decenas de libras al mes, sumando el paquete base, el suplemento deportivo, a menudo un segundo servicio para los partidos que no cubre el primero, y el alquiler del equipo. Sobre doce meses la cifra es considerable. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin hardware que devolver." },
    { h: "La licencia de televisión", p: "Conviene ser claro en este punto porque genera dudas. La TV Licence británica es una obligación legal independiente de tu proveedor: se aplica a ver o grabar televisión en directo, sea cual sea el medio por el que llegue la señal. Cambiar de servicio no altera esa obligación en ningún sentido, y cualquier proveedor que insinúe lo contrario te está desinformando. Es un asunto que corresponde a la autoridad competente, no a nosotros." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor donde vas a ver y no en el router. La cobertura de banda ancha británica es buena en general, pero la fibra hasta el domicilio sigue siendo desigual y muchas líneas dependen todavía del par de cobre en el último tramo. Si tu velocidad es justa, conecta el televisor por cable Ethernet: mejora más la estabilidad que cualquier ajuste de la aplicación." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su facilidad de configuración, IBO Player y VLC para uso puntual. Como las credenciales no están vinculadas a un aparato, el mismo acceso vale para el salón, el móvil y una tableta." },
    { h: "Ver canales británicos desde fuera", p: "Las mismas credenciales funcionan desde cualquier país con conexión a internet. Es un uso muy frecuente entre británicos residentes en España, Francia o Portugal, que quieren seguir la Premier League y los canales de casa sin depender de qué operador local haya comprado los derechos esa temporada. No hay que cambiar de plan ni pagar un suplemento por verlo fuera del Reino Unido." },
    { h: "Cambiar de proveedor sin quedarte sin fútbol", p: "El orden importa, porque los contratos británicos suelen incluir un periodo mínimo y un preaviso de treinta días. Activa primero la prueba gratuita de 24 horas y compruébala durante una jornada de Premier League, no un martes por la mañana. Si convence, contrata un mes y convive unas semanas con tu servicio actual. Solo entonces cursa la baja, respetando el preaviso y devolviendo el equipo dentro del plazo para evitar cargos." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro planes incluyen el mismo catálogo de 66.000+ canales, 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, con soporte 24/7. Sin permanencia y sin renovación automática: el acceso caduca solo. Garantía de devolución de 7 días desde la compra." },
  ],
  faq: [
    { q: "¿Puedo ver la Premier League?", a: "Sí. Los 4.200 canales deportivos cubren la Premier League, la EFL Championship, la FA Cup y las competiciones europeas de clubes, incluidos en cualquier plan sin coste adicional." },
    { q: "¿Necesito la TV Licence?", a: "La TV Licence es una obligación legal independiente de tu proveedor y se aplica a ver o grabar televisión en directo por cualquier medio. Cambiar de servicio no altera esa obligación." },
    { q: "¿Cuánto ahorro frente a mi proveedor actual?", a: "Un hogar con fútbol completo y cine paga varias decenas de libras al mes sumando paquete, suplemento deportivo y alquiler de equipo. El plan anual cuesta 60 €, es decir 5 €/mes." },
    { q: "¿Puedo ver canales británicos desde España?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión, sin cambiar de plan ni pagar un suplemento." },
    { q: "¿Qué conexión necesito?", a: "10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor. Si tu línea va justa, conecta por Ethernet antes de cambiar cualquier ajuste." },
  ],
  cta: "Empezar en Reino Unido",
};

content["iptv-uk"].it = {
  metaTitle: "IPTV Regno Unito — Premier League e canali britannici in 4K",
  metaDesc:
    "IPTV nel Regno Unito: Premier League, EFL, rugby, cricket e canali britannici in 4K, più 70.000 film. Senza contratto né apparecchi, da 5 €/mese.",
  eyebrow: "IPTV Regno Unito · Premier League",
  h1: "IPTV nel Regno Unito",
  h1Accent: "Premier League inclusa",
  intro:
    "Canali britannici, la Premier League completa, EFL, rugby e cricket in un solo accesso, con 70.000 film e 18.000 serie in 4K. Senza contratto biennale né decoder a noleggio, da 5 €/mese.",
  features: [
    { h: "Premier League", p: "Più EFL, FA Cup e le competizioni europee per club." },
    { h: "Canali britannici", p: "Generalisti, informazione, documentari e programmi per bambini." },
    { h: "Rugby e cricket", p: "Sei Nazioni, Premiership, The Ashes e tornei internazionali." },
    { h: "Senza contratto", p: "Né vincoli né rinnovo automatico né apparecchi a noleggio." },
  ],
  sections: [
    { h: "Cosa copre l'IPTV nel Regno Unito", p: "Il mercato britannico divide i diritti tra più operatori, così che seguire un'intera stagione di calcio richiede di norma due o tre abbonamenti contemporanei. Un abbonamento ATV Corner riunisce i canali generalisti britannici, l'informazione ventiquattr'ore, i documentari e la programmazione per bambini insieme a oltre 66.000 canali internazionali, in un unico accesso e senza sommare contratti né fatture." },
    { h: "Il calcio: Premier League e non solo", p: "La Premier League è il motivo principale per cui nel Regno Unito si paga la televisione, ed è anche ciò che fa lievitare di più la bolletta, perché le partite sono distribuite tra emittenti diverse a seconda della giornata e dell'orario. I nostri 4.200 canali sportivi coprono la Premier League, la EFL Championship e le divisioni inferiori, la FA Cup e le competizioni europee per club, oltre ai maggiori campionati continentali. Tutto incluso in qualsiasi piano." },
    { h: "Rugby, cricket e il resto", p: "Lo sport britannico non si esaurisce nel calcio ed è lì che un catalogo ampio fa la differenza. Troverai il Sei Nazioni e la Premiership di rugby, il cricket con The Ashes e i tornei internazionali, il golf con i grandi campionati, il tennis durante la stagione sull'erba, la boxe e le corse dei cavalli. Sono esattamente gli sport che nell'offerta tradizionale risultano dispersi tra canali a pagamento diversi." },
    { h: "Quanto paghi oggi", p: "Una famiglia britannica che vuole il calcio completo e il cinema paga abitualmente diverse decine di sterline al mese, sommando il pacchetto base, il supplemento sportivo, spesso un secondo servizio per le partite che il primo non copre, e il noleggio dell'apparecchio. Su dodici mesi la cifra è considerevole. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun hardware da restituire." },
    { h: "La licenza televisiva", p: "Conviene essere chiari su questo punto perché genera dubbi. La TV Licence britannica è un obbligo di legge indipendente dal tuo fornitore: si applica alla visione o registrazione di televisione in diretta, qualunque sia il mezzo con cui arriva il segnale. Cambiare servizio non modifica quell'obbligo in alcun senso, e qualsiasi fornitore che lasci intendere il contrario ti sta disinformando. È una materia che compete all'autorità competente, non a noi." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore su cui guarderai e non sul router. La copertura a banda larga britannica è nel complesso buona, ma la fibra fino all'abitazione resta disomogenea e molte linee dipendono ancora dal doppino di rame nell'ultimo tratto. Se la tua velocità è al limite, collega il televisore via cavo Ethernet: migliora la stabilità più di qualsiasi impostazione dell'app." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la facilità di configurazione, IBO Player e VLC per un uso occasionale. Poiché le credenziali non sono legate a un apparecchio, lo stesso accesso vale per il salotto, il telefono e un tablet." },
    { h: "Guardare canali britannici dall'estero", p: "Le stesse credenziali funzionano da qualsiasi paese con una connessione internet. È un uso molto frequente tra britannici residenti in Spagna, Francia o Portogallo, che vogliono seguire la Premier League e i canali di casa senza dipendere da quale operatore locale abbia acquistato i diritti quella stagione. Non serve cambiare piano né pagare un supplemento per guardarlo fuori dal Regno Unito." },
    { h: "Cambiare fornitore senza restare senza calcio", p: "L'ordine conta, perché i contratti britannici prevedono di norma un periodo minimo e un preavviso di trenta giorni. Attiva prima la prova gratuita di 24 ore e verificala durante una giornata di Premier League, non un martedì mattina. Se convince, acquista un mese e convivi qualche settimana con il servizio attuale. Solo allora invia la disdetta, rispettando il preavviso e restituendo l'apparecchio entro i termini per evitare addebiti." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro i piani includono lo stesso catalogo di 66.000+ canali, 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, con assistenza 24/7. Senza vincoli e senza rinnovo automatico: l'accesso scade da solo. Garanzia di rimborso di 7 giorni dall'acquisto." },
  ],
  faq: [
    { q: "Posso guardare la Premier League?", a: "Sì. I 4.200 canali sportivi coprono Premier League, EFL Championship, FA Cup e competizioni europee per club, inclusi in qualsiasi piano senza costi aggiuntivi." },
    { q: "Mi serve la TV Licence?", a: "La TV Licence è un obbligo di legge indipendente dal fornitore e si applica alla visione o registrazione di televisione in diretta con qualsiasi mezzo. Cambiare servizio non modifica quell'obbligo." },
    { q: "Quanto risparmio rispetto al mio fornitore attuale?", a: "Una famiglia con calcio completo e cinema paga diverse decine di sterline al mese sommando pacchetto, supplemento sportivo e noleggio. Il piano annuale costa 60 €, cioè 5 €/mese." },
    { q: "Posso guardare canali britannici dall'Italia?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione, senza cambiare piano né pagare un supplemento." },
    { q: "Quale connessione mi serve?", a: "10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore. Se la linea è al limite, collega via Ethernet prima di modificare qualsiasi impostazione." },
  ],
  cta: "Inizia nel Regno Unito",
};

// --- es/it for /iptv-france -------------------------------------------------
content["iptv-france"].es = {
  metaTitle: "IPTV Francia — Ligue 1 y canales franceses en 4K",
  metaDesc:
    "IPTV en Francia: Ligue 1, Top 14, Roland-Garros y canales franceses en 4K, más 70.000 películas. Sin contrato ni descodificador, desde 5 €/mes.",
  eyebrow: "IPTV Francia · Ligue 1",
  h1: "IPTV en Francia",
  h1Accent: "Ligue 1 y canales franceses",
  intro:
    "Canales franceses, Ligue 1, Top 14 y Roland-Garros en un solo acceso, con 70.000 películas y 18.000 series en 4K. Sin permanencia ni descodificador alquilado: activado en cinco minutos desde 5 €/mes.",
  features: [
    { h: "Canales franceses", p: "Generalistas, informativos 24 h, documentales e infantiles." },
    { h: "Ligue 1 y Europa", p: "Más Champions League, Europa League y grandes ligas europeas." },
    { h: "Rugby y tenis", p: "Top 14, Six Nations y Roland-Garros durante la temporada de tierra." },
    { h: "Sin permanencia", p: "Ni contrato de 12 o 24 meses ni preaviso que recordar." },
  ],
  sections: [
    { h: "Qué cubre el IPTV en Francia", p: "El mercado francés reparte los derechos deportivos entre varios operadores y plataformas, de modo que seguir la Ligue 1 completa junto a las competiciones europeas suele exigir más de una suscripción. Una suscripción de ATV Corner reúne los canales generalistas franceses, los informativos de veinticuatro horas, los documentales y la programación infantil junto a más de 66.000 canales internacionales, en un único acceso." },
    { h: "El fútbol francés y europeo", p: "La Ligue 1 y la Ligue 2, la Coupe de France, y las competiciones europeas de clubes con la Champions League y la Europa League. A eso se suman las grandes ligas del continente —Premier League, LaLiga, Serie A y Bundesliga— que en la oferta francesa tradicional suelen requerir un servicio aparte. Nuestros 4.200 canales deportivos están incluidos en cualquier plan, sin opción deportiva facturada por separado." },
    { h: "Rugby, tenis y ciclismo", p: "El deporte francés va mucho más allá del fútbol y ahí un catálogo amplio se nota. Encontrarás el Top 14 y el Six Nations de rugby, Roland-Garros y la temporada de tierra batida, el Tour de France y las clásicas ciclistas, el balonmano donde Francia es potencia, y las carreras de resistencia como las 24 Horas de Le Mans. Son los deportes que en un paquete convencional aparecen dispersos entre canales de pago distintos." },
    { h: "Lo que pagas hoy", p: "Un hogar francés que quiere fútbol y cine paga habitualmente varias decenas de euros al mes, sumando el paquete del operador, una plataforma deportiva adicional para los partidos que aquel no cubre, y el alquiler de la box. A eso se añade la tarifa promocional que sube al cabo de doce meses. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que devolver." },
    { h: "Fuera de las grandes ciudades", p: "La cobertura de fibra en Francia ha avanzado mucho pero sigue siendo desigual, y en zonas rurales muchas viviendas dependen todavía de ADSL o de soluciones intermedias. El IPTV llega por internet, así que no depende del despliegue de la box de un operador concreto en tu domicilio, pero sí de que tu línea aguante. Con ADSL justo conviene quedarse en HD, que necesita unos 10 Mbps estables, en lugar de forzar 4K." },
    { h: "Ver canales franceses desde el extranjero", p: "Las mismas credenciales funcionan desde cualquier país con conexión a internet. Es un uso habitual entre franceses expatriados y entre quienes pasan largas temporadas fuera, que quieren seguir los informativos y la Ligue 1 en su idioma sin depender de qué operador local tenga acuerdos con las cadenas francesas. No hay que cambiar de plan ni pagar un suplemento por verlo fuera de Francia." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor donde vas a ver y no en el router. La palabra decisiva es estables: una línea que promedia mucho pero cae con frecuencia dará peor resultado que otra más modesta y constante. Si el televisor está lejos de la box, un cable Ethernet o un adaptador CPL mejora la estabilidad más que cualquier ajuste dentro de la aplicación." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores con Windows, macOS o Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su sencillez, IBO Player y VLC para uso puntual. Tus credenciales no están atadas a un aparato concreto." },
    { h: "Dejar tu operador sin quedarte sin nada", p: "El orden importa, porque los contratos franceses suelen incluir un preaviso y a veces una permanencia pendiente. Activa primero la prueba gratuita de 24 horas y compruébala durante una jornada de Ligue 1, no un martes por la mañana. Si convence, contrata un mes y convive unas semanas con tu servicio actual. Solo entonces cursa la baja, revisando las condiciones y devolviendo la box dentro del plazo para evitar cargos por material no retornado." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro planes incluyen el mismo catálogo de 66.000+ canales, 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, con soporte 24/7. Sin permanencia y sin renovación automática: el acceso caduca solo y decides tú si vuelves. Garantía de devolución de 7 días desde la compra." },
  ],
  faq: [
    { q: "¿Puedo ver la Ligue 1?", a: "Sí. Los 4.200 canales deportivos cubren la Ligue 1, la Ligue 2, la Coupe de France y las competiciones europeas de clubes, incluidos en cualquier plan sin coste adicional." },
    { q: "¿Hay rugby y Roland-Garros?", a: "Sí. Top 14, Six Nations, Roland-Garros y la temporada de tierra batida, además del Tour de France y el balonmano, dentro del mismo acceso." },
    { q: "¿Cuánto ahorro frente a mi operador?", a: "Un hogar con fútbol y cine paga varias decenas de euros al mes sumando paquete, plataforma deportiva y alquiler de box. El plan anual cuesta 60 €, es decir 5 €/mes." },
    { q: "¿Funciona con ADSL?", a: "Sí, en HD, que necesita unos 10 Mbps estables. Para 4K hacen falta 25 Mbps, así que con ADSL justo conviene quedarse en HD en lugar de forzar la resolución." },
    { q: "¿Puedo ver canales franceses desde el extranjero?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión, sin cambiar de plan ni pagar un suplemento." },
  ],
  cta: "Empezar en Francia",
};

content["iptv-france"].it = {
  metaTitle: "IPTV Francia — Ligue 1 e canali francesi in 4K",
  metaDesc:
    "IPTV in Francia: Ligue 1, Top 14, Roland-Garros e canali francesi in 4K, più 70.000 film. Senza contratto né decoder, da 5 €/mese.",
  eyebrow: "IPTV Francia · Ligue 1",
  h1: "IPTV in Francia",
  h1Accent: "Ligue 1 e canali francesi",
  intro:
    "Canali francesi, Ligue 1, Top 14 e Roland-Garros in un solo accesso, con 70.000 film e 18.000 serie in 4K. Senza vincoli né decoder a noleggio: attivo in cinque minuti da 5 €/mese.",
  features: [
    { h: "Canali francesi", p: "Generalisti, informazione 24 h, documentari e programmi per bambini." },
    { h: "Ligue 1 ed Europa", p: "Più Champions League, Europa League e grandi campionati europei." },
    { h: "Rugby e tennis", p: "Top 14, Sei Nazioni e Roland-Garros durante la stagione sulla terra." },
    { h: "Senza vincoli", p: "Né contratto da 12 o 24 mesi né preavviso da ricordare." },
  ],
  sections: [
    { h: "Cosa copre l'IPTV in Francia", p: "Il mercato francese divide i diritti sportivi tra più operatori e piattaforme, così che seguire l'intera Ligue 1 insieme alle competizioni europee richiede di norma più di un abbonamento. Un abbonamento ATV Corner riunisce i canali generalisti francesi, l'informazione ventiquattr'ore, i documentari e la programmazione per bambini insieme a oltre 66.000 canali internazionali, in un unico accesso." },
    { h: "Il calcio francese ed europeo", p: "La Ligue 1 e la Ligue 2, la Coupe de France, e le competizioni europee per club con Champions League ed Europa League. A questi si aggiungono i maggiori campionati continentali — Premier League, LaLiga, Serie A e Bundesliga — che nell'offerta francese tradizionale richiedono di solito un servizio a parte. I nostri 4.200 canali sportivi sono inclusi in qualsiasi piano, senza opzione sport fatturata separatamente." },
    { h: "Rugby, tennis e ciclismo", p: "Lo sport francese va ben oltre il calcio e lì un catalogo ampio si fa sentire. Troverai il Top 14 e il Sei Nazioni di rugby, il Roland-Garros e la stagione sulla terra battuta, il Tour de France e le classiche del ciclismo, la pallamano dove la Francia è una potenza, e le gare di durata come la 24 Ore di Le Mans. Sono gli sport che in un pacchetto convenzionale risultano dispersi tra canali a pagamento diversi." },
    { h: "Quanto paghi oggi", p: "Una famiglia francese che vuole calcio e cinema paga abitualmente diverse decine di euro al mese, sommando il pacchetto dell'operatore, una piattaforma sportiva aggiuntiva per le partite che quello non copre, e il noleggio della box. A questo si aggiunge la tariffa promozionale che sale dopo dodici mesi. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da restituire." },
    { h: "Fuori dalle grandi città", p: "La copertura in fibra in Francia è avanzata molto ma resta disomogenea, e nelle zone rurali molte abitazioni dipendono ancora dall'ADSL o da soluzioni intermedie. L'IPTV arriva via internet, quindi non dipende dall'installazione della box di un operatore specifico a casa tua, ma richiede che la linea regga. Con un ADSL al limite conviene restare in HD, che necessita di circa 10 Mbps stabili, invece di forzare il 4K." },
    { h: "Guardare canali francesi dall'estero", p: "Le stesse credenziali funzionano da qualsiasi paese con una connessione internet. È un uso abituale tra francesi espatriati e tra chi passa lunghi periodi fuori, che vogliono seguire i telegiornali e la Ligue 1 nella propria lingua senza dipendere da quale operatore locale abbia accordi con le emittenti francesi. Non serve cambiare piano né pagare un supplemento per guardarlo fuori dalla Francia." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore su cui guarderai e non sul router. La parola decisiva è stabili: una linea che in media va forte ma cala di frequente darà un risultato peggiore di un'altra più modesta e costante. Se il televisore è lontano dalla box, un cavo Ethernet o un adattatore CPL migliora la stabilità più di qualsiasi impostazione dentro l'app." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer con Windows, macOS o Linux. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la semplicità, IBO Player e VLC per un uso occasionale. Le tue credenziali non sono legate a un apparecchio specifico." },
    { h: "Lasciare l'operatore senza restare senza nulla", p: "L'ordine conta, perché i contratti francesi prevedono di norma un preavviso e talvolta un vincolo ancora attivo. Attiva prima la prova gratuita di 24 ore e verificala durante una giornata di Ligue 1, non un martedì mattina. Se convince, acquista un mese e convivi qualche settimana con il servizio attuale. Solo allora invia la disdetta, controllando le condizioni e restituendo la box entro i termini per evitare addebiti per materiale non reso." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro i piani includono lo stesso catalogo di 66.000+ canali, 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, con assistenza 24/7. Senza vincoli e senza rinnovo automatico: l'accesso scade da solo e sei tu a decidere se tornare. Garanzia di rimborso di 7 giorni dall'acquisto." },
  ],
  faq: [
    { q: "Posso guardare la Ligue 1?", a: "Sì. I 4.200 canali sportivi coprono Ligue 1, Ligue 2, Coupe de France e competizioni europee per club, inclusi in qualsiasi piano senza costi aggiuntivi." },
    { q: "Ci sono rugby e Roland-Garros?", a: "Sì. Top 14, Sei Nazioni, Roland-Garros e la stagione sulla terra battuta, oltre al Tour de France e alla pallamano, nello stesso accesso." },
    { q: "Quanto risparmio rispetto al mio operatore?", a: "Una famiglia con calcio e cinema paga diverse decine di euro al mese sommando pacchetto, piattaforma sportiva e noleggio della box. Il piano annuale costa 60 €, cioè 5 €/mese." },
    { q: "Funziona con l'ADSL?", a: "Sì, in HD, che richiede circa 10 Mbps stabili. Per il 4K servono 25 Mbps, quindi con un ADSL al limite conviene restare in HD invece di forzare la risoluzione." },
    { q: "Posso guardare canali francesi dall'estero?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione, senza cambiare piano né pagare un supplemento." },
  ],
  cta: "Inizia in Francia",
};

// --- es/it for /iptv-deutschland --------------------------------------------
content["iptv-deutschland"].es = {
  metaTitle: "IPTV Alemania — Bundesliga y canales alemanes en 4K",
  metaDesc:
    "IPTV en Alemania: Bundesliga, DFB-Pokal, canales públicos y privados en 4K, más 70.000 películas. Sin permanencia ni receptor, desde 5 €/mes.",
  eyebrow: "IPTV Alemania · Bundesliga",
  h1: "IPTV en Alemania",
  h1Accent: "Bundesliga y canales alemanes",
  intro:
    "Canales públicos y privados alemanes, la Bundesliga, la DFB-Pokal y las competiciones europeas en un solo acceso, con 70.000 películas y 18.000 series en 4K. Sin permanencia, desde 5 €/mes.",
  features: [
    { h: "Públicos y privados", p: "Generalistas, regionales, informativos 24 h y temáticos." },
    { h: "Bundesliga", p: "Más DFB-Pokal, Champions League y grandes ligas europeas." },
    { h: "Sin permanencia", p: "Ni contrato de 12 o 24 meses ni preaviso que recordar." },
    { h: "En toda Alemania", p: "Llega por internet: no depende del cable de tu edificio." },
  ],
  sections: [
    { h: "Qué cubre el IPTV en Alemania", p: "El panorama alemán combina un sistema público muy sólido con cadenas privadas y una fuerte presencia regional, y los derechos deportivos están repartidos entre varias plataformas de pago. Una suscripción de ATV Corner reúne los canales generalistas públicos y privados, los informativos de veinticuatro horas, la programación regional y los canales temáticos junto a más de 66.000 canales internacionales, en un único acceso." },
    { h: "La Bundesliga y el fútbol europeo", p: "La Bundesliga y la 2. Bundesliga, la DFB-Pokal y las competiciones europeas de clubes con la Champions League y la Europa League. A eso se suman las grandes ligas del continente, que en la oferta alemana tradicional suelen requerir una plataforma adicional. Nuestros 4.200 canales deportivos están incluidos en cualquier plan, en lugar de venderse como opción deportiva facturada por separado." },
    { h: "Lo que pagas hoy", p: "Un hogar alemán que quiere fútbol completo y cine paga habitualmente varias decenas de euros al mes, sumando el paquete del operador, una o dos plataformas deportivas para cubrir los partidos repartidos entre emisores distintos, y el alquiler del receptor. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que devolver al darse de baja." },
    { h: "El canon de radiodifusión", p: "Conviene ser claro porque genera dudas. El Rundfunkbeitrag es una tasa obligatoria por vivienda, establecida por ley e independiente de qué servicios de televisión contrates o de si ves o no la televisión pública. Cambiar de proveedor no altera esa obligación en ningún sentido, y cualquiera que insinúe lo contrario te está desinformando. Es un asunto que corresponde a la autoridad competente, no a nosotros." },
    { h: "Canales internacionales, el punto fuerte", p: "Alemania tiene una de las poblaciones de origen extranjero más grandes de Europa, y ahí es donde un catálogo internacional amplio marca la diferencia real frente a un operador nacional. En el mismo acceso conviven canales turcos, árabes, polacos, rusos, italianos, españoles y de muchos otros países, junto a los alemanes. Es exactamente el terreno donde los paquetes convencionales se quedan cortos o cobran suplementos por cada idioma añadido." },
    { h: "Qué conexión necesitas", p: "Unos 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el televisor donde vas a ver y no en el router. La cobertura de fibra en Alemania sigue siendo desigual y muchas zonas dependen todavía de VDSL, así que conviene medir antes de contratar nada. Si tu línea va justa, quédate en HD en lugar de forzar 4K, y conecta el televisor por cable Ethernet siempre que sea posible." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores con Windows, macOS o Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su facilidad de configuración, IBO Player y VLC. Tus credenciales no están vinculadas a un aparato concreto." },
    { h: "Ver canales alemanes desde fuera", p: "Las mismas credenciales funcionan desde cualquier país con conexión a internet. Es un uso habitual entre alemanes que viven o trabajan en el extranjero y quieren seguir los informativos y la Bundesliga en su idioma, sin depender de qué operador local tenga acuerdos con las cadenas alemanas. No hace falta cambiar de plan ni pagar un suplemento por verlo fuera de Alemania." },
    { h: "Dejar tu proveedor sin quedarte sin nada", p: "El orden importa, porque los contratos alemanes suelen incluir un plazo mínimo y un preaviso formal. Activa primero la prueba gratuita de 24 horas y compruébala durante una jornada de Bundesliga, no un martes por la mañana. Si convence, contrata un mes y convive unas semanas con tu servicio actual. Solo entonces cursa la baja por escrito, respetando el preaviso y devolviendo el receptor dentro del plazo para evitar cargos." },
    { h: "Cómo comprobarlo antes de pagar", p: "La prueba gratuita de 24 horas no pide tarjeta de crédito y da acceso al catálogo completo. El momento en que la actives decide lo que vale: elige deliberadamente una tarde de Bundesliga o una noche de Champions, porque es entonces cuando miles de espectadores piden el mismo flujo y la capacidad de los servidores se pone realmente a prueba. Comprueba que tus canales habituales estén y funcionen, que la guía de programación aparezca rellenada varios días y que la imagen aguante diez minutos seguidos de juego. Si esas tres comprobaciones salen bien en el peor momento posible, saldrán bien el resto del tiempo." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce, es decir 5 €/mes. Los cuatro planes incluyen el mismo catálogo de 66.000+ canales, 4.200 deportivos, 70.000 películas y 18.000 series en 4K/8K, con soporte 24/7. Sin permanencia y sin renovación automática: el acceso caduca solo. Garantía de devolución de 7 días desde la compra." },
  ],
  faq: [
    { q: "¿Puedo ver la Bundesliga?", a: "Sí. Los 4.200 canales deportivos cubren la Bundesliga, la 2. Bundesliga, la DFB-Pokal y las competiciones europeas de clubes, incluidos en cualquier plan sin coste adicional." },
    { q: "¿Tengo que pagar el Rundfunkbeitrag igualmente?", a: "El canon de radiodifusión es una tasa obligatoria por vivienda, establecida por ley e independiente de los servicios de televisión que contrates. Cambiar de proveedor no altera esa obligación." },
    { q: "¿Hay canales en otros idiomas?", a: "Sí, y es uno de los puntos fuertes: canales turcos, árabes, polacos, rusos, italianos, españoles y de muchos otros países conviven con los alemanes en el mismo acceso." },
    { q: "¿Funciona con VDSL?", a: "Sí, en HD, que necesita unos 10 Mbps estables. Para 4K hacen falta 25 Mbps, así que con una línea justa conviene quedarse en HD." },
    { q: "¿Puedo ver canales alemanes desde el extranjero?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión, sin cambiar de plan ni pagar un suplemento." },
  ],
  cta: "Empezar en Alemania",
};

content["iptv-deutschland"].it = {
  metaTitle: "IPTV Germania — Bundesliga e canali tedeschi in 4K",
  metaDesc:
    "IPTV in Germania: Bundesliga, DFB-Pokal, canali pubblici e privati in 4K, più 70.000 film. Senza vincoli né ricevitore, da 5 €/mese.",
  eyebrow: "IPTV Germania · Bundesliga",
  h1: "IPTV in Germania",
  h1Accent: "Bundesliga e canali tedeschi",
  intro:
    "Canali pubblici e privati tedeschi, la Bundesliga, la DFB-Pokal e le competizioni europee in un solo accesso, con 70.000 film e 18.000 serie in 4K. Senza vincoli, da 5 €/mese.",
  features: [
    { h: "Pubblici e privati", p: "Generalisti, regionali, informazione 24 h e tematici." },
    { h: "Bundesliga", p: "Più DFB-Pokal, Champions League e grandi campionati europei." },
    { h: "Senza vincoli", p: "Né contratto da 12 o 24 mesi né preavviso da ricordare." },
    { h: "In tutta la Germania", p: "Arriva via internet: non dipende dal cavo del tuo edificio." },
  ],
  sections: [
    { h: "Cosa copre l'IPTV in Germania", p: "Il panorama tedesco combina un sistema pubblico molto solido con emittenti private e una forte presenza regionale, e i diritti sportivi sono divisi tra più piattaforme a pagamento. Un abbonamento ATV Corner riunisce i canali generalisti pubblici e privati, l'informazione ventiquattr'ore, la programmazione regionale e i canali tematici insieme a oltre 66.000 canali internazionali, in un unico accesso." },
    { h: "La Bundesliga e il calcio europeo", p: "La Bundesliga e la 2. Bundesliga, la DFB-Pokal e le competizioni europee per club con Champions League ed Europa League. A questi si aggiungono i maggiori campionati continentali, che nell'offerta tedesca tradizionale richiedono di norma una piattaforma aggiuntiva. I nostri 4.200 canali sportivi sono inclusi in qualsiasi piano, invece di essere venduti come opzione sport fatturata separatamente." },
    { h: "Quanto paghi oggi", p: "Una famiglia tedesca che vuole il calcio completo e il cinema paga abitualmente diverse decine di euro al mese, sommando il pacchetto dell'operatore, una o due piattaforme sportive per coprire le partite distribuite tra emittenti diverse, e il noleggio del ricevitore. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da restituire alla disdetta." },
    { h: "Il canone di radiodiffusione", p: "Conviene essere chiari perché genera dubbi. Il Rundfunkbeitrag è un contributo obbligatorio per abitazione, stabilito per legge e indipendente da quali servizi televisivi sottoscrivi o dal fatto che tu guardi o meno la televisione pubblica. Cambiare fornitore non modifica quell'obbligo in alcun senso, e chiunque lasci intendere il contrario ti sta disinformando. È una materia che compete all'autorità competente, non a noi." },
    { h: "Canali internazionali, il punto di forza", p: "La Germania ha una delle popolazioni di origine straniera più numerose d'Europa, ed è lì che un catalogo internazionale ampio fa la differenza reale rispetto a un operatore nazionale. Nello stesso accesso convivono canali turchi, arabi, polacchi, russi, italiani, spagnoli e di molti altri paesi, accanto a quelli tedeschi. È esattamente il terreno su cui i pacchetti convenzionali restano indietro o applicano supplementi per ogni lingua aggiunta." },
    { h: "Quale connessione serve", p: "Circa 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul televisore su cui guarderai e non sul router. La copertura in fibra in Germania resta disomogenea e molte zone dipendono ancora dal VDSL, quindi conviene misurare prima di sottoscrivere qualsiasi cosa. Se la tua linea è al limite, resta in HD invece di forzare il 4K, e collega il televisore via cavo Ethernet ogni volta che è possibile." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer con Windows, macOS o Linux. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la facilità di configurazione, IBO Player e VLC. Le tue credenziali non sono legate a un apparecchio specifico." },
    { h: "Guardare canali tedeschi dall'estero", p: "Le stesse credenziali funzionano da qualsiasi paese con una connessione internet. È un uso abituale tra tedeschi che vivono o lavorano all'estero e vogliono seguire i telegiornali e la Bundesliga nella propria lingua, senza dipendere da quale operatore locale abbia accordi con le emittenti tedesche. Non serve cambiare piano né pagare un supplemento per guardarlo fuori dalla Germania." },
    { h: "Lasciare il fornitore senza restare senza nulla", p: "L'ordine conta, perché i contratti tedeschi prevedono di norma una durata minima e un preavviso formale. Attiva prima la prova gratuita di 24 ore e verificala durante una giornata di Bundesliga, non un martedì mattina. Se convince, acquista un mese e convivi qualche settimana con il servizio attuale. Solo allora invia la disdetta per iscritto, rispettando il preavviso e restituendo il ricevitore entro i termini per evitare addebiti." },
    { h: "Come verificarlo prima di pagare", p: "La prova gratuita di 24 ore non richiede carta di credito e dà accesso al catalogo completo. Il momento in cui la attivi decide quanto vale: scegli deliberatamente un pomeriggio di Bundesliga o una serata di Champions, perché è allora che migliaia di spettatori richiedono lo stesso flusso e la capacità dei server viene messa davvero alla prova. Verifica che i tuoi canali abituali ci siano e funzionino, che la guida ai programmi risulti popolata su più giorni e che l'immagine regga dieci minuti consecutivi di gioco. Se queste tre verifiche passano nel momento peggiore possibile, passeranno anche nel resto del tempo." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici, cioè 5 €/mese. Tutti e quattro i piani includono lo stesso catalogo di 66.000+ canali, 4.200 sportivi, 70.000 film e 18.000 serie in 4K/8K, con assistenza 24/7. Senza vincoli e senza rinnovo automatico: l'accesso scade da solo. Garanzia di rimborso di 7 giorni dall'acquisto." },
  ],
  faq: [
    { q: "Posso guardare la Bundesliga?", a: "Sì. I 4.200 canali sportivi coprono Bundesliga, 2. Bundesliga, DFB-Pokal e competizioni europee per club, inclusi in qualsiasi piano senza costi aggiuntivi." },
    { q: "Devo pagare comunque il Rundfunkbeitrag?", a: "Il canone di radiodiffusione è un contributo obbligatorio per abitazione, stabilito per legge e indipendente dai servizi televisivi che sottoscrivi. Cambiare fornitore non modifica quell'obbligo." },
    { q: "Ci sono canali in altre lingue?", a: "Sì, ed è uno dei punti di forza: canali turchi, arabi, polacchi, russi, italiani, spagnoli e di molti altri paesi convivono con quelli tedeschi nello stesso accesso." },
    { q: "Funziona con il VDSL?", a: "Sì, in HD, che richiede circa 10 Mbps stabili. Per il 4K servono 25 Mbps, quindi con una linea al limite conviene restare in HD." },
    { q: "Posso guardare canali tedeschi dall'estero?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione, senza cambiare piano né pagare un supplemento." },
  ],
  cta: "Inizia in Germania",
};

// --- cross-locale for the two new market pages ------------------------------
content["iptv-espana"].it = {
  metaTitle: "IPTV Spagna — 66.000 canali, LaLiga e 4K da 5 €/mese",
  metaDesc:
    "IPTV in Spagna con 66.000+ canali: LaLiga, Champions, canali spagnoli e 70.000 film in 4K. Attivazione in 5 minuti, prova gratuita di 24 ore.",
  eyebrow: "IPTV Spagna · Da 5 €/mese",
  h1: "IPTV in Spagna",
  h1Accent: "canali e calcio in 4K",
  intro:
    "Canali spagnoli, LaLiga e competizioni europee, più 70.000 film e 18.000 serie in 4K, su un unico accesso. Senza vincoli, senza installatore e senza decoder: attivo su WhatsApp in meno di cinque minuti da 5 €/mese.",
  features: [
    { h: "Canali spagnoli", p: "Generalisti, regionali, informazione, bambini e tematici." },
    { h: "LaLiga e Champions", p: "4.200 canali sportivi con calcio nazionale ed europeo." },
    { h: "Senza vincoli", p: "Nessun contratto da 12 o 24 mesi né preavviso da ricordare." },
    { h: "Attivo in 5 minuti", p: "Credenziali su WhatsApp, sull'apparecchio che già possiedi." },
  ],
  cover: "/blog/iptv-espana-main-en.jpg",
  image: {
    src: "/blog/iptv-espana-body-en.jpg",
    alt: "Cosa copre l'IPTV in Spagna: canali generalisti e regionali, 4.200 canali sportivi con LaLiga e Champions, e 70.000 film in 4K/8K.",
    caption: "Canali spagnoli, sport e videoteca in un solo accesso.",
  },
  sections: [
    { h: "Cosa copre l'IPTV in Spagna", p: "Un abbonamento ATV Corner riunisce in un unico elenco ciò che sul mercato spagnolo è normalmente diviso tra più contratti. Ci sono i canali generalisti in chiaro, le emittenti regionali delle comunità autonome, l'informazione ventiquattr'ore, i canali per bambini e un'ampia offerta tematica di documentari, cinema e serie. A questi si aggiungono oltre 66.000 canali internazionali, così puoi seguire la televisione di altri paesi sullo stesso accesso." },
    { h: "Calcio: LaLiga e competizioni europee", p: "Il calcio è il motivo per cui la maggior parte delle famiglie spagnole paga la televisione, ed è anche ciò che fa lievitare la bolletta, perché i diritti sono ripartiti e le opzioni sportive vengono fatturate a parte rispetto al pacchetto base. I nostri 4.200 canali sportivi comprendono LaLiga, la Champions League, l'Europa League, la Copa del Rey e i maggiori campionati europei, con Premier League, Serie A, Bundesliga e Ligue 1. Lo sport è incluso in ogni piano." },
    { h: "Quanto paghi oggi e quanto pagheresti", p: "Sul mercato spagnolo, un pacchetto che unisca calcio e cinema si colloca abitualmente su diverse decine di euro al mese, a cui si aggiunge di norma il noleggio del decoder e, spesso, una tariffa promozionale che sale automaticamente dopo il primo anno. Un piano annuale ATV Corner costa 60 €, cioè 5 €/mese, con lo sport incluso e nessun apparecchio da noleggiare. Il confronto onesto non è con l'offerta d'ingresso ma con la bolletta del tredicesimo mese." },
    { h: "Oltre la penisola: isole ed espatriati", p: "L'IPTV arriva via internet, quindi non dipende dalla copertura di un'antenna né dalla posa della fibra di un operatore specifico nella tua zona. Questo è particolarmente utile fuori dalla penisola, dove l'offerta commerciale è più limitata, e per gli spagnoli che vivono all'estero: con le stesse credenziali puoi guardare i canali spagnoli da qualsiasi paese, senza cambiare abbonamento e senza dipendere da quale operatore locale abbia accordi con le emittenti." },
    { h: "Quale connessione serve in Spagna", p: "La regola pratica è 10 Mbps stabili per l'HD e 25 Mbps per il 4K, misurati sul dispositivo su cui guarderai e non sul router. La copertura in fibra spagnola è tra le migliori d'Europa, quindi la maggior parte delle famiglie soddisfa ampiamente quel requisito; il problema, quando compare, non è quasi mai la velocità contrattuale ma il Wi-Fi. Se il televisore è lontano dal router, un cavo Ethernet risolve più di qualsiasi impostazione dell'app." },
    { h: "Su quali dispositivi funziona", p: "Smart TV Samsung, LG e Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, ricevitori Enigma2 e computer con Windows, macOS o Linux. Le app consigliate sono TiviMate per l'interfaccia da televisore, IPTV Smarters Pro per la semplicità, IBO Player e VLC per un uso occasionale. Le tue credenziali non sono legate a un apparecchio, quindi puoi iniziare una partita in salotto e finirla sul telefono." },
    { h: "Lasciare l'operatore senza restare senza TV", p: "L'ordine conta, perché i contratti spagnoli prevedono di norma un preavviso e talvolta un vincolo ancora attivo. Attiva prima la prova gratuita di 24 ore e verificala in orario di punta o durante una partita. Se convince, acquista un mese di IPTV e convivi qualche settimana con entrambi i servizi. Solo allora invia la disdetta, controllando prima le condizioni del contratto per non pagare penali." },
    { h: "Come verificarlo prima di pagare", p: "Richiedi la prova gratuita di 24 ore, che non necessita di carta di credito, e attivala deliberatamente quando guardi davvero la televisione: all'ora della partita, non un martedì mattina. Verifica che i tuoi canali abituali siano presenti e funzionanti, che la guida ai programmi sia popolata su più giorni e che l'immagine regga dieci minuti consecutivi di calcio. Poi l'abbonamento costa da 15 € al mese oppure 5 €/mese sul piano annuale." },
    { h: "Prezzi e condizioni", p: "Quattro durate: 15 € per un mese, 30 € per tre, 50 € per sei e 60 € per dodici. Tutti e quattro i piani includono esattamente lo stesso catalogo di 66.000+ canali, la stessa qualità 4K/8K e la stessa assistenza 24/7; l'unica cosa che cambia è il costo mensile. Non c'è rinnovo automatico, quindi l'accesso scade da solo e sei tu a decidere se tornare. La valutazione media del servizio è di 4,9/5 su oltre 2.800 recensioni, con 12.000 abbonati." },
  ],
  faq: [
    { q: "L'IPTV funziona in Spagna?", a: "Sì. Arriva tramite la tua connessione internet, quindi funziona in tutta la Spagna, Canarie e Baleari comprese, senza antenna né decoder. Bastano 10 Mbps stabili per l'HD e 25 Mbps per il 4K." },
    { q: "Posso guardare LaLiga e la Champions League?", a: "Sì. I 4.200 canali sportivi comprendono LaLiga, Champions, Europa League, Copa del Rey e i grandi campionati europei, senza costi aggiuntivi sul piano scelto." },
    { q: "Quanto costa l'IPTV in Spagna?", a: "Da 15 € per un mese a 60 € per dodici, cioè 5 €/mese sul piano annuale. Lo sport è incluso, non fatturato a parte come accade nei pacchetti tradizionali." },
    { q: "Posso guardare canali spagnoli dall'estero?", a: "Sì. Le stesse credenziali funzionano da qualsiasi paese con una connessione internet, senza cambiare abbonamento né dipendere dall'operatore locale." },
    { q: "Ci sono vincoli o penali di disdetta?", a: "No. Nessun vincolo e nessun rinnovo automatico: l'accesso scade da solo. I primi sette giorni sono coperti da una garanzia di rimborso integrale." },
  ],
  cta: "Inizia in Spagna",
};

content["iptv-italia"].es = {
  metaTitle: "IPTV Italia — 66.000 canales, Serie A y 4K desde 5 €/mes",
  metaDesc:
    "IPTV en Italia con 66.000+ canales: Serie A, Champions, canales italianos y 70.000 películas en 4K. Activación en 5 minutos, prueba gratis de 24 h.",
  eyebrow: "IPTV Italia · Desde 5 €/mes",
  h1: "IPTV en Italia",
  h1Accent: "canales y fútbol en 4K",
  intro:
    "Canales italianos, la Serie A y las competiciones europeas, más 70.000 películas y 18.000 series en 4K, en un solo acceso. Sin permanencia, sin instalador y sin descodificador: activado por WhatsApp en menos de cinco minutos desde 5 €/mes.",
  features: [
    { h: "Canales italianos", p: "Generalistas, informativos, infantiles, deporte y temáticos." },
    { h: "Serie A y Champions", p: "4.200 canales deportivos con fútbol nacional y europeo." },
    { h: "Sin permanencia", p: "Ningún contrato de 12 o 24 meses ni preaviso que recordar." },
    { h: "Activo en 5 minutos", p: "Credenciales por WhatsApp, sobre el equipo que ya tienes." },
  ],
  cover: "/blog/iptv-italia-main-en.jpg",
  image: {
    src: "/blog/iptv-italia-body-en.jpg",
    alt: "Lo que cubre el IPTV en Italia: canales generalistas y temáticos, 4.200 canales deportivos con Serie A y Champions, y 70.000 películas en 4K/8K.",
    caption: "Canales italianos, deporte y videoteca en un mismo acceso.",
  },
  sections: [
    { h: "Qué cubre el IPTV en Italia", p: "Una suscripción de ATV Corner reúne en una sola lista lo que en el mercado italiano suele estar repartido entre varios contratos. Están los canales generalistas en abierto, los informativos de veinticuatro horas, los infantiles y una amplia oferta temática de documentales, cine y series. A eso se suman más de 66.000 canales internacionales, así que puedes seguir televisión de otros países en el mismo acceso, un terreno que ningún operador nacional cubre bien." },
    { h: "Fútbol: Serie A y competiciones europeas", p: "El fútbol es el motivo por el que la mayoría de los hogares italianos paga televisión, y también el que más encarece la factura, porque los derechos están repartidos entre operadores distintos y seguir un campeonato completo suele exigir dos suscripciones. Nuestros 4.200 canales deportivos incluyen la Serie A, la Champions League, la Europa League, la Coppa Italia y las grandes ligas europeas, con Premier League, LaLiga, Bundesliga y Ligue 1." },
    { h: "Lo que pagas hoy y lo que pasarías a pagar", p: "En el mercado italiano, seguir el fútbol al completo y tener además cine y series suele implicar sumar varias suscripciones, con un total que se sitúa en varias decenas de euros al mes, a menudo con el alquiler del descodificador añadido y una tarifa promocional que sube tras el primer año. Un plan anual de ATV Corner cuesta 60 €, es decir 5 €/mes, con el deporte incluido y sin equipo que alquilar." },
    { h: "Donde la televisión tradicional llega mal", p: "El IPTV viaja por internet, así que no depende de la orientación de una parabólica ni de la cobertura de la televisión digital terrestre en tu zona. Eso importa sobre todo en zonas de montaña y en núcleos pequeños, donde la recepción terrestre ha sido históricamente más irregular, y para los italianos que viven en el extranjero: con las mismas credenciales puedes ver canales italianos desde cualquier país, sin depender de los acuerdos de un operador local." },
    { h: "Qué conexión necesitas en Italia", p: "La regla práctica son 10 Mbps estables para HD y 25 Mbps para 4K, medidos en el aparato donde vas a ver y no en el router. La cobertura de fibra italiana ha crecido mucho en los últimos años, pero sigue siendo desigual, así que conviene medir antes de contratar. Cuando aparecen problemas, la causa casi siempre es el Wi-Fi y no la velocidad contratada: si el televisor está lejos del router, un cable Ethernet resuelve más que cualquier ajuste." },
    { h: "En qué dispositivos funciona", p: "Smart TV Samsung, LG y Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Android, MAG Box, receptores Enigma2 y ordenadores con Windows, macOS o Linux. Las aplicaciones recomendadas son TiviMate por su interfaz de televisión, IPTV Smarters Pro por su sencillez de configuración, IBO Player y VLC para uso puntual. Las credenciales no están atadas a un aparato, así que puedes empezar un partido en el salón y terminarlo en el móvil." },
    { h: "Dejar el operador sin quedarte sin televisión", p: "El orden importa, porque los contratos italianos suelen incluir un preaviso y a veces una permanencia todavía activa. Activa primero la prueba gratuita de 24 horas y compruébala en horario punta o durante un partido. Si convence, contrata un mes de IPTV y convive unas semanas con los dos servicios. Solo entonces cursa la baja, revisando antes las condiciones del contrato para evitar penalizaciones." },
    { h: "Cómo verificarlo antes de pagar", p: "Pide la prueba gratuita de 24 horas, que no requiere tarjeta de crédito, y actívala deliberadamente cuando de verdad ves la televisión: a la hora del partido, no un martes por la mañana. Comprueba que tus canales habituales estén presentes y funcionen, que la guía de programación esté rellenada varios días y que la imagen aguante diez minutos seguidos de fútbol. Después, la suscripción cuesta desde 15 € al mes o 5 €/mes en el plan anual." },
    { h: "Precios y condiciones", p: "Cuatro duraciones: 15 € por un mes, 30 € por tres, 50 € por seis y 60 € por doce. Los cuatro planes incluyen exactamente el mismo catálogo de 66.000+ canales, la misma calidad 4K/8K y el mismo soporte 24/7; lo único que cambia es el coste mensual. No hay renovación automática, así que el acceso caduca solo y decides tú si vuelves. La valoración media del servicio es de 4,9/5 sobre más de 2.800 reseñas, con 12.000 suscriptores." },
  ],
  faq: [
    { q: "¿Funciona el IPTV en Italia?", a: "Sí. Llega por tu conexión a internet, así que funciona en toda Italia sin parabólica ni descodificador, incluidas las zonas donde la TDT se recibe mal. Bastan 10 Mbps estables para HD y 25 Mbps para 4K." },
    { q: "¿Puedo ver la Serie A y la Champions League?", a: "Sí. Los 4.200 canales deportivos incluyen Serie A, Champions League, Europa League, Coppa Italia y las grandes ligas europeas, sin coste adicional sobre el plan que elijas." },
    { q: "¿Cuánto cuesta el IPTV en Italia?", a: "De 15 € por un mes a 60 € por doce, es decir 5 €/mes en el plan anual. El deporte está incluido en lugar de facturado aparte, como suele ocurrir." },
    { q: "¿Puedo ver canales italianos desde el extranjero?", a: "Sí. Las mismas credenciales funcionan desde cualquier país con conexión a internet, sin cambiar de suscripción ni depender de un operador local." },
    { q: "¿Hay permanencia o penalización por baja?", a: "No. Sin permanencia y sin renovación automática: el acceso caduca solo. Los siete primeros días están cubiertos por una garantía de devolución íntegra." },
  ],
  cta: "Empezar en Italia",
};

export function getSeoContent(page: Page, locale: Locale): SeoContent {
  const byLocale = content[page];
  const hit = byLocale[locale];
  if (hit) return hit;
  for (const alt of FALLBACK[locale] ?? []) {
    const f = byLocale[alt];
    if (f) return f;
  }
  // Every page is authored in at least one locale; this is unreachable in practice.
  return Object.values(byLocale)[0] as SeoContent;
}

/** Public alias — the union of every SEO landing page slug. */
export type SeoPage = Page;

export const seoPages: Page[] = [
  "iptv-premium",
  "iptv-8k",
  "iptv-4k",
  "m3u-playlist",
  "xtream-codes",
  "iptv-sport",
  "best-iptv-alternatives",
  "iptv-free-trial",
  "best-iptv-service",
  "iptv-subscription",
  "iptv-firestick",
  "iptv-smarters-pro",
  "cable-tv-alternative",
  "iptv-deutschland",
  "iptv-roku",
  "iptv-usa",
  "iptv-apple-tv",
  "iptv-android-tv",
  "iptv-mag-box",
  "iptv-canada",
  "iptv-uk",
  "iptv-france",
];
