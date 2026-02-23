"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useScrollEffects } from '../hooks/useScrollEffects';

export const Hero = () => {
  const { scrollY } = useScroll();
  const { getParallaxY } = useScrollEffects();
  
  // Smooth parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -100]);
  
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100vw',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fef3c7 25%, #fce7f3 50%, #e0f2fe 75%, #f0fdf4 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 1rem 4rem',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Smooth Parallax Background */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100%',
          y: backgroundY
        }}
        className="parallax"
      >
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
            opacity: 0.6,
            boxShadow: '0 8px 32px rgba(251, 191, 36, 0.3)'
          }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: 'linear-gradient(45deg, #ec4899, #f472b6)',
            opacity: 0.5,
            boxShadow: '0 8px 32px rgba(236, 72, 153, 0.3)'
          }}
        />

        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '8%',
            width: '70px',
            height: '70px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'linear-gradient(45deg, #10b981, #34d399)',
            opacity: 0.6,
            boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)'
          }}
        />

        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '8%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '6px solid #3b82f6',
            opacity: 0.4
          }}
        />

        {/* Cute Cloud Shapes */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '70%',
            width: '120px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '40px',
            opacity: 0.7,
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '10px',
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '50px',
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%'
          }} />
        </motion.div>

        {/* Sparkle Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${20 + (i * 10)}%`,
              left: `${15 + (i * 12)}%`,
              width: '12px',
              height: '12px',
              background: '#fbbf24',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              opacity: 0.8
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="hero-container magnetic" 
        style={{ position: 'relative', zIndex: 2, y: contentY }}
      >
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 
          }}
          className="slide-up"
        >
          <motion.h1 
            className="hero-title text-shimmer wiggle-hover bounce-in"
            style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            Hello, I&apos;m{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Shivankar
            </span>
          </motion.h1>

          <motion.h2 
            className="hero-subtitle"
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#6b7280',
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Techops Engineer specializing in system optimization
          </motion.h2>

          <motion.p 
            className="hero-description"
            style={{
              fontSize: '1.1rem',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '3rem',
              maxWidth: '500px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I work at Paytm focusing on deploying and optimizing TPAP UPI systems. 
            I have expertise in automation, system monitoring, and performance optimization, 
            passionate about building scalable solutions and driving operational excellence.
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#6b7280'
            }}>
              <HiMail size={20} />
              <a 
                href="mailto:shuklagkp.7119@gmail.com"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#f59e0b'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6b7280'}
              >
                shuklagkp.7119@gmail.com
              </a>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#6b7280'
            }}>
              📱 +91-9621037753
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#6b7280'
            }}>
              📍 Noida, India
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div 
            style={{
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="/Resume.pdf"
              download="Shivankar_Shukla_Resume.pdf"
              className="modern-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(107, 114, 128, 0.9)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              📄 Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="social-links"
            style={{
              display: 'flex',
              gap: '1rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com/shivankarshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                color: '#374151',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                backdropFilter: 'blur(20px)'
              }}
              whileHover={{ 
                scale: 1.08
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <FaGithub size={24} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/shivankarshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                color: '#374151',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                backdropFilter: 'blur(20px)'
              }}
              whileHover={{ 
                scale: 1.08
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.div 
            className="image-container glass"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
            style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.8, 
              duration: 1.0, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            {/* Decorative Elements around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '30px',
                height: '30px',
                background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                borderRadius: '50%',
                zIndex: 3,
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
              }}
            />
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                bottom: '-10px',
                left: '-10px',
                width: '25px',
                height: '25px',
                background: 'linear-gradient(45deg, #48cae4, #0077b6)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                zIndex: 3,
                boxShadow: '0 4px 15px rgba(72, 202, 228, 0.4)'
              }}
            />

            {/* Custom Vector Image - unoptimized per next.config for static export */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home_image.png"
              alt="Shivankar Shukla Profile"
              style={{
                width: '95%',
                height: '95%',
                objectFit: 'contain',
                borderRadius: '20px',
                padding: '0.5rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 2
              }}
            />

            {/* Cartoon-style decorative dots */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '8px',
              height: '8px',
              background: '#ff9ff3',
              borderRadius: '50%',
              opacity: 0.7
            }} />
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '30px',
              width: '6px',
              height: '6px',
              background: '#54a0ff',
              borderRadius: '50%',
              opacity: 0.6
            }} />
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '25px',
              width: '10px',
              height: '10px',
              background: '#5f27cd',
              borderRadius: '50%',
              opacity: 0.5
            }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};