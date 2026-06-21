import React from 'react';
import { motion } from 'framer-motion';

/* ── Cut off (切斷) ── Scissors cutting a wire, right side falls ── */
export function CutOffAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Left wire segment (stays) */}
      <div style={{ position: 'absolute', top: 50, left: 0, width: 90, height: 4, background: '#90a4ae', borderRadius: 2 }} />
      {/* Right wire segment (falls after cut) */}
      <motion.div
        style={{ position: 'absolute', top: 50, left: 105, width: 105, height: 4, background: '#90a4ae', borderRadius: 2, transformOrigin: 'left center' }}
        animate={{ y: [0, 0, 35], rotate: [0, 0, 20], opacity: [1, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeIn', times: [0, 0.45, 0.8] }}
      />
      {/* Scissors - top blade */}
      <motion.div
        style={{ position: 'absolute', top: 32, left: 85, transformOrigin: '12px 20px' }}
        animate={{ rotate: [15, 15, 0, 0, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.7, 1] }}
      >
        <div style={{ width: 20, height: 3, background: '#546e7a', borderRadius: '3px 0 0 0' }} />
      </motion.div>
      {/* Scissors - bottom blade */}
      <motion.div
        style={{ position: 'absolute', top: 53, left: 85, transformOrigin: '12px 0px' }}
        animate={{ rotate: [-15, -15, 0, 0, -15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.7, 1] }}
      >
        <div style={{ width: 20, height: 3, background: '#546e7a', borderRadius: '0 0 0 3px' }} />
      </motion.div>
      {/* Scissors handle (rings) */}
      <div style={{ position: 'absolute', top: 36, left: 70, width: 12, height: 12, border: '2px solid #546e7a', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', top: 48, left: 70, width: 12, height: 12, border: '2px solid #546e7a', borderRadius: '50%' }} />
      {/* Pivot dot */}
      <div style={{ position: 'absolute', top: 49, left: 95, width: 6, height: 6, borderRadius: '50%', background: '#37474f', zIndex: 2 }} />
      {/* Cut spark */}
      <motion.div
        style={{ position: 'absolute', top: 44, left: 100, width: 10, height: 10 }}
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.48, 0.6] }}
      >
        <div style={{ width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>切斷</div>
    </div>
  );
}

/* ── Cut out (停止) ── Spinning gear that sputters and stops ── */
export function CutOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Main gear */}
      <motion.div
        style={{ position: 'absolute', top: 22, left: 70, width: 50, height: 50, borderRadius: '50%', border: '5px solid #546e7a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        animate={{
          rotate: [0, 360, 720, 740, 740],
          borderColor: ['#4caf50', '#4caf50', '#ff9800', '#bdbdbd', '#bdbdbd'],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeOut', times: [0, 0.3, 0.6, 0.75, 1] }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#546e7a' }} />
      </motion.div>
      {/* Gear teeth */}
      {[0, 90, 180, 270].map((deg, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', top: 43, left: 91, width: 8, height: 4, background: '#546e7a', borderRadius: 1,
            transformOrigin: '-4px 4px', transform: `rotate(${deg}deg) translateX(28px)`,
          }}
          animate={{
            opacity: [1, 1, 0.5, 0.2, 0.2],
            background: ['#4caf50', '#4caf50', '#ff9800', '#bdbdbd', '#bdbdbd'],
          }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.75, 1] }}
        />
      ))}
      {/* Status indicator: green → red */}
      <motion.div
        style={{ position: 'absolute', bottom: 25, left: '50%', marginLeft: -20, width: 40, height: 8, borderRadius: 4, border: '1px solid #bdbdbd' }}
        animate={{ background: ['#4caf50', '#4caf50', '#ff9800', '#ef5350', '#ef5350'] }}
        transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.75, 1] }}
      />
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>停止</div>
    </div>
  );
}

/* ── Cut down (減少) ── Tall bar chart bars getting shorter ── */
export function CutDownAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20, height: 2, background: '#e0e0e0' }} />
      {/* Bar chart bars shrinking */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: 20, left: 35 + i * 35, width: 22, background: i === 3 ? '#ef5350' : '#42a5f5', borderRadius: '3px 3px 0 0' }}
          animate={{ height: [55 - i * 8, 55 - i * 8, 15, 15] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7, 1], delay: i * 0.06 }}
        />
      ))}
      {/* Down arrow */}
      <motion.div
        style={{ position: 'absolute', right: 20, top: 20 }}
        animate={{ y: [0, 0, 30, 30], opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
      >
        <div style={{ width: 3, height: 20, background: '#ef5350', margin: '0 auto', borderRadius: 1 }} />
        <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid #ef5350', marginLeft: -5 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>減少</div>
    </div>
  );
}
