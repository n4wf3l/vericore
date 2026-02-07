import { 
  Wrench, 
  Home, 
  Droplets, 
  Zap, 
  Bath, 
  Layers, 
  PaintBucket,
  Hammer,
  Building2,
  Wind,
  ClipboardCheck
} from 'lucide-react';

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: 'renovation' | 'maintenance' | 'specialty';
}

export const services: Service[] = [
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Entretien de Bâtiment',
    description: 'Service complet de maintenance préventive et curative pour tous types de bâtiments',
    category: 'maintenance'
  },
  {
    id: 'renovation',
    icon: Home,
    title: 'Rénovation Intérieure',
    description: 'Rénovation complète d\'espaces résidentiels et professionnels',
    category: 'renovation'
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité',
    description: 'Installation, réparation et mise aux normes électriques',
    category: 'maintenance'
  },
  {
    id: 'plomberie',
    icon: Droplets,
    title: 'Plomberie',
    description: 'Plomberie générale, dépannage et installation sanitaire',
    category: 'maintenance'
  },
  {
    id: 'ventilation',
    icon: Wind,
    title: 'Ventilation & VMC',
    description: 'Installation et maintenance de systèmes de ventilation',
    category: 'maintenance'
  },
  {
    id: 'reparations',
    icon: Hammer,
    title: 'Réparations Générales',
    description: 'Interventions tous corps d\'état pour vos réparations',
    category: 'maintenance'
  },
  {
    id: 'amenagement',
    icon: Layers,
    title: 'Aménagement Intérieur',
    description: 'Cloisons, plafonnage, carrelage et finitions',
    category: 'renovation'
  },
  {
    id: 'suivi',
    icon: ClipboardCheck,
    title: 'Suivi de Chantiers',
    description: 'Coordination et gestion de vos projets de rénovation',
    category: 'specialty'
  },
  {
    id: 'facade',
    icon: Building2,
    title: 'Nettoyage Façade & Toiture',
    description: 'Entretien extérieur haute pression et sécurisé',
    category: 'specialty'
  },
  {
    id: 'peinture',
    icon: PaintBucket,
    title: 'Peinture',
    description: 'Peinture intérieure et extérieure professionnelle',
    category: 'renovation'
  },
  {
    id: 'sanitaire',
    icon: Bath,
    title: 'Sanitaire',
    description: 'Installation et rénovation de salles de bains',
    category: 'renovation'
  },
];

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Dubois',
    location: 'Ixelles',
    rating: 5,
    text: 'Service impeccable et rapide. L\'équipe de Vericore a rénové notre salle de bain en respectant les délais. Très professionnels !',
    service: 'Rénovation salle de bain'
  },
  {
    id: 2,
    name: 'Marc Lefebvre',
    location: 'Schaerbeek',
    rating: 5,
    text: 'Intervention d\'urgence un dimanche pour une fuite. Réactivité exceptionnelle et prix transparent. Je recommande vivement.',
    service: 'Plomberie urgence'
  },
  {
    id: 3,
    name: 'Laura Van den Berg',
    location: 'Etterbeek',
    rating: 5,
    text: 'Rénovation complète de notre appartement. Excellent suivi de chantier, finitions de haute qualité. Équipe très à l\'écoute.',
    service: 'Rénovation complète'
  },
  {
    id: 4,
    name: 'Ahmed El Amrani',
    location: 'Anderlecht',
    rating: 5,
    text: 'Très satisfait du service de maintenance. Travail conforme aux normes, prix transparent et suivi régulier. Parfait pour notre syndic.',
    service: 'Maintenance immeuble'
  }
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Intervenez-vous sans abonnement ?',
    answer: 'Oui. Nous réalisons également des interventions ponctuelles, sans contrat de maintenance. Ces demandes sont planifiées selon nos disponibilités opérationnelles et bénéficient du même niveau d\'exigence technique et de qualité.'
  },
  {
    id: 2,
    question: 'Proposez-vous des interventions d\'urgence ?',
    answer: 'Oui. Une permanence technique est assurée 24h/24 et 7j/7 pour les situations critiques.'
  },
  {
    id: 3,
    question: 'En combien de temps pouvez-vous intervenir ?',
    answer: 'Pour les urgences : <strong>Sous 1h</strong> dans un rayon de 10 km autour de Jette (Bruxelles) • <strong>Sous 50 minutes</strong> dans un rayon de 10 km autour d\'Uccle.\nPour les interventions non urgentes : dans un délai de <strong>24 à 72h</strong>, selon les disponibilités des équipes.'
  },
  {
    id: 4,
    question: 'Les prix affichés sont-ils définitifs ?',
    answer: 'Non. Les montants indiqués sont donnés à titre indicatif. Ils peuvent évoluer en fonction de la superficie du site, de la complexité technique, des équipements présents et après audit technique. Des conditions promotionnelles ou avantages de souscription peuvent également être appliqués.'
  },
  {
    id: 5,
    question: 'Une visite sur place est-elle obligatoire ?',
    answer: 'Oui. Une visite technique est systématiquement réalisée afin d\'établir un devis précis et équitable. Pour les premières estimations, une analyse sur base de photos peut être effectuée, mais le contrôle final se fait toujours sur site avant validation.'
  },
  {
    id: 6,
    question: 'Que comprend un contrat de maintenance ?',
    answer: 'Chaque abonnement précise clairement : ✔ le nombre de visites préventives • ✔ le nombre d\'interventions incluses • ✔ les délais d\'intervention • ✔ les avantages tarifaires • ✔ les outils de suivi.\nLes gros travaux font l\'objet de devis séparés, mais leur gestion complète (coordination, balisage, organisation, suivi) peut être assurée afin de limiter l\'impact sur l\'activité du site.'
  },
  {
    id: 7,
    question: 'Y a-t-il un engagement minimum ?',
    answer: 'Nous recommandons un engagement initial de <strong>12 mois</strong>, permettant d\'optimiser la prévention, la planification et les coûts pour le client. Un ajustement de formule est possible après 6 mois selon l\'évolution des besoins.'
  },
  {
    id: 8,
    question: 'Que se passe-t-il si je dépasse le quota inclus ?',
    answer: 'Aucun problème. Les interventions supplémentaires sont facturées séparément avec un <strong>tarif préférentiel</strong> réservé aux clients sous contrat.'
  },
  {
    id: 9,
    question: 'Travaillez-vous avec les syndics et gestionnaires d\'immeubles ?',
    answer: 'Oui. Nous accompagnons quotidiennement syndics, gestionnaires, entreprises et investisseurs immobiliers dans la gestion technique de leurs bâtiments.'
  },
  {
    id: 10,
    question: 'Dans quelles zones intervenez-vous ?',
    answer: 'Nous intervenons dans toute la Belgique, avec des bases opérationnelles à Bruxelles.'
  },
  {
    id: 11,
    question: 'Êtes-vous assurés et certifiés ?',
    answer: 'Oui. Nos équipes sont couvertes par les assurances professionnelles obligatoires et travaillent dans le respect des normes belges en vigueur. La sécurité, la conformité et la qualité sont au cœur de nos priorités.'
  },
  {
    id: 12,
    question: 'Comment suivre une intervention ?',
    answer: 'Chaque intervention est suivie via notifications e-mail ou WhatsApp. Nous développons actuellement une plateforme client dédiée permettant un suivi en temps réel avec statuts codés par couleur (rouge / orange / vert), historique des demandes et rapports techniques.'
  },
  {
    id: 13,
    question: 'Disposez-vous de stock et de véhicules équipés ?',
    answer: 'Oui. Chaque véhicule est équipé d\'un <strong>stock standardisé</strong> de pièces courantes. Pour les sites de grande taille, un espace de stockage dédié sur site peut également être envisagé en accord avec le client.'
  },
  {
    id: 14,
    question: 'Réalisez-vous un reporting détaillé ?',
    answer: 'Oui. Nous fournissons un reporting <strong>avant / pendant / après</strong> intervention, avec photos et recommandations techniques. En cas de réparation différée ou de travaux complémentaires nécessaires, le client est immédiatement informé en toute transparence.'
  }
];

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Installation & maintenance de réseaux sanitaires (PEX / multicouche)',
    category: 'Plomberie',
    image: '/installation-maintenance.png',
    location: 'Bruxelles',
    description: 'Mise en place d\'un réseau de distribution eau chaude (rouge) et eau froide (bleu) avec raccords sertis et dérivations sécurisées. Vericore assure l\'installation, la mise en conformité, les réparations de fuites, ainsi que l\'optimisation des réseaux (débits, équilibrage, réduction des pertes). Objectif : une alimentation fiable, durable et propre, adaptée aux immeubles, commerces et habitations, avec intervention rapide en cas d\'urgence.'
  },
  {
    id: 2,
    title: 'Plafonnage, réparations de plafonds & finitions intérieures',
    category: 'Finitions',
    image: '/plafonnage.png',
    location: 'Bruxelles',
    description: 'Intervention de remise en état et préparation de plafond : réparation, renforcement, rebouchage, ponçage et mise à niveau avant peinture ou finition. Vericore prend en charge les travaux de plafonnage, corrections après fissures/infiltrations, et finitions propres pour logements, commerces et immeubles, avec un rendu durable et conforme.'
  },
  {
    id: 3,
    title: 'Mise en conformité électrique & installation de tableaux électriques (RGIE)',
    category: 'Électricité',
    image: '/conformite-electrique.png',
    location: 'Bruxelles',
    description: 'Installation, rénovation et remise aux normes de tableaux électriques : disjoncteurs, différentiels, répartition des circuits, repérage et organisation du câblage pour une installation fiable, sécurisée et conforme au RGIE. Vericore intervient pour les dépannages, extensions de circuits, sécurisation d\'immeubles et préparation au contrôle (attestation), avec un travail soigné et une traçabilité claire des interventions.'
  },
  {
    id: 4,
    title: 'Plomberie & raccordements sanitaires (installation, réparation, étanchéité)',
    category: 'Plomberie',
    image: '/plomberie.png',
    location: 'Bruxelles',
    description: 'Intervention sur les raccordements sous évier / sanitaires : remplacement de flexibles, siphons et évacuations, correction de fuites, sécurisation des vannes et remise en état des connexions. Vericore assure une installation propre et durable, avec vérification d\'étanchéité, optimisation du débit et remise en conformité des raccords pour cuisines, salles de bain et locaux techniques (immeubles, commerces, habitations).'
  },
  {
    id: 5,
    title: 'Chaudière / Chauffage – Entretien, dépannage & réglages (ECS + chauffage)',
    category: 'Chauffage',
    image: '/chaudiere.png',
    location: 'Bruxelles',
    description: 'Maintenance et dépannage de chaudières murales : contrôle de sécurité, réglage de température, optimisation du rendement, purge et vérification des raccordements (chauffage + eau chaude sanitaire). Vericore intervient pour les pannes, pertes de pression, absence d\'eau chaude, bruits anormaux et mises au point saisonnières, afin d\'assurer un fonctionnement fiable, économique et conforme pour appartements, immeubles et locaux professionnels.'
  },
  {
    id: 6,
    title: 'Éclairage & luminaires – Installation, remplacement & mise aux normes',
    category: 'Électricité',
    image: '/eclairage.png',
    location: 'Bruxelles',
    description: 'Pose et remplacement de suspensions, appliques et points lumineux, avec raccordement propre, fixation sécurisée et vérification des circuits. Vericore intervient pour moderniser l\'éclairage (LED, ambiance, zones de travail), corriger les pannes (interrupteurs, douilles, connexions) et assurer une installation fiable, esthétique et conforme aux normes, pour logements, commerces et immeubles.'
  }
];
