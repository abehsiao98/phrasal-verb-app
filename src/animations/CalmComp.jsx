import React from 'react';
import { motion } from 'framer-motion';

/* ── Calm down (冷靜) ── Bouncing ball gradually settles to stillness ── */
export function CalmDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20, height: 3, background: '#b0bec5', borderRadius: 2 }} />
      {/* Ball bouncing with decreasing height, color red→blue */}
      <motion.div
        style={{ position: 'absolute', left: 95, width: 18, height: 18, borderRadius: '50%' }}
        animate={{
          bottom: [85, 21, 60, 21, 42, 21, 30, 21, 24, 21],
          background: ['#ef5350', '#ef5350', '#e57373', '#e57373', '#7986cb', '#7986cb', '#42a5f5', '#42a5f5', '#1565c0', '#1565c0']
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Shadow (grows as ball settles) */}
      <motion.div
        style={{ position: 'absolute', bottom: 16, left: 89, height: 4, background: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}
        animate={{ width: [10, 22, 12, 22, 16, 22, 20, 22, 22, 22] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Agitation lines (fade out) */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 15 + i * 8, left: 70 + i * 25, width: 8, height: 2, background: '#ef5350', borderRadius: 1 }}
          animate={{ opacity: [0.8, 0.5, 0.2, 0, 0, 0, 0, 0, 0, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>冷靜</div>
    </div>
  );
}
