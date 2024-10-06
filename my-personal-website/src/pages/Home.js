// Home.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StarField from '../components/StarField';
import '../styles/Home.css';
import { Link } from 'react-router-dom';


function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Fetch visitor count using CountAPI
  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/my-personal-website/home-page-visitor-count')
      .then((response) => response.json())
      .then((data) => setVisitorCount(data.value))
      .catch((error) => {
        console.error('Error fetching visitor count:', error);
        setVisitorCount('Error');
      });
  }, []);

  return (
    <div className="home-page">
      {/* StarField background */}
      <StarField />

      {/* Main content container */}
      <div className="content-container">
        {/* Profile Section */}
        <motion.div
          className="profile-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="name">Shaan Patel</h1>
          <h2 className="role">Software Developer</h2>
          <img
            src={require("C:\\Users\\shaan\\Documents\\PersonalWebsite\\my-personal-website\\src\\profilepic.JPG")} // Replace this with the correct path
            alt="Profile"
            className="profile-picture"
          />
        </motion.div>

        {/* Button Navigation Section */}
         <motion.div
                   className="button-section"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 8 }}
                 >
                   <Link to="/work" className="nav-button-link">
                     <button className="nav-button button-1">Professional Experience</button>
                   </Link>
                   <Link to="/research-projects" className="nav-button-link">
                     <button className="nav-button button-2">Research and Projects</button>
                   </Link>
                   <Link to="/activities" className="nav-button-link">
                     <button className="nav-button button-3">Activities</button>
                   </Link>
                   <Link to="/contact" className="nav-button-link">
                     <button className="nav-button button-4">Contact</button>
                   </Link>
                 </motion.div>
      </div>

      {/* Visitor count display */}
      <div className="visitor-count">Visitor Count: {visitorCount}</div>
    </div>
  );
}

export default Home;

