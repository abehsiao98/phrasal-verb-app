import React from 'react';
import { motion } from 'framer-motion';

/* ── Run into (巧遇) ── Running figure crashing into wall ── */
export function RunIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Wall */}
      <div style={{ position: 'absolute', right: 35, top: 10, width: 12, height: 85, background: '#78909c', borderRadius: 2 }} />
      {/* Running figure */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [10, 120, 115, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.3, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Impact star */}
      <motion.div
        style={{ position: 'absolute', right: 42, top: 40, width: 12, height: 12, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.45, 0.55] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>巧遇</div>
    </div>
  );
}

/* ── Run down (耗盡) ── Battery bar draining ── */
export function RunDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Battery outline */}
      <div style={{ position: 'absolute', left: 55, top: 30, width: 80, height: 36, border: '3px solid #37474f', borderRadius: 5 }}>
        {/* Battery cap */}
        <div style={{ position: 'absolute', right: -9, top: 8, width: 8, height: 18, background: '#37474f', borderRadius: '0 3px 3px 0' }} />
        {/* Battery level draining */}
        <motion.div
          style={{ position: 'absolute', left: 3, top: 3, bottom: 3, borderRadius: 2 }}
          animate={{ width: [68, 5], background: ['#4caf50', '#ef5350'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Low battery warning */}
      <motion.div
        style={{ position: 'absolute', left: 75, top: 75, fontSize: 11, fontWeight: 'bold', color: '#ef5350' }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
      >
        LOW
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>耗盡</div>
    </div>
  );
}

/* ── Run up (累積) ── Bills stacking higher ── */
export function RunUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Bill stack growing */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 15, left: 75, width: 45, height: 12, background: '#c8e6c9', border: '1px solid #4caf50', borderRadius: 2 }}
          animate={{ y: [0, -i * 13], opacity: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
        >
          <div style={{ position: 'absolute', top: 3, left: 5, width: 8, height: 1, background: '#4caf50' }} />
        </motion.div>
      ))}
      {/* Up arrow */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 15 }}
        animate={{ y: [10, 0, 10], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '8px solid #ef5350', margin: '0 auto' }} />
        <div style={{ width: 3, height: 15, background: '#ef5350', margin: '0 auto' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>累積</div>
    </div>
  );
}

/* ── Run out (用完) ── Hourglass emptying ── */
export function RunOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Hourglass frame */}
      <div style={{ position: 'absolute', left: 80, top: 8, width: 40, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', left: 80, top: 90, width: 40, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      {/* Top glass */}
      <div style={{ position: 'absolute', left: 85, top: 14, width: 30, height: 35, background: '#fff', border: '2px solid #8d6e63', borderRadius: '0 0 50% 50%' }} />
      {/* Bottom glass */}
      <div style={{ position: 'absolute', left: 85, top: 55, width: 30, height: 35, background: '#fff', border: '2px solid #8d6e63', borderRadius: '50% 50% 0 0' }} />
      {/* Sand in top (draining) */}
      <motion.div
        style={{ position: 'absolute', left: 89, top: 22, width: 22, borderRadius: '0 0 50% 50%', background: '#ffd54f' }}
        animate={{ height: [25, 2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* Sand in bottom (filling) */}
      <motion.div
        style={{ position: 'absolute', left: 89, bottom: 18, width: 22, borderRadius: '50% 50% 0 0', background: '#ffd54f' }}
        animate={{ height: [2, 25] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      {/* Sand stream */}
      <motion.div
        style={{ position: 'absolute', left: 99, top: 47, width: 2, height: 10, background: '#ffd54f' }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.85, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>用完</div>
    </div>
  );
}

/* ── Run over (溢出) ── Cup overflowing with liquid ── */
export function RunOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Cup */}
      <div style={{ position: 'absolute', bottom: 15, left: 75, width: 40, height: 50, background: '#fff', border: '3px solid #78909c', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
        <div style={{ position: 'absolute', right: -12, top: 8, width: 10, height: 18, border: '2px solid #78909c', borderLeft: 'none', borderRadius: '0 6px 6px 0' }} />
      </div>
      {/* Liquid rising and overflowing */}
      <motion.div
        style={{ position: 'absolute', bottom: 18, left: 78, width: 34, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
        animate={{ height: [10, 45, 45, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
      />
      {/* Overflow drops */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: 72 + i * 46, width: 5, height: 8, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
          animate={{ y: [12, 12, 40], opacity: [0, 0, 0.7, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.6, 0.8] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>溢出</div>
    </div>
  );
}

/* ── Run through (排練) ── Figure sprinting through tunnel ── */
export function RunThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Tunnel */}
      <div style={{ position: 'absolute', top: 22, left: 40, width: 120, height: 10, background: '#455a64' }} />
      <div style={{ position: 'absolute', top: 72, left: 40, width: 120, height: 10, background: '#455a64' }} />
      <div style={{ position: 'absolute', top: 32, left: 40, width: 120, height: 40, background: '#263238' }} />
      {/* Figure running through */}
      <motion.div
        style={{ position: 'absolute', top: 38 }}
        animate={{ x: [5, 175] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#90a4ae', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <motion.div style={{ width: 1.5, height: 8, background: '#90a4ae' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.2, repeat: Infinity }} />
          <motion.div style={{ width: 1.5, height: 8, background: '#90a4ae' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.2, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>排練</div>
    </div>
  );
}

/* ── Run away (逃跑) ── Figure running to right, shrinking ── */
export function RunAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure running and shrinking */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 180], scale: [1, 0.4], opacity: [1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.25, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.25, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Dust puffs */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 18 + i * 4, width: 6, height: 6, background: '#bdbdbd', borderRadius: '50%' }}
          animate={{ x: [30, 15], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>逃跑</div>
    </div>
  );
}

/* ── Run across (偶然發現) ── Figure running, finding object on path ── */
export function RunAcrossAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Object on ground */}
      <div style={{ position: 'absolute', bottom: 15, left: 120, width: 16, height: 12, background: '#ff9800', borderRadius: 2, border: '1.5px solid #e65100' }} />
      {/* Figure running */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [10, 10, 100, 100] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Surprise */}
      <motion.div
        style={{ position: 'absolute', top: 15, left: 118, fontWeight: 'bold', fontSize: 14, color: '#ff9800' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.3, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.55, 0.8, 1] }}
      >
        !
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>偶然發現</div>
    </div>
  );
}

/* ── Run off (跑掉) ── Figure running off edge of platform ── */
export function RunOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Platform */}
      <div style={{ position: 'absolute', left: 0, top: 60, width: 120, height: 8, background: '#78909c', borderRadius: '0 4px 4px 0' }} />
      {/* Figure running off edge */}
      <motion.div
        style={{ position: 'absolute', top: 28 }}
        animate={{ x: [10, 120, 170], y: [0, 0, 50], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn', times: [0, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.3, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>跑掉</div>
    </div>
  );
}
