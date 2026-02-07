/**
 * Template de page service locale optimisée SEO
 * Architecture 2026: Contenu structuré, E-E-A-T, conversion
 */

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import OptimizedImage from '../components/OptimizedImage';
import { generateServiceSEO } from '../config/seo.config';
import Button from '../components/Button';
import { Phone, MessageSquare, CheckCircle2, MapPin, Clock, Shield } from 'lucide-react';
import type { ServiceSchema, FAQSchema } from '../types/seo';

interface ServicePageProps {
  service: string;
  city?: string;
}

/**
 * Composant réutilisable pour les pages services
 */
export const ServicePage: React.FC<ServicePageProps> = ({ service, city = 'Bruxelles' }) => {
  const { t } = useTranslation();
  
  // Configuration SEO dynamique
  const seoConfig = generateServiceSEO(service, city);

  // Données structurées pour le service
  const serviceSchema: ServiceSchema = {
    name: `${service} à ${city}`,
    description: seoConfig.description,
    serviceType: service,
    provider: {
      name: 'Vericore SRL',
      url: 'https://www.vericore.be',
    },
    areaServed: [city, 'Bruxelles', 'Région de Bruxelles-Capitale'],
    availableChannel: {
      serviceUrl: seoConfig.canonical,
      availableLanguage: ['fr', 'nl', 'en'],
    },
  };

  // Contenu spécifique par service
  const serviceContent = getServiceContent(service, city);

  // FAQ spécifique au service
  const faqSchema: FAQSchema = {
    questions: serviceContent.faq,
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* SEO Head */}
      <SEOHead config={seoConfig} />
      
      {/* Structured Data */}
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="FAQPage" data={faqSchema} />
      <StructuredData type="LocalBusiness" />
      <StructuredData 
        type="Breadcrumb" 
        data={[
          { name: 'Accueil', url: 'https://www.vericore.be' },
          { name: 'Services', url: 'https://www.vericore.be/services' },
          { name: `${service} ${city}`, url: seoConfig.canonical },
        ]}
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section avec image optimisée */}
        <section className="relative h-[400px] lg:h-[500px] bg-gradient-to-r from-primary-900 to-primary-700">
          <OptimizedImage
            src={`/images/services/${service}-hero`}
            alt={`${service} professionnelle à ${city} - Vericore`}
            className="absolute inset-0 w-full h-full opacity-30"
            objectFit="cover"
            loading="eager"
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {seoConfig.h1}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {serviceContent.heroSubtitle}
            </p>
            
            {/* CTA Hero */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary-700 hover:bg-gray-100 lg:hidden"
              >
                <Phone className="w-5 h-5 mr-2" />
                Devis Gratuit 24h
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/32470123456`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white lg:hidden"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp 24/7
              </Button>
              
              {/* Desktop */}
              <Button 
                onClick={scrollToContact}
                className="hidden lg:inline-flex bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Devis Gratuit sous 24h
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/32470123456`, '_blank')}
                className="hidden lg:inline-flex bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contactez-nous sur WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Badges de confiance */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceContent.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-center">
                  <badge.icon className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-sm lg:text-base font-medium text-gray-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description du service */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {serviceContent.aboutTitle}
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  {serviceContent.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div>
                <OptimizedImage
                  src={`/images/services/${service}-detail`}
                  alt={`Exemple de ${service} réalisée à ${city}`}
                  className="rounded-lg shadow-xl"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Pour qui ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceContent.targetAudience.map((target, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {target.title}
                  </h3>
                  <p className="text-gray-600">{target.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones couvertes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <MapPin className="w-8 h-8 inline-block mr-2 text-primary-600" />
              Zones couvertes à Bruxelles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceContent.areasCovered.map((area, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-primary-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Notre processus en 4 étapes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceContent.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facteurs de prix */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Facteurs influençant le prix
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceContent.pricingFactors.map((factor, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {serviceContent.faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin de {service} à {city} ?
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
                Demander un devis gratuit
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/32470123456`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp 24/7
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/**
 * Fonction pour récupérer le contenu spécifique à chaque service
 * À personnaliser pour chaque service
 */
const getServiceContent = (service: string, city: string) => {
  // Contenu par défaut (à personnaliser selon le service)
  return {
    heroSubtitle: `Expert en ${service} à ${city}. Devis gratuit sous 24h, intervention rapide, garantie décennale.`,
    
    trustBadges: [
      { icon: Clock, text: 'Intervention 24/7' },
      { icon: Shield, text: 'Garantie décennale' },
      { icon: CheckCircle2, text: 'Devis gratuit' },
      { icon: MapPin, text: `Partout à ${city}` },
    ],
    
    aboutTitle: `${service} professionnelle à ${city}`,
    
    description: [
      `Vericore est votre partenaire de confiance pour tous vos travaux de ${service} à ${city} et dans toute la Région de Bruxelles-Capitale.`,
      `Avec plus de 10 ans d'expérience, notre équipe de professionnels certifiés intervient rapidement pour tous vos besoins en ${service}, qu'il s'agisse de travaux neufs, de rénovation ou de dépannage d'urgence.`,
      `Nous garantissons un travail de qualité, conforme aux normes belges, avec une garantie décennale pour votre tranquillité d'esprit.`,
    ],
    
    targetAudience: [
      {
        title: 'Particuliers',
        description: `${service} pour maisons, appartements, rénovations complètes ou ponctuelles.`,
      },
      {
        title: 'Professionnels',
        description: `${service} pour bureaux, commerces, locaux professionnels.`,
      },
      {
        title: 'Syndics',
        description: `${service} pour copropriétés, parties communes, entretien régulier.`,
      },
    ],
    
    areasCovered: [
      city,
      'Bruxelles centre',
      'Schaerbeek',
      'Evere',
      'Ixelles',
      'Etterbeek',
      'Uccle',
      'Anderlecht',
      'Molenbeek',
      'Forest',
      'Saint-Gilles',
      'Woluwe',
    ],
    
    process: [
      {
        title: 'Contact',
        description: 'Appelez-nous ou demandez un devis en ligne',
      },
      {
        title: 'Devis gratuit',
        description: 'Visite sur place et estimation détaillée sous 24h',
      },
      {
        title: 'Intervention',
        description: 'Travaux réalisés par nos professionnels certifiés',
      },
      {
        title: 'Garantie',
        description: 'Garantie décennale et service après-vente',
      },
    ],
    
    pricingFactors: [
      {
        title: 'Type de travaux',
        description: 'Neuf, rénovation, dépannage - chaque intervention est unique',
      },
      {
        title: 'Surface et complexité',
        description: 'La taille du projet et sa complexité technique',
      },
      {
        title: 'Matériaux',
        description: 'Choix des matériaux et équipements (standard, premium)',
      },
      {
        title: 'Délais',
        description: 'Intervention standard ou urgente',
      },
    ],
    
    faq: [
      {
        question: `Quel est le délai pour obtenir un devis de ${service} à ${city} ?`,
        answer: `Nous vous fournissons un devis gratuit sous 24h après la visite sur place. Pour les demandes urgentes, nous pouvons intervenir le jour même.`,
      },
      {
        question: `Intervenez-vous en urgence pour les dépannages de ${service} ?`,
        answer: `Oui, nous proposons un service d'urgence 24/7 pour tous les dépannages à ${city} et dans toute la région de Bruxelles.`,
      },
      {
        question: `Quelle garantie offrez-vous sur vos travaux de ${service} ?`,
        answer: `Tous nos travaux sont couverts par une garantie décennale. Nous sommes assurés et nos techniciens sont certifiés.`,
      },
      {
        question: `Quel est le coût moyen pour des travaux de ${service} à ${city} ?`,
        answer: `Le coût varie selon la nature des travaux, la surface et les matériaux. Contactez-nous pour un devis gratuit et personnalisé.`,
      },
      {
        question: `Travaillez-vous aussi en dehors de ${city} ?`,
        answer: `Oui, nous intervenons dans toute la Région de Bruxelles-Capitale et ses environs (Brabant wallon et flamand).`,
      },
    ],
  };
};

export default ServicePage;
