"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91-9621037753',
    link: 'tel:+919621037753',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'shuklagkp.7119@gmail.com',
    link: 'mailto:shuklagkp.7119@gmail.com',
  }
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/shivankarshukla',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    link: 'https://twitter.com/shivankarshukla',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export const Contact = () => {
  
  return (
            <footer id="contact" style={{
          background: 'linear-gradient(135deg, #fef7ff 0%, #f0f9ff 25%, #fefce8 50%, #f0fdf4 75%, #fef3f2 100%)',
          padding: '2rem 2rem 1rem',
          color: '#374151',
          position: 'relative',
          overflow: 'hidden'
        }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)'
          }}
        />

        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.15)',
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)'
          }}
        />

        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '8%',
            width: '70px',
            height: '35px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '35px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)'
          }}
        />

        {/* Floating communication icons */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -60, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{ 
              duration: 8 + (i * 0.4),
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${5 + (i * 9)}%`,
              left: `${3 + (i * 9.5)}%`,
              width: '6px',
              height: '6px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
            }}
          />
        ))}
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{ 
          position: 'relative', 
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Main Contact Section */}
        <div 
          className="scroll-reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
          >
            <h3 className="contact-heading">
              Phone
            </h3>
            <p className="contact-text">
              +91-9621037753
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="contact-heading">
              Email
            </h3>
            <a 
              href="mailto:shuklagkp.7119@gmail.com"
              className="contact-link"
            >
              shuklagkp.7119@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="contact-heading">
              Follow Me
            </h3>
            <div className="social-links">
              <motion.a
                href="https://linkedin.com/in/shivankarshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com/shivankarshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com/beingshivankar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          style={{
            height: '1px',
            background: '#374151',
            marginBottom: '1rem'
          }}
        />

        {/* Footer Bottom */}
        <motion.div 
          variants={itemVariants}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            margin: 0
          }}>
            © {new Date().getFullYear()} By Shivankar Shukla.
          </p>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            margin: 0
          }}>
            Powered and secured by{' '}
            <span style={{
              color: '#f59e0b',
              fontWeight: '600'
            }}>
              Next.js
            </span>
          </p>
        </motion.div>

        {/* Get In Touch Section */}
        <motion.div 
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginTop: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            backdropFilter: 'blur(20px)'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#374151',
            marginBottom: '0.8rem'
          }}>
            Let's Work Together
          </h2>
          <p style={{
            color: '#374151',
            fontSize: '1rem',
            lineHeight: '1.5',
            marginBottom: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto 1.5rem'
          }}>
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <motion.a
            href="mailto:shuklagkp.7119@gmail.com"
            style={{
              display: 'inline-block',
              background: '#f59e0b',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#d97706'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};