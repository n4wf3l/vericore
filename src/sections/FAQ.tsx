import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Section';
import Accordion from '../components/Accordion';
import { faqs } from '../data/content';
import { MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <Section id="faq" className="bg-gray-50">
      <SectionTitle
        subtitle="Questions fréquentes"
        title="Vous Avez des Questions ?"
      />

      <div className="max-w-4xl mx-auto">
        <Accordion items={faqs} />

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg text-center"
        >
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est disponible pour répondre à toutes vos questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+32396847374">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Appelez-nous
              </motion.button>
            </a>
            <a 
              href="https://wa.me/32396847374" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all w-full sm:w-auto"
              >
                WhatsApp
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FAQ;
