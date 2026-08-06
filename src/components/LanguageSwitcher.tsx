import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'nl', name: 'Nederlands', flag: 'NL' },
  { code: 'en', name: 'English', flag: 'EN' }
];

/** Retire tout préfixe /nl ou /en du path pour retomber sur le path FR canonique */
const stripLangPrefix = (pathname: string): string => {
  if (pathname === '/nl' || pathname === '/en') return '/';
  if (pathname.startsWith('/nl/') || pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
};

const buildPathForLang = (pathname: string, lang: string): string => {
  const base = stripLangPrefix(pathname);
  if (lang === 'fr') return base || '/';
  return base === '/' ? `/${lang}` : `/${lang}${base}`;
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    const targetPath = buildPathForLang(location.pathname, code);
    localStorage.setItem('vericore-language', code);
    // Full page navigation pour recharger le HTML prérendu dans la bonne langue
    window.location.assign(targetPath + location.search + location.hash);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="w-6 h-6 flex items-center justify-center bg-primary-100 text-primary-600 rounded text-xs font-bold">
          {currentLanguage.flag}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
                    i18n.language === lang.code ? 'bg-primary-50' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center bg-primary-100 text-primary-600 rounded text-xs font-bold">
                      {lang.flag}
                    </span>
                    <span className={`font-medium ${
                      i18n.language === lang.code ? 'text-primary-600' : 'text-gray-700'
                    }`}>
                      {lang.name}
                    </span>
                  </div>
                  {i18n.language === lang.code && (
                    <Check className="w-5 h-5 text-primary-600" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
