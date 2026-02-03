import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, Clock, MapPin, Shield } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-camions.jpg"
          alt="Vericore maintenance et rénovation"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Left-to-Right Gradient Overlay - Dark left (text), lighter right (trucks visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/15 z-10" />

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 items-center">
          {/* Left Content with Local Scrim */}
          <div className="relative">
            {/* Local scrim panel behind text for extra readability */}
            <div className="absolute inset-0 -inset-x-6 -inset-y-8 bg-slate-950/25 backdrop-blur-sm rounded-3xl border border-white/5 -z-10 hidden lg:block" />
            
            <div className="text-white max-w-3xl">
              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2.5 mb-6"
              >
                <Badge variant="primary" icon={Clock} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold">
                  Intervention 24h/7
                </Badge>
                <Badge variant="primary" icon={MapPin} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold">
                  Basé à Bruxelles · Déplacements Belgique
                </Badge>
                <Badge variant="primary" icon={Shield} className="bg-slate-900/60 text-white border-white/30 backdrop-blur-md text-xs font-semibold">
                  Conforme & Assuré
                </Badge>
              </motion.div>

              {/* Main Heading - SHORT */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.15] text-shadow-lg"
              >
                Maintenance technique &{' '}
                <span className="text-primary-400">
                  rénovation
                </span>{' '}
                d'immeubles
              </motion.h1>

              {/* Subheading - VERY SHORT */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-gray-100 mb-7 leading-relaxed max-w-2xl"
              >
                Une équipe multi-technique pour l'entretien, les urgences 24/7 et la mise en conformité. Devis clair sous 24h.
              </motion.p>

              {/* Key Points - ONLY 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2.5 mb-8"
              >
                {[
                  'Intervention 24h/7 — urgences prioritaires',
                  'Conforme aux normes belges + équipes assurées',
                  'Transparence & reporting (devis, compte-rendus, traçabilité)'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-sm md:text-base leading-snug">{point}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <a href="#contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      Demander un devis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a 
                    href="https://wa.me/32396847374" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-gray-900"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Urgence 24/7
                    </Button>
                  </a>
                </div>
                
                {/* Micro Reassurance - ONE LINE */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs text-gray-200 flex items-center gap-1.5 flex-wrap"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary-400" />
                  <span>Devis sous 24h • Prix transparents • Sans engagement</span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Stats Cards - ONLY 2, Smaller, High Contrast */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {[
              { number: '500+', label: 'Projets réalisés' },
              { number: '24/7', label: 'Urgences' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-slate-950/30 backdrop-blur-2xl border border-white/12 shadow-xl transition-all duration-300 hover:bg-slate-950/40 hover:border-white/20 hover:shadow-2xl"
              >
                {/* Subtle glass sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent" />
                
                {/* Content - Compact */}
                <div className="relative p-6">
                  <div className="text-5xl font-extrabold text-white tracking-tight mb-1.5">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-medium leading-tight">{stat.label}</div>
                </div>
              </motion.div>
            ))}
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
