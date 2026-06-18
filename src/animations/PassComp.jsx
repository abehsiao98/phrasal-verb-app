import React from 'react';

export function PassOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'relative', width: 210, height: 130 }}>
        {/* Phase 1: 昏倒 */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'phase-1of2 5s ease-in-out infinite' }}>
          <div style={{ fontSize: 36, animation: 'collapse-tilt 2.5s ease-in-out infinite' }}>😵</div>
          <div style={{ fontSize: 11, color: '#c62828', fontWeight: 'bold', marginTop: 4 }}>昏倒</div>
        </div>
        {/* Phase 2: 分發 */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'phase-2of2 5s ease-in-out infinite' }}>
          <div style={{ fontSize: 28 }}>🧑</div>
          <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
            <span style={{ fontSize: 16, animation: 'depart-right 2s ease-in 0s infinite' }}>📄</span>
            <span style={{ fontSize: 16, animation: 'depart-right 2s ease-in 0.3s infinite' }}>📄</span>
            <span style={{ fontSize: 16, animation: 'depart-right 2s ease-in 0.6s infinite' }}>📄</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>昏倒 / 分發</div>
      </div>
    </div>
  );
}

export function PassUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 35, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', right: 25, top: 20, fontSize: 26, animation: 'smoke-drift 2.5s ease-out infinite' }}>🎁</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 72, textAlign: 'center', fontSize: 12, color: '#e65100', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>機會飄走了...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>錯過機會</div>
    </div>
  );
}
