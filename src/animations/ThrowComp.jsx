import React from 'react';
import { motion } from 'framer-motion';

/* ── Throw away (丟掉) ── Hand tosses object in arc into trash bin ── */
export function ThrowAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Trash bin on right */}
      <div style={{ position: 'absolute', right: 20, top: 46, width: 38, height: 42, background: '#78909c', borderRadius: '0 0 4px 4px' }} />
      <div style={{ position: 'absolute', right: 16, top: 42, width: 46, height: 6, background: '#546e7a', borderRadius: '2px 2px 0 0' }} />
      <div style={{ position: 'absolute', right: 28, top: 52, width: 2, height: 30, background: '#607d8b' }} />
      <div style={{ position: 'absolute', right: 40, top: 52, width: 2, height: 30, background: '#607d8b' }} />
      {/* Object flying in arc into bin */}
      <motion.div
        style={{ position: 'absolute', left: 18, top: 55, width: 14, height: 14, background: '#ef5350', borderRadius: 3 }}
        animate={{ x: [0, 55, 110, 145], y: [0, -48, -42, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.65, 1] }}
      />
      {/* Hand throwing */}
      <div style={{ position: 'absolute', left: 8, top: 48, width: 22, height: 16, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>丟掉</div>
    </div>
  );
}

/* ── Throw out (趕走) ── Person pushed out through door ── */
export function ThrowOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Door frame on left */}
      <div style={{ position: 'absolute', left: 25, top: 12, width: 52, height: 82, border: '3px solid #8d6e63', borderRadius: 3 }}>
        <div style={{ position: 'absolute', right: 6, top: 38, width: 6, height: 6, background: '#ffd600', borderRadius: '50%' }} />
      </div>
      {/* Stick figure being thrown out */}
      <motion.div
        style={{ position: 'absolute', left: 50, top: 28, transformOrigin: 'center bottom' }}
        animate={{ x: [0, 40, 100], rotate: [0, 10, 25], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms flailing */}
        <div style={{ position: 'absolute', top: 12, left: -6, width: 14, height: 2, background: '#546e7a', transform: 'rotate(-30deg)', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 10, right: -6, width: 14, height: 2, background: '#546e7a', transform: 'rotate(40deg)', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>丟掉 / 趕走</div>
    </div>
  );
}

/* ── Throw up (嘔吐) ── Person bent over with wavy lines from mouth ── */
export function ThrowUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure bent forward */}
      <div style={{ position: 'absolute', left: 50, top: 22, transform: 'rotate(28deg)', transformOrigin: 'bottom center' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Green wavy lines from mouth area */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 85 + i * 2, top: 32 + i * 5, width: 14 - i * 2, height: 3, background: ['#4caf50', '#66bb6a', '#81c784'][i], borderRadius: 4 }}
          animate={{ x: [0, 25 + i * 5], y: [0, 10 + i * 3], opacity: [0.8, 0], scaleX: [1, 1.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: i * 0.35 }}
        />
      ))}
      {/* Puddle on ground */}
      <motion.div
        style={{ position: 'absolute', bottom: 16, left: 100, width: 30, height: 6, background: '#81c784', borderRadius: '50%' }}
        animate={{ scaleX: [0.3, 1, 1], opacity: [0, 0.5, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>嘔吐</div>
    </div>
  );
}
