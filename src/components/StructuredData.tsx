/**
 * Composant StructuredData - Génération de schemas JSON-LD
 * Conforme à Schema.org 2026 pour le SEO local
 */

import { useEffect } from 'react';
import type { 
  LocalBusinessSchema, 
  ServiceSchema, 
  FAQSchema, 
  BreadcrumbItem,
  AggregateRatingSchema 
} from '../types/seo';
import { LOCAL_BUSINESS_SCHEMA, COMPANY_INFO, BASE_URL } from '../config/seo.config';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Breadcrumb' | 'AggregateRating' | 'WebPage';
  data?: any;
}

/**
 * Composant pour injecter les données structurées JSON-LD dans le <head>
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  useEffect(() => {
    let schema: any = {};

    switch (type) {
      case 'LocalBusiness':
        schema = generateLocalBusinessSchema(data);
        break;
      case 'Service':
        schema = generateServiceSchema(data);
        break;
      case 'FAQPage':
        schema = generateFAQSchema(data);
        break;
      case 'Breadcrumb':
        schema = generateBreadcrumbSchema(data);
        break;
      case 'AggregateRating':
        schema = generateAggregateRatingSchema(data);
        break;
      case 'WebPage':
        schema = generateWebPageSchema(data);
        break;
    }

    // Créer le script JSON-LD
    const scriptId = `structured-data-${type.toLowerCase()}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(schema);

    // Nettoyer lors du démontage
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
};

/**
 * Génère le schema LocalBusiness
 */
const generateLocalBusinessSchema = (customData?: Partial<LocalBusinessSchema>) => {
  const schema = { ...LOCAL_BUSINESS_SCHEMA, ...customData };
  
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${BASE_URL}/#organization`,
    name: schema.name,
    description: schema.description,
    url: schema.url,
    logo: `${BASE_URL}/logo.png`,
    image: schema.image || [`${BASE_URL}/og-image.jpg`],
    telephone: schema.telephone,
    email: schema.email,
    priceRange: schema.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: schema.address.streetAddress,
      addressLocality: schema.address.addressLocality,
      postalCode: schema.address.postalCode,
      addressCountry: schema.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: schema.geo?.latitude,
      longitude: schema.geo?.longitude,
    },
    openingHoursSpecification: schema.openingHours?.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: parseDays(days),
        opens,
        closes,
      };
    }),
    areaServed: schema.areaServed?.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceArea: schema.serviceArea?.map(area => ({
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: schema.geo?.latitude,
        longitude: schema.geo?.longitude,
      },
      geoRadius: '25km',
      name: area,
    })),
    sameAs: [
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de construction et rénovation',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rénovation complète',
            description: 'Rénovation de maisons et appartements à Bruxelles',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation électrique',
            description: 'Installation et réparation électrique certifiée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plomberie et sanitaire',
            description: 'Installation et dépannage plomberie',
          },
        },
      ],
    },
  };
};

/**
 * Génère le schema Service pour une page service spécifique
 */
const generateServiceSchema = (serviceData: ServiceSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.serviceType,
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: serviceData.provider.name,
      url: serviceData.provider.url,
    },
    areaServed: serviceData.areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    availableChannel: serviceData.availableChannel ? {
      '@type': 'ServiceChannel',
      serviceUrl: serviceData.availableChannel.serviceUrl,
      availableLanguage: serviceData.availableChannel.availableLanguage,
    } : undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceData.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceData.name,
          },
        },
      ],
    },
  };
};

/**
 * Génère le schema FAQPage
 */
const generateFAQSchema = (faqData: FAQSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.questions.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

/**
 * Génère le schema BreadcrumbList
 */
const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Génère le schema AggregateRating
 */
const generateAggregateRatingSchema = (ratingData: AggregateRatingSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingData.ratingValue,
    reviewCount: ratingData.reviewCount,
    bestRating: ratingData.bestRating || 5,
    worstRating: ratingData.worstRating || 1,
  };
};

/**
 * Génère le schema WebPage
 */
const generateWebPageSchema = (pageData: { name: string; description: string; url: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    inLanguage: 'fr-BE',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: COMPANY_INFO.name,
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
      },
    },
  };
};

/**
 * Helper pour parser les jours de la semaine
 */
const parseDays = (days: string): string[] => {
  const dayMap: Record<string, string[]> = {
    'Mo-Fr': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'Sa': ['Saturday'],
    'Su': ['Sunday'],
  };
  
  return dayMap[days] || [];
};

export default StructuredData;
