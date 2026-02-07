import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import PartnerLogoStrip from '../components/PartnerLogoStrip';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-primary-600" />
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
              {t('partners.subtitle')}
            </p>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {t('partners.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('partners.description')}
          </p>
        </motion.div>

        {/* Logo Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PartnerLogoStrip />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
