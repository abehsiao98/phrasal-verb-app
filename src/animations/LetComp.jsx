import React from 'react';

export function LetDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', fontSize: 22, animation: 'place-down 2.5s ease-out infinite' }}>⭐</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center', fontSize: 10, color: '#888' }}>期望</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 55, textAlign: 'center', fontSize: 32 }}>😞</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 82, textAlign: 'center', fontSize: 12, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>失望...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>讓人失望</div>
    </div>
  );
}
