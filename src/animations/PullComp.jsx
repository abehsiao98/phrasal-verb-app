import React from 'react';
import { motion } from 'framer-motion';

/* ── Pull off (成功) ── Magician pulls rabbit from hat, sparkles ── */
export function PullOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Top hat */}
      <div style={{ position: 'absolute', left: 72, top: 52 }}>
        <div style={{ width: 44, height: 32, background: '#263238', borderRadius: '3px 3px 0 0' }} />
        <div style={{ width: 60, height: 6, background: '#263238', borderRadius: 2, marginLeft: -8 }} />
        <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, height: 4, background: '#ef5350' }} />
      </div>
      {/* Rabbit rising out of hat */}
      <motion.div
        animate={{ y: [28, 28, 0, 0, 28] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
        style={{ position: 'absolute', left: 84, top: 16 }}
      >
        {/* Ears */}
        <div style={{ width: 6, height: 14, background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: '50%', position: 'absolute', left: 2, top: 0, transform: 'rotate(-10deg)' }} />
        <div style={{ width: 6, height: 14, background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: '50%', position: 'absolute', left: 14, top: 0, transform: 'rotate(10deg)' }} />
        {/* Head */}
        <div style={{ width: 18, height: 14, background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: '50%', position: 'absolute', top: 12, left: 1 }}>
          <div style={{ position: 'absolute', top: 4, left: 4, width: 3, height: 3, background: '#546e7a', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: 4, right: 4, width: 3, height: 3, background: '#546e7a', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* Sparkle stars */}
      {[{ x: 55, y: 20 }, { x: 140, y: 16 }, { x: 48, y: 46 }, { x: 148, y: 42 }].map((pos, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: pos.x, top: pos.y, width: 7, height: 7, background: '#ffd600', transform: 'rotate(45deg)' }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>成功</div>
    </div>
  );
}

/* ── Pull out (撤出) ── Figures retreating from a danger zone ── */
export function PullOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Danger zone on right */}
      <div style={{ position: 'absolute', right: 8, top: 12, width: 68, height: 78, border: '2px dashed #ef5350', borderRadius: 4, background: 'rgba(239,83,80,0.05)' }}>
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: '#ef5350', fontWeight: 'bold' }}>ZONE</div>
      </div>
      {/* Group of stick figures retreating left */}
      <motion.div
        animate={{ x: [50, 50, -20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 1] }}
        style={{ position: 'absolute', left: 25, top: 25 }}
      >
        {[0, 22, 10].map((left, i) => (
          <div key={i} style={{ position: 'absolute', left, top: i * 16 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a' }} />
            <div style={{ width: 14, height: 4, background: '#546e7a', borderRadius: 1, marginLeft: -1 }} />
            <div style={{ display: 'flex', gap: 3, marginLeft: 1 }}>
              <div style={{ width: 2, height: 10, background: '#546e7a' }} />
              <div style={{ width: 2, height: 10, background: '#546e7a' }} />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Retreat arrow */}
      <motion.div
        animate={{ opacity: [0, 0.6, 0], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', left: 35, top: 86, transformOrigin: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid #ef5350' }} />
          <div style={{ width: 35, height: 2, background: '#ef5350', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撤出</div>
    </div>
  );
}

/* ── Pull over (靠邊停) ── Car moves from road center to roadside ── */
export function PullOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Road surface */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 42, height: 48, background: '#90a4ae', borderRadius: 2 }} />
      {/* Center line dashes */}
      {[12, 52, 92, 132, 172].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: 64, width: 20, height: 3, background: '#fff', borderRadius: 1 }} />
      ))}
      {/* Road edge */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 88, height: 2, background: '#e0e0e0' }} />
      {/* Shoulder / grass */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 90, height: 12, background: '#c8e6c9' }} />
      {/* Car moving from center to roadside */}
      <motion.div
        animate={{ x: [0, 20, 40, 40], y: [0, 0, 12, 12] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: 55, top: 46 }}
      >
        <div style={{ width: 40, height: 14, background: '#1565c0', borderRadius: '3px 3px 1px 1px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -7, left: 8, width: 22, height: 9, background: '#1976d2', borderRadius: '4px 4px 0 0' }} />
          <div style={{ position: 'absolute', top: -5, left: 12, width: 7, height: 5, background: '#bbdefb', borderRadius: 1 }} />
          <div style={{ position: 'absolute', top: -5, left: 21, width: 7, height: 5, background: '#bbdefb', borderRadius: 1 }} />
        </div>
        <div style={{ position: 'absolute', bottom: -4, left: 5, width: 7, height: 7, borderRadius: '50%', background: '#37474f' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 5, width: 7, height: 7, borderRadius: '50%', background: '#37474f' }} />
        {/* Brake lights */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          style={{ position: 'absolute', top: 3, left: -2 }}
        >
          <div style={{ width: 3, height: 4, background: '#ef5350', borderRadius: 1 }} />
        </motion.div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>靠邊停</div>
    </div>
  );
}
