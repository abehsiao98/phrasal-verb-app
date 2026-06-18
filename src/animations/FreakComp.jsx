import React from 'react';

export function FreakOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 38, animation: 'alarm-shake 2.5s ease-in-out infinite' }}>😱</div>
      <div style={{ position: 'absolute', left: 30, top: 10, fontSize: 14, animation: 'smoke-drift 2.5s ease-out infinite' }}>❗</div>
      <div style={{ position: 'absolute', right: 30, top: 14, fontSize: 14, animation: 'smoke-drift 2.5s ease-out 0.5s infinite' }}>❗</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 68, textAlign: 'center', fontSize: 13, color: '#c62828', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out infinite' }}>抓狂！</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>抓狂、嚇壞</div>
    </div>
  );
}
