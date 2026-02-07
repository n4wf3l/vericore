import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { partners, type Partner } from '../data/partners';

const PartnerLogoStrip: React.FC = () => {
  const LogoCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative"
      >
        <div className="w-full h-full bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 flex items-center justify-center p-8 sm:p-10 group relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/30 group-hover:to-primary-100/30 transition-all duration-300 rounded-2xl" />
          
          {!imageError ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="relative z-10 max-w-full max-h-full w-full h-auto object-contain transition-all duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-600 font-bold text-2xl">
                  {partner.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 2 columns on mobile, 2 columns on desktop for exactly 2 partners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {partners.map((partner, index) => (
          <LogoCard key={partner.id} partner={partner} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PartnerLogoStrip;
