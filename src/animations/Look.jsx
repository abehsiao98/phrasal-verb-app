import React from 'react';
import { motion } from 'framer-motion';

const Eyes = ({ x = 85, y = 30 }) => (
  <div style={{ position: 'absolute', left: x, top: y, display: 'flex', gap: 6, padding: '6px 10px', background: '#fff', borderRadius: 20, border: '2px solid #e0e0e0' }}>
    <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 3 }}
        animate={{ x: [-2, 2, -2], y: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 2 }} />
    </div>
    <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 3 }}
        animate={{ x: [-2, 2, -2], y: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 2 }} />
    </div>
  </div>
);

/* ── Look into (調查) ── Eyes with magnifying glass peering into folder ── */
export function LookIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Folder */}
      <div style={{ position: 'absolute', right: 20, top: 25, width: 50, height: 40, background: '#fff9c4', border: '2px solid #f9a825', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: -8, left: 5, width: 20, height: 8, background: '#f9a825', borderRadius: '3px 3px 0 0' }} />
      </div>
      {/* Eyes + magnifying glass moving toward folder */}
      <motion.div
        style={{ position: 'absolute', top: 25 }}
        animate={{ x: [10, 10, 65] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 1] }}
      >
        <Eyes x={0} y={0} />
        <div style={{ position: 'absolute', top: 18, left: 40, width: 16, height: 16, border: '2px solid #1565c0', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 32, left: 52, width: 2, height: 10, background: '#1565c0', transform: 'rotate(-45deg)' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>調查</div>
    </div>
  );
}

/* ── Look down (看不起) ── Large eyes above looking down at tiny figure ── */
export function LookDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Large eyes at top */}
      <Eyes x={70} y={8} />
      {/* Downward vision cone */}
      <motion.div
        style={{ position: 'absolute', top: 40, left: 88, width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderTop: '40px solid rgba(21,101,192,0.1)' }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Tiny figure below */}
      <div style={{ position: 'absolute', bottom: 17, left: 90 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ width: 8, height: 2, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <div style={{ width: 1, height: 5, background: '#bdbdbd' }} />
          <div style={{ width: 1, height: 5, background: '#bdbdbd' }} />
        </div>
      </div>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>看不起</div>
    </div>
  );
}

/* ── Look up (查詢) ── Eyes looking upward at book ── */
export function LookUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Book at top */}
      <div style={{ position: 'absolute', top: 10, left: 75, width: 50, height: 35, background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 3 }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: '#90caf9' }} />
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', top: 8 + i * 8, left: 5, width: 16, height: 2, background: '#90caf9', borderRadius: 1 }} />
        ))}
      </div>
      {/* Eyes at bottom looking up */}
      <div style={{ position: 'absolute', left: 75, top: 65, display: 'flex', gap: 6, padding: '6px 10px', background: '#fff', borderRadius: 20, border: '2px solid #e0e0e0' }}>
        <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 0 }}
            animate={{ y: [2, 0, 2] }} transition={{ repeat: Infinity, duration: 2 }} />
        </div>
        <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 0 }}
            animate={{ y: [2, 0, 2] }} transition={{ repeat: Infinity, duration: 2 }} />
        </div>
      </div>
      {/* Upward vision beam */}
      <motion.div
        style={{ position: 'absolute', top: 48, left: 93, width: 3, height: 15, background: '#42a5f5', borderRadius: 1 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>查詢</div>
    </div>
  );
}

/* ── Look out (小心) ── Eyes scanning horizon with alert triangle ── */
export function LookOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <Eyes x={25} y={30} />
      {/* Vision beam sweeping */}
      <motion.div
        style={{ position: 'absolute', top: 42, left: 85, width: 60, height: 3, background: '#42a5f5', borderRadius: 1, transformOrigin: 'left center' }}
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Alert triangle */}
      <motion.div
        style={{ position: 'absolute', right: 25, top: 20 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #ff9800' }} />
        <div style={{ position: 'absolute', top: 10, left: 10, fontSize: 11, fontWeight: 'bold', color: '#fff' }}>!</div>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>小心</div>
    </div>
  );
}

/* ── Look over (檢查) ── Eyes scanning document with highlight bar ── */
export function LookOverAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Document */}
      <div style={{ position: 'absolute', right: 20, top: 10, width: 60, height: 85, background: '#fff', border: '2px solid #90a4ae', borderRadius: 3 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ position: 'absolute', top: 10 + i * 12, left: 8, width: 40 - (i % 2) * 10, height: 2, background: '#cfd8dc', borderRadius: 1 }} />
        ))}
      </div>
      {/* Scanning highlight bar */}
      <motion.div
        style={{ position: 'absolute', right: 22, width: 56, height: 8, background: 'rgba(255,235,59,0.3)', borderRadius: 2 }}
        animate={{ y: [12, 75, 12] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Eyes on left */}
      <Eyes x={15} y={35} />
      {/* Vision line to document */}
      <motion.div
        style={{ position: 'absolute', top: 48, left: 75, width: 50, height: 2, background: '#42a5f5', borderRadius: 1 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>檢查</div>
    </div>
  );
}

/* ── Look through (瀏覽/透視) ── Eyes with beam penetrating through wall ── */
export function LookThroughAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <Eyes x={10} y={30} />
      {/* Wall */}
      <div style={{ position: 'absolute', top: 15, left: 85, width: 12, height: 80, background: '#78909c', borderRadius: 2 }} />
      {/* X-ray beam through wall */}
      <motion.div
        style={{ position: 'absolute', top: 40, left: 70, width: 80, height: 6, background: 'rgba(76,175,80,0.3)', borderRadius: 2 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Hidden object revealed on other side */}
      <motion.div
        style={{ position: 'absolute', top: 30, right: 25, width: 22, height: 22, background: '#4caf50', borderRadius: 3 }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>瀏覽</div>
    </div>
  );
}

/* ── Look back (回顧) ── Eyes turning backward with memory trail ── */
export function LookBackAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Eyes on right looking left */}
      <div style={{ position: 'absolute', right: 30, top: 30, display: 'flex', gap: 6, padding: '6px 10px', background: '#fff', borderRadius: 20, border: '2px solid #e0e0e0' }}>
        <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', top: 3 }}
            animate={{ left: [7, 0, 0, 7] }} transition={{ repeat: Infinity, duration: 3, times: [0, 0.3, 0.7, 1] }} />
        </div>
        <div style={{ width: 14, height: 14, background: '#f5f5f5', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
          <motion.div style={{ width: 7, height: 7, background: '#333', borderRadius: '50%', position: 'absolute', top: 3 }}
            animate={{ left: [7, 0, 0, 7] }} transition={{ repeat: Infinity, duration: 3, times: [0, 0.3, 0.7, 1] }} />
        </div>
      </div>
      {/* Memory trail fading left */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', top: 38, left: 20 + i * 30, width: 14, height: 14, background: '#e0e0e0', borderRadius: '50%' }}
          animate={{ opacity: [0.1 + i * 0.15, 0.4 + i * 0.15, 0.1 + i * 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ))}
      {/* Dashed arrow going left */}
      <motion.div
        style={{ position: 'absolute', top: 60, left: 40, display: 'flex', alignItems: 'center', gap: 4 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '6px solid #90a4ae' }} />
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 8, height: 2, background: '#90a4ae', borderRadius: 1 }} />
        ))}
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>回顧</div>
    </div>
  );
}

/* ── Look after (照顧) ── Eyes watching over small figure protectively ── */
export function LookAfterAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Watchful eyes */}
      <Eyes x={20} y={15} />
      {/* Protective arc */}
      <div style={{ position: 'absolute', bottom: 20, left: 100, width: 60, height: 45, border: '2px dashed #4caf50', borderBottom: 'none', borderRadius: '50% 50% 0 0', opacity: 0.4 }} />
      {/* Green vision line */}
      <motion.div
        style={{ position: 'absolute', top: 32, left: 80, width: 50, height: 2, background: '#4caf50', borderRadius: 1, transformOrigin: 'left center' }}
        animate={{ rotate: [-5, 5, -5], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {/* Small figure being watched */}
      <div style={{ position: 'absolute', bottom: 17, left: 120 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#546e7a', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <div style={{ width: 1.5, height: 8, background: '#546e7a' }} />
          <div style={{ width: 1.5, height: 8, background: '#546e7a' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>照顧</div>
    </div>
  );
}

/* ── Look for (尋找) ── Eyes with search beam sweeping ── */
export function LookForAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <Eyes x={15} y={25} />
      {/* Search beam sweeping */}
      <motion.div
        style={{ position: 'absolute', top: 38, left: 75, width: 80, height: 3, background: '#42a5f5', borderRadius: 1, transformOrigin: 'left center' }}
        animate={{ rotate: [-20, 20, -20] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {/* Scattered objects on ground */}
      {[
        { x: 100, y: 60, w: 10, h: 8, color: '#bdbdbd' },
        { x: 140, y: 50, w: 8, h: 10, color: '#bdbdbd' },
        { x: 165, y: 65, w: 12, h: 8, color: '#bdbdbd' },
      ].map((obj, i) => (
        <div key={i} style={{ position: 'absolute', left: obj.x, top: obj.y, width: obj.w, height: obj.h, background: obj.color, borderRadius: 2 }} />
      ))}
      {/* Target pulsing */}
      <motion.div
        style={{ position: 'absolute', left: 140, top: 48, width: 12, height: 14, background: '#1565c0', borderRadius: 2 }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>尋找</div>
    </div>
  );
}

/* ── Look forward (期待) ── Eyes beaming toward star/target ── */
export function LookForwardAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      <Eyes x={15} y={35} />
      {/* Golden beam forward */}
      <motion.div
        style={{ position: 'absolute', top: 46, left: 75, width: 80, height: 4, background: 'linear-gradient(90deg, #ffd600, transparent)', borderRadius: 2 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Star target */}
      <motion.div
        style={{ position: 'absolute', right: 20, top: 25 }}
        animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffd600" stroke="#f9a825" strokeWidth="1" />
        </svg>
      </motion.div>
      {/* Sparkle dots */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', right: 15 + i * 20, top: 20 + i * 25, width: 4, height: 4, background: '#ffd600', borderRadius: '50%' }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>期待</div>
    </div>
  );
}
