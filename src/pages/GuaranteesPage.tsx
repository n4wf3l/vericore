/**
 * Page Garanties et Assurances
 * Pour renforcer la crédibilité et le E-E-A-T
 */

import SEOHead from '../components/SEOHead';
import { BASE_URL, COMPANY_INFO } from '../config/seo.config';
import { Shield, CheckCircle2, FileText, Award } from 'lucide-react';

export const GuaranteesPage: React.FC = () => {
  const seoConfig = {
    title: 'Garanties et Assurances | Vericore SRL - Protection complète',
    description: 'Vericore offre une garantie décennale, une assurance responsabilité civile et des certifications professionnelles pour tous vos travaux à Bruxelles.',
    h1: 'Nos garanties et assurances',
    canonical: `${BASE_URL}/garanties`,
  };

  const guarantees = [
    {
      icon: Shield,
      title: 'Garantie décennale',
      description: 'Tous nos travaux de construction et de gros œuvre sont couverts par une garantie décennale obligatoire, vous protégeant pendant 10 ans contre les vices cachés et malfaçons.',
      details: [
        'Protection pendant 10 ans',
        'Couverture des vices cachés',
        'Assurance souscrite auprès d\'un organisme agréé',
        'Attestation fournie pour chaque chantier',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Assurance responsabilité civile',
      description: 'Notre assurance RC professionnelle couvre tous les dommages éventuels causés lors de nos interventions, vous garantissant une protection totale.',
      details: [
        'Couverture jusqu\'à 2 500 000 €',
        'Protection des biens et personnes',
        'Valable sur tous nos chantiers',
        'Attestation disponible sur demande',
      ],
    },
    {
      icon: Award,
      title: 'Certifications professionnelles',
      description: 'Nos techniciens sont certifiés et formés régulièrement aux dernières normes belges et européennes.',
      details: [
        'Électriciens certifiés (RGIE)',
        'Techniciens chauffage agréés',
        'Formation continue obligatoire',
        'Respect des normes PEB',
      ],
    },
    {
      icon: FileText,
      title: 'Garantie de parfait achèvement',
      description: 'Pendant 1 an après la fin des travaux, nous intervenons gratuitement pour corriger tout défaut de conformité ou malfaçon constaté.',
      details: [
        'Intervention gratuite pendant 1 an',
        'Correction de tous défauts',
        'Réactivité garantie sous 48h',
        'Pas de franchise',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Enregistrement BCE',
      number: COMPANY_INFO.vatNumber,
      description: 'Entreprise enregistrée à la Banque-Carrefour des Entreprises',
    },
    {
      name: 'Agréation RGIE',
      number: 'RGIE-123456',
      description: 'Agréation pour installations électriques',
    },
    {
      name: 'Assurance décennale',
      number: 'DEC-789012',
      description: 'Police d\'assurance décennale active',
    },
  ];

  return (
    <>
      <SEOHead config={seoConfig} />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {seoConfig.h1}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Votre tranquillité d'esprit est notre priorité. Découvrez toutes les garanties 
              et assurances qui protègent vos travaux.
            </p>
          </div>
        </section>

        {/* Garanties principales */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <guarantee.icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {guarantee.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {guarantee.description}
                  </p>
                  <ul className="space-y-3">
                    {guarantee.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nos certifications et agréations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-mono mb-3">
                    {cert.number}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus de réclamation */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comment faire valoir vos garanties ?
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Constatation',
                  description: 'Dès que vous constatez un problème, contactez-nous immédiatement par téléphone, email ou WhatsApp.',
                },
                {
                  step: 2,
                  title: 'Évaluation',
                  description: 'Notre équipe intervient sous 48h pour évaluer le problème et déterminer sa nature (garantie applicable).',
                },
                {
                  step: 3,
                  title: 'Intervention',
                  description: 'Si le problème est couvert par la garantie, nous intervenons gratuitement pour le corriger.',
                },
                {
                  step: 4,
                  title: 'Suivi',
                  description: 'Nous assurons un suivi jusqu\'à résolution complète du problème, avec votre satisfaction garantie.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions sur nos garanties ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Appelez-nous
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors"
              >
                Envoyez un email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuaranteesPage;
