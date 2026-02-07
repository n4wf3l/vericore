import React from 'react';
import ExpertisesSection from '../sections/ExpertisesSection';
import ContactSection from '../sections/ContactSection';

const ExpertisesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <ExpertisesSection />
      <ContactSection />
    </div>
  );
};

export default ExpertisesPage;
