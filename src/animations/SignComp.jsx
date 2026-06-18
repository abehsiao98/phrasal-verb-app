import React from 'react';

export function SignUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 18, textAlign: 'center', fontSize: 36 }}>📋</div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 22, animation: 'rise-up 2.5s ease-out infinite' }}>✍️</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>註冊</div>
    </div>
  );
}

export function SignInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', right: 30, top: 12, width: 75, height: 70, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }}>
        <div style={{ padding: 10, fontSize: 10, color: '#546e7a', fontFamily: 'monospace' }}>🔒 Login</div>
      </div>
      <div style={{ position: 'absolute', left: 18, top: 28, fontSize: 28, animation: 'squeeze-in 2.5s ease-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>登入</div>
    </div>
  );
}

export function SignOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 25, top: 12, width: 75, height: 70, border: '3px solid #546e7a', borderRadius: 8, background: '#eceff1' }}>
        <div style={{ padding: 10, fontSize: 10, color: '#546e7a', fontFamily: 'monospace' }}>🔓 Logout</div>
      </div>
      <div style={{ position: 'absolute', left: 65, top: 30, fontSize: 28, animation: 'escape 2.5s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>登出</div>
    </div>
  );
}

export function SignOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      <div style={{ position: 'absolute', left: 30, top: 18, fontSize: 32 }}>📄</div>
      <div style={{ position: 'absolute', left: 40, top: 48, fontSize: 18, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>✍️</div>
      <div style={{ position: 'absolute', right: 25, top: 22, fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out 1s infinite' }}>✅</div>
      <div style={{ position: 'absolute', right: 22, top: 58, fontSize: 11, color: '#4caf50', fontWeight: 'bold', animation: 'fade-cycle 2.5s ease-in-out 1s infinite' }}>Approved!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>簽核、批准</div>
    </div>
  );
}
