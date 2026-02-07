import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section, SectionTitle } from '../components/Section';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { services } from '../data/content';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  phone: z.string().min(9, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form Data:', data);
    
    setIsSubmitted(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Rue Esseghem 43, 1090 Bruxelles',
      link: 'https://maps.google.com/?q=Rue+Esseghem+43+1090+Bruxelles'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+32 396 847 374',
      link: 'tel:+32496847374'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@vericore.be',
      link: 'mailto:contact@vericore.be'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Disponible 24h/7 pour urgences',
      link: null
    },
  ];

  const mailtoLink = `mailto:contact@vericore.be?subject=Demande de devis&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour...`;

  return (
    <Section id="contact">
      <SectionTitle
        subtitle="Contactez-nous"
        title="Demandez Votre Devis Gratuit"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Remplissez le formulaire
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="+32 XXX XXX XXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service souhaité *
                </label>
                <select
                  {...register('service')}
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Autre">Autre / Projet sur mesure</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Décrivez votre projet..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </>
                )}
              </Button>

              {/* Alternative mailto link */}
              <p className="text-center text-sm text-gray-500">
                Ou envoyez-nous un email directement à{' '}
                <a href={mailtoLink} className="text-primary-600 hover:underline font-medium">
                  contact@vericore.be
                </a>
              </p>
            </form>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-1">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-sm text-green-700">
                    Nous vous contacterons dans les 24h. Merci pour votre confiance !
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-gray-700">{info.content}</span>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                    {info.title}
                  </h4>
                  <div className="text-sm">{content}</div>
                </motion.div>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-2">Besoin urgent ?</h4>
                <p className="text-green-50 mb-4 text-sm">
                  Contactez-nous via WhatsApp pour une intervention rapide 24h/7
                </p>
                <a
                  href="https://wa.me/32496847374"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Ouvrir WhatsApp
                  </motion.button>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-64 md:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.2!2d4.3!3d50.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDUyJzEzLjIiTiA0wrAxNycwNi4wIkU!5e0!3m2!1sen!2sbe!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vericore Location"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
