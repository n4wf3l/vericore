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

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact Form Data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
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

      {/* Buttons - Full width on mobile */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-primary-600 text-white px-6 py-4 sm:py-4 text-base font-semibold rounded-xl sm:rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {t('contact.form.submit')}
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
