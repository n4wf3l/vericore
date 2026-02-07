import React from 'react';
import Hero from '../sections/Hero';
import TrustStripMobile from '../components/mobile/TrustStripMobile';
import AboutSection from '../sections/AboutSection';
import MaintenancePlansSection from '../sections/MaintenancePlansSection';
import WhyVericore from '../sections/WhyVericore';
import ContactSection from '../sections/ContactSection';
import PartnersSection from '../sections/PartnersSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustStripMobile />
      <AboutSection />
      <MaintenancePlansSection />
      <WhyVericore />
      <ContactSection />
      <PartnersSection />
    </>
  );
};

export default HomePage;
