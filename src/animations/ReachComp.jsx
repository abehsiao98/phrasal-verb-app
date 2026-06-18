import React from 'react';

export function ReachOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', left: 65, top: 35, fontSize: 22, animation: 'search-fwd 1.8s ease-in-out infinite' }}>🤝</div>
      <div style={{ position: 'absolute', right: 25, top: 28, fontSize: 32 }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>主動聯繫</div>
    </div>
  );
}
