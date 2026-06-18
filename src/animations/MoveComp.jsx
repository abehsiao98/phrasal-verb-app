import React from 'react';

export function MoveOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 20, top: 32, fontSize: 22, opacity: 0.3 }}>📌</div>
      <div style={{ position: 'absolute', left: 55, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 85, top: 38, fontSize: 16, color: '#1e88e5', fontWeight: 'bold', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ → →</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續前進</div>
    </div>
  );
}
