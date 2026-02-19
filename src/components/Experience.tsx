"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Techops Engineer',
    company: 'Paytm',
    duration: 'Present',
    description: 'Specializing in deploying and optimizing TPAP UPI systems. Expertise in automation, system monitoring, and performance optimization.',
    technologies: ['Java', 'Python', 'AWS', 'Jenkins', 'System Monitoring']
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
  },
};

export const Experience = () => {
  return (
    <section id="experience" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%)',
      padding: '4rem 2rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#2d3748',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Experience</h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#2d3748',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.title}
                  </h3>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>
                    {exp.company}
                  </h4>
                </div>
                <span style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  {exp.duration}
                </span>
              </div>
              
              <p style={{
                color: '#4a5568',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {exp.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      color: '#4a5568',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid rgba(102, 126, 234, 0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};