import React from 'react';

export function PutOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 32, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', fontSize: 28, animation: 'drop-in 2s ease-out infinite' }}>🎧</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>穿上</div>
    </div>
  );
}

export function PutOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 推遲 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 20, animation: 'phase-1of2 5s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
        <div style={{ position: 'absolute', left: 80, top: 26, fontSize: 28, animation: 'slide-aside 2.5s ease-in-out infinite' }}>📋</div>
        <div style={{ position: 'absolute', right: 18, top: 26, fontSize: 22 }}>⏰</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', fontSize: 10, color: '#888' }}>推遲</div>
      </div>
      {/* Phase 2: 反感 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 20, animation: 'phase-2of2 5s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 55, top: 18, fontSize: 32 }}>🤢</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 55, textAlign: 'center', fontSize: 22, animation: 'pushed-back 2.5s ease-in-out infinite' }}>🧑</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', fontSize: 10, color: '#888' }}>反感</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推遲 / 反感</div>
    </div>
  );
}

export function PutUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 32, textAlign: 'center', fontSize: 36 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 10, textAlign: 'center', fontSize: 28, animation: 'rise-up 2.5s ease-out infinite' }}>📌</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>張貼、忍受</div>
    </div>
  );
}

export function PutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 10, textAlign: 'center', fontSize: 28 }}>✋</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 28, animation: 'place-down 2.5s ease-out infinite' }}>📝</div>
      <div style={{ position: 'absolute', bottom: 22, left: 0, right: 0, height: 4, textAlign: 'center' }}>
        <div style={{ width: 100, height: 4, background: '#8d6e63', borderRadius: 2, margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放下、記下</div>
    </div>
  );
}

export function PutOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 22, fontSize: 36, animation: 'flicker-die 3s ease-in-out infinite' }}>🔥</div>
      <div style={{ position: 'absolute', right: 30, top: 28, fontSize: 32 }}>🧑‍🚒</div>
      <div style={{ position: 'absolute', right: 70, top: 40, fontSize: 22, animation: 'pass-thru 2s linear infinite' }}>💨</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>熄滅、發布</div>
    </div>
  );
}

export function PutAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 25, top: 18, width: 55, height: 55, border: '3px solid #8d6e63', borderRadius: 6, background: '#efebe9' }} />
      <div style={{ position: 'absolute', left: 30, top: 30, fontSize: 28, animation: 'squeeze-in 2.5s ease-out infinite', direction: 'rtl' }}>📱</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>收起來</div>
    </div>
  );
}

export function PutInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 25, top: 18, width: 60, height: 60, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }} />
      <div style={{ position: 'absolute', left: 30, top: 30, fontSize: 28, animation: 'squeeze-in 2.5s ease-out infinite' }}>⏱️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>投入</div>
    </div>
  );
}

export function PutThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 32 }}>📞</div>
      <div style={{ position: 'absolute', left: 60, top: 42, fontSize: 16, animation: 'pass-thru 2s linear infinite' }}>〰️</div>
      <div style={{ position: 'absolute', right: 18, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>接通、使經歷</div>
    </div>
  );
}

export function PutTogetherAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 28, top: 28, fontSize: 28, animation: 'merge-left 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', right: 28, top: 28, fontSize: 28, animation: 'merge-right 2.5s ease-in-out infinite' }}>🧩</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>組合</div>
    </div>
  );
}
