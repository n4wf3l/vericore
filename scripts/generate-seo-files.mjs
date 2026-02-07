/**
 * Script de génération de sitemap et robots.txt
 * À exécuter en build pour générer les fichiers statiques
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { generateSitemap, generateRobotsTxt } from '../src/utils/sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');

try {
  // Créer le dossier public s'il n'existe pas
  mkdirSync(publicDir, { recursive: true });

  // Générer sitemap.xml
  const sitemapContent = generateSitemap();
  const sitemapPath = join(publicDir, 'sitemap.xml');
  writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log('✅ sitemap.xml généré avec succès');

  // Générer robots.txt
  const robotsContent = generateRobotsTxt();
  const robotsPath = join(publicDir, 'robots.txt');
  writeFileSync(robotsPath, robotsContent, 'utf-8');
  console.log('✅ robots.txt généré avec succès');

  // Afficher les statistiques
  const urlCount = sitemapContent.match(/<url>/g)?.length || 0;
  console.log(`📊 ${urlCount} URLs ajoutées au sitemap`);
  
} catch (error) {
  console.error('❌ Erreur lors de la génération:', error);
  process.exit(1);
}
