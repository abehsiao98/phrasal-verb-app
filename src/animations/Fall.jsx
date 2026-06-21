import React from 'react';
import { motion } from 'framer-motion';

/* ── Fall apart (崩潰/瓦解) ── Building crumbles into scattered fragments ── */
export function FallApartAnim() {
  const fragments = [
    { w: 16, h: 12, color: '#78909c', to: { x: -35, y: 25, rotate: -30 } },
    { w: 14, h: 16, color: '#90a4ae', to: { x: 30, y: 20, rotate: 35 } },
    { w: 18, h: 10, color: '#607d8b', to: { x: -15, y: 35, rotate: 15 } },
    { w: 12, h: 14, color: '#78909c', to: { x: 22, y: 38, rotate: -20 } },
    { w: 10, h: 10, color: '#90a4ae', to: { x: 3, y: 42, rotate: 45 } },
  ];
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Building that crumbles */}
      <motion.div
        style={{ position: 'absolute', left: 75, top: 12, width: 55, height: 65, background: '#607d8b', borderRadius: 2 }}
        animate={{ opacity: [1, 1, 0], scale: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.65] }}
      >
        {/* Windows */}
        <div style={{ position: 'absolute', left: 6, top: 8, width: 10, height: 8, background: '#b0bec5', borderRadius: 1 }} />
        <div style={{ position: 'absolute', right: 6, top: 8, width: 10, height: 8, background: '#b0bec5', borderRadius: 1 }} />
        <div style={{ position: 'absolute', left: 6, top: 24, width: 10, height: 8, background: '#b0bec5', borderRadius: 1 }} />
        <div style={{ position: 'absolute', right: 6, top: 24, width: 10, height: 8, background: '#b0bec5', borderRadius: 1 }} />
        {/* Door */}
        <div style={{ position: 'absolute', left: 18, bottom: 0, width: 16, height: 18, background: '#455a64', borderRadius: '2px 2px 0 0' }} />
      </motion.div>
      {/* Scattered fragments */}
      {fragments.map((f, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 95, top: 40, width: f.w, height: f.h, background: f.color, borderRadius: 2 }}
          animate={{
            x: [0, 0, f.to.x],
            y: [0, 0, f.to.y],
            rotate: [0, 0, f.to.rotate],
            opacity: [0, 0, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 1] }}
        />
      ))}
      {/* Dust cloud */}
      <motion.div
        style={{ position: 'absolute', left: 80, top: 60, width: 50, height: 20, background: '#cfd8dc', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 0.4, 0], scale: [0.5, 0.5, 1.5, 2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>崩潰、瓦解</div>
    </div>
  );
}

/* ── Fall behind (落後) ── Two runners, one gradually falling behind ── */
export function FallBehindAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Fast runner (blue, pulls ahead) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [80, 160, 80] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.4, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.4, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Slow runner (red, falls behind) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [70, 100, 70] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#ef5350' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.6, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#ef5350' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.6, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Motion lines behind slow runner */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 28 + i * 5, width: 10 - i * 2, height: 2, background: '#ef9a9a', borderRadius: 1 }}
          animate={{ x: [58, 48], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>落後</div>
    </div>
  );
}

/* ── Fall for (愛上/上當) ── Heart dropping into a pit/trap ── */
export function FallForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground surface on both sides */}
      <div style={{ position: 'absolute', left: 10, top: 72, width: 65, height: 3, background: '#8d6e63', borderRadius: 1 }} />
      <div style={{ position: 'absolute', right: 10, top: 72, width: 65, height: 3, background: '#8d6e63', borderRadius: 1 }} />
      {/* Pit/trap in middle */}
      <div style={{ position: 'absolute', left: 75, top: 72, width: 50, height: 22, background: '#263238', borderRadius: '0 0 8px 8px' }} />
      {/* Pit side walls */}
      <div style={{ position: 'absolute', left: 73, top: 72, width: 4, height: 22, background: '#455a64', borderRadius: 1 }} />
      <div style={{ position: 'absolute', right: 73, top: 72, width: 4, height: 22, background: '#455a64', borderRadius: 1 }} />
      {/* Heart falling into pit */}
      <motion.div
        style={{ position: 'absolute', left: 88 }}
        animate={{ y: [8, 10, 60], scale: [1, 1.1, 0.7], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 1], ease: 'easeIn' }}
      >
        <div style={{ position: 'relative', width: 22, height: 20 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 12, height: 12, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 10, top: 0, width: 12, height: 12, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 3, top: 5, width: 16, height: 16, background: '#ef5350', transform: 'rotate(45deg)' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>愛上、上當</div>
    </div>
  );
}

/* ── Fall through (計畫泡湯) ── Document sliding through a hole in the floor ── */
export function FallThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Floor with hole */}
      <div style={{ position: 'absolute', left: 10, top: 60, width: 70, height: 5, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', right: 10, top: 60, width: 70, height: 5, background: '#8d6e63', borderRadius: 2 }} />
      {/* Dark hole below gap */}
      <div style={{ position: 'absolute', left: 80, top: 60, width: 50, height: 30, background: '#263238', borderRadius: '0 0 6px 6px' }} />
      {/* Document falling through hole */}
      <motion.div
        style={{ position: 'absolute', left: 87, width: 36, height: 44, background: '#fff', border: '2px solid #90a4ae', borderRadius: 3 }}
        animate={{ y: [5, 5, 45, 100], rotate: [0, 0, 8, 15], opacity: [1, 1, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.55, 1] }}
      >
        {/* Text lines on document */}
        <div style={{ margin: '6px 4px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ width: 24, height: 2, background: '#b0bec5', borderRadius: 1 }} />
          <div style={{ width: 20, height: 2, background: '#b0bec5', borderRadius: 1 }} />
          <div style={{ width: 26, height: 2, background: '#b0bec5', borderRadius: 1 }} />
          <div style={{ width: 18, height: 2, background: '#b0bec5', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* Red X appears after falling */}
      <motion.div
        style={{ position: 'absolute', left: 30, top: 22, fontSize: 20, fontWeight: 'bold', color: '#ef5350' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.65, 0.8, 1] }}
      >
        X
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>計畫泡湯</div>
    </div>
  );
}
