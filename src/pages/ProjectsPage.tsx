import React from 'react';
import Projects from '../sections/Projects';
import ContactSection from '../sections/ContactSection';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <Projects />
      <ContactSection />
    </div>
  );
};

export default ProjectsPage;
