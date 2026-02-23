"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6)',
          transformOrigin: '0%',
          zIndex: 100,
          scaleX,
          pointerEvents: 'none'
        }}
      />


    </>
  );
};

const SECTION_IDS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
] as const;

const MOBILE_BREAKPOINT = 768;

export const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDesktop, setIsDesktop] = useState(false);
  const sections = useMemo(() => SECTION_IDS, []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`);
    setIsDesktop(mq.matches);
    const handler = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, isDesktop]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isDesktop) return null;

  return (
    <motion.nav
      className="section-navigation"
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {sections.map(({ id, label }) => (
        <motion.button
          key={id}
          onClick={() => scrollToSection(id)}
          className="section-nav-dot"
          style={{
            width: activeSection === id ? '40px' : '12px',
            height: '12px',
            borderRadius: '6px',
            border: 'none',
            background: activeSection === id 
              ? 'linear-gradient(90deg, #f59e0b, #ec4899)' 
              : 'rgba(156, 163, 175, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            backdropFilter: 'blur(10px)'
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={label}
        >
          {activeSection === id && (
            <motion.div
              layoutId="activeSection"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '6px',
                background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
              }}
            />
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
};
