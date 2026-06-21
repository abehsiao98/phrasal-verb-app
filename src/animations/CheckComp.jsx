import React from 'react';
import { motion } from 'framer-motion';

/* ── Check out (查看) ── Eyes looking at a glowing object with interest ── */
export function CheckOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Person on left looking right */}
      <div style={{ position: 'absolute', left: 20, top: 25 }}>
        {/* Head with eye */}
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#546e7a', position: 'relative' }}>
          <motion.div
            style={{ position: 'absolute', top: 7, right: 3, width: 8, height: 6, background: '#fff', borderRadius: '50%' }}
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              style={{ position: 'absolute', top: 1, right: 1, width: 4, height: 4, background: '#1565c0', borderRadius: '50%' }}
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
        {/* Body */}
        <div style={{ width: 5, height: 22, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Glowing object being examined */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 22, width: 30, height: 42, background: '#ffd600', borderRadius: 4, border: '2px solid #f9a825' }}
        animate={{ boxShadow: ['0 0 4px #ffd600', '0 0 14px #ffd600', '0 0 4px #ffd600'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: 10, height: 10, background: '#fff9c4', borderRadius: '50%', margin: '10px auto 0' }} />
        <div style={{ width: 16, height: 2, background: '#f9a825', margin: '6px auto 0', borderRadius: 1 }} />
        <div style={{ width: 12, height: 2, background: '#f9a825', margin: '3px auto 0', borderRadius: 1 }} />
      </motion.div>
      {/* Vision line from eye to object */}
      <motion.div
        style={{ position: 'absolute', left: 45, top: 35, display: 'flex', gap: 5 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ width: 8, height: 2, background: '#90a4ae', borderRadius: 1 }} />
        ))}
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>查看</div>
    </div>
  );
}

/* ── Check in (報到) ── Person slides card across counter, checkmark appears ── */
export function CheckInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Counter / desk */}
      <div style={{ position: 'absolute', top: 52, left: 20, right: 20, height: 10, background: '#8d6e63', borderRadius: 3 }} />
      <div style={{ position: 'absolute', top: 62, left: 25, right: 25, height: 22, background: '#a1887f', borderRadius: '0 0 3px 3px' }} />
      {/* Person on left */}
      <div style={{ position: 'absolute', top: 16, left: 30 }}>
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* ID card sliding across counter */}
      <motion.div
        style={{ position: 'absolute', top: 44, width: 24, height: 14, background: '#1565c0', borderRadius: 2, border: '1px solid #0d47a1' }}
        animate={{ left: [55, 140, 140, 55] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ margin: '3px auto', width: 14, height: 3, background: '#42a5f5', borderRadius: 1 }} />
        <div style={{ margin: '0 auto', width: 10, height: 2, background: '#42a5f5', borderRadius: 1 }} />
      </motion.div>
      {/* Green checkmark appears */}
      <motion.div
        style={{ position: 'absolute', top: 18, right: 30 }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.3, 0.3, 1.2, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="20" height="16"><path d="M 2 8 L 8 14 L 18 2" fill="transparent" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>報到</div>
    </div>
  );
}
