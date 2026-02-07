import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Briefcase, Phone, MapPin, Clock } from 'lucide-react';
import { Section, SectionTitle } from '../components/Section';
import ContactForm from '../components/forms/ContactForm';
import RecruitmentForm from '../components/forms/RecruitmentForm';

type Tab = 'contact' | 'recruitment';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: t('common.phone'),
      link: 'tel:+32396847374'
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: t('common.email'),
      link: 'mailto:contact@vericore.be'
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: t('common.address'),
      link: null
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursText'),
      link: null
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && activeTab === 'recruitment') {
        setActiveTab('contact');
      } else if (e.key === 'ArrowRight' && activeTab === 'contact') {
        setActiveTab('recruitment');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  return (
    <Section id="contact">
      <SectionTitle
        subtitle={t('contact.subtitle')}
        title={t('contact.title')}
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Tabs + Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Tabs Header */}
            <div
              role="tablist"
              className="flex border-b border-gray-200 bg-gray-50"
            >
              <button
                role="tab"
                aria-selected={activeTab === 'contact'}
                aria-controls="contact-panel"
                id="contact-tab"
                onClick={() => setActiveTab('contact')}
                className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base transition-all relative focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset outline-none ${
                  activeTab === 'contact'
                    ? 'text-primary-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t('contact.tabs.contact')}
                </span>
                {activeTab === 'contact' && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>

              <button
                role="tab"
                aria-selected={activeTab === 'recruitment'}
                aria-controls="recruitment-panel"
                id="recruitment-tab"
                onClick={() => setActiveTab('recruitment')}
                className={`flex-1 px-6 py-4 font-semibold text-sm md:text-base transition-all relative focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset outline-none ${
                  activeTab === 'recruitment'
                    ? 'text-primary-600 bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {t('contact.tabs.recruitment')}
                </span>
                {activeTab === 'recruitment' && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Tab Panels */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'contact' && (
                  <motion.div
                    key="contact"
                    role="tabpanel"
                    id="contact-panel"
                    aria-labelledby="contact-tab"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {t('contact.form.title')}
                    </h3>
                    <ContactForm />
                  </motion.div>
                )}

                {activeTab === 'recruitment' && (
                  <motion.div
                    key="recruitment"
                    role="tabpanel"
                    id="recruitment-panel"
                    aria-labelledby="recruitment-tab"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {t('contact.recruitment.title')}
                    </h3>
                    <RecruitmentForm />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('contact.info.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('contact.info.description')}
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  className="block p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 group-hover:text-primary-600 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block p-6 bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-2">{t('contact.info.urgent.title')}</h4>
                <p className="text-green-50 mb-4 text-sm">
                  {t('contact.info.urgent.description')}
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
                    {t('contact.info.urgent.button')}
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

export default ContactSection;
