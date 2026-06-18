import React from 'react';

export function CallOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 32 }}>📅</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>❌</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>取消！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>取消</div>
    </div>
  );
}

export function CallBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 22, fontSize: 28 }}>📞</div>
      <div style={{ position: 'absolute', left: 60, top: 35, fontSize: 14, color: '#1e88e5', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ →</div>
      <div style={{ position: 'absolute', right: 25, top: 22, fontSize: 28 }}>🧑</div>
      <div style={{ position: 'absolute', right: 22, top: 55, fontSize: 14, color: '#1e88e5', animation: 'return-slide 2.5s ease-in-out infinite' }}>↩️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回電 / 回呼</div>
    </div>
  );
}
