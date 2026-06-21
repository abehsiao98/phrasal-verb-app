import React from 'react';
import { motion } from 'framer-motion';

/* ── Kick off (開始) ── Foot kicking ball to start ── */
export function KickOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure with kicking motion */}
      <div style={{ position: 'absolute', left: 30, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        {/* Standing leg */}
        <div style={{ position: 'absolute', bottom: -14, left: 6, width: 2, height: 14, background: '#546e7a' }} />
        {/* Kicking leg */}
        <motion.div
          style={{ position: 'absolute', bottom: -10, left: 12, width: 2, height: 14, background: '#546e7a', transformOrigin: 'top center' }}
          animate={{ rotate: [-30, 40, -30] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      {/* Ball flying */}
      <motion.div
        style={{ position: 'absolute', bottom: 20, width: 14, height: 14, background: '#fff', border: '2px solid #37474f', borderRadius: '50%' }}
        animate={{ x: [55, 55, 170], y: [0, 0, -30] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.35, 1] }}
      >
        <div style={{ position: 'absolute', top: 3, left: 3, width: 6, height: 1, background: '#37474f', transform: 'rotate(45deg)' }} />
      </motion.div>
      {/* START text */}
      <motion.div
        style={{ position: 'absolute', right: 15, top: 20, fontSize: 12, fontWeight: 'bold', color: '#4caf50' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1] }}
      >
        START
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>開始</div>
    </div>
  );
}
