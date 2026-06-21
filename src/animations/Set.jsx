import React from 'react';
import { motion } from 'framer-motion';

/* ── Set into (蔓延) ── Liquid solidifying in mold ── */
export function SetIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Mold container */}
      <div style={{ position: 'absolute', left: 55, top: 20, width: 80, height: 60, border: '3px solid #78909c', borderTop: 'none', background: '#eceff1', borderRadius: '0 0 6px 6px' }} />
      {/* Liquid filling and solidifying */}
      <motion.div
        style={{ position: 'absolute', bottom: 48, left: 58, width: 74, borderRadius: '0 0 3px 3px' }}
        animate={{ height: [5, 50], background: ['#42a5f5', '#37474f'] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* Frost/solidify indicator */}
      <motion.div
        style={{ position: 'absolute', left: 65, top: 30, width: 60, height: 3, background: '#b0bec5', borderRadius: 1 }}
        animate={{ opacity: [0, 0, 0.6], scaleX: [0, 0, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>蔓延</div>
    </div>
  );
}

/* ── Set down (放下) ── Hand gently placing object on table ── */
export function SetDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Table */}
      <div style={{ position: 'absolute', bottom: 15, left: 50, width: 100, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 15, left: 55, width: 3, height: 25, background: '#8d6e63' }} />
      <div style={{ position: 'absolute', bottom: 15, left: 142, width: 3, height: 25, background: '#8d6e63' }} />
      {/* Object descending gently */}
      <motion.div
        style={{ position: 'absolute', left: 88, width: 22, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ y: [10, 50, 50, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.7, 1] }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', left: 82, width: 20, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ y: [5, 42, 42, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.7, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>放下</div>
    </div>
  );
}

/* ── Set up (設立) ── Hands assembling tent/scaffolding ── */
export function SetUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Scaffolding poles rising */}
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 55, width: 4, background: '#546e7a', borderRadius: 1 }}
        animate={{ height: [5, 65] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 100, width: 4, background: '#546e7a', borderRadius: 1 }}
        animate={{ height: [5, 65] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.2 }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: 15, left: 145, width: 4, background: '#546e7a', borderRadius: 1 }}
        animate={{ height: [5, 65] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
      />
      {/* Cross bar connecting */}
      <motion.div
        style={{ position: 'absolute', left: 55, width: 94, height: 4, background: '#78909c', borderRadius: 1 }}
        animate={{ y: [80, 18], opacity: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
      />
      {/* Hand */}
      <motion.div
        style={{ position: 'absolute', left: 35, width: 16, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ y: [75, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>設立</div>
    </div>
  );
}

/* ── Set out (出發) ── Figure starting journey on road ── */
export function SetOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Road */}
      <div style={{ position: 'absolute', bottom: 15, left: 0, right: 0, height: 20, background: '#90a4ae' }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ position: 'absolute', top: 9, left: 10 + i * 35, width: 16, height: 2, background: '#fff' }} />
        ))}
      </div>
      {/* Figure starting to walk */}
      <motion.div
        style={{ position: 'absolute', bottom: 37 }}
        animate={{ x: [25, 25, 175] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出發</div>
    </div>
  );
}

/* ── Set off (觸發) ── Hand pushing detonator, explosion ── */
export function SetOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Detonator box */}
      <div style={{ position: 'absolute', left: 25, top: 40, width: 30, height: 35, background: '#8d6e63', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: -10, left: 12, width: 6, height: 12, background: '#ef5350', borderRadius: 2 }} />
      </div>
      {/* Hand pressing */}
      <motion.div
        style={{ position: 'absolute', left: 28, width: 20, height: 12, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ y: [15, 15, 30, 15] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 0.6] }}
      />
      {/* Explosion */}
      <motion.div
        style={{ position: 'absolute', right: 30, top: 20, width: 50, height: 50, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.8, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 0.8] }}
      />
      {/* Debris */}
      {[
        { x: -15, y: -20 },
        { x: 20, y: -15 },
        { x: -10, y: 15 },
        { x: 15, y: 20 },
      ].map((d, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 50, top: 42, width: 6, height: 5, background: '#ff9800', borderRadius: 1 }}
          animate={{ x: [0, 0, d.x], y: [0, 0, d.y], opacity: [0, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.6, 0.85] }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>觸發</div>
    </div>
  );
}

/* ── Set back (阻礙) ── Obstacle pushing figure backward ── */
export function SetBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Timeline */}
      <div style={{ position: 'absolute', top: 55, left: 15, right: 15, height: 3, background: '#e0e0e0', borderRadius: 1 }} />
      {/* Obstacle */}
      <div style={{ position: 'absolute', top: 30, left: 110, width: 20, height: 35, background: '#ef5350', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: 10, left: 6, fontSize: 10, fontWeight: 'bold', color: '#fff' }}>X</div>
      </div>
      {/* Figure being pushed back */}
      <motion.div
        style={{ position: 'absolute', bottom: 30 }}
        animate={{ x: [120, 120, 30] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
      </motion.div>
      {/* Backward arrow */}
      <motion.div
        style={{ position: 'absolute', top: 70, left: 40, display: 'flex', alignItems: 'center' }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '7px solid #ef5350' }} />
        <div style={{ width: 30, height: 2, background: '#ef5350' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>阻礙</div>
    </div>
  );
}

/* ── Set aside (擱置) ── Hand sliding object to side of desk ── */
export function SetAsideAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Desk surface */}
      <div style={{ position: 'absolute', bottom: 30, left: 20, right: 20, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      {/* Object being slid aside */}
      <motion.div
        style={{ position: 'absolute', bottom: 34, width: 22, height: 16, background: '#1565c0', borderRadius: 3 }}
        animate={{ x: [90, 90, 165] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Hand pushing sideways */}
      <motion.div
        style={{ position: 'absolute', bottom: 38, width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }}
        animate={{ x: [75, 75, 150] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      />
      {/* Main work area indicator */}
      <div style={{ position: 'absolute', bottom: 34, left: 40, width: 50, height: 30, border: '1.5px dashed #90a4ae', borderRadius: 3 }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>擱置</div>
    </div>
  );
}

/* ── Set about (著手) ── Figure rolling up sleeves, starting work ── */
export function SetAboutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Stick figure */}
      <div style={{ position: 'absolute', left: 50, bottom: 17 }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 22, height: 6, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </div>
      {/* Arms rolling up sleeves motion */}
      <motion.div
        style={{ position: 'absolute', left: 45, top: 48, width: 10, height: 2, background: '#546e7a', transformOrigin: 'right center' }}
        animate={{ rotate: [-30, -80, -30] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        style={{ position: 'absolute', left: 68, top: 48, width: 10, height: 2, background: '#546e7a', transformOrigin: 'left center' }}
        animate={{ rotate: [30, 80, 30] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Tools/work items on right */}
      <div style={{ position: 'absolute', right: 25, bottom: 15, width: 40, height: 55, background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 4 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', top: 8 + i * 14, left: 6, width: 24, height: 3, background: '#90caf9', borderRadius: 1 }} />
        ))}
      </div>
      {/* Determination indicator */}
      <motion.div
        style={{ position: 'absolute', top: 15, left: 45, fontSize: 10, fontWeight: 'bold', color: '#4caf50' }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        GO!
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>著手</div>
    </div>
  );
}
