import React from 'react';
import { Shield, Award, FileCheck, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TrustStripMobile: React.FC = () => {
  const { t } = useTranslation();

  const trustItems = [
    {
      icon: Shield,
      label: t('mobile.trust.insured', { defaultValue: 'Assuré' }),
    },
    {
      icon: Award,
      label: t('mobile.trust.certified', { defaultValue: 'Certifié' }),
    },
    {
      icon: FileCheck,
      label: t('mobile.trust.clearQuote', { defaultValue: 'Devis clair' }),
    },
    {
      icon: Headphones,
      label: t('mobile.trust.support247', { defaultValue: '24/7' }),
    },
  ];

  return (
    <section className="lg:hidden py-6 bg-gradient-to-br from-primary-50 to-white border-y border-primary-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm font-semibold text-gray-800 leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStripMobile;
