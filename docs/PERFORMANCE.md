/**
 * Guide d'optimisation des performances
 * Checklist complète pour atteindre un score Lighthouse > 95
 */

# Guide d'optimisation des performances Vite + React

## 1. Installation des dépendances d'optimisation

```bash
npm install -D rollup-plugin-visualizer terser
npm install -D vite-plugin-compression # Pour Gzip/Brotli
npm install -D vite-plugin-imagetools sharp # Pour images
```

## 2. Optimisation des polices

### Option A : Fonts système (recommandé pour performance)
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Option B : Google Fonts optimisé
```html
<!-- Dans index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Option C : Self-hosted (meilleure performance)
```bash
# Télécharger Inter ou autre police
# Placer dans /public/fonts/
# Utiliser @font-face dans CSS
```

## 3. Lazy loading des routes

```tsx
// App.tsx - Code splitting par route
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const ExpertisesPage = lazy(() => import('./pages/ExpertisesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// Dans Routes:
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/expertises" element={<ExpertisesPage />} />
    {/* ... */}
  </Routes>
</Suspense>
```

## 4. Optimisation des images

### Structure recommandée
```
public/images/
├── services/
│   ├── renovation-hero-320w.webp
│   ├── renovation-hero-640w.webp
│   ├── renovation-hero-1024w.webp
│   └── renovation-hero-1920w.webp
├── projects/
└── logos/
```

### Script de conversion
```bash
# Installer Sharp
npm install -D sharp

# Créer script dans scripts/convert-images.js
node scripts/convert-images.js
```

## 5. Compression Brotli/Gzip

```typescript
// vite.config.ts
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
});
```

## 6. Configuration serveur Nginx (production)

```nginx
# /etc/nginx/sites-available/vericore

server {
    listen 443 ssl http2;
    server_name www.vericore.be vericore.be;
    
    root /var/www/vericore/dist;
    index index.html;
    
    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/vericore.be/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vericore.be/privkey.pem;
    
    # Compression Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json image/svg+xml;
    
    # Compression Brotli (si module installé)
    brotli on;
    brotli_comp_level 6;
    brotli_types text/plain text/css text/xml text/javascript 
                 application/x-javascript application/xml+rss 
                 application/javascript application/json image/svg+xml;
    
    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Sécurité
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name www.vericore.be vericore.be;
    return 301 https://www.vericore.be$request_uri;
}

# Redirect non-www to www
server {
    listen 443 ssl http2;
    server_name vericore.be;
    ssl_certificate /etc/letsencrypt/live/vericore.be/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vericore.be/privkey.pem;
    return 301 https://www.vericore.be$request_uri;
}
```

## 7. Headers de sécurité et performance

```typescript
// vite.config.ts ou serveur Node.js
{
  headers: {
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(self), microphone=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  }
}
```

## 8. Checklist finale avant déploiement

### Performance
- [ ] Toutes les images converties en WebP/AVIF
- [ ] Lazy loading activé sur toutes les images
- [ ] Code splitting par route implémenté
- [ ] Bundles < 200KB par chunk
- [ ] Fonts préchargées ou système
- [ ] Console.log supprimés en production
- [ ] Source maps désactivées

### SEO
- [ ] sitemap.xml généré et accessible
- [ ] robots.txt déployé
- [ ] Canonical tags sur toutes les pages
- [ ] Meta descriptions uniques < 160 caractères
- [ ] Balises H1 uniques par page
- [ ] Schema.org JSON-LD implémenté
- [ ] Images avec alt descriptifs
- [ ] URLs propres sans paramètres inutiles

### Sécurité
- [ ] HTTPS activé (Let's Encrypt)
- [ ] Redirect HTTP → HTTPS
- [ ] Headers de sécurité configurés
- [ ] CSP (Content Security Policy) si applicable
- [ ] Variables d'environnement sécurisées

### Monitoring
- [ ] Google Search Console configuré
- [ ] Google Analytics installé
- [ ] Erreurs 404 surveillées
- [ ] Temps de chargement < 2s (LCP)
- [ ] CLS < 0.1
- [ ] FID < 100ms

## 9. Commandes de build et déploiement

```bash
# Build de production
npm run build

# Analyser la taille des bundles
npm run build -- --mode analyze

# Tester le build localement
npm run preview

# Générer sitemap et robots.txt
node scripts/generate-seo-files.mjs

# Déployer (exemple avec rsync)
rsync -avz --delete dist/ user@server:/var/www/vericore/
```

## 10. Tests de performance

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000

# WebPageTest
# https://www.webpagetest.org/

# PageSpeed Insights
# https://pagespeed.web.dev/
```

## Objectifs de performance

- **Lighthouse Score** : > 95 pour toutes les catégories
- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1
- **Time to Interactive** : < 3.5s
- **Total Blocking Time** : < 200ms
- **Speed Index** : < 3.0s

## Support

Pour toute question sur l'optimisation, consultez :
- [Web.dev](https://web.dev/vitals/)
- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit)
