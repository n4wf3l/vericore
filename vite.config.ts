import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Analyser la taille des bundles en build
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  
  // Optimisation du build
  build: {
    // Minification avancée
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    
    // Code splitting optimisé
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks pour le cache long-terme
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'i18n-vendor': ['react-i18next', 'i18next'],
        },
        // Nommage des chunks pour le cache
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    
    // Optimiser les chunks
    chunkSizeWarningLimit: 1000,
    
    // Source maps en production (optionnel, désactiver pour plus de perfs)
    sourcemap: false,
    
    // Compression Brotli recommandée
    reportCompressedSize: true,
  },
  
  // Optimisation du serveur de dev
  server: {
    port: 3000,
    open: false,
    // Précharger les modules
    warmup: {
      clientFiles: [
        './src/App.tsx',
        './src/pages/**/*.tsx',
        './src/components/**/*.tsx',
      ],
    },
  },
  
  // Optimisations générales
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
  
  // Assets
  assetsInclude: ['**/*.webp', '**/*.avif'],
})
