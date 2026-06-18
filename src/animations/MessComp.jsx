import React from 'react';

export function MessUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 20, fontSize: 20, animation: 'split-left 2.5s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 60, top: 28, fontSize: 20, animation: 'up-bob 1.1s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', right: 40, top: 18, fontSize: 20, animation: 'split-right 2.5s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 58, textAlign: 'center', fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>😱</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>搞砸</div>
    </div>
  );
}
