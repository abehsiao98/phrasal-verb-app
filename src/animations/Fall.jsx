import React from 'react';

export function FallApartAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 40, top: 18, fontSize: 22, animation: 'split-left 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', right: 40, top: 18, fontSize: 22, animation: 'split-right 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', left: 55, top: 45, fontSize: 22, animation: 'drop-in 2.5s ease-out infinite', animationDirection: 'reverse' }}>🧩</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', fontSize: 20, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>💥</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>崩潰、瓦解</div>
    </div>
  );
}

export function FallBehindAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 25, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🏃</div>
      <div style={{ position: 'absolute', left: 25, top: 32, fontSize: 24 }}>🚶</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>落後了...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>落後</div>
    </div>
  );
}

export function FallForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 15, textAlign: 'center', fontSize: 36, animation: 'drop-in 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 30, top: 18, fontSize: 28, animation: 'goal-pulse 2s ease-in-out infinite' }}>💘</div>
      <div style={{ position: 'absolute', left: 28, top: 55, fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🪤</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>愛上、上當</div>
    </div>
  );
}

export function FallThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center', fontSize: 28 }}>📋</div>
      <div style={{ position: 'absolute', left: 60, top: 42, width: 50, height: 4, background: '#e0e0e0', borderRadius: 2 }} />
      <div style={{ position: 'absolute', left: 70, top: 42, width: 30, height: 4, background: '#f44336', borderRadius: 2, animation: 'crack-show 2.5s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 50, textAlign: 'center', fontSize: 22, animation: 'drop-in 2.5s ease-out infinite', animationDirection: 'reverse' }}>📉</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 12, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>泡湯了...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>計畫泡湯</div>
    </div>
  );
}
