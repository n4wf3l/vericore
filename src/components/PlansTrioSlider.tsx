import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PlanCard from './PlanCard';
import { plans } from '../data/plans';

const PlansTrioSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const ROTATION_DURATION = 5000; // 5 seconds
  const PROGRESS_TICK = 50; // Update progress every 50ms

  const startRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    setProgress(0);
    
    // Progress animation
    progressIntervalRef.current = window.setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / (ROTATION_DURATION / PROGRESS_TICK));
      });
    }, PROGRESS_TICK);

    // Rotation
    intervalRef.current = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % plans.length);
      setProgress(0);
    }, ROTATION_DURATION);
  };

  const stopRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && !isPaused) {
      startRotation();
    }

    return () => {
      stopRotation();
    };
  }, [isPaused, activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    stopRotation();
    setIsPaused(true);
    
    // Resume after 3 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  const prevIndex = (activeIndex - 1 + plans.length) % plans.length;
  const nextIndex = (activeIndex + 1) % plans.length;

  return (
    <div className="relative">
      {/* Trio Stack */}
      <div 
        className="relative h-[600px] md:h-[700px] flex items-center justify-center py-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full max-w-4xl">
          {/* Previous card (top, small, faded) */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateY(-60px)' }}>
            <PlanCard 
              plan={plans[prevIndex]} 
              isActive={false}
              position="prev"
            />
          </div>

          {/* Current card (middle, large, bright) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlanCard 
              plan={plans[activeIndex]} 
              isActive={true}
              position="current"
            />
          </div>

          {/* Next card (bottom, small, faded) */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateY(60px)' }}>
            <PlanCard 
              plan={plans[nextIndex]} 
              isActive={false}
              position="next"
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots with Progress */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {plans.map((plan, index) => (
          <button
            key={plan.id}
            onClick={() => handleDotClick(index)}
            className="relative group"
            aria-label={`Aller au plan ${plan.name}`}
          >
            {/* Background circle */}
            <div className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === activeIndex 
                ? 'bg-primary-500 scale-125' 
                : 'bg-white/30 group-hover:bg-white/50'
              }
            `} />
            
            {/* Progress ring (only for active) */}
            {index === activeIndex && (
              <svg 
                className="absolute inset-0 -m-2 w-7 h-7" 
                style={{ transform: 'rotate(-90deg)' }}
              >
                <circle
                  cx="14"
                  cy="14"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-primary-400/30"
                />
                <motion.circle
                  cx="14"
                  cy="14"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-primary-400"
                  strokeDasharray={`${2 * Math.PI * 12}`}
                  strokeDashoffset={`${2 * Math.PI * 12 * (1 - progress / 100)}`}
                  style={{ transition: 'stroke-dashoffset 0.05s linear' }}
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlansTrioSlider;
