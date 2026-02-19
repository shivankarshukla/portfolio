"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <motion.header 
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '0 2rem'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2 
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4rem'
      }}>
        {/* Logo/Name */}
        <div className="header-logo">
          <motion.div 
            className="wiggle-hover cartoon-pop"
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)'
            }}
            animate={{
              y: [0, -2, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SS
          </motion.div>
          <div>
            <h1 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: 0,
              lineHeight: '1.2'
            }}>
              Shivankar Shukla
            </h1>
            <p style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              margin: 0,
              lineHeight: '1'
            }}>
              Techops Engineer
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ThemeToggle />
          <ul className="header-nav">
            <li>
              <motion.button 
                onClick={() => scrollToSection('hero')}
                className="wiggle-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: '#007AFF',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#007AFF'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
              >
                Home
              </motion.button>
            </li>
            <li>
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="wiggle-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: '#007AFF',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f59e0b'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
              >
                Resume
              </motion.button>
            </li>

            <li>
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="wiggle-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: '#007AFF',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f59e0b'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
              >
                Projects
              </motion.button>
            </li>
            <li>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="wiggle-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#374151',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 0'
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: '#007AFF',
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f59e0b'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#374151'}
              >
                Contact
              </motion.button>
            </li>

          </ul>
        </nav>
      </div>
    </motion.header>
  );
};