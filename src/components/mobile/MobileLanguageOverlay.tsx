import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface MobileLanguageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileLanguageOverlay: React.FC<MobileLanguageOverlayProps> = ({ isOpen, onClose }) => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white lg:hidden"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              {t('nav.selectLanguage', { defaultValue: 'Choisir la langue' })}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={t('nav.closeMenu')}
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Language Options */}
          <div className="p-6">
            <div className="space-y-3">
              {languages.map((lang, index) => {
                const isActive = i18n.language === lang.code;
                
                return (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${
                      isActive
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                      <div className="text-left">
                        <div className={`font-semibold text-lg ${isActive ? 'text-primary-700' : 'text-gray-900'}`}>
                          {lang.name}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Footer hint */}
          <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
            <p className="text-center text-sm text-gray-600">
              {t('nav.languageHint', { defaultValue: 'La langue sera appliquée immédiatement' })}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileLanguageOverlay;
