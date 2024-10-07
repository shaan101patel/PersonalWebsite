// Work.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Work.css';
import StarField from '../components/StarField';

function Work() {
  return (
    <div className="work-page">
      {/* StarField background */}
      <StarField />

      {/* Main content container */}
      <div className="work-content-container">
        {/* Left Section for Heading and Subsections */}
        <motion.div
          className="work-profile-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="work-title">Work Experience</h1>

          {/* Work Experience Sections */}
          <div className="work-item">
            <div className="work-image-placeholder"></div>
            <div className="work-text-content">
              <Link to="/work/homedepot" className="work-subheading-link">
                <h2 className="work-subheading">Software Engineer at Home Depot</h2>
              </Link>
              <p>Describe your role and achievements at Home Depot.</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image-placeholder"></div>
            <div className="work-text-content">
              <Link to="/work/southerncompany" className="work-subheading-link">
                <h2 className="work-subheading">Software Developer at Southern Company</h2>
              </Link>
              <p>Describe your role and achievements at Southern Company.</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image-placeholder"></div>
            <div className="work-text-content">
              <Link to="/work/tutor" className="work-subheading-link">
                <h2 className="work-subheading">Private Coding Tutor</h2>
              </Link>
              <p>Detail your experience as a coding tutor.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="work-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 8 }}
        >
          <Link to="/" className="work-nav-button-link">
            <button className="work-nav-button">Home</button>
          </Link>
          <Link to="/research-projects" className="work-nav-button-link">
            <button className="work-nav-button">Research and Projects</button>
          </Link>
          <Link to="/activities" className="work-nav-button-link">
            <button className="work-nav-button">Activities</button>
          </Link>
          <Link to="/contact" className="work-nav-button-link">
            <button className="work-nav-button">Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
