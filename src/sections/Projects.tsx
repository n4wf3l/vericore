import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from '../components/Section';
import { projects } from '../data/content';
import { X, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionTitle
        subtitle="Nos réalisations"
        title="Projets Récents"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project.id)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-3 w-fit">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:translate-y-0 translate-y-2 transition-transform">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Project Details */}
              {projects.find(p => p.id === selectedProject) && (
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={projects.find(p => p.id === selectedProject)!.image}
                      alt={projects.find(p => p.id === selectedProject)!.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 w-fit">
                      {projects.find(p => p.id === selectedProject)!.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                      {projects.find(p => p.id === selectedProject)!.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-6">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>{projects.find(p => p.id === selectedProject)!.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Projet de rénovation complète réalisé avec soin et attention aux détails. 
                      Résultat moderne et fonctionnel qui répond parfaitement aux attentes du client.
                    </p>
                    <a href="#contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        Demander un projet similaire
                      </motion.button>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
