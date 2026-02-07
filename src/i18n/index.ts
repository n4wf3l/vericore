import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fr } from './locales/fr';
import { nl } from './locales/nl';
import { en } from './locales/en';

const resources = {
  fr: { translation: fr },
  nl: { translation: nl },
  en: { translation: en }
};

// Get saved language from localStorage or default to French
const savedLanguage = localStorage.getItem('vericore-language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'fr',
    debug: false, // Désactiver les logs en production
    interpolation: {
      escapeValue: false
    }
  });

// Update html lang attribute
document.documentElement.lang = savedLanguage;

// Listen for language changes and update html lang + localStorage
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem('vericore-language', lng);
});

export default i18n;
