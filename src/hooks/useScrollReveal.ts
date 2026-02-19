import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once revealed to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Use requestAnimationFrame for better performance
    const timeout = requestAnimationFrame(() => {
      const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
      scrollElements.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(timeout);
      observer.disconnect();
    };
  }, []);
};
