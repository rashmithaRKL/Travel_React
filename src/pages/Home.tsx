import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Discover the Beauty of Sri Lanka
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the rich culture, stunning landscapes, and warm hospitality of the pearl of the Indian Ocean.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/locations"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Destinations
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-8"
      >
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <dt className="text-lg font-semibold leading-7 text-gray-900">
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const features = [
  {
    name: 'Rich Cultural Heritage',
    description: 'Explore ancient temples, historical sites, and traditional ceremonies that showcase Sri Lanka\'s vibrant culture.',
  },
  {
    name: 'Natural Wonders',
    description: 'From pristine beaches to misty mountains and lush rainforests, discover the diverse landscapes of the island.',
  },
  {
    name: 'Authentic Experiences',
    description: 'Immerse yourself in local life, taste traditional cuisine, and connect with the warm-hearted people of Sri Lanka.',
  },
];
