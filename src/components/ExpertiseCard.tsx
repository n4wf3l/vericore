import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  teaser: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  onHoverStart: (element: HTMLElement) => void;
  onHoverEnd: () => void;
  isActive: boolean;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  teaser,
  icon: Icon,
  delay = 0,
  onHoverStart,
  onHoverEnd,
  isActive
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      onHoverStart(cardRef.current);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHoverEnd}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-white to-gray-50
        backdrop-blur-md border border-gray-200
        rounded-2xl p-6 md:p-8
        transition-all duration-300
        hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10
        ${isActive ? 'ring-2 ring-primary-500/30 border-primary-500/30' : ''}
      `}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative">
        {/* Icon */}
        <motion.div
          animate={{ scale: isActive ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors"
        >
          <Icon className="w-7 h-7 text-primary-400" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        {/* Teaser */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {teaser}
        </p>
      </div>

      {/* Focus ring for accessibility */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500 opacity-0 focus-visible:opacity-100 pointer-events-none" />
    </motion.div>
  );
};

export default ExpertiseCard;