// StarField.js
import React, { useRef, useEffect } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Add this check
    const context = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    const stars = [];
    const maxStars = 500; // Adjust for density
    const mouse = { x: -100, y: -100 }; // Initialize off-screen

    // Create stars
    for (let i = 0; i < maxStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        alpha: 0,
        fade: Math.random() * 0.05 + 0.01,
      });
    }

    // Animation loop
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 100; // Adjust for mouse interaction distance

        if (dist < maxDist) {
          star.alpha += star.fade;
          if (star.alpha > 1) star.alpha = 1;
        } else {
          star.alpha -= star.fade;
          if (star.alpha < 0) star.alpha = 0;
        }

        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.beginPath();
        context.arc(star.x, star.y, 1.5, 0, Math.PI * 2); // Adjust star size
        context.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation
    render();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: 'black',
      }}
    />
  );
};

export default StarField;
