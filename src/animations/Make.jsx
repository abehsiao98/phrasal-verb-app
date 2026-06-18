import React from 'react';

export function MakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 30, fontSize: 24, animation: 'merge-left 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', right: 30, top: 30, fontSize: 24, animation: 'merge-right 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🤝</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>捏造、和好</div>
    </div>
  );
}

export function MakeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 15, textAlign: 'center' }}>
        <div style={{ fontSize: 40, filter: 'blur(3px)', animation: 'make-out-focus 3s ease-in-out infinite' }}>📝</div>
      </div>
      <div style={{ position: 'absolute', right: 30, top: 35, fontSize: 28, animation: 'search-fwd 1.8s ease-in-out infinite' }}>👁️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>辨認、理解</div>
    </div>
  );
}

