import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, MessageCircle } from 'lucide-react';
import { Section, SectionTitle } from '../components/Section';
import PlansTrioSlider from '../components/PlansTrioSlider';

const MaintenancePlansSection: React.FC = () => {
  return (
    <section 
      id="abonnements" 
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/bg-worker.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay gradient (like Hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
      
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos abonnements de maintenance
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Nous proposons plusieurs formules d'abonnement adaptées à la taille des bâtiments, 
            aux équipements présents et au niveau de service souhaité. Chaque contrat est établi 
            après analyse préalable du site, sur base de photos et d'une visite technique afin de 
            définir une offre précise et adaptée. <span className="text-primary-400 font-semibold">Les tarifs ci-dessous sont donnés à titre indicatif.</span>
          </p>
        </motion.div>

        {/* Trio Slider */}
        <PlansTrioSlider />

        {/* Info Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Modalités d'intervention */}
          <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Modalités d'intervention</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nous intervenons aussi bien dans le cadre d'un abonnement de maintenance que pour des 
              demandes ponctuelles. Les interventions à l'acte sont planifiées selon nos disponibilités 
              opérationnelles et bénéficient du même niveau d'exigence technique et de qualité. Les clients 
              sous contrat disposent de créneaux dédiés et de délais d'intervention garantis contractuellement.
            </p>
          </div>

          {/* Conditions */}
          <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Conditions & fonctionnement</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Les tarifs sont indicatifs et définis définitivement après analyse technique du site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Une visite sur place est systématiquement réalisée avant la signature du contrat.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Les interventions ponctuelles restent possibles sans abonnement, sous réserve de disponibilité.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Les travaux importants, rénovations, remplacements majeurs et fournitures font l'objet de devis séparés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <span>Toute intervention dépassant le volume inclus dans l'abonnement est facturée selon le tarif contractuel préférentiel.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50"
          >
            <FileCheck className="w-5 h-5" />
            <span>Demander un devis / audit technique</span>
          </a>
          
          <a
            href="https://wa.me/3232396847374"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp 24/7</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenancePlansSection;
