/**
 * Page Mentions Légales
 * Obligatoire pour le SEO et la conformité légale
 */

import SEOHead from '../components/SEOHead';
import { BASE_URL, COMPANY_INFO } from '../config/seo.config';

export const LegalPage: React.FC = () => {
  const seoConfig = {
    title: 'Mentions Légales | Vericore SRL',
    description: 'Mentions légales et informations juridiques de Vericore SRL, entreprise de construction et rénovation à Bruxelles.',
    h1: 'Mentions Légales',
    canonical: `${BASE_URL}/mentions-legales`,
    noIndex: true, // Ne pas indexer les pages légales
  };

  return (
    <>
      <SEOHead config={seoConfig} />
      
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Identification de l'entreprise
              </h2>
              <p>
                <strong>Raison sociale :</strong> {COMPANY_INFO.legalName}<br />
                <strong>Forme juridique :</strong> Société à Responsabilité Limitée<br />
                <strong>Numéro d'entreprise :</strong> {COMPANY_INFO.vatNumber}<br />
                <strong>Siège social :</strong><br />
                {COMPANY_INFO.address.street}<br />
                {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}<br />
                {COMPANY_INFO.address.country}
              </p>
              <p>
                <strong>Email :</strong> {COMPANY_INFO.email}<br />
                <strong>Téléphone :</strong> {COMPANY_INFO.phone}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Directeur de publication
              </h2>
              <p>
                Le directeur de la publication du site est le gérant de la société Vericore SRL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Hébergement du site
              </h2>
              <p>
                Ce site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Téléphone de l'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété 
                exclusive de Vericore SRL ou de ses partenaires. Toute reproduction, 
                représentation, modification, publication, adaptation de tout ou partie des 
                éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                sauf autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Cookies
              </h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser 
                le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de 
                cookies conformément à notre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Responsabilité
              </h2>
              <p>
                Vericore SRL s'efforce d'assurer au mieux de ses possibilités l'exactitude et la 
                mise à jour des informations diffusées sur ce site. Toutefois, Vericore SRL ne 
                peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises 
                à disposition sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit belge. En cas de litige et 
                à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents 
                de Bruxelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contact
              </h2>
              <p>
                Pour toute question concernant les mentions légales, vous pouvez nous contacter :
              </p>
              <ul>
                <li>Par email : {COMPANY_INFO.email}</li>
                <li>Par téléphone : {COMPANY_INFO.phone}</li>
                <li>Par courrier : {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}</li>
              </ul>
            </section>

            <p className="text-sm text-gray-500 mt-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-BE')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPage;
