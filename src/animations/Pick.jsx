import React from 'react';
import { motion } from 'framer-motion';

/* ── Pick up ── */
export function PickUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Hand reaching down */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 24, height: 20, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ y: [10, 70, 70, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Object being lifted */}
      <motion.div
        style={{ position: 'absolute', left: 90, width: 16, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ y: [85, 85, 70, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撿起 / 學會</div>
    </div>
  );
}

/* ── Pick out ── */
export function PickOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Row of gray circles at bottom */}
      {[30, 60, 90, 120, 150].map((x, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 28, left: x, width: 16, height: 16, borderRadius: '50%', background: i === 2 ? '#1565c0' : '#bdbdbd' }}
          animate={i === 2 ? { y: [0, -40, -40, 0], scale: [1, 1.3, 1.3, 1] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Hand descending from above */}
      <motion.div
        style={{ position: 'absolute', left: 82, width: 24, height: 20, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ y: [5, 50, 50, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>挑選</div>
    </div>
  );
}

/* ── Pick on ── */
export function PickOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Big stick figure (bully) on the left */}
      <div style={{ position: 'absolute', left: 30, top: 18 }}>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 26, height: 8, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 3, height: 18, background: '#546e7a' }} />
          <div style={{ width: 3, height: 18, background: '#546e7a' }} />
        </div>
      </div>
      {/* Big figure's poking hand */}
      <motion.div
        style={{ position: 'absolute', left: 60, top: 40, width: 24, height: 20, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Small stick figure (victim) on the right */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 40 }}
        animate={{ x: [0, 4, -4, 3, -3, 0], rotate: [0, 3, -3, 2, -2, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 14, height: 4, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <div style={{ width: 2, height: 8, background: '#546e7a' }} />
          <div style={{ width: 2, height: 8, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>找碴 / 霸凌</div>
    </div>
  );
}
