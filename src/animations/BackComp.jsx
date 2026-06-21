import React from 'react';
import { motion } from 'framer-motion';

/* ── Back up (支持/備份) ── Car reversing with red brake lights ── */
export function BackUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Car body moving backward */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [150, 40, 40, 150] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 0.7, 1] }}
      >
        {/* Car body */}
        <div style={{ width: 50, height: 20, background: '#1565c0', borderRadius: 4 }}>
          {/* Roof */}
          <div style={{ position: 'absolute', top: -10, left: 10, width: 28, height: 12, background: '#1565c0', borderRadius: '4px 4px 0 0' }} />
          {/* Windshield */}
          <div style={{ position: 'absolute', top: -7, left: 14, width: 20, height: 8, background: '#bbdefb', borderRadius: 2, opacity: 0.7 }} />
        </div>
        {/* Wheels */}
        <div style={{ position: 'absolute', bottom: -4, left: 6, width: 8, height: 8, background: '#37474f', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 6, width: 8, height: 8, background: '#37474f', borderRadius: '50%' }} />
        {/* Brake lights (red, on left = back of car) */}
        <motion.div
          style={{ position: 'absolute', top: 4, left: -2, width: 4, height: 6, background: '#ef5350', borderRadius: 1 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        <motion.div
          style={{ position: 'absolute', top: 12, left: -2, width: 4, height: 6, background: '#ef5350', borderRadius: 1 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </motion.div>
      {/* Left arrow indicating reverse */}
      <motion.div
        style={{ position: 'absolute', top: 20, left: 60 }}
        animate={{ x: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid #90a4ae' }} />
          <div style={{ width: 20, height: 2, background: '#90a4ae', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>支持、備份</div>
    </div>
  );
}
