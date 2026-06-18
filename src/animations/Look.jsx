import React from 'react';
import { C } from './utils';

export function LookIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 28, top: 22 }}>
        <div style={{ fontSize: 58 }}>📁</div>
        <div style={{ position: 'absolute', top: 22, left: 12, animation: 'code-glow 2.8s ease-in-out infinite', pointerEvents: 'none' }}>
          <div style={{ fontFamily: 'monospace', fontSize: 9, lineHeight: 1.5, color: '#0070f3' }}>
            <div style={{ color: '#e91e63' }}>🔑 key=value</div>
            <div>const x = 42;</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 18, top: 12, fontSize: 42, animation: 'mag-move 2.8s ease-in-out infinite', transformOrigin: 'center center' }}>🔍</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>穿透表面，深入調查</div>
    </div>
  );
}

export function LookDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', top: 8, left: 65 }}>
        <div style={{ fontSize: 30, textAlign: 'center' }}>👤</div>
        <div style={{ width: 60, height: 7, background: '#795548', borderRadius: 3, marginTop: 2 }} />
        <div style={{ width: 60, height: 20, background: '#a1887f', borderRadius: '0 0 4px 4px' }} />
      </div>
      <div style={{ position: 'absolute', top: 72, left: 83, animation: 'down-bob 1.1s ease-in-out infinite', fontSize: 20, color: '#c62828', fontWeight: 'bold' }}>↓↓</div>
      <div style={{ position: 'absolute', bottom: 8, left: 76, fontSize: 22, animation: 'small-shrink 2.2s ease-in-out infinite' }}>🚶</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>瞧不起</div>
    </div>
  );
}

export function LookUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', top: 5, left: 0, right: 0, textAlign: 'center', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>
        <div style={{ fontSize: 36 }}>📖</div>
        <div style={{ fontSize: 10, color: '#1565c0', fontWeight: 'bold' }}>查到了！</div>
      </div>
      <div style={{ position: 'absolute', top: 58, left: 0, right: 0, textAlign: 'center', animation: 'up-bob 1.1s ease-in-out infinite', fontSize: 20, color: '#1e88e5', fontWeight: 'bold' }}>↑↑</div>
      <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, textAlign: 'center', fontSize: 28 }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>查資料</div>
    </div>
  );
}

export function LookOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 12, width: 90, height: 90, border: '5px solid #8d6e63', borderRadius: 4, overflow: 'hidden', background: '#e3f2fd' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 4, background: '#8d6e63', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 4, background: '#8d6e63', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 28, animation: 'eye-slide 1.8s ease-in-out infinite' }}>👀</div>
      </div>
      <div style={{ position: 'absolute', right: 14, top: 22, fontSize: 38, animation: 'warn-flash 1.2s ease-in-out infinite' }}>⚠️</div>
      <div style={{ position: 'absolute', right: 10, bottom: 10, fontSize: 22 }}>🚗</div>
      <div style={{ position: 'absolute', bottom: 6, left: 28, fontSize: 10, color: '#888' }}>當心！</div>
    </div>
  );
}

export function LookOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 38, textAlign: 'center', fontSize: 52 }}>📄</div>
      <div style={{ position: 'absolute', top: 14, left: 0, right: 0, textAlign: 'center', fontSize: 28, animation: 'scan-sweep 2s linear infinite' }}>👁️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>快速審閱</div>
    </div>
  );
}

export function LookThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 55, top: 22 }}>
        <div style={{ position: 'absolute', left: 12, top: 12, width: 68, height: 72, background: '#bbdefb', border: '1.5px solid #90caf9', borderRadius: 3 }} />
        <div style={{ position: 'absolute', left: 6, top: 6, width: 68, height: 72, background: '#e3f2fd', border: '1.5px solid #90caf9', borderRadius: 3 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: 68, height: 72, background: '#fff', border: '1.5px solid #90caf9', borderRadius: 3 }}>
          <div style={{ padding: '8px 6px' }}>
            <div style={{ height: 5, background: '#90caf9', borderRadius: 2, marginBottom: 5 }} />
            <div style={{ height: 5, background: '#90caf9', borderRadius: 2, marginBottom: 5, width: '80%' }} />
            <div style={{ height: 5, background: '#90caf9', borderRadius: 2, width: '60%' }} />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 44, left: 18, fontSize: 26, animation: 'pass-thru 2.5s ease-in-out infinite' }}>👁️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>仔細翻閱</div>
    </div>
  );
}

export function LookBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 38 }}>🕰️</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 44, animation: 'look-backward 3s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回顧過去</div>
    </div>
  );
}

export function LookAfterAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 32, top: 26, fontSize: 38 }}>🌱</div>
      <div style={{ position: 'absolute', right: 68, top: 18, fontSize: 44, animation: 'follow-trail 1.5s ease-in-out infinite' }}>🧑‍⚕️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>照顧</div>
    </div>
  );
}

export function LookForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 22, top: 32, fontSize: 40 }}>❓</div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 38, animation: 'search-fwd 1.8s ease-in-out infinite' }}>🔍</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>尋找</div>
    </div>
  );
}
