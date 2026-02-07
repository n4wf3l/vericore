import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const SCROLL_THRESHOLD = 300;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 8 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-6 right-6 z-[999] group"
          aria-label="Remonter en haut"
          type="button"
        >
          {/* Button container */}
          <div className="relative">
            {/* Glass effect button */}
            <div className="
              w-12 h-12 rounded-full
              bg-white/95 backdrop-blur-2xl
              border border-gray-200/60
              shadow-2xl shadow-black/10
              flex items-center justify-center
              transition-all duration-300
              group-hover:bg-white
              group-hover:border-primary-400/60
              group-hover:shadow-primary-500/20
              group-hover:scale-110
              group-focus-visible:ring-2 group-focus-visible:ring-primary-500 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-white
            ">
              {/* Arrow with subtle bob animation */}
              <motion.div
                animate={{ 
                  y: [0, -3, 0] 
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  // Respect reduced motion preference
                  ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches && {
                    animate: { y: 0 },
                    transition: { duration: 0 }
                  })
                }}
              >
                <ArrowUp className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors" />
              </motion.div>
            </div>

            {/* Hover glow effect */}
            <div className="
              absolute inset-0 rounded-full
              bg-primary-500/20 blur-lg
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              -z-10
            " />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
