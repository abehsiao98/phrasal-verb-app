import React from 'react';
import { motion } from 'framer-motion';

/* ── Wake up (醒來) ── Figure in bed, eyes opening, sitting up ── */
export function WakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Bed frame */}
      <div style={{ position: 'absolute', bottom: 15, left: 30, width: 120, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 5, left: 35, width: 4, height: 10, background: '#6d4c41' }} />
      <div style={{ position: 'absolute', bottom: 5, left: 142, width: 4, height: 10, background: '#6d4c41' }} />
      {/* Mattress */}
      <div style={{ position: 'absolute', bottom: 21, left: 32, width: 116, height: 14, background: '#e8eaf6', borderRadius: 3, border: '1px solid #c5cae9' }} />
      {/* Pillow */}
      <div style={{ position: 'absolute', bottom: 25, left: 36, width: 28, height: 16, background: '#fff', borderRadius: 6, border: '1px solid #e0e0e0' }} />
      {/* Headboard */}
      <div style={{ position: 'absolute', bottom: 21, left: 28, width: 6, height: 40, background: '#6d4c41', borderRadius: '3px 3px 0 0' }} />
      {/* Blanket */}
      <motion.div
        style={{ position: 'absolute', bottom: 21, left: 60, width: 86, height: 12, background: '#c5cae9', borderRadius: 3, transformOrigin: 'left center' }}
        animate={{ scaleX: [1, 1, 0.5, 0.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
      />
      {/* Figure sitting up */}
      <motion.div
        style={{ position: 'absolute', left: 70, bottom: 33, transformOrigin: 'bottom left' }}
        animate={{ rotate: [-70, -70, 0, 0, -70] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.5, 0.8, 1] }}
      >
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto', position: 'relative' }}>
          {/* Eyes that open */}
          <motion.div
            style={{ position: 'absolute', top: 5, left: 2, width: 3, height: 3, background: '#fff', borderRadius: '50%' }}
            animate={{ scaleY: [0.1, 0.1, 1, 1, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.45, 0.8, 1] }}
          />
          <motion.div
            style={{ position: 'absolute', top: 5, right: 2, width: 3, height: 3, background: '#fff', borderRadius: '50%' }}
            animate={{ scaleY: [0.1, 0.1, 1, 1, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.45, 0.8, 1] }}
          />
        </div>
        {/* Body */}
        <div style={{ width: 5, height: 20, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
      </motion.div>
      {/* Alarm bell */}
      <motion.div
        style={{ position: 'absolute', right: 20, top: 15 }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <div style={{ width: 20, height: 20, background: '#ffeb3b', borderRadius: '50%', border: '2px solid #f9a825' }}>
          <div style={{ position: 'absolute', top: -4, left: 7, width: 6, height: 6, background: '#f9a825', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* Sound waves */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 8 - i * 6, top: 20, width: 4, height: 12, border: '1.5px solid #f9a825', borderLeft: 'none', borderRadius: '0 4px 4px 0' }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>醒來</div>
    </div>
  );
}
