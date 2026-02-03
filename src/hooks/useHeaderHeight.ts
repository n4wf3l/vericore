import { useState, useEffect } from 'react';

export const useHeaderHeight = (): number => {
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const measureHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };

    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, []);

  return headerHeight;
};
