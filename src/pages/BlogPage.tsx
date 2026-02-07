/**
 * Page index du blog
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import OptimizedImage from '../components/OptimizedImage';
import { blogPosts, blogAuthors } from '../data/blog';
import { BASE_URL } from '../config/seo.config';
import { Clock, User, Calendar, Search } from 'lucide-react';
import type { BlogCategory } from '../types/blog';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const seoConfig = {
    title: 'Blog Rénovation Bruxelles - Conseils, Guides & Actualités | Vericore',
    description: 'Découvrez nos articles sur la rénovation, l\'électricité, la plomberie et le chauffage à Bruxelles. Conseils d\'experts, guides pratiques et actualités.',
    h1: 'Blog Vericore - Conseils & Guides',
    canonical: `${BASE_URL}/blog`,
  };

  const categories: { key: BlogCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'Tous les articles' },
    { key: 'conseils', label: 'Conseils' },
    { key: 'guides', label: 'Guides' },
    { key: 'renovation', label: 'Rénovation' },
    { key: 'electricite', label: 'Électricité' },
    { key: 'plomberie', label: 'Plomberie' },
    { key: 'chauffage', label: 'Chauffage' },
    { key: 'tendances', label: 'Tendances' },
  ];

  // Filtrer les articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Article vedette (le plus récent)
  const featuredPost = blogPosts[0];

  return (
    <>
      <SEOHead config={seoConfig} />
      
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {seoConfig.h1}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Astuces, guides pratiques et actualités pour réussir vos travaux à Bruxelles
            </p>
          </div>
        </section>

        {/* Barre de recherche et filtres */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Recherche */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Catégories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === cat.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Article vedette */}
        {selectedCategory === 'all' && searchQuery === '' && featuredPost && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Article à la une
              </h2>
              
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group grid lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="h-64 lg:h-full">
                  <OptimizedImage
                    src={featuredPost.featuredImage}
                    alt={featuredPost.featuredImageAlt}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4 self-start">
                    {featuredPost.category}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogAuthors[featuredPost.author].name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readingTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Liste des articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedCategory === 'all' ? 'Tous les articles' : `Articles : ${categories.find(c => c.key === selectedCategory)?.label}`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Aucun article ne correspond à votre recherche
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48">
                      <OptimizedImage
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                        objectFit="cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString('fr-BE', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="bg-primary-700 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez informé de nos nouveaux articles
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Recevez nos conseils et guides directement dans votre boîte mail
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
