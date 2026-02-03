import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, Clock, Award, MapPin } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-primary-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80"
          alt="Modern renovation"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Badge variant="primary" icon={Clock} className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                24h/7 disponible
              </Badge>
              <Badge variant="primary" icon={MapPin} className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                Bruxelles
              </Badge>
              <Badge variant="primary" icon={Award} className="bg-white/10 text-white border-white/20 backdrop-blur-md">
                Certifié BE
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Rénovation &{' '}
              <span className="gradient-text bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                Design
              </span>
              <br />
              à Bruxelles
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              Votre partenaire de confiance pour tous vos travaux de rénovation, 
              maintenance et design. Service rapide, qualité garantie.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                'Intervention rapide 24h/7',
                'Devis gratuit sous 24h',
                'Équipe qualifiée & assurée',
                'Garantie sur tous travaux'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm md:text-base">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Demander un devis gratuit
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
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp 24/7
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { number: '500+', label: 'Projets réalisés' },
              { number: '24/7', label: 'Service dépannage' },
              { number: '15+', label: 'Années d\'expérience' },
              { number: '98%', label: 'Clients satisfaits' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-white"
              >
                <div className="text-4xl font-bold mb-2 gradient-text bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
