import React from 'react';
import { motion } from 'framer-motion';

/* ── Mess up (搞砸) ── Neat stack of papers getting scattered ── */
export function MessUpAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Ground line */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* Neat stack (fades out) */}
      <motion.div
        style={{ position: 'absolute', left: 85, bottom: 16 }}
        animate={{ opacity: [1, 1, 0], scale: [1, 1, 0.8] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45] }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 32, height: 22, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 1, marginBottom: 2 }}>
            <div style={{ margin: '4px 3px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ width: 20, height: 1, background: '#90caf9' }} />
              <div style={{ width: 14, height: 1, background: '#90caf9' }} />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Scattered papers (appear after) */}
      {[
        { x: 30, y: 25, rot: -25 },
        { x: 100, y: 15, rot: 15 },
        { x: 140, y: 35, rot: 30 },
        { x: 60, y: 55, rot: -10 },
        { x: 120, y: 60, rot: 20 },
      ].map((p, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', width: 24, height: 16, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 1 }}
          animate={{
            x: [95, 95, p.x],
            y: [50, 50, p.y],
            rotate: [0, 0, p.rot],
            opacity: [0, 0, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.65], ease: 'easeOut' }}
        >
          <div style={{ margin: 2 }}>
            <div style={{ width: 14, height: 1, background: '#90caf9' }} />
          </div>
        </motion.div>
      ))}
      {/* Red X mark */}
      <motion.div
        style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -8, fontWeight: 'bold', fontSize: 20, color: '#ef5350' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.3, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.8, 1] }}
      >
        X
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>搞砸</div>
    </div>
  );
}
