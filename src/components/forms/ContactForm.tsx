import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requestType: string;
  siteAddress?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Debug: Vérifier la configuration
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const emailTo = import.meta.env.VITE_EMAIL_TO;
    
    if (import.meta.env.DEV) {
      console.log('🔧 Configuration Email:');
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
        subject: `[Vericore] Nouveau message de ${data.name} - ${data.requestType}`,
        from_name: data.name,
        email: data.email,
        phone: data.phone,
        type: data.requestType,
        address: data.siteAddress || 'Non spécifié',
        message: data.message,
        to_email: emailTo,
      };
      
      if (import.meta.env.DEV) {
        console.log('📤 Envoi email en cours...');
        console.log('📧 Données:', { ...payload, access_key: '***' });
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
          console.log('✅ Email envoyé avec succès!');
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
      setSubmitError(t('contact.form.error') || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = `https://wa.me/32396847374?text=${encodeURIComponent(t('contact.form.whatsappMessage'))}`;

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
        <h3 className="text-2xl font-bold text-green-900 mb-2">{t('contact.form.success.title')}</h3>
        <p className="text-green-700">{t('contact.form.success.description')}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.name')} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name', { required: t('contact.form.validation.required') })}
          id="name"
          type="text"
          placeholder={t('contact.form.placeholders.name')}
          className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Phone & Email - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.phone')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone', { required: t('contact.form.validation.required') })}
            id="phone"
            type="tel"
            placeholder={t('contact.form.placeholders.phone')}
            className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.email')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email', {
              required: t('contact.form.validation.required'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t('contact.form.validation.emailInvalid')
              }
            })}
            id="email"
            type="email"
            placeholder={t('contact.form.placeholders.email')}
            className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Request Type */}
      <div>
        <label htmlFor="requestType" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.requestType')} <span className="text-red-500">*</span>
        </label>
        <select
          {...register('requestType', { required: t('contact.form.validation.selectType') })}
          id="requestType"
          className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
        >
          <option value="">{t('contact.form.placeholders.select')}</option>
          <option value="devis">{t('contact.form.requestTypes.quote')}</option>
          <option value="urgence">{t('contact.form.requestTypes.emergency')}</option>
          <option value="contrat">{t('contact.form.requestTypes.maintenance')}</option>
          <option value="autre">{t('contact.form.requestTypes.other')}</option>
        </select>
        {errors.requestType && <p className="text-red-500 text-sm mt-1">{errors.requestType.message}</p>}
      </div>

      {/* Site Address */}
      <div>
        <label htmlFor="siteAddress" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.siteAddress')}
        </label>
        <input
          {...register('siteAddress')}
          id="siteAddress"
          type="text"
          placeholder={t('contact.form.placeholders.siteAddress')}
          className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message', { required: t('contact.form.validation.required') })}
          id="message"
          rows={5}
          placeholder={t('contact.form.placeholders.message')}
          className="w-full px-4 py-3.5 sm:py-3 text-base border-2 border-gray-200 rounded-xl sm:rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 text-red-700 text-sm">
          {submitError}
        </div>
      )}

      {/* Buttons - Full width on mobile */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`flex-1 px-6 py-4 sm:py-4 text-base font-semibold rounded-xl sm:rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary-600 hover:shadow-xl text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('contact.form.sending') || 'Envoi en cours...'}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t('contact.form.submit')}
            </>
          )}
        </motion.button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full border-2 border-green-600 text-green-600 px-6 py-4 sm:py-4 text-base rounded-xl sm:rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t('contact.form.whatsapp')}
          </motion.button>
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
