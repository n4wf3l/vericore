import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { partners, type Partner } from '../data/partners';

const PartnerLogoStrip: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Duplicate partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  const LogoCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
    const [imageError, setImageError] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    return (
      <motion.div
        className="relative flex-shrink-0 w-40 h-24 mx-4"
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
      >
        <div className="w-full h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 group relative overflow-hidden">
          {!imageError ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-primary-600 font-bold text-lg">
                  {partner.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-700">{partner.name}</span>
            </div>
          )}

          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-10 pointer-events-none"
            >
              Partenaire
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex"
        animate={
          !isPaused && !prefersReducedMotion
            ? {
                x: [0, -1920], // Adjust based on total width
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear'
                  }
                }
              }
            : {}
        }
      >
        {duplicatedPartners.map((partner, index) => (
          <LogoCard key={`${partner.id}-${index}`} partner={partner} index={index} />
        ))}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default PartnerLogoStrip;
