import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import '../styles/FloatingHeader.css'; // Optional for additional styling

const FloatingHeader = () => {
  return (
    <div className="header-container">
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 5, 5]} />
        <FloatingText />
      </Canvas>
    </div>
  );
};

const FloatingText = () => {
  const myAppRef = useRef();
  const welcomeRef = useRef();
  const theta = useRef(0);

  useFrame(() => {
    theta.current += 0.03; // Adjust the speed of rocking here

    if (myAppRef.current) {
      myAppRef.current.rotation.z = 0.2 * Math.sin(theta.current);
    }

    if (welcomeRef.current) {
      welcomeRef.current.rotation.z = 0.1 * Math.sin(theta.current + Math.PI);
    }
  });

  return (
    <>
      <Text3D
        ref={myAppRef}
        position={[-1, 1, 0]}
        font={'/fonts/optimer_regular.typeface.json'} // Ensure the font file is in public/fonts
        size={1.5}
        height={0.3}
      >
        This is 
        <meshStandardMaterial attach="material" color="gold" />
      </Text3D>

      <Text3D
        ref={welcomeRef}
        position={[-2, -1, 2]}
        font={'/fonts/optimer_regular.typeface.json'}
        size={1.5}
        height={0.2}
      >
        Floating
        <meshStandardMaterial attach="material" color="gold" />
      </Text3D>
    </>
  );
};

export default FloatingHeader;
