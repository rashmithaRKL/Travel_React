import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Background3D from '../components/Background3D';

export default function Contact() {
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
              Get in Touch
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions about your Sri Lankan adventure? We're here to help!
              Reach out to us and start planning your dream vacation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-green-800 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full"
            >
              <div className="h-full bg-black/20 rounded-xl backdrop-blur-sm overflow-hidden">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <mesh rotation={[0, Math.PI * 0.25, 0]}>
                      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                      <meshStandardMaterial color="#4CAF50" metalness={0.5} roughness={0.2} />
                    </mesh>
                  </Suspense>
                </Canvas>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="opacity-90">contact@srilankatravel.com</p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="opacity-90">+94 11 234 5678</p>
              </div>
              
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="opacity-90">123 Temple Road, Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
