import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileCheck, MessageCircle, Award, Gem, Crown, Sparkles } from 'lucide-react';
import PlansTrioSlider from '../components/PlansTrioSlider';

const MaintenancePlansSection: React.FC = () => {
  const { t } = useTranslation();

  // Icon and color mapping
  const iconMap = { bronze: Award, silver: Gem, gold: Crown, premium: Sparkles };
  const accentColorMap = { bronze: 'amber', silver: 'slate', gold: 'yellow', premium: 'primary' };

  // Get plans from translations
  const plansData = t('plans.items', { returnObjects: true }) as Array<{
    id: string; name: string; badge: string; tagline: string; ideal: string;
    features: string[]; price: string; priceNote: string;
  }>;
  const plans = plansData.map(plan => ({
    ...plan,
    icon: iconMap[plan.id as keyof typeof iconMap],
    accentColor: accentColorMap[plan.id as keyof typeof accentColorMap]
  }));
  
  return (
    <section 
      id="abonnements" 
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-gray-50 to-white"
    >
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('plans.title')}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('plans.intro') }}
          />
        </motion.div>

        {/* Trio Slider */}
        <PlansTrioSlider plans={plans} />

        {/* Info Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Modalités d'intervention */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('plans.infoPanels.intervention.title')}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t('plans.infoPanels.intervention.description')}
            </p>
          </div>

          {/* Conditions */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('plans.infoPanels.conditions.title')}</h3>
            <ul className="space-y-3 text-gray-600">
              {(t('plans.infoPanels.conditions.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50"
          >
            <FileCheck className="w-5 h-5" />
            <span>{t('plans.ctas.requestQuote')}</span>
          </a>
          
          <a
            href="https://wa.me/32496847374"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('plans.ctas.whatsapp')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenancePlansSection;
