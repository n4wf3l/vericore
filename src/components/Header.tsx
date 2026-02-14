import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Languages, Clock, FileText, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import MobileLanguageOverlay from './mobile/MobileLanguageOverlay';
import { scrollToSection } from '../lib/scrollToSection';
import logo from '../assets/logo.png';

interface HeaderProps {
  onOpenLanguageSelector: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLanguageSelector }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), href: '/', isRoute: true },
    { name: t('nav.about'), href: '#about', isRoute: false },
    { name: t('nav.expertises'), href: '/expertises', isRoute: true },
    { name: t('nav.projects'), href: '/projects', isRoute: true },
    { name: t('nav.faq'), href: '/faq', isRoute: true },
    { name: t('nav.contact'), href: '#contact', isRoute: false },
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;
          
          setIsScrolled(currentScrollY > 20);
          
          // Only apply show/hide on mobile (< 1024px)
          if (window.innerWidth < 1024) {
            // Only update if scroll difference is significant (> 5px) to avoid jitter
            if (Math.abs(scrollDifference) > 5) {
              if (scrollDifference < 0 || currentScrollY < 100) {
                // Scrolling up or near top - show navbar
                setIsVisible(true);
              } else if (scrollDifference > 0 && currentScrollY > 100) {
                // Scrolling down - hide navbar
                setIsVisible(false);
              }
              
              setLastScrollY(currentScrollY);
            }
          } else {
            // Always visible on desktop
            setIsVisible(true);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle hash navigation when arriving on home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const id = location.hash.slice(1); // Remove the # 
        scrollToSection(id);
      }, 100);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isRoute: boolean }) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (link.isRoute) {
      // Navigate to route
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Anchor link - check if we're on home page
      const isOnHomePage = location.pathname === '/';
      
      if (isOnHomePage) {
        // Already on home page, just scroll to section
        const element = document.querySelector(link.href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      } else {
        // Not on home page, navigate to home with hash
        navigate('/' + link.href);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white'
        }`}
      >
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <img src={logo} alt={t('common.brand')} className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-bold text-gray-900">
                  {t('common.brand')}
                </span>
                <span className="text-xs text-gray-600 -mt-1">
                  {t('common.tagline')}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenLanguageSelector}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 outline-none"
                aria-label={t('nav.selectLanguage')}
              >
                <Languages className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">{t('nav.language')}</span>
              </button>
              <a href={`tel:${t('common.phone').replace(/\s/g, '')}`}>
                <Button variant="primary" size="md">
                  <Phone className="w-4 h-4 mr-2" />
                  {t('common.phone')}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={t('nav.toggleMenu')}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
                    aria-label={t('nav.closeMenu')}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Quick Actions - MOBILE ONLY */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    {t('mobile.quickActions', { defaultValue: 'Actions rapides' })}
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.location.href = `tel:${t('common.phone').replace(/\s/g, '')}`;
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-semibold transition-colors"
                    >
                      <Clock className="w-5 h-5" />
                      <span>{t('mobile.emergency247', { defaultValue: 'Urgence 24/7' })}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        const isOnHomePage = location.pathname === '/';
                        if (isOnHomePage) {
                          scrollToSection('contact');
                        } else {
                          navigate('/#contact');
                        }
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-xl font-semibold transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      <span>{t('mobile.requestQuote', { defaultValue: 'Demander un devis' })}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        const isOnHomePage = location.pathname === '/';
                        if (isOnHomePage) {
                          scrollToSection('plans');
                        } else {
                          navigate('/#plans');
                        }
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl font-semibold transition-colors"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>{t('mobile.subscriptions', { defaultValue: 'Abonnements' })}</span>
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Buttons Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileLanguageOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <Languages className="w-5 h-5" />
                    {t('nav.language')}
                  </button>
                  <a href={`tel:${t('common.phone').replace(/\s/g, '')}`} className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('common.cta.callUs')}
                    </Button>
                  </a>
                  <a 
                    href={`https://wa.me/${t('common.phone').replace(/\D/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" size="lg" className="w-full">
                      {t('common.cta.whatsapp')}
                    </Button>
                  </a>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600"
                >
                  <p className="mb-2">
                    <strong>{t('contact.info.address')}:</strong><br />
                    {t('common.address')}
                  </p>
                  <p>
                    <strong>{t('contact.info.email')}:</strong><br />
                    {t('common.email')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Language Picker Mobile - DEPRECATED, replaced by MobileLanguageOverlay */}
      {/* <LanguagePickerMobile 
        isOpen={isLanguagePickerOpen} 
        onClose={() => setIsLanguagePickerOpen(false)} 
      /> */}

      {/* Mobile Language Overlay - Full Screen */}
      <MobileLanguageOverlay
        isOpen={isMobileLanguageOpen}
        onClose={() => setIsMobileLanguageOpen(false)}
      />
    </>
  );
};

export default Header;
