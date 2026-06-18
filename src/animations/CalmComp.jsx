import React from 'react';

export function CalmDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center', fontSize: 32, animation: 'collapse-tilt 2.5s ease-in-out infinite' }}>🌊</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 55, textAlign: 'center', fontSize: 18, color: '#1e88e5', animation: 'down-bob 1.1s ease-in-out infinite' }}>↓↓</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 13, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>😌 平靜...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>冷靜</div>
    </div>
  );
}
