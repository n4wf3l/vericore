/**
 * Template de page service locale optimisée SEO
 * Architecture 2026: Contenu structuré, E-E-A-T, conversion
 */

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { generateServiceSEO, COMPANY_INFO } from '../config/seo.config';
import Button from '../components/Button';
import { Phone, MessageSquare, CheckCircle2, MapPin, Clock, Shield } from 'lucide-react';
import type { ServiceSchema, FAQSchema } from '../types/seo';
import { getServiceContentByLang, SERVICE_CONTENT, type ServiceContent, type Lang } from '../data/serviceContent';
import { getCommuneContentByLang } from '../data/communeContent';
import { getServiceLabels } from '../data/uiLabels';

const WHATSAPP_URL = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\s|\+/g, '')}`;

const SERVICE_IMAGE: Record<string, string> = {
  renovation: '/installation-maintenance.png',
  electricite: '/eclairage.png',
  plomberie: '/plomberie.png',
  chauffage: '/chaudiere.png',
  climatisation: '/chaudiere.png',
  menuiserie: '/bg-worker.png',
  peinture: '/plafonnage.png',
  carrelage: '/bureaux.png',
};

const getServiceImage = (service: string): string =>
  SERVICE_IMAGE[service] || '/bg-worker.png';

interface ServicePageProps {
  service: string;
  city?: string;
  lang?: Lang;
}

/**
 * Composant réutilisable pour les pages services
 */
export const ServicePage: React.FC<ServicePageProps> = ({ service, city = 'Bruxelles', lang = 'fr' }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const labels = getServiceLabels(lang);

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang === 'fr' ? 'fr-BE' : lang === 'nl' ? 'nl-BE' : 'en';
  }, [i18n, lang]);

  // Configuration SEO dynamique
  const seoConfig = generateServiceSEO(service, city, lang);

  // Données structurées pour le service
  const serviceSchema: ServiceSchema = {
    name: `${service} à ${city}`,
    description: seoConfig.description,
    serviceType: service,
    provider: {
      name: 'Vericore SRL',
      url: 'https://vericore.be',
    },
    areaServed: [city, 'Bruxelles', 'Région de Bruxelles-Capitale'],
    availableChannel: {
      serviceUrl: seoConfig.canonical,
      availableLanguage: ['fr', 'nl', 'en'],
    },
  };

  // Contenu spécifique par service (dans la langue courante)
  const serviceContent = getServiceContent(service, city, lang);

  // FAQ spécifique au service
  const faqSchema: FAQSchema = {
    questions: serviceContent.faq,
  };

  const scrollToContact = () => {
    const existing = document.getElementById('contact');
    if (existing) {
      existing.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(lang === 'fr' ? '/#contact' : `/${lang}/#contact`);
    }
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
          { name: 'Accueil', url: 'https://vericore.be' },
          { name: 'Expertises', url: 'https://vericore.be/expertises' },
          { name: `${service} ${city}`, url: seoConfig.canonical },
        ]}
      />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section avec image optimisée */}
        <section className="relative h-[400px] lg:h-[500px] bg-gradient-to-r from-primary-900 to-primary-700 overflow-hidden">
          <img
            src={getServiceImage(service)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-primary-700/40" aria-hidden="true" />

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
                {labels.cta.devisShort}
              </Button>
              <Button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white lg:hidden"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {labels.cta.whatsappShort}
              </Button>

              <Button
                onClick={scrollToContact}
                className="hidden lg:inline-flex bg-white text-primary-700 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                {labels.cta.devisLong}
              </Button>
              <Button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="hidden lg:inline-flex bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {labels.cta.whatsappLong}
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
                <img
                  src={getServiceImage(service)}
                  alt={`Illustration ${service} - Vericore intervient à ${city}`}
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/2]"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {labels.sections.forWho}
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
              {labels.sections.areasCovered(city)}
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
              {labels.sections.process}
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
              {labels.sections.pricing}
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
              {labels.sections.faq}
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
              {labels.sections.finalCta(service, city)}
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
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
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

const FALLBACK_AREAS = [
  'Bruxelles centre', 'Schaerbeek', 'Evere', 'Ixelles', 'Etterbeek',
  'Uccle', 'Anderlecht', 'Molenbeek', 'Forest', 'Saint-Gilles', 'Woluwe',
];

const getServiceContent = (service: string, city: string, lang: Lang = 'fr') => {
  const serviceData: ServiceContent | undefined = getServiceContentByLang(service, lang) ?? SERVICE_CONTENT[service];
  const communeData = getCommuneContentByLang(city, lang);
  const isBruxellesCity = city.toLowerCase() === 'bruxelles';

  if (serviceData) {
    // Contexte commune : typologie + note locale + contexte chantier spécifique
    // Injecté aussi pour Bruxelles (chantier centre-ville = enjeu unique)
    const localParagraphs = communeData
      ? [
          isBruxellesCity ? null : communeData.typology,
          communeData.constructionContext,
          communeData.localNote,
        ].filter((p): p is string => Boolean(p))
      : [];

    const areasCovered = communeData
      ? [city, ...communeData.quartiers]
      : [city, ...FALLBACK_AREAS];

    return {
      heroSubtitle: serviceData.heroSubtitle(city),
      trustBadges: serviceData.trustBadges,
      aboutTitle: serviceData.aboutTitle(city),
      description: [...serviceData.description(city), ...localParagraphs],
      targetAudience: serviceData.targetAudience,
      areasCovered,
      process: serviceData.process,
      pricingFactors: serviceData.pricingFactors,
      faq: serviceData.faq(city),
    };
  }

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
      { title: 'Particuliers', description: `${service} pour maisons, appartements, rénovations complètes ou ponctuelles.` },
      { title: 'Professionnels', description: `${service} pour bureaux, commerces, locaux professionnels.` },
      { title: 'Syndics', description: `${service} pour copropriétés, parties communes, entretien régulier.` },
    ],
    areasCovered: [city, ...FALLBACK_AREAS],
    process: [
      { title: 'Contact', description: 'Appelez-nous ou demandez un devis en ligne' },
      { title: 'Devis gratuit', description: 'Visite sur place et estimation détaillée sous 24h' },
      { title: 'Intervention', description: 'Travaux réalisés par nos professionnels certifiés' },
      { title: 'Garantie', description: 'Garantie décennale et service après-vente' },
    ],
    pricingFactors: [
      { title: 'Type de travaux', description: 'Neuf, rénovation, dépannage - chaque intervention est unique' },
      { title: 'Surface et complexité', description: 'La taille du projet et sa complexité technique' },
      { title: 'Matériaux', description: 'Choix des matériaux et équipements (standard, premium)' },
      { title: 'Délais', description: 'Intervention standard ou urgente' },
    ],
    faq: [
      { question: `Quel est le délai pour obtenir un devis de ${service} à ${city} ?`, answer: `Nous vous fournissons un devis gratuit sous 24h après la visite sur place. Pour les demandes urgentes, nous pouvons intervenir le jour même.` },
      { question: `Intervenez-vous en urgence pour les dépannages de ${service} ?`, answer: `Oui, nous proposons un service d'urgence 24/7 pour tous les dépannages à ${city} et dans toute la région de Bruxelles.` },
      { question: `Quelle garantie offrez-vous sur vos travaux de ${service} ?`, answer: `Tous nos travaux sont couverts par une garantie décennale. Nous sommes assurés et nos techniciens sont certifiés.` },
      { question: `Quel est le coût moyen pour des travaux de ${service} à ${city} ?`, answer: `Le coût varie selon la nature des travaux, la surface et les matériaux. Contactez-nous pour un devis gratuit et personnalisé.` },
      { question: `Travaillez-vous aussi en dehors de ${city} ?`, answer: `Oui, nous intervenons dans toute la Région de Bruxelles-Capitale et ses environs (Brabant wallon et flamand).` },
    ],
  };
};

export default ServicePage;
