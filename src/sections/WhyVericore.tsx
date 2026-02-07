import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle } from '../components/Section';
import { Card, CardHeader, CardContent } from '../components/Card';
import { Shield, Clock, Award, Users, TrendingUp, Heart } from 'lucide-react';

const WhyVericore: React.FC = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Clock,
      key: 'availability'
    },
    {
      icon: Award,
      key: 'quality'
    },
    {
      icon: Shield,
      key: 'certification'
    },
    {
      icon: Users,
      key: 'team'
    },
    {
      icon: TrendingUp,
      key: 'transparency'
    },
    {
      icon: Heart,
      key: 'satisfaction'
    }
  ];

  const process = [
    {
      number: '01',
      key: 'contact'
    },
    {
      number: '02',
      key: 'visit'
    },
    {
      number: '03',
      key: 'planning'
    },
    {
      number: '04',
      key: 'execution'
    },
    {
      number: '05',
      key: 'reception'
    }
  ];

  return (
    <Section id="why-vericore" className="bg-gray-50">
      <SectionTitle
        subtitle={t('whyVericore.subtitle')}
        title={t('whyVericore.title')}
      />

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`whyVericore.reasons.${value.key}.title`)}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`whyVericore.reasons.${value.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('whyVericore.process.title')}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('whyVericore.process.description')}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600" 
               style={{ width: 'calc(100% - 120px)', marginLeft: '60px' }} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Number Badge */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {t(`whyVericore.process.steps.${step.key}.title`)}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`whyVericore.process.steps.${step.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyVericore;
