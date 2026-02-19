"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loading-screen"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #f0f9ff 0%, #fef3c7 25%, #fce7f3 50%, #e0f2fe 75%, #f0fdf4 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Animated Logo */}
          <motion.div
            style={{
              position: 'relative',
              marginBottom: '3rem'
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2
            }}
          >
            <motion.div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: '700',
                boxShadow: '0 20px 60px rgba(245, 158, 11, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(245, 158, 11, 0.4)',
                  '0 20px 80px rgba(245, 158, 11, 0.6)',
                  '0 20px 60px rgba(245, 158, 11, 0.4)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                  zIndex: 1
                }}
                animate={{
                  left: ['100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 1]
                }}
              />
              <span style={{ position: 'relative', zIndex: 2 }}>SS</span>
            </motion.div>

            {/* Orbiting Dots */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: `hsl(${i * 120 + 200}, 70%, 60%)`,
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3
                }}
                initial={{
                  x: 80,
                  y: -6
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Shivankar Shukla
          </motion.h1>

          <motion.p
            style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              marginBottom: '3rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Techops Engineer
          </motion.p>

          {/* Progress Bar */}
          <div
            style={{
              width: '300px',
              height: '4px',
              background: 'rgba(156, 163, 175, 0.3)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6)',
                borderRadius: '2px',
                transformOrigin: 'left'
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress Text */}
          <motion.div
            style={{
              marginTop: '1rem',
              fontSize: '0.9rem',
              color: '#6b7280',
              fontWeight: '500'
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(loadingProgress)}% Complete
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: `hsl(${i * 60 + 180}, 70%, 60%)`,
                opacity: 0.6
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              initial={{
                left: `${20 + i * 10}%`,
                bottom: '10%'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
