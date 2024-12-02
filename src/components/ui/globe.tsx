"use client";
import { globeConfig, globeConnections } from "@/config/globe-config";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(800, 800);
    renderer.setClearColor("#000000", 0);
    mountRef.current.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: globeConfig.globeColor,
      emissive: globeConfig.emissive,
      emissiveIntensity: globeConfig.emissiveIntensity,
      shininess: globeConfig.shininess,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Connections
    globeConnections.forEach((connection) => {
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(
          connection.startLng * 0.1,
          connection.startLat * 0.1,
          0
        ),
        new THREE.Vector3(
          connection.startLng * 0.1,
          connection.startLat * 0.1,
          connection.arcAlt * 10
        ),
        new THREE.Vector3(
          connection.endLng * 0.1,
          connection.endLat * 0.1,
          connection.arcAlt * 10
        ),
        new THREE.Vector3(connection.endLng * 0.1, connection.endLat * 0.1, 0)
      );

      const points = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: connection.color,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(globeConfig.ambientLight, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      globeConfig.directionalLeftLight,
      1
    );
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 15;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.autoRotate = globeConfig.autoRotate;
    controls.autoRotateSpeed = globeConfig.autoRotateSpeed;

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
