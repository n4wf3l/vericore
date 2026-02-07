/**
 * Types pour le système de blog SEO
 */

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number; // en minutes
  relatedServices: string[];
  relatedCommunes: string[];
  seoTitle?: string;
  seoDescription?: string;
  schemaType: 'Article' | 'HowTo' | 'FAQPage';
}

export type BlogCategory = 
  | 'conseils'
  | 'guides'
  | 'actualites'
  | 'renovation'
  | 'electricite'
  | 'plomberie'
  | 'chauffage'
  | 'tendances';

export interface InternalLink {
  text: string;
  url: string;
  type: 'service' | 'commune' | 'blog' | 'page';
}

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  image?: string;
}
