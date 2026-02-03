import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../components/Section';
import ExpertiseCard from '../components/ExpertiseCard';
import ExpertisePopover from '../components/ExpertisePopover';
import { expertises } from '../data/expertises';
import { useHoverCapable } from '../hooks/useHoverCapable';

const ExpertisesSection: React.FC = () => {
  const [activeExpertise, setActiveExpertise] = useState<{
    id: string;
    element: HTMLElement;
  } | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const isHoverCapable = useHoverCapable();

  const handleHoverStart = useCallback((id: string, element: HTMLElement) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Delay opening on hover (desktop only)
    const delay = isHoverCapable ? 200 : 0;
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveExpertise({ id, element });
    }, delay);
  }, [isHoverCapable]);

  const handleHoverEnd = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Delay closing to allow moving from card to popup
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveExpertise(null);
    }, 150);
  }, []);

  const handlePopoverClose = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveExpertise(null);
  }, []);

  const activeExpertiseData = activeExpertise
    ? expertises.find((e) => e.id === activeExpertise.id)
    : null;

  return (
    <Section id="expertises" className="bg-gradient-to-b from-gray-900 to-slate-900 text-white">
      <SectionTitle
        subtitle="Nos expertises"
        title="Une approche professionnelle pensée pour la gestion immobilière"
        className="text-white"
      />

      {/* Instruction text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-gray-400 text-sm md:text-base">
          <span className="hidden md:inline">Survolez une carte pour voir les détails</span>
          <span className="md:hidden">Touchez une carte pour voir les détails</span>
        </p>
      </motion.div>

      {/* Expertises Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {expertises.map((expertise, index) => (
          <ExpertiseCard
            key={expertise.id}
            title={expertise.title}
            teaser={expertise.teaser}
            description={expertise.description}
            icon={expertise.icon}
            delay={index * 0.1}
            onHoverStart={(element) => handleHoverStart(expertise.id, element)}
            onHoverEnd={handleHoverEnd}
            isActive={activeExpertise?.id === expertise.id}
          />
        ))}
      </div>

      {/* Portal Popover */}
      {activeExpertiseData && activeExpertise && (
        <ExpertisePopover
          isOpen={true}
          anchorElement={activeExpertise.element}
          title={activeExpertiseData.title}
          teaser={activeExpertiseData.teaser}
          description={activeExpertiseData.description}
          icon={activeExpertiseData.icon}
          onClose={handlePopoverClose}
        />
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-gray-300 text-lg mb-6">
          Besoin d'un accompagnement sur mesure ?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50"
        >
          Discutons de votre projet
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </a>
      </motion.div>
    </Section>
  );
};

export default ExpertisesSection;
