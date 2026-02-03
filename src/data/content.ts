import { 
  Wrench, 
  Home, 
  Droplets, 
  Sparkles, 
  Zap, 
  Bath, 
  Grid3x3, 
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
    question: 'Intervenez-vous vraiment 24h/7 ?',
    answer: 'Oui, nous offrons un service d\'intervention d\'urgence 24h/24, 7j/7 pour les dépannages urgents (fuites, pannes électriques, etc.). Pour les projets de rénovation, nous planifions ensemble selon vos disponibilités.'
  },
  {
    id: 2,
    question: 'Quel est le délai pour obtenir un devis ?',
    answer: 'Nous vous contactons sous 24h maximum après réception de votre demande. Le devis détaillé est établi après une visite technique gratuite, généralement dans les 48h suivant votre appel.'
  },
  {
    id: 3,
    question: 'Travaillez-vous uniquement à Bruxelles ?',
    answer: 'Notre zone principale d\'intervention est Bruxelles et ses 19 communes. Nous intervenons également en périphérie bruxelloise selon la nature et l\'ampleur des travaux. N\'hésitez pas à nous contacter pour vérifier.'
  },
  {
    id: 4,
    question: 'Proposez-vous des garanties sur vos travaux ?',
    answer: 'Absolument. Tous nos travaux sont garantis selon la réglementation belge en vigueur. Nous sommes une société agréée (BE1005.585.934) et assurons une garantie décennale pour les gros travaux.'
  },
  {
    id: 5,
    question: 'Comment se déroule un projet de rénovation ?',
    answer: '1) Prise de contact et visite gratuite. 2) Devis détaillé avec planning. 3) Validation et signature. 4) Démarrage des travaux selon planning. 5) Suivi régulier et réception finale avec vous. Communication transparente à chaque étape.'
  },
  {
    id: 6,
    question: 'Quels sont vos moyens de paiement ?',
    answer: 'Nous acceptons les virements bancaires, paiements en espèces, et Bancontact. Pour les grands projets, nous proposons un échéancier de paiement : acompte à la commande, paiements intermédiaires selon avancement, solde à la réception.'
  }
];

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rénovation Appartement Moderne',
    category: 'Rénovation complète',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    location: 'Ixelles'
  },
  {
    id: 2,
    title: 'Rénovation Cuisine Contemporaine',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
    location: 'Woluwe'
  },
  {
    id: 3,
    title: 'Rénovation Salle de Bain',
    category: 'Sanitaire',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    location: 'Uccle'
  },
  {
    id: 4,
    title: 'Nettoyage Façade Historique',
    category: 'Façade',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    location: 'Centre'
  },
  {
    id: 5,
    title: 'Aménagement Bureau Professionnel',
    category: 'Aménagement',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    location: 'Etterbeek'
  },
  {
    id: 6,
    title: 'Rénovation Loft Industriel',
    category: 'Rénovation',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    location: 'Schaerbeek'
  }
];
