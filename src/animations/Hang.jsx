import React from 'react';

export function HangOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 35, top: 22, fontSize: 28 }}>🧑</div>
      <div style={{ position: 'absolute', left: 75, top: 26, fontSize: 28 }}>🧑</div>
      <div style={{ position: 'absolute', right: 25, top: 20, fontSize: 24 }}>☕</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 62, textAlign: 'center', fontSize: 12, color: '#ff8f00', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>😎 放鬆中...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>閒逛、出去玩</div>
    </div>
  );
}

export function HangUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center' }}>
        <div style={{ width: 60, height: 6, background: '#546e7a', borderRadius: 3, margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 30, textAlign: 'center', fontSize: 36, animation: 'rise-up 2s ease-out infinite' }}>📞</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>掛電話</div>
    </div>
  );
}

export function HangOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 6, textAlign: 'center', fontSize: 12, color: '#546e7a' }}>━━━━━━━━━━</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 36, animation: 'up-bob 1.5s ease-in-out infinite' }}>🧗</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#e65100', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>撐住！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>稍等、堅持</div>
    </div>
  );
}
