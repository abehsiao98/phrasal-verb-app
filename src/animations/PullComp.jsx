import React from 'react';

export function PullOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 22, fontSize: 32 }}>🧗</div>
      <div style={{ position: 'absolute', right: 25, top: 18, fontSize: 28, animation: 'goal-pulse 2s ease-in-out infinite' }}>🏆</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 12, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>成功了！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>成功做到</div>
    </div>
  );
}

export function PullOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 15, width: 70, height: 70, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }} />
      <div style={{ position: 'absolute', left: 60, top: 30, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撤出</div>
    </div>
  );
}

export function PullOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 20, right: 20, top: 55, height: 25, background: '#e0e0e0', borderRadius: 4 }} />
      <div style={{ position: 'absolute', left: 20, right: 20, top: 45, height: 3, background: '#fff', borderRadius: 2 }}>
        <div style={{ position: 'absolute', left: '50%', top: -1, width: 30, height: 5, background: '#fff', transform: 'translateX(-50%)' }} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 28, animation: 'slide-aside 2.5s ease-in-out infinite' }}>🚗</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>靠邊停車</div>
    </div>
  );
}
