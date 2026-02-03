import { useEffect, useState } from 'react';

/**
 * Hook to detect if the device supports hover interactions
 * Returns true for devices with mouse/trackpad, false for touch-only devices
 */
export const useHoverCapable = (): boolean => {
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    // Check if the device supports hover
    const hasHover = window.matchMedia('(hover: hover)').matches;
    setIsHoverCapable(hasHover);
  }, []);

  return isHoverCapable;
};
