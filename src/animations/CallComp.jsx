import React from 'react';
import { motion } from 'framer-motion';

/* ── Call off (取消) ── Calendar with red X stamped over it ── */
export function CallOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Calendar */}
      <div style={{ position: 'absolute', left: 70, top: 15, width: 60, height: 55, background: '#fff', border: '2px solid #90a4ae', borderRadius: 4 }}>
        {/* Header bar */}
        <div style={{ width: '100%', height: 14, background: '#1565c0', borderRadius: '2px 2px 0 0' }} />
        {/* Grid lines */}
        {[0, 1, 2].map(r => (
          <div key={r} style={{ position: 'absolute', top: 18 + r * 12, left: 4, right: 4, display: 'flex', gap: 3 }}>
            {[0, 1, 2, 3, 4].map(c => (
              <div key={c} style={{ width: 8, height: 8, background: '#e3f2fd', borderRadius: 1 }} />
            ))}
          </div>
        ))}
      </div>
      {/* Red X stamp */}
      <motion.div
        style={{ position: 'absolute', left: 75, top: 18, fontSize: 48, fontWeight: 'bold', color: '#ef5350', lineHeight: 1 }}
        animate={{ scale: [0, 0, 1.3, 1], opacity: [0, 0, 1, 1], rotate: [0, 0, -10, -5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 0.6] }}
      >
        X
      </motion.div>
      {/* Hand stamping */}
      <motion.div
        style={{ position: 'absolute', left: 130, width: 24, height: 20, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ y: [10, 10, 30, 10], x: [10, 10, -20, 10] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.45, 0.6] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>取消</div>
    </div>
  );
}

/* ── Call back (回電) ── Phone with return arrow ── */
export function CallBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Phone on left */}
      <div style={{ position: 'absolute', left: 30, top: 25, width: 24, height: 42, background: '#37474f', borderRadius: 4 }}>
        <div style={{ position: 'absolute', top: 4, left: 3, right: 3, bottom: 8, background: '#4fc3f7', borderRadius: 2 }} />
        <div style={{ position: 'absolute', bottom: 2, left: 8, width: 8, height: 4, background: '#546e7a', borderRadius: 2 }} />
      </div>
      {/* Signal waves going right */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 35 + i * 8, left: 58, width: 10, height: 2, background: '#42a5f5', borderRadius: 1 }}
          animate={{ x: [0, 40], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {/* Stick figure on right */}
      <div style={{ position: 'absolute', right: 35, top: 25 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Return arrow */}
      <motion.div
        style={{ position: 'absolute', top: 72, left: 70 }}
        animate={{ opacity: [0, 0.7, 0], scaleX: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid #4caf50' }} />
          <div style={{ width: 40, height: 2, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回電</div>
    </div>
  );
}
