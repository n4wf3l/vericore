/**
 * Configuration SEO centrale pour Vericore SRL
 * Bonnes pratiques SEO local Belgique 2026
 */

import type { LocalBusinessSchema, SEOConfig } from '../types/seo';

/** URL de base du site (à configurer selon l'environnement) */
export const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://www.vericore.be';

/** Informations de base de l'entreprise pour le SEO */
export const COMPANY_INFO = {
  name: 'Vericore SRL',
  legalName: 'Vericore SRL',
  slogan: 'Votre partenaire de confiance pour tous vos travaux à Bruxelles',
  description: 'Entreprise générale de construction et rénovation à Bruxelles. Expert en électricité, plomberie, chauffage, menuiserie et tous corps d\'état. Service 24/7, devis gratuit.',
  email: 'contact@vericore.be',
  phone: '+32 2 123 45 67',
  whatsapp: '+32 470 12 34 56',
  address: {
    street: 'Avenue Louise 123',
    city: 'Bruxelles',
    postalCode: '1050',
    country: 'Belgique',
    countryCode: 'BE',
  },
  social: {
    facebook: 'https://facebook.com/vericore',
    linkedin: 'https://linkedin.com/company/vericore',
    instagram: 'https://instagram.com/vericore',
  },
  geo: {
    latitude: 50.8503,
    longitude: 4.3517,
  },
  foundingYear: 2020,
  vatNumber: 'BE0123.456.789',
} as const;

/**
 * Schema LocalBusiness pour toutes les pages
 */
export const LOCAL_BUSINESS_SCHEMA: LocalBusinessSchema = {
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  url: BASE_URL,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    postalCode: COMPANY_INFO.address.postalCode,
    addressCountry: COMPANY_INFO.address.countryCode,
  },
  geo: {
    latitude: COMPANY_INFO.geo.latitude,
    longitude: COMPANY_INFO.geo.longitude,
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-15:00',
  ],
  priceRange: '€€',
  serviceArea: [
    'Bruxelles',
    'Région de Bruxelles-Capitale',
    'Brabant flamand',
    'Brabant wallon',
  ],
  areaServed: [
    'Anderlecht', 'Auderghem', 'Berchem-Sainte-Agathe', 'Bruxelles',
    'Etterbeek', 'Evere', 'Forest', 'Ganshoren', 'Ixelles', 'Jette',
    'Koekelberg', 'Molenbeek-Saint-Jean', 'Saint-Gilles', 'Saint-Josse-ten-Noode',
    'Schaerbeek', 'Uccle', 'Watermael-Boitsfort', 'Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre',
  ],
};

/**
 * Configuration SEO par défaut pour toutes les pages
 */
export const DEFAULT_SEO: SEOConfig = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.slogan}`,
  description: COMPANY_INFO.description,
  h1: 'Entreprise de rénovation et construction à Bruxelles',
  canonical: BASE_URL,
  keywords: [
    'rénovation Bruxelles',
    'construction Bruxelles',
    'électricien Bruxelles',
    'plombier Bruxelles',
    'chauffagiste Bruxelles',
    'entreprise générale Bruxelles',
    'travaux tous corps d\'état',
  ],
  ogImage: `${BASE_URL}/og-image.jpg`,
  ogImageAlt: 'Vericore - Entreprise de rénovation à Bruxelles',
  ogType: 'website',
  lang: 'fr',
};

/**
 * Générateur de configuration SEO pour les pages services
 */
export const generateServiceSEO = (
  service: string,
  city: string = 'Bruxelles',
  lang: 'fr' | 'nl' | 'en' = 'fr'
): SEOConfig => {
  const serviceLabels = {
    renovation: { fr: 'Rénovation', nl: 'Renovatie', en: 'Renovation' },
    electricite: { fr: 'Électricité', nl: 'Elektriciteit', en: 'Electricity' },
    plomberie: { fr: 'Plomberie', nl: 'Loodgieterij', en: 'Plumbing' },
    chauffage: { fr: 'Chauffage', nl: 'Verwarming', en: 'Heating' },
    climatisation: { fr: 'Climatisation', nl: 'Airconditioning', en: 'Air Conditioning' },
    menuiserie: { fr: 'Menuiserie', nl: 'Schrijnwerk', en: 'Carpentry' },
    peinture: { fr: 'Peinture', nl: 'Schilderwerk', en: 'Painting' },
    carrelage: { fr: 'Carrelage', nl: 'Tegelwerk', en: 'Tiling' },
  };

  const serviceLabel = serviceLabels[service as keyof typeof serviceLabels]?.[lang] || service;

  return {
    title: `${serviceLabel} ${city} - Devis Gratuit 24h | ${COMPANY_INFO.name}`,
    description: `Expert ${serviceLabel.toLowerCase()} à ${city}. Service professionnel, devis gratuit sous 24h, garantie décennale. Interventions rapides dans toute la région.`,
    h1: `${serviceLabel} professionnelle à ${city}`,
    canonical: `${BASE_URL}/${service}-${city.toLowerCase().replace(/\s+/g, '-')}`,
    keywords: [
      `${service} ${city}`,
      `${service} professionnel ${city}`,
      `devis ${service} ${city}`,
      `prix ${service} ${city}`,
      `entreprise ${service} ${city}`,
    ],
    schemaType: 'Service',
    ogType: 'website',
    lang,
  };
};

/**
 * Générateur de configuration SEO pour les pages communales
 */
export const generateCommuneSEO = (
  commune: string,
  lang: 'fr' | 'nl' | 'en' = 'fr'
): SEOConfig => {
  return {
    title: `Rénovation ${commune} - Tous travaux | ${COMPANY_INFO.name}`,
    description: `Entreprise de rénovation à ${commune}. Électricité, plomberie, chauffage, menuiserie. Devis gratuit 24h, intervention rapide, garantie décennale.`,
    h1: `Entreprise de rénovation à ${commune}`,
    canonical: `${BASE_URL}/renovation-${commune.toLowerCase().replace(/\s+/g, '-')}`,
    keywords: [
      `rénovation ${commune}`,
      `travaux ${commune}`,
      `entreprise générale ${commune}`,
      `construction ${commune}`,
      `rénovation maison ${commune}`,
      `rénovation appartement ${commune}`,
    ],
    schemaType: 'Service',
    ogType: 'website',
    lang,
  };
};
