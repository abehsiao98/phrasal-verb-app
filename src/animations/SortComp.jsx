import React from 'react';

export function SortOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 20, top: 20, fontSize: 20, animation: 'split-left 2.5s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', left: 50, top: 25, fontSize: 20 }}>📄</div>
      <div style={{ position: 'absolute', left: 80, top: 18, fontSize: 20, animation: 'split-right 2.5s ease-in-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', right: 20, top: 60, fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>解決、搞定</div>
    </div>
  );
}
