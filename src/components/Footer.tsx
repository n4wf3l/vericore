import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Maintenance & Entretien',
    'Rénovation Intérieure',
    'Plomberie',
    'Électricité',
    'Carrelage',
    'Peinture',
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vericore" className="h-10 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-display text-xl font-bold text-white">Vericore</h3>
                <p className="text-xs text-gray-400">Renovation & Design</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Votre partenaire de confiance pour tous vos travaux de rénovation et d'entretien à Bruxelles.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-400">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Intervention 24h/7</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
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
            <h4 className="font-semibold text-white text-lg mb-4">Nos Services</h4>
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
            <h4 className="font-semibold text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Rue Esseghem 43</p>
                  <p>1090 Bruxelles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a 
                    href="tel:+32396847374" 
                    className="hover:text-primary-400 transition-colors"
                  >
                    +32 396 847 374
                  </a>
                  <p className="text-gray-500 text-xs mt-0.5">WhatsApp disponible</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:vericoresrl@gmail.com" 
                  className="text-sm hover:text-primary-400 transition-colors break-all"
                >
                  vericoresrl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            © {currentYear} Vericore SRL – Tous droits réservés.
          </p>
          <p className="text-gray-500 text-center md:text-right">
            BE1005.585.934
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
