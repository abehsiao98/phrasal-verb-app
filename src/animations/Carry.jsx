import React from 'react';
import { motion } from 'framer-motion';

/* ── Carry on (繼續) ── Person walking forward with suitcase, footprints behind ── */
export function CarryOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Walking stick figure with suitcase */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [10, 170, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arm holding suitcase */}
        <div style={{ position: 'absolute', top: 16, right: -4, width: 2, height: 12, background: '#546e7a', borderRadius: 1 }} />
        {/* Legs walking */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
        {/* Suitcase */}
        <div style={{ position: 'absolute', top: 22, left: 22 }}>
          <div style={{ width: 4, height: 4, border: '1.5px solid #0d47a1', borderBottom: 'none', borderRadius: '2px 2px 0 0', margin: '0 auto' }} />
          <div style={{ width: 12, height: 14, background: '#1565c0', borderRadius: 2, border: '1px solid #0d47a1' }} />
        </div>
      </motion.div>
      {/* Forward arrow */}
      <motion.div
        style={{ position: 'absolute', top: 35, right: 20 }}
        animate={{ x: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 18, height: 3, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #4caf50' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續</div>
    </div>
  );
}

/* ── Carry out (執行) ── Clipboard with tasks getting checked off one by one ── */
export function CarryOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Clipboard */}
      <div style={{ position: 'absolute', left: 55, top: 6, width: 100, height: 90, background: '#eceff1', border: '3px solid #546e7a', borderRadius: 6 }}>
        {/* Clip at top */}
        <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 30, height: 10, background: '#546e7a', borderRadius: 3 }} />
        {/* Task lines with checkmarks */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', top: 16 + i * 22, left: 12, right: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
            <motion.div
              style={{ width: 12, height: 12, borderRadius: 2, border: '2px solid #bdbdbd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              animate={{ borderColor: ['#bdbdbd', '#bdbdbd', '#4caf50', '#4caf50'], background: ['transparent', 'transparent', '#e8f5e9', '#e8f5e9'] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            >
              <motion.div
                style={{ width: 8, height: 5, borderLeft: '2px solid #4caf50', borderBottom: '2px solid #4caf50', transform: 'rotate(-45deg)', marginTop: -2 }}
                animate={{ opacity: [0, 0, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
              />
            </motion.div>
            <div style={{ flex: 1, height: 3, background: '#b0bec5', borderRadius: 2 }} />
          </div>
        ))}
      </div>
      {/* Hand with pen on left */}
      <motion.div
        style={{ position: 'absolute', left: 15, top: 35 }}
        animate={{ y: [0, 20, 40, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div style={{ width: 20, height: 14, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }} />
        <div style={{ position: 'absolute', top: 3, right: -6, width: 3, height: 16, background: '#546e7a', borderRadius: 1, transform: 'rotate(-15deg)' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>執行</div>
    </div>
  );
}
