import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import MobileStickyCTA from './components/mobile/MobileStickyCTA';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import ExpertisesPage from './pages/ExpertisesPage';
import ProjectsPage from './pages/ProjectsPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('vericore-language-selected');
    if (!hasSelectedLanguage) {
      setShowSplash(true);
    }
  }, []);

  const handleLanguageSelect = () => {
    localStorage.setItem('vericore-language-selected', 'true');
    setShowSplash(false);
    setShowLanguageSelector(false);
  };

  const handleLanguageSelectorClose = () => {
    setShowLanguageSelector(false);
  };

  const handleOpenLanguageSelector = () => {
    setShowLanguageSelector(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Main content - always rendered, visible behind splash */}
        <Header onOpenLanguageSelector={handleOpenLanguageSelector} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/expertises" element={<ExpertisesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        {/* Sticky mobile CTA - appears site-wide on mobile only */}
        <MobileStickyCTA />

        {/* Splash screen overlay - glassmorphism layer on top */}
        {showSplash && <SplashScreen onLanguageSelect={handleLanguageSelect} />}
        
        {/* Language selector overlay - same as splash but for language change */}
        {showLanguageSelector && <SplashScreen onLanguageSelect={handleLanguageSelectorClose} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
