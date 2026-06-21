import React from 'react';
import { motion } from 'framer-motion';

/* ── End up (最終) ── Ball travels a winding path, arrives at unexpected destination ── */
export function EndUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Winding path segments */}
      {[
        { x: 10, y: 78, w: 30, r: -20 },
        { x: 32, y: 66, w: 28, r: 15 },
        { x: 55, y: 58, w: 30, r: -25 },
        { x: 78, y: 46, w: 26, r: 20 },
        { x: 100, y: 36, w: 30, r: -10 },
        { x: 125, y: 28, w: 28, r: 5 },
        { x: 148, y: 22, w: 25, r: 0 },
      ].map((seg, i) => (
        <div key={i} style={{ position: 'absolute', top: seg.y, left: seg.x, width: seg.w, height: 4, background: '#b0bec5', borderRadius: 2, transform: `rotate(${seg.r}deg)` }} />
      ))}
      {/* Ball traveling along path */}
      <motion.div
        style={{ position: 'absolute', width: 12, height: 12, background: '#1565c0', borderRadius: '50%' }}
        animate={{
          left: [14, 38, 62, 86, 108, 134, 158],
          top:  [73, 62, 53, 42, 32, 24, 18]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Destination marker with "?" */}
      <motion.div
        style={{ position: 'absolute', top: 6, right: 12 }}
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 20, height: 20, background: '#ef5350', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>?</span>
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>最終</div>
    </div>
  );
}
