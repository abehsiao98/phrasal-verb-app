import React from 'react';

export function CarryOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 5, textAlign: 'center', fontSize: 22 }}>📦</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, textAlign: 'center', fontSize: 16, color: '#1e88e5', fontWeight: 'bold', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ → →</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續</div>
    </div>
  );
}

export function CarryOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 15, width: 70, height: 65, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }}>
        <div style={{ padding: 8, fontSize: 10, color: '#546e7a', fontFamily: 'monospace' }}>PLAN<br />━━━━</div>
      </div>
      <div style={{ position: 'absolute', left: 80, top: 28, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>📋</div>
      <div style={{ position: 'absolute', right: 18, top: 55, fontSize: 20, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>執行</div>
    </div>
  );
}
