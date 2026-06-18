import React from 'react';

export function BackUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 30, top: 22, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 25, top: 28, fontSize: 28, animation: 'follow-trail 1.5s ease-in-out infinite' }}>🛡️</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 12, color: '#1e88e5', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>支持 / 備份</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>支持、備份</div>
    </div>
  );
}
