import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HotspotProps {
  x: number;
  y: number;
  title: string;
  description: string;
}

const hotspots: HotspotProps[] = [
  {
    x: 30,
    y: 40,
    title: "Circulation Thermohaline",
    description: "Comme le système circulatoire humain, ces courants transportent chaleur et nutriments."
  },
  {
    x: 60,
    y: 20,
    title: "Zones de Production d'Oxygène",
    description: "Similaire aux poumons, ces régions produisent une grande partie de notre oxygène."
  },
  {
    x: 45,
    y: 70,
    title: "Absorption de CO2",
    description: "L'océan absorbe le CO2 comme nos poumons, régulant l'atmosphère."
  }
];

export function InteractiveMap() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotProps | null>(null);

  return (
    <div className="relative h-[600px] bg-blue-900 rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        alt="Carte océanique"
        className="w-full h-full object-cover opacity-80"
      />
      
      {hotspots.map((hotspot, index) => (
        <div
          key={index}
          className="absolute"
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer"
            onClick={() => setActiveHotspot(hotspot)}
          />
        </div>
      ))}

      {activeHotspot && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 bg-white/90 p-6"
        >
          <h3 className="text-xl font-bold mb-2">{activeHotspot.title}</h3>
          <p className="text-gray-700">{activeHotspot.description}</p>
          <button
            onClick={() => setActiveHotspot(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </motion.div>
      )}
    </div>
  );
}