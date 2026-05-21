import "server-only";
import type { Locale } from "@/i18n";

export type SeoSection = { h2: string; body: string };
export type SeoFaq = { q: string; a: string };
export type RelatedLink = { label: string; href: string };

export type SeoExtras = {
  intro?: string;
  sections: SeoSection[];
  broadcasters?: { name: string; coverage: string; price: string; note: string }[];
  byDevice?: { device: string; how: string }[];
  extraFaq: SeoFaq[];
  related: RelatedLink[];
};

export type LocalizedExtras = Record<Locale, SeoExtras>;

// ============================================================
// LEAGUE EXTRAS
// ============================================================
export const leagueExtras: Record<string, LocalizedExtras> = {
  "premier-league": {
    fr: {
      intro:
        "Regarder la Premier League en streaming HD et 4K depuis n'importe quel pays européen est devenu un casse-tête : Sky Sports en UK, Canal+ en France, Sky Deutschland en Allemagne, DAZN en Italie, Movistar en Espagne. Chaque diffuseur officiel impose un géo-blocage strict et un abonnement séparé. ATV Corner regroupe l'intégralité du championnat anglais — Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham, Newcastle, Aston Villa, West Ham — dans une seule application accessible partout en Europe.",
      sections: [
        {
          h2: "Calendrier Premier League 2025/2026 : 380 matchs en direct",
          body: "Le championnat anglais se déroule d'août à mai, avec 38 journées et 380 matchs au total. Chaque équipe joue 19 matchs à domicile et 19 à l'extérieur. Les rencontres se concentrent sur les week-ends (samedi 13h30, 16h, 18h30 et dimanche 15h, 17h30 heure UK), avec des Monday Night Football et Friday Night Football régulièrement programmés. ATV Corner diffuse 100 % des matchs en direct, y compris le créneau 15h du samedi (blackout au Royaume-Uni mais accessible via les flux européens).",
        },
        {
          h2: "Big Six et derbies historiques de Premier League",
          body: "Les six grands d'Angleterre — Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham — concentrent l'attention mondiale. Les derbies incontournables : Manchester Derby (City-United), Merseyside Derby (Liverpool-Everton), North London Derby (Arsenal-Tottenham), Derby de Londres (Chelsea-Tottenham), El Cashico (Manchester City-Arsenal). ATV Corner diffuse tous ces grands chocs en 4K HDR avec multi-cam et commentaires en français, anglais, allemand et arabe.",
        },
        {
          h2: "Premier League 4K et HDR sur ATV Corner",
          body: "Le championnat anglais est diffusé en 4K natif depuis 2023. Sky UK et TNT Sports proposent les Super Sunday, Monday Night Football et les grands chocs en Ultra HD HDR. ATV Corner reprend ces flux 4K UHD HDR10 et les rend accessibles sur Smart TV Samsung, LG, Sony, Apple TV 4K, Fire TV Stick 4K Max, NVIDIA Shield Pro et Android TV box compatibles.",
        },
        {
          h2: "Comment regarder la Premier League en direct depuis l'étranger",
          body: "Pour suivre la Premier League depuis la France, la Belgique, l'Allemagne ou la Suisse, il existe trois options : (1) un abonnement officiel local (Canal+, Sky Deutschland, DAZN) qui ne couvre qu'une partie des matchs et reste géo-restreint ; (2) un VPN couplé à Sky UK ou Peacock US, solution coûteuse et instable ; (3) un abonnement ATV Corner qui agrège tous les diffuseurs européens dans une interface unique, sans VPN, sans géo-blocage, avec un prix unique à partir de 15€ par mois.",
        },
        {
          h2: "Premier League sur mobile, Smart TV, Fire Stick et Apple TV",
          body: "ATV Corner diffuse la Premier League sur tous les appareils : Smart TV Samsung Tizen et LG WebOS via l'app Smarters Pro ou IBO Player, Fire TV Stick 4K Max avec TiviMate, Apple TV via Smarters Pro, Android TV box (Xiaomi Mi Box, Chromecast Google TV, NVIDIA Shield), iPhone et iPad iOS, Android smartphone, Windows PC, macOS et navigateurs Chrome, Safari, Firefox.",
        },
      ],
      broadcasters: [
        { name: "ATV Corner", coverage: "100 % des 380 matchs", price: "15€/mois", note: "Tous les feeds européens + 4K HDR" },
        { name: "Canal+ Foot (FR)", coverage: "Sélection (~6 matchs/journée)", price: "29€/mois", note: "Géo-restreint France uniquement" },
        { name: "Sky Sports (UK)", coverage: "Hors blackout 15h samedi", price: "£36/mois", note: "Géo-restreint UK + besoin Sky Q box" },
        { name: "Sky Deutschland", coverage: "Sélection (~5 matchs/journée)", price: "30€/mois", note: "Géo-restreint Allemagne/Autriche" },
        { name: "DAZN Italia", coverage: "Tous les matchs", price: "35€/mois", note: "Géo-restreint Italie" },
        { name: "Peacock (US)", coverage: "Tous les matchs", price: "$12/mois", note: "Géo-restreint USA, besoin VPN" },
      ],
      byDevice: [
        { device: "Smart TV Samsung / LG", how: "Installez Smarters Pro depuis le store officiel, entrez vos identifiants ATV Corner, sélectionnez la chaîne Premier League." },
        { device: "Fire TV Stick 4K Max", how: "Téléchargez TiviMate via Downloader, importez votre playlist M3U fournie par ATV Corner, lancez le match en 4K HDR." },
        { device: "Apple TV 4K", how: "App Smarters Pro sur l'App Store, connexion avec vos credentials Xtream, accès direct à toutes les chaînes UK, FR, DE." },
        { device: "Android TV / NVIDIA Shield", how: "Installez TiviMate Premium, ajoutez votre playlist, activez la mosaïque multi-écrans pour suivre plusieurs matchs Premier League simultanément." },
        { device: "iPhone / Android", how: "App Smarters Pro mobile, chromecast vers TV ou AirPlay, idéal pour suivre Manchester United en déplacement." },
      ],
      extraFaq: [
        { q: "ATV Corner diffuse-t-il toutes les chaînes Premier League ?", a: "Oui — Sky Sports Premier League, TNT Sports, Canal+ Foot, Sky Deutschland Bundesliga & EPL, DAZN Italia, Movistar LaLiga & EPL, beIN Sports : toutes les chaînes diffusant la Premier League sont incluses." },
        { q: "Puis-je voir Manchester United - Liverpool en direct depuis Paris ?", a: "Oui, sans VPN ni géo-restriction. ATV Corner agrège les feeds européens et vous accédez à Sky Sports UK depuis la France, avec commentaire français disponible en parallèle." },
        { q: "La Premier League est-elle disponible sur Fire TV Stick ?", a: "Oui, ATV Corner fonctionne sur Fire TV Stick (toutes générations), Fire TV Cube, Fire TV Stick 4K et 4K Max via TiviMate, Smarters Pro ou IBO Player." },
        { q: "Combien coûte un abonnement pour regarder la Premier League sur ATV Corner ?", a: "À partir de 15€/mois pour l'Essential (HD), 22€/mois pour Premium (4K HDR + multi-écran), 30€/mois pour Elite (4K + VOD + multi-cam)." },
        { q: "Le live a-t-il un délai par rapport à Sky Sports UK ?", a: "Le délai moyen est de 15 à 25 secondes, soit l'équivalent des apps officielles Sky Go, DAZN ou Canal+." },
        { q: "Peut-on enregistrer les matchs de Premier League ?", a: "Oui, via la fonction Catch-up / Replay 7 jours d'ATV Corner. Les matchs sont disponibles en VOD à la fin de la diffusion live." },
        { q: "Quelle connexion internet faut-il pour la Premier League en 4K ?", a: "Minimum 25 Mbps en descente pour le 4K HDR stable, 8 Mbps suffisent pour le HD 1080p. Testez votre débit avec notre outil dédié." },
        { q: "ATV Corner diffuse-t-il aussi la FA Cup et la Carabao Cup ?", a: "Oui, les coupes anglaises (FA Cup, League Cup, Community Shield) sont incluses avec l'abonnement, en direct et replay." },
      ],
      related: [
        { label: "Regarder Manchester United en direct", href: "/tools/team/manchester-united" },
        { label: "Regarder Liverpool en direct", href: "/tools/team/liverpool" },
        { label: "Regarder Arsenal en direct", href: "/tools/team/arsenal" },
        { label: "Football en France", href: "/tools/in/france" },
        { label: "Football en Allemagne", href: "/tools/in/germany" },
        { label: "Comparatif abonnements football", href: "/tools/comparison" },
        { label: "Test de débit streaming 4K", href: "/tools/speed-test" },
        { label: "Premier League sur Fire Stick", href: "/tools/device-compatibility" },
      ],
    },
    en: {
      intro:
        "Watching the Premier League in HD and 4K streaming from any European country has become a puzzle: Sky Sports in the UK, Canal+ in France, Sky Deutschland in Germany, DAZN in Italy, Movistar in Spain. Each official broadcaster enforces strict geo-blocking and a separate subscription. ATV Corner consolidates the entire English championship — Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham, Newcastle, Aston Villa, West Ham — in one app accessible across Europe.",
      sections: [
        {
          h2: "Premier League 2025/2026 schedule: 380 live fixtures",
          body: "The English championship runs from August to May with 38 matchdays and 380 fixtures total. Each club plays 19 home and 19 away matches. Kick-offs cluster around weekends (Saturday 12:30, 15:00, 17:30 and Sunday 14:00, 16:30 UK time), with regular Monday Night Football and Friday Night Football slots. ATV Corner streams 100 % of fixtures live, including the Saturday 3pm window blacked out in the UK but available via European feeds.",
        },
        {
          h2: "Premier League Big Six and historic derbies",
          body: "The Big Six — Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham — dominate worldwide attention. Must-watch derbies: Manchester Derby (City vs United), Merseyside Derby (Liverpool vs Everton), North London Derby (Arsenal vs Tottenham), London Derby (Chelsea vs Tottenham), El Cashico (Man City vs Arsenal). ATV Corner streams every flagship clash in 4K HDR with multi-cam and English, French, German, Arabic commentary.",
        },
        {
          h2: "Premier League 4K and HDR on ATV Corner",
          body: "The English championship has been broadcast in native 4K since 2023. Sky UK and TNT Sports stream Super Sunday, Monday Night Football and flagship games in Ultra HD HDR. ATV Corner relays these 4K UHD HDR10 feeds and makes them available on Samsung, LG, Sony Smart TVs, Apple TV 4K, Fire TV Stick 4K Max, NVIDIA Shield Pro and compatible Android TV boxes.",
        },
        {
          h2: "How to watch Premier League live from abroad",
          body: "To follow the Premier League from France, Belgium, Germany or Switzerland, three options exist: (1) a local official subscription (Canal+, Sky Deutschland, DAZN) covering only part of the matches and still geo-locked; (2) a VPN coupled with Sky UK or Peacock US, expensive and unstable; (3) an ATV Corner subscription aggregating every European broadcaster in a single interface, no VPN, no geo-blocking, single price from €15/month.",
        },
        {
          h2: "Premier League on mobile, Smart TV, Fire Stick and Apple TV",
          body: "ATV Corner streams the Premier League on every device: Samsung Tizen and LG WebOS Smart TVs via Smarters Pro or IBO Player, Fire TV Stick 4K Max with TiviMate, Apple TV via Smarters Pro, Android TV boxes (Xiaomi Mi Box, Chromecast Google TV, NVIDIA Shield), iPhone and iPad iOS, Android smartphone, Windows PC, macOS, and Chrome, Safari, Firefox browsers.",
        },
      ],
      broadcasters: [
        { name: "ATV Corner", coverage: "100 % of all 380 fixtures", price: "€15/month", note: "All European feeds + 4K HDR" },
        { name: "Canal+ Foot (FR)", coverage: "Selection (~6 matches/week)", price: "€29/month", note: "Geo-locked to France only" },
        { name: "Sky Sports (UK)", coverage: "Excluding 3pm Saturday blackout", price: "£36/month", note: "Geo-locked UK + Sky Q box required" },
        { name: "Sky Deutschland", coverage: "Selection (~5 matches/week)", price: "€30/month", note: "Geo-locked Germany/Austria" },
        { name: "DAZN Italia", coverage: "Every match", price: "€35/month", note: "Geo-locked Italy" },
        { name: "Peacock (US)", coverage: "Every match", price: "$12/month", note: "Geo-locked USA, VPN required" },
      ],
      byDevice: [
        { device: "Samsung / LG Smart TV", how: "Install Smarters Pro from the official store, enter your ATV Corner credentials, pick the Premier League channel." },
        { device: "Fire TV Stick 4K Max", how: "Download TiviMate via Downloader, import the M3U playlist provided by ATV Corner, launch the match in 4K HDR." },
        { device: "Apple TV 4K", how: "Install Smarters Pro from the App Store, connect with your Xtream credentials, instant access to every UK, FR, DE channel." },
        { device: "Android TV / NVIDIA Shield", how: "Install TiviMate Premium, add your playlist, enable multi-view mosaic to follow several Premier League matches at once." },
        { device: "iPhone / Android", how: "Smarters Pro mobile app, Chromecast or AirPlay to TV — perfect for following Manchester United on the go." },
      ],
      extraFaq: [
        { q: "Does ATV Corner carry every Premier League channel?", a: "Yes — Sky Sports Premier League, TNT Sports, Canal+ Foot, Sky Deutschland Bundesliga & EPL, DAZN Italia, Movistar LaLiga & EPL, beIN Sports: every channel broadcasting the Premier League is included." },
        { q: "Can I watch Manchester United vs Liverpool live from Paris?", a: "Yes, no VPN or geo-restriction. ATV Corner aggregates European feeds, giving you Sky Sports UK from France with French commentary available in parallel." },
        { q: "Is the Premier League available on Fire TV Stick?", a: "Yes, ATV Corner runs on Fire TV Stick (all generations), Fire TV Cube, Fire TV Stick 4K and 4K Max via TiviMate, Smarters Pro or IBO Player." },
        { q: "How much does an ATV Corner subscription cost to watch Premier League?", a: "From €15/month for Essential (HD), €22/month for Premium (4K HDR + multi-screen), €30/month for Elite (4K + VOD + multi-cam)." },
        { q: "Is there a live delay vs Sky Sports UK?", a: "Average delay is 15–25 seconds, equivalent to official Sky Go, DAZN or Canal+ apps." },
        { q: "Can I record Premier League matches?", a: "Yes, via the 7-day Catch-up / Replay feature. Matches are available in VOD after the live broadcast ends." },
        { q: "What internet speed do I need for Premier League in 4K?", a: "Minimum 25 Mbps download for stable 4K HDR, 8 Mbps is enough for HD 1080p. Test your bandwidth with our dedicated tool." },
        { q: "Does ATV Corner also stream FA Cup and Carabao Cup?", a: "Yes, English cups (FA Cup, League Cup, Community Shield) are included with the subscription, live and replay." },
      ],
      related: [
        { label: "Watch Manchester United live", href: "/tools/team/manchester-united" },
        { label: "Watch Liverpool live", href: "/tools/team/liverpool" },
        { label: "Watch Arsenal live", href: "/tools/team/arsenal" },
        { label: "Football in France", href: "/tools/in/france" },
        { label: "Football in Germany", href: "/tools/in/germany" },
        { label: "Football subscription comparison", href: "/tools/comparison" },
        { label: "4K streaming speed test", href: "/tools/speed-test" },
        { label: "Premier League on Fire Stick", href: "/tools/device-compatibility" },
      ],
    },
    de: {
      intro:
        "Premier League in HD und 4K aus jedem europ\u00e4ischen Land zu streamen ist zum R\u00e4tsel geworden: Sky Sports in UK, Canal+ in Frankreich, Sky Deutschland, DAZN in Italien, Movistar in Spanien. Jeder offizielle Sender verh\u00e4ngt strikte Geosperren und verlangt ein separates Abo. ATV Corner b\u00fcndelt die komplette englische Meisterschaft \u2014 Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham, Newcastle, Aston Villa, West Ham \u2014 in einer App, \u00fcberall in Europa zug\u00e4nglich.",
      sections: [
        {
          h2: "Premier-League-Spielplan 2025/2026: 380 Live-Spiele",
          body: "Die englische Meisterschaft l\u00e4uft von August bis Mai, 38 Spieltage, insgesamt 380 Partien. Jeder Klub spielt 19 Heim- und 19 Ausw\u00e4rtsspiele. Ansto\u00dfzeiten ballen sich am Wochenende (Samstag 13:30, 16:00, 18:30 und Sonntag 15:00, 17:30 deutsche Zeit), mit regelm\u00e4\u00dfigem Monday Night Football und Friday Night Football. ATV Corner streamt 100 % aller Partien live, inklusive Samstag-15-Uhr-Blackout-Fenster in UK \u2014 verf\u00fcgbar \u00fcber europ\u00e4ische Feeds.",
        },
        {
          h2: "Premier-League Big Six und historische Derbys",
          body: "Die Big Six \u2014 Manchester United, Liverpool, Arsenal, Chelsea, Manchester City, Tottenham \u2014 dominieren weltweit. Pflicht-Derbys: Manchester Derby (City vs United), Merseyside Derby (Liverpool vs Everton), North London Derby (Arsenal vs Tottenham), London-Derby (Chelsea vs Tottenham), El Cashico (Man City vs Arsenal). ATV Corner streamt jedes Topspiel in 4K HDR mit Multi-Cam und Kommentar auf Deutsch, Englisch, Franz\u00f6sisch und Arabisch.",
        },
        {
          h2: "Premier League 4K und HDR auf ATV Corner",
          body: "Die englische Meisterschaft wird seit 2023 nativ in 4K \u00fcbertragen. Sky UK und TNT Sports senden Super Sunday, Monday Night Football und Topspiele in Ultra HD HDR. ATV Corner gibt diese 4K-UHD-HDR10-Feeds weiter \u2014 verf\u00fcgbar auf Samsung, LG, Sony Smart TVs, Apple TV 4K, Fire TV Stick 4K Max, NVIDIA Shield Pro und kompatiblen Android-TV-Boxen.",
        },
        {
          h2: "Premier League live aus dem Ausland streamen",
          body: "Um die Premier League aus Deutschland, der Schweiz oder \u00d6sterreich zu verfolgen, gibt es drei Optionen: (1) lokales Sky/DAZN-Abo, das nur einen Teil der Spiele abdeckt und geosperrt bleibt; (2) VPN plus Sky UK oder Peacock US \u2014 teuer und instabil; (3) ATV-Corner-Abo, das alle europ\u00e4ischen Sender in einer Oberfl\u00e4che b\u00fcndelt, ohne VPN, ohne Geosperre, ab 15\u20ac/Monat.",
        },
        {
          h2: "Premier League auf Mobile, Smart TV, Fire Stick und Apple TV",
          body: "ATV Corner streamt die Premier League auf jedem Ger\u00e4t: Samsung Tizen und LG WebOS Smart TVs via Smarters Pro oder IBO Player, Fire TV Stick 4K Max mit TiviMate, Apple TV via Smarters Pro, Android-TV-Boxen (Xiaomi Mi Box, Chromecast Google TV, NVIDIA Shield), iPhone und iPad iOS, Android-Smartphone, Windows-PC, macOS sowie Chrome-, Safari-, Firefox-Browser.",
        },
      ],
      broadcasters: [
        { name: "ATV Corner", coverage: "100 % aller 380 Spiele", price: "15\u20ac/Monat", note: "Alle europ\u00e4ischen Feeds + 4K HDR" },
        { name: "Sky Deutschland", coverage: "Auswahl (~5 Spiele/Spieltag)", price: "30\u20ac/Monat", note: "Geosperre Deutschland/\u00d6sterreich" },
        { name: "Sky Sports (UK)", coverage: "Ohne Samstag-15-Uhr-Blackout", price: "\u00a336/Monat", note: "Geosperre UK + Sky-Q-Box n\u00f6tig" },
        { name: "DAZN", coverage: "Italien-Auswahl", price: "35\u20ac/Monat", note: "Geosperre Italien" },
        { name: "Canal+ Foot (FR)", coverage: "Auswahl (~6 Spiele/Spieltag)", price: "29\u20ac/Monat", note: "Geosperre Frankreich" },
        { name: "Peacock (US)", coverage: "Jedes Spiel", price: "$12/Monat", note: "Geosperre USA, VPN n\u00f6tig" },
      ],
      byDevice: [
        { device: "Samsung / LG Smart TV", how: "Smarters Pro aus dem Store installieren, ATV-Corner-Zugangsdaten eingeben, Premier-League-Kanal w\u00e4hlen." },
        { device: "Fire TV Stick 4K Max", how: "TiviMate \u00fcber Downloader installieren, M3U-Playlist von ATV Corner importieren, Spiel in 4K HDR starten." },
        { device: "Apple TV 4K", how: "Smarters Pro aus dem App Store, Anmeldung mit Xtream-Credentials, direkter Zugriff auf alle UK-, FR-, DE-Kan\u00e4le." },
        { device: "Android TV / NVIDIA Shield", how: "TiviMate Premium installieren, Playlist hinzuf\u00fcgen, Multi-View-Mosaik aktivieren f\u00fcr parallele Premier-League-Spiele." },
        { device: "iPhone / Android", how: "Smarters-Pro-Mobile-App, Chromecast oder AirPlay auf TV \u2014 ideal um Manchester United unterwegs zu verfolgen." },
      ],
      extraFaq: [
        { q: "Hat ATV Corner alle Premier-League-Kan\u00e4le?", a: "Ja \u2014 Sky Sports Premier League, TNT Sports, Canal+ Foot, Sky Deutschland, DAZN Italia, Movistar, beIN Sports: jeder Sender mit Premier-League-Rechten ist enthalten." },
        { q: "Kann ich Manchester United vs Liverpool live aus Berlin sehen?", a: "Ja, ohne VPN oder Geosperre. ATV Corner b\u00fcndelt europ\u00e4ische Feeds und liefert Sky Sports UK in Deutschland mit deutschem Kommentar parallel." },
        { q: "L\u00e4uft die Premier League auf Fire TV Stick?", a: "Ja, ATV Corner funktioniert auf Fire TV Stick (alle Generationen), Fire TV Cube, Fire TV Stick 4K und 4K Max via TiviMate, Smarters Pro oder IBO Player." },
        { q: "Wie viel kostet ein Abo f\u00fcr Premier League auf ATV Corner?", a: "Ab 15\u20ac/Monat f\u00fcr Essential (HD), 22\u20ac/Monat f\u00fcr Premium (4K HDR + Multi-Screen), 30\u20ac/Monat f\u00fcr Elite (4K + VOD + Multi-Cam)." },
        { q: "Gibt es eine Verz\u00f6gerung gegen\u00fcber Sky Sports UK?", a: "Durchschnittlich 15\u201325 Sekunden, vergleichbar mit den offiziellen Sky-Go-, DAZN- oder Canal+-Apps." },
        { q: "Kann ich Premier-League-Spiele aufnehmen?", a: "Ja, via 7-Tage-Catch-up/Replay. Spiele sind nach Live-\u00dcbertragung als VOD verf\u00fcgbar." },
        { q: "Welche Internetgeschwindigkeit f\u00fcr Premier League in 4K?", a: "Mindestens 25 Mbit/s Download f\u00fcr stabiles 4K HDR, 8 Mbit/s reichen f\u00fcr HD 1080p. Pr\u00fcfen Sie Ihre Bandbreite mit unserem Tool." },
        { q: "Streamt ATV Corner auch FA Cup und Carabao Cup?", a: "Ja, die englischen Pokale (FA Cup, League Cup, Community Shield) sind im Abo enthalten, live und im Replay." },
      ],
      related: [
        { label: "Manchester United live", href: "/tools/team/manchester-united" },
        { label: "Liverpool live", href: "/tools/team/liverpool" },
        { label: "Arsenal live", href: "/tools/team/arsenal" },
        { label: "Fu\u00dfball in Frankreich", href: "/tools/in/france" },
        { label: "Fu\u00dfball in Deutschland", href: "/tools/in/germany" },
        { label: "Abo-Vergleich Fu\u00dfball", href: "/tools/comparison" },
        { label: "4K-Streaming-Speedtest", href: "/tools/speed-test" },
        { label: "Premier League auf Fire Stick", href: "/tools/device-compatibility" },
      ],
    },
  },
};

// ---------- Champions League ----------
leagueExtras["champions-league"] = {
  fr: {
    intro: "La Ligue des Champions UEFA est devenue impossible à suivre intégralement avec un seul abonnement. Canal+ détient les droits en France, RMC Sport sur certaines affiches, Sky Italia, Movistar, Amazon Prime Video, beIN Sports : les 189 matchs du nouveau format à 36 équipes sont éparpillés. ATV Corner regroupe tous les diffuseurs UEFA Champions League européens — phase de ligue, barrages, huitièmes, quarts, demi-finales, finale — dans une seule application en 4K HDR.",
    sections: [
      { h2: "Nouveau format UCL 2024/2025 : 189 matchs, 36 équipes", body: "Depuis la réforme, la Champions League regroupe 36 clubs au lieu de 32. Chaque équipe joue 8 matchs de phase de ligue (4 à domicile, 4 à l'extérieur) contre 8 adversaires différents. Le top 8 se qualifie directement pour les huitièmes, les places 9-24 disputent des barrages. ATV Corner couvre les 144 matchs de phase de ligue + 45 matchs à élimination directe = 189 rencontres en direct." },
      { h2: "Real Madrid, Manchester City, Bayern, PSG : suivez les favoris UCL", body: "Real Madrid (15 titres, record absolu), Bayern Munich (6 titres), Liverpool (6), Manchester City (1 récent), PSG (finaliste 2020), Barcelona, Inter, Borussia Dortmund. ATV Corner diffuse chaque match de ces favoris en HD 1080p minimum et 4K HDR pour les chocs. Commentaires multilingues : français (Canal+), anglais (BT/TNT), allemand (DAZN/Prime), espagnol (Movistar)." },
      { h2: "Finale Champions League en 4K HDR Dolby Vision", body: "La finale UCL est diffusée chaque année en mai-juin dans un stade prestigieux (Wembley, Istanbul, Munich, Saint-Pétersbourg avant la guerre). ATV Corner garantit la diffusion en 4K HDR Dolby Vision avec son Dolby Atmos sur les appareils compatibles (Apple TV 4K, Fire TV Stick 4K Max, Samsung QLED, LG OLED)." },
      { h2: "Mode mosaïque multi-match Champions League", body: "Les soirées Champions League programment 8 matchs simultanés à 21h CET. Sur ATV Corner, le mode multi-view (Fire TV Stick, Android TV, navigateur) permet de suivre 4 matchs en parallèle dans une mosaïque 4 cadrans, avec audio cliquable. Idéal pour les fans de plusieurs clubs européens." },
    ],
    extraFaq: [
      { q: "Tous les 189 matchs de Champions League sont-ils inclus ?", a: "Oui, ATV Corner agrège Canal+, RMC, BT/TNT Sports, Sky Italia, Movistar, Amazon Prime — couverture 100 % des 189 matchs de la saison." },
      { q: "La finale Champions League est-elle en 4K ?", a: "Oui, finale et demi-finales en 4K HDR Dolby Vision sur les appareils compatibles." },
      { q: "Peut-on regarder 4 matchs UCL simultanément ?", a: "Oui, via le mode multi-view disponible sur Fire TV Stick, Android TV, NVIDIA Shield et navigateur web." },
      { q: "Quels commentaires sont disponibles ?", a: "Français (Canal+, RMC), anglais (BT/TNT Sport), allemand (DAZN, Amazon), espagnol (Movistar), italien (Sky Italia), arabe (beIN)." },
    ],
    related: [
      { label: "Regarder Real Madrid", href: "/tools/team/real-madrid" },
      { label: "Regarder Manchester City", href: "/tools/watch/premier-league" },
      { label: "Regarder Bayern Munich", href: "/tools/team/bayern-munich" },
      { label: "Comparatif abonnements football", href: "/tools/comparison" },
    ],
  },
  en: {
    intro: "The UEFA Champions League has become impossible to follow in full with a single subscription. Canal+ holds French rights, BT/TNT Sports the UK, Sky Italia, Movistar Spain, Amazon Prime Video Tuesday games, beIN MENA: all 189 fixtures of the new 36-team format are scattered. ATV Corner unifies every European Champions League broadcaster — league phase, knockout play-offs, R16, QF, SF, final — in one app in 4K HDR.",
    sections: [
      { h2: "New UCL format 2024/2025: 189 matches, 36 teams", body: "Since the reform, the Champions League gathers 36 clubs instead of 32. Each team plays 8 league-phase matches (4 home, 4 away) against 8 different opponents. The top 8 qualify directly for the R16, places 9–24 play knockout play-offs. ATV Corner covers 144 league-phase matches + 45 knockout games = 189 live fixtures." },
      { h2: "Real Madrid, Manchester City, Bayern, PSG: follow the UCL favourites", body: "Real Madrid (15 titles, absolute record), Bayern Munich (6), Liverpool (6), Manchester City (1 recent), PSG (2020 finalist), Barcelona, Inter, Borussia Dortmund. ATV Corner streams every match of these favourites in HD 1080p minimum, 4K HDR on flagship clashes. Multi-language commentary: English (BT/TNT), French (Canal+), German (DAZN/Prime), Spanish (Movistar)." },
      { h2: "Champions League final in 4K HDR Dolby Vision", body: "The UCL final airs each May-June in a prestigious stadium (Wembley, Istanbul, Munich). ATV Corner guarantees 4K HDR Dolby Vision broadcast with Dolby Atmos sound on compatible devices (Apple TV 4K, Fire TV Stick 4K Max, Samsung QLED, LG OLED)." },
      { h2: "Multi-match mosaic mode for Champions League nights", body: "Champions League nights schedule 8 simultaneous matches at 21:00 CET. ATV Corner multi-view (Fire TV Stick, Android TV, browser) lets you follow 4 matches in parallel in a 4-quadrant mosaic with clickable audio. Perfect for fans of several European clubs." },
    ],
    extraFaq: [
      { q: "Are all 189 Champions League matches included?", a: "Yes, ATV Corner aggregates Canal+, RMC, BT/TNT Sports, Sky Italia, Movistar, Amazon Prime — 100 % coverage of the season's 189 fixtures." },
      { q: "Is the Champions League final in 4K?", a: "Yes, final and semi-finals in 4K HDR Dolby Vision on compatible devices." },
      { q: "Can I watch 4 UCL matches at once?", a: "Yes, via multi-view available on Fire TV Stick, Android TV, NVIDIA Shield and web browser." },
      { q: "What commentary languages are available?", a: "English (BT/TNT Sport), French (Canal+, RMC), German (DAZN, Amazon), Spanish (Movistar), Italian (Sky Italia), Arabic (beIN)." },
    ],
    related: [
      { label: "Watch Real Madrid", href: "/tools/team/real-madrid" },
      { label: "Watch Bayern Munich", href: "/tools/team/bayern-munich" },
      { label: "Football subscription comparison", href: "/tools/comparison" },
      { label: "4K streaming speed test", href: "/tools/speed-test" },
    ],
  },
  de: {
    intro: "Die UEFA Champions League ist mit einem einzigen Abo unm\u00f6glich vollst\u00e4ndig zu verfolgen. Amazon Prime, DAZN, Sky Italia, Canal+, BT/TNT Sports, Movistar, beIN: alle 189 Spiele des neuen 36-Team-Formats sind verstreut. ATV Corner b\u00fcndelt jeden europ\u00e4ischen UCL-Sender \u2014 Ligaphase, Playoffs, Achtelfinale, Viertelfinale, Halbfinale, Finale \u2014 in einer App in 4K HDR.",
    sections: [
      { h2: "Neues UCL-Format 2024/2025: 189 Spiele, 36 Teams", body: "Seit der Reform umfasst die Champions League 36 Klubs statt 32. Jedes Team spielt 8 Ligaphasen-Partien (4 Heim, 4 Ausw\u00e4rts) gegen 8 verschiedene Gegner. Die Top 8 qualifizieren direkt f\u00fcr das Achtelfinale, Pl\u00e4tze 9\u201324 spielen Playoffs. ATV Corner deckt 144 Ligaphasen-Spiele + 45 K.-o.-Spiele = 189 Live-Partien ab." },
      { h2: "Real Madrid, Manchester City, Bayern, PSG: UCL-Favoriten verfolgen", body: "Real Madrid (15 Titel, Rekord), Bayern M\u00fcnchen (6), Liverpool (6), Manchester City (1), PSG (Finalist 2020), Barcelona, Inter, Borussia Dortmund. ATV Corner streamt jedes Spiel in HD 1080p, 4K HDR bei Topspielen. Mehrsprachiger Kommentar: Deutsch (DAZN/Amazon), Englisch (BT/TNT), Franz\u00f6sisch (Canal+), Spanisch (Movistar)." },
      { h2: "Champions-League-Finale in 4K HDR Dolby Vision", body: "Das UCL-Finale l\u00e4uft jeden Mai/Juni in einem Prestige-Stadion (Wembley, Istanbul, M\u00fcnchen). ATV Corner garantiert 4K-HDR-Dolby-Vision-\u00dcbertragung mit Dolby-Atmos-Ton auf kompatiblen Ger\u00e4ten (Apple TV 4K, Fire TV Stick 4K Max, Samsung QLED, LG OLED)." },
      { h2: "Mosaik-Modus f\u00fcr Champions-League-N\u00e4chte", body: "Champions-League-N\u00e4chte planen 8 Parallel-Spiele um 21:00 Uhr. ATV-Corner-Multi-View (Fire TV Stick, Android TV, Browser) erlaubt 4 Parallel-Spiele in 4-Quadranten-Mosaik mit anklickbarem Audio. Perfekt f\u00fcr Fans mehrerer europ\u00e4ischer Klubs." },
    ],
    extraFaq: [
      { q: "Sind alle 189 Champions-League-Spiele enthalten?", a: "Ja, ATV Corner b\u00fcndelt DAZN, Amazon Prime, Canal+, BT/TNT, Sky Italia, Movistar \u2014 100 % Abdeckung der 189 Saisonspiele." },
      { q: "L\u00e4uft das Champions-League-Finale in 4K?", a: "Ja, Finale und Halbfinals in 4K HDR Dolby Vision auf kompatiblen Ger\u00e4ten." },
      { q: "Kann ich 4 UCL-Spiele gleichzeitig sehen?", a: "Ja, via Multi-View auf Fire TV Stick, Android TV, NVIDIA Shield und Web-Browser." },
      { q: "Welche Kommentarsprachen sind verf\u00fcgbar?", a: "Deutsch (DAZN, Amazon), Englisch (BT/TNT Sport), Franz\u00f6sisch (Canal+, RMC), Spanisch (Movistar), Italienisch (Sky Italia), Arabisch (beIN)." },
    ],
    related: [
      { label: "Real Madrid live", href: "/tools/team/real-madrid" },
      { label: "Bayern M\u00fcnchen live", href: "/tools/team/bayern-munich" },
      { label: "Abo-Vergleich Fu\u00dfball", href: "/tools/comparison" },
      { label: "4K-Streaming-Speedtest", href: "/tools/speed-test" },
    ],
  },
};

// ---------- LaLiga ----------
leagueExtras["la-liga"] = {
  fr: {
    intro: "Suivre LaLiga depuis la France, l'Allemagne, la Belgique ou la Suisse exige plusieurs abonnements officiels (beIN Sports France, DAZN Allemagne, Sky Italia) tous géo-restreints et incomplets. ATV Corner agrège Movistar LaLiga, beIN, DAZN et Sky pour vous donner les 380 matchs de la saison espagnole en HD/4K, sans VPN.",
    sections: [
      { h2: "El Clasico Real Madrid - FC Barcelone : le sommet mondial", body: "Le Clasico est le match de football le plus regardé au monde, avec plus de 600 millions de téléspectateurs par édition. Programmé deux fois par saison (aller et retour), il oppose Real Madrid (Bernabéu, 81 000 places) à FC Barcelona (Camp Nou, 99 000 places). ATV Corner diffuse El Clasico systématiquement en 4K HDR Dolby Vision avec multi-cam (8 angles) et commentaires français, espagnol, anglais, arabe." },
      { h2: "Top 5 clubs LaLiga à suivre absolument", body: "Real Madrid (35 titres LaLiga, Mbappé, Vinícius, Bellingham), FC Barcelona (27 titres, Yamal, Pedri, Lewandowski), Atlético Madrid (Diego Simeone, Griezmann), Real Sociedad, Athletic Bilbao, Real Betis, Sevilla, Villarreal. ATV Corner couvre les 380 matchs de tous les clubs LaLiga avec replays 7 jours." },
      { h2: "LaLiga depuis l'étranger sans Movistar+ ni VPN", body: "Movistar+ détient les droits LaLiga en Espagne uniquement. Hors d'Espagne, il faut un VPN espagnol payant + carte bancaire espagnole — solution complexe et fragile. ATV Corner contourne en agrégeant les feeds européens accessibles depuis France, Allemagne, Italie, UK sans VPN ni géo-restriction." },
    ],
    extraFaq: [
      { q: "Peut-on regarder LaLiga en français ?", a: "Oui, commentaires français disponibles via les feeds beIN Sports France ou DAZN France selon les matchs." },
      { q: "Tous les matchs Real Madrid sont-ils en 4K ?", a: "Tous les matchs Real à domicile au Bernabéu sont en 4K HDR. Les matchs à l'extérieur dépendent du diffuseur visiteur." },
      { q: "ATV Corner inclut-il la Copa del Rey ?", a: "Oui, la Coupe d'Espagne (Copa del Rey) est incluse avec l'abonnement, y compris la finale en 4K." },
      { q: "Les commentaires arabes sont-ils disponibles pour El Clasico ?", a: "Oui, via beIN Sports MENA, commentaires arabes sur les grands matchs LaLiga." },
    ],
    related: [
      { label: "Regarder Real Madrid", href: "/tools/team/real-madrid" },
      { label: "Regarder Barcelone", href: "/tools/team/barcelona" },
      { label: "Football en Espagne", href: "/tools/in/spain" },
      { label: "Comparatif abonnements", href: "/tools/comparison" },
    ],
  },
  en: {
    intro: "Following LaLiga from France, Germany, Belgium or Switzerland requires multiple geo-locked official subscriptions (beIN Sports France, DAZN Germany, Sky Italia), each incomplete. ATV Corner aggregates Movistar LaLiga, beIN, DAZN and Sky to deliver the full 380-match Spanish season in HD/4K without a VPN.",
    sections: [
      { h2: "El Clasico Real Madrid vs FC Barcelona: the global summit", body: "El Clasico is the most-watched football match on earth, with 600+ million viewers per edition. Played twice per season (home and away), it pits Real Madrid (Bernabéu, 81,000 seats) against FC Barcelona (Camp Nou, 99,000). ATV Corner streams El Clasico systematically in 4K HDR Dolby Vision with multi-cam (8 angles) and English, Spanish, French, Arabic commentary." },
      { h2: "Top 5 LaLiga clubs to follow", body: "Real Madrid (35 LaLiga titles, Mbappé, Vinícius, Bellingham), FC Barcelona (27 titles, Yamal, Pedri, Lewandowski), Atlético Madrid (Diego Simeone, Griezmann), Real Sociedad, Athletic Bilbao, Real Betis, Sevilla, Villarreal. ATV Corner covers all 380 matches with 7-day replay." },
      { h2: "LaLiga from abroad without Movistar+ or VPN", body: "Movistar+ owns LaLiga rights in Spain only. Outside Spain, you need a paid Spanish VPN + Spanish bank card — complex and fragile. ATV Corner aggregates European feeds accessible from France, Germany, Italy, UK without VPN or geo-restriction." },
    ],
    extraFaq: [
      { q: "Can I watch LaLiga with English commentary?", a: "Yes, English commentary via Premier Sports UK or ESPN feeds aggregated by ATV Corner." },
      { q: "Are all Real Madrid matches in 4K?", a: "All Real home games at Bernabéu are in 4K HDR. Away games depend on the host broadcaster." },
      { q: "Does ATV Corner include Copa del Rey?", a: "Yes, the Spanish Cup (Copa del Rey) is included, final in 4K." },
      { q: "Is Arabic commentary available for El Clasico?", a: "Yes, via beIN Sports MENA, Arabic commentary on flagship LaLiga matches." },
    ],
    related: [
      { label: "Watch Real Madrid", href: "/tools/team/real-madrid" },
      { label: "Watch Barcelona", href: "/tools/team/barcelona" },
      { label: "Football in Spain", href: "/tools/in/spain" },
      { label: "Subscription comparison", href: "/tools/comparison" },
    ],
  },
  de: {
    intro: "LaLiga aus Deutschland, der Schweiz oder \u00d6sterreich zu verfolgen erfordert mehrere geosperre offizielle Abos (DAZN, Sky), alle unvollst\u00e4ndig. ATV Corner b\u00fcndelt Movistar LaLiga, beIN, DAZN und Sky \u2014 alle 380 Spiele der spanischen Saison in HD/4K, ohne VPN.",
    sections: [
      { h2: "El Cl\u00e1sico Real Madrid vs FC Barcelona: das globale Topspiel", body: "El Cl\u00e1sico ist das meistgesehene Fu\u00dfballspiel der Welt, 600+ Millionen Zuschauer pro Ausgabe. Zweimal pro Saison: Real Madrid (Bernab\u00e9u, 81.000 Pl\u00e4tze) gegen FC Barcelona (Camp Nou, 99.000). ATV Corner streamt El Cl\u00e1sico stets in 4K HDR Dolby Vision mit Multi-Cam (8 Winkel) und Kommentar auf Deutsch, Spanisch, Englisch, Arabisch." },
      { h2: "Top-5-LaLiga-Klubs zum Verfolgen", body: "Real Madrid (35 LaLiga-Titel, Mbapp\u00e9, Vin\u00edcius, Bellingham), FC Barcelona (27 Titel, Yamal, Pedri, Lewandowski), Atl\u00e9tico Madrid (Diego Simeone, Griezmann), Real Sociedad, Athletic Bilbao, Real Betis, Sevilla, Villarreal. ATV Corner deckt alle 380 Spiele mit 7-Tage-Replay ab." },
      { h2: "LaLiga aus dem Ausland ohne Movistar+ oder VPN", body: "Movistar+ h\u00e4lt LaLiga-Rechte nur in Spanien. Au\u00dferhalb Spaniens braucht es kostenpflichtiges Spanien-VPN + spanische Bankkarte \u2014 komplex und fragil. ATV Corner b\u00fcndelt europ\u00e4ische Feeds, zug\u00e4nglich aus Deutschland, Frankreich, Italien, UK ohne VPN." },
    ],
    extraFaq: [
      { q: "Kann ich LaLiga mit deutschem Kommentar sehen?", a: "Ja, deutscher Kommentar via DAZN-Feeds, die von ATV Corner geb\u00fcndelt werden." },
      { q: "Laufen alle Real-Madrid-Spiele in 4K?", a: "Alle Heimspiele im Bernab\u00e9u laufen in 4K HDR. Ausw\u00e4rtsspiele h\u00e4ngen vom Heimsender ab." },
      { q: "Beinhaltet ATV Corner die Copa del Rey?", a: "Ja, der spanische Pokal (Copa del Rey) ist enthalten, das Finale in 4K." },
      { q: "Gibt es arabischen Kommentar f\u00fcr El Cl\u00e1sico?", a: "Ja, via beIN Sports MENA, arabischer Kommentar bei Topspielen." },
    ],
    related: [
      { label: "Real Madrid live", href: "/tools/team/real-madrid" },
      { label: "Barcelona live", href: "/tools/team/barcelona" },
      { label: "Fu\u00dfball in Spanien", href: "/tools/in/spain" },
      { label: "Abo-Vergleich", href: "/tools/comparison" },
    ],
  },
};

// ---------- Serie A ----------
leagueExtras["serie-a"] = {
  fr: {
    intro: "La Serie A retrouve son lustre avec Inter, Milan, Juve, Naples et l'Atalanta en Europe. DAZN détient l'exclusivité en Italie depuis 2021, mais reste géo-bloqué. ATV Corner ouvre l'accès à DAZN Italia, Sky Italia, beIN Sports et autres diffuseurs pour les 380 matchs annuels en HD/4K.",
    sections: [
      { h2: "Derby della Madonnina, Derby d'Italia, Derby della Capitale", body: "La Serie A propose les derbies les plus passionnés du football : Inter-Milan (Derby della Madonnina), Juventus-Inter (Derby d'Italia), Roma-Lazio (Derby della Capitale). ATV Corner diffuse chaque derby en 4K HDR Dolby Vision avec multi-cam et commentaires italien, français, anglais, allemand, arabe." },
      { h2: "Les stars de la Serie A 2025/2026", body: "Lautaro Martínez (Inter), Khvicha Kvaratskhelia (Napoli), Rafael Leão (Milan), Dušan Vlahović (Juventus), Romelu Lukaku (Napoli), Federico Chiesa (Liverpool ex-Juve), Ademola Lookman (Atalanta). ATV Corner suit chaque star en gros plan via multi-cam." },
      { h2: "Coppa Italia et Supercoppa Italiana incluses", body: "Au-delà des 380 matchs de championnat, ATV Corner diffuse la Coppa Italia (huitièmes à finale), la Supercoppa Italiana (4 équipes, Arabie Saoudite ou Italie) et les phases européennes des clubs italiens (UCL, UEL, Conference League)." },
    ],
    extraFaq: [
      { q: "DAZN Italia est-il accessible depuis la France via ATV Corner ?", a: "Oui, les feeds DAZN Italia sont agrégés et accessibles depuis la France, l'Allemagne, la Belgique sans VPN." },
      { q: "Le Derby della Madonnina est-il en 4K ?", a: "Oui, Inter-Milan est diffusé en 4K HDR Dolby Vision avec multi-cam." },
      { q: "Les commentaires français Serie A sont-ils disponibles ?", a: "Oui, via les feeds beIN Sports France et RMC Sport qui couvrent les grands matchs Serie A." },
    ],
    related: [
      { label: "Regarder Juventus", href: "/tools/team/juventus" },
      { label: "Football en Italie", href: "/tools/in/italy" },
      { label: "Comparatif abonnements", href: "/tools/comparison" },
    ],
  },
  en: {
    intro: "Serie A is regaining its prestige with Inter, Milan, Juve, Napoli and Atalanta in Europe. DAZN holds Italian exclusivity since 2021 but remains geo-locked. ATV Corner opens access to DAZN Italia, Sky Italia, beIN Sports and other broadcasters for the 380-match annual season in HD/4K.",
    sections: [
      { h2: "Derby della Madonnina, Derby d'Italia, Derby della Capitale", body: "Serie A delivers the most passionate derbies in football: Inter vs Milan (Derby della Madonnina), Juventus vs Inter (Derby d'Italia), Roma vs Lazio (Derby della Capitale). ATV Corner streams every derby in 4K HDR Dolby Vision with multi-cam and Italian, English, French, German, Arabic commentary." },
      { h2: "Serie A 2025/2026 superstars", body: "Lautaro Martínez (Inter), Khvicha Kvaratskhelia (Napoli), Rafael Leão (Milan), Dušan Vlahović (Juventus), Romelu Lukaku (Napoli), Federico Chiesa (Liverpool ex-Juve), Ademola Lookman (Atalanta). ATV Corner tracks every star via multi-cam close-ups." },
      { h2: "Coppa Italia and Supercoppa Italiana included", body: "Beyond the 380 league matches, ATV Corner streams Coppa Italia (R16 to final), Supercoppa Italiana (4-team format, Saudi Arabia or Italy) and Italian clubs' European campaigns (UCL, UEL, Conference League)." },
    ],
    extraFaq: [
      { q: "Is DAZN Italia accessible from abroad via ATV Corner?", a: "Yes, DAZN Italia feeds are aggregated and accessible from France, Germany, Belgium without VPN." },
      { q: "Is the Derby della Madonnina in 4K?", a: "Yes, Inter vs Milan streams in 4K HDR Dolby Vision with multi-cam." },
      { q: "Is English commentary available for Serie A?", a: "Yes, via Paramount+ / CBS Sports feeds aggregated for English-language Serie A coverage." },
    ],
    related: [
      { label: "Watch Juventus", href: "/tools/team/juventus" },
      { label: "Football in Italy", href: "/tools/in/italy" },
      { label: "Subscription comparison", href: "/tools/comparison" },
    ],
  },
  de: {
    intro: "Die Serie A gewinnt mit Inter, Milan, Juve, Napoli und Atalanta in Europa an Glanz zur\u00fcck. DAZN h\u00e4lt seit 2021 die Italien-Exklusivit\u00e4t, bleibt aber geosperrt. ATV Corner \u00f6ffnet den Zugang zu DAZN Italia, Sky Italia, beIN Sports f\u00fcr die 380 Spiele pro Jahr in HD/4K.",
    sections: [
      { h2: "Derby della Madonnina, Derby d'Italia, Derby della Capitale", body: "Serie A liefert die leidenschaftlichsten Derbys: Inter vs Milan (Madonnina), Juventus vs Inter (d'Italia), Roma vs Lazio (Capitale). ATV Corner streamt jedes Derby in 4K HDR Dolby Vision mit Multi-Cam und Kommentar auf Italienisch, Deutsch, Englisch, Franz\u00f6sisch, Arabisch." },
      { h2: "Serie-A-Superstars 2025/2026", body: "Lautaro Mart\u00ednez (Inter), Khvicha Kvaratskhelia (Napoli), Rafael Le\u00e3o (Milan), Du\u0161an Vlahovi\u0107 (Juventus), Romelu Lukaku (Napoli), Federico Chiesa, Ademola Lookman (Atalanta). ATV Corner verfolgt jeden Star per Multi-Cam-Nahaufnahme." },
      { h2: "Coppa Italia und Supercoppa Italiana inklusive", body: "Neben den 380 Ligaspielen streamt ATV Corner Coppa Italia (Achtelfinale bis Finale), Supercoppa Italiana (4-Team-Format, Saudi-Arabien oder Italien) und die Europapokal-Auftritte italienischer Klubs (UCL, UEL, Conference League)." },
    ],
    extraFaq: [
      { q: "Ist DAZN Italia aus dem Ausland \u00fcber ATV Corner zug\u00e4nglich?", a: "Ja, DAZN-Italia-Feeds werden geb\u00fcndelt und sind aus Deutschland, Frankreich, Belgien ohne VPN zug\u00e4nglich." },
      { q: "L\u00e4uft das Derby della Madonnina in 4K?", a: "Ja, Inter vs Milan in 4K HDR Dolby Vision mit Multi-Cam." },
      { q: "Gibt es deutschen Kommentar f\u00fcr Serie A?", a: "Ja, via DAZN-Deutschland-Feeds bei wichtigen Serie-A-Spielen." },
    ],
    related: [
      { label: "Juventus live", href: "/tools/team/juventus" },
      { label: "Fu\u00dfball in Italien", href: "/tools/in/italy" },
      { label: "Abo-Vergleich", href: "/tools/comparison" },
    ],
  },
};

// ---------- Bundesliga ----------
leagueExtras["bundesliga"] = {
  fr: {
    intro: "La Bundesliga, championnat allemand mythique, est partagée entre Sky Deutschland et DAZN en Allemagne. Hors d'Allemagne, beIN Sports France, Canal+, Movistar, Sky Italia diffusent partiellement. ATV Corner unifie tous ces flux pour les 306 matchs annuels en HD/4K.",
    sections: [
      { h2: "Der Klassiker Bayern Munich - Borussia Dortmund", body: "Le Klassiker Bayern-Dortmund est l'affiche reine de la Bundesliga, programmée deux fois par saison. Allianz Arena (75 000 places) et Signal Iduna Park (Westfalenstadion, 81 000 places, le plus grand stade d'Europe en capacité debout). ATV Corner diffuse Der Klassiker en 4K HDR avec mur du Sud (Yellow Wall) capturé en multi-cam." },
      { h2: "Bundesliga-Konferenz : 5 matchs en simultané", body: "La spécificité Bundesliga : 5 matchs samedi à 15h30, diffusés en Konferenz (multiplex). ATV Corner reprend la Bundesliga-Konferenz Sky Deutschland avec switch automatique sur les buts, ainsi que les matchs individuels en flux séparé." },
      { h2: "Clubs phares : Bayern, Dortmund, Leipzig, Leverkusen", body: "Bayern Munich (33 titres), Borussia Dortmund (8), RB Leipzig (montée rapide), Bayer Leverkusen (champion 2024 avec Xabi Alonso), Eintracht Frankfurt, Borussia Mönchengladbach, VfB Stuttgart. 18 clubs, 306 matchs, Konferenz du samedi en bonus." },
    ],
    extraFaq: [
      { q: "Der Klassiker est-il en 4K HDR ?", a: "Oui, Bayern-Dortmund systématiquement en 4K HDR avec multi-cam et commentaires français, allemand, anglais." },
      { q: "Peut-on regarder la Bundesliga-Konferenz depuis la France ?", a: "Oui, ATV Corner agrège Sky Deutschland et diffuse la Konferenz du samedi 15h30 accessible depuis la France sans VPN." },
      { q: "Combien de matchs Bundesliga par saison ?", a: "306 matchs : 18 clubs, 34 journées, chaque équipe joue 17 à domicile et 17 à l'extérieur." },
    ],
    related: [
      { label: "Regarder Bayern Munich", href: "/tools/team/bayern-munich" },
      { label: "Regarder Borussia Dortmund", href: "/tools/team/borussia-dortmund" },
      { label: "Football en Allemagne", href: "/tools/in/germany" },
    ],
  },
  en: {
    intro: "The Bundesliga, mythical German championship, is split between Sky Deutschland and DAZN in Germany. Outside Germany, beIN Sports France, ESPN+ US, Movistar Spain, Sky Italia broadcast partially. ATV Corner unifies every feed for the 306 annual matches in HD/4K.",
    sections: [
      { h2: "Der Klassiker Bayern Munich vs Borussia Dortmund", body: "Der Klassiker Bayern vs Dortmund is the Bundesliga showpiece, played twice per season. Allianz Arena (75,000) and Signal Iduna Park (Westfalenstadion, 81,000 — Europe's largest standing capacity). ATV Corner streams Der Klassiker in 4K HDR with the Südtribüne Yellow Wall captured in multi-cam." },
      { h2: "Bundesliga-Konferenz: 5 simultaneous matches", body: "Bundesliga's unique format: 5 matches Saturday 15:30, broadcast as Konferenz multiplex. ATV Corner relays Sky Deutschland Bundesliga-Konferenz with automatic goal-switch, plus individual full-match feeds in parallel." },
      { h2: "Flagship clubs: Bayern, Dortmund, Leipzig, Leverkusen", body: "Bayern Munich (33 titles), Borussia Dortmund (8), RB Leipzig (rapid rise), Bayer Leverkusen (2024 champions under Xabi Alonso), Eintracht Frankfurt, Borussia Mönchengladbach, VfB Stuttgart. 18 clubs, 306 matches, Saturday Konferenz bonus." },
    ],
    extraFaq: [
      { q: "Is Der Klassiker in 4K HDR?", a: "Yes, Bayern vs Dortmund consistently in 4K HDR with multi-cam and English, German, French commentary." },
      { q: "Can I watch Bundesliga-Konferenz from abroad?", a: "Yes, ATV Corner aggregates Sky Deutschland and streams the Saturday 15:30 Konferenz accessible from any European country without VPN." },
      { q: "How many Bundesliga matches per season?", a: "306 matches: 18 clubs, 34 matchdays, each team plays 17 home and 17 away." },
    ],
    related: [
      { label: "Watch Bayern Munich", href: "/tools/team/bayern-munich" },
      { label: "Watch Borussia Dortmund", href: "/tools/team/borussia-dortmund" },
      { label: "Football in Germany", href: "/tools/in/germany" },
    ],
  },
  de: {
    intro: "Die Bundesliga, mythische deutsche Meisterschaft, ist zwischen Sky Deutschland und DAZN aufgeteilt. Au\u00dferhalb Deutschlands streamen beIN Sports, ESPN+, Movistar, Sky Italia teilweise. ATV Corner b\u00fcndelt jeden Feed f\u00fcr 306 j\u00e4hrliche Spiele in HD/4K.",
    sections: [
      { h2: "Der Klassiker Bayern M\u00fcnchen \u2013 Borussia Dortmund", body: "Der Klassiker Bayern vs Dortmund ist das Bundesliga-Highlight, zweimal pro Saison. Allianz Arena (75.000) und Signal-Iduna-Park (Westfalenstadion, 81.000 \u2014 Europas gr\u00f6\u00dfte Stehplatzkapazit\u00e4t). ATV Corner streamt Der Klassiker in 4K HDR mit der Gelben Wand der S\u00fcdtrib\u00fcne per Multi-Cam." },
      { h2: "Bundesliga-Konferenz: 5 Parallel-Spiele", body: "Bundesliga-Einzigartigkeit: 5 Spiele Samstag 15:30, als Konferenz-Multiplex \u00fcbertragen. ATV Corner gibt die Sky-Deutschland-Bundesliga-Konferenz mit automatischem Tor-Switch weiter, plus Einzelspiele parallel." },
      { h2: "Top-Klubs: Bayern, Dortmund, Leipzig, Leverkusen", body: "Bayern M\u00fcnchen (33 Titel), Borussia Dortmund (8), RB Leipzig (schneller Aufstieg), Bayer Leverkusen (Meister 2024 unter Xabi Alonso), Eintracht Frankfurt, Borussia M\u00f6nchengladbach, VfB Stuttgart. 18 Klubs, 306 Spiele, Samstags-Konferenz als Bonus." },
    ],
    extraFaq: [
      { q: "L\u00e4uft Der Klassiker in 4K HDR?", a: "Ja, Bayern vs Dortmund konstant in 4K HDR mit Multi-Cam und Kommentar auf Deutsch, Englisch, Franz\u00f6sisch." },
      { q: "Kann ich die Bundesliga-Konferenz aus dem Ausland sehen?", a: "Ja, ATV Corner b\u00fcndelt Sky Deutschland und streamt die Samstags-15:30-Konferenz aus jedem europ\u00e4ischen Land ohne VPN." },
      { q: "Wie viele Bundesliga-Spiele pro Saison?", a: "306 Spiele: 18 Klubs, 34 Spieltage, jede Mannschaft 17 Heim- und 17 Ausw\u00e4rtsspiele." },
    ],
    related: [
      { label: "Bayern M\u00fcnchen live", href: "/tools/team/bayern-munich" },
      { label: "Borussia Dortmund live", href: "/tools/team/borussia-dortmund" },
      { label: "Fu\u00dfball in Deutschland", href: "/tools/in/germany" },
    ],
  },
};

// ---------- Ligue 1 ----------
leagueExtras["ligue-1"] = {
  fr: {
    intro: "Depuis l'éclatement des droits Ligue 1 entre DAZN (8 matchs sur 9), beIN Sports (1 match), et Canal+ Foot (résumés), suivre intégralement le championnat français est devenu coûteux et morcelé. ATV Corner regroupe tous les flux Ligue 1 dans un abonnement unique à 15€/mois.",
    sections: [
      { h2: "Le Classique PSG - Olympique de Marseille", body: "Le Classique PSG-OM est le derby phare du football français, programmé deux fois par saison. Parc des Princes (48 000 places, Paris) face au Stade Vélodrome (67 000 places, Marseille). ATV Corner diffuse Le Classique en 4K HDR Dolby Vision avec multi-cam et commentaires français, anglais, allemand, arabe." },
      { h2: "Les stars de la Ligue 1 2025/2026", body: "Désiré Doué, Bradley Barcola, João Neves, Vitinha (PSG), Pierre-Emerick Aubameyang, Mason Greenwood (OM), Alexandre Lacazette (Lyon), Aleksandr Golovin (Monaco), Jonathan David (Lille). ATV Corner suit chaque grand nom en multi-cam." },
      { h2: "Coupe de France et Trophée des Champions inclus", body: "Au-delà des 306 matchs de Ligue 1, ATV Corner diffuse la Coupe de France (32es à finale), le Trophée des Champions (match d'ouverture saison) et les phases européennes des clubs français (UCL, UEL, Conference)." },
    ],
    extraFaq: [
      { q: "DAZN Ligue 1 est-il inclus dans ATV Corner ?", a: "Oui, les 8 matchs DAZN par journée sont agrégés et accessibles, plus le match beIN Sports et les résumés Canal+ Foot." },
      { q: "Le Classique PSG-OM est-il diffusé en 4K ?", a: "Oui, en 4K HDR Dolby Vision avec 8 angles caméra et 4 langues de commentaire." },
      { q: "Peut-on regarder l'OM depuis l'étranger ?", a: "Oui, ATV Corner agrège les feeds Ligue 1 français accessibles depuis l'Allemagne, l'Italie, l'Espagne, le Royaume-Uni sans VPN." },
    ],
    related: [
      { label: "Regarder PSG", href: "/tools/team/psg" },
      { label: "Regarder l'Olympique de Marseille", href: "/tools/team/olympique-marseille" },
      { label: "Football en France", href: "/tools/in/france" },
    ],
  },
  en: {
    intro: "Since Ligue 1 rights fragmented between DAZN (8 of 9 matches), beIN Sports (1 match) and Canal+ Foot (highlights), following the French championship fully has become expensive and scattered. ATV Corner consolidates every Ligue 1 feed in one subscription from €15/month.",
    sections: [
      { h2: "Le Classique PSG vs Olympique de Marseille", body: "Le Classique PSG vs OM is French football's flagship derby, played twice per season. Parc des Princes (48,000, Paris) vs Stade Vélodrome (67,000, Marseille). ATV Corner streams Le Classique in 4K HDR Dolby Vision with multi-cam and English, French, German, Arabic commentary." },
      { h2: "Ligue 1 2025/2026 stars", body: "Désiré Doué, Bradley Barcola, João Neves, Vitinha (PSG), Pierre-Emerick Aubameyang, Mason Greenwood (OM), Alexandre Lacazette (Lyon), Aleksandr Golovin (Monaco), Jonathan David (Lille). ATV Corner tracks every star via multi-cam." },
      { h2: "Coupe de France and Trophée des Champions included", body: "Beyond the 306 Ligue 1 fixtures, ATV Corner streams Coupe de France (R32 to final), Trophée des Champions (season-opening match) and French clubs' European campaigns (UCL, UEL, Conference)." },
    ],
    extraFaq: [
      { q: "Is DAZN Ligue 1 included in ATV Corner?", a: "Yes, the 8 DAZN matches per matchday are aggregated, plus the beIN Sports match and Canal+ Foot highlights." },
      { q: "Is Le Classique PSG vs OM streamed in 4K?", a: "Yes, in 4K HDR Dolby Vision with 8 camera angles and 4 commentary languages." },
      { q: "Can I watch OM from abroad?", a: "Yes, ATV Corner aggregates Ligue 1 French feeds accessible from Germany, Italy, Spain, UK without VPN." },
    ],
    related: [
      { label: "Watch PSG", href: "/tools/team/psg" },
      { label: "Watch Olympique de Marseille", href: "/tools/team/olympique-marseille" },
      { label: "Football in France", href: "/tools/in/france" },
    ],
  },
  de: {
    intro: "Seit der Aufsplittung der Ligue-1-Rechte zwischen DAZN (8 von 9 Spielen), beIN Sports (1 Spiel) und Canal+ Foot (Highlights) ist die vollst\u00e4ndige Verfolgung der franz\u00f6sischen Meisterschaft teuer und zersplittert geworden. ATV Corner b\u00fcndelt jeden Ligue-1-Feed in einem Abo ab 15\u20ac/Monat.",
    sections: [
      { h2: "Le Classique PSG \u2013 Olympique de Marseille", body: "Le Classique PSG vs OM ist das franz\u00f6sische Top-Derby, zweimal pro Saison. Parc des Princes (48.000, Paris) gegen Stade V\u00e9lodrome (67.000, Marseille). ATV Corner streamt Le Classique in 4K HDR Dolby Vision mit Multi-Cam und Kommentar auf Deutsch, Franz\u00f6sisch, Englisch, Arabisch." },
      { h2: "Ligue-1-Stars 2025/2026", body: "D\u00e9sir\u00e9 Dou\u00e9, Bradley Barcola, Jo\u00e3o Neves, Vitinha (PSG), Pierre-Emerick Aubameyang, Mason Greenwood (OM), Alexandre Lacazette (Lyon), Aleksandr Golovin (Monaco), Jonathan David (Lille). ATV Corner verfolgt jeden Star per Multi-Cam." },
      { h2: "Coupe de France und Troph\u00e9e des Champions inklusive", body: "Neben den 306 Ligue-1-Partien streamt ATV Corner Coupe de France (32erfinale bis Finale), Troph\u00e9e des Champions (Saisoner\u00f6ffnungsspiel) und die Europapokal-Auftritte franz\u00f6sischer Klubs (UCL, UEL, Conference)." },
    ],
    extraFaq: [
      { q: "Ist DAZN Ligue 1 in ATV Corner enthalten?", a: "Ja, die 8 DAZN-Spiele pro Spieltag werden geb\u00fcndelt, plus das beIN-Sports-Spiel und Canal+-Foot-Highlights." },
      { q: "L\u00e4uft Le Classique PSG vs OM in 4K?", a: "Ja, in 4K HDR Dolby Vision mit 8 Kamerawinkeln und 4 Kommentarsprachen." },
      { q: "Kann ich OM aus dem Ausland sehen?", a: "Ja, ATV Corner b\u00fcndelt franz\u00f6sische Ligue-1-Feeds aus Deutschland, Italien, Spanien, UK \u2014 ohne VPN." },
    ],
    related: [
      { label: "PSG live", href: "/tools/team/psg" },
      { label: "Olympique Marseille live", href: "/tools/team/olympique-marseille" },
      { label: "Fu\u00dfball in Frankreich", href: "/tools/in/france" },
    ],
  },
};

// ---------- Europa League ----------
leagueExtras["europa-league"] = {
  fr: {
    intro: "L'Europa League UEFA, deuxième compétition continentale, propose un nouveau format à 36 équipes depuis 2024/25. Les droits sont éclatés entre Canal+, RMC Sport, beIN Sports en France, RTL/Nitro en Allemagne, Sky Italia, Movistar. ATV Corner regroupe tous ces flux dans une seule application.",
    sections: [
      { h2: "Nouveau format Europa League 36 équipes", body: "Phase de ligue à 8 matchs par équipe (au lieu de groupes), classement unique, top 8 directement en 8es, 9-24 en barrages, 16 dernières équipes en élimination directe jusqu'à la finale. ATV Corner couvre 144 matchs de phase de ligue + élimination directe + finale = environ 200 rencontres." },
      { h2: "Clubs habitués : Roma, Tottenham, Atalanta, Leverkusen", body: "AS Roma (José Mourinho-era finaliste), Tottenham, Manchester United (vainqueur 2017), Atalanta, Bayer Leverkusen (vainqueur 2024 contre Atalanta), Ajax, FC Porto, Sporting CP, Galatasaray. ATV Corner diffuse chaque match en HD 1080p, 4K HDR sur les chocs." },
    ],
    extraFaq: [
      { q: "Tous les matchs Europa League sont-ils en français ?", a: "Oui, les commentaires français sont disponibles via les feeds Canal+ et RMC Sport agrégés par ATV Corner." },
      { q: "La finale Europa League est-elle en 4K ?", a: "Oui, en 4K HDR Dolby Vision systématiquement." },
    ],
    related: [
      { label: "Champions League en direct", href: "/tools/watch/champions-league" },
      { label: "Comparatif abonnements", href: "/tools/comparison" },
    ],
  },
  en: {
    intro: "The UEFA Europa League, Europe's second continental competition, runs a new 36-team format since 2024/25. Rights are split between BT/TNT Sports UK, Canal+, RMC Sport France, RTL/Nitro Germany, Sky Italia, Movistar Spain. ATV Corner consolidates every feed in one app.",
    sections: [
      { h2: "New Europa League 36-team format", body: "8-match league phase per team (instead of groups), single table, top 8 direct to R16, 9-24 play knockout play-offs, 16 remaining teams in direct elimination through to the final. ATV Corner covers 144 league-phase matches + knockouts + final = around 200 fixtures." },
      { h2: "Regular clubs: Roma, Tottenham, Atalanta, Leverkusen", body: "AS Roma (Mourinho-era finalist), Tottenham, Manchester United (2017 winners), Atalanta, Bayer Leverkusen (2024 finalists vs Atalanta), Ajax, FC Porto, Sporting CP, Galatasaray. ATV Corner streams every match in HD 1080p, 4K HDR on flagship clashes." },
    ],
    extraFaq: [
      { q: "Are Europa League matches available in English?", a: "Yes, English commentary via BT/TNT Sports feeds aggregated by ATV Corner." },
      { q: "Is the Europa League final in 4K?", a: "Yes, consistently in 4K HDR Dolby Vision." },
    ],
    related: [
      { label: "Champions League live", href: "/tools/watch/champions-league" },
      { label: "Subscription comparison", href: "/tools/comparison" },
    ],
  },
  de: {
    intro: "Die UEFA Europa League, Europas zweiter Kontinentalwettbewerb, l\u00e4uft seit 2024/25 in einem neuen 36-Team-Format. Die Rechte sind zwischen RTL/Nitro, DAZN, BT/TNT Sports, Canal+, Sky Italia, Movistar verteilt. ATV Corner b\u00fcndelt jeden Feed in einer App.",
    sections: [
      { h2: "Neues Europa-League-36-Team-Format", body: "8 Ligaphasen-Spiele pro Team (statt Gruppen), Einzeltabelle, Top 8 direkt ins Achtelfinale, 9\u201324 in Playoffs, 16 verbleibende Teams in K.-o.-Runden bis zum Finale. ATV Corner deckt 144 Ligaphasen-Spiele + K.-o.-Runden + Finale = rund 200 Partien ab." },
      { h2: "Stammklubs: Roma, Tottenham, Atalanta, Leverkusen", body: "AS Roma (Mourinho-\u00c4ra-Finalist), Tottenham, Manchester United (Sieger 2017), Atalanta, Bayer Leverkusen (Finalist 2024 gegen Atalanta), Ajax, FC Porto, Sporting CP, Galatasaray. ATV Corner streamt jedes Spiel in HD 1080p, 4K HDR bei Topspielen." },
    ],
    extraFaq: [
      { q: "Sind Europa-League-Spiele auf Deutsch verf\u00fcgbar?", a: "Ja, deutscher Kommentar via RTL/Nitro- und DAZN-Feeds, die von ATV Corner geb\u00fcndelt werden." },
      { q: "L\u00e4uft das Europa-League-Finale in 4K?", a: "Ja, konstant in 4K HDR Dolby Vision." },
    ],
    related: [
      { label: "Champions League live", href: "/tools/watch/champions-league" },
      { label: "Abo-Vergleich", href: "/tools/comparison" },
    ],
  },
};

export function getLeagueExtras(slug: string, lang: Locale): SeoExtras | undefined {
  return leagueExtras[slug]?.[lang];
}

// ============================================================
// COUNTRY EXTRAS
// ============================================================
export const countryExtras: Record<string, LocalizedExtras> = {
  france: {
    fr: {
      intro: "Regarder le football en France n'a jamais été aussi compliqué : Ligue 1 sur DAZN et beIN Sports, Premier League sur Canal+, Champions League sur Canal+, LaLiga sur beIN, Bundesliga sur beIN, Serie A sur RMC. Pour suivre toutes les compétitions, un fan français devait cumuler 4 à 5 abonnements officiels pour 100€+/mois. ATV Corner regroupe DAZN, Canal+, beIN, RMC, Prime Video Ligue 1 dans un seul abonnement à partir de 15€/mois.",
      sections: [
        { h2: "Tous les championnats accessibles depuis la France", body: "Ligue 1 McDonald's (PSG, OM, Lyon, Monaco — 306 matchs), Premier League anglaise (380 matchs), LaLiga espagnole (380 matchs, El Clasico), Serie A italienne (380 matchs), Bundesliga allemande (306 matchs), Liga portugaise, Eredivisie néerlandaise, Champions League UEFA (189 matchs), Europa League, Conference League." },
        { h2: "Coupes nationales et internationales en France", body: "Coupe de France, Trophée des Champions, Coupe de la Ligue (archives), Coupe du Monde FIFA, Euro UEFA, Copa America, Ligue des Nations UEFA, qualifications Mondial. ATV Corner couvre toutes les compétitions internationales depuis n'importe quel département français." },
        { h2: "Streaming football depuis Paris, Lyon, Marseille, Toulouse", body: "ATV Corner fonctionne sur toute la France métropolitaine et DOM-TOM (Guadeloupe, Martinique, Réunion, Mayotte, Guyane) — débit fibre Free, Orange, SFR, Bouygues recommandé pour 4K. Compatible Smart TV Samsung, LG, Sony et box opérateurs (Freebox, Livebox, SFR Box, Bbox)." },
      ],
      extraFaq: [
        { q: "ATV Corner est-il légal en France ?", a: "ATV Corner agrège des flux légaux européens via licence. L'utilisateur est responsable de son usage personnel et privé conformément au droit français." },
        { q: "Peut-on regarder le PSG sur Freebox via ATV Corner ?", a: "Oui, via l'app Smarters Pro disponible sur Free Player ou via la fonction navigateur web de la Freebox." },
        { q: "Toutes les chaînes Canal+ Foot sont-elles incluses ?", a: "Oui — Canal+ Sport, Canal+ Foot, Canal+ Décalé pour la Premier League, la Champions League et les matchs Ligue 1 Canal." },
      ],
      related: [
        { label: "Regarder la Ligue 1", href: "/tools/watch/ligue-1" },
        { label: "Regarder la Premier League", href: "/tools/watch/premier-league" },
        { label: "Regarder le PSG", href: "/tools/team/psg" },
        { label: "Regarder l'Olympique de Marseille", href: "/tools/team/olympique-marseille" },
        { label: "Comparatif abonnements", href: "/tools/comparison" },
      ],
    },
    en: {
      intro: "Watching football in France has never been more complicated: Ligue 1 on DAZN and beIN Sports, Premier League on Canal+, Champions League on Canal+, LaLiga on beIN, Bundesliga on beIN, Serie A on RMC. To follow every competition, a French fan needed 4–5 official subscriptions totalling €100+/month. ATV Corner consolidates DAZN, Canal+, beIN, RMC, Prime Video Ligue 1 in one subscription from €15/month.",
      sections: [
        { h2: "Every league accessible from France", body: "Ligue 1 McDonald's (PSG, OM, Lyon, Monaco — 306 matches), English Premier League (380), Spanish LaLiga (380, El Clasico), Italian Serie A (380), German Bundesliga (306), Portuguese Liga, Dutch Eredivisie, UEFA Champions League (189), Europa League, Conference League." },
        { h2: "National and international cups from France", body: "Coupe de France, Trophée des Champions, FIFA World Cup, UEFA Euro, Copa America, UEFA Nations League, World Cup qualifiers. ATV Corner covers every international competition from any French region." },
        { h2: "Football streaming from Paris, Lyon, Marseille, Toulouse", body: "ATV Corner works across mainland France and overseas territories (Guadeloupe, Martinique, Réunion, Mayotte, Guyane) — fibre Free, Orange, SFR, Bouygues recommended for 4K. Compatible with Samsung, LG, Sony Smart TVs and operator boxes (Freebox, Livebox, SFR Box, Bbox)." },
      ],
      extraFaq: [
        { q: "Is ATV Corner legal in France?", a: "ATV Corner aggregates licensed European feeds. Users are responsible for personal private use under French law." },
        { q: "Can I watch PSG on Freebox via ATV Corner?", a: "Yes, via the Smarters Pro app available on Free Player or through the Freebox browser." },
        { q: "Are all Canal+ Foot channels included?", a: "Yes — Canal+ Sport, Canal+ Foot, Canal+ Décalé for Premier League, Champions League and Canal Ligue 1 matches." },
      ],
      related: [
        { label: "Watch Ligue 1", href: "/tools/watch/ligue-1" },
        { label: "Watch Premier League", href: "/tools/watch/premier-league" },
        { label: "Watch PSG", href: "/tools/team/psg" },
        { label: "Watch Olympique de Marseille", href: "/tools/team/olympique-marseille" },
        { label: "Subscription comparison", href: "/tools/comparison" },
      ],
    },
    de: {
      intro: "Fu\u00dfball in Frankreich zu schauen war noch nie komplizierter: Ligue 1 auf DAZN und beIN Sports, Premier League auf Canal+, Champions League auf Canal+, LaLiga auf beIN, Bundesliga auf beIN, Serie A auf RMC. F\u00fcr alle Wettbewerbe brauchte ein franz\u00f6sischer Fan 4\u20135 offizielle Abos f\u00fcr 100\u20ac+/Monat. ATV Corner b\u00fcndelt DAZN, Canal+, beIN, RMC, Prime Video Ligue 1 in einem Abo ab 15\u20ac/Monat.",
      sections: [
        { h2: "Alle Ligen aus Frankreich zug\u00e4nglich", body: "Ligue 1 McDonald's (PSG, OM, Lyon, Monaco \u2014 306 Spiele), Premier League (380), LaLiga (380, El Cl\u00e1sico), Serie A (380), Bundesliga (306), Liga Portugal, Eredivisie, UEFA Champions League (189), Europa League, Conference League." },
        { h2: "Nationale und internationale Pokale", body: "Coupe de France, Troph\u00e9e des Champions, FIFA-WM, UEFA EM, Copa America, UEFA Nations League, WM-Qualifikationen. ATV Corner deckt jeden internationalen Wettbewerb aus jeder franz\u00f6sischen Region ab." },
        { h2: "Fu\u00dfball-Streaming aus Paris, Lyon, Marseille, Toulouse", body: "ATV Corner funktioniert in ganz Festland-Frankreich und \u00dcberseegebieten (Guadeloupe, Martinique, R\u00e9union, Mayotte, Guyane) \u2014 Glasfaser Free, Orange, SFR, Bouygues f\u00fcr 4K empfohlen. Kompatibel mit Samsung, LG, Sony Smart TVs und Provider-Boxen (Freebox, Livebox, SFR Box, Bbox)." },
      ],
      extraFaq: [
        { q: "Ist ATV Corner in Frankreich legal?", a: "ATV Corner b\u00fcndelt lizenzierte europ\u00e4ische Feeds. Nutzer sind f\u00fcr private Nutzung nach franz\u00f6sischem Recht verantwortlich." },
        { q: "Kann ich PSG \u00fcber Freebox per ATV Corner sehen?", a: "Ja, via Smarters-Pro-App auf Free Player oder \u00fcber den Freebox-Browser." },
        { q: "Sind alle Canal+-Foot-Kan\u00e4le enthalten?", a: "Ja \u2014 Canal+ Sport, Canal+ Foot, Canal+ D\u00e9cal\u00e9 f\u00fcr Premier League, Champions League und Canal-Ligue-1-Spiele." },
      ],
      related: [
        { label: "Ligue 1 live", href: "/tools/watch/ligue-1" },
        { label: "Premier League live", href: "/tools/watch/premier-league" },
        { label: "PSG live", href: "/tools/team/psg" },
        { label: "Olympique Marseille live", href: "/tools/team/olympique-marseille" },
        { label: "Abo-Vergleich", href: "/tools/comparison" },
      ],
    },
  },
  germany: {
    fr: {
      intro: "En Allemagne, le football est partagé entre Sky Deutschland (Bundesliga, Premier League, Formula 1), DAZN (Champions League, Bundesliga, La Liga, Serie A), RTL/Nitro (Europa League), Amazon Prime (UCL mardi). Pour suivre Bundesliga + Champions League + Premier League depuis l'Allemagne, comptez 80€+/mois. ATV Corner agrège tout pour 15€/mois.",
      sections: [
        { h2: "Bundesliga, Champions League et plus en Allemagne", body: "Bundesliga (Bayern, Dortmund, Leipzig, Leverkusen — 306 matchs Konferenz incluse), 2. Bundesliga, DFB-Pokal, Champions League (mardi Prime + mercredi DAZN), Europa League RTL/Nitro, Premier League Sky, Serie A DAZN, LaLiga DAZN, Ligue 1 DAZN." },
        { h2: "Bundesliga-Konferenz et grands derbies", body: "La Bundesliga-Konferenz du samedi à 15h30 propose 5 matchs simultanés en multiplex. Der Klassiker Bayern-Dortmund, Revierderby Dortmund-Schalke (en 2. Bundesliga récemment), Bayern-Leverkusen, RB Leipzig-Union Berlin. ATV Corner relaie la Konferenz et chaque match en flux séparé." },
        { h2: "Streaming depuis Berlin, Munich, Hambourg, Cologne", body: "ATV Corner fonctionne sur toute l'Allemagne, Autriche et Suisse alémanique. Compatible Smart TV Samsung, LG, Sony, Apple TV, Fire TV Stick, MagentaTV box, Vodafone GigaTV box, Telekom Magenta. Débit minimum 8 Mbps HD, 25 Mbps 4K HDR." },
      ],
      extraFaq: [
        { q: "Toutes les chaînes Sky Bundesliga sont-elles incluses ?", a: "Oui — Sky Sport Bundesliga 1 à 7, Sky Sport Top Event, Sky Sport UHD pour les matchs en 4K HDR." },
        { q: "DAZN Allemagne est-il accessible via ATV Corner ?", a: "Oui, les feeds DAZN Allemagne (Bundesliga vendredi/samedi 18h30/dimanche, Champions League mercredi) sont agrégés." },
      ],
      related: [
        { label: "Regarder la Bundesliga", href: "/tools/watch/bundesliga" },
        { label: "Regarder Bayern Munich", href: "/tools/team/bayern-munich" },
        { label: "Regarder Borussia Dortmund", href: "/tools/team/borussia-dortmund" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
      ],
    },
    en: {
      intro: "In Germany, football is split between Sky Deutschland (Bundesliga, Premier League, F1), DAZN (Champions League, Bundesliga, LaLiga, Serie A), RTL/Nitro (Europa League), Amazon Prime (Tuesday UCL). To follow Bundesliga + Champions League + Premier League from Germany, expect €80+/month. ATV Corner aggregates everything for €15/month.",
      sections: [
        { h2: "Bundesliga, Champions League and more from Germany", body: "Bundesliga (Bayern, Dortmund, Leipzig, Leverkusen — 306 matches, Konferenz included), 2. Bundesliga, DFB-Pokal, Champions League (Tuesday Prime + Wednesday DAZN), Europa League RTL/Nitro, Premier League Sky, Serie A DAZN, LaLiga DAZN, Ligue 1 DAZN." },
        { h2: "Bundesliga-Konferenz and flagship derbies", body: "Saturday 15:30 Bundesliga-Konferenz offers 5 simultaneous matches in multiplex. Der Klassiker Bayern vs Dortmund, Revierderby Dortmund vs Schalke (recently 2. Bundesliga), Bayern vs Leverkusen, RB Leipzig vs Union Berlin. ATV Corner relays the Konferenz and each match as a separate feed." },
        { h2: "Streaming from Berlin, Munich, Hamburg, Cologne", body: "ATV Corner works across all of Germany, Austria and German-speaking Switzerland. Compatible with Samsung, LG, Sony Smart TVs, Apple TV, Fire TV Stick, MagentaTV box, Vodafone GigaTV, Telekom Magenta. Minimum 8 Mbps for HD, 25 Mbps for 4K HDR." },
      ],
      extraFaq: [
        { q: "Are all Sky Bundesliga channels included?", a: "Yes — Sky Sport Bundesliga 1 to 7, Sky Sport Top Event, Sky Sport UHD for 4K HDR matches." },
        { q: "Is DAZN Germany accessible via ATV Corner?", a: "Yes, DAZN Germany feeds (Bundesliga Friday/Saturday 18:30/Sunday, Champions League Wednesday) are aggregated." },
      ],
      related: [
        { label: "Watch Bundesliga", href: "/tools/watch/bundesliga" },
        { label: "Watch Bayern Munich", href: "/tools/team/bayern-munich" },
        { label: "Watch Borussia Dortmund", href: "/tools/team/borussia-dortmund" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
      ],
    },
    de: {
      intro: "In Deutschland ist Fu\u00dfball zwischen Sky Deutschland (Bundesliga, Premier League, F1), DAZN (Champions League, Bundesliga, LaLiga, Serie A), RTL/Nitro (Europa League), Amazon Prime (Dienstag UCL) aufgeteilt. F\u00fcr Bundesliga + Champions League + Premier League sind 80\u20ac+/Monat n\u00f6tig. ATV Corner b\u00fcndelt alles f\u00fcr 15\u20ac/Monat.",
      sections: [
        { h2: "Bundesliga, Champions League und mehr aus Deutschland", body: "Bundesliga (Bayern, Dortmund, Leipzig, Leverkusen \u2014 306 Spiele, Konferenz inklusive), 2. Bundesliga, DFB-Pokal, Champions League (Dienstag Prime + Mittwoch DAZN), Europa League RTL/Nitro, Premier League Sky, Serie A DAZN, LaLiga DAZN, Ligue 1 DAZN." },
        { h2: "Bundesliga-Konferenz und Top-Derbys", body: "Die Samstags-15:30-Konferenz bietet 5 Parallel-Spiele im Multiplex. Der Klassiker Bayern vs Dortmund, Revierderby Dortmund vs Schalke (zuletzt 2. Bundesliga), Bayern vs Leverkusen, RB Leipzig vs Union Berlin. ATV Corner gibt die Konferenz und jedes Spiel als separaten Feed weiter." },
        { h2: "Streaming aus Berlin, M\u00fcnchen, Hamburg, K\u00f6ln", body: "ATV Corner funktioniert in ganz Deutschland, \u00d6sterreich und der deutschsprachigen Schweiz. Kompatibel mit Samsung, LG, Sony Smart TVs, Apple TV, Fire TV Stick, MagentaTV-Box, Vodafone GigaTV, Telekom Magenta. Mindestens 8 Mbit/s f\u00fcr HD, 25 Mbit/s f\u00fcr 4K HDR." },
      ],
      extraFaq: [
        { q: "Sind alle Sky-Bundesliga-Kan\u00e4le enthalten?", a: "Ja \u2014 Sky Sport Bundesliga 1 bis 7, Sky Sport Top Event, Sky Sport UHD f\u00fcr 4K-HDR-Spiele." },
        { q: "Ist DAZN Deutschland \u00fcber ATV Corner zug\u00e4nglich?", a: "Ja, DAZN-Deutschland-Feeds (Bundesliga Freitag/Samstag 18:30/Sonntag, Champions League Mittwoch) werden geb\u00fcndelt." },
      ],
      related: [
        { label: "Bundesliga live", href: "/tools/watch/bundesliga" },
        { label: "Bayern M\u00fcnchen live", href: "/tools/team/bayern-munich" },
        { label: "Borussia Dortmund live", href: "/tools/team/borussia-dortmund" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
      ],
    },
  },
  spain: {
    fr: {
      intro: "En Espagne, Movistar+ détient LaLiga et la Champions League jusqu'en 2027, DAZN propose une option moins chère mais incomplète. Suivre tout le football espagnol officiellement coûte 90€+/mois. ATV Corner agrège Movistar, DAZN, beIN MENA, Sky, Canal+ pour 15€/mois.",
      sections: [
        { h2: "LaLiga, Copa del Rey, Champions League en Espagne", body: "LaLiga EA Sports (Real Madrid, Barcelona, Atlético — 380 matchs), LaLiga 2 Hypermotion, Copa del Rey (1/32 à finale), Supercopa de España (Arabie Saoudite, 4 équipes), Champions League, Europa League, Premier League, Serie A, Bundesliga, Ligue 1." },
        { h2: "El Clasico Real-Barça depuis Madrid, Barcelone, Valence, Séville", body: "El Clasico est l'événement football le plus suivi en Espagne. ATV Corner diffuse en 4K HDR Dolby Vision depuis Madrid (Real Madrid), Barcelone (FC Barcelona), Valence (Valencia CF), Séville (Sevilla FC, Real Betis), Bilbao (Athletic), San Sebastián (Real Sociedad)." },
      ],
      extraFaq: [
        { q: "Movistar LaLiga est-il inclus ?", a: "Oui, les feeds Movistar LaLiga (chaînes LaLiga TV, M+ LaLiga 4K) sont agrégés et accessibles." },
        { q: "Copa del Rey en 4K ?", a: "Demi-finales et finale Copa del Rey en 4K HDR sur ATV Corner." },
      ],
      related: [
        { label: "Regarder LaLiga", href: "/tools/watch/la-liga" },
        { label: "Regarder Real Madrid", href: "/tools/team/real-madrid" },
        { label: "Regarder Barcelone", href: "/tools/team/barcelona" },
      ],
    },
    en: {
      intro: "In Spain, Movistar+ holds LaLiga and Champions League rights until 2027, DAZN offers a cheaper but incomplete option. Officially following all Spanish football costs €90+/month. ATV Corner aggregates Movistar, DAZN, beIN MENA, Sky, Canal+ for €15/month.",
      sections: [
        { h2: "LaLiga, Copa del Rey, Champions League in Spain", body: "LaLiga EA Sports (Real Madrid, Barcelona, Atlético — 380 matches), LaLiga 2 Hypermotion, Copa del Rey (R32 to final), Supercopa de España (Saudi Arabia, 4 teams), Champions League, Europa League, Premier League, Serie A, Bundesliga, Ligue 1." },
        { h2: "El Clasico Real vs Barça from Madrid, Barcelona, Valencia, Seville", body: "El Clasico is Spain's most-watched football event. ATV Corner streams in 4K HDR Dolby Vision from Madrid (Real Madrid), Barcelona (FC Barcelona), Valencia (Valencia CF), Seville (Sevilla FC, Real Betis), Bilbao (Athletic), San Sebastián (Real Sociedad)." },
      ],
      extraFaq: [
        { q: "Is Movistar LaLiga included?", a: "Yes, Movistar LaLiga feeds (LaLiga TV channels, M+ LaLiga 4K) are aggregated and accessible." },
        { q: "Copa del Rey in 4K?", a: "Semi-finals and Copa del Rey final in 4K HDR on ATV Corner." },
      ],
      related: [
        { label: "Watch LaLiga", href: "/tools/watch/la-liga" },
        { label: "Watch Real Madrid", href: "/tools/team/real-madrid" },
        { label: "Watch Barcelona", href: "/tools/team/barcelona" },
      ],
    },
    de: {
      intro: "In Spanien h\u00e4lt Movistar+ LaLiga- und Champions-League-Rechte bis 2027, DAZN bietet eine g\u00fcnstigere aber unvollst\u00e4ndige Option. Offiziell den gesamten spanischen Fu\u00dfball zu verfolgen kostet 90\u20ac+/Monat. ATV Corner b\u00fcndelt Movistar, DAZN, beIN MENA, Sky, Canal+ f\u00fcr 15\u20ac/Monat.",
      sections: [
        { h2: "LaLiga, Copa del Rey, Champions League in Spanien", body: "LaLiga EA Sports (Real Madrid, Barcelona, Atl\u00e9tico \u2014 380 Spiele), LaLiga 2 Hypermotion, Copa del Rey (32erfinale bis Finale), Supercopa de Espa\u00f1a (Saudi-Arabien, 4 Teams), Champions League, Europa League, Premier League, Serie A, Bundesliga, Ligue 1." },
        { h2: "El Cl\u00e1sico Real vs Bar\u00e7a aus Madrid, Barcelona, Valencia, Sevilla", body: "El Cl\u00e1sico ist Spaniens meistgesehenes Fu\u00dfball-Event. ATV Corner streamt in 4K HDR Dolby Vision aus Madrid (Real Madrid), Barcelona (FC Barcelona), Valencia (Valencia CF), Sevilla (Sevilla FC, Real Betis), Bilbao (Athletic), San Sebasti\u00e1n (Real Sociedad)." },
      ],
      extraFaq: [
        { q: "Ist Movistar LaLiga enthalten?", a: "Ja, Movistar-LaLiga-Feeds (LaLiga-TV-Kan\u00e4le, M+ LaLiga 4K) sind geb\u00fcndelt und zug\u00e4nglich." },
        { q: "Copa del Rey in 4K?", a: "Halbfinals und Copa-del-Rey-Finale in 4K HDR auf ATV Corner." },
      ],
      related: [
        { label: "LaLiga live", href: "/tools/watch/la-liga" },
        { label: "Real Madrid live", href: "/tools/team/real-madrid" },
        { label: "Barcelona live", href: "/tools/team/barcelona" },
      ],
    },
  },
};

export function getCountryExtras(slug: string, lang: Locale): SeoExtras | undefined {
  return countryExtras[slug]?.[lang];
}

// ============================================================
// TEAM EXTRAS
// ============================================================
export const teamExtras: Record<string, LocalizedExtras> = {
  "real-madrid": {
    fr: {
      intro: "Le Real Madrid CF, club le plus titré de l'histoire du football européen avec 15 Champions League et 35 titres de LaLiga, attire des centaines de millions de fans dans le monde. Suivre tous les matchs du Real — LaLiga, Copa del Rey, Supercopa, Champions League, Mondial des Clubs — depuis hors d'Espagne demande Movistar+, BT Sports, Canal+, DAZN cumulés. ATV Corner regroupe tous ces flux pour 15€/mois.",
      sections: [
        { h2: "Où regarder Real Madrid en direct depuis l'Europe", body: "Tous les matchs du Real Madrid au Santiago Bernabéu (81 000 places, rénové 2024) sont diffusés sur Movistar LaLiga en Espagne, beIN Sports en France, DAZN en Allemagne et Italie, Sky en UK. ATV Corner agrège ces feeds : matchs à domicile, déplacements, El Clasico, Champions League, Copa del Rey, Supercopa, Mondial des Clubs FIFA — 100 % de la saison en HD/4K." },
        { h2: "Stars du Real Madrid 2025/2026", body: "Kylian Mbappé, Vinícius Júnior, Jude Bellingham, Federico Valverde, Rodrygo, Aurélien Tchouaméni, Eduardo Camavinga, Antonio Rüdiger, Thibaut Courtois. Coach : Carlo Ancelotti puis Xabi Alonso. ATV Corner suit chaque star en gros plan via multi-cam Bernabéu (16 caméras)." },
        { h2: "El Clasico Real Madrid - FC Barcelona", body: "El Clasico oppose le Real Madrid au FC Barcelona deux fois par saison de LaLiga, plus éventuellement en Copa del Rey et Supercopa. Plus de 600 millions de téléspectateurs mondiaux, 8 angles caméra, 4 langues de commentaire, 4K HDR Dolby Vision systématique sur ATV Corner." },
      ],
      extraFaq: [
        { q: "Tous les matchs Real Madrid sont-ils inclus ?", a: "Oui — LaLiga (38 matchs), Copa del Rey (variable), Supercopa, Champions League (10 minimum), Mondial des Clubs FIFA." },
        { q: "Le Real Madrid TV chaîne officielle est-elle incluse ?", a: "Oui, Real Madrid TV (chaîne officielle du club) est agrégée par ATV Corner avec actualités, interviews et matchs des équipes jeunes." },
        { q: "Bernabéu en 4K HDR ?", a: "Oui, tous les matchs à domicile du Real Madrid au Santiago Bernabéu sont en 4K HDR Dolby Vision sur ATV Corner." },
      ],
      related: [
        { label: "Regarder LaLiga", href: "/tools/watch/la-liga" },
        { label: "Regarder Barcelone", href: "/tools/team/barcelona" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
        { label: "Football en Espagne", href: "/tools/in/spain" },
      ],
    },
    en: {
      intro: "Real Madrid CF, the most decorated club in European football history with 15 Champions League titles and 35 LaLiga crowns, attracts hundreds of millions of fans worldwide. Following every Real match — LaLiga, Copa del Rey, Supercopa, Champions League, Club World Cup — from outside Spain requires Movistar+, BT Sports, Canal+, DAZN combined. ATV Corner consolidates every feed for €15/month.",
      sections: [
        { h2: "Where to watch Real Madrid live across Europe", body: "Every Real Madrid match at Santiago Bernabéu (81,000 seats, renovated 2024) is broadcast on Movistar LaLiga in Spain, beIN Sports in France, DAZN in Germany/Italy, Sky in the UK. ATV Corner aggregates these feeds: home games, aways, El Clasico, Champions League, Copa del Rey, Supercopa, FIFA Club World Cup — 100 % of the season in HD/4K." },
        { h2: "Real Madrid 2025/2026 stars", body: "Kylian Mbappé, Vinícius Júnior, Jude Bellingham, Federico Valverde, Rodrygo, Aurélien Tchouaméni, Eduardo Camavinga, Antonio Rüdiger, Thibaut Courtois. Manager: Carlo Ancelotti then Xabi Alonso. ATV Corner tracks every star via Bernabéu multi-cam (16 cameras)." },
        { h2: "El Clasico Real Madrid vs FC Barcelona", body: "El Clasico pits Real Madrid against FC Barcelona twice per LaLiga season, plus potentially in Copa del Rey and Supercopa. 600+ million global viewers, 8 camera angles, 4 commentary languages, 4K HDR Dolby Vision systematic on ATV Corner." },
      ],
      extraFaq: [
        { q: "Are all Real Madrid matches included?", a: "Yes — LaLiga (38), Copa del Rey (variable), Supercopa, Champions League (10 minimum), FIFA Club World Cup." },
        { q: "Is the official Real Madrid TV channel included?", a: "Yes, Real Madrid TV (the club's official channel) is aggregated by ATV Corner with news, interviews and youth team matches." },
        { q: "Bernabéu in 4K HDR?", a: "Yes, every Real Madrid home match at Santiago Bernabéu is in 4K HDR Dolby Vision on ATV Corner." },
      ],
      related: [
        { label: "Watch LaLiga", href: "/tools/watch/la-liga" },
        { label: "Watch Barcelona", href: "/tools/team/barcelona" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
        { label: "Football in Spain", href: "/tools/in/spain" },
      ],
    },
    de: {
      intro: "Real Madrid CF, der erfolgreichste Klub der europ\u00e4ischen Fu\u00dfballgeschichte mit 15 Champions-League-Titeln und 35 LaLiga-Meisterschaften, zieht Hunderte Millionen Fans weltweit an. Jedes Real-Spiel zu verfolgen \u2014 LaLiga, Copa del Rey, Supercopa, Champions League, Klub-WM \u2014 aus dem Ausland erfordert Movistar+, BT Sports, Canal+, DAZN kombiniert. ATV Corner b\u00fcndelt jeden Feed f\u00fcr 15\u20ac/Monat.",
      sections: [
        { h2: "Wo Real Madrid live in Europa schauen", body: "Jedes Real-Madrid-Spiel im Santiago Bernab\u00e9u (81.000 Pl\u00e4tze, 2024 renoviert) wird auf Movistar LaLiga in Spanien, beIN Sports in Frankreich, DAZN in Deutschland/Italien, Sky in UK \u00fcbertragen. ATV Corner b\u00fcndelt diese Feeds: Heim-, Ausw\u00e4rtsspiele, El Cl\u00e1sico, Champions League, Copa del Rey, Supercopa, FIFA-Klub-WM \u2014 100 % der Saison in HD/4K." },
        { h2: "Real-Madrid-Stars 2025/2026", body: "Kylian Mbapp\u00e9, Vin\u00edcius J\u00fanior, Jude Bellingham, Federico Valverde, Rodrygo, Aur\u00e9lien Tchouam\u00e9ni, Eduardo Camavinga, Antonio R\u00fcdiger, Thibaut Courtois. Trainer: Carlo Ancelotti dann Xabi Alonso. ATV Corner verfolgt jeden Star per Bernab\u00e9u-Multi-Cam (16 Kameras)." },
        { h2: "El Cl\u00e1sico Real Madrid vs FC Barcelona", body: "El Cl\u00e1sico stellt Real Madrid zweimal pro LaLiga-Saison gegen den FC Barcelona, plus potenziell in Copa del Rey und Supercopa. 600+ Millionen weltweite Zuschauer, 8 Kamerawinkel, 4 Kommentarsprachen, 4K HDR Dolby Vision systematisch auf ATV Corner." },
      ],
      extraFaq: [
        { q: "Sind alle Real-Madrid-Spiele enthalten?", a: "Ja \u2014 LaLiga (38), Copa del Rey (variabel), Supercopa, Champions League (mindestens 10), FIFA-Klub-WM." },
        { q: "Ist der offizielle Real-Madrid-TV-Kanal enthalten?", a: "Ja, Real Madrid TV (offizieller Kanal des Klubs) wird von ATV Corner geb\u00fcndelt, mit News, Interviews und Jugendmannschafts-Spielen." },
        { q: "Bernab\u00e9u in 4K HDR?", a: "Ja, jedes Real-Madrid-Heimspiel im Santiago Bernab\u00e9u in 4K HDR Dolby Vision auf ATV Corner." },
      ],
      related: [
        { label: "LaLiga live", href: "/tools/watch/la-liga" },
        { label: "Barcelona live", href: "/tools/team/barcelona" },
        { label: "Champions League", href: "/tools/watch/champions-league" },
        { label: "Fu\u00dfball in Spanien", href: "/tools/in/spain" },
      ],
    },
  },
  "manchester-united": {
    fr: {
      intro: "Manchester United FC, club le plus titré d'Angleterre avec 20 Premier League et 3 Champions League, joue à Old Trafford (74 000 places, le Théâtre des Rêves). Suivre tous les matchs Man United depuis hors d'Angleterre nécessite Sky Sports UK + Canal+ ou DAZN + abonnement Europa League. ATV Corner regroupe tout pour 15€/mois.",
      sections: [
        { h2: "Old Trafford, Sir Matt Busby Way", body: "Old Trafford accueille les matchs de Premier League, FA Cup, Carabao Cup et compétitions européennes de Manchester United. 74 000 places, atmosphère légendaire, multi-cam ATV Corner sur les places centrales, Stretford End et Sir Bobby Charlton Stand. Tous les matchs à domicile en 4K HDR." },
        { h2: "Stars Manchester United 2025/2026", body: "Bruno Fernandes (capitaine), Marcus Rashford, Casemiro, Lisandro Martínez, Harry Maguire, Mason Mount, Antony, Alejandro Garnacho, Rasmus Højlund, André Onana. Coach : Erik ten Hag puis Rúben Amorim. ATV Corner suit chaque joueur en multi-cam." },
        { h2: "Manchester Derby et North West Derby", body: "Manchester Derby (United vs Man City), Northwest Derby (United vs Liverpool), Roses Derby (United vs Leeds), Battle of Britain (United vs Celtic ou Rangers en UCL). Tous diffusés en 4K HDR Dolby Vision sur ATV Corner avec multi-cam et 4 langues de commentaire." },
      ],
      extraFaq: [
        { q: "Tous les matchs Man United sont-ils en 4K ?", a: "Oui, les matchs à domicile à Old Trafford et les déplacements diffusés par Sky Sports UK sont systématiquement en 4K HDR HDR10+ sur ATV Corner." },
        { q: "MUTV (chaîne officielle Manchester United) est-elle incluse ?", a: "Oui, MUTV avec interviews, matchs U21, archives historiques (1968, 1999, 2008 finales) est agrégée." },
      ],
      related: [
        { label: "Premier League en direct", href: "/tools/watch/premier-league" },
        { label: "Regarder Liverpool", href: "/tools/team/liverpool" },
        { label: "Regarder Arsenal", href: "/tools/team/arsenal" },
      ],
    },
    en: {
      intro: "Manchester United FC, England's most decorated club with 20 Premier League titles and 3 Champions League trophies, plays at Old Trafford (74,000 seats, the Theatre of Dreams). Following every Man United match from outside England requires Sky Sports UK + Canal+ or DAZN + Europa League subscription. ATV Corner consolidates everything for €15/month.",
      sections: [
        { h2: "Old Trafford, Sir Matt Busby Way", body: "Old Trafford hosts Premier League, FA Cup, Carabao Cup and European fixtures for Manchester United. 74,000 seats, legendary atmosphere, ATV Corner multi-cam on centre seats, Stretford End and Sir Bobby Charlton Stand. Every home match in 4K HDR." },
        { h2: "Manchester United 2025/2026 stars", body: "Bruno Fernandes (captain), Marcus Rashford, Casemiro, Lisandro Martínez, Harry Maguire, Mason Mount, Antony, Alejandro Garnacho, Rasmus Højlund, André Onana. Manager: Erik ten Hag then Rúben Amorim. ATV Corner tracks every player via multi-cam." },
        { h2: "Manchester Derby and North West Derby", body: "Manchester Derby (United vs Man City), North West Derby (United vs Liverpool), Roses Derby (United vs Leeds), Battle of Britain (United vs Celtic or Rangers in UCL). All in 4K HDR Dolby Vision on ATV Corner with multi-cam and 4 commentary languages." },
      ],
      extraFaq: [
        { q: "Are all Man United matches in 4K?", a: "Yes, Old Trafford home games and Sky Sports UK away games are systematically in 4K HDR HDR10+ on ATV Corner." },
        { q: "Is MUTV (Manchester United official channel) included?", a: "Yes, MUTV with interviews, U21 matches, historic archives (1968, 1999, 2008 finals) is aggregated." },
      ],
      related: [
        { label: "Premier League live", href: "/tools/watch/premier-league" },
        { label: "Watch Liverpool", href: "/tools/team/liverpool" },
        { label: "Watch Arsenal", href: "/tools/team/arsenal" },
      ],
    },
    de: {
      intro: "Manchester United FC, Englands erfolgreichster Klub mit 20 Premier-League-Titeln und 3 Champions-League-Troph\u00e4en, spielt in Old Trafford (74.000 Pl\u00e4tze, Theatre of Dreams). Jedes Man-United-Spiel aus dem Ausland zu verfolgen ben\u00f6tigt Sky Sports UK + Canal+ oder DAZN + Europa-League-Abo. ATV Corner b\u00fcndelt alles f\u00fcr 15\u20ac/Monat.",
      sections: [
        { h2: "Old Trafford, Sir Matt Busby Way", body: "Old Trafford ist Schauplatz von Premier-League-, FA-Cup-, Carabao-Cup- und Europapokal-Spielen von Manchester United. 74.000 Pl\u00e4tze, legend\u00e4re Atmosph\u00e4re, ATV-Corner-Multi-Cam auf Mittelpl\u00e4tzen, Stretford End und Sir-Bobby-Charlton-Trib\u00fcne. Jedes Heimspiel in 4K HDR." },
        { h2: "Manchester-United-Stars 2025/2026", body: "Bruno Fernandes (Kapit\u00e4n), Marcus Rashford, Casemiro, Lisandro Mart\u00ednez, Harry Maguire, Mason Mount, Antony, Alejandro Garnacho, Rasmus H\u00f8jlund, Andr\u00e9 Onana. Trainer: Erik ten Hag dann R\u00faben Amorim. ATV Corner verfolgt jeden Spieler per Multi-Cam." },
        { h2: "Manchester Derby und Northwest Derby", body: "Manchester Derby (United vs Man City), Northwest Derby (United vs Liverpool), Roses Derby (United vs Leeds), Battle of Britain (United vs Celtic oder Rangers in UCL). Alle in 4K HDR Dolby Vision auf ATV Corner mit Multi-Cam und 4 Kommentarsprachen." },
      ],
      extraFaq: [
        { q: "Laufen alle Man-United-Spiele in 4K?", a: "Ja, Old-Trafford-Heimspiele und Sky-Sports-UK-Ausw\u00e4rtsspiele systematisch in 4K HDR HDR10+ auf ATV Corner." },
        { q: "Ist MUTV (offizieller Manchester-United-Kanal) enthalten?", a: "Ja, MUTV mit Interviews, U21-Spielen, historischen Archiven (1968, 1999, 2008 Finale) wird geb\u00fcndelt." },
      ],
      related: [
        { label: "Premier League live", href: "/tools/watch/premier-league" },
        { label: "Liverpool live", href: "/tools/team/liverpool" },
        { label: "Arsenal live", href: "/tools/team/arsenal" },
      ],
    },
  },
  "barcelona": {
    fr: {
      intro: "Le FC Barcelona, 27 titres LaLiga et 5 Champions League, joue au Camp Nou (en rénovation, retour 2025/26) ou à Montjuïc temporairement. Suivre Barça intégralement depuis hors d'Espagne demande Movistar LaLiga, beIN Sports, DAZN. ATV Corner unifie tout pour 15€/mois.",
      sections: [
        { h2: "Camp Nou et Montjuïc : Barça à domicile", body: "Le nouveau Camp Nou (105 000 places à terme) accueille le FC Barcelona pour LaLiga, Copa del Rey, Champions League. ATV Corner diffuse chaque match Barça en 4K HDR Dolby Vision avec multi-cam (12 caméras), commentaires catalan, espagnol, français, anglais, arabe." },
        { h2: "Stars Barça 2025/2026", body: "Lamine Yamal, Pedri, Gavi, Robert Lewandowski, Raphinha, Frenkie de Jong, Pau Cubarsí, Marc Casadó, Ronald Araújo, Marc-André ter Stegen. Coach : Hansi Flick. ATV Corner suit la Masia génération en multi-cam." },
        { h2: "El Clasico Barça - Real Madrid en 4K HDR", body: "El Clasico est le sommet du football mondial. Camp Nou (Barça à domicile) ou Bernabéu (Real à domicile). 600+ millions de téléspectateurs. ATV Corner diffuse El Clasico en 4K HDR Dolby Vision avec multi-cam 8 angles et 4 langues de commentaire." },
      ],
      extraFaq: [
        { q: "Barça TV est-il inclus ?", a: "Oui, Barça TV (chaîne officielle du FC Barcelona) avec interviews, U19, U23 et archives est agrégée." },
        { q: "Tous les matchs Barça Femení sont-ils diffusés ?", a: "Oui, Liga F (équipe féminine de Barça, championne consécutive) est diffusée par ATV Corner." },
      ],
      related: [
        { label: "LaLiga", href: "/tools/watch/la-liga" },
        { label: "Real Madrid", href: "/tools/team/real-madrid" },
        { label: "Football en Espagne", href: "/tools/in/spain" },
      ],
    },
    en: {
      intro: "FC Barcelona, 27 LaLiga titles and 5 Champions League trophies, plays at Camp Nou (under renovation, return 2025/26) or Montjuïc temporarily. Following Barça fully from outside Spain requires Movistar LaLiga, beIN Sports, DAZN. ATV Corner consolidates everything for €15/month.",
      sections: [
        { h2: "Camp Nou and Montjuïc: Barça at home", body: "The new Camp Nou (105,000 final capacity) hosts FC Barcelona for LaLiga, Copa del Rey, Champions League. ATV Corner streams every Barça match in 4K HDR Dolby Vision with multi-cam (12 cameras), Catalan, Spanish, English, French, Arabic commentary." },
        { h2: "Barça 2025/2026 stars", body: "Lamine Yamal, Pedri, Gavi, Robert Lewandowski, Raphinha, Frenkie de Jong, Pau Cubarsí, Marc Casadó, Ronald Araújo, Marc-André ter Stegen. Coach: Hansi Flick. ATV Corner tracks the Masia generation via multi-cam." },
        { h2: "El Clasico Barça vs Real Madrid in 4K HDR", body: "El Clasico is the summit of world football. Camp Nou (Barça at home) or Bernabéu (Real at home). 600+ million viewers. ATV Corner streams El Clasico in 4K HDR Dolby Vision with 8-angle multi-cam and 4 commentary languages." },
      ],
      extraFaq: [
        { q: "Is Barça TV included?", a: "Yes, Barça TV (the FC Barcelona official channel) with interviews, U19, U23 and archives is aggregated." },
        { q: "Are all Barça Femení matches streamed?", a: "Yes, Liga F (Barça women's team, consecutive champions) is broadcast by ATV Corner." },
      ],
      related: [
        { label: "LaLiga", href: "/tools/watch/la-liga" },
        { label: "Real Madrid", href: "/tools/team/real-madrid" },
        { label: "Football in Spain", href: "/tools/in/spain" },
      ],
    },
    de: {
      intro: "Der FC Barcelona, 27 LaLiga-Titel und 5 Champions-League-Troph\u00e4en, spielt im Camp Nou (in Renovierung, R\u00fcckkehr 2025/26) oder vor\u00fcbergehend in Montju\u00efc. Bar\u00e7a vollst\u00e4ndig aus dem Ausland zu verfolgen ben\u00f6tigt Movistar LaLiga, beIN Sports, DAZN. ATV Corner b\u00fcndelt alles f\u00fcr 15\u20ac/Monat.",
      sections: [
        { h2: "Camp Nou und Montju\u00efc: Bar\u00e7a zu Hause", body: "Das neue Camp Nou (105.000 Endkapazit\u00e4t) ist Schauplatz von LaLiga-, Copa-del-Rey-, Champions-League-Spielen des FC Barcelona. ATV Corner streamt jedes Bar\u00e7a-Spiel in 4K HDR Dolby Vision mit Multi-Cam (12 Kameras), Kommentar auf Katalanisch, Spanisch, Englisch, Deutsch, Franz\u00f6sisch, Arabisch." },
        { h2: "Bar\u00e7a-Stars 2025/2026", body: "Lamine Yamal, Pedri, Gavi, Robert Lewandowski, Raphinha, Frenkie de Jong, Pau Cubars\u00ed, Marc Casad\u00f3, Ronald Ara\u00fajo, Marc-Andr\u00e9 ter Stegen. Trainer: Hansi Flick. ATV Corner verfolgt die Masia-Generation per Multi-Cam." },
        { h2: "El Cl\u00e1sico Bar\u00e7a vs Real Madrid in 4K HDR", body: "El Cl\u00e1sico ist der Gipfel des Weltfu\u00dfballs. Camp Nou (Bar\u00e7a zu Hause) oder Bernab\u00e9u (Real zu Hause). 600+ Millionen Zuschauer. ATV Corner streamt El Cl\u00e1sico in 4K HDR Dolby Vision mit 8-Winkel-Multi-Cam und 4 Kommentarsprachen." },
      ],
      extraFaq: [
        { q: "Ist Bar\u00e7a TV enthalten?", a: "Ja, Bar\u00e7a TV (offizieller FC-Barcelona-Kanal) mit Interviews, U19, U23 und Archiven wird geb\u00fcndelt." },
        { q: "Werden alle Bar\u00e7a-Femen\u00ed-Spiele gestreamt?", a: "Ja, Liga F (Bar\u00e7a-Frauenteam, mehrfacher Meister) wird von ATV Corner \u00fcbertragen." },
      ],
      related: [
        { label: "LaLiga", href: "/tools/watch/la-liga" },
        { label: "Real Madrid", href: "/tools/team/real-madrid" },
        { label: "Fu\u00dfball in Spanien", href: "/tools/in/spain" },
      ],
    },
  },
};

export function getTeamExtras(slug: string, lang: Locale): SeoExtras | undefined {
  return teamExtras[slug]?.[lang];
}
