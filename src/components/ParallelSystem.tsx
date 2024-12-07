import React, { useState } from 'react';
import { Heart, Droplets, Thermometer, Brain, Shield, Waves } from 'lucide-react';
import { SystemType } from '../types';
import { SystemDetail } from './SystemDetail';

const icons = {
  heart: Heart,
  droplets: Droplets,
  thermometer: Thermometer,
  brain: Brain,
  shield: Shield,
  waves: Waves
};

interface SystemProps {
  system: SystemType;
}

export function ParallelSystem({ system }: SystemProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const Icon = icons[system.icon];
  
  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition cursor-pointer"
        onClick={() => setIsDetailOpen(true)}
      >
        <Icon className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-bold mb-2">{system.humanSystem} / {system.oceanSystem}</h3>
        <p className="text-gray-600">{system.description}</p>
        <button 
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          En savoir plus →
        </button>
      </div>

      <SystemDetail 
        system={system}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
}