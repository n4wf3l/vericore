/**
 * Page Google Business Profile optimisée
 * Pour centraliser toutes les infos GBP et générer du contenu local
 */

import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { BASE_URL, COMPANY_INFO } from '../config/seo.config';
import { MapPin, Phone, Mail, Clock, Star, Navigation, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

const GBP_URL = 'https://www.google.com/maps/search/?api=1&query=Vericore+Jette';
const GBP_REVIEW_URL = 'https://www.google.com/maps/search/?api=1&query=Vericore+Jette';

export const GoogleBusinessPage: React.FC = () => {
  const seoConfig = {
    title: 'Notre Fiche Google Business | Vericore à Bruxelles',
    description: 'Retrouvez Vericore sur Google Maps. Coordonnées, avis clients et contact direct pour vos travaux à Bruxelles.',
    h1: 'Vericore sur Google Business',
    canonical: `${BASE_URL}/google-business`,
  };

  return (
    <>
      <SEOHead config={seoConfig} />
      <StructuredData type="LocalBusiness" />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-10 h-10 text-primary-600" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              Retrouvez-nous sur Google
            </h1>
            
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-8">
              Consultez notre fiche Google Business pour voir nos avis clients, photos de 
              réalisations et nous contacter directement
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() => window.open(GBP_URL, '_blank')}
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Voir notre fiche Google
              </Button>
            </div>
          </div>
        </section>

        {/* Infos principales */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.postalCode} ${COMPANY_INFO.address.city}`,
                  action: 'Itinéraire',
                  link: `https://www.google.com/maps/dir//${COMPANY_INFO.geo.latitude},${COMPANY_INFO.geo.longitude}`,
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  content: COMPANY_INFO.phone,
                  action: 'Appeler',
                  link: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: COMPANY_INFO.email,
                  action: 'Écrire',
                  link: `mailto:${COMPANY_INFO.email}`,
                },
                {
                  icon: Clock,
                  title: 'Horaires',
                  content: 'Lun-Ven: 8h-18h\nSam: 9h-15h',
                  action: 'Urgences 24/7',
                  link: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <item.icon className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {item.content}
                  </p>
                  <a
                    href={item.link}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.action} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <span className="text-4xl font-bold text-gray-900">5,0</span>
                <span className="text-gray-600">/5</span>
              </div>
              <p className="text-xl text-gray-700">
                Sur les avis Google déjà déposés
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Laissez-nous un avis
              </h2>
              <p className="text-gray-600 mb-6">
                Vous avez fait appel à nos services ? Partagez votre expérience sur Google.
              </p>
              <Button
                onClick={() => window.open(GBP_REVIEW_URL, '_blank')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                <Star className="w-5 h-5 mr-2" />
                Laisser un avis Google
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ GBP */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Questions sur notre fiche Google
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Comment trouver Vericore sur Google Maps ?',
                  answer: 'Recherchez "Vericore Bruxelles" ou "entreprise rénovation Bruxelles" sur Google Maps. Notre fiche apparaît avec nos coordonnées, avis et photos.',
                },
                {
                  question: 'Puis-je prendre rendez-vous via Google ?',
                  answer: 'Oui ! Notre fiche Google Business permet de nous contacter directement par téléphone, message ou via le formulaire de contact.',
                },
                {
                  question: 'Comment laisser un avis ?',
                  answer: 'Rendez-vous sur notre fiche Google, cliquez sur "Écrire un avis" et attribuez votre note. Nous vous en remercions par avance.',
                },
                {
                  question: 'Puis-je voir vos réalisations sur Google ?',
                  answer: 'Nous alimentons régulièrement notre fiche Google avec des photos de chantiers récents. Consultez l\'onglet "Photos" pour les découvrir.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Suivez-nous sur Google
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Restez informé de nos actualités, offres et nouvelles réalisations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open(GBP_URL, '_blank')}
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Voir notre fiche
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

export default GoogleBusinessPage;
