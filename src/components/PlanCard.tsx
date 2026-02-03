import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Plan } from '../data/plans';

interface PlanCardProps {
  plan: Plan;
  isActive: boolean;
  position: 'prev' | 'current' | 'next';
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isActive, position }) => {
  const scale = isActive ? 1.05 : 0.92;
  const opacity = isActive ? 1 : 0.5;
  const zIndex = isActive ? 20 : position === 'prev' ? 10 : 5;

  return (
    <motion.div
      animate={{ 
        scale, 
        opacity,
        y: position === 'prev' ? -20 : position === 'next' ? 20 : 0
      }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{ zIndex }}
      className={`
        relative w-full max-w-4xl mx-auto
        bg-slate-950/30 backdrop-blur-2xl
        border rounded-3xl shadow-2xl
        transition-all duration-500
        ${isActive 
          ? 'border-primary-500/50 shadow-primary-500/20' 
          : 'border-white/10'
        }
      `}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-30`} />
      
      <div className="relative p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{plan.emoji}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white">{plan.name}</h3>
            </div>
            <p className="text-primary-400 font-semibold text-lg">{plan.badge}</p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
          {plan.tagline}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm md:text-base">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
          </div>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            {plan.priceNote}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanCard;
