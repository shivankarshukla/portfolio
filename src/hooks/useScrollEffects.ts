"use client";

import { useEffect, useState } from 'react';

export const useScrollEffects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrollY(currentScrollY);
      setScrollProgress(currentScrollY / maxScroll);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Smooth easing function
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  
  // Smooth parallax calculations
  const getParallaxY = (speed: number = 0.5) => scrollY * speed;
  const getParallaxOpacity = (start: number = 0, end: number = 1) => {
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    return start + (end - start) * easeOutCubic(progress);
  };
  
  // Smooth scale effect
  const getParallaxScale = (minScale: number = 0.8, maxScale: number = 1) => {
    const progress = Math.min(Math.max(scrollProgress, 0), 1);
    return minScale + (maxScale - minScale) * easeOutCubic(progress);
  };

  return {
    scrollY,
    scrollProgress,
    getParallaxY,
    getParallaxOpacity,
    getParallaxScale,
    easeOutCubic
  };
};
