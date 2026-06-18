import React from 'react';

export function HoldOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 10, textAlign: 'center', fontSize: 14, color: '#546e7a' }}>━━━━━━━━</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 25, textAlign: 'center', fontSize: 36 }}>🤚</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 14, color: '#ff8f00', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>等一下...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>等等、堅持</div>
    </div>
  );
}

export function HoldUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 36 }}>🏋️</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', fontSize: 28, animation: 'up-bob 1.5s ease-in-out infinite' }}>📦</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>耽誤、撐住</div>
    </div>
  );
}

export function HoldBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 30, top: 28, fontSize: 32, animation: 'pushed-back 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 30, top: 30, fontSize: 28 }}>✋</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 16, color: '#c62828', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>⛔ 拉住！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>壓抑、阻礙</div>
    </div>
  );
}
