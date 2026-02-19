"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // During SSR or if not within provider, return default values
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {}
    };
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light mode
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as Theme : null;
    const systemTheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
    
    // Apply theme-specific overrides
    applyThemeOverrides(initialTheme);
  }, []);

  const applyThemeOverrides = (currentTheme: Theme) => {
    if (typeof document === 'undefined') return;
    
    if (currentTheme === 'dark') {
      // Override problematic inline styles for dark mode
      const styleOverrides = document.createElement('style');
      styleOverrides.id = 'dark-theme-overrides';
      styleOverrides.innerHTML = `
        /* Override white/light backgrounds */
        [data-theme="dark"] section[id="about"] div[style*="rgba(255, 255, 255"] {
          background: rgba(15, 23, 42, 0.8) !important;
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] section[id="about"] div[style*="background: rgba(255, 255, 255"] {
          background: rgba(15, 23, 42, 0.8) !important;
          color: #cbd5e1 !important;
        }
        
        /* Fix skill tags - override all possible light backgrounds and colors */
        [data-theme="dark"] section[id="about"] span[style*="background"],
        [data-theme="dark"] section[id="about"] div[style*="background"][style*="border-radius"],
        [data-theme="dark"] section[id="about"] .skill-tag,
        [data-theme="dark"] section[id="about"] *[style*="padding"][style*="margin"][style*="background"] {
          background: rgba(30, 41, 59, 0.9) !important;
          color: #f1f5f9 !important;
          border: 1px solid rgba(148, 163, 184, 0.3) !important;
        }
        
        /* Override specific light colors */
        [data-theme="dark"] section[id="about"] *[style*="color: #6b7280"],
        [data-theme="dark"] section[id="about"] *[style*="color:#6b7280"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] section[id="about"] *[style*="color: #374151"],
        [data-theme="dark"] section[id="about"] *[style*="color:#374151"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] section[id="about"] *[style*="color: #1f2937"],
        [data-theme="dark"] section[id="about"] *[style*="color:#1f2937"] {
          color: #f1f5f9 !important;
        }
        
        /* Section headings */
        [data-theme="dark"] section[id="about"] h2[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] section[id="about"] h3[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] section[id="projects"] h2[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] section[id="projects"] h3[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] section[id="projects"] p[style*="color: #6b7280"] {
          color: #cbd5e1 !important;
        }
        
        /* Fix project technology tags - override all possible light backgrounds */
        [data-theme="dark"] section[id="projects"] span[style*="background"],
        [data-theme="dark"] section[id="projects"] div[style*="background"][style*="border-radius"],
        [data-theme="dark"] section[id="projects"] .tech-tag,
        [data-theme="dark"] section[id="projects"] .technology-tag,
        [data-theme="dark"] section[id="projects"] *[style*="padding"][style*="margin"][style*="background"] {
          background: rgba(30, 41, 59, 0.9) !important;
          color: #f1f5f9 !important;
          border: 1px solid rgba(148, 163, 184, 0.3) !important;
        }
        
        /* Override any white/light backgrounds in projects */
        [data-theme="dark"] section[id="projects"] div[style*="rgba(255, 255, 255"] {
          background: rgba(15, 23, 42, 0.8) !important;
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] section[id="projects"] *[style*="background: #f"],
        [data-theme="dark"] section[id="projects"] *[style*="background:#f"],
        [data-theme="dark"] section[id="projects"] *[style*="background-color: #f"],
        [data-theme="dark"] section[id="projects"] *[style*="background-color:#f"] {
          background: rgba(30, 41, 59, 0.9) !important;
          color: #f1f5f9 !important;
        }
        
        /* Project card text colors */
        [data-theme="dark"] section[id="projects"] *[style*="color: #374151"],
        [data-theme="dark"] section[id="projects"] *[style*="color:#374151"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] h2[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] footer[id="contact"] h3[style*="color: #1f2937"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] footer[id="contact"] p[style*="color: #6b7280"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] p[style*="color: #374151"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] p[style*="color: #9ca3af"] {
          color: #94a3b8 !important;
        }
        [data-theme="dark"] footer[id="contact"] a[style*="color: #374151"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] span[style*="color: #f59e0b"] {
          color: #f59e0b !important;
        }
        
        /* Contact social icons */
        [data-theme="dark"] footer[id="contact"] svg {
          color: #cbd5e1 !important;
        }
        
        /* Contact divider */
        [data-theme="dark"] footer[id="contact"] div[style*="background: #374151"] {
          background: rgba(148, 163, 184, 0.3) !important;
        }
        
        /* More aggressive contact details overrides */
        [data-theme="dark"] footer[id="contact"] h3 {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] footer[id="contact"] p {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] a {
          color: #60a5fa !important;
        }
        [data-theme="dark"] footer[id="contact"] a:hover {
          color: #3b82f6 !important;
        }
        
        /* Contact grid items - phone, email, social */
        [data-theme="dark"] footer[id="contact"] div[style*="display: grid"] > div h3 {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] footer[id="contact"] div[style*="display: grid"] > div p {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] div[style*="display: grid"] > div a {
          color: #60a5fa !important;
        }
        
        /* Social media icons in flex container */
        [data-theme="dark"] footer[id="contact"] div[style*="display: flex"] a {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] div[style*="display: flex"] a:hover {
          color: #60a5fa !important;
        }
        [data-theme="dark"] footer[id="contact"] div[style*="display: flex"] svg {
          color: #cbd5e1 !important;
        }
        
        /* Ultra-aggressive contact details override - target all elements */
        [data-theme="dark"] footer[id="contact"] * {
          color: inherit !important;
        }
        [data-theme="dark"] footer[id="contact"] h3[style*="color"] {
          color: #f1f5f9 !important;
        }
        [data-theme="dark"] footer[id="contact"] p[style*="color"] {
          color: #cbd5e1 !important;
        }
        [data-theme="dark"] footer[id="contact"] a[style*="color"] {
          color: #60a5fa !important;
        }
        
        /* Light mode fixes - ensure visibility in light mode too */
        [data-theme="light"] footer[id="contact"] h3[style*="color: #1f2937"] {
          color: #1f2937 !important;
        }
        [data-theme="light"] footer[id="contact"] p[style*="color: #374151"] {
          color: #374151 !important;
        }
        [data-theme="light"] footer[id="contact"] a[style*="color: #374151"] {
          color: #374151 !important;
        }
        [data-theme="light"] footer[id="contact"] svg {
          color: #374151 !important;
        }
        
        /* Aggressive override for any element with white/light background */
        [data-theme="dark"] section[id="about"] *[style*="background: #f"],
        [data-theme="dark"] section[id="about"] *[style*="background:#f"],
        [data-theme="dark"] section[id="about"] *[style*="background-color: #f"],
        [data-theme="dark"] section[id="about"] *[style*="background-color:#f"] {
          background: rgba(30, 41, 59, 0.9) !important;
          color: #f1f5f9 !important;
        }
      `;
      
      // Remove existing override if it exists
      const existingOverride = document.getElementById('dark-theme-overrides');
      if (existingOverride) {
        existingOverride.remove();
      }
      
      document.head.appendChild(styleOverrides);
    } else {
      // Remove dark theme overrides in light mode
      const existingOverride = document.getElementById('dark-theme-overrides');
      if (existingOverride) {
        existingOverride.remove();
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
    
    // Apply theme-specific overrides when toggling
    applyThemeOverrides(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
