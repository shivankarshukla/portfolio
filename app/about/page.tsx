"use client";

import { motion } from 'framer-motion';
import { Header } from '@/src/components/Header';
import Link from 'next/link';

const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    color: 'text-[#64ffda]'
  },
  {
    category: 'Technologies',
    items: ['React', 'Jenkins', 'Starburst', 'Redash', 'AWS'],
    color: 'text-[#63f5ff]'
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS EC2', 'S3', 'EMR', 'Grafana', 'Kibana', 'PagerDuty'],
    color: 'text-[#a78bfa]'
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Postman', 'Jira', 'Wiki', 'Android Studio', 'Charles', 'Figma', 'MySQL Workbench'],
    color: 'text-[#f472b6]'
  }
];

const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    institution: 'Inderprastha Engineering College Ghaziabad, India',
    duration: 'Aug 2019 – July 2023',
    details: 'CGPA: 8.91/10',
  },
  {
    degree: 'XII (SCIENCE & C++)',
    institution: "St. Xavier's Public School Gorakhpur, India",
    duration: 'Apr 2018 – Mar 2019',
    details: 'Percentage: 88.6',
  },
  {
    degree: 'X (SCIENCE)',
    institution: "St. Xavier's Public School Gorakhpur, India",
    duration: 'Apr 2016 – Mar 2017',
    details: 'Percentage: 91.2',
  }
];

const certifications = [
  {
    name: 'GATE Qualified (CS 2024)',
    date: '2024'
  },
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C01)',
    date: 'Mar 2023'
  },
  {
    name: 'Cisco AICTE Virtual Internship Program in Cybersecurity',
    date: 'May 2022 – Jun 2022'
  },
  {
    name: 'Java Foundations (Oracle Academy)',
    date: ''
  },
  {
    name: 'SQL for Data Science (Coursera)',
    date: ''
  }
];

export default function About() {
  return (
    <>
      <Header />
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-xl mb-16 text-center">About Me</h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="section-box">
                <h2 className="heading-md mb-6">Background</h2>
                <p className="text-[#8892b0] leading-relaxed mb-4">
                  I'm a Techops Engineer at Paytm, specializing in deploying and optimizing TPAP UPI systems.
                  My focus is on driving superior performance and operational efficiency through automation
                  and robust monitoring systems.
                </p>
                <p className="text-[#8892b0] leading-relaxed">
                  With experience in both technical operations and software development, I've contributed to
                  significant improvements in system reliability and performance across various projects.
                </p>
              </div>

              <div className="section-box">
                <h2 className="heading-md mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.degree} className="border-l-2 border-[#64ffda] pl-4">
                      <h3 className="font-space text-xl text-[#ccd6f6] mb-2">{edu.degree}</h3>
                      <p className="text-[#8892b0]">{edu.institution}</p>
                      <p className="text-[#64ffda] text-sm">{edu.duration}</p>
                      <p className="text-[#8892b0] text-sm">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="section-box">
                <h2 className="heading-md mb-6">Skills</h2>
                <div className="grid gap-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="skill-card">
                      <h3 className={`font-space text-lg mb-4 ${skillGroup.color}`}>
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-box">
                <h2 className="heading-md mb-6">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex justify-between items-center">
                      <span className="text-[#8892b0]">• {cert.name}</span>
                      {cert.date && (
                        <span className="text-[#64ffda] text-sm">{cert.date}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-box">
                <h2 className="heading-md mb-6">Additional</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#ccd6f6] mb-2">Awards</h3>
                    <p className="text-[#8892b0]">• Secured 3rd position out of 100+ participants in the college project competition (2022)</p>
                  </div>
                  <div>
                    <h3 className="text-[#ccd6f6] mb-2">Hobbies</h3>
                    <p className="text-[#8892b0]">• Badminton, Cooking, Volunteering, and Community involvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/#experience" className="link-button">
              View My Experience →
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}