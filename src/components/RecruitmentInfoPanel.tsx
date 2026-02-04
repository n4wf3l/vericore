import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Clock } from 'lucide-react';

const RecruitmentInfoPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary-50 via-blue-50 to-white rounded-xl p-6 border border-primary-200 mb-6"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1">Rejoignez l'équipe Vericore</h3>
          <p className="text-sm text-gray-600">
            Nous recherchons des profils techniques motivés pour renforcer notre équipe.
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Profils recherchés :</span> Technicien polyvalent, Électricien, Plombier, HVAC/Ventilation, Chef d'équipe
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Mode :</span> CDI / Sous-traitance selon profils
          </p>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Zone :</span> Bruxelles & Belgique
          </p>
        </div>
      </div>

      <div className="bg-white/60 rounded-lg p-3 border border-primary-100">
        <p className="text-xs text-gray-600 italic">
          Une section carrières plus complète (annonces, suivi de candidatures…) sera développée progressivement. 
          En attendant, n'hésitez pas à nous envoyer votre candidature via le formulaire ci-dessous.
        </p>
      </div>
    </motion.div>
  );
};

export default RecruitmentInfoPanel;
