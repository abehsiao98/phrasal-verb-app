import React from 'react';

export function BurnOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 15, textAlign: 'center', fontSize: 36 }}>🕯️</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 5, textAlign: 'center', fontSize: 22, animation: 'flicker-die 3s ease-in-out infinite' }}>🔥</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 18, animation: 'smoke-drift 2.5s ease-out 1.5s infinite' }}>💨</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 72, textAlign: 'center', fontSize: 12, color: '#c62828', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>燃燒殆盡...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>倦怠</div>
    </div>
  );
}
