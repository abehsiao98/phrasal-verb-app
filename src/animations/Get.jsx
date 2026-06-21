import React from 'react';
import { motion } from 'framer-motion';

/* ── Get into (進入) ── Figure squeezing through narrow doorway ── */
export function GetIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left wall */}
      <div style={{ position: 'absolute', left: 80, top: 0, width: 12, height: 130, background: '#78909c' }} />
      {/* Right wall */}
      <div style={{ position: 'absolute', left: 118, top: 0, width: 12, height: 130, background: '#78909c' }} />
      {/* Door frame top */}
      <div style={{ position: 'absolute', left: 92, top: 15, width: 26, height: 4, background: '#546e7a' }} />
      {/* Room interior hint */}
      <div style={{ position: 'absolute', left: 130, top: 10, width: 70, height: 100, background: '#e3f2fd', borderRadius: 4 }} />
      {/* Stick figure squeezing through */}
      <motion.div
        style={{ position: 'absolute', top: 30 }}
        animate={{ x: [20, 20, 90, 145], scaleX: [1, 1, 0.6, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.55, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>進入</div>
    </div>
  );
}

/* ── Get down (認真做) ── Figure crouching toward desk to work ── */
export function GetDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Desk */}
      <div style={{ position: 'absolute', bottom: 15, left: 100, width: 60, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 15, left: 105, width: 3, height: 30, background: '#8d6e63' }} />
      <div style={{ position: 'absolute', bottom: 15, left: 152, width: 3, height: 30, background: '#8d6e63' }} />
      {/* Paper on desk */}
      <div style={{ position: 'absolute', bottom: 19, left: 115, width: 20, height: 14, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 1 }} />
      {/* Stick figure crouching down */}
      <motion.div
        style={{ position: 'absolute', left: 50, transformOrigin: 'bottom center' }}
        animate={{ y: [20, 20, 42], rotate: [0, 0, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>認真做</div>
    </div>
  );
}

/* ── Get up (起床) ── Figure rising from bed ── */
export function GetUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Bed frame */}
      <div style={{ position: 'absolute', bottom: 15, left: 20, width: 120, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      {/* Bed legs */}
      <div style={{ position: 'absolute', bottom: 5, left: 25, width: 4, height: 10, background: '#6d4c41' }} />
      <div style={{ position: 'absolute', bottom: 5, left: 132, width: 4, height: 10, background: '#6d4c41' }} />
      {/* Mattress */}
      <div style={{ position: 'absolute', bottom: 21, left: 22, width: 116, height: 14, background: '#e8eaf6', borderRadius: 3, border: '1px solid #c5cae9' }} />
      {/* Pillow */}
      <div style={{ position: 'absolute', bottom: 25, left: 26, width: 28, height: 16, background: '#fff', borderRadius: 6, border: '1px solid #e0e0e0' }} />
      {/* Headboard */}
      <div style={{ position: 'absolute', bottom: 21, left: 18, width: 6, height: 40, background: '#6d4c41', borderRadius: '3px 3px 0 0' }} />
      {/* Figure rising */}
      <motion.div
        style={{ position: 'absolute', left: 60, bottom: 35, transformOrigin: 'bottom left' }}
        animate={{ rotate: [-80, -80, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', times: [0, 0.35, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 5, height: 20, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>起床</div>
    </div>
  );
}

/* ── Get out (出去/逃脫) ── Figure climbing out of box ── */
export function GetOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Box/container */}
      <div style={{ position: 'absolute', bottom: 15, left: 30, width: 70, height: 60, border: '4px solid #78909c', borderTop: 'none', background: '#eceff1', borderRadius: '0 0 4px 4px' }} />
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Figure climbing out */}
      <motion.div
        style={{ position: 'absolute', left: 55 }}
        animate={{ x: [0, 0, 60, 80], y: [40, 10, -5, 40], rotate: [0, -10, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.6, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>出去、逃脫</div>
    </div>
  );
}

/* ── Get over (克服) ── Figure climbing over a wall ── */
export function GetOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Wall */}
      <div style={{ position: 'absolute', bottom: 15, left: 85, width: 14, height: 65, background: '#5d4037', borderRadius: 2 }} />
      {/* Brick pattern */}
      {[0, 1, 2, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 17 + i * 13, left: 87, width: 10, height: 1, background: '#8d6e63' }} />
      ))}
      {/* Figure going over */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [25, 60, 92, 130, 155], y: [55, 25, 5, 25, 55] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Arc trajectory hint */}
      <motion.div
        style={{ position: 'absolute', top: 15, left: 92, width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%' }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>克服</div>
    </div>
  );
}

/* ── Get through (撐過) ── Figure pushing through tunnel ── */
export function GetThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Tunnel top */}
      <div style={{ position: 'absolute', top: 20, left: 50, width: 110, height: 10, background: '#455a64', borderRadius: '4px 4px 0 0' }} />
      {/* Tunnel bottom */}
      <div style={{ position: 'absolute', top: 75, left: 50, width: 110, height: 10, background: '#455a64', borderRadius: '0 0 4px 4px' }} />
      {/* Tunnel interior */}
      <div style={{ position: 'absolute', top: 30, left: 50, width: 110, height: 45, background: '#263238' }} />
      {/* Light at end of tunnel */}
      <motion.div
        style={{ position: 'absolute', top: 30, left: 145, width: 15, height: 45, background: '#fff9c4', borderRadius: '0 4px 4px 0' }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Figure moving through */}
      <motion.div
        style={{ position: 'absolute', top: 38 }}
        animate={{ x: [15, 15, 160] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 1] }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 16, height: 4, background: '#90a4ae', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 10, background: '#90a4ae' }} />
          <div style={{ width: 2, height: 10, background: '#90a4ae' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>撐過</div>
    </div>
  );
}

/* ── Get along (相處) ── Two figures walking side by side peacefully ── */
export function GetAlongAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Blue figure */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [30, 130, 30] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#1565c0' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Green figure */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [55, 155, 55] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#388e3c', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#388e3c', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#388e3c' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#388e3c' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Harmony indicator */}
      <motion.div
        style={{ position: 'absolute', top: 12, left: '50%', marginLeft: -15, width: 30, height: 6, background: '#4caf50', borderRadius: 3 }}
        animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>相處融洽</div>
    </div>
  );
}

/* ── Get back (回來) ── Figure leaving then returning home ── */
export function GetBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* House */}
      <div style={{ position: 'absolute', left: 10, bottom: 15, width: 40, height: 35, background: '#8d6e63', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: -12, left: -3, width: 0, height: 0, borderLeft: '23px solid transparent', borderRight: '23px solid transparent', borderBottom: '16px solid #6d4c41' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 14, width: 12, height: 18, background: '#5d4037', borderRadius: '2px 2px 0 0' }} />
      </div>
      {/* Figure going out then coming back */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [55, 155, 155, 55] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.55, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Return arrow */}
      <motion.div
        style={{ position: 'absolute', top: 20, left: 80 }}
        animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.55, 0.85, 1] }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid #4caf50' }} />
          <div style={{ width: 40, height: 2, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回來</div>
    </div>
  );
}

/* ── Get away (逃離) ── Figure running away, shrinking into distance ── */
export function GetAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Danger zone on left */}
      <div style={{ position: 'absolute', left: 10, bottom: 15, width: 35, height: 55, background: '#ffcdd2', border: '2px solid #ef5350', borderRadius: 4 }} />
      {/* Figure running away and shrinking */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [50, 170], scale: [1, 0.5], opacity: [1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.3, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 12, background: '#546e7a' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.3, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* Dust puffs */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 20 + i * 3, width: 6, height: 6, background: '#bdbdbd', borderRadius: '50%' }}
          animate={{ x: [55, 40], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>逃離</div>
    </div>
  );
}

/* ── Get on (上車/進展) ── Figure stepping onto bus ── */
export function GetOnAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Bus body */}
      <div style={{ position: 'absolute', bottom: 15, right: 10, width: 100, height: 50, background: '#1565c0', borderRadius: 6 }}>
        {/* Windows */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', top: 8, left: 10 + i * 28, width: 20, height: 16, background: '#bbdefb', borderRadius: 3 }} />
        ))}
        {/* Door opening */}
        <div style={{ position: 'absolute', left: 0, top: 15, width: 14, height: 30, background: '#0d47a1', borderRadius: 2 }} />
      </div>
      {/* Wheels */}
      <div style={{ position: 'absolute', bottom: 11, right: 22, width: 14, height: 14, background: '#37474f', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: 11, right: 82, width: 14, height: 14, background: '#37474f', borderRadius: '50%' }} />
      {/* Figure stepping up onto bus */}
      <motion.div
        style={{ position: 'absolute', bottom: 17 }}
        animate={{ x: [30, 30, 85], y: [0, 0, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>上車、進展</div>
    </div>
  );
}

/* ── Get off (下車) ── Figure stepping down from platform ── */
export function GetOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Raised platform */}
      <div style={{ position: 'absolute', bottom: 15, left: 10, width: 90, height: 30, background: '#78909c', borderRadius: '4px 4px 0 0' }} />
      {/* Step */}
      <div style={{ position: 'absolute', bottom: 15, left: 90, width: 20, height: 15, background: '#90a4ae', borderRadius: 2 }} />
      {/* Figure stepping off */}
      <motion.div
        style={{ position: 'absolute' }}
        animate={{ x: [50, 50, 130, 160], y: [35, 35, 55, 55] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.65, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
          <div style={{ width: 2, height: 12, background: '#546e7a' }} />
        </div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>下車</div>
    </div>
  );
}

/* ── Get by (勉強過關) ── Figure barely squeezing through narrow gap ── */
export function GetByAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left wall */}
      <div style={{ position: 'absolute', left: 80, top: 5, width: 14, height: 100, background: '#37474f', borderRadius: 3 }} />
      {/* Right wall */}
      <div style={{ position: 'absolute', left: 112, top: 5, width: 14, height: 100, background: '#37474f', borderRadius: 3 }} />
      {/* Figure squeezing through */}
      <motion.div
        style={{ position: 'absolute', top: 28 }}
        animate={{ x: [20, 20, 92, 92, 160], scaleX: [1, 1, 0.5, 0.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', times: [0, 0.2, 0.45, 0.65, 1] }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 20, height: 5, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
          <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        </div>
      </motion.div>
      {/* Strain lines */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 30 + i * 18, left: 100, width: 4, height: 4, borderRadius: '50%' }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        >
          <div style={{ width: 4, height: 4, background: '#ffeb3b', borderRadius: '50%' }} />
        </motion.div>
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>勉強過關</div>
    </div>
  );
}
