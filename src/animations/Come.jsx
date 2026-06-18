import React from 'react';

export function ComeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 30, textAlign: 'center' }}>
        <div style={{ width: 140, height: 3, background: '#90caf9', margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 32, animation: 'rise-up 2.5s ease-out infinite' }}>💡</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 14, textAlign: 'center', fontSize: 18, color: '#1e88e5', fontWeight: 'bold', animation: 'up-bob 1.1s ease-in-out infinite' }}>↑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出現、被提起</div>
    </div>
  );
}

export function ComeDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 下降 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-1of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center', fontSize: 32, animation: 'drop-in 2.5s ease-out infinite' }}>📉</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 58, textAlign: 'center', fontSize: 16, color: '#c62828', animation: 'down-bob 1.1s ease-in-out infinite' }}>↓↓</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 10, color: '#888' }}>下降</div>
      </div>
      {/* Phase 2: 歸結為 — 漏斗 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-2of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 30, top: 8, fontSize: 14 }}>💡</div>
        <div style={{ position: 'absolute', left: 60, top: 6, fontSize: 14 }}>💭</div>
        <div style={{ position: 'absolute', right: 40, top: 10, fontSize: 14 }}>📊</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 12, color: '#888' }}>▽ 歸結 ▽</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 44, textAlign: 'center', fontSize: 14, color: '#1e88e5', animation: 'down-bob 1.1s ease-in-out infinite' }}>↓</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 56, textAlign: 'center', fontSize: 24, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>⭐</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 10, color: '#888' }}>歸結為</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>下降 / 歸結為</div>
    </div>
  );
}

export function ComeInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 30, top: 12, width: 80, height: 85, border: '4px solid #8d6e63', borderRadius: 6, background: '#efebe9' }}>
        <div style={{ position: 'absolute', left: -6, top: 30, width: 8, height: 8, background: '#ffd54f', borderRadius: '50%' }} />
      </div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 32, animation: 'squeeze-in 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>進來、派上用場</div>
    </div>
  );
}

export function ComeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 推出產品 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-1of3 7.5s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 25, top: 15, width: 60, height: 60, border: '3px solid #546e7a', borderRadius: 6, background: '#eceff1' }} />
        <div style={{ position: 'absolute', left: 55, top: 28, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>📦</div>
        <div style={{ position: 'absolute', right: 20, top: 20, fontSize: 20 }}>🆕</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 10, color: '#1e88e5' }}>推出</div>
      </div>
      {/* Phase 2: 結果是 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-2of3 7.5s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 28 }}>📊</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 52, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>➕ 通過！</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 10, color: '#4caf50' }}>結果是</div>
      </div>
      {/* Phase 3: 出櫃 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-3of3 7.5s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 20, textAlign: 'center', fontSize: 32 }}>🧑</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 55, textAlign: 'center', fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🏳️‍🌈</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 78, textAlign: 'center', fontSize: 10, color: '#e65100' }}>出櫃</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推出 / 結果是 / 出櫃</div>
    </div>
  );
}

export function ComeBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 22, top: 28, fontSize: 28 }}>🏠</div>
      <div style={{ position: 'absolute', right: 22, top: 26, fontSize: 32, animation: 'return-slide 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回來、復興</div>
    </div>
  );
}

export function ComeAcrossAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 35, top: 28, fontSize: 32 }}>📚</div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 32, animation: 'cross-path 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', fontSize: 11, color: '#ff8f00', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>偶遇！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>偶遇</div>
    </div>
  );
}

export function ComeAlongAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 55, top: 28, fontSize: 28, animation: 'march-ahead 2.5s ease-in-out 0.3s infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20, height: 3, background: '#a5d6a7', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>同行、進展</div>
    </div>
  );
}

export function ComeOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 28, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 22, top: 18, fontSize: 28, animation: 'advance-fwd 2.5s ease-out infinite' }}>😌</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 14, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🌊 情緒襲來</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>過來、突然感到</div>
    </div>
  );
}

export function ComeThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 55, top: 8, width: 14, height: 85, background: '#b0bec5', borderRadius: 3 }} />
      <div style={{ position: 'absolute', left: 85, top: 8, width: 14, height: 85, background: '#b0bec5', borderRadius: 3 }} />
      <div style={{ position: 'absolute', left: 25, top: 32, fontSize: 28, animation: 'pass-thru 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', right: 18, top: 28, fontSize: 24, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>挺過來、實現</div>
    </div>
  );
}
