import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import ExpertisesSection from './sections/ExpertisesSection';
import MaintenancePlansSection from './sections/MaintenancePlansSection';
import Projects from './sections/Projects';
import WhyVericore from './sections/WhyVericore';
import FAQ from './sections/FAQ';
import ContactSection from './sections/ContactSection';
import PartnersSection from './sections/PartnersSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExpertisesSection />
        <MaintenancePlansSection />
        <Projects />
        <WhyVericore />
        <FAQ />
        <ContactSection />
        <PartnersSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
