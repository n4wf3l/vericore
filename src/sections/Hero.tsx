import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, Clock, MapPin, Shield, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { goToContact } from '../lib/scrollToSection';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-camions.png"
          alt="Vericore maintenance et rénovation"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Left-to-Right Gradient Overlay - STRONGER on mobile for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 lg:from-slate-950/90 lg:via-slate-950/60 lg:to-slate-950/15 z-10" />

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 items-center">
          {/* Left Content with Local Scrim */}
          <div className="relative">
            {/* Local scrim panel behind text for extra readability */}
            <div className="absolute inset-0 -inset-x-6 -inset-y-8 bg-slate-950/25 backdrop-blur-sm rounded-3xl border border-white/5 -z-10 hidden lg:block" />
            
            <div className="text-white max-w-3xl">
              {/* Trust Badges - LIMIT 3 on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 sm:gap-2.5 mb-4 sm:mb-6"
              >
                <Badge variant="primary" icon={Clock} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold">
                  {t('hero.badges.intervention')}
                </Badge>
                <Badge variant="primary" icon={MapPin} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold">
                  {t('hero.badges.location')}
                </Badge>
                <Badge variant="primary" icon={Shield} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold hidden sm:inline-flex">
                  {t('hero.badges.conformity')}
                </Badge>
              </motion.div>

              {/* Main Heading - SHORTER on mobile */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5 leading-tight lg:leading-[1.15] text-shadow-lg"
                dangerouslySetInnerHTML={{ __html: t('hero.title') }}
              />

              {/* Subheading - SHORTER on mobile */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-gray-100 mb-5 sm:mb-7 leading-relaxed max-w-2xl"
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* Key Points - HIDE on mobile to reduce above-fold clutter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden sm:block space-y-2.5 mb-8"
              >
                {[
                  t('hero.trustPoints.availability'),
                  t('hero.trustPoints.partnership'),
                  t('hero.trustPoints.traceability')
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-sm md:text-base leading-snug">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Optimized for mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3 sm:space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); goToContact(80); }}
                    className="w-full sm:w-auto"
                  >
                    <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
                      {t('hero.primaryCta')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href={`https://wa.me/${t('common.phone').replace(/\D/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-gray-900 text-base"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {t('hero.secondaryCta')}
                    </Button>
                  </a>
                </div>
                
                {/* Micro Reassurance - Compact on mobile */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs text-gray-200 flex items-center gap-1.5 flex-wrap"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                  <span>{t('hero.microReassurance')}</span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Carte de contact rapide (desktop uniquement, remplace les stats) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-950/30 backdrop-blur-2xl border border-white/12 shadow-xl">
              {/* Glass sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />

              <div className="relative p-7 space-y-5">
                {/* Badge urgence */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-400/40 text-red-100 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  {t('hero.contact.badge', { defaultValue: 'Urgence 24/7' })}
                </div>

                {/* Titre */}
                <h3 className="text-white text-xl font-bold leading-tight">
                  {t('hero.contact.title', { defaultValue: 'Besoin d\'une intervention rapide ?' })}
                </h3>

                {/* Numéro de téléphone en gros */}
                <a
                  href={`tel:${t('common.phone').replace(/\s/g, '')}`}
                  className="group flex items-center gap-3 text-white hover:text-primary-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 border border-primary-400/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-300" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 uppercase tracking-wide">
                      {t('hero.contact.callLabel', { defaultValue: 'Appelez-nous' })}
                    </div>
                    <div className="text-lg font-bold group-hover:underline">
                      {t('common.phone')}
                    </div>
                  </div>
                </a>

                {/* Bouton WhatsApp */}
                <a
                  href={`https://wa.me/${t('common.phone').replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('common.cta.whatsapp', { defaultValue: 'WhatsApp 24/7' })}
                </a>

                {/* Micro-réassurance */}
                <div className="pt-1 flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-primary-300 flex-shrink-0" />
                  <span>{t('hero.microReassurance')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
