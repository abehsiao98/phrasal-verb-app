import React from 'react';
import { motion } from 'framer-motion';

/* ── Move on (繼續前進) ── Figure walking forward past milestone marker ── */
export function MoveOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Milestone marker (faded, in the past) */}
      <div style={{ position: 'absolute', bottom: 15, left: 30, width: 4, height: 35, background: '#bdbdbd', borderRadius: 1 }}>
        <div style={{ position: 'absolute', top: -2, left: -4, width: 12, height: 8, background: '#e0e0e0', borderRadius: 2 }} />
      </div>
      {/* Figure walking forward */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [50, 165, 50] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Forward arrow */}
      <motion.div
        style={{ position: 'absolute', top: 20, right: 25 }}
        animate={{ x: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 20, height: 2, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #4caf50' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續前進</div>
    </div>
  );
}
