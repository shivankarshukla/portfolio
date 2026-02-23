"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollEffects } from '../hooks/useScrollEffects';

const projects = [
  {
    title: 'TPAP UPI (PAYTM)',
    description: "A system for enabling secure and seamless UPI transactions through Paytm as a Third-Party Application Provider (TPAP). Focuses on scalable UPI payment infrastructure, integrating robust monitoring and alerting mechanisms to ensure reliable payment processing.",
    technologies: ['Java', 'UPI Integration', 'Payment Gateway', 'System Monitoring', 'Scalable Architecture'],
    category: 'FinTech/Payments',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'PROMOTIONS IN PPBL',
    description: "A comprehensive reward and cashback system in Paytm Payments Bank that provides user gratifications for eligible banking transactions. Includes sophisticated user segmentation, offer eligibility logic, and real-time reward processing to enhance customer engagement.",
    technologies: ['Banking APIs', 'User Segmentation', 'Real-time Processing', 'Reward System', 'Eligibility Engine'],
    category: 'Banking/Rewards',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'ONDC Integration',
    description: "Government of India initiative to build an open and interoperable digital commerce ecosystem, connecting buyers and sellers across platforms. Paytm's ONDC integration includes frontend UX, catalog APIs, order flow logic, and payment gateway coordination.",
    technologies: ['Frontend UX', 'Catalog APIs', 'Order Management', 'Payment Gateway', 'Digital Commerce'],
    category: 'E-commerce/Government',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'PERSONALITY DETECTOR',
    description: "A web-based application to analyze Big Five personality traits based on user questionnaire inputs. Designed specifically for recruiters and counselors to assess candidate suitability for specific roles, providing data-driven insights for better hiring decisions.",
    technologies: ['Web Application', 'Personality Analysis', 'Big Five Model', 'Questionnaire System', 'Data Analytics'],
    category: 'HR Tech/Psychology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export const Projects = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [1000, 3000], [0, -400]);
  
  return (
    <section id="projects" style={{
      background: 'linear-gradient(135deg, #fef7ff 0%, #f0f9ff 25%, #fefce8 50%, #f0fdf4 75%, #fef3f2 100%)',
      padding: '6rem 2rem',
      minHeight: '100vh',
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
            x: [0, 50, 0],
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '8%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            opacity: 0.6,
            boxShadow: '0 8px 32px rgba(255, 154, 158, 0.4)'
          }}
        />

        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '12%',
            width: '70px',
            height: '70px',
            background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            opacity: 0.7,
            boxShadow: '0 8px 32px rgba(168, 237, 234, 0.4)'
          }}
        />

        <motion.div
          animate={{ 
            rotate: [0, 360],
            x: [0, -25, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #fad0c4, #ffd1ff)',
            borderRadius: '50%',
            opacity: 0.5,
            boxShadow: '0 8px 32px rgba(250, 208, 196, 0.4)'
          }}
        />

        {/* Tech-themed floating icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ 
              duration: 6 + (i * 0.8),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${15 + (i * 12)}%`,
              right: `${8 + (i * 8)}%`,
              width: '12px',
              height: '12px',
              background: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'][i],
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              opacity: 0.7
            }}
          />
        ))}
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.h2 
          variants={itemVariants}
          className="scale-in"
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '4rem',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.0, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          whileHover={{ 
            scale: 1.02,
            color: '#007AFF'
          }}
        >
          Projects
        </motion.h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="magnetic project-row"
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.2 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              {/* Project Content */}
              <div className="project-row-content" style={{
                order: index % 2 === 0 ? 1 : 2,
                padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem'
              }}>
                <motion.h3 
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}
                  whileHover={{ color: '#f59e0b' }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p style={{
                  color: '#6b7280',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid #e5e7eb'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                

              </div>

              {/* Project Image */}
              <motion.div
                className="hover-lift tilt-effect project-row-image"
                style={{
                  order: index % 2 === 0 ? 2 : 1,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
                  height: '300px'
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  boxShadow: '0 35px 70px rgba(0, 0, 0, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};