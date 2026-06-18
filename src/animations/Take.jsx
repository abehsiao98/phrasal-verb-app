import React from 'react';

export function TakeOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 3, background: '#90a4ae' }} />
      <div style={{ position: 'absolute', bottom: 22, left: 30, fontSize: 36, animation: 'take-off-fly 2.5s ease-in infinite' }}>✈️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>起飛、流行起來</div>
    </div>
  );
}

export function TakeOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 28, fontSize: 30 }}>🧑</div>
      {/* Phase 1: 承擔 — 接過重物 */}
      <div style={{ position: 'absolute', right: 20, top: 15, animation: 'phase-1of3 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 28, animation: 'carry-in 2.5s ease-out infinite' }}>📦</div>
        <div style={{ fontSize: 9, color: '#888', textAlign: 'center' }}>承擔</div>
      </div>
      {/* Phase 2: 聘用 — 握手歡迎 */}
      <div style={{ position: 'absolute', right: 20, top: 15, animation: 'phase-2of3 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 28, animation: 'carry-in 2.5s ease-out infinite' }}>🤝</div>
        <div style={{ fontSize: 9, color: '#888', textAlign: 'center' }}>聘用</div>
      </div>
      {/* Phase 3: 挑戰 — 接下戰書 */}
      <div style={{ position: 'absolute', right: 20, top: 15, animation: 'phase-3of3 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 28, animation: 'carry-in 2.5s ease-out infinite' }}>🥊</div>
        <div style={{ fontSize: 9, color: '#888', textAlign: 'center' }}>挑戰</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>承擔 / 聘用 / 挑戰</div>
    </div>
  );
}

export function TakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 36, animation: 'rise-up 2.5s ease-out infinite' }}>💻</div>
      <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, textAlign: 'center', fontSize: 28 }}>🤲</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>開始從事</div>
    </div>
  );
}

export function TakeOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 22, top: 28, fontSize: 32, animation: 'slide-aside 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 32, animation: 'advance-fwd 2.5s ease-out infinite' }}>🦸</div>
      <div style={{ position: 'absolute', right: 22, top: 22, fontSize: 28 }}>🎮</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>接管</div>
    </div>
  );
}

export function TakeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 18, width: 70, height: 70, border: '3px solid #8d6e63', borderRadius: 8, background: '#efebe9' }} />
      <div style={{ position: 'absolute', left: 55, top: 35, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>取出、移除</div>
    </div>
  );
}

export function TakeInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 55, top: 10, width: 70, height: 70, border: '3px solid #8d6e63', borderRadius: 8, background: '#efebe9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 28 }}>🧠</span>
      </div>
      <div style={{ position: 'absolute', right: 10, top: 22, fontSize: 18, animation: 'squeeze-in 2.5s ease-out infinite' }}>💡</div>
      <div style={{ position: 'absolute', left: 10, top: 22, fontSize: 18, animation: 'squeeze-in 2.5s ease-out 0.4s infinite' }}>📚</div>
      <div style={{ position: 'absolute', left: 10, top: 50, fontSize: 18, animation: 'squeeze-in 2.5s ease-out 0.8s infinite' }}>📰</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>吸收、理解</div>
    </div>
  );
}

export function TakeBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 30, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', right: 30, top: 30, fontSize: 28, animation: 'return-slide 2.5s ease-in-out infinite' }}>💬</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>收回</div>
    </div>
  );
}

export function TakeDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* 核心：高處的東西被「拿下來」*/}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 5, textAlign: 'center' }}>
        {/* 牆上的便利貼 */}
        <div style={{ display: 'inline-block', background: '#fff9c4', border: '1px solid #f9a825', borderRadius: 3, padding: '2px 8px', fontSize: 12, animation: 'place-down 2.5s ease-out infinite' }}>📌 Note</div>
      </div>
      {/* 向下的箭頭 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 38, textAlign: 'center', fontSize: 16, color: '#1e88e5', animation: 'down-bob 1.1s ease-in-out infinite' }}>↓ 拿下來 ↓</div>
      {/* 桌面 */}
      <div style={{ position: 'absolute', left: 30, right: 30, top: 68, height: 3, background: '#8d6e63', borderRadius: 2 }} />
      {/* 放到桌面上 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 58, textAlign: 'center', fontSize: 20, animation: 'fade-cycle 2.5s ease-in-out 1.2s infinite' }}>📝</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>拆除 / 記下</div>
    </div>
  );
}

export function TakeAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 22, top: 30, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 65, top: 28, fontSize: 28, animation: 'move-away 2.5s ease-in infinite' }}>🎁</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>帶走</div>
    </div>
  );
}
