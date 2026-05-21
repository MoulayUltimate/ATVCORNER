import "server-only";
import type { DeviceCategory } from "./types";

export const devices: DeviceCategory[] = [
  {
    id: "smart-tv",
    name: { fr: "Smart TV", en: "Smart TV", de: "Smart TV" },
    os: "Tizen / webOS / Android TV",
    compatible: true,
    apps: ["Smart STB", "IBO Player", "IPTV Smarters Pro", "Sparkle TV"],
    i18n: {
      fr: {
        summary: "Toutes les Smart TV récentes (Samsung Tizen, LG webOS, Sony / Philips Android TV) sont 100 % compatibles. Installation en 3 minutes via l'app store de la TV.",
        steps: [
          "Allumez votre Smart TV et ouvrez le store d'applications",
          "Recherchez « Smart STB » (Samsung/LG) ou « IBO Player » (Android TV)",
          "Installez et notez votre adresse MAC affichée à l'écran",
          "Envoyez la MAC à ATV Corner — votre playlist est chargée en <5 min",
          "Lancez l'app : 66 000 chaînes et VOD sont disponibles",
        ],
        pros: ["Aucun appareil supplémentaire", "Télécommande de TV native", "4K HDR pris en charge sur les modèles 2020+"],
      },
      en: {
        summary: "All recent Smart TVs (Samsung Tizen, LG webOS, Sony / Philips Android TV) are 100 % compatible. 3-minute setup via the TV's app store.",
        steps: [
          "Turn on your Smart TV and open the app store",
          "Search for « Smart STB » (Samsung/LG) or « IBO Player » (Android TV)",
          "Install and note your MAC address shown on-screen",
          "Send the MAC to ATV Corner — playlist loads in <5 min",
          "Launch the app: 66,000 channels and VOD ready",
        ],
        pros: ["No extra hardware", "Native TV remote", "4K HDR supported on 2020+ models"],
      },
      de: {
        summary: "Alle aktuellen Smart TVs (Samsung Tizen, LG webOS, Sony / Philips Android TV) sind zu 100 % kompatibel. 3-Minuten-Setup über den TV-App-Store.",
        steps: [
          "Smart TV einschalten und den App-Store öffnen",
          "Nach „Smart STB\u201C (Samsung/LG) oder „IBO Player\u201C (Android TV) suchen",
          "Installieren und die angezeigte MAC-Adresse notieren",
          "MAC an ATV Corner senden — Playlist lädt in <5 Min",
          "App starten: 66.000 Sender und VOD bereit",
        ],
        pros: ["Keine Zusatzhardware", "Native TV-Fernbedienung", "4K HDR auf 2020+ Modellen"],
      },
    },
  },
  {
    id: "fire-stick",
    name: { fr: "Amazon Fire TV Stick", en: "Amazon Fire TV Stick", de: "Amazon Fire TV Stick" },
    os: "Fire OS (Android-based)",
    compatible: true,
    apps: ["IPTV Smarters Pro", "TiviMate", "IBO Player"],
    setupSlug: "fire-stick",
    i18n: {
      fr: {
        summary: "Le Fire Stick est le meilleur rapport qualité/prix pour ajouter l'IPTV à n'importe quelle TV. 40€ et 5 minutes d'installation.",
        steps: [
          "Branchez le Fire Stick sur un port HDMI de votre TV",
          "Activez l'installation d'apps tierces (Paramètres → Mon Fire TV → Options développeur)",
          "Téléchargez Downloader, puis IPTV Smarters Pro via Downloader",
          "Ouvrez Smarters et entrez vos identifiants Xtream Codes",
          "C'est prêt — 4K HDR et Dolby Atmos sur Fire Stick 4K Max",
        ],
        pros: ["Portable (vacances, hôtel)", "4K HDR sur Fire Stick 4K Max", "TiviMate compatible"],
      },
      en: {
        summary: "Fire Stick is the best value way to add IPTV to any TV. €40 and 5-minute setup.",
        steps: [
          "Plug the Fire Stick into your TV's HDMI port",
          "Enable sideloading (Settings → My Fire TV → Developer Options)",
          "Install Downloader, then IPTV Smarters Pro via Downloader",
          "Open Smarters and enter your Xtream Codes credentials",
          "Ready — 4K HDR and Dolby Atmos on Fire Stick 4K Max",
        ],
        pros: ["Portable (holidays, hotel)", "4K HDR on Fire Stick 4K Max", "TiviMate compatible"],
      },
      de: {
        summary: "Fire Stick ist die preiswerteste Möglichkeit, IPTV auf jedem TV nachzurüsten. 40€ und 5-Minuten-Setup.",
        steps: [
          "Fire Stick in den HDMI-Port des TVs stecken",
          "Sideloading aktivieren (Einstellungen → Mein Fire TV → Entwickleroptionen)",
          "Downloader installieren, dann IPTV Smarters Pro über Downloader",
          "Smarters öffnen und Xtream-Codes-Zugangsdaten eingeben",
          "Fertig — 4K HDR und Dolby Atmos auf Fire Stick 4K Max",
        ],
        pros: ["Portabel (Urlaub, Hotel)", "4K HDR auf Fire Stick 4K Max", "TiviMate-kompatibel"],
      },
    },
  },
  {
    id: "android-tv",
    name: { fr: "Android TV / Google TV", en: "Android TV / Google TV", de: "Android TV / Google TV" },
    os: "Android TV 11+",
    compatible: true,
    apps: ["TiviMate", "IPTV Smarters Pro", "IBO Player", "OTT Navigator"],
    setupSlug: "android-tv",
    i18n: {
      fr: {
        summary: "Android TV (NVIDIA Shield, Chromecast with Google TV, Mi Box, Onn) est la plateforme la plus puissante pour l'IPTV. TiviMate y est natif.",
        steps: [
          "Ouvrez le Play Store sur votre Android TV",
          "Recherchez « TiviMate IPTV Player » et installez",
          "Lancez TiviMate → Ajouter une playlist → Xtream Codes",
          "Entrez vos identifiants ATV Corner",
          "EPG et catégories chargés automatiquement",
        ],
        pros: ["TiviMate (la référence des lecteurs)", "EPG riche", "4K HDR / Dolby Vision"],
      },
      en: {
        summary: "Android TV (NVIDIA Shield, Chromecast with Google TV, Mi Box, Onn) is the most powerful IPTV platform. TiviMate runs natively.",
        steps: [
          "Open the Play Store on your Android TV",
          "Search « TiviMate IPTV Player » and install",
          "Launch TiviMate → Add playlist → Xtream Codes",
          "Enter your ATV Corner credentials",
          "EPG and categories load automatically",
        ],
        pros: ["TiviMate (the reference player)", "Rich EPG", "4K HDR / Dolby Vision"],
      },
      de: {
        summary: "Android TV (NVIDIA Shield, Chromecast mit Google TV, Mi Box, Onn) ist die leistungsstärkste IPTV-Plattform. TiviMate läuft nativ.",
        steps: [
          "Play Store auf Android TV öffnen",
          "Nach „TiviMate IPTV Player\u201C suchen und installieren",
          "TiviMate starten → Playlist hinzufügen → Xtream Codes",
          "ATV-Corner-Zugangsdaten eingeben",
          "EPG und Kategorien laden automatisch",
        ],
        pros: ["TiviMate (Referenz-Player)", "Reiche EPG", "4K HDR / Dolby Vision"],
      },
    },
  },
  {
    id: "apple-tv",
    name: { fr: "Apple TV 4K", en: "Apple TV 4K", de: "Apple TV 4K" },
    os: "tvOS 17+",
    compatible: true,
    apps: ["IPTV Smarters Pro", "iPlayTV", "Televizo"],
    i18n: {
      fr: {
        summary: "Apple TV 4K est l'option premium pour iOS users. Interface impeccable, 4K HDR Dolby Vision, intégration HomeKit.",
        steps: [
          "Ouvrez l'App Store sur Apple TV",
          "Recherchez « Smarters Player Lite »",
          "Installez et lancez l'app",
          "Choisissez Xtream Codes et entrez vos identifiants ATV Corner",
        ],
        pros: ["UI premium", "Dolby Vision + Atmos", "Siri remote"],
        cons: ["App store plus restrictif (moins de choix d'apps IPTV)"],
      },
      en: {
        summary: "Apple TV 4K is the premium option for iOS users. Polished UI, 4K HDR Dolby Vision, HomeKit integration.",
        steps: [
          "Open the App Store on Apple TV",
          "Search « Smarters Player Lite »",
          "Install and launch",
          "Choose Xtream Codes and enter your ATV Corner credentials",
        ],
        pros: ["Premium UI", "Dolby Vision + Atmos", "Siri remote"],
        cons: ["More restrictive app store (fewer IPTV apps)"],
      },
      de: {
        summary: "Apple TV 4K ist die Premium-Option für iOS-Nutzer. Polierte UI, 4K HDR Dolby Vision, HomeKit-Integration.",
        steps: [
          "App Store auf Apple TV öffnen",
          "Nach „Smarters Player Lite\u201C suchen",
          "Installieren und starten",
          "Xtream Codes wählen und ATV-Corner-Zugangsdaten eingeben",
        ],
        pros: ["Premium-UI", "Dolby Vision + Atmos", "Siri Remote"],
        cons: ["Restriktiverer App Store (weniger IPTV-Apps)"],
      },
    },
  },
  {
    id: "iphone",
    name: { fr: "iPhone / iPad", en: "iPhone / iPad", de: "iPhone / iPad" },
    os: "iOS 16+",
    compatible: true,
    apps: ["IPTV Smarters Pro", "GSE Smart IPTV", "Televizo"],
    i18n: {
      fr: {
        summary: "iPhone et iPad supportent l'IPTV nativement. AirPlay vers Apple TV pour la grande TV.",
        steps: [
          "Ouvrez l'App Store",
          "Téléchargez « IPTV Smarters Pro »",
          "Lancez l'app, ajoutez votre compte Xtream Codes ATV Corner",
          "Castez sur Apple TV via AirPlay si besoin",
        ],
        pros: ["Mobile partout", "AirPlay", "Synchronisation iCloud"],
      },
      en: {
        summary: "iPhone and iPad support IPTV natively. AirPlay to Apple TV for big-screen viewing.",
        steps: [
          "Open the App Store",
          "Download « IPTV Smarters Pro »",
          "Launch, add your ATV Corner Xtream Codes account",
          "AirPlay to Apple TV if needed",
        ],
        pros: ["Mobile anywhere", "AirPlay", "iCloud sync"],
      },
      de: {
        summary: "iPhone und iPad unterstützen IPTV nativ. AirPlay zum Apple TV für das große Bild.",
        steps: [
          "App Store öffnen",
          "„IPTV Smarters Pro\u201C herunterladen",
          "Starten, ATV-Corner-Xtream-Codes-Konto hinzufügen",
          "Bei Bedarf via AirPlay auf Apple TV streamen",
        ],
        pros: ["Mobil überall", "AirPlay", "iCloud-Sync"],
      },
    },
  },
  {
    id: "android-phone",
    name: { fr: "Smartphone Android", en: "Android phone", de: "Android-Smartphone" },
    os: "Android 10+",
    compatible: true,
    apps: ["IPTV Smarters Pro", "TiviMate Companion", "GSE Smart IPTV"],
    i18n: {
      fr: {
        summary: "Tout smartphone Android récent fait tourner les apps IPTV. Chromecast vers la TV en un clic.",
        steps: [
          "Ouvrez le Play Store",
          "Installez « IPTV Smarters Pro »",
          "Connectez-vous avec vos identifiants ATV Corner",
          "Castez vers Chromecast/Smart TV depuis l'app",
        ],
        pros: ["Mobile", "Chromecast", "Multi-écrans"],
      },
      en: {
        summary: "Any recent Android phone runs IPTV apps. One-click Chromecast to TV.",
        steps: [
          "Open the Play Store",
          "Install « IPTV Smarters Pro »",
          "Log in with your ATV Corner credentials",
          "Cast to Chromecast/Smart TV from the app",
        ],
        pros: ["Mobile", "Chromecast", "Multi-screen"],
      },
      de: {
        summary: "Jedes aktuelle Android-Smartphone lässt IPTV-Apps laufen. Ein-Klick-Chromecast zum TV.",
        steps: [
          "Play Store öffnen",
          "„IPTV Smarters Pro\u201C installieren",
          "Mit ATV-Corner-Zugangsdaten anmelden",
          "Aus der App auf Chromecast/Smart TV streamen",
        ],
        pros: ["Mobil", "Chromecast", "Multi-Screen"],
      },
    },
  },
  {
    id: "computer",
    name: { fr: "Ordinateur (Windows/Mac/Linux)", en: "Computer (Windows/Mac/Linux)", de: "Computer (Windows/Mac/Linux)" },
    os: "Windows 10+ / macOS 12+ / Linux",
    compatible: true,
    apps: ["VLC", "Kodi", "TiviMate (via émulateur)", "navigateur web"],
    i18n: {
      fr: {
        summary: "PC, Mac et Linux supportent l'IPTV via VLC, Kodi ou un navigateur. Idéal pour le streaming sur un grand écran.",
        steps: [
          "Téléchargez VLC ou Kodi (gratuit)",
          "Ouvrez votre lien M3U ou Xtream Codes",
          "Pour Kodi : installez l'add-on PVR IPTV Simple Client",
          "Ou utilisez directement le lecteur web ATV Corner",
        ],
        pros: ["Multi-OS", "VLC universel", "Lecteur web disponible"],
      },
      en: {
        summary: "PC, Mac and Linux support IPTV via VLC, Kodi or a browser. Ideal for big-screen streaming.",
        steps: [
          "Download VLC or Kodi (free)",
          "Open your M3U or Xtream Codes link",
          "For Kodi: install the PVR IPTV Simple Client add-on",
          "Or use the ATV Corner web player directly",
        ],
        pros: ["Multi-OS", "Universal VLC", "Web player available"],
      },
      de: {
        summary: "PC, Mac und Linux unterstützen IPTV via VLC, Kodi oder Browser. Ideal für großes Bild am Computer.",
        steps: [
          "VLC oder Kodi herunterladen (kostenlos)",
          "M3U- oder Xtream-Codes-Link öffnen",
          "Für Kodi: PVR IPTV Simple Client Add-on installieren",
          "Oder direkt den ATV-Corner-Web-Player nutzen",
        ],
        pros: ["Multi-OS", "Universelles VLC", "Web-Player verfügbar"],
      },
    },
  },
  {
    id: "browser",
    name: { fr: "Navigateur web", en: "Web browser", de: "Webbrowser" },
    os: "Chrome / Safari / Firefox / Edge",
    compatible: true,
    apps: ["Lecteur web ATV Corner"],
    i18n: {
      fr: {
        summary: "Le lecteur web ATV Corner fonctionne sur tout navigateur moderne. Pas d'installation, pas de configuration.",
        steps: [
          "Connectez-vous sur atvcorner.com avec votre compte",
          "Cliquez sur Watch → Lecteur web",
          "Choisissez votre chaîne ou VOD",
        ],
        pros: ["0 installation", "Multi-device", "VPN-friendly"],
      },
      en: {
        summary: "The ATV Corner web player runs on any modern browser. No install, no configuration.",
        steps: [
          "Log in to atvcorner.com with your account",
          "Click Watch → Web player",
          "Pick your channel or VOD",
        ],
        pros: ["Zero install", "Multi-device", "VPN-friendly"],
      },
      de: {
        summary: "Der ATV-Corner-Web-Player läuft in jedem modernen Browser. Keine Installation, keine Konfiguration.",
        steps: [
          "Auf atvcorner.com mit Ihrem Konto anmelden",
          "Watch → Web-Player anklicken",
          "Sender oder VOD wählen",
        ],
        pros: ["Null Installation", "Multi-Device", "VPN-freundlich"],
      },
    },
  },
];

export const deviceIds = devices.map((d) => d.id);
export function getDevice(id: string): DeviceCategory | undefined {
  return devices.find((d) => d.id === id);
}
