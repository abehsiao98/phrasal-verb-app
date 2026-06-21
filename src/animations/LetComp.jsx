import React from 'react';
import { motion } from 'framer-motion';

/* ── Let down (讓人失望) ── Rope lowering, figure with drooping posture ── */
export function LetDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Horizontal bar at top */}
      <div style={{ position: 'absolute', top: 8, left: 60, width: 80, height: 6, background: '#78909c', borderRadius: 2 }} />
      {/* Rope */}
      <motion.div
        style={{ position: 'absolute', top: 14, left: 98, width: 2, background: '#8d6e63' }}
        animate={{ height: [15, 55, 55, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.7, 1] }}
      />
      {/* Weight/bucket on rope */}
      <motion.div
        style={{ position: 'absolute', left: 88, width: 22, height: 16, background: '#546e7a', borderRadius: '0 0 4px 4px' }}
        animate={{ y: [28, 68, 68, 28] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.7, 1] }}
      />
      {/* Disappointed stick figure */}
      <motion.div
        style={{ position: 'absolute', left: 30, bottom: 17 }}
        animate={{ y: [0, 0, 5, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.75, 1] }}
      >
        {/* Head drooping */}
        <motion.div
          style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }}
          animate={{ y: [0, 0, 4, 4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.75, 1] }}
        />
        {/* Shoulders drooping */}
        <div style={{ width: 24, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms hanging */}
        <div style={{ position: 'absolute', top: 18, left: -2, width: 2, height: 14, background: '#546e7a' }} />
        <div style={{ position: 'absolute', top: 18, right: -2, width: 2, height: 14, background: '#546e7a' }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 2 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>讓人失望</div>
    </div>
  );
}
