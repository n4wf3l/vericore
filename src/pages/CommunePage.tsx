/**
 * Template de page communale optimisée SEO
 * Ex: /renovation-schaerbeek, /renovation-evere, etc.
 */

import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import OptimizedImage from '../components/OptimizedImage';
import { generateCommuneSEO, COMPANY_INFO } from '../config/seo.config';
import Button from '../components/Button';
import { Phone, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';

/**
 * Page dédiée à une commune de Bruxelles
 */
export const CommunePage: React.FC = () => {
  const { commune } = useParams<{ commune: string }>();
  
  const communeName = commune
    ? commune
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Bruxelles';

  const seoConfig = generateCommuneSEO(communeName);

  // Services principaux
  const mainServices = [
    {
      name: 'Rénovation complète',
      icon: '🏗️',
      description: 'Rénovation de maisons et appartements à ' + communeName,
      link: `/renovation-${commune}`,
    },
    {
      name: 'Électricité',
      icon: '⚡',
      description: 'Installation et dépannage électrique',
      link: `/electricite-${commune}`,
    },
    {
      name: 'Plomberie',
      icon: '🔧',
      description: 'Plomberie et sanitaire',
      link: `/plomberie-${commune}`,
    },
    {
      name: 'Chauffage',
      icon: '🔥',
      description: 'Installation et entretien chauffage',
      link: `/chauffage-${commune}`,
    },
    {
      name: 'Menuiserie',
      icon: '🪵',
      description: 'Menuiserie intérieure et extérieure',
      link: `/menuiserie-${commune}`,
    },
    {
      name: 'Peinture',
      icon: '🎨',
      description: 'Peinture intérieure et extérieure',
      link: `/peinture-${commune}`,
    },
  ];

  // Quartiers de la commune
  const neighborhoods = getCommuneNeighborhoods(communeName);

  // Projets récents
  const recentProjects = [
    {
      title: `Rénovation appartement à ${communeName}`,
      image: `/images/projects/${commune}-1`,
      description: 'Rénovation complète d\'un appartement de 90m²',
    },
    {
      title: `Installation électrique ${communeName}`,
      image: `/images/projects/${commune}-2`,
      description: 'Mise aux normes électrique complète',
    },
    {
      title: `Salle de bain ${communeName}`,
      image: `/images/projects/${commune}-3`,
      description: 'Création d\'une salle de bain moderne',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead config={seoConfig} />
      <StructuredData type="LocalBusiness" />
      <StructuredData 
        type="Breadcrumb" 
        data={[
          { name: 'Accueil', url: 'https://www.vericore.be' },
          { name: 'Bruxelles', url: 'https://www.vericore.be/bruxelles' },
          { name: communeName, url: seoConfig.canonical },
        ]}
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="relative h-[400px] lg:h-[500px] bg-gradient-to-r from-primary-900 to-primary-700">
          <OptimizedImage
            src={`/images/communes/${commune}-hero`}
            alt={`Vue de ${communeName} - Vericore intervient dans toute la commune`}
            className="absolute inset-0 w-full h-full opacity-20"
            objectFit="cover"
            loading="eager"
          />
          
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
              Nos services à {communeName}
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
                    En savoir plus →
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
              Pourquoi choisir Vericore à {communeName} ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Proximité',
                  description: `Interventions rapides partout à ${communeName}`,
                  icon: MapPin,
                },
                {
                  title: 'Expertise',
                  description: '+10 ans d\'expérience à Bruxelles',
                  icon: CheckCircle2,
                },
                {
                  title: 'Disponibilité',
                  description: 'Service 24/7 pour urgences',
                  icon: Phone,
                },
                {
                  title: 'Garantie',
                  description: 'Garantie décennale sur tous travaux',
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
                Quartiers de {communeName} où nous intervenons
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

        {/* Projets récents */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nos réalisations à {communeName}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {recentProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin de travaux à {communeName} ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Devis gratuit sous 24h • Intervention rapide • Garantie décennale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s/g, '')}`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
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
