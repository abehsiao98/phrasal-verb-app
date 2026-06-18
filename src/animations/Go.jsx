import React from 'react';
import { C } from './utils';

export function GoIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Layered document (depth) */}
      <div style={{ position: 'absolute', right: 18, top: 12 }}>
        {[0, 8, 16].map((offset, i) => (
          <div key={i} style={{ position: 'absolute', top: offset, left: offset, width: 80, height: 90, border: '2px solid #90caf9', borderRadius: 4, background: i === 2 ? '#e3f2fd' : '#f5f9ff', animation: i === 2 ? 'layer-highlight 2.8s ease-in-out infinite' : 'none' }}>
            {i === 2 && (
              <div style={{ padding: 8 }}>
                <div style={{ height: 4, background: '#90caf9', borderRadius: 2, marginBottom: 4 }} />
                <div style={{ height: 4, background: '#90caf9', borderRadius: 2, marginBottom: 4, width: '70%' }} />
                <div style={{ height: 4, background: '#42a5f5', borderRadius: 2, width: '50%' }} />
              </div>
            )}
          </div>
        ))}
        <div style={{ position: 'absolute', top: 30, left: 25, fontSize: 9, color: '#1565c0', fontWeight: 'bold' }}>深入細節</div>
      </div>
      {/* Arrow diving in */}
      <div style={{ position: 'absolute', top: 48, left: 18, fontSize: 32, animation: 'dive-deep 2.8s ease-in-out infinite' }}>→</div>
      <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 10, color: '#888' }}>深入探討</div>
    </div>
  );
}

export function GoDownAnim() {
  return (
    <div style={{ ...C, gap: 20 }}>
      {/* Server */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 44 }}>🖥️</div>
        <div style={{ fontSize: 10, color: '#666', marginTop: 4 }}>Production</div>
      </div>
      {/* Status indicator */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', margin: '0 auto 8px', animation: 'status-red-flash 2.5s ease-in-out infinite' }} />
        <div style={{ fontSize: 22, color: '#c62828', fontWeight: 'bold', animation: 'down-arrow-drop 1.1s ease-in-out infinite' }}>↓</div>
        <div style={{ fontSize: 10, color: '#e53935', fontWeight: 'bold', marginTop: 4, animation: 'blink 2.5s ease-in-out infinite' }}>DOWN!</div>
      </div>
      <div style={{ fontSize: 32 }}>😱</div>
    </div>
  );
}

export function GoUpAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      {/* Rocket trail */}
      <div style={{ position: 'absolute', left: 95, bottom: 16, width: 10, background: 'linear-gradient(180deg, transparent, #ff7043)', borderRadius: '0 0 4px 4px', animation: 'trail-fade 2.8s ease-in-out infinite' }} />
      {/* Rocket */}
      <div style={{ position: 'absolute', left: 80, bottom: 10, fontSize: 48, animation: 'rocket-rise 2.8s ease-in-out infinite' }}>🚀</div>
      {/* Cloud costs going up */}
      <div style={{ position: 'absolute', top: 8, right: 14, textAlign: 'center' }}>
        <div style={{ fontSize: 28 }}>☁️</div>
        <div style={{ fontSize: 12, color: '#e53935', fontWeight: 'bold' }}>+40%</div>
        <div style={{ fontSize: 10, color: '#888' }}>費用</div>
      </div>
      <div style={{ position: 'absolute', bottom: 4, left: 8, fontSize: 10, color: '#888' }}>上漲 / 增加</div>
    </div>
  );
}

export function GoOutAnim() {
  return (
    <div style={{ ...C, gap: 24 }}>
      {/* Candle with dying flame */}
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>電力</div>
        {/* Flame */}
        <div style={{ fontSize: 30, animation: 'flicker-die 3s ease-in-out infinite' }}>🔥</div>
        {/* Smoke after */}
        <div style={{ fontSize: 18, animation: 'smoke-drift 3s ease-in-out infinite' }}>💨</div>
        {/* Candle body */}
        <div style={{ width: 18, height: 40, background: 'linear-gradient(180deg, #fffde7, #fff9c4)', border: '2px solid #f9a825', borderRadius: '3px 3px 2px 2px', margin: '0 auto' }}>
          <div style={{ width: 2, height: 8, background: '#795548', margin: '0 auto' }} />
        </div>
      </div>
      <div style={{ fontSize: 28 }}>→</div>
      {/* Dark */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>之後</div>
        <div style={{ width: 60, height: 80, background: '#212121', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 22 }}>🌑</div>
        </div>
        <div style={{ fontSize: 10, color: '#888', marginTop: 4 }}>熄滅</div>
      </div>
    </div>
  );
}

export function GoOverAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Document in center */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -58%)', textAlign: 'center' }}>
        <div style={{ fontSize: 52 }}>📄</div>
        {/* Lines on document */}
        <div style={{ position: 'absolute', top: 14, left: 12, right: 12 }}>
          <div style={{ height: 3, background: '#90caf9', borderRadius: 2, marginBottom: 5 }} />
          <div style={{ height: 3, background: '#90caf9', borderRadius: 2, marginBottom: 5, width: '75%' }} />
          <div style={{ height: 3, background: '#90caf9', borderRadius: 2, width: '55%' }} />
        </div>
      </div>
      {/* Eye sweeping across */}
      <div style={{ position: 'absolute', top: 28, left: 0, fontSize: 24, animation: 'scan-sweep 2s linear infinite' }}>👁️</div>
      {/* Label text */}
      <div style={{ position: 'absolute', top: 8, right: 10, fontSize: 9, color: '#1565c0', fontWeight: 'bold' }}>複習審閱</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>複習 / 審閱</div>
    </div>
  );
}

export function GoThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Tunnel: dark side bars */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 38, height: '100%', background: 'linear-gradient(90deg, #1a1a2e, #2a2a4e)', borderRadius: '4px 0 0 4px' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 38, height: '100%', background: 'linear-gradient(270deg, #1a1a2e, #2a2a4e)', borderRadius: '0 4px 4px 0' }} />
      {/* Lighter center (tunnel light) */}
      <div style={{ position: 'absolute', top: 0, left: 38, right: 38, height: '100%', background: 'linear-gradient(180deg, #fff9e6, #fffde7)', opacity: 0.9 }} />
      {/* Person walking through tunnel */}
      <div style={{ position: 'absolute', bottom: 22, left: 0, fontSize: 28, animation: 'pass-thru 2.8s ease-in-out infinite' }}>🧑</div>
      {/* "撐過去!" text */}
      <div style={{ position: 'absolute', top: 10, left: 0, right: 0, textAlign: 'center', fontSize: 13, fontWeight: 'bold', color: '#e65100', animation: 'pop-out 2.8s ease-in-out infinite' }}>撐過去!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#555' }}>經歷 / 仔細審查</div>
    </div>
  );
}

export function GoOnAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Play button */}
      <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', fontSize: 28 }}>▶️</div>
      {/* Three blinking dots */}
      <div style={{ position: 'absolute', top: 52, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#42a5f5',
              animation: `blink 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 28, left: 20, right: 20, height: 8, background: '#e0e0e0', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg, #42a5f5, #1e88e5)', borderRadius: 4, animation: 'scan-sweep 3s linear infinite', width: '60%' }} />
      </div>
      {/* "繼續中..." text */}
      <div style={{ position: 'absolute', bottom: 40, right: 14, fontSize: 9, color: '#1565c0', fontWeight: 'bold' }}>繼續中...</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續 / 進行中</div>
    </div>
  );
}

export function GoBackAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Whiteboard/drawing board on left */}
      <div style={{ position: 'absolute', left: 10, top: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 32 }}>🗒️</div>
        <div style={{ fontSize: 8, color: '#888', marginTop: 2 }}>起點</div>
      </div>
      {/* Large return arrow pulsing in center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -58%)', fontSize: 36, animation: 'goal-pulse 1.5s ease-in-out infinite' }}>↩️</div>
      {/* Clock on right */}
      <div style={{ position: 'absolute', right: 10, top: 12, textAlign: 'center' }}>
        <div style={{ fontSize: 32 }}>🕰️</div>
        <div style={{ fontSize: 8, color: '#888', marginTop: 2 }}>時間</div>
      </div>
      {/* Person returning leftward */}
      <div style={{ position: 'absolute', bottom: 24, left: 0, fontSize: 26, animation: 'march-ahead 2.5s linear infinite', transform: 'scaleX(-1)' }}>🧑</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回去 / 追溯</div>
    </div>
  );
}

export function GoOffAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Concentric ripple rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            width: i * 40,
            height: i * 40,
            borderRadius: '50%',
            border: '2px solid #e53935',
            opacity: 0,
            animation: `ripple-out 3s ease-in-out infinite`,
            animationDelay: `${(i - 1) * 0.8}s`,
          }}
        />
      ))}
      {/* Alarm clock center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -65%)', fontSize: 40, animation: 'alarm-shake 3s ease-in-out infinite' }}>⏰</div>
      {/* Blinking warning text */}
      <div style={{ position: 'absolute', bottom: 28, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: '#c62828', animation: 'blink 1.2s ease-in-out infinite' }}>警報響了!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>響 / 爆炸 / 壞掉</div>
    </div>
  );
}

export function GoAheadAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Traffic light on left */}
      <div style={{ position: 'absolute', left: 14, top: 10 }}>
        <div style={{ fontSize: 36 }}>🚦</div>
        {/* Green indicator */}
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#4caf50', margin: '4px auto 0', boxShadow: '0 0 8px #4caf50', animation: 'goal-pulse 2.5s ease-in-out infinite' }} />
      </div>
      {/* "放行!" text */}
      <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-30%)', fontSize: 13, fontWeight: 'bold', color: '#2e7d32', animation: 'pop-out 2.5s ease-in-out infinite' }}>放行!</div>
      {/* Person running forward on right */}
      <div style={{ position: 'absolute', bottom: 26, left: 60, fontSize: 30, animation: 'march-ahead 2s ease-in-out infinite' }}>🏃</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續 / 放行</div>
    </div>
  );
}

export function GoForAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Person sprinting on left */}
      <div style={{ position: 'absolute', bottom: 26, left: 0, fontSize: 30, animation: 'march-forward 3s linear infinite' }}>🏃</div>
      {/* Path line */}
      <div style={{ position: 'absolute', bottom: 36, left: 20, right: 56, height: 2, background: 'linear-gradient(90deg, #90caf9, #42a5f5)', borderRadius: 1 }} />
      {/* Target on right pulsing */}
      <div style={{ position: 'absolute', right: 16, top: 18, textAlign: 'center', animation: 'goal-pulse 1.5s ease-in-out infinite' }}>
        <div style={{ fontSize: 40 }}>🎯</div>
        <div style={{ fontSize: 8, color: '#e65100', fontWeight: 'bold', marginTop: 2 }}>目標</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>追求 / 選擇</div>
    </div>
  );
}
