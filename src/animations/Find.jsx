import React from 'react';

export function FindOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 18, fontSize: 36 }}>📂</div>
      <div style={{ position: 'absolute', left: 80, top: 22, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>💡</div>
      <div style={{ position: 'absolute', right: 20, top: 60, fontSize: 14, color: '#ff8f00', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>發現了！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>發現、查明</div>
    </div>
  );
}
