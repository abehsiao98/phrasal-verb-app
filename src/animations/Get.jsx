import React from 'react';
import { C } from './utils';

export function GetIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Target circle (new field/domain) */}
      <div style={{ position: 'absolute', right: 20, top: 20, width: 88, height: 88, borderRadius: '50%', border: '4px solid #90caf9', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', animation: 'circle-highlight 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 24 }}>💻</div>
        <div style={{ fontSize: 9, color: '#1565c0', fontWeight: 'bold' }}>新領域</div>
      </div>
      {/* Person squeezing in */}
      <div style={{ position: 'absolute', top: 38, left: 0, fontSize: 36, animation: 'squeeze-in 2.8s ease-in-out infinite' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 10, color: '#888' }}>進入新領域</div>
    </div>
  );
}

export function GetDownAnim() {
  return (
    <div style={{ ...C, gap: 24 }}>
      {/* Crouching figure */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>認真工作</div>
        <div style={{ fontSize: 42, display: 'inline-block', animation: 'crouch 2s ease-in-out infinite alternate', transformOrigin: 'bottom center' }}>🧑‍💻</div>
      </div>
      {/* Task appearing */}
      <div style={{ textAlign: 'center', animation: 'task-pop 2.5s ease-in-out infinite' }}>
        <div style={{ fontSize: 36 }}>📋</div>
        <div style={{ fontSize: 10, color: '#333', fontWeight: 'bold', marginTop: 4 }}>任務開始!</div>
      </div>
    </div>
  );
}

export function GetUpAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130 }}>
      {/* Bed */}
      <div style={{ position: 'absolute', bottom: 16, left: 20, width: 110, height: 32, background: '#ffe082', borderRadius: 6, border: '3px solid #f9a825' }}>
        <div style={{ position: 'absolute', left: 6, top: 4, width: 30, height: 24, background: '#fff8e1', borderRadius: 4, border: '2px solid #f9a825' }} />
      </div>
      {/* Rising person */}
      <div style={{ position: 'absolute', bottom: 38, left: 55, fontSize: 36, animation: 'rise-from-bed 2.8s ease-in-out infinite' }}>🧑</div>
      {/* Alarm clock */}
      <div style={{ position: 'absolute', top: 12, right: 18, fontSize: 36, animation: 'alarm-ring 2.8s ease-in-out infinite' }}>⏰</div>
      <div style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>起床！振作！</div>
    </div>
  );
}

export function GetOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* Phase 1: 逃脫 — 從困境跑出來 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-1of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 20, top: 15, width: 65, height: 65, border: '4px solid #546e7a', borderRadius: 6, background: '#eceff1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 16 }}>📄 合約</span>
        </div>
        <div style={{ position: 'absolute', left: 60, top: 30, fontSize: 26, animation: 'escape 2.8s ease-in-out infinite' }}>🏃</div>
        <div style={{ position: 'absolute', right: 12, top: 55, fontSize: 10, color: '#388e3c', fontWeight: 'bold' }}>脫身！</div>
      </div>
      {/* Phase 2: 消息洩漏 — 秘密變廣播 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-2of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 30, top: 22, fontSize: 28 }}>🔒</div>
        <div style={{ position: 'absolute', left: 70, top: 32, fontSize: 14, color: '#c62828', animation: 'look-fwd-arrow 1.5s ease-in-out infinite' }}>→ →</div>
        <div style={{ position: 'absolute', right: 25, top: 22, fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>📢</div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 60, textAlign: 'center', fontSize: 11, color: '#c62828', fontWeight: 'bold' }}>消息洩漏了！</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>逃脫 / 洩漏</div>
    </div>
  );
}

export function GetOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130 }}>
      {/* 核心：牆壁（永遠存在） */}
      <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', width: 12, height: 60, background: '#5d4037', borderRadius: 3, zIndex: 2 }} />
      <div style={{ position: 'absolute', left: '50%', top: 50, transform: 'translateX(-50%)', fontSize: 10, color: '#888', zIndex: 3 }}>↷</div>
      {/* Phase 1: 爬過牆 — 克服困難 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-1of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 25, top: 22, fontSize: 28, animation: 'rise-up 2.8s ease-in-out infinite' }}>🧗</div>
        <div style={{ position: 'absolute', right: 25, top: 40, fontSize: 24, animation: 'fade-cycle 2.5s ease-in-out 1.5s infinite' }}>💪</div>
      </div>
      {/* Phase 2: 心碎 → 癒合 — 從低谷走出 */}
      <div style={{ position: 'absolute', inset: 0, animation: 'phase-2of2 6s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', left: 25, top: 28, fontSize: 28 }}>💔</div>
        <div style={{ position: 'absolute', right: 25, top: 28, fontSize: 28, animation: 'fade-cycle 2.5s ease-in-out infinite' }}>❤️‍🩹</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>克服 / 恢復</div>
    </div>
  );
}

export function GetThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Left bar */}
      <div style={{ position: 'absolute', left: 68, top: 14, width: 14, height: 96, background: '#455a64', borderRadius: 3, zIndex: 2 }} />
      {/* Right bar */}
      <div style={{ position: 'absolute', left: 148, top: 14, width: 14, height: 96, background: '#455a64', borderRadius: 3, zIndex: 2 }} />
      {/* Narrow gap label */}
      <div style={{ position: 'absolute', top: 8, left: 82, width: 66, textAlign: 'center', fontSize: 9, color: '#607d8b' }}>通道</div>
      {/* Figure squeezing through the gap */}
      <div style={{
        position: 'absolute',
        top: 40,
        left: 56,
        fontSize: 30,
        animation: 'pass-thru 2.5s ease-in-out infinite',
        zIndex: 3,
      }}>🧑</div>
      <div style={{
        position: 'absolute',
        top: 40,
        right: 18,
        fontSize: 24,
        animation: 'fade-cycle 2.5s ease-in-out infinite',
      }}>✅</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撐過 / 聯繫上</div>
    </div>
  );
}

export function GetAlongAnim() {
  return (
    <div style={{ ...C, flexDirection: 'column', gap: 8 }}>
      {/* Two figures walking side by side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 38, animation: 'blink 2s ease-in-out infinite' }}>🧑</div>
        <div style={{ fontSize: 38, animation: 'blink 2s ease-in-out infinite', animationDelay: '0.4s' }}>👤</div>
      </div>
      {/* "Getting along" text */}
      <div style={{ fontSize: 13, fontWeight: 'bold', color: '#388e3c', animation: 'pop-out 2.5s ease-in-out infinite', animationDelay: '0.8s' }}>
        融洽相處!
      </div>
      <div style={{ fontSize: 10, color: '#888' }}>相處融洽</div>
    </div>
  );
}

export function GetBackAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Home on the left */}
      <div style={{ position: 'absolute', left: 16, top: 24, fontSize: 52 }}>🏠</div>
      {/* Boomerang arc going out and returning */}
      <div style={{
        position: 'absolute',
        top: 36,
        left: 80,
        fontSize: 28,
        animation: 'escape 2.8s ease-in-out infinite',
        animationDirection: 'alternate',
      }}>🪃</div>
      {/* Person sliding back toward home */}
      <div style={{
        position: 'absolute',
        top: 44,
        right: 24,
        fontSize: 30,
        animation: 'pushed-back 2.8s ease-in-out infinite',
      }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回來 / 取回</div>
    </div>
  );
}

export function GetAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Prison bars on the left */}
      <div style={{ position: 'absolute', left: 14, top: 12, width: 70, height: 96, border: '4px solid #546e7a', borderRadius: 4, background: '#cfd8dc' }}>
        {[20, 36, 52].map(x => (
          <div key={x} style={{ position: 'absolute', top: 0, bottom: 0, left: x, width: 5, background: '#546e7a' }} />
        ))}
      </div>
      {/* Running person escaping from bars */}
      <div style={{
        position: 'absolute',
        top: 42,
        left: 52,
        fontSize: 32,
        animation: 'escape 3s ease-in-out infinite',
        zIndex: 3,
      }}>🏃</div>
      {/* "Freedom" indicator on right */}
      <div style={{
        position: 'absolute',
        top: 30,
        right: 14,
        textAlign: 'center',
        animation: 'pop-out 3s ease-in-out infinite',
        animationDelay: '1.5s',
      }}>
        <div style={{ fontSize: 26 }}>🌟</div>
        <div style={{ fontSize: 9, color: '#388e3c', fontWeight: 'bold' }}>自由!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>脫身 / 逃脫</div>
    </div>
  );
}

export function GetOnAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Bus / vehicle */}
      <div style={{ position: 'absolute', right: 14, top: 16, fontSize: 58 }}>🚌</div>
      {/* Person rising up into the bus */}
      <div style={{
        position: 'absolute',
        top: 52,
        right: 52,
        fontSize: 28,
        animation: 'rise-up 2.8s ease-in-out infinite',
        zIndex: 3,
      }}>🧑</div>
      {/* Progress text */}
      <div style={{
        position: 'absolute',
        left: 14,
        top: 28,
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1565c0',
        animation: 'pop-out 2.8s ease-in-out infinite',
        animationDelay: '1.4s',
      }}>進展順利</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>上去 / 進展</div>
    </div>
  );
}

export function GetOffAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Platform at the bottom */}
      <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20, height: 14, background: '#78909c', borderRadius: 4 }} />
      {/* Person stepping off the right edge */}
      <div style={{
        position: 'absolute',
        bottom: 38,
        right: 44,
        fontSize: 30,
        animation: 'move-away 2.8s ease-in-out infinite',
        zIndex: 3,
      }}>🧑</div>
      {/* Launch text */}
      <div style={{
        position: 'absolute',
        left: 18,
        top: 20,
        animation: 'pop-out 2.8s ease-in-out infinite',
        animationDelay: '1.4s',
      }}>
        <div style={{ fontSize: 22 }}>🚀</div>
        <div style={{ fontSize: 10, color: '#1565c0', fontWeight: 'bold' }}>好的開始</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>下去 / 開始</div>
    </div>
  );
}

export function GetByAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Left wall */}
      <div style={{ position: 'absolute', left: 70, top: 12, width: 16, height: 96, background: '#37474f', borderRadius: 3 }} />
      {/* Right wall — only ~15px gap between them */}
      <div style={{ position: 'absolute', left: 101, top: 12, width: 16, height: 96, background: '#37474f', borderRadius: 3 }} />
      {/* Figure squeezing through the narrow gap */}
      <div style={{
        position: 'absolute',
        top: 38,
        left: 54,
        fontSize: 30,
        animation: 'squeeze-by 3s ease-in-out infinite',
        zIndex: 3,
      }}>🧍</div>
      {/* "Just enough!" blinking text */}
      <div style={{
        position: 'absolute',
        right: 14,
        top: 34,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#f57c00',
        animation: 'blink 3s ease-in-out infinite',
      }}>剛好夠!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>勉強應付</div>
    </div>
  );
}
