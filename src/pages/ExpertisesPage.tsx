import React from 'react';
import AboutSection from '../sections/AboutSection';
import ExpertisesSection from '../sections/ExpertisesSection';
import ContactSection from '../sections/ContactSection';

const ExpertisesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <ExpertisesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default ExpertisesPage;
