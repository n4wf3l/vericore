import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import MobileStickyCTA from './components/mobile/MobileStickyCTA';
import SplashScreen from './components/SplashScreen';
import CookieBanner from './components/CookieBanner';
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
    // URL avec préfixe langue = intention claire, pas besoin du splash
    const path = window.location.pathname;
    if (path.startsWith('/nl/') || path === '/nl' || path.startsWith('/en/') || path === '/en') return;
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
              {/* FR (default, no prefix) */}
              <Route path="/" element={<HomePage />} />
              <Route path="/expertises" element={<ExpertisesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/garanties" element={<GuaranteesPage />} />
              <Route path="/mentions-legales" element={<LegalPage />} />
              <Route path="/google-business" element={<GoogleBusinessPage />} />
              <Route path="/commune/:commune" element={<CommunePage lang="fr" />} />
              <Route path="/:slug" element={<SlugDispatcher lang="fr" />} />

              {/* NL */}
              <Route path="/nl" element={<HomePage />} />
              <Route path="/nl/expertises" element={<ExpertisesPage />} />
              <Route path="/nl/projects" element={<ProjectsPage />} />
              <Route path="/nl/faq" element={<FAQPage />} />
              <Route path="/nl/blog" element={<BlogPage />} />
              <Route path="/nl/blog/:slug" element={<BlogPostPage />} />
              <Route path="/nl/garanties" element={<GuaranteesPage />} />
              <Route path="/nl/mentions-legales" element={<LegalPage />} />
              <Route path="/nl/google-business" element={<GoogleBusinessPage />} />
              <Route path="/nl/commune/:commune" element={<CommunePage lang="nl" />} />
              <Route path="/nl/:slug" element={<SlugDispatcher lang="nl" />} />

              {/* EN */}
              <Route path="/en" element={<HomePage />} />
              <Route path="/en/expertises" element={<ExpertisesPage />} />
              <Route path="/en/projects" element={<ProjectsPage />} />
              <Route path="/en/faq" element={<FAQPage />} />
              <Route path="/en/blog" element={<BlogPage />} />
              <Route path="/en/blog/:slug" element={<BlogPostPage />} />
              <Route path="/en/garanties" element={<GuaranteesPage />} />
              <Route path="/en/mentions-legales" element={<LegalPage />} />
              <Route path="/en/google-business" element={<GoogleBusinessPage />} />
              <Route path="/en/commune/:commune" element={<CommunePage lang="en" />} />
              <Route path="/en/:slug" element={<SlugDispatcher lang="en" />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
        {/* Sticky mobile CTA - appears site-wide on mobile only */}
        <MobileStickyCTA />

        {/* Bandeau RGPD cookies (uniquement en runtime, pas prerender) */}
        <CookieBanner />

        {/* Splash screen overlay - glassmorphism layer on top */}
        {showSplash && <SplashScreen onLanguageSelect={handleLanguageSelect} />}
        
        {/* Language selector overlay - same as splash but for language change */}
        {showLanguageSelector && <SplashScreen onLanguageSelect={handleLanguageSelectorClose} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
