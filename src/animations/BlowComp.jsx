import React from 'react';

export function BlowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36, animation: 'explosion 2.5s ease-in-out infinite' }}>💥</div>
      <div style={{ position: 'absolute', left: 30, top: 18, fontSize: 18, animation: 'smoke-drift 2.5s ease-out infinite' }}>💨</div>
      <div style={{ position: 'absolute', right: 30, top: 22, fontSize: 18, animation: 'smoke-drift 2.5s ease-out 0.5s infinite' }}>💨</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>爆炸、暴怒</div>
    </div>
  );
}

export function BlowOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36 }}>🕯️</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', fontSize: 22, animation: 'flicker-die 3s ease-in-out infinite' }}>🔥</div>
      <div style={{ position: 'absolute', right: 35, top: 30, fontSize: 22, animation: 'smoke-drift 2.5s ease-out 1s infinite' }}>💨</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>吹熄</div>
    </div>
  );
}

export function BlowOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 28 }}>🌬️</div>
      <div style={{ position: 'absolute', left: 70, top: 25, fontSize: 28, animation: 'depart-right 2.5s ease-in infinite' }}>📋</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放鴿子、發洩</div>
    </div>
  );
}
