# Installation des dépendances SEO

## Dépendances à installer

```bash
# Dépendances production
npm install react-markdown

# Dépendances développement (optionnelles mais recommandées)
npm install -D rollup-plugin-visualizer
npm install -D vite-plugin-compression
npm install -D vite-plugin-imagetools sharp

# Pour la génération d'images optimisées
npm install -D sharp
```

## Mise à jour du package.json

Ajouter ces scripts dans la section `"scripts"` :

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "build:seo": "node scripts/generate-seo-files.mjs && npm run build",
    "preview": "vite preview",
    "lint": "eslint .",
    "analyze": "vite build --mode analyze"
  }
}
```

## Commandes disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur http://localhost:3000

### Build production
```bash
npm run build
```
Compile le projet pour la production dans `/dist`

### Build avec SEO
```bash
npm run build:seo
```
Génère sitemap.xml + robots.txt puis compile

### Analyser les bundles
```bash
npm run analyze
```
Génère un rapport visuel de la taille des bundles dans `/dist/stats.html`

### Prévisualiser le build
```bash
npm run preview
```
Lance un serveur local pour tester le build de production

## Variables d'environnement

Créer un fichier `.env` à la racine :

```env
# URL de base du site (production)
VITE_BASE_URL=https://www.vericore.be

# Google Analytics (optionnel)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Google Search Console (optionnel)
VITE_GSC_VERIFICATION=votre_code_verification

# Mode debug
VITE_DEBUG=false
```

Créer `.env.development` pour le développement :

```env
VITE_BASE_URL=http://localhost:3000
VITE_DEBUG=true
```

## Vérification de l'installation

```bash
# Vérifier les dépendances installées
npm list

# Vérifier la compilation TypeScript
npm run build

# Tester la génération des fichiers SEO
node scripts/generate-seo-files.mjs
```

## Structure finale attendue

Après installation et build, vous devriez avoir :

```
dist/
├── index.html
├── sitemap.xml          # ✅ Généré automatiquement
├── robots.txt           # ✅ Généré automatiquement
├── stats.html           # ✅ Analyse bundles (si analyze)
├── assets/
│   ├── index-[hash].js
│   ├── react-vendor-[hash].js
│   └── ui-vendor-[hash].js
└── images/
```

## Dépannage

### Erreur "Cannot find module sharp"
```bash
npm install -D sharp
```

### Erreur "rollup-plugin-visualizer not found"
```bash
npm install -D rollup-plugin-visualizer
```

### Erreur TypeScript sur les imports
Vérifier que `tsconfig.json` contient :
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true
  }
}
```

### Module "fs" non trouvé
C'est normal dans Vite - les scripts utilisant `fs` doivent être dans `/scripts` et lancés avec Node.js :
```bash
node scripts/generate-seo-files.mjs
```
