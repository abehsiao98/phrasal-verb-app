import React from 'react';

export function ShowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 38, animation: 'rise-up 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#1e88e5', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>出現了！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出現</div>
    </div>
  );
}

export function ShowOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 35, top: 10, fontSize: 18, animation: 'goal-pulse 2s ease-in-out infinite' }}>✨</div>
      <div style={{ position: 'absolute', right: 35, top: 10, fontSize: 18, animation: 'goal-pulse 2s ease-in-out 0.5s infinite' }}>✨</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, textAlign: 'center', fontSize: 22 }}>🏆</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>炫耀</div>
    </div>
  );
}
