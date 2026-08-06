import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Clock, MapPin, Shield, Zap, Droplets, Flame, Wind, Hammer, Palette } from 'lucide-react';

export type Lang = 'fr' | 'nl' | 'en';

export type ServiceKey = 'renovation' | 'electricite' | 'plomberie' | 'chauffage' | 'climatisation' | 'menuiserie' | 'peinture' | 'carrelage';

/**
 * URL slug par langue et par service.
 * Le slug FR utilise le NOM du métier (plombier vs plomberie) car c'est ce que Google recherche.
 * Ex : "plombier bruxelles" = 480 rech/mois, "plomberie bruxelles" = 20 rech/mois.
 */
export const SERVICE_URL_SLUGS: Record<Lang, Record<ServiceKey, string>> = {
  fr: {
    renovation: 'renovation',
    electricite: 'electricien',
    plomberie: 'plombier',
    chauffage: 'chauffagiste',
    climatisation: 'climatisation',
    menuiserie: 'menuisier',
    peinture: 'peintre',
    carrelage: 'carreleur',
  },
  nl: {
    renovation: 'renovatie',
    electricite: 'elektricien',
    plomberie: 'loodgieter',
    chauffage: 'verwarmingsinstallateur',
    climatisation: 'airco-installateur',
    menuiserie: 'schrijnwerker',
    peinture: 'schilder',
    carrelage: 'tegelzetter',
  },
  en: {
    renovation: 'renovation',
    electricite: 'electrician',
    plomberie: 'plumber',
    chauffage: 'heating',
    climatisation: 'air-conditioning',
    menuiserie: 'carpenter',
    peinture: 'painter',
    carrelage: 'tiler',
  },
};

/** Slug URL (dans la langue courante) → clé de service interne */
export const resolveServiceFromSlug = (slug: string, lang: Lang): ServiceKey | undefined => {
  const langSlugs = SERVICE_URL_SLUGS[lang];
  const key = (Object.keys(langSlugs) as ServiceKey[]).find(k => langSlugs[k] === slug);
  if (key) return key;
  // Fallback : reconnaît aussi les anciens slugs techniques (backward compat)
  if (slug === 'renovation' || slug === 'electricite' || slug === 'plomberie' ||
      slug === 'chauffage' || slug === 'climatisation' || slug === 'menuiserie' ||
      slug === 'peinture' || slug === 'carrelage') {
    return slug as ServiceKey;
  }
  return undefined;
};

export interface ServiceContent {
  heroSubtitle: (city: string) => string;
  trustBadges: { icon: LucideIcon; text: string }[];
  aboutTitle: (city: string) => string;
  description: (city: string) => string[];
  targetAudience: { title: string; description: string }[];
  process: { title: string; description: string }[];
  pricingFactors: { title: string; description: string }[];
  faq: (city: string) => { question: string; answer: string }[];
}

// -------- Trust badges génériques réutilisables --------
const commonTrustBadgesFR = [
  { icon: Clock, text: 'Intervention 24/7' },
  { icon: Shield, text: 'Garantie décennale' },
  { icon: CheckCircle2, text: 'Devis gratuit sous 24h' },
  { icon: MapPin, text: 'Toute la Région bruxelloise' },
];
const commonTrustBadgesNL = [
  { icon: Clock, text: 'Interventie 24/7' },
  { icon: Shield, text: 'Tienjarige garantie' },
  { icon: CheckCircle2, text: 'Gratis offerte binnen 24u' },
  { icon: MapPin, text: 'Hele Brusselse regio' },
];
const commonTrustBadgesEN = [
  { icon: Clock, text: '24/7 emergency service' },
  { icon: Shield, text: '10-year warranty' },
  { icon: CheckCircle2, text: 'Free quote within 24h' },
  { icon: MapPin, text: 'Across Brussels region' },
];

// -------- FR --------
const SERVICE_CONTENT_FR: Record<string, ServiceContent> = {
  renovation: {
    heroSubtitle: (city) =>
      `Rénovation complète ou partielle à ${city} : coordination tous corps d'état, gestion de chantier centralisée et respect des délais annoncés.`,
    trustBadges: commonTrustBadgesFR,
    aboutTitle: (city) => `Rénovation clé en main à ${city}`,
    description: (city) => [
      `Vericore prend en charge des projets de rénovation de toutes envergures à ${city} : appartements, maisons unifamiliales, plateaux de bureaux et parties communes d'immeubles. Notre approche pluridisciplinaire couvre gros œuvre, plâtrerie, électricité, sanitaire, chauffage et finitions, ce qui vous évite de multiplier les intervenants.`,
      `Chaque chantier commence par un diagnostic sur place, un relevé métré et une analyse des contraintes structurelles et techniques. Nous établissons un planning coordonné entre les corps de métier avec un seul chef de chantier comme interlocuteur pour toute la durée du projet.`,
      `Nous respectons les normes en vigueur en Région bruxelloise (RGPT, RGIE, PEB) et gérons les démarches administratives : permis d'urbanisme, déclarations préalables, contrôles obligatoires. Tous nos travaux sont couverts par la garantie décennale conformément à la législation belge.`,
    ],
    targetAudience: [
      { title: 'Propriétaires occupants', description: 'Rénovation complète ou pièce par pièce, en site occupé ou vide, coordination totale.' },
      { title: 'Investisseurs & bailleurs', description: 'Remise en état entre locataires, mise en conformité PEB, valorisation avant revente.' },
      { title: 'Syndics & copropriétés', description: 'Rénovation de parties communes, façades, cages d\'escaliers, avec devis contradictoires.' },
    ],
    process: [
      { title: 'Visite technique', description: 'Diagnostic sur place, relevé métré, analyse des contraintes structurelles.' },
      { title: 'Devis détaillé', description: 'Chiffrage lot par lot, planning coordonné et échéancier de paiement clair.' },
      { title: 'Chantier coordonné', description: 'Un chef de chantier centralise les corps de métier et le contrôle qualité.' },
      { title: 'Réception & garantie', description: 'Levée des réserves, remise du dossier technique et garantie décennale.' },
    ],
    pricingFactors: [
      { title: 'Surface et typologie', description: 'Appartement, maison ou immeuble : la surface et le nombre de niveaux structurent le coût.' },
      { title: 'Ampleur des travaux', description: 'Simple rafraîchissement, rénovation lourde avec structure ou reprise en sous-œuvre.' },
      { title: 'Niveau de finitions', description: 'Standard, milieu de gamme ou premium : matériaux, quincaillerie, équipements.' },
      { title: 'Contraintes du site', description: 'Étages sans ascenseur, accès difficile, chantier occupé impactent la logistique.' },
    ],
    faq: (city) => [
      { question: `Quel est le délai moyen pour une rénovation complète d'appartement à ${city} ?`, answer: `Une rénovation complète d'un appartement de 80 à 100 m² prend en moyenne 8 à 12 semaines, incluant permis, commande de matériaux et finitions.` },
      { question: `Faut-il un permis d'urbanisme pour rénover à ${city} ?`, answer: `Cela dépend des travaux. Les changements de destination, extensions ou modifications de façade nécessitent un permis. Nous vous conseillons dès la première visite.` },
      { question: `Peut-on habiter le logement pendant les travaux ?`, answer: `C'est envisageable pour des rénovations partielles. Nous planifions les interventions par zones pour limiter la gêne.` },
      { question: `Comment se passe la coordination entre les corps de métier ?`, answer: `Un chef de chantier Vericore centralise planning, commandes de matériaux et contrôle qualité. Vous avez un seul interlocuteur.` },
      { question: `Travaillez-vous avec un architecte ?`, answer: `Oui. Nous collaborons régulièrement avec des architectes indépendants et pouvons vous mettre en relation si votre projet en requiert un.` },
    ],
  },

  electricite: {
    heroSubtitle: (city) =>
      `Installations et mises en conformité RGIE à ${city} : tableaux, circuits, éclairage, domotique. Techniciens certifiés et contrôle par organisme agréé.`,
    trustBadges: [
      { icon: Zap, text: 'Dépannage sous 60 min' },
      { icon: Shield, text: 'Certification RGIE' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Électricien professionnel à ${city}`,
    description: (city) => [
      `Vericore installe, rénove et dépanne les installations électriques résidentielles et tertiaires à ${city}. Nos techniciens interviennent sur les tableaux divisionnaires, les circuits domestiques, l'éclairage LED, les prises spécialisées, la ventilation et les systèmes domotiques.`,
      `Toute intervention respecte le Règlement Général des Installations Électriques (RGIE) et le nouveau Livre 1 applicable en Belgique depuis 2020. Nous préparons le dossier technique pour le contrôle par un organisme agréé (Vinçotte, BTV, AIB).`,
      `Pour les urgences — coupure générale, disjoncteur qui saute en boucle, odeur de brûlé, panne partielle — nous intervenons sous 60 minutes en journée, 24h/7 pour les cas critiques.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Mise aux normes, extension de circuit, tableau divisionnaire, éclairage sur mesure.' },
      { title: 'Syndics d\'immeubles', description: 'Parties communes, contrôles périodiques, mise en conformité collective.' },
      { title: 'Commerces & bureaux', description: 'Installations triphasées, éclairage professionnel, prises data et courant faible.' },
    ],
    process: [
      { title: 'Audit d\'installation', description: 'Vérification du tableau, des circuits, de la mise à la terre et des différentiels.' },
      { title: 'Devis avec plan', description: 'Chiffrage détaillé, plan des circuits proposés et matériel spécifié par marque.' },
      { title: 'Pose et raccordement', description: 'Travaux réalisés par un électricien qualifié, testés à chaque étape.' },
      { title: 'Contrôle RGIE', description: 'Passage de l\'organisme agréé, corrections si besoin, remise du PV de conformité.' },
    ],
    pricingFactors: [
      { title: 'État de l\'installation existante', description: 'Rénovation totale ou simple mise aux normes : le point de départ change tout.' },
      { title: 'Nombre de points électriques', description: 'Prises, interrupteurs, points lumineux et circuits spécialisés à ajouter.' },
      { title: 'Passage des gaines', description: 'Encastré (saignées) ou apparent : impact important sur la main-d\'œuvre.' },
      { title: 'Équipements spécifiques', description: 'Domotique, borne de recharge, panneaux photovoltaïques, tableau connecté.' },
    ],
    faq: (city) => [
      { question: `Quand une mise en conformité RGIE est-elle obligatoire à ${city} ?`, answer: `À la vente d'un bien, lors d'une extension de l'installation ou tous les 25 ans pour les installations antérieures à 1981.` },
      { question: `Combien coûte le remplacement d'un tableau électrique ?`, answer: `Entre 1 200 € et 3 500 € selon le nombre de circuits, la présence de différentiels et l'accessibilité.` },
      { question: `Intervenez-vous en urgence électrique la nuit ou le week-end ?`, answer: `Oui, notre service d'urgence 24/7 couvre les coupures, courts-circuits et défauts d'isolement à ${city}.` },
      { question: `Vous occupez-vous du contrôle par l'organisme agréé ?`, answer: `Oui. Nous planifions le rendez-vous, préparons le dossier technique et sommes présents lors du contrôle.` },
      { question: `Installez-vous des bornes de recharge pour véhicule électrique ?`, answer: `Oui, en résidentiel comme en copropriété. Nous étudions la puissance disponible et posons des bornes 3,7 à 22 kW.` },
    ],
  },

  plomberie: {
    heroSubtitle: (city) =>
      `Dépannage plomberie 24/7 et installations sanitaires à ${city}. Fuites, canalisations, chauffe-eau, salles de bain : intervention rapide et devis clair.`,
    trustBadges: [
      { icon: Droplets, text: 'Urgence sous 45 min' },
      { icon: Shield, text: 'Prix annoncé avant travaux' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Plombier professionnel à ${city}`,
    description: (city) => [
      `Vericore intervient pour tous les besoins en plomberie et sanitaire à ${city} : dépannages d'urgence, installations neuves et rénovations complètes. Nous couvrons les fuites d'eau, canalisations bouchées, chauffe-eau, adoucisseurs, salles de bain et cuisines.`,
      `En cas d'urgence, un technicien est mobilisable sous 45 minutes en semaine et 60 minutes en soirée ou week-end. Chaque intervention démarre par un diagnostic et un prix annoncé avant travaux.`,
      `Pour les installations neuves ou les rénovations de salle de bain, nous prenons en charge l'ensemble des lots — évacuations, alimentation cuivre ou multicouche, mitigeurs, sanitaires — en coordination avec le carreleur et l'électricien.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Fuites, chauffe-eau HS, rénovation de salle de bain, adoucisseur, mitigeurs.' },
      { title: 'Copropriétés', description: 'Colonnes montantes, compteurs individualisés, urgences en parties communes.' },
      { title: 'HORECA & commerces', description: 'Sanitaires professionnels, réseau chaud/froid, respect des normes AFSCA.' },
    ],
    process: [
      { title: 'Diagnostic sur place', description: 'Localisation de la fuite ou de la panne, inspection caméra si besoin.' },
      { title: 'Devis avant travaux', description: 'Prix communiqué et validé par le client avant toute intervention payante.' },
      { title: 'Réparation ou pose', description: 'Travaux réalisés avec du matériel professionnel, testés en charge.' },
      { title: 'Remise en état', description: 'Nettoyage, reprise carrelage ou plâtre si l\'intervention l\'exige.' },
    ],
    pricingFactors: [
      { title: 'Nature de l\'urgence', description: 'Fuite active, canalisation bouchée, rupture d\'alimentation : chaque cas a son forfait.' },
      { title: 'Accessibilité de la fuite', description: 'Encastrée dans une chape ou une cloison, ou apparente : main-d\'œuvre très différente.' },
      { title: 'Nature des matériaux', description: 'Cuivre, multicouche ou PER pour l\'alimentation ; PVC ou fonte pour l\'évacuation.' },
      { title: 'Horaire d\'intervention', description: 'Journée ouvrable, soirée, nuit, week-end ou jour férié : tarification adaptée.' },
    ],
    faq: (city) => [
      { question: `En combien de temps intervenez-vous pour une fuite d'eau à ${city} ?`, answer: `Sous 45 minutes en semaine et 60 minutes en soirée ou week-end pour les urgences avérées.` },
      { question: `Quel est le prix d'un débouchage de canalisation ?`, answer: `À partir de 120 € HTVA pour un débouchage simple à la ventouse ou au furet.` },
      { question: `Trouvez-vous les fuites encastrées sans tout casser ?`, answer: `Oui, grâce à la détection acoustique et à la caméra thermique. La zone à ouvrir est réduite au strict minimum.` },
      { question: `Rénovez-vous les salles de bain de A à Z ?`, answer: `Oui. Nous coordonnons plomberie, électricité et carrelage pour une salle de bain livrée clé en main en 2 à 3 semaines.` },
      { question: `Assurez-vous la garantie sur vos interventions ?`, answer: `Oui, toutes nos interventions sont couvertes par notre assurance RC et une garantie sur pièces et main-d'œuvre.` },
    ],
  },

  chauffage: {
    heroSubtitle: (city) =>
      `Installation, entretien et dépannage de chaudières à ${city} : gaz, mazout, pompes à chaleur. Entretien annuel obligatoire et certificats officiels.`,
    trustBadges: [
      { icon: Flame, text: 'Techniciens Cerga/G1' },
      { icon: Shield, text: 'Certificats officiels' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Chauffagiste agréé à ${city}`,
    description: (city) => [
      `Vericore installe, entretient et dépanne les systèmes de chauffage résidentiels et tertiaires à ${city} : chaudières murales gaz à condensation, chaudières au mazout, pompes à chaleur air/eau et air/air, chauffage au sol et radiateurs.`,
      `Nos techniciens sont agréés Cerga (gaz) et G1/G2 selon les installations. L'entretien annuel obligatoire à Bruxelles est réalisé dans les règles avec délivrance du certificat officiel de contrôle périodique.`,
      `Pour un remplacement de chaudière, nous vous conseillons sur les technologies éligibles aux primes de la Région bruxelloise (Homegrade, Renolution) et gérons les démarches administratives.`,
    ],
    targetAudience: [
      { title: 'Propriétaires occupants', description: 'Remplacement de chaudière, passage à la PAC, entretien annuel et dépannage.' },
      { title: 'Bailleurs', description: 'Mise en conformité entre locataires, certificats à jour, dépannages rapides.' },
      { title: 'Syndics', description: 'Chaufferies collectives, contrats d\'entretien annualisés, contrôles OTB.' },
    ],
    process: [
      { title: 'Étude thermique', description: 'Analyse des besoins, isolation, surface et systèmes existants.' },
      { title: 'Sélection matériel', description: 'Comparatif chaudières / PAC avec rendements et primes disponibles.' },
      { title: 'Installation & mise en service', description: 'Pose, raccordement, mise en eau, réglages et test de fonctionnement.' },
      { title: 'Entretien annuel', description: 'Contrôle réglementaire, nettoyage, remise du certificat officiel.' },
    ],
    pricingFactors: [
      { title: 'Type de générateur', description: 'Chaudière condensation, PAC air/eau, PAC hybride, poêle à pellets : investissement variable.' },
      { title: 'Puissance nécessaire', description: 'Dimensionnement en kW selon la surface, l\'isolation et le nombre de points de puisage.' },
      { title: 'Complexité de la pose', description: 'Remplacement à l\'identique, changement d\'énergie, ajout d\'un ballon d\'eau chaude.' },
      { title: 'Émetteurs de chaleur', description: 'Radiateurs conservés, chauffage au sol nouveau, ventilo-convecteurs.' },
    ],
    faq: (city) => [
      { question: `L'entretien annuel de chaudière est-il obligatoire à ${city} ?`, answer: `Oui. En Région bruxelloise, l'entretien est obligatoire tous les ans pour le mazout et tous les 2 ans pour le gaz.` },
      { question: `Quelles primes puis-je obtenir pour une pompe à chaleur à Bruxelles ?`, answer: `Les primes Renolution 2026 peuvent couvrir jusqu'à 60 % du coût selon vos revenus et le type de PAC installée.` },
      { question: `Ma chaudière tombe régulièrement en panne, faut-il la remplacer ?`, answer: `Au-delà de 15 ans et de pannes récurrentes, le remplacement est souvent plus rentable que la réparation.` },
      { question: `Intervenez-vous en dépannage la nuit en hiver ?`, answer: `Oui, notre service d'urgence 24/7 couvre les pannes de chauffage pendant la période de chauffe (octobre à avril).` },
      { question: `Combien coûte une chaudière gaz à condensation posée ?`, answer: `Entre 3 500 € et 6 500 € posée selon la marque, la puissance et le raccordement.` },
    ],
  },

  climatisation: {
    heroSubtitle: (city) =>
      `Climatisation résidentielle et tertiaire à ${city} : monosplit, multisplit, gainable. Systèmes réversibles pour chauffer en hiver et rafraîchir en été.`,
    trustBadges: [
      { icon: Wind, text: 'Fluides frigorigènes agréés' },
      { icon: Shield, text: 'Certification F-Gaz' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Installateur climatisation à ${city}`,
    description: (city) => [
      `Vericore installe et entretient des systèmes de climatisation réversible à ${city} : split mural, cassette plafond, gainable et multizone. Les modèles récents cumulent rafraîchissement estival et pompe à chaleur air/air pour la mi-saison.`,
      `Nos techniciens sont certifiés F-Gaz pour manipuler les fluides frigorigènes conformément au règlement européen. Nous étudions la puissance frigorifique nécessaire selon l'orientation, la surface vitrée et l'isolation.`,
      `L'entretien annuel prolonge la durée de vie et maintient les performances : nettoyage des filtres, contrôle de charge, désinfection de l'échangeur intérieur.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Climatisation d\'une chambre, d\'un salon ou d\'une maison entière (multisplit).' },
      { title: 'Bureaux & commerces', description: 'Systèmes gainables, cassettes plafond, régulation par zone et programmation horaire.' },
      { title: 'HORECA', description: 'Solutions adaptées aux cuisines, salles clients et arrière-cuisines avec extraction.' },
    ],
    process: [
      { title: 'Bilan thermique', description: 'Calcul de la puissance frigorifique nécessaire pièce par pièce.' },
      { title: 'Choix des unités', description: 'Sélection marque, technologie, esthétique et niveau sonore (dB).' },
      { title: 'Installation certifiée F-Gaz', description: 'Pose intérieure et extérieure, raccordement frigo, tests de fuite et mise en service.' },
      { title: 'Contrat d\'entretien', description: 'Visite annuelle, nettoyage, contrôle de charge et rapport d\'intervention.' },
    ],
    pricingFactors: [
      { title: 'Nombre d\'unités intérieures', description: 'Monosplit (1 pièce), bisplit, trisplit ou multisplit jusqu\'à 5 unités sur un groupe.' },
      { title: 'Puissance frigorifique', description: 'De 2 kW pour une chambre à 12 kW pour un plateau de bureaux.' },
      { title: 'Distance groupe/unité', description: 'Longueur de liaison frigorifique et présence d\'obstacles impactent la pose.' },
      { title: 'Type d\'unités', description: 'Split mural (économique), cassette plafond ou gainable (invisible mais plus cher).' },
    ],
    faq: (city) => [
      { question: `Ai-je besoin d'une autorisation pour installer un climatiseur à ${city} ?`, answer: `L'unité extérieure visible depuis la voie publique peut nécessiter une déclaration en fonction de la commune.` },
      { question: `Un climatiseur réversible remplace-t-il un chauffage classique ?`, answer: `Il complète efficacement le chauffage jusqu'à environ 5 °C extérieur. En dessous, un chauffage d'appoint reste utile.` },
      { question: `Le bruit d'un climatiseur est-il gênant en intérieur ?`, answer: `Les modèles récents descendent à 19 dB(A) en unité intérieure, moins qu'un chuchotement.` },
      { question: `Quel entretien annuel prévoir ?`, answer: `Une visite annuelle : nettoyage des filtres, contrôle de charge, désinfection de l'échangeur intérieur.` },
      { question: `Combien coûte une climatisation pour un salon de 30 m² ?`, answer: `Un monosplit réversible de 3,5 kW correctement posé se situe entre 1 800 € et 2 800 € TVAC.` },
    ],
  },

  menuiserie: {
    heroSubtitle: (city) =>
      `Menuiserie sur mesure à ${city} : portes intérieures, dressings, bibliothèques, cuisines et agencement bois. Fabrication en atelier, pose soignée.`,
    trustBadges: [
      { icon: Hammer, text: 'Fabrication atelier' },
      { icon: Shield, text: 'Bois certifié FSC/PEFC' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Menuisier sur mesure à ${city}`,
    description: (city) => [
      `Vericore conçoit et pose des menuiseries intérieures sur mesure à ${city} : dressings, bibliothèques encastrées, tête de lit, meubles TV, cuisines et rangements sous escalier.`,
      `Les pièces sont fabriquées dans notre atelier partenaire à partir de panneaux mélaminés, MDF laqué, plaqués chêne, noyer ou frêne selon le budget et l'usage.`,
      `La pose se fait chez vous en 1 à 3 jours selon le projet, avec calfeutrement, finitions et raccords de plinthes. Nous certifions le bois via les labels FSC ou PEFC quand vous le demandez.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Dressings sur mesure, bibliothèques, meubles d\'entrée, rangements optimisés.' },
      { title: 'Architectes d\'intérieur', description: 'Réalisation de pièces uniques d\'après vos plans, avec finitions haut de gamme.' },
      { title: 'Commerces & bureaux', description: 'Comptoirs d\'accueil, banques d\'accueil, agencement retail, cabines de test.' },
    ],
    process: [
      { title: 'Prise de mesures', description: 'Relevé millimétré sur place avec repérage des contraintes (prises, tuyaux, plinthes).' },
      { title: 'Conception 3D', description: 'Plans techniques et vue 3D pour valider dimensions, matériaux et couleurs.' },
      { title: 'Fabrication atelier', description: 'Découpe, plaquage, assemblage en atelier avec contrôle qualité.' },
      { title: 'Pose et finitions', description: 'Installation sur site, calfeutrement, réglages, remise du carnet d\'entretien.' },
    ],
    pricingFactors: [
      { title: 'Type de matériau', description: 'Mélaminé (économique), MDF laqué, plaqué bois véritable ou massif : rapport 1 à 5.' },
      { title: 'Complexité du projet', description: 'Meuble linéaire, angles, retours, portes coulissantes, tiroirs sortie totale.' },
      { title: 'Quincaillerie', description: 'Charnières amorties, coulisses sortie totale, systèmes push-open, sur-mesure.' },
      { title: 'Finitions', description: 'Chants alu, arêtes vives, laque brillante, patinage : finitions premium à part.' },
    ],
    faq: (city) => [
      { question: `Combien de temps entre le devis et la pose d'un dressing à ${city} ?`, answer: `En moyenne 4 à 6 semaines : conception 3D, fabrication en atelier et pose sur place.` },
      { question: `Peut-on modifier un projet une fois validé ?`, answer: `Les modifications sont possibles jusqu'à la mise en fabrication (bon pour production signé).` },
      { question: `Utilisez-vous du bois massif ou du panneau ?`, answer: `Les deux, selon l'usage. Les façades peuvent être en bois massif, plaqué ou laqué.` },
      { question: `Intégrez-vous l'éclairage LED dans les meubles ?`, answer: `Oui. Rubans LED sous étagères, spots dans les niches, détecteurs de mouvement dans les dressings.` },
      { question: `Quelle garantie sur un meuble sur mesure ?`, answer: `Garantie de 2 ans sur la fabrication et la quincaillerie.` },
    ],
  },

  peinture: {
    heroSubtitle: (city) =>
      `Peinture intérieure et façades à ${city} : murs, plafonds, boiseries, papiers peints. Peintures écologiques, protection soignée, finitions propres.`,
    trustBadges: [
      { icon: Palette, text: 'Peintures écologiques dispo' },
      { icon: Shield, text: 'Protection meubles & sols' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Peintre professionnel à ${city}`,
    description: (city) => [
      `Vericore réalise vos travaux de peinture intérieure et extérieure à ${city} : murs, plafonds, boiseries, portes, radiateurs, façades et pièces techniques. Chaque chantier commence par une préparation soignée des supports.`,
      `Nous travaillons avec des peintures à faible taux de COV, y compris des références écologiques belges pour les chambres d'enfants et les espaces sensibles.`,
      `Vos meubles et sols sont systématiquement protégés par bâches, plastiques et adhésifs de masquage professionnels. À la fin du chantier, tout est nettoyé, plié et évacué.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Rafraîchissement complet ou pièce par pièce, papiers peints, effets décoratifs.' },
      { title: 'Bailleurs', description: 'Remise à blanc entre locataires, chantier rapide et clé en main.' },
      { title: 'Copropriétés', description: 'Cages d\'escaliers, halls, façades sur voirie avec échafaudage sécurisé.' },
    ],
    process: [
      { title: 'Préparation des supports', description: 'Rebouchage, ponçage, apprêt : étape clé pour la tenue de la finition.' },
      { title: 'Choix des teintes', description: 'Nuancier sur place, échantillons peints au mur pour valider la lumière.' },
      { title: 'Application', description: 'Rouleau, pistolet ou pinceau selon le support, en 2 couches minimum.' },
      { title: 'Réception & nettoyage', description: 'Vérification pièce par pièce, dépose des protections, nettoyage complet.' },
    ],
    pricingFactors: [
      { title: 'État initial des supports', description: 'Murs sains, fissurés, humides : la préparation représente 30 à 60 % du temps.' },
      { title: 'Nombre de couches', description: 'Blanc sur blanc (2 couches) ou couleur foncée sur blanc (3 couches recommandées).' },
      { title: 'Type de peinture', description: 'Acrylique standard, mate profonde, satinée lessivable, écologique : rapport 1 à 4.' },
      { title: 'Hauteur sous plafond', description: 'Au-delà de 2,80 m, échafaudage nécessaire, impact sur main-d\'œuvre.' },
    ],
    faq: (city) => [
      { question: `Combien coûte la peinture d'un appartement à ${city} au m² ?`, answer: `Entre 22 € et 45 € par m² de surface peinte, TVAC 6 %, tout compris.` },
      { question: `Quel délai pour repeindre un appartement de 80 m² ?`, answer: `Comptez 5 à 8 jours ouvrés selon l'état des supports et le nombre de couleurs.` },
      { question: `Utilisez-vous des peintures sans solvant pour les chambres d'enfants ?`, answer: `Oui, nous proposons systématiquement une gamme à très faible taux de COV.` },
      { question: `Peut-on habiter le logement pendant les travaux ?`, answer: `Oui, si le chantier avance pièce par pièce. Nous protégeons les meubles et sols.` },
      { question: `Refaites-vous les façades extérieures ?`, answer: `Oui, y compris avec échafaudage. Nous traitons mousses, algues et micro-fissures.` },
    ],
  },

  carrelage: {
    heroSubtitle: (city) =>
      `Pose de carrelage sol et mur à ${city} : salles de bain, cuisines, terrasses, grands formats. Pose à la colle ou double encollage selon le support.`,
    trustBadges: [
      { icon: Hammer, text: 'Pose grand format' },
      { icon: Shield, text: 'Étanchéité pièces humides' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: 'Toute la Région bruxelloise' },
    ],
    aboutTitle: (city) => `Carreleur professionnel à ${city}`,
    description: (city) => [
      `Vericore pose du carrelage sol et mur à ${city} pour les salles de bain, cuisines, halls d'entrée, terrasses extérieures et pièces techniques. Nous maîtrisons les formats classiques comme les grands formats jusqu'à 120x260 cm en double encollage.`,
      `Chaque chantier commence par un ragréage ou un plancher chauffant sec propre et plan. Nous appliquons une étanchéité SPEC dans les pièces humides (douches à l'italienne, sanitaires) conformément aux DTU en vigueur.`,
      `Les joints sont réalisés à la barbotine époxy ou ciment selon l'usage. Nous coordonnons avec le plombier et l'électricien pour la salle de bain complète.`,
    ],
    targetAudience: [
      { title: 'Particuliers', description: 'Salles de bain, cuisines, halls, terrasses et abords de piscine.' },
      { title: 'Bailleurs', description: 'Remplacement rapide entre locataires, formats standards, rendu propre.' },
      { title: 'Commerces & HORECA', description: 'Sols techniques anti-dérapants R11-R12, carrelage grande usure.' },
    ],
    process: [
      { title: 'Préparation du support', description: 'Ragréage, contrôle de planéité, primaire d\'accrochage si nécessaire.' },
      { title: 'Étanchéité SPEC', description: 'Dans les pièces humides : application d\'un système sous carrelage étanche.' },
      { title: 'Pose calepinée', description: 'Plan de calepinage validé avant démarrage, coupes sur mesure, joints alignés.' },
      { title: 'Jointoiement & finitions', description: 'Joints ciment ou époxy, silicones aux angles, nettoyage voile de ciment.' },
    ],
    pricingFactors: [
      { title: 'Format du carrelage', description: 'Standard, grand format (120x120+) ou mosaïque : coût de pose très différent.' },
      { title: 'Type de pose', description: 'Droite, diagonale, décalée (opus incertum), chevron : temps de pose x1,5 à x2.' },
      { title: 'Préparation du support', description: 'Ragréage, dépose de l\'ancien carrelage, reprise de chape : gros poste caché.' },
      { title: 'Étanchéité pièces humides', description: 'Système SPEC obligatoire en douche à l\'italienne, coût additionnel au m².' },
    ],
    faq: (city) => [
      { question: `Combien coûte la pose de carrelage au m² à ${city} ?`, answer: `Entre 45 € et 90 € par m² de pose seule, TVAC 6 %. Le grand format ou la pose en diagonale augmentent le tarif.` },
      { question: `Pose de grand format 120x260, c'est possible ?`, answer: `Oui, en double encollage avec du matériel adapté. Le support doit être parfaitement plan.` },
      { question: `Faut-il déposer l'ancien carrelage avant de reposer ?`, answer: `Pas systématiquement. Si l'existant est sain, plan et bien collé, on peut poser dessus avec un primaire d'accrochage.` },
      { question: `Réalisez-vous des douches à l'italienne ?`, answer: `Oui, avec caniveau linéaire ou siphon de sol, pente calculée et étanchéité SPEC sous carrelage.` },
      { question: `Quels sont les délais de chantier pour une salle de bain complète ?`, answer: `2 à 3 semaines pour un rendu clé en main : dépose, plomberie, électricité, étanchéité, carrelage, sanitaires, finitions.` },
    ],
  },
};

// -------- NL --------
const SERVICE_CONTENT_NL: Record<string, ServiceContent> = {
  renovation: {
    heroSubtitle: (city) =>
      `Volledige of gedeeltelijke renovatie in ${city}: coördinatie van alle vakken, centrale werfleiding en respect voor de aangekondigde termijnen.`,
    trustBadges: commonTrustBadgesNL,
    aboutTitle: (city) => `Sleutel-op-de-deur renovatie in ${city}`,
    description: (city) => [
      `Vericore neemt renovatieprojecten van elke omvang in ${city} in handen: appartementen, eengezinswoningen, kantoorruimtes en gemene delen van gebouwen. Onze multidisciplinaire aanpak omvat ruwbouw, pleisterwerk, elektriciteit, sanitair, verwarming en afwerking.`,
      `Elk project begint met een diagnose ter plaatse, een opmeting en een analyse van de structurele en technische beperkingen. We stellen een gecoördineerde planning op tussen de vakmensen met één werfleider als aanspreekpunt.`,
      `We respecteren de geldende normen in het Brussels Gewest (ARAB, AREI, EPB) en beheren de administratieve stappen: stedenbouwkundige vergunningen, voorafgaande verklaringen, verplichte controles. Al onze werken zijn gedekt door de tienjarige aansprakelijkheid conform de Belgische wetgeving.`,
    ],
    targetAudience: [
      { title: 'Eigenaar-bewoners', description: 'Volledige of kamer-per-kamer renovatie, met of zonder bewoning, totale coördinatie.' },
      { title: 'Investeerders & verhuurders', description: 'Herstel tussen huurders, EPB-conformering, waardering voor doorverkoop.' },
      { title: 'Syndici & mede-eigendommen', description: 'Renovatie van gemene delen, gevels, trapzalen, met vergelijkende offertes.' },
    ],
    process: [
      { title: 'Technisch bezoek', description: 'Diagnose ter plaatse, opmeting, analyse van structurele beperkingen.' },
      { title: 'Gedetailleerde offerte', description: 'Prijsopgave per lot, gecoördineerde planning en duidelijk betalingsschema.' },
      { title: 'Gecoördineerde werf', description: 'Eén werfleider centraliseert de vakmensen en de kwaliteitscontrole.' },
      { title: 'Oplevering & garantie', description: 'Wegwerken van opmerkingen, overhandiging van het technisch dossier en tienjarige garantie.' },
    ],
    pricingFactors: [
      { title: 'Oppervlakte en typologie', description: 'Appartement, huis of gebouw: oppervlakte en aantal verdiepingen bepalen de kost.' },
      { title: 'Omvang van de werken', description: 'Eenvoudige opfrissing, zware renovatie met structuur of onderfundering.' },
      { title: 'Afwerkingsniveau', description: 'Standaard, middelklasse of premium: materialen, beslag, apparatuur.' },
      { title: 'Werfbeperkingen', description: 'Verdiepingen zonder lift, moeilijke toegang, bewoonde werf beïnvloeden de logistiek.' },
    ],
    faq: (city) => [
      { question: `Wat is de gemiddelde duur voor een volledige appartementsrenovatie in ${city}?`, answer: `Een volledige renovatie van een appartement van 80 tot 100 m² duurt gemiddeld 8 tot 12 weken, inclusief vergunningen, materialen en afwerking.` },
      { question: `Is een stedenbouwkundige vergunning nodig om te renoveren in ${city}?`, answer: `Dat hangt af van de werken. Bestemmingswijzigingen, uitbreidingen of gevelaanpassingen vereisen een vergunning. Wij adviseren u tijdens het eerste bezoek.` },
      { question: `Kan men in de woning blijven tijdens de werken?`, answer: `Bij gedeeltelijke renovaties is dat mogelijk. We plannen de interventies per zone om de hinder te beperken.` },
      { question: `Hoe verloopt de coördinatie tussen de vakmensen?`, answer: `Een Vericore-werfleider centraliseert planning, materiaalbestellingen en kwaliteitscontrole. U heeft één aanspreekpunt.` },
      { question: `Werken jullie met een architect?`, answer: `Ja. We werken regelmatig samen met onafhankelijke architecten en kunnen u in contact brengen als uw project er een vereist.` },
    ],
  },

  electricite: {
    heroSubtitle: (city) =>
      `AREI-conforme installaties en aanpassingen in ${city}: verdeelborden, kringen, verlichting, domotica. Gecertificeerde technici en controle door erkende instantie.`,
    trustBadges: [
      { icon: Zap, text: 'Depannage binnen 60 min' },
      { icon: Shield, text: 'AREI-certificering' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Professionele elektricien in ${city}`,
    description: (city) => [
      `Vericore installeert, renoveert en depanneert elektrische installaties voor woningen en kantoren in ${city}. Onze technici werken op verdeelborden, huishoudelijke kringen, LED-verlichting, gespecialiseerde stopcontacten, ventilatie en domoticasystemen.`,
      `Elke interventie voldoet aan het Algemeen Reglement op de Elektrische Installaties (AREI) en het nieuwe Boek 1 dat sinds 2020 van toepassing is in België. We bereiden het technisch dossier voor voor controle door een erkende instantie (Vinçotte, BTV, AIB).`,
      `Voor dringende gevallen — algemene stroomuitval, telkens uitspringende zekering, brandgeur, gedeeltelijke panne — komen we binnen 60 minuten in de week en 24/7 voor kritieke gevallen.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Conformering, kringuitbreiding, verdeelbord, verlichting op maat.' },
      { title: 'Syndici van gebouwen', description: 'Gemene delen, periodieke controles, collectieve conformering.' },
      { title: 'Handel & kantoren', description: 'Driefasige installaties, professionele verlichting, dataconnecties en zwakstroom.' },
    ],
    process: [
      { title: 'Installatie-audit', description: 'Controle van bord, kringen, aarding en differentieelschakelaars.' },
      { title: 'Offerte met plan', description: 'Gedetailleerde prijsopgave, plan van de voorgestelde kringen en materiaal per merk.' },
      { title: 'Plaatsing en aansluiting', description: 'Werken uitgevoerd door gekwalificeerde elektricien, in elke stap getest.' },
      { title: 'AREI-controle', description: 'Bezoek van erkende instantie, correcties indien nodig, afgifte van PV van conformiteit.' },
    ],
    pricingFactors: [
      { title: 'Staat van de bestaande installatie', description: 'Volledige renovatie of eenvoudige conformering: het uitgangspunt bepaalt alles.' },
      { title: 'Aantal elektrische punten', description: 'Stopcontacten, schakelaars, lichtpunten en gespecialiseerde kringen om toe te voegen.' },
      { title: 'Doortrekken van kabels', description: 'Ingewerkt (sleuven) of opbouw: grote impact op de arbeidstijd.' },
      { title: 'Specifieke uitrusting', description: 'Domotica, laadpaal, zonnepanelen, connected bord.' },
    ],
    faq: (city) => [
      { question: `Wanneer is een AREI-conformering verplicht in ${city}?`, answer: `Bij verkoop van een pand, bij uitbreiding van de installatie of elke 25 jaar voor installaties van vóór 1981.` },
      { question: `Hoeveel kost de vervanging van een verdeelbord?`, answer: `Tussen 1.200 € en 3.500 € afhankelijk van het aantal kringen, differentieelschakelaars en toegankelijkheid.` },
      { question: `Komt u ook 's nachts of in het weekend voor elektrische noodgevallen?`, answer: `Ja, onze 24/7-noodservice dekt stroomuitval, kortsluiting en isolatiedefecten in ${city}.` },
      { question: `Regelen jullie de controle door de erkende instantie?`, answer: `Ja. We plannen de afspraak, bereiden het technisch dossier voor en zijn aanwezig tijdens de controle.` },
      { question: `Plaatsen jullie laadpalen voor elektrische wagens?`, answer: `Ja, zowel in eengezinswoningen als in mede-eigendommen. We onderzoeken het beschikbare vermogen en plaatsen palen van 3,7 tot 22 kW.` },
    ],
  },

  plomberie: {
    heroSubtitle: (city) =>
      `24/7 loodgieters-depannage en sanitaire installaties in ${city}. Lekken, leidingen, boilers, badkamers: snelle interventie en duidelijke offerte.`,
    trustBadges: [
      { icon: Droplets, text: 'Nood binnen 45 min' },
      { icon: Shield, text: 'Prijs vóór aanvang' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Professionele loodgieter in ${city}`,
    description: (city) => [
      `Vericore komt tussen voor alle loodgieters- en sanitair behoeften in ${city}: nooddepannages, nieuwe installaties en volledige renovaties. We behandelen waterlekken, verstopte leidingen, boilers, waterontharders, badkamers en keukens.`,
      `Bij noodgevallen is een technicus binnen 45 minuten inzetbaar tijdens de week en 60 minuten 's avonds of in het weekend. Elke interventie start met een diagnose en een prijs die vóór de werken wordt meegedeeld.`,
      `Voor nieuwe installaties of badkamerrenovaties nemen we alle loten in handen — afvoer, koperen of meerlagige voedingsleiding, mengkranen, sanitair — in coördinatie met tegelzetter en elektricien.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Lekken, defecte boiler, badkamerrenovatie, waterontharder, mengkranen.' },
      { title: 'Mede-eigendommen', description: 'Stijgleidingen, individuele meters, noodgevallen in gemene delen.' },
      { title: 'HORECA & handel', description: 'Professioneel sanitair, warm/koud waternet, naleving van FAVV-normen.' },
    ],
    process: [
      { title: 'Diagnose ter plaatse', description: 'Lokalisatie van lek of panne, cameracontrole indien nodig.' },
      { title: 'Offerte vóór werken', description: 'Prijs meegedeeld en gevalideerd door de klant vóór elke betalende interventie.' },
      { title: 'Reparatie of plaatsing', description: 'Werken met professioneel materieel, onder belasting getest.' },
      { title: 'Herstel', description: 'Reiniging, herstel van tegels of pleisterwerk indien de interventie het vereist.' },
    ],
    pricingFactors: [
      { title: 'Aard van de noodsituatie', description: 'Actief lek, verstopte leiding, breuk in voeding: elk geval heeft zijn forfait.' },
      { title: 'Toegankelijkheid van het lek', description: 'Ingebouwd in chape of wand, of zichtbaar: heel verschillend werk.' },
      { title: 'Aard van de materialen', description: 'Koper, meerlaags of PER voor voeding; PVC of gietijzer voor afvoer.' },
      { title: 'Interventietijdstip', description: 'Werkdag, avond, nacht, weekend of feestdag: aangepaste tarieven.' },
    ],
    faq: (city) => [
      { question: `Hoe snel komen jullie voor een waterlek in ${city}?`, answer: `Binnen 45 minuten in de week en 60 minuten 's avonds of in het weekend voor echte noodgevallen.` },
      { question: `Wat kost het ontstoppen van een leiding?`, answer: `Vanaf 120 € excl. BTW voor een eenvoudige ontstopping met plunjer of veer.` },
      { question: `Vinden jullie ingebouwde lekken zonder alles kapot te breken?`, answer: `Ja, dankzij akoestische detectie en warmtebeeldcamera. De te openen zone wordt tot een minimum beperkt.` },
      { question: `Renoveren jullie badkamers van A tot Z?`, answer: `Ja. We coördineren loodgieterij, elektriciteit en tegelwerk voor een sleutel-op-de-deur badkamer in 2 tot 3 weken.` },
      { question: `Geven jullie garantie op interventies?`, answer: `Ja, al onze interventies zijn gedekt door onze BA-verzekering en een garantie op onderdelen en werkuren.` },
    ],
  },

  chauffage: {
    heroSubtitle: (city) =>
      `Installatie, onderhoud en depannage van verwarmingsketels in ${city}: gas, stookolie, warmtepompen. Verplicht jaarlijks onderhoud en officiële attesten.`,
    trustBadges: [
      { icon: Flame, text: 'Cerga/G1-technici' },
      { icon: Shield, text: 'Officiële attesten' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Erkende verwarmingsinstallateur in ${city}`,
    description: (city) => [
      `Vericore installeert, onderhoudt en depanneert verwarmingssystemen voor woningen en kantoren in ${city}: wandketels gascondensatie, stookolieketels, lucht/water- en lucht/lucht-warmtepompen, vloerverwarming en radiatoren.`,
      `Onze technici zijn erkend Cerga (gas) en G1/G2 volgens de installaties. Het verplicht jaarlijks onderhoud in Brussel wordt uitgevoerd volgens de regels met afgifte van het officiële attest van periodieke controle.`,
      `Voor een ketelvervanging adviseren we u over technologieën die in aanmerking komen voor Brusselse premies (Homegrade, Renolution) en beheren we de administratieve stappen.`,
    ],
    targetAudience: [
      { title: 'Eigenaar-bewoners', description: 'Ketelvervanging, overstap naar warmtepomp, jaarlijks onderhoud en depannage.' },
      { title: 'Verhuurders', description: 'Conformering tussen huurders, attesten up-to-date, snelle depannages.' },
      { title: 'Syndici', description: 'Collectieve stookinstallaties, jaarlijkse onderhoudscontracten, OTB-controles.' },
    ],
    process: [
      { title: 'Thermische studie', description: 'Analyse van behoeften, isolatie, oppervlakte en bestaande systemen.' },
      { title: 'Materiaalkeuze', description: 'Vergelijking ketels / warmtepomp met rendementen en beschikbare premies.' },
      { title: 'Installatie & indienststelling', description: 'Plaatsing, aansluiting, watervulling, afstelling en werkingstest.' },
      { title: 'Jaarlijks onderhoud', description: 'Reglementaire controle, reiniging, afgifte van het officiële attest.' },
    ],
    pricingFactors: [
      { title: 'Type generator', description: 'Condensatieketel, lucht/water warmtepomp, hybride, pelletkachel: variabele investering.' },
      { title: 'Vereist vermogen', description: 'Dimensionering in kW volgens oppervlakte, isolatie en aantal aftappunten.' },
      { title: 'Complexiteit van de plaatsing', description: 'Vervanging identiek, energiewissel, toevoeging van een boiler.' },
      { title: 'Warmte-afgevers', description: 'Behouden radiatoren, nieuwe vloerverwarming, ventilo-convectoren.' },
    ],
    faq: (city) => [
      { question: `Is het jaarlijks onderhoud van de ketel verplicht in ${city}?`, answer: `Ja. In het Brussels Gewest is onderhoud jaarlijks verplicht voor stookolie en tweejaarlijks voor gas.` },
      { question: `Welke premies kan ik krijgen voor een warmtepomp in Brussel?`, answer: `De Renolution-premies 2026 kunnen tot 60 % van de kost dekken afhankelijk van uw inkomen en het type warmtepomp.` },
      { question: `Mijn ketel valt regelmatig uit, moet ik hem vervangen?`, answer: `Boven de 15 jaar en bij terugkerende pannes is vervanging vaak rendabeler dan reparatie.` },
      { question: `Komen jullie 's nachts in de winter voor depannage?`, answer: `Ja, onze 24/7-noodservice dekt verwarmingspannes tijdens het stookseizoen (oktober tot april).` },
      { question: `Wat kost een geplaatste gascondensatieketel?`, answer: `Tussen 3.500 € en 6.500 € geplaatst volgens merk, vermogen en aansluiting.` },
    ],
  },

  climatisation: {
    heroSubtitle: (city) =>
      `Airconditioning voor woningen en kantoren in ${city}: monosplit, multisplit, kanaalsysteem. Omkeerbare systemen voor verwarming in winter en koeling in zomer.`,
    trustBadges: [
      { icon: Wind, text: 'Erkende koelmiddelen' },
      { icon: Shield, text: 'F-Gas certificering' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Airco-installateur in ${city}`,
    description: (city) => [
      `Vericore installeert en onderhoudt omkeerbare airco-systemen in ${city}: wandsplit, plafondcassette, kanaalsysteem en multizone. Recente modellen combineren zomerkoeling en lucht/lucht-warmtepomp voor het tussenseizoen.`,
      `Onze technici zijn F-Gas gecertificeerd voor het hanteren van koelmiddelen conform de Europese verordening. We bestuderen het vereiste koelvermogen volgens oriëntatie, raamoppervlakte en isolatie.`,
      `Het jaarlijks onderhoud verlengt de levensduur en behoudt de prestaties: filterreiniging, ladingscontrole, desinfectie van de binnenwarmtewisselaar.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Airco voor een slaapkamer, een woonkamer of een volledige woning (multisplit).' },
      { title: 'Kantoren & handel', description: 'Kanaalsystemen, plafondcassettes, zoneregeling en uurprogrammering.' },
      { title: 'HORECA', description: 'Aangepaste oplossingen voor keukens, klantenzalen en achterkeukens met afzuiging.' },
    ],
    process: [
      { title: 'Thermische balans', description: 'Berekening van het vereiste koelvermogen per ruimte.' },
      { title: 'Keuze van units', description: 'Selectie van merk, technologie, esthetiek en geluidsniveau (dB).' },
      { title: 'F-Gas gecertificeerde installatie', description: 'Binnen- en buitenplaatsing, koelaansluiting, lektests en indienststelling.' },
      { title: 'Onderhoudscontract', description: 'Jaarlijks bezoek, reiniging, ladingscontrole en interventierapport.' },
    ],
    pricingFactors: [
      { title: 'Aantal binnenunits', description: 'Monosplit (1 kamer), bisplit, trisplit of multisplit tot 5 units op één groep.' },
      { title: 'Koelvermogen', description: 'Van 2 kW voor een slaapkamer tot 12 kW voor een kantoorruimte.' },
      { title: 'Afstand groep/unit', description: 'Lengte van de koelverbinding en aanwezigheid van obstakels beïnvloeden de plaatsing.' },
      { title: 'Type units', description: 'Wandsplit (economisch), plafondcassette of kanaalsysteem (onzichtbaar maar duurder).' },
    ],
    faq: (city) => [
      { question: `Heb ik een vergunning nodig om een airco te installeren in ${city}?`, answer: `De buitenunit die zichtbaar is vanaf de openbare weg kan een aangifte vereisen afhankelijk van de gemeente.` },
      { question: `Vervangt een omkeerbare airco een klassieke verwarming?`, answer: `Hij vult de verwarming efficiënt aan tot ongeveer 5 °C buiten. Daaronder blijft een bijverwarming nuttig.` },
      { question: `Is het geluid van een airco storend binnen?`, answer: `Recente modellen dalen tot 19 dB(A) in de binnenunit, minder dan een fluistering.` },
      { question: `Welk jaarlijks onderhoud is nodig?`, answer: `Een jaarlijks bezoek: filterreiniging, ladingscontrole, desinfectie van de binnenwarmtewisselaar.` },
      { question: `Wat kost een airco voor een woonkamer van 30 m²?`, answer: `Een correct geplaatste omkeerbare monosplit van 3,5 kW kost tussen 1.800 € en 2.800 € BTW inbegrepen.` },
    ],
  },

  menuiserie: {
    heroSubtitle: (city) =>
      `Schrijnwerk op maat in ${city}: binnendeuren, dressings, bibliotheken, keukens en houten inrichting. Fabricage in atelier, zorgvuldige plaatsing.`,
    trustBadges: [
      { icon: Hammer, text: 'Fabricage in atelier' },
      { icon: Shield, text: 'FSC/PEFC gecertificeerd hout' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Schrijnwerker op maat in ${city}`,
    description: (city) => [
      `Vericore ontwerpt en plaatst binnenschrijnwerk op maat in ${city}: dressings, ingebouwde bibliotheken, hoofdeinden, tv-meubels, keukens en opbergruimtes onder de trap.`,
      `De stukken worden vervaardigd in ons partneratelier uit melamine, gelakt MDF, eikenfineer, notelaar of es afhankelijk van budget en gebruik.`,
      `De plaatsing gebeurt bij u thuis in 1 tot 3 dagen naargelang het project, met kitwerk, afwerking en plintaansluitingen. We certificeren het hout via FSC- of PEFC-labels op verzoek.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Dressings op maat, bibliotheken, inkommeubels, geoptimaliseerde opbergruimtes.' },
      { title: 'Interieurarchitecten', description: 'Uitvoering van unieke stukken volgens uw plannen, met hoogwaardige afwerking.' },
      { title: 'Handel & kantoren', description: 'Onthaalbalies, retail-inrichting, paskamers.' },
    ],
    process: [
      { title: 'Opmeten', description: 'Millimeter-precieze opmeting ter plaatse met identificatie van beperkingen.' },
      { title: '3D-ontwerp', description: 'Technische plannen en 3D-view om afmetingen, materialen en kleuren te valideren.' },
      { title: 'Fabricage in atelier', description: 'Snijden, fineren, monteren in atelier met kwaliteitscontrole.' },
      { title: 'Plaatsing en afwerking', description: 'Installatie ter plaatse, kitwerk, afstelling, overhandiging van het onderhoudsboekje.' },
    ],
    pricingFactors: [
      { title: 'Type materiaal', description: 'Melamine (economisch), gelakt MDF, echt houtfineer of massief: verhouding 1 tot 5.' },
      { title: 'Complexiteit van het project', description: 'Recht meubel, hoeken, retours, schuifdeuren, volledig uittrekbare laden.' },
      { title: 'Beslag', description: 'Gedempte scharnieren, volledig uittrekbare geleiders, push-open systemen, op maat.' },
      { title: 'Afwerking', description: 'Alu randen, scherpe kanten, glanzende lak, patineren: premium afwerking apart.' },
    ],
    faq: (city) => [
      { question: `Hoelang tussen offerte en plaatsing van een dressing in ${city}?`, answer: `Gemiddeld 4 tot 6 weken: 3D-ontwerp, fabricage in atelier en plaatsing ter plaatse.` },
      { question: `Kan een project nog aangepast worden na validatie?`, answer: `Wijzigingen zijn mogelijk tot de start van de fabricage (getekende productie-order).` },
      { question: `Gebruiken jullie massief hout of paneel?`, answer: `Beide, afhankelijk van het gebruik. Fronten kunnen in massief, fineer of gelakt zijn.` },
      { question: `Integreren jullie LED-verlichting in meubels?`, answer: `Ja. LED-stroken onder plankjes, spots in nissen, bewegingsdetectoren in dressings.` },
      { question: `Welke garantie op maatwerk?`, answer: `2 jaar garantie op fabricage en beslag.` },
    ],
  },

  peinture: {
    heroSubtitle: (city) =>
      `Binnenschilder- en gevelwerken in ${city}: muren, plafonds, houtwerk, behang. Ecologische verf, zorgvuldige bescherming, propere afwerking.`,
    trustBadges: [
      { icon: Palette, text: 'Ecologische verf beschikbaar' },
      { icon: Shield, text: 'Bescherming meubels & vloeren' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Professionele schilder in ${city}`,
    description: (city) => [
      `Vericore voert uw binnen- en buitenschilderwerken uit in ${city}: muren, plafonds, houtwerk, deuren, radiatoren, gevels en technische ruimtes. Elk project begint met een zorgvuldige voorbereiding van de ondergrond.`,
      `We werken met verf met een laag VOS-gehalte, waaronder Belgische ecologische referenties voor kinderkamers en gevoelige ruimtes.`,
      `Uw meubels en vloeren worden systematisch beschermd door zeilen, plastic en professionele afplakband. Op het einde van het werk is alles gereinigd, opgevouwen en afgevoerd.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Volledige opfrissing of kamer per kamer, behang, decoratieve effecten.' },
      { title: 'Verhuurders', description: 'Volledig wit tussen huurders, snelle sleutel-op-de-deur werf.' },
      { title: 'Mede-eigendommen', description: 'Trapzalen, hallen, gevels op straatzijde met beveiligde stelling.' },
    ],
    process: [
      { title: 'Voorbereiding van de ondergrond', description: 'Opvullen, schuren, primer: sleutelfase voor duurzaamheid.' },
      { title: 'Keuze van tinten', description: 'Kleurenkaart ter plaatse, geschilderde stalen op de muur om het licht te valideren.' },
      { title: 'Aanbrengen', description: 'Rol, spuit of penseel volgens de ondergrond, minstens 2 lagen.' },
      { title: 'Oplevering & reiniging', description: 'Controle kamer per kamer, verwijderen van beschermingen, volledige reiniging.' },
    ],
    pricingFactors: [
      { title: 'Beginstaat van de ondergrond', description: 'Gezonde, gescheurde of vochtige muren: de voorbereiding is 30 tot 60 % van de tijd.' },
      { title: 'Aantal lagen', description: 'Wit op wit (2 lagen) of donkere kleur op wit (3 lagen aanbevolen).' },
      { title: 'Type verf', description: 'Standaard acryl, diepmat, wasbaar satijn, ecologisch: verhouding 1 tot 4.' },
      { title: 'Plafondhoogte', description: 'Boven 2,80 m is een stelling nodig, impact op arbeidstijd.' },
    ],
    faq: (city) => [
      { question: `Wat kost het schilderen van een appartement in ${city} per m²?`, answer: `Tussen 22 € en 45 € per m² geschilderd oppervlak, BTW 6 % inbegrepen.` },
      { question: `Hoelang duurt het herschilderen van een appartement van 80 m²?`, answer: `Reken op 5 tot 8 werkdagen afhankelijk van de staat van de ondergrond en het aantal kleuren.` },
      { question: `Gebruiken jullie oplosmiddelvrije verf voor kinderkamers?`, answer: `Ja, we stellen systematisch een gamma met zeer laag VOS-gehalte voor.` },
      { question: `Kan men in de woning blijven tijdens de werken?`, answer: `Ja, als het werk kamer per kamer vordert. We beschermen meubels en vloeren zorgvuldig.` },
      { question: `Doen jullie buitengevels?`, answer: `Ja, inclusief met stelling. We behandelen mos, algen en microscheurtjes voordien.` },
    ],
  },

  carrelage: {
    heroSubtitle: (city) =>
      `Vloer- en muurtegels plaatsen in ${city}: badkamers, keukens, terrassen, grote formaten. Lijmen of dubbel lijmen volgens de ondergrond.`,
    trustBadges: [
      { icon: Hammer, text: 'Grote formaten' },
      { icon: Shield, text: 'Waterdichting natte ruimtes' },
      { icon: CheckCircle2, text: 'Gratis offerte' },
      { icon: MapPin, text: 'Hele Brusselse regio' },
    ],
    aboutTitle: (city) => `Professionele tegelzetter in ${city}`,
    description: (city) => [
      `Vericore plaatst vloer- en muurtegels in ${city} voor badkamers, keukens, inkomhallen, buitenterrassen en technische ruimtes. We beheersen klassieke formaten evenals grote formaten tot 120x260 cm in dubbel lijmen.`,
      `Elk project begint met een egalisatie of een propere en vlakke vloerverwarming. We brengen een SPEC-waterdichting aan in natte ruimtes (inloopdouches, sanitair) conform de geldende DTU.`,
      `Voegen worden uitgevoerd met epoxy of cement volgens het gebruik. We coördineren met de loodgieter en elektricien voor de volledige badkamer.`,
    ],
    targetAudience: [
      { title: 'Particulieren', description: 'Badkamers, keukens, hallen, terrassen en zwembadranden.' },
      { title: 'Verhuurders', description: 'Snelle vervanging tussen huurders, standaardformaten, propere afwerking.' },
      { title: 'Handel & HORECA', description: 'Technische antislipvloeren R11-R12, tegels voor intensief gebruik.' },
    ],
    process: [
      { title: 'Voorbereiding van de ondergrond', description: 'Egalisatie, controle van vlakheid, hechtingsprimer indien nodig.' },
      { title: 'SPEC-waterdichting', description: 'In natte ruimtes: waterdicht systeem onder de tegels aanbrengen.' },
      { title: 'Berekende plaatsing', description: 'Legplan vóór aanvang gevalideerd, snijwerk op maat, uitgelijnde voegen.' },
      { title: 'Voegen & afwerking', description: 'Cement- of epoxyvoegen, silicone in hoeken, reiniging cementsluier.' },
    ],
    pricingFactors: [
      { title: 'Tegelformaat', description: 'Standaard, groot formaat (120x120+) of mozaïek: verschillende plaatsingskost.' },
      { title: 'Type plaatsing', description: 'Recht, diagonaal, versprongen (opus incertum), visgraat: plaatsingstijd x1,5 tot x2.' },
      { title: 'Voorbereiding ondergrond', description: 'Egalisatie, verwijdering oude tegels, chape herstel: grote verborgen post.' },
      { title: 'Waterdichting natte ruimtes', description: 'SPEC-systeem verplicht bij inloopdouche, extra kost per m².' },
    ],
    faq: (city) => [
      { question: `Wat kost tegels plaatsen per m² in ${city}?`, answer: `Tussen 45 € en 90 € per m² enkel plaatsing, BTW 6 % inbegrepen. Grote formaat of diagonaal plaatsen verhoogt het tarief.` },
      { question: `Is grote formaat 120x260 plaatsen mogelijk?`, answer: `Ja, in dubbel lijmen met aangepast materieel. De ondergrond moet perfect vlak zijn.` },
      { question: `Moeten oude tegels verwijderd worden vóór herbetegeling?`, answer: `Niet systematisch. Als het bestaande gezond, vlak en goed gelijmd is, kan men erop plaatsen met een hechtingsprimer.` },
      { question: `Maken jullie inloopdouches?`, answer: `Ja, met lineaire goot of vloerafvoer, berekende helling en SPEC-waterdichting onder de tegels.` },
      { question: `Wat is de werftijd voor een volledige badkamer?`, answer: `2 tot 3 weken voor een sleutel-op-de-deur oplevering.` },
    ],
  },
};

// -------- EN --------
const SERVICE_CONTENT_EN: Record<string, ServiceContent> = {
  renovation: {
    heroSubtitle: (city) =>
      `Full or partial renovation in ${city}: coordination of all trades, centralised site management and strict respect of the announced deadlines.`,
    trustBadges: commonTrustBadgesEN,
    aboutTitle: (city) => `Turnkey renovation in ${city}`,
    description: (city) => [
      `Vericore takes on renovation projects of all sizes in ${city}: apartments, single-family homes, office spaces and common areas of buildings. Our multidisciplinary approach covers structural work, plastering, electricity, plumbing, heating and finishing, which saves you from dealing with multiple contractors.`,
      `Every project starts with an on-site assessment, a survey and an analysis of structural and technical constraints. We set up a coordinated schedule between trades with a single site manager as your point of contact throughout the project.`,
      `We comply with the applicable regulations in the Brussels region (RGPT, RGIE, PEB) and handle administrative procedures: planning permission, prior declarations, mandatory inspections. All our work is covered by the 10-year warranty as required by Belgian law.`,
    ],
    targetAudience: [
      { title: 'Owner-occupiers', description: 'Full or room-by-room renovation, occupied or empty premises, total coordination.' },
      { title: 'Investors & landlords', description: 'Restoration between tenants, PEB compliance, valuation before resale.' },
      { title: 'Property managers & co-owners', description: 'Common area renovation, facades, staircases, with competing quotes.' },
    ],
    process: [
      { title: 'Technical visit', description: 'On-site assessment, survey, analysis of structural constraints.' },
      { title: 'Detailed quote', description: 'Itemised pricing, coordinated schedule and clear payment plan.' },
      { title: 'Coordinated site', description: 'A single site manager centralises the trades and quality control.' },
      { title: 'Handover & warranty', description: 'Snag list resolution, technical file handover and 10-year warranty.' },
    ],
    pricingFactors: [
      { title: 'Surface and typology', description: 'Apartment, house or building: surface and number of floors structure the cost.' },
      { title: 'Scope of work', description: 'Simple refresh, heavy renovation with structural work or underpinning.' },
      { title: 'Level of finish', description: 'Standard, mid-range or premium: materials, hardware, equipment.' },
      { title: 'Site constraints', description: 'Floors without lift, difficult access, occupied site all impact logistics.' },
    ],
    faq: (city) => [
      { question: `What is the average time for a full apartment renovation in ${city}?`, answer: `A full renovation of an 80-100 sqm apartment takes on average 8 to 12 weeks, including permits, material ordering and finishing.` },
      { question: `Do I need planning permission to renovate in ${city}?`, answer: `It depends on the work. Change of use, extensions or facade modifications require a permit. We advise you at the first visit.` },
      { question: `Can we live in the property during the works?`, answer: `Possible for partial renovations. We plan the interventions by zones to limit inconvenience.` },
      { question: `How is coordination between trades managed?`, answer: `A Vericore site manager centralises scheduling, material orders and quality control. You have a single point of contact.` },
      { question: `Do you work with an architect?`, answer: `Yes. We regularly collaborate with independent architects and can put you in touch if your project requires one.` },
    ],
  },

  electricite: {
    heroSubtitle: (city) =>
      `RGIE-compliant electrical installations and upgrades in ${city}: panels, circuits, lighting, home automation. Certified technicians and inspection by an approved body.`,
    trustBadges: [
      { icon: Zap, text: 'Emergency call-out within 60 min' },
      { icon: Shield, text: 'RGIE certification' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Professional electrician in ${city}`,
    description: (city) => [
      `Vericore installs, renovates and repairs residential and commercial electrical installations in ${city}. Our technicians work on distribution panels, domestic circuits, LED lighting, specialised outlets, ventilation and home automation systems.`,
      `Every intervention complies with the General Regulation on Electrical Installations (RGIE) and the new Book 1 applicable in Belgium since 2020. We prepare the technical file for inspection by an approved body (Vinçotte, BTV, AIB).`,
      `For emergencies — power outage, tripping breaker, burning smell, partial failure — we respond within 60 minutes during the day, 24/7 for critical cases.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'Compliance upgrades, circuit extension, distribution panel, custom lighting.' },
      { title: 'Building managers', description: 'Common areas, periodic inspections, collective compliance.' },
      { title: 'Shops & offices', description: 'Three-phase installations, professional lighting, data and low-voltage outlets.' },
    ],
    process: [
      { title: 'Installation audit', description: 'Check of panel, circuits, earthing and residual current devices.' },
      { title: 'Quote with plan', description: 'Detailed pricing, plan of proposed circuits and specified equipment by brand.' },
      { title: 'Installation and wiring', description: 'Work performed by a qualified electrician, tested at every stage.' },
      { title: 'RGIE inspection', description: 'Approved body visit, corrections if needed, delivery of compliance certificate.' },
    ],
    pricingFactors: [
      { title: 'State of existing installation', description: 'Full renovation or simple upgrade: the starting point changes everything.' },
      { title: 'Number of electrical points', description: 'Outlets, switches, light points and specialised circuits to add.' },
      { title: 'Cable routing', description: 'Recessed (chases) or surface-mounted: significant labour impact.' },
      { title: 'Specific equipment', description: 'Home automation, EV charging station, solar panels, smart panel.' },
    ],
    faq: (city) => [
      { question: `When is RGIE compliance mandatory in ${city}?`, answer: `When selling a property, when extending the installation, or every 25 years for installations dating before 1981.` },
      { question: `How much does it cost to replace an electrical panel?`, answer: `Between €1,200 and €3,500 depending on the number of circuits, RCDs and accessibility.` },
      { question: `Do you handle electrical emergencies at night or on weekends?`, answer: `Yes, our 24/7 emergency service covers power outages, short circuits and insulation faults in ${city}.` },
      { question: `Do you handle the inspection by the approved body?`, answer: `Yes. We schedule the appointment, prepare the technical file and are present during the inspection.` },
      { question: `Do you install EV charging stations?`, answer: `Yes, both for individual homes and co-ownership buildings. We assess available power and install 3.7 to 22 kW stations.` },
    ],
  },

  plomberie: {
    heroSubtitle: (city) =>
      `24/7 plumbing repairs and sanitary installations in ${city}. Leaks, pipes, water heaters, bathrooms: quick response and clear quote.`,
    trustBadges: [
      { icon: Droplets, text: 'Emergency within 45 min' },
      { icon: Shield, text: 'Price agreed before work' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Professional plumber in ${city}`,
    description: (city) => [
      `Vericore handles all plumbing and sanitary needs in ${city}: emergency repairs, new installations and full renovations. We cover water leaks, blocked pipes, water heaters, softeners, bathrooms and kitchens.`,
      `In case of emergency, a technician is available within 45 minutes on weekdays and 60 minutes in evenings or weekends. Every intervention starts with a diagnosis and a price agreed before any work begins.`,
      `For new installations or bathroom renovations, we handle all trades — waste pipes, copper or multilayer supply, mixer taps, sanitary fixtures — coordinating with the tiler and electrician.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'Leaks, broken water heater, bathroom renovation, water softener, mixer taps.' },
      { title: 'Co-ownership buildings', description: 'Rising mains, individual meters, emergencies in common areas.' },
      { title: 'HORECA & shops', description: 'Professional sanitary facilities, hot/cold water network, AFSCA standards compliance.' },
    ],
    process: [
      { title: 'On-site diagnosis', description: 'Locating the leak or failure, camera inspection if needed.' },
      { title: 'Quote before work', description: 'Price communicated and validated by the customer before any chargeable intervention.' },
      { title: 'Repair or installation', description: 'Work performed with professional equipment, pressure-tested.' },
      { title: 'Restoration', description: 'Cleaning, restoration of tiling or plaster if required by the intervention.' },
    ],
    pricingFactors: [
      { title: 'Nature of the emergency', description: 'Active leak, blocked pipe, broken supply: each case has its own flat rate.' },
      { title: 'Accessibility of the leak', description: 'Embedded in screed or wall, or visible: very different labour.' },
      { title: 'Type of materials', description: 'Copper, multilayer or PER for supply; PVC or cast iron for waste.' },
      { title: 'Time of intervention', description: 'Working day, evening, night, weekend or holiday: adapted pricing.' },
    ],
    faq: (city) => [
      { question: `How quickly do you respond to a water leak in ${city}?`, answer: `Within 45 minutes on weekdays and 60 minutes in evenings or weekends for genuine emergencies.` },
      { question: `What is the price for pipe unblocking?`, answer: `From €120 excl. VAT for a simple unblocking with plunger or auger.` },
      { question: `Can you find embedded leaks without breaking everything?`, answer: `Yes, thanks to acoustic detection and thermal camera. The area to open is kept to a minimum.` },
      { question: `Do you renovate bathrooms from A to Z?`, answer: `Yes. We coordinate plumbing, electricity and tiling for a turnkey bathroom delivered in 2 to 3 weeks.` },
      { question: `Are your interventions guaranteed?`, answer: `Yes, all our interventions are covered by our liability insurance and a warranty on parts and labour.` },
    ],
  },

  chauffage: {
    heroSubtitle: (city) =>
      `Boiler installation, maintenance and repair in ${city}: gas, oil, heat pumps. Mandatory annual maintenance and official certificates.`,
    trustBadges: [
      { icon: Flame, text: 'Cerga/G1 technicians' },
      { icon: Shield, text: 'Official certificates' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Certified heating engineer in ${city}`,
    description: (city) => [
      `Vericore installs, maintains and repairs residential and commercial heating systems in ${city}: gas condensing wall boilers, oil boilers, air/water and air/air heat pumps, underfloor heating and radiators.`,
      `Our technicians are certified Cerga (gas) and G1/G2 depending on the installation. The mandatory annual maintenance in Brussels is performed according to regulations with delivery of the official periodic inspection certificate.`,
      `For a boiler replacement, we advise you on technologies eligible for Brussels regional subsidies (Homegrade, Renolution) and handle the administrative procedures.`,
    ],
    targetAudience: [
      { title: 'Owner-occupiers', description: 'Boiler replacement, switch to heat pump, annual maintenance and repair.' },
      { title: 'Landlords', description: 'Compliance between tenants, up-to-date certificates, quick repairs.' },
      { title: 'Property managers', description: 'Collective boiler rooms, annual maintenance contracts, OTB inspections.' },
    ],
    process: [
      { title: 'Thermal study', description: 'Analysis of needs, insulation, surface and existing systems.' },
      { title: 'Equipment selection', description: 'Comparison of boilers / heat pumps with efficiency and available subsidies.' },
      { title: 'Installation & commissioning', description: 'Installation, connection, water filling, adjustment and functional testing.' },
      { title: 'Annual maintenance', description: 'Regulatory inspection, cleaning, delivery of the official certificate.' },
    ],
    pricingFactors: [
      { title: 'Type of generator', description: 'Condensing boiler, air/water heat pump, hybrid, pellet stove: variable investment.' },
      { title: 'Required power', description: 'Sizing in kW according to surface, insulation and number of draw-off points.' },
      { title: 'Installation complexity', description: 'Like-for-like replacement, energy change, addition of a hot water tank.' },
      { title: 'Heat emitters', description: 'Retained radiators, new underfloor heating, fan coil units.' },
    ],
    faq: (city) => [
      { question: `Is annual boiler maintenance mandatory in ${city}?`, answer: `Yes. In the Brussels region, maintenance is mandatory annually for oil and every 2 years for gas.` },
      { question: `What subsidies can I get for a heat pump in Brussels?`, answer: `The 2026 Renolution subsidies can cover up to 60% of the cost depending on your income and the type of heat pump.` },
      { question: `My boiler breaks down regularly, should I replace it?`, answer: `Beyond 15 years and recurring breakdowns, replacement is often more cost-effective than repair.` },
      { question: `Do you handle emergency repairs at night in winter?`, answer: `Yes, our 24/7 emergency service covers heating breakdowns during the heating season (October to April).` },
      { question: `How much does a gas condensing boiler cost installed?`, answer: `Between €3,500 and €6,500 installed depending on brand, power and connection.` },
    ],
  },

  climatisation: {
    heroSubtitle: (city) =>
      `Residential and commercial air conditioning in ${city}: monosplit, multisplit, ducted. Reversible systems for winter heating and summer cooling.`,
    trustBadges: [
      { icon: Wind, text: 'Approved refrigerants' },
      { icon: Shield, text: 'F-Gas certification' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Air conditioning installer in ${city}`,
    description: (city) => [
      `Vericore installs and maintains reversible air conditioning systems in ${city}: wall split, ceiling cassette, ducted and multizone. Recent models combine summer cooling and air/air heat pump for mid-season.`,
      `Our technicians are F-Gas certified to handle refrigerants in accordance with European regulations. We calculate the required cooling capacity based on orientation, glazed surface and insulation.`,
      `Annual maintenance extends the lifespan and maintains performance: filter cleaning, charge check, indoor heat exchanger disinfection.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'AC for a bedroom, a living room or a whole house (multisplit).' },
      { title: 'Offices & shops', description: 'Ducted systems, ceiling cassettes, zone control and hourly scheduling.' },
      { title: 'HORECA', description: 'Solutions adapted to kitchens, dining rooms and back kitchens with extraction.' },
    ],
    process: [
      { title: 'Thermal assessment', description: 'Calculation of required cooling capacity room by room.' },
      { title: 'Unit selection', description: 'Selection of brand, technology, aesthetics and noise level (dB).' },
      { title: 'F-Gas certified installation', description: 'Indoor and outdoor installation, refrigerant connection, leak tests and commissioning.' },
      { title: 'Maintenance contract', description: 'Annual visit, cleaning, charge check and intervention report.' },
    ],
    pricingFactors: [
      { title: 'Number of indoor units', description: 'Monosplit (1 room), bisplit, trisplit or multisplit up to 5 units on one outdoor unit.' },
      { title: 'Cooling capacity', description: 'From 2 kW for a bedroom to 12 kW for an office space.' },
      { title: 'Outdoor to indoor distance', description: 'Length of refrigerant line and presence of obstacles impact installation.' },
      { title: 'Type of units', description: 'Wall split (economical), ceiling cassette or ducted (invisible but more expensive).' },
    ],
    faq: (city) => [
      { question: `Do I need permission to install an AC in ${city}?`, answer: `The outdoor unit visible from public roads may require a declaration depending on the municipality.` },
      { question: `Can a reversible AC replace conventional heating?`, answer: `It efficiently complements heating down to about 5°C outdoor. Below that, a backup heater is still useful.` },
      { question: `Is the noise from an AC disturbing indoors?`, answer: `Recent models go down to 19 dB(A) at the indoor unit, less than a whisper.` },
      { question: `What annual maintenance is required?`, answer: `An annual visit: filter cleaning, charge check, indoor heat exchanger disinfection.` },
      { question: `How much does AC for a 30 sqm living room cost?`, answer: `A properly installed 3.5 kW reversible monosplit costs between €1,800 and €2,800 VAT included.` },
    ],
  },

  menuiserie: {
    heroSubtitle: (city) =>
      `Custom carpentry in ${city}: interior doors, wardrobes, bookshelves, kitchens and wood fittings. Workshop manufacturing, careful installation.`,
    trustBadges: [
      { icon: Hammer, text: 'Workshop manufacturing' },
      { icon: Shield, text: 'FSC/PEFC certified wood' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Custom carpenter in ${city}`,
    description: (city) => [
      `Vericore designs and installs custom interior carpentry in ${city}: wardrobes, built-in bookshelves, headboards, TV units, kitchens and under-stair storage.`,
      `Pieces are manufactured in our partner workshop from melamine, lacquered MDF, oak, walnut or ash veneer according to budget and use.`,
      `Installation takes place at your home in 1 to 3 days depending on the project, with caulking, finishing and skirting board connections. We certify the wood via FSC or PEFC labels on request.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'Custom wardrobes, bookshelves, entrance furniture, optimised storage.' },
      { title: 'Interior architects', description: 'Execution of unique pieces from your plans, with high-end finishing.' },
      { title: 'Shops & offices', description: 'Reception desks, retail fittings, fitting rooms.' },
    ],
    process: [
      { title: 'Measurements', description: 'Millimetre-precise survey on site with identification of constraints.' },
      { title: '3D design', description: 'Technical plans and 3D view to validate dimensions, materials and colours.' },
      { title: 'Workshop manufacturing', description: 'Cutting, veneering, assembly in workshop with quality control.' },
      { title: 'Installation and finishing', description: 'On-site installation, caulking, adjustments, delivery of maintenance booklet.' },
    ],
    pricingFactors: [
      { title: 'Type of material', description: 'Melamine (economical), lacquered MDF, real wood veneer or solid: ratio 1 to 5.' },
      { title: 'Project complexity', description: 'Linear unit, corners, returns, sliding doors, full-extension drawers.' },
      { title: 'Hardware', description: 'Soft-close hinges, full-extension runners, push-open systems, custom.' },
      { title: 'Finishing', description: 'Aluminium edges, sharp corners, high-gloss lacquer, patination: premium finishes extra.' },
    ],
    faq: (city) => [
      { question: `How long between quote and installation of a wardrobe in ${city}?`, answer: `On average 4 to 6 weeks: 3D design, workshop manufacturing and on-site installation.` },
      { question: `Can a project be modified once approved?`, answer: `Modifications are possible until manufacturing starts (signed production order).` },
      { question: `Do you use solid wood or panels?`, answer: `Both, depending on use. Fronts can be in solid wood, veneer or lacquered.` },
      { question: `Do you integrate LED lighting in furniture?`, answer: `Yes. LED strips under shelves, spotlights in niches, motion detectors in wardrobes.` },
      { question: `What warranty on custom-made furniture?`, answer: `2-year warranty on manufacturing and hardware.` },
    ],
  },

  peinture: {
    heroSubtitle: (city) =>
      `Interior painting and facades in ${city}: walls, ceilings, woodwork, wallpaper. Eco-friendly paints, careful protection, clean finish.`,
    trustBadges: [
      { icon: Palette, text: 'Eco paints available' },
      { icon: Shield, text: 'Furniture & floor protection' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Professional painter in ${city}`,
    description: (city) => [
      `Vericore carries out your interior and exterior painting work in ${city}: walls, ceilings, woodwork, doors, radiators, facades and technical rooms. Each project starts with careful surface preparation.`,
      `We work with low-VOC paints, including Belgian eco-friendly references for children's rooms and sensitive spaces.`,
      `Your furniture and floors are systematically protected by tarps, plastic and professional masking tape. At the end of the job, everything is cleaned, folded and taken away.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'Full or room-by-room refresh, wallpaper, decorative effects.' },
      { title: 'Landlords', description: 'Repainting between tenants, quick turnkey job.' },
      { title: 'Co-ownerships', description: 'Staircases, halls, street-facing facades with secured scaffolding.' },
    ],
    process: [
      { title: 'Surface preparation', description: 'Filling, sanding, primer: key step for finish durability.' },
      { title: 'Colour selection', description: 'Colour chart on site, samples painted on the wall to validate under light.' },
      { title: 'Application', description: 'Roller, spray or brush depending on surface, minimum 2 coats.' },
      { title: 'Handover & cleaning', description: 'Room-by-room check, removal of protections, complete cleaning.' },
    ],
    pricingFactors: [
      { title: 'Initial surface condition', description: 'Healthy, cracked, damp walls: preparation represents 30 to 60% of the time.' },
      { title: 'Number of coats', description: 'White on white (2 coats) or dark colour on white (3 coats recommended).' },
      { title: 'Type of paint', description: 'Standard acrylic, deep matte, washable satin, eco-friendly: ratio 1 to 4.' },
      { title: 'Ceiling height', description: 'Above 2.80 m, scaffolding is required, impact on labour.' },
    ],
    faq: (city) => [
      { question: `How much does painting an apartment in ${city} cost per sqm?`, answer: `Between €22 and €45 per sqm of painted surface, VAT 6% included.` },
      { question: `How long to repaint an 80 sqm apartment?`, answer: `Count 5 to 8 working days depending on surface condition and number of colours.` },
      { question: `Do you use solvent-free paints for children's rooms?`, answer: `Yes, we systematically offer a very low VOC range.` },
      { question: `Can we live in the apartment during the work?`, answer: `Yes, if the work progresses room by room. We protect furniture and floors carefully.` },
      { question: `Do you paint exterior facades?`, answer: `Yes, including with scaffolding. We treat moss, algae and micro-cracks first.` },
    ],
  },

  carrelage: {
    heroSubtitle: (city) =>
      `Floor and wall tiling in ${city}: bathrooms, kitchens, terraces, large formats. Glue or double gluing depending on the substrate.`,
    trustBadges: [
      { icon: Hammer, text: 'Large format installation' },
      { icon: Shield, text: 'Wet room waterproofing' },
      { icon: CheckCircle2, text: 'Free quote' },
      { icon: MapPin, text: 'Across Brussels region' },
    ],
    aboutTitle: (city) => `Professional tiler in ${city}`,
    description: (city) => [
      `Vericore installs floor and wall tiling in ${city} for bathrooms, kitchens, entrance halls, outdoor terraces and technical rooms. We master classic formats as well as large formats up to 120x260 cm with double gluing.`,
      `Every project starts with a screed levelling or a clean and flat underfloor heating. We apply SPEC waterproofing in wet rooms (walk-in showers, sanitary facilities) in accordance with current DTU standards.`,
      `Grouting is done with epoxy or cement depending on use. We coordinate with the plumber and electrician for the complete bathroom.`,
    ],
    targetAudience: [
      { title: 'Private individuals', description: 'Bathrooms, kitchens, halls, terraces and pool surrounds.' },
      { title: 'Landlords', description: 'Quick replacement between tenants, standard formats, clean finish.' },
      { title: 'Shops & HORECA', description: 'Technical anti-slip floors R11-R12, heavy-use tiling.' },
    ],
    process: [
      { title: 'Substrate preparation', description: 'Levelling, flatness check, bonding primer if necessary.' },
      { title: 'SPEC waterproofing', description: 'In wet rooms: application of waterproof system under tiling.' },
      { title: 'Planned installation', description: 'Layout plan validated before start, custom cuts, aligned grout lines.' },
      { title: 'Grouting & finishing', description: 'Cement or epoxy grout, silicone at angles, cleaning of cement haze.' },
    ],
    pricingFactors: [
      { title: 'Tile format', description: 'Standard, large format (120x120+) or mosaic: very different installation cost.' },
      { title: 'Type of installation', description: 'Straight, diagonal, offset (opus incertum), herringbone: installation time x1.5 to x2.' },
      { title: 'Substrate preparation', description: 'Levelling, removal of old tiling, screed repair: large hidden cost.' },
      { title: 'Wet room waterproofing', description: 'SPEC system mandatory in walk-in shower, additional cost per sqm.' },
    ],
    faq: (city) => [
      { question: `How much does tiling installation cost per sqm in ${city}?`, answer: `Between €45 and €90 per sqm installation only, VAT 6% included. Large format or diagonal installation increases the rate.` },
      { question: `Is installing 120x260 large format possible?`, answer: `Yes, with double gluing and adapted equipment. The substrate must be perfectly flat.` },
      { question: `Must old tiles be removed before retiling?`, answer: `Not systematically. If the existing is healthy, flat and well-bonded, one can tile over with a bonding primer.` },
      { question: `Do you install walk-in showers?`, answer: `Yes, with linear drain or floor drain, calculated slope and SPEC waterproofing under tiling.` },
      { question: `What is the schedule for a complete bathroom?`, answer: `2 to 3 weeks for turnkey delivery.` },
    ],
  },
};

// -------- Public API --------
const SERVICE_CONTENT_BY_LANG: Record<Lang, Record<string, ServiceContent>> = {
  fr: SERVICE_CONTENT_FR,
  nl: SERVICE_CONTENT_NL,
  en: SERVICE_CONTENT_EN,
};

export const SERVICE_CONTENT = SERVICE_CONTENT_FR; // retro-compat FR par défaut

export const getServiceContentByLang = (
  service: string,
  lang: Lang = 'fr'
): ServiceContent | undefined => {
  return SERVICE_CONTENT_BY_LANG[lang]?.[service] ?? SERVICE_CONTENT_FR[service];
};
