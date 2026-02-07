import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.home'), href: '/', isRoute: true },
    { name: t('nav.projects'), href: '/projects', isRoute: true },
    { name: t('nav.testimonials'), href: '#testimonials', isRoute: false },
    { name: t('nav.faq'), href: '/faq', isRoute: true },
    { name: t('nav.contact'), href: '#contact', isRoute: false },
  ];

  const services = [
    t('services.maintenance.title'),
    t('services.renovation.title'),
    t('services.plumbing.title'),
    t('services.electrical.title'),
    t('services.tiling.title'),
    t('services.painting.title'),
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isRoute: boolean }) => {
    e.preventDefault();
    
    if (link.isRoute) {
      // Navigate to route
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to section (anchor link) on current page
      const element = document.querySelector(link.href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt={t('common.brand')} className="h-10 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-display text-xl font-bold text-white">{t('common.brand')}</h3>
                <p className="text-xs text-gray-400">{t('footer.about.subtitle')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {t('footer.about.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-400">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{t('footer.available247')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>{t('common.address')}</p>
                  <p>{t('common.city')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a 
                    href={`tel:${t('common.phone')}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {t('common.phone')}
                  </a>
                  <p className="text-gray-500 text-xs mt-0.5">{t('footer.whatsappAvailable')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${t('common.email')}`}
                  className="text-sm hover:text-primary-400 transition-colors break-all"
                >
                  {t('common.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-gray-500 text-center md:text-right">
            {t('footer.vat')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
