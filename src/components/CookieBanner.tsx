import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Cookie } from 'lucide-react';
import type { Lang } from '../data/serviceContent';

const STORAGE_KEY = 'vericore-cookie-consent';

const LABELS: Record<Lang, {
  title: string;
  description: string;
  accept: string;
  reject: string;
  learnMore: string;
}> = {
  fr: {
    title: 'Nous respectons votre vie privée',
    description: "Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de tracking publicitaire n'est déposé sans votre accord explicite.",
    accept: 'Accepter',
    reject: 'Refuser',
    learnMore: 'Politique de confidentialité',
  },
  nl: {
    title: 'Wij respecteren uw privacy',
    description: "We gebruiken enkel technische cookies die nodig zijn voor de werking van de site. Er wordt geen enkele advertentie-trackingcookie geplaatst zonder uw uitdrukkelijke toestemming.",
    accept: 'Aanvaarden',
    reject: 'Weigeren',
    learnMore: 'Privacybeleid',
  },
  en: {
    title: 'We respect your privacy',
    description: "We only use technical cookies required for the site to function. No advertising tracking cookies are set without your explicit consent.",
    accept: 'Accept',
    reject: 'Decline',
    learnMore: 'Privacy policy',
  },
};

const CookieBanner: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2) as Lang;
  const labels = LABELS[lang] ?? LABELS.fr;
  const langPrefix = lang === 'fr' ? '' : `/${lang}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ne pas afficher pendant le prerender
    if ((window as unknown as { __PRERENDER_INJECTED?: unknown }).__PRERENDER_INJECTED) return;
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white border border-gray-200 rounded-xl shadow-2xl p-5 z-[60] animate-in slide-in-from-bottom-5"
    >
      <button
        onClick={handleReject}
        aria-label={labels.reject}
        className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
          <Cookie className="w-5 h-5 text-primary-600" />
        </div>
        <div>
          <h3 id="cookie-banner-title" className="font-semibold text-gray-900 mb-1">
            {labels.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {labels.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <button
          onClick={handleAccept}
          className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {labels.accept}
        </button>
        <button
          onClick={handleReject}
          className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
        >
          {labels.reject}
        </button>
      </div>

      <a
        href={`${langPrefix}/mentions-legales`}
        className="block mt-3 text-xs text-gray-500 hover:text-primary-600 underline text-center"
      >
        {labels.learnMore}
      </a>
    </div>
  );
};

export default CookieBanner;
