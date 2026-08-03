export interface CommuneContent {
  typology: string;
  quartiers: string[];
  localNote?: string;
}

const normalize = (name: string): string =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');

export const COMMUNE_CONTENT: Record<string, CommuneContent> = {
  bruxelles: {
    typology:
      "Bruxelles-Ville concentre des typologies très variées : maisons de maître du Sablon et des Marolles, immeubles Art Nouveau et Art Déco de la Ceinture, appartements modernes du quartier Nord et logements sociaux à Laeken. Chaque rénovation démarre par une analyse du bâti d'origine, souvent classé ou en zone protégée.",
    quartiers: ['Sablon', 'Marolles', 'Quartier européen', 'Quartier Nord', 'Laeken', 'Neder-Over-Heembeek', 'Haren'],
    localNote:
      "Nombreux biens en zone de protection Urban.brussels : les demandes de permis pour toiture, façade ou menuiseries extérieures nécessitent souvent l'avis de la Commission Royale des Monuments et Sites.",
  },
  anderlecht: {
    typology:
      "Anderlecht mélange grands ensembles d'après-guerre à Cureghem, maisons ouvrières autour du canal et lotissements pavillonnaires plus au sud. Les rénovations portent souvent sur l'isolation thermique et la mise aux normes électriques d'installations antérieures à 1981.",
    quartiers: ['Cureghem', 'Erasme', 'Neerpede', 'Bizet', 'Abattoir', 'Parc Astrid', 'Aurore'],
  },
  auderghem: {
    typology:
      "Auderghem est majoritairement résidentiel avec un parc immobilier des années 60-80 : appartements en petits immeubles, quelques villas isolées et copropriétés récentes autour d'Herrmann-Debroux. Rénovations orientées confort et PEB.",
    quartiers: ['Herrmann-Debroux', 'Val Duchesse', 'Blankedelle', 'Rouge-Cloître', 'Sainte-Anne'],
  },
  'berchem-sainte-agathe': {
    typology:
      "Berchem-Sainte-Agathe est une commune calme à dominante pavillonnaire, avec des maisons unifamiliales des années 30 et quelques immeubles récents. La demande porte majoritairement sur des rénovations complètes de maisons familiales.",
    quartiers: ['Centre', 'Selder', 'Kasterlinden', 'Hunderenveld'],
  },
  etterbeek: {
    typology:
      "Etterbeek est marquée par ses immeubles bourgeois du début du XXe siècle et sa proximité avec les institutions européennes. Les rénovations touchent souvent à des biens classés, des toitures mansardées et des installations techniques à moderniser.",
    quartiers: ['Cinquantenaire', 'Quartier européen', 'Square Marie-Louise', 'Chasse', 'Jourdan'],
    localNote:
      "Zone à forte densité d'expatriés et de professionnels européens : chantiers souvent gérés à distance, avec besoin de reporting régulier et de coordination des accès.",
  },
  evere: {
    typology:
      "Evere présente un tissu résidentiel varié : immeubles des années 60-70, maisons pavillonnaires et développements récents autour du quartier Da Vinci. Rénovations centrées sur mise aux normes et amélioration énergétique.",
    quartiers: ['Centre', 'Conscience', 'Parc Roi Baudouin', 'Da Vinci', 'Picardie', 'Paduwa'],
  },
  forest: {
    typology:
      "Forest combine anciennes maisons de maître autour de Saint-Antoine, immeubles ouvriers du bas et lofts industriels reconvertis au Wiels. Les rénovations mêlent respect du patrimoine et solutions contemporaines.",
    quartiers: ['Saint-Antoine', 'Wiels', 'Altitude 100', 'Bas-Forest', 'Van Volxem'],
  },
  ganshoren: {
    typology:
      "Ganshoren est une petite commune résidentielle avec un tissu essentiellement pavillonnaire des années 30 à 60. La demande porte principalement sur des rénovations de maisons familiales et des extensions.",
    quartiers: ['Centre', 'Basilique', 'Villas', 'Rusatira'],
  },
  ixelles: {
    typology:
      "Ixelles est marquée par ses maisons de maître Art Nouveau et Art Déco, ses grands appartements bourgeois et ses immeubles étudiants près de l'ULB. Les rénovations touchent des biens à forte valeur patrimoniale avec exigences esthétiques élevées.",
    quartiers: ['Flagey', 'Châtelain', 'Bailli', 'Matonge', 'ULB', 'Etangs d\'Ixelles', 'Berkendael'],
    localNote:
      "Nombreux biens classés ou en zone de protection : les interventions sur façades, châssis et toitures nécessitent souvent des demandes de permis avec avis de la Commission des Monuments et Sites.",
  },
  jette: {
    typology:
      "Jette combine tissu résidentiel autour du King Baudouin Park, quartiers proches de l'UZ Brussel et zones commerçantes. Rénovations classiques de maisons familiales et appartements.",
    quartiers: ['Centre', 'Miroir', 'UZ Brussel', 'King Baudouin Park', 'Esseghem'],
  },
  koekelberg: {
    typology:
      "Koekelberg est une petite commune dense, structurée autour de la Basilique de Koekelberg. Le parc immobilier est majoritairement composé d'immeubles anciens à rénover et de maisons de rangée.",
    quartiers: ['Basilique', 'Centre', 'Simonis'],
  },
  'molenbeek-saint-jean': {
    typology:
      "Molenbeek-Saint-Jean allie zones résidentielles historiques, quartiers ouvriers autour du canal et anciens sites industriels en reconversion. Les rénovations sont souvent lourdes : isolation, remise aux normes complètes, valorisation de bâti ancien.",
    quartiers: ['Canal', 'Historique', 'Duchesse', 'Karreveld', 'Machtens', 'Osseghem'],
  },
  'saint-gilles': {
    typology:
      "Saint-Gilles est réputée pour ses maisons de maître Art Nouveau, ses immeubles bourgeois autour du Parvis et son ambiance cosmopolite. Les rénovations conjuguent préservation d'éléments d'époque (moulures, cheminées, parquets) et adaptation contemporaine.",
    quartiers: ['Parvis', 'Barrière', 'Ma Campagne', 'Bethlehem', 'Louise'],
    localNote:
      "Forte concentration de biens Art Nouveau à préserver : les rénovations mêlent restauration des éléments d'origine et adaptation aux normes énergétiques actuelles.",
  },
  'saint-josse-ten-noode': {
    typology:
      "Saint-Josse-ten-Noode est une commune dense au tissu bâti ancien, avec de nombreux immeubles à appartements et maisons de rangée. Les rénovations sont majoritairement des remises à niveau techniques.",
    quartiers: ['Botanique', 'Nord', 'Squares', 'Madou'],
  },
  schaerbeek: {
    typology:
      "Schaerbeek offre une grande diversité : maisons de maître à Dailly, immeubles bourgeois autour de Meiser, quartiers populaires vers la gare du Nord et cité-jardin de Terdelt. Rénovations souvent lourdes avec enjeux d'isolation et de mise aux normes RGIE.",
    quartiers: ['Helmet', 'Terdelt', 'Azalée', 'Dailly', 'Liedts', 'Voltaire', 'Meiser', 'Josaphat'],
  },
  uccle: {
    typology:
      "Uccle est majoritairement résidentiel haut de gamme avec villas Art Déco, maisons modernistes et copropriétés récentes. Les rénovations portent sur des standards élevés : matériaux premium, domotique, PAC, isolation performante.",
    quartiers: ['Dieweg', 'Observatoire', 'Calevoet', 'Stalle', 'Wolvendael', 'Fort-Jaco', 'Prince d\'Orange'],
    localNote:
      "Commune à fort potentiel d'écorénovation : nombreux projets combinent isolation par l'extérieur, pompe à chaleur et panneaux photovoltaïques avec primes Renolution maximales.",
  },
  'watermael-boitsfort': {
    typology:
      "Watermael-Boitsfort est très vert avec ses cités-jardins classées, ses villas en lisière de forêt et son ambiance résidentielle privilégiée. Les rénovations respectent souvent des cahiers des charges patrimoniaux stricts.",
    quartiers: ['Coin du Balai', 'Boitsfort', 'Watermael', 'Cité-Jardin Le Logis', 'Cité-Jardin Floréal'],
    localNote:
      "Cités-jardins classées (Le Logis, Floréal) : interventions extérieures très encadrées, coordination indispensable avec Urban.brussels.",
  },
  'woluwe-saint-lambert': {
    typology:
      "Woluwe-Saint-Lambert est résidentielle aisée avec un parc immobilier des années 60-80 dominant : petits immeubles bourgeois, maisons unifamiliales, copropriétés modernes autour de Roodebeek et Tomberg.",
    quartiers: ['Tomberg', 'Roodebeek', 'Woluwe Shopping', 'Kraainem', 'Georges Henri'],
  },
  'woluwe-saint-pierre': {
    typology:
      "Woluwe-Saint-Pierre est l'une des communes les plus aisées de Bruxelles : villas Stockel, appartements haut de gamme, propriétés avec jardins. Les rénovations affichent des standards premium et intègrent souvent domotique et solutions écologiques.",
    quartiers: ['Stockel', 'Parmentier', 'Val des Seigneurs', 'Chant d\'Oiseau', 'Montgomery'],
  },
};

export const getCommuneContent = (city: string): CommuneContent | undefined => {
  return COMMUNE_CONTENT[normalize(city)];
};
