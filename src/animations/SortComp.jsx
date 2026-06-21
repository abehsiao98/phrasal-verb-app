import React from 'react';
import { motion } from 'framer-motion';

/* ── Sort out (解決/整理) ── Messy items organized into neat rows ── */
export function SortOutAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, background: '#fff', overflow: 'hidden' }}>
      {/* Scattered items → neat rows */}
      {[
        { fromX: 20, fromY: 18, toX: 35, toY: 75, color: '#ef5350' },
        { fromX: 120, fromY: 12, toX: 70, toY: 75, color: '#1565c0' },
        { fromX: 65, fromY: 45, toX: 105, toY: 75, color: '#4caf50' },
        { fromX: 155, fromY: 35, toX: 140, toY: 75, color: '#ff9800' },
        { fromX: 40, fromY: 50, toX: 35, toY: 55, color: '#9c27b0' },
        { fromX: 140, fromY: 55, toX: 70, toY: 55, color: '#00bcd4' },
        { fromX: 90, fromY: 10, toX: 105, toY: 55, color: '#795548' },
        { fromX: 170, fromY: 15, toX: 140, toY: 55, color: '#607d8b' },
      ].map((item, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', width: 18, height: 14, background: item.color, borderRadius: 2 }}
          animate={{
            x: [item.fromX, item.fromX, item.toX],
            y: [item.fromY, item.fromY, item.toY],
            rotate: [i * 15 - 30, i * 15 - 30, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7], ease: 'easeInOut' }}
        />
      ))}
      {/* Checkmark appearing */}
      <motion.div
        style={{ position: 'absolute', top: 12, right: 20, fontSize: 18, fontWeight: 'bold', color: '#4caf50' }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.3, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.65, 0.75, 0.9, 1] }}
      >
        ✓
      </motion.div>
      <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center', fontSize: 10, color: '#888' }}>解決、整理</div>
    </div>
  );
}
