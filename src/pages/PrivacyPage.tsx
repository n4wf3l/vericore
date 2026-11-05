/**
 * Page Politique de confidentialité
 * Texte fourni par Vericore SRL (4 novembre 2026), requis pour les formulaires du site et les campagnes Meta
 */

import SEOHead from '../components/SEOHead';
import { BASE_URL } from '../config/seo.config';

const H2 = 'text-2xl font-semibold text-gray-900 mb-4';

export const PrivacyPage: React.FC = () => {
  const seoConfig = {
    title: 'Politique de confidentialité | Vericore SRL',
    description: 'Comment Vericore SRL collecte et utilise les données personnelles des visiteurs de son site et des personnes qui la contactent.',
    h1: 'Politique de confidentialité',
    canonical: `${BASE_URL}/politique-de-confidentialite`,
    noIndex: true, // Ne pas indexer les pages légales
  };

  return (
    <>
      <SEOHead config={seoConfig} />

      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Politique de confidentialité – VERICORE SRL
          </h1>
          <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 4 novembre 2026</p>

          <div className="prose prose-lg text-gray-700 space-y-8">
            <section>
              <h2 className={H2}>1. Responsable du traitement</h2>
              <p>
                La présente politique explique comment VERICORE SRL collecte et utilise les données personnelles des
                visiteurs de son site internet et des personnes qui prennent contact avec l’entreprise.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Entreprise :</strong> VERICORE SRL</li>
                <li><strong>Numéro d’entreprise / TVA :</strong> BE 1005.585.934</li>
                <li><strong>Adresse du siège social :</strong> Ninoofsesteenweg 884, 1703 Dilbeek, Belgique</li>
                <li><strong>E-mail :</strong> <a href="mailto:contact@vericore.be" className="text-primary-600 hover:underline">contact@vericore.be</a></li>
                <li><strong>Téléphone :</strong> <a href="tel:+32496847374" className="text-primary-600 hover:underline">+32 496 84 73 74</a></li>
                <li><strong>Site internet :</strong> <a href="https://vericore.be" className="text-primary-600 hover:underline">https://vericore.be</a></li>
              </ul>
              <p>
                VERICORE SRL agit en qualité de responsable du traitement des données personnelles qu’elle collecte dans
                le cadre de ses activités.
              </p>
            </section>

            <section>
              <h2 className={H2}>2. Quelles données collectons-nous ?</h2>
              <p>Selon votre demande, nous pouvons collecter les informations suivantes :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom ;</li>
                <li>Numéro de téléphone ;</li>
                <li>Adresse e-mail ;</li>
                <li>Code postal ou adresse du chantier ;</li>
                <li>Informations relatives à votre projet de rénovation ou de maintenance ;</li>
                <li>Informations communiquées dans les formulaires de contact ou de demande de devis.</li>
              </ul>
              <p>Nous collectons uniquement les informations nécessaires au traitement de votre demande.</p>
            </section>

            <section>
              <h2 className={H2}>3. Pourquoi utilisons-nous vos données ?</h2>
              <p>Vos données personnelles peuvent être utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de renseignements ;</li>
                <li>Vous recontacter à la suite d’une demande de devis ;</li>
                <li>Vous présenter nos services et nos offres, notamment nos packs salle de bain ;</li>
                <li>Évaluer vos besoins et préparer une proposition commerciale ;</li>
                <li>Assurer le suivi de votre projet ;</li>
                <li>Respecter nos obligations légales et administratives.</li>
              </ul>
              <p>
                Le traitement de votre demande repose notamment sur les démarches précontractuelles que vous sollicitez.
                Les communications commerciales ultérieures reposent, lorsqu’il est nécessaire, sur votre consentement.
              </p>
            </section>

            <section>
              <h2 className={H2}>4. Formulaires publicitaires et réseaux sociaux</h2>
              <p>
                Lorsque vous remplissez un formulaire publicitaire sur Facebook ou Instagram, exploités par Meta, les
                informations que vous transmettez peuvent être communiquées à VERICORE SRL afin que nous puissions traiter
                votre demande.
              </p>
              <p>
                Ces informations sont utilisées uniquement dans le cadre de votre demande et du suivi commercial
                correspondant, sauf si vous avez donné un consentement distinct pour recevoir d’autres communications
                commerciales.
              </p>
              <p>Meta traite également certaines données conformément à ses propres conditions et à sa politique de confidentialité.</p>
            </section>

            <section>
              <h2 className={H2}>5. Partage des données</h2>
              <p>VERICORE SRL ne vend pas vos données personnelles.</p>
              <p>
                Certaines données peuvent être accessibles, lorsque cela est nécessaire, à des prestataires techniques ou
                professionnels intervenant pour le compte de l’entreprise, notamment pour l’hébergement du site, la gestion
                informatique ou le suivi des demandes.
              </p>
              <p>
                Ces prestataires sont tenus de respecter les obligations applicables en matière de confidentialité et de
                protection des données.
              </p>
            </section>

            <section>
              <h2 className={H2}>6. Durée de conservation</h2>
              <p>Les données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.</p>
              <p>Les demandes de devis et les prospects sont conservés pendant 3 ans à compter du dernier contact.</p>
              <p>
                Les données liées à une relation contractuelle ou à des obligations légales sont conservées pendant les
                délais imposés par la législation applicable.
              </p>
            </section>

            <section>
              <h2 className={H2}>7. Sécurité des données</h2>
              <p>
                VERICORE SRL prend des mesures raisonnables pour protéger les données personnelles contre la perte,
                l’utilisation abusive, l’accès non autorisé, la divulgation ou la modification.
              </p>
            </section>

            <section>
              <h2 className={H2}>8. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez notamment des droits suivants, sous réserve des conditions prévues par la réglementation :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d’accès à vos données ;</li>
                <li>Droit de rectification ;</li>
                <li>Droit à l’effacement ;</li>
                <li>Droit à la limitation du traitement ;</li>
                <li>Droit d’opposition ;</li>
                <li>Droit à la portabilité lorsque celui-ci s’applique ;</li>
                <li>Droit de retirer votre consentement lorsque le traitement repose sur celui-ci.</li>
              </ul>
              <p>
                Pour exercer vos droits, vous pouvez contacter VERICORE SRL à l’adresse suivante :{' '}
                <a href="mailto:contact@vericore.be" className="text-primary-600 hover:underline">contact@vericore.be</a>.
              </p>
              <p>
                Vous pouvez également introduire une réclamation auprès de l’Autorité de protection des données en
                Belgique :{' '}
                <a href="https://www.autoriteprotectiondonnees.be/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  https://www.autoriteprotectiondonnees.be/
                </a>
              </p>
            </section>

            <section>
              <h2 className={H2}>9. Cookies et navigation</h2>
              <p>
                Le site internet peut utiliser des cookies ou technologies similaires afin d’assurer son fonctionnement,
                mesurer son audience ou améliorer l’expérience de navigation.
              </p>
              <p>
                Lorsque la réglementation l’exige, votre consentement est demandé avant l’utilisation des cookies
                concernés. Les modalités sont précisées dans le dispositif de gestion des cookies du site.
              </p>
            </section>

            <section>
              <h2 className={H2}>10. Modification de la politique</h2>
              <p>
                VERICORE SRL se réserve le droit de modifier la présente politique afin de tenir compte des évolutions
                légales, techniques ou de ses activités.
              </p>
              <p>La version actualisée sera publiée sur cette page.</p>
            </section>

            <p className="text-sm text-gray-500 mt-12">
              VERICORE SRL<br />
              Rénovation – Maintenance – Multiservices<br />
              https://vericore.be · contact@vericore.be · +32 496 84 73 74
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
