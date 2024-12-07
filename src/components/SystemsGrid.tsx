import React from 'react';
import { ParallelSystem } from './ParallelSystem';
import { systems } from '../data/systems';

export function SystemsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {systems.map((system, index) => (
        <ParallelSystem key={index} system={system} />
      ))}
    </div>
  );
}