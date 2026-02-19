"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm();
    if (fieldErrors[field]) {
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true
      });
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll show success
      // In real implementation, you'd make an actual API call here
      setStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
        setTouched({});
      }, 3000);
      
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1, transition: { duration: 0.2 } }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    loading: { scale: 0.98 },
    success: { scale: 1.05 },
    error: { scale: 0.95 }
  };

  return (
    <motion.div
      className="contact-form-container"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.h3
        style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let&apos;s Work Together
      </motion.h3>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Name Field */}
        <motion.div style={{ position: 'relative' }}>
          <motion.input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            variants={inputVariants}
            whileFocus="focused"
            style={{
              width: '100%',
              padding: '1rem 1.25rem',
              border: `2px solid ${errors.name ? '#ef4444' : 'rgba(156, 163, 175, 0.3)'}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#f59e0b';
              e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
            }}
            onBlur={(e) => {
              handleBlur('name');
              e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(156, 163, 175, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <AnimatePresence>
            {errors.name && touched.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  fontSize: '0.8rem',
                  color: '#ef4444',
                  marginTop: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <FaTimes size={12} />
                {errors.name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div style={{ position: 'relative' }}>
          <motion.input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            variants={inputVariants}
            whileFocus="focused"
            style={{
              width: '100%',
              padding: '1rem 1.25rem',
              border: `2px solid ${errors.email ? '#ef4444' : 'rgba(156, 163, 175, 0.3)'}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#f59e0b';
              e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
            }}
            onBlur={(e) => {
              handleBlur('email');
              e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(156, 163, 175, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <AnimatePresence>
            {errors.email && touched.email && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  fontSize: '0.8rem',
                  color: '#ef4444',
                  marginTop: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <FaTimes size={12} />
                {errors.email}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subject Field */}
        <motion.div style={{ position: 'relative' }}>
          <motion.input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            variants={inputVariants}
            whileFocus="focused"
            style={{
              width: '100%',
              padding: '1rem 1.25rem',
              border: `2px solid ${errors.subject ? '#ef4444' : 'rgba(156, 163, 175, 0.3)'}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#f59e0b';
              e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
            }}
            onBlur={(e) => {
              handleBlur('subject');
              e.target.style.borderColor = errors.subject ? '#ef4444' : 'rgba(156, 163, 175, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <AnimatePresence>
            {errors.subject && touched.subject && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  fontSize: '0.8rem',
                  color: '#ef4444',
                  marginTop: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <FaTimes size={12} />
                {errors.subject}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div style={{ position: 'relative' }}>
          <motion.textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            variants={inputVariants}
            whileFocus="focused"
            rows={5}
            style={{
              width: '100%',
              padding: '1rem 1.25rem',
              border: `2px solid ${errors.message ? '#ef4444' : 'rgba(156, 163, 175, 0.3)'}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              outline: 'none',
              transition: 'all 0.3s ease',
              resize: 'vertical',
              minHeight: '120px',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#f59e0b';
              e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.1)';
            }}
            onBlur={(e) => {
              handleBlur('message');
              e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(156, 163, 175, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <AnimatePresence>
            {errors.message && touched.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  fontSize: '0.8rem',
                  color: '#ef4444',
                  marginTop: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <FaTimes size={12} />
                {errors.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          variants={buttonVariants}
          animate={status}
          whileHover={status === 'idle' ? { scale: 1.02 } : {}}
          whileTap={status === 'idle' ? { scale: 0.98 } : {}}
          style={{
            padding: '1rem 2rem',
            background: status === 'success' 
              ? 'linear-gradient(135deg, #10b981, #34d399)' 
              : status === 'error'
              ? 'linear-gradient(135deg, #ef4444, #f87171)'
              : 'linear-gradient(135deg, #f59e0b, #f97316)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            opacity: status === 'loading' ? 0.8 : 1
          }}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ rotate: { duration: 1, repeat: Infinity, ease: "linear" } }}
              >
                <FaSpinner />
              </motion.div>
            )}
            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <FaCheck />
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <FaTimes />
              </motion.div>
            )}
            {status === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <FaPaperPlane />
              </motion.div>
            )}
          </AnimatePresence>
          
          {status === 'loading' && 'Sending...'}
          {status === 'success' && 'Message Sent!'}
          {status === 'error' && 'Try Again'}
          {status === 'idle' && 'Send Message'}
        </motion.button>
      </form>

      {/* Status Messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              color: '#065f46',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}
          >
            ✅ Thank you for your message! I&apos;ll get back to you soon.
          </motion.div>
        )}
        
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '12px',
              color: '#991b1b',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}
          >
            ❌ Something went wrong. Please try again or contact me directly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
