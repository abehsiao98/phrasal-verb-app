import React from 'react';

export function CutOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 28 }}>🔗</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✂️</div>
      <div style={{ position: 'absolute', right: 30, top: 28, fontSize: 28, animation: 'move-away 2.5s ease-in infinite' }}>🔗</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>切斷、打斷</div>
    </div>
  );
}

export function CutOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center' }}>
        <span style={{ fontSize: 22 }}>📄</span>
        <span style={{ fontSize: 22 }}>📄</span>
        <span style={{ fontSize: 22, animation: 'escape 2.5s ease-in-out infinite' }}>📄</span>
        <span style={{ fontSize: 22 }}>📄</span>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 50, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✂️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>停止、省略</div>
    </div>
  );
}

export function CutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 15, textAlign: 'center', fontSize: 36, animation: 'collapse-tilt 2.5s ease-in-out infinite' }}>🌲</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 58, textAlign: 'center', fontSize: 18, color: '#c62828', fontWeight: 'bold', animation: 'down-bob 1.1s ease-in-out infinite' }}>↓↓</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>減少、削減</div>
    </div>
  );
}
