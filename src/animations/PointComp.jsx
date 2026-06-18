import React from 'react';

export function PointOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 75, top: 38, fontSize: 24, animation: 'search-fwd 1.8s ease-in-out infinite' }}>👉</div>
      <div style={{ position: 'absolute', right: 22, top: 22, fontSize: 28, animation: 'goal-pulse 2s ease-in-out infinite' }}>⚠️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>指出</div>
    </div>
  );
}
