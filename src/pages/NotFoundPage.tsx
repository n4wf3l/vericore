import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BASE_URL } from '../config/seo.config';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        config={{
          title: 'Page introuvable (404) | Vericore',
          description: "La page que vous recherchez n'existe pas ou a été déplacée.",
          canonical: `${BASE_URL}/404`,
          noIndex: true,
        }}
      />
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-white">
        <div className="max-w-xl mx-auto text-center px-4">
          <p className="text-primary-600 font-semibold mb-2">404</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page introuvable
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
