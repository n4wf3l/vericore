/**
 * Générateur de sitemap.xml dynamique
 * Conforme aux standards Google 2026
 */

import { BASE_URL } from '../config/seo.config';
import { BRUSSELS_COMMUNES, VERICORE_SERVICES } from '../types/seo';

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Génère toutes les URLs du site pour le sitemap
 */
export const generateSitemapURLs = (): SitemapURL[] => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: SitemapURL[] = [];

  // Page d'accueil - priorité maximale
  urls.push({
    loc: BASE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0,
  });

  // Pages principales
  const mainPages = [
    { path: '/expertises', priority: 0.9 },
    { path: '/projects', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
    { path: '/devis', priority: 0.9 },
  ];

  mainPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page.path}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: page.priority,
    });
  });

  // Pages services (8 services × Bruxelles)
  VERICORE_SERVICES.forEach(service => {
    urls.push({
      loc: `${BASE_URL}/${service}-bruxelles`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Pages communales (19 communes × services principaux)
  BRUSSELS_COMMUNES.forEach(commune => {
    const communeSlug = commune.toLowerCase().replace(/\s+/g, '-');
    
    // Page générale de la commune
    urls.push({
      loc: `${BASE_URL}/renovation-${communeSlug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    });

    // Services par commune (uniquement les 3 principaux pour éviter duplicate)
    ['renovation', 'electricite', 'plomberie'].forEach(service => {
      urls.push({
        loc: `${BASE_URL}/${service}-${communeSlug}`,
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6,
      });
    });
  });

  // Pages légales
  const legalPages = [
    '/mentions-legales',
    '/politique-confidentialite',
    '/conditions-generales',
    '/garanties',
  ];

  legalPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page}`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.3,
    });
  });

  return urls;
};

/**
 * Génère le contenu XML du sitemap
 */
export const generateSitemapXML = (urls: SitemapURL[]): string => {
  const urlElements = urls.map(url => {
    return `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

/**
 * Génère le sitemap complet
 */
export const generateSitemap = (): string => {
  const urls = generateSitemapURLs();
  return generateSitemapXML(urls);
};

/**
 * Génère le fichier robots.txt optimisé
 */
export const generateRobotsTxt = (): string => {
  return `# Vericore SRL - Robots.txt
# Mise à jour: ${new Date().toISOString().split('T')[0]}

# Règles pour tous les robots
User-agent: *
Allow: /

# Bloquer les pages administratives et de staging
Disallow: /admin/
Disallow: /staging/
Disallow: /test/
Disallow: /dev/

# Bloquer les paramètres de tracking inutiles
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Bloquer les fichiers système
Disallow: /*.json$
Disallow: /*.xml$ 
Disallow: /*.env$

# Autoriser explicitement le sitemap
Allow: /sitemap.xml

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Règles spécifiques pour les bots gourmands
User-agent: GPTBot
Crawl-delay: 10

User-agent: CCBot
Crawl-delay: 10

User-agent: anthropic-ai
Crawl-delay: 10

# Règles pour les bots Google (priorité maximale)
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /

# Règles pour Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 2
`;
};
