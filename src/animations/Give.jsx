import React from 'react';

export function GiveUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 32, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 55, top: 12, fontSize: 22, animation: 'up-bob 1.1s ease-in-out infinite' }}>🤲</div>
      <div style={{ position: 'absolute', right: 35, top: 8, fontSize: 16, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🏳️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放棄</div>
    </div>
  );
}

export function GiveInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* 外力從兩側擠壓 */}
      <div style={{ position: 'absolute', left: 15, top: 20, fontSize: 22, animation: 'merge-left 2.5s ease-in-out infinite', animationDirection: 'reverse' }}>💪</div>
      <div style={{ position: 'absolute', right: 15, top: 20, fontSize: 22, animation: 'merge-right 2.5s ease-in-out infinite', animationDirection: 'reverse' }}>💪</div>
      {/* 中間的箱子/人向內凹陷 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center' }}>
        <div style={{ width: 50, height: 50, border: '3px solid #90a4ae', borderRadius: 6, background: '#eceff1', animation: 'crouch 2.5s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          <span style={{ fontSize: 24 }}>🧑</span>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 72, textAlign: 'center', fontSize: 11, color: '#c62828', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>向內塌陷...屈服</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>屈服、讓步</div>
    </div>
  );
}

export function GiveOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 75, top: 18, fontSize: 22, animation: 'depart-right 2s ease-in 0s infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 75, top: 42, fontSize: 22, animation: 'depart-right 2s ease-in 0.4s infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 75, top: 66, fontSize: 22, animation: 'depart-right 2s ease-in 0.8s infinite' }}>📄</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>分發、耗盡</div>
    </div>
  );
}

export function GiveAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 72, top: 26, fontSize: 28, animation: 'move-away 2.5s ease-in infinite' }}>🎁</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>贈送、洩露</div>
    </div>
  );
}

export function GiveBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 28, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 28, top: 26, fontSize: 28, animation: 'return-slide 2.5s ease-in-out infinite' }}>💝</div>
      <div style={{ position: 'absolute', left: 22, top: 68, fontSize: 11, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>回饋</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>歸還、回饋</div>
    </div>
  );
}

export function GiveOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 38, textAlign: 'center', fontSize: 36 }}>🏭</div>
      <div style={{ position: 'absolute', left: 55, top: 8, fontSize: 18, animation: 'smoke-drift 2.5s ease-out infinite' }}>💨</div>
      <div style={{ position: 'absolute', left: 80, top: 12, fontSize: 18, animation: 'smoke-drift 2.5s ease-out 0.5s infinite' }}>💨</div>
      <div style={{ position: 'absolute', left: 100, top: 6, fontSize: 18, animation: 'smoke-drift 2.5s ease-out 1s infinite' }}>💨</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>散發</div>
    </div>
  );
}
