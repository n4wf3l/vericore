import React from 'react';
import AboutSection from '../sections/AboutSection';
import FAQ from '../sections/FAQ';
import ContactSection from '../sections/ContactSection';

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <FAQ />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default FAQPage;
