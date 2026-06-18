import React from 'react';

export function FigureOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 36 }}>🤔</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 62, textAlign: 'center', fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>💡</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>想出、弄清楚</div>
    </div>
  );
}
