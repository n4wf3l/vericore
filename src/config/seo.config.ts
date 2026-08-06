/**
 * Configuration SEO centrale pour Vericore SRL
 * Bonnes pratiques SEO local Belgique 2026
 */

import type { LocalBusinessSchema, SEOConfig } from '../types/seo';
import { env } from './env';
import { SERVICE_URL_SLUGS, type ServiceKey } from '../data/serviceContent';

/** URL de base du site (automatique selon l'environnement) */
export const BASE_URL = env.baseUrl;

/** Informations de base de l'entreprise pour le SEO */
export const COMPANY_INFO = {
  name: 'Vericore SRL',
  legalName: 'Vericore SRL',
  slogan: 'Votre partenaire de confiance pour tous vos travaux à Bruxelles',
  description: 'Entreprise générale de construction et rénovation à Bruxelles. Expert en électricité, plomberie, chauffage, menuiserie et tous corps d\'état. Service 24/7, devis gratuit.',
  email: 'contact@vericore.be',
  phone: '+32 496 84 73 74',
  whatsapp: '+32 496 84 73 74',
  address: {
    street: 'Rue Esseghem 43',
    city: 'Jette',
    postalCode: '1090',
    country: 'Belgique',
    countryCode: 'BE',
  },
  social: {
    facebook: 'https://facebook.com/vericore',
    linkedin: 'https://linkedin.com/company/vericore',
    instagram: 'https://instagram.com/vericore',
  },
  geo: {
    latitude: 50.8788,
    longitude: 4.3287,
  },
  foundingYear: 2020,
  vatNumber: 'BE1005.585.934',
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
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const langPrefix = lang === 'fr' ? '' : `/${lang}`;
  const urlSlug = SERVICE_URL_SLUGS[lang]?.[service as ServiceKey] || service;

  const t = {
    fr: {
      title: `${serviceLabel} ${city} - Devis Gratuit 24h | ${COMPANY_INFO.name}`,
      description: `Expert ${serviceLabel.toLowerCase()} à ${city}. Service professionnel, devis gratuit sous 24h, garantie décennale. Interventions rapides dans toute la région.`,
      h1: `${serviceLabel} professionnelle à ${city}`,
      keywords: [
        `${service} ${city}`,
        `${service} professionnel ${city}`,
        `devis ${service} ${city}`,
        `prix ${service} ${city}`,
        `entreprise ${service} ${city}`,
      ],
    },
    nl: {
      title: `${serviceLabel} ${city} - Gratis offerte 24u | ${COMPANY_INFO.name}`,
      description: `Expert in ${serviceLabel.toLowerCase()} in ${city}. Professionele service, gratis offerte binnen 24u, tienjarige garantie. Snelle interventies in de hele regio.`,
      h1: `Professionele ${serviceLabel.toLowerCase()} in ${city}`,
      keywords: [
        `${serviceLabel.toLowerCase()} ${city}`,
        `professionele ${serviceLabel.toLowerCase()} ${city}`,
        `offerte ${serviceLabel.toLowerCase()} ${city}`,
        `prijs ${serviceLabel.toLowerCase()} ${city}`,
        `bedrijf ${serviceLabel.toLowerCase()} ${city}`,
      ],
    },
    en: {
      title: `${serviceLabel} ${city} - Free quote within 24h | ${COMPANY_INFO.name}`,
      description: `Expert ${serviceLabel.toLowerCase()} in ${city}. Professional service, free quote within 24h, 10-year warranty. Quick response throughout the region.`,
      h1: `Professional ${serviceLabel.toLowerCase()} in ${city}`,
      keywords: [
        `${serviceLabel.toLowerCase()} ${city}`,
        `professional ${serviceLabel.toLowerCase()} ${city}`,
        `${serviceLabel.toLowerCase()} quote ${city}`,
        `${serviceLabel.toLowerCase()} price ${city}`,
        `${serviceLabel.toLowerCase()} company ${city}`,
      ],
    },
  }[lang];

  // Hreflang alternates avec les slugs traduits par langue
  const alternates = (['fr', 'nl', 'en'] as const).map(l => ({
    hreflang: l === 'fr' ? 'fr-be' : l === 'nl' ? 'nl-be' : 'en',
    href: `${BASE_URL}${l === 'fr' ? '' : `/${l}`}/${SERVICE_URL_SLUGS[l][service as ServiceKey] || service}-${citySlug}/`,
  }));
  alternates.push({
    hreflang: 'x-default',
    href: `${BASE_URL}/${SERVICE_URL_SLUGS.fr[service as ServiceKey] || service}-${citySlug}/`,
  });

  return {
    ...t,
    // Trailing slash pour matcher le comportement Hostinger (évite 1 redirection SEO)
    canonical: `${BASE_URL}${langPrefix}/${urlSlug}-${citySlug}/`,
    alternates,
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
  const communeSlug = commune.toLowerCase().replace(/\s+/g, '-');
  const langPrefix = lang === 'fr' ? '' : `/${lang}`;

  const t = {
    fr: {
      title: `Rénovation ${commune} - Tous travaux | ${COMPANY_INFO.name}`,
      description: `Entreprise de rénovation à ${commune}. Électricité, plomberie, chauffage, menuiserie. Devis gratuit 24h, intervention rapide, garantie décennale.`,
      h1: `Entreprise de rénovation à ${commune}`,
      keywords: [
        `rénovation ${commune}`,
        `travaux ${commune}`,
        `entreprise générale ${commune}`,
        `construction ${commune}`,
        `rénovation maison ${commune}`,
        `rénovation appartement ${commune}`,
      ],
    },
    nl: {
      title: `Renovatie ${commune} - Alle werken | ${COMPANY_INFO.name}`,
      description: `Renovatiebedrijf in ${commune}. Elektriciteit, loodgieterij, verwarming, schrijnwerk. Gratis offerte 24u, snelle interventie, tienjarige garantie.`,
      h1: `Renovatiebedrijf in ${commune}`,
      keywords: [
        `renovatie ${commune}`,
        `werken ${commune}`,
        `algemeen bedrijf ${commune}`,
        `bouw ${commune}`,
        `renovatie huis ${commune}`,
        `renovatie appartement ${commune}`,
      ],
    },
    en: {
      title: `Renovation ${commune} - All trades | ${COMPANY_INFO.name}`,
      description: `Renovation company in ${commune}. Electricity, plumbing, heating, carpentry. Free quote within 24h, quick response, 10-year warranty.`,
      h1: `Renovation company in ${commune}`,
      keywords: [
        `renovation ${commune}`,
        `works ${commune}`,
        `general contractor ${commune}`,
        `construction ${commune}`,
        `house renovation ${commune}`,
        `apartment renovation ${commune}`,
      ],
    },
  }[lang];

  return {
    ...t,
    canonical: `${BASE_URL}${langPrefix}/renovation-${communeSlug}/`,
    schemaType: 'Service',
    ogType: 'website',
    lang,
  };
};
