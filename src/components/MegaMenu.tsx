import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICE_URL_SLUGS, type Lang, type ServiceKey } from '../data/serviceContent';

const SERVICES_ORDER: ServiceKey[] = [
  'plomberie', 'electricite', 'chauffage', 'renovation',
  'peinture', 'carrelage', 'menuiserie', 'climatisation',
];

const TOP_COMMUNES = [
  'bruxelles', 'ixelles', 'uccle', 'schaerbeek',
  'etterbeek', 'saint-gilles', 'anderlecht', 'molenbeek-saint-jean',
];

const SERVICE_LABELS: Record<Lang, Record<ServiceKey, string>> = {
  fr: {
    renovation: 'Rénovation', electricite: 'Électricien', plomberie: 'Plombier',
    chauffage: 'Chauffagiste', climatisation: 'Climatisation', menuiserie: 'Menuisier',
    peinture: 'Peintre', carrelage: 'Carreleur',
  },
  nl: {
    renovation: 'Renovatie', electricite: 'Elektricien', plomberie: 'Loodgieter',
    chauffage: 'Verwarmingsinstallateur', climatisation: 'Airco', menuiserie: 'Schrijnwerker',
    peinture: 'Schilder', carrelage: 'Tegelzetter',
  },
  en: {
    renovation: 'Renovation', electricite: 'Electrician', plomberie: 'Plumber',
    chauffage: 'Heating', climatisation: 'Air conditioning', menuiserie: 'Carpenter',
    peinture: 'Painter', carrelage: 'Tiler',
  },
};

const MENU_LABELS: Record<Lang, { title: string; services: string; communes: string; popular: string }> = {
  fr: { title: 'Services', services: 'Nos métiers', communes: 'Nos zones', popular: 'Combinaisons populaires' },
  nl: { title: 'Diensten', services: 'Onze vakken', communes: 'Onze zones', popular: 'Populaire combinaties' },
  en: { title: 'Services', services: 'Our trades', communes: 'Our areas', popular: 'Popular combinations' },
};

const capitalizeCommune = (slug: string): string =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');

const MegaMenu: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2) as Lang;
  const langPrefix = lang === 'fr' ? '' : `/${lang}`;
  const serviceSlugs = SERVICE_URL_SLUGS[lang] ?? SERVICE_URL_SLUGS.fr;
  const serviceLabels = SERVICE_LABELS[lang] ?? SERVICE_LABELS.fr;
  const menuLabels = MENU_LABELS[lang] ?? MENU_LABELS.fr;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularCombos: { service: ServiceKey; commune: string }[] = [
    { service: 'plomberie', commune: 'uccle' },
    { service: 'electricite', commune: 'ixelles' },
    { service: 'chauffage', commune: 'schaerbeek' },
    { service: 'renovation', commune: 'etterbeek' },
    { service: 'plomberie', commune: 'ixelles' },
    { service: 'electricite', commune: 'schaerbeek' },
  ];

  const closeAndScrollTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
        aria-expanded={isOpen}
      >
        {menuLabels.title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-1/2 -translate-x-1/2 mt-4 w-[720px] max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50"
        >
          <div className="grid grid-cols-3 gap-6">
            {/* Colonne 1 - Nos métiers */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-3">{menuLabels.services}</h4>
              <ul className="space-y-1.5">
                {SERVICES_ORDER.map(key => (
                  <li key={key}>
                    <Link
                      to={`${langPrefix}/${serviceSlugs[key]}-bruxelles`}
                      onClick={closeAndScrollTop}
                      className="text-sm text-gray-700 hover:text-primary-600 hover:underline transition-colors"
                    >
                      {serviceLabels[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 2 - Nos zones */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-3">{menuLabels.communes}</h4>
              <ul className="space-y-1.5">
                {TOP_COMMUNES.map(commune => (
                  <li key={commune}>
                    <Link
                      to={`${langPrefix}/${serviceSlugs.renovation}-${commune}`}
                      onClick={closeAndScrollTop}
                      className="text-sm text-gray-700 hover:text-primary-600 hover:underline transition-colors"
                    >
                      {capitalizeCommune(commune)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 - Combinaisons populaires */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-500 mb-3">{menuLabels.popular}</h4>
              <ul className="space-y-1.5">
                {popularCombos.map(({ service, commune }) => (
                  <li key={`${service}-${commune}`}>
                    <Link
                      to={`${langPrefix}/${serviceSlugs[service]}-${commune}`}
                      onClick={closeAndScrollTop}
                      className="text-sm text-gray-700 hover:text-primary-600 hover:underline transition-colors"
                    >
                      {serviceLabels[service]} {capitalizeCommune(commune)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
