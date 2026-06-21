import React from 'react';
import { motion } from 'framer-motion';

/* ── Show up (出現) ── Spotlight on stage, person fades in under light ── */
export function ShowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Stage floor */}
      <div style={{ position: 'absolute', bottom: 13, left: 15, right: 15, height: 8, background: '#37474f', borderRadius: 2 }} />
      {/* Spotlight source */}
      <div style={{ position: 'absolute', top: 0, left: 85, width: 16, height: 6, background: '#fdd835', borderRadius: '0 0 4px 4px' }} />
      {/* Spotlight cone */}
      <div style={{
        position: 'absolute', top: 6, left: 78, width: 0, height: 0,
        borderLeft: '14px solid transparent', borderRight: '14px solid transparent',
        borderTop: '88px solid rgba(255,235,59,0.15)'
      }} />
      {/* Stick figure appearing */}
      <motion.div
        style={{ position: 'absolute', bottom: 21, left: 82 }}
        animate={{ opacity: [0, 0, 1, 1, 1, 0], scale: [0.3, 0.3, 1, 1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出現</div>
    </div>
  );
}

/* ── Show off (炫耀) ── Person on pedestal with arms raised, sparkles around ── */
export function ShowOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Pedestal */}
      <div style={{ position: 'absolute', bottom: 15, left: 75, width: 60, height: 10, background: '#8d6e63', borderRadius: '3px 3px 0 0' }} />
      <div style={{ position: 'absolute', bottom: 15, left: 80, width: 50, height: 4, background: '#6d4c41' }} />
      {/* Stick figure with arms raised triumphantly */}
      <div style={{ position: 'absolute', bottom: 25, left: 93 }}>
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms raised V-shape */}
        <div style={{ position: 'absolute', top: 8, left: -10, width: 14, height: 2, background: '#546e7a', transform: 'rotate(-50deg)', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 8, right: -10, width: 14, height: 2, background: '#546e7a', transform: 'rotate(50deg)', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Sparkle diamonds */}
      {[
        { x: 55, y: 15 }, { x: 150, y: 10 },
        { x: 42, y: 40 }, { x: 158, y: 38 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: pos.x, top: pos.y, width: 7, height: 7, background: '#ffd600', transform: 'rotate(45deg)' }}
          animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>炫耀</div>
    </div>
  );
}
