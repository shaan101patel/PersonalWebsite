// Activities.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Activities.css';
import StarField from '../components/StarField';

function Activities() {
  return (
    <div className="activities-page">
      {/* StarField background */}
      <StarField />

      {/* Main content container */}
      <div className="activities-content-container">
        {/* Left Section for Heading and Activities */}
        <motion.div
          className="activities-profile-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="activities-title">Campus Involvement & Personal Activities</h1>

          {/* Activities Sections */}
          <div className="activities-item">
            <div className="activities-image-placeholder"></div>
            <div className="activities-text-content">
              <Link to="/activities/icx" className="activities-subheading-link">
                <h2 className="activities-subheading">President of ICX (3 years of involvement)</h2>
              </Link>
              <p>Details about your role and achievements in ICX.</p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activities-image-placeholder"></div>
            <div className="activities-text-content">
              <Link to="/activities/akpsi" className="activities-subheading-link">
                <h2 className="activities-subheading">Brother in AKPsi (Co-ed Business Fraternity)</h2>
              </Link>
              <p>Information about your involvement in AKPsi.</p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activities-image-placeholder"></div>
            <div className="activities-text-content">
              <Link to="/activities/runner" className="activities-subheading-link">
                <h2 className="activities-subheading">Runner (Completed a Half Marathon)</h2>
              </Link>
              <p>Your experience and achievements in running.</p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activities-image-placeholder"></div>
            <div className="activities-text-content">
              <Link to="/activities/chess" className="activities-subheading-link">
                <h2 className="activities-subheading">Member of Chess Club</h2>
              </Link>
              <p>Details about your membership in the Chess Club.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="activities-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 8 }}
        >
          <Link to="/" className="activities-nav-button-link">
            <button className="activities-nav-button">Home</button>
          </Link>
          <Link to="/work" className="activities-nav-button-link">
            <button className="activities-nav-button">Work Experience</button>
          </Link>
          <Link to="/research-projects" className="activities-nav-button-link">
            <button className="activities-nav-button">Research and Projects</button>
          </Link>
          <Link to="/contact" className="activities-nav-button-link">
            <button className="activities-nav-button">Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Activities;

