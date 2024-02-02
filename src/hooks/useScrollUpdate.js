import { useLayoutEffect } from 'react';

const useScrollUpdate = (isScrollingDown, setIsScrollingDown, setIsScrollBelowThreshold, scrollThreshold, navbarThreshold) => {
  useLayoutEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY;

      if (direction !== isScrollingDown && Math.abs(scrollY - lastScrollY) > scrollThreshold) {
        setIsScrollingDown(direction);
      }

      lastScrollY = Math.max(0, scrollY);
    };

    const updateScrollHeader = () => {
      setIsScrollBelowThreshold(window.scrollY >= navbarThreshold);
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollDirection();
          updateScrollHeader();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown, setIsScrollingDown, setIsScrollBelowThreshold, scrollThreshold, navbarThreshold]);
};

export default useScrollUpdate;
