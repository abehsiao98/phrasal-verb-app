import React from 'react';
import { C } from './utils';

export function SetIntoAnim() {
  return (
    <div style={{ ...C, gap: 20 }}>
      {/* Liquid state */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>開始時</div>
        <div style={{ fontSize: 36 }}>💧</div>
        <div style={{ fontSize: 9, color: '#64b5f6' }}>恐慌/寒冬</div>
      </div>
      <div style={{ fontSize: 22 }}>→</div>
      {/* Solidifying shape */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>固定後</div>
        <div style={{ width: 52, height: 52, animation: 'solidify 2.8s ease-in-out infinite alternate' }} />
        <div style={{ fontSize: 9, color: '#546e7a', marginTop: 6 }}>完全蔓延</div>
      </div>
    </div>
  );
}

export function SetDownAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130 }}>
      {/* Table surface */}
      <div style={{ position: 'absolute', bottom: 24, left: 15, right: 15, height: 6, background: '#8d6e63', borderRadius: 3 }} />
      {/* Document being placed */}
      <div style={{ position: 'absolute', bottom: 28, left: 60, animation: 'place-down 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 44 }}>📄</div>
      </div>
      {/* Rules appearing on document */}
      <div style={{ position: 'absolute', bottom: 36, left: 68, animation: 'rule-write 2.8s ease-in-out infinite', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ fontSize: 9, color: '#1565c0', lineHeight: 1.5 }}>
          <div>Rule 1: ████</div>
          <div>Rule 2: ██</div>
        </div>
      </div>
      {/* Hand */}
      <div style={{ position: 'absolute', top: 8, left: 65, fontSize: 28, animation: 'drop-in 2.8s ease-in-out infinite' }}>✍️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>制定規定 / 記錄下來</div>
    </div>
  );
}

export function SetUpAnim() {
  const blocks = [
    { color: '#ef5350', label: 'API', anim: 'block1-slide' },
    { color: '#42a5f5', label: 'DB', anim: 'block2-slide' },
    { color: '#66bb6a', label: 'CI', anim: 'block3-slide' },
  ];
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 架設 */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, animation: 'phase-1of2 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 10, color: '#666' }}>建立新環境</div>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {blocks.map((b, i) => (
            <div key={i} style={{ width: 40, height: 30, background: b.color, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 'bold', animation: `${b.anim} 3s ease-in-out infinite` }}>{b.label}</div>
          ))}
          <div style={{ fontSize: 22, animation: 'check-pop 3s ease-in-out infinite' }}>✅</div>
        </div>
        <div style={{ fontSize: 10, color: '#388e3c', fontWeight: 'bold' }}>架設完成!</div>
      </div>
      {/* Phase 2: 設局 */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, animation: 'phase-2of2 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 10, color: '#666' }}>預先布置好...</div>
        <div style={{ fontSize: 40, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>🪤</div>
        <div style={{ fontSize: 10, color: '#c62828', fontWeight: 'bold' }}>設局陷害!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>架設 / 設局</div>
    </div>
  );
}

export function SetOutAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Path line */}
      <div style={{ position: 'absolute', bottom: 36, left: 20, right: 20, height: 2, background: 'linear-gradient(90deg, #90caf9, #42a5f5)', borderRadius: 1 }} />
      {/* Goal star */}
      <div style={{ position: 'absolute', right: 15, top: 16, textAlign: 'center', animation: 'goal-pulse 1.5s ease-in-out infinite' }}>
        <div style={{ fontSize: 36 }}>⭐</div>
        <div style={{ fontSize: 9, color: '#f57f17', fontWeight: 'bold' }}>目標</div>
      </div>
      {/* Marching explorer */}
      <div style={{ position: 'absolute', bottom: 22, left: 0, fontSize: 32, animation: 'march-forward 3s linear infinite' }}>🧑‍💼</div>
      {/* Map */}
      <div style={{ position: 'absolute', top: 10, left: 14, fontSize: 22, opacity: 0.6 }}>🗺️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>啟程 / 闡明目的</div>
    </div>
  );
}

export function SetOffAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Left scene: alarm with ripple */}
      <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ripple rings behind alarm */}
        {[1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -55%)',
              width: i * 36,
              height: i * 36,
              borderRadius: '50%',
              border: '2px solid #e53935',
              opacity: 0,
              animation: `ripple-out 3s ease-in-out infinite`,
              animationDelay: `${(i - 1) * 0.9}s`,
            }}
          />
        ))}
        <div style={{ fontSize: 36, animation: 'alarm-shake 3s ease-in-out infinite' }}>⏰</div>
        <div style={{ fontSize: 8, color: '#c62828', fontWeight: 'bold', marginTop: 4 }}>觸發</div>
      </div>
      {/* Divider */}
      <div style={{ position: 'absolute', top: 16, bottom: 16, left: 108, width: 1, background: '#ddd' }} />
      {/* Right scene: rocket departing */}
      <div style={{ position: 'absolute', right: 10, top: 0, bottom: 0, width: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 36, animation: 'depart-right 3s ease-in-out infinite' }}>🚀</div>
        <div style={{ fontSize: 8, color: '#1565c0', fontWeight: 'bold', marginTop: 4 }}>出發</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>觸發 / 啟程</div>
    </div>
  );
}

export function SetBackAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Calendar with backward arrow on left */}
      <div style={{ position: 'absolute', left: 10, top: 14, textAlign: 'center' }}>
        <div style={{ fontSize: 30 }}>📅</div>
        <div style={{ fontSize: 16, color: '#e53935', marginTop: 2 }}>↩</div>
      </div>
      {/* Timeline track */}
      <div style={{ position: 'absolute', top: '50%', left: 55, right: 18, height: 6, background: '#e0e0e0', borderRadius: 3, transform: 'translateY(-50%)' }}>
        {/* Progress bar being pushed back */}
        <div style={{ height: '100%', background: 'linear-gradient(90deg, #ef5350, #e53935)', borderRadius: 3, animation: 'pushed-back 3s ease-in-out infinite', width: '50%' }} />
      </div>
      {/* Target marker on right */}
      <div style={{ position: 'absolute', right: 12, top: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 9, color: '#888' }}>目標日期</div>
        <div style={{ width: 2, height: 20, background: '#bdbdbd', margin: '2px auto' }} />
        <div style={{ fontSize: 9, color: '#e53935', fontWeight: 'bold', animation: 'blink 2s ease-in-out infinite' }}>延後!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>延遲 / 使後退</div>
    </div>
  );
}

export function SetAsideAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Main table area label */}
      <div style={{ position: 'absolute', top: 8, left: 18, fontSize: 9, color: '#666', fontWeight: 'bold' }}>主要區域</div>
      {/* Main area box */}
      <div style={{ position: 'absolute', top: 22, left: 10, width: 110, bottom: 26, border: '2px solid #90caf9', borderRadius: 6, background: '#f0f7ff' }} />
      {/* Side area label (dimmed) */}
      <div style={{ position: 'absolute', top: 8, right: 16, fontSize: 9, color: '#aaa' }}>旁邊</div>
      {/* Side shelf area */}
      <div style={{ position: 'absolute', top: 22, right: 8, width: 72, bottom: 26, border: '2px dashed #ccc', borderRadius: 6, background: '#fafafa', opacity: 0.7 }} />
      {/* Task item sliding to side */}
      <div style={{ position: 'absolute', top: 40, left: 30, fontSize: 28, animation: 'slide-aside 3s ease-in-out infinite' }}>📋</div>
      {/* "先擱置" text fading in */}
      <div style={{ position: 'absolute', top: 44, right: 14, fontSize: 9, color: '#9e9e9e', fontStyle: 'italic', animation: 'pop-out 3s ease-in-out infinite' }}>先擱置</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>擱置 / 留出</div>
    </div>
  );
}

export function SetAboutAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Gears spinning */}
      <div style={{ position: 'absolute', left: 14, top: 14 }}>
        <div style={{ fontSize: 36, animation: 'gear-start 2.5s ease-in-out infinite' }}>⚙️</div>
      </div>
      <div style={{ position: 'absolute', left: 44, top: 30 }}>
        <div style={{ fontSize: 22, animation: 'gear-start 2.5s ease-in-out infinite', animationDelay: '0.4s' }}>⚙️</div>
      </div>
      {/* Task items appearing */}
      <div style={{ position: 'absolute', right: 12, top: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {['任務 1', '任務 2', '任務 3'].map((t, i) => (
          <div
            key={i}
            style={{
              fontSize: 9,
              color: '#1565c0',
              background: '#e3f2fd',
              border: '1px solid #90caf9',
              borderRadius: 4,
              padding: '2px 6px',
              animation: 'task-reveal 2.5s ease-in-out infinite',
              animationDelay: `${i * 0.4}s`,
              opacity: 0,
            }}
          >
            {t}
          </div>
        ))}
      </div>
      {/* "開始著手!" text */}
      <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center', fontSize: 13, fontWeight: 'bold', color: '#e65100', animation: 'pop-out 2.5s ease-in-out infinite' }}>開始著手!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>開始著手</div>
    </div>
  );
}
