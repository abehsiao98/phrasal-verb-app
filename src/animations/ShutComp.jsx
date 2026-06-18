import React from 'react';

export function ShutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center' }}>
        <div style={{ width: 70, height: 50, background: '#263238', borderRadius: 6, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'screen-dark 2.5s ease-in-out infinite' }}>
          <span style={{ fontSize: 24 }}>💻</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 75, textAlign: 'center' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', margin: '0 auto', animation: 'power-off 2.5s ease-in-out infinite' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>關閉</div>
    </div>
  );
}

export function ShutUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 40 }}>🤐</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🤫 噓...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>閉嘴</div>
    </div>
  );
}

export function ShutOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 22, fontSize: 32 }}>🚰</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✋</div>
      <div style={{ position: 'absolute', right: 30, top: 22, fontSize: 22, animation: 'flicker-die 3s ease-in-out infinite' }}>💧</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>關閉供應</div>
    </div>
  );
}
