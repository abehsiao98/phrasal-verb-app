import React from 'react';
import { C } from './utils';

export function BringIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 22, top: 8, width: 65, height: 105, border: '5px solid #6d4c41', borderBottom: 'none', borderRadius: '6px 6px 0 0', background: '#fff8f0' }}>
        <div style={{ position: 'absolute', right: 7, top: '50%', width: 7, height: 7, background: '#ffa726', borderRadius: '50%', transform: 'translateY(-50%)' }} />
      </div>
      <div style={{ position: 'absolute', top: 32, left: 0, animation: 'carry-in 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 40 }}>📦</div>
        <div style={{ fontSize: 10, color: '#555', textAlign: 'center', marginTop: 2 }}>新技術</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 10, color: '#888' }}>引進新系統</div>
    </div>
  );
}

export function BringDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center', animation: 'drop-in 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 42 }}>📉</div>
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontSize: 13, color: '#e53935', textDecoration: 'line-through' }}>成本 $1,000</div>
        <div style={{ fontSize: 15, color: '#388e3c', fontWeight: 'bold', marginTop: 4 }}>成本 $500 ↓</div>
      </div>
      <div style={{ position: 'absolute', bottom: 4, right: 8, fontSize: 10, color: '#888' }}>降低成本</div>
    </div>
  );
}

export function BringUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* 核心：雙手捧著重物往上提 */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 28, textAlign: 'center', fontSize: 22 }}>🤲</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 8, textAlign: 'center', animation: 'rise-up 2.8s ease-in-out infinite' }}>
        {/* Phase 1: 提出話題 */}
        <div style={{ position: 'absolute', left: 0, right: 0, animation: 'phase-1of2 6s ease-in-out infinite' }}>
          <div style={{ fontSize: 28 }}>💬</div>
          <div style={{ fontSize: 10, fontWeight: 'bold', color: '#0070f3' }}>提出話題</div>
        </div>
        {/* Phase 2: 撫養 */}
        <div style={{ position: 'absolute', left: 0, right: 0, animation: 'phase-2of2 6s ease-in-out infinite' }}>
          <div style={{ fontSize: 28 }}>👶</div>
          <div style={{ fontSize: 10, fontWeight: 'bold', color: '#e65100' }}>撫養長大</div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 55, textAlign: 'center', fontSize: 14, color: '#1e88e5', animation: 'up-bob 1.1s ease-in-out infinite' }}>↑↑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>提及 / 撫養</div>
    </div>
  );
}

export function BringOutAnim() {
  return (
    <div style={{ ...C, gap: 20 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>隱藏潛能</div>
        <div style={{ fontSize: 44 }}>🎁</div>
      </div>
      <div style={{ fontSize: 26, color: '#555' }}>→</div>
      <div style={{ textAlign: 'center', animation: 'pop-out 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 44 }}>💡</div>
        <div style={{ fontSize: 11, color: '#f57f17', fontWeight: 'bold', marginTop: 2 }}>潛能爆發!</div>
      </div>
    </div>
  );
}

export function BringBackAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 36 }}>🏠</div>
        <div style={{ fontSize: 9, color: '#888', marginTop: 2 }}>起點</div>
      </div>
      <div style={{ position: 'absolute', top: '38%', left: 55, transform: 'translateY(-50%)', animation: 'return-slide 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 34 }}>📦</div>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 22, color: '#6d4c41' }}>↩</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>帶回 / 喚起回憶</div>
    </div>
  );
}

export function BringAboutAnim() {
  return (
    <div style={{ ...C, gap: 16 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 38, animation: 'spin 2s linear infinite', display: 'inline-block' }}>⚙️</div>
        <div style={{ fontSize: 9, color: '#888', marginTop: 2 }}>行動</div>
      </div>
      <div style={{ fontSize: 24, color: '#555' }}>→</div>
      <div style={{ textAlign: 'center', animation: 'pop-out 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 38 }}>✨</div>
        <div style={{ fontSize: 9, color: '#f57f17', fontWeight: 'bold', marginTop: 2 }}>結果!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>引發 / 促成</div>
    </div>
  );
}

export function BringForwardAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <div style={{ fontSize: 36 }}>📅</div>
      </div>
      <div style={{ position: 'absolute', top: 14, left: 58, animation: 'advance-fwd 2.5s ease-in-out infinite' }}>
        <div style={{ fontSize: 13, color: '#e53935', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>原本日期</div>
        <div style={{ fontSize: 14, color: '#388e3c', fontWeight: 'bold', marginTop: 4, whiteSpace: 'nowrap' }}>提前!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>提前</div>
    </div>
  );
}

export function BringTogetherAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', left: 4, transform: 'translateY(-50%)', animation: 'merge-left 2s ease-in-out infinite', fontSize: 28 }}>👤</div>
      <div style={{ position: 'absolute', top: '30%', right: 4, transform: 'translateY(-50%)', animation: 'merge-right 2s ease-in-out infinite', fontSize: 28 }}>👤</div>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 24 }}>👤</div>
      <div style={{ position: 'absolute', top: '62%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pop-out 2s ease-in-out infinite', fontSize: 30 }}>🤝</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>整合 / 聚集</div>
    </div>
  );
}

export function BringInAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 20, top: 8, width: 60, height: 105, border: '5px solid #5c6bc0', borderBottom: 'none', borderRadius: '6px 6px 0 0', background: '#e8eaf6' }}>
        <div style={{ position: 'absolute', left: 6, top: '50%', width: 7, height: 7, background: '#7986cb', borderRadius: '50%', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontSize: 9, color: '#3949ab', fontWeight: 'bold' }}>💡</div>
      </div>
      <div style={{ position: 'absolute', top: 28, left: 0, animation: 'carry-in 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 36 }}>🧑‍💼</div>
        <div style={{ fontSize: 9, color: '#555', textAlign: 'center', marginTop: 2 }}>人才</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 10, color: '#888' }}>引入 / 帶進</div>
    </div>
  );
}
