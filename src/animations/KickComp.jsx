import React from 'react';

export function KickOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 28, fontSize: 28 }}>🦶</div>
      <div style={{ position: 'absolute', left: 60, top: 25, fontSize: 24, animation: 'depart-right 2s ease-in infinite' }}>⚽</div>
      <div style={{ position: 'absolute', right: 18, top: 60, fontSize: 14, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>開始！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>啟動、開始</div>
    </div>
  );
}
