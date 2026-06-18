import React from 'react';

export function CheckOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 22, fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', right: 25, top: 18, fontSize: 32, animation: 'goal-pulse 2s ease-in-out infinite' }}>📱</div>
      <div style={{ position: 'absolute', left: 70, top: 38, fontSize: 22, animation: 'search-fwd 1.8s ease-in-out infinite' }}>👀</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>查看、結帳</div>
    </div>
  );
}

export function CheckInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 25, top: 12, width: 80, height: 75, border: '4px solid #8d6e63', borderRadius: 8, background: '#efebe9' }}>
        <div style={{ position: 'absolute', top: 22, left: 20, fontSize: 28 }}>📋</div>
      </div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 32, animation: 'squeeze-in 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 30, top: 60, fontSize: 16, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>報到、登記</div>
    </div>
  );
}
