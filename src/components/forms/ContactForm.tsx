import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  requestType: string;
  siteAddress?: string;
  message: string;
}

const ContactForm: React.FC = () => {
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

  const whatsappLink = `https://wa.me/32396847374?text=${encodeURIComponent('Bonjour, je souhaite obtenir des informations sur vos services.')}`;

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
        <h3 className="text-2xl font-bold text-green-900 mb-2">Message envoyé !</h3>
        <p className="text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Nom & Prénom <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name', { required: 'Ce champ est obligatoire' })}
          id="name"
          type="text"
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Phone & Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone', { required: 'Ce champ est obligatoire' })}
            id="phone"
            type="tel"
            placeholder="+32 123 456 789"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Ce champ est obligatoire',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email invalide'
              }
            })}
            id="email"
            type="email"
            placeholder="jean@exemple.be"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Request Type */}
      <div>
        <label htmlFor="requestType" className="block text-sm font-semibold text-gray-700 mb-2">
          Type de demande <span className="text-red-500">*</span>
        </label>
        <select
          {...register('requestType', { required: 'Veuillez sélectionner un type' })}
          id="requestType"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none bg-white"
        >
          <option value="">Sélectionner...</option>
          <option value="devis">Devis</option>
          <option value="urgence">Urgence 24/7</option>
          <option value="contrat">Contrat maintenance</option>
          <option value="autre">Autre</option>
        </select>
        {errors.requestType && <p className="text-red-500 text-sm mt-1">{errors.requestType.message}</p>}
      </div>

      {/* Site Address */}
      <div>
        <label htmlFor="siteAddress" className="block text-sm font-semibold text-gray-700 mb-2">
          Adresse du site (optionnel)
        </label>
        <input
          {...register('siteAddress')}
          id="siteAddress"
          type="text"
          placeholder="Rue de la Loi 100, 1000 Bruxelles"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message', { required: 'Ce champ est obligatoire' })}
          id="message"
          rows={5}
          placeholder="Décrivez votre besoin..."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Envoyer
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
            className="w-full border-2 border-green-600 text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp 24/7
          </motion.button>
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
