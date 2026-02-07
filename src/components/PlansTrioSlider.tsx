import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PlanCard from './PlanCard';
import type { Plan } from '../data/plans';

interface PlansTrioSliderProps {
  plans: Plan[];
}

const PlansTrioSlider: React.FC<PlansTrioSliderProps> = ({ plans }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // const [progress, setProgress] = useState(0); // Not currently used in UI
  const [dragDirection] = useState(0); // Used in animations
  const [isInView, setIsInView] = useState(false);
  const intervalRef = useRef<number | null>(null);
  // const progressIntervalRef = useRef<number | null>(null); // For future progress bar
  const containerRef = useRef<HTMLDivElement>(null);

  const ROTATION_DURATION = 6000;
  // const PROGRESS_TICK = 50; // For future progress bar

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    // setProgress(0); // Not currently used
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % plans.length);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + plans.length) % plans.length);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    // Progress bar not currently implemented in UI
    // if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (!isPaused) {
      // setProgress(0);
      // progressIntervalRef.current = window.setInterval(() => {
      //   setProgress(prev => {
      //     if (prev >= 100) return 0;
      //     return prev + (100 / (ROTATION_DURATION / PROGRESS_TICK));
      //   });
      // }, PROGRESS_TICK);

      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % plans.length);
        // setProgress(0);
      }, ROTATION_DURATION);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <div 
      ref={containerRef}
      className="relative focus:outline-none min-h-[600px]" 
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop: Peek Effect Carousel */}
      <div className="hidden lg:block relative overflow-hidden pt-12 pb-0">
        <div className="flex items-center justify-center gap-6 px-20">
          {/* Prev card peek */}
          <motion.div 
            className="w-64 opacity-40 cursor-pointer hover:opacity-60 transition-opacity"
            onClick={prevSlide}
          >
            <PlanCard plan={plans[(activeIndex - 1 + plans.length) % plans.length]} isActive={false} position="prev" />
          </motion.div>

          {/* Current card */}
          <motion.div 
            className="flex-1 max-w-2xl"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: dragDirection * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dragDirection * 100 }}
                transition={{ duration: 0.3 }}
              >
                <PlanCard plan={plans[activeIndex]} isActive={true} position="current" />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Next card peek */}
          <motion.div 
            className="w-64 opacity-40 cursor-pointer hover:opacity-60 transition-opacity"
            onClick={nextSlide}
          >
            <PlanCard plan={plans[(activeIndex + 1) % plans.length]} isActive={false} position="next" />
          </motion.div>
        </div>
      </div>

      {/* Mobile: Single Card */}
      <div className="lg:hidden relative pt-12 pb-0">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="px-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <PlanCard plan={plans[activeIndex]} isActive={true} position="current" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Arrow Controls - HIDDEN on mobile, only on desktop */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-2 top-2 w-14 h-14 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full shadow-xl items-center justify-center transition-all hover:scale-110 z-10 hover:border-primary-600"
        aria-label={t('plans.previousPlan', { defaultValue: 'Plan précédent' })}
      >
        <ChevronLeft className="w-7 h-7 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-0 bottom-0 w-14 h-14 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full shadow-xl items-center justify-center transition-all hover:scale-110 z-10 hover:border-primary-600"
        aria-label={t('plans.nextPlan', { defaultValue: 'Plan suivant' })}
      >
        <ChevronRight className="w-7 h-7 text-gray-700" />
      </button>

      {/* Dots Navigation - LARGER hit area on mobile */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {plans.map((plan: Plan, index: number) => (
          <button
            key={plan.id}
            onClick={() => goToSlide(index)}
            className="relative p-3 lg:p-2 group"
            aria-label={t('plans.goToPlan', { defaultValue: `Aller au plan ${plan.name}` })}
          >
            <div className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === activeIndex 
                ? 'bg-primary-600 scale-125' 
                : 'bg-gray-300 group-hover:bg-gray-400'
              }
            `} />
          </button>
        ))}
      </div>

      {/* Keyboard hint - Desktop only */}
      <p className="hidden lg:block text-center text-sm text-gray-400 mt-4">
        {t('plans.keyboardHint')}
      </p>

      {/* Swipe hint - Mobile only */}
      <p className="lg:hidden text-center text-xs text-gray-500 mt-3">
        {t('plans.swipeHint', { defaultValue: '← Glissez pour naviguer →' })}
      </p>
    </div>
  );
};

export default PlansTrioSlider;
