import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Section';
import { Card, CardContent } from '../components/Card';
import { testimonials } from '../data/content';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <SectionTitle
        subtitle="Témoignages clients"
        title="Ce Que Disent Nos Clients"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full relative overflow-visible">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <CardContent className="pt-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Trust Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Rejoignez nos clients satisfaits
        </h3>
        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
          Plus de 500 projets réalisés avec succès à Bruxelles. 
          Faites-nous confiance pour votre prochain projet de rénovation.
        </p>
        <a href="#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Commencer votre projet
          </motion.button>
        </a>
      </motion.div>
    </Section>
  );
};

export default Testimonials;
