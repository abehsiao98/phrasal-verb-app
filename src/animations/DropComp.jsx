import React from 'react';
import { motion } from 'framer-motion';

/* ── Drop out (退出) ── One red figure steps out from a line of gray figures ── */
export function DropOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Row of gray stick figures */}
      {[20, 50, 120, 150].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: 32 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
          <div style={{ width: 16, height: 4, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <div style={{ width: 2, height: 12, background: '#bdbdbd' }} />
            <div style={{ width: 2, height: 12, background: '#bdbdbd' }} />
          </div>
        </div>
      ))}
      {/* The figure that steps out (red) */}
      <motion.div
        animate={{ x: [0, 0, 0, 70], y: [0, -18, -18, -18], opacity: [1, 1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.45, 1] }}
        style={{ position: 'absolute', left: 82, top: 32 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 12, background: '#ef5350' }} />
          <div style={{ width: 2, height: 12, background: '#ef5350' }} />
        </div>
      </motion.div>
      {/* Arrow showing departure direction */}
      <motion.div
        style={{ position: 'absolute', top: 22, left: 100 }}
        animate={{ opacity: [0, 0, 0.6, 0.6], x: [0, 0, 30, 30] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 14, height: 2, background: '#ef5350', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #ef5350' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>退出</div>
    </div>
  );
}

/* ── Drop off (送達) ── Car drives up, drops package at door, drives away ── */
export function DropOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Door on right */}
      <div style={{ position: 'absolute', right: 18, top: 28, width: 35, height: 60, background: '#8d6e63', borderRadius: '3px 3px 0 0', border: '2px solid #6d4c41' }}>
        <div style={{ position: 'absolute', top: 25, right: 6, width: 5, height: 5, borderRadius: '50%', background: '#ffd600' }} />
      </div>
      {/* Car driving in and out */}
      <motion.div
        animate={{ x: [-60, 45, 45, 45, -60] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.45, 0.6, 1] }}
        style={{ position: 'absolute', left: 18, top: 56 }}
      >
        <div style={{ width: 38, height: 16, background: '#1565c0', borderRadius: '4px 4px 2px 2px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -7, left: 8, width: 20, height: 9, background: '#1976d2', borderRadius: '3px 3px 0 0' }} />
          <div style={{ position: 'absolute', top: -5, left: 11, width: 6, height: 5, background: '#bbdefb', borderRadius: 1 }} />
          <div style={{ position: 'absolute', top: -5, left: 19, width: 6, height: 5, background: '#bbdefb', borderRadius: 1 }} />
        </div>
        <div style={{ position: 'absolute', bottom: -4, left: 5, width: 7, height: 7, borderRadius: '50%', background: '#37474f' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 5, width: 7, height: 7, borderRadius: '50%', background: '#37474f' }} />
      </motion.div>
      {/* Package appears at door */}
      <motion.div
        animate={{ y: [-15, -15, 0, 0, 0], opacity: [0, 0, 1, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', left: 128, top: 75, width: 14, height: 14, background: '#ff9800', border: '1.5px solid #e65100', borderRadius: 2 }}
      >
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1.5, background: '#e65100', marginTop: -0.75 }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1.5, background: '#e65100', marginLeft: -0.75 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>送達</div>
    </div>
  );
}

/* ── Drop by (順訪) ── Person walks up to door and knocks ── */
export function DropByAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Door on right */}
      <div style={{ position: 'absolute', right: 22, top: 12, width: 45, height: 82, background: '#8d6e63', borderRadius: 3, border: '2px solid #6d4c41' }}>
        <div style={{ position: 'absolute', top: 38, left: 8, width: 6, height: 6, borderRadius: '50%', background: '#ffd600' }} />
      </div>
      {/* Stick figure approaching */}
      <motion.div
        animate={{ x: [0, 55, 55] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 1] }}
        style={{ position: 'absolute', left: 25, top: 30 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Knocking hand */}
      <motion.div
        animate={{ x: [0, 0, 5, 0, 5, 0, 0], opacity: [0, 0, 1, 1, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.45, 0.55, 0.65, 0.75, 1] }}
        style={{ position: 'absolute', right: 62, top: 38, width: 14, height: 10, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
      />
      {/* Knock impact lines */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 70, top: 30 + i * 6, width: 6 + i * 2, height: 1.5, background: '#90a4ae', borderRadius: 1 }}
          animate={{ opacity: [0, 0, 1, 0, 1, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.63, 0.7, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>順訪</div>
    </div>
  );
}
