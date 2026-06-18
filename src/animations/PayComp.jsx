import React from 'react';

export function PayOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 22, fontSize: 28 }}>💰</div>
      <div style={{ position: 'absolute', left: 60, top: 32, fontSize: 16, color: '#4caf50', fontWeight: 'bold', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ → →</div>
      <div style={{ position: 'absolute', right: 22, top: 18, fontSize: 28, animation: 'goal-pulse 2s ease-in-out infinite' }}>🏆</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>值得了！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>有回報、還清</div>
    </div>
  );
}
