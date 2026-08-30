import "server-only";
import type { ToolMeta } from "./types";

export { leagues, leagueSlugs, getLeague } from "./leagues";
export { countries, countrySlugs, getCountry } from "./countries";
export { teams, teamSlugs, getTeam } from "./teams";
export { devices, deviceIds, getDevice } from "./devices";
export { comparisonProviders } from "./comparison";
export type {
  LeagueData,
  CountryData,
  TeamData,
  DeviceCategory,
  ComparisonProvider,
  ToolMeta,
} from "./types";

export const tools: ToolMeta[] = [
  {
    slug: "device-compatibility",
    category: "interactive",
    icon: "tv",
    title: {
      fr: "Vérificateur de compatibilité",
      en: "Device Compatibility Checker",
      de: "Geräte-Kompatibilitätsprüfer",
      es: "Verificador de compatibilidad",
      it: "Verificatore di compatibilità",
    },
    description: {
      fr: "Choisissez votre appareil et obtenez le guide d'installation exact en 3 min.",
      en: "Pick your device and get the exact 3-minute setup guide.",
      de: "Wählen Sie Ihr Gerät und erhalten Sie die genaue 3-Minuten-Anleitung.",
      es: "Elige tu dispositivo y obtén la guía de instalación exacta en 3 minutos.",
      it: "Scegli il tuo dispositivo e ottieni la guida all'installazione esatta in 3 minuti.",
    },
    metaTitle: {
      fr: "Compatibilité IPTV ATV Corner — Smart TV, Fire Stick, iPhone, Android",
      en: "ATV Corner Device Compatibility — Smart TV, Fire Stick, iPhone, Android",
      de: "ATV-Corner-Gerätekompatibilität — Smart TV, Fire Stick, iPhone, Android",
      es: "Compatibilidad de dispositivos ATV Corner — Smart TV, Fire Stick, iPhone, Android",
      it: "Compatibilità dispositivi ATV Corner — Smart TV, Fire Stick, iPhone, Android",
    },
    metaDesc: {
      fr: "Vérifiez si votre appareil est compatible avec ATV Corner. Smart TV, Fire Stick, Android TV, Apple TV, iPhone, Android, PC — toutes les instructions pas à pas.",
      en: "Check if your device works with ATV Corner. Smart TV, Fire Stick, Android TV, Apple TV, iPhone, Android, PC — step-by-step instructions.",
      de: "Prüfen Sie, ob Ihr Gerät mit ATV Corner funktioniert. Smart TV, Fire Stick, Android TV, Apple TV, iPhone, Android, PC — Schritt-für-Schritt-Anleitung.",
      es: "Comprueba si tu dispositivo es compatible con ATV Corner. Smart TV, Fire Stick, Android TV, Apple TV, iPhone, Android y PC, con instrucciones paso a paso.",
      it: "Verifica se il tuo dispositivo è compatibile con ATV Corner. Smart TV, Fire Stick, Android TV, Apple TV, iPhone, Android e PC, con istruzioni passo passo.",
    },
  },
  {
    slug: "speed-test",
    category: "interactive",
    icon: "gauge",
    title: {
      fr: "Test de débit streaming",
      en: "Streaming Speed Test",
      de: "Streaming-Geschwindigkeitstest",
      es: "Test de velocidad para streaming",
      it: "Test di velocità per lo streaming",
    },
    description: {
      fr: "Mesurez si votre connexion supporte le 4K, HD ou SD pour le football en direct.",
      en: "Check whether your connection supports 4K, HD or SD live football.",
      de: "Prüfen Sie, ob Ihre Verbindung 4K, HD oder SD für Live-Fußball unterstützt.",
      es: "Comprueba si tu conexión soporta fútbol en directo en 4K, HD o SD.",
      it: "Verifica se la tua connessione regge il calcio in diretta in 4K, HD o SD.",
    },
    metaTitle: {
      fr: "Test de débit streaming football — 4K, HD, SD",
      en: "Football Streaming Speed Test — 4K, HD, SD",
      de: "Fußball-Streaming-Geschwindigkeitstest — 4K, HD, SD",
      es: "Test de velocidad para fútbol en streaming — 4K, HD y SD",
      it: "Test di velocità per il calcio in streaming — 4K, HD e SD",
    },
    metaDesc: {
      fr: "Calculez si votre connexion internet supporte le football en 4K, HD ou SD. Recommandations de débit, dépannage, et conseils ATV Corner.",
      en: "Calculate whether your internet supports football in 4K, HD or SD. Bandwidth recommendations, troubleshooting, ATV Corner tips.",
      de: "Berechnen Sie, ob Ihr Internet Fußball in 4K, HD oder SD unterstützt. Bandbreitenempfehlungen, Fehlerbehebung, ATV-Corner-Tipps.",
      es: "Calcula si tu conexión soporta el fútbol en 4K, HD o SD. Recomendaciones de ancho de banda, resolución de problemas y consejos de ATV Corner.",
      it: "Calcola se la tua connessione regge il calcio in 4K, HD o SD. Consigli sulla banda, risoluzione dei problemi e suggerimenti di ATV Corner.",
    },
  },
  {
    slug: "recommender",
    category: "interactive",
    icon: "sparkles",
    title: {
      fr: "Quiz : trouvez votre abonnement",
      en: "Quiz: Find your subscription",
      de: "Quiz: Finden Sie Ihr Abo",
      es: "Test: encuentra tu suscripción",
      it: "Quiz: trova il tuo abbonamento",
    },
    description: {
      fr: "60 secondes pour trouver le plan ATV Corner idéal selon vos clubs et votre budget.",
      en: "60 seconds to find the right ATV Corner plan for your clubs and budget.",
      de: "60 Sekunden, um den passenden ATV-Corner-Plan zu finden.",
      es: "60 segundos para encontrar el plan de ATV Corner que encaja con tus equipos y tu presupuesto.",
      it: "60 secondi per trovare il piano ATV Corner adatto alle tue squadre e al tuo budget.",
    },
    metaTitle: {
      fr: "Quiz abonnement football — Trouvez le bon plan",
      en: "Football Subscription Quiz — Find Your Plan",
      de: "Fußball-Abo-Quiz — Finden Sie Ihren Plan",
      es: "Test de suscripción de fútbol — encuentra tu plan",
      it: "Quiz sull'abbonamento calcio — trova il tuo piano",
    },
    metaDesc: {
      fr: "Répondez à 6 questions pour trouver l'abonnement football qui colle à vos clubs, ligues, appareils et budget.",
      en: "Answer 6 questions to find the football subscription that matches your clubs, leagues, devices and budget.",
      de: "Beantworten Sie 6 Fragen, um das passende Fußball-Abo zu finden — Klubs, Ligen, Geräte, Budget.",
      es: "Responde a 6 preguntas para encontrar la suscripción de fútbol que encaja con tus equipos, ligas, dispositivos y presupuesto.",
      it: "Rispondi a 6 domande per trovare l'abbonamento calcio adatto alle tue squadre, ai campionati, ai dispositivi e al budget.",
    },
  },
  {
    slug: "comparison",
    category: "comparison",
    icon: "scales",
    title: {
      fr: "Comparatif abonnements football",
      en: "Football subscription comparison",
      de: "Fußball-Abo-Vergleich",
      es: "Comparativa de suscripciones de fútbol",
      it: "Confronto degli abbonamenti calcio",
    },
    description: {
      fr: "ATV Corner vs DAZN, Sky, beIN, Canal+, Movistar. Comparaison complète.",
      en: "ATV Corner vs DAZN, Sky, beIN, Canal+, Movistar. Full comparison.",
      de: "ATV Corner gegen DAZN, Sky, beIN, Canal+, Movistar. Vollständiger Vergleich.",
      es: "ATV Corner frente a DAZN, Sky, beIN, Canal+ y Movistar. Comparativa completa.",
      it: "ATV Corner contro DAZN, Sky, beIN, Canal+ e Movistar. Confronto completo.",
    },
    metaTitle: {
      fr: "Comparatif abonnements football Europe 2026",
      en: "Best Football Streaming Service Europe 2026",
      de: "Bester Fußball-Streaming-Dienst Europa 2026",
      es: "Mejor servicio de fútbol en streaming en Europa 2026",
      it: "Miglior servizio di calcio in streaming in Europa 2026",
    },
    metaDesc: {
      fr: "Comparaison honnête : ATV Corner vs DAZN, Sky Sports, beIN, Canal+, Movistar+. Prix, ligues couvertes, qualité, appareils, pays.",
      en: "Honest comparison: ATV Corner vs DAZN, Sky Sports, beIN, Canal+, Movistar+. Price, leagues, quality, devices, countries.",
      de: "Ehrlicher Vergleich: ATV Corner gegen DAZN, Sky Sports, beIN, Canal+, Movistar+. Preis, Ligen, Qualität, Geräte, Länder.",
      es: "Comparativa honesta: ATV Corner frente a DAZN, Sky Sports, beIN, Canal+ y Movistar+. Precio, ligas, calidad, dispositivos y países.",
      it: "Confronto onesto: ATV Corner contro DAZN, Sky Sports, beIN, Canal+ e Movistar+. Prezzo, campionati, qualità, dispositivi e paesi.",
    },
  },
];
