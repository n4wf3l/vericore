import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import logo from '../assets/white-logo.png';

interface SplashScreenProps {
  onLanguageSelect: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLanguageSelect }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    i18n.changeLanguage(langCode);
    
    // Delay to show selection animation before closing splash
    setTimeout(() => {
      onLanguageSelect();
    }, 500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={onLanguageSelect}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden cursor-pointer"
        style={{
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          background: 'rgba(10, 15, 30, 0.72)'
        }}
      >
        {/* Subtle gradient overlay for depth */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60 pointer-events-none"
        />

        {/* Glass container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-2xl mx-4 px-6 py-10 sm:px-10 sm:py-14 rounded-3xl cursor-default"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-8 sm:mb-10"
          >
            <img 
              src={logo} 
              alt="Vericore Logo" 
              className="w-40 sm:w-52 md:w-64 h-auto mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
              Choisissez votre langue
            </h2>
            <p className="text-white/70 text-base sm:text-lg font-medium">
              Kies uw taal • Choose your language
            </p>
          </motion.div>

          {/* Language Buttons - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.35 + index * 0.08, 
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLanguageSelect(lang.code)}
                className="relative w-full sm:w-56 group"
                style={{
                  background: selectedLanguage === lang.code 
                    ? 'rgba(59, 130, 246, 0.25)' 
                    : 'rgba(255, 255, 255, 0.08)',
                  border: selectedLanguage === lang.code
                    ? '2px solid rgba(59, 130, 246, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  boxShadow: selectedLanguage === lang.code
                    ? '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.12) 0%, transparent 70%)'
                  }}
                />

                <div className="relative flex items-center justify-between px-6 py-5 sm:px-6 sm:py-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-3xl sm:text-4xl">{lang.flag}</span>
                    <span className="text-white font-semibold text-base sm:text-lg drop-shadow-sm">
                      {lang.name}
                    </span>
                  </div>
                  
                  {selectedLanguage === lang.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-lg"
                    >
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Subtle hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/50 text-xs sm:text-sm text-center mt-6 sm:mt-8 font-medium"
          >
            Vous pourrez changer la langue à tout moment
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
