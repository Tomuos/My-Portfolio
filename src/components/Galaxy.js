import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Galaxy = () => {
  const galaxyRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1A0064); // Setting the background to navy
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (galaxyRef.current) {
      galaxyRef.current.appendChild(renderer.domElement);
    }

    const material = new THREE.PointsMaterial({ size: 0.02, vertexColors: true });

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3); // Create an array to store colors

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      const color = new THREE.Color(Math.random(), Math.random(), Math.random()); // Random color
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // Add color attribute

    const points = new THREE.Points(geometry, material);

    scene.add(points);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={galaxyRef} />;
};

export default Galaxy;