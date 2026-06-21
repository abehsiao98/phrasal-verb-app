import React from 'react';
import { motion } from 'framer-motion';

/* ── Fill out (填寫) ── Pen filling in form lines one by one ── */
export function FillOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Form paper */}
      <div style={{ position: 'absolute', left: 55, top: 8, width: 90, height: 95, background: '#fff', border: '2px solid #90a4ae', borderRadius: 3 }}>
        {/* Form lines */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ position: 'absolute', top: 15 + i * 20, left: 10, right: 10, height: 2, background: '#e0e0e0' }} />
        ))}
        {/* Lines being filled */}
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={`f${i}`}
            style={{ position: 'absolute', top: 15 + i * 20, left: 10, height: 2, background: '#1565c0', borderRadius: 1 }}
            animate={{ width: [0, 0, 60, 60] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.15 + i * 0.18, 0.25 + i * 0.18, 1], ease: 'easeOut' }}
          />
        ))}
      </div>
      {/* Pen */}
      <motion.div
        style={{ position: 'absolute', left: 45, width: 4, height: 28, background: '#1565c0', borderRadius: '2px 2px 0 0', transformOrigin: 'bottom center' }}
        animate={{ y: [15, 15, 35, 55, 75], x: [0, 30, 30, 30, 30], rotate: [30, 30, 30, 30, 30] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.33, 0.51, 0.69] }}
      >
        <div style={{ position: 'absolute', bottom: -4, left: 0, width: 4, height: 6, background: '#0d47a1', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>填寫表格</div>
    </div>
  );
}
