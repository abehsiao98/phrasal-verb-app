import React from 'react';
import { motion } from 'framer-motion';

/* ── Put on (穿上) ── Hand placing hat onto figure's head ── */
export function PutOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure */}
      <div style={{ position: 'absolute', left: 90, bottom: 17 }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 22, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 20, background: '#546e7a', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Hat descending onto head */}
      <motion.div
        style={{ position: 'absolute', left: 82, width: 32, height: 10, background: '#5d4037', borderRadius: '4px 4px 0 0' }}
        animate={{ y: [5, 42, 42, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
      >
        <div style={{ position: 'absolute', top: -8, left: 6, width: 20, height: 10, background: '#5d4037', borderRadius: '4px 4px 0 0' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>穿上</div>
    </div>
  );
}

/* ── Put off (推遲) ── Hand pushing calendar to the right ── */
export function PutOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Calendar being pushed */}
      <motion.div
        style={{ position: 'absolute', top: 20, width: 45, height: 55, background: '#fff', border: '2px solid #ef5350', borderRadius: 4 }}
        animate={{ x: [60, 60, 150] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: '100%', height: 12, background: '#ef5350', borderRadius: '2px 2px 0 0' }} />
        <div style={{ position: 'absolute', top: 20, left: 12, fontSize: 18, fontWeight: 'bold', color: '#37474f' }}>31</div>
      </motion.div>
      {/* Hand pushing */}
      <motion.div
        style={{ position: 'absolute', top: 35, width: 20, height: 14, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 5 }}
        animate={{ x: [40, 40, 130] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推遲</div>
    </div>
  );
}

/* ── Put up (張貼) ── Hand raising poster onto wall ── */
export function PutUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Wall */}
      <div style={{ position: 'absolute', left: 60, top: 0, width: 90, height: 100, background: '#eceff1', borderRadius: 3 }} />
      {/* Poster being raised */}
      <motion.div
        style={{ position: 'absolute', left: 75, width: 55, height: 40, background: '#fff9c4', border: '2px solid #f9a825', borderRadius: 3 }}
        animate={{ y: [70, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', top: 8 + i * 10, left: 8, width: 35 - i * 5, height: 2, background: '#f9a825', borderRadius: 1, opacity: 0.5 }} />
        ))}
      </motion.div>
      {/* Pin */}
      <motion.div
        style={{ position: 'absolute', left: 100, width: 6, height: 6, background: '#ef5350', borderRadius: '50%' }}
        animate={{ y: [65, 10], opacity: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 20, height: 14, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 5 }}
        animate={{ y: [75, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>張貼</div>
    </div>
  );
}

/* ── Put down (放下) ── Hand pressing object down onto table ── */
export function PutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Table */}
      <div style={{ position: 'absolute', bottom: 15, left: 50, width: 100, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 15, left: 55, width: 3, height: 25, background: '#8d6e63' }} />
      <div style={{ position: 'absolute', bottom: 15, left: 142, width: 3, height: 25, background: '#8d6e63' }} />
      {/* Object being placed */}
      <motion.div
        style={{ position: 'absolute', left: 88, width: 22, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ y: [10, 52, 52, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.7, 1] }}
      />
      {/* Hand pressing */}
      <motion.div
        style={{ position: 'absolute', left: 82, width: 20, height: 14, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 5 }}
        animate={{ y: [5, 45, 45, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.7, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放下</div>
    </div>
  );
}

/* ── Put out (熄滅) ── Hand pressing down on flame, extinguishing ── */
export function PutOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Candle */}
      <div style={{ position: 'absolute', bottom: 15, left: 90, width: 14, height: 40, background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: '2px 2px 0 0' }} />
      {/* Flame dying */}
      <motion.div
        style={{ position: 'absolute', bottom: 55, left: 86, width: 16, height: 20, background: 'radial-gradient(circle, #ffeb3b, #ff9800)', borderRadius: '50%', transformOrigin: 'bottom center' }}
        animate={{ scaleY: [1, 1, 0], opacity: [1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7] }}
      />
      {/* Hand pressing down */}
      <motion.div
        style={{ position: 'absolute', left: 78, width: 30, height: 14, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 5 }}
        animate={{ y: [10, 10, 44, 10] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
      />
      {/* Smoke */}
      <motion.div
        style={{ position: 'absolute', left: 92, width: 5, height: 5, background: '#bdbdbd', borderRadius: '50%' }}
        animate={{ y: [52, 52, 20, 5], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.65, 0.85, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>熄滅</div>
    </div>
  );
}

/* ── Put away (收好) ── Hand sliding object into drawer ── */
export function PutAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Cabinet */}
      <div style={{ position: 'absolute', right: 15, top: 15, width: 70, height: 80, background: '#8d6e63', borderRadius: 4 }}>
        {/* Drawer opening */}
        <div style={{ position: 'absolute', top: 25, left: 5, right: 5, height: 25, background: '#6d4c41', borderRadius: 2 }}>
          <div style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -6, width: 12, height: 3, background: '#D7CCC8', borderRadius: 1 }} />
        </div>
      </div>
      {/* Object sliding into drawer */}
      <motion.div
        style={{ position: 'absolute', top: 42, width: 18, height: 14, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [30, 30, 120] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Hand pushing */}
      <motion.div
        style={{ position: 'absolute', top: 38, width: 16, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [15, 15, 105] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>收好</div>
    </div>
  );
}

/* ── Put in (投入) ── Hand inserting coin into slot ── */
export function PutInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Machine with slot */}
      <div style={{ position: 'absolute', right: 30, top: 15, width: 50, height: 75, background: '#78909c', borderRadius: 4 }}>
        {/* Slot */}
        <div style={{ position: 'absolute', top: 15, left: 15, width: 20, height: 4, background: '#37474f', borderRadius: 1 }} />
        {/* Display */}
        <div style={{ position: 'absolute', top: 28, left: 8, right: 8, height: 20, background: '#b0bec5', borderRadius: 2 }} />
      </div>
      {/* Coin being inserted */}
      <motion.div
        style={{ position: 'absolute', width: 14, height: 14, background: '#ffd600', borderRadius: '50%', border: '1.5px solid #f9a825' }}
        animate={{ x: [60, 60, 118], y: [20, 20, 28] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', width: 16, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [50, 50, 108], y: [10, 10, 18] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>投入</div>
    </div>
  );
}

/* ── Put through (接通) ── Phone connecting via signal dots ── */
export function PutThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Phone on left */}
      <div style={{ position: 'absolute', left: 25, top: 30, width: 22, height: 38, background: '#37474f', borderRadius: 4 }}>
        <div style={{ position: 'absolute', top: 4, left: 3, right: 3, bottom: 8, background: '#4fc3f7', borderRadius: 2 }} />
      </div>
      {/* Signal dots connecting */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 45, left: 55 + i * 25, width: 6, height: 6, background: '#4caf50', borderRadius: '50%' }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      {/* Stick figure on right */}
      <div style={{ position: 'absolute', right: 25, top: 25 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>接通</div>
    </div>
  );
}

/* ── Put together (組合) ── Puzzle pieces merging together ── */
export function PutTogetherAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left puzzle piece */}
      <motion.div
        style={{ position: 'absolute', top: 30, width: 40, height: 40, background: '#42a5f5', borderRadius: 4 }}
        animate={{ x: [20, 20, 72] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        {/* Puzzle tab */}
        <div style={{ position: 'absolute', right: -8, top: 13, width: 10, height: 14, background: '#42a5f5', borderRadius: '0 6px 6px 0' }} />
      </motion.div>
      {/* Right puzzle piece */}
      <motion.div
        style={{ position: 'absolute', top: 30, width: 40, height: 40, background: '#ef5350', borderRadius: 4 }}
        animate={{ x: [155, 155, 107] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        {/* Puzzle socket */}
        <div style={{ position: 'absolute', left: 2, top: 13, width: 10, height: 14, background: '#fff', borderRadius: '0 6px 6px 0' }} />
      </motion.div>
      {/* Connection glow */}
      <motion.div
        style={{ position: 'absolute', top: 40, left: 100, width: 10, height: 20, background: '#4caf50', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 0.6, 0], scale: [0.5, 0.5, 1.5, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.7, 0.85, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>組合</div>
    </div>
  );
}
