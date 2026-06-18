import React from 'react';

export function LayOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 15, width: 70, height: 65, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }}>
        <div style={{ padding: 10, fontSize: 10, color: '#546e7a', fontFamily: 'monospace' }}>🏢 公司</div>
      </div>
      <div style={{ position: 'absolute', left: 65, top: 30, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 18, top: 55, fontSize: 14, color: '#c62828', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>📋 裁員</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>裁員</div>
    </div>
  );
}
