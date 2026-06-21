import React from 'react';
import { motion } from 'framer-motion';

/* ── Go into (深入) ── Figure walking into room through door ── */
export function GoIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Room */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 100, height: 130, background: '#e3f2fd' }} />
      {/* Wall with door */}
      <div style={{ position: 'absolute', left: 105, top: 0, width: 8, height: 130, background: '#78909c' }} />
      <div style={{ position: 'absolute', left: 105, top: 20, width: 8, height: 70, background: '#e3f2fd' }} />
      {/* Layered documents inside */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', right: 15 + i * 6, top: 25 + i * 5, width: 30, height: 40, background: i === 2 ? '#bbdefb' : '#e3f2fd', border: '1px solid #90caf9', borderRadius: 2 }} />
      ))}
      {/* Figure walking in */}
      <motion.div
        style={{ position: 'absolute', top: 32 }}
        animate={{ x: [15, 15, 140] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>深入</div>
    </div>
  );
}

/* ── Go down (下降) ── Elevator cabin descending ── */
export function GoDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Shaft rails */}
      <div style={{ position: 'absolute', left: 70, top: 0, width: 3, height: 130, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', left: 130, top: 0, width: 3, height: 130, background: '#e0e0e0' }} />
      {/* Elevator cabin */}
      <motion.div
        style={{ position: 'absolute', left: 73, width: 57, height: 40, background: '#e8eaf6', border: '2px solid #78909c', borderRadius: 3 }}
        animate={{ y: [5, 75, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Figure inside */}
        <div style={{ position: 'absolute', bottom: 4, left: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
          <div style={{ width: 12, height: 3, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        </div>
      </motion.div>
      {/* Down arrow */}
      <motion.div
        style={{ position: 'absolute', left: 40, top: 40 }}
        animate={{ y: [-5, 10, -5], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ width: 3, height: 15, background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef5350', marginLeft: -4 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>下降</div>
    </div>
  );
}

/* ── Go up (上升) ── Figure climbing stairs ── */
export function GoUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Stairs */}
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 15 + i * 18, left: 20 + i * 30, width: 40, height: 18, background: '#90a4ae', borderRadius: '2px 2px 0 0' }} />
      ))}
      {/* Figure climbing */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [25, 55, 85, 115, 145], y: [70, 52, 34, 16, -2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <motion.div style={{ width: 2, height: 10, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.4, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 10, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.4, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>上升</div>
    </div>
  );
}

/* ── Go out (出去) ── Figure walking out through door ── */
export function GoOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Room interior */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: 100, height: 130, background: '#fff9c4' }} />
      {/* Wall */}
      <div style={{ position: 'absolute', left: 96, top: 0, width: 8, height: 130, background: '#78909c' }} />
      {/* Door */}
      <div style={{ position: 'absolute', left: 96, top: 20, width: 8, height: 70, background: '#fff' }} />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure walking out */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [50, 50, 170], opacity: [1, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Light bulb dimming inside */}
      <motion.div
        style={{ position: 'absolute', left: 40, top: 15, width: 14, height: 14, background: '#fff176', borderRadius: '50%' }}
        animate={{ opacity: [0.8, 0.8, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出去</div>
    </div>
  );
}

/* ── Go over (檢視) ── Figure walking over bridge ── */
export function GoOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Water */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 25, background: '#e3f2fd' }} />
      {/* Bridge arc */}
      <div style={{ position: 'absolute', bottom: 35, left: 30, width: 140, height: 30, background: '#8d6e63', borderRadius: '50% 50% 0 0' }} />
      <div style={{ position: 'absolute', bottom: 45, left: 40, width: 120, height: 20, background: '#fff', borderRadius: '50% 50% 0 0' }} />
      {/* Figure walking over */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [20, 60, 100, 150, 185], y: [60, 35, 30, 35, 60] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
      </motion.div>
      {/* Wave lines */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 18 + i * 4, left: 40 + i * 35, width: 20, height: 2, background: '#90caf9', borderRadius: 1 }}
          animate={{ x: [-3, 3, -3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>檢視</div>
    </div>
  );
}

/* ── Go through (經歷) ── Figure passing through tunnel ── */
export function GoThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Tunnel */}
      <div style={{ position: 'absolute', top: 20, left: 45, width: 120, height: 12, background: '#455a64', borderRadius: '4px 4px 0 0' }} />
      <div style={{ position: 'absolute', top: 72, left: 45, width: 120, height: 12, background: '#455a64', borderRadius: '0 0 4px 4px' }} />
      <div style={{ position: 'absolute', top: 32, left: 45, width: 120, height: 40, background: '#263238' }} />
      {/* Light at end */}
      <motion.div
        style={{ position: 'absolute', top: 32, left: 150, width: 15, height: 40, background: '#fff9c4', borderRadius: '0 4px 4px 0' }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Figure moving through */}
      <motion.div
        style={{ position: 'absolute', top: 38 }}
        animate={{ x: [10, 10, 165] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 1] }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#90a4ae', borderRadius: 1, margin: '0 auto' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>經歷</div>
    </div>
  );
}

/* ── Go on (繼續) ── Figure walking forward persistently ── */
export function GoOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Footprints on ground */}
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 16, left: 10 + i * 25, width: 6, height: 3, background: '#bdbdbd', borderRadius: '50%', opacity: 0.5 }} />
      ))}
      {/* Figure walking */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [10, 170, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.4, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.4, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Forward arrow sign */}
      <motion.div
        style={{ position: 'absolute', top: 15, right: 20 }}
        animate={{ x: [-3, 3, -3], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 15, height: 2, background: '#4caf50' }} />
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '7px solid #4caf50' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>繼續</div>
    </div>
  );
}

/* ── Go back (回去) ── Figure reversing direction ── */
export function GoBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Green start marker */}
      <div style={{ position: 'absolute', bottom: 15, left: 15, width: 4, height: 20, background: '#4caf50', borderRadius: 1 }} />
      {/* Red end marker */}
      <div style={{ position: 'absolute', bottom: 15, right: 15, width: 4, height: 20, background: '#ef5350', borderRadius: 1 }} />
      {/* Figure walking then reversing */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [25, 155, 155, 25], scaleX: [1, 1, -1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.45, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回去</div>
    </div>
  );
}

/* ── Go off (響起/爆炸) ── Alarm bell shaking with shock waves ── */
export function GoOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Alarm bell */}
      <motion.div
        style={{ position: 'absolute', left: 80, top: 20 }}
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
        <div style={{ width: 36, height: 36, background: '#ffd600', borderRadius: '50%', border: '3px solid #f9a825', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -6, left: 13, width: 10, height: 8, background: '#f9a825', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -4, left: 14, width: 8, height: 4, background: '#f57f17', borderRadius: '0 0 4px 4px' }} />
        </div>
      </motion.div>
      {/* Shock waves */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 25, left: 85, width: 26, height: 26, border: '2px solid #ef5350', borderRadius: '50%' }}
          animate={{ scale: [1, 2 + i * 0.5], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      {/* Startled figure */}
      <motion.div
        style={{ position: 'absolute', right: 25, bottom: 25 }}
        animate={{ x: [-2, 2, -2], y: [-2, 2, -2] }}
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>響起</div>
    </div>
  );
}

/* ── Go ahead (繼續/請便) ── Figure stepping forward past green light ── */
export function GoAheadAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Traffic light */}
      <div style={{ position: 'absolute', left: 90, top: 8, width: 18, height: 42, background: '#37474f', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: 4, left: 4, width: 10, height: 10, background: '#424242', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 16, left: 4, width: 10, height: 10, background: '#424242', borderRadius: '50%' }} />
        <motion.div
          style={{ position: 'absolute', top: 28, left: 4, width: 10, height: 10, borderRadius: '50%' }}
          animate={{ background: ['#2e7d32', '#4caf50', '#2e7d32'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div style={{ position: 'absolute', left: 95, top: 50, width: 4, height: 25, background: '#37474f' }} />
      {/* Figure walking confidently */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 170] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.4, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.4, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>請便</div>
    </div>
  );
}

/* ── Go for (追求) ── Figure lunging toward target ── */
export function GoForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Target */}
      <div style={{ position: 'absolute', right: 15, top: 25, width: 40, height: 40, borderRadius: '50%', border: '3px solid #ef5350' }}>
        <div style={{ position: 'absolute', top: 8, left: 8, width: 20, height: 20, borderRadius: '50%', border: '2px solid #ef5350' }}>
          <div style={{ position: 'absolute', top: 5, left: 5, width: 6, height: 6, borderRadius: '50%', background: '#ef5350' }} />
        </div>
      </div>
      {/* Figure lunging */}
      <motion.div
        style={{ position: 'absolute', bottom: 20 }}
        animate={{ x: [15, 15, 120], y: [0, 0, -15] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arm reaching forward */}
        <div style={{ position: 'absolute', top: 14, right: -10, width: 12, height: 2, background: '#546e7a', borderRadius: 1 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>追求</div>
    </div>
  );
}

/* ── Go with (搭配) ── Two figures walking side by side at same pace ── */
export function GoWithAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure A */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 145, 20] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Figure B (teal, matching pace) */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [45, 170, 45] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#26a69a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#26a69a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#26a69a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#26a69a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Connection line */}
      <motion.div
        style={{ position: 'absolute', top: 20, left: '50%', marginLeft: -15, width: 30, height: 3, background: '#4caf50', borderRadius: 1 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>搭配</div>
    </div>
  );
}
