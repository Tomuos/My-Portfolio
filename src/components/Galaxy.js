import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Galaxy = () => {
  const galaxyRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (galaxyRef.current) {
      galaxyRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.1 });
    const points = new THREE.Points(geometry, material);

    scene.add(points);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.005;
      points.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={galaxyRef} />;
};

export default Galaxy;
