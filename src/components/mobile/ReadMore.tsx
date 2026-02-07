import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ReadMoreProps {
  children: React.ReactNode;
  maxLines?: number;
  className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, maxLines = 3, className = '' }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      {/* Desktop: always show full content */}
      <div className="hidden lg:block">
        {children}
      </div>

      {/* Mobile: collapsible content */}
      <div className="lg:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : undefined,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={isExpanded ? '' : `line-clamp-${maxLines}`}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700 active:scale-95 transition-all"
          aria-label={isExpanded ? t('mobile.readLess', { defaultValue: 'Lire moins' }) : t('mobile.readMore', { defaultValue: 'Lire plus' })}
        >
          <span>{isExpanded ? t('mobile.readLess', { defaultValue: 'Lire moins' }) : t('mobile.readMore', { defaultValue: 'Lire plus' })}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
