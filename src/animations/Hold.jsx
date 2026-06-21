import React from 'react';
import { motion } from 'framer-motion';

/* ── Hold on (等等/堅持) ── Person clinging to cliff edge, dangling ── */
export function HoldOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Cliff rock */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 90, height: 22, background: '#6d4c41', borderRadius: '0 0 6px 0' }} />
      <div style={{ position: 'absolute', top: 22, left: 0, width: 65, height: 8, background: '#5d4037', borderRadius: '0 0 4px 0' }} />
      {/* Two hands gripping the edge */}
      <motion.div
        style={{ position: 'absolute', top: 16, left: 55 }}
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 12, height: 10, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: '4px 4px 0 0' }} />
      </motion.div>
      <motion.div
        style={{ position: 'absolute', top: 16, left: 72 }}
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        <div style={{ width: 12, height: 10, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: '4px 4px 0 0' }} />
      </motion.div>
      {/* Body dangling below */}
      <motion.div
        style={{ position: 'absolute', top: 28, left: 56 }}
        animate={{ x: [-3, 3, -3], rotate: [-2, 2, -2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Arms reaching up */}
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
        </div>
        {/* Head */}
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', marginLeft: -2, marginTop: 1 }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, marginLeft: -5, marginTop: 1 }} />
        {/* Legs */}
        <div style={{ display: 'flex', gap: 6, marginLeft: -2 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Effort sweat drops */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 32, left: 92 + i * 8, width: 3, height: 5, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
          animate={{ y: [0, 15], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>等等 / 堅持</div>
    </div>
  );
}

/* ── Hold up (耽誤) ── Cars stuck behind a barrier, waiting ── */
export function HoldUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Road dashes */}
      {[20, 60, 100, 140].map(x => (
        <div key={x} style={{ position: 'absolute', bottom: 19, left: x, width: 16, height: 2, background: '#ccc' }} />
      ))}
      {/* Barrier post */}
      <div style={{ position: 'absolute', bottom: 15, left: 115, width: 6, height: 42, background: '#546e7a', borderRadius: 2 }} />
      {/* Barrier bar */}
      <div style={{ position: 'absolute', bottom: 52, left: 30, width: 88, height: 6, background: '#ef5350', borderRadius: 3 }}>
        <div style={{ position: 'absolute', left: 14, top: 0, width: 10, height: 6, background: '#fff', opacity: 0.5 }} />
        <div style={{ position: 'absolute', left: 40, top: 0, width: 10, height: 6, background: '#fff', opacity: 0.5 }} />
        <div style={{ position: 'absolute', left: 66, top: 0, width: 10, height: 6, background: '#fff', opacity: 0.5 }} />
      </div>
      {/* Cars waiting */}
      {[
        { x: 10, color: '#1565c0' },
        { x: 40, color: '#4caf50' },
        { x: 70, color: '#ff9800' },
      ].map((car, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 16, left: car.x, width: 24, height: 14, background: car.color, borderRadius: 3 }}
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        >
          {/* Windshield */}
          <div style={{ position: 'absolute', top: -5, left: 5, width: 14, height: 6, background: car.color, borderRadius: '3px 3px 0 0', opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: -3, left: 8, width: 8, height: 4, background: '#fff', borderRadius: 1, opacity: 0.5 }} />
        </motion.div>
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>耽誤</div>
    </div>
  );
}

/* ── Hold back (壓抑) ── Person bracing against dam, water pressing from behind ── */
export function HoldBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Dam wall */}
      <div style={{ position: 'absolute', top: 10, left: 100, width: 8, height: 85, background: '#78909c', borderRadius: 2 }} />
      {/* Stick figure bracing against dam */}
      <div style={{ position: 'absolute', top: 28, left: 76 }}>
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 2 }} />
        {/* Arms pushing against dam */}
        <div style={{ position: 'absolute', top: 14, right: -12, width: 14, height: 2, background: '#546e7a' }} />
        <div style={{ position: 'absolute', top: 18, right: -12, width: 14, height: 2, background: '#546e7a' }} />
        {/* Legs braced */}
        <div style={{ width: 2, height: 14, background: '#546e7a', marginLeft: 4, marginTop: 1 }} />
        <div style={{ width: 2, height: 14, background: '#546e7a', position: 'absolute', top: 22, left: 14 }} />
      </div>
      {/* Water mass pressing from right */}
      <motion.div
        style={{ position: 'absolute', top: 10, left: 110, width: 80, height: 85, background: 'linear-gradient(90deg, #42a5f5, #1565c0)', borderRadius: '0 6px 6px 0', opacity: 0.6 }}
        animate={{ x: [-2, 4, -2] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Wave lines on water */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 22 + i * 20, left: 118, width: 14, height: 2, background: '#fff', borderRadius: 1, opacity: 0.5 }}
          animate={{ x: [-3, 5, -3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {/* Small water drops escaping */}
      {[0, 1].map(i => (
        <motion.div
          key={`d${i}`}
          style={{ position: 'absolute', top: 35 + i * 20, left: 72, width: 3, height: 3, background: '#42a5f5', borderRadius: '50%' }}
          animate={{ x: [-8, -18], y: [0, 8], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>壓抑</div>
    </div>
  );
}
