import { useParams } from 'react-router-dom';
import ServicePage from './ServicePage';
import NotFoundPage from './NotFoundPage';

const KNOWN_SERVICES = [
  'renovation',
  'electricite',
  'plomberie',
  'chauffage',
  'climatisation',
  'menuiserie',
  'peinture',
  'carrelage',
] as const;

const capitalizeCity = (slug: string): string =>
  slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');

const SlugDispatcher: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <NotFoundPage />;

  const matchedService = KNOWN_SERVICES.find(service =>
    slug.startsWith(`${service}-`)
  );

  if (matchedService) {
    const citySlug = slug.slice(matchedService.length + 1);
    return <ServicePage service={matchedService} city={capitalizeCity(citySlug)} />;
  }

  return <NotFoundPage />;
};

export default SlugDispatcher;
