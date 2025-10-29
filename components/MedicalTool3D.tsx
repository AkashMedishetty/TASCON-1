'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function ArthroscopeTool() {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }

    if (lightRef.current) {
      const time = clock.getElapsedTime();
      lightRef.current.intensity = 2 + Math.sin(time * 2) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
      {/* Main handle - thicker */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 3, 32]} />
        <meshStandardMaterial color="#1a3a52" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Gold accent rings */}
      <mesh position={[0, 1, 0]} castShadow>
        <torusGeometry args={[0.3, 0.08, 16, 32]} />
        <meshStandardMaterial color="#ffb246" metalness={0.9} roughness={0.1} emissive="#ffb246" emissiveIntensity={0.6} />
      </mesh>

      <mesh position={[0, -0.5, 0]} castShadow>
        <torusGeometry args={[0.3, 0.08, 16, 32]} />
        <meshStandardMaterial color="#ffb246" metalness={0.9} roughness={0.1} emissive="#ffb246" emissiveIntensity={0.6} />
      </mesh>

      {/* Tool tip - larger */}
      <mesh position={[0, -1.8, 0]} castShadow>
        <coneGeometry args={[0.15, 0.6, 32]} />
        <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
      </mesh>

      {/* Lens/camera part - larger */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.25, 0.4, 32]} />
        <meshStandardMaterial color="#2196F3" metalness={0.9} roughness={0.2} emissive="#2196F3" emissiveIntensity={0.4} />
      </mesh>

      {/* Glow sphere - larger */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#ffb246" transparent opacity={0.15} />
      </mesh>

      {/* Point light for glow effect - stronger */}
      <pointLight ref={lightRef} position={[0, 1.8, 0]} color="#ffb246" intensity={2} distance={8} />
    </group>
  );
}

export default function MedicalTool3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light */}
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        
        {/* Spot light for dramatic effect */}
        <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} color="#2196F3" />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        {/* The 3D arthroscope tool */}
        <ArthroscopeTool />
        
        {/* Orbit controls for mouse interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* Label */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-white font-semibold text-sm">Arthroscopy Innovation</p>
        <p className="text-white/60 text-xs">Interactive 3D Model</p>
      </div>
    </div>
  );
}
