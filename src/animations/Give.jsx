import React from 'react';
import { motion } from 'framer-motion';

/* ── Give up (放棄) ── Person drops tool and walks away with slumped posture ── */
export function GiveUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure walking away with head down */}
      <motion.div
        style={{ position: 'absolute', bottom: 15 }}
        animate={{ x: [80, 80, 160], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 1] }}
      >
        {/* Head drooping */}
        <motion.div
          style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }}
          animate={{ y: [0, 0, 4] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 1] }}
        />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Arms hanging down */}
        <div style={{ position: 'absolute', top: 16, left: 0, width: 2, height: 14, background: '#546e7a', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 16, right: 0, width: 2, height: 14, background: '#546e7a', borderRadius: 1 }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Tool/object dropped on ground */}
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 82 }}
        animate={{ y: [-20, 0, 0], rotate: [0, 25, 25], opacity: [1, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 1] }}
      >
        {/* Wrench/tool shape */}
        <div style={{ width: 6, height: 22, background: '#78909c', borderRadius: 2 }} />
        <div style={{ width: 14, height: 8, background: '#90a4ae', borderRadius: 3, marginLeft: -4, marginTop: -2 }} />
      </motion.div>
      {/* White flag */}
      <div style={{ position: 'absolute', left: 30, bottom: 15, width: 2, height: 55, background: '#bdbdbd' }} />
      <motion.div
        style={{ position: 'absolute', left: 32, top: 20, width: 28, height: 18, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 2 }}
        animate={{ skewX: [0, 3, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放棄</div>
    </div>
  );
}

/* ── Give in (屈服) ── Person pushing wall, gradually slumps and gives way ── */
export function GiveInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Thick wall on right */}
      <div style={{ position: 'absolute', right: 30, top: 10, width: 16, height: 90, background: '#78909c', borderRadius: 2 }} />
      {/* Stick figure pushing then collapsing */}
      <motion.div
        animate={{
          rotate: [10, 10, 35],
          y: [0, 0, 20],
          x: [0, 5, -5]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 1] }}
        style={{ position: 'absolute', left: 65, top: 25, transformOrigin: 'bottom center' }}
      >
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 5, height: 22, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        {/* Arms pushing forward */}
        <motion.div
          style={{ position: 'absolute', top: 16, right: -16, width: 18, height: 2, background: '#546e7a', borderRadius: 1 }}
          animate={{ rotate: [0, 0, 30] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
        />
        <motion.div
          style={{ position: 'absolute', top: 20, right: -16, width: 18, height: 2, background: '#546e7a', borderRadius: 1 }}
          animate={{ rotate: [0, 0, 25] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
        />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Pressure arrows from wall */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 48, top: 25 + i * 20, display: 'flex', alignItems: 'center' }}
          animate={{ x: [10, 0, 10], opacity: [0, 0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        >
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '6px solid #ef5350' }} />
          <div style={{ width: 12, height: 2, background: '#ef5350', borderRadius: 1 }} />
        </motion.div>
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>屈服</div>
    </div>
  );
}

/* ── Give out (分發) ── Hand distributing papers to waiting people ── */
export function GiveOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Hand on left giving out */}
      <div style={{ position: 'absolute', left: 10, top: 40, width: 24, height: 20, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: 6 }} />
      {/* Paper 1 → person 1 (top) */}
      <motion.div
        animate={{ x: [0, 80], y: [0, -18], opacity: [1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', left: 36, top: 42, width: 14, height: 18, background: '#e3f2fd', border: '1.5px solid #1565c0', borderRadius: 1 }}
      >
        <div style={{ margin: '3px 2px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 8, height: 1, background: '#90caf9' }} />
          <div style={{ width: 6, height: 1, background: '#90caf9' }} />
        </div>
      </motion.div>
      {/* Paper 2 → person 2 (middle) */}
      <motion.div
        animate={{ x: [0, 85], y: [0, 2], opacity: [1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
        style={{ position: 'absolute', left: 36, top: 42, width: 14, height: 18, background: '#e3f2fd', border: '1.5px solid #1565c0', borderRadius: 1 }}
      >
        <div style={{ margin: '3px 2px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 8, height: 1, background: '#90caf9' }} />
          <div style={{ width: 6, height: 1, background: '#90caf9' }} />
        </div>
      </motion.div>
      {/* Paper 3 → person 3 (bottom) */}
      <motion.div
        animate={{ x: [0, 75], y: [0, 22], opacity: [1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        style={{ position: 'absolute', left: 36, top: 42, width: 14, height: 18, background: '#e3f2fd', border: '1.5px solid #1565c0', borderRadius: 1 }}
      >
        <div style={{ margin: '3px 2px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 8, height: 1, background: '#90caf9' }} />
          <div style={{ width: 6, height: 1, background: '#90caf9' }} />
        </div>
      </motion.div>
      {/* Three waiting stick figures on right */}
      {[{ x: 145, y: 18 }, { x: 155, y: 38 }, { x: 148, y: 58 }].map((pos, i) => (
        <div key={i} style={{ position: 'absolute', left: pos.x, top: pos.y }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#546e7a' }} />
          <div style={{ width: 14, height: 4, background: '#546e7a', borderRadius: 1, marginLeft: -2 }} />
          <div style={{ display: 'flex', gap: 3, marginLeft: 1 }}>
            <div style={{ width: 2, height: 8, background: '#546e7a' }} />
            <div style={{ width: 2, height: 8, background: '#546e7a' }} />
          </div>
          {/* Outstretched hand waiting */}
          <div style={{ position: 'absolute', top: 10, left: -8, width: 8, height: 2, background: '#546e7a', borderRadius: 1 }} />
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>分發</div>
    </div>
  );
}

/* ── Give away (贈送) ── Person hands gift box to another person ── */
export function GiveAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left person (giver) */}
      <div style={{ position: 'absolute', left: 25, top: 32 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Right person (receiver) */}
      <div style={{ position: 'absolute', right: 25, top: 32 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Gift box moving from left to right */}
      <motion.div
        animate={{ x: [0, 75] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 55, top: 38 }}
      >
        {/* Box */}
        <div style={{ width: 22, height: 20, background: '#ef5350', borderRadius: 3, border: '1.5px solid #c62828', position: 'relative' }}>
          {/* Ribbon H */}
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#ffd600', marginTop: -1 }} />
          {/* Ribbon V */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#ffd600', marginLeft: -1 }} />
          {/* Bow */}
          <div style={{ position: 'absolute', top: -5, left: 5, width: 5, height: 5, background: '#ffd600', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: -5, right: 5, width: 5, height: 5, background: '#ffd600', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* Giver's hand extending */}
      <motion.div
        style={{ position: 'absolute', left: 44, top: 42, width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [0, 12, 12] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Receiver's hand extending */}
      <motion.div
        style={{ position: 'absolute', right: 40, top: 42, width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [0, -12, -12] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>贈送</div>
    </div>
  );
}

/* ── Give back (歸還) ── Object slides back from right person to left person ── */
export function GiveBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left person (original owner, waiting) */}
      <div style={{ position: 'absolute', left: 25, top: 32 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Right person (returner) */}
      <div style={{ position: 'absolute', right: 25, top: 32 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Blue circle (object) returning from right to left */}
      <motion.div
        animate={{ x: [0, -80] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 142, top: 44, width: 16, height: 16, background: '#1565c0', borderRadius: '50%', border: '1.5px solid #0d47a1' }}
      />
      {/* Return arrow below */}
      <motion.div
        animate={{ opacity: [0, 0.7, 0], scaleX: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 65, top: 70, transformOrigin: 'center center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid #4caf50' }} />
          <div style={{ width: 45, height: 2, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>歸還</div>
    </div>
  );
}

/* ── Give off (散發) ── Object in center emitting particles/waves outward ── */
export function GiveOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Steaming cup / hot source in center */}
      <div style={{ position: 'absolute', left: 80, bottom: 18, width: 36, height: 30, background: '#8d6e63', borderRadius: '0 0 6px 6px', border: '2px solid #6d4c41' }}>
        {/* Handle */}
        <div style={{ position: 'absolute', right: -10, top: 6, width: 10, height: 16, border: '2px solid #6d4c41', borderLeft: 'none', borderRadius: '0 6px 6px 0' }} />
        {/* Hot liquid inside */}
        <div style={{ position: 'absolute', top: 4, left: 3, right: 3, bottom: 3, background: '#4caf50', borderRadius: '0 0 3px 3px', opacity: 0.6 }} />
      </div>
      {/* Steam/vapor particles rising and spreading */}
      {[
        { x: 90, delay: 0, dx: -8 },
        { x: 96, delay: 0.5, dx: 2 },
        { x: 102, delay: 1.0, dx: 10 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -35], x: [0, p.dx], opacity: [0.7, 0], scale: [0.6, 1.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: p.delay }}
          style={{ position: 'absolute', left: p.x, top: 40, width: 8, height: 8, background: '#a5d6a7', borderRadius: '50%' }}
        />
      ))}
      {/* Wavy smell lines */}
      {[0, 1, 2].map(i => (
        <motion.svg
          key={`w${i}`}
          width="12" height="16"
          style={{ position: 'absolute', left: 86 + i * 10, top: 22 }}
          animate={{ y: [5, -10], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }}
        >
          <path d={`M 2 14 Q 6 8 2 6 Q -2 4 2 0`} fill="transparent" stroke="#81c784" strokeWidth="1.5" />
        </motion.svg>
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>散發</div>
    </div>
  );
}
