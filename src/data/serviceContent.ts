import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Clock, MapPin, Shield, Zap, Droplets, Flame, Wind, Hammer, Palette } from 'lucide-react';

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

const commonTrustBadges = [
  { icon: Clock, text: 'Intervention 24/7' },
  { icon: Shield, text: 'Garantie décennale' },
  { icon: CheckCircle2, text: 'Devis gratuit sous 24h' },
  { icon: MapPin, text: 'Toute la Région bruxelloise' },
];

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  renovation: {
    heroSubtitle: (city) =>
      `Rénovation complète ou partielle à ${city} : coordination tous corps d'état, gestion de chantier centralisée et respect des délais annoncés.`,
    trustBadges: commonTrustBadges,
    aboutTitle: (city) => `Rénovation clé en main à ${city}`,
    description: (city) => [
      `Vericore prend en charge des projets de rénovation de toutes envergures à ${city} : appartements, maisons unifamiliales, plateaux de bureaux et parties communes d'immeubles. Notre approche pluridisciplinaire couvre gros œuvre, plâtrerie, électricité, sanitaire, chauffage et finitions, ce qui vous évite de multiplier les intervenants.`,
      `Chaque chantier commence par un diagnostic sur place, un relevé métré et une analyse des contraintes structurelles et techniques. Nous établissons un planning coordonné entre les corps de métier avec un seul chef de chantier comme interlocuteur pour toute la durée du projet. Cette organisation évite les retards liés aux mauvaises coordinations et garantit un niveau de finition constant.`,
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
      { question: `Quel est le délai moyen pour une rénovation complète d'appartement à ${city} ?`, answer: `Une rénovation complète d'un appartement de 80 à 100 m² prend en moyenne 8 à 12 semaines, incluant permis, commande de matériaux et finitions. Le devis détaillé précise chaque étape.` },
      { question: `Faut-il un permis d'urbanisme pour rénover à ${city} ?`, answer: `Cela dépend des travaux. Les changements de destination, extensions ou modifications de façade nécessitent un permis. Les rénovations intérieures sans intervention structurelle en sont généralement dispensées. Nous vous conseillons dès la première visite.` },
      { question: `Peut-on habiter le logement pendant les travaux ?`, answer: `C'est envisageable pour des rénovations partielles, plus délicat pour une rénovation complète. Quand vous devez rester sur place, nous planifions les interventions par zones pour limiter la gêne.` },
      { question: `Comment se passe la coordination entre les corps de métier ?`, answer: `Un chef de chantier Vericore centralise planning, commandes de matériaux et contrôle qualité. Vous avez un seul interlocuteur pour toute la durée du chantier.` },
      { question: `Travaillez-vous avec un architecte ?`, answer: `Oui. Nous collaborons régulièrement avec des architectes indépendants et pouvons vous mettre en relation si votre projet en requiert un (permis, projet structurel, biens classés).` },
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
      `Toute intervention respecte le Règlement Général des Installations Électriques (RGIE) et le nouveau Livre 1 applicable en Belgique depuis 2020. Nous préparons le dossier technique pour le contrôle par un organisme agréé (Vinçotte, BTV, AIB) et corrigeons les remarques éventuelles avant le procès-verbal de conformité.`,
      `Pour les urgences — coupure générale, disjoncteur qui saute en boucle, odeur de brûlé, panne partielle — nous intervenons sous 60 minutes en journée, 24h/7 pour les cas critiques. Toutes les interventions sont documentées et couvertes par notre assurance responsabilité civile.`,
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
      { question: `Quand une mise en conformité RGIE est-elle obligatoire à ${city} ?`, answer: `À la vente d'un bien, lors d'une extension de l'installation ou tous les 25 ans pour les installations antérieures à 1981. Un contrôle négatif rend une intervention obligatoire dans les 18 mois.` },
      { question: `Combien coûte le remplacement d'un tableau électrique ?`, answer: `Entre 1 200 € et 3 500 € selon le nombre de circuits, la présence de différentiels, l'ajout d'un parafoudre et l'accessibilité. Un devis précis se fait sur site en 30 minutes.` },
      { question: `Intervenez-vous en urgence électrique la nuit ou le week-end ?`, answer: `Oui, notre service d'urgence 24/7 couvre les coupures, courts-circuits et défauts d'isolement à ${city}. Un supplément week-end/nuit s'applique et est communiqué au moment de l'appel.` },
      { question: `Vous occupez-vous du contrôle par l'organisme agréé ?`, answer: `Oui. Nous planifions le rendez-vous, préparons le dossier technique et sommes présents lors du contrôle. Si des corrections sont demandées, nous les réalisons avant délivrance du procès-verbal.` },
      { question: `Installez-vous des bornes de recharge pour véhicule électrique ?`, answer: `Oui, en résidentiel comme en copropriété. Nous étudions la puissance disponible, dimensionnons le circuit dédié et posons des bornes 3,7 à 22 kW avec suivi de consommation.` },
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
      `En cas d'urgence, un technicien est mobilisable sous 45 minutes en semaine et 60 minutes en soirée ou week-end. Chaque intervention démarre par un diagnostic et un prix annoncé avant travaux : pas de mauvaise surprise sur la facture.`,
      `Pour les installations neuves ou les rénovations de salle de bain, nous prenons en charge l'ensemble des lots — évacuations, alimentation cuivre ou multicouche, mitigeurs, sanitaires — en coordination avec le carreleur et l'électricien si nécessaire. Toutes les interventions sont garanties.`,
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
      { question: `En combien de temps intervenez-vous pour une fuite d'eau à ${city} ?`, answer: `Sous 45 minutes en semaine et 60 minutes en soirée ou week-end pour les urgences avérées (fuite active, dégât en cours). Nous vous confirmons l'horaire précis dès votre appel.` },
      { question: `Quel est le prix d'un débouchage de canalisation ?`, answer: `À partir de 120 € HTVA pour un débouchage simple à la ventouse ou au furet. Pour les cas complexes nécessitant l'inspection caméra ou l'hydrocurage, un devis est établi sur place avant intervention.` },
      { question: `Trouvez-vous les fuites encastrées sans tout casser ?`, answer: `Oui, grâce à la détection acoustique et à la caméra thermique. La zone à ouvrir est ainsi réduite au strict minimum et la remise en état est plus rapide et moins coûteuse.` },
      { question: `Rénovez-vous les salles de bain de A à Z ?`, answer: `Oui. Nous coordonnons plomberie, électricité et carrelage pour une salle de bain livrée clé en main en 2 à 3 semaines selon les finitions choisies.` },
      { question: `Assurez-vous la garantie sur vos interventions ?`, answer: `Oui, toutes nos interventions sont couvertes par notre assurance responsabilité civile et une garantie sur pièces et main-d'œuvre. Les rénovations sont soumises à la garantie décennale belge.` },
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
      `Nos techniciens sont agréés Cerga (gaz) et G1/G2 selon les installations. L'entretien annuel obligatoire à Bruxelles est réalisé dans les règles avec délivrance du certificat officiel de contrôle périodique. Nous conservons votre historique de chauffage et vous alertons à l'échéance suivante.`,
      `Pour un remplacement de chaudière, nous vous conseillons sur les technologies éligibles aux primes de la Région bruxelloise (Homegrade, Renolution) et gérons les démarches administratives. Un dépannage en cas de panne est possible 24/7 pendant la période de chauffe.`,
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
      { question: `L'entretien annuel de chaudière est-il obligatoire à ${city} ?`, answer: `Oui. En Région bruxelloise, l'entretien est obligatoire tous les ans pour le mazout et tous les 2 ans pour le gaz. Un certificat officiel doit être conservé et remis en cas de vente.` },
      { question: `Quelles primes puis-je obtenir pour une pompe à chaleur à Bruxelles ?`, answer: `Les primes Renolution 2026 peuvent couvrir jusqu'à 60 % du coût selon vos revenus et le type de PAC installée. Nous préparons le dossier administratif pour vous.` },
      { question: `Ma chaudière tombe régulièrement en panne, faut-il la remplacer ?`, answer: `Au-delà de 15 ans et de pannes récurrentes, le remplacement est souvent plus rentable que la réparation. Un diagnostic gratuit permet d'évaluer le coût de possession sur 5 ans.` },
      { question: `Intervenez-vous en dépannage la nuit en hiver ?`, answer: `Oui, notre service d'urgence 24/7 couvre les pannes de chauffage pendant la période de chauffe (octobre à avril). Nous intervenons sous 90 minutes pour rétablir a minima l'eau chaude sanitaire.` },
      { question: `Combien coûte une chaudière gaz à condensation posée ?`, answer: `Entre 3 500 € et 6 500 € posée selon la marque, la puissance et le raccordement. Une pompe à chaleur air/eau se situe entre 12 000 € et 22 000 € avant primes.` },
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
      `Vericore installe et entretient des systèmes de climatisation réversible à ${city} : split mural, cassette plafond, gainable et multizone. Les modèles récents cumulent rafraîchissement estival et pompe à chaleur air/air pour la mi-saison, avec un COP supérieur à 4.`,
      `Nos techniciens sont certifiés F-Gaz pour manipuler les fluides frigorigènes conformément au règlement européen. Nous étudions la puissance frigorifique nécessaire selon l'orientation, la surface vitrée et l'isolation avant de proposer un dimensionnement précis.`,
      `L'entretien annuel prolonge la durée de vie et maintient les performances : nettoyage des filtres, contrôle de charge, désinfection de l'échangeur intérieur. Un contrat d'entretien annualisé est disponible pour les copropriétés et bureaux avec plusieurs unités.`,
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
      { question: `Ai-je besoin d'une autorisation pour installer un climatiseur à ${city} ?`, answer: `L'unité extérieure visible depuis la voie publique peut nécessiter une déclaration en fonction de la commune et de l'affectation du bâtiment (façade, toit plat). Nous vérifions les règles urbanistiques avant le devis.` },
      { question: `Un climatiseur réversible remplace-t-il un chauffage classique ?`, answer: `Il complète efficacement le chauffage jusqu'à environ 5 °C extérieur. En dessous, un chauffage d'appoint reste utile sauf sur les modèles récents à COP élevé et bâtiment bien isolé.` },
      { question: `Le bruit d'un climatiseur est-il gênant en intérieur ?`, answer: `Les modèles récents descendent à 19 dB(A) en unité intérieure, moins qu'un chuchotement. À l'extérieur, entre 45 et 55 dB(A) selon la charge : le placement est étudié pour respecter le voisinage.` },
      { question: `Quel entretien annuel prévoir pour un climatiseur ?`, answer: `Une visite annuelle : nettoyage des filtres, contrôle de charge en fluide, désinfection de l'échangeur intérieur, vérification des évacuations de condensats. Environ 120 € par unité en contrat annualisé.` },
      { question: `Combien coûte une climatisation posée pour un salon de 30 m² ?`, answer: `Un monosplit réversible de 3,5 kW correctement posé se situe entre 1 800 € et 2 800 € TVAC selon la marque, l'accessibilité et la longueur de liaison frigorifique.` },
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
      `Vericore conçoit et pose des menuiseries intérieures sur mesure à ${city} : dressings, bibliothèques encastrées, tête de lit, meubles TV, cuisines et rangements sous escalier. Chaque projet démarre par un relevé métré au millimètre, condition indispensable pour un rendu propre.`,
      `Les pièces sont fabriquées dans notre atelier partenaire à partir de panneaux mélaminés, MDF laqué, plaqués chêne, noyer ou frêne selon le budget et l'usage. Le bois massif est réservé aux plateaux, façades pleines et éléments structurels.`,
      `La pose se fait chez vous en 1 à 3 jours selon le projet, avec calfeutrement, finitions et raccords de plinthes. Nous certifions le bois via les labels FSC ou PEFC quand vous le demandez, et intégrons l'éclairage LED, prises USB ou serrures connectées à la demande.`,
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
      { question: `Combien de temps entre le devis et la pose d'un dressing à ${city} ?`, answer: `En moyenne 4 à 6 semaines : 1 semaine pour la conception 3D, 3 à 4 semaines pour la fabrication en atelier, 1 à 2 jours pour la pose sur place.` },
      { question: `Peut-on modifier un projet une fois validé ?`, answer: `Les modifications sont possibles jusqu'à la mise en fabrication (bon pour production signé). Après, les changements engendrent des coûts et allongent les délais.` },
      { question: `Utilisez-vous du bois massif ou du panneau ?`, answer: `Les deux, selon l'usage. Les façades et plateaux visibles peuvent être en bois massif, plaqué ou laqué. Les caissons et fonds sont en général en panneau mélaminé pour la stabilité et le prix.` },
      { question: `Intégrez-vous l'éclairage LED dans les meubles ?`, answer: `Oui. Rubans LED sous étagères, spots dans les niches, détecteurs de mouvement dans les dressings. Le raccordement électrique est prévu dès la phase de conception.` },
      { question: `Quelle garantie sur un meuble sur mesure ?`, answer: `Garantie de 2 ans sur la fabrication et la quincaillerie. Les défauts liés au bois vivant (jeu, fentes minimes) ne sont pas couverts mais restent normaux et exceptionnels sur nos productions.` },
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
      `Vericore réalise vos travaux de peinture intérieure et extérieure à ${city} : murs, plafonds, boiseries, portes, radiateurs, façades et pièces techniques. Chaque chantier commence par une préparation soignée des supports — rebouchage, ponçage, apprêt — qui conditionne le rendu final.`,
      `Nous travaillons avec des peintures à faible taux de COV, y compris des références écologiques belges (Zolpan, Farrow & Ball, Emile & Lea) pour les chambres d'enfants et les espaces sensibles. Les glacis, patines et effets décoratifs sont possibles sur demande avec échantillonnage préalable.`,
      `Vos meubles et sols sont systématiquement protégés par bâches, plastiques et adhésifs de masquage professionnels. À la fin du chantier, tout est nettoyé, plié et évacué. Le rendu est réceptionné pièce par pièce avec vous avant remise du carnet d'entretien.`,
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
      { title: 'Hauteur sous plafond', description: 'Au-delà de 2,80 m, échafaudage nécessaire, impact sur main-d\'œuvre et sécurité.' },
    ],
    faq: (city) => [
      { question: `Combien coûte la peinture d'un appartement à ${city} au m² ?`, answer: `Entre 22 € et 45 € par m² de surface peinte, TVAC 6 %, tout compris : préparation, 2 couches, protection et nettoyage. Les effets décoratifs ou les peintures écologiques peuvent dépasser cette fourchette.` },
      { question: `Quel délai pour repeindre un appartement de 80 m² ?`, answer: `Comptez 5 à 8 jours ouvrés selon l'état des supports, la présence de moulures et le nombre de couleurs différentes. Le logement est habitable dès la fin de chantier.` },
      { question: `Utilisez-vous des peintures sans solvant pour les chambres d'enfants ?`, answer: `Oui, nous proposons systématiquement une gamme à très faible taux de COV et sans solvant pour les chambres, cuisines et bureaux. Un échantillon est peint au mur pour validation avant le chantier.` },
      { question: `Peut-on habiter le logement pendant les travaux ?`, answer: `Oui, si le chantier avance pièce par pièce. Nous protégeons soigneusement les meubles et sols, et neutralisons les odeurs avec des peintures à faible COV.` },
      { question: `Refaites-vous les façades extérieures ?`, answer: `Oui, y compris avec échafaudage. Nous traitons préalablement les mousses, algues et micro-fissures, puis appliquons une peinture façade adaptée au support (brique, enduit, béton).` },
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
      `Vericore pose du carrelage sol et mur à ${city} pour les salles de bain, cuisines, halls d'entrée, terrasses extérieures et pièces techniques. Nous maîtrisons les formats classiques (30x60, 45x45) comme les grands formats jusqu'à 120x260 cm en double encollage.`,
      `Chaque chantier commence par un ragréage ou un plancher chauffant sec propre et plan, condition indispensable pour la longévité de la pose. Nous appliquons une étanchéité SPEC dans les pièces humides (douches à l'italienne, sanitaires) conformément aux DTU en vigueur.`,
      `Les joints sont réalisés à la barbotine époxy ou ciment selon l'usage et l'esthétique demandée. Nous coordonnons avec le plombier et l'électricien pour la salle de bain complète, et livrons un rendu net avec plinthes, silicones et nettoyage final.`,
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
      { question: `Combien coûte la pose de carrelage au m² à ${city} ?`, answer: `Entre 45 € et 90 € par m² de pose seule (hors carrelage), TVAC 6 %. Le grand format, la pose en diagonale ou la mosaïque augmentent le tarif. Le prix du carrelage lui-même varie de 20 à 150 €/m².` },
      { question: `Pose de grand format 120x260, c'est réellement possible ?`, answer: `Oui, en double encollage avec du matériel adapté (ventouses, coupeuse spécifique, barres d'écartement). Le support doit être parfaitement plan, sinon un ragréage préalable est indispensable.` },
      { question: `Faut-il déposer l'ancien carrelage avant de reposer ?`, answer: `Pas systématiquement. Si l'existant est sain, plan et bien collé, on peut poser dessus avec un primaire d'accrochage. Sinon, la dépose est nécessaire et facturée à part.` },
      { question: `Réalisez-vous des douches à l'italienne ?`, answer: `Oui, avec caniveau linéaire ou siphon de sol, pente calculée et étanchéité SPEC sous carrelage. Coordination avec le plombier prévue dans notre devis salle de bain complète.` },
      { question: `Quels sont les délais de chantier pour une salle de bain complète ?`, answer: `2 à 3 semaines pour un rendu clé en main : dépose, plomberie, électricité, étanchéité, carrelage sol et mur, sanitaires, finitions. Les délais peuvent varier selon les livraisons de matériel.` },
    ],
  },
};
