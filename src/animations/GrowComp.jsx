import React from 'react';
import { motion } from 'framer-motion';

/* ── Grow up (長大) ── Small stick figure gradually getting taller ── */
export function GrowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Ruler on right */}
      <div style={{ position: 'absolute', right: 30, bottom: 15, width: 6, height: 80, background: '#fff9c4', border: '1px solid #f9a825', borderRadius: 1 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} style={{ position: 'absolute', bottom: i * 10, left: 0, width: i % 2 === 0 ? 6 : 3, height: 1, background: '#f9a825' }} />
        ))}
      </div>
      {/* Stick figure growing */}
      <motion.div
        style={{ position: 'absolute', left: 80, bottom: 15, transformOrigin: 'bottom center' }}
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Torso */}
        <div style={{ width: 5, height: 22, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 16, background: '#546e7a' }} />
          <div style={{ width: 2, height: 16, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Up arrow indicator */}
      <motion.div
        style={{ position: 'absolute', left: 50, top: 15 }}
        animate={{ y: [20, 5, 20], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '10px solid #4caf50', margin: '0 auto' }} />
        <div style={{ width: 3, height: 15, background: '#4caf50', margin: '0 auto', borderRadius: 1 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>長大</div>
    </div>
  );
}
