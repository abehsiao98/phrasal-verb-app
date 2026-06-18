import React from 'react';

export function CatchUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 35, top: 32, fontSize: 24 }}>🧑</div>
      <div style={{ position: 'absolute', left: 25, top: 32, fontSize: 24, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🏃</div>
      <div style={{ position: 'absolute', left: 55, top: 8, fontSize: 14, animation: 'fade-cycle 2.5s ease-in-out 1.5s infinite' }}>💬</div>
      <div style={{ position: 'absolute', right: 45, top: 12, fontSize: 14, animation: 'fade-cycle 2.5s ease-in-out 2s infinite' }}>💬</div>
      <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20, height: 3, background: '#a5d6a7', borderRadius: 2 }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 75, textAlign: 'center', fontSize: 11, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out 2s infinite' }}>追上 → 敘舊</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>趕上 / 敘舊</div>
    </div>
  );
}
