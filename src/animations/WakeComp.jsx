import React from 'react';

export function WakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36, animation: 'rise-from-bed 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 30, top: 12, fontSize: 24, animation: 'alarm-ring 2.5s ease-in-out infinite' }}>⏰</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 72, textAlign: 'center', fontSize: 12, color: '#ff8f00', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>醒來！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>醒來</div>
    </div>
  );
}
