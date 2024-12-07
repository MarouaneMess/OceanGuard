import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { motion } from 'framer-motion';

export function OceanStats() {
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">L'Océan en Chiffres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCounter
            value={71}
            label="Surface de la Terre couverte par les océans"
            suffix="%"
          />
          <AnimatedCounter
            value={90}
            label="Chaleur excédentaire absorbée"
            suffix="%"
          />
          <AnimatedCounter
            value={50}
            label="Oxygène produit par l'océan"
            suffix="%"
          />
        </div>
      </motion.div>
    </section>
  );
}