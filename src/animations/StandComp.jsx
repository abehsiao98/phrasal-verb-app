import React from 'react';

export function StandOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 40, fontSize: 22 }}>🧑</div>
      <div style={{ position: 'absolute', left: 55, top: 40, fontSize: 22 }}>🧑</div>
      <div style={{ position: 'absolute', left: 85, top: 18, fontSize: 32, animation: 'goal-pulse 2s ease-in-out infinite' }}>🌟</div>
      <div style={{ position: 'absolute', right: 25, top: 28, fontSize: 28, animation: 'rise-up 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>突出</div>
    </div>
  );
}

export function StandUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 38, animation: 'rise-from-bed 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>站起來</div>
    </div>
  );
}

export function StandForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🏳️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>代表</div>
    </div>
  );
}

export function StandByAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 32 }}>🖥️</div>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 28, animation: 'follow-trail 1.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 12, color: '#ff8f00', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>隨時待命</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>待命、支持</div>
    </div>
  );
}
