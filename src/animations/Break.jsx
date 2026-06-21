import React from 'react';
import { motion } from 'framer-motion';

/* ── Break into (闖入) ── Object smashing through wall ── */
export function BreakIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Wall */}
      <div style={{ position: 'absolute', top: 10, left: 95, width: 14, height: 90, background: '#78909c', borderRadius: 2 }} />
      {/* Crystal projectile */}
      <motion.div
        style={{ position: 'absolute', top: 40, width: 20, height: 20, background: '#42a5f5', borderRadius: 3, transform: 'rotate(45deg)' }}
        animate={{ x: [10, 10, 105, 155], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 1] }}
      />
      {/* Wall crack */}
      <motion.div
        style={{ position: 'absolute', top: 35, left: 97, width: 10, height: 30 }}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.55, 1] }}
      >
        <div style={{ width: 2, height: 12, background: '#ffeb3b', margin: '0 auto', transform: 'rotate(5deg)' }} />
        <div style={{ width: 2, height: 10, background: '#ffeb3b', margin: '0 auto', transform: 'rotate(-8deg)' }} />
      </motion.div>
      {/* Debris fragments */}
      {[
        { x: 20, y: -15, rot: -20 },
        { x: 25, y: 15, rot: 30 },
        { x: 15, y: 25, rot: -10 },
      ].map((d, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 45, left: 105, width: 6, height: 5, background: '#90a4ae', borderRadius: 1 }}
          animate={{ x: [0, 0, d.x], y: [0, 0, d.y], rotate: [0, 0, d.rot], opacity: [0, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.65, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>闖入</div>
    </div>
  );
}

/* ── Break down (故障/拆解) ── Machine collapsing ── */
export function BreakDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Machine body */}
      <motion.div
        style={{ position: 'absolute', left: 70, top: 15, width: 55, height: 55, background: '#607d8b', borderRadius: 4 }}
        animate={{ y: [0, 0, 15], rotate: [0, 0, 8], opacity: [1, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.8] }}
      >
        {/* Screen */}
        <div style={{ position: 'absolute', top: 6, left: 8, right: 8, height: 20, background: '#b0bec5', borderRadius: 2 }} />
        {/* Buttons */}
        <div style={{ position: 'absolute', bottom: 8, left: 12, width: 8, height: 8, background: '#ef5350', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: 8, left: 26, width: 8, height: 8, background: '#4caf50', borderRadius: '50%' }} />
      </motion.div>
      {/* Parts flying off */}
      {[
        { x: -25, y: 20, color: '#78909c' },
        { x: 30, y: -10, color: '#90a4ae' },
        { x: -15, y: -15, color: '#78909c' },
      ].map((p, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 95, top: 40, width: 8, height: 6, background: p.color, borderRadius: 1 }}
          animate={{ x: [0, 0, p.x], y: [0, 0, p.y], opacity: [0, 0, 1], rotate: [0, 0, p.x * 2] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.8] }}
        />
      ))}
      {/* Spark */}
      <motion.div
        style={{ position: 'absolute', left: 85, top: 25, width: 6, height: 6, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 1, 0], scale: [0.5, 0.5, 1.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.6] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>故障、拆解</div>
    </div>
  );
}

/* ── Break up (分手/分裂) ── Solid block splitting into two halves ── */
export function BreakUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left half */}
      <motion.div
        style={{ position: 'absolute', top: 25, width: 45, height: 55, background: '#ef5350', borderRadius: '6px 0 0 6px' }}
        animate={{ x: [82, 82, 25], opacity: [1, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Right half */}
      <motion.div
        style={{ position: 'absolute', top: 25, width: 45, height: 55, background: '#42a5f5', borderRadius: '0 6px 6px 0' }}
        animate={{ x: [83, 83, 140], opacity: [1, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Crack line */}
      <motion.div
        style={{ position: 'absolute', top: 22, left: 103, width: 3, height: 60, background: '#ffeb3b', borderRadius: 1 }}
        animate={{ opacity: [0, 0, 1, 0], boxShadow: ['0 0 0px #ffeb3b', '0 0 0px #ffeb3b', '0 0 8px #ffeb3b', '0 0 0px #ffeb3b'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.35, 0.5] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>分手、拆分</div>
    </div>
  );
}

/* ── Break out (爆發) ── Figure bursting through prison bars ── */
export function BreakOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Prison bars */}
      {[30, 50, 70, 90].map((x, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 10, left: x, width: 5, height: 85, background: '#546e7a', borderRadius: 1 }}
          animate={i === 1 || i === 2 ? { x: [0, 0, i === 1 ? -12 : 12], rotate: [0, 0, i === 1 ? -8 : 8] } : {}}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6] }}
        />
      ))}
      {/* Top bar */}
      <div style={{ position: 'absolute', top: 10, left: 28, width: 70, height: 5, background: '#546e7a' }} />
      {/* Figure bursting through */}
      <motion.div
        style={{ position: 'absolute', top: 28 }}
        animate={{ x: [55, 55, 150], scale: [0.8, 0.8, 1.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.35, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.3, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>爆發</div>
    </div>
  );
}

/* ── Break through (突破) ── Arrow piercing through thick wall ── */
export function BreakThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Thick wall */}
      <div style={{ position: 'absolute', top: 10, left: 88, width: 22, height: 90, background: '#78909c', borderRadius: 3, border: '2px solid #546e7a' }} />
      {/* Arrow piercing through */}
      <motion.div
        style={{ position: 'absolute', top: 45 }}
        animate={{ x: [5, 5, 170] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn', times: [0, 0.3, 1] }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 30, height: 4, background: '#ef5350', borderRadius: '2px 0 0 2px' }} />
          <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid #ef5350' }} />
        </div>
      </motion.div>
      {/* Wall debris */}
      {[
        { x: 10, y: -12 },
        { x: 15, y: 12 },
        { x: 8, y: 20 },
      ].map((d, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 48, left: 98, width: 5, height: 4, background: '#90a4ae', borderRadius: 1 }}
          animate={{ x: [0, 0, d.x], y: [0, 0, d.y], opacity: [0, 0, 0.8, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.55, 0.8] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>突破</div>
    </div>
  );
}

/* ── Break off (中斷) ── Branch snapping off trunk ── */
export function BreakOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Tree trunk */}
      <div style={{ position: 'absolute', bottom: 13, left: 60, width: 16, height: 80, background: '#6d4c41', borderRadius: '4px 4px 0 0' }} />
      {/* Remaining branch stump */}
      <div style={{ position: 'absolute', top: 35, left: 76, width: 20, height: 6, background: '#6d4c41', borderRadius: 2 }} />
      {/* Branch breaking off */}
      <motion.div
        style={{ position: 'absolute', top: 32, left: 96, transformOrigin: 'left center' }}
        animate={{ rotate: [0, 0, 25, 45], y: [0, 0, 10, 50], opacity: [1, 1, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.6, 1] }}
      >
        <div style={{ width: 45, height: 6, background: '#8d6e63', borderRadius: 2 }} />
        {/* Leaves on branch */}
        <div style={{ position: 'absolute', top: -6, left: 15, width: 10, height: 8, background: '#4caf50', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: -4, left: 30, width: 8, height: 6, background: '#66bb6a', borderRadius: '50%' }} />
      </motion.div>
      {/* Snap spark */}
      <motion.div
        style={{ position: 'absolute', top: 30, left: 90, width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.5] }}
      />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>中斷</div>
    </div>
  );
}

/* ── Break away (脫離) ── Figure running away from group ── */
export function BreakAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Group of gray figures on left */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', left: 10 + i * 18, bottom: 17 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
          <div style={{ width: 14, height: 3, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <div style={{ width: 1.5, height: 8, background: '#bdbdbd' }} />
            <div style={{ width: 1.5, height: 8, background: '#bdbdbd' }} />
          </div>
        </div>
      ))}
      {/* Figure breaking away */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [60, 180], scale: [1, 0.6], opacity: [1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.3, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>脫離</div>
    </div>
  );
}

/* ── Break even (損益兩平) ── Balance scale leveling out ── */
export function BreakEvenAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Pivot stand */}
      <div style={{ position: 'absolute', bottom: 13, left: 99, width: 6, height: 40, background: '#546e7a' }} />
      <div style={{ position: 'absolute', bottom: 13, left: 85, width: 34, height: 6, background: '#546e7a', borderRadius: 2 }} />
      {/* Pivot point */}
      <div style={{ position: 'absolute', bottom: 50, left: 98, width: 8, height: 8, background: '#37474f', borderRadius: '50%' }} />
      {/* Beam that balances */}
      <motion.div
        style={{ position: 'absolute', bottom: 52, left: 32, width: 140, height: 4, background: '#455a64', borderRadius: 2, transformOrigin: 'center center' }}
        animate={{ rotate: [-10, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 0.7] }}
      />
      {/* Left pan (cost) */}
      <motion.div
        style={{ position: 'absolute', left: 20, width: 44, height: 28, background: '#ffcdd2', border: '2px solid #ef9a9a', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        animate={{ y: [55, 55, 42] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7] }}
      >
        <div style={{ fontSize: 8, color: '#c62828', fontWeight: 'bold' }}>COST</div>
      </motion.div>
      {/* Right pan (revenue) */}
      <motion.div
        style={{ position: 'absolute', right: 20, width: 44, height: 28, background: '#c8e6c9', border: '2px solid #a5d6a7', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        animate={{ y: [35, 35, 42] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7] }}
      >
        <div style={{ fontSize: 8, color: '#2e7d32', fontWeight: 'bold' }}>REV</div>
      </motion.div>
      {/* ±0 text */}
      <motion.div
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -10, fontSize: 14, fontWeight: 'bold', color: '#546e7a' }}
        animate={{ opacity: [0, 0, 1], scale: [0.5, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.8] }}
      >
        ±0
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>損益兩平</div>
    </div>
  );
}
