import React from 'react';

export function EndUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 22, top: 18, fontSize: 30 }}>❓</div>
      <div style={{ position: 'absolute', right: 18, top: 55, fontSize: 14, color: '#e65100', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>結果竟然...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>最終</div>
    </div>
  );
}
