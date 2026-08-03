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
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GuaranteesPage from './pages/GuaranteesPage';
import LegalPage from './pages/LegalPage';
import GoogleBusinessPage from './pages/GoogleBusinessPage';
import CommunePage from './pages/CommunePage';
import SlugDispatcher from './pages/SlugDispatcher';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {
    if ((window as unknown as { __PRERENDER_INJECTED?: unknown }).__PRERENDER_INJECTED) return;
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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/garanties" element={<GuaranteesPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/google-business" element={<GoogleBusinessPage />} />
            <Route path="/commune/:commune" element={<CommunePage />} />
            <Route path="/:slug" element={<SlugDispatcher />} />
            <Route path="*" element={<NotFoundPage />} />
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
