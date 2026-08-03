import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import prerender from '@prerenderer/rollup-plugin'

const SERVICES = [
  'renovation', 'electricite', 'plomberie', 'chauffage',
  'climatisation', 'menuiserie', 'peinture', 'carrelage',
]

const COMMUNES_SLUGS = [
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

const PRERENDER_ROUTES = [
  '/',
  '/expertises',
  '/projects',
  '/faq',
  '/blog',
  '/garanties',
  '/mentions-legales',
  '/google-business',
  ...SERVICES.map(s => `/${s}-bruxelles`),
  ...COMMUNES_SLUGS.map(c => `/renovation-${c}`),
  ...BLOG_POSTS.map(slug => `/blog/${slug}`),
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
          .replace(/https?:\/\/localhost:\d+/g, 'https://www.vericore.be')
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
