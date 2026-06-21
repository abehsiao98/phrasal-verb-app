import React from 'react';
import { motion } from 'framer-motion';

/* ── Point out (指出) ── Finger points at a highlighted line in a document ── */
export function PointOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Document */}
      <div style={{ position: 'absolute', left: 70, top: 10, width: 85, height: 90, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: 12, left: 8, right: 8, height: 3, background: '#ccc', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 22, left: 8, right: 8, height: 3, background: '#ccc', borderRadius: 1 }} />
        {/* Highlighted target line */}
        <motion.div
          style={{ position: 'absolute', top: 32, left: 6, right: 6, height: 5, borderRadius: 2 }}
          animate={{ background: ['#e0e0e0', '#1565c0', '#1565c0', '#e0e0e0'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div style={{ position: 'absolute', top: 44, left: 8, right: 8, height: 3, background: '#ccc', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 54, left: 8, right: 14, height: 3, background: '#ccc', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 64, left: 8, right: 8, height: 3, background: '#ccc', borderRadius: 1 }} />
      </div>
      {/* Hand with pointing finger from left */}
      <motion.div
        style={{ position: 'absolute', top: 36 }}
        animate={{ x: [-30, 42, 42, -30] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Palm */}
        <div style={{ width: 22, height: 14, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }} />
        {/* Pointing finger */}
        <div style={{ position: 'absolute', right: -10, top: 3, width: 12, height: 6, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: '0 4px 4px 0' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>指出</div>
    </div>
  );
}
