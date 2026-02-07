import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import RecruitmentInfoPanel from '../RecruitmentInfoPanel';
import { useTranslation } from 'react-i18next';

interface RecruitmentFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  availability: string;
  experience: string;
  message: string;
}

const RecruitmentForm: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RecruitmentFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const position = watch('position');

  const onSubmit = async (data: RecruitmentFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Debug: Vérifier la configuration
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const emailTo = import.meta.env.VITE_EMAIL_TO;
    
    if (import.meta.env.DEV) {
      console.log('🔧 Configuration Email (Recrutement):');
      console.log('- Access Key:', accessKey ? (accessKey.length > 10 ? `${accessKey.substring(0, 8)}...` : '⚠️ TROP COURTE') : '❌ MANQUANTE');
      console.log('- Email destinataire:', emailTo || '❌ MANQUANT');
    }
    
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      if (import.meta.env.DEV) {
        console.error('❌ ERREUR: Access Key Web3Forms non configurée!');
        console.error('➡️ Obtenez votre clé sur https://web3forms.com');
        console.error('➡️ Ajoutez-la dans .env.local: VITE_WEB3FORMS_ACCESS_KEY=votre-clé');
      }
      setSubmitError('Configuration email manquante. Consultez la console (F12).');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `[Vericore - Recrutement] ${data.position} - ${data.name}`,
        from_name: data.name,
        email: data.email,
        phone: data.phone,
        position: data.position,
        availability: data.availability,
        experience: data.experience,
        message: data.message,
        to_email: emailTo,
      };

      if (import.meta.env.DEV) {
        console.log('📤 Envoi candidature en cours...');
        console.log('📧 Données:', {
          poste: data.position,
          candidat: data.name,
          email: data.email
        });
      }
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      
      if (import.meta.env.DEV) {
        console.log('📥 Réponse Web3Forms:', result);
      }

      if (result.success) {
        if (import.meta.env.DEV) {
          console.log('✅ Candidature envoyée avec succès!');
        }
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 5000);
      } else {
        if (import.meta.env.DEV) {
          console.error('❌ Erreur Web3Forms:', result.message);
        }
        throw new Error(result.message || 'Erreur lors de l\'envoi');
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('❌ Erreur lors de l\'envoi:', error);
      }
      setSubmitError(t('contact.recruitment.form.error') || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:contact@vericore.be?subject=${t('contact.recruitment.form.emailSubject')} - ${position || t('contact.recruitment.form.positions.spontanee')}&body=${encodeURIComponent(t('contact.recruitment.form.emailBody'))}`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-300 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">{t('contact.recruitment.form.success.title')}</h3>
        <p className="text-green-700">{t('contact.recruitment.form.success.description')}</p>
      </motion.div>
    );
  }

  return (
    <div>
      <RecruitmentInfoPanel />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="rec-name" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.recruitment.form.name')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name', { required: t('contact.recruitment.form.validation.required') })}
            id="rec-name"
            type="text"
            placeholder={t('contact.recruitment.form.placeholders.name')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="rec-email" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.recruitment.form.email')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email', {
                required: t('contact.recruitment.form.validation.required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('contact.recruitment.form.validation.emailInvalid')
                }
              })}
              id="rec-email"
              type="email"
              placeholder={t('contact.recruitment.form.placeholders.email')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="rec-phone" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.recruitment.form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone', { required: t('contact.recruitment.form.validation.required') })}
              id="rec-phone"
              type="tel"
              placeholder={t('contact.recruitment.form.placeholders.phone')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Position & Availability */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="rec-position" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.recruitment.form.position')} <span className="text-red-500">*</span>
            </label>
            <select
              {...register('position', { required: t('contact.recruitment.form.validation.selectPosition') })}
              id="rec-position"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
            >
              <option value="">{t('contact.recruitment.form.placeholders.select')}</option>
              <option value="technicien-polyvalent">{t('contact.recruitment.form.positions.technicien')}</option>
              <option value="electricien">{t('contact.recruitment.form.positions.electricien')}</option>
              <option value="plombier">{t('contact.recruitment.form.positions.plombier')}</option>
              <option value="hvac">{t('contact.recruitment.form.positions.hvac')}</option>
              <option value="peintre">{t('contact.recruitment.form.positions.peintre')}</option>
              <option value="chef-equipe">{t('contact.recruitment.form.positions.chef')}</option>
              <option value="spontanee">{t('contact.recruitment.form.positions.spontanee')}</option>
            </select>
            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
          </div>

          <div>
            <label htmlFor="rec-availability" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.recruitment.form.availability')} <span className="text-red-500">*</span>
            </label>
            <select
              {...register('availability', { required: t('contact.recruitment.form.validation.selectAvailability') })}
              id="rec-availability"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
            >
              <option value="">{t('contact.recruitment.form.placeholders.select')}</option>
              <option value="immediate">{t('contact.recruitment.form.availabilities.immediate')}</option>
              <option value="2-weeks">{t('contact.recruitment.form.availabilities.twoWeeks')}</option>
              <option value="1-month">{t('contact.recruitment.form.availabilities.oneMonth')}</option>
              <option value="other">{t('contact.recruitment.form.availabilities.other')}</option>
            </select>
            {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>}
          </div>
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="rec-experience" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.recruitment.form.experience')} <span className="text-red-500">*</span>
          </label>
          <select
            {...register('experience', { required: t('contact.recruitment.form.validation.selectExperience') })}
            id="rec-experience"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
          >
            <option value="">{t('contact.recruitment.form.placeholders.select')}</option>
            <option value="0-2">{t('contact.recruitment.form.experiences.0-2')}</option>
            <option value="3-5">{t('contact.recruitment.form.experiences.3-5')}</option>
            <option value="6-10">{t('contact.recruitment.form.experiences.6-10')}</option>
            <option value="10+">{t('contact.recruitment.form.experiences.10+')}</option>
          </select>
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="rec-message" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.recruitment.form.message')} <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message', { required: t('contact.recruitment.form.validation.required') })}
            id="rec-message"
            rows={5}
            placeholder={t('contact.recruitment.form.placeholders.presentation')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 text-red-700 text-sm">
            {submitError}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`flex-1 px-6 py-4 rounded-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-primary-600 hover:shadow-xl text-white'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('contact.recruitment.form.sending') || 'Envoi en cours...'}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t('contact.recruitment.form.submit')}
              </>
            )}
          </motion.button>

          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {t('contact.recruitment.form.email')}
            </motion.button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default RecruitmentForm;
