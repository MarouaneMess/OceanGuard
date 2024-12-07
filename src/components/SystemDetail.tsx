import React from 'react';
import { SystemType } from '../types';
import { Heart, Droplets, Thermometer, Brain, Shield, Waves } from 'lucide-react';

const icons = {
  heart: Heart,
  droplets: Droplets,
  thermometer: Thermometer,
  brain: Brain,
  shield: Shield,
  waves: Waves
};

interface SystemDetailProps {
  system: SystemType;
  isOpen: boolean;
  onClose: () => void;
}

export function SystemDetail({ system, isOpen, onClose }: SystemDetailProps) {
  if (!isOpen) return null;
  
  const Icon = icons[system.icon];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <Icon className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">{system.humanSystem}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Parallèle Océanique</h3>
              <p className="text-gray-700">{system.oceanSystem}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{system.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Caractéristiques</h3>
              <ul className="list-disc pl-5 space-y-2">
                {system.details.map((detail, index) => (
                  <li key={index} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-700">Impact Environnemental</h3>
              <p className="text-red-600">{system.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}