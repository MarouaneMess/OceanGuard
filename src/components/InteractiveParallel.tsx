import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ParallelProps {
  title: string;
  humanDescription: string;
  oceanDescription: string;
  imageSrc: string;
}

export function InteractiveParallel({ title, humanDescription, oceanDescription, imageSrc }: ParallelProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <h4 className="font-semibold mb-2 text-blue-600">Corps Humain</h4>
            <p className="text-gray-600">{humanDescription}</p>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2 text-blue-600">Océan</h4>
            <p className="text-gray-600">{oceanDescription}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}