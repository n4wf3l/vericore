/**
 * Script de génération de sitemap et robots.txt
 * Version autonome sans dépendances TypeScript
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const BASE_URL = 'https://www.vericore.be';

// Communes de Bruxelles
const BRUSSELS_COMMUNES = [
  'Anderlecht', 'Auderghem', 'Berchem-Sainte-Agathe', 'Bruxelles',
  'Etterbeek', 'Evere', 'Forest', 'Ganshoren', 'Ixelles', 'Jette',
  'Koekelberg', 'Molenbeek-Saint-Jean', 'Saint-Gilles', 'Saint-Josse-ten-Noode',
  'Schaerbeek', 'Uccle', 'Watermael-Boitsfort', 'Woluwe-Saint-Lambert', 'Woluwe-Saint-Pierre'
];

// Services principaux
const VERICORE_SERVICES = [
  'renovation', 'electricite', 'plomberie', 'chauffage',
  'climatisation', 'menuiserie', 'peinture', 'carrelage'
];

// Générer toutes les URLs
function generateSitemapURLs() {
  const today = new Date().toISOString().split('T')[0];
  const urls = [];

  // Page d'accueil
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
    { path: '/contact', priority: 0.9 },
    { path: '/garanties', priority: 0.7 },
    { path: '/google-business', priority: 0.6 },
    { path: '/blog', priority: 0.8 },
  ];

  mainPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page.path}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: page.priority,
    });
  });

  // Pages services
  VERICORE_SERVICES.forEach(service => {
    urls.push({
      loc: `${BASE_URL}/${service}-bruxelles`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Pages communales
  BRUSSELS_COMMUNES.forEach(commune => {
    const communeSlug = commune.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/'/g, '-');
    
    urls.push({
      loc: `${BASE_URL}/renovation-${communeSlug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Articles de blog
  const blogPosts = [
    'cout-renovation-bruxelles-2026',
    'electricite-mise-aux-normes-rgie-bruxelles',
    '10-erreurs-renovation-eviter'
  ];

  blogPosts.forEach(slug => {
    urls.push({
      loc: `${BASE_URL}/blog/${slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.6,
    });
  });

  // Pages légales
  urls.push(
    {
      loc: `${BASE_URL}/mentions-legales`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.3,
    }
  );

  return urls;
}

// Générer le XML du sitemap
function generateSitemapXML(urls) {
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
}

// Générer le robots.txt
function generateRobotsTxt() {
  return `# Vericore SRL - Robots.txt
# Mise à jour: ${new Date().toISOString().split('T')[0]}

# Règles pour tous les robots
User-agent: *
Allow: /

# Bloquer les pages administratives
Disallow: /admin/
Disallow: /staging/
Disallow: /test/

# Bloquer les paramètres de tracking
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Règles pour les bots gourmands
User-agent: GPTBot
Crawl-delay: 10

User-agent: CCBot
Crawl-delay: 10

# Règles pour Google (priorité maximale)
User-agent: Googlebot
Allow: /
Crawl-delay: 0
`;
}

// Exécution
const publicDir = join(__dirname, '../public');

try {
  // Créer le dossier public s'il n'existe pas
  mkdirSync(publicDir, { recursive: true });

  // Générer sitemap.xml
  const urls = generateSitemapURLs();
  const sitemapContent = generateSitemapXML(urls);
  const sitemapPath = join(publicDir, 'sitemap.xml');
  writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log('✅ sitemap.xml généré avec succès');

  // Générer robots.txt
  const robotsContent = generateRobotsTxt();
  const robotsPath = join(publicDir, 'robots.txt');
  writeFileSync(robotsPath, robotsContent, 'utf-8');
  console.log('✅ robots.txt généré avec succès');

  // Statistiques
  console.log(`📊 ${urls.length} URLs ajoutées au sitemap`);
  console.log(`📁 Fichiers générés dans: ${publicDir}`);
  
} catch (error) {
  console.error('❌ Erreur lors de la génération:', error);
  process.exit(1);
}
