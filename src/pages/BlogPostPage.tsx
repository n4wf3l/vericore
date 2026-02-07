/**
 * Page d'article de blog avec maillage interne automatique
 */

import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import OptimizedImage from '../components/OptimizedImage';
import { getPostBySlug, blogAuthors } from '../data/blog';
import { BASE_URL } from '../config/seo.config';
import { Clock, User, Calendar, Tag, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import ReactMarkdown from 'react-markdown';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article non trouvé
          </h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            ← Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const author = blogAuthors[post.author];

  const seoConfig = {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    h1: post.title,
    canonical: `${BASE_URL}/blog/${post.slug}`,
    ogType: 'article' as const,
    ogImage: `${BASE_URL}${post.featuredImage}`,
    ogImageAlt: post.featuredImageAlt,
    schemaType: 'WebPage' as const,
  };

  // Schema Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': post.schemaType,
    headline: post.title,
    description: post.excerpt,
    image: `${BASE_URL}${post.featuredImage}`,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vericore SRL',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': seoConfig.canonical,
    },
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead config={seoConfig} />
      <StructuredData type="WebPage" data={articleSchema} />
      <StructuredData 
        type="Breadcrumb" 
        data={[
          { name: 'Accueil', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: post.title, url: seoConfig.canonical },
        ]}
      />

      <article className="min-h-screen bg-white pt-20">
        {/* Header */}
        <header className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Link>
            </nav>

            {/* Catégorie */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('fr-BE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        {/* Image principale */}
        <div className="max-w-5xl mx-auto px-4 py-8">
          <OptimizedImage
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="w-full rounded-lg shadow-xl"
            loading="eager"
            width={1200}
            height={630}
          />
        </div>

        {/* Contenu */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                // Transformer les liens en composants Link de React Router pour les URLs internes
                a: ({ node, href, children, ...props }) => {
                  const isInternal = href?.startsWith('/');
                  if (isInternal && href) {
                    return (
                      <Link to={href} className="text-primary-600 hover:text-primary-700 underline">
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-gray-500" />
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Auteur */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                {author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {author.name}
                </h3>
                <p className="text-primary-600 mb-2">{author.role}</p>
                <p className="text-gray-600">{author.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services liés */}
        {post.relatedServices.length > 0 && (
          <section className="bg-gray-50 py-16 mt-12">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Services liés à cet article
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {post.relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    to={`/${service}-bruxelles`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                      {service}
                    </h3>
                    <span className="text-primary-600 font-medium">
                      En savoir plus →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin d'aide pour votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Notre équipe d'experts est à votre disposition
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              Demander un devis gratuit
            </Button>
          </div>
        </section>
      </article>
    </>
  );
};

export default BlogPostPage;
