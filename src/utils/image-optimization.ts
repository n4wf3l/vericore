/**
 * Configuration Vite pour l'optimisation des images
 * Plugin imagetools pour générer automatiquement WebP/AVIF
 */

// Dans vite.config.ts, ajouter:
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Générer automatiquement WebP et AVIF
        if (url.searchParams.has('optimize')) {
          return new URLSearchParams({
            format: 'webp;avif;jpg',
            quality: '85',
          })
        }
        return new URLSearchParams()
      },
    }),
  ],
  build: {
    // Optimiser les chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        },
      },
    },
    // Limiter la taille des chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimisation des assets
  assetsInclude: ['**\/*.webp', '**\/*.avif'],
})
*/

/**
 * Script pour optimiser les images existantes
 * À exécuter: node scripts/optimize-images.mjs
 */

export const imageOptimizationGuide = `
# Guide d'optimisation des images

## 1. Installation des dépendances
npm install -D vite-imagetools sharp

## 2. Utilisation dans les composants

import heroImage from './assets/hero.jpg?optimize'

<OptimizedImage 
  src={heroImage} 
  alt="Description SEO"
  width={1920}
  height={1080}
  loading="eager" // Pour les images LCP
/>

## 3. Formats recommandés par usage

### Images Hero / LCP
- Format: AVIF + WebP + JPG fallback
- Taille: 1920x1080 max
- Qualité: 85%
- Loading: eager
- Précharger avec <link rel="preload">

### Images de contenu
- Format: WebP + JPG fallback
- Taille: 1200x800 max
- Qualité: 80%
- Loading: lazy
- Intersection Observer

### Icônes / Logos
- Format: SVG si possible, sinon PNG
- Taille: 200x200 max
- Optimiser avec SVGO

### Images de fond
- Format: WebP + JPG
- Taille: 1920x1080
- Qualité: 75%
- Loading: lazy

## 4. Srcset et sizes

<OptimizedImage
  src="/images/project"
  alt="Projet de rénovation"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

Génère automatiquement:
- project-320w.webp
- project-640w.webp
- project-768w.webp
- project-1024w.webp
- project-1280w.webp
- project-1536w.webp
- project-1920w.webp

## 5. Nommage SEO des images

❌ Mauvais: IMG_1234.jpg, photo.png, image1.jpg
✅ Bon: renovation-cuisine-bruxelles-avant.jpg
✅ Bon: installation-electrique-evere-2026.jpg
✅ Bon: plomberie-sanitaire-schaerbeek.jpg

Format: [service]-[detail]-[ville]-[contexte].jpg

## 6. Alt text SEO

❌ Mauvais: "image", "photo", ""
✅ Bon: "Rénovation complète d'une cuisine moderne à Bruxelles"
✅ Bon: "Installation électrique certifiée à Evere par Vericore"
✅ Bon: "Plomberie sanitaire après intervention à Schaerbeek"

Format: [Action] [Détail] à [Ville] [par Entreprise si pertinent]

## 7. Structure des dossiers

public/images/
├── services/
│   ├── renovation/
│   ├── electricite/
│   └── plomberie/
├── projects/
│   ├── avant/
│   └── apres/
├── team/
└── logos/

## 8. Conversion automatique

# Installer Sharp
npm install -D sharp

# Script de conversion
import sharp from 'sharp';

const convertToWebP = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath);
};

const convertToAVIF = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .avif({ quality: 80 })
    .toFile(outputPath);
};
`;

console.log(imageOptimizationGuide);
