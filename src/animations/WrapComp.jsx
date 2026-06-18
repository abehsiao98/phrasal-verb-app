import React from 'react';

export function WrapUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', fontSize: 40, animation: 'solidify 2.5s ease-in-out infinite' }}>📦</div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 62, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🎀</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 88, textAlign: 'center', fontSize: 13, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out 1s infinite' }}>收工！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>結束、收尾</div>
    </div>
  );
}
