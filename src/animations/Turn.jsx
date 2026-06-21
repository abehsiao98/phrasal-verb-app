import React from 'react';
import { motion } from 'framer-motion';

/* ── Turn into (轉變) ── Shape morphing from one form to another ── */
export function TurnIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Original shape (square, fading out) */}
      <motion.div
        style={{ position: 'absolute', left: 30, top: 25, width: 40, height: 40, background: '#4caf50', borderRadius: 4 }}
        animate={{ opacity: [1, 1, 0], scale: [1, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6] }}
      />
      {/* Arrow */}
      <motion.div
        style={{ position: 'absolute', top: 38, left: 85, display: 'flex', alignItems: 'center' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0.2, 0.5, 0.8] }}
      >
        <div style={{ width: 20, height: 3, background: '#546e7a', borderRadius: 1 }} />
        <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #546e7a' }} />
      </motion.div>
      {/* Transformed shape (circle, appearing) */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 22, width: 45, height: 45, background: '#7b1fa2', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 1], scale: [0.5, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.8] }}
      />
      {/* Sparkle at transformation */}
      <motion.div
        style={{ position: 'absolute', top: 35, left: 105, width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>轉變</div>
    </div>
  );
}

/* ── Turn down (拒絕/調低) ── Dial rotating to lower setting ── */
export function TurnDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Dial */}
      <motion.div
        style={{ position: 'absolute', left: 70, top: 15, width: 55, height: 55, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #9e9e9e, #424242)', border: '3px solid #212121' }}
        animate={{ rotate: [90, 90, -45] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        {/* Indicator line */}
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 18, background: '#fff', borderRadius: 2 }} />
      </motion.div>
      {/* Volume bars shrinking */}
      <div style={{ position: 'absolute', bottom: 20, left: 35, display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            style={{ width: 6, background: i < 2 ? '#4caf50' : '#bdbdbd', borderRadius: 1 }}
            animate={{ height: [8 + i * 6, 8 + i * 6, 5] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 1] }}
          />
        ))}
      </div>
      {/* MIN label */}
      <div style={{ position: 'absolute', bottom: 8, left: 35, fontSize: 8, color: '#888' }}>MIN</div>
      <div style={{ position: 'absolute', bottom: 8, right: 35, fontSize: 8, color: '#888' }}>MAX</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>拒絕、調低</div>
    </div>
  );
}

/* ── Turn up (出現/調高) ── Dial rotating to higher setting ── */
export function TurnUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Dial */}
      <motion.div
        style={{ position: 'absolute', left: 70, top: 15, width: 55, height: 55, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #9e9e9e, #424242)', border: '3px solid #212121' }}
        animate={{ rotate: [-45, -45, 135] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 18, background: '#fff', borderRadius: 2 }} />
      </motion.div>
      {/* Volume bars growing */}
      <div style={{ position: 'absolute', bottom: 20, left: 35, display: 'flex', gap: 4, alignItems: 'flex-end' }}>
        {[0, 1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            style={{ width: 6, borderRadius: 1 }}
            animate={{ height: [5, 5, 8 + i * 6], background: ['#bdbdbd', '#bdbdbd', i < 4 ? '#4caf50' : '#ef5350'] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 1] }}
          />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 35, fontSize: 8, color: '#888' }}>MIN</div>
      <div style={{ position: 'absolute', bottom: 8, right: 35, fontSize: 8, color: '#888' }}>MAX</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出現、調高</div>
    </div>
  );
}

/* ── Turn out (結果是) ── Machine producing result ── */
export function TurnOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Machine box */}
      <div style={{ position: 'absolute', left: 25, top: 20, width: 60, height: 55, background: '#607d8b', borderRadius: 4 }}>
        {/* Gears */}
        <motion.div
          style={{ position: 'absolute', top: 12, left: 12, width: 16, height: 16, border: '3px solid #90a4ae', borderRadius: '50%' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{ position: 'absolute', top: 28, left: 30, width: 12, height: 12, border: '2px solid #90a4ae', borderRadius: '50%' }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Arrow out */}
      <motion.div
        style={{ position: 'absolute', top: 42, left: 90, width: 30, height: 3, background: '#546e7a', borderRadius: 1 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Result container */}
      <div style={{ position: 'absolute', right: 20, top: 20, width: 45, height: 55, background: '#fff', border: '2px solid #90a4ae', borderRadius: 4 }} />
      {/* Checkmark appearing */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 32, fontSize: 22, fontWeight: 'bold', color: '#4caf50' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1] }}
      >
        ✓
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>結果是</div>
    </div>
  );
}

/* ── Turn over (翻轉) ── Card flipping ── */
export function TurnOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Card flipping */}
      <motion.div
        style={{ position: 'absolute', left: 70, top: 15, width: 60, height: 70, borderRadius: 6, transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [0, 0, 180, 180, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1] }}
      >
        {/* Front face */}
        <div style={{ position: 'absolute', inset: 0, background: '#1565c0', borderRadius: 6, backfaceVisibility: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 20, height: 20, background: '#fff', borderRadius: 3, opacity: 0.6 }} />
        </div>
        {/* Back face */}
        <div style={{ position: 'absolute', inset: 0, background: '#ef5350', borderRadius: 6, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>?</div>
        </div>
      </motion.div>
      {/* Curved arrow */}
      <motion.div
        style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -10, width: 20, height: 10, border: '2px solid #546e7a', borderBottom: 'none', borderRadius: '10px 10px 0 0' }}
        animate={{ opacity: [0, 0, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.4, 0.6] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>翻轉</div>
    </div>
  );
}

/* ── Turn off (關閉) ── Switch sliding to OFF, light dimming ── */
export function TurnOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Light bulb dimming */}
      <motion.div
        style={{ position: 'absolute', left: 85, top: 8, width: 30, height: 35, background: '#fff9c4', borderRadius: '50% 50% 30% 30%', border: '2px solid #f9a825' }}
        animate={{ background: ['#fff9c4', '#fff9c4', '#e0e0e0'], borderColor: ['#f9a825', '#f9a825', '#bdbdbd'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      />
      {/* Glow fading */}
      <motion.div
        style={{ position: 'absolute', left: 78, top: 2, width: 44, height: 48, background: '#fff176', borderRadius: '50%', filter: 'blur(8px)' }}
        animate={{ opacity: [0.4, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      />
      {/* Switch */}
      <div style={{ position: 'absolute', bottom: 22, left: 70, width: 60, height: 22, background: '#e0e0e0', borderRadius: 11, border: '2px solid #bdbdbd' }}>
        {/* Toggle */}
        <motion.div
          style={{ position: 'absolute', top: 1, width: 18, height: 18, borderRadius: '50%', border: '1px solid #9e9e9e' }}
          animate={{ left: [38, 38, 2], background: ['#4caf50', '#4caf50', '#bdbdbd'] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
        />
      </div>
      {/* OFF label */}
      <motion.div
        style={{ position: 'absolute', bottom: 8, left: 70, fontSize: 9, fontWeight: 'bold' }}
        animate={{ color: ['#bdbdbd', '#bdbdbd', '#ef5350'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      >
        OFF
      </motion.div>
      <div style={{ position: 'absolute', bottom: 8, right: 70, fontSize: 9, color: '#bdbdbd' }}>ON</div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>關閉</div>
    </div>
  );
}

/* ── Turn on (開啟) ── Switch sliding to ON, light brightening ── */
export function TurnOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Light bulb brightening */}
      <motion.div
        style={{ position: 'absolute', left: 85, top: 8, width: 30, height: 35, borderRadius: '50% 50% 30% 30%', border: '2px solid #bdbdbd' }}
        animate={{ background: ['#e0e0e0', '#e0e0e0', '#fff9c4'], borderColor: ['#bdbdbd', '#bdbdbd', '#f9a825'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      />
      {/* Glow appearing */}
      <motion.div
        style={{ position: 'absolute', left: 78, top: 2, width: 44, height: 48, background: '#fff176', borderRadius: '50%', filter: 'blur(8px)' }}
        animate={{ opacity: [0, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      />
      {/* Rays */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 97, top: 22, width: 2, height: 10, background: '#ffd600', borderRadius: 1, transformOrigin: '1px 20px', transform: `rotate(${deg}deg)` }}
          animate={{ opacity: [0, 0, 0.6], scaleY: [0, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.8] }}
        />
      ))}
      {/* Switch */}
      <div style={{ position: 'absolute', bottom: 22, left: 70, width: 60, height: 22, background: '#e0e0e0', borderRadius: 11, border: '2px solid #bdbdbd' }}>
        <motion.div
          style={{ position: 'absolute', top: 1, width: 18, height: 18, borderRadius: '50%', border: '1px solid #9e9e9e' }}
          animate={{ left: [2, 2, 38], background: ['#bdbdbd', '#bdbdbd', '#4caf50'] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 70, fontSize: 9, color: '#bdbdbd' }}>OFF</div>
      <motion.div
        style={{ position: 'absolute', bottom: 8, right: 70, fontSize: 9, fontWeight: 'bold' }}
        animate={{ color: ['#bdbdbd', '#bdbdbd', '#4caf50'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7] }}
      >
        ON
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>開啟</div>
    </div>
  );
}

/* ── Turn around (轉身/扭轉) ── Figure spinning 360 degrees ── */
export function TurnAroundAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Red declining arrow → green rising arrow */}
      <motion.div
        style={{ position: 'absolute', left: 20, top: 15, width: 25, height: 3, borderRadius: 1 }}
        animate={{ background: ['#ef5350', '#ef5350', '#4caf50'], rotate: [30, 30, -30] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.8] }}
      />
      {/* Figure doing 360 spin */}
      <motion.div
        style={{ position: 'absolute', left: 85, bottom: 17 }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Circular arrow */}
      <div style={{ position: 'absolute', left: 75, top: 10, width: 40, height: 20, border: '2px solid #546e7a', borderBottom: 'none', borderRadius: '20px 20px 0 0' }}>
        <div style={{ position: 'absolute', right: -3, bottom: -3, width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '6px solid #546e7a' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>扭轉</div>
    </div>
  );
}

/* ── Turn back (折返) ── Figure walking then turning back at barrier ── */
export function TurnBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Barrier on right */}
      <div style={{ position: 'absolute', right: 20, bottom: 15, width: 8, height: 55, background: '#ef5350', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: 10, left: 1, fontSize: 8, fontWeight: 'bold', color: '#fff' }}>X</div>
      </div>
      {/* Figure walking right then turning back */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [30, 130, 130, 30], scaleX: [1, 1, -1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.45, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Return arrow */}
      <motion.div
        style={{ position: 'absolute', top: 15, left: 50, width: 60, height: 15, border: '2px solid #546e7a', borderBottom: 'none', borderRadius: '30px 30px 0 0' }}
        animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.5, 0.85, 1] }}
      >
        <div style={{ position: 'absolute', left: -3, bottom: -3, width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '6px solid #546e7a' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>折返</div>
    </div>
  );
}
