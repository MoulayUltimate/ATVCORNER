export type Device = {
  id: string;
  name: string;
  icon: string;
  steps: string[];
};

export const devices: Device[] = [
  {
    id: "smart-tv",
    name: "Smart TV (Samsung / LG)",
    icon: "tv",
    steps: [
      "Téléchargez un lecteur multimédia compatible depuis le store de votre TV.",
      "Notez votre MAC address affichée à l'écran.",
      "Envoyez-nous votre MAC sur WhatsApp avec vos identifiants.",
      "Redémarrez l'application — vos chaînes apparaissent automatiquement.",
    ],
  },
  {
    id: "firestick",
    name: "Amazon Fire TV Stick",
    icon: "cast",
    steps: [
      "Activez « Sources inconnues » dans Paramètres → My Fire TV → Developer Options.",
      "Installez Downloader depuis l'Amazon Store.",
      "Téléchargez IBO Player ou Smarters Pro via Downloader.",
      "Saisissez vos identifiants ATV Corner pour activer le service.",
    ],
  },
  {
    id: "android",
    name: "Android TV / Box Android",
    icon: "smartphone",
    steps: [
      "Ouvrez le Play Store et installez TiviMate ou un lecteur compatible.",
      "Lancez l'application et choisissez « Ajouter une playlist ».",
      "Entrez votre URL M3U + nom d'utilisateur + mot de passe (fournis par WhatsApp).",
      "Profitez de vos 50 000+ chaînes en 4K.",
    ],
  },
  {
    id: "ios",
    name: "iPhone / iPad / Apple TV",
    icon: "phone_iphone",
    steps: [
      "Installez un lecteur multimédia compatible depuis l'App Store.",
      "Sélectionnez « Login with Xtream Codes API ».",
      "Entrez les identifiants ATV Corner reçus par e-mail/WhatsApp.",
      "Tout votre catalogue s'affiche en 1 clic.",
    ],
  },
  {
    id: "mag",
    name: "MAG Box / Enigma2",
    icon: "router",
    steps: [
      "Allez dans Paramètres → Serveurs → Portail Portal 1.",
      "Saisissez l'URL portail fournie par ATV Corner.",
      "Redémarrez le décodeur.",
      "Le bouquet complet est instantanément chargé.",
    ],
  },
  {
    id: "windows",
    name: "Windows / Mac / Linux",
    icon: "laptop",
    steps: [
      "Installez VLC Media Player ou un lecteur compatible.",
      "Ouvrez « Réseau » → « Ouvrir un flux réseau ».",
      "Collez votre lien M3U personnel.",
      "Lancer — profitez du streaming sur grand écran.",
    ],
  },
];
