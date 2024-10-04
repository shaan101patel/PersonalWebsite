// NorthernLights.js
import React, { useRef, useEffect } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Define the shader material
const AuroraMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(),
    uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution.xy;
      float color = 0.0;

      // Create a moving gradient that simulates northern lights
      color += sin(st.x * 10.0 + uTime) * 0.5 + 0.5;
      color += sin((st.y + uMouse.y) * 10.0 + uTime) * 0.5 + 0.5;

      // Apply a color gradient resembling northern lights
      vec3 finalColor = mix(vec3(0.0, 0.0, 0.1), vec3(0.0, 1.0, 0.5), color);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

// Extend the AuroraMaterial and PlaneGeometry so they can be used in JSX
extend({ AuroraMaterial, PlaneGeometry: THREE.PlaneGeometry });

function NorthernLights() {
  const materialRef = useRef();
  const meshRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle window resize to update resolution uniform
  useEffect(() => {
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uResolution.set(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta;
      materialRef.current.uMouse.set(mouse.current.x, mouse.current.y);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <auroraMaterial ref={materialRef} />
    </mesh>
  );
}

export default NorthernLights;
