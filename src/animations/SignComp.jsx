import React from 'react';
import { motion } from 'framer-motion';

/* ── Sign up (註冊) ── Pen writes on form, checkmark appears ── */
export function SignUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Form */}
      <div style={{ position: 'absolute', left: 52, top: 8, width: 85, height: 85, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 4 }}>
        {[16, 32, 48, 64].map(y => (
          <div key={y} style={{ position: 'absolute', top: y, left: 8, right: 8, height: 2, background: '#e0e0e0' }} />
        ))}
      </div>
      {/* Pen writing across signature line */}
      <motion.div
        animate={{ x: [0, 58] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', left: 58, top: 33 }}
      >
        <div style={{ width: 18, height: 4, background: '#37474f', borderRadius: '0 2px 2px 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: -5, top: 0, width: 0, height: 0, borderTop: '2px solid transparent', borderBottom: '2px solid transparent', borderRight: '5px solid #1565c0' }} />
        </div>
      </motion.div>
      {/* Ink trail */}
      <motion.div
        animate={{ scaleX: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', left: 60, top: 35, width: 55, height: 2, background: '#1565c0', transformOrigin: 'left center', borderRadius: 1 }}
      />
      {/* Green checkmark */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1], scale: [0.5, 0.5, 0.5, 1.2] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
        style={{ position: 'absolute', right: 25, top: 58 }}
      >
        <svg width="18" height="14"><path d="M 2 7 L 7 12 L 16 2" fill="transparent" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>註冊</div>
    </div>
  );
}

/* ── Sign in (登入) ── Key turns in lock, door opens ── */
export function SignInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Lock */}
      <div style={{ position: 'absolute', left: 28, top: 22 }}>
        <div style={{ width: 28, height: 24, background: '#90a4ae', borderRadius: 3, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 6, left: 10, width: 8, height: 8, borderRadius: '50%', background: '#37474f' }} />
          <div style={{ position: 'absolute', top: 13, left: 12, width: 4, height: 8, background: '#37474f', borderRadius: '0 0 2px 2px' }} />
        </div>
        <div style={{ position: 'absolute', top: -10, left: 5, width: 18, height: 14, border: '3px solid #78909c', borderBottom: 'none', borderRadius: '8px 8px 0 0' }} />
      </div>
      {/* Key turning */}
      <motion.div
        animate={{ rotate: [0, 0, 90, 90, 0], x: [0, 10, 10, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
        style={{ position: 'absolute', left: 8, top: 35, transformOrigin: 'right center' }}
      >
        <div style={{ width: 18, height: 4, background: '#ff9800', borderRadius: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', left: -8, top: -3, width: 10, height: 10, border: '3px solid #ff9800', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: 0, top: 4, width: 3, height: 3, background: '#ff9800' }} />
          <div style={{ position: 'absolute', right: 5, top: 4, width: 3, height: 4, background: '#ff9800' }} />
        </div>
      </motion.div>
      {/* Door that opens */}
      <motion.div
        animate={{ scaleX: [1, 1, 0.3, 0.3, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1] }}
        style={{ position: 'absolute', right: 22, top: 10, width: 55, height: 85, background: '#8d6e63', borderRadius: 3, border: '2px solid #6d4c41', transformOrigin: 'right center' }}
      >
        <div style={{ position: 'absolute', top: 40, left: 8, width: 6, height: 6, borderRadius: '50%', background: '#ffd600' }} />
      </motion.div>
      {/* Green light */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1] }}
        style={{ position: 'absolute', right: 42, top: 3, width: 10, height: 10, borderRadius: '50%', background: '#4caf50' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>登入</div>
    </div>
  );
}

/* ── Sign out (登出) ── Person walks out of door, door closes ── */
export function SignOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Door frame */}
      <div style={{ position: 'absolute', left: 55, top: 10, width: 52, height: 85, border: '3px solid #8d6e63', borderRadius: 3, background: '#efebe9' }} />
      {/* Door closing */}
      <motion.div
        animate={{ scaleX: [0.3, 0.3, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ position: 'absolute', left: 55, top: 10, width: 52, height: 85, background: '#8d6e63', borderRadius: 3, border: '2px solid #6d4c41', transformOrigin: 'left center' }}
      >
        <div style={{ position: 'absolute', top: 40, right: 8, width: 6, height: 6, borderRadius: '50%', background: '#ffd600' }} />
      </motion.div>
      {/* Stick figure walking out to right */}
      <motion.div
        animate={{ x: [0, 50, 100] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', left: 72, top: 32 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>登出</div>
    </div>
  );
}

/* ── Sign off (批准) ── Stamp comes down on document, APPROVED mark appears ── */
export function SignOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Document */}
      <div style={{ position: 'absolute', left: 55, top: 48, width: 80, height: 50, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 2 }}>
        {[8, 16, 24].map(y => (
          <div key={y} style={{ position: 'absolute', top: y, left: 6, right: 6, height: 2, background: '#e0e0e0' }} />
        ))}
      </div>
      {/* Stamp descending */}
      <motion.div
        animate={{ y: [0, 38, 38, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.55, 1] }}
        style={{ position: 'absolute', left: 78, top: -5 }}
      >
        <div style={{ width: 10, height: 18, background: '#6d4c41', borderRadius: '3px 3px 0 0', margin: '0 auto' }} />
        <div style={{ width: 38, height: 10, background: '#8d6e63', borderRadius: '0 0 2px 2px', marginLeft: -14 }} />
      </motion.div>
      {/* Red APPROVED circle */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', left: 72, top: 52, width: 38, height: 38, border: '3px solid #ef5350', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="20" height="16"><path d="M 2 8 L 8 14 L 18 2" fill="transparent" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>批準</div>
    </div>
  );
}
