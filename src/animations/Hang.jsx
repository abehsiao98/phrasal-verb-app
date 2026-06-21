import React from 'react';
import { motion } from 'framer-motion';

/* ── Hang out (閒逛/出去玩) ── Two stick figures sitting on bench, idle sway ── */
export function HangOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Bench seat */}
      <div style={{ position: 'absolute', left: 50, top: 68, width: 110, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      {/* Bench legs */}
      <div style={{ position: 'absolute', left: 60, top: 74, width: 4, height: 16, background: '#6d4c41', borderRadius: 1 }} />
      <div style={{ position: 'absolute', left: 146, top: 74, width: 4, height: 16, background: '#6d4c41', borderRadius: 1 }} />
      {/* Left sitting figure */}
      <motion.div
        style={{ position: 'absolute', left: 72, top: 38 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 8, background: '#1565c0' }} />
          <div style={{ width: 2, height: 8, background: '#1565c0' }} />
        </div>
      </motion.div>
      {/* Right sitting figure */}
      <motion.div
        style={{ position: 'absolute', left: 115, top: 38 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#e53935', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 8, background: '#e53935' }} />
          <div style={{ width: 2, height: 8, background: '#e53935' }} />
        </div>
      </motion.div>
      {/* Chat bubbles */}
      <motion.div
        style={{ position: 'absolute', left: 78, top: 18, width: 16, height: 10, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 6 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ margin: '3px auto', width: 8, height: 2, background: '#90caf9', borderRadius: 1 }} />
      </motion.div>
      <motion.div
        style={{ position: 'absolute', left: 118, top: 22, width: 14, height: 8, background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: 6 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
      >
        <div style={{ margin: '2px auto', width: 6, height: 2, background: '#ef9a9a', borderRadius: 1 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>閒逛、出去玩</div>
    </div>
  );
}

/* ── Hang up (掛電話) ── Phone handset descending onto cradle ── */
export function HangUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Phone cradle base */}
      <div style={{ position: 'absolute', left: 70, top: 80, width: 70, height: 18, background: '#37474f', borderRadius: '4px 4px 8px 8px' }}>
        {/* Cradle notch */}
        <div style={{ position: 'absolute', top: -3, left: 10, right: 10, height: 6, background: '#455a64', borderRadius: 3 }} />
      </div>
      {/* Handset descending */}
      <motion.div
        animate={{ y: [0, 0, 50, 50], rotate: [10, 10, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: 78, top: 15 }}
      >
        {/* Handset body */}
        <div style={{ width: 50, height: 12, background: '#263238', borderRadius: 6, position: 'relative' }}>
          {/* Earpiece (left bump) */}
          <div style={{ position: 'absolute', left: -2, top: -4, width: 14, height: 18, background: '#263238', borderRadius: 6 }} />
          {/* Mouthpiece (right bump) */}
          <div style={{ position: 'absolute', right: -2, top: -4, width: 14, height: 18, background: '#263238', borderRadius: 6 }} />
        </div>
      </motion.div>
      {/* Sound waves disappearing */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 130 + i * 10, top: 20, width: 8 + i * 6, height: 14 + i * 6, border: '2px solid #42a5f5', borderLeft: 'none', borderRadius: '0 50% 50% 0' }}
          animate={{ opacity: [0.5, 0.5, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.5, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>掛電話</div>
    </div>
  );
}

/* ── Hang on (稍等/堅持) ── Person hanging from a bar, swaying ── */
export function HangOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Horizontal bar */}
      <div style={{ position: 'absolute', left: 40, top: 14, width: 130, height: 6, background: '#8d6e63', borderRadius: 3 }} />
      {/* Bar supports */}
      <div style={{ position: 'absolute', left: 40, top: 8, width: 5, height: 12, background: '#6d4c41' }} />
      <div style={{ position: 'absolute', left: 165, top: 8, width: 5, height: 12, background: '#6d4c41' }} />
      {/* Hanging stick figure - swaying */}
      <motion.div
        style={{ position: 'absolute', left: 95, top: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', transformOrigin: 'top center' }}
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Hands */}
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ width: 10, height: 8, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 4 }} />
          <div style={{ width: 10, height: 8, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 4 }} />
        </div>
        {/* Arms */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', marginTop: 1 }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, marginTop: 1 }} />
        {/* Torso */}
        <div style={{ width: 3, height: 12, background: '#546e7a' }} />
        {/* Legs */}
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>稍等、堅持</div>
    </div>
  );
}
