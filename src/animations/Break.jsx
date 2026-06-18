import React from 'react';
import { C } from './utils';

export function BreakIntoAnim() {
  return (
    <div style={{ ...C, gap: 16 }}>
      {/* Lock */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4 }}>市場壁壘</div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ fontSize: 48, animation: 'lock-shake 2.8s ease-in-out infinite' }}>🔒</div>
          {/* Shackle opening */}
          <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', fontSize: 22, animation: 'shackle-open 2.8s ease-in-out infinite' }}>🔓</div>
        </div>
      </div>
      <div style={{ fontSize: 26, color: '#555' }}>→</div>
      {/* Market entered */}
      <div style={{ textAlign: 'center', animation: 'market-enter 2.8s ease-in-out infinite' }}>
        <div style={{ fontSize: 40 }}>📈</div>
        <div style={{ fontSize: 10, color: '#388e3c', fontWeight: 'bold', marginTop: 2 }}>打入市場!</div>
      </div>
    </div>
  );
}

export function BreakDownAnim() {
  return (
    <div style={{ ...C, flexDirection: 'column', gap: 10 }}>
      {/* Server icon tilting/collapsing */}
      <div style={{ fontSize: 44, animation: 'collapse-tilt 3s ease-in-out infinite' }}>🖥️</div>
      {/* Status bar */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 9, color: '#666', marginBottom: 4 }}>系統狀態</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 70, height: 12, border: '2px solid #424242', borderRadius: 3, overflow: 'hidden', background: '#fafafa' }}>
            <div style={{ height: '100%', animation: 'status-drain 3s linear infinite' }} />
          </div>
          <div style={{ fontSize: 11, color: '#f44336', fontWeight: 'bold', animation: 'blink 3s ease-in-out infinite' }}>故障!</div>
        </div>
      </div>
      <div style={{ fontSize: 10, color: '#888' }}>崩潰 / 分解分析</div>
    </div>
  );
}

export function BreakUpAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130 }}>
      {/* Center label */}
      <div style={{ position: 'absolute', top: 8, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>原本的整體</div>
      {/* Left piece */}
      <div style={{ position: 'absolute', top: 28, left: '50%', width: 50, height: 55, background: 'linear-gradient(135deg, #ef5350, #e53935)', borderRadius: '8px 2px 2px 8px', animation: 'split-left 2.8s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18 }}>A</div>
      {/* Crack line */}
      <div style={{ position: 'absolute', top: 24, left: 'calc(50% + 50px)', width: 3, height: 62, background: '#ffeb3b', animation: 'crack-show 2.8s ease-in-out infinite', zIndex: 10, boxShadow: '0 0 6px #ffeb3b' }} />
      {/* Right piece */}
      <div style={{ position: 'absolute', top: 28, left: 'calc(50% + 53px)', width: 50, height: 55, background: 'linear-gradient(135deg, #42a5f5, #1e88e5)', borderRadius: '2px 8px 8px 2px', animation: 'split-right 2.8s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18 }}>B</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>分手 / 拆分</div>
    </div>
  );
}

export function BreakOutAnim() {
  return (
    <div style={{ position: 'relative', width: 240, height: 130, overflow: 'hidden' }}>
      {/* Wall with bars */}
      <div style={{ position: 'absolute', left: 18, top: 10, width: 70, height: 100, border: '5px solid #546e7a', borderRadius: 4, background: '#cfd8dc', animation: 'wall-break 2.8s ease-in-out infinite' }}>
        {[22, 40, 58].map(x => (
          <div key={x} style={{ position: 'absolute', top: 0, bottom: 0, left: x, width: 5, background: '#546e7a' }} />
        ))}
      </div>
      {/* Explosion */}
      <div style={{ position: 'absolute', top: 28, left: 55, fontSize: 36, animation: 'explosion 2.8s ease-in-out infinite' }}>💥</div>
      {/* Bursting figure */}
      <div style={{ position: 'absolute', top: 40, left: 55, fontSize: 30, animation: 'burst-through 2.8s ease-in-out infinite' }}>🦸</div>
      {/* Result */}
      <div style={{ position: 'absolute', right: 12, top: 18, textAlign: 'center' }}>
        <div style={{ fontSize: 28 }}>🔥</div>
        <div style={{ fontSize: 9, color: '#e53935', fontWeight: 'bold', marginTop: 2 }}>爆發!</div>
      </div>
    </div>
  );
}

export function BreakThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 240, height: 130, overflow: 'hidden' }}>
      {/* Thick wall / barrier in center */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 10,
        transform: 'translateX(-50%)',
        width: 22,
        height: 100,
        background: '#78909c',
        border: '3px solid #455a64',
        borderRadius: 3,
        animation: 'wall-break 2.8s ease-in-out infinite',
        zIndex: 1,
      }} />
      {/* Rocket / hero smashing through */}
      <div style={{
        position: 'absolute',
        top: 38,
        left: 42,
        fontSize: 32,
        animation: 'burst-through 2.8s ease-in-out infinite',
        zIndex: 3,
      }}>🚀</div>
      {/* Explosion effect */}
      <div style={{
        position: 'absolute',
        top: 22,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 36,
        animation: 'explosion 2.8s ease-in-out infinite',
        zIndex: 4,
      }}>💥</div>
      {/* "Breakthrough!" text on the right */}
      <div style={{
        position: 'absolute',
        right: 12,
        top: 24,
        textAlign: 'center',
        animation: 'pop-out 2.8s ease-in-out infinite',
        animationDelay: '1.4s',
        zIndex: 5,
      }}>
        <div style={{ fontSize: 24 }}>🏆</div>
        <div style={{ fontSize: 10, color: '#f57c00', fontWeight: 'bold', marginTop: 2 }}>突破!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>突破瓶頸</div>
    </div>
  );
}

export function BreakOffAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Left block */}
      <div style={{
        position: 'absolute',
        left: 18,
        top: 34,
        width: 52,
        height: 52,
        background: '#e3f2fd',
        border: '3px solid #90caf9',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'split-left 2.8s ease-in-out infinite',
      }}>
        <div style={{ fontSize: 26 }}>🤝</div>
      </div>
      {/* Connection line that breaks — shrinks to nothing then scissors appear */}
      <div style={{
        position: 'absolute',
        top: 56,
        left: 70,
        width: 90,
        height: 4,
        background: '#90a4ae',
        borderRadius: 2,
        animation: 'delay-bar 2.8s ease-in-out infinite',
        transformOrigin: 'center',
      }} />
      {/* Scissors appearing over the connection */}
      <div style={{
        position: 'absolute',
        top: 38,
        left: 96,
        fontSize: 22,
        animation: 'pop-out 2.8s ease-in-out infinite',
        animationDelay: '1.2s',
        zIndex: 3,
      }}>✂️</div>
      {/* Right block */}
      <div style={{
        position: 'absolute',
        right: 18,
        top: 34,
        width: 52,
        height: 52,
        background: '#fce4ec',
        border: '3px solid #f48fb1',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'split-right 2.8s ease-in-out infinite',
      }}>
        <div style={{ fontSize: 26 }}>📋</div>
      </div>
      {/* "Negotiation halted" text */}
      <div style={{
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 11,
        fontWeight: 'bold',
        color: '#c62828',
        animation: 'pop-out 2.8s ease-in-out infinite',
        animationDelay: '1.4s',
      }}>談判中止!</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>中斷 / 折斷</div>
    </div>
  );
}

export function BreakAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 230, height: 130, overflow: 'hidden' }}>
      {/* Group of dots on the left representing the crowd */}
      <div style={{ position: 'absolute', left: 14, top: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 18px)', gap: 5 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#90a4ae',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
          }}>👤</div>
        ))}
      </div>
      {/* Single figure breaking away, moving right */}
      <div style={{
        position: 'absolute',
        top: 42,
        left: 68,
        fontSize: 30,
        animation: 'move-away 3s ease-in-out infinite',
        zIndex: 3,
      }}>🧑</div>
      {/* "Freedom!" text on right */}
      <div style={{
        position: 'absolute',
        right: 14,
        top: 28,
        textAlign: 'center',
        animation: 'pop-out 3s ease-in-out infinite',
        animationDelay: '1.5s',
      }}>
        <div style={{ fontSize: 24 }}>🕊️</div>
        <div style={{ fontSize: 10, color: '#388e3c', fontWeight: 'bold' }}>自由!</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>脫離 / 掙脫</div>
    </div>
  );
}

export function BreakEvenAnim() {
  return (
    <div style={{ ...C, flexDirection: 'column', gap: 6 }}>
      {/* Scale visual */}
      <div style={{ position: 'relative', width: 180, height: 72 }}>
        {/* Pivot point */}
        <div style={{ position: 'absolute', left: '50%', top: 28, transform: 'translateX(-50%)', width: 6, height: 6, background: '#546e7a', borderRadius: '50%' }} />
        {/* Balance beam — rotates with balance-settle keyframe */}
        <div style={{
          position: 'absolute',
          top: 26,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 140,
          height: 6,
          background: '#455a64',
          borderRadius: 3,
          transformOrigin: 'center center',
          animation: 'balance-settle 3s ease-in-out infinite',
        }} />
        {/* Left pan */}
        <div style={{
          position: 'absolute',
          left: 4,
          top: 32,
          width: 52,
          height: 32,
          background: '#e3f2fd',
          border: '2px solid #90caf9',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <div style={{ fontSize: 14 }}>💸</div>
          <div style={{ fontSize: 8, color: '#1565c0' }}>成本</div>
        </div>
        {/* Right pan */}
        <div style={{
          position: 'absolute',
          right: 4,
          top: 32,
          width: 52,
          height: 32,
          background: '#e8f5e9',
          border: '2px solid #a5d6a7',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <div style={{ fontSize: 14 }}>💰</div>
          <div style={{ fontSize: 8, color: '#388e3c' }}>收益</div>
        </div>
      </div>
      {/* Balanced result */}
      <div style={{ fontSize: 14, fontWeight: 'bold', color: '#546e7a', animation: 'pop-out 3s ease-in-out infinite', animationDelay: '1.5s' }}>
        ± 0
      </div>
      <div style={{ fontSize: 10, color: '#888' }}>損益兩平</div>
    </div>
  );
}
