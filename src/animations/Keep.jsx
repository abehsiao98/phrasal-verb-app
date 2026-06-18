import React from 'react';

export function KeepUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 28, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🏃</div>
      <div style={{ position: 'absolute', left: 60, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out 0.5s infinite' }}>🏃</div>
      <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20, height: 3, background: '#90caf9', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>跟上、維持</div>
    </div>
  );
}

export function KeepOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 25, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', fontSize: 16, color: '#1e88e5', fontWeight: 'bold', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ → →</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>繼續！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續</div>
    </div>
  );
}

export function KeepOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 60, top: 8, width: 90, height: 80, border: '4px solid #c62828', borderRadius: 8, background: '#ffebee' }}>
        <div style={{ position: 'absolute', top: 25, left: 20, fontSize: 28 }}>⛔</div>
      </div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 28, animation: 'search-fwd 1.8s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>禁止進入</div>
    </div>
  );
}
