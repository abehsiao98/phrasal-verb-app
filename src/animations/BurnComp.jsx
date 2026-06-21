import React from 'react';
import { motion } from 'framer-motion';

/* ── Burn out (倦怠) ── Candle flame shrinks and dies, smoke drifts up ── */
export function BurnOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Candle body */}
      <div style={{ position: 'absolute', bottom: 18, left: 90, width: 16, height: 50, background: '#fff9c4', border: '2px solid #e0e0e0', borderRadius: '2px 2px 0 0' }} />
      {/* Candle base plate */}
      <div style={{ position: 'absolute', bottom: 15, left: 82, width: 32, height: 6, background: '#e0e0e0', borderRadius: 3 }} />
      {/* Wick */}
      <div style={{ position: 'absolute', bottom: 66, left: 96, width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
      {/* Flame - shrinks and fades */}
      <motion.div
        style={{ position: 'absolute', bottom: 74, left: 88, width: 20, height: 28, transformOrigin: 'bottom center' }}
        animate={{ scaleX: [1, 0.8, 0.4, 0.1, 0], scaleY: [1, 0.7, 0.4, 0.1, 0], opacity: [1, 0.9, 0.5, 0.2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        {/* Outer flame */}
        <div style={{ position: 'absolute', bottom: 0, left: 2, right: 2, height: '100%', background: 'linear-gradient(0deg, #ff6f00, #ff9800 40%, #ffeb3b 80%, transparent)', borderRadius: '50% 50% 20% 20%' }} />
        {/* Inner flame */}
        <div style={{ position: 'absolute', bottom: 0, left: 5, right: 5, height: '60%', background: 'linear-gradient(0deg, #fff, #ffeb3b, transparent)', borderRadius: '50% 50% 20% 20%' }} />
      </motion.div>
      {/* Smoke puffs (appear after flame dies) */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 94 + (i - 1) * 4, width: 6 + i, height: 6 + i, background: '#b0bec5', borderRadius: '50%' }}
          animate={{ bottom: [74, 95 + i * 5], opacity: [0, 0.5, 0], x: [(i - 1) * 3, (i - 1) * 8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 + i * 0.3 }}
        />
      ))}
      {/* Person slumped at desk (burnout metaphor) */}
      <div style={{ position: 'absolute', right: 20, bottom: 17 }}>
        {/* Head on desk */}
        <motion.div
          style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a' }}
          animate={{ y: [0, 0, 4, 4] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
        {/* Body slumped */}
        <div style={{ width: 14, height: 4, background: '#546e7a', borderRadius: 1, marginTop: 1 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>倦怠</div>
    </div>
  );
}
