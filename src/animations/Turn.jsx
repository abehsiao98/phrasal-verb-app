import React from 'react';
import { C } from './utils';

const Knob = ({ anim }) => (
  <div style={{ position: 'relative', width: 62, height: 62 }}>
    <div style={{ width: 62, height: 62, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #9e9e9e, #424242)', border: '3px solid #212121', boxShadow: '0 3px 8px rgba(0,0,0,0.4)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', animation: `${anim} 2.2s ease-in-out infinite alternate` }}>
        <div style={{ position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)', width: 4, height: 22, background: '#fff', borderRadius: 2 }} />
      </div>
    </div>
  </div>
);

export function TurnIntoAnim() {
  return (
    <div style={{ ...C, gap: 14 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>小作坊</div>
        <div style={{ width: 55, height: 55, animation: 'morph 2.5s ease-in-out infinite alternate', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🏠</div>
      </div>
      <div style={{ fontSize: 30, color: '#555', animation: 'arrow-beat 1.2s ease-in-out infinite' }}>→</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>大工廠</div>
        <div style={{ fontSize: 44 }}>🏭</div>
      </div>
    </div>
  );
}

export function TurnDownAnim() {
  return (
    <div style={{ ...C, gap: 35 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#666', marginBottom: 6 }}>旋鈕往下轉</div>
        <Knob anim="knob-left" />
        <div style={{ fontSize: 9, color: '#999', marginTop: 4 }}>逆時針 ↺</div>
      </div>
      <div style={{ position: 'relative', width: 60, height: 70 }}>
        <div style={{ position: 'absolute', inset: 0, textAlign: 'center', animation: 'phase-1of2 5s ease-in-out infinite' }}>
          <div style={{ fontSize: 36 }}>🔊</div>
          <div style={{ fontSize: 9, color: '#999', marginTop: 4 }}>調低音量</div>
        </div>
        <div style={{ position: 'absolute', inset: 0, textAlign: 'center', animation: 'phase-2of2 5s ease-in-out infinite' }}>
          <div style={{ fontSize: 36 }}>💌</div>
          <div style={{ fontSize: 9, color: '#e53935', fontWeight: 'bold', marginTop: 4 }}>拒絕</div>
        </div>
      </div>
    </div>
  );
}

export function TurnUpAnim() {
  const bars = [
    { h: 28, delay: '0s', color: '#42a5f5' },
    { h: 52, delay: '0.08s', color: '#26c6da' },
    { h: 40, delay: '0.16s', color: '#26a69a' },
    { h: 62, delay: '0.24s', color: '#66bb6a' },
  ];
  return (
    <div style={{ ...C, gap: 32 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#666', marginBottom: 6 }}>音量旋鈕</div>
        <Knob anim="knob-right" />
        <div style={{ fontSize: 9, color: '#999', marginTop: 4 }}>順時針 ↻</div>
      </div>
      <div>
        <div style={{ fontSize: 10, color: '#666', marginBottom: 6, textAlign: 'center' }}>音量</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 68 }}>
          {bars.map((b, i) => (
            <div key={i} style={{ width: 14, height: b.h, background: b.color, borderRadius: '3px 3px 0 0', transformOrigin: 'center bottom', animation: `bars-up 2.2s ease-in-out ${b.delay} infinite alternate` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TurnOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 結果是 */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, animation: 'phase-1of2 6s ease-in-out infinite' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, animation: 'spin 1.5s linear infinite' }}>⚙️</div>
        </div>
        <div style={{ fontSize: 22, color: '#555' }}>→</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>📦</div>
          <div style={{ fontSize: 10, color: '#388e3c', fontWeight: 'bold' }}>結果出爐！</div>
        </div>
      </div>
      {/* Phase 2: 出席 */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, animation: 'phase-2of2 6s ease-in-out infinite' }}>
        <div style={{ fontSize: 24, animation: 'squeeze-in 2.5s ease-out infinite' }}>🧑</div>
        <div style={{ fontSize: 24, animation: 'squeeze-in 2.5s ease-out 0.2s infinite' }}>🧑</div>
        <div style={{ fontSize: 24, animation: 'squeeze-in 2.5s ease-out 0.4s infinite' }}>🧑</div>
        <div style={{ fontSize: 24, animation: 'squeeze-in 2.5s ease-out 0.6s infinite' }}>🧑</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>結果是 / 出席</div>
    </div>
  );
}

export function TurnOverAnim() {
  return (
    <div style={{ ...C, gap: 12 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#aaa', marginBottom: 4 }}>舊任務</div>
        <div style={{ width: 52, height: 52, background: '#eeeeee', border: '1.5px solid #bdbdbd', borderRadius: 4 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ fontSize: 34, animation: 'flip-over 2.5s ease-in-out infinite' }}>📋</div>
        <div style={{ fontSize: 20, color: '#555', animation: 'arrow-beat 1.2s ease-in-out infinite' }}>→</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#1565c0', fontWeight: 'bold', marginBottom: 4 }}>新負責人</div>
        <div style={{ width: 52, height: 52, background: '#e3f2fd', border: '1.5px solid #42a5f5', borderRadius: 4 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>移交</div>
    </div>
  );
}

export function TurnOffAnim() {
  return (
    <div style={{ ...C, gap: 22 }}>
      <div style={{ position: 'relative', width: 60, height: 60 }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', border: '3px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, animation: 'power-off 2.5s ease-in-out infinite' }}>
          ⏻
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40, animation: 'screen-dark 2.5s ease-in-out infinite' }}>🖥️</div>
        <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>關閉</div>
      </div>
    </div>
  );
}

export function TurnOnAnim() {
  return (
    <div style={{ ...C, gap: 22 }}>
      <div style={{ position: 'relative', width: 60, height: 60 }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', border: '3px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, animation: 'power-on 2.5s ease-in-out infinite' }}>
          ⏻
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40, animation: 'screen-bright 2.5s ease-in-out infinite' }}>🖥️</div>
        <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>開啟</div>
      </div>
    </div>
  );
}

export function TurnAroundAnim() {
  return (
    <div style={{ ...C, gap: 14, flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ fontSize: 32 }}>📉</div>
        <div style={{ fontSize: 44, animation: 'spin 3s linear infinite' }}>↩️</div>
        <div style={{ fontSize: 32 }}>📈</div>
      </div>
      <div style={{ fontSize: 10, color: '#888' }}>反轉局面</div>
    </div>
  );
}

export function TurnBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 14, top: 38, textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#1565c0', fontWeight: 'bold' }}>起點</div>
      </div>
      <div style={{ position: 'absolute', right: 14, top: 38, textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#bbb' }}>目標</div>
        <div style={{ fontSize: 22, marginTop: 2 }}>🚫</div>
      </div>
      <div style={{ position: 'absolute', top: 32, left: 0, right: 0, textAlign: 'center', fontSize: 28, animation: 'return-slide 3s ease-in-out infinite' }}>🚶</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>折返 / 撤回</div>
    </div>
  );
}
