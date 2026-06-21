import React from 'react';
import { motion } from 'framer-motion';

/* ── Find out (發現) ── Curtains part to reveal hidden treasure ── */
export function FindOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Curtain rod */}
      <div style={{ position: 'absolute', top: 8, left: 8, right: 8, height: 4, background: '#37474f', borderRadius: 2 }} />
      {/* Hidden treasure (revealed when curtains open) */}
      <motion.div
        style={{ position: 'absolute', top: 28, left: 85, width: 40, height: 40, background: '#ffd600', borderRadius: '50%' }}
        animate={{ scale: [0.5, 1.1, 1, 1.1, 0.5], opacity: [0.3, 1, 0.9, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, background: '#fff9c4', borderRadius: '50%' }} />
      </motion.div>
      {/* Left curtain */}
      <motion.div
        style={{ position: 'absolute', top: 12, left: 10, width: 90, height: 85, background: '#546e7a', borderRadius: '0 4px 4px 0' }}
        animate={{ x: [0, -65, -65, -65, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }}
      />
      {/* Right curtain */}
      <motion.div
        style={{ position: 'absolute', top: 12, right: 10, width: 90, height: 85, background: '#546e7a', borderRadius: '4px 0 0 4px' }}
        animate={{ x: [0, 65, 65, 65, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>發現</div>
    </div>
  );
}
