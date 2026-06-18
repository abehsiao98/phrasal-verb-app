import React from 'react';

export function ThrowAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 72, top: 22, fontSize: 24, animation: 'move-away 2s ease-in infinite' }}>🗑️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>丟掉</div>
    </div>
  );
}

export function ThrowOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 72, top: 22, fontSize: 24, animation: 'depart-right 2s ease-in infinite' }}>📄</div>
      <div style={{ position: 'absolute', right: 18, top: 28, fontSize: 28 }}>🗑️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>丟掉 / 趕出去</div>
    </div>
  );
}

export function ThrowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 38, textAlign: 'center', fontSize: 36 }}>🤢</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 12, textAlign: 'center', fontSize: 18, color: '#c62828', animation: 'up-bob 1.1s ease-in-out infinite' }}>↑↑↑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>嘔吐</div>
    </div>
  );
}
