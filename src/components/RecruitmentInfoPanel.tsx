import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RecruitmentInfoPanel: React.FC = () => {
  const { t } = useTranslation();
  
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
          <h3 className="font-bold text-lg text-gray-900 mb-1">{t('contact.recruitment.infoPanel.title')}</h3>
          <p className="text-sm text-gray-600">
            {t('contact.recruitment.infoPanel.subtitle')}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">{t('contact.recruitment.infoPanel.profiles')}</p>
        </div>

        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">{t('contact.recruitment.infoPanel.mode')}</p>
        </div>

        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">{t('contact.recruitment.infoPanel.zone')}</p>
        </div>
      </div>

      <div className="bg-white/60 rounded-lg p-3 border border-primary-100">
        <p className="text-xs text-gray-600 italic">
          {t('contact.recruitment.infoPanel.note')}
        </p>
      </div>
    </motion.div>
  );
};

export default RecruitmentInfoPanel;
