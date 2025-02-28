import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Plane, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Card3DProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  title: string;
  imageUrl: string;
}

export default function Card3D({ position, rotation = [0, 0, 0], title, imageUrl }: Card3DProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);

  // Animation for hover effect
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  // Load texture
  const texture = new THREE.TextureLoader().load(imageUrl);
  texture.minFilter = THREE.LinearFilter;

  return (
    <animated.mesh
      ref={mesh}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Plane args={[2, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial
          attach="material"
          map={texture}
          metalness={0.1}
          roughness={0.5}
        />
      </Plane>

      <Text
        position={[0, -1.7, 0.1]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
      >
        {title}
      </Text>
    </animated.mesh>
  );
}
