import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface LanguagePickerMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const languages = [
  { code: 'fr', name: 'Français', flag: 'FR' },
  { code: 'nl', name: 'Nederlands', flag: 'NL' },
  { code: 'en', name: 'English', flag: 'EN' }
];

const LanguagePickerMobile: React.FC<LanguagePickerMobileProps> = ({ isOpen, onClose }) => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    onClose();
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              {t('nav.language')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Language Options */}
          <div className="p-6 space-y-4">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all min-h-[72px] ${
                  i18n.language === lang.code
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold ${
                    i18n.language === lang.code
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {lang.flag}
                  </div>
                  <span className={`text-xl font-semibold ${
                    i18n.language === lang.code ? 'text-primary-600' : 'text-gray-700'
                  }`}>
                    {lang.name}
                  </span>
                </div>
                {i18n.language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Check className="w-7 h-7 text-primary-600" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguagePickerMobile;
