// Home.js
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import NorthernLights from '../components/NorthernLights';
import '../styles/Home.css';

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
      {/* Northern Lights background using React Three Fiber */}
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <NorthernLights />
      </Canvas>

      {/* Content overlay */}
      <motion.div
        className="content-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="C:\Users\shaan\Documents\website\my-personal-website\src\profile.jpg.JPG" alt="Profile" className="profile-picture" />
        <h1>Your Name</h1>
        <h2>Your University</h2>
        <p>A brief statement about yourself.</p>
      </motion.div>

      {/* Visitor count display */}
      <div className="visitor-count">
        Visitor Count: {visitorCount}
      </div>
    </div>
  );
}

export default Home;
