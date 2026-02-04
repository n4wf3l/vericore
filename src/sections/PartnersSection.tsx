import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import PartnerLogoStrip from '../components/PartnerLogoStrip';

const PartnersSection: React.FC = () => {
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
              Nos partenariats
            </p>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Des Partenaires de Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec des partenaires et fournisseurs reconnus pour garantir qualité, conformité et réactivité.
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

        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Survolez pour voir les logos en couleur
        </motion.p>
      </div>
    </section>
  );
};

export default PartnersSection;
