import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHeaderHeight } from '../hooks/useHeaderHeight';
import { useHoverCapable } from '../hooks/useHoverCapable';

interface ExpertisePopoverProps {
  isOpen: boolean;
  anchorElement: HTMLElement | null;
  title: string;
  teaser: string;
  description: string;
  icon: LucideIcon;
  onClose: () => void;
  onHover?: () => void;
}

const ExpertisePopover: React.FC<ExpertisePopoverProps> = ({
  isOpen,
  anchorElement,
  description,
  onClose,
  onHover
}) => {
  const { t } = useTranslation();
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, maxHeight: 320, direction: 'down' });
  const headerHeight = useHeaderHeight();
  const isHoverCapable = useHoverCapable();

  useEffect(() => {
    if (!isOpen || !anchorElement) return;

    const calculatePosition = () => {
      const anchorRect = anchorElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const safeTop = headerHeight + 12;
      const safeMargin = 24;
      const desiredPopupHeight = 320;

      // Calculate available space
      const spaceBelow = viewportHeight - anchorRect.bottom - safeMargin;
      const spaceAbove = anchorRect.top - safeTop - safeMargin;

      let top = 0;
      let maxHeight = desiredPopupHeight;
      let direction = 'down';

      // Flip logic
      if (spaceBelow >= desiredPopupHeight) {
        // Open below
        top = anchorRect.bottom + 12;
        direction = 'down';
      } else if (spaceAbove >= desiredPopupHeight) {
        // Open above
        top = anchorRect.top - desiredPopupHeight - 12;
        direction = 'up';
      } else {
        // Clamp - choose best direction
        if (spaceBelow >= spaceAbove) {
          top = anchorRect.bottom + 12;
          maxHeight = Math.max(180, spaceBelow - 16);
          direction = 'down';
        } else {
          maxHeight = Math.max(180, spaceAbove - 16);
          top = anchorRect.top - maxHeight - 12;
          direction = 'up';
        }
      }

      // CRITICAL: Never allow top to go above safe zone
      if (top < safeTop) {
        top = safeTop;
        maxHeight = Math.min(maxHeight, viewportHeight - safeTop - safeMargin);
      }

      // Horizontal positioning (match card width)
      const left = anchorRect.left;
      const width = anchorRect.width;

      setPosition({ 
        top, 
        left: Math.max(16, Math.min(left, viewportWidth - width - 16)),
        maxHeight,
        direction 
      });
    };

    calculatePosition();
    window.addEventListener('scroll', calculatePosition, { passive: true });
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isOpen, anchorElement, headerHeight]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !anchorElement) return null;

  const content = (
    <AnimatePresence>
      <motion.div
        ref={popoverRef}
        initial={{ opacity: 0, scale: 0.96, y: position.direction === 'down' ? -8 : 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: position.direction === 'down' ? -8 : 8 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${anchorElement.getBoundingClientRect().width}px`,
          maxHeight: `${position.maxHeight}px`,
          zIndex: 9999
        }}
        className="pointer-events-auto"
        onMouseEnter={(e) => {
          e.stopPropagation();
          onHover?.();
        }}
        onMouseLeave={onClose}
      >
        <div className="mx-4 md:mx-6 bg-white/98 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-2xl shadow-gray-900/10 overflow-hidden">
          {/* Header */}
          {!isHoverCapable && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-900">{t('expertises.popover.details')}</span>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={t('expertises.popover.close')}
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          )}

          {/* Content */}
          <div 
            className="overflow-y-auto px-6 py-5 md:px-8 md:py-6"
            style={{ maxHeight: `${position.maxHeight - (!isHoverCapable ? 100 : 60)}px` }}
          >
            <p 
              className="text-gray-800 text-sm md:text-base leading-relaxed [&>strong]:font-bold [&>strong]:text-gray-900"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Footer hint */}
          {isHoverCapable && (
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50/80">
              <p className="text-xs text-gray-600 text-center">
                {t('expertises.popover.escHint')} <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-800">Esc</kbd>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};

export default ExpertisePopover;
