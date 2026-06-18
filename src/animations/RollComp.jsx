import React from 'react';

export function RollOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 22, fontSize: 28 }}>📦</div>
      <div style={{ position: 'absolute', left: 60, top: 32, fontSize: 16, color: '#1e88e5', fontWeight: 'bold', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ → →</div>
      <div style={{ position: 'absolute', right: 20, top: 18, fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🚀</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#1e88e5', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out 1s infinite' }}>上線！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推出、部署</div>
    </div>
  );
}
