import React from 'react';
import { motion } from 'framer-motion';

/* ── Bring into (引進) ── Hand carrying object through doorway into room ── */
export function BringIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Room wall with door */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 90, height: 130, background: '#e3f2fd', borderLeft: '4px solid #78909c' }} />
      {/* Door frame */}
      <div style={{ position: 'absolute', top: 15, left: 116, width: 30, height: 75, background: '#fff', border: '2px solid #78909c', borderRadius: 2 }} />
      {/* Hand carrying box through door */}
      <motion.div
        style={{ position: 'absolute', top: 35 }}
        animate={{ x: [10, 10, 140] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      >
        <div style={{ width: 24, height: 20, background: '#8d6e63', borderRadius: 3, border: '1.5px solid #6d4c41' }} />
        <div style={{ width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4, marginTop: 2, marginLeft: 4 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>引進</div>
    </div>
  );
}

/* ── Bring down (降低) ── Hand pushing object downward ── */
export function BringDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Bar chart shrinking */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 20, left: 40 + i * 35, width: 22, background: '#42a5f5', borderRadius: '3px 3px 0 0' }}
          animate={{ height: [60 - i * 8, 60 - i * 8, 20] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.7], delay: i * 0.05 }}
        />
      ))}
      {/* Hand pressing down */}
      <motion.div
        style={{ position: 'absolute', left: 140, width: 24, height: 16, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ y: [15, 15, 65] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.7] }}
      />
      {/* Down arrow */}
      <motion.div
        style={{ position: 'absolute', right: 15, top: 20 }}
        animate={{ y: [0, 0, 25], opacity: [0, 0, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.7] }}
      >
        <div style={{ width: 3, height: 15, background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef5350', marginLeft: -4 }} />
      </motion.div>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>降低</div>
    </div>
  );
}

/* ── Bring up (提出/養育) ── Hand lifting speech bubble from below ── */
export function BringUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Hand lifting */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 24, height: 16, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }}
        animate={{ y: [80, 25] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* Speech bubble being raised */}
      <motion.div
        style={{ position: 'absolute', left: 72, width: 50, height: 30, background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 10 }}
        animate={{ y: [65, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      >
        <div style={{ margin: '6px 8px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: 28, height: 2, background: '#90caf9', borderRadius: 1 }} />
          <div style={{ width: 20, height: 2, background: '#90caf9', borderRadius: 1 }} />
        </div>
        {/* Bubble tail */}
        <div style={{ position: 'absolute', bottom: -8, left: 15, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #90caf9' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>提出、養育</div>
    </div>
  );
}

/* ── Bring out (推出/展現) ── Hand pulling object out of box ── */
export function BringOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Box */}
      <div style={{ position: 'absolute', left: 25, top: 25, width: 60, height: 55, border: '3px solid #8d6e63', borderTop: 'none', background: '#efebe9', borderRadius: '0 0 4px 4px' }} />
      {/* Object being pulled out */}
      <motion.div
        style={{ position: 'absolute', top: 30, width: 22, height: 22, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [45, 45, 145], y: [0, -15, -15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 1] }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', top: 22, width: 18, height: 14, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [55, 55, 155], y: [0, -15, -15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>推出</div>
    </div>
  );
}

/* ── Bring back (帶回) ── Hand carrying object back via arc ── */
export function BringBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Home marker on left */}
      <div style={{ position: 'absolute', left: 15, bottom: 15, width: 30, height: 25, background: '#8d6e63', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: -8, left: -2, width: 0, height: 0, borderLeft: '17px solid transparent', borderRight: '17px solid transparent', borderBottom: '10px solid #6d4c41' }} />
      </div>
      {/* Object traveling back */}
      <motion.div
        style={{ position: 'absolute', width: 16, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [155, 155, 30], y: [50, 50, 40] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      />
      {/* Return arrow */}
      <motion.div
        style={{ position: 'absolute', top: 20, left: 60 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '7px solid #4caf50' }} />
          <div style={{ width: 50, height: 2, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>帶回</div>
    </div>
  );
}

/* ── Bring about (引起) ── Hand pushing domino causing chain reaction ── */
export function BringAboutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Hand pushing first domino */}
      <motion.div
        style={{ position: 'absolute', left: 10, top: 30, width: 16, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [0, 18, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Dominoes falling in sequence */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 15, left: 35 + i * 28, width: 8, height: 35 - i * 2, background: '#546e7a', borderRadius: 1, transformOrigin: 'bottom center' }}
          animate={{ rotate: [0, 0, 25] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: i * 0.3, times: [0, 0.2, 0.5] }}
        />
      ))}
      {/* Result indicator */}
      <motion.div
        style={{ position: 'absolute', right: 10, top: 15, width: 16, height: 16, background: '#4caf50', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.2, 1], opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>引起</div>
    </div>
  );
}

/* ── Bring forward (提前) ── Hand sliding object forward on timeline ── */
export function BringForwardAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Timeline */}
      <div style={{ position: 'absolute', top: 55, left: 15, right: 15, height: 3, background: '#e0e0e0', borderRadius: 1 }} />
      {/* Timeline markers */}
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', top: 50, left: 25 + i * 38, width: 3, height: 13, background: '#bdbdbd', borderRadius: 1 }} />
      ))}
      {/* Object being pushed forward */}
      <motion.div
        style={{ position: 'absolute', top: 35, width: 22, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [140, 140, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      />
      {/* Hand pushing */}
      <motion.div
        style={{ position: 'absolute', top: 38, width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [160, 160, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      />
      {/* Forward arrow */}
      <motion.div
        style={{ position: 'absolute', top: 72, left: 60, display: 'flex', alignItems: 'center' }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '7px solid #4caf50' }} />
        <div style={{ width: 30, height: 2, background: '#4caf50' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>提前</div>
    </div>
  );
}

/* ── Bring together (集合) ── Two groups merging ── */
export function BringTogetherAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left group */}
      <motion.div
        style={{ position: 'absolute', bottom: 20 }}
        animate={{ x: [10, 65] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {[0, 1].map(i => (
          <div key={i} style={{ position: 'absolute', left: i * 15, bottom: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
            <div style={{ width: 14, height: 3, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <div style={{ width: 1.5, height: 8, background: '#1565c0' }} />
              <div style={{ width: 1.5, height: 8, background: '#1565c0' }} />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Right group */}
      <motion.div
        style={{ position: 'absolute', bottom: 20 }}
        animate={{ x: [165, 110] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {[0, 1].map(i => (
          <div key={i} style={{ position: 'absolute', left: i * 15, bottom: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
            <div style={{ width: 14, height: 3, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <div style={{ width: 1.5, height: 8, background: '#ef5350' }} />
              <div style={{ width: 1.5, height: 8, background: '#ef5350' }} />
            </div>
          </div>
        ))}
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>集合</div>
    </div>
  );
}

/* ── Bring in (引入) ── Hand pulling figure through doorway ── */
export function BringInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Room interior */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 110, height: 130, background: '#e8f5e9' }} />
      {/* Wall */}
      <div style={{ position: 'absolute', left: 96, top: 0, width: 6, height: 130, background: '#78909c' }} />
      {/* Door gap */}
      <div style={{ position: 'absolute', left: 96, top: 20, width: 6, height: 65, background: '#e8f5e9' }} />
      {/* Figure being pulled in */}
      <motion.div
        style={{ position: 'absolute', top: 30 }}
        animate={{ x: [20, 20, 130] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Beckoning hand inside */}
      <motion.div
        style={{ position: 'absolute', top: 38, left: 108, width: 14, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>引入</div>
    </div>
  );
}
