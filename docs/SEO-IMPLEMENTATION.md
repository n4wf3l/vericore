# Guide d'implémentation SEO 2026 - Vericore

## 📋 Vue d'ensemble

Ce document explique l'architecture SEO complète implémentée pour le site Vericore, optimisée pour le référencement local belge (Bruxelles) en 2026.

---

## 🏗️ Architecture des fichiers

```
src/
├── types/
│   ├── seo.ts              # Types TypeScript pour le SEO
│   └── blog.ts             # Types pour le système de blog
├── config/
│   └── seo.config.ts       # Configuration centrale SEO
├── components/
│   ├── SEOHead.tsx         # Composant meta tags dynamiques
│   ├── StructuredData.tsx  # Composant JSON-LD schemas
│   └── OptimizedImage.tsx  # Images optimisées WebP/AVIF
├── pages/
│   ├── ServicePage.tsx     # Template pages services
│   ├── CommunePage.tsx     # Template pages communales
│   ├── LegalPage.tsx       # Mentions légales
│   ├── GuaranteesPage.tsx  # Garanties E-E-A-T
│   ├── GoogleBusinessPage.tsx  # Page GBP
│   ├── BlogPage.tsx        # Index blog
│   └── BlogPostPage.tsx    # Article de blog
├── utils/
│   ├── sitemap.ts          # Génération sitemap.xml
│   └── image-optimization.ts  # Utilitaires images
├── data/
│   └── blog.ts             # Articles de blog
└── scripts/
    └── generate-seo-files.mjs  # Script génération sitemap/robots

docs/
└── PERFORMANCE.md          # Guide optimisation performance
```

---

## 🚀 Démarrage rapide

### 1. Installer les dépendances

```bash
npm install react-markdown
npm install -D rollup-plugin-visualizer terser
```

### 2. Configurer l'URL de base

```typescript
// src/config/seo.config.ts
export const BASE_URL = 'https://www.vericore.be'; // À modifier selon votre domaine
```

### 3. Générer sitemap et robots.txt

```bash
node scripts/generate-seo-files.mjs
```

### 4. Intégrer SEO dans vos pages

```tsx
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

function MyPage() {
  return (
    <>
      <SEOHead config={{
        title: "Titre de ma page",
        description: "Description unique",
        h1: "Titre H1 principal",
      }} />
      <StructuredData type="LocalBusiness" />
      {/* Contenu de la page */}
    </>
  );
}
```

---

## 📄 Composants SEO principaux

### SEOHead

Gère tous les meta tags, canonical, Open Graph et Twitter Cards.

**Usage :**
```tsx
<SEOHead config={{
  title: "Service à Bruxelles - Devis Gratuit | Vericore",
  description: "Description optimisée SEO (150-160 caractères)",
  h1: "Titre H1 unique",
  canonical: "https://www.vericore.be/mon-service",
  keywords: ["mot-clé 1", "mot-clé 2"],
  ogImage: "/images/og-image.jpg",
  lang: "fr",
}} />
```

### StructuredData

Génère les schemas JSON-LD pour les rich snippets Google.

**Types disponibles :**
- `LocalBusiness` : Fiche entreprise
- `Service` : Page service
- `FAQPage` : Page FAQ
- `Breadcrumb` : Fil d'Ariane
- `AggregateRating` : Avis clients
- `WebPage` : Page générique

**Usage :**
```tsx
<StructuredData type="Service" data={{
  name: "Rénovation à Bruxelles",
  description: "Service de rénovation complète",
  serviceType: "renovation",
  provider: {
    name: "Vericore SRL",
    url: "https://www.vericore.be",
  },
  areaServed: ["Bruxelles", "Schaerbeek", "Evere"],
}} />
```

### OptimizedImage

Images responsive avec WebP/AVIF, lazy loading et srcset automatique.

**Usage :**
```tsx
<OptimizedImage
  src="/images/services/renovation"
  alt="Rénovation complète à Bruxelles par Vericore"
  width={1920}
  height={1080}
  loading="eager" // ou "lazy"
  format="webp" // ou "avif", "jpg"
/>
```

---

## 📝 Créer une nouvelle page service

### Étape 1 : Ajouter dans App.tsx

```tsx
import ServicePage from './pages/ServicePage';

// Dans <Routes>
<Route 
  path="/mon-service-bruxelles" 
  element={<ServicePage service="mon-service" city="Bruxelles" />} 
/>
```

### Étape 2 : Personnaliser le contenu

Modifier `src/pages/ServicePage.tsx` fonction `getServiceContent()` pour ajouter le contenu spécifique à votre service.

### Étape 3 : Ajouter au sitemap

Le service sera automatiquement ajouté au sitemap si référencé dans `VERICORE_SERVICES` dans `src/types/seo.ts`.

---

## 🏙️ Créer une page communale

### Utilisation du template

```tsx
import { CommunePage } from './pages/CommunePage';

// Dans <Routes>
<Route path="/renovation-schaerbeek" element={<CommunePage />} />
<Route path="/renovation-evere" element={<CommunePage />} />
```

Le composant lit automatiquement le paramètre URL pour afficher le contenu de la commune.

---

## 📰 Système de blog

### Ajouter un article

Éditer `src/data/blog.ts` :

```typescript
{
  id: '4',
  slug: 'mon-article-seo',
  title: 'Titre optimisé SEO avec mots-clés',
  excerpt: 'Résumé de 150-160 caractères',
  content: `
# Mon article en Markdown

Contenu avec [liens internes](/service) automatiques.

## Section 2

Plus de contenu...
  `,
  author: 'jean-dupont',
  publishedAt: '2026-02-07',
  category: 'conseils',
  tags: ['rénovation', 'bruxelles', 'prix'],
  featuredImage: '/images/blog/mon-image.jpg',
  featuredImageAlt: 'Description image',
  readingTime: 5,
  relatedServices: ['renovation', 'electricite'],
  relatedCommunes: ['Schaerbeek', 'Evere'],
  seoTitle: 'Titre SEO optimisé',
  seoDescription: 'Meta description unique',
}
```

### Maillage interne automatique

Les liens `[texte](/service)` dans le contenu Markdown sont automatiquement convertis en liens React Router avec suivi SEO.

---

## 🔍 Google Search Console

### 1. Vérification du site

Ajouter dans `index.html` :
```html
<meta name="google-site-verification" content="VOTRE_CODE_ICI" />
```

### 2. Soumettre le sitemap

1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter une propriété : `https://www.vericore.be`
3. Sitemaps → Ajouter : `https://www.vericore.be/sitemap.xml`

### 3. Surveiller les performances

- **Couverture** : Pages indexées vs erreurs
- **Performances** : CTR, impressions, positions
- **Core Web Vitals** : LCP, FID, CLS
- **Ergonomie mobile** : Problèmes détectés

---

## 🎯 Checklist SEO par page

### ✅ Obligatoire
- [ ] Titre unique (50-60 caractères)
- [ ] Meta description unique (150-160 caractères)
- [ ] H1 unique par page
- [ ] URL propre et descriptive
- [ ] Canonical auto-référencé
- [ ] Images avec alt descriptifs
- [ ] Schema.org JSON-LD

### ✅ Recommandé
- [ ] H2-H6 hiérarchie logique
- [ ] Contenu 600+ mots
- [ ] Liens internes (3-5 minimum)
- [ ] CTA clairs (appel, devis, WhatsApp)
- [ ] Responsive mobile optimisé
- [ ] Temps de chargement < 2s

### ✅ Avancé
- [ ] Fil d'Ariane (Breadcrumb)
- [ ] FAQ avec schema FAQPage
- [ ] Images WebP/AVIF
- [ ] Lazy loading images
- [ ] Mots-clés locaux (ville, commune)

---

## 🌍 SEO Local - Bonnes pratiques

### 1. Ciblage géographique

**Format titre :**
```
[Service] [Commune] - [Bénéfice] | [Entreprise]
```

**Exemples :**
- Rénovation Schaerbeek - Devis Gratuit 24h | Vericore
- Électricité Evere - Dépannage Rapide | Vericore
- Plomberie Ixelles - Intervention 24/7 | Vericore

### 2. Contenu local

- Mentionner les communes spécifiques
- Citer des quartiers locaux
- Références à Bruxelles-Capitale
- Exemples concrets de projets locaux
- Prix adaptés au marché belge

### 3. NAP Consistency

**Name, Address, Phone** identiques partout :
- Site web
- Google Business Profile
- Annuaires (Pagesdor, Beci, etc.)
- Réseaux sociaux

---

## 📊 Tracking et Analytics

### Google Analytics 4

```html
<!-- Dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Événements à tracker

```typescript
// Exemple tracking bouton CTA
const handleCTAClick = () => {
  gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: 'devis_gratuit',
    value: 1
  });
  // Action CTA...
};
```

---

## 🔄 Maintenance SEO

### Hebdomadaire
- [ ] Vérifier Google Search Console (erreurs)
- [ ] Surveiller positions mots-clés principaux
- [ ] Publier 1 article de blog minimum

### Mensuel
- [ ] Analyser Google Analytics
- [ ] Mettre à jour contenu ancien
- [ ] Ajouter nouveaux liens internes
- [ ] Optimiser pages peu performantes

### Trimestriel
- [ ] Audit complet Lighthouse
- [ ] Révision stratégie mots-clés
- [ ] Analyse concurrence locale
- [ ] Mise à jour schema.org

---

## 🐛 Résolution de problèmes

### Pages non indexées

1. Vérifier `robots.txt` : `Allow: /`
2. Vérifier meta robots : pas de `noindex`
3. Soumettre URL dans Search Console
4. Vérifier canonical pointe vers la bonne URL

### Mauvais positionnement

1. Vérifier concurrence mot-clé
2. Améliorer contenu (longueur, qualité)
3. Ajouter liens internes
4. Optimiser vitesse de chargement
5. Améliorer mobile UX

### Core Web Vitals faibles

1. Optimiser images (WebP, lazy loading)
2. Réduire JS (code splitting)
3. Précharger ressources critiques
4. Minifier CSS/JS
5. Activer compression Brotli

---

## 📚 Ressources utiles

### Outils SEO
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Screaming Frog SEO Spider](https://www.screamingfrogseospi der.com/)
- [Ahrefs](https://ahrefs.com/)
- [SEMrush](https://www.semrush.com/)

### Validation
- [Schema.org Validator](https://validator.schema.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [W3C Markup Validator](https://validator.w3.org/)

### Performance
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Web.dev](https://web.dev/)

---

## 💡 Conseils avancés

### 1. Contenu évolutif

Créer du contenu qui reste pertinent :
- Guides "evergreen" (toujours valables)
- Cas d'études locaux
- Comparatifs de prix annuels
- FAQ basées sur vraies questions clients

### 2. Link building local

- Partenaires locaux (échange liens)
- Annuaires belges (Pagesdor, 1207, etc.)
- Chambres de commerce (BECI)
- Sponsoring événements locaux
- Témoignages clients avec backlinks

### 3. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

- Certifications visibles (RGIE, garantie décennale)
- Profils auteurs détaillés
- Témoignages clients vérifiés
- Portfolio projets complets
- Mentions dans presse locale

---

## 📞 Support

Pour toute question sur l'implémentation SEO :
- 📧 Email : dev@vericore.be
- 📱 WhatsApp : +32 470 12 34 56
- 📄 Documentation : `/docs/`

---

**Version :** 1.0.0  
**Dernière mise à jour :** 7 février 2026  
**Auteur :** Équipe Vericore Tech
