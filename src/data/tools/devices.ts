import "server-only";
import type { DeviceCategory } from "./types";

export const devices: DeviceCategory[] = [
  {
    id: "smart-tv",
    name: { fr: "Smart TV", en: "Smart TV", de: "Smart TV" , es: "Smart TV", it: "Smart TV" },
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
      es: {
        summary: "Todas las Smart TV recientes (Samsung Tizen, LG webOS, Sony y Philips con Android TV) son 100 % compatibles. Instalación en 3 minutos desde la tienda del televisor.",
        steps: [
          "Enciende tu Smart TV y abre la tienda de aplicaciones",
          "Busca «Smart STB» (Samsung/LG) o «IBO Player» (Android TV)",
          "Instálala y anota la dirección MAC que aparece en pantalla",
          "Envía la MAC a ATV Corner: tu lista se carga en menos de 5 minutos",
          "Abre la aplicación: 66.000 canales y videoteca listos",
        ],
        pros: ["Sin ningún aparato adicional", "Mando nativo del televisor", "4K HDR en modelos de 2020 en adelante"],
      },
      it: {
        summary: "Tutte le Smart TV recenti (Samsung Tizen, LG webOS, Sony e Philips con Android TV) sono compatibili al 100 %. Installazione in 3 minuti dallo store del televisore.",
        steps: [
          "Accendi la Smart TV e apri lo store delle applicazioni",
          "Cerca «Smart STB» (Samsung/LG) o «IBO Player» (Android TV)",
          "Installala e annota l'indirizzo MAC mostrato sullo schermo",
          "Invia il MAC ad ATV Corner: la playlist si carica in meno di 5 minuti",
          "Apri l'app: 66.000 canali e videoteca pronti",
        ],
        pros: ["Nessun apparecchio aggiuntivo", "Telecomando nativo del televisore", "4K HDR sui modelli dal 2020 in poi"],
      },
    },
  },
  {
    id: "fire-stick",
    name: { fr: "Amazon Fire TV Stick", en: "Amazon Fire TV Stick", de: "Amazon Fire TV Stick" , es: "Amazon Fire TV Stick", it: "Amazon Fire TV Stick" },
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
      es: {
        summary: "El Fire Stick es la mejor relación calidad-precio para añadir IPTV a cualquier televisor. 40 € y 5 minutos de instalación.",
        steps: [
          "Conecta el Fire Stick a un puerto HDMI del televisor",
          "Activa la instalación de apps externas (Ajustes → Mi Fire TV → Opciones de desarrollador)",
          "Instala Downloader y después IPTV Smarters Pro desde Downloader",
          "Abre Smarters e introduce tus credenciales Xtream Codes",
          "Listo: 4K HDR y Dolby Atmos en el Fire Stick 4K Max",
        ],
        pros: ["Portátil (vacaciones, hotel)", "4K HDR en el Fire Stick 4K Max", "Compatible con TiviMate"],
      },
      it: {
        summary: "Il Fire Stick è il miglior rapporto qualità-prezzo per aggiungere l'IPTV a qualsiasi televisore. 40 € e 5 minuti di installazione.",
        steps: [
          "Collega il Fire Stick a una porta HDMI del televisore",
          "Attiva l'installazione di app esterne (Impostazioni → Il mio Fire TV → Opzioni sviluppatore)",
          "Installa Downloader e poi IPTV Smarters Pro tramite Downloader",
          "Apri Smarters e inserisci le credenziali Xtream Codes",
          "Pronto: 4K HDR e Dolby Atmos sul Fire Stick 4K Max",
        ],
        pros: ["Portatile (vacanze, hotel)", "4K HDR sul Fire Stick 4K Max", "Compatibile con TiviMate"],
      },
    },
  },
  {
    id: "android-tv",
    name: { fr: "Android TV / Google TV", en: "Android TV / Google TV", de: "Android TV / Google TV" , es: "Android TV / Google TV", it: "Android TV / Google TV" },
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
      es: {
        summary: "Android TV (NVIDIA Shield, Chromecast con Google TV, Mi Box, Onn) es la plataforma IPTV más potente. TiviMate funciona de forma nativa.",
        steps: [
          "Abre la Play Store en tu Android TV",
          "Busca «TiviMate IPTV Player» e instálala",
          "Abre TiviMate → Añadir lista → Xtream Codes",
          "Introduce tus credenciales de ATV Corner",
          "La guía y las categorías se cargan automáticamente",
        ],
        pros: ["TiviMate, el reproductor de referencia", "Guía de programación completa", "4K HDR y Dolby Vision"],
      },
      it: {
        summary: "Android TV (NVIDIA Shield, Chromecast con Google TV, Mi Box, Onn) è la piattaforma IPTV più potente. TiviMate funziona in modo nativo.",
        steps: [
          "Apri il Play Store sul tuo Android TV",
          "Cerca «TiviMate IPTV Player» e installala",
          "Apri TiviMate → Aggiungi playlist → Xtream Codes",
          "Inserisci le tue credenziali ATV Corner",
          "Guida e categorie si caricano automaticamente",
        ],
        pros: ["TiviMate, il lettore di riferimento", "Guida ai programmi completa", "4K HDR e Dolby Vision"],
      },
    },
  },
  {
    id: "apple-tv",
    name: { fr: "Apple TV 4K", en: "Apple TV 4K", de: "Apple TV 4K" , es: "Apple TV 4K", it: "Apple TV 4K" },
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
      es: {
        summary: "El Apple TV 4K es la opción premium para quien usa iOS. Interfaz muy cuidada, 4K HDR con Dolby Vision e integración con HomeKit.",
        steps: [
          "Abre la App Store en el Apple TV",
          "Busca «Smarters Player Lite»",
          "Instálala y ábrela",
          "Elige Xtream Codes e introduce tus credenciales de ATV Corner",
        ],
        pros: ["Interfaz premium", "Dolby Vision y Atmos", "Mando Siri"],
        cons: ["Tienda de aplicaciones más restrictiva (menos apps IPTV)"],
      },
      it: {
        summary: "L'Apple TV 4K è l'opzione premium per chi usa iOS. Interfaccia molto curata, 4K HDR con Dolby Vision e integrazione con HomeKit.",
        steps: [
          "Apri l'App Store sull'Apple TV",
          "Cerca «Smarters Player Lite»",
          "Installala e aprila",
          "Scegli Xtream Codes e inserisci le tue credenziali ATV Corner",
        ],
        pros: ["Interfaccia premium", "Dolby Vision e Atmos", "Telecomando Siri"],
        cons: ["Store applicazioni più restrittivo (meno app IPTV)"],
      },
    },
  },
  {
    id: "iphone",
    name: { fr: "iPhone / iPad", en: "iPhone / iPad", de: "iPhone / iPad" , es: "iPhone / iPad", it: "iPhone / iPad" },
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
      es: {
        summary: "El iPhone y el iPad admiten IPTV de forma nativa. Con AirPlay puedes enviarlo al Apple TV para verlo en pantalla grande.",
        steps: [
          "Abre la App Store",
          "Descarga «IPTV Smarters Pro»",
          "Ábrela y añade tu cuenta Xtream Codes de ATV Corner",
          "Usa AirPlay hacia el Apple TV si lo necesitas",
        ],
        pros: ["Móvil en cualquier sitio", "AirPlay", "Sincronización con iCloud"],
      },
      it: {
        summary: "iPhone e iPad supportano l'IPTV in modo nativo. Con AirPlay puoi inviarlo all'Apple TV per guardarlo sul grande schermo.",
        steps: [
          "Apri l'App Store",
          "Scarica «IPTV Smarters Pro»",
          "Aprila e aggiungi il tuo account Xtream Codes ATV Corner",
          "Usa AirPlay verso l'Apple TV se serve",
        ],
        pros: ["Mobile ovunque", "AirPlay", "Sincronizzazione iCloud"],
      },
    },
  },
  {
    id: "android-phone",
    name: { fr: "Smartphone Android", en: "Android phone", de: "Android-Smartphone" , es: "Móvil Android", it: "Telefono Android" },
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
      es: {
        summary: "Cualquier móvil Android reciente ejecuta aplicaciones IPTV. Envío al televisor con Chromecast en un solo toque.",
        steps: [
          "Abre la Play Store",
          "Instala «IPTV Smarters Pro»",
          "Inicia sesión con tus credenciales de ATV Corner",
          "Envía a Chromecast o Smart TV desde la propia aplicación",
        ],
        pros: ["Movilidad", "Chromecast", "Multipantalla"],
      },
      it: {
        summary: "Qualsiasi telefono Android recente esegue applicazioni IPTV. Invio al televisore con Chromecast in un solo tocco.",
        steps: [
          "Apri il Play Store",
          "Installa «IPTV Smarters Pro»",
          "Accedi con le tue credenziali ATV Corner",
          "Invia a Chromecast o Smart TV dall'app stessa",
        ],
        pros: ["Mobilità", "Chromecast", "Multischermo"],
      },
    },
  },
  {
    id: "computer",
    name: { fr: "Ordinateur (Windows/Mac/Linux)", en: "Computer (Windows/Mac/Linux)", de: "Computer (Windows/Mac/Linux)" , es: "Ordenador (Windows/Mac/Linux)", it: "Computer (Windows/Mac/Linux)" },
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
      es: {
        summary: "PC, Mac y Linux admiten IPTV mediante VLC, Kodi o el navegador. Ideal para ver en pantalla grande.",
        steps: [
          "Descarga VLC o Kodi (gratuitos)",
          "Abre tu enlace M3U o tus Xtream Codes",
          "Para Kodi: instala el complemento PVR IPTV Simple Client",
          "O usa directamente el reproductor web de ATV Corner",
        ],
        pros: ["Multiplataforma", "VLC universal", "Reproductor web disponible"],
      },
      it: {
        summary: "PC, Mac e Linux supportano l'IPTV tramite VLC, Kodi o il browser. Ideale per guardare sul grande schermo.",
        steps: [
          "Scarica VLC o Kodi (gratuiti)",
          "Apri il tuo link M3U o i tuoi Xtream Codes",
          "Per Kodi: installa il componente PVR IPTV Simple Client",
          "Oppure usa direttamente il lettore web di ATV Corner",
        ],
        pros: ["Multipiattaforma", "VLC universale", "Lettore web disponibile"],
      },
    },
  },
  {
    id: "browser",
    name: { fr: "Navigateur web", en: "Web browser", de: "Webbrowser" , es: "Navegador web", it: "Browser web" },
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
      es: {
        summary: "El reproductor web de ATV Corner funciona en cualquier navegador moderno. Sin instalación y sin configuración.",
        steps: [
          "Inicia sesión en atvcorner.com con tu cuenta",
          "Pulsa Ver → Reproductor web",
          "Elige tu canal o tu contenido de la videoteca",
        ],
        pros: ["Cero instalación", "Multidispositivo", "Compatible con VPN"],
      },
      it: {
        summary: "Il lettore web di ATV Corner funziona su qualsiasi browser moderno. Senza installazione e senza configurazione.",
        steps: [
          "Accedi a atvcorner.com con il tuo account",
          "Clicca su Guarda → Lettore web",
          "Scegli il tuo canale o il contenuto della videoteca",
        ],
        pros: ["Zero installazione", "Multidispositivo", "Compatibile con VPN"],
      },
    },
  },
];

export const deviceIds = devices.map((d) => d.id);
export function getDevice(id: string): DeviceCategory | undefined {
  return devices.find((d) => d.id === id);
}
