import React from 'react';

export function WorkOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 20, top: 18, fontSize: 32, animation: 'up-bob 1.1s ease-in-out infinite' }}>🏋️</div>
      <div style={{ position: 'absolute', right: 20, top: 12 }}>
        <div style={{ fontFamily: 'monospace', fontSize: 14, color: '#888', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>
          <span>1+1 = </span>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>2 ✓</span>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 14, color: '#888', animation: 'fade-cycle 2.5s ease-in-out 0.8s infinite' }}>
          <span>bug → </span>
          <span style={{ color: '#4caf50', fontWeight: 'bold' }}>fix ✓</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 72, textAlign: 'center', fontSize: 12, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out 1.5s infinite' }}>💪 解決！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>運動 / 解決</div>
    </div>
  );
}

export function WorkOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36 }}>🧑‍💻</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, textAlign: 'center', fontSize: 22, animation: 'gear-start 2.5s ease-in-out infinite' }}>⚙️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>致力於</div>
    </div>
  );
}
