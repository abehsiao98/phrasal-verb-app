import React from 'react';
import { motion } from 'framer-motion';

/* ── Pass out (昏倒) ── Figure tipping over and falling flat ── */
export function PassOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure tipping over */}
      <motion.div
        style={{ position: 'absolute', left: 80, bottom: 17, transformOrigin: 'bottom center' }}
        animate={{ rotate: [0, 0, 75, 85, 85, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.45, 0.55, 0.8, 1] }}
      >
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Torso */}
        <div style={{ width: 5, height: 18, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Dizzy stars */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 15, left: 72 + i * 12, width: 5, height: 5, background: '#ffeb3b', borderRadius: '50%' }}
          animate={{ opacity: [0, 0, 0.8, 0], y: [0, 0, -5, -10], rotate: [0, 0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.5, 0.7], delay: i * 0.15 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>昏倒</div>
    </div>
  );
}

/* ── Pass up (放棄機會) ── Hand pushing away gift/opportunity ── */
export function PassUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure on left */}
      <div style={{ position: 'absolute', left: 30, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Hand pushing away */}
      <motion.div
        style={{ position: 'absolute', left: 52, top: 42, width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [0, 20, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.6, 1] }}
      />
      {/* Gift box floating away */}
      <motion.div
        style={{ position: 'absolute', top: 30 }}
        animate={{ x: [85, 85, 170], y: [0, 0, -15], opacity: [1, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.25, 1] }}
      >
        <div style={{ width: 22, height: 20, background: '#ef5350', borderRadius: 3, border: '1.5px solid #c62828', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#ffd600', marginTop: -1 }} />
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#ffd600', marginLeft: -1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>錯過機會</div>
    </div>
  );
}
