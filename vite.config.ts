import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import prerender from '@prerenderer/rollup-plugin'

// URL slugs par langue et par service (doit rester synchro avec src/data/serviceContent.ts)
const SERVICE_SLUGS_BY_LANG: Record<string, Record<string, string>> = {
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
}

const SERVICE_KEYS = Object.keys(SERVICE_SLUGS_BY_LANG.fr)

const CITY_SLUGS = [
  'bruxelles',
  'anderlecht', 'auderghem', 'berchem-sainte-agathe',
  'etterbeek', 'evere', 'forest', 'ganshoren', 'ixelles', 'jette',
  'koekelberg', 'molenbeek-saint-jean', 'saint-gilles', 'saint-josse-ten-noode',
  'schaerbeek', 'uccle', 'watermael-boitsfort', 'woluwe-saint-lambert', 'woluwe-saint-pierre',
]

const BLOG_POSTS = [
  'cout-renovation-bruxelles-2026',
  'electricite-mise-aux-normes-rgie-bruxelles',
  '10-erreurs-renovation-eviter',
]

const STATIC_PAGES = [
  '/',
  '/expertises',
  '/projects',
  '/faq',
  '/blog',
  '/garanties',
  '/mentions-legales',
  '/google-business',
]

/** Génère toutes les URLs métier-commune pour une langue donnée. */
const generateServiceCityRoutes = (lang: string): string[] => {
  const slugs = SERVICE_SLUGS_BY_LANG[lang]
  const prefix = lang === 'fr' ? '' : `/${lang}`
  const routes: string[] = []
  SERVICE_KEYS.forEach(key => {
    const serviceSlug = slugs[key]
    CITY_SLUGS.forEach(city => {
      routes.push(`${prefix}/${serviceSlug}-${city}`)
    })
  })
  return routes
}

const withLangPrefix = (routes: string[], prefix: string) =>
  routes.map(r => (r === '/' ? `/${prefix}` : `/${prefix}${r}`))

const PRERENDER_ROUTES = [
  // Pages statiques (3 langues)
  ...STATIC_PAGES,
  ...withLangPrefix(STATIC_PAGES, 'nl'),
  ...withLangPrefix(STATIC_PAGES, 'en'),
  // Blog articles (3 langues)
  ...BLOG_POSTS.map(slug => `/blog/${slug}`),
  ...BLOG_POSTS.map(slug => `/nl/blog/${slug}`),
  ...BLOG_POSTS.map(slug => `/en/blog/${slug}`),
  // Landing pages métier × commune (8 × 19 × 3 = 456 URLs)
  ...generateServiceCityRoutes('fr'),
  ...generateServiceCityRoutes('nl'),
  ...generateServiceCityRoutes('en'),
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
    prerender({
      routes: PRERENDER_ROUTES,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 4,
        renderAfterTime: 2500,
        headless: true,
        inject: true,
      },
      postProcess(rendered: { html: string; route: string }) {
        rendered.html = rendered.html
          .replace(
            /<meta name="google-site-verification" content="VOTRE_CODE_ICI"\s*\/?>/,
            ''
          )
          .replace(/https?:\/\/localhost:\d+/g, 'https://vericore.be')
      },
    }),
  ],

  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'i18n-vendor': ['react-i18next', 'i18next'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    reportCompressedSize: true,
  },

  server: {
    port: 3000,
    open: false,
    warmup: {
      clientFiles: [
        './src/App.tsx',
        './src/pages/**/*.tsx',
        './src/components/**/*.tsx',
      ],
    },
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-i18next',
      'i18next',
    ],
  },

  assetsInclude: ['**/*.webp', '**/*.avif'],
})
