import React from 'react';
import { motion } from 'framer-motion';

/* ── Shut down (關閉) ── Computer screen goes dark, power light turns off ── */
export function ShutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Monitor frame */}
      <div style={{ position: 'absolute', left: 50, top: 10, width: 90, height: 60, border: '3px solid #78909c', borderRadius: 5, background: '#e3f2fd', overflow: 'hidden' }}>
        {/* Screen content lines */}
        <div style={{ position: 'absolute', top: 10, left: 10, right: 10, height: 2, background: '#90caf9' }} />
        <div style={{ position: 'absolute', top: 18, left: 10, right: 16, height: 2, background: '#90caf9' }} />
        <div style={{ position: 'absolute', top: 26, left: 10, right: 22, height: 2, background: '#90caf9' }} />
        {/* Black overlay fading in */}
        <motion.div
          animate={{ scale: [0, 0, 3, 3, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 30, height: 30, background: '#263238', borderRadius: '50%', marginTop: -15, marginLeft: -15 }}
        />
      </div>
      {/* Monitor stand */}
      <div style={{ position: 'absolute', left: 88, top: 70, width: 14, height: 8, background: '#90a4ae', borderRadius: '0 0 2px 2px' }} />
      <div style={{ position: 'absolute', left: 78, top: 78, width: 34, height: 4, background: '#90a4ae', borderRadius: 2 }} />
      {/* Power indicator light */}
      <motion.div
        animate={{ background: ['#4caf50', '#4caf50', '#78909c', '#78909c', '#4caf50'] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', left: 92, top: 86, width: 6, height: 6, borderRadius: '50%', border: '1px solid #546e7a' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>關閉</div>
    </div>
  );
}

/* ── Shut up (閉嘴) ── Face with lips closing, zipper appears ── */
export function ShutUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Face circle */}
      <div style={{ position: 'absolute', left: 65, top: 6, width: 60, height: 60, borderRadius: '50%', background: '#ffe0b2', border: '2px solid #ffcc80' }}>
        {/* Eyes */}
        <div style={{ position: 'absolute', top: 18, left: 14, width: 6, height: 6, borderRadius: '50%', background: '#546e7a' }} />
        <div style={{ position: 'absolute', top: 18, right: 14, width: 6, height: 6, borderRadius: '50%', background: '#546e7a' }} />
      </div>
      {/* Top lip closing */}
      <motion.div
        animate={{ y: [0, 6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 82, top: 42, width: 26, height: 6, background: '#ef5350', borderRadius: '6px 6px 0 0' }}
      />
      {/* Bottom lip closing */}
      <motion.div
        animate={{ y: [0, -6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 82, top: 56, width: 26, height: 6, background: '#ef5350', borderRadius: '0 0 6px 6px' }}
      />
      {/* Zipper line appearing */}
      <motion.div
        animate={{ scaleX: [0, 0, 1], opacity: [0, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ position: 'absolute', left: 78, top: 50, transformOrigin: 'left center' }}
      >
        <svg width="34" height="8" viewBox="0 0 34 8">
          <path d="M0,4 L4,1 L8,7 L12,1 L16,7 L20,1 L24,7 L28,1 L34,4" fill="none" stroke="#78909c" strokeWidth="1.5" />
        </svg>
      </motion.div>
      {/* Zipper pull tab */}
      <motion.div
        animate={{ x: [0, 0, 30], opacity: [0, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ position: 'absolute', left: 78, top: 48, width: 5, height: 5, background: '#546e7a', borderRadius: 1 }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>閉嘴</div>
    </div>
  );
}
