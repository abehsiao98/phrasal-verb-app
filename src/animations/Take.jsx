import React from 'react';
import { motion } from 'framer-motion';

/* ── Take off (起飛) ── Airplane shape lifting off runway ── */
export function TakeOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Runway */}
      <div style={{ position: 'absolute', bottom: 15, left: 0, right: 0, height: 4, background: '#90a4ae', borderRadius: 1 }} />
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 20, left: 10 + i * 40, width: 14, height: 2, background: '#fff' }} />
      ))}
      {/* Airplane */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [15, 60, 170], y: [68, 50, -10], rotate: [0, -10, -20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
      >
        {/* Fuselage */}
        <div style={{ width: 40, height: 10, background: '#546e7a', borderRadius: '10px 4px 4px 10px' }} />
        {/* Wing */}
        <div style={{ position: 'absolute', top: -4, left: 12, width: 16, height: 4, background: '#78909c', borderRadius: 2 }} />
        {/* Tail */}
        <div style={{ position: 'absolute', top: -8, right: 0, width: 6, height: 10, background: '#78909c', borderRadius: '2px 2px 0 0' }} />
      </motion.div>
      {/* Exhaust */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 22, width: 6, height: 4, background: '#bdbdbd', borderRadius: '50%' }}
          animate={{ x: [60 - i * 12, 40 - i * 12], opacity: [0.4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>起飛</div>
    </div>
  );
}

/* ── Take on (承擔) ── Hand grasping heavy box, lifting onto shoulders ── */
export function TakeOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure */}
      <div style={{ position: 'absolute', left: 80, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#546e7a', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Heavy box being lifted */}
      <motion.div
        style={{ position: 'absolute', left: 70, width: 30, height: 24, background: '#8d6e63', borderRadius: 3, border: '1.5px solid #6d4c41' }}
        animate={{ y: [70, 70, 22] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 1] }}
      />
      {/* Strain lines */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 20 + i * 12, left: 108, width: 8, height: 2, background: '#ef5350', borderRadius: 1 }}
          animate={{ opacity: [0, 0, 0.7, 0], scaleX: [0, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>承擔</div>
    </div>
  );
}

/* ── Take up (開始從事) ── Hand lifting paintbrush from shelf ── */
export function TakeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Shelf */}
      <div style={{ position: 'absolute', bottom: 30, left: 30, width: 140, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      {/* Objects on shelf */}
      <div style={{ position: 'absolute', bottom: 34, left: 45, width: 14, height: 20, background: '#90a4ae', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 34, left: 130, width: 16, height: 16, background: '#90a4ae', borderRadius: '50%' }} />
      {/* Paintbrush being lifted */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 6, height: 28, background: '#ff9800', borderRadius: '2px 2px 0 0' }}
        animate={{ y: [44, 44, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 1] }}
      >
        <div style={{ position: 'absolute', bottom: 0, left: -1, width: 8, height: 10, background: '#1565c0', borderRadius: '0 0 3px 3px' }} />
      </motion.div>
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', left: 78, width: 18, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ y: [38, 38, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>開始從事</div>
    </div>
  );
}

/* ── Take over (接管) ── Figure pushing another aside, sitting in chair ── */
export function TakeOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Desk */}
      <div style={{ position: 'absolute', bottom: 15, left: 90, width: 50, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      {/* Chair */}
      <div style={{ position: 'absolute', bottom: 15, left: 100, width: 30, height: 30, background: '#455a64', borderRadius: '4px 4px 0 0' }} />
      {/* Original figure being pushed aside */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [105, 105, 170], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 1] }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
      </motion.div>
      {/* New figure taking over */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 20, 105] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#1565c0' }} />
          <div style={{ width: 2, height: 12, background: '#1565c0' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>接管</div>
    </div>
  );
}

/* ── Take out (取出) ── Hand pulling document from folder ── */
export function TakeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Folder */}
      <div style={{ position: 'absolute', left: 30, top: 20, width: 65, height: 65, background: '#fff9c4', border: '2px solid #f9a825', borderRadius: 4 }}>
        <div style={{ position: 'absolute', top: -8, left: 5, width: 22, height: 8, background: '#f9a825', borderRadius: '3px 3px 0 0' }} />
      </div>
      {/* Document being pulled out */}
      <motion.div
        style={{ position: 'absolute', top: 28, width: 36, height: 44, background: '#fff', border: '1.5px solid #90a4ae', borderRadius: 2 }}
        animate={{ x: [45, 45, 140] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ position: 'absolute', top: 6 + i * 8, left: 5, width: 22 - i * 3, height: 2, background: '#b0bec5', borderRadius: 1 }} />
        ))}
      </motion.div>
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', top: 38, width: 18, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [60, 60, 155] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>取出</div>
    </div>
  );
}

/* ── Take in (吸收) ── Info particles flying into head container ── */
export function TakeInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Head container */}
      <div style={{ position: 'absolute', left: 80, top: 20, width: 45, height: 50, background: '#eceff1', border: '2px solid #78909c', borderRadius: '50%' }}>
        <div style={{ position: 'absolute', top: 15, left: 12, width: 18, height: 2, background: '#90a4ae', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 22, left: 12, width: 14, height: 2, background: '#90a4ae', borderRadius: 1 }} />
      </div>
      {/* Info particles flying in */}
      {[
        { from: { x: 10, y: 20 }, color: '#42a5f5' },
        { from: { x: 170, y: 15 }, color: '#4caf50' },
        { from: { x: 15, y: 70 }, color: '#ff9800' },
        { from: { x: 175, y: 65 }, color: '#9c27b0' },
      ].map((p, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', width: 8, height: 6, background: p.color, borderRadius: 2 }}
          animate={{ x: [p.from.x, 96], y: [p.from.y, 40], scale: [1, 0.5], opacity: [1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeIn' }}
        />
      ))}
      {/* Glow on head */}
      <motion.div
        style={{ position: 'absolute', left: 85, top: 25, width: 35, height: 40, background: '#42a5f5', borderRadius: '50%' }}
        animate={{ opacity: [0, 0.15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>吸收</div>
    </div>
  );
}

/* ── Take back (收回) ── Object sliding back from right to left person ── */
export function TakeBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Left person */}
      <div style={{ position: 'absolute', left: 25, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Right person */}
      <div style={{ position: 'absolute', right: 25, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#bdbdbd' }} />
          <div style={{ width: 2, height: 14, background: '#bdbdbd' }} />
        </div>
      </div>
      {/* Object returning */}
      <motion.div
        style={{ position: 'absolute', top: 45, width: 16, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [140, 50] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Return arrow */}
      <motion.div
        style={{ position: 'absolute', top: 25, left: 60, display: 'flex', alignItems: 'center' }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '7px solid #ef5350' }} />
        <div style={{ width: 40, height: 2, background: '#ef5350', borderRadius: 1 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>收回</div>
    </div>
  );
}

/* ── Take down (拆除/記下) ── Hand pulling note off wall ── */
export function TakeDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Wall */}
      <div style={{ position: 'absolute', left: 50, top: 0, width: 100, height: 75, background: '#eceff1', borderRadius: 3 }} />
      {/* Table below */}
      <div style={{ position: 'absolute', bottom: 15, left: 30, width: 140, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      {/* Note being pulled down */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 28, height: 22, background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: 2 }}
        animate={{ y: [12, 12, 68] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn', times: [0, 0.35, 1] }}
      >
        <div style={{ margin: '4px 3px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 18, height: 1.5, background: '#f9a825', opacity: 0.5 }} />
          <div style={{ width: 14, height: 1.5, background: '#f9a825', opacity: 0.5 }} />
        </div>
      </motion.div>
      {/* Pin disappearing */}
      <motion.div
        style={{ position: 'absolute', left: 96, width: 5, height: 5, background: '#ef5350', borderRadius: '50%' }}
        animate={{ y: [8, 8, 8], opacity: [1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.4] }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', left: 112, width: 16, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ y: [15, 15, 62] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn', times: [0, 0.35, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>拆除、記下</div>
    </div>
  );
}

/* ── Take away (帶走) ── Figure carrying box off screen ── */
export function TakeAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure carrying box, walking away */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [30, 200], opacity: [1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeIn' }}
      >
        {/* Box above head */}
        <div style={{ width: 24, height: 18, background: '#8d6e63', borderRadius: 3, border: '1px solid #6d4c41', margin: '0 auto', marginBottom: 1 }} />
        {/* Head */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        {/* Body */}
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Ghost outline of where object was */}
      <motion.div
        style={{ position: 'absolute', left: 35, top: 40, width: 24, height: 18, border: '2px dashed #bdbdbd', borderRadius: 3 }}
        animate={{ opacity: [0, 0, 0.5, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.3, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>帶走</div>
    </div>
  );
}
