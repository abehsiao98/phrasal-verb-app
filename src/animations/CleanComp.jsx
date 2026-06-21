import React from 'react';
import { motion } from 'framer-motion';

/* ── Clean up (清理) ── Broom sweeps debris away, sparkles appear ── */
export function CleanUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Mess items that disappear as broom passes */}
      {[
        { x: 20, color: '#ef5350', w: 10, h: 6, r: 0 },
        { x: 42, color: '#ff9800', w: 8, h: 8, r: 50 },
        { x: 62, color: '#1565c0', w: 12, h: 5, r: 25 },
        { x: 82, color: '#4caf50', w: 6, h: 6, r: 50 },
        { x: 102, color: '#546e7a', w: 7, h: 7, r: 0 },
      ].map((item, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 16, left: item.x, width: item.w, height: item.h, background: item.color, borderRadius: item.r === 50 ? '50%' : 1 }}
          animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15 + i * 0.08, 0.25 + i * 0.08, 0.8, 0.9, 1] }}
        />
      ))}
      {/* Broom sweeping across */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [5, 120, 120, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
      >
        {/* Broom handle */}
        <div style={{ width: 3, height: 50, background: '#8d6e63', borderRadius: 1, margin: '0 auto' }} />
        {/* Broom head */}
        <div style={{ width: 20, height: 10, background: '#2e7d32', borderRadius: '0 0 4px 4px' }} />
      </motion.div>
      {/* Sparkles (appear after sweeping) */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={`s${i}`}
          style={{ position: 'absolute', bottom: 30 + i * 12, left: 25 + i * 25, width: 6, height: 6, border: '1.5px solid #ffd600', transform: 'rotate(45deg)' }}
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.3, 0.3, 1.2, 1, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3 + i * 0.1, 0.4 + i * 0.1, 0.7, 0.85] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>清理</div>
    </div>
  );
}
