import React from 'react';

export function GrowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 36, animation: 'rise-up 2.5s ease-out infinite' }}>🌳</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, textAlign: 'center', fontSize: 18, color: '#4caf50', animation: 'up-bob 1.1s ease-in-out infinite' }}>↑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 82, textAlign: 'center', fontSize: 16 }}>🌱</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>長大</div>
    </div>
  );
}
