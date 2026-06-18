import React from 'react';

export function PickUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 28, textAlign: 'center', fontSize: 28 }}>🤲</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 22, textAlign: 'center', fontSize: 30, animation: 'rise-up 2.5s ease-out infinite' }}>📦</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撿起、學會</div>
    </div>
  );
}

export function PickOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 20, top: 18, fontSize: 20 }}>📄</div>
      <div style={{ position: 'absolute', left: 48, top: 22, fontSize: 20 }}>📄</div>
      <div style={{ position: 'absolute', left: 76, top: 20, fontSize: 20 }}>📄</div>
      <div style={{ position: 'absolute', right: 25, top: 15, fontSize: 28, animation: 'rise-up 2.5s ease-out infinite' }}>📄</div>
      <div style={{ position: 'absolute', right: 18, top: 55, fontSize: 22, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>👆</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>挑選</div>
    </div>
  );
}

export function PickOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 35, top: 28, fontSize: 32 }}>😢</div>
      <div style={{ position: 'absolute', left: 30, top: 28, fontSize: 28, animation: 'search-fwd 1.8s ease-in-out infinite' }}>👉</div>
      <div style={{ position: 'absolute', left: 30, top: 58, fontSize: 28, animation: 'search-fwd 1.8s ease-in-out 0.3s infinite' }}>👉</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>找碴、霸凌</div>
    </div>
  );
}
