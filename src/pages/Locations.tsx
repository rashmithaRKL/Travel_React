import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    name: 'Sigiriya',
    description: 'Ancient palace and fortress complex with stunning views',
    imageUrl: 'https://source.unsplash.com/800x600/?sigiriya',
    category: 'Historical',
  },
  {
    name: 'Mirissa Beach',
    description: 'Pristine beach known for whale watching and surfing',
    imageUrl: 'https://source.unsplash.com/800x600/?beach,srilanka',
    category: 'Beaches',
  },
  {
    name: 'Ella',
    description: 'Mountain village with scenic hiking trails and tea plantations',
    imageUrl: 'https://source.unsplash.com/800x600/?mountains,srilanka',
    category: 'Nature',
  },
  {
    name: 'Kandy',
    description: 'Cultural capital featuring the Temple of the Tooth',
    imageUrl: 'https://source.unsplash.com/800x600/?temple,srilanka',
    category: 'Cultural',
  },
  {
    name: 'Yala National Park',
    description: 'Wildlife sanctuary home to leopards and elephants',
    imageUrl: 'https://source.unsplash.com/800x600/?safari,srilanka',
    category: 'Wildlife',
  },
  {
    name: 'Galle Fort',
    description: 'Historic Dutch colonial fortress and UNESCO site',
    imageUrl: 'https://source.unsplash.com/800x600/?fort,srilanka',
    category: 'Historical',
  },
];

export default function Locations() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore the most beautiful and culturally rich locations across Sri Lanka
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {locations.map((location, index) => (
            <motion.article
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={location.imageUrl}
                  alt={location.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{location.category}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {location.name}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {location.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
