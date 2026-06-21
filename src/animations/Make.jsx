import React from 'react';
import { motion } from 'framer-motion';

/* ── Make up (捏造/和好) ── Two people approach each other and shake hands ── */
export function MakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left stick figure walks right */}
      <motion.div
        style={{ position: 'absolute', bottom: 15 }}
        animate={{ x: [20, 75, 75] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#1565c0' }} />
          <div style={{ width: 2, height: 14, background: '#1565c0' }} />
        </div>
      </motion.div>
      {/* Right stick figure walks left */}
      <motion.div
        style={{ position: 'absolute', bottom: 15 }}
        animate={{ x: [170, 115, 115] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#e53935', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#e53935' }} />
          <div style={{ width: 2, height: 14, background: '#e53935' }} />
        </div>
      </motion.div>
      {/* Handshake (two hands meeting in middle) */}
      <motion.div
        style={{ position: 'absolute', top: 42 }}
        animate={{ x: [40, 90, 90], opacity: [0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }} />
      </motion.div>
      <motion.div
        style={{ position: 'absolute', top: 42 }}
        animate={{ x: [160, 104, 104], opacity: [0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }} />
      </motion.div>
      {/* Heart appears when they meet */}
      <motion.div
        style={{ position: 'absolute', top: 14, left: 92 }}
        animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1.2, 1], y: [5, 5, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.6, 1] }}
      >
        <div style={{ position: 'relative', width: 18, height: 16 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 10, height: 10, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 8, top: 0, width: 10, height: 10, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 2, top: 4, width: 14, height: 14, background: '#ef5350', transform: 'rotate(45deg)' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>捏造 / 和好</div>
    </div>
  );
}

/* ── Make out (辨認/理解) ── Eye squinting at blurry shape, shape becomes clear ── */
export function MakeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Eye on the left side */}
      <div style={{ position: 'absolute', left: 20, top: 30, width: 40, height: 24, border: '3px solid #546e7a', borderRadius: '50%', background: '#fff' }}>
        <motion.div
          style={{ position: 'absolute', top: 4, left: 12, width: 12, height: 12, background: '#1565c0', borderRadius: '50%' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ position: 'absolute', top: 2, left: 2, width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />
        </motion.div>
      </div>
      {/* Dotted focus line from eye to object */}
      <motion.div
        style={{ position: 'absolute', left: 62, top: 40, display: 'flex', gap: 4 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 6, height: 2, background: '#90a4ae', borderRadius: 1 }} />
        ))}
      </motion.div>
      {/* Object on right: blurry → clear */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 20 }}
        animate={{ opacity: [0.3, 1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
      >
        {/* Star shape becoming visible */}
        <div style={{ width: 36, height: 36, background: '#ff9800', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #e65100' }}>
          <div style={{ width: 12, height: 12, background: '#fff', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* "Ah!" clarity indicator */}
      <motion.div
        style={{ position: 'absolute', right: 22, top: 60, fontSize: 12, fontWeight: 'bold', color: '#4caf50' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.45, 0.7, 0.85] }}
      >
        !
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>辨認 / 理解</div>
    </div>
  );
}
