import React from 'react';
import { cn } from '../lib/utils';
import type { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  icon: Icon, 
  children, 
  variant = 'primary',
  className 
}) => {
  const variants = {
    primary: 'bg-primary-50 text-primary-700 border-primary-200',
    secondary: 'bg-gray-100 text-gray-700 border-gray-200',
    success: 'bg-green-50 text-green-700 border-green-200'
  };

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm',
      variants[variant],
      className
    )}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  );
};

export default Badge;
