import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Shield, Users, ClipboardCheck, Wrench, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const processSteps = [
    {
      icon: ClipboardCheck,
      title: 'Diagnostic & Priorisation',
      description: 'Analyse technique et identification des urgences'
    },
    {
      icon: Wrench,
      title: 'Intervention & Sécurisation',
      description: 'Exécution conforme avec matériel certifié'
    },
    {
      icon: FileText,
      title: 'Reporting & Traçabilité',
      description: 'Documentation complète et validation client'
    },
    {
      icon: TrendingUp,
      title: 'Suivi & Optimisation',
      description: 'Recommandations préventives et planification'
    }
  ];

  const proofChips = [
    { icon: CheckCircle2, text: 'SLA Garanti' },
    { icon: Shield, text: 'Conformité RGIE/NIT' },
    { icon: Users, text: 'Interlocuteur Unique' },
    { icon: FileText, text: 'Historique Digitalisé' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wide mb-2">
            À propos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Votre Partenaire Technique de Confiance
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Une approche méthodique pour la maintenance et la valorisation de votre patrimoine immobilier
          </p>
        </motion.div>

        {/* Main Content: Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission Narrative */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 text-lg leading-relaxed">
                Chez <span className="font-semibold text-gray-900">Vericore</span>, nous ne nous contentons pas d'intervenir sur des équipements. Nous accompagnons propriétaires, syndics et gestionnaires dans la sécurisation et l'optimisation de leur patrimoine bâti. Notre mission : <span className="font-semibold text-primary-600">vous libérer des contraintes techniques</span> pour que vous vous concentriez sur l'essentiel.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 text-lg leading-relaxed">
                Grâce à notre expertise multi-technique et notre approche préventive, nous transformons la maintenance réactive en <span className="font-semibold text-gray-900">gestion proactive</span>. Chaque intervention est tracée, chaque recommandation documentée, chaque décision éclairée.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 text-lg leading-relaxed">
                Que vous gériez une copropriété, un parc immobilier d'entreprise ou votre bien personnel, nous sommes votre <span className="font-semibold text-primary-600">interlocuteur unique</span> pour tous vos besoins techniques — avec la rigueur et la réactivité que vous attendez.
              </p>
            </motion.div>

            {/* Client Types */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4 text-sm font-medium text-gray-600"
            >
              <Users className="w-5 h-5 text-primary-600" />
              <span>Syndics • Entreprises • Propriétaires</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Process Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Notre Méthode
              </h3>

              {/* Process Steps */}
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={stepVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex gap-4 group"
                    >
                      {/* Icon Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Step Number */}
                      <div className="flex-shrink-0 text-3xl font-bold text-gray-200 group-hover:text-primary-200 transition-colors duration-300">
                        {index + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social & Human Commitments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-primary-50 via-blue-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border border-primary-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Nos Engagements Sociaux & Humains
                </h3>
                <p className="text-primary-700 font-medium">
                  Une entreprise performante est aussi une entreprise responsable
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Emplois locaux et formation continue</span> : nous nous engageons activement dans la création d'opportunités professionnelles et l'accompagnement vers l'insertion.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Égalité des chances</span> : recrutement sans distinction d'origine, de convictions, de genre ou d'orientation, dans un esprit de respect et de professionnalisme.
                  </p>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Environnement inclusif</span> : nous favorisons un cadre de travail basé sur la compétence, la motivation et la volonté de progresser ensemble.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Culture d'entreprise solide</span> : cet engagement humain contribue directement à la qualité de service que nous offrons à nos clients.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proof Chips - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {proofChips.map((chip, index) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-md border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-gray-700">
                  {chip.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
