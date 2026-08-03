# Guide de déploiement — Vericore

Le site est un SPA React qui **doit être servi comme statique après prerender**.
Chaque route a son propre `index.html` prérendu.

---

## Build de production

```bash
# 1. Régénérer sitemap + robots.txt à partir du dernier code
node scripts/generate-seo-files.mjs

# 2. Build + prerender (Puppeteer génère 37+ HTMLs)
npm run build
```

Ou en une commande :

```bash
npm run build:seo
```

Sortie : `dist/` avec :
- `dist/index.html` — homepage prérendu
- `dist/expertises/index.html`
- `dist/renovation-schaerbeek/index.html`
- ... 37 pages statiques
- `dist/assets/*` — JS/CSS/images hashés
- `dist/sitemap.xml`, `dist/robots.txt`, `dist/site.webmanifest`

Temps de build : ~1m10s.

---

## Configuration serveur

### Règle critique : SPA fallback

Pour les routes non prérendues (ex: `/renovation-nyon`, futures pages), il faut servir `index.html` en fallback pour que React Router prenne le relais.

**MAIS** : pour les routes prérendues, il faut servir le HTML statique correspondant, pas le fallback.

Comportement attendu :
| URL | Fichier servi |
|---|---|
| `/` | `dist/index.html` |
| `/expertises` | `dist/expertises/index.html` |
| `/renovation-schaerbeek` | `dist/renovation-schaerbeek/index.html` |
| `/route-inconnue` | `dist/index.html` (React Router → 404) |

### Netlify

Créer `public/_redirects` :

```
/*   /index.html   200
```

Netlify sert les fichiers statiques en priorité, le fallback ne se déclenche que si aucun `index.html` correspondant.

### Vercel

Créer `vercel.json` à la racine :

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "cleanUrls": true
}
```

### Apache

Créer `public/.htaccess` :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache pour les assets hashés
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
</IfModule>

# HTML jamais mis en cache (contenu change à chaque build)
<FilesMatch "\.html$">
  Header set Cache-Control "no-cache, must-revalidate"
</FilesMatch>
```

### Nginx

```nginx
server {
  listen 443 ssl http2;
  server_name www.vericore.be;
  root /var/www/vericore/dist;
  index index.html;

  # Assets hashés — cache long
  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  # HTML — jamais en cache
  location ~ \.html$ {
    add_header Cache-Control "no-cache, must-revalidate";
  }

  # SPA fallback pour routes non prérendues
  location / {
    try_files $uri $uri/index.html $uri.html /index.html;
  }
}
```

---

## Redirections importantes

### www vs sans www

Choisir UN canonique et rediriger l'autre en 301.
Actuellement le code utilise `https://www.vericore.be` — donc rediriger `vericore.be` → `www.vericore.be`.

### Trailing slash

Le prerender génère `dist/expertises/index.html`. Selon le host :
- URL avec `/` final (`/expertises/`) → servie directement
- URL sans `/` final (`/expertises`) → doit être servie aussi

Vérifier après déploiement avec :
```bash
curl -I https://www.vericore.be/expertises
curl -I https://www.vericore.be/expertises/
```

Les deux doivent retourner 200 (idéalement) ou une 301 vers la version canonique.

### HTTP → HTTPS

Obligatoire pour SEO moderne. Certificat via Let's Encrypt / Cloudflare / host managé.

---

## Vérification post-déploiement

Checklist à passer immédiatement après mise en ligne :

- [ ] `curl -A Googlebot https://www.vericore.be/` → HTML contient `<h1>` et texte visible
- [ ] `curl -A Googlebot https://www.vericore.be/renovation-schaerbeek` → contient "Schaerbeek" dans le HTML
- [ ] `curl -I https://www.vericore.be/sitemap.xml` → 200 OK
- [ ] `curl -I https://www.vericore.be/robots.txt` → 200 OK
- [ ] Ouvrir dans un navigateur privé, désactiver JS → contenu toujours visible
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) sur homepage → Score mobile > 80
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) sur `/renovation-schaerbeek` → schémas détectés
- [ ] Vérifier partage Facebook/LinkedIn → image + titre + description corrects

---

## Variables d'environnement

Créer un `.env.production` (non commité) :

```bash
VITE_BASE_URL=https://www.vericore.be
VITE_EMAIL_SERVICE=...
VITE_EMAIL_API_KEY=...
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GSC_VERIFICATION=xxxxxxxxxxxxx
```

---

## Rollback

En cas de problème après déploiement :

```bash
# Le dossier dist/ précédent doit être conservé en backup
# Simple rollback = restaurer le dossier dist/ précédent
```

Configuration Netlify/Vercel gère automatiquement les rollbacks vers un déploiement précédent en 1 clic.

---

## Fréquence de rebuild

- **Contenu statique** : rebuild à chaque changement de code ou de contenu.
- **Nouveaux articles blog** : ajouter dans `src/data/blog.ts` puis ajouter l'URL dans `PRERENDER_ROUTES` de [vite.config.ts](../vite.config.ts) et dans le script `scripts/generate-seo-files.mjs`.
- **Nouvelles communes** : idem — ajouter dans les 2 fichiers.

Le prerender ajoute ~1 minute par 10 pages. Négligeable pour un build occasionnel.
