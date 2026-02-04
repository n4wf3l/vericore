import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, style }) => {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)} style={style}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {subtitle && (
        <p className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
};
