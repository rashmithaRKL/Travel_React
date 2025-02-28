import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Background3D from '../components/Background3D';

const features = [
  {
    title: 'Local Expertise',
    description: 'Our team consists of experienced local guides and travel experts who know every corner of Sri Lanka.',
    icon: '🌟'
  },
  {
    title: 'Customized Tours',
    description: 'We create personalized itineraries that match your interests and preferences.',
    icon: '✨'
  },
  {
    title: 'Cultural Immersion',
    description: 'Experience authentic Sri Lankan culture, traditions, and hospitality.',
    icon: '🏺'
  }
];

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-green-800 to-green-600">
      <Background3D />
      
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Gateway to Sri Lankan Adventures
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are passionate about sharing the incredible experiences that Sri Lanka
              has to offer. Our mission is to help travelers discover the hidden gems
              and iconic destinations of this beautiful island.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full h-[40vh] bg-black/20 rounded-xl backdrop-blur-sm overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh rotation={[0, Math.PI * 0.25, 0]}>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial color="#4CAF50" metalness={0.5} roughness={0.2} />
                </mesh>
              </Suspense>
            </Canvas>
          </div>

          <div className="mt-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
