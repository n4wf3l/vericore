import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import TrustStripMobile from '../components/mobile/TrustStripMobile';
import AboutSection from '../sections/AboutSection';
import MaintenancePlansSection from '../sections/MaintenancePlansSection';
import WhyVericore from '../sections/WhyVericore';
import ContactSection from '../sections/ContactSection';
import PartnersSection from '../sections/PartnersSection';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

const HomePage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== '#contact') return;
    const scrollWhenReady = () => {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else setTimeout(scrollWhenReady, 100);
    };
    scrollWhenReady();
  }, [hash]);

  return (
    <>
      <SEOHead />
      <StructuredData type="LocalBusiness" />
      <StructuredData
        type="WebPage"
        data={{
          name: 'Vericore - Maintenance & Rénovation de Bâtiments à Bruxelles',
          description:
            'Spécialiste en maintenance et rénovation de bâtiments à Bruxelles. Service 24h/7, devis gratuit.',
          url: 'https://vericore.be',
        }}
      />
      <StructuredData
        type="FAQPage"
        data={{
          questions: [
            {
              question: 'Dans quelles zones Vericore intervient-il ?',
              answer:
                "Nous intervenons dans les 19 communes de la Région de Bruxelles-Capitale, ainsi que dans les communes limitrophes du Brabant flamand et du Brabant wallon.",
            },
            {
              question: 'Proposez-vous des interventions d’urgence 24/7 ?',
              answer:
                "Oui. Notre service d'urgence 24h/7 couvre plomberie, électricité et chauffage. Nous intervenons sous 45 à 90 minutes selon la gravité et l'horaire.",
            },
            {
              question: 'Comment obtenir un devis ?',
              answer:
                "Contactez-nous par téléphone, WhatsApp ou via le formulaire du site. Nous fixons une visite technique gratuite et vous transmettons un devis détaillé sous 24 heures.",
            },
            {
              question: 'Travaillez-vous avec les syndics et copropriétés ?',
              answer:
                "Oui. Nous gérons régulièrement des chantiers en parties communes, entretiens périodiques et travaux votés en AG, avec devis contradictoires et rapports d'intervention.",
            },
            {
              question: 'Vos travaux sont-ils garantis ?',
              answer:
                "Tous nos travaux sont couverts par la garantie décennale conformément à la législation belge, et nous sommes assurés en responsabilité civile professionnelle.",
            },
          ],
        }}
      />
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
