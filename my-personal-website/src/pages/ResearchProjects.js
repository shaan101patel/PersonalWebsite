// ResearchProjects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ResearchProjects.css';
import StarField from '../components/StarField';

function ResearchProjects() {
  return (
    <div className="research-page">
      {/* StarField background */}
      <StarField />

      {/* Main content container */}
      <div className="research-content-container">
        {/* Left Section for Heading and Projects */}
        <motion.div
          className="research-profile-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="research-title">Research & Projects</h1>

          {/* Research Project Sections */}
          <div className="research-item">
            <div className="research-image-placeholder"></div>
            <div className="research-text-content">
              <Link to="/research/computer-vision" className="research-subheading-link">
                <h2 className="research-subheading">Computer Vision Research</h2>
              </Link>
              <p>Details about your research in computer vision.</p>
            </div>
          </div>
          <div className="research-item">
            <div className="research-image-placeholder"></div>
            <div className="research-text-content">
              <Link to="/research/ai-effect-on-databases" className="research-subheading-link">
                <h2 className="research-subheading">A Literature Review of AI's Effect on Databases</h2>
              </Link>
              <p>An in-depth review of AI's impact on database systems.</p>
            </div>
          </div>
          <div className="research-item">
            <div className="research-image-placeholder"></div>
            <div className="research-text-content">
              <Link to="/research/movie-booking-app" className="research-subheading-link">
                <h2 className="research-subheading">Full Stack Movie Booking Application</h2>
              </Link>
              <p>Details about your full stack application for booking movies.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="research-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 8 }}
        >
          <Link to="/" className="research-nav-button-link">
            <button className="research-nav-button">Home</button>
          </Link>
          <Link to="/work" className="research-nav-button-link">
            <button className="research-nav-button">Work Experience</button>
          </Link>
          <Link to="/activities" className="research-nav-button-link">
            <button className="research-nav-button">Activities</button>
          </Link>
          <Link to="/contact" className="research-nav-button-link">
            <button className="research-nav-button">Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ResearchProjects;
