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
const BASE_URL = 'https://vericore.be';

// URL slugs par langue et par service (miroir de src/data/serviceContent.ts)
const SERVICE_SLUGS_BY_LANG = {
  fr: {
    renovation: 'renovation', electricite: 'electricien', plomberie: 'plombier',
    chauffage: 'chauffagiste', climatisation: 'climatisation', menuiserie: 'menuisier',
    peinture: 'peintre', carrelage: 'carreleur',
  },
  nl: {
    renovation: 'renovatie', electricite: 'elektricien', plomberie: 'loodgieter',
    chauffage: 'verwarmingsinstallateur', climatisation: 'airco-installateur',
    menuiserie: 'schrijnwerker', peinture: 'schilder', carrelage: 'tegelzetter',
  },
  en: {
    renovation: 'renovation', electricite: 'electrician', plomberie: 'plumber',
    chauffage: 'heating', climatisation: 'air-conditioning',
    menuiserie: 'carpenter', peinture: 'painter', carrelage: 'tiler',
  },
};

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

const LANGS = ['fr', 'nl', 'en'];
const langPrefix = (lang) => (lang === 'fr' ? '' : `/${lang}`);

/** Ajoute un trailing slash sauf pour la racine (matche le comportement Hostinger, évite les redirections) */
const withTrailingSlash = (path) => {
  if (path === '' || path === '/') return path;
  return path.endsWith('/') ? path : `${path}/`;
};

// Génère les URLs pour toutes les langues avec alternates hreflang
function generateSitemapURLs() {
  const today = new Date().toISOString().split('T')[0];
  const urls = [];

  const pushWithAlternates = (path, opts) => {
    const slashed = withTrailingSlash(path);
    LANGS.forEach(lang => {
      const alternates = LANGS.map(l => ({
        hreflang: l === 'fr' ? 'fr-be' : l === 'nl' ? 'nl-be' : 'en',
        href: `${BASE_URL}${langPrefix(l)}${slashed}`,
      }));
      alternates.push({ hreflang: 'x-default', href: `${BASE_URL}${slashed}` });
      urls.push({
        loc: `${BASE_URL}${langPrefix(lang)}${slashed}`,
        lastmod: today,
        changefreq: opts.changefreq,
        priority: opts.priority,
        alternates,
      });
    });
  };

  pushWithAlternates('/', { changefreq: 'weekly', priority: 1.0 });

  const mainPages = [
    { path: '/expertises', priority: 0.9 },
    { path: '/projects', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/garanties', priority: 0.7 },
    { path: '/google-business', priority: 0.6 },
    { path: '/blog', priority: 0.8 },
  ];
  mainPages.forEach(p => pushWithAlternates(p.path, { changefreq: 'weekly', priority: p.priority }));

  // Pour chaque service × commune : générer les 3 URLs localisées avec hreflang correct
  const communeSlugs = BRUSSELS_COMMUNES.map(c =>
    c.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '-')
  );

  VERICORE_SERVICES.forEach(serviceKey => {
    communeSlugs.forEach(communeSlug => {
      const priority = communeSlug === 'bruxelles' ? 0.8 : 0.7;
      LANGS.forEach(lang => {
        const localSlug = SERVICE_SLUGS_BY_LANG[lang][serviceKey];
        const alternates = LANGS.map(l => ({
          hreflang: l === 'fr' ? 'fr-be' : l === 'nl' ? 'nl-be' : 'en',
          href: `${BASE_URL}${langPrefix(l)}/${SERVICE_SLUGS_BY_LANG[l][serviceKey]}-${communeSlug}/`,
        }));
        alternates.push({
          hreflang: 'x-default',
          href: `${BASE_URL}/${SERVICE_SLUGS_BY_LANG.fr[serviceKey]}-${communeSlug}/`,
        });
        urls.push({
          loc: `${BASE_URL}${langPrefix(lang)}/${localSlug}-${communeSlug}/`,
          lastmod: today,
          changefreq: 'monthly',
          priority,
          alternates,
        });
      });
    });
  });

  const blogPosts = [
    'cout-renovation-bruxelles-2026',
    'electricite-mise-aux-normes-rgie-bruxelles',
    '10-erreurs-renovation-eviter'
  ];
  blogPosts.forEach(slug => {
    pushWithAlternates(`/blog/${slug}`, { changefreq: 'monthly', priority: 0.6 });
  });

  pushWithAlternates('/mentions-legales', { changefreq: 'yearly', priority: 0.3 });

  return urls;
}

// Images à indexer par URL (Google Image Search)
function getImagesForRoute(loc) {
  const path = loc.replace(BASE_URL, '');
  if (path === '' || path === '/') {
    return [
      { loc: `${BASE_URL}/og-image.jpg`, title: 'Vericore - Maintenance & Rénovation à Bruxelles' },
      { loc: `${BASE_URL}/favicon.png`, title: 'Logo Vericore SRL' },
    ];
  }
  if (path.match(/^\/(renovation|electricite|plomberie|chauffage|climatisation|menuiserie|peinture|carrelage)-/)) {
    return [{ loc: `${BASE_URL}/og-image.jpg`, title: `Vericore - ${path.replace('/', '')}` }];
  }
  return [];
}

// Générer le XML du sitemap
function generateSitemapXML(urls) {
  const urlElements = urls.map(url => {
    const images = getImagesForRoute(url.loc);
    const imageXml = images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`).join('\n');

    const alternatesXml = (url.alternates || []).map(a =>
      `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`
    ).join('\n');

    return `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority.toFixed(1)}</priority>` : ''}${alternatesXml ? '\n' + alternatesXml : ''}${imageXml ? '\n' + imageXml : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
