import React from 'react';

export function DropOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 35, top: 28, fontSize: 22 }}>🧑</div>
      <div style={{ position: 'absolute', left: 65, top: 28, fontSize: 22 }}>🧑</div>
      <div style={{ position: 'absolute', right: 25, top: 28, fontSize: 22 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 28, textAlign: 'center', fontSize: 26, animation: 'escape 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>退出</div>
    </div>
  );
}

export function DropOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 22, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 28, animation: 'place-down 2s ease-out infinite' }}>📦</div>
      <div style={{ position: 'absolute', bottom: 22, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ width: 100, height: 4, background: '#8d6e63', borderRadius: 2, margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放下、送達</div>
    </div>
  );
}

export function DropByAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 30, top: 22, fontSize: 28 }}>🏠</div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 28, animation: 'cross-path 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 12, color: '#ff8f00', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>順便來看看</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>順道拜訪</div>
    </div>
  );
}
