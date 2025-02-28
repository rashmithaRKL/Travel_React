import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Gateway to Sri Lankan Adventures
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are passionate about sharing the incredible experiences that Sri Lanka has to offer. 
            Our mission is to help travelers discover the hidden gems and iconic destinations of this beautiful island.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

const values = [
  {
    name: 'Local Expertise',
    description: 'Our team consists of experienced local guides and travel experts who know every corner of Sri Lanka.',
  },
  {
    name: 'Sustainable Tourism',
    description: 'We are committed to promoting responsible tourism that benefits local communities and preserves natural resources.',
  },
  {
    name: 'Personalized Experience',
    description: 'Every journey is unique. We tailor our services to match your interests and travel style.',
  },
];
