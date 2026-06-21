import React from 'react';
import { motion } from 'framer-motion';

/* ── Blow up (爆炸) ── Balloon inflating then popping into fragments ── */
export function BlowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Balloon inflating then disappearing */}
      <motion.div
        style={{ position: 'absolute', left: 80, top: 15, width: 40, height: 50, background: '#ef5350', borderRadius: '50%' }}
        animate={{ scale: [0.3, 1, 1.4, 0], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.65, 0.7] }}
      />
      {/* Balloon string */}
      <motion.div
        style={{ position: 'absolute', left: 98, top: 65, width: 2, height: 20, background: '#bdbdbd' }}
        animate={{ opacity: [1, 1, 0], scaleY: [0.5, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.7] }}
      />
      {/* Explosion flash */}
      <motion.div
        style={{ position: 'absolute', left: 75, top: 15, width: 50, height: 50, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.65, 0.75, 0.85] }}
      />
      {/* Fragments */}
      {[
        { x: -30, y: -20, color: '#ef5350' },
        { x: 35, y: -15, color: '#e53935' },
        { x: -20, y: 25, color: '#ef5350' },
        { x: 30, y: 20, color: '#c62828' },
      ].map((f, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 95, top: 35, width: 8, height: 6, background: f.color, borderRadius: 2 }}
          animate={{ x: [0, 0, f.x], y: [0, 0, f.y], opacity: [0, 0, 1, 0], rotate: [0, 0, f.x * 3] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.68, 0.8, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>爆炸</div>
    </div>
  );
}

/* ── Blow out (吹熄) ── Candle flame extinguished by wind ── */
export function BlowOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Candle body */}
      <div style={{ position: 'absolute', bottom: 15, left: 90, width: 16, height: 50, background: '#fff9c4', border: '2px solid #f9a825', borderRadius: '3px 3px 0 0' }} />
      {/* Wick */}
      <div style={{ position: 'absolute', bottom: 65, left: 96, width: 2, height: 8, background: '#5d4037' }} />
      {/* Flame that dies */}
      <motion.div
        style={{ position: 'absolute', bottom: 70, left: 88, width: 18, height: 22, borderRadius: '50% 50% 50% 50%', background: 'radial-gradient(circle, #ffeb3b, #ff9800)', transformOrigin: 'bottom center' }}
        animate={{ scaleY: [1, 1.1, 0.8, 0], scaleX: [1, 0.9, 1.2, 0], opacity: [1, 1, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 0.7] }}
      />
      {/* Wind lines from left */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 35 + i * 10, width: 20, height: 2, background: '#90caf9', borderRadius: 1 }}
          animate={{ x: [20, 80], opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 + i * 0.2 }}
        />
      ))}
      {/* Smoke wisp after extinguish */}
      <motion.div
        style={{ position: 'absolute', left: 94, width: 6, height: 6, background: '#bdbdbd', borderRadius: '50%' }}
        animate={{ y: [65, 65, 30, 10], opacity: [0, 0, 0.5, 0], x: [0, 0, 5, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.7, 0.85, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>吹熄</div>
    </div>
  );
}

/* ── Blow off (放鴿子) ── Papers flying off desk from wind ── */
export function BlowOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Desk */}
      <div style={{ position: 'absolute', bottom: 15, left: 30, width: 80, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 15, left: 35, width: 3, height: 25, background: '#8d6e63' }} />
      <div style={{ position: 'absolute', bottom: 15, left: 102, width: 3, height: 25, background: '#8d6e63' }} />
      {/* Papers flying off */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 50 + i * 15, bottom: 20, width: 14, height: 18, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 1 }}
          animate={{ x: [0, 60 + i * 15], y: [0, -30 - i * 10], rotate: [0, 20 + i * 10], opacity: [1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }}
        >
          <div style={{ margin: '3px 2px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ width: 8, height: 1, background: '#90caf9' }} />
            <div style={{ width: 6, height: 1, background: '#90caf9' }} />
          </div>
        </motion.div>
      ))}
      {/* Wind lines */}
      {[0, 1].map(i => (
        <motion.div
          key={`w${i}`}
          style={{ position: 'absolute', top: 40 + i * 12, width: 25, height: 2, background: '#90caf9', borderRadius: 1 }}
          animate={{ x: [10, 90], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放鴿子</div>
    </div>
  );
}
