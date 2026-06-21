import React from 'react';
import { motion } from 'framer-motion';

/* ── Work out (運動/解決) ── Person lifting dumbbell up and down ── */
export function WorkOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure body */}
      <div style={{ position: 'absolute', bottom: 17, left: 82 }}>
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <div style={{ width: 3, height: 14, background: '#546e7a', borderRadius: 1 }} />
          <div style={{ width: 3, height: 14, background: '#546e7a', borderRadius: 1 }} />
        </div>
      </div>
      {/* Arms raising (connected to body) */}
      <motion.div
        style={{ position: 'absolute', left: 78, display: 'flex', alignItems: 'center' }}
        animate={{ bottom: [32, 65, 32] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Left arm */}
        <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
        {/* Dumbbell */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: -1 }}>
          <div style={{ width: 8, height: 14, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 22, height: 4, background: '#78909c' }} />
          <div style={{ width: 8, height: 14, background: '#1565c0', borderRadius: 2 }} />
        </div>
        {/* Right arm */}
        <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1, marginLeft: -1 }} />
      </motion.div>
      {/* Sweat drops */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 25, left: 100 + i * 10, width: 3, height: 5, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
          animate={{ y: [0, 12], opacity: [0.7, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>運動 / 解決</div>
    </div>
  );
}

/* ── Work on (致力於) ── Person at desk, typing, progress bar filling ── */
export function WorkOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Desk */}
      <div style={{ position: 'absolute', top: 62, left: 20, width: 125, height: 5, background: '#795548', borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 67, left: 28, width: 4, height: 18, background: '#795548' }} />
      <div style={{ position: 'absolute', top: 67, left: 135, width: 4, height: 18, background: '#795548' }} />
      {/* Person sitting at desk */}
      <div style={{ position: 'absolute', top: 26, left: 28 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms reaching to desk */}
        <motion.div
          style={{ position: 'absolute', top: 16, left: 16, width: 18, height: 2, background: '#546e7a', borderRadius: 1, transform: 'rotate(25deg)' }}
          animate={{ rotate: [25, 30, 25] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        {/* Seated legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 18, background: '#546e7a' }} />
          <div style={{ width: 2, height: 18, background: '#546e7a' }} />
        </div>
      </div>
      {/* Monitor on desk */}
      <div style={{ position: 'absolute', top: 36, left: 68, width: 40, height: 26, background: '#e3f2fd', border: '2px solid #546e7a', borderRadius: 3 }}>
        {/* Screen content */}
        <div style={{ margin: '4px 4px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '80%', height: 2, background: '#90a4ae' }} />
          <div style={{ width: '60%', height: 2, background: '#90a4ae' }} />
          <div style={{ width: '70%', height: 2, background: '#90a4ae' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', top: 60, left: 84, width: 4, height: 4, background: '#546e7a' }} />
      {/* Progress bar */}
      <div style={{ position: 'absolute', top: 94, left: 20, width: 125, height: 8, background: '#e0e0e0', borderRadius: 4 }}>
        <motion.div
          style={{ height: 8, background: '#4caf50', borderRadius: 4 }}
          animate={{ width: ['0%', '100%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.7, 0.85, 1] }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>致力於</div>
    </div>
  );
}
