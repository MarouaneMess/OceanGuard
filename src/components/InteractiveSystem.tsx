import React from 'react';

export function InteractiveSystem({ systemId }: { systemId: string | null }) {
  return (
    <section className="interactive-system">
      <h2>Interactive System</h2>
      {systemId ? (
        <p>Currently viewing system: {systemId}</p>
      ) : (
        <p>Please select a system to view details.</p>
      )}
      {/* Add more interactive features as needed */}
    </section>
  );
} 