import React from 'react';
import { motion } from 'framer-motion';

/* ── Come up (出現) ── Figure rising from below surface ── */
export function ComeUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Surface line */}
      <div style={{ position: 'absolute', top: 70, left: 0, right: 0, height: 3, background: '#90caf9' }} />
      {/* Figure rising */}
      <motion.div
        style={{ position: 'absolute', left: 85 }}
        animate={{ y: [90, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
      </motion.div>
      {/* Idea bubble */}
      <motion.div
        style={{ position: 'absolute', left: 120, top: 12, width: 30, height: 20, background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: 8 }}
        animate={{ opacity: [0, 0, 1], scale: [0.5, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.8] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出現</div>
    </div>
  );
}

/* ── Come down (下降) ── Object descending along vertical track ── */
export function ComeDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Vertical track */}
      <div style={{ position: 'absolute', left: 100, top: 5, width: 3, height: 100, background: '#e0e0e0', borderRadius: 1 }} />
      {/* Object descending */}
      <motion.div
        style={{ position: 'absolute', left: 85, width: 30, height: 20, background: '#ef5350', borderRadius: 3 }}
        animate={{ y: [5, 80] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeIn' }}
      />
      {/* Down arrow */}
      <motion.div
        style={{ position: 'absolute', left: 60, top: 40 }}
        animate={{ y: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ width: 3, height: 15, background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #ef5350', marginLeft: -4 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>下降</div>
    </div>
  );
}

/* ── Come in (進來) ── Figure walking through doorway ── */
export function ComeInAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Room */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 120, height: 130, background: '#e8f5e9' }} />
      {/* Wall */}
      <div style={{ position: 'absolute', left: 85, top: 0, width: 8, height: 130, background: '#78909c' }} />
      {/* Door opening */}
      <div style={{ position: 'absolute', left: 85, top: 20, width: 8, height: 70, background: '#e8f5e9' }} />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure walking in */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [10, 10, 140] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>進來</div>
    </div>
  );
}

/* ── Come out (出來) ── Figure emerging from behind curtain ── */
export function ComeOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Curtain */}
      <div style={{ position: 'absolute', left: 30, top: 0, width: 60, height: 110, background: '#7b1fa2', borderRadius: '0 0 8px 8px', opacity: 0.7 }} />
      <div style={{ position: 'absolute', left: 30, top: 0, width: 60, height: 5, background: '#4a148c' }} />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure emerging */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [55, 55, 140] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出來</div>
    </div>
  );
}

/* ── Come back (回來) ── Figure walking then reversing direction ── */
export function ComeBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Home marker */}
      <div style={{ position: 'absolute', left: 15, bottom: 15, width: 25, height: 22, background: '#8d6e63', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: -8, left: -2, width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '10px solid #6d4c41' }} />
      </div>
      {/* Figure going out then coming back */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [45, 150, 150, 45], scaleX: [1, 1, -1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回來</div>
    </div>
  );
}

/* ── Come across (偶然發現) ── Figure walking and stumbling on object ── */
export function ComeAcrossAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Hidden object on ground */}
      <div style={{ position: 'absolute', bottom: 15, left: 110, width: 18, height: 12, background: '#ff9800', borderRadius: 2, border: '1.5px solid #e65100' }} />
      {/* Figure walking */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [15, 15, 95, 95] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Surprise indicator */}
      <motion.div
        style={{ position: 'absolute', top: 15, left: 110, fontWeight: 'bold', fontSize: 14, color: '#ff9800' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.3, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.55, 0.8, 1] }}
      >
        !
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>偶然發現</div>
    </div>
  );
}

/* ── Come along (一起來) ── Two figures walking together ── */
export function ComeAlongAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* First figure */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [20, 150, 20] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Second figure following */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [45, 175, 45] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#4caf50', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#4caf50' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#4caf50' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>一起來</div>
    </div>
  );
}

/* ── Come over (過來) ── Figure traveling over hill to reach another ── */
export function ComeOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground with hill */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Hill */}
      <div style={{ position: 'absolute', bottom: 13, left: 60, width: 80, height: 35, background: '#c8e6c9', borderRadius: '50% 50% 0 0' }} />
      {/* Waiting figure on right */}
      <div style={{ position: 'absolute', right: 20, bottom: 17 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </div>
      {/* Figure traveling over hill */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [15, 55, 100, 145], y: [70, 30, 30, 70] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 10, background: '#1565c0' }} />
          <div style={{ width: 2, height: 10, background: '#1565c0' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>過來</div>
    </div>
  );
}

/* ── Come through (成功完成) ── Figure pushing through wall and emerging ── */
export function ComeThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Thick wall */}
      <div style={{ position: 'absolute', top: 10, left: 80, width: 30, height: 90, background: '#78909c', borderRadius: 3 }} />
      {/* Figure passing through */}
      <motion.div
        style={{ position: 'absolute', top: 35 }}
        animate={{ x: [15, 15, 55, 150], scaleX: [1, 1, 0.6, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 0.5, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Success glow on right side */}
      <motion.div
        style={{ position: 'absolute', top: 35, right: 15, width: 16, height: 16, background: '#4caf50', borderRadius: '50%' }}
        animate={{ opacity: [0, 0, 0.8, 0], scale: [0.5, 0.5, 1.3, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>成功完成</div>
    </div>
  );
}
