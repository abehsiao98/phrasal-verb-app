import React from 'react';
import { motion } from 'framer-motion';

/* ── Figure out (想通) ── Ball navigates a maze to find the exit ── */
export function FigureOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Maze walls */}
      <div style={{ position: 'absolute', top: 8, left: 15, width: 4, height: 68, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 8, left: 15, width: 50, height: 4, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 8, right: 30, width: 4, height: 38, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 38, left: 40, width: 50, height: 4, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 38, left: 40, width: 4, height: 38, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 72, left: 15, width: 30, height: 4, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 58, right: 30, width: 40, height: 4, background: '#b0bec5', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 58, right: 30, width: 4, height: 28, background: '#b0bec5', borderRadius: 2 }} />
      {/* Ball navigating the maze */}
      <motion.div
        style={{ position: 'absolute', width: 10, height: 10, background: '#1565c0', borderRadius: '50%' }}
        animate={{
          left: [22, 22, 55, 55, 90, 90, 140, 140, 175],
          top:  [16, 46, 46, 66, 66, 46, 46, 82, 82]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Exit marker - green circle with checkmark */}
      <motion.div
        style={{ position: 'absolute', top: 78, right: 18, width: 16, height: 16, background: '#4caf50', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="10" height="8"><path d="M 1 4 L 4 7 L 9 1" fill="transparent" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>想通</div>
    </div>
  );
}
