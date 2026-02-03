import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Hero from './sections/Hero';
import ExpertisesSection from './sections/ExpertisesSection';
import MaintenancePlansSection from './sections/MaintenancePlansSection';
import Projects from './sections/Projects';
import WhyVericore from './sections/WhyVericore';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExpertisesSection />
        <MaintenancePlansSection />
        <Projects />
        <WhyVericore />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
