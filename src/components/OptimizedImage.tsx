/**
 * Composant OptimizedImage - Images optimisées avec WebP, lazy loading et srcset
 * Performance 2026: Core Web Vitals, LCP optimization
 */

import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  /** Chemin de l'image source (sans extension) */
  src: string;
  /** Texte alternatif (obligatoire pour le SEO) */
  alt: string;
  /** Largeur de l'image en pixels */
  width?: number;
  /** Hauteur de l'image en pixels */
  height?: number;
  /** Classes CSS personnalisées */
  className?: string;
  /** Priorité de chargement (eager pour LCP images) */
  loading?: 'lazy' | 'eager';
  /** Tailles responsive pour srcset */
  sizes?: string;
  /** Format d'image prioritaire */
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  /** Qualité de l'image (1-100) */
  quality?: number;
  /** Callback au chargement de l'image */
  onLoad?: () => void;
  /** Callback en cas d'erreur */
  onError?: () => void;
  /** Image de placeholder pendant le chargement */
  placeholder?: string;
  /** Comportement object-fit */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * Composant d'image optimisée avec support WebP/AVIF, lazy loading et responsive
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes,
  format = 'webp',
  quality: _quality = 85,
  onLoad,
  onError,
  placeholder,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer pour lazy loading
  useEffect(() => {
    if (loading === 'eager' || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Charger 50px avant d'être visible
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [loading]);

  // Générer les URLs avec différentes tailles
  const generateSrcSet = (baseSrc: string, format: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
    const extension = format === 'avif' ? '.avif' : format === 'webp' ? '.webp' : '.jpg';
    
    return widths
      .map((w) => `${baseSrc}-${w}w${extension} ${w}w`)
      .join(', ');
  };

  // Générer les sources pour picture element
  const getImageSources = () => {
    const sources = [];
    
    // AVIF en priorité (meilleure compression)
    if (format === 'avif' || format === 'webp') {
      sources.push({
        srcSet: generateSrcSet(src, 'avif'),
        type: 'image/avif',
      });
    }
    
    // WebP en fallback
    if (format === 'webp' || format === 'avif') {
      sources.push({
        srcSet: generateSrcSet(src, 'webp'),
        type: 'image/webp',
      });
    }
    
    // JPEG/PNG en dernier fallback
    sources.push({
      srcSet: generateSrcSet(src, 'jpg'),
      type: 'image/jpeg',
    });
    
    return sources;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      }}
    >
      {/* Placeholder pendant le chargement */}
      {!isLoaded && placeholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          style={{ objectFit }}
          aria-hidden="true"
        />
      )}

      {/* Skeleton loader si pas de placeholder */}
      {!isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {/* Image principale */}
      {(isInView || loading === 'eager') && !hasError && (
        <picture>
          {getImageSources().map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              type={source.type}
              sizes={defaultSizes}
            />
          ))}
          <img
            ref={imgRef}
            src={`${src}.jpg`}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit }}
            decoding="async"
          />
        </picture>
      )}

      {/* Message d'erreur */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Image indisponible</span>
        </div>
      )}
    </div>
  );
};

/**
 * Hook pour précharger des images critiques
 */
export const usePreloadImages = (images: string[]) => {
  useEffect(() => {
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/webp';
      document.head.appendChild(link);
    });
  }, [images]);
};

/**
 * Composant BackgroundImage optimisé
 */
interface BackgroundImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  children,
  className = '',
  overlay = false,
  overlayOpacity = 0.5,
}) => {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full"
        objectFit="cover"
        loading="lazy"
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default OptimizedImage;
