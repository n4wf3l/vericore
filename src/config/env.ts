/**
 * Configuration centralisée des variables d'environnement
 * Utilisez ce fichier pour accéder aux variables d'environnement de manière typée
 */

export const env = {
  // URL de base (change selon l'environnement)
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
  
  // Email
  email: {
    service: import.meta.env.VITE_EMAIL_SERVICE || '',
    apiKey: import.meta.env.VITE_EMAIL_API_KEY || '',
    from: import.meta.env.VITE_EMAIL_FROM || 'contact@vericore.be',
    to: import.meta.env.VITE_EMAIL_TO || 'contact@vericore.be',
  },
  
  // Analytics
  analytics: {
    gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
    gscVerification: import.meta.env.VITE_GSC_VERIFICATION || '',
  },
  
  // Mode
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  debug: import.meta.env.VITE_DEBUG === 'true',
} as const;

// Helper pour logger uniquement en dev
export const devLog = (...args: any[]) => {
  if (env.debug) {
    console.log('[DEV]', ...args);
  }
};

// Helper pour vérifier si on est en local
export const isLocalhost = () => {
  return env.baseUrl.includes('localhost') || env.baseUrl.includes('127.0.0.1');
};
