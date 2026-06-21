import React from 'react';
import { motion } from 'framer-motion';

/* ── Reach out (伸出援手) ── Hand extending toward another figure ── */
export function ReachOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left figure */}
      <div style={{ position: 'absolute', left: 25, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#1565c0' }} />
          <div style={{ width: 2, height: 14, background: '#1565c0' }} />
        </div>
      </div>
      {/* Extending arm/hand from left figure */}
      <motion.div
        style={{ position: 'absolute', left: 48, top: 55 }}
        animate={{ width: [10, 50, 50, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
      >
        <div style={{ height: 2, background: '#1565c0', borderRadius: 1 }} />
      </motion.div>
      {/* Hand at end of arm */}
      <motion.div
        style={{ position: 'absolute', top: 49, width: 14, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [58, 98, 98, 58] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
      />
      {/* Right figure */}
      <div style={{ position: 'absolute', right: 30, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Connection glow */}
      <motion.div
        style={{ position: 'absolute', top: 50, left: 100, width: 10, height: 10, background: '#4caf50', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 0.6, 0], scale: [0.5, 0.5, 1.5, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.55, 0.8] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>主動聯繫</div>
    </div>
  );
}
