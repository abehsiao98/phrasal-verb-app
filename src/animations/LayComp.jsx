import React from 'react';
import { motion } from 'framer-motion';

/* ── Lay off (裁員) ── Worker walking away from office building ── */
export function LayOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Office building */}
      <div style={{ position: 'absolute', left: 15, bottom: 15, width: 55, height: 65, background: '#78909c', borderRadius: 2 }}>
        {/* Windows */}
        {[0, 1, 2].map(r => [0, 1].map(c => (
          <div key={`${r}-${c}`} style={{ position: 'absolute', top: 8 + r * 18, left: 8 + c * 26, width: 14, height: 10, background: '#b0bec5', borderRadius: 1 }} />
        )))}
        {/* Door */}
        <div style={{ position: 'absolute', bottom: 0, left: 18, width: 16, height: 20, background: '#546e7a', borderRadius: '2px 2px 0 0' }} />
      </div>
      {/* Waving hand from building */}
      <motion.div
        style={{ position: 'absolute', left: 72, top: 30, width: 12, height: 8, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 3 }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      {/* Worker walking away */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [85, 85, 170], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <motion.div
          style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }}
          animate={{ y: [0, 0, 3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 1] }}
        />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Red X appearing */}
      <motion.div
        style={{ position: 'absolute', top: 8, left: 30, fontSize: 18, fontWeight: 'bold', color: '#ef5350' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.4, 0.7, 1] }}
      >
        X
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>裁員</div>
    </div>
  );
}
