/**
 * Template de page communale optimisée SEO
 * Ex: /renovation-schaerbeek, /renovation-evere, etc.
 */

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { generateCommuneSEO, COMPANY_INFO } from '../config/seo.config';
import Button from '../components/Button';
import { Phone, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';
import type { Lang } from '../data/serviceContent';
import { getCommuneLabels } from '../data/uiLabels';
import { goToContact } from '../lib/scrollToSection';

interface CommunePageProps {
  lang?: Lang;
}

/**
 * Page dédiée à une commune de Bruxelles
 */
export const CommunePage: React.FC<CommunePageProps> = ({ lang = 'fr' }) => {
  const { commune } = useParams<{ commune: string }>();
  const { i18n } = useTranslation();
  const labels = getCommuneLabels(lang);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang === 'fr' ? 'fr-BE' : lang === 'nl' ? 'nl-BE' : 'en';
  }, [i18n, lang]);

  const communeName = commune
    ? commune
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Bruxelles';

  const seoConfig = generateCommuneSEO(communeName, lang);

  const langPrefix = lang === 'fr' ? '' : `/${lang}`;

  // Services principaux (traduits via labels)
  const mainServices = labels.sections.serviceLinks.map(link => ({
    name: link.name,
    icon: link.icon,
    description: link.description + (link.linkPrefix === 'renovation' ? ` — ${communeName}` : ''),
    link: `${langPrefix}/${link.linkPrefix}-${commune}`,
  }));

  // Quartiers de la commune
  const neighborhoods = getCommuneNeighborhoods(communeName);

  const scrollToContact = () => goToContact();

  return (
    <>
      <SEOHead config={seoConfig} />
      <StructuredData type="LocalBusiness" />
      <StructuredData 
        type="Breadcrumb" 
        data={[
          { name: 'Accueil', url: 'https://vericore.be' },
          { name: 'Bruxelles', url: 'https://vericore.be/bruxelles' },
          { name: communeName, url: seoConfig.canonical },
        ]}
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative h-[400px] lg:h-[500px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden">
          <img
            src="/bg-worker.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-primary-700/40" aria-hidden="true" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>Bruxelles › {communeName}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {seoConfig.h1}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {seoConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Devis Gratuit 24h
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s/g, '')}`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp 24/7
              </Button>
            </div>
          </div>
        </section>

        {/* Services disponibles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {labels.sections.ourServices(communeName)}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <span className="inline-block mt-4 text-primary-600 font-medium group-hover:underline">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Vericore */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {labels.sections.whyUs(communeName)}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: labels.sections.proximity,
                  description: labels.sections.proximityDesc(communeName),
                  icon: MapPin,
                },
                {
                  title: labels.sections.expertise,
                  description: labels.sections.expertiseDesc,
                  icon: CheckCircle2,
                },
                {
                  title: labels.sections.availability,
                  description: labels.sections.availabilityDesc,
                  icon: Phone,
                },
                {
                  title: labels.sections.warranty,
                  description: labels.sections.warrantyDesc,
                  icon: CheckCircle2,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quartiers couverts */}
        {neighborhoods.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {labels.sections.neighborhoods(communeName)}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {labels.sections.finalCta(communeName)}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {labels.sections.finalCtaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                {labels.sections.finalCtaDevis}
              </Button>
              <Button
                onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s/g, '')}`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {labels.sections.finalCtaWhatsapp}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/**
 * Retourne les quartiers principaux d'une commune
 */
const getCommuneNeighborhoods = (commune: string): string[] => {
  const neighborhoods: Record<string, string[]> = {
    'Schaerbeek': ['Helmet', 'Terdelt', 'Azalée', 'Dailly', 'Liedts', 'Voltaire'],
    'Evere': ['Centre', 'Conscience', 'Parc Roi Baudouin'],
    'Ixelles': ['Flagey', 'Matonge', 'Châtelain', 'Bailli', 'ULB'],
    'Etterbeek': ['Cinquantenaire', 'UE', 'Square Marie-Louise'],
    'Uccle': ['Dieweg', 'Observatoire', 'Calevoet', 'Stalle', 'Wolvendael'],
    'Anderlecht': ['Midi', 'Cureghem', 'Erasme', 'Parc Astrid'],
    'Woluwe-Saint-Lambert': ['Tomberg', 'Roodebeek', 'Shopping'],
    'Woluwe-Saint-Pierre': ['Stockel', 'Woluwe Shopping', 'Parmentier'],
  };

  return neighborhoods[commune] || [];
};

export default CommunePage;
