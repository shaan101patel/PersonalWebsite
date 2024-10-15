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
            <img
              src={require('../assets/thinc.png')}
              alt="Computer Vision Research"
              className="research-image"
            />
            <div className="research-text-content">
              {/* External Link for Computer Vision Research */}
              <a
                href="http://thinc.cs.uga.edu/"
                className="research-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="research-subheading">Computer Vision Research</h2>
              </a>
              <p>
              At the Intelligent Thought and Action Lab (THINC) Lab, I focused on advanced AI research involving the YOLOv8 model for image recognition. Working closely with a master's student, I managed a dataset of over 8,000 images and created custom Python scripts to streamline data handling. By leveraging a GPU-enabled setup in a remote Conda environment, I reduced the YOLOv8 model training time from over 30 days to under 2 days.
              </p>
            </div>
          </div>
          <div className="research-item">
            <img
              src={require('../assets/docs.png')}
              alt="AI's Effect on Databases"
              className="research-image"
            />
            <div className="research-text-content">
              {/* External Link for Literature Review */}
              <a
                href="https://docs.google.com/document/d/1p190W680R4snqRxC6JjE9QJHoNAy_flXSph-5deWTx0/edit?usp=sharings"
                className="research-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="research-subheading">Literature Review of AI's Effect on Databases</h2>
              </a>
              <p>
                Abstract: The rise of Artificial Intelligence (AI) is transforming how we manage and integrate databases. The transition from traditional database systems to AI-enhanced methodologies, emphasizing the emergence of vector databases and Retrieval Augmented Generation (RAG) frameworks. This shift not only improves data accessibility and analytics but can also transform business applications, to service both business to business and business to consumer needs. Augmented Data Management (ADM) systems reduce the burden of data cleansing and preparation while improving data accuracy and usability...
              </p>
            </div>
          </div>
          <div className="research-item">
            <img
              src={require('../assets/github-icon.png')}
              alt="Movie Booking Application"
              className="research-image"
            />
            <div className="research-text-content">
              {/* External Link for Movie Booking Application */}
              <a
                href="https://github.com/shaan101patel/FrontEndMB"
                className="research-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="research-subheading">Full Stack Movie Booking Application</h2>
              </a>
              <p>
                The Cinema E-Booking System is a web-based application designed to facilitate online movie ticket booking, providing users with information on movies, showtimes, and allowing them to book and pay for their tickets.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="research-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Internal Navigation Links */}
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

