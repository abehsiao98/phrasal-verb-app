import React from 'react';
import { motion } from 'framer-motion';

/* ── Stand out (突出) ── Row of gray figures, one blue figure taller and glowing ── */
export function StandOutAnim() {
  const figures = [
    { x: 18, color: '#bdbdbd', h: 10, head: 10, body: 14 },
    { x: 50, color: '#bdbdbd', h: 10, head: 10, body: 14 },
    { x: 85, color: '#1565c0', h: 16, head: 14, body: 20, special: true },
    { x: 120, color: '#bdbdbd', h: 10, head: 10, body: 14 },
    { x: 152, color: '#bdbdbd', h: 10, head: 10, body: 14 },
  ];
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {figures.map((f, i) => {
        const Wrap = f.special ? motion.div : 'div';
        const animP = f.special ? { animate: { scale: [1, 1.08, 1], y: [0, -3, 0] }, transition: { duration: 2.5, repeat: Infinity } } : {};
        return (
          <Wrap key={i} style={{ position: 'absolute', left: f.x, bottom: 17, display: 'flex', flexDirection: 'column', alignItems: 'center' }} {...animP}>
            <div style={{ width: f.head, height: f.head, borderRadius: '50%', background: f.color }} />
            <div style={{ width: f.body, height: 5, background: f.color, borderRadius: 1, marginTop: 1 }} />
            <div style={{ display: 'flex', gap: f.special ? 6 : 3, marginTop: 1 }}>
              <div style={{ width: 2, height: f.h, background: f.color }} />
              <div style={{ width: 2, height: f.h, background: f.color }} />
            </div>
          </Wrap>
        );
      })}
      {/* Glow behind special figure */}
      <motion.div
        style={{ position: 'absolute', left: 78, bottom: 14, width: 30, height: 50, borderRadius: '50%', background: 'rgba(21,101,192,0.1)' }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>突出</div>
    </div>
  );
}

/* ── Stand up (站起來) ── Person rises from chair to standing ── */
export function StandUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Chair */}
      <div style={{ position: 'absolute', left: 68, top: 48, width: 6, height: 44, background: '#8d6e63', borderRadius: 1 }} />
      <div style={{ position: 'absolute', left: 68, top: 70, width: 42, height: 6, background: '#8d6e63', borderRadius: 1 }} />
      <div style={{ position: 'absolute', left: 70, top: 82, width: 4, height: 10, background: '#6d4c41' }} />
      <div style={{ position: 'absolute', left: 102, top: 76, width: 4, height: 16, background: '#6d4c41' }} />
      {/* Stick figure: seated → standing */}
      <motion.div
        style={{ position: 'absolute', left: 88, transformOrigin: 'bottom center' }}
        animate={{ y: [58, 58, 14, 14], rotate: [12, 12, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>站起來</div>
    </div>
  );
}

/* ── Stand for (代表) ── Badge "A" = symbol meaning ── */
export function StandForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left badge */}
      <div style={{ position: 'absolute', left: 25, top: 28, width: 42, height: 42, borderRadius: '50%', background: '#1565c0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>A</span>
      </div>
      {/* Equals sign */}
      <motion.div
        style={{ position: 'absolute', left: 80, top: 38, display: 'flex', flexDirection: 'column', gap: 6 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 22, height: 4, background: '#546e7a', borderRadius: 1 }} />
        <div style={{ width: 22, height: 4, background: '#546e7a', borderRadius: 1 }} />
      </motion.div>
      {/* Right symbol (meaning) */}
      <motion.div
        style={{ position: 'absolute', right: 25, top: 28 }}
        animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 42, height: 42, background: '#ff9800', borderRadius: 4, transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 16, height: 16, background: '#fff', borderRadius: '50%', transform: 'rotate(-45deg)' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>代表</div>
    </div>
  );
}

/* ── Stand by (待命) ── Person at attention next to a bell ── */
export function StandByAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure at attention */}
      <div style={{ position: 'absolute', left: 52, top: 18 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms at sides */}
        <div style={{ position: 'absolute', top: 16, left: -2, width: 2, height: 14, background: '#546e7a' }} />
        <div style={{ position: 'absolute', top: 16, right: -2, width: 2, height: 14, background: '#546e7a' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Bell */}
      <motion.div
        style={{ position: 'absolute', right: 38, top: 24, transformOrigin: 'top center' }}
        animate={{ rotate: [0, 0, 8, -8, 6, -6, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff9800', margin: '0 auto' }} />
        <div style={{ width: 28, height: 24, background: '#ff9800', borderRadius: '6px 6px 14px 14px', marginTop: -2 }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#e65100', margin: '-2px auto 0' }} />
      </motion.div>
      {/* Vibration lines */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 26, top: 32 + i * 6, width: 6 + i * 2, height: 2, background: '#ff9800', borderRadius: 1 }}
          animate={{ opacity: [0, 0, 0.8, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.35, 0.5, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>待命</div>
    </div>
  );
}
