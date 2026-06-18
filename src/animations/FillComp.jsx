import React from 'react';

export function FillOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 15, textAlign: 'center', fontSize: 36 }}>📋</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 22, animation: 'search-fwd 1.8s ease-in-out infinite' }}>✍️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>填寫表格</div>
    </div>
  );
}
