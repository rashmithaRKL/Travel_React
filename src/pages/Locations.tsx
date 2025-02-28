import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card3D from '../components/Card3D';
import Background3D from '../components/Background3D';

const locations = [
  {
    id: 1,
    title: 'Sigiriya',
    image: '/images/placeholder.svg',
    position: [-4, 0, 0],
    description: 'Ancient palace and fortress complex'
  },
  {
    id: 2,
    title: 'Kandy',
    image: '/images/placeholder.svg',
    position: [0, 0, 0],
    description: 'Sacred Buddhist site'
  },
  {
    id: 3,
    title: 'Galle',
    image: '/images/placeholder.svg',
    position: [4, 0, 0],
    description: 'Historic coastal fort'
  },
];

export default function Locations() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-800 to-green-600">
      <Background3D />
      
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white text-center mt-10 mb-4">
            Popular Destinations
          </h1>
          <p className="text-xl text-white text-center mb-20 opacity-90">
            Explore the most beautiful locations across Sri Lanka
          </p>
          
          <div className="w-full h-[60vh] bg-black/20 rounded-xl backdrop-blur-sm">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <directionalLight position={[-5, 5, 5]} intensity={1} />
              
              <Suspense fallback={null}>
                {locations.map((location) => (
                  <Card3D
                    key={location.id}
                    position={location.position as [number, number, number]}
                    title={location.title}
                    imageUrl={location.image}
                  />
                ))}
              </Suspense>
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pb-20">
            {locations.map((location) => (
              <div 
                key={location.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{location.title}</h3>
                <p className="opacity-90">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
