import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { scrollToSection, getWhatsAppUrl } from '../../lib/scrollToSection';

const MobileStickyCTA: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;
          
          // Only update if scroll difference is significant (> 5px) to avoid jitter
          if (Math.abs(scrollDifference) > 5) {
            // Show CTA when scrolling down and past 300px
            if (scrollDifference > 0 && currentScrollY > 300) {
              setIsVisible(true);
            }
            // Hide CTA when scrolling up or near top
            else if (scrollDifference < 0 || currentScrollY < 100) {
              setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleQuoteClick = () => {
    scrollToSection('contact', 80);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = t('common.phone');
    const message = t('mobile.cta.whatsappMessage', { defaultValue: 'Bonjour, je souhaite obtenir un devis' });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
            {/* Safe area padding for iOS */}
            <div className="px-4 py-3 pb-safe">
              <div className="flex gap-2">
                {/* Primary CTA - Demander un devis */}
                <button
                  onClick={handleQuoteClick}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold px-4 py-3.5 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  aria-label={t('mobile.cta.getQuote', { defaultValue: 'Demander un devis' })}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm sm:text-base">{t('mobile.cta.getQuote', { defaultValue: 'Demander un devis' })}</span>
                </button>

                {/* Secondary CTA - WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-shrink-0 bg-green-500 text-white font-semibold px-4 py-3.5 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  aria-label={t('mobile.cta.whatsapp24', { defaultValue: 'WhatsApp 24/7' })}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">24/7</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
