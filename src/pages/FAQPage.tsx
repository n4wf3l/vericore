import React from 'react';
import FAQ from '../sections/FAQ';
import ContactSection from '../sections/ContactSection';

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <FAQ />
      <ContactSection />
    </div>
  );
};

export default FAQPage;
