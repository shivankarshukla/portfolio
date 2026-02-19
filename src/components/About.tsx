"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollEffects } from '../hooks/useScrollEffects';

const skills = [
  { 
    category: 'Languages',
    items: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'Technologies',
    items: ['React', 'Jenkins', 'Starburst', 'Redash', 'AWS']
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Postman', 'Jira', 'Figma']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS EC2', 'S3', 'EMR', 'Grafana', 'Kibana']
  },
];

const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    institution: 'Inderprastha Engineering College Ghaziabad',
    duration: 'Aug 2019 – July 2023',
    details: 'CGPA: 8.91/10',
  },
  {
    degree: 'XII (SCIENCE & C++)',
    institution: "St. Xavier's Public School Gorakhpur",
    duration: 'Apr 2018 – Mar 2019',
    details: 'Percentage: 88.6',
  },
];

const certifications = [
  {
    title: 'GATE Qualified (CS 2024)',
    organization: 'IIT',
    date: '2024',
    type: 'Achievement'
  },
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C01)',
    organization: 'Amazon Web Services',
    date: 'Mar 2023',
    type: 'Certification'
  },
  {
    title: 'Cisco AICTE Virtual Internship Program in Cybersecurity',
    organization: 'Cisco',
    date: 'May 2022 – Jun 2022',
    type: 'Internship'
  },
  {
    title: 'Java Foundations',
    organization: 'Oracle Academy',
    date: '',
    type: 'Certification'
  },
  {
    title: 'SQL for Data Science',
    organization: 'Coursera',
    date: '',
    type: 'Course'
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export const About = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -300]);
  
  return (
    <section id="about" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fef3c7 25%, #fce7f3 50%, #e0f2fe 75%, #f0fdf4 100%)',
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
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #8b5cf6, #a78bfa)',
            borderRadius: '50%',
            opacity: 0.6,
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)'
          }}
        />
        
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '80px',
            height: '40px',
            background: 'linear-gradient(45deg, #06d6a0, #118ab2)',
            borderRadius: '40px 40px 0 0',
            opacity: 0.5,
            boxShadow: '0 8px 32px rgba(6, 214, 160, 0.3)'
          }}
        />

        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(45deg, #ff6b9d, #ffa8cc)',
            clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
            opacity: 0.7,
            boxShadow: '0 8px 32px rgba(255, 107, 157, 0.3)'
          }}
        />

        {/* Floating dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${10 + (i * 8)}%`,
              left: `${5 + (i * 11)}%`,
              width: '8px',
              height: '8px',
              background: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f'][i],
              borderRadius: '50%',
              opacity: 0.6
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
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden'
        }}
      >
        <motion.h2 
          variants={itemVariants}
          className="scale-in"
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '3rem',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1.0, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="scroll-reveal"
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <p style={{
            fontSize: '1.2rem',
            color: '#6b7280',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            I&apos;m a passionate Techops Engineer with expertise in system optimization, 
            automation, and performance monitoring. I love building scalable solutions 
            that drive operational excellence and improve system reliability.
          </p>
        </motion.div>
        
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
          width: '100%',
          maxWidth: '100%'
        }}>
          {/* Skills Section */}
          <motion.div 
            className="scroll-reveal-left" 
            variants={itemVariants}
          >
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '2rem'
            }}>
              Skills
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '0.75rem'
                  }}>
                    {skillGroup.category}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
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
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '2rem'
            }}>
              Education
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    {edu.degree}
                  </h4>
                  <p style={{
                    color: '#f59e0b',
                    fontSize: '1rem',
                    fontWeight: '500',
                    marginBottom: '0.5rem'
                  }}>
                    {edu.institution}
                  </p>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    {edu.duration}
                  </p>
                  <p style={{
                    color: '#374151',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications and Achievements Section */}
        <motion.div variants={itemVariants} style={{ marginBottom: '4rem' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Certifications & Achievements
          </h3>
          <div className="certifications-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                style={{
                  background: '#f8fafc',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: '1px solid #e5e7eb',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Type Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: cert.type === 'Achievement' ? '#10b981' : 
                           cert.type === 'Certification' ? '#f59e0b' :
                           cert.type === 'Internship' ? '#8b5cf6' : '#6366f1',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {cert.type}
                </div>

                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  paddingRight: '5rem' // Space for badge
                }}>
                  {cert.title}
                </h4>
                
                <p style={{
                  color: '#f59e0b',
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: '0.25rem'
                }}>
                  {cert.organization}
                </p>
                
                {cert.date && (
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    {cert.date}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={itemVariants}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Experience
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Current Role - Techops Engineer */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    Techops Engineer
                  </h4>
                  <h5 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '0.25rem'
                  }}>
                    PAYTM
                  </h5>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <span style={{
                  background: '#f59e0b',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Mar 2024 – Present
                </span>
              </div>
              
              <ul style={{
                color: '#4b5563',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Adept at deploying and optimizing TPAP UPI systems to drive superior performance and operational efficiency.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Designed and implemented multiple automation scripts to streamline routine operational tasks, significantly reducing manual effort and error rates.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Contributed to automation-driven improvements in system monitoring and alerting, leading to faster incident resolution and enhanced SLA adherence.
                </li>
                <li>
                  Enhanced system performance through proactive alerting and detailed analysis of logs and database activities.
                </li>
              </ul>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {['TPAP UPI', 'System Optimization', 'Automation Scripts', 'System Monitoring', 'Performance Analysis'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: '#ffffff',
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

            {/* Previous Role - Paytm Payments Bank */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    Techops Engineer
                  </h4>
                  <h5 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '0.25rem'
                  }}>
                    PAYTM PAYMENTS BANK
                  </h5>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <span style={{
                  background: '#6b7280',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Nov 2023 – Mar 2024
                </span>
              </div>
              
              <ul style={{
                color: '#4b5563',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Executed seamless deployment of new features in the promotions system; provided ongoing technical support, reducing downtime by 10% and increasing system reliability by 25%.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Resolved and debugged issues promptly to minimize disruptions and analyzed logs and statistics to continuously monitor and optimize promotion feature performance.
                </li>
                <li>
                  Led deployment of new features, provided ongoing technical support, ensuring smooth operation of the promotions system.
                </li>
              </ul>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {['Promotions System', 'Technical Support', 'System Deployment', 'Performance Optimization', 'Log Analysis'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: '#ffffff',
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

            {/* Internship - SDET Intern */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    SDET Intern
                  </h4>
                  <h5 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#f59e0b',
                    marginBottom: '0.25rem'
                  }}>
                    PAYTM
                  </h5>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <span style={{
                  background: '#6b7280',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Apr 2023 – Oct 2023
                </span>
              </div>
              
              <ul style={{
                color: '#4b5563',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Contributed to the quality development of new and existing features in Paytm ONDC UI.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Engaged in comprehensive Frontend UI testing for ONDC in Paytm app, prioritizing user-friendliness, and visual appeal.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Focused on delivering high-quality features seamlessly to Paytm ONDC users.
                </li>
                <li>
                  Played a central role in testing of Auto Detection of Address feature, leading to a substantial reduction in API call expenses by 76%.
                </li>
              </ul>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {['Frontend Testing', 'ONDC UI', 'Quality Assurance', 'API Optimization', 'User Experience'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: '#ffffff',
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};