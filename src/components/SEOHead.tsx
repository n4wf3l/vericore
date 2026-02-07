/**
 * Composant SEOHead - Gestion complète des balises meta et SEO
 * Bonnes pratiques 2026: canonical, Open Graph, Twitter Cards, structured data
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { SEOConfig } from '../types/seo';
import { BASE_URL, COMPANY_INFO, DEFAULT_SEO } from '../config/seo.config';

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
}

/**
 * Composant pour gérer toutes les balises SEO dans le <head>
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ config = {} }) => {
  const location = useLocation();
  
  // Fusionner la config par défaut avec la config spécifique
  const seoConfig: SEOConfig = {
    ...DEFAULT_SEO,
    ...config,
    canonical: config.canonical || `${BASE_URL}${location.pathname}`,
  };

  useEffect(() => {
    // Mettre à jour le titre
    document.title = seoConfig.title;

    // Fonction helper pour créer/mettre à jour une meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Fonction helper pour créer/mettre à jour un link
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    // Meta tags de base
    setMetaTag('description', seoConfig.description);
    
    if (seoConfig.keywords && seoConfig.keywords.length > 0) {
      setMetaTag('keywords', seoConfig.keywords.join(', '));
    }

    // Robots
    const robotsContent = [];
    if (seoConfig.noIndex) robotsContent.push('noindex');
    if (seoConfig.noFollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) {
      robotsContent.push('index', 'follow');
    }
    setMetaTag('robots', robotsContent.join(', '));

    // Langue
    if (seoConfig.lang) {
      document.documentElement.lang = seoConfig.lang;
    }

    // Canonical URL
    setLinkTag('canonical', seoConfig.canonical);

    // Open Graph
    setMetaTag('og:title', seoConfig.title, true);
    setMetaTag('og:description', seoConfig.description, true);
    setMetaTag('og:url', seoConfig.canonical, true);
    setMetaTag('og:type', seoConfig.ogType || 'website', true);
    setMetaTag('og:locale', seoConfig.lang === 'nl' ? 'nl_BE' : 'fr_BE', true);
    setMetaTag('og:site_name', COMPANY_INFO.name, true);

    if (seoConfig.ogImage) {
      setMetaTag('og:image', seoConfig.ogImage, true);
      if (seoConfig.ogImageAlt) {
        setMetaTag('og:image:alt', seoConfig.ogImageAlt, true);
      }
      setMetaTag('og:image:width', '1200', true);
      setMetaTag('og:image:height', '630', true);
    }

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seoConfig.title);
    setMetaTag('twitter:description', seoConfig.description);
    if (seoConfig.ogImage) {
      setMetaTag('twitter:image', seoConfig.ogImage);
    }

    // Informations de contact
    setMetaTag('contact', COMPANY_INFO.phone);
    setMetaTag('email', COMPANY_INFO.email);

    // Géolocalisation pour le SEO local
    setMetaTag('geo.region', 'BE-BRU');
    setMetaTag('geo.placename', 'Bruxelles');
    setMetaTag('geo.position', `${COMPANY_INFO.geo.latitude};${COMPANY_INFO.geo.longitude}`);
    setMetaTag('ICBM', `${COMPANY_INFO.geo.latitude}, ${COMPANY_INFO.geo.longitude}`);

    // Thème couleur pour navigateurs mobiles
    setMetaTag('theme-color', '#1e40af');
    setMetaTag('msapplication-TileColor', '#1e40af');

  }, [seoConfig, location.pathname]);

  return null; // Ce composant ne rend rien, il modifie seulement le <head>
};

/**
 * Hook personnalisé pour définir le SEO d'une page
 * Usage: useSEO({ title: "...", description: "...", ... })
 */
export const useSEO = (config: Partial<SEOConfig>) => {
  useEffect(() => {
    const seoConfig: SEOConfig = {
      ...DEFAULT_SEO,
      ...config,
    };

    document.title = seoConfig.title;

    // Mettre à jour la description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seoConfig.description;

  }, [config]);
};

export default SEOHead;
