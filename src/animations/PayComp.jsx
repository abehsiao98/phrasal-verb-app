import React from 'react';
import { motion } from 'framer-motion';

/* ── Pay off (有回報/還清) ── Coins move from DEBT to PAID zone, checkmark appears ── */
export function PayOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* DEBT area on left */}
      <div style={{ position: 'absolute', left: 8, top: 8, width: 58, height: 72, background: '#ffebee', borderRadius: 6, border: '2px solid #ef9a9a' }}>
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 9, color: '#c62828', fontWeight: 'bold' }}>DEBT</div>
      </div>
      {/* PAID area on right */}
      <div style={{ position: 'absolute', right: 8, top: 8, width: 58, height: 72, background: '#e8f5e9', borderRadius: 6, border: '2px solid #a5d6a7' }}>
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 9, color: '#2e7d32', fontWeight: 'bold' }}>PAID</div>
      </div>
      {/* Coins flying from left to right */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', width: 14, height: 14, background: '#fdd835', borderRadius: '50%', border: '2px solid #f9a825', top: 30 + i * 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          animate={{ left: [25 + i * 4, 148 - i * 4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
        >
          <span style={{ fontSize: 8, fontWeight: 'bold', color: '#f57f17' }}>$</span>
        </motion.div>
      ))}
      {/* Green checkmark */}
      <motion.div
        style={{ position: 'absolute', right: 18, top: 82 }}
        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg width="18" height="14"><path d="M 2 7 L 7 12 L 16 2" fill="transparent" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>有回報、還清</div>
    </div>
  );
}
