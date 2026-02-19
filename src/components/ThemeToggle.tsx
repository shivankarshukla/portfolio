"use client";

import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        position: 'relative',
        width: '60px',
        height: '32px',
        borderRadius: '16px',
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          : 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
        border: 'none',
        cursor: 'pointer',
        padding: '2px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: theme === 'dark' 
          ? '0 4px 15px rgba(102, 126, 234, 0.3)' 
          : '0 4px 15px rgba(255, 234, 167, 0.3)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          : 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)'
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="toggle-circle"
        style={{
          position: 'absolute',
          top: '2px',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }}
        animate={{
          left: theme === 'dark' ? '30px' : '2px'
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      >
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? (
            <FaMoon size={14} color="#667eea" />
          ) : (
            <FaSun size={14} color="#fab1a0" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
