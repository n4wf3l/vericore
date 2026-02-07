/**
 * Types pour la configuration SEO du site Vericore
 * Basé sur les bonnes pratiques 2026 pour le SEO local belge
 */

export interface SEOConfig {
  /** Titre de la page (50-60 caractères optimal) */
  title: string;
  /** Description meta (150-160 caractères) */
  description: string;
  /** Titre H1 principal de la page */
  h1: string;
  /** URL canonical (sans trailing slash) */
  canonical: string;
  /** Mots-clés locaux (Bruxelles, communes) */
  keywords?: string[];
  /** Type de page pour Schema.org */
  schemaType?: 'WebPage' | 'Service' | 'FAQPage' | 'AboutPage' | 'ContactPage';
  /** Image principale pour Open Graph */
  ogImage?: string;
  /** Alternative text pour l'image OG */
  ogImageAlt?: string;
  /** Type de contenu Open Graph */
  ogType?: 'website' | 'article';
  /** Langue de la page (fr, nl, en) */
  lang?: string;
  /** Désactiver l'indexation (pour pages admin/test) */
  noIndex?: boolean;
  /** Désactiver le suivi des liens */
  noFollow?: boolean;
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string[];
  serviceArea?: string[];
  areaServed?: string[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: string[];
  availableChannel?: {
    serviceUrl: string;
    availableLanguage: string[];
  };
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

/**
 * Configuration des communes de Bruxelles pour le SEO local
 */
export const BRUSSELS_COMMUNES = [
  'Anderlecht',
  'Auderghem',
  'Berchem-Sainte-Agathe',
  'Bruxelles',
  'Etterbeek',
  'Evere',
  'Forest',
  'Ganshoren',
  'Ixelles',
  'Jette',
  'Koekelberg',
  'Molenbeek-Saint-Jean',
  'Saint-Gilles',
  'Saint-Josse-ten-Noode',
  'Schaerbeek',
  'Uccle',
  'Watermael-Boitsfort',
  'Woluwe-Saint-Lambert',
  'Woluwe-Saint-Pierre',
] as const;

export type BrusselsCommune = typeof BRUSSELS_COMMUNES[number];

/**
 * Services principaux de Vericore pour le SEO
 */
export const VERICORE_SERVICES = [
  'renovation',
  'electricite',
  'plomberie',
  'chauffage',
  'climatisation',
  'menuiserie',
  'peinture',
  'carrelage',
] as const;

export type VericoreService = typeof VERICORE_SERVICES[number];
