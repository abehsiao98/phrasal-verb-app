import React from 'react';
import { motion } from 'framer-motion';

/* ── Wrap up (結束/收尾) ── Gift box gets ribbon and bow tied ── */
export function WrapUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Box body */}
      <div style={{ position: 'absolute', top: 34, left: 68, width: 64, height: 52, background: '#1565c0', borderRadius: 3 }} />
      {/* Box lid */}
      <div style={{ position: 'absolute', top: 28, left: 64, width: 72, height: 10, background: '#1976d2', borderRadius: '3px 3px 0 0' }} />
      {/* Vertical ribbon */}
      <motion.div
        style={{ position: 'absolute', top: 28, left: 96, width: 8, height: 58, background: '#ef5350', borderRadius: 1 }}
        animate={{ scaleY: [0, 1, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Horizontal ribbon */}
      <motion.div
        style={{ position: 'absolute', top: 54, left: 68, width: 64, height: 8, background: '#ef5350', borderRadius: 1 }}
        animate={{ scaleX: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Bow left loop */}
      <motion.div
        style={{ position: 'absolute', top: 14, left: 82, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '12px solid #ef5350' }}
        animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Bow right loop */}
      <motion.div
        style={{ position: 'absolute', top: 14, left: 102, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '12px solid #ef5350' }}
        animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      {/* Bow center knot */}
      <motion.div
        style={{ position: 'absolute', top: 22, left: 96, width: 8, height: 8, background: '#c62828', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>結束、收尾</div>
    </div>
  );
}
