import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      formErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      formErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        
        // Trigger Toast Success
        setToast({
          show: true,
          message: 'Thank you! Your message has been sent successfully.',
          type: 'success'
        });

        // Trigger Confetti Explosion
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        // Auto hide toast after 4 seconds
        setTimeout(() => {
          setToast((prev) => ({ ...prev, show: false }));
        }, 4000);
      }, 1200);
    } else {
      // Trigger Toast Error
      setToast({
        show: true,
        message: 'Please resolve the errors in the form before submitting.',
        type: 'error'
      });
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 4000);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get in touch with me directly for opportunities, projects, or feedback.
        </motion.p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Column */}
        <motion.div 
          className="contact-info-panel glass-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Connect with Me</h3>
          <p className="contact-tagline">
            Feel free to contact me via email or phone, or connect with my profiles.
          </p>

          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="contact-icon-wrap">
                <Mail size={20} />
              </div>
              <div className="method-details">
                <h4>Email</h4>
                <a href="mailto:manukumar@example.com">mkmanu0102@gmail.com</a>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon-wrap">
                <Phone size={20} />
              </div>
              <div className="method-details">
                <h4>Phone</h4>
                <a href="tel:+919876543210">+91 8002340285</a>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon-wrap">
                <MapPin size={20} />
              </div>
              <div className="method-details">
                <h4>Location</h4>
                <span>Gopalganj, Bihar, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div 
          className="contact-form-panel glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            {/* Name input */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? 'invalid' : ''}`}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'invalid' : ''}`}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Message input */}
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`form-input form-textarea ${errors.message ? 'invalid' : ''}`}
                placeholder="Hi Manu, I'd like to work with you on..."
                rows="5"
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn-primary form-submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Floating Animated Toast Container */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            className={`toast-alert ${toast.type}`}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {toast.type === 'success' ? (
              <CheckCircle size={20} className="toast-icon" />
            ) : (
              <AlertTriangle size={20} className="toast-icon" />
            )}
            <span className="toast-message">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
