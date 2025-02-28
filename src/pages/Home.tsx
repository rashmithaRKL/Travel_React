import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Background3D from '../components/Background3D';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-green-800 to-green-600 overflow-hidden">
      <Background3D />
      
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Discover the Beauty of Sri Lanka
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Experience the rich culture, stunning landscapes, and warm hospitality of
              the pearl of the Indian Ocean.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/locations"
                className="inline-block px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Destinations
              </Link>
              
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="absolute bottom-8 left-0 w-full text-center text-white/80">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm"
        >
          Scroll down to explore more
        </motion.p>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[50vh] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color="#4CAF50" />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
