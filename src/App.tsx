import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
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
        <Services />
        <Projects />
        <WhyVericore />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
