import type { Lang } from './serviceContent';

export interface CommuneContent {
  typology: string;
  quartiers: string[];
  localNote?: string;
  /** 1-2 phrases sur les enjeux de chantier spécifiques à cette commune (SEO unique par commune) */
  constructionContext?: string;
}

const normalize = (name: string): string =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');

// -------- FR --------
const COMMUNE_CONTENT_FR: Record<string, CommuneContent> = {
  bruxelles: {
    typology: "Bruxelles-Ville concentre des typologies très variées : maisons de maître du Sablon et des Marolles, immeubles Art Nouveau et Art Déco de la Ceinture, appartements modernes du quartier Nord et logements sociaux à Laeken.",
    quartiers: ['Sablon', 'Marolles', 'Quartier européen', 'Quartier Nord', 'Laeken', 'Neder-Over-Heembeek', 'Haren'],
    localNote: "Nombreux biens en zone de protection Urban.brussels : les demandes de permis pour toiture, façade ou menuiseries extérieures nécessitent souvent l'avis de la Commission Royale des Monuments et Sites.",
    constructionContext: "Nos équipes interviennent quasi quotidiennement dans le pentagone : chantiers étroits en zone piétonne, permis de stationnement à obtenir 15 jours à l'avance et coordination fine avec les commerces en rez-de-chaussée.",
  },
  anderlecht: {
    typology: "Anderlecht mélange grands ensembles d'après-guerre à Cureghem, maisons ouvrières autour du canal et lotissements pavillonnaires plus au sud. Les rénovations portent souvent sur l'isolation thermique et la mise aux normes électriques.",
    quartiers: ['Cureghem', 'Erasme', 'Neerpede', 'Bizet', 'Abattoir', 'Parc Astrid', 'Aurore'],
    constructionContext: "Beaucoup de nos chantiers à Anderlecht concernent des maisons ouvrières à Cureghem ou Bizet, avec reprises de plomberie fonte, vieux tableaux électriques Bakelite à déposer et humidité ascensionnelle à traiter.",
  },
  auderghem: {
    typology: "Auderghem est majoritairement résidentiel avec un parc immobilier des années 60-80 : appartements en petits immeubles, quelques villas isolées et copropriétés récentes autour d'Herrmann-Debroux.",
    quartiers: ['Herrmann-Debroux', 'Val Duchesse', 'Blankedelle', 'Rouge-Cloître', 'Sainte-Anne'],
    constructionContext: "Les appartements des années 60-80 à Herrmann-Debroux affichent souvent des installations en fin de vie : tableau divisionnaire à remplacer, chauffage collectif à réviser, VMC et sanitaires à moderniser.",
  },
  'berchem-sainte-agathe': {
    typology: "Berchem-Sainte-Agathe est une commune calme à dominante pavillonnaire, avec des maisons unifamiliales des années 30 et quelques immeubles récents.",
    quartiers: ['Centre', 'Selder', 'Kasterlinden', 'Hunderenveld'],
    constructionContext: "Les maisons unifamiliales des années 30 à Berchem demandent typiquement une isolation thermique par l'intérieur, un remplacement des châssis simple vitrage et une refonte du chauffage vers la condensation ou la PAC.",
  },
  etterbeek: {
    typology: "Etterbeek est marquée par ses immeubles bourgeois du début du XXe siècle et sa proximité avec les institutions européennes.",
    quartiers: ['Cinquantenaire', 'Quartier européen', 'Square Marie-Louise', 'Chasse', 'Jourdan'],
    localNote: "Zone à forte densité d'expatriés : chantiers souvent gérés à distance, avec besoin de reporting régulier et de coordination des accès.",
    constructionContext: "Les immeubles Art Déco autour du Cinquantenaire imposent de préserver moulures, cheminées et parquets d'origine tout en modernisant discrètement l'électricité et le chauffage — souvent en site occupé.",
  },
  evere: {
    typology: "Evere présente un tissu résidentiel varié : immeubles des années 60-70, maisons pavillonnaires et développements récents autour du quartier Da Vinci.",
    quartiers: ['Centre', 'Conscience', 'Parc Roi Baudouin', 'Da Vinci', 'Picardie', 'Paduwa'],
    constructionContext: "À Evere, nombreux tableaux électriques Bakelite d'origine et chaudières mazout à convertir en gaz condensation ou pompe à chaleur pour bénéficier des primes Renolution.",
  },
  forest: {
    typology: "Forest combine anciennes maisons de maître autour de Saint-Antoine, immeubles ouvriers du bas et lofts industriels reconvertis au Wiels.",
    quartiers: ['Saint-Antoine', 'Wiels', 'Altitude 100', 'Bas-Forest', 'Van Volxem'],
    constructionContext: "Les maisons de maître de Saint-Antoine ont typiquement des cages d'escalier étroites qui compliquent la sortie des matériaux : logistique de chantier renforcée et bâchage soigné indispensables.",
  },
  ganshoren: {
    typology: "Ganshoren est une petite commune résidentielle avec un tissu essentiellement pavillonnaire des années 30 à 60.",
    quartiers: ['Centre', 'Basilique', 'Villas', 'Rusatira'],
    constructionContext: "Les pavillons des années 30-60 à Ganshoren cumulent souvent trois chantiers coordonnés : réfection de toiture, isolation des combles et remplacement de chaudière atmosphérique.",
  },
  ixelles: {
    typology: "Ixelles est marquée par ses maisons de maître Art Nouveau et Art Déco, ses grands appartements bourgeois et ses immeubles étudiants près de l'ULB.",
    quartiers: ['Flagey', 'Châtelain', 'Bailli', 'Matonge', 'ULB', 'Etangs d\'Ixelles', 'Berkendael'],
    localNote: "Nombreux biens classés ou en zone de protection : les interventions sur façades, châssis et toitures nécessitent souvent des demandes de permis.",
    constructionContext: "Les maisons de maître Art Nouveau de Flagey et Châtelain sont fréquemment classées : chaque intervention sur façade ou châssis extérieurs passe par une demande de permis avec avis de la Commission des Monuments et Sites.",
  },
  jette: {
    typology: "Jette combine tissu résidentiel autour du King Baudouin Park, quartiers proches de l'UZ Brussel et zones commerçantes.",
    quartiers: ['Centre', 'Miroir', 'UZ Brussel', 'King Baudouin Park', 'Esseghem'],
    constructionContext: "À Jette nous intervenons régulièrement en copropriétés autour de l'UZ Brussel et du King Baudouin Park : remise aux normes RGIE des parties communes, remplacement des colonnes montantes en fonte.",
  },
  koekelberg: {
    typology: "Koekelberg est une petite commune dense, structurée autour de la Basilique. Le parc immobilier est majoritairement composé d'immeubles anciens à rénover.",
    quartiers: ['Basilique', 'Centre', 'Simonis'],
    constructionContext: "Les immeubles anciens autour de la Basilique nécessitent souvent une refonte complète : électricité entière, plomberie fonte à passer en multicouche et régulation du chauffage collectif à moderniser.",
  },
  'molenbeek-saint-jean': {
    typology: "Molenbeek-Saint-Jean allie zones résidentielles historiques, quartiers ouvriers autour du canal et anciens sites industriels en reconversion.",
    quartiers: ['Canal', 'Historique', 'Duchesse', 'Karreveld', 'Machtens', 'Osseghem'],
    constructionContext: "Les maisons ouvrières du canal cumulent fréquemment humidité ascensionnelle et vieilles chapes à reprendre avant tout carrelage ou parquet neuf : un diagnostic humidité préalable est systématique.",
  },
  'saint-gilles': {
    typology: "Saint-Gilles est réputée pour ses maisons de maître Art Nouveau, ses immeubles bourgeois autour du Parvis et son ambiance cosmopolite.",
    quartiers: ['Parvis', 'Barrière', 'Ma Campagne', 'Bethlehem', 'Louise'],
    localNote: "Forte concentration de biens Art Nouveau à préserver : les rénovations mêlent restauration des éléments d'origine et adaptation aux normes énergétiques actuelles.",
    constructionContext: "Les intérieurs Art Nouveau du Parvis demandent une restauration délicate des mosaïques, vitraux et plafonds décorés : nous travaillons souvent en parallèle avec un restaurateur spécialisé.",
  },
  'saint-josse-ten-noode': {
    typology: "Saint-Josse-ten-Noode est une commune dense au tissu bâti ancien, avec de nombreux immeubles à appartements et maisons de rangée.",
    quartiers: ['Botanique', 'Nord', 'Squares', 'Madou'],
    constructionContext: "Les immeubles à appartements anciens de Saint-Josse imposent souvent une mise en conformité incendie (portes coupe-feu, gaines) et une refonte électrique complète des parties communes.",
  },
  schaerbeek: {
    typology: "Schaerbeek offre une grande diversité : maisons de maître à Dailly, immeubles bourgeois autour de Meiser, quartiers populaires vers la gare du Nord et cité-jardin de Terdelt.",
    quartiers: ['Helmet', 'Terdelt', 'Azalée', 'Dailly', 'Liedts', 'Voltaire', 'Meiser', 'Josaphat'],
    constructionContext: "À Schaerbeek nous rénovons régulièrement des maisons de maître à Dailly avec parquets massifs à décaper et cheminées d'origine à sauver : approche patrimoniale exigeante et coordination avec un menuisier d'art.",
  },
  uccle: {
    typology: "Uccle est majoritairement résidentiel haut de gamme avec villas Art Déco, maisons modernistes et copropriétés récentes.",
    quartiers: ['Dieweg', 'Observatoire', 'Calevoet', 'Stalle', 'Wolvendael', 'Fort-Jaco', 'Prince d\'Orange'],
    localNote: "Commune à fort potentiel d'écorénovation : nombreux projets combinent isolation par l'extérieur, pompe à chaleur et panneaux photovoltaïques avec primes Renolution maximales.",
    constructionContext: "Les villas Art Déco et modernistes d'Uccle se prêtent parfaitement à l'écorénovation : isolation par l'extérieur possible sans dénaturer, pompes à chaleur air/eau efficaces sur les grandes surfaces.",
  },
  'watermael-boitsfort': {
    typology: "Watermael-Boitsfort est très vert avec ses cités-jardins classées, ses villas en lisière de forêt et son ambiance résidentielle privilégiée.",
    quartiers: ['Coin du Balai', 'Boitsfort', 'Watermael', 'Cité-Jardin Le Logis', 'Cité-Jardin Floréal'],
    localNote: "Cités-jardins classées (Le Logis, Floréal) : interventions extérieures très encadrées, coordination indispensable avec Urban.brussels.",
    constructionContext: "Chaque intervention extérieure au Logis ou à Floréal demande un accord préalable d'Urban.brussels et le respect strict du gabarit, des couleurs et des matériaux d'origine — délai administratif à anticiper.",
  },
  'woluwe-saint-lambert': {
    typology: "Woluwe-Saint-Lambert est résidentielle aisée avec un parc immobilier des années 60-80 dominant : petits immeubles bourgeois, maisons unifamiliales, copropriétés modernes autour de Roodebeek et Tomberg.",
    quartiers: ['Tomberg', 'Roodebeek', 'Woluwe Shopping', 'Kraainem', 'Georges Henri'],
    constructionContext: "Les petits immeubles bourgeois autour de Tomberg cumulent souvent chaudières collectives vieillissantes et installations électriques d'origine : projets typiquement pilotés par le syndic avec vote en AG.",
  },
  'woluwe-saint-pierre': {
    typology: "Woluwe-Saint-Pierre est l'une des communes les plus aisées de Bruxelles : villas Stockel, appartements haut de gamme, propriétés avec jardins.",
    quartiers: ['Stockel', 'Parmentier', 'Val des Seigneurs', 'Chant d\'Oiseau', 'Montgomery'],
    constructionContext: "Les villas de Stockel réclament des finitions premium : parquets massif chêne, carrelage grand format 120x260, cuisines sur mesure et domotique intégrée fréquemment demandée.",
  },
};

// -------- NL --------
const COMMUNE_CONTENT_NL: Record<string, CommuneContent> = {
  bruxelles: {
    typology: "Brussel-Stad concentreert zeer uiteenlopende typologieën: herenhuizen van de Zavel en de Marollen, Art Nouveau- en Art Deco-gebouwen van de Vijfhoek, moderne appartementen in de Noordwijk en sociale woningen in Laken.",
    quartiers: ['Zavel', 'Marollen', 'Europese wijk', 'Noordwijk', 'Laken', 'Neder-Over-Heembeek', 'Haren'],
    localNote: "Veel panden liggen in beschermingszones van Urban.brussels: vergunningsaanvragen voor dak, gevel of buitenschrijnwerk vereisen vaak het advies van de Koninklijke Commissie voor Monumenten en Landschappen.",
    constructionContext: "Onze teams komen bijna dagelijks in de vijfhoek: krappe werven in voetgangerszones, parkeervergunning 15 dagen op voorhand aan te vragen en fijne coördinatie met winkels op de gelijkvloerse verdieping.",
  },
  anderlecht: {
    typology: "Anderlecht mengt naoorlogse grote wooncomplexen in Kuregem, arbeiderswoningen rond het kanaal en meer zuidelijke villawijken. Renovaties richten zich vaak op thermische isolatie en elektrische conformering.",
    quartiers: ['Kuregem', 'Erasmus', 'Neerpede', 'Bizet', 'Slachthuis', 'Astridpark', 'Aurora'],
    constructionContext: "Veel van onze werven in Anderlecht betreffen arbeiderswoningen in Kuregem of Bizet, met vervanging van gietijzeren leidingen, oude Bakelite-verdeelborden en behandeling van opstijgend vocht.",
  },
  auderghem: {
    typology: "Oudergem is grotendeels residentieel met een woningpark uit de jaren 60-80: appartementen in kleine gebouwen, enkele geïsoleerde villa's en recente mede-eigendommen rond Herrmann-Debroux.",
    quartiers: ['Herrmann-Debroux', 'Hertoginnedal', 'Blankedelle', 'Rood Klooster', 'Sint-Anna'],
    constructionContext: "Appartementen uit de jaren 60-80 in Herrmann-Debroux hebben vaak einde-leven installaties: verdeelbord te vervangen, collectieve verwarming te herzien, VMC en sanitair te moderniseren.",
  },
  'berchem-sainte-agathe': {
    typology: "Sint-Agatha-Berchem is een rustige gemeente met overwegend eengezinswoningen uit de jaren 30 en enkele recente gebouwen.",
    quartiers: ['Centrum', 'Selder', 'Kasterlinden', 'Hunderenveld'],
    constructionContext: "De eengezinswoningen uit de jaren 30 in Berchem vragen typisch binnenisolatie, vervanging van enkelglas en aanpassing van de verwarming naar condensatie of warmtepomp.",
  },
  etterbeek: {
    typology: "Etterbeek wordt gekenmerkt door zijn burgergebouwen uit het begin van de 20e eeuw en zijn nabijheid van de Europese instellingen.",
    quartiers: ['Jubelpark', 'Europese wijk', 'Marie-Louiseplein', 'Chasse', 'Jourdan'],
    localNote: "Zone met hoge dichtheid van expats: werven vaak op afstand beheerd, met behoefte aan regelmatige rapportering en toegangscoördinatie.",
    constructionContext: "De Art Deco-gebouwen rond het Jubelpark vereisen behoud van originele plafondmoulures, schouwen en parket, en tegelijk discrete modernisering van elektriciteit en verwarming — vaak in bewoonde staat.",
  },
  evere: {
    typology: "Evere heeft een gevarieerd residentieel weefsel: gebouwen uit de jaren 60-70, eengezinswoningen en recente ontwikkelingen rond de Da Vinci-wijk.",
    quartiers: ['Centrum', 'Bewustzijn', 'Koning Boudewijnpark', 'Da Vinci', 'Picardië', 'Paduwa'],
    constructionContext: "In Evere veel originele Bakelite-verdeelborden en stookolieketels om te vervangen door gascondensatie of warmtepomp met Renolution-premies.",
  },
  forest: {
    typology: "Vorst combineert oude herenhuizen rond Sint-Antonius, arbeidersgebouwen in de laagte en herbestemde industriële lofts bij Wiels.",
    quartiers: ['Sint-Antonius', 'Wiels', 'Hoogte Honderd', 'Neder-Vorst', 'Van Volxem'],
    constructionContext: "De herenhuizen van Sint-Antonius hebben doorgaans smalle trapzalen die het uitvoeren van materialen bemoeilijken: versterkte werflogistiek en zorgvuldige afdekking noodzakelijk.",
  },
  ganshoren: {
    typology: "Ganshoren is een kleine residentiële gemeente met vooral eengezinswoningen uit de jaren 30 tot 60.",
    quartiers: ['Centrum', 'Basiliek', 'Villa\'s', 'Rusatira'],
    constructionContext: "De paviljoenen uit de jaren 30-60 in Ganshoren combineren vaak drie gecoördineerde werven: dakherstel, dakisolatie en vervanging van atmosferische ketel.",
  },
  ixelles: {
    typology: "Elsene wordt gekenmerkt door zijn Art Nouveau- en Art Deco-herenhuizen, zijn grote burgerappartementen en zijn studentengebouwen nabij de ULB.",
    quartiers: ['Flageyplein', 'Kasteleinsplein', 'Baljuw', 'Matongé', 'ULB', 'Vijvers van Elsene', 'Berkendael'],
    localNote: "Veel geklasseerde panden of in beschermingszone: interventies aan gevels, ramen en daken vereisen vaak vergunningsaanvragen.",
    constructionContext: "De Art Nouveau-herenhuizen van Flagey en Kasteleinsplein zijn vaak geklasseerd: elke gevel- of buitenraaminterventie vereist een vergunningsaanvraag met advies van de Commissie voor Monumenten en Landschappen.",
  },
  jette: {
    typology: "Jette combineert een residentieel weefsel rond het Koning Boudewijnpark, wijken nabij UZ Brussel en handelszones.",
    quartiers: ['Centrum', 'Miroir', 'UZ Brussel', 'Koning Boudewijnpark', 'Esseghem'],
    constructionContext: "In Jette komen we regelmatig in mede-eigendommen rond UZ Brussel en het Koning Boudewijnpark: AREI-conformering van gemene delen, vervanging van gietijzeren stijgleidingen.",
  },
  koekelberg: {
    typology: "Koekelberg is een kleine dichtbevolkte gemeente, gestructureerd rond de Basiliek. Het woningpark bestaat voornamelijk uit oude gebouwen om te renoveren.",
    quartiers: ['Basiliek', 'Centrum', 'Simonis'],
    constructionContext: "De oude gebouwen rond de Basiliek vereisen vaak een volledige renovatie: volledige elektriciteit, gietijzeren loodgieterij te vervangen door meerlaags en collectieve verwarming te moderniseren.",
  },
  'molenbeek-saint-jean': {
    typology: "Sint-Jans-Molenbeek combineert historische residentiële zones, arbeiderswijken rond het kanaal en oude industriële sites in herbestemming.",
    quartiers: ['Kanaal', 'Historisch', 'Hertoginne', 'Karreveld', 'Machtens', 'Osseghem'],
    constructionContext: "De arbeiderswoningen aan het kanaal hebben vaak opstijgend vocht en oude chape te vervangen vóór nieuw tegelwerk of parket: een voorafgaande vochtdiagnose is systematisch.",
  },
  'saint-gilles': {
    typology: "Sint-Gillis staat bekend om zijn Art Nouveau-herenhuizen, zijn burgergebouwen rond het Voorplein en zijn kosmopolitische sfeer.",
    quartiers: ['Voorplein', 'Barrière', 'Ma Campagne', 'Bethlehem', 'Louiza'],
    localNote: "Hoge concentratie van te behouden Art Nouveau-panden: renovaties combineren restauratie van originele elementen en aanpassing aan actuele energienormen.",
    constructionContext: "De Art Nouveau-interieurs van het Voorplein vragen delicate restauratie van mozaïeken, glasramen en versierde plafonds: we werken vaak parallel met een gespecialiseerde restaurateur.",
  },
  'saint-josse-ten-noode': {
    typology: "Sint-Joost-ten-Node is een dichtbevolkte gemeente met een oud gebouwd weefsel, met veel appartementsgebouwen en rijhuizen.",
    quartiers: ['Kruidtuin', 'Noord', 'Squares', 'Madou'],
    constructionContext: "De oude appartementsgebouwen in Sint-Joost vereisen vaak brandconformering (branddeuren, kokers) en volledige elektrische renovatie van de gemene delen.",
  },
  schaerbeek: {
    typology: "Schaarbeek biedt een grote diversiteit: herenhuizen in Dailly, burgergebouwen rond Meiser, volkswijken richting Noordstation en tuinwijk Terdelt.",
    quartiers: ['Helmet', 'Terdelt', 'Azalea', 'Dailly', 'Liedts', 'Voltaire', 'Meiser', 'Josaphat'],
    constructionContext: "In Schaarbeek renoveren we regelmatig herenhuizen in Dailly met massief parket te schuren en originele schouwen te bewaren: veeleisende patrimoniale aanpak en coördinatie met een kunstschrijnwerker.",
  },
  uccle: {
    typology: "Ukkel is overwegend hoogwaardig residentieel met Art Deco-villa's, modernistische huizen en recente mede-eigendommen.",
    quartiers: ['Dieweg', 'Sterrenwacht', 'Kalevoet', 'Stalle', 'Wolvendael', 'Fort-Jaco', 'Prins van Oranje'],
    localNote: "Gemeente met sterk ecorenovatiepotentieel: veel projecten combineren buitenisolatie, warmtepomp en zonnepanelen met maximale Renolution-premies.",
    constructionContext: "De Art Deco- en modernistische villa's van Ukkel lenen zich perfect voor ecorenovatie: buitenisolatie mogelijk zonder de gevel te ontsieren, lucht/water warmtepompen efficiënt op grote oppervlakten.",
  },
  'watermael-boitsfort': {
    typology: "Watermaal-Bosvoorde is zeer groen met zijn geklasseerde tuinwijken, zijn villa's aan de bosrand en zijn geprivilegieerde residentiële sfeer.",
    quartiers: ['Bezemhoek', 'Bosvoorde', 'Watermaal', 'Tuinwijk Le Logis', 'Tuinwijk Floréal'],
    localNote: "Geklasseerde tuinwijken (Le Logis, Floréal): buiteninterventies zeer omkaderd, onmisbare coördinatie met Urban.brussels.",
    constructionContext: "Elke buiteninterventie in Le Logis of Floréal vereist voorafgaand akkoord van Urban.brussels en strikte naleving van het oorspronkelijke gabariet, kleuren en materialen — administratieve termijn te voorzien.",
  },
  'woluwe-saint-lambert': {
    typology: "Sint-Lambrechts-Woluwe is welgestelde residentiële gemeente met dominant woningpark uit de jaren 60-80: kleine burgergebouwen, eengezinswoningen, moderne mede-eigendommen rond Roodebeek en Tomberg.",
    quartiers: ['Tomberg', 'Roodebeek', 'Woluwe Shopping', 'Kraainem', 'Georges Henri'],
    constructionContext: "De kleine burgergebouwen rond Tomberg combineren vaak verouderde collectieve ketels en originele elektrische installaties: projecten typisch geleid door de syndicus met stemming in AV.",
  },
  'woluwe-saint-pierre': {
    typology: "Sint-Pieters-Woluwe is een van de meest welgestelde gemeenten van Brussel: villa's in Stockel, hoogwaardige appartementen, eigendommen met tuinen.",
    quartiers: ['Stockel', 'Parmentier', 'Herenvallei', 'Vogelenzang', 'Montgomery'],
    constructionContext: "De villa's van Stockel vragen premium afwerking: massief eiken parket, grootformaat tegels 120x260, keukens op maat en vaak geïntegreerde domotica.",
  },
};

// -------- EN --------
const COMMUNE_CONTENT_EN: Record<string, CommuneContent> = {
  bruxelles: {
    typology: "Brussels-City concentrates very diverse typologies: mansions of the Sablon and Marolles, Art Nouveau and Art Deco buildings of the inner ring, modern apartments in the North district and social housing in Laeken.",
    quartiers: ['Sablon', 'Marolles', 'European Quarter', 'North Quarter', 'Laeken', 'Neder-Over-Heembeek', 'Haren'],
    localNote: "Many properties are in Urban.brussels protection zones: planning applications for roof, facade or external woodwork often require the opinion of the Royal Commission for Monuments and Sites.",
    constructionContext: "Our teams work almost daily in the pentagon: narrow sites in pedestrian zones, parking permits to obtain 15 days in advance and careful coordination with ground-floor shops.",
  },
  anderlecht: {
    typology: "Anderlecht mixes post-war housing estates in Cureghem, workers' houses around the canal and more southerly suburban developments. Renovations often focus on thermal insulation and electrical compliance.",
    quartiers: ['Cureghem', 'Erasme', 'Neerpede', 'Bizet', 'Abattoir', 'Astrid Park', 'Aurore'],
    constructionContext: "Many of our projects in Anderlecht involve workers' houses in Cureghem or Bizet, with cast-iron plumbing replacement, old Bakelite electrical panels to remove and rising damp to treat.",
  },
  auderghem: {
    typology: "Auderghem is mostly residential with a housing stock from the 1960s-1980s: apartments in small buildings, some isolated villas and recent co-ownerships around Herrmann-Debroux.",
    quartiers: ['Herrmann-Debroux', 'Val Duchesse', 'Blankedelle', 'Rouge-Cloître', 'Sainte-Anne'],
    constructionContext: "1960s-1980s apartments in Herrmann-Debroux often have end-of-life installations: distribution panel to replace, collective heating to review, MVHR and sanitary fixtures to modernise.",
  },
  'berchem-sainte-agathe': {
    typology: "Berchem-Sainte-Agathe is a quiet municipality with predominantly single-family homes from the 1930s and some recent buildings.",
    quartiers: ['Centre', 'Selder', 'Kasterlinden', 'Hunderenveld'],
    constructionContext: "The 1930s single-family homes in Berchem typically require interior thermal insulation, single-glazing replacement and heating overhaul towards condensing boilers or heat pumps.",
  },
  etterbeek: {
    typology: "Etterbeek is characterised by its bourgeois buildings from the early 20th century and its proximity to European institutions.",
    quartiers: ['Cinquantenaire', 'European Quarter', 'Square Marie-Louise', 'Chasse', 'Jourdan'],
    localNote: "High-density expat area: sites often remotely managed, requiring regular reporting and access coordination.",
    constructionContext: "The Art Deco buildings around Cinquantenaire require preserving original mouldings, fireplaces and parquet floors while discreetly modernising electricity and heating — often in occupied properties.",
  },
  evere: {
    typology: "Evere has a varied residential fabric: buildings from the 1960s-1970s, single-family houses and recent developments around the Da Vinci district.",
    quartiers: ['Centre', 'Conscience', 'King Baudouin Park', 'Da Vinci', 'Picardie', 'Paduwa'],
    constructionContext: "In Evere, many original Bakelite electrical panels and oil boilers to convert to gas condensing or heat pump to benefit from Renolution subsidies.",
  },
  forest: {
    typology: "Forest combines old mansions around Saint-Antoine, workers' buildings in the lower part and industrial lofts converted at Wiels.",
    quartiers: ['Saint-Antoine', 'Wiels', 'Altitude 100', 'Lower Forest', 'Van Volxem'],
    constructionContext: "Saint-Antoine mansions typically have narrow staircases that complicate material handling: reinforced site logistics and careful protection are essential.",
  },
  ganshoren: {
    typology: "Ganshoren is a small residential municipality with mostly single-family homes from the 1930s to 1960s.",
    quartiers: ['Centre', 'Basilica', 'Villas', 'Rusatira'],
    constructionContext: "The 1930s-60s pavilions in Ganshoren often combine three coordinated works: roof repair, attic insulation and atmospheric boiler replacement.",
  },
  ixelles: {
    typology: "Ixelles is characterised by its Art Nouveau and Art Deco mansions, its large bourgeois apartments and its student buildings near ULB.",
    quartiers: ['Flagey', 'Châtelain', 'Bailli', 'Matonge', 'ULB', 'Ixelles Ponds', 'Berkendael'],
    localNote: "Many listed properties or in protection zones: work on facades, frames and roofs often requires planning applications.",
    constructionContext: "The Art Nouveau mansions of Flagey and Châtelain are often listed: any facade or exterior joinery work requires a planning application with opinion from the Monuments and Sites Commission.",
  },
  jette: {
    typology: "Jette combines residential fabric around King Baudouin Park, neighbourhoods near UZ Brussel and commercial areas.",
    quartiers: ['Centre', 'Miroir', 'UZ Brussel', 'King Baudouin Park', 'Esseghem'],
    constructionContext: "In Jette we regularly work on co-ownership buildings around UZ Brussel and King Baudouin Park: RGIE compliance of common areas, replacement of cast-iron rising mains.",
  },
  koekelberg: {
    typology: "Koekelberg is a small dense municipality, structured around the Basilica. The housing stock consists mainly of old buildings to renovate.",
    quartiers: ['Basilica', 'Centre', 'Simonis'],
    constructionContext: "Old buildings around the Basilica often require complete renovation: full electricity, cast-iron plumbing to be replaced with multilayer and collective heating regulation to modernise.",
  },
  'molenbeek-saint-jean': {
    typology: "Molenbeek-Saint-Jean combines historic residential areas, workers' neighbourhoods around the canal and former industrial sites being redeveloped.",
    quartiers: ['Canal', 'Historic', 'Duchesse', 'Karreveld', 'Machtens', 'Osseghem'],
    constructionContext: "The workers' houses of the canal frequently have rising damp and old screeds to redo before any new tiling or parquet: a preliminary damp diagnosis is systematic.",
  },
  'saint-gilles': {
    typology: "Saint-Gilles is renowned for its Art Nouveau mansions, its bourgeois buildings around the Parvis and its cosmopolitan atmosphere.",
    quartiers: ['Parvis', 'Barrière', 'Ma Campagne', 'Bethlehem', 'Louise'],
    localNote: "High concentration of Art Nouveau properties to preserve: renovations combine restoration of original elements and adaptation to current energy standards.",
    constructionContext: "The Art Nouveau interiors of Parvis require delicate restoration of mosaics, stained glass and decorated ceilings: we often work in parallel with a specialist restorer.",
  },
  'saint-josse-ten-noode': {
    typology: "Saint-Josse-ten-Noode is a dense municipality with old building fabric, with many apartment buildings and terraced houses.",
    quartiers: ['Botanique', 'North', 'Squares', 'Madou'],
    constructionContext: "The old apartment buildings of Saint-Josse often require fire compliance (fire doors, ducts) and complete electrical renovation of common areas.",
  },
  schaerbeek: {
    typology: "Schaerbeek offers great diversity: mansions in Dailly, bourgeois buildings around Meiser, working-class neighbourhoods towards the North station and garden city of Terdelt.",
    quartiers: ['Helmet', 'Terdelt', 'Azalea', 'Dailly', 'Liedts', 'Voltaire', 'Meiser', 'Josaphat'],
    constructionContext: "In Schaerbeek we regularly renovate mansions in Dailly with solid parquet to strip and original fireplaces to save: demanding heritage approach and coordination with an art carpenter.",
  },
  uccle: {
    typology: "Uccle is mostly high-end residential with Art Deco villas, modernist houses and recent co-ownerships.",
    quartiers: ['Dieweg', 'Observatory', 'Calevoet', 'Stalle', 'Wolvendael', 'Fort-Jaco', 'Prince of Orange'],
    localNote: "Municipality with strong eco-renovation potential: many projects combine external insulation, heat pump and photovoltaic panels with maximum Renolution subsidies.",
    constructionContext: "The Art Deco and modernist villas of Uccle lend themselves perfectly to eco-renovation: exterior insulation possible without disfiguring, air/water heat pumps efficient on large surfaces.",
  },
  'watermael-boitsfort': {
    typology: "Watermael-Boitsfort is very green with its listed garden cities, its villas on the edge of the forest and its privileged residential atmosphere.",
    quartiers: ['Coin du Balai', 'Boitsfort', 'Watermael', 'Garden city Le Logis', 'Garden city Floréal'],
    localNote: "Listed garden cities (Le Logis, Floréal): exterior interventions highly regulated, essential coordination with Urban.brussels.",
    constructionContext: "Any exterior intervention in Le Logis or Floréal requires prior agreement from Urban.brussels and strict respect of the original scale, colours and materials — administrative time to anticipate.",
  },
  'woluwe-saint-lambert': {
    typology: "Woluwe-Saint-Lambert is affluent residential with dominant housing stock from the 1960s-1980s: small bourgeois buildings, single-family homes, modern co-ownerships around Roodebeek and Tomberg.",
    quartiers: ['Tomberg', 'Roodebeek', 'Woluwe Shopping', 'Kraainem', 'Georges Henri'],
    constructionContext: "The small bourgeois buildings around Tomberg often combine aging collective boilers and original electrical installations: projects typically driven by the syndic with GA vote.",
  },
  'woluwe-saint-pierre': {
    typology: "Woluwe-Saint-Pierre is one of the most affluent municipalities in Brussels: villas in Stockel, high-end apartments, properties with gardens.",
    quartiers: ['Stockel', 'Parmentier', 'Val des Seigneurs', 'Chant d\'Oiseau', 'Montgomery'],
    constructionContext: "The villas of Stockel require premium finishes: solid oak parquet, large-format 120x260 tiling, custom kitchens and often integrated home automation.",
  },
};

const COMMUNE_CONTENT_BY_LANG: Record<Lang, Record<string, CommuneContent>> = {
  fr: COMMUNE_CONTENT_FR,
  nl: COMMUNE_CONTENT_NL,
  en: COMMUNE_CONTENT_EN,
};

export const COMMUNE_CONTENT = COMMUNE_CONTENT_FR;

export const getCommuneContent = (city: string): CommuneContent | undefined => {
  return COMMUNE_CONTENT_FR[normalize(city)];
};

export const getCommuneContentByLang = (
  city: string,
  lang: Lang = 'fr'
): CommuneContent | undefined => {
  return COMMUNE_CONTENT_BY_LANG[lang]?.[normalize(city)] ?? COMMUNE_CONTENT_FR[normalize(city)];
};
