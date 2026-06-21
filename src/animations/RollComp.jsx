import React from 'react';
import { motion } from 'framer-motion';

/* ── Roll out (推出) ── Red carpet unrolling ── */
export function RollOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Carpet roll on left */}
      <div style={{ position: 'absolute', left: 15, bottom: 15, width: 22, height: 22, background: '#c62828', borderRadius: '50%', border: '2px solid #b71c1c' }}>
        <div style={{ position: 'absolute', top: 7, left: 7, width: 6, height: 6, background: '#ef5350', borderRadius: '50%' }} />
      </div>
      {/* Unrolling carpet */}
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 36, height: 6, background: 'linear-gradient(90deg, #c62828, #ef5350)', borderRadius: '0 2px 2px 0' }}
        animate={{ width: [0, 150, 150, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.5, 0.8, 1] }}
      />
      {/* Gold trim on carpet edges */}
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 36, height: 1, background: '#ffd600' }}
        animate={{ width: [0, 150, 150, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.5, 0.8, 1] }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: 20, left: 36, height: 1, background: '#ffd600' }}
        animate={{ width: [0, 150, 150, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.5, 0.8, 1] }}
      />
      {/* Sparkles at carpet end */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 22 + i * 4, width: 4, height: 4, background: '#ffeb3b', borderRadius: '50%' }}
          animate={{ x: [150, 150], opacity: [0, 0, 0.8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7], delay: i * 0.1 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推出</div>
    </div>
  );
}
