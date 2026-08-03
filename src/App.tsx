import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import MobileStickyCTA from './components/mobile/MobileStickyCTA';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';

const ExpertisesPage = lazy(() => import('./pages/ExpertisesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const GuaranteesPage = lazy(() => import('./pages/GuaranteesPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const GoogleBusinessPage = lazy(() => import('./pages/GoogleBusinessPage'));
const CommunePage = lazy(() => import('./pages/CommunePage'));
const SlugDispatcher = lazy(() => import('./pages/SlugDispatcher'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
          <Suspense fallback={<div className="min-h-screen" />}>
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
          </Suspense>
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
