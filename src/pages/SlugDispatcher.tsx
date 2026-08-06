import { useParams } from 'react-router-dom';
import ServicePage from './ServicePage';
import NotFoundPage from './NotFoundPage';
import { SERVICE_URL_SLUGS, resolveServiceFromSlug, type Lang, type ServiceKey } from '../data/serviceContent';

const capitalizeCity = (slug: string): string =>
  slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');

interface SlugDispatcherProps {
  lang?: Lang;
}

/**
 * Parse une URL comme `plombier-uccle` ou `loodgieter-uccle` :
 * essaie d'abord les slugs de la langue courante, puis les anciens slugs techniques.
 */
const SlugDispatcher: React.FC<SlugDispatcherProps> = ({ lang = 'fr' }) => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFoundPage />;

  // Tester tous les slugs possibles pour cette langue + fallback anciens slugs
  const candidateSlugs = [
    ...Object.values(SERVICE_URL_SLUGS[lang]),
    'renovation', 'electricite', 'plomberie', 'chauffage',
    'climatisation', 'menuiserie', 'peinture', 'carrelage',
  ];

  // On cherche le préfixe le plus long qui matche
  const matched = candidateSlugs
    .sort((a, b) => b.length - a.length)
    .find(s => slug === s || slug.startsWith(`${s}-`));

  if (!matched || slug === matched) return <NotFoundPage />;

  const serviceKey: ServiceKey | undefined = resolveServiceFromSlug(matched, lang);
  if (!serviceKey) return <NotFoundPage />;

  const citySlug = slug.slice(matched.length + 1);
  return <ServicePage service={serviceKey} city={capitalizeCity(citySlug)} lang={lang} />;
};

export default SlugDispatcher;
