import React from 'react';

export function CleanUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 35, fontSize: 18, animation: 'rise-up 2.5s ease-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 55, top: 40, fontSize: 18, animation: 'rise-up 2.5s ease-out 0.3s infinite' }}>🗑️</div>
      <div style={{ position: 'absolute', left: 85, top: 32, fontSize: 18, animation: 'rise-up 2.5s ease-out 0.6s infinite' }}>📦</div>
      <div style={{ position: 'absolute', right: 20, top: 22, fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✨</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>清理</div>
    </div>
  );
}
