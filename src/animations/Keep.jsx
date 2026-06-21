import React from 'react';
import { motion } from 'framer-motion';

/* ── Keep up (跟上) ── Two runners, back one struggling to keep pace ── */
export function KeepUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Front runner (blue, steady) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [120, 165, 120] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, background: '#1565c0', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.4, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.4, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Back runner (red, chasing) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [40, 130, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, background: '#ef5350', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#ef5350' }} animate={{ rotate: [-20, 20, -20] }} transition={{ duration: 0.35, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#ef5350' }} animate={{ rotate: [20, -20, 20] }} transition={{ duration: 0.35, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Speed lines behind red runner */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 28 + i * 4, height: 2, background: '#ef9a9a', borderRadius: 1 }}
          animate={{ width: [6, 14, 6], x: [28, 20, 28], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>跟上</div>
    </div>
  );
}

/* ── Keep on (繼續) ── Person walking forward with arrow, footprints behind ── */
export function KeepOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Walking stick figure */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [30, 140, 30] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Footprints left behind */}
      {[10, 28, 46, 64, 82].map((x, i) => (
        <div key={i} style={{ position: 'absolute', bottom: 16, left: x, width: 5, height: 3, background: '#ccc', borderRadius: 2, opacity: 0.3 + i * 0.1 }} />
      ))}
      {/* Forward arrow */}
      <motion.div
        style={{ position: 'absolute', top: 30, right: 25 }}
        animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 20, height: 3, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #4caf50' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續</div>
    </div>
  );
}

/* ── Keep out (禁止進入) ── Fence with X, person approaches and bounces back ── */
export function KeepOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Fence posts */}
      {[100, 118, 136].map(x => (
        <div key={x} style={{ position: 'absolute', top: 18, left: x, width: 6, height: 72, background: '#546e7a', borderRadius: 2 }} />
      ))}
      {/* Fence horizontal bars */}
      <div style={{ position: 'absolute', top: 30, left: 98, width: 46, height: 4, background: '#78909c', borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 55, left: 98, width: 46, height: 4, background: '#78909c', borderRadius: 1 }} />
      {/* Red X on fence */}
      <div style={{ position: 'absolute', top: 34, left: 112, fontSize: 16, fontWeight: 'bold', color: '#ef5350', lineHeight: 1 }}>X</div>
      {/* Person approaching then bouncing back */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [15, 65, 30, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.65, 1] }}
      >
        <div style={{ width: 14, height: 14, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Impact flash at fence */}
      <motion.div
        style={{ position: 'absolute', top: 38, left: 88, width: 8, height: 8, background: '#ef5350', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 1, 0, 0], scale: [0.5, 0.5, 1.5, 0.5, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.42, 0.55, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>禁止進入</div>
    </div>
  );
}
