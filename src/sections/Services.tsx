import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Section';
import { Card, CardHeader, CardContent } from '../components/Card';
import { services } from '../data/content';
import type { Service } from '../data/content';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'renovation' | 'maintenance' | 'specialty'>('all');

  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'renovation', label: 'Rénovation' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'specialty', label: 'Spécialités' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <Section id="services" className="bg-gray-50">
      <SectionTitle
        subtitle="Nos expertises"
        title="Services de Rénovation & Maintenance"
      />

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {filteredServices.map((service: Service, index: number) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-primary-600 font-semibold hover:gap-2 transition-all group/link"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-6 text-lg">
          Vous ne trouvez pas ce que vous cherchez ?
        </p>
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contactez-nous pour un projet sur mesure
          </motion.button>
        </a>
      </motion.div>
    </Section>
  );
};

export default Services;
