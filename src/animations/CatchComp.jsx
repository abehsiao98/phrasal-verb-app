import React from 'react';
import { motion } from 'framer-motion';

/* ── Catch up (趕上) ── Back runner sprinting to reach front runner ── */
export function CatchUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Front runner (gray, steady pace) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [120, 155, 120] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, background: '#90a4ae', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#90a4ae', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#90a4ae' }} />
          <div style={{ width: 2, height: 12, background: '#90a4ae' }} />
        </div>
      </motion.div>
      {/* Back runner (blue, fast, catching up) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 140, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, background: '#1565c0', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-20, 20, -20] }} transition={{ duration: 0.35, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [20, -20, 20] }} transition={{ duration: 0.35, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Speed lines behind blue runner */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 28 + i * 4, height: 2, background: '#90caf9', borderRadius: 1 }}
          animate={{ width: [8, 16, 8], x: [8, 0, 8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>趕上</div>
    </div>
  );
}
