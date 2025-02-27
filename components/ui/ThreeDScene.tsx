"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount!.clientWidth / mount!.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount!.clientWidth, mount!.clientHeight);
    mount!.appendChild(renderer.domElement);

    // Sphere Geometry
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1565c0,
      emissive: 0x112244,
      metalness: 0.5,
      roughness: 0.5,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Glow Effect (Points)
    const glowMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const glowPoints = new THREE.Points(geometry, glowMaterial);
    scene.add(glowPoints);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    // Camera Position
    camera.position.z = 10;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      sphere.rotation.y += 0.005;
      glowPoints.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mount!.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default ThreeDScene;
