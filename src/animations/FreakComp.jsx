import React from 'react';
import { motion } from 'framer-motion';

/* ── Freak out (抓狂) ── Figure shaking violently with alarm marks ── */
export function FreakOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure shaking */}
      <motion.div
        style={{ position: 'absolute', left: 80, bottom: 17 }}
        animate={{ x: [-5, 5, -4, 4, -3, 3, 0], rotate: [-3, 3, -2, 2, -1, 1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {/* Head */}
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#546e7a', margin: '0 auto', position: 'relative' }}>
          {/* Shocked eyes */}
          <div style={{ position: 'absolute', top: 5, left: 3, width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: 5, right: 3, width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />
          {/* Open mouth */}
          <div style={{ position: 'absolute', bottom: 2, left: 6, width: 6, height: 4, background: '#fff', borderRadius: '0 0 3px 3px' }} />
        </div>
        {/* Body */}
        <div style={{ width: 24, height: 6, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms raised in panic */}
        <div style={{ position: 'absolute', top: 18, left: -8, width: 10, height: 2, background: '#546e7a', transform: 'rotate(-45deg)' }} />
        <div style={{ position: 'absolute', top: 18, right: -8, width: 10, height: 2, background: '#546e7a', transform: 'rotate(45deg)' }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <div style={{ width: 2, height: 16, background: '#546e7a' }} />
          <div style={{ width: 2, height: 16, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Alarm marks */}
      {[
        { x: 55, y: 10 },
        { x: 130, y: 15 },
        { x: 60, y: 45 },
        { x: 135, y: 40 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: pos.x, top: pos.y, fontWeight: 'bold', fontSize: 14, color: '#ef5350' }}
          animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.25 }}
        >
          !
        </motion.div>
      ))}
      {/* Sweat drops */}
      {[0, 1].map(i => (
        <motion.div
          key={`s${i}`}
          style={{ position: 'absolute', top: 22, left: 73 + i * 40, width: 3, height: 5, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
          animate={{ y: [0, 20], opacity: [0.8, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>抓狂</div>
    </div>
  );
}
