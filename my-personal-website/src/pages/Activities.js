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
            <img
              src={require('../assets/ICX.png')}
              alt="ICX"
              className="activities-image"
            />
            <div className="activities-text-content">
              <Link to="https://www.instagram.com/ugaicx/" className="activities-subheading-link">
                <h2 className="activities-subheading">President of Indian Cultural Exchange</h2>
              </Link>
              <p>As President of the Indian Cultural Exchange (ICX), I lead a team of over 30 members and coordinate activities for a member base of more than 300 students.  </p>
            </div>
          </div>
          <div className="activities-item">
            <img
              src={require('../assets/akpsi.jpeg')}
              alt="AKPsi"
              className="activities-image"
            />
            <div className="activities-text-content">
              <Link to="https://www.instagram.com/akpsi_uga/" className="activities-subheading-link">
                <h2 className="activities-subheading">Brother of AKPsi</h2>
              </Link>
              <p>Selected as 1 of 27 from over 200+ candidates to join the co-ed professional fraternity</p>
            </div>
          </div>
          <div className="activities-item">
            <img
              src={require('../assets/chess.png')}
              alt="Chess Club"
              className="activities-image"
            />
            <div className="activities-text-content">
              <Link to="https://www.instagram.com/ugachessdawgs/" className="activities-subheading-link">
                <h2 className="activities-subheading">Member of Chess Club</h2>
              </Link>
              <p>Currently rated 1300 in Blitz, but mostly play for fun!</p>
            </div>
          </div>
          <div className="activities-item">
            <img
              src={require('../assets/chef.png')}
              alt="Chef"
              className="activities-image"
            />
            <div className="activities-text-content">
              <Link to="https://www.instagram.com/shaan_cooks25/" className="activities-subheading-link">
                <h2 className="activities-subheading">World's "Best" Chef</h2>
              </Link>
              <p>Check out my cooking page!</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="activities-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
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

