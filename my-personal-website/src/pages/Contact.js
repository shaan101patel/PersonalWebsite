// Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import StarField from '../components/StarField';

function Contact() {
  return (
    <div className="contact-page">
      {/* StarField background */}
      <StarField />

      {/* Main content container */}
      <div className="contact-content-container">
        {/* Left Section for Contact Details */}
        <motion.div
          className="contact-details-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="contact-title">Contact Me</h1>

          {/* Contact Details Sections with Images */}
          <div className="contact-item">
            <img
              src={require('../assets/gmail.png')}
              alt="Email"
              className="contact-image"
            />
            <div className="contact-text-content">
              <h2 className="contact-subheading">Email:</h2>
              <p>shaan101patel@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <img
              src={require('../assets/phone-icon.png')}
              alt="Phone"
              className="contact-image"
            />
            <div className="contact-text-content">
              <h2 className="contact-subheading">Phone:</h2>
              <p>(678) 699-6118</p>
            </div>
          </div>
          <div className="contact-item">
            <img
              src={require('../assets/LinkedIn_logo_initials.png')}
              alt="LinkedIn"
              className="contact-image"
            />
            <div className="contact-text-content">
              <h2 className="contact-subheading">LinkedIn:</h2>
              <a href="https://www.linkedin.com/in/shaanpatel25/" className="contact-link">
                shaanpatel25
              </a>
            </div>
          </div>
          <div className="contact-item">
            <img
              src={require('../assets/github-icon.png')}
              alt="GitHub"
              className="contact-image"
            />
            <div className="contact-text-content">
              <h2 className="contact-subheading">GitHub:</h2>
              <a href="https://github.com/shaan101patel" className="contact-link">
                shaan101patel
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="contact-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <Link to="/" className="contact-nav-button-link">
            <button className="contact-nav-button">Home</button>
          </Link>
          <Link to="/work" className="contact-nav-button-link">
            <button className="contact-nav-button">Work Experience</button>
          </Link>
          <Link to="/research-projects" className="contact-nav-button-link">
            <button className="contact-nav-button">Research and Projects</button>
          </Link>
          <Link to="/activities" className="contact-nav-button-link">
            <button className="contact-nav-button">Activities</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
