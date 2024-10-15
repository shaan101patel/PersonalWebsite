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
          transition={{ duration: 4 }}
        >
          <h1 className="work-title">Professional Experience</h1>

          {/* Work Experience Sections */}
          <div className="work-item">
            <img
              src={require('../assets/THD_logo.jpg')}
              alt="Home Depot"
              className="work-image"
            />
            <div className="work-text-content">
              {/* External Link for Home Depot */}
              <a
                href="https://careers.homedepot.com/students-internships/"
                className="work-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="work-subheading">Software Engineer at Home Depot</h2>
              </a>
              <p>
                During my time at Home Depot, I led back-end development for a web application that focused on predictive analysis of the supply chain across over 100 distribution centers. I developed a comprehensive dashboard that aggregated real-time health metrics from the Warehouse Management System and Warehouse Conveyor System. The application was hosted on Google Cloud Platform (GCP), which provided a scalable infrastructure for data processing and visualization.
              </p>
            </div>
          </div>
          <div className="work-item">
            <img
              src={require('../assets/soco.jpeg')}
              alt="Southern Company"
              className="work-image"
            />
            <div className="work-text-content">
              {/* External Link for Southern Company */}
              <a
                href="https://www.southerncompany.com/miscellaneous-pages/student-programs.html"
                className="work-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="work-subheading">Software Developer at Southern Company</h2>
              </a>
              <p>
                As a Technology Innovation Intern at Southern Company, I designed and launched an AI-powered subject matter expert (SME) for a billing system, utilizing Retrieval-Augmented Generation (RAG) across a large code base of over 3,000 files. I experimented with Cognitive Search and OpenAI technologies within the Azure AI/ML Studio to enhance project efficiency. Additionally, I automated the generation of news articles by implementing the GPT API for filtering and summarization.
              </p>
            </div>
          </div>
          <div className="work-item">
            <img
              src={require('../assets/Color-University-of-Georgia-Logo.jpg')}
              alt="Coding Tutor"
              className="work-image"
            />
            <div className="work-text-content">
              {/* External Link for Coding Tutor */}
              <a
                href="https://www.cs.uga.edu/courses/content/csci-1302"
                className="work-subheading-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="work-subheading">Private Coding Tutor</h2>
              </a>
              <p>
                As a private coding tutor, I created tailored Java lessons for students at various skill levels, ranging from beginner-level games to advanced library and API manipulation offering one-on-one guidance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section for Navigation Buttons */}
        <motion.div
          className="work-button-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Internal Links for Navigation */}
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

