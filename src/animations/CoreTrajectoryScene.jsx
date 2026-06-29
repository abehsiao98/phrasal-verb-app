import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// ═══════════════════════════════════════
// 核心腦中畫面動畫
// 每個 coreMotion 對應一種「英語母語者腦中的物理畫面」
// 不同 meaning 共用同一個核心軌跡，只換 sceneObject
// ═══════════════════════════════════════

function ScanPenetrateScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 眼睛 (Look = 用眼睛看) ─── */}
      <svg width="56" height="40" viewBox="0 0 56 40"
        style={{ position: 'absolute', left: '4%', top: '38%', marginTop: -20, zIndex: 10 }}>
        <path d="M 3 20 Q 28 0 53 20 Q 28 40 3 20 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2.5" />
        <motion.g
          animate={{ x: [0, 4, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.82, 0.95], ease: 'easeInOut' }}>
          <circle cx="28" cy="20" r="10" fill="#1565c0" />
          <circle cx="28" cy="20" r="5" fill="#0d47a1" />
          <circle cx="25" cy="16" r="2.5" fill="#fff" opacity="0.85" />
          <circle cx="31" cy="23" r="1.2" fill="#fff" opacity="0.35" />
        </motion.g>
        <path d="M 5 20 Q 28 2 51 20" fill="none" stroke="#263238" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* ─── 視線核心射線 ─── */}
      <motion.div
        animate={{ width: ['0%', '0%', '48%', '48%', '0%'], opacity: [0, 0, 0.55, 0.55, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.32, 0.78, 0.92] }}
        style={{
          position: 'absolute', left: '16%', top: '38%', marginTop: -3, height: 6,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.6), rgba(21,101,192,0.05))',
          borderRadius: '0 4px 4px 0', zIndex: 8,
        }}
      />
      {/* ─── 外圍光暈 ─── */}
      <motion.div
        animate={{ width: ['0%', '0%', '50%', '50%', '0%'], opacity: [0, 0, 0.15, 0.15, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.34, 0.78, 0.92] }}
        style={{
          position: 'absolute', left: '15%', top: '38%', marginTop: -10, height: 20,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.2), transparent)',
          borderRadius: '0 10px 10px 0', filter: 'blur(4px)', zIndex: 7,
        }}
      />
      {/* ─── 掃描能量粒子 ─── */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ left: ['16%', '62%'], opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, delay: 0.9 + i * 0.45, ease: 'linear' }}
          style={{
            position: 'absolute', top: '38%', marginTop: -2 + (i - 1) * 4,
            width: 5, height: 5,
            background: 'radial-gradient(circle, #64b5f6, rgba(100,181,246,0))',
            borderRadius: '50%', zIndex: 9,
          }}
        />
      ))}

      {/* ─── 容器 (into = 穿進內部) ─── */}
      <div style={{
        position: 'absolute', right: '5%', top: '50%', marginTop: -44,
        width: 95, height: 88, zIndex: 5,
      }}>
        {/* 內部空間（前壁穿透後才可見） */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#fafafa', borderRadius: 8,
          border: '2px solid #cfd8dc', overflow: 'hidden',
        }}>
          <div style={{ padding: '10px 10px 0', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div style={{ height: 2.5, background: '#e0e0e0', borderRadius: 1, width: '85%' }} />
            <div style={{ height: 2.5, background: '#e0e0e0', borderRadius: 1, width: '55%' }} />
            <div style={{ height: 2.5, background: '#e0e0e0', borderRadius: 1, width: '72%' }} />
            <div style={{ height: 2.5, background: '#e8e8e8', borderRadius: 1, width: '40%' }} />
          </div>
          {/* 光束照亮內部 */}
          <motion.div
            animate={{ opacity: [0, 0, 0, 0.3, 0.3, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.5, 0.78, 0.92] }}
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 25% 45%, rgba(21,101,192,0.18), transparent 70%)',
            }}
          />
          {/* sceneObject — 從深處浮現 */}
          <motion.div
            animate={{
              scale: [0.3, 0.3, 0.3, 0.3, 1.2, 1, 0.3],
              opacity: [0, 0, 0, 0, 1, 1, 0],
              y: [10, 10, 10, 10, -2, 0, 10],
            }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.5, 0.6, 0.78, 0.92] }}
            style={{
              position: 'absolute', bottom: 10, left: '50%', marginLeft: -16,
              fontSize: 30, textAlign: 'center',
              filter: 'drop-shadow(0 2px 8px rgba(21,101,192,0.35))',
            }}
          >
            {obj.emoji}
          </motion.div>
        </div>

        {/* 前壁蓋板（into 的屏障 — 被視線穿透後變透明） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0.04, 0.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.32, 0.42, 0.5, 0.78, 0.92] }}
          style={{
            position: 'absolute', inset: 0,
            background: '#eceff1', border: '2.5px solid #78909c', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="24" height="30" viewBox="0 0 24 30" style={{ opacity: 0.3 }}>
            <rect x="2" y="14" width="20" height="14" rx="3" fill="#90a4ae" />
            <path d="M 7 14 V 9 A 5 5 0 0 1 17 9 V 14" fill="none" stroke="#90a4ae" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="22" r="2" fill="#607d8b" />
          </svg>
        </motion.div>

        {/* 穿透瞬間衝擊光 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 2, 0], opacity: [0, 0, 0, 0.7, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.48, 0.6] }}
          style={{
            position: 'absolute', left: -8, top: '50%', marginTop: -22,
            width: 44, height: 44,
            background: 'radial-gradient(circle, rgba(255,193,7,0.5), rgba(255,193,7,0) 70%)',
            borderRadius: '50%', zIndex: 6,
          }}
        />
      </div>

      {/* ─── 發現閃光環 ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 0, 1.6, 2.2], opacity: [0, 0, 0, 0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.56, 0.64, 0.76] }}
        style={{
          position: 'absolute', right: 'calc(5% + 28px)', top: '50%', marginTop: -18,
          width: 36, height: 36,
          border: '2px solid rgba(21,101,192,0.4)', borderRadius: '50%', zIndex: 6,
        }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 8, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1565c0',
          textShadow: '0 0 8px rgba(21,101,192,0.15)',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeDescendScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 高台（代表「高高在上」的位置） ─── */}
      <div style={{
        position: 'absolute', left: '6%', top: 10, width: 70, height: 18,
        background: 'linear-gradient(180deg, #eceff1, #cfd8dc)',
        borderRadius: '4px 4px 0 0', border: '1.5px solid #b0bec5', borderBottom: 'none',
      }} />
      <div style={{
        position: 'absolute', left: 'calc(6% + 10px)', top: 28, width: 50, height: 6,
        background: '#b0bec5', borderRadius: 2,
      }} />
      <div style={{
        position: 'absolute', left: 'calc(6% + 20px)', top: 34, width: 30, height: 50,
        background: 'linear-gradient(180deg, #cfd8dc, #e0e0e0)',
        borderLeft: '1.5px solid #b0bec5', borderRight: '1.5px solid #b0bec5',
      }} />

      {/* ─── 眼睛（高台上，居高臨下） ─── */}
      <svg width="44" height="32" viewBox="0 0 44 32"
        style={{ position: 'absolute', left: 'calc(6% + 13px)', top: 14, zIndex: 10 }}>
        <path d="M 2 16 Q 22 2 42 16 Q 22 30 2 16 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ y: [0, 3, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.8, 0.95] }}>
          <circle cx="22" cy="16" r="8" fill="#c62828" />
          <circle cx="22" cy="16" r="4" fill="#b71c1c" />
          <circle cx="19" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 16 Q 22 3 40 16" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 視線光束（斜向下射） ─── */}
      <motion.svg
        width="160" height="100"
        style={{ position: 'absolute', left: 'calc(6% + 50px)', top: 22, zIndex: 5 }}
        animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.3, 0.78, 0.92] }}>
        <defs>
          <linearGradient id="beamDown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(198,40,40,0.45)" />
            <stop offset="100%" stopColor="rgba(198,40,40,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 8 L 120 85 L 110 90 L 0 16 Z"
          fill="url(#beamDown)"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.3, 0.78, 0.92] }}
        />
      </motion.svg>

      {/* ─── 掃描粒子（沿光束斜向下移動） ─── */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{
            left: ['18%', '72%'],
            top: ['22%', '82%'],
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.8 + i * 0.5, ease: 'linear' }}
          style={{
            position: 'absolute', width: 4, height: 4,
            background: 'radial-gradient(circle, #ef9a9a, rgba(239,154,154,0))',
            borderRadius: '50%', zIndex: 6,
          }}
        />
      ))}

      {/* ───────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', bottom: 22, left: '40%', right: '5%',
        height: 2, background: '#e0e0e0', borderRadius: 1,
      }} />

      {/* ─── 被看扁的人（底部，被光束壓得越來越小） ─── */}
      <motion.div
        animate={{
          scale: [1, 1, 1, 0.65, 0.65, 1],
          y: [0, 0, 0, 6, 6, 0],
          opacity: [0.9, 0.9, 0.9, 0.5, 0.5, 0.9],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.35, 0.5, 0.78, 0.92] }}
        style={{
          position: 'absolute', right: '15%', bottom: 24, zIndex: 8,
          transformOrigin: 'bottom center',
        }}
      >
        {/* 頭 */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#78909c', margin: '0 auto' }} />
        {/* 身體 */}
        <div style={{ width: 6, height: 20, background: '#78909c', margin: '0 auto', borderRadius: 2 }} />
        {/* 腿 */}
        <div style={{ display: 'flex', gap: 4, marginLeft: 1 }}>
          <div style={{ width: 3, height: 12, background: '#78909c', borderRadius: 1 }} />
          <div style={{ width: 3, height: 12, background: '#78909c', borderRadius: 1 }} />
        </div>
      </motion.div>

      {/* ─── 壓迫感波紋（往下壓的力量） ─── */}
      <motion.div
        animate={{
          scaleX: [0, 0, 0, 1.5, 1.2, 0],
          opacity: [0, 0, 0, 0.4, 0.2, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.5, 0.7, 0.85] }}
        style={{
          position: 'absolute', right: 'calc(15% - 10px)', bottom: 22,
          width: 40, height: 4,
          background: 'radial-gradient(ellipse, rgba(198,40,40,0.3), transparent)',
          borderRadius: '50%', zIndex: 7,
        }}
      />

      {/* ─── sceneObject emoji（人被壓扁時顯示） ─── */}
      <motion.div
        animate={{
          scale: [0, 0, 0, 0, 1.1, 1, 0],
          opacity: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.48, 0.56, 0.78, 0.92] }}
        style={{
          position: 'absolute', right: 'calc(15% + 20px)', bottom: 50,
          fontSize: 22, zIndex: 9,
          filter: 'drop-shadow(0 1px 4px rgba(198,40,40,0.3))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#c62828',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function ScanAscendScene({ obj, meaning }) {
  const isSearch = obj.emoji === '📖';
  const isImprove = obj.emoji === '📈';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 眼睛（左下，瞳孔仰望） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '5%', bottom: 24, zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ y: [2, -3, -3, 2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.78, 0.92] }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 視線光束（左下→右上） ─── */}
      <motion.svg width="140" height="110"
        style={{ position: 'absolute', left: 'calc(5% + 42px)', bottom: 28, zIndex: 5 }}
        animate={{ opacity: [0, 0, 0.45, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.28, 0.78, 0.92] }}>
        <defs>
          <linearGradient id="beamUp" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(21,101,192,0.4)" />
            <stop offset="100%" stopColor="rgba(21,101,192,0)" />
          </linearGradient>
        </defs>
        <path d="M 0 104 L 105 6 L 112 14 L 7 112 Z" fill="url(#beamUp)" />
      </motion.svg>

      {/* ─── 掃描粒子 ─── */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ left: ['14%', '62%'], bottom: ['22%', '82%'], opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.8 + i * 0.4, ease: 'linear' }}
          style={{
            position: 'absolute', width: 4, height: 4,
            background: 'radial-gradient(circle, #64b5f6, transparent)',
            borderRadius: '50%', zIndex: 6,
          }}
        />
      ))}

      {/* ════════════════════════════════════════════════
          場景 A：查一下（📖）— 書頁堆疊，往上翻找到目標
          ════════════════════════════════════════════════ */}
      {isSearch && <>
        {[0, 1, 2, 3, 4].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0.35, 0.35, i <= 2 ? 0.12 : 0.35, i <= 2 ? 0.12 : 0.35, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.5, 0.75, 0.92] }}
            style={{
              position: 'absolute', right: '8%', bottom: 26 + i * 22,
              width: 88, height: 16, background: i === 4 ? '#e3f2fd' : '#f5f5f5',
              border: `1.5px solid ${i === 4 ? '#90caf9' : '#e0e0e0'}`, borderRadius: 3,
              padding: '3px 6px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center',
            }}>
            <div style={{ height: 1.5, background: i === 4 ? '#90caf9' : '#e0e0e0', borderRadius: 1, width: '70%' }} />
            <div style={{ height: 1.5, background: i === 4 ? '#90caf9' : '#e0e0e0', borderRadius: 1, width: '45%' }} />
          </motion.div>
        ))}
        {/* 掃描高亮條 */}
        <motion.div
          animate={{ bottom: [26, 26, 120, 120, 26], opacity: [0, 0.5, 0.5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.55, 0.65, 0.92] }}
          style={{
            position: 'absolute', right: '6%', width: 94, height: 3,
            background: 'linear-gradient(90deg, transparent, rgba(21,101,192,0.4), transparent)',
            borderRadius: 2, zIndex: 8,
          }}
        />
        {/* 找到的字亮起 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.45, 0.55, 0.62, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(8% + 28px)', bottom: 118,
            fontSize: 24, zIndex: 12, filter: 'drop-shadow(0 2px 6px rgba(21,101,192,0.3))',
          }}>
          {obj.emoji}
        </motion.div>
      </>}

      {/* ════════════════════════════════════════════════
          場景 B：有起色（📈）— 折線圖觸底反彈往上走
          ════════════════════════════════════════════════ */}
      {isImprove && <>
        {/* 座標軸 */}
        <div style={{ position: 'absolute', right: '8%', bottom: 26, width: 100, height: 110 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#e0e0e0', borderRadius: 1 }} />
          <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: 2, background: '#e0e0e0', borderRadius: 1 }} />
          {/* 格線 */}
          {[1, 2, 3].map(i => (
            <div key={i} style={{ position: 'absolute', left: 4, right: 0, bottom: i * 27, height: 1, background: '#f5f5f5' }} />
          ))}
        </div>
        {/* 折線：下滑 → 觸底 → 反彈上升 */}
        <svg width="96" height="106" style={{ position: 'absolute', right: 'calc(8% + 2px)', bottom: 28, zIndex: 4 }}>
          <motion.path
            d="M 4 20 L 20 35 L 36 60 L 50 70 L 58 65 L 70 40 L 82 18 L 92 8"
            fill="none" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          />
          <motion.path
            d="M 4 20 L 20 35 L 36 60 L 50 70 L 58 65 L 70 40 L 82 18 L 92 8"
            fill="none" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="200"
            animate={{ strokeDashoffset: [200, 200, 0, 0, 200] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.6, 0.8, 0.95] }}
          />
          {/* 觸底點標記 */}
          <motion.circle cx="50" cy="70" r="3" fill="#ef5350"
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1.3, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.6, 0.8] }}
          />
        </svg>
        {/* 上升箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.8, 0.8, 0], y: [0, 0, 0, -6, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.45, 0.55, 0.65, 0.78, 0.9] }}
          style={{
            position: 'absolute', right: 'calc(8% + 2px)', bottom: 126, zIndex: 8,
            width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
            borderBottom: '8px solid #4caf50',
          }}
        />
        {/* 📈 emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.66, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(8% + 8px)', bottom: 118,
            fontSize: 22, zIndex: 12, filter: 'drop-shadow(0 2px 4px rgba(76,175,80,0.3))',
          }}>
          {obj.emoji}
        </motion.div>
      </>}

      {/* ════════════════════════════════════════════════
          場景 C：去看看（🏠）— 通訊錄往上掃，找到某個人
          ════════════════════════════════════════════════ */}
      {!isSearch && !isImprove && <>
        {/* 通訊錄卡片 */}
        {[0, 1, 2, 3].map(i => {
          const isTarget = i === 3;
          return (
            <motion.div key={i}
              animate={{ opacity: [0.4, 0.4, isTarget ? 1 : 0.15, isTarget ? 1 : 0.15, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.5, 0.75, 0.92] }}
              style={{
                position: 'absolute', right: '8%', bottom: 26 + i * 26,
                width: 88, height: 20, background: isTarget ? '#e8f5e9' : '#fafafa',
                border: `1.5px solid ${isTarget ? '#81c784' : '#e0e0e0'}`, borderRadius: 4,
                display: 'flex', alignItems: 'center', gap: 5, padding: '0 6px',
              }}>
              <div style={{
                width: 12, height: 12, borderRadius: '50%',
                background: isTarget ? '#66bb6a' : '#e0e0e0',
              }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ height: 2, background: isTarget ? '#81c784' : '#e0e0e0', borderRadius: 1, width: '60%' }} />
                <div style={{ height: 1.5, background: isTarget ? '#a5d6a7' : '#eeeeee', borderRadius: 1, width: '40%' }} />
              </div>
            </motion.div>
          );
        })}
        {/* 掃描高亮條 */}
        <motion.div
          animate={{ bottom: [26, 26, 104, 104, 26], opacity: [0, 0.5, 0.5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.52, 0.62, 0.92] }}
          style={{
            position: 'absolute', right: '6%', width: 94, height: 3,
            background: 'linear-gradient(90deg, transparent, rgba(76,175,80,0.5), transparent)',
            borderRadius: 2, zIndex: 8,
          }}
        />
        {/* 找到後 emoji 浮現 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.45, 0.55, 0.62, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(8% + 28px)', bottom: 110,
            fontSize: 24, zIndex: 12, filter: 'drop-shadow(0 2px 6px rgba(76,175,80,0.3))',
          }}>
          {obj.emoji}
        </motion.div>
      </>}

      {/* ─── 發現光環（通用） ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 0, 1.5, 2], opacity: [0, 0, 0, 0, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.62, 0.7, 0.82] }}
        style={{
          position: 'absolute', right: 'calc(8% + 18px)',
          bottom: isImprove ? 112 : isSearch ? 114 : 105,
          width: 36, height: 36,
          border: `2px solid ${isImprove ? 'rgba(76,175,80,0.35)' : 'rgba(21,101,192,0.35)'}`,
          borderRadius: '50%', zIndex: 11,
        }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.58, 0.62, 0.68, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700,
          color: isImprove ? '#2e7d32' : '#1565c0',
        }}>
        {meaning}
      </motion.div>
    </div>
  );
}

function SpinDescendScene({ obj, meaning }) {
  const isReject = obj.label === '提議';

  // 旋鈕從 HIGH（右上 60°）逆時針轉到 LOW（左下 -150°）
  // 時間軸：靜止 → 開始轉 → 轉到底 → 維持 → 還原
  // times: [0, 0.08, 0.42, 0.76, 0.94]

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════
          Turn = 旋轉旋鈕 (左側，核心動詞元素)
          ══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 10 }}>
        <svg width="58" height="58" viewBox="0 0 58 58">
          {/* 底環 */}
          <circle cx="29" cy="29" r="27" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          {/* 旋鈕本體 */}
          <circle cx="29" cy="29" r="22" fill="url(#dialBG)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBG" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          {/* H 刻度（右上 60° 方向） */}
          <line x1="43" y1="16" x2="40" y2="19" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
          {/* L 刻度（左下 -150° 方向） */}
          <line x1="12" y1="44" x2="16" y2="41" stroke="#42a5f5" strokeWidth="2.5" strokeLinecap="round" />
          {/* 中心軸 */}
          <circle cx="29" cy="29" r="4" fill="#333" />
        </svg>

        {/* H / L 標籤 */}
        <div style={{ position: 'absolute', top: -2, right: -14, fontSize: 9, color: '#ef5350', fontWeight: 800 }}>H</div>
        <div style={{ position: 'absolute', bottom: 0, left: -14, fontSize: 9, color: '#42a5f5', fontWeight: 800 }}>L</div>

        {/* 指針：從 60°（H 方向）逆時針轉到 -150°（L 方向） */}
        <motion.div
          animate={{ rotate: [60, 60, -150, -150, 60] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 26, left: 14,
            width: 30, height: 4,
            background: 'linear-gradient(90deg, #555, #d32f2f)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />

        {/* 旋鈕旋轉時的動態圓弧（表示逆時針旋轉動作） */}
        <motion.svg width="58" height="58" viewBox="0 0 58 58"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.42, 0.5] }}>
          <path d="M 40 12 A 20 20 0 1 0 14 46"
            fill="none" stroke="#d32f2f" strokeWidth="1.5" strokeDasharray="5 4"
            strokeLinecap="round" />
          {/* 逆時針箭頭頭部 */}
          <polygon points="12,40 18,46 20,39" fill="#d32f2f" opacity="0.7" />
        </motion.svg>
      </div>

      {/* ══════════════════════════════════════════
          DOWN = 旋轉結果往下的連接軌跡
          (從旋鈕延伸到右邊場景，是視覺上的因果橋)
          ══════════════════════════════════════════ */}
      <motion.svg width="100" height="80"
        style={{ position: 'absolute', left: 'calc(6% + 56px)', top: 'calc(22% + 10px)', zIndex: 6 }}
        animate={{ opacity: [0, 0, 0.55, 0.55, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.28, 0.44, 0.72, 0.86] }}>
        {/* 從旋鈕中心彎向右下方的路徑 */}
        <path d="M 4 20 C 30 20 50 55 90 68"
          fill="none" stroke="#d32f2f" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" />
        {/* 箭頭（往右下） */}
        <polygon points="84,62 94,72 80,74" fill="#d32f2f" opacity="0.8" />
      </motion.svg>

      {/* ══════════════════════════════════════════
          場景 A：婉拒 (提議)
          腦中畫面：旋鈕轉到底 → 提議卡片被「轉下去」面朝下 → 冷掉了
          ══════════════════════════════════════════ */}
      {isReject && <>
        {/* 提議卡片（右上，初始正面朝上） */}
        <motion.div
          animate={{
            y:       [0,    0,    0,    0,    52,   80],
            rotateZ: [0,    0,    0,    0,   -22,  -35],
            opacity: [1,    1,    1,    1,    0.6,   0],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.44, 0.6, 0.72], ease: 'easeIn' }}
          style={{
            position: 'absolute', right: '8%', top: '8%',
            width: 84, height: 60, background: '#fff8e1',
            border: '2px solid #ffcc80', borderRadius: 7,
            padding: '8px 9px', zIndex: 5,
            display: 'flex', flexDirection: 'column', gap: 5,
            boxShadow: '0 3px 10px rgba(0,0,0,0.10)',
          }}
        >
          <div style={{ fontSize: 9, fontWeight: 700, color: '#e65100', letterSpacing: 0.8 }}>OFFER</div>
          <div style={{ height: 2, background: '#ffe0b2', borderRadius: 1, width: '80%' }} />
          <div style={{ height: 2, background: '#ffe0b2', borderRadius: 1, width: '55%' }} />
          <div style={{ height: 2, background: '#ffecb3', borderRadius: 1, width: '70%' }} />
        </motion.div>

        {/* ✕ — 旋鈕轉到底的瞬間出現 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.4, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.36, 0.43, 0.48, 0.52, 0.68, 0.8] }}
          style={{
            position: 'absolute', right: 'calc(8% + 20px)', top: 'calc(8% + 12px)',
            fontSize: 30, fontWeight: 900, color: '#d32f2f', zIndex: 13, lineHeight: 1,
          }}
        >✕</motion.div>

        {/* sceneObject 📋 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.56, 0.72, 0.84] }}
          style={{
            position: 'absolute', right: '21%', top: '14%',
            fontSize: 24, zIndex: 14,
          }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ══════════════════════════════════════════
          場景 B：調低 (音量)
          腦中畫面：旋鈕逆時針轉 → 音量條同步從高降到低
          ══════════════════════════════════════════ */}
      {!isReject && <>
        {/* 音量條（7格，底部對齊，跟旋鈕同步縮小） */}
        <div style={{
          position: 'absolute', right: '10%', top: '8%', bottom: '20%',
          width: 36, display: 'flex', flexDirection: 'column-reverse', gap: 3, zIndex: 4,
          alignItems: 'stretch',
        }}>
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <motion.div key={i}
              animate={{
                scaleY: [1, 1, i < 2 ? 1 : 0, i < 2 ? 1 : 0, 1],
                backgroundColor: [
                  i >= 5 ? '#ef5350' : i >= 3 ? '#ff9800' : '#4caf50',
                  i >= 5 ? '#ef5350' : i >= 3 ? '#ff9800' : '#4caf50',
                  i < 2 ? '#4caf50' : '#e0e0e0',
                  i < 2 ? '#4caf50' : '#e0e0e0',
                  i >= 5 ? '#ef5350' : i >= 3 ? '#ff9800' : '#4caf50',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
              style={{ height: 10, borderRadius: 2, transformOrigin: 'bottom center' }}
            />
          ))}
        </div>

        {/* 連接線：旋鈕→音量條（視覺因果橋，轉動時亮起） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.18, 0.18, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.6, 0.76] }}
          style={{
            position: 'absolute',
            left: 'calc(6% + 30px)', right: '10%',
            top: 'calc(22% + 29px)', height: 2,
            background: 'linear-gradient(90deg, #d32f2f, #ff9800)',
            borderRadius: 1,
          }}
        />

        {/* 🔉 emoji — 旋鈕轉完後出現 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.56, 0.72, 0.88] }}
          style={{
            position: 'absolute', right: 'calc(10% + 42px)', top: '34%',
            fontSize: 26, zIndex: 12,
          }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#d32f2f',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinAscendScene({ obj, meaning }) {
  const isAppear = obj.label === '失蹤物';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════
          Turn = 旋轉旋鈕（左側，順時針 = 往上）
          ══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', left: '6%', top: '42%', zIndex: 10 }}>
        <svg width="58" height="58" viewBox="0 0 58 58">
          <circle cx="29" cy="29" r="27" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          <circle cx="29" cy="29" r="22" fill="url(#dialBGUp)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBGUp" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          {/* L 刻度（左下 -150°） */}
          <line x1="12" y1="44" x2="16" y2="41" stroke="#42a5f5" strokeWidth="2.5" strokeLinecap="round" />
          {/* H 刻度（右上 60°） */}
          <line x1="43" y1="16" x2="40" y2="19" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29" cy="29" r="4" fill="#333" />
        </svg>
        <div style={{ position: 'absolute', bottom: 0, left: -14, fontSize: 9, color: '#42a5f5', fontWeight: 800 }}>L</div>
        <div style={{ position: 'absolute', top: -2, right: -14, fontSize: 9, color: '#ef5350', fontWeight: 800 }}>H</div>

        {/* 指針：從 L（-150°）順時針轉到 H（60°）*/}
        <motion.div
          animate={{ rotate: [-150, -150, 60, 60, -150] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 26, left: 14,
            width: 30, height: 4,
            background: 'linear-gradient(90deg, #555, #e53935)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />

        {/* 順時針旋轉弧線 */}
        <motion.svg width="58" height="58" viewBox="0 0 58 58"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.42, 0.5] }}>
          <path d="M 14 46 A 20 20 0 1 1 44 14"
            fill="none" stroke="#e53935" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
          <polygon points="40,10 46,18 38,18" fill="#e53935" opacity="0.7" />
        </motion.svg>
      </div>

      {/* ══════════════════════════════════════════
          UP 連接軌跡：從旋鈕往右上延伸
          ══════════════════════════════════════════ */}
      <motion.svg width="100" height="80"
        style={{ position: 'absolute', left: 'calc(6% + 56px)', top: 'calc(42% - 55px)', zIndex: 6 }}
        animate={{ opacity: [0, 0, 0.55, 0.55, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.28, 0.44, 0.72, 0.86] }}>
        <path d="M 4 68 C 30 68 50 20 90 8"
          fill="none" stroke="#e53935" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" />
        <polygon points="86,4 96,12 82,14" fill="#e53935" opacity="0.8" />
      </motion.svg>

      {/* ════════════════════════════════════════════
          場景 A：意外出現（失蹤物）
          腦中畫面：沉底的東西「轉上來」穿過水面，意外浮現
          ════════════════════════════════════════════ */}
      {isAppear && <>
        {/* 水面線（右側） */}
        <div style={{
          position: 'absolute', right: '8%', top: '52%',
          width: 90, height: 2, background: '#90caf9', borderRadius: 1, zIndex: 4,
        }} />
        {/* 水面下的暗色區域 */}
        <div style={{
          position: 'absolute', right: '8%', top: '52%', bottom: '15%',
          width: 90,
          background: 'linear-gradient(180deg, rgba(144,202,249,0.2), rgba(21,101,192,0.08))',
          zIndex: 3,
        }} />
        {/* 水面上的氣泡（東西要浮上來的預兆） */}
        {[0, 1].map(i => (
          <motion.div key={i}
            animate={{ y: [0, 0, -28, -28, 0], opacity: [0, 0.5, 0, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.35, 0.4, 0.5], delay: i * 0.3 }}
            style={{
              position: 'absolute',
              right: `calc(8% + ${20 + i * 25}px)`, top: '70%',
              width: 5 + i * 3, height: 5 + i * 3,
              border: '1.5px solid #90caf9', borderRadius: '50%', zIndex: 5,
            }}
          />
        ))}
        {/* sceneObject 從水面下浮出 */}
        <motion.div
          animate={{
            y:       [30,  30,  30,   0,   -18,  -18,   30],
            opacity: [0,   0,   0.3,  1,    1,    1,     0],
            scale:   [0.5, 0.5, 0.7,  1.2,  1,    1,    0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.44, 0.52, 0.76, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(8% + 26px)', top: '32%',
            fontSize: 30, zIndex: 10,
            filter: 'drop-shadow(0 2px 8px rgba(21,101,192,0.3))',
          }}
        >{obj.emoji}</motion.div>
        {/* 浮現瞬間的漣漪 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.5, 2.2], opacity: [0, 0, 0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.38, 0.42, 0.48, 0.6] }}
          style={{
            position: 'absolute', right: 'calc(8% + 18px)', top: '49%',
            width: 45, height: 10,
            border: '1.5px solid #90caf9', borderRadius: '50%', zIndex: 6,
          }}
        />
      </>}

      {/* ════════════════════════════════════════════
          場景 B：調大聲（音量）
          腦中畫面：旋鈕順時針轉 → 音量條從底部往上長
          ════════════════════════════════════════════ */}
      {!isAppear && <>
        {/* 音量條（7格，scaleY 從 0 往上長） */}
        <div style={{
          position: 'absolute', right: '10%', top: '10%', bottom: '20%',
          width: 36, display: 'flex', flexDirection: 'column-reverse', gap: 3, zIndex: 4,
          alignItems: 'stretch',
        }}>
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <motion.div key={i}
              animate={{
                scaleY: [0, 0, i < 2 ? 0.3 : 0, i < 6 ? 1 : 0.4, 0],
                backgroundColor: [
                  '#e0e0e0',
                  '#e0e0e0',
                  i < 2 ? '#4caf50' : '#e0e0e0',
                  i >= 5 ? '#ef5350' : i >= 3 ? '#ff9800' : '#4caf50',
                  '#e0e0e0',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.44, 0.94], ease: 'easeOut' }}
              style={{ height: 10, borderRadius: 2, transformOrigin: 'bottom center' }}
            />
          ))}
        </div>

        {/* 連接線：旋鈕→音量條 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.18, 0.18, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.25, 0.6, 0.76] }}
          style={{
            position: 'absolute',
            left: 'calc(6% + 30px)', right: '10%',
            top: 'calc(42% + 29px)', height: 2,
            background: 'linear-gradient(90deg, #e53935, #ff9800)',
            borderRadius: 1,
          }}
        />

        {/* 🔊 emoji — 轉到最高點後出現 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.56, 0.72, 0.88] }}
          style={{
            position: 'absolute', right: 'calc(10% + 42px)', top: '30%',
            fontSize: 26, zIndex: 12,
          }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#e53935',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinReverseScene({ obj, meaning }) {
  const isBody = obj.label === '人';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════
          Turn = 旋鈕逆時針轉 180°（around = 轉到正對面）
          ══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', left: '4%', top: '24%', zIndex: 10 }}>
        <svg width="52" height="52" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="24" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          <circle cx="26" cy="26" r="19" fill="url(#dialBGRev)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBGRev" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          <circle cx="26" cy="26" r="3.5" fill="#333" />
        </svg>
        {/* 指針：從 0° 逆時針轉到 -180°（指向正對面） */}
        <motion.div
          animate={{ rotate: [0, 0, -180, -180, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 23, left: 11,
            width: 26, height: 4,
            background: 'linear-gradient(90deg, #555, #7b1fa2)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />
        {/* 旋轉弧線 */}
        <motion.svg width="52" height="52" viewBox="0 0 52 52"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.45, 0.45, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.44, 0.52] }}>
          <path d="M 26 6 A 20 20 0 0 0 26 46"
            fill="none" stroke="#7b1fa2" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
          <polygon points="22,44 28,46 26,38" fill="#7b1fa2" opacity="0.7" />
        </motion.svg>
      </div>

      {/* ══════════════════════════════════════════
          Around = 大 U-turn 弧線（中央，代表完整方向逆轉）
          ══════════════════════════════════════════ */}
      <motion.svg
        style={{ position: 'absolute', inset: 0, zIndex: 5 }}
        viewBox="0 0 220 120"
        preserveAspectRatio="none"
      >
        {/* U-turn 路徑：上段往右 → 右弧 → 下段往左 */}
        <motion.path
          d="M 68 36 L 158 36 A 24 24 0 0 1 158 84 L 68 84"
          fill="none" stroke="#7b1fa2" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          animate={{ pathLength: [0, 0, 1, 1, 0], opacity: [0.3, 0.3, 0.75, 0.75, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94] }}
        />
        {/* 箭頭（底部弧線終點，指向左）*/}
        <motion.polygon
          points="74,78 68,84 74,90"
          fill="#7b1fa2"
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.48, 0.76, 0.94] }}
        />
      </motion.svg>

      {/* ════════ Scene A：轉身 ════════ */}
      {isBody && <>
        {/* 轉身前：🚶 往右走（上弧段）*/}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.48, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '33%', top: '12%', fontSize: 26, zIndex: 8 }}
        >{obj.emoji} →</motion.div>

        {/* 轉身後：🚶 往左走（下弧段，水平翻轉）*/}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.5, 0.76, 0.94] }}
          style={{
            position: 'absolute', left: '33%', top: '60%',
            fontSize: 26, zIndex: 8, transform: 'scaleX(-1)',
          }}
        >{obj.emoji} →</motion.div>
      </>}

      {/* ════════ Scene B：扭轉局面 ════════ */}
      {!isBody && <>
        {/* 轉前：📉 下滑局面（上弧段）*/}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.48, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '32%', top: '10%', fontSize: 28, zIndex: 8 }}
        >{obj.emoji}</motion.div>

        {/* 轉後：📈 好轉（下弧段）*/}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.52, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '32%', top: '58%', fontSize: 28, zIndex: 8 }}
        >📈</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#7b1fa2',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinConnectScene({ obj, meaning }) {
  const isPower = obj.label === '電器';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* Turn = 旋鈕從 OFF（左下 -180°）順時針轉到 ON（右上 60°）*/}
      <div style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 10 }}>
        <svg width="58" height="58" viewBox="0 0 58 58">
          <circle cx="29" cy="29" r="27" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          <circle cx="29" cy="29" r="22" fill="url(#dialBGConnect)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBGConnect" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          <line x1="14" y1="44" x2="18" y2="41" stroke="#9e9e9e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="43" y1="16" x2="40" y2="19" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29" cy="29" r="4" fill="#333" />
        </svg>
        <div style={{ position: 'absolute', bottom: 2, left: -18, fontSize: 8, color: '#9e9e9e', fontWeight: 800 }}>OFF</div>
        <div style={{ position: 'absolute', top: -2, right: -16, fontSize: 8, color: '#4caf50', fontWeight: 800 }}>ON</div>

        {/* 指針：從 OFF（-180°）順時針轉到 ON（60°）*/}
        <motion.div
          animate={{ rotate: [-180, -180, 60, 60, -180] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 26, left: 14,
            width: 30, height: 4,
            background: 'linear-gradient(90deg, #555, #43a047)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />
        {/* 順時針弧線 */}
        <motion.svg width="58" height="58" viewBox="0 0 58 58"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.42, 0.52] }}>
          <path d="M 14 46 A 20 20 0 1 1 40 12"
            fill="none" stroke="#43a047" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
          <polygon points="46,18 40,12 38,19" fill="#43a047" opacity="0.7" />
        </motion.svg>
      </div>

      {/* On = 連接線從旋鈕延伸到右側物件（建立連接）*/}
      <motion.div
        animate={{ width: ['0%', '0%', '38%', '38%', '0%'], opacity: [0, 0, 0.6, 0.6, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94] }}
        style={{
          position: 'absolute', left: 'calc(6% + 60px)', top: 'calc(28% + 27px)', marginTop: -2,
          height: 3,
          background: 'linear-gradient(90deg, rgba(76,175,80,0.6), rgba(76,175,80,0.1))',
          borderRadius: '0 2px 2px 0', zIndex: 6,
        }}
      />
      {/* 接通瞬間的閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 2.5, 0], opacity: [0, 0, 0, 0.85, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.38, 0.42, 0.46, 0.54] }}
        style={{
          position: 'absolute', left: '48%', top: 'calc(28% + 20px)',
          width: 16, height: 16,
          background: 'radial-gradient(circle, rgba(255,235,59,0.9), transparent 70%)',
          borderRadius: '50%', zIndex: 9,
        }}
      />

      {/* ════════ Scene A：打開電器 ════════ */}
      {isPower && <>
        {/* 燈泡（初始暗） */}
        <motion.div
          animate={{ filter: ['brightness(0.3)', 'brightness(0.3)', 'brightness(0.3)', 'brightness(1.3)', 'brightness(1.3)', 'brightness(0.3)'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.5, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '14%', fontSize: 38, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 亮起後的光暈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.45, 0.45, 0], scale: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.5, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(10% - 14px)', top: 'calc(14% - 14px)',
            width: 78, height: 78,
            background: 'radial-gradient(circle, rgba(255,235,59,0.4), transparent 70%)',
            borderRadius: '50%', zIndex: 3,
          }}
        />
        {/* ON 標籤 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.5, 0.56, 0.76, 0.9] }}
          style={{
            position: 'absolute', right: 'calc(10% - 2px)', top: 'calc(14% + 42px)',
            fontSize: 11, fontWeight: 800, color: '#4caf50', letterSpacing: 1, zIndex: 8,
          }}
        >ON</motion.div>
      </>}

      {/* ════════ Scene B：讓人來電 ════════ */}
      {!isPower && <>
        {/* ❤️ 初始灰階（無電）→ 接通後變紅跳動 */}
        <motion.div
          animate={{
            scale:   [0.9, 0.9, 0.9, 1.2, 1, 1.07, 1, 0.9],
            filter: [
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
              'grayscale(0%) drop-shadow(0 0 8px rgba(244,67,54,0.6))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(0%) drop-shadow(0 0 8px rgba(244,67,54,0.6))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.5, 0.56, 0.62, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '12%', top: '12%', fontSize: 36, zIndex: 5 }}
        >❤️</motion.div>
        {/* 接通後暖光光暈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.4, 0.4, 0], scale: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.5, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(12% - 12px)', top: 'calc(12% - 12px)',
            width: 72, height: 72,
            background: 'radial-gradient(circle, rgba(244,67,54,0.3), transparent 70%)',
            borderRadius: '50%', zIndex: 3,
          }}
        />
        {/* 😍 emoji（來電後浮出） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.52, 0.6, 0.74, 0.88] }}
          style={{ position: 'absolute', right: 'calc(12% - 2px)', top: '38%', fontSize: 28, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#43a047',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinDetachScene({ obj, meaning }) {
  const isPower = obj.label === '電器';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════
          Turn = 旋鈕從 ON（右上 60°）逆時針轉到 OFF（左下 -180°）
          ══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 10 }}>
        <svg width="58" height="58" viewBox="0 0 58 58">
          <circle cx="29" cy="29" r="27" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          <circle cx="29" cy="29" r="22" fill="url(#dialBGDetach)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBGDetach" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          {/* ON 刻度（右上） */}
          <line x1="43" y1="16" x2="40" y2="19" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" />
          {/* OFF 刻度（左下） */}
          <line x1="14" y1="44" x2="18" y2="41" stroke="#9e9e9e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29" cy="29" r="4" fill="#333" />
        </svg>
        <div style={{ position: 'absolute', top: -2, right: -16, fontSize: 8, color: '#4caf50', fontWeight: 800 }}>ON</div>
        <div style={{ position: 'absolute', bottom: 2, left: -18, fontSize: 8, color: '#9e9e9e', fontWeight: 800 }}>OFF</div>

        {/* 指針：從 ON（60°）逆時針轉到 OFF（-180°）*/}
        <motion.div
          animate={{ rotate: [60, 60, -180, -180, 60] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 26, left: 14,
            width: 30, height: 4,
            background: 'linear-gradient(90deg, #555, #ef5350)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />
        {/* 逆時針弧線 */}
        <motion.svg width="58" height="58" viewBox="0 0 58 58"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.42, 0.52] }}>
          <path d="M 40 12 A 20 20 0 1 0 14 46"
            fill="none" stroke="#ef5350" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
          <polygon points="12,40 18,46 20,39" fill="#ef5350" opacity="0.7" />
        </motion.svg>
      </div>

      {/* ══════════════════════════════════════════
          Off = 連接線斷開（旋鈕→右側物件，轉到 OFF 時斷）
          ══════════════════════════════════════════ */}
      {/* 連接線左半（旋鈕側，OFF 後縮回） */}
      <motion.div
        animate={{ width: ['38%', '38%', '38%', '0%', '0%', '38%'], opacity: [0.5, 0.5, 0.5, 0, 0, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.46, 0.76, 0.94] }}
        style={{
          position: 'absolute', left: 'calc(6% + 60px)', top: 'calc(28% + 27px)', marginTop: -2,
          height: 3,
          background: 'linear-gradient(90deg, rgba(76,175,80,0.6), rgba(76,175,80,0.1))',
          borderRadius: '0 2px 2px 0', zIndex: 6,
        }}
      />
      {/* 斷開瞬間的閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 2.5, 0], opacity: [0, 0, 0, 0.8, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.38, 0.42, 0.46, 0.54] }}
        style={{
          position: 'absolute', left: '48%', top: 'calc(28% + 20px)',
          width: 16, height: 16,
          background: 'radial-gradient(circle, rgba(255,193,7,0.8), transparent 70%)',
          borderRadius: '50%', zIndex: 9,
        }}
      />

      {/* ════════ Scene A：關掉電器 ════════ */}
      {isPower && <>
        {/* 燈泡（右側，初始發亮） */}
        {/* 光暈（ON 時顯示） */}
        <motion.div
          animate={{ opacity: [0.4, 0.4, 0.4, 0, 0, 0.4], scale: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.46, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(10% - 14px)', top: 'calc(14% - 14px)',
            width: 78, height: 78,
            background: 'radial-gradient(circle, rgba(255,235,59,0.35), transparent 70%)',
            borderRadius: '50%', zIndex: 3,
          }}
        />
        {/* 燈泡 emoji */}
        <motion.div
          animate={{ filter: ['brightness(1.2)', 'brightness(1.2)', 'brightness(1.2)', 'brightness(0.3)', 'brightness(0.3)', 'brightness(1.2)'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.48, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: '10%', top: '14%',
            fontSize: 38, zIndex: 5,
          }}
        >{obj.emoji}</motion.div>
        {/* OFF 標籤（斷電後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.5, 0.56, 0.76, 0.9] }}
          style={{
            position: 'absolute', right: 'calc(10% - 4px)', top: 'calc(14% + 42px)',
            fontSize: 11, fontWeight: 800, color: '#9e9e9e', letterSpacing: 1, zIndex: 8,
          }}
        >OFF</motion.div>
      </>}

      {/* ════════ Scene B：讓人倒胃口 ════════ */}
      {!isPower && <>
        {/* ❤️ 好感之心（右側，初始跳動發光，斷電後熄滅）*/}
        {/* 暖光光暈（ON 時顯示） */}
        <motion.div
          animate={{ opacity: [0.45, 0.45, 0.45, 0, 0, 0.45], scale: [1, 1.1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.4, 0.48, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(12% - 12px)', top: 'calc(12% - 12px)',
            width: 72, height: 72,
            background: 'radial-gradient(circle, rgba(244,67,54,0.3), transparent 70%)',
            borderRadius: '50%', zIndex: 3,
          }}
        />
        {/* ❤️ 跳動（ON 時） → 縮小熄滅（OFF 後） */}
        <motion.div
          animate={{
            scale:   [1, 1.12, 1, 1.08, 1,  0.4, 0.4, 1],
            opacity: [1, 1,    1, 1,    1,  0.15, 0.15, 1],
            filter: [
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
              'grayscale(100%) drop-shadow(0 0 0px transparent)',
              'grayscale(0%) drop-shadow(0 0 6px rgba(244,67,54,0.5))',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 0.4, 0.48, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '12%', top: '12%', fontSize: 36, zIndex: 5 }}
        >❤️</motion.div>

        {/* ✕ 斷電瞬間出現在心的正中央 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.5, 1.1, 1.1, 0], opacity: [0, 0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.46, 0.51, 0.55, 0.72, 0.84] }}
          style={{
            position: 'absolute', right: 'calc(12% + 8px)', top: 'calc(12% + 8px)',
            fontSize: 22, fontWeight: 900, color: '#757575', zIndex: 10, lineHeight: 1,
          }}
        >✕</motion.div>

        {/* 😒 emoji（好感熄滅後浮出） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.5, 0.58, 0.74, 0.88] }}
          style={{
            position: 'absolute', right: 'calc(12% - 2px)', top: '38%',
            fontSize: 28, zIndex: 12,
          }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#616161',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinExitScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════
          Turn = 旋轉旋鈕（左側，轉完整一圈 = 啟動揭曉）
          ══════════════════════════════════════════ */}
      <div style={{ position: 'absolute', left: '6%', top: '30%', zIndex: 10 }}>
        <svg width="58" height="58" viewBox="0 0 58 58">
          <circle cx="29" cy="29" r="27" fill="none" stroke="#e8e8e8" strokeWidth="2" />
          <circle cx="29" cy="29" r="22" fill="url(#dialBGExit)" stroke="#9e9e9e" strokeWidth="1.5" />
          <defs>
            <radialGradient id="dialBGExit" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#f8f8f8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </radialGradient>
          </defs>
          <circle cx="29" cy="29" r="4" fill="#333" />
        </svg>

        {/* 指針：順時針完整旋轉（代表「轉動讓結果浮現」）*/}
        <motion.div
          animate={{ rotate: [0, 0, 360, 360, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: 26, left: 14,
            width: 30, height: 4,
            background: 'linear-gradient(90deg, #555, #7b1fa2)',
            borderRadius: 2, transformOrigin: 'right center',
          }}
        />
        {/* 旋轉弧 */}
        <motion.svg width="58" height="58" viewBox="0 0 58 58"
          style={{ position: 'absolute', top: 0, left: 0 }}
          animate={{ opacity: [0, 0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.42, 0.52] }}>
          <circle cx="29" cy="29" r="20"
            fill="none" stroke="#7b1fa2" strokeWidth="1.5"
            strokeDasharray="6 4" strokeLinecap="round" />
        </motion.svg>
      </div>

      {/* ══════════════════════════════════════════
          OUT 軌跡：從旋鈕水平射向右邊密封盒
          ══════════════════════════════════════════ */}
      <motion.div
        animate={{ width: ['0%', '0%', '46%', '46%', '0%'], opacity: [0, 0, 0.45, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.28, 0.42, 0.72, 0.86] }}
        style={{
          position: 'absolute', left: 'calc(6% + 60px)', top: 'calc(30% + 27px)', marginTop: -2,
          height: 4,
          background: 'linear-gradient(90deg, rgba(123,31,162,0.5), rgba(123,31,162,0.05))',
          borderRadius: '0 3px 3px 0', zIndex: 6,
        }}
      />
      <motion.div
        animate={{ opacity: [0, 0, 0.65, 0.65, 0], x: [0, 0, 6, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.43, 0.72, 0.86] }}
        style={{
          position: 'absolute', right: '11%', top: 'calc(30% + 23px)',
          width: 0, height: 0,
          borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
          borderLeft: '9px solid rgba(123,31,162,0.6)', zIndex: 7,
        }}
      />

      {/* ══════════════════════════════════════════
          密封盒子（右側）
          轉動前：正面有大問號（結果未知）
          轉動後：蓋子彈開，結果從裡面飛出來
          ══════════════════════════════════════════ */}
      {/* 盒身 */}
      <div style={{
        position: 'absolute', right: '8%', top: '12%',
        width: 80, height: 70, background: '#f3e5f5',
        border: '2.5px solid #ce93d8', borderRadius: 8,
        zIndex: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(123,31,162,0.12)',
      }}>
        {/* 問號（盒子開啟前顯示） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.48, 0.76, 0.94] }}
          style={{ fontSize: 24, color: '#9c27b0', fontWeight: 900, lineHeight: 1 }}
        >?</motion.div>
      </div>

      {/* 盒蓋（旋鈕轉完後彈開往上飛） */}
      <motion.div
        animate={{
          y: [0, 0, 0, -35, -55],
          rotate: [0, 0, 0, -25, -40],
          opacity: [1, 1, 1, 0.7, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.5, 0.6] }}
        style={{
          position: 'absolute', right: '8%', top: '10%',
          width: 80, height: 12,
          background: '#9c27b0', borderRadius: '6px 6px 0 0', zIndex: 9,
        }}
      />

      {/* 結果 emoji 從盒內飛出（往右上彈出）*/}
      <motion.div
        animate={{
          scale:   [0, 0, 0, 0, 1.4, 1,   0],
          opacity: [0, 0, 0, 0, 1,   1,   0],
          x:       [0, 0, 0, 0, 12,  16,  16],
          y:       [0, 0, 0, 0, -22, -28, -28],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.44, 0.52, 0.7, 0.84] }}
        style={{
          position: 'absolute', right: 'calc(8% + 20px)', top: 'calc(12% + 18px)',
          fontSize: 30, zIndex: 13,
          filter: 'drop-shadow(0 3px 10px rgba(123,31,162,0.35))',
        }}
      >{obj.emoji}</motion.div>

      {/* 揭曉閃光環 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 0, 1.5, 2.5], opacity: [0, 0, 0, 0, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.46, 0.5, 0.55, 0.68] }}
        style={{
          position: 'absolute', right: 'calc(8% + 16px)', top: 'calc(12% + 14px)',
          width: 40, height: 40,
          border: '2px solid rgba(123,31,162,0.35)', borderRadius: '50%', zIndex: 8,
        }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.56, 0.62, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#7b1fa2',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function SpinPenetrateScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 變形門（中央，into = 穿過這道門就質變） ─── */}
      <div style={{
        position: 'absolute', left: '46%', top: '10%', bottom: '18%',
        width: 8, background: 'linear-gradient(180deg, #7b1fa2, #ce93d8, #7b1fa2)',
        borderRadius: 4, zIndex: 8,
        boxShadow: '0 0 12px rgba(123,31,162,0.3)',
      }} />
      {/* 門的光暈 */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute', left: 'calc(46% - 8px)', top: '8%', bottom: '16%',
          width: 24, background: 'linear-gradient(180deg, transparent, rgba(123,31,162,0.1), transparent)',
          borderRadius: 12, zIndex: 7,
        }}
      />

      {/* ─── 變形前的物體（左側，旋轉著靠近門） ─── */}
      <motion.div
        animate={{
          x: [0, 0, 45, 45, 0],
          rotate: [0, 0, 360, 360, 0],
          scale: [1, 1, 0.6, 0, 0],
          opacity: [1, 1, 0.8, 0, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.38, 0.42, 0.95] }}
        style={{
          position: 'absolute', left: '14%', top: '32%',
          width: 32, height: 32, background: '#90a4ae',
          borderRadius: 4, border: '2px solid #607d8b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, zIndex: 10,
        }}
      >
        🟦
      </motion.div>

      {/* ─── 旋轉軌跡線（Turn = 旋轉的動態） ─── */}
      <motion.svg width="40" height="40"
        style={{ position: 'absolute', left: 'calc(14% + 28px)', top: 'calc(32% - 4px)', zIndex: 6 }}
        animate={{ opacity: [0, 0, 0.4, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.2, 0.35, 0.42] }}>
        <motion.path
          d="M 5 20 A 15 15 0 1 1 35 20"
          fill="none" stroke="#607d8b" strokeWidth="2" strokeDasharray="6 4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '20px 20px' }}
        />
      </motion.svg>

      {/* ─── 穿越瞬間的閃光 ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 2, 0], opacity: [0, 0, 0, 0.7, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.4, 0.46, 0.55] }}
        style={{
          position: 'absolute', left: 'calc(46% - 10px)', top: '35%',
          width: 28, height: 28,
          background: 'radial-gradient(circle, rgba(123,31,162,0.5), transparent 70%)',
          borderRadius: '50%', zIndex: 12,
        }}
      />

      {/* ─── 變形後的物體（右側，從門的另一邊出現，完全不同） ─── */}
      <motion.div
        animate={{
          x: [0, 0, 0, 0, 30, 30, 0],
          scale: [0, 0, 0, 0, 1.15, 1, 0],
          opacity: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.46, 0.55, 0.8, 0.93] }}
        style={{
          position: 'absolute', left: '54%', top: '28%',
          fontSize: 36, zIndex: 10,
          filter: 'drop-shadow(0 3px 8px rgba(123,31,162,0.3))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── Before → After 標籤 ─── */}
      <motion.div
        animate={{ opacity: [0.4, 0.4, 0.4, 0, 0, 0, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.35, 0.42, 0.5, 0.9, 0.95] }}
        style={{ position: 'absolute', left: '15%', bottom: '22%', fontSize: 9, color: '#90a4ae', fontWeight: 600 }}
      >
        BEFORE
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0.6, 0.6, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.46, 0.5, 0.56, 0.8, 0.93] }}
        style={{ position: 'absolute', right: '12%', bottom: '22%', fontSize: 9, color: '#7b1fa2', fontWeight: 700 }}
      >
        AFTER
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.42, 0.48, 0.52, 0.56, 0.62, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#7b1fa2',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeAdvanceScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 時間軸（左=現在，右=未來） ─── */}
      <div style={{
        position: 'absolute', bottom: 32, left: '8%', right: '8%',
        height: 2, background: '#e0e0e0', borderRadius: 1,
      }} />
      <div style={{ position: 'absolute', bottom: 18, left: '8%', fontSize: 9, color: '#90a4ae', fontWeight: 700 }}>NOW</div>
      <div style={{ position: 'absolute', bottom: 18, right: '8%', fontSize: 9, color: '#bdbdbd', fontWeight: 600 }}>FUTURE</div>
      {/* 時間軸箭頭 */}
      <div style={{
        position: 'absolute', bottom: 29, right: 'calc(8% - 6px)',
        width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
        borderLeft: '8px solid #e0e0e0',
      }} />

      {/* ─── 眼睛（左側「現在」，滿懷期待往右看） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [0, 4, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.8, 0.95] }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 期待的視線（帶星星粒子，往右射向未來） ─── */}
      <motion.div
        animate={{ width: ['0%', '0%', '52%', '52%', '0%'], opacity: [0, 0, 0.4, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.3, 0.75, 0.9] }}
        style={{
          position: 'absolute', left: '18%', top: '35%', marginTop: -3, height: 5,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.4), rgba(255,183,77,0.2))',
          borderRadius: '0 3px 3px 0', zIndex: 5,
        }}
      />
      {/* 期待粒子（星星感） */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ left: ['18%', '72%'], opacity: [0, 0.9, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 + i * 0.5, ease: 'linear' }}
          style={{
            position: 'absolute', top: '34%', marginTop: (i - 1) * 5,
            width: 5, height: 5,
            background: 'radial-gradient(circle, #ffb74d, transparent)',
            borderRadius: '50%', zIndex: 6,
          }}
        />
      ))}

      {/* ─── 未來的好事（右側，發光等待中） ─── */}
      <motion.div
        animate={{
          scale: [0.8, 0.8, 0.8, 1.15, 1, 1, 0.8],
          opacity: [0.3, 0.3, 0.3, 1, 1, 1, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.35, 0.48, 0.55, 0.78, 0.92] }}
        style={{
          position: 'absolute', right: '12%', top: '22%',
          fontSize: 36, zIndex: 10,
          filter: 'drop-shadow(0 2px 8px rgba(255,152,0,0.4))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── 好事的光暈（溫暖的金色光芒） ─── */}
      <motion.div
        animate={{
          scale: [0.6, 0.6, 0.6, 1.4, 1.2, 1.2, 0.6],
          opacity: [0.05, 0.05, 0.05, 0.3, 0.2, 0.2, 0.05],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.35, 0.48, 0.55, 0.78, 0.92] }}
        style={{
          position: 'absolute', right: 'calc(12% - 16px)', top: 'calc(22% - 16px)',
          width: 68, height: 68,
          background: 'radial-gradient(circle, rgba(255,183,77,0.3), transparent 65%)',
          borderRadius: '50%', zIndex: 8,
        }}
      />

      {/* ─── 倒數刻度（時間軸上的小點，代表越來越近） ─── */}
      {[0, 1, 2, 3].map(i => (
        <motion.div key={i}
          animate={{
            opacity: [0.15, 0.15, 0.15 + i * 0.15, 0.15 + i * 0.15, 0.15],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.45, 0.75, 0.9] }}
          style={{
            position: 'absolute', bottom: 30,
            left: `${25 + i * 15}%`,
            width: 4, height: 4, borderRadius: '50%',
            background: i === 3 ? '#ffb74d' : '#ccc',
          }}
        />
      ))}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.48, 0.52, 0.58, 0.8, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#e65100',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeTargetScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 眼睛（左側，焦急掃射） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '5%', top: '30%', zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [-3, 4, 1, 5, -3], y: [1, -2, 2, -1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 散落的物品（場景裡到處都是東西） ─── */}
      {[
        { left: '35%', top: '20%', emoji: '📦', size: 16 },
        { left: '55%', top: '55%', emoji: '🧥', size: 14 },
        { left: '75%', top: '25%', emoji: '📚', size: 15 },
        { left: '45%', top: '70%', emoji: '👟', size: 13 },
        { left: '68%', top: '52%', emoji: '🎒', size: 14 },
      ].map((item, i) => (
        <motion.div key={i}
          animate={{
            opacity: [0.3, 0.3, 0.3, i === 2 ? 0.15 : 0.3, i === 2 ? 0.15 : 0.3, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.5, 0.55, 0.75, 0.9] }}
          style={{
            position: 'absolute', left: item.left, top: item.top,
            fontSize: item.size, zIndex: 3,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* ─── 掃射視線（多方向搜尋，帶目的性） ─── */}
      {[
        { angle: -15, delay: 0 },
        { angle: 8, delay: 0.8 },
        { angle: -5, delay: 1.6 },
      ].map((beam, i) => (
        <motion.div key={i}
          animate={{
            width: ['0%', '45%', '0%'],
            opacity: [0, 0.25, 0],
          }}
          transition={{ duration: 1.2, repeat: Infinity, delay: beam.delay }}
          style={{
            position: 'absolute', left: '17%', top: '37%',
            marginTop: -2, height: 4,
            background: 'linear-gradient(90deg, rgba(21,101,192,0.3), transparent)',
            borderRadius: '0 3px 3px 0', zIndex: 4,
            transform: `rotate(${beam.angle}deg)`, transformOrigin: 'left center',
          }}
        />
      ))}

      {/* ─── 搜尋目標（鎖定瞬間） ─── */}
      <motion.div
        animate={{
          scale: [0, 0, 0, 0, 1.2, 1, 0],
          opacity: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.58, 0.65, 0.78, 0.92] }}
        style={{
          position: 'absolute', left: '55%', top: '28%',
          fontSize: 28, zIndex: 12,
          filter: 'drop-shadow(0 2px 6px rgba(21,101,192,0.3))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── 鎖定框（找到目標時的框選效果） ─── */}
      <motion.div
        animate={{
          scale: [0, 0, 0, 0, 1.3, 1, 0],
          opacity: [0, 0, 0, 0, 0.7, 0.5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.56, 0.63, 0.78, 0.92] }}
        style={{
          position: 'absolute', left: 'calc(55% - 4px)', top: 'calc(28% - 4px)',
          width: 36, height: 36, zIndex: 11,
          border: '2.5px solid #1565c0', borderRadius: 4,
        }}
      >
        {/* 四角標記 */}
        <div style={{ position: 'absolute', top: -2, left: -2, width: 8, height: 8, borderTop: '2.5px solid #1565c0', borderLeft: '2.5px solid #1565c0' }} />
        <div style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderTop: '2.5px solid #1565c0', borderRight: '2.5px solid #1565c0' }} />
        <div style={{ position: 'absolute', bottom: -2, left: -2, width: 8, height: 8, borderBottom: '2.5px solid #1565c0', borderLeft: '2.5px solid #1565c0' }} />
        <div style={{ position: 'absolute', bottom: -2, right: -2, width: 8, height: 8, borderBottom: '2.5px solid #1565c0', borderRight: '2.5px solid #1565c0' }} />
      </motion.div>

      {/* ─── 鎖定視線（最終射向目標） ─── */}
      <motion.div
        animate={{ width: ['0%', '0%', '0%', '0%', '38%', '38%', '0%'], opacity: [0, 0, 0, 0, 0.5, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.56, 0.63, 0.78, 0.92] }}
        style={{
          position: 'absolute', left: '17%', top: '36%', height: 5,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.5), rgba(21,101,192,0.1))',
          borderRadius: '0 3px 3px 0', zIndex: 6,
        }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.62, 0.66, 0.72, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 6, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1565c0',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeFollowScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ───────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', bottom: 24, left: '5%', right: '5%', height: 2, background: '#e0e0e0', borderRadius: 1 }} />

      {/* ─── 眼睛（左後方，持續跟蹤） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '5%', top: '30%', zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [-2, 4, 0, 4, -2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 小孩在前面走來走去 ─── */}
      <motion.div
        animate={{ x: [-5, 30, 10, 35, -5] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', right: '18%', bottom: 26, zIndex: 8 }}
      >
        {/* 頭 */}
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff9800', margin: '0 auto' }} />
        {/* 身體 */}
        <div style={{ width: 5, height: 14, background: '#ff9800', margin: '0 auto', borderRadius: 2 }} />
        {/* 腿 */}
        <div style={{ display: 'flex', gap: 3, marginLeft: 0 }}>
          <motion.div
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ width: 2, height: 8, background: '#ff9800', borderRadius: 1, transformOrigin: 'top center' }}
          />
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ width: 2, height: 8, background: '#ff9800', borderRadius: 1, transformOrigin: 'top center' }}
          />
        </div>
      </motion.div>

      {/* ─── 視線光束（跟蹤小孩移動，持續連線） ─── */}
      <motion.div
        animate={{
          width: ['38%', '48%', '40%', '50%', '38%'],
          opacity: [0.3, 0.35, 0.3, 0.35, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
        style={{
          position: 'absolute', left: '17%', top: '37%', marginTop: -2, height: 4,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.35), rgba(21,101,192,0.08))',
          borderRadius: '0 3px 3px 0', zIndex: 5,
        }}
      />

      {/* ─── 保護光環（包圍小孩，代表「守護」） ─── */}
      <motion.div
        animate={{
          x: [-5, 30, 10, 35, -5],
          scale: [1, 1.05, 1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2, 0.3, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
        style={{
          position: 'absolute', right: 'calc(18% - 8px)', bottom: 22,
          width: 36, height: 48, border: '2px solid rgba(76,175,80,0.3)',
          borderRadius: '50%', zIndex: 3,
        }}
      />

      {/* ─── sceneObject（持續顯示在小孩旁邊） ─── */}
      <motion.div
        animate={{
          x: [-5, 30, 10, 35, -5],
          opacity: [0.7, 0.9, 0.7, 0.9, 0.7],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
        style={{
          position: 'absolute', right: 'calc(18% - 2px)', top: '18%',
          fontSize: 20, zIndex: 12,
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <div style={{
        position: 'absolute', bottom: 6, left: 0, right: 0,
        textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1565c0',
      }}>
        {meaning}
      </div>
    </div>
  );
}

function GazeReturnScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 時間軸（水平線，左=過去，右=現在） ─── */}
      <div style={{
        position: 'absolute', bottom: 36, left: '8%', right: '8%',
        height: 2, background: '#e0e0e0', borderRadius: 1,
      }} />
      {/* 左端標籤：過去 */}
      <div style={{
        position: 'absolute', bottom: 22, left: '8%',
        fontSize: 9, color: '#bdbdbd', fontWeight: 600,
      }}>PAST</div>
      {/* 右端標籤：現在 */}
      <div style={{
        position: 'absolute', bottom: 22, right: '8%',
        fontSize: 9, color: '#90a4ae', fontWeight: 700,
      }}>NOW</div>

      {/* ─── 過去的記憶碎片（時間軸左側） ─── */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{
            opacity: [0.15, 0.15, 0.15, 0.6, 0.6, 0.15],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.3, 0.45, 0.72, 0.88] }}
          style={{
            position: 'absolute', bottom: 44 + i * 22,
            left: `${10 + i * 12}%`,
            width: 30 - i * 4, height: 16 - i * 2,
            background: '#f5f5f5', border: '1.5px solid #e0e0e0', borderRadius: 3,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 10, color: '#bdbdbd',
          }}
        >
          {['📷', '💬', '🎓'][i]}
        </motion.div>
      ))}

      {/* ─── 眼睛（右側「現在」的位置，轉頭往左看） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', right: '10%', top: '28%', zIndex: 10, transform: 'scaleX(-1)' }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [2, -3, -3, 2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.25, 0.75, 0.9] }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 視線光束（從右往左，回望過去） ─── */}
      <motion.div
        animate={{
          width: ['0%', '0%', '55%', '55%', '0%'],
          opacity: [0, 0, 0.35, 0.35, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.18, 0.38, 0.72, 0.88] }}
        style={{
          position: 'absolute', right: '22%', top: '35%', marginTop: -3, height: 5,
          background: 'linear-gradient(270deg, rgba(21,101,192,0.45), rgba(21,101,192,0.03))',
          borderRadius: '4px 0 0 4px', zIndex: 5,
          transformOrigin: 'right center',
        }}
      />

      {/* ─── sceneObject（記憶被喚起時浮現） ─── */}
      <motion.div
        animate={{
          scale: [0, 0, 0, 0, 1.15, 1, 0],
          opacity: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.48, 0.55, 0.75, 0.88] }}
        style={{
          position: 'absolute', left: '15%', top: '20%',
          fontSize: 28, zIndex: 12,
          filter: 'drop-shadow(0 2px 6px rgba(21,101,192,0.25))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── 回憶光暈（左側亮起） ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.2, 0.2, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.3, 0.4, 0.5, 0.72, 0.88] }}
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '45%',
          background: 'radial-gradient(ellipse at 30% 40%, rgba(21,101,192,0.1), transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 0.58, 0.64, 0.8, 0.92] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1565c0',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeSweepScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 眼睛（左側，水平掃射） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '5%', top: '28%', zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [-2, 4, -2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 1], ease: 'easeInOut' }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 視線光束（水平掃過文件表面） ─── */}
      <motion.div
        animate={{ width: ['0%', '55%', '55%', '0%'], opacity: [0, 0.35, 0.35, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.75, 0.88] }}
        style={{
          position: 'absolute', left: '17%', top: '34%', marginTop: -3, height: 5,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.45), rgba(21,101,192,0.03))',
          borderRadius: '0 3px 3px 0', zIndex: 6,
        }}
      />

      {/* ─── 文件（右側，被從上方掃過） ─── */}
      <div style={{
        position: 'absolute', right: '8%', top: '18%',
        width: 95, height: 115, background: '#fafafa',
        border: '2px solid #e0e0e0', borderRadius: 4,
        padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6,
        zIndex: 3,
      }}>
        {[85, 60, 75, 45, 80, 55, 70, 40].map((w, i) => (
          <div key={i} style={{ height: 2, background: '#e0e0e0', borderRadius: 1, width: `${w}%` }} />
        ))}
      </div>

      {/* ─── 掃描高亮條（水平從上往下掃過文件） ─── */}
      <motion.div
        animate={{
          top: ['22%', '22%', '72%', '72%', '22%'],
          opacity: [0, 0.6, 0.6, 0, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.6, 0.7, 0.9] }}
        style={{
          position: 'absolute', right: '6%', width: 101, height: 3,
          background: 'linear-gradient(90deg, transparent, rgba(21,101,192,0.35), transparent)',
          borderRadius: 2, zIndex: 8,
        }}
      />

      {/* ─── 掃過後的淡藍高亮殘留（代表「掠過但不深入」） ─── */}
      <motion.div
        animate={{
          height: ['0%', '0%', '50%', '50%', '0%'],
          opacity: [0, 0, 0.12, 0.12, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.55, 0.72, 0.88] }}
        style={{
          position: 'absolute', right: '8%', top: '18%', width: 95,
          background: 'linear-gradient(180deg, rgba(21,101,192,0.08), transparent)',
          borderRadius: '4px 4px 0 0', zIndex: 4,
        }}
      />

      {/* ─── sceneObject（掃完後浮現） ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1.1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.65, 0.78, 0.92] }}
        style={{
          position: 'absolute', right: 'calc(8% + 30px)', top: '48%',
          fontSize: 26, zIndex: 12,
          filter: 'drop-shadow(0 2px 4px rgba(21,101,192,0.25))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.62, 0.66, 0.72, 0.84, 0.94] }}
        style={{
          position: 'absolute', bottom: 6, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#1565c0',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function GazeExitScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 安全區域牆壁（左側，代表「裡面」） ─── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '32%',
        background: 'linear-gradient(90deg, #e8f5e9, #f1f8e9)',
        borderRight: '3px solid #a5d6a7',
      }} />

      {/* ─── 眼睛（牆壁邊緣，往外看） ─── */}
      <svg width="48" height="34" viewBox="0 0 48 34"
        style={{ position: 'absolute', left: '18%', top: '32%', zIndex: 10 }}>
        <path d="M 2 17 Q 24 2 46 17 Q 24 32 2 17 Z" fill="#f5f5f5" stroke="#37474f" strokeWidth="2" />
        <motion.g
          animate={{ x: [0, 3, 3, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.5, 0.55, 1] }}>
          <circle cx="24" cy="17" r="9" fill="#1565c0" />
          <circle cx="24" cy="17" r="4.5" fill="#0d47a1" />
          <circle cx="21" cy="13" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
        <path d="M 4 17 Q 24 3 44 17" fill="none" stroke="#263238" strokeWidth="1.5" />
      </svg>

      {/* ─── 視線光束（從牆邊射向外面） ─── */}
      <motion.div
        animate={{ width: ['0%', '0%', '52%', '52%', '0%'], opacity: [0, 0, 0.4, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.3, 0.55, 0.65] }}
        style={{
          position: 'absolute', left: '35%', top: '38%', marginTop: -3, height: 6,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.5), rgba(21,101,192,0.05))',
          borderRadius: '0 4px 4px 0', zIndex: 5,
        }}
      />
      <motion.div
        animate={{ width: ['0%', '0%', '54%', '54%', '0%'], opacity: [0, 0, 0.12, 0.12, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.32, 0.55, 0.65] }}
        style={{
          position: 'absolute', left: '34%', top: '38%', marginTop: -10, height: 20,
          background: 'linear-gradient(90deg, rgba(21,101,192,0.15), transparent)',
          borderRadius: '0 10px 10px 0', filter: 'blur(3px)', zIndex: 4,
        }}
      />

      {/* ─── 逼近的危險物（從右邊衝過來） ─── */}
      <motion.div
        animate={{
          x: [60, 60, -10, -10, 60],
          scale: [0.6, 0.6, 1.2, 1.2, 0.6],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.5, 0.6, 0.85], ease: 'easeIn' }}
        style={{
          position: 'absolute', right: '12%', top: '30%',
          fontSize: 32, zIndex: 8,
          filter: 'drop-shadow(0 2px 6px rgba(211,47,47,0.3))',
        }}
      >
        {obj.emoji}
      </motion.div>

      {/* ─── 偵測到危險：警告閃爍 ─── */}
      <motion.div
        animate={{
          opacity: [0, 0, 0, 0.5, 0, 0.5, 0, 0],
          scale: [1, 1, 1, 1.05, 1, 1.05, 1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.46, 0.5, 0.54, 0.58, 0.7] }}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(255,82,82,0.15), transparent 60%)',
          zIndex: 3,
        }}
      />

      {/* ─── 驚嘆號（發現危險瞬間） ─── */}
      <motion.div
        animate={{
          scale: [0, 0, 0, 1.3, 1, 1, 0],
          opacity: [0, 0, 0, 1, 1, 1, 0],
          y: [5, 5, 5, -3, 0, 0, 5],
        }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.42, 0.48, 0.52, 0.7, 0.8] }}
        style={{
          position: 'absolute', left: 'calc(18% + 50px)', top: '18%',
          fontSize: 20, fontWeight: 900, color: '#d32f2f', zIndex: 12,
          textShadow: '0 0 6px rgba(211,47,47,0.3)',
        }}
      >
        ！
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.48, 0.52, 0.58, 0.64, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 6, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#d32f2f',
        }}
      >
        {meaning}
      </motion.div>
    </div>
  );
}

function FallbackScene({ obj, meaning, coreMotion }) {
  const direction = coreMotion?.split('-')[1] || 'ascend';
  const motions = {
    ascend:    { y: [30, -10, 30] },
    descend:   { y: [-10, 30, -10] },
    exit:      { x: [0, 40, 0], opacity: [1, 0.3, 1] },
    enter:     { x: [40, 0, 40], opacity: [0.3, 1, 0.3] },
    penetrate: { x: [-30, 30, -30] },
    sweep:     { x: [-20, 20, -20] },
    return:    { x: [20, -10, 20] },
    follow:    { x: [-10, 15, -10] },
    target:    { x: [-15, 10, -15], scale: [0.9, 1.1, 0.9] },
    advance:   { x: [-20, 20, -20] },
    detach:    { x: [0, 25, 0], y: [0, -15, 0] },
    connect:   { x: [20, 0, 20] },
    crash:     { x: [-30, 5, -30], scale: [1, 1.2, 1] },
    collide:   { x: [-25, 5, -25] },
    fade:      { x: [0, 30, 0], opacity: [1, 0, 1] },
    cross:     { x: [-20, 20, -20], y: [5, -5, 5] },
    pierce:    { x: [-30, 30, -30] },
    scatter:   { scale: [1, 0.5, 1], x: [0, 15, 0] },
    merge:     { x: [20, 0, 20] },
    orbit:     { rotate: [0, 180, 360] },
    lag:       { x: [0, -15, 0], opacity: [1, 0.5, 1] },
    aside:     { x: [0, 20, 0] },
    balance:   { rotate: [-10, 0, -10] },
  };

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        animate={motions[direction] || motions.ascend}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
      >
        <span style={{ fontSize: 36, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
          {obj.emoji}
        </span>
      </motion.div>
      <div style={{
        position: 'absolute', bottom: 6, left: 0, right: 0,
        textAlign: 'center', fontSize: 11, fontWeight: 700, color: '#1565c0',
      }}>
        {meaning}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// Bring 系列：手帶著物件，方向由介係詞決定
// 核心視覺元素：手＋箱子（carry）
// ═══════════════════════════════════════

function CarryDescendScene({ obj, meaning }) {
  const isPrice = obj.label === '物價';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手帶箱子（Bring = 手帶著）往下移 ─── */}
      <motion.div
        animate={{ y: [0, 0, 36, 36, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '5%', top: '12%', zIndex: 10 }}
      >
        <svg width="48" height="50" viewBox="0 0 48 50">
          {/* 提手 */}
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          {/* 箱子本體 */}
          <rect x="4" y="10" width="40" height="30" rx="3" fill="#8d6e63" stroke="#6d4c41" strokeWidth="1.5" />
          {/* 箱子橫線 */}
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          {/* 手掌 */}
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          {/* 大拇指 */}
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ─── 向下軌跡線 ─── */}
      <motion.div
        animate={{ scaleY: [0, 0, 1, 1, 0], opacity: [0, 0, 0.45, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.3, 0.72, 0.9] }}
        style={{
          position: 'absolute', left: 'calc(5% + 62px)', top: '26%',
          width: 2, height: '35%',
          background: 'linear-gradient(180deg, rgba(121,85,72,0.5), transparent)',
          transformOrigin: 'top center', zIndex: 6,
        }}
      />

      {/* ════ Scene A：物價下降（條形圖縮短） ════ */}
      {isPrice && <>
        {/* 座標軸 */}
        <div style={{ position: 'absolute', right: '6%', bottom: '22%', width: 96, height: 108, zIndex: 3 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#e0e0e0', borderRadius: 1 }} />
          <div style={{ position: 'absolute', left: 0, bottom: 0, right: 0, height: 2, background: '#e0e0e0', borderRadius: 1 }} />
        </div>
        {/* 三根長條 */}
        {[{ x: 8, initH: 88, endH: 38, color: '#ef5350' },
          { x: 38, initH: 68, endH: 28, color: '#ff7043' },
          { x: 68, initH: 48, endH: 22, color: '#66bb6a' }].map((bar, i) => (
          <motion.div key={i}
            animate={{ height: [bar.initH, bar.initH, bar.endH, bar.endH, bar.initH] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeOut', delay: i * 0.06 }}
            style={{
              position: 'absolute',
              right: `calc(6% + ${92 - bar.x - 24}px)`,
              bottom: 'calc(22% + 2px)',
              width: 24, background: bar.color,
              borderRadius: '3px 3px 0 0', zIndex: 4,
            }}
          />
        ))}
        {/* 下降箭頭標 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.8, 0.8, 0], y: [0, 0, 8, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.44, 0.74, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(6% + 40px)', top: '14%',
            width: 0, height: 0,
            borderLeft: '5px solid transparent', borderRight: '5px solid transparent',
            borderTop: '9px solid #ef5350', zIndex: 8,
          }}
        />
        {/* sceneObject emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.52, 0.6, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(6% + 22px)', top: '10%', fontSize: 26, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：心情低落（笑臉→哭臉 下滑） ════ */}
      {!isPrice && <>
        <motion.div
          animate={{ y: [0, 0, 28, 28, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '10%', top: '10%', zIndex: 8 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="#ffe082" stroke="#ffd54f" strokeWidth="1.5" />
            {/* 眼睛 */}
            <circle cx="22" cy="25" r="3.5" fill="#5d4037" />
            <circle cx="42" cy="25" r="3.5" fill="#5d4037" />
            {/* 嘴：由笑弧 → 哭弧 */}
            <motion.path
              animate={{ d: [
                'M 20 42 Q 32 50 44 42',
                'M 20 42 Q 32 50 44 42',
                'M 20 44 Q 32 35 44 44',
                'M 20 44 Q 32 35 44 44',
                'M 20 42 Q 32 50 44 42',
              ]}}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.76, 0.94] }}
              fill="none" stroke="#5d4037" strokeWidth="2.5" strokeLinecap="round"
            />
            {/* 眼淚 */}
            <motion.ellipse cx="22" cy="36" rx="2.5" ry="4" fill="#64b5f6"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.42, 0.55, 0.76, 0.9] }}
            />
          </svg>
        </motion.div>
        {/* sceneObject emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.52, 0.6, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(10% + 10px)', top: '68%', fontSize: 24, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function CarryAscendScene({ obj, meaning }) {
  const isTopic = obj.label === '話題';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手帶箱子（Bring）往上移 ─── */}
      <motion.div
        animate={{ y: [36, 36, 0, 0, 36] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '5%', top: '24%', zIndex: 10 }}
      >
        <svg width="48" height="50" viewBox="0 0 48 50">
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="10" width="40" height="30" rx="3" fill="#8d6e63" stroke="#6d4c41" strokeWidth="1.5" />
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ─── 向上軌跡線 ─── */}
      <motion.div
        animate={{ scaleY: [0, 0, 1, 1, 0], opacity: [0, 0, 0.45, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.3, 0.72, 0.9] }}
        style={{
          position: 'absolute', left: 'calc(5% + 62px)', bottom: '40%',
          width: 2, height: '30%',
          background: 'linear-gradient(0deg, rgba(121,85,72,0.5), transparent)',
          transformOrigin: 'bottom center', zIndex: 6,
        }}
      />

      {/* ════ Scene A：話題（對話框從桌下浮上桌面） ════ */}
      {isTopic && <>
        {/* 桌面 */}
        <div style={{
          position: 'absolute', right: '6%', top: '48%',
          width: 104, height: 8,
          background: 'linear-gradient(180deg, #d7ccc8, #bcaaa4)',
          borderRadius: 3, zIndex: 4,
        }} />
        <div style={{
          position: 'absolute', right: '6%', top: 'calc(48% + 8px)',
          width: 104, height: 38,
          background: '#efebe9', borderRadius: '0 0 4px 4px',
          borderLeft: '2px solid #bcaaa4', borderRight: '2px solid #bcaaa4', borderBottom: '2px solid #bcaaa4',
          zIndex: 3,
        }} />
        {/* 對話框從桌下升上來 */}
        <motion.div
          animate={{ y: [60, 60, 0, 0, 60], opacity: [0, 0.3, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', right: 'calc(6% + 8px)', top: '20%', zIndex: 8 }}
        >
          <svg width="88" height="54" viewBox="0 0 88 54">
            <rect x="2" y="2" width="84" height="40" rx="10" fill="#e3f2fd" stroke="#90caf9" strokeWidth="2" />
            <line x1="14" y1="16" x2="74" y2="16" stroke="#90caf9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="14" y1="27" x2="58" y2="27" stroke="#b3e5fc" strokeWidth="2" strokeLinecap="round" />
            {/* 泡泡尾巴 */}
            <path d="M 20 42 L 14 52 L 30 42 Z" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </motion.div>
        {/* sceneObject emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.52, 0.6, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(6% + 36px)', top: '10%', fontSize: 26, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：孩子（人影從矮到高） ════ */}
      {!isTopic && <>
        {/* 地面線 */}
        <div style={{
          position: 'absolute', right: '6%', bottom: '20%',
          width: 100, height: 2, background: '#e0e0e0', borderRadius: 1, zIndex: 3,
        }} />
        {/* 成長刻度尺 */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            position: 'absolute', right: 'calc(6% + 80px)', bottom: `calc(20% + ${i * 22}px)`,
            display: 'flex', alignItems: 'center', gap: 3, zIndex: 4,
          }}>
            <div style={{ width: 8, height: 1.5, background: '#bdbdbd' }} />
          </div>
        ))}
        {/* 孩子身影（由矮到高） */}
        <motion.div
          animate={{ scaleY: [0.45, 0.45, 1, 1, 0.45], y: [42, 42, 0, 0, 42] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: 'calc(6% + 28px)', bottom: 'calc(20% + 2px)',
            transformOrigin: 'bottom center', zIndex: 6,
          }}
        >
          <svg width="40" height="70" viewBox="0 0 40 70">
            {/* 頭 */}
            <circle cx="20" cy="10" r="10" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
            {/* 身體 */}
            <rect x="12" y="20" width="16" height="26" rx="4" fill="#42a5f5" stroke="#1e88e5" strokeWidth="1.2" />
            {/* 腿 */}
            <rect x="13" y="44" width="6" height="22" rx="3" fill="#1565c0" />
            <rect x="21" y="44" width="6" height="22" rx="3" fill="#1565c0" />
            {/* 手臂 */}
            <rect x="2" y="22" width="10" height="5" rx="2.5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1" />
            <rect x="28" y="22" width="10" height="5" rx="2.5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1" />
          </svg>
        </motion.div>
        {/* sceneObject emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.52, 0.6, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(6% + 30px)', top: '10%', fontSize: 26, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function CarryExitScene({ obj, meaning }) {
  const isProduct = obj.label === '新品';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手（Bring = 把東西帶出來）─── */}
      <motion.div
        animate={{ y: [0, 0, -30, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '3%', top: '34%', zIndex: 10 }}>
        <svg width="48" height="50" viewBox="0 0 48 50">
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="10" width="40" height="30" rx="3" fill="#8d6e63" stroke="#6d4c41" strokeWidth="1.5" />
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ─── 垂直軌跡（往上揭開）─── */}
      <motion.div
        animate={{ scaleY: [0, 0, 1, 1, 0], opacity: [0, 0, 0.45, 0.45, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.72, 0.9] }}
        style={{
          position: 'absolute', left: 'calc(3% + 26px)', top: '18%',
          width: 2, height: '16%',
          background: 'linear-gradient(180deg, transparent, #a1887f)',
          transformOrigin: 'bottom center', zIndex: 6,
        }}
      />

      {/* ════ Scene A：新品上市（紅布幕向兩側滑開，商品在聚光燈下登場） ════ */}
      {isProduct && <>
        {/* 舞台底板 */}
        <div style={{
          position: 'absolute', right: '5%', top: '6%',
          width: 106, height: 140,
          background: 'linear-gradient(180deg, #212121 0%, #303030 100%)',
          borderRadius: 6, overflow: 'hidden', zIndex: 2,
        }}>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 28,
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.06))',
          }} />
        </div>
        {/* 聚光燈光錐 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.6, 0.6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.46, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(5% + 18px)', top: '6%',
            width: 70, height: 140,
            background: 'radial-gradient(ellipse at 50% 5%, rgba(255,241,118,0.55), transparent 70%)',
            zIndex: 4,
          }}
        />
        {/* 左布幕（translateX 向左滑出） */}
        <motion.div
          animate={{ x: [0, 0, -54, -54, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: 'calc(5% + 53px)', top: '6%',
            width: 54, height: 140,
            background: 'linear-gradient(180deg, #b71c1c 0%, #c62828 40%, #b71c1c 100%)',
            borderRadius: '6px 0 0 6px', zIndex: 7,
            boxShadow: 'inset -4px 0 8px rgba(0,0,0,0.3)',
          }}
        >
          {[14, 28, 42].map(x => (
            <div key={x} style={{
              position: 'absolute', top: 0, bottom: 0, left: x,
              width: 3, background: 'rgba(0,0,0,0.15)', borderRadius: 1,
            }} />
          ))}
        </motion.div>
        {/* 右布幕（translateX 向右滑出） */}
        <motion.div
          animate={{ x: [0, 0, 54, 54, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: '5%', top: '6%',
            width: 54, height: 140,
            background: 'linear-gradient(180deg, #b71c1c 0%, #c62828 40%, #b71c1c 100%)',
            borderRadius: '0 6px 6px 0', zIndex: 7,
            boxShadow: 'inset 4px 0 8px rgba(0,0,0,0.3)',
          }}
        >
          {[12, 26, 40].map(x => (
            <div key={x} style={{
              position: 'absolute', top: 0, bottom: 0, left: x,
              width: 3, background: 'rgba(0,0,0,0.15)', borderRadius: 1,
            }} />
          ))}
        </motion.div>
        {/* 商品 emoji */}
        <motion.div
          animate={{ scale: [0.3, 0.3, 1.25, 1, 0.3], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.35, 0.48, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(5% + 34px)', top: '36%',
            fontSize: 36, zIndex: 5,
            filter: 'drop-shadow(0 4px 12px rgba(255,241,118,0.6))',
          }}
        >{obj.emoji}</motion.div>
        {/* NEW 標籤 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.52, 0.56, 0.62, 0.78, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(5% + 68px)', top: '20%',
            background: '#f44336', color: '#fff',
            fontSize: 9, fontWeight: 900, padding: '2px 6px',
            borderRadius: 3, zIndex: 9, letterSpacing: 1,
          }}
        >NEW</motion.div>
      </>}

      {/* ════ Scene B：激發潛能（蒙布向上掀起，sceneObject 在光暈中登場） ════ */}
      {!isProduct && <>
        {/* 基座 */}
        <div style={{
          position: 'absolute', right: 'calc(6% + 8px)', top: '68%',
          width: 80, height: 12,
          background: 'linear-gradient(180deg, #d7ccc8, #bcaaa4)',
          borderRadius: 4, zIndex: 3,
        }} />
        {/* 蒙布上半（拱形，向上掀） */}
        <motion.div
          animate={{ y: [0, 0, -82, -82, 0], opacity: [0.9, 0.9, 0, 0, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: 'calc(6% + 10px)', top: '20%',
            width: 76, height: 50,
            background: 'linear-gradient(180deg, #90a4ae, #78909c)',
            borderRadius: '40% 40% 0 0 / 20% 20% 0 0',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)', zIndex: 7,
          }}
        />
        {/* 蒙布下半（裙擺） */}
        <motion.div
          animate={{ y: [0, 0, -82, -82, 0], opacity: [0.9, 0.9, 0, 0, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: 'calc(6% + 6px)', top: 'calc(20% + 48px)',
            width: 84, height: 24,
            background: 'linear-gradient(180deg, #78909c, #607d8b)',
            borderRadius: '0 0 6px 6px', zIndex: 7,
          }}
        />
        {/* 揭開後光暈 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1, 2.4], opacity: [0, 0, 0, 0.55, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.38, 0.44, 0.54, 0.72] }}
          style={{
            position: 'absolute', right: 'calc(6% + 14px)', top: '18%',
            width: 68, height: 68,
            background: 'radial-gradient(circle, rgba(255,213,0,0.55), rgba(255,193,7,0.1) 60%, transparent 75%)',
            borderRadius: '50%', zIndex: 6,
          }}
        />
        {/* sceneObject emoji */}
        <motion.div
          animate={{ scale: [0.4, 0.4, 0.4, 1.3, 1, 0.4], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.4, 0.5, 0.76, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(6% + 22px)', top: '16%',
            fontSize: 42, zIndex: 8,
            filter: 'drop-shadow(0 0 10px rgba(255,213,0,0.7))',
          }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function CarryReturnScene({ obj, meaning }) {
  const isBaggage = obj.label === '伴手禮';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手（Bring = 帶著，從遠處「回來」）─── */}
      <motion.div
        animate={{ x: [130, 130, 0, 0, 130] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '4%', top: '38%', zIndex: 10 }}>
        <svg width="48" height="50" viewBox="0 0 48 50">
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="10" width="40" height="30" rx="3" fill="#8d6e63" stroke="#6d4c41" strokeWidth="1.5" />
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.4" />
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ─── 回返弧線（back = 往回走的弧形軌跡） ─── */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 5 }}>
        <motion.path
          d="M 72 80 Q 180 20 260 80"
          fill="none" stroke="#a1887f" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 4"
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.72, 0.9] }}
        />
        {/* 回返箭頭（←） */}
        <motion.path
          d="M 80 76 L 72 80 L 80 84"
          fill="none" stroke="#a1887f" strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.72, 0.9] }}
        />
      </svg>

      {/* ════ Scene A：伴手禮（行李從遠處沿弧線回到家） ════ */}
      {isBaggage && <>
        {/* 家（目的地，右側） */}
        <div style={{ position: 'absolute', right: '6%', top: '18%', zIndex: 4 }}>
          <svg width="64" height="68" viewBox="0 0 64 68">
            {/* 屋頂 */}
            <polygon points="32,4 4,28 60,28" fill="#ef9a9a" stroke="#e57373" strokeWidth="1.5" />
            {/* 煙囪 */}
            <rect x="42" y="10" width="8" height="14" fill="#bcaaa4" stroke="#a1887f" strokeWidth="1" />
            {/* 牆 */}
            <rect x="8" y="28" width="48" height="36" fill="#fff9f9" stroke="#e57373" strokeWidth="1.5" rx="1" />
            {/* 門 */}
            <rect x="24" y="42" width="16" height="22" rx="3" fill="#8d6e63" stroke="#6d4c41" strokeWidth="1.2" />
            {/* 窗 */}
            <rect x="10" y="34" width="12" height="10" rx="2" fill="#b3e5fc" stroke="#90caf9" strokeWidth="1" />
            <rect x="42" y="34" width="12" height="10" rx="2" fill="#b3e5fc" stroke="#90caf9" strokeWidth="1" />
          </svg>
        </div>
        {/* 行李沿弧線從右到左回來 */}
        <motion.div
          animate={{
            x: [110, 110, 0, 0, 110],
            y: [0, 0, -28, -28, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.76, 0.94], ease: 'easeInOut' }}
          style={{
            position: 'absolute', right: 'calc(6% + 36px)', top: '54%',
            fontSize: 28, zIndex: 8,
          }}
        >{obj.emoji}</motion.div>
        {/* 到家後光暈 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1, 2.2], opacity: [0, 0, 0, 0.45, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.5, 0.58, 0.74] }}
          style={{
            position: 'absolute', right: 'calc(6% + 20px)', top: '46%',
            width: 44, height: 44,
            background: 'radial-gradient(circle, rgba(121,85,72,0.4), transparent 70%)',
            borderRadius: '50%', zIndex: 7,
          }}
        />
      </>}

      {/* ════ Scene B：回憶（Polaroid 拍立得從空白顯影） ════ */}
      {!isBaggage && <>
        {/* Polaroid 從右側飄入 */}
        <motion.div
          animate={{ x: [40, 40, 0, 0, 40], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.76, 0.94], ease: 'easeOut' }}
          style={{
            position: 'absolute', right: '7%', top: '8%',
            zIndex: 6, transform: 'rotate(-5deg)',
          }}
        >
          {/* 拍立得外框 */}
          <div style={{
            width: 92, height: 110,
            background: '#fff',
            borderRadius: 3,
            boxShadow: '2px 4px 14px rgba(0,0,0,0.22)',
            padding: '7px 7px 28px',
            boxSizing: 'border-box',
          }}>
            {/* 照片內容：初始一片空白，逐漸顯影 */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(135deg,#fff,#fff)',
                  'linear-gradient(135deg,#fff,#fff)',
                  'linear-gradient(135deg,#f5ede0,#e8d5b0)',
                  'linear-gradient(135deg,#e8d4a0,#d4b07a)',
                  'linear-gradient(135deg,#e8d4a0,#d4b07a)',
                  'linear-gradient(135deg,#fff,#fff)',
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.76, 0.94] }}
              style={{
                width: '100%', height: '100%',
                borderRadius: 2, overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {/* 照片裡的景象（顯影後才出現） */}
              <motion.div
                animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.5, 0.5, 0.5, 1, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.54, 0.76, 0.94] }}
                style={{ fontSize: 28, filter: 'sepia(60%)' }}
              >🌅</motion.div>
            </motion.div>
          </div>
          {/* Polaroid 下方文字區 */}
          <div style={{
            position: 'absolute', bottom: 6, left: 7, right: 7,
            display: 'flex', justifyContent: 'center',
          }}>
            <motion.div
              animate={{ opacity: [0, 0, 0, 0.7, 0.7, 0] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.5, 0.58, 0.76, 0.94] }}
              style={{ fontSize: 9, color: '#999', fontStyle: 'italic', letterSpacing: 0.3 }}
            >memories ♪</motion.div>
          </div>
        </motion.div>

        {/* sceneObject emoji（相機，顯影完成後出現） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.54, 0.62, 0.76, 0.92] }}
          style={{
            position: 'absolute', right: 'calc(7% + 54px)', top: '70%',
            fontSize: 22, zIndex: 9,
          }}
        >{obj.emoji}</motion.div>

        {/* 溫暖光暈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.3, 0.3, 0], scale: [0.6, 0.6, 0.6, 1, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: '4%', top: '4%',
            width: 108, height: 130,
            background: 'radial-gradient(ellipse, rgba(212,176,122,0.4), transparent 70%)',
            borderRadius: 8, zIndex: 4,
          }}
        />
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548',
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function CarryEnterScene({ obj, meaning }) {
  const isExpert = obj.label === '外部專家';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手（Bring = 帶著，向右帶「進去」）─── */}
      <motion.div
        animate={{ x: [0, 0, 80, 80, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '3%', top: '36%', zIndex: 10 }}>
        <svg width="48" height="50" viewBox="0 0 48 50">
          <defs>
            <radialGradient id="boxGradCE" cx="30%" cy="28%">
              <stop offset="0%" stopColor="#a1887f" />
              <stop offset="100%" stopColor="#6d4c41" />
            </radialGradient>
          </defs>
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="10" width="40" height="30" rx="3" fill="url(#boxGradCE)" stroke="#6d4c41" strokeWidth="1.5" />
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.35" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.35" />
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ─── 軌跡（向右進入）─── */}
      <motion.svg width="84" height="50"
        style={{ position: 'absolute', left: 'calc(3% + 54px)', top: 'calc(36% + 6px)', zIndex: 6 }}
        animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.72, 0.9] }}>
        <path d="M 4 25 C 28 25 52 22 78 24"
          fill="none" stroke="#a1887f" strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round" />
        <polygon points="74,19 82,24 74,29" fill="#a1887f" opacity="0.8" />
      </motion.svg>

      {/* ════ Scene A：引進人才（人走進門框） ════ */}
      {isExpert && <>
        {/* 門框 SVG */}
        <div style={{ position: 'absolute', right: '5%', top: '5%', zIndex: 4 }}>
          <svg width="90" height="142" viewBox="0 0 90 142">
            <defs>
              <linearGradient id="doorIntCE" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff8e1" />
                <stop offset="100%" stopColor="#ffecb3" />
              </linearGradient>
              <radialGradient id="doorLightCE" cx="50%" cy="20%">
                <stop offset="0%" stopColor="#fff9c4" />
                <stop offset="100%" stopColor="#fff8e1" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* 框體 */}
            <rect x="0" y="0" width="90" height="142" rx="4" fill="#78909c" />
            {/* 室內暖色 */}
            <rect x="10" y="14" width="70" height="128" fill="url(#doorIntCE)" />
            {/* 室內天花板光 */}
            <rect x="25" y="15" width="40" height="7" rx="3.5" fill="url(#doorLightCE)" opacity="0.8" />
            {/* 地板 */}
            <rect x="10" y="126" width="70" height="16" fill="#bcaaa4" />
            <line x1="10" y1="126" x2="80" y2="126" stroke="#a1887f" strokeWidth="1" />
            {/* 門把 */}
            <circle cx="70" cy="74" r="4.5" fill="#546e7a" />
            <circle cx="70" cy="74" r="2.5" fill="#90a4ae" />
          </svg>
        </div>

        {/* 進入後室內發光 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.45, 0.45, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.52, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(5% + 10px)', top: 'calc(5% + 14px)',
            width: 70, height: 112,
            background: 'radial-gradient(ellipse at 50% 40%, rgba(255,235,59,0.45), transparent 70%)',
            zIndex: 6,
          }}
        />

        {/* 人才 emoji 從門外走入 */}
        <motion.div
          animate={{ x: [-72, -72, 0, 0, -72], opacity: [0, 0.35, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeOut' }}
          style={{
            position: 'absolute', right: 'calc(5% + 18px)', top: '40%',
            fontSize: 36, zIndex: 8,
          }}
        >👩‍💼</motion.div>

        {/* sceneObject */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.54, 0.62, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(5% + 54px)', top: '8%', fontSize: 18, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：帶來收入（豬公撲滿接鈔票） ════ */}
      {!isExpert && <>
        {/* 豬公撲滿 SVG */}
        <motion.div
          animate={{ rotate: [0, 0, 0, -4, 4, -3, 2, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.50, 0.54, 0.59, 0.63, 0.68, 0.74, 0.94] }}
          style={{ position: 'absolute', right: '5%', top: '12%', zIndex: 4, transformOrigin: 'bottom center' }}
        >
          <svg width="96" height="100" viewBox="0 0 96 100">
            <defs>
              <radialGradient id="pigCE2" cx="38%" cy="32%">
                <stop offset="0%" stopColor="#ffcdd2" />
                <stop offset="100%" stopColor="#e91e63" stopOpacity="0.7" />
              </radialGradient>
            </defs>
            {/* 身體 */}
            <ellipse cx="52" cy="64" rx="40" ry="30" fill="url(#pigCE2)" stroke="#f48fb1" strokeWidth="1.2" />
            {/* 耳朵 */}
            <ellipse cx="22" cy="40" rx="10" ry="12" fill="#f8bbd0" stroke="#f48fb1" strokeWidth="1" />
            <ellipse cx="22" cy="41" rx="6" ry="7.5" fill="#fce4ec" />
            {/* 眼睛 */}
            <circle cx="30" cy="56" r="5" fill="#fff" />
            <circle cx="31.5" cy="56" r="2.5" fill="#37474f" />
            <circle cx="32.5" cy="55" r="1" fill="#fff" opacity="0.8" />
            {/* 鼻子 */}
            <ellipse cx="17" cy="67" rx="10" ry="8" fill="#f48fb1" />
            <circle cx="14" cy="67" r="2.5" fill="#c2185b" opacity="0.4" />
            <circle cx="20" cy="67" r="2.5" fill="#c2185b" opacity="0.4" />
            {/* 腳 */}
            <rect x="28" y="90" width="13" height="8" rx="4" fill="#f48fb1" />
            <rect x="58" y="90" width="13" height="8" rx="4" fill="#f48fb1" />
            {/* 尾巴 */}
            <path d="M 90 62 Q 96 54 92 46" fill="none" stroke="#f48fb1" strokeWidth="3" strokeLinecap="round" />
            {/* 投幣口 */}
            <rect x="38" y="33" width="26" height="5" rx="2.5" fill="#ad1457" />
          </svg>
        </motion.div>

        {/* 鈔票從左滑入投幣口 */}
        <motion.div
          animate={{
            x:       [0,   0,  74,  74,  0],
            y:       [0,   0,   8,   8,  0],
            scale:   [1,   1, 0.4, 0.4,  1],
            opacity: [0, 0.5,   1,   0,  0],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.52, 0.94], ease: 'easeIn' }}
          style={{
            position: 'absolute', right: 'calc(5% + 68px)', top: '6%',
            fontSize: 28, zIndex: 8,
          }}
        >💵</motion.div>

        {/* 收到後發光暈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.5, 0.5, 0], scale: [0.5, 0.5, 0.5, 1, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.50, 0.60, 0.76, 0.94] }}
          style={{
            position: 'absolute', right: 'calc(5% - 8px)', top: '8%',
            width: 112, height: 108,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(251,192,45,0.4), transparent 68%)',
            borderRadius: '50%', zIndex: 3,
          }}
        />

        {/* sceneObject */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.15, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.52, 0.60, 0.67, 0.78, 0.92] }}
          style={{ position: 'absolute', right: 'calc(5% + 58px)', top: '76%', fontSize: 24, zIndex: 9 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548', zIndex: 15,
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function CarryCircleScene({ obj, meaning }) {
  const isWave = obj.label === '影響';
  const trigColor = isWave ? '#e53935' : '#43a047';
  const glowColor = isWave ? 'rgba(229,57,53,0.30)' : 'rgba(67,160,71,0.28)';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 手 + 箱子：本身向右移動，帶著東西「走過來」─── */}
      <motion.div
        animate={{ x: [0, 0, 148, 148, 148, 0], opacity: [1, 1, 1, 1, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.44, 0.58, 0.88, 0.94], ease: [0.25, 0.1, 0.25, 1] }}
        style={{ position: 'absolute', left: '3%', top: '34%', zIndex: 10 }}>
        <svg width="48" height="50" viewBox="0 0 48 50">
          <defs>
            <radialGradient id="boxGradCC" cx="30%" cy="28%">
              <stop offset="0%" stopColor="#a1887f" />
              <stop offset="100%" stopColor="#6d4c41" />
            </radialGradient>
          </defs>
          <path d="M 14 10 Q 14 4 24 4 Q 34 4 34 10" fill="none" stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="4" y="10" width="40" height="30" rx="3" fill="url(#boxGradCC)" stroke="#6d4c41" strokeWidth="1.5" />
          <line x1="4" y1="25" x2="44" y2="25" stroke="#6d4c41" strokeWidth="1" opacity="0.35" />
          <line x1="24" y1="10" x2="24" y2="40" stroke="#6d4c41" strokeWidth="1" opacity="0.35" />
          <rect x="9" y="40" width="30" height="10" rx="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5" />
          <ellipse cx="7" cy="43" rx="4" ry="5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2" />
        </svg>
      </motion.div>

      {/* ════ Scene A：造成（手帶到跟前 → 🌊 在落腳點湧現）════ */}
      {isWave && <>
        <motion.div
          animate={{ scale: [0,0,0, 1.4, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.50, 0.58, 0.72, 0.90] }}
          style={{ position: 'absolute', right: '6%', top: '12%', fontSize: 44, zIndex: 9 }}
        >{obj.emoji}</motion.div>
        <motion.div
          animate={{ opacity: [0,0,0, 0.5, 0.5, 0], scale: [0.2,0.2,0.2,1,1,0.2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.50, 0.60, 0.74, 0.90] }}
          style={{
            position: 'absolute', right: 'calc(6% - 8px)', top: '8%',
            width: 88, height: 88,
            background: `radial-gradient(circle, ${glowColor}, transparent 68%)`,
            borderRadius: '50%', zIndex: 3,
          }}
        />
      </>}

      {/* ════ Scene B：促成（手帶到跟前 → 🌱 從落腳點長出）════ */}
      {!isWave && <>
        <motion.div
          animate={{ opacity: [0,0,0, 0.5, 0.5, 0], scaleX: [0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.56, 0.74, 0.90] }}
          style={{
            position: 'absolute', right: '9%', top: '64%',
            width: 80, height: 2,
            background: 'linear-gradient(90deg, transparent, #a5d6a7, transparent)',
            transformOrigin: 'center', zIndex: 4,
          }}
        />
        <motion.div
          animate={{
            scale:   [0, 0, 0, 0.1, 0.4, 0.8, 1, 0],
            opacity: [0, 0, 0, 0.4, 0.7, 0.9, 1, 0],
            y:       [20,20,20, 14,  8,   2,  0, 20],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.54, 0.62, 0.70, 0.78, 0.90] }}
          style={{ position: 'absolute', right: '8%', top: '14%', fontSize: 44, zIndex: 9, transformOrigin: 'bottom center' }}
        >{obj.emoji}</motion.div>
        <motion.div
          animate={{ opacity: [0,0,0, 0.45, 0.45, 0], scale: [0.1,0.1,0.1,1,1,0.1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.70, 0.78, 0.90] }}
          style={{
            position: 'absolute', right: 'calc(8% - 8px)', top: '10%',
            width: 88, height: 88,
            background: `radial-gradient(circle, ${glowColor}, transparent 68%)`,
            borderRadius: '50%', zIndex: 3,
          }}
        />
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{
          position: 'absolute', bottom: 4, left: 0, right: 0,
          textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#795548', zIndex: 15,
        }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunCollideScene({ obj, meaning }) {
  const isFriend = obj.label === '老朋友';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 跑步人形（往右跑過去）─── */}
      <motion.div
        animate={{ x: [0, 0, 200, 196, 200, 200, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.42, 0.46, 0.50, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '4%', top: '18%', zIndex: 10 }}>
        <motion.div
          animate={{ y: [0, -4, 0, -4, 0] }}
          transition={{ duration: 0.46, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── 軌跡箭頭（向右衝）─── */}
      <motion.svg width="130" height="20"
        style={{ position: 'absolute', left: 'calc(4% + 44px)', top: 'calc(18% + 24px)', zIndex: 6 }}
        animate={{ opacity: [0, 0, 0.65, 0.65, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.22, 0.48, 0.66] }}>
        <path d="M 4 10 L 122 10" stroke="#795548" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4"/>
        <polygon points="118,5 128,10 118,15" fill="#795548"/>
      </motion.svg>

      {/* ─── 撞擊閃光 ─── */}
      <motion.div
        animate={{ scale: [0,0,0, 2.4, 0, 0], opacity: [0,0,0, 0.8, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.44, 0.50, 0.94] }}
        style={{
          position: 'absolute', right: 'calc(6% + 16px)', top: '16%',
          width: 46, height: 46, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,193,7,0.9), rgba(255,152,0,0.3) 55%, transparent 72%)',
          zIndex: 8,
        }}
      />

      {/* ════ Scene A：巧遇 ════ */}
      {isFriend && <>
        <div style={{ position: 'absolute', right: '6%', top: '18%', zIndex: 5 }}>
          <svg width="34" height="54" viewBox="0 0 34 54">
            <circle cx="17" cy="7" r="6.5" fill="#b3e5fc" stroke="#81d4fa" strokeWidth="1.2"/>
            <line x1="17" y1="14" x2="17" y2="32" stroke="#0277bd" strokeWidth="3" strokeLinecap="round"/>
            <line x1="17" y1="21" x2="5"  y2="29" stroke="#0277bd" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="17" y1="21" x2="29" y2="29" stroke="#0277bd" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="17" y1="32" x2="24" y2="44" stroke="#0277bd" strokeWidth="3" strokeLinecap="round"/>
            <line x1="17" y1="32" x2="10" y2="44" stroke="#0277bd" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <motion.div
          animate={{ scale: [0,0,0, 1.3, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.54, 0.70, 0.90] }}
          style={{ position: 'absolute', right: 'calc(6% + 2px)', top: '3%', fontSize: 30, zIndex: 9 }}
        >😮</motion.div>
        <motion.div
          animate={{ scale: [0,0,0, 1.15, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.54, 0.62, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(6% + 6px)', top: '72%', fontSize: 22, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：遭遇障礙 ════ */}
      {!isFriend && <>
        <div style={{ position: 'absolute', right: '5%', top: '8%', zIndex: 5 }}>
          <svg width="68" height="112" viewBox="0 0 68 112">
            {[0,1,2,3,4].map(row => [0,1].map(col => (
              <rect key={`${row}-${col}`}
                x={col * 35 + 1} y={row * 23 + 1} width={32} height={20} rx="2"
                fill={row % 2 === 0 ? '#ef9a9a' : '#e57373'} stroke="#c62828" strokeWidth="1.2"/>
            )))}
          </svg>
        </div>
        <motion.div
          animate={{ scale: [0,0,0, 1.3, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.54, 0.70, 0.90] }}
          style={{ position: 'absolute', right: 'calc(5% + 12px)', top: '3%', fontSize: 30, zIndex: 9 }}
        >💥</motion.div>
        <motion.div
          animate={{ scale: [0,0,0, 1.15, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.54, 0.62, 0.76, 0.9] }}
          style={{ position: 'absolute', right: 'calc(5% + 20px)', top: '72%', fontSize: 22, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

const SCENE_MAP = {
  'scan-penetrate': ScanPenetrateScene,
  'gaze-descend': GazeDescendScene,
  'scan-ascend': ScanAscendScene,
  'gaze-exit': GazeExitScene,
  'gaze-sweep': GazeSweepScene,
  'gaze-return': GazeReturnScene,
  'gaze-follow': GazeFollowScene,
  'gaze-target': GazeTargetScene,
  'gaze-advance': GazeAdvanceScene,
  'spin-penetrate': SpinPenetrateScene,
  'spin-descend': SpinDescendScene,
  'spin-ascend': SpinAscendScene,
  'spin-exit': SpinExitScene,
  'spin-detach': SpinDetachScene,
  'spin-connect': SpinConnectScene,
  'spin-reverse': SpinReverseScene,
  'carry-descend': CarryDescendScene,
  'carry-ascend': CarryAscendScene,
  'carry-exit': CarryExitScene,
  'carry-return': CarryReturnScene,
  'carry-enter': CarryEnterScene,
  'carry-circle': CarryCircleScene,
  'run-collide': RunCollideScene,
  'run-descend': RunDescendScene,
  'run-exit': RunExitScene,
  'run-traverse': RunTraverseScene,
  'run-pierce': RunPierceScene,
  'run-flee': RunFleeScene,
  'run-cross': RunCrossScene,
  'get-enter': GetEnterScene,
  'get-descend': GetDescendScene,
  'get-ascend': GetAscendScene,
  'get-exit': GetExitScene,
  'get-vault': GetVaultScene,
  'get-tunnel': GetTunnelScene,
  'get-parallel': GetParallelScene,
  'get-return': GetReturnScene,
  'get-flee': GetFleeScene,
  'get-mount': GetMountScene,
  'get-dismount': GetDismountScene,
  'break-intrude': BreakIntrudeScene,
  'break-collapse': BreakCollapseScene,
  'break-split': BreakSplitScene,
  'break-burst': BreakBurstScene,
  'break-pierce': BreakPierceScene,
  'break-balance': BreakBalanceScene,
  'go-descend': GoDescendScene,
  'go-ascend': GoAscendScene,
  'go-outward': GoOutwardScene,
  'go-review': GoReviewScene,
  'go-traverse': GoTraverseScene,
  'go-continue': GoContinueScene,
  'go-return': GoReturnScene,
  'go-trigger': GoTriggerScene,
  'go-proceed': GoAheadScene,
  'go-pursue': GoPursueScene,
  'go-match': GoMatchScene,
  'set-erect': SetErectScene,
  'set-depart': SetDepartScene,
  'set-ignite': SetIgniteScene,
  'set-regress': SetRegressScene,
  'set-sideline': SetSidelineScene,
  'take-liftoff': TakeLiftoffScene,
  'take-shoulder': TakeShoulderScene,
  'take-ascend': TakeAscendScene,
  'take-occupy': TakeOccupyScene,
  'take-extract': TakeExtractScene,
  'take-absorb': TakeAbsorbScene,
  'take-retract': TakeRetractScene,
  'take-descend': TakeDescendScene,
  'take-depart': TakeDepartScene,
  'put-onto': PutOntoScene,
  'put-aside': PutAsideScene,
  'put-erect': PutErectScene,
  'put-lower': PutLowerScene,
  'put-outward': PutOutwardScene,
  'put-stow': PutStowScene,
  'put-insert': PutInsertScene,
  'put-assemble': PutAssembleScene,
  'come-surface': ComeSurfaceScene,
  'come-descend': ComeDescendScene,
  'come-enter': ComeEnterScene,
  'come-emerge': ComeEmergeScene,
  'come-return': ComeReturnScene,
  'come-cross': ComeCrossScene,
  'come-alongside': ComeAlongsideScene,
  'come-over': ComeOverScene,
  'give-release': GiveReleaseScene,
  'give-yield': GiveYieldScene,
  'give-distribute': GiveDistributeScene,
  'give-away': GiveAwayScene,
  'give-return': GiveReturnScene,
  'make-assemble': MakeAssembleScene,
  'make-discern': MakeDiscernScene,
  'pick-lift': PickLiftScene,
  'pick-select': PickSelectScene,
  'pick-target': PickTargetScene,
  'hold-grip': HoldGripScene,
  'hold-brace': HoldBraceScene,
  'hold-restrain': HoldRestrainScene,
  'keep-pace': KeepPaceScene,
  'keep-persist': KeepPersistScene,
  'keep-out': KeepOutScene,
  'hang-idle': HangIdleScene,
  'hang-mount': HangMountScene,
  'hang-cling': HangClingScene,
  'fall-apart': FallApartScene,
  'fall-behind': FallBehindScene,
  'fall-for': FallForScene,
  'fall-through': FallThroughScene,
  'carry-on': CarryOnScene,
  'carry-out': CarryOutScene,
  'cut-off': CutOffScene,
  'cut-out': CutOutScene,
  'cut-down': CutDownScene,
  'work-out': WorkOutScene,
  'work-on': WorkOnScene,
  'find-out': FindOutScene,
  'figure-out': FigureOutScene,
  'show-up': ShowUpScene,
  'show-off': ShowOffScene,
  'check-out': CheckOutScene,
  'check-in': CheckInScene,
  'end-up': EndUpScene,
  'catch-up': CatchUpScene,
  'point-out': PointOutScene,
  'throw-away': ThrowAwayScene,
  'throw-out': ThrowOutScene,
  'throw-up': ThrowUpScene,
  'stand-out': StandOutScene,
  'stand-up': StandUpScene,
  'stand-for': StandForScene,
  'stand-by': StandByScene,
  'blow-up': BlowUpScene,
  'blow-off': BlowOffScene,
  'sign-up': SignScene,
  'sign-in': SignScene,
  'sign-out': SignScene,
  'sign-off': SignScene,
};

function RunExitScene({ obj, meaning }) {
  const isTime = obj.label === '時間';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ════ Scene A：時間跑光（量杯液體從滿到空）════ */}
      {isTime && <>
        {/* 量杯外框 */}
        <div style={{ position: 'absolute', right: '8%', top: '6%', zIndex: 4 }}>
          <svg width="64" height="130" viewBox="0 0 64 130">
            <path d="M 8 4 L 56 4 L 56 118 Q 56 126 48 126 L 16 126 Q 8 126 8 118 Z"
              fill="none" stroke="#90a4ae" strokeWidth="2.5" strokeLinejoin="round"/>
            {[0.25,0.5,0.75].map((f,i) => (
              <line key={i} x1="10" y1={118 - f*114} x2="20" y2={118 - f*114}
                stroke="#90a4ae" strokeWidth="1" opacity="0.6"/>
            ))}
          </svg>
        </div>
        {/* 液體（從滿到空）*/}
        <motion.div
          animate={{ scaleY: [1, 1, 0, 0, 1], backgroundColor: ['#4fc3f7','#4fc3f7','#b3e5fc','#b3e5fc','#4fc3f7'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.58, 0.76, 0.94], ease: 'easeOut' }}
          style={{
            position: 'absolute', right: 'calc(8% + 9px)', bottom: 'calc(94% - 122px)',
            width: 46, height: 112, borderRadius: '0 0 10px 10px',
            transformOrigin: 'bottom center', zIndex: 5,
          }}
        />
        {/* 液體流出（從右側缺口）*/}
        {[0,1,2].map(i => (
          <motion.div key={i}
            animate={{ x: [0,0, 30+i*14, 30+i*14, 0], y: [0,0, 10+i*8, 10+i*8, 0], opacity: [0, 0, 0.8, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.10+i*0.06, 0.32+i*0.06, 0.42, 0.94], ease: 'easeOut' }}
            style={{ position: 'absolute', right: 'calc(8% + 2px)', top: `${30 + i*14}%`, width: 8, height: 8, borderRadius: '50%', background: '#4fc3f7', zIndex: 8 }}
          />
        ))}
        <motion.div
          animate={{ scale: [0,0,0, 1.15, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.52, 0.62, 0.68, 0.78, 0.92] }}
          style={{ position: 'absolute', right: 'calc(8% + 12px)', top: '2%', fontSize: 22, zIndex: 9 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：存貨見底（箱子裡的東西跑出來）════ */}
      {!isTime && <>
        {/* 箱體（靜態）*/}
        <div style={{ position: 'absolute', right: '6%', top: '20%', zIndex: 4 }}>
          <svg width="96" height="88" viewBox="0 0 96 88">
            <rect x="2" y="2" width="92" height="84" rx="4" fill="#fff8e1" stroke="#f9a825" strokeWidth="2"/>
            <line x1="2" y1="30" x2="94" y2="30" stroke="#f9a825" strokeWidth="1.5"/>
            <line x1="48" y1="2" x2="48" y2="30" stroke="#f9a825" strokeWidth="1" opacity="0.6"/>
          </svg>
        </div>
        {/* 東西從箱口飛出（往右上方散開）*/}
        {[
          { dx: 28, dy: -30, delay: 0.08, size: 16, emoji: '📄' },
          { dx: 46, dy: -20, delay: 0.14, size: 14, emoji: '🔧' },
          { dx: 36, dy: -42, delay: 0.20, size: 15, emoji: '💊' },
        ].map((item, i) => (
          <motion.div key={i}
            animate={{ x: [0,0, item.dx, item.dx, 0], y: [0,0, item.dy, item.dy, 0], opacity: [0, 0.8, 0.8, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, item.delay, 0.44, 0.52, 0.94], ease: 'easeOut' }}
            style={{ position: 'absolute', right: 'calc(6% + 36px)', top: '24%', fontSize: item.size, zIndex: 8 }}
          >{item.emoji}</motion.div>
        ))}
        {/* EMPTY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.8, 0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.76, 0.92] }}
          style={{ position: 'absolute', right: 'calc(6% + 18px)', top: '44%', fontSize: 10, fontWeight: 900, color: '#ef9a9a', letterSpacing: 2, zIndex: 9 }}
        >EMPTY</motion.div>
        <motion.div
          animate={{ scale: [0,0,0, 1.15, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.46, 0.58, 0.64, 0.76, 0.92] }}
          style={{ position: 'absolute', right: 'calc(6% + 32px)', top: '4%', fontSize: 22, zIndex: 9 }}
        >{obj.emoji}</motion.div>
      </>}

      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunDescendScene({ obj, meaning }) {
  const isBattery = obj.label === '電力';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ════ Scene A：電力耗盡（能量粒子往下流失）════ */}
      {isBattery && <>
        {/* 電池外框 */}
        <div style={{ position: 'absolute', right: '8%', top: '6%', zIndex: 4 }}>
          <svg width="52" height="114" viewBox="0 0 52 114">
            <rect x="16" y="0" width="20" height="8" rx="3" fill="#9e9e9e"/>
            <rect x="2" y="8" width="48" height="102" rx="5" fill="none" stroke="#757575" strokeWidth="2.5"/>
          </svg>
        </div>
        {/* 電量條（從滿縮到底）*/}
        <motion.div
          animate={{ scaleY: [1,1, 0.08, 0.08, 1], backgroundColor: ['#66bb6a','#66bb6a','#ef5350','#ef5350','#66bb6a'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.58, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', right: 'calc(8% + 6px)', bottom: 'calc(94% - 104px)', width: 40, height: 96, transformOrigin: 'bottom center', borderRadius: '2px 2px 3px 3px', zIndex: 5 }}
        />
        {/* 能量粒子一路往下掉出底部 */}
        {[0,1,2].map(i => (
          <motion.div key={i}
            animate={{ y: [0, 0, 60+i*18, 60+i*18, 0], opacity: [0, 0.7, 0, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.10+i*0.05, 0.36+i*0.05, 0.44, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', right: 'calc(8% + 18px)', top: '78%', width: 8, height: 8, borderRadius: '50%', background: '#66bb6a', zIndex: 8 }}
          />
        ))}
        <motion.div
          animate={{ scale: [0,0,0,1.2,1,0], opacity: [0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.44,0.58,0.66,0.76,0.90] }}
          style={{ position: 'absolute', right: 'calc(8% + 6px)', top: '2%', fontSize: 22, zIndex: 9 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：破舊荒廢（建築碎屑往下掉）════ */}
      {!isBattery && <>
        <div style={{ position: 'absolute', right: '6%', top: '6%', zIndex: 4 }}>
          <svg width="80" height="122" viewBox="0 0 80 122">
            <polygon points="40,6 4,34 76,34" fill="#bcaaa4" stroke="#a1887f" strokeWidth="1.5"/>
            <rect x="8" y="34" width="64" height="84" fill="#efebe9" stroke="#bcaaa4" strokeWidth="1.5" rx="1"/>
            <rect x="28" y="80" width="24" height="38" rx="3" fill="#a1887f" stroke="#795548" strokeWidth="1.2"/>
            <rect x="12" y="44" width="18" height="16" rx="2" fill="#b3e5fc" stroke="#90caf9" strokeWidth="1"/>
            <rect x="50" y="44" width="18" height="16" rx="2" fill="#b3e5fc" stroke="#90caf9" strokeWidth="1"/>
          </svg>
        </div>
        {/* 裂縫 */}
        <motion.svg width="80" height="122" viewBox="0 0 80 122"
          style={{ position: 'absolute', right: '6%', top: '6%', zIndex: 6 }}
          animate={{ opacity: [0,0,0,0.9,0.9,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.08,0.36,0.52,0.76,0.92] }}>
          <path d="M 22 50 L 28 62 L 20 74" fill="none" stroke="#795548" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M 54 48 L 60 58 L 56 70" fill="none" stroke="#795548" strokeWidth="1.5" strokeLinecap="round"/>
        </motion.svg>
        {/* 碎屑往下掉 */}
        {[
          { x: 'calc(6% + 20px)', delay: 0.10 },
          { x: 'calc(6% + 45px)', delay: 0.18 },
          { x: 'calc(6% + 60px)', delay: 0.24 },
        ].map((item, i) => (
          <motion.div key={i}
            animate={{ y: [0, 0, 50+i*12, 50+i*12, 0], opacity: [0, 0.8, 0, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, item.delay, 0.40+i*0.04, 0.48, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', right: item.x, top: '30%', width: 6, height: 6, borderRadius: 1, background: '#bcaaa4', zIndex: 8 }}
          />
        ))}
        <motion.div
          animate={{ scale: [0,0,0,1.15,1,0], opacity: [0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.44,0.56,0.64,0.76,0.90] }}
          style={{ position: 'absolute', right: 'calc(6% + 20px)', top: '2%', fontSize: 22, zIndex: 12 }}
        >{obj.emoji}</motion.div>
      </>}

      <motion.div
        animate={{ opacity: [0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunTraverseScene({ obj, meaning }) {
  const isOvertime = obj.label === '時間';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 地面線 ─── */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 50px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ─── 跑步人形 + 速度殘影線（Run 的招牌視覺）─── */}
      <motion.div
        animate={{ x: [0, 0, 150, 300, 300, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.44, 0.70, 0.84, 0.96], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '2%', top: '34%', zIndex: 10 }}>
        {/* 速度殘影線 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.7, 0.7, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.2, 0.66, 0.74] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ffab91)' }} />
          <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -4, 0, -4, 0] }}
          transition={{ duration: 0.46, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ════ Scene A：超時（衝破終點彩帶還停不下來，時鐘轉過頭）════ */}
      {isOvertime && <>
        {/* 終點線（格子旗）*/}
        <div style={{ position: 'absolute', left: '46%', top: 'calc(34% - 36px)', zIndex: 4 }}>
          <svg width="14" height="92" viewBox="0 0 14 92">
            <line x1="3" y1="0" x2="3" y2="92" stroke="#616161" strokeWidth="2.5"/>
            {[0,1,2,3,4,5,6].map(r => [0,1].map(c => (
              <rect key={`${r}-${c}`} x={3 + c*5} y={r*12} width="5" height="6"
                fill={(r+c)%2===0 ? '#37474f' : '#fff'} stroke="#90a4ae" strokeWidth="0.4"/>
            )))}
          </svg>
        </div>
        {/* 終點彩帶（被跑者衝斷）*/}
        <motion.div
          animate={{ scaleX: [1, 1, 1, 0, 0, 1], opacity: [0.9, 0.9, 0.9, 0, 0, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.42, 0.5, 0.84, 0.96] }}
          style={{ position: 'absolute', left: '10%', top: 'calc(34% + 8px)', width: '37%', height: 5, borderRadius: 3, transformOrigin: 'right center',
            background: 'repeating-linear-gradient(90deg,#ef5350 0 8px,#fff 8px 16px)', zIndex: 7 }}
        />
        {/* 時鐘（跑過後變紅發光 + 分針轉過一圈多）*/}
        <motion.svg width="54" height="54" viewBox="0 0 56 56"
          style={{ position: 'absolute', right: '7%', top: '6%', zIndex: 6 }}
          animate={{ filter: ['none','none','none','drop-shadow(0 0 6px #ef5350)','drop-shadow(0 0 6px #ef5350)','none'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.06,0.44,0.66,0.84,0.96] }}>
          <circle cx="28" cy="30" r="22" fill="#fff" stroke="#616161" strokeWidth="2.5"/>
          <rect x="22" y="2" width="12" height="6" rx="2" fill="#9e9e9e"/>
          <motion.line x1="28" y1="30" x2="28" y2="13"
            stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round"
            style={{ originX: '28px', originY: '30px' }}
            animate={{ rotate: [0, 0, 360, 540, 540, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0,0.06,0.44,0.70,0.84,0.96], ease: 'easeInOut' }}/>
          <line x1="28" y1="30" x2="40" y2="30" stroke="#37474f" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="28" cy="30" r="2.5" fill="#37474f"/>
        </motion.svg>
        {/* 超時紅標 */}
        <motion.div
          animate={{ scale: [0,0,0, 1.15, 1, 0], opacity: [0,0,0, 1, 1, 0], y: [8,8,8,0,0,8] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.44,0.58,0.66,0.82,0.92] }}
          style={{ position: 'absolute', right: '5%', top: 'calc(6% + 58px)', background: '#ef5350', color: '#fff',
            fontSize: 11, fontWeight: 800, padding: '2px 7px', borderRadius: 10, zIndex: 9, whiteSpace: 'nowrap' }}
        >{obj.emoji} +15</motion.div>
      </>}

      {/* ════ Scene B：輾過（從上方碾壓成扁平 + 碎屑揚塵）════ */}
      {!isOvertime && <>
        {/* 被輾物件：正常 → 被踩扁攤平 → 維持扁平 → 復原 */}
        <motion.div
          animate={{ scaleY: [1, 1, 1, 0.22, 0.22, 1], scaleX: [1, 1, 1, 1.32, 1.32, 1], rotate: [0, 0, 0, -6, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.42, 0.52, 0.86, 0.96], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '46%', top: 'calc(34% + 14px)', fontSize: 34, transformOrigin: 'bottom center', zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 撞擊閃光 */}
        <motion.div
          animate={{ scale: [0,0,0, 2, 0, 0], opacity: [0,0,0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.44, 0.52, 0.6, 0.96] }}
          style={{ position: 'absolute', left: 'calc(46% - 4px)', top: 'calc(34% + 6px)', width: 50, height: 50, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,193,7,0.9), rgba(255,152,0,0.3) 55%, transparent 72%)', zIndex: 8 }}
        />
        {/* 飛濺碎屑（往兩側噴）*/}
        {[
          { dx: -34, dy: -22 }, { dx: -20, dy: -34 }, { dx: 26, dy: -30 }, { dx: 42, dy: -16 },
        ].map((p, i) => (
          <motion.div key={i}
            animate={{ x: [0,0,0, p.dx, p.dx*1.2], y: [0,0,0, p.dy, p.dy+20], opacity: [0,0,0, 0.9, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.42, 0.5, 0.58, 0.68], ease: 'easeOut' }}
            style={{ position: 'absolute', left: '49%', top: 'calc(34% + 24px)', width: 6, height: 6, borderRadius: 1, background: '#bcaaa4', zIndex: 8 }}
          />
        ))}
        {/* 揚塵 */}
        <motion.div
          animate={{ scale: [0,0,0, 1.6, 2.2, 0], opacity: [0,0,0, 0.5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.44, 0.5, 0.58, 0.7, 0.96] }}
          style={{ position: 'absolute', left: 'calc(46% - 12px)', top: 'calc(34% + 18px)', width: 72, height: 40, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(189,170,164,0.6), transparent 70%)', zIndex: 6 }}
        />
        {/* 暈眩星星 */}
        <motion.div
          animate={{ scale: [0,0,0, 1.2, 1, 0], opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 0.58, 0.64, 0.82, 0.92] }}
          style={{ position: 'absolute', left: '48%', top: 'calc(34% - 30px)', fontSize: 22, zIndex: 9 }}
        >💫</motion.div>
      </>}

      <motion.div
        animate={{ opacity: [0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetEnterScene({ obj, meaning }) {
  const isHobby   = obj.label === '新愛好';
  const isSchool  = obj.label === '學校';
  const isTrouble = !isHobby && !isSchool;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：迷上了（走進興趣的發光世界）════ */}
      {isHobby && <>
        {/* 興趣世界（右側發光泡泡）*/}
        <motion.div
          animate={{ scale:[1,1,1,1.08,1,1], opacity:[0.55,0.55,0.55,1,1,0.55] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.72,0.94] }}
          style={{ position: 'absolute', right: '4%', top: '6%', width: 86, height: 102, borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', background: 'radial-gradient(circle at 50% 40%, #fffde7, #fff176, #ffee58)', border: '2.5px solid #f9a825', zIndex: 3 }}
        />
        {/* 愛好 emoji */}
        <motion.div
          animate={{ scale:[0.6,0.6,0.6,1.45,1.1,0.6], opacity:[0.35,0.35,0.35,1,1,0.35] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.72,0.94] }}
          style={{ position: 'absolute', right: 'calc(4% + 22px)', top: '18%', fontSize: 32, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 進入後閃出的星星 */}
        {[{dx:-16,dy:-24},{dx:18,dy:-18},{dx:-4,dy:-32}].map((p, i) => (
          <motion.div key={i}
            animate={{ x:[0,0,0,p.dx,p.dx,0], y:[0,0,0,p.dy,p.dy,0], opacity:[0,0,0,1,0,0], scale:[0,0,0,1.3,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.60,0.72,0.94], delay: i*0.08 }}
            style={{ position: 'absolute', right: 'calc(4% + 28px)', top: '26%', fontSize: 13, zIndex: 7 }}
          >✨</motion.div>
        ))}
      </>}

      {/* ════ Scene B：考上（校門打開，走進去）════ */}
      {isSchool && <>
        {/* 橫梁 */}
        <div style={{ position: 'absolute', right: '4%', top: '6%', width: 72, height: 12, background: '#5c6bc0', borderRadius: 4, zIndex: 5 }} />
        {/* 左柱（門開時往左移）*/}
        <motion.div
          animate={{ x:[0,0,0,-16,-16,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', right: 'calc(4% + 50px)', top: '18%', zIndex: 4 }}>
          <svg width="16" height="96" viewBox="0 0 16 96">
            <rect x="0" y="0" width="16" height="96" rx="4" fill="#9fa8da" stroke="#5c6bc0" strokeWidth="1.5"/>
            <rect x="3" y="8"  width="10" height="5" rx="2" fill="#c5cae9"/>
            <rect x="3" y="22" width="10" height="5" rx="2" fill="#c5cae9"/>
          </svg>
        </motion.div>
        {/* 右柱（門開時往右移）*/}
        <motion.div
          animate={{ x:[0,0,0,16,16,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', right: 'calc(4% + 6px)', top: '18%', zIndex: 4 }}>
          <svg width="16" height="96" viewBox="0 0 16 96">
            <rect x="0" y="0" width="16" height="96" rx="4" fill="#9fa8da" stroke="#5c6bc0" strokeWidth="1.5"/>
            <rect x="3" y="8"  width="10" height="5" rx="2" fill="#c5cae9"/>
            <rect x="3" y="22" width="10" height="5" rx="2" fill="#c5cae9"/>
          </svg>
        </motion.div>
        {/* 🎓 飛出 */}
        <motion.div
          animate={{ scale:[0,0,0,1.4,1,0], opacity:[0,0,0,1,1,0], y:[4,4,4,-12,0,4] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.48,0.58,0.70,0.90] }}
          style={{ position: 'absolute', right: 'calc(4% + 20px)', top: '8%', fontSize: 28, zIndex: 8 }}
        >{obj.emoji}</motion.div>
        {/* ADMITTED */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.52,0.60,0.66,0.78,0.92] }}
          style={{ position: 'absolute', right: '4%', top: '78%', width: 72, fontSize: 8, fontWeight: 900, color: '#5c6bc0', letterSpacing: 1, textAlign: 'center', zIndex: 8 }}
        >✓ ADMITTED</motion.div>
      </>}

      {/* ════ Scene C：惹麻煩（走進陷阱，門關上）════ */}
      {isTrouble && <>
        {/* 陷阱箱 */}
        <div style={{ position: 'absolute', right: '4%', top: '8%', zIndex: 3 }}>
          <svg width="78" height="100" viewBox="0 0 78 100">
            <rect x="2" y="2" width="74" height="96" rx="6" fill="#ffebee" stroke="#ef5350" strokeWidth="2"/>
          </svg>
        </div>
        {/* 陷阱門（人進去後關上）*/}
        <motion.div
          animate={{ scaleX:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.50,0.58,0.76,0.92] }}
          style={{ position: 'absolute', right: 'calc(4% + 74px)', top: '8%', width: 14, height: 100, background: '#ef5350', borderRadius: '6px 0 0 6px', transformOrigin: 'right center', zIndex: 6 }}
        />
        {/* 😬 */}
        <motion.div
          animate={{ scale:[0.4,0.4,0.4,1.3,1,0.4], opacity:[0.2,0.2,0.2,1,1,0.2] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.54,0.68,0.92] }}
          style={{ position: 'absolute', right: 'calc(4% + 20px)', top: '24%', fontSize: 28, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* ⚠️ 閃爍 */}
        {[0,1].map(i => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,1,0,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.54,0.60,0.64,0.70,0.74,0.92], delay: i*0.1 }}
            style={{ position: 'absolute', right: `calc(4% + ${4+i*28}px)`, top: '4%', fontSize: 14, zIndex: 8 }}
          >⚠️</motion.div>
        ))}
      </>}

      {/* ─── 人物：大版本＋bobbing，從左走進去 ─── */}
      <motion.div
        animate={{ x:[0,0,150,146,146,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
        style={{ position: 'absolute', left: '4%', top: '34%', zIndex: 10 }}>
        {/* 速度殘影 */}
        <motion.div
          animate={{ opacity:[0,0,0.6,0.6,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.46,0.58,0.94] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
          <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
        </motion.div>
        <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.48, repeat: Infinity, ease:'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunCrossScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 地面線 ─── */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(32% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ─── 雜物堆（右側）─── */}
      <div style={{ position: 'absolute', right: '6%', top: '18%', zIndex: 3 }}>
        <svg width="88" height="88" viewBox="0 0 88 88">
          <rect x="2" y="36" width="84" height="50" rx="4" fill="#fff8e1" stroke="#f9a825" strokeWidth="1.5"/>
          <rect x="2" y="36" width="84" height="18" rx="4" fill="#fff3e0" stroke="#f9a825" strokeWidth="1.5"/>
          <rect x="36" y="40" width="16" height="10" rx="3" fill="#e0e0e0" stroke="#bdbdbd" strokeWidth="1.2"/>
          <rect x="2" y="10" width="84" height="28" rx="4" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"/>
          <rect x="2" y="2" width="84" height="10" rx="3" fill="#eeeeee" stroke="#e0e0e0" strokeWidth="1"/>
        </svg>
      </div>

      {/* ─── sceneObject 從抽屜彈出 ─── */}
      <motion.div
        animate={{ scale: [0.4, 0.4, 0.4, 1.35, 1, 0.4], opacity: [0, 0, 0, 1, 1, 0], y: [4, 4, 4, -12, 0, 4] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.34, 0.44, 0.58, 0.86] }}
        style={{ position: 'absolute', right: 'calc(6% + 24px)', top: '14%', fontSize: 28, zIndex: 6 }}
      >{obj.emoji}</motion.div>

      {/* ─── 驚嘆號 ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1.5, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.36, 0.44, 0.54, 0.76] }}
        style={{ position: 'absolute', right: 'calc(6% + 6px)', top: '4%', fontSize: 24, fontWeight: 900, color: '#ff6f00', zIndex: 8 }}
      >!</motion.div>

      {/* ─── 發現閃光 ─── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 2.2, 0, 0], opacity: [0, 0, 0, 0.75, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.36, 0.44, 0.54, 0.94] }}
        style={{
          position: 'absolute', right: 'calc(6% + 12px)', top: '20%',
          width: 50, height: 50, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,193,7,0.9), rgba(255,152,0,0.3) 55%, transparent 72%)',
          zIndex: 7,
        }}
      />

      {/* ─── 跑步人形（往右跑，中途停下）─── */}
      <motion.div
        animate={{ x: [0, 0, 165, 160, 160, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.38, 0.46, 0.76, 0.94], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '4%', top: '32%', zIndex: 10 }}>
        <motion.div
          animate={{ opacity: [0, 0, 0.7, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.20, 0.38, 0.76, 0.94] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ffab91)' }} />
          <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
        </motion.div>
        <motion.div animate={{ y: [0, -4, 0, -4, 0] }} transition={{ duration: 0.46, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunFleeScene({ obj, meaning }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 地面線 ─── */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(32% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ─── 危險（左側，持續脈衝）─── */}
      <motion.div
        animate={{ scale: [1, 1.18, 1, 1.18, 1], opacity: [0.85, 1, 0.85, 1, 0.85] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '5%', top: '16%', fontSize: 42, zIndex: 5 }}
      >{obj.emoji}</motion.div>

      {/* 脈衝威脅光環（兩層交錯）*/}
      {[0, 1].map(i => (
        <motion.div key={i}
          animate={{ scale: [0.7, 0.7, 2.4], opacity: [0, 0.45, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.2, ease: 'easeOut' }}
          style={{
            position: 'absolute', left: 'calc(5% + 10px)', top: 'calc(16% + 12px)',
            width: 36, height: 36, borderRadius: '50%',
            border: '2px solid rgba(239,83,80,0.65)', zIndex: 4,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* ─── 跑步人形（從危險旁邊向右逃跑）─── */}
      <motion.div
        animate={{ x: [0, 0, 270, 270, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.52, 0.76, 0.94], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '26%', top: '32%', zIndex: 10 }}>
        {/* 速度殘影（紅色調，表示緊張）*/}
        <motion.div
          animate={{ opacity: [0, 0, 0.8, 0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.18, 0.56, 0.70] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef5350)' }} />
          <div style={{ width: 24, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef9a9a)' }} />
          <div style={{ width: 36, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef5350)' }} />
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0, -5, 0] }} transition={{ duration: 0.38, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function RunPierceScene({ obj, meaning }) {
  const isList = obj.label === '流程';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>

      {/* ─── 地面線 ─── */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(32% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ─── 跑步人形（從左穿越到右）─── */}
      <motion.div
        animate={{ x: [0, 0, 240, 240, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.06, 0.54, 0.76, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '3%', top: '32%', zIndex: 10 }}>
        <motion.div
          animate={{ opacity: [0, 0, 0.7, 0.7, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.16, 0.56, 0.70] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ffab91)' }} />
          <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ff8a65)' }} />
        </motion.div>
        <motion.div animate={{ y: [0, -4, 0, -4, 0] }} transition={{ duration: 0.46, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ════ Scene A：快速過一遍（穿越三個步驟門框）════ */}
      {isList && <>
        {[
          { left: '26%', flashAt: 0.20 },
          { left: '46%', flashAt: 0.34 },
          { left: '66%', flashAt: 0.48 },
        ].map((gate, i) => (
          <div key={i} style={{ position: 'absolute', left: gate.left, top: '14%', zIndex: 5 }}>
            <svg width="30" height="72" viewBox="0 0 30 72">
              <path d="M 0 72 L 0 12 Q 0 2 8 2 L 22 2 Q 30 2 30 12 L 30 72"
                fill="none" stroke="#b0bec5" strokeWidth="2.5"/>
            </svg>
            <motion.div
              animate={{ opacity: [0, 0, 1, 0, 0, 0] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, gate.flashAt, gate.flashAt + 0.04, gate.flashAt + 0.12, 0.76, 0.94] }}
              style={{ position: 'absolute', inset: '-2px', borderRadius: 8, background: 'rgba(255,152,0,0.45)', zIndex: 6 }}
            />
            <motion.div
              animate={{ scale: [0, 0, 1.3, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, gate.flashAt + 0.04, gate.flashAt + 0.10, gate.flashAt + 0.18, 0.72, 0.88] }}
              style={{ position: 'absolute', top: '34%', left: '18%', fontSize: 16, color: '#43a047', fontWeight: 900, zIndex: 7 }}
            >✓</motion.div>
          </div>
        ))}
        <motion.div
          animate={{ scale: [0, 0, 1.2, 1, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.56, 0.62, 0.78, 0.90] }}
          style={{ position: 'absolute', right: '4%', top: '10%', fontSize: 26, zIndex: 9 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：花光積蓄（金幣沿路散落）════ */}
      {!isList && <>
        {[
          { left: '20%', delay: 0.10, dy: -26 },
          { left: '31%', delay: 0.17, dy: -18 },
          { left: '42%', delay: 0.24, dy: -30 },
          { left: '52%', delay: 0.31, dy: -20 },
          { left: '62%', delay: 0.38, dy: -24 },
        ].map((coin, i) => (
          <motion.div key={i}
            animate={{ y: [0, 0, coin.dy, coin.dy + 40, coin.dy + 40, 0], opacity: [0, 0, 0.9, 0, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, coin.delay, coin.delay + 0.06, coin.delay + 0.22, 0.76, 0.94], ease: 'easeOut' }}
            style={{ position: 'absolute', left: coin.left, top: 'calc(32% + 36px)', fontSize: 14, zIndex: 8 }}
          >🪙</motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 1, 0.7, 0.3, 0, 0, 1], scale: [1, 1, 0.95, 0.85, 0.65, 0.65, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.38, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '10%', fontSize: 30, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.52, 0.60, 0.76, 0.92] }}
          style={{ position: 'absolute', right: 'calc(6% - 2px)', top: 'calc(10% + 36px)', fontSize: 10, fontWeight: 900, color: '#ef9a9a', letterSpacing: 2, zIndex: 9 }}
        >EMPTY</motion.div>
      </>}

      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.5, 0.55, 0.6, 0.66, 0.82, 0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#4e342e', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetDescendScene({ obj, meaning }) {
  const isMood = obj.label === '心情';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：認真開始做（俯身面對桌上的任務）════ */}
      {!isMood && <>
        {/* 桌子 */}
        <div style={{ position: 'absolute', left: '18%', bottom: 20, zIndex: 3 }}>
          <svg width="140" height="48" viewBox="0 0 140 48">
            <rect x="0" y="0" width="140" height="12" rx="4" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
            <rect x="8"  y="12" width="10" height="36" rx="3" fill="#a1887f" stroke="#795548" strokeWidth="1.2"/>
            <rect x="122" y="12" width="10" height="36" rx="3" fill="#a1887f" stroke="#795548" strokeWidth="1.2"/>
          </svg>
        </div>
        {/* 桌上的任務（📋 亮起）*/}
        <motion.div
          animate={{ scale:[0.7,0.7,0.7,1.15,1,0.7], opacity:[0.35,0.35,0.35,1,1,0.35] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.70,0.92] }}
          style={{ position: 'absolute', left: '46%', bottom: 68, fontSize: 28, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 集中光（人到位後桌面亮起）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0.5,0.5,0], scaleX:[0.4,0.4,0.4,1,1,0.4] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.56,0.72,0.92] }}
          style={{ position: 'absolute', left: '18%', bottom: 68, width: 140, height: 10, background: 'linear-gradient(90deg, transparent, rgba(255,193,7,0.6), transparent)', borderRadius: 8, zIndex: 4 }}
        />
        {/* 人物：從上方俯身下來（頭往下、靠近桌面）*/}
        <motion.div
          animate={{ y:[0,0,72,68,68,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '38%', top: '4%', zIndex: 10 }}>
          <motion.div animate={{ y:[0,-3,0,-3,0] }} transition={{ duration: 0.55, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#4e342e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#4e342e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#4e342e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#4e342e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#4e342e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#4e342e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：心情被拖下去（烏雲壓著人往下）════ */}
      {isMood && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
        {/* 烏雲（持續下壓）*/}
        <motion.div
          animate={{ y:[0,0,60,60,60,0], opacity:[0.6,0.6,1,1,1,0.6] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -30, top: '4%', fontSize: 44, zIndex: 6 }}
        >☁️</motion.div>
        {/* 往下的箭頭（被壓的力量）*/}
        <motion.div
          animate={{ opacity:[0,0,0.8,0.8,0.8,0], y:[0,0,8,8,8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.50,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '34%', fontSize: 18, color: '#90a4ae', zIndex: 7 }}
        >↓</motion.div>
        {/* 人物：被往下壓，最終縮成低落姿態 */}
        <motion.div
          animate={{ y:[0,0,60,56,56,0], scaleY:[1,1,0.82,0.78,0.78,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '14%', zIndex: 10, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#78909c" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="10" y2="28" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="28" y2="28" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="26" y2="46" stroke="#78909c" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="10" y2="46" stroke="#78909c" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="22" y="44" width="11" height="5" rx="2.5" fill="#78909c"/>
            <rect x="7"  y="44" width="11" height="5" rx="2.5" fill="#78909c"/>
          </svg>
        </motion.div>
        {/* 心情 emoji（到底後出現）*/}
        <motion.div
          animate={{ scale:[0,0,0,1.2,1,0], opacity:[0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.56,0.68,0.90] }}
          style={{ position: 'absolute', left: '50%', marginLeft: 14, bottom: 36, fontSize: 22, zIndex: 8 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetAscendScene({ obj, meaning }) {
  const isBed = obj.label === '床';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：起床（從床上升起）════ */}
      {isBed && <>
        {/* 床 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -64, bottom: 20, zIndex: 3 }}>
          <svg width="128" height="44" viewBox="0 0 128 44">
            {/* 床框 */}
            <rect x="0" y="8" width="128" height="36" rx="4" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
            {/* 枕頭 */}
            <rect x="8" y="2" width="38" height="22" rx="6" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.2"/>
            {/* 毯子 */}
            <rect x="0" y="22" width="128" height="22" rx="4" fill="#90caf9" stroke="#64b5f6" strokeWidth="1"/>
          </svg>
        </div>
        {/* 床上 emoji（睡眠中…）*/}
        <motion.div
          animate={{ opacity:[0.6,0.6,0,0,0,0.6], scale:[0.9,0.9,0,0,0,0.9] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.20,0.76,0.88,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -12, bottom: 52, fontSize: 20, zIndex: 4 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene B：站起來（從椅子升起）════ */}
      {!isBed && <>
        {/* 椅子 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -28, bottom: 20, zIndex: 3 }}>
          <svg width="56" height="60" viewBox="0 0 56 60">
            {/* 椅背 */}
            <rect x="6" y="0" width="44" height="28" rx="5" fill="#bcaaa4" stroke="#8d6e63" strokeWidth="1.5"/>
            {/* 椅座 */}
            <rect x="0" y="28" width="56" height="10" rx="3" fill="#a1887f" stroke="#795548" strokeWidth="1.5"/>
            {/* 四條椅腳 */}
            <rect x="4"  y="38" width="8" height="22" rx="2" fill="#8d6e63"/>
            <rect x="44" y="38" width="8" height="22" rx="2" fill="#8d6e63"/>
          </svg>
        </div>
        {/* 椅子 emoji */}
        <motion.div
          animate={{ opacity:[0.5,0.5,0,0,0,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.22,0.76,0.88,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: 20, bottom: 60, fontSize: 18, zIndex: 4 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ─── 人物：從低處升起（共用）─── */}
      <motion.div
        animate={{ y:[0,0,-88,-84,-84,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeOut' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -20, bottom: isBed ? 52 : 66, zIndex: 10 }}>
        <motion.div animate={{ y:[0,-3,0,-3,0] }} transition={{ duration: 0.55, repeat: Infinity, ease:'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* 升起的閃光 */}
      <motion.div
        animate={{ scale:[0,0,0,2.2,0,0], opacity:[0,0,0,0.75,0,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.52,0.62,0.94] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -22, bottom: isBed ? 100 : 114, width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.85), transparent 70%)', zIndex: 5 }}
      />

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetExitScene({ obj, meaning }) {
  const isEscape = obj.label === '困境';
  const isLeave  = obj.label === '房間';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：逃脫困境（衝破牢籠）════ */}
      {isEscape && <>
        {/* 牢籠（左側）*/}
        <div style={{ position: 'absolute', left: '4%', top: '10%', zIndex: 4 }}>
          <svg width="68" height="104" viewBox="0 0 68 104">
            <rect x="0" y="0" width="68" height="104" rx="6" fill="#ffebee" stroke="#ef5350" strokeWidth="1.5" strokeDasharray="0"/>
            {[12, 24, 36, 48, 56].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="104" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round"/>
            ))}
          </svg>
        </div>
        {/* 🔒 */}
        <div style={{ position: 'absolute', left: 'calc(4% + 20px)', top: '12%', fontSize: 20, zIndex: 5 }}>{obj.emoji}</div>
        {/* 衝破瞬間閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.4,0,0], opacity:[0,0,0,0.85,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.62,0.94] }}
          style={{ position: 'absolute', left: 'calc(4% + 52px)', top: '28%', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.9), transparent 70%)', zIndex: 8 }}
        />
        {/* 自由！文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], x:[0,0,0,0,8,8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.64,0.78,0.92] }}
          style={{ position: 'absolute', right: '6%', top: '16%', fontSize: 11, fontWeight: 900, color: '#43a047', zIndex: 8 }}
        >FREE!</motion.div>
      </>}

      {/* ════ Scene B：離開房間（走出門）════ */}
      {isLeave && <>
        {/* 房間牆壁（左側）*/}
        <div style={{ position: 'absolute', left: '4%', top: '6%', zIndex: 3 }}>
          <svg width="80" height="108" viewBox="0 0 80 108">
            <rect x="0" y="0" width="80" height="108" rx="0" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2"/>
            {/* 窗戶 */}
            <rect x="8" y="12" width="28" height="22" rx="3" fill="#b3e5fc" stroke="#81d4fa" strokeWidth="1.5"/>
            <line x1="22" y1="12" x2="22" y2="34" stroke="#81d4fa" strokeWidth="1"/>
            <line x1="8"  y1="23" x2="36" y2="23" stroke="#81d4fa" strokeWidth="1"/>
          </svg>
        </div>
        {/* 門框（右側出口）*/}
        <div style={{ position: 'absolute', right: '6%', top: '16%', zIndex: 4 }}>
          <svg width="44" height="90" viewBox="0 0 44 90">
            <rect x="0" y="0" width="44" height="90" rx="4" fill="#fff9c4" stroke="#f9a825" strokeWidth="2"/>
            <rect x="28" y="38" width="10" height="8" rx="3" fill="#f9a825"/>
          </svg>
        </div>
        {/* 🚪 */}
        <motion.div
          animate={{ opacity:[0.5,0.5,0.5,1,1,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.76,0.94] }}
          style={{ position: 'absolute', right: 'calc(6% + 10px)', top: '12%', fontSize: 18, zIndex: 5 }}
        >{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene C：消息走漏（密封箱爆開）════ */}
      {!isEscape && !isLeave && <>
        {/* 密封盒子 */}
        <motion.div
          animate={{ scale:[1,1,1,1.15,1.1,1], rotate:[0,0,0,-3,3,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.48,0.56,0.80] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '18%', zIndex: 4 }}>
          <svg width="56" height="52" viewBox="0 0 56 52">
            <rect x="2" y="14" width="52" height="36" rx="5" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2"/>
            <path d="M 2 14 L 28 32 L 54 14" fill="none" stroke="#1565c0" strokeWidth="2"/>
            <line x1="2" y1="14" x2="28" y2="2" stroke="#1565c0" strokeWidth="1.5"/>
            <line x1="54" y1="14" x2="28" y2="2" stroke="#1565c0" strokeWidth="1.5"/>
          </svg>
        </motion.div>
        {/* 爆開閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.8,0,0], opacity:[0,0,0,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.50,0.62,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '22%', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(25,118,210,0.8), transparent 70%)', zIndex: 6 }}
        />
        {/* 📢 四散飛出 */}
        {[{dx:-50,dy:-30},{dx:50,dy:-20},{dx:-30,dy:30},{dx:40,dy:25}].map((p, i) => (
          <motion.div key={i}
            animate={{ x:[0,0,0,p.dx,p.dx,0], y:[0,0,0,p.dy,p.dy,0], opacity:[0,0,0,1,0.8,0], scale:[0,0,0,1.2,0.8,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.54,0.70,0.90], delay: i*0.05 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '24%', fontSize: 16, zIndex: 7 }}
          >{obj.emoji}</motion.div>
        ))}
      </>}

      {/* ─── 人物：從左衝出（逃脫/離開）───────────────────────────────────────────────── */}
      {(isEscape || isLeave) && (
        <motion.div
          animate={{ x:[0,0,160,156,156,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: isEscape ? 'calc(4% + 16px)' : '14%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.65,0.65,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.46,0.58,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetVaultScene({ obj, meaning }) {
  const isHeartbreak = obj.label === '心碎';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：走出來（跨越心碎的烏雲）════ */}
      {isHeartbreak && <>
        {/* 左側：烏雲＋雨（困在裡面的狀態）*/}
        <motion.div
          animate={{ opacity:[0.9,0.9,0.9,0.4,0.2,0.9] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.56,0.72,0.94] }}
          style={{ position: 'absolute', left: '8%', top: '8%', fontSize: 40, zIndex: 3 }}
        >🌧️</motion.div>
        {/* 心碎 emoji */}
        <motion.div
          animate={{ opacity:[0.8,0.8,0.8,0,0,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.48,0.72,0.94] }}
          style={{ position: 'absolute', left: 'calc(8% + 4px)', top: '38%', fontSize: 20, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 右側：太陽（跨過去之後）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], scale:[0.4,0.4,0.4,0.4,1.2,1,0.4] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', right: '8%', top: '8%', fontSize: 36, zIndex: 3 }}
        >☀️</motion.div>
      </>}

      {/* ════ Scene B：克服障礙（翻越磚牆）════ */}
      {!isHeartbreak && <>
        {/* 磚牆 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '12%', zIndex: 3 }}>
          <svg width="28" height="90" viewBox="0 0 28 90">
            {[0,1,2,3,4].map(row => (
              <g key={row}>
                {row % 2 === 0
                  ? [0, 14].map(x => <rect key={x} x={x} y={row*18} width="13" height="16" rx="1" fill="#ef9a9a" stroke="#e57373" strokeWidth="1"/>)
                  : [7].map(x => <rect key={x} x={x} y={row*18} width="14" height="16" rx="1" fill="#ef9a9a" stroke="#e57373" strokeWidth="1"/>)
                }
              </g>
            ))}
          </svg>
        </div>
        {/* 障礙 emoji */}
        <motion.div
          animate={{ opacity:[0.7,0.7,0.7,0,0,0.7] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.50,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 越過後的自由閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.2,0], opacity:[0,0,0,0,0.8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.62,0.72] }}
          style={{ position: 'absolute', right: '12%', top: '26%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.85), transparent 70%)', zIndex: 6 }}
        />
      </>}

      {/* ─── 人物：跑→跳躍弧線越過中央障礙 ─── */}
      <motion.div
        animate={{ x:[0,0,80,160,220,220,0], y:[0,0,0,-60,0,0,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.50,0.62,0.76,0.94], ease:'easeInOut' }}
        style={{ position: 'absolute', left: '6%', top: '34%', zIndex: 10 }}>
        {/* 速度殘影 */}
        <motion.div
          animate={{ opacity:[0,0,0.6,0.6,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.36,0.52,0.76,0.94] }}
          style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
          <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
        </motion.div>
        <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetTunnelScene({ obj, meaning }) {
  const isHardship = obj.label === '難關';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：撐過難關（穿越黑暗隧道）════ */}
      {isHardship && <>
        {/* 隧道（中央深色區域）*/}
        <motion.div
          animate={{ opacity:[0.85,0.85,0.85,0.3,0.1,0.85] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.54,0.70,0.94] }}
          style={{ position: 'absolute', left: '28%', top: '10%', width: '44%', bottom: 22, background: 'linear-gradient(90deg, rgba(55,71,79,0.15), rgba(38,50,56,0.65) 30%, rgba(38,50,56,0.65) 70%, rgba(55,71,79,0.15))', borderRadius: 4, zIndex: 3 }}
        />
        {/* 難關 emoji（隧道裡）*/}
        <motion.div
          animate={{ opacity:[0.7,0.7,0.7,0,0,0.7] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.46,0.70,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '14%', fontSize: 26, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 出口亮光（右側）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], scale:[0.3,0.3,0.3,0.3,1.2,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', right: '6%', top: '18%', fontSize: 28, zIndex: 5 }}
        >🌤️</motion.div>
        {/* 穿出的閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.2,0,0], opacity:[0,0,0,0,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.54,0.64,0.74,0.94] }}
          style={{ position: 'absolute', right: '14%', top: '26%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,235,59,0.9), transparent 70%)', zIndex: 6 }}
        />
      </>}

      {/* ════ Scene B：聯繫上（訊號穿透雜訊接通）════ */}
      {!isHardship && <>
        {/* 左側：打電話的人（小版，固定不動）*/}
        <div style={{ position: 'absolute', left: '4%', top: '28%', zIndex: 5 }}>
          <svg width="32" height="44" viewBox="0 0 32 44">
            <circle cx="16" cy="6" r="5.5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
            <line x1="16" y1="11" x2="15" y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="15" y1="16" x2="6"  y2="21" stroke="#1a237e" strokeWidth="2"   strokeLinecap="round"/>
            <line x1="15" y1="16" x2="24" y2="19" stroke="#1a237e" strokeWidth="2"   strokeLinecap="round"/>
            <line x1="15" y1="26" x2="21" y2="37" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="15" y1="26" x2="9"  y2="37" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        {/* 訊號波從左側發出，穿過雜訊到達右側 */}
        {[0,1,2].map(i => (
          <motion.div key={i}
            animate={{ x:[0,0,200,200,0], opacity:[0,0,0.8,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.52,0.62,0.94], delay: i*0.12 }}
            style={{ position: 'absolute', left: 'calc(4% + 34px)', top: `calc(38% + ${(i-1)*10}px)`, fontSize: 11, color: '#1565c0', fontWeight: 900, zIndex: 5 }}
          >~</motion.div>
        ))}
        {/* 中段：雜訊阻擋（靜態雜訊感）*/}
        <motion.div
          animate={{ opacity:[0.7,0.7,0.7,0,0,0.7] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.52,0.70,0.94] }}
          style={{ position: 'absolute', left: '40%', top: '22%', fontSize: 26, zIndex: 4 }}
        >📵</motion.div>
        {/* 右側：電話接通 */}
        <motion.div
          animate={{ scale:[0.6,0.6,0.6,0.6,1.3,1,0.6], opacity:[0.3,0.3,0.3,0.3,1,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.62,0.74,0.94] }}
          style={{ position: 'absolute', right: '6%', top: '22%', fontSize: 32, zIndex: 6 }}
        >{obj.emoji}</motion.div>
        {/* 接通閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.2,0,0], opacity:[0,0,0,0,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.54,0.64,0.74,0.94] }}
          style={{ position: 'absolute', right: '10%', top: '26%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.85), transparent 70%)', zIndex: 5 }}
        />
        {/* CONNECTED */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.64,0.68,0.80,0.94] }}
          style={{ position: 'absolute', right: '4%', top: '58%', fontSize: 8, fontWeight: 900, color: '#43a047', letterSpacing: 1, zIndex: 8 }}
        >CONNECTED</motion.div>
      </>}

      {/* ─── 人物：穿越中央（僅難關場景用）─── */}
      {isHardship && (
        <motion.div
          animate={{ x:[0,0,195,191,191,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '4%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0.6,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.46,0.58,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetParallelScene({ obj, meaning }) {
  const isRelationship = obj.label === '關係';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：相處融洽（兩人並肩走）════ */}
      {isRelationship && <>
        {/* 人物 A（主角，左）*/}
        <motion.div
          animate={{ x:[0,0,170,166,166,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '34%', zIndex: 10 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.48, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 人物 B（同伴，右，身體橘色系區分）*/}
        <motion.div
          animate={{ x:[0,0,170,166,166,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: 'calc(6% + 46px)', top: '34%', zIndex: 10 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.52, repeat: Infinity, ease:'easeInOut', delay: 0.12 }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 🤝 出現在中間頂部 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], y:[0,0,0,0,-8,-8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.54,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '8%', fontSize: 26, zIndex: 12 }}
        >{obj.emoji}</motion.div>
        {/* 綠色和諧光圈 */}
        <motion.div
          animate={{ scale:[0,0,0,0,1.8,0,0], opacity:[0,0,0,0,0.7,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.64,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '28%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.8), transparent 70%)', zIndex: 9 }}
        />
      </>}

      {/* ════ Scene B：進展還不錯（沿著進度條前進）════ */}
      {!isRelationship && <>
        {/* 進度條底色 */}
        <div style={{ position: 'absolute', left: '8%', right: '8%', top: '50%', height: 8, background: '#e0e0e0', borderRadius: 4, zIndex: 3 }} />
        {/* 進度條填充 */}
        <motion.div
          animate={{ width:['0%','0%','72%','72%','72%','0%'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.62,0.76,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '8%', top: '50%', height: 8, background: 'linear-gradient(90deg, #43a047, #66bb6a)', borderRadius: 4, zIndex: 4 }}
        />
        {/* 📈 右側顯示 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], scale:[0.5,0.5,0.5,0.5,1.2,1,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.54,0.62,0.76,0.94] }}
          style={{ position: 'absolute', right: '8%', top: '32%', fontSize: 30, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 人物沿進度條走 */}
        <motion.div
          animate={{ x:[0,0,170,170,170,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.62,0.76,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '8%', top: 'calc(50% - 56px)', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0.6,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.46,0.58,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetReturnScene({ obj, meaning }) {
  const isHome  = obj.label === '家';
  const isReply = obj.label === '回覆';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：回來（人從右跑回家）════ */}
      {isHome && <>
        {/* 房子（左側目的地）*/}
        <motion.div
          animate={{ scale:[1,1,1,1,1.15,1,1], filter:['brightness(1)','brightness(1)','brightness(1)','brightness(1)','brightness(1.4)','brightness(1)','brightness(1)'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.64,0.72,0.94] }}
          style={{ position: 'absolute', left: '4%', top: '10%', zIndex: 3 }}>
          <svg width="64" height="72" viewBox="0 0 64 72">
            <polygon points="32,4 4,32 60,32" fill="#ef9a9a" stroke="#e53935" strokeWidth="1.5"/>
            <rect x="10" y="30" width="44" height="40" rx="2" fill="#fff3e0" stroke="#e65100" strokeWidth="1.5"/>
            <rect x="24" y="48" width="16" height="22" rx="2" fill="#a5d6a7" stroke="#388e3c" strokeWidth="1"/>
            <rect x="14" y="36" width="12" height="12" rx="2" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1"/>
            <rect x="38" y="36" width="12" height="12" rx="2" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1"/>
          </svg>
        </motion.div>
        {/* 🏠 emoji */}
        <div style={{ position: 'absolute', left: 'calc(4% + 20px)', top: '6%', fontSize: 10, fontWeight: 900, color: '#e53935' }}>HOME</div>
        {/* 人：從右往左跑（鏡像）*/}
        <motion.div
          animate={{ x:[0,0,-160,-156,-156,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', right: '8%', top: '34%', zIndex: 10, transform: 'scaleX(-1)' }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0.6,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.46,0.58,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：回覆（訊息氣泡從右飛回左）════ */}
      {isReply && <>
        {/* 左側：等待中的人 */}
        <div style={{ position: 'absolute', left: '4%', top: '32%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 等待中的...氣泡 */}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.48,0.70,0.80,0.94] }}
          style={{ position: 'absolute', left: 'calc(4% + 38px)', top: '24%', background: '#e0e0e0', borderRadius: 12, padding: '4px 10px', fontSize: 13, color: '#757575', zIndex: 6 }}
        >・・・</motion.div>
        {/* 右側：回覆方 */}
        <div style={{ position: 'absolute', right: '4%', top: '32%', zIndex: 5, transform: 'scaleX(-1)' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 回覆氣泡從右往左飛 */}
        <motion.div
          animate={{ x:[0,0,-170,-170,-170,0], opacity:[0,0,0,1,0.8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.52,0.70,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', right: 'calc(4% + 46px)', top: '16%', background: '#e3f2fd', borderRadius: 12, padding: '4px 10px', fontSize: 11, color: '#1565c0', fontWeight: 700, whiteSpace: 'nowrap', zIndex: 7 }}
        >回覆來了！{obj.emoji}</motion.div>
      </>}

      {/* ════ Scene C：拿回來（包裹飛回手中）════ */}
      {!isHome && !isReply && <>
        {/* 左側：等待的人 */}
        <div style={{ position: 'absolute', left: '4%', top: '32%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 包裹從右往左飛回 */}
        <motion.div
          animate={{ x:[0,0,-190,-190,-190,0], y:[0,0,-8,-8,-8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.58,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', right: '8%', top: '36%', fontSize: 32, zIndex: 7 }}
        >{obj.emoji}</motion.div>
        {/* 抵達閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.0,0,0], opacity:[0,0,0,0,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.64,0.72,0.94] }}
          style={{ position: 'absolute', left: 'calc(4% + 20px)', top: '30%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.9), transparent 70%)', zIndex: 6 }}
        />
        {/* MINE! */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.64,0.68,0.80,0.94] }}
          style={{ position: 'absolute', left: 'calc(4% + 42px)', top: '22%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}
        >MINE!</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetFleeScene({ obj, meaning }) {
  const isVacation = obj.label === '度假';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：逃離去度假（人越跑越遠，海灘出現）════ */}
      {isVacation && <>
        {/* 左側：壓力來源（鬧鐘/工作堆）*/}
        <motion.div
          animate={{ opacity:[0.8,0.8,0.8,0.3,0.1,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.52,0.70,0.94] }}
          style={{ position: 'absolute', left: '4%', top: '18%', zIndex: 3 }}>
          <svg width="44" height="52" viewBox="0 0 44 52">
            <rect x="4" y="14" width="36" height="34" rx="4" fill="#fff3e0" stroke="#e65100" strokeWidth="2"/>
            <line x1="22" y1="6" x2="22" y2="14" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="8" cy="10" r="4" fill="#ef9a9a" stroke="#e53935" strokeWidth="1.5"/>
            <circle cx="36" cy="10" r="4" fill="#ef9a9a" stroke="#e53935" strokeWidth="1.5"/>
            <line x1="22" y1="28" x2="22" y2="38" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="22" y1="28" x2="32" y2="35" stroke="#e65100" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 右側：海灘目的地（漸漸出現）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], scale:[0.5,0.5,0.5,0.5,1.1,1,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', right: '4%', top: '12%', fontSize: 36, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 人：越跑越快，跑到右側 */}
        <motion.div
          animate={{ x:[0,0,185,181,181,0], scale:[1,1,0.85,0.85,0.85,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '6%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.7,0.7,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.16,0.48,0.58,0.94] }}
            style={{ position: 'absolute', left: -44, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 38, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 28, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 44, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.40, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：逍遙法外（溜走沒被抓到）════ */}
      {!isVacation && <>
        {/* 中央：壞事現場 */}
        <motion.div
          animate={{ opacity:[0.8,0.8,0.8,0,0,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.46,0.70,0.94] }}
          style={{ position: 'absolute', left: '30%', top: '18%', fontSize: 28, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 右側：追查中的警察/查緝圖示 */}
        <div style={{ position: 'absolute', right: '6%', top: '22%', zIndex: 5 }}>
          <svg width="36" height="44" viewBox="0 0 36 44">
            {/* 帽子 */}
            <rect x="4" y="6" width="28" height="8" rx="3" fill="#1565c0"/>
            <rect x="8" y="2" width="20" height="8" rx="2" fill="#1976d2"/>
            {/* 臉 */}
            <circle cx="18" cy="22" r="8" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
            {/* 身體 */}
            <rect x="8" y="30" width="20" height="14" rx="3" fill="#1565c0"/>
          </svg>
        </div>
        {/* 警察視線掃到右側，但人已不在 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.7,0.7,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.60,0.76,0.94] }}
          style={{ position: 'absolute', right: 'calc(6% + 36px)', top: '30%', fontSize: 12, color: '#1565c0', fontWeight: 900, zIndex: 6 }}
        >??</motion.div>
        {/* 人：從中央溜走到右側後消失 */}
        <motion.div
          animate={{ x:[0,0,160,160,160,0], opacity:[1,1,1,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.54,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '18%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.7,0.7,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.16,0.44,0.54,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.42, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* ESCAPED! */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.56,0.62,0.68,0.80,0.94] }}
          style={{ position: 'absolute', left: '20%', top: '14%', fontSize: 11, fontWeight: 900, color: '#e53935', letterSpacing: 1, zIndex: 12 }}
        >ESCAPED! 😈</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetMountScene({ obj, meaning }) {
  const isBus      = obj.label === '公車';
  const isTrack    = obj.label === '軌道';
  const isContinue = obj.label === '繼續';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：上車（踩上公車）════ */}
      {isBus && <>
        {/* 公車（右側）*/}
        <div style={{ position: 'absolute', right: '4%', top: '8%', zIndex: 3 }}>
          <svg width="96" height="80" viewBox="0 0 96 80">
            <rect x="0" y="8" width="96" height="68" rx="8" fill="#ffeb3b" stroke="#f9a825" strokeWidth="2"/>
            <rect x="4" y="4" width="88" height="12" rx="4" fill="#f9a825"/>
            {/* 窗戶 */}
            {[8, 36, 62].map(x => (
              <rect key={x} x={x} y="20" width="22" height="18" rx="3" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1.5"/>
            ))}
            {/* 門（左側）*/}
            <rect x="4" y="44" width="20" height="30" rx="2" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5"/>
            {/* 車輪 */}
            <circle cx="20" cy="76" r="0" fill="#424242"/>
            <circle cx="76" cy="76" r="0" fill="#424242"/>
          </svg>
        </div>
        {/* 公車 emoji */}
        <div style={{ position: 'absolute', right: 'calc(4% + 34px)', top: '4%', fontSize: 14, fontWeight: 900, color: '#f9a825' }}>{obj.emoji}</div>
        {/* 人：走右到門口，略往上跨入 */}
        <motion.div
          animate={{ x:[0,0,148,148,148,0], y:[0,0,-8,-8,-8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.56,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.20,0.46,0.56,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 門關上動畫 */}
        <motion.div
          animate={{ scaleX:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.54,0.62,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', right: 'calc(4% + 74px)', top: 'calc(8% + 44px)', width: 20, height: 30, background: '#f9a825', transformOrigin: 'left', zIndex: 12, borderRadius: '0 2px 2px 0' }}
        />
      </>}

      {/* ════ Scene B：進展如何（人踩在鐵軌上走，問走到幾站）════ */}
      {isTrack && <>
        {/* 鐵軌（橫貫畫面）*/}
        <div style={{ position: 'absolute', left: '4%', right: '4%', top: '55%', zIndex: 3 }}>
          <svg width="100%" height="24" viewBox="0 0 260 24">
            <line x1="0"   y1="6"  x2="260" y2="6"  stroke="#8d6e63" strokeWidth="3"/>
            <line x1="0"   y1="18" x2="260" y2="18" stroke="#8d6e63" strokeWidth="3"/>
            {[0,1,2,3,4,5,6].map(i => (
              <line key={i} x1={i*40} y1="4" x2={i*40} y2="20" stroke="#795548" strokeWidth="4" strokeLinecap="round"/>
            ))}
          </svg>
        </div>
        {/* 역站 마커 (站牌 A→B→C→D) */}
        {['A','B','C','D'].map((s, i) => (
          <div key={s} style={{ position: 'absolute', left: `calc(6% + ${i * 28}%)`, top: '38%', zIndex: 5, textAlign: 'center' }}>
            <motion.div
              animate={{ background: i < 2 ? ['#43a047','#43a047','#43a047','#43a047','#43a047','#43a047'] : i === 2 ? ['#e0e0e0','#e0e0e0','#e0e0e0','#1565c0','#1565c0','#e0e0e0'] : ['#e0e0e0','#e0e0e0','#e0e0e0','#e0e0e0','#e0e0e0','#e0e0e0'] }}
              transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.52,0.72,0.94] }}
              style={{ width: 16, height: 16, borderRadius: '50%', margin: '0 auto', border: '2px solid #fff', boxShadow: '0 0 0 2px #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', fontWeight: 900 }}
            >{s}</motion.div>
          </div>
        ))}
        {/* 「走到哪了？」問號 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], y:[0,0,0,0,-4,-4,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.60,0.76,0.94] }}
          style={{ position: 'absolute', left: 'calc(6% + 56% + 4px)', top: '22%', fontSize: 18, zIndex: 8 }}
        >❓</motion.div>
        {/* 人：踩在軌道上從左走到 C 站停下 */}
        <motion.div
          animate={{ x:[0,0,134,130,130,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.48,0.56,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '4%', top: 'calc(55% - 58px)', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0.6,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.16,0.44,0.56,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene C：別拖了繼續做（人猶豫→被推著跑）════ */}
      {isContinue && <>
        {/* 時鐘滴答 */}
        <motion.div
          animate={{ rotate:[0,0,6,-6,6,-6,0], opacity:[1,1,1,0.4,0.4,0.4,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.20,0.28,0.36,0.44,0.52] }}
          style={{ position: 'absolute', left: '44%', top: '8%', fontSize: 28, zIndex: 4 }}
        >⏰</motion.div>
        {/* GO! 文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], scale:[0.5,0.5,0.5,0.5,0.5,1.4,1,0.5], x:[0,0,0,0,0,0,40,40] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.44,0.52,0.56,0.72,0.94] }}
          style={{ position: 'absolute', left: '12%', top: '14%', fontSize: 22, fontWeight: 900, color: '#e53935', letterSpacing: 2, zIndex: 8 }}
        >GO! {obj.emoji}</motion.div>
        {/* 人：先原地猶豫晃，再突然向右衝 */}
        <motion.div
          animate={{ x:[0,0,2,-2,2,-2,0,0,180,176,176,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.16,0.24,0.32,0.40,0.46,0.50,0.66,0.72,0.80,0.94] }}
          style={{ position: 'absolute', left: '8%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0,0,0,0,0,0.7,0.7,0,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.20,0.30,0.40,0.46,0.52,0.56,0.66,0.72,0.80,0.94] }}
            style={{ position: 'absolute', left: -40, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 24, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 38, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene D：相處融洽（兩人面對面，笑臉升起）════ */}
      {!isBus && !isTrack && !isContinue && <>
        {/* 左側人物 */}
        <div style={{ position: 'absolute', left: '12%', top: '28%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 右側人物（鏡像，橘色）*/}
        <div style={{ position: 'absolute', right: '12%', top: '28%', transform: 'scaleX(-1)', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 中央笑臉升起 */}
        <motion.div
          animate={{ y:[0,0,0,0,-12,-12,0], opacity:[0,0,0,0,1,1,0], scale:[0.3,0.3,0.3,0.3,1.3,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.50,0.60,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '22%', fontSize: 30, zIndex: 8 }}
        >{obj.emoji}</motion.div>
        {/* 連線弧 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.6,0.6,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.54,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: '12%', top: '42%', zIndex: 4 }}>
          <svg width="76%" height="4" viewBox="0 0 200 4" style={{ overflow: 'visible' }}>
            <path d="M 0 2 Q 100 -8 200 2" stroke="#a5d6a7" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
          </svg>
        </motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function GetDismountScene({ obj, meaning }) {
  const isBus    = obj.label === '公車';
  const isWork   = obj.label === '公司';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：下車（從公車踩下來）════ */}
      {isBus && <>
        {/* 公車（左側，停靠中）*/}
        <div style={{ position: 'absolute', left: '2%', top: '10%', zIndex: 3 }}>
          <svg width="90" height="76" viewBox="0 0 90 76">
            <rect x="0" y="8" width="90" height="64" rx="8" fill="#ffeb3b" stroke="#f9a825" strokeWidth="2"/>
            <rect x="2" y="4" width="86" height="12" rx="4" fill="#f9a825"/>
            {[6, 32, 58].map(x => (
              <rect key={x} x={x} y="20" width="20" height="16" rx="3" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1.5"/>
            ))}
            {/* 門（右側）*/}
            <rect x="70" y="42" width="18" height="28" rx="2" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5"/>
          </svg>
        </div>
        {/* 公車 emoji */}
        <div style={{ position: 'absolute', left: 'calc(2% + 28px)', top: '6%', fontSize: 14, fontWeight: 900, color: '#f9a825' }}>{obj.emoji}</div>
        {/* 人：從門口往下踩（y 往下移）*/}
        <motion.div
          animate={{ x:[0,0,0,0,60,60,0], y:[0,0,0,0,18,18,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.44,0.56,0.74,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: 'calc(2% + 64px)', top: '26%', zIndex: 10 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.48, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 到站！*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.62,0.66,0.78,0.94] }}
          style={{ position: 'absolute', right: '8%', top: '30%', fontSize: 11, fontWeight: 900, color: '#f9a825', zIndex: 8 }}
        >到站！</motion.div>
      </>}

      {/* ════ Scene B：下班（從大樓出來，雙手自由高舉）════ */}
      {isWork && <>
        {/* 大樓（右側）*/}
        <div style={{ position: 'absolute', right: '4%', top: '6%', zIndex: 3 }}>
          <svg width="64" height="108" viewBox="0 0 64 108">
            <rect x="0" y="0" width="64" height="108" rx="3" fill="#e8eaf6" stroke="#9fa8da" strokeWidth="2"/>
            {[0,1,2,3].map(row => [0,1,2].map(col => (
              <rect key={`${row}-${col}`} x={8+col*18} y={8+row*22} width="12" height="14" rx="2"
                fill={row < 2 ? '#fff9c4' : '#b3e5fc'} stroke="#9fa8da" strokeWidth="1"/>
            )))}
            {/* 門 */}
            <rect x="20" y="84" width="24" height="24" rx="2" fill="#a5d6a7" stroke="#388e3c" strokeWidth="1.5"/>
          </svg>
        </div>
        {/* 🏢 emoji */}
        <div style={{ position: 'absolute', right: 'calc(4% + 16px)', top: '2%', fontSize: 14, fontWeight: 900, color: '#7986cb' }}>{obj.emoji}</div>
        {/* 時鐘 */}
        <motion.div
          animate={{ opacity:[0.6,0.6,0.6,0,0,0.6] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.70,0.94] }}
          style={{ position: 'absolute', right: 'calc(4% + 68px)', top: '8%', fontSize: 22, zIndex: 5 }}
        >🕔</motion.div>
        {/* 人：從大樓出來往左走 */}
        <motion.div
          animate={{ x:[0,0,-130,-126,-126,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.48,0.56,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', right: 'calc(4% + 24px)', top: '34%', zIndex: 10, transform: 'scaleX(-1)' }}>
          <motion.div
            animate={{ opacity:[0,0,0.6,0.6,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.18,0.44,0.56,0.94] }}
            style={{ position: 'absolute', left: -36, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 30, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
            <div style={{ width: 22, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #bbdefb)' }} />
            <div style={{ width: 34, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #90caf9)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 自由！*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], y:[0,0,0,0,0,-6,-6,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.62,0.66,0.78,0.94] }}
          style={{ position: 'absolute', left: '8%', top: '18%', fontSize: 13, fontWeight: 900, color: '#43a047', zIndex: 8 }}
        >下班啦！🎉</motion.div>
      </>}

      {/* ════ Scene C：開個好頭（火箭起飛）════ */}
      {!isBus && !isWork && <>
        {/* 起跑線 */}
        <div style={{ position: 'absolute', left: '8%', top: '20%', bottom: 22, width: 3, background: '#bdbdbd', zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '6%', top: '18%', fontSize: 10, color: '#9e9e9e', fontWeight: 700 }}>START</div>
        {/* 火箭向右飛出 */}
        <motion.div
          animate={{ x:[0,0,200,196,196,0], y:[0,0,-30,-30,-30,0], rotate:[0,0,-20,-20,-20,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.46,0.56,0.74,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '10%', top: '38%', fontSize: 32, zIndex: 8 }}
        >{obj.emoji}</motion.div>
        {/* 噴射尾焰 */}
        <motion.div
          animate={{ x:[0,0,180,176,176,0], opacity:[0,0,0.8,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.20,0.44,0.56,0.94] }}
          style={{ position: 'absolute', left: '6%', top: 'calc(38% + 14px)', zIndex: 7 }}>
          <div style={{ width: 40, height: 10, background: 'linear-gradient(90deg, #ff5722, #ffeb3b, transparent)', borderRadius: 6 }} />
        </motion.div>
        {/* GREAT START! */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], scale:[0.5,0.5,0.5,0.5,0.5,1.2,1,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.60,0.66,0.78,0.94] }}
          style={{ position: 'absolute', right: '6%', top: '20%', fontSize: 11, fontWeight: 900, color: '#1565c0', letterSpacing: 1, zIndex: 8, textAlign: 'right' }}
        >GREAT<br/>START! ✨</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function BreakIntrudeScene({ obj, meaning }) {
  const isHouse = obj.label === '房子';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：闖入房子（破門進入）════ */}
      {isHouse && <>
        {/* 房子 SVG（右側）*/}
        <div style={{ position: 'absolute', right: '4%', top: '6%', zIndex: 3 }}>
          <svg width="88" height="96" viewBox="0 0 88 96">
            <polygon points="44,4 4,38 84,38" fill="#ef9a9a" stroke="#e53935" strokeWidth="2"/>
            <rect x="8" y="36" width="72" height="58" rx="2" fill="#fff3e0" stroke="#e65100" strokeWidth="2"/>
            {/* 窗戶 */}
            <rect x="14" y="44" width="20" height="18" rx="3" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1.5"/>
            <rect x="54" y="44" width="20" height="18" rx="3" fill="#b3e5fc" stroke="#0288d1" strokeWidth="1.5"/>
            {/* 門（被打破後裂開）*/}
            <rect x="32" y="66" width="24" height="28" rx="2" fill="#a5d6a7" stroke="#388e3c" strokeWidth="1.5"/>
          </svg>
        </div>
        {/* 🏠 emoji */}
        <div style={{ position: 'absolute', right: 'calc(4% + 30px)', top: '2%', fontSize: 13, fontWeight: 900, color: '#e53935' }}>{obj.emoji}</div>
        {/* 門被打破（裂縫動畫）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], rotate:[0,0,0,0,-30,-30,0], x:[0,0,0,0,-12,-12,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.48,0.56,0.72,0.94] }}
          style={{ position: 'absolute', right: 'calc(4% + 32px)', top: 'calc(6% + 66px)', width: 24, height: 28, background: '#a5d6a7', borderRadius: '2px 0 0 2px', border: '1.5px solid #388e3c', transformOrigin: 'left center', zIndex: 6 }}
        />
        {/* 撞擊閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.4,0,0], opacity:[0,0,0,0,0.9,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.50,0.58,0.66,0.94] }}
          style={{ position: 'absolute', right: 'calc(4% + 24px)', top: 'calc(6% + 56px)', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.95), transparent 70%)', zIndex: 7 }}
        />
        {/* 人：從左衝向房子門 */}
        <motion.div
          animate={{ x:[0,0,165,161,161,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '4%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.7,0.7,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.16,0.42,0.54,0.94] }}
            style={{ position: 'absolute', left: -44, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 38, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef9a9a)' }} />
            <div style={{ width: 28, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ffcdd2)' }} />
            <div style={{ width: 44, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef9a9a)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.38, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：打入圈子（打破高牆擠進去）════ */}
      {!isHouse && <>
        {/* 高牆（中央）*/}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '8%', zIndex: 3 }}>
          <svg width="20" height="108" viewBox="0 0 20 108">
            {[0,1,2,3,4,5].map(row => (
              <rect key={row} x={row%2===0?0:4} y={row*18} width="16" height="15" rx="2"
                fill="#ef9a9a" stroke="#e57373" strokeWidth="1"/>
            ))}
          </svg>
        </div>
        {/* 圈子 emoji（右側）*/}
        <motion.div
          animate={{ opacity:[0.3,0.3,0.3,0.3,1,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.50,0.60,0.76,0.94] }}
          style={{ position: 'absolute', right: '8%', top: '14%', fontSize: 30, zIndex: 4 }}
        >{obj.emoji}</motion.div>
        {/* 撞牆閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.6,0,0], opacity:[0,0,0,0,0.9,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.50,0.58,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '26%', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.95), transparent 70%)', zIndex: 8 }}
        />
        {/* 牆裂開 */}
        <motion.div
          animate={{ scaleY:[1,1,1,1,0,0,1], opacity:[1,1,1,1,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.52,0.58,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '8%', zIndex: 9, transformOrigin: 'bottom' }}>
          <svg width="20" height="108" viewBox="0 0 20 108">
            {[0,1,2,3,4,5].map(row => (
              <rect key={row} x={row%2===0?0:4} y={row*18} width="16" height="15" rx="2"
                fill="#ef9a9a" stroke="#e57373" strokeWidth="1"/>
            ))}
          </svg>
        </motion.div>
        {/* 人：衝破中央牆進入右側圈子 */}
        <motion.div
          animate={{ x:[0,0,148,144,144,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '4%', top: '34%', zIndex: 10 }}>
          <motion.div
            animate={{ opacity:[0,0,0.7,0.7,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.10,0.16,0.42,0.54,0.94] }}
            style={{ position: 'absolute', left: -44, top: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: 38, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef9a9a)' }} />
            <div style={{ width: 28, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ffcdd2)' }} />
            <div style={{ width: 44, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, transparent, #ef9a9a)' }} />
          </motion.div>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.38, repeat: Infinity, ease:'easeInOut' }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 進去了！*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.50,0.58,0.64,0.68,0.80,0.94] }}
          style={{ position: 'absolute', right: '4%', top: '58%', fontSize: 10, fontWeight: 900, color: '#43a047', zIndex: 8 }}
        >進去了！</motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function BreakCollapseScene({ obj, meaning }) {
  const isCar   = obj.label === '車子';
  const isChunk = obj.label === '大塊';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 52px)', height: 2, background: '#cfd8dc', zIndex: 2 }} />

      {/* ════ Scene A：車子故障（車頭往下栽）════ */}
      {isCar && <>
        {/* 路面 */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 'calc(34% + 28px)', height: 28, background: '#616161', zIndex: 1 }}>
          <div style={{ position: 'absolute', left: '10%', right: '10%', top: '50%', height: 2, background: '#fff', opacity: 0.3, borderRadius: 1 }} />
        </div>
        {/* 車子：正常走 → 車頭向下傾斜（前輪爆胎往下壓）*/}
        <motion.div
          animate={{ x:[0,0,70,70,70,0], y:[0,0,0,14,14,0], rotate:[0,0,0,12,12,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.46,0.76,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '8%', top: 'calc(34% - 20px)', zIndex: 5, transformOrigin: 'right bottom' }}>
          <svg width="80" height="38" viewBox="0 0 80 38">
            <rect x="0" y="16" width="80" height="18" rx="5" fill="#90caf9" stroke="#1565c0" strokeWidth="2"/>
            <rect x="10" y="4" width="56" height="20" rx="8" fill="#bbdefb" stroke="#1565c0" strokeWidth="1.5"/>
            <rect x="14" y="6" width="20" height="12" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1"/>
            <rect x="42" y="6" width="20" height="12" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1"/>
            <circle cx="16" cy="34" r="6" fill="#424242" stroke="#212121" strokeWidth="1.5"/>
            <circle cx="64" cy="34" r="6" fill="#424242" stroke="#212121" strokeWidth="1.5"/>
          </svg>
        </motion.div>
        {/* 零件往下掉 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], y:[0,0,0,0,28,32,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.46,0.54,0.70,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: 'calc(8% + 20px)', top: 'calc(34% + 8px)', fontSize: 16, zIndex: 7 }}
        >⚙️</motion.div>
        {/* ⚠️ 閃爍 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,0.3,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.48,0.56,0.64,0.72,0.94] }}
          style={{ position: 'absolute', left: 'calc(8% + 22px)', top: 'calc(34% - 44px)', fontSize: 24, zIndex: 8 }}
        >⚠️</motion.div>
      </>}

      {/* ════ Scene B：拆解（大塊從上往下摔碎，碎片落地）════ */}
      {isChunk && <>
        {/* 大塊從上方落下 */}
        <motion.div
          animate={{ y:[0,0,0,108,108,0], rotate:[0,0,0,12,12,0], opacity:[1,1,1,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.46,0.70,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -32, top: '6%', zIndex: 5 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect x="0" y="0" width="64" height="64" rx="8" fill="#fff9c4" stroke="#f9a825" strokeWidth="2.5"/>
            <text x="32" y="40" textAnchor="middle" fontSize="28">{obj.emoji}</text>
          </svg>
        </motion.div>
        {/* 撞地閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,3,0,0], opacity:[0,0,0,0,0.9,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.48,0.54,0.62,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -24, top: 'calc(34% + 8px)', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.9), transparent 70%)', zIndex: 8 }}
        />
        {/* 碎片往下四散落地 */}
        {[{x:-36,dy:30},{x:36,dy:36},{x:-16,dy:48},{x:28,dy:44},{x:4,dy:52},{x:-30,dy:54}].map((p,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,0.9,0.8,0], x:[0,0,0,0,0,p.x,p.x,0], y:[0,0,0,0,0,p.dy,p.dy+6,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.46,0.52,0.60,0.72,0.94], delay: i*0.02 }}
            style={{ position: 'absolute', left: '50%', top: 'calc(34% + 10px)', width: 9+i%3*3, height: 9+i%2*4, background: '#f9a825', borderRadius: 2, rotate: `${i*25}deg`, zIndex: 7 }}
          />
        ))}
      </>}

      {/* ════ Scene C：情緒崩潰（人往下塌陷）════ */}
      {!isCar && !isChunk && <>
        {/* 人物：從直立往下縮塌（scaleY + y）*/}
        <motion.div
          animate={{ y:[0,0,0,20,26,26,0], scaleY:[1,1,1,0.70,0.60,0.60,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.26,0.46,0.56,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '14%', zIndex: 8, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="22" y2="48" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <line x1="18" y1="33" x2="14" y2="48" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
            <rect x="18" y="46" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="10" y="46" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* ↓↓ 下壓箭頭 */}
        <motion.div
          animate={{ y:[0,0,0,8,12,12,0], opacity:[0.3,0.3,0.6,0.95,0.95,0.95,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.18,0.46,0.56,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '4%', fontSize: 18, color: '#7986cb', fontWeight: 900, zIndex: 7 }}
        >↓↓</motion.div>
        {/* 😭 塌下去後出現 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], scale:[0.3,0.3,0.3,0.3,0.3,1.3,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.26,0.44,0.54,0.60,0.74,0.94] }}
          style={{ position: 'absolute', left: 'calc(50% + 24px)', top: '30%', fontSize: 26, zIndex: 9 }}
        >{obj.emoji}</motion.div>
        {/* 淚水往下滴 */}
        {[-5, 5].map((dx, i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,0,1,0,1,0], y:[0,0,0,0,0,0,0,16,0,16] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.26,0.44,0.54,0.58,0.62,0.72,0.76,0.84], delay: i*0.18 }}
            style={{ position: 'absolute', left: `calc(50% + ${dx - 2}px)`, top: '30%', width: 4, height: 7, background: '#90caf9', borderRadius: '50% 50% 60% 60%', zIndex: 10 }}
          />
        ))}
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

function BreakSplitScene({ obj, meaning }) {
  const isRelation = obj.label === '關係';
  const isSignal   = obj.label === '訊號';

  // 所有場景核心邏輯：
  // BREAK（衝擊打碎）→ UP（碎片往上彈飛）→ 各自分散（完全脫離）

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：分手（❤️ 被打碎，兩半往 UP 飛出）════ */}
      {isRelation && <>
        {/* 完整心（靜置）*/}
        <motion.div
          animate={{ scale:[1,1,1,0,0,0,1], opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '22%', fontSize: 42, zIndex: 5 }}
        >❤️</motion.div>
        {/* ① BREAK：衝擊閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.6,0,0,0], opacity:[0,0,0,1,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.40,0.48,0.60,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '24%', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.9), transparent 70%)', zIndex: 8 }}
        />
        {/* ② UP：左半心往左上彈飛 */}
        <motion.div
          animate={{ x:[0,0,0,0,-60,-64,0], y:[0,0,0,0,-44,-48,0], rotate:[0,0,0,0,-25,-28,0], opacity:[0,0,0,0,1,0.8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.54,0.70,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '22%', fontSize: 42, zIndex: 6, clipPath: 'inset(0 52% 0 0)' }}
        >💔</motion.div>
        {/* ② UP：右半心往右上彈飛 */}
        <motion.div
          animate={{ x:[0,0,0,0,60,64,0], y:[0,0,0,0,-38,-42,0], rotate:[0,0,0,0,25,28,0], opacity:[0,0,0,0,1,0.8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.54,0.70,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '22%', fontSize: 42, zIndex: 6, clipPath: 'inset(0 0 0 52%)' }}
        >💔</motion.div>
        {/* ③ 結果：兩人分開走 */}
        <motion.div
          animate={{ x:[0,0,0,0,0,-88,-88,0], opacity:[1,1,1,1,1,1,0.6,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: 'calc(50% - 44px)', top: '44%', zIndex: 9 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ x:[0,0,0,0,0,88,88,0], opacity:[1,1,1,1,1,1,0.6,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: 'calc(50% + 4px)', top: '44%', transform:'scaleX(-1)', zIndex: 9 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
      </>}

      {/* ════ Scene B：驅散人群（力量打進去 → 人往 UP 彈飛 → 四散）════ */}
      {!isRelation && !isSignal && <>
        {/* 聚集人群 */}
        <motion.div
          animate={{ scale:[1,1,1,0,0,0,1], opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -36, top: '28%', zIndex: 4 }}>
          <svg width="72" height="58" viewBox="0 0 72 58">
            {[8,20,36,52,64].map((cx,i) => (
              <g key={i}>
                <circle cx={cx} cy={i%2===0?12:20} r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
                <rect x={cx-5} y={i%2===0?19:27} width="10" height="16" rx="3" fill={i%2===0?'#1a237e':'#e65100'}/>
              </g>
            ))}
          </svg>
        </motion.div>
        {/* ① BREAK：衝擊波從中心爆開 */}
        <motion.div
          animate={{ scale:[0,0,0,3.2,0,0,0], opacity:[0,0,0,0.9,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.50,0.60,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '32%', width: 48, height: 48, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.85), transparent 70%)', zIndex: 8 }}
        />
        {/* ② UP：每個人先彈 UP 然後散開 */}
        {[{tx:-72,ty:-58},{tx:72,ty:-50},{tx:-48,ty:44},{tx:62,ty:48},{tx:6,ty:-66}].map((p,i) => (
          <motion.div key={i}
            animate={{
              opacity:[0,0,0,0,0,0.95,0.8,0],
              x:[0,0,0,0,0,p.tx,p.tx,0],
              y:[0,0,0,0,-28,p.ty,p.ty,0],
            }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.48,0.60,0.74,0.94], delay: i*0.03 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '36%', zIndex: 7 }}>
            <svg width="16" height="28" viewBox="0 0 16 28">
              <circle cx="8" cy="4" r="4" fill="#FDBCB4" stroke="#E59866" strokeWidth="0.8"/>
              <rect x="3" y="8" width="10" height="14" rx="3" fill={i%2===0?'#1a237e':'#e65100'}/>
            </svg>
          </motion.div>
        ))}
        {/* {obj.emoji} */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '18%', fontSize: 18, zIndex: 5 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene C：訊號斷（連線被打斷，兩端往 UP 彈開）════ */}
      {isSignal && <>
        {/* 兩支手機 */}
        {[{side:'left',color:'#b3e5fc'},{side:'right',color:'#ffcdd2'}].map(({side,color}) => (
          <div key={side} style={{ position: 'absolute', [side]: '6%', top: '26%', zIndex: 5 }}>
            <svg width="30" height="54" viewBox="0 0 30 54">
              <rect x="0" y="0" width="30" height="54" rx="6" fill="#424242" stroke="#212121" strokeWidth="1.5"/>
              <rect x="3" y="5" width="24" height="36" rx="3" fill={color}/>
              <circle cx="15" cy="48" r="3" fill="#616161"/>
            </svg>
          </div>
        ))}
        {/* ① 完整連線（直線）*/}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: 'calc(6% + 32px)', right: 'calc(6% + 32px)', top: '50%', height: 3, background: '#1565c0', borderRadius: 2, zIndex: 4 }}
        />
        {/* ① BREAK：衝擊閃光在中央 */}
        <motion.div
          animate={{ scale:[0,0,0,2.4,0,0,0], opacity:[0,0,0,0.9,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: 'calc(50% - 20px)', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.9), transparent 70%)', zIndex: 8 }}
        />
        {/* ② UP：左半段往左上彈 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,0.8,0], x:[0,0,0,0,-40,-44,0], y:[0,0,0,0,-22,-26,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.42,0.54,0.68,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: 'calc(6% + 32px)', top: '50%', width: '28%', height: 3, background: '#1565c0', borderRadius: 2, zIndex: 6, transformOrigin: 'left center' }}
        />
        {/* ② UP：右半段往右上彈 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,0.8,0], x:[0,0,0,0,40,44,0], y:[0,0,0,0,-18,-22,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.42,0.54,0.68,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', right: 'calc(6% + 32px)', top: '50%', width: '28%', height: 3, background: '#1565c0', borderRadius: 2, zIndex: 6, transformOrigin: 'right center' }}
        />
        {/* 📵 + CALL DROPPED */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.52,0.58,0.64,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', top: '28%', textAlign:'center', zIndex: 8 }}>
          <div style={{ fontSize: 22 }}>{obj.emoji}</div>
          <div style={{ fontSize: 9, fontWeight: 900, color: '#e53935', letterSpacing: 1, marginTop: 2 }}>CALL DROPPED</div>
        </motion.div>
      </>}

      {/* ─── meaning 文字 ─── */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.4,0.5,0.55,0.6,0.66,0.82,0.94] }}
        style={{ position: 'absolute', bottom: 4, left: 0, right: 0, textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#424242', zIndex: 15 }}
      >{meaning}</motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go down  (go-descend)
// GO 自己移動 + DOWN 往下
// ─────────────────────────────────────────────────
function GoDescendScene({ obj }) {
  const isSun    = obj.label === '太陽';
  const isSystem = obj.label === '系統';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：價格下降（折線自己往下走）════ */}
      {!isSun && !isSystem && <>
        {/* 圖表框 */}
        <div style={{ position: 'absolute', left: '10%', right: '10%', top: '14%', bottom: '20%', border: '2px solid #bdbdbd', borderRadius: 6, background: 'white', zIndex: 3 }}>
          <div style={{ position: 'absolute', left: 6, top: 4, fontSize: 9, color: '#757575', fontWeight: 700 }}>高</div>
          <div style={{ position: 'absolute', left: 6, bottom: 4, fontSize: 9, color: '#757575', fontWeight: 700 }}>低</div>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
            {/* DOWN 折線：從左上往右下走 */}
            <motion.polyline
              points="10,18 50,24 90,36 130,55 170,72 190,82"
              fill="none" stroke="#e53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              animate={{ pathLength:[0,0,1,1,1,0] }}
              transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.60,0.72,0.82,0.94] }}
              style={{ pathLength: 0 }}
            />
          </svg>
          {/* 📉 往下箭頭跟著線走 */}
          <motion.div
            animate={{ top:['14%','14%','70%','70%','14%'], opacity:[1,1,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.60,0.72,0.94] }}
            style={{ position: 'absolute', right: '6%', fontSize: 16, zIndex: 5 }}
          >📉</motion.div>
        </div>
        {/* 數字從大變小 */}
        <motion.div
          animate={{ opacity:[1,1,1,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.52,0.60,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '12%', fontSize: 13, fontWeight: 900, color: '#e53935', zIndex: 6 }}
        >$120 → $74 → $51</motion.div>
      </>}

      {/* ════ Scene B：日落（太陽自己往下走沉入地平線）════ */}
      {isSun && <>
        {/* 地平線 */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '22%', height: 3, background: '#8d6e63', zIndex: 4 }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '22%', background: '#8d6e63', zIndex: 3 }} />
        {/* 天空漸層（跟著日落變暗）*/}
        <motion.div
          animate={{ background:['linear-gradient(to bottom, #87ceeb, #b3e5fc)','linear-gradient(to bottom, #87ceeb, #b3e5fc)','linear-gradient(to bottom, #ff8f00, #ffca28)','linear-gradient(to bottom, #4a148c, #880e4f)','linear-gradient(to bottom, #87ceeb, #b3e5fc)'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.52,0.74,0.94] }}
          style={{ position: 'absolute', inset: 0, bottom: '22%', zIndex: 2 }}
        />
        {/* ☀️ 太陽：從上方弧線往下沉 */}
        <motion.div
          animate={{ top:['12%','12%','54%','66%','12%'], left:['70%','70%','46%','40%','70%'], opacity:[1,1,1,0.4,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.56,0.74,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', fontSize: 36, zIndex: 6 }}
        >☀️</motion.div>
        {/* DOWN 箭頭標示 */}
        <motion.div
          animate={{ opacity:[0,0,0.7,0.7,0], top:['30%','30%','38%','52%','30%'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.12,0.24,0.56,0.94] }}
          style={{ position: 'absolute', left: '52%', fontSize: 18, color: '#ff8f00', fontWeight: 900, zIndex: 7 }}
        >↓</motion.div>
      </>}

      {/* ════ Scene C：系統當機（電腦螢幕垮下去）════ */}
      {isSystem && <>
        {/* 正常運作的螢幕 */}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1], y:[0,0,0,0,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -40, top: '16%', zIndex: 5 }}>
          <svg width="80" height="64" viewBox="0 0 80 64">
            <rect x="0" y="0" width="80" height="56" rx="6" fill="#424242" stroke="#212121" strokeWidth="1.5"/>
            <rect x="4" y="4" width="72" height="46" rx="4" fill="#e8f5e9"/>
            {/* 正常狀態指示燈 */}
            <circle cx="40" cy="51" r="3" fill="#43a047"/>
            <text x="40" y="32" textAnchor="middle" fontSize="14" fill="#43a047">✓ OK</text>
            <rect x="6" y="56" width="68" height="8" rx="2" fill="#616161"/>
          </svg>
        </motion.div>
        {/* ① GO DOWN：螢幕整個往下掉 + 傾斜 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.95,0.9,0], y:[0,0,0,0,60,64,0], rotate:[0,0,0,0,8,9,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.54,0.68,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -40, top: '16%', zIndex: 6 }}>
          <svg width="80" height="64" viewBox="0 0 80 64">
            <rect x="0" y="0" width="80" height="56" rx="6" fill="#424242" stroke="#212121" strokeWidth="1.5"/>
            <rect x="4" y="4" width="72" height="46" rx="4" fill="#ffcdd2"/>
            <circle cx="40" cy="51" r="3" fill="#e53935"/>
            <text x="40" y="32" textAnchor="middle" fontSize="12" fill="#e53935">✕ ERROR</text>
            <rect x="6" y="56" width="68" height="8" rx="2" fill="#616161"/>
          </svg>
        </motion.div>
        {/* DOWN 箭頭 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.8,0.8,0], y:[0,0,0,0,28,32,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.54,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '10%', fontSize: 20, color: '#e53935', fontWeight: 900, zIndex: 8 }}
        >↓</motion.div>
        {/* 🖥️ */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go up  (go-ascend)
// GO 自己移動 + UP 往上
// ─────────────────────────────────────────────────
function GoAscendScene({ obj }) {
  const isBuilding = obj.label === '建築';
  const isFire     = obj.label === '火焰';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：價格上漲（折線自己往上走）════ */}
      {!isBuilding && !isFire && <>
        <div style={{ position: 'absolute', left: '10%', right: '10%', top: '14%', bottom: '20%', border: '2px solid #bdbdbd', borderRadius: 6, background: 'white', zIndex: 3 }}>
          <div style={{ position: 'absolute', left: 6, top: 4, fontSize: 9, color: '#757575', fontWeight: 700 }}>高</div>
          <div style={{ position: 'absolute', left: 6, bottom: 4, fontSize: 9, color: '#757575', fontWeight: 700 }}>低</div>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
            {/* UP 折線：從左下往右上走 */}
            <motion.polyline
              points="10,82 50,72 90,58 130,40 170,24 190,14"
              fill="none" stroke="#43a047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              animate={{ pathLength:[0,0,1,1,1,0] }}
              transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.60,0.72,0.82,0.94] }}
              style={{ pathLength: 0 }}
            />
          </svg>
          <motion.div
            animate={{ top:['70%','70%','10%','10%','70%'], opacity:[1,1,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.60,0.72,0.94] }}
            style={{ position: 'absolute', right: '6%', fontSize: 16, zIndex: 5 }}
          >📈</motion.div>
        </div>
        <motion.div
          animate={{ opacity:[1,1,1,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.52,0.60,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '12%', fontSize: 13, fontWeight: 900, color: '#43a047', zIndex: 6 }}
        >$51 → $84 → $120</motion.div>
      </>}

      {/* ════ Scene B：建築往上蓋（樓層一層層往 UP 長）════ */}
      {isBuilding && <>
        {/* 地基 */}
        <div style={{ position: 'absolute', left: '20%', right: '20%', bottom: '18%', height: 10, background: '#8d6e63', borderRadius: 4, zIndex: 4 }} />
        {/* 樓層一層一層往上出現 */}
        {[0,1,2,3].map(floor => (
          <motion.div key={floor}
            animate={{ opacity:[0,0,0,0,0,1,1,0], scaleY:[0,0,0,0,0,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.24,0.34,0.34+floor*0.08,0.42+floor*0.08,0.76,0.94], delay: floor * 0.0 }}
            style={{ position: 'absolute', left: '28%', right: '28%', bottom: `calc(18% + ${10 + floor * 28}px)`, height: 26, background: floor%2===0?'#90a4ae':'#b0bec5', border: '1.5px solid #607d8b', borderRadius: 3, zIndex: 5, transformOrigin: 'bottom center', overflow: 'hidden' }}>
            {/* 窗戶 */}
            {[0,1,2].map(w => <div key={w} style={{ position: 'absolute', top: 4, left: `${15+w*28}%`, width: '16%', height: 14, background: '#b3e5fc', borderRadius: 2 }}/>)}
          </motion.div>
        ))}
        {/* UP 箭頭 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.8,0.8,0], y:[0,0,0,0,0,-4,-8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.24,0.34,0.40,0.56,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -8, bottom: '52%', fontSize: 18, color: '#1565c0', fontWeight: 900, zIndex: 8 }}
        >↑</motion.div>
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene C：著火（火焰自己往 UP 竄）════ */}
      {isFire && <>
        {/* 地面物件（小屋子）*/}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -30, bottom: '18%', zIndex: 4 }}>
          <svg width="60" height="50" viewBox="0 0 60 50">
            <polygon points="30,2 56,22 4,22" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="8" y="22" width="44" height="28" rx="2" fill="#bcaaa4" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="22" y="30" width="16" height="20" rx="2" fill="#795548"/>
          </svg>
        </div>
        {/* 地面火線 */}
        <div style={{ position: 'absolute', left: '15%', right: '15%', bottom: '18%', height: 3, background: '#8d6e63', zIndex: 3 }} />
        {/* 🔥 一層一層往上燒（UP）*/}
        {[{bottom:'18%',size:28,delay:0},{bottom:'28%',size:24,delay:0.08},{bottom:'38%',size:20,delay:0.16},{bottom:'46%',size:16,delay:0.24}].map((f,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,1,1,0.8,0], scale:[0.4,0.4,0.4,0.4,1,1.1,1,0], y:[0,0,0,0,0,-4,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.26,0.32+i*0.06,0.40+i*0.06,0.58,0.72,0.94], delay: f.delay }}
            style={{ position: 'absolute', left: '50%', marginLeft: -f.size/2, bottom: f.bottom, fontSize: f.size, zIndex: 6 }}
          >🔥</motion.div>
        ))}
        {/* UP 箭頭跟火焰一起往上 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.8,0.8,0], y:[0,0,0,0,0,-6,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.40,0.50,0.62,0.94] }}
          style={{ position: 'absolute', left: '66%', bottom: '44%', fontSize: 18, color: '#ff8f00', fontWeight: 900, zIndex: 8 }}
        >↑</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go out  (go-outward)
// GO 自己移動 + OUT 往外/消失
// ─────────────────────────────────────────────────
function GoOutwardScene({ obj }) {
  const isDoor = obj.label === '門口';
  const isDate = obj.label === '約會';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：蠟燭熄滅（火焰能量往 OUT 散出去）════ */}
      {!isDoor && !isDate && <>
        {/* 蠟燭本體 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, bottom: '18%', zIndex: 4 }}>
          <svg width="20" height="60" viewBox="0 0 20 60">
            <rect x="4" y="10" width="12" height="50" rx="3" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5"/>
            <rect x="9" y="6" width="2" height="8" rx="1" fill="#424242"/>
          </svg>
        </div>
        {/* 🕯️ label */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
        {/* 불꽃 (燃燒中) */}
        <motion.div
          animate={{ scale:[1,1.1,1,0,0,0,1], opacity:[1,1,1,0,0,0,1], y:[0,-2,0,0,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.60,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, bottom: 'calc(18% + 60px)', fontSize: 20, zIndex: 6 }}
        >🔥</motion.div>
        {/* OUT：火焰往外散出去消失 */}
        <motion.div
          animate={{ scale:[0,0,0,2.4,0,0,0], opacity:[0,0,0,0.7,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.38,0.46,0.58,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, bottom: 'calc(18% + 56px)', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,167,38,0.7), transparent 70%)', zIndex: 7 }}
        />
        {/* 煙霧往 OUT（上方）飄出去 */}
        {[-10, 0, 10].map((dx, i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0.6,0,0], y:[0,0,0,0,-28,-50,0], x:[0,0,0,0,dx,dx*1.5,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.42,0.54,0.68,0.94], delay: i*0.06 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -6, bottom: 'calc(18% + 72px)', width: 12, height: 12, borderRadius: '50%', background: 'rgba(150,150,150,0.5)', zIndex: 6 }}
          />
        ))}
      </>}

      {/* ════ Scene B：外出（人自己走出門 OUT）════ */}
      {isDoor && <>
        {/* 室內背景（左半邊）*/}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '54%', bottom: 0, background: '#fff8e1', zIndex: 2 }} />
        {/* 門框 */}
        <div style={{ position: 'absolute', left: '44%', top: '16%', bottom: '18%', width: 36, zIndex: 5 }}>
          <svg width="36" height="100%" viewBox="0 0 36 180" preserveAspectRatio="none">
            <rect x="0" y="0" width="36" height="180" rx="2" fill="#795548" stroke="#5d4037" strokeWidth="2"/>
            <rect x="3" y="3" width="30" height="174" rx="2" fill="#a5d6a7"/>
            <circle cx="28" cy="92" r="3" fill="#f9a825"/>
          </svg>
        </div>
        {/* 🚪 label */}
        <div style={{ position: 'absolute', left: '44%', top: '10%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
        {/* 人（室內→往門走→出去）*/}
        <motion.div
          animate={{ x:[0,0,48,110,120,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.56,0.72,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '16%', top: '32%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            {/* OUT 速度尾跡（藍色，往外走）*/}
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 24, height: 7, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 4 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene C：交往（兩人一起走 OUT，💑）════ */}
      {isDate && <>
        {/* 💑 在中央出現 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0.5,0.5,0.5,0.5,1,1,0.5] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.44,0.54,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '10%', fontSize: 28, zIndex: 7 }}
        >{obj.emoji}</motion.div>
        {/* 人 A（藍，從左出發）*/}
        <motion.div
          animate={{ x:[0,0,20,20,66,80,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.38,0.56,0.72,0.94] }}
          style={{ position: 'absolute', left: '14%', top: '34%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 20, height: 6, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* 人 B（橘，從右出發，鏡像）*/}
        <motion.div
          animate={{ x:[0,0,-20,-20,-66,-80,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.30,0.38,0.56,0.72,0.94] }}
          style={{ position: 'absolute', right: '14%', top: '34%', transform:'scaleX(-1)', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.52, repeat: Infinity, delay:0.1 }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 20, height: 6, background: 'linear-gradient(90deg, transparent, #ef9a9a)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* ❤️ 兩人相遇時出現 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.9,0.9,0.8,0], scale:[0,0,0,1,1,1,0], y:[0,0,0,-8,-10,-8,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.44,0.54,0.66,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '26%', fontSize: 18, zIndex: 9 }}
        >❤️</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go over  (go-review)
// GO 自己移動 + OVER 越過/掠過
// ─────────────────────────────────────────────────
function GoReviewScene({ obj }) {
  const isBudget = obj.label === '預算';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：複習報告（眼睛/掃描線從頭 OVER 到尾）════ */}
      {!isBudget && <>
        {/* 文件 */}
        <div style={{ position: 'absolute', left: '18%', right: '18%', top: '12%', bottom: '16%', background: 'white', border: '2px solid #bdbdbd', borderRadius: 6, zIndex: 4, overflow: 'hidden' }}>
          {/* 文字行 */}
          {[14,26,38,50,62,74,86].map((top, i) => (
            <div key={i} style={{ position: 'absolute', left: '8%', right: i%3===0?'30%':'12%', top: `${top}%`, height: 6, background: '#e0e0e0', borderRadius: 3 }} />
          ))}
          {/* 📋 label */}
          <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '2%', fontSize: 14 }}>{obj.emoji}</div>
          {/* OVER：掃描高亮線從上往下掃過 */}
          <motion.div
            animate={{ top:['0%','0%','0%','100%','100%','0%'] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.18,0.62,0.76,0.94], ease:'linear' }}
            style={{ position: 'absolute', left: 0, right: 0, height: 18, background: 'rgba(30,136,229,0.18)', borderTop: '2px solid rgba(30,136,229,0.5)', zIndex: 6 }}
          />
        </div>
        {/* 放大鏡也跟著掃 */}
        <motion.div
          animate={{ top:['14%','14%','14%','80%','80%','14%'], opacity:[0,0,0.8,0.8,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.18,0.62,0.76,0.94] }}
          style={{ position: 'absolute', right: '14%', fontSize: 18, zIndex: 7 }}
        >🔍</motion.div>
        {/* ✓ 看完後打勾 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.60,0.66,0.78,0.94] }}
          style={{ position: 'absolute', right: '14%', bottom: '18%', fontSize: 22, zIndex: 7 }}
        >✅</motion.div>
      </>}

      {/* ════ Scene B：超出預算（數字越過 OVER 上限線）════ */}
      {isBudget && <>
        {/* 圖表背景 */}
        <div style={{ position: 'absolute', left: '16%', right: '16%', top: '12%', bottom: '16%', border: '2px solid #bdbdbd', borderRadius: 6, background: 'white', zIndex: 3 }}>
          {/* 上限線（OVER 的那條界線）*/}
          <div style={{ position: 'absolute', left: 0, right: 0, top: '38%', height: 2, background: '#e53935', zIndex: 5 }}>
            <div style={{ position: 'absolute', right: 4, top: -10, fontSize: 8, color: '#e53935', fontWeight: 900, whiteSpace: 'nowrap' }}>LIMIT</div>
          </div>
          {/* 超過界線的紅色區域 */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '38%', background: 'rgba(229,57,53,0.08)', zIndex: 4 }} />
          {/* 預算條從下往上長，越過界線 */}
          <motion.div
            animate={{ height:['0%','0%','48%','82%','82%','0%'] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.60,0.76,0.94], ease:'easeOut' }}
            style={{ position: 'absolute', left: '20%', right: '20%', bottom: 0, background: 'linear-gradient(to top, #42a5f5, #ef5350)', borderRadius: '4px 4px 0 0', zIndex: 5, transformOrigin: 'bottom' }}
          />
          {/* 💰 label */}
          <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '2%', fontSize: 14, zIndex: 6 }}>{obj.emoji}</div>
        </div>
        {/* OVER 箭頭穿越界線 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], y:[0,0,0,0,-8,-10,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.58,0.66,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -30, top: '26%', fontSize: 10, fontWeight: 900, color: '#e53935', zIndex: 8, whiteSpace: 'nowrap' }}
        >↑ OVER BUDGET</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go through  (go-traverse)
// GO 自己移動 + THROUGH 從頭穿透到尾
// ─────────────────────────────────────────────────
function GoTraverseScene({ obj }) {
  const isDoc    = obj.label === '文件';
  const isSupply = obj.label === '存量';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：經歷難關（人穿越 THROUGH 風雨區）════ */}
      {!isDoc && !isSupply && <>
        {/* 暗色風雨區（中間）*/}
        <div style={{ position: 'absolute', left: '32%', right: '18%', top: 0, bottom: 0, background: 'linear-gradient(to right, rgba(55,71,79,0.18), rgba(55,71,79,0.32), rgba(55,71,79,0.12))', zIndex: 3 }} />
        {/* 🌧️ 雨滴 */}
        {[36,46,56,66,76].map((left, i) => (
          <motion.div key={i}
            animate={{ y:['8%','8%','72%','72%','8%'], opacity:[0,0.7,0.7,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.64,0.70,0.94], delay: i*0.1 }}
            style={{ position: 'absolute', left: `${left}%`, top: 0, width: 2, height: 14, background: '#90a4ae', borderRadius: 2, zIndex: 5 }}
          />
        ))}
        <div style={{ position: 'absolute', left: '32%', top: '6%', fontSize: 16, zIndex: 4 }}>{obj.emoji}</div>
        {/* 左側（出發點）*/}
        <div style={{ position: 'absolute', left: '4%', top: '42%', fontSize: 12, fontWeight: 700, color: '#43a047' }}>START</div>
        {/* 右側（終點，明亮）*/}
        <div style={{ position: 'absolute', right: '4%', top: '42%', fontSize: 12, fontWeight: 700, color: '#43a047' }}>OUT ✓</div>
        {/* 人：從左穿越 THROUGH 暗區到右側 */}
        <motion.div
          animate={{ x:[0,0,110,200,210,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.42,0.64,0.72,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '8%', top: '28%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 24, height: 7, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 4 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：翻文件（頁面一頁頁 THROUGH 被翻過）════ */}
      {isDoc && <>
        {/* 文件頁疊 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -36, top: '16%', zIndex: 4 }}>
          <svg width="72" height="90" viewBox="0 0 72 90">
            <rect x="4" y="4" width="68" height="86" rx="4" fill="#eeeeee" stroke="#bdbdbd" strokeWidth="1.5"/>
            <rect x="2" y="2" width="68" height="86" rx="4" fill="#f5f5f5" stroke="#bdbdbd" strokeWidth="1.5"/>
            <rect x="0" y="0" width="68" height="86" rx="4" fill="white" stroke="#9e9e9e" strokeWidth="1.5"/>
            {[14,26,38,50,62,74].map((y,i) => (
              <rect key={i} x="8" y={y} width={i%2===0?52:38} height="6" rx="3" fill="#e0e0e0"/>
            ))}
            <text x="34" y="10" textAnchor="middle" fontSize="8" fill="#9e9e9e">{obj.emoji}</text>
          </svg>
        </div>
        {/* THROUGH：高亮掃描線從頭到尾逐行過 */}
        {[0,1,2,3,4,5].map(i => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,1,0,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.16,0.18+i*0.07,0.22+i*0.07,0.26+i*0.07,0.30+i*0.07,0.94] }}
            style={{ position: 'absolute', left: '50%', marginLeft: -28, top: `calc(16% + ${18+i*12}px)`, width: 56, height: 8, background: 'rgba(30,136,229,0.28)', borderRadius: 3, zIndex: 6 }}
          />
        ))}
        {/* ✓ 看完 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0,0,0.9,0], scale:[0,0,0,0,0,0,0,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.16,0.18,0.22,0.62,0.66,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '72%', fontSize: 20, zIndex: 7 }}
        >✅</motion.div>
      </>}

      {/* ════ Scene C：用完存量（內容 THROUGH 流光了）════ */}
      {isSupply && <>
        {/* 瓶子外框 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '14%', zIndex: 4 }}>
          <svg width="48" height="90" viewBox="0 0 48 90">
            <path d="M 14 0 L 34 0 L 34 14 Q 44 20 44 30 L 44 82 Q 44 88 38 88 L 10 88 Q 4 88 4 82 L 4 30 Q 4 20 14 14 Z" fill="none" stroke="#9e9e9e" strokeWidth="2.5"/>
          </svg>
        </div>
        {/* 內容物（從滿到空）*/}
        <motion.div
          animate={{ height:['68px','68px','0px','0px','68px'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.62,0.76,0.94], ease:'linear' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -18, bottom: 'calc(14% + 8px)', width: 36, background: 'linear-gradient(to bottom, #80deea, #26c6da)', borderRadius: '0 0 6px 6px', zIndex: 5 }}
        />
        {/* 🧴 label */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
        {/* THROUGH：底部流出的水滴 */}
        {[0,1,2].map(i => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0.8,0,0], y:[0,0,0,12,24,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.16+i*0.14,0.28+i*0.14,0.38+i*0.14,0.94], delay: i*0.18 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -4, top: 'calc(14% + 86px)', width: 8, height: 10, borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', background: '#26c6da', zIndex: 6 }}
          />
        ))}
        {/* 空瓶 + 文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.62,0.68,0.78,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '10%', fontSize: 11, fontWeight: 900, color: '#e53935', zIndex: 7, whiteSpace: 'nowrap' }}
        >全用完了</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go on  (go-continue)
// GO 自己移動 + ON 持續接上/保持進行
// ─────────────────────────────────────────────────
function GoContinueScene({ obj }) {
  const isEvent  = obj.label === '事件';
  const isLight  = obj.label === '電燈';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：繼續（人遇到停頓點→ GO ON 繼續往前）════ */}
      {!isEvent && !isLight && <>
        {/* 路線 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '52%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 3 }} />
        {/* 暫停標誌（中途出現）*/}
        <motion.div
          animate={{ opacity:[0,0,0.8,0.8,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.18,0.30,0.38,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '28%', zIndex: 6 }}>
          <svg width="28" height="32" viewBox="0 0 28 32">
            <polygon points="14,2 26,8 26,24 14,30 2,24 2,8" fill="#e53935" stroke="#b71c1c" strokeWidth="1.5"/>
            <text x="14" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="900">STOP</text>
          </svg>
        </motion.div>
        {/* ON：繼續前進標誌 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.28,0.36,0.44,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '26%', fontSize: 24, zIndex: 7 }}
        >▶️</motion.div>
        {/* 人：走→短暫停→繼續往前 GO ON */}
        <motion.div
          animate={{ x:[0,0,60,60,140,160,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.28,0.38,0.60,0.72,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '32%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 24, height: 7, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 4 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene B：發生（現場有東西 going on，人聚過來問）════ */}
      {isEvent && <>
        {/* 中央事件（❓閃爍）*/}
        <motion.div
          animate={{ scale:[0.9,1,0.9,1,0.9,1,0.9], opacity:[0.8,1,0.8,1,0.8,1,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.1,0.2,0.3,0.4,0.54,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '16%', fontSize: 28, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 「going on」= 正在進行中的感覺：周圍有東西在動 */}
        {[{x:-48,y:10},{x:48,y:6},{x:-32,y:42},{x:36,y:44}].map((p,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0.7,0.7,0.5,0], x:[0,0,0,p.x*0.4,p.x,p.x,0], y:[0,0,0,p.y*0.4,p.y,p.y,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.20,0.32,0.46,0.68,0.94], delay: i*0.07 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '36%', fontSize: 12, zIndex: 6 }}
          >❓</motion.div>
        ))}
        {/* What's going on? 文字泡泡 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.28,0.44,0.52,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '12%', fontSize: 11, fontWeight: 900, color: '#1565c0', letterSpacing: 0.5, zIndex: 7, whiteSpace: 'nowrap', background: '#e3f2fd', borderRadius: 8, padding: '3px 10px', border: '1.5px solid #90caf9' }}
        >What's going on?</motion.div>
        {/* 兩個人從兩側走過來看 */}
        {[{side:'left',dx:60},{side:'right',dx:-60,flip:true}].map(({side,dx,flip},i) => (
          <motion.div key={i}
            animate={{ x:[0,0,dx,dx,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.68,0.94] }}
            style={{ position: 'absolute', [side]:'8%', top:'38%', transform: flip?'scaleX(-1)':'none', zIndex: 7 }}>
            <svg width="30" height="42" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke={i===0?'#1a237e':'#e65100'} strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke={i===0?'#1a237e':'#e65100'} strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke={i===0?'#1a237e':'#e65100'} strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke={i===0?'#1a237e':'#e65100'} strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke={i===0?'#1a237e':'#e65100'} strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        ))}
      </>}

      {/* ════ Scene C：電燈開起來（GO ON = 電流接上了）════ */}
      {isLight && <>
        {/* 暗室背景 */}
        <motion.div
          animate={{ background:['rgba(0,0,0,0.55)','rgba(0,0,0,0.55)','rgba(0,0,0,0.55)','rgba(0,0,0,0.10)','rgba(0,0,0,0.10)','rgba(0,0,0,0.55)'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.48,0.72,0.94] }}
          style={{ position: 'absolute', inset: 0, zIndex: 2 }}
        />
        {/* 電燈泡（頂部）*/}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '8%', zIndex: 5 }}>
          <svg width="36" height="52" viewBox="0 0 36 52">
            <rect x="12" y="0" width="12" height="10" rx="2" fill="#9e9e9e"/>
            <ellipse cx="18" cy="30" rx="16" ry="20" fill="#fff9c4" stroke="#f9a825" strokeWidth="2"/>
            <rect x="10" y="46" width="16" height="6" rx="3" fill="#9e9e9e"/>
          </svg>
        </div>
        {/* ON：燈亮起來（光暈擴散）*/}
        <motion.div
          animate={{ scale:[0,0,0,2.8,2.8,0], opacity:[0,0,0,0.85,0.7,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.46,0.70,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '12%', width: 56, height: 56, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,235,59,0.9), transparent 70%)', zIndex: 6, transformOrigin: 'center' }}
        />
        {/* 💡 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 18, zIndex: 7 }}>{obj.emoji}</div>
        {/* ON 文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.48,0.54,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '12%', fontSize: 13, fontWeight: 900, color: '#f9a825', zIndex: 8, letterSpacing: 2 }}
        >ON ✓</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go back  (go-return)
// GO 自己移動 + BACK 往後/回到原點
// ─────────────────────────────────────────────────
function GoReturnScene({ obj }) {
  const isHistory  = obj.label === '歷史';
  const isPromise  = obj.label === '承諾';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：回家（人往前走→轉身→ BACK 回家）════ */}
      {!isHistory && !isPromise && <>
        {/* 🏠 家（左側）*/}
        <div style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 4 }}>
          <svg width="52" height="50" viewBox="0 0 52 50">
            <polygon points="26,2 50,22 2,22" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="6" y="22" width="40" height="28" rx="2" fill="#bcaaa4" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="18" y="30" width="16" height="20" rx="2" fill="#795548"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', left: '6%', top: '22%', fontSize: 16, zIndex: 4 }}>{obj.emoji}</div>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '60%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 3 }} />
        {/* 人：從家→往右走出去→BACK轉身回家 */}
        <motion.div
          animate={{ x:[0,0,130,130,0,0], scaleX:[1,1,1,-1,-1,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.36,0.44,0.70,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', left: '22%', top: '38%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* BACK 箭頭（回頭時出現）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0.8,0.8,0], x:[0,0,0,130,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.40,0.44,0.68,0.94] }}
          style={{ position: 'absolute', left: '22%', top: '28%', fontSize: 14, color: '#1565c0', fontWeight: 900, zIndex: 7, whiteSpace: 'nowrap' }}
        >← BACK</motion.div>
      </>}

      {/* ════ Scene B：追溯歷史（時間軸往 BACK 移動）════ */}
      {isHistory && <>
        {/* 水平時間軸 */}
        <div style={{ position: 'absolute', left: '8%', right: '8%', top: '44%', height: 3, background: '#9e9e9e', borderRadius: 2, zIndex: 3 }} />
        {/* 時間點 */}
        {[{label:'今天',pos:'88%'},{label:"'90",pos:'64%'},{label:"'70",pos:'40%'},{label:"'50",pos:'16%'}].map(({label,pos},i) => (
          <div key={i} style={{ position: 'absolute', left: pos, top: '38%', zIndex: 4, transform:'translateX(-50%)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#9e9e9e', margin: '0 auto' }}/>
            <div style={{ fontSize: 9, color: '#616161', textAlign: 'center', marginTop: 2 }}>{label}</div>
          </div>
        ))}
        {/* 📜 label */}
        <div style={{ position: 'absolute', left: '8%', top: '6%', fontSize: 18, zIndex: 4 }}>{obj.emoji}</div>
        {/* BACK：指針從右（今天）往左移動（更早）*/}
        <motion.div
          animate={{ left:['88%','88%','88%','16%','16%','88%'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.18,0.56,0.70,0.94], ease:'easeInOut' }}
          style={{ position: 'absolute', top: '30%', zIndex: 7, transform:'translateX(-50%)' }}>
          <div style={{ fontSize: 18 }}>📌</div>
          <div style={{ width: 2, height: 20, background: '#e53935', margin: '0 auto' }}/>
        </motion.div>
        {/* ← BACK 箭頭 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.8,0.8,0], left:['60%','60%','60%','30%','30%','60%'] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.20,0.50,0.68,0.94] }}
          style={{ position: 'absolute', top: '22%', fontSize: 11, fontWeight: 900, color: '#e53935', zIndex: 8, whiteSpace: 'nowrap' }}
        >← BACK in time</motion.div>
      </>}

      {/* ════ Scene C：食言（握手承諾→手縮 BACK→承諾消失）════ */}
      {isPromise && <>
        {/* 🤝 握手 */}
        <motion.div
          animate={{ scale:[1,1,1,0,0,0,1], opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.60,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '18%', fontSize: 36, zIndex: 5 }}
        >{obj.emoji}</motion.div>
        {/* 承諾泡泡 */}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.60,0.76,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', top: '38%', fontSize: 10, fontWeight: 700, color: '#1565c0', background: '#e3f2fd', borderRadius: 8, padding: '3px 10px', border: '1.5px solid #90caf9', zIndex: 6, whiteSpace: 'nowrap' }}
        >「我答應你！」</motion.div>
        {/* BACK：手縮回去 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0.8,0.8,0.8,0.8,1,1,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.54,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', top: '18%', fontSize: 13, fontWeight: 900, color: '#e53935', zIndex: 8, whiteSpace: 'nowrap' }}
        >← 縮 BACK 了</motion.div>
        {/* 🚫 承諾破滅 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0.9,0], scale:[0,0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.52,0.60,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '18%', fontSize: 28, zIndex: 9 }}
        >🚫</motion.div>
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0.9,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.52,0.60,0.72,0.94] }}
          style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', top: '38%', fontSize: 10, fontWeight: 700, color: '#e53935', background: '#ffebee', borderRadius: 8, padding: '3px 10px', border: '1.5px solid #ef9a9a', zIndex: 8, whiteSpace: 'nowrap' }}
        >食言了！</motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go off  (go-trigger)
// GO 自己走到觸發點 + OFF 積蓄能量瞬間從原點往外爆射
// ─────────────────────────────────────────────────
function GoTriggerScene({ obj }) {
  const isAlarm    = obj.label === '鬧鐘';
  const isFirework = obj.label === '煙火';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：鬧鐘響起
          GO = 鬧鐘靜止等待，時間到了自己觸發
          OFF = 聲音從鐘面往右側爆射出去（3條漫畫音波線）════ */}
      {isAlarm && <>
        {/* 鬧鐘 emoji — 先靜止，OFF後劇烈搖晃 */}
        <motion.div
          animate={{ rotate:[0,0,-18,18,-18,18,-10,10,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.34,0.38,0.42,0.46,0.50,0.54,0.62,0.94], ease:'linear' }}
          style={{ position:'absolute', left:'22%', top:'16%', fontSize:50, zIndex:5, transformOrigin:'center bottom' }}>
          {obj.emoji}
        </motion.div>

        {/* OFF 爆點：鬧鐘右側的衝擊閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,3.5,0,0], opacity:[0,0,0,1,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.32,0.38,0.48,0.94] }}
          style={{ position:'absolute', left:'calc(22% + 52px)', top:'calc(16% + 22px)', width:14, height:14, marginLeft:-7, marginTop:-7, borderRadius:'50%', background:'radial-gradient(circle, rgba(229,57,53,0.95), transparent 70%)', zIndex:8, transformOrigin:'center' }}
        />

        {/* OFF：3條音波線往右射出（漫畫速度線風格）*/}
        {[0,1,2].map(i => (
          <motion.div
            key={i}
            animate={{ x:[0,0,0,20+i*16,55+i*20,0], opacity:[0,0,0,1,0,0], scaleX:[0,0,0,0.4,1,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.34,0.40,0.54,0.94], delay:i*0.05 }}
            style={{ position:'absolute', left:'calc(22% + 52px)', top:`calc(16% + ${14+i*10}px)`, width:32+i*10, height:4-i, background:'linear-gradient(90deg, #ef5350 0%, #ffcdd2 60%, transparent 100%)', borderRadius:3, transformOrigin:'left center', zIndex:6 }}
          />
        ))}

        {/* 人被嚇到彈起 */}
        <motion.div
          animate={{ y:[0,0,0,-20,-12,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.36,0.44,0.56,0.68,0.94] }}
          style={{ position:'absolute', right:'10%', top:'24%', zIndex:6 }}>
          <svg width="34" height="46" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity:[0,0,0,1,1,0,0], scale:[0,0,0,1.4,1,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.38,0.44,0.58,0.66,0.94] }}
          style={{ position:'absolute', right:'4%', top:'14%', fontSize:24, fontWeight:900, color:'#e53935', zIndex:7 }}>！
        </motion.div>
      </>}

      {/* ════ Scene B：煙火爆炸
          GO = 🚀 自己往上衝（自我推進）
          OFF = 到最高點殼體爆開，6顆火花從同一個點往外散射 ════ */}
      {isFirework && <>
        {/* 夜空 */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,#1a237e 0%,#283593 100%)', zIndex:1 }} />

        {/* GO：🚀 往上衝 */}
        <motion.div
          animate={{ y:[72,72,72,-10,-10,80,80], opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.12,0.34,0.36,0.88,0.94] }}
          style={{ position:'absolute', left:'50%', marginLeft:-11, bottom:'8%', fontSize:24, zIndex:4 }}>
          🚀
        </motion.div>

        {/* OFF 爆點：中心白色閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,5,0,0], opacity:[0,0,0,0,1,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.36,0.44,0.56,0.94] }}
          style={{ position:'absolute', left:'50%', top:'26%', width:16, height:16, marginLeft:-8, marginTop:-8, borderRadius:'50%', background:'radial-gradient(circle, #ffffff 0%, rgba(255,235,59,0.9) 40%, transparent 70%)', zIndex:8, transformOrigin:'center' }}
        />

        {/* OFF：6顆彩色火花從同一個點往外散射（圓點比線條更自然） */}
        {[0,1,2,3,4,5].map(i => {
          const a = (i/6) * 2 * Math.PI;
          const dx = Math.cos(a) * 70;
          const dy = Math.sin(a) * 58;
          const colors = ['#ff4444','#ffaa00','#ffee44','#44ff88','#44aaff','#ff44cc'];
          return (
            <motion.div key={i}
              animate={{ x:[0,0,0,0,dx*0.4,dx,0], y:[0,0,0,0,dy*0.4,dy,0], opacity:[0,0,0,0,1,0,0], scale:[0,0,0,0,1.2,0.3,0] }}
              transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.38,0.48,0.62,0.94] }}
              style={{ position:'absolute', left:'50%', top:'26%', marginLeft:-6, marginTop:-6, width:12, height:12, borderRadius:'50%', background:colors[i], boxShadow:`0 0 8px 2px ${colors[i]}`, zIndex:6 }}
            />
          );
        })}
        <div style={{ position:'absolute', left:'8%', top:'6%', fontSize:18, zIndex:5 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene C：食物變質
          GO = 時間自己走（時鐘轉）
          OFF = ✅新鮮標籤從食物上「脫離飛走」— 這個脫離動作就是 OFF ════ */}
      {!isAlarm && !isFirework && <>
        {/* 食物 emoji（靜止） */}
        <div style={{ position:'absolute', left:'50%', marginLeft:-22, top:'16%', fontSize:44, zIndex:4 }}>
          {obj.emoji}
        </div>

        {/* 時鐘旋轉（GO = 時間在走） */}
        <motion.div
          animate={{ rotate:[0,0,360,360,360] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.36,0.76,0.94] }}
          style={{ position:'absolute', right:'14%', top:'18%', fontSize:20, zIndex:5 }}>🕐
        </motion.div>

        {/* ✅ 新鮮標籤 — 貼在食物上，然後 OFF：往右飛走脫離 */}
        <motion.div
          animate={{ x:[0,0,0,40,90,140], y:[0,0,0,-8,-18,-28], opacity:[1,1,1,0.8,0.4,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.34,0.44,0.58,0.70] }}
          style={{ position:'absolute', left:'calc(50% + 0px)', top:'calc(16% + 48px)', fontSize:10, fontWeight:800, color:'#2e7d32', background:'#e8f5e9', borderRadius:6, padding:'2px 8px', border:'1.5px solid #a5d6a7', zIndex:7, whiteSpace:'nowrap' }}>
          ✅ 新鮮
        </motion.div>

        {/* 食物變灰（新鮮標籤離開後） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.55,0.55,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.36,0.48,0.60,0.76,0.94] }}
          style={{ position:'absolute', left:'50%', marginLeft:-22, top:'16%', fontSize:44, zIndex:5, filter:'grayscale(1) brightness(0.7)' }}>
          {obj.emoji}
        </motion.div>

        {/* ❌ 壞掉標籤 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.36,0.48,0.58,0.66,0.94] }}
          style={{ position:'absolute', left:'calc(50% + 0px)', top:'calc(16% + 48px)', fontSize:10, fontWeight:800, color:'#e53935', background:'#ffebee', borderRadius:6, padding:'2px 8px', border:'1.5px solid #ef9a9a', zIndex:7, whiteSpace:'nowrap' }}>
          ❌ 壞掉了
        </motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go ahead  (go-proceed)
// GO 自己移動 + AHEAD 往前方踏出去
// ─────────────────────────────────────────────────
function GoAheadScene({ obj }) {
  const isPlan = obj.label === '計畫';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：去吧、請便（許可對方往前走）
          GO = 人 A 自己走出去
          AHEAD = 前方有明確的路，往那個方向踏出去 ════ */}
      {!isPlan && <>
        {/* 地面線 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'60%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* AHEAD 方向箭頭（地面上方） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.7,0.7,0], x:[0,0,0,0,8,8,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.34,0.42,0.54,0.72,0.94] }}
          style={{ position:'absolute', left:'55%', top:'46%', display:'flex', alignItems:'center', gap:3, zIndex:5 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width:14-i*2, height:2, background:`rgba(76,175,80,${0.9-i*0.25})`, borderRadius:1 }} />
          ))}
          <div style={{ width:0, height:0, borderTop:'5px solid transparent', borderBottom:'5px solid transparent', borderLeft:'8px solid #43a047' }} />
        </motion.div>

        {/* 人 B（左側，給許可的人） — 手勢往前指 */}
        <div style={{ position:'absolute', left:'8%', top:'28%', zIndex:5 }}>
          <svg width="34" height="46" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            {/* 右臂往前伸（往右） */}
            <line x1="19" y1="21" x2="36" y2="18" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            {/* 左臂自然垂 */}
            <line x1="19" y1="21" x2="9"  y2="32" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 👍 許可手勢 emoji 浮出 */}
        <motion.div
          animate={{ opacity:[0,0,0.8,0.8,0.8,0.8,0], y:[5,5,0,0,0,0,5], scale:[0.6,0.6,1,1,1,1,0.6] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.34,0.54,0.72,0.94] }}
          style={{ position:'absolute', left:'17%', top:'14%', fontSize:20, zIndex:7 }}>
          {obj.emoji}
        </motion.div>

        {/* 人 A（中段，猶豫停下，然後往前走） */}
        <motion.div
          animate={{ x:[0,0,0,0,70,110,0], scaleX:[1,1,1,1,1,1,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.40,0.62,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'30%', top:'28%', zIndex:6 }}>
          {/* 猶豫時的問號 */}
          <motion.div
            animate={{ opacity:[0,0.8,0.8,0,0,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.36,0.54,0.76,0.94] }}
            style={{ position:'absolute', left:'50%', marginLeft:-6, top:-18, fontSize:14, color:'#9e9e9e', fontWeight:900, zIndex:8 }}>?
          </motion.div>
          {/* 速度尾跡（走起來後出現） */}
          <motion.div
            animate={{ opacity:[0,0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.34,0.42,0.58,0.68,0.94] }}
            style={{ position:'absolute', right:'100%', top:'38%', width:28, height:7, background:'linear-gradient(90deg, transparent, #90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.50, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
      </>}

      {/* ════ Scene B：計畫如期進行
          GO = 計畫自己往前推進
          AHEAD = 沿著時間軸往前踏出去，沒有被阻攔 ════ */}
      {isPlan && <>
        {/* 時間軸 */}
        <div style={{ position:'absolute', left:'8%', right:'8%', top:'48%', height:3, background:'#bdbdbd', borderRadius:2, zIndex:2 }} />
        {/* 起點標記 */}
        <div style={{ position:'absolute', left:'10%', top:'40%', width:3, height:18, background:'#9e9e9e', borderRadius:1, zIndex:3 }} />
        {/* 終點 ✅ */}
        <div style={{ position:'absolute', right:'10%', top:'38%', fontSize:18, zIndex:3 }}>✅</div>

        {/* ☔ 障礙（計畫頭上的雨） */}
        <motion.div
          animate={{ opacity:[0,0,0.7,0.7,0.4,0,0], y:[0,0,0,3,3,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.36,0.50,0.60,0.94] }}
          style={{ position:'absolute', left:'46%', top:'16%', fontSize:22, zIndex:5 }}>☔
        </motion.div>

        {/* 計畫方塊 — 沿時間軸往 AHEAD 推進 */}
        <motion.div
          animate={{ x:[0,0,0,0,130,170,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.34,0.66,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'10%', top:'34%', zIndex:6 }}>
          <div style={{ background:'#e3f2fd', border:'2.5px solid #1e88e5', borderRadius:8, padding:'4px 10px', display:'flex', alignItems:'center', gap:6 }}>
            <span style={{ fontSize:16 }}>{obj.emoji}</span>
            <span style={{ fontSize:10, fontWeight:800, color:'#1565c0', whiteSpace:'nowrap' }}>計畫</span>
          </div>
          {/* AHEAD 箭頭跟著移 */}
          <motion.div
            animate={{ opacity:[0,0,0,0,0.8,0.8,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.36,0.46,0.72,0.94] }}
            style={{ position:'absolute', left:'100%', top:'50%', marginLeft:4, marginTop:-5, display:'flex', alignItems:'center', gap:2 }}>
            <div style={{ width:16, height:2, background:'#43a047', borderRadius:1 }} />
            <div style={{ width:0, height:0, borderTop:'4px solid transparent', borderBottom:'4px solid transparent', borderLeft:'7px solid #43a047' }} />
          </motion.div>
        </motion.div>

        {/* 「如期進行！」文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.36,0.60,0.68,0.94] }}
          style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', bottom:'10%', fontSize:11, fontWeight:900, color:'#2e7d32', zIndex:8, whiteSpace:'nowrap' }}>
          AHEAD — 照計畫往前走！
        </motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go for  (go-pursue)
// GO 自己移動 + FOR 朝向目標衝過去
// ─────────────────────────────────────────────────
function GoPursueScene({ obj }) {
  const isGoal = obj.label === '目標';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：選擇（GO FOR 其中一個選項）
          GO = 自己朝向選項走過去
          FOR = 目標明確，朝那個方向衝 ════ */}
      {!isGoal && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'62%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 三個選項（右側） */}
        {['A','B','C'].map((label, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [1,1,1,1, i===1?1:0.25, i===1?1:0.25, 1],
              scale:   [1,1,1,1, i===1?1.12:0.88, i===1?1.12:0.88, 1],
            }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.38,0.56,0.74,0.94] }}
            style={{ position:'absolute', left:`${52+i*16}%`, top:'34%', width:32, height:32, borderRadius:8, background: i===0?'#e3f2fd': i===1?'#fff9c4':'#fce4ec', border:`2.5px solid ${i===0?'#90caf9':i===1?'#fdd835':'#f48fb1'}`, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:14, color:'#333', zIndex:5 }}>
            {label}
          </motion.div>
        ))}
        {/* B 選項的 ✅（被選中後出現） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0,0,0,0,1.2,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.42,0.56,0.72,0.94] }}
          style={{ position:'absolute', left:'calc(68% + 6px)', top:'28%', fontSize:14, zIndex:7 }}>✅
        </motion.div>

        {/* 人 — 從左往 B 選項衝 */}
        <motion.div
          animate={{ x:[0,0,0,105,105,0], y:[0,0,0,-8,-8,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.54,0.72,0.94], ease:'easeIn' }}
          style={{ position:'absolute', left:'14%', top:'30%', zIndex:6 }}>
          {/* 速度尾跡 */}
          <motion.div
            animate={{ opacity:[0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.50,0.60,0.94] }}
            style={{ position:'absolute', right:'100%', top:'38%', width:28, height:7, background:'linear-gradient(90deg, transparent, #90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.46, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* FOR 箭頭指向 B */}
        <motion.div
          animate={{ opacity:[0,0,0,0.7,0.7,0], x:[0,0,0,8,8,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.38,0.54,0.94] }}
          style={{ position:'absolute', left:'36%', top:'46%', display:'flex', alignItems:'center', gap:2, zIndex:4 }}>
          <div style={{ width:20, height:2, background:'#ef5350', borderRadius:1 }} />
          <div style={{ width:0, height:0, borderTop:'4px solid transparent', borderBottom:'4px solid transparent', borderLeft:'7px solid #ef5350' }} />
        </motion.div>

        {/* {obj.emoji} */}
        <div style={{ position:'absolute', left:'8%', top:'8%', fontSize:18, zIndex:4 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene B：全力追求目標（GO FOR IT）
          GO = 人全速衝刺
          FOR = 朝著遠端的目標方向不放棄 ════ */}
      {isGoal && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'62%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 🏆 目標（右端，放在台座上） */}
        <div style={{ position:'absolute', right:'8%', top:'26%', zIndex:5, textAlign:'center' }}>
          <motion.div
            animate={{ scale:[1,1,1,1,1.18,1.18,1], filter:['brightness(1)','brightness(1)','brightness(1)','brightness(1)','brightness(1.5)','brightness(1.5)','brightness(1)'] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.40,0.62,0.74,0.94] }}>
            <div style={{ fontSize:34 }}>{obj.emoji}</div>
          </motion.div>
          <div style={{ width:36, height:6, background:'#8d6e63', borderRadius:'0 0 4px 4px', margin:'0 auto' }} />
        </div>

        {/* 人 — 全速衝向目標（大幅度跑動） */}
        <motion.div
          animate={{ x:[0,0,0,155,155,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.58,0.74,0.94], ease:'easeIn' }}
          style={{ position:'absolute', left:'8%', top:'26%', zIndex:6 }}>
          {/* 速度尾跡（長，強調全力衝刺） */}
          <motion.div
            animate={{ opacity:[0,0,0,1,0,0], width:[40,40,40,40,40,40] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.24,0.50,0.62,0.94] }}
            style={{ position:'absolute', right:'100%', top:'36%', width:40, height:9, background:'linear-gradient(90deg, transparent, #90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-5,0,-5,0] }} transition={{ duration:0.40, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              {/* 手臂往前擺（衝刺姿勢） */}
              <line x1="19" y1="21" x2="34" y2="16" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="5"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* FOR 方向標示 */}
        <motion.div
          animate={{ opacity:[0,0,0.6,0.6,0,0], x:[0,0,4,4,4,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.18,0.38,0.48,0.94] }}
          style={{ position:'absolute', left:'50%', top:'52%', display:'flex', alignItems:'center', gap:3, zIndex:4 }}>
          <div style={{ fontSize:10, fontWeight:900, color:'#ef5350' }}>FOR →</div>
        </motion.div>

        {/* 衝到後閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,3,0,0], opacity:[0,0,0,0,1,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.56,0.64,0.72,0.94] }}
          style={{ position:'absolute', right:'calc(8% + 18px)', top:'calc(26% + 18px)', width:14, height:14, marginLeft:-7, marginTop:-7, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,193,7,0.95), transparent 70%)', zIndex:9, transformOrigin:'center' }}
        />
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Go with  (go-match)
// GO 自己移動 + WITH 跟某個東西一起走
// ─────────────────────────────────────────────────
function GoMatchScene({ obj }) {
  const isDecide = obj.label === '決定';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：搭配（兩個東西互相 GO WITH，一起往前走）
          GO = 各自移動
          WITH = 找到彼此，並排同步往前走 ════ */}
      {!isDecide && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'65%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 上衣（左側往右走） */}
        <motion.div
          animate={{ x:[0,0,0,55,55,55,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.18,0.42,0.60,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'8%', top:'26%', zIndex:5 }}>
          <div style={{ background:'#bbdefb', border:'2.5px solid #1e88e5', borderRadius:10, padding:'6px 10px', textAlign:'center' }}>
            <div style={{ fontSize:26 }}>👔</div>
            <div style={{ fontSize:9, color:'#1565c0', fontWeight:700 }}>藍上衣</div>
          </div>
        </motion.div>

        {/* 褲子（右側往左走） */}
        <motion.div
          animate={{ x:[0,0,0,-55,-55,-55,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.18,0.42,0.60,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', right:'8%', top:'26%', zIndex:5 }}>
          <div style={{ background:'#f5f5f5', border:'2.5px solid #757575', borderRadius:10, padding:'6px 10px', textAlign:'center' }}>
            <div style={{ fontSize:26 }}>{obj.emoji}</div>
            <div style={{ fontSize:9, color:'#424242', fontWeight:700 }}>灰褲</div>
          </div>
        </motion.div>

        {/* WITH：相遇時的「搭！」確認 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], scale:[0,0,0,0,1.3,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.36,0.42,0.50,0.62,0.94] }}
          style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', top:'14%', fontSize:13, fontWeight:900, color:'#43a047', zIndex:8, whiteSpace:'nowrap' }}>
          ✅ 搭！
        </motion.div>

        {/* WITH：連結線（兩個東西靠近後出現連結） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.6,0.6,0], scaleX:[0,0,0,0,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.36,0.42,0.50,0.64,0.94] }}
          style={{ position:'absolute', left:'50%', top:'calc(26% + 28px)', width:60, height:3, marginLeft:-30, background:'linear-gradient(90deg, #1e88e5, #757575)', borderRadius:2, zIndex:6 }}
        />

        {/* WITH：兩個一起往右走（相遇後同步前進） */}
        <motion.div
          animate={{ x:[0,0,0,0,0,40,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.42,0.50,0.60,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'36%', top:'44%', display:'flex', gap:8, alignItems:'center', zIndex:7 }}>
          <motion.div
            animate={{ opacity:[0,0,0,0,1,1,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.42,0.50,0.54,0.76,0.94] }}
            style={{ fontSize:10, fontWeight:900, color:'#1565c0' }}>👔</motion.div>
          <motion.div
            animate={{ opacity:[0,0,0,0,1,1,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.42,0.50,0.54,0.76,0.94] }}
            style={{ width:18, height:2, background:'#43a047', borderRadius:1 }} />
          <motion.div
            animate={{ opacity:[0,0,0,0,0,0,0,0,0,0.8,0,0,0] }}
            transition={{ duration:5, repeat:Infinity }}>
            <div style={{ width:0, height:0, borderTop:'4px solid transparent', borderBottom:'4px solid transparent', borderLeft:'7px solid #43a047' }} />
          </motion.div>
        </motion.div>

        <div style={{ position:'absolute', bottom:'8%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>WITH = 兩個一起走 = 搭配</div>
      </>}

      {/* ════ Scene B：決定採用（選了某個方案，跟它一起走）
          GO = 人自己往前
          WITH = 帶著選定的方案一起走 ════ */}
      {isDecide && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'65%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 三個方案 */}
        {[
          { label:'方案A', bg:'#ffebee', border:'#ef9a9a', color:'#c62828' },
          { label:'方案B', bg:'#e8f5e9', border:'#a5d6a7', color:'#2e7d32' },
          { label:'方案C', bg:'#e3f2fd', border:'#90caf9', color:'#1565c0' },
        ].map((opt, i) => (
          <motion.div
            key={i}
            animate={{
              opacity:[1,1,1,1, i===1?1:0.2, i===1?1:0.2, 1],
              x:[0,0,0,0, i===1?0:0, i===1?0:0, 0],
            }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.36,0.50,0.72,0.94] }}
            style={{ position:'absolute', left:`${14+i*28}%`, top:'28%', zIndex:5 }}>
            <div style={{ background:opt.bg, border:`2px solid ${opt.border}`, borderRadius:8, padding:'4px 8px', textAlign:'center', minWidth:44 }}>
              <div style={{ fontSize:9, fontWeight:800, color:opt.color }}>{opt.label}</div>
            </div>
          </motion.div>
        ))}

        {/* 방案B 選中標記 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,1,0], y:[4,4,4,4,0,0,4] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.38,0.48,0.72,0.94] }}
          style={{ position:'absolute', left:'calc(42% + 2px)', top:'20%', fontSize:14, zIndex:8 }}>✅
        </motion.div>

        {/* 人 — 先看方案（靜止），然後 WITH 方案B 一起往前走 */}
        <motion.div
          animate={{ x:[0,0,0,0,90,130,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.42,0.62,0.74,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'8%', top:'28%', zIndex:6 }}>
          <motion.div
            animate={{ opacity:[0,0.8,0.8,0,0,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.36,0.54,0.76,0.94] }}
            style={{ position:'absolute', left:'50%', marginLeft:-8, top:-18, fontSize:12, color:'#9e9e9e', fontWeight:900 }}>?
          </motion.div>
          <motion.div
            animate={{ opacity:[0,0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.42,0.58,0.68,0.94] }}
            style={{ position:'absolute', right:'100%', top:'38%', width:28, height:7, background:'linear-gradient(90deg, transparent, #90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.50, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* 方案B 也跟著往前走（WITH = 一起走） */}
        <motion.div
          animate={{ x:[0,0,0,0,90,130,0], opacity:[1,1,1,1,1,0,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.42,0.62,0.74,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'42%', top:'28%', zIndex:7 }}>
          <div style={{ background:'#e8f5e9', border:'2px solid #a5d6a7', borderRadius:8, padding:'4px 8px', textAlign:'center', minWidth:44 }}>
            <div style={{ fontSize:9, fontWeight:800, color:'#2e7d32' }}>方案B</div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.42,0.52,0.70,0.94] }}
          style={{ position:'absolute', bottom:'8%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:900, color:'#2e7d32', zIndex:8, whiteSpace:'nowrap' }}>
          WITH 方案B 一起走 = 決定採用它！
        </motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Set up  (set-erect)
// SET 把元件一一定位 + UP 往上立起來
// ─────────────────────────────────────────────────
function SetErectScene({ obj }) {
  const isTrap = obj.label === '陷阱';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：建立、架設
          SET = 把各元件定位好
          UP  = 一根根往上立起來，搭成完整結構 ════ */}
      {!isTrap && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'66%', height:3, background:'#8d6e63', borderRadius:2, zIndex:2 }} />

        {/* 三根柱子：依序從地面 SET 定位，往 UP 方向立起 */}
        {[0,1,2].map(i => (
          <motion.div
            key={i}
            animate={{ scaleY:[0,0,0,1,1,1,0], opacity:[0,0,0,1,1,1,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.16+i*0.10,0.30+i*0.10,0.60,0.76,0.94], ease:'easeOut' }}
            style={{ position:'absolute', left:`${28+i*20}%`, top:'30%', width:12, height:'36%', background: i===1?'#5d4037':'#8d6e63', borderRadius:'3px 3px 0 0', transformOrigin:'bottom center', zIndex:4+i }}
          />
        ))}

        {/* UP：屋頂三角（三根柱子都立好後出現）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], y:[10,10,10,10,10,0,0,10] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.34,0.46,0.54,0.76,0.94] }}
          style={{ position:'absolute', left:'20%', top:'16%', zIndex:7 }}>
          <svg width="120" height="60" viewBox="0 0 120 60">
            <polygon points="60,4 116,58 4,58" fill="#a1887f" stroke="#5d4037" strokeWidth="2.5"/>
          </svg>
        </motion.div>

        {/* ⛺ emoji 最終結果 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0.9,0], scale:[0.6,0.6,0.6,0.6,0.6,1,1,0.6] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.34,0.46,0.56,0.76,0.94] }}
          style={{ position:'absolute', right:'10%', top:'8%', fontSize:28, zIndex:8 }}>
          {obj.emoji}
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.7,0.7,0,0], y:[5,5,5,0,0,0,5] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.30,0.46,0.56,0.94] }}
          style={{ position:'absolute', left:'46%', top:'22%', fontSize:12, fontWeight:900, color:'#5d4037', zIndex:6 }}>↑ UP
        </motion.div>

        <div style={{ position:'absolute', bottom:'8%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 定位 + UP 立起 = 架設完成</div>
      </>}

      {/* ════ Scene B：設局、陷害
          SET = 把陷阱每個零件仔細定位布置好
          UP  = 整個機關架好「立起來」待命 ════ */}
      {isTrap && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'66%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 誘餌（中央，一開始就在） */}
        <motion.div
          animate={{ opacity:[0,0,1,1,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.16,0.34,0.60,0.76,0.94] }}
          style={{ position:'absolute', left:'50%', marginLeft:-12, top:'50%', fontSize:24, zIndex:5 }}>🧀
        </motion.div>

        {/* SET：陷阱左臂從左側滑入定位 */}
        <motion.div
          animate={{ x:['-60px','0px','0px','0px','0px','-60px'], opacity:[0,1,1,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.16,0.28,0.44,0.76,0.94] }}
          style={{ position:'absolute', left:'28%', top:'44%', width:36, height:6, background:'#5d4037', borderRadius:3, transformOrigin:'right center', zIndex:4 }}
        />
        {/* SET：陷阱右臂從右側滑入定位 */}
        <motion.div
          animate={{ x:['60px','0px','0px','0px','0px','60px'], opacity:[0,1,1,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.20,0.30,0.44,0.76,0.94] }}
          style={{ position:'absolute', right:'28%', top:'44%', width:36, height:6, background:'#5d4037', borderRadius:3, transformOrigin:'left center', zIndex:4 }}
        />

        {/* UP：🪤 陷阱機關完全架好（彈起來） */}
        <motion.div
          animate={{ opacity:[0,0,0,0.9,0.9,0.9,0], scale:[0,0,0,1.2,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.38,0.46,0.76,0.94] }}
          style={{ position:'absolute', left:'50%', marginLeft:-14, top:'34%', fontSize:28, zIndex:7 }}>
          {obj.emoji}
        </motion.div>

        {/* 受害人走進來 */}
        <motion.div
          animate={{ x:[0,0,0,0,0,50,50], opacity:[1,1,1,1,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.42,0.50,0.62,0.72] }}
          style={{ position:'absolute', left:'10%', top:'34%', zIndex:6 }}>
          <svg width="28" height="38" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>

        {/* SNAP 閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,0,3.5,0], opacity:[0,0,0,0,0,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.44,0.58,0.64,0.74] }}
          style={{ position:'absolute', left:'50%', top:'48%', width:14, height:14, marginLeft:-7, marginTop:-7, borderRadius:'50%', background:'radial-gradient(circle, rgba(229,57,53,0.95), transparent 70%)', zIndex:9, transformOrigin:'center' }}
        />
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.44,0.58,0.66,0.76] }}
          style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', top:'18%', fontSize:11, fontWeight:900, color:'#e53935', zIndex:9, whiteSpace:'nowrap' }}>
          SNAP！陷阱啟動！
        </motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Set out  (set-depart)
// SET 在起點定位就緒 + OUT 往外踏出去
// ─────────────────────────────────────────────────
function SetDepartScene({ obj }) {
  const isGoal = obj.label === '目標';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：啟程出發
          SET = 在起點裝備就緒、定位好
          OUT = 往外踏出去，離開起點上路 ════ */}
      {!isGoal && <>
        {/* 天空 */}
        <div style={{ position:'absolute', left:0, right:0, top:0, height:'55%', background:'linear-gradient(180deg,#87ceeb 0%,#e0f7fa 100%)', zIndex:1 }} />
        {/* 地面 */}
        <div style={{ position:'absolute', left:0, right:0, top:'55%', bottom:0, background:'#c8e6c9', zIndex:1 }} />
        {/* 道路 */}
        <div style={{ position:'absolute', left:'30%', right:0, top:'52%', height:8, background:'#bdbdbd', zIndex:2 }} />

        {/* 🏠 起點（左側） */}
        <div style={{ position:'absolute', left:'6%', top:'26%', zIndex:4 }}>
          <svg width="52" height="50" viewBox="0 0 52 50">
            <polygon points="26,2 50,22 2,22" fill="#8d6e63" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="6" y="22" width="40" height="28" rx="2" fill="#bcaaa4" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="18" y="30" width="16" height="20" rx="2" fill="#795548"/>
          </svg>
        </div>

        {/* SET：人在門口準備（靜止，背包在身） */}
        {/* OUT：人往右走出去 */}
        <motion.div
          animate={{ x:[0,0,0,120,170,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.60,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'22%', top:'30%', zIndex:5 }}>
          {/* 🎒 背包（SET = 裝備好了） */}
          <div style={{ position:'absolute', right:-4, top:2, fontSize:14, zIndex:6 }}>🎒</div>
          {/* 速度尾跡（OUT 後） */}
          <motion.div
            animate={{ opacity:[0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.32,0.54,0.66,0.94] }}
            style={{ position:'absolute', right:'100%', top:'38%', width:28, height:7, background:'linear-gradient(90deg,transparent,#90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.50, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* OUT 方向標示 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.7,0,0], x:[0,0,0,6,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.46,0.56,0.94] }}
          style={{ position:'absolute', left:'55%', top:'46%', fontSize:10, fontWeight:900, color:'#1565c0', zIndex:5 }}>
          OUT →
        </motion.div>

        <div style={{ position:'absolute', bottom:'6%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 就緒 + OUT 踏出去 = 啟程</div>
      </>}

      {/* ════ Scene B：著手、打算做（set out to do）
          SET = 在起點確立目標方向
          OUT = 往那個方向踏出第一步 ════ */}
      {isGoal && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'62%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />
        {/* 出發線 */}
        <div style={{ position:'absolute', left:'20%', top:'36%', width:3, height:30, background:'#9e9e9e', borderRadius:1, zIndex:3 }} />
        <div style={{ position:'absolute', left:'16%', top:'34%', fontSize:9, color:'#9e9e9e', fontWeight:700 }}>START</div>

        {/* 🎯 遠端目標 */}
        <div style={{ position:'absolute', right:'8%', top:'30%', fontSize:32, zIndex:4 }}>{obj.emoji}</div>

        {/* SET：人在起點靜止，眼神看向目標（醞釀） */}
        {/* OUT：邁出第一步往目標方向走 */}
        <motion.div
          animate={{ x:[0,0,0,110,150,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.62,0.76,0.94], ease:'easeIn' }}
          style={{ position:'absolute', left:'22%', top:'26%', zIndex:5 }}>
          {/* 決心泡泡（SET 期間出現） */}
          <motion.div
            animate={{ opacity:[0,0.9,0.9,0,0,0], scale:[0.6,1,1,0.6,0.6,0.6] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.26,0.34,0.54,0.94] }}
            style={{ position:'absolute', left:'50%', marginLeft:-20, top:-22, fontSize:9, fontWeight:800, color:'#1565c0', background:'#e3f2fd', borderRadius:6, padding:'2px 6px', border:'1.5px solid #90caf9', whiteSpace:'nowrap', zIndex:8 }}>
            目標：{obj.emoji}
          </motion.div>
          <motion.div
            animate={{ opacity:[0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.32,0.54,0.64,0.94] }}
            style={{ position:'absolute', right:'100%', top:'38%', width:28, height:7, background:'linear-gradient(90deg,transparent,#90caf9)', borderRadius:4 }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.50, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity:[0,0,0,0.9,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.42,0.64,0.94] }}
          style={{ position:'absolute', bottom:'8%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:900, color:'#1565c0', zIndex:8, whiteSpace:'nowrap' }}>
          SET 確立目標 → OUT 踏出第一步！
        </motion.div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Set off  (set-ignite)
// SET 定位蓄力 + OFF 彈離爆發
// ─────────────────────────────────────────────────
function SetIgniteScene({ obj }) {
  const isTrigger = obj.label === '觸發';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：出發（爆發感）
          SET = 在起點蓄力，壓低身體
          OFF = 彈離起點，衝刺爆發 ════ */}
      {!isTrigger && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:0, right:0, top:'60%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />
        {/* 起跑線 */}
        <div style={{ position:'absolute', left:'18%', top:'38%', width:3, height:26, background:'#ff5722', borderRadius:1, zIndex:3 }} />
        <div style={{ position:'absolute', left:'6%', top:'36%', fontSize:9, fontWeight:700, color:'#ff5722', zIndex:3 }}>SET!</div>

        {/* 衝刺中的人 */}
        <motion.div
          animate={{ x:[0,0,0,5,140,190,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.36,0.60,0.76,0.94], ease:[0.4,0,0.2,1] }}
          style={{ position:'absolute', left:'20%', top:'22%', zIndex:5 }}>
          {/* 速度尾跡 */}
          <motion.div
            animate={{ opacity:[0,0,0,0,1,0,0], width:[0,0,0,0,44,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.38,0.54,0.64,0.94] }}
            style={{ position:'absolute', right:'100%', top:'40%', height:8, background:'linear-gradient(90deg,transparent,#90caf9)', borderRadius:4 }} />
          {/* 爆發閃光（離線瞬間） */}
          <motion.div
            animate={{ scale:[0,0,0,0,3,0,0], opacity:[0,0,0,0,1,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.35,0.40,0.46,0.94] }}
            style={{ position:'absolute', left:-6, top:6, width:14, height:14, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,87,34,0.8),transparent 70%)', zIndex:6, transformOrigin:'center' }} />
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.40, repeat:Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              {/* 向前傾，手臂前後擺 */}
              <line x1="19" y1="21" x2="5"  y2="25" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="34" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="32" y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="5"  y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* OFF 標示 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.8,0,0], x:[0,0,0,0,8,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.38,0.50,0.60,0.94] }}
          style={{ position:'absolute', left:'50%', top:'44%', fontSize:11, fontWeight:900, color:'#e65100', zIndex:5 }}>
          OFF →
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 蓄力 + OFF 彈離 = 爆發出發</div>
      </>}

      {/* ════ Scene B：觸發、引爆
          SET = 把觸發點定位好（煙霧飄向偵測器）
          OFF = 感應到 → 警報彈離爆發 ════ */}
      {isTrigger && <>
        {/* 天花板線 */}
        <div style={{ position:'absolute', left:0, right:0, top:'14%', height:3, background:'#bdbdbd', zIndex:2 }} />

        {/* 🔔 警報器（天花板上） */}
        <div style={{ position:'absolute', right:'16%', top:'4%', fontSize:26, zIndex:4, transform:'rotate(180deg)' }}>{obj.emoji}</div>

        {/* 閃爍警報光 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,0,1,0,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.20,0.34,0.44,0.50,0.55,0.60,0.65,0.70,0.94] }}
          style={{ position:'absolute', right:'10%', top:'2%', width:50, height:50, borderRadius:'50%', background:'rgba(229,57,53,0.25)', zIndex:3 }} />

        {/* 警報音波線 */}
        {[0,1,2].map(i => (
          <motion.div
            key={i}
            animate={{ opacity:[0,0,0,0,0,0.8,0], x:[0,0,0,0,0,-(16+i*12),0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.34,0.44,0.50,0.62,0.94], delay:i*0.06 }}
            style={{ position:'absolute', right:`${24+i*8}%`, top:`${18+i*5}%`, width:18-i*3, height:3, background:'#ef5350', borderRadius:2, zIndex:5, opacity:0 }} />
        ))}

        {/* 🍳 鍋子（觸發源） */}
        <div style={{ position:'absolute', left:'12%', top:'50%', fontSize:26, zIndex:4 }}>🍳</div>

        {/* 煙霧上升（SET = 把觸發點定位好） */}
        {[0,1,2].map(i => (
          <motion.div
            key={i}
            animate={{ y:[0,0,0,-60,-90,0], opacity:[0,0,1,0.7,0,0], x:[0,0,i*8-8,i*12-12,i*14-14,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.10,0.18,0.34,0.44,0.94], delay:i*0.08 }}
            style={{ position:'absolute', left:`${20+i*4}%`, top:'42%', width:14, height:14, borderRadius:'50%', background:'rgba(200,200,200,0.7)', zIndex:3, opacity:0 }} />
        ))}

        {/* SNAP 文字 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.95,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.34,0.44,0.50,0.58,0.94] }}
          style={{ position:'absolute', right:'18%', top:'22%', fontSize:11, fontWeight:900, color:'#e53935', zIndex:8, whiteSpace:'nowrap' }}>
          SET OFF！警報觸發！
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 定位觸發點 + OFF 彈離爆發</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Set back  (set-regress)
// SET 把進度重新定位 + BACK 往後推回去
// ─────────────────────────────────────────────────
function SetRegressScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ SET BACK：進度被推回去
          SET = 把進度重新定位到更後面的位置
          BACK = 往後退，時程倒退 ════ */}

      {/* 進度跑道 */}
      <div style={{ position:'absolute', left:'8%', right:'8%', top:'54%', height:6, background:'#e0e0e0', borderRadius:3, zIndex:2 }} />

      {/* 里程碑標記 */}
      {['Day 1','Day 3','Day 5'].map((label, i) => (
        <div key={i} style={{ position:'absolute', left:`${16+i*32}%`, top:'46%', zIndex:3, textAlign:'center' }}>
          <div style={{ width:2, height:10, background:'#9e9e9e', margin:'0 auto 2px' }} />
          <div style={{ fontSize:8, color:'#9e9e9e', fontWeight:700, whiteSpace:'nowrap' }}>{label}</div>
        </div>
      ))}

      {/* 進度填充（綠色進度條，先前進再退回） */}
      <motion.div
        animate={{ width:['8%','8%','52%','52%','16%','16%','8%'] }}
        transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.38,0.58,0.76,0.94], ease:'easeInOut' }}
        style={{ position:'absolute', left:'8%', top:'54%', height:6, background:'linear-gradient(90deg,#66bb6a,#43a047)', borderRadius:3, zIndex:3 }} />

      {/* 人物（跟著進度前進 → 被推退） */}
      <motion.div
        animate={{ x:[0,0,110,110,-60,-60,0] }}
        transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.38,0.58,0.76,0.94], ease:'easeInOut' }}
        style={{ position:'absolute', left:'8%', top:'28%', zIndex:5 }}>
        <svg width="34" height="46" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
        </svg>
      </motion.div>

      {/* ⛈️ 阻礙（出現，推人後退） */}
      <motion.div
        animate={{ opacity:[0,0,0.9,0.9,0,0], y:[10,10,0,0,10,10] }}
        transition={{ duration:5, repeat:Infinity, times:[0,0.32,0.40,0.52,0.60,0.94] }}
        style={{ position:'absolute', left:'42%', top:'10%', fontSize:30, zIndex:6 }}>
        {obj.emoji}
      </motion.div>

      {/* ← BACK 箭頭（退後瞬間） */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0.9,0,0], x:[0,0,0,0,-8,0,0] }}
        transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.32,0.40,0.52,0.60,0.94] }}
        style={{ position:'absolute', left:'36%', top:'34%', fontSize:11, fontWeight:900, color:'#e53935', zIndex:7 }}>
        ← BACK！
      </motion.div>

      {/* 沮喪 emoji */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,0.9,0] }}
        transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.32,0.42,0.56,0.64,0.94] }}
        style={{ position:'absolute', left:'8%', top:'16%', fontSize:16, zIndex:7 }}>
        😞
      </motion.div>

      <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 重新定位 + BACK 往後推 = 進度倒退</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Set aside  (set-sideline)
// SET 定位 + ASIDE 往旁邊挪
// ─────────────────────────────────────────────────
function SetSidelineScene({ obj }) {
  const isSave = obj.label === '保留';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：擱置
          SET = 把任務定位放下
          ASIDE = 推到旁邊，主線讓出來 ════ */}
      {!isSave && <>
        {/* 主線（中央水平軌） */}
        <div style={{ position:'absolute', left:'8%', right:'8%', top:'50%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />
        <div style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', top:'42%', fontSize:8, color:'#9e9e9e', fontWeight:700 }}>主線</div>

        {/* 📋 任務A（一開始在中央，被推到旁邊） */}
        <motion.div
          animate={{ x:[0,0,0,90,90,90,0], y:[0,0,0,30,30,30,0], opacity:[1,1,1,1,1,1,1], scale:[1,1,1,0.82,0.82,0.82,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.42,0.60,0.76,0.94], ease:'easeInOut' }}
          style={{ position:'absolute', left:'26%', top:'26%', background:'#fff3e0', border:'2px solid #ffb300', borderRadius:8, padding:'4px 8px', zIndex:5 }}>
          <div style={{ fontSize:14 }}>{obj.emoji}</div>
          <div style={{ fontSize:8, fontWeight:700, color:'#e65100' }}>座位安排</div>
        </motion.div>

        {/* ASIDE 箭頭 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.85,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.40,0.50,0.94] }}
          style={{ position:'absolute', left:'34%', top:'30%', fontSize:10, fontWeight:900, color:'#ff8f00', zIndex:7 }}>
          ASIDE →
        </motion.div>

        {/* 🍽️ 新任務（取代中央位置） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.95,0.95,0], scale:[0.7,0.7,0.7,0.7,1,1,0.7] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.40,0.50,0.76,0.94] }}
          style={{ position:'absolute', left:'26%', top:'26%', background:'#e8f5e9', border:'2px solid #43a047', borderRadius:8, padding:'4px 8px', zIndex:5 }}>
          <div style={{ fontSize:14 }}>🍽️</div>
          <div style={{ fontSize:8, fontWeight:700, color:'#2e7d32' }}>菜單規劃</div>
        </motion.div>

        {/* 擱置標示（任務A在旁邊時出現） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.7,0.7,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.40,0.50,0.76,0.94] }}
          style={{ position:'absolute', left:'64%', top:'60%', fontSize:8, color:'#9e9e9e', fontWeight:700, whiteSpace:'nowrap' }}>
          暫放一旁
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 定位 + ASIDE 推到旁邊 = 擱置</div>
      </>}

      {/* ════ Scene B：留出、保留
          SET = 把這部分定位分離出來
          ASIDE = 撥到旁邊的專屬區域保存 ════ */}
      {isSave && <>
        {/* 主錢包（左側） */}
        <motion.div
          animate={{ scale:[1,1,1,0.9,0.9,0.9,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.38,0.60,0.76,0.94] }}
          style={{ position:'absolute', left:'10%', top:'28%', fontSize:32, zIndex:4 }}>
          👛
        </motion.div>
        <div style={{ position:'absolute', left:'7%', top:'60%', fontSize:9, color:'#9e9e9e', fontWeight:700, whiteSpace:'nowrap' }}>主要開銷</div>

        {/* 飛出的金幣（ASIDE = 往右側飛過去） */}
        {[0,1,2].map(i => (
          <motion.div
            key={i}
            animate={{ x:[0,0,0,100+i*8,110+i*8,0], y:[0,0,0,-10+i*6,-8+i*6,0], opacity:[0,0,0.8,0.9,0,0], scale:[0.8,0.8,1,1,0.8,0.8] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.24,0.44,0.56,0.94], delay:i*0.05 }}
            style={{ position:'absolute', left:'20%', top:'38%', fontSize:14, zIndex:6 }}>
            💰
          </motion.div>
        ))}

        {/* ASIDE 方向標 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.8,0,0], x:[0,0,0,8,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.40,0.52,0.94] }}
          style={{ position:'absolute', left:'36%', top:'36%', fontSize:10, fontWeight:900, color:'#1565c0', zIndex:7 }}>
          ASIDE →
        </motion.div>

        {/* 右側保留罐（度假基金） */}
        <motion.div
          animate={{ scale:[1,1,1,1.08,1.08,1,1] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.42,0.52,0.64,0.76,0.94] }}
          style={{ position:'absolute', right:'8%', top:'22%', zIndex:5, textAlign:'center' }}>
          <div style={{ fontSize:28 }}>🏦</div>
          <div style={{ fontSize:8, fontWeight:700, color:'#1565c0', background:'#e3f2fd', borderRadius:4, padding:'1px 4px', marginTop:2, whiteSpace:'nowrap' }}>度假基金</div>
          {/* 金額累積 */}
          <motion.div
            animate={{ opacity:[0,0,0,0,0.9,0.9,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.36,0.48,0.56,0.76,0.94] }}
            style={{ fontSize:9, fontWeight:900, color:'#43a047', marginTop:2 }}>
            +$$$
          </motion.div>
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>SET 分離 + ASIDE 撥到專屬區 = 保留</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take off  (take-liftoff)
// TAKE 拿取動作 + OFF 脫離接觸面
// ─────────────────────────────────────────────────
function TakeLiftoffScene({ obj }) {
  const isCoat   = obj.label === '脫掉';
  const isPlane  = obj.label === '起飛';
  // 爆紅 is the third case

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：脫掉衣物
          TAKE = 手拿住外套
          OFF  = 外套脫離身體接觸面往上飄走 ════ */}
      {isCoat && <>
        {/* 地面 */}
        <div style={{ position:'absolute', left:'6%', right:'6%', top:'66%', height:3, background:'#e0e0e0', borderRadius:2, zIndex:2 }} />

        {/* 人（中央） */}
        <div style={{ position:'absolute', left:'35%', top:'24%', zIndex:4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 🧥 外套：TAKE（貼身）→ OFF（脫離飛走） */}
        <motion.div
          animate={{ x:[0,0,0,55,80], y:[0,0,0,-50,-80], rotate:[0,0,0,20,40], opacity:[1,1,1,1,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.54,0.76], ease:'easeInOut' }}
          style={{ position:'absolute', left:'34%', top:'26%', fontSize:28, zIndex:6, transformOrigin:'bottom center' }}>
          {obj.emoji}
        </motion.div>

        {/* TAKE 手臂動作提示 */}
        <motion.div
          animate={{ opacity:[0,0,0.8,0,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.26,0.36,0.94] }}
          style={{ position:'absolute', left:'52%', top:'30%', fontSize:10, fontWeight:900, color:'#1565c0', zIndex:7 }}>
          TAKE →
        </motion.div>
        <motion.div
          animate={{ opacity:[0,0,0,0.8,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.32,0.44,0.94] }}
          style={{ position:'absolute', left:'56%', top:'18%', fontSize:10, fontWeight:900, color:'#e65100', zIndex:7 }}>
          ↑ OFF
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>TAKE 拿起 + OFF 脫離身體 = 脫掉</div>
      </>}

      {/* ════ Scene B：起飛
          TAKE = 飛機取得速度滑行
          OFF  = 機輪脫離跑道接觸面、升空 ════ */}
      {isPlane && <>
        {/* 天空 */}
        <div style={{ position:'absolute', left:0, right:0, top:0, height:'56%', background:'linear-gradient(180deg,#42a5f5 0%,#e0f7fa 100%)', zIndex:1 }} />
        {/* 跑道 */}
        <div style={{ position:'absolute', left:0, right:0, top:'56%', bottom:0, background:'#546e7a', zIndex:1 }} />
        <div style={{ position:'absolute', left:'10%', right:'10%', top:'57%', height:2, background:'#ffd54f', zIndex:2 }} />

        {/* ✈️ 飛機 */}
        <motion.div
          animate={{ x:[-30,-30,0,120,200], y:[0,0,0,-55,-110], rotate:[0,0,0,-10,-16] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.22,0.54,0.76], ease:'easeIn' }}
          style={{ position:'absolute', left:'8%', top:'40%', fontSize:36, zIndex:5, transformOrigin:'center' }}>
          {obj.emoji}
        </motion.div>

        {/* 引擎尾流 */}
        <motion.div
          animate={{ opacity:[0,0,0,0.7,0], x:[-30,-30,0,80,140] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.22,0.50,0.68] }}
          style={{ position:'absolute', left:'2%', top:'50%', width:32, height:5, background:'linear-gradient(90deg,transparent,rgba(144,202,249,0.8))', borderRadius:3, zIndex:4 }} />

        {/* OFF 標示（離地瞬間） */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.85,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.22,0.38,0.48,0.62] }}
          style={{ position:'absolute', left:'44%', top:'36%', fontSize:10, fontWeight:900, color:'#1a237e', zIndex:6 }}>
          ↑ OFF!
        </motion.div>

        <div style={{ position:'absolute', bottom:'6%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#e0e0e0', zIndex:4, whiteSpace:'nowrap' }}>TAKE 滑行加速 + OFF 脫離跑道 = 起飛</div>
      </>}

      {/* ════ Scene C：爆紅、突然成功
          TAKE = 開始累積
          OFF  = 突然脫離平均水準，急速拉高 ════ */}
      {!isCoat && !isPlane && <>
        {/* 折線圖背景格線 */}
        {[0,1,2,3].map(i => (
          <div key={i} style={{ position:'absolute', left:'12%', right:'8%', top:`${22+i*12}%`, height:1, background:'#f0f0f0', zIndex:2 }} />
        ))}
        <div style={{ position:'absolute', left:'14%', top:'20%', width:2, height:'54%', background:'#e0e0e0', zIndex:2 }} />

        {/* 🚀 emoji */}
        <motion.div
          animate={{ y:[0,0,0,-70,-100,0], x:[0,0,0,30,50,0], rotate:[0,0,0,-30,-40,0], opacity:[0.9,0.9,0.9,1,0,0.9] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.28,0.54,0.68,0.94], ease:'easeIn' }}
          style={{ position:'absolute', left:'40%', top:'56%', fontSize:28, zIndex:6 }}>
          {obj.emoji}
        </motion.div>

        {/* 折線：平 → 急升 */}
        <motion.svg
          viewBox="0 0 200 90"
          style={{ position:'absolute', left:'12%', top:'20%', width:'76%', height:'56%', zIndex:5 }}>
          {/* 靜止期（平線） */}
          <motion.path
            d="M 0 70 L 80 66 L 100 64"
            fill="none" stroke="#90caf9" strokeWidth="2.5" strokeLinecap="round"
            animate={{ opacity:[0,0,0.7,0.7,0.7,0.7,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.16,0.30,0.56,0.76,0.94] }} />
          {/* 起飛後急升 */}
          <motion.path
            d="M 100 64 L 120 50 L 145 28 L 170 8"
            fill="none" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray="120" strokeDashoffset="120"
            animate={{ strokeDashoffset:[120,120,120,0,0,0] }}
            transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.58,0.76,0.94], ease:'easeOut' }} />
        </motion.svg>

        {/* 星星四散 */}
        {[0,1,2,3].map(i => {
          const angles = [45,130,200,310];
          const rad = angles[i] * Math.PI / 180;
          return (
            <motion.div key={i}
              animate={{ x:[0,0,0,Math.cos(rad)*50,0], y:[0,0,0,Math.sin(rad)*40,0], opacity:[0,0,0,1,0], scale:[0,0,0,1.2,0] }}
              transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.50,0.62,0.76], delay:i*0.04 }}
              style={{ position:'absolute', left:'66%', top:'24%', fontSize:12, zIndex:7 }}>
              ⭐
            </motion.div>
          );
        })}

        {/* TAKE OFF 標示 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0] }}
          transition={{ duration:5, repeat:Infinity, times:[0,0.08,0.30,0.50,0.60,0.76] }}
          style={{ position:'absolute', right:'6%', top:'10%', fontSize:10, fontWeight:900, color:'#e53935', zIndex:8 }}>
          TAKE OFF！
        </motion.div>

        <div style={{ position:'absolute', bottom:'7%', left:'50%', transform:'translateX(-50%)', fontSize:10, fontWeight:700, color:'#757575', zIndex:4, whiteSpace:'nowrap' }}>脫離平均水準 → 急速竄升爆紅</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take on  (take-shoulder)
// TAKE 拿取接受 + ON 到自己身上 = 扛責任、招人、迎戰
// ─────────────────────────────────────────────────
function TakeShoulderScene({ obj }) {
  const isHiring    = obj.label === '新員工';
  const isChallenge = obj.label === '對手';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：扛下責任
          TAKE = 伸手接住重物
          ON   = 壓到自己肩上 ════ */}
      {!isHiring && !isChallenge && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 人（略微被重物壓低） */}
        <motion.div
          animate={{ y: [0, 0, 0, 6, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '28%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 重物（責任）從右側飄來，落到肩上 */}
        <motion.div
          animate={{ x: [80, 80, 0, 0, 0, 80], y: [-8, -8, -32, -28, -28, -8], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '20%', fontSize: 28, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.40, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '26%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 7 }}>
          TAKE ←
        </motion.div>

        {/* ON 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', left: '26%', top: '12%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ↓ ON（壓上身）
        </motion.div>

        {/* 衝擊波 */}
        <motion.div
          animate={{ scale: [0, 0, 0, 0, 2.4, 0], opacity: [0, 0, 0, 0, 0.32, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.50, 0.58, 0.72] }}
          style={{ position: 'absolute', left: '29%', top: '20%', width: 44, height: 18, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(229,57,53,0.4), transparent)', zIndex: 5 }} />

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接下 + ON 壓到自己身上 = 扛下來</div>
      </>}

      {/* ════ Scene B：招人
          TAKE = 接過來
          ON   = 到我方這邊 ════ */}
      {isHiring && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 現有成員（左，海軍藍） */}
        <div style={{ position: 'absolute', left: '10%', top: '30%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 新員工（從右走來，橘紅色，鏡像） */}
        <motion.div
          animate={{ x: [110, 110, 0, 0, 0, 110], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.60, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '46%', top: '30%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.40, 0.50, 0.94] }}
          style={{ position: 'absolute', left: '56%', top: '22%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 7 }}>
          TAKE ←
        </motion.div>

        {/* ON 加入！ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.60, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '18%', top: '18%', fontSize: 10, fontWeight: 900, color: '#43a047', zIndex: 7 }}>
          ON ✓ 加入！
        </motion.div>

        {/* emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.50, 0.60, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '12%', fontSize: 24, zIndex: 8 }}>
          {obj.emoji}
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接過來 + ON 到我方 = 招人</div>
      </>}

      {/* ════ Scene C：迎戰
          TAKE = 接受挑戰（主動走向）
          ON   = 把壓力承到自己身上 ════ */}
      {isChallenge && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 對手（右，橘紅，面朝左） */}
        <div style={{ position: 'absolute', right: '12%', top: '30%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>

        {/* 主角（左，走向對手） */}
        <motion.div
          animate={{ x: [0, 0, 60, 60, 60, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.58, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '30%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 24, height: 6, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.46, 0.60, 0.78] }}
          style={{ position: 'absolute', left: '44%', top: '16%', fontSize: 24, zIndex: 8 }}>
          {obj.emoji}
        </motion.div>

        {/* TAKE ON！ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.48, 0.56, 0.72] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '10%', fontSize: 11, fontWeight: 900, color: '#e53935', zIndex: 7 }}>
          TAKE ON！
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接受 + ON 迎上去 = 迎戰</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take up  (take-ascend)
// TAKE 拿取 + UP 往上 = 開始投入 / 把空間時間往上填滿
// ─────────────────────────────────────────────────
function TakeAscendScene({ obj }) {
  const isTime = obj.label === '時間';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：入坑嗜好
          TAKE = 伸手從架上抓起
          UP   = 把嗜好舉高、正式投入 ════ */}
      {!isTime && <>
        {/* 架子 */}
        <div style={{ position: 'absolute', left: '18%', right: '18%', top: '58%', height: 5, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '22%', top: '58%', width: 5, height: 30, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />
        <div style={{ position: 'absolute', right: '22%', top: '58%', width: 5, height: 30, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />

        {/* 嗜好 emoji：從架上被拿起，往上提 */}
        <motion.div
          animate={{ y: [0, 0, -55, -65, -60, 0], scale: [1, 1, 1.15, 1.2, 1.2, 1], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.38, 0.52, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '38%', fontSize: 34, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 手（從上往下，然後往上提） */}
        <motion.div
          animate={{ y: [0, 0, 20, 5, 5, 0], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '18%', width: 20, height: 14, background: '#FDBCB4', border: '1.5px solid #E59866', borderRadius: 5, zIndex: 7 }} />

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.40, 0.94] }}
          style={{ position: 'absolute', right: '12%', top: '32%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 8 }}>
          TAKE
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '18%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          ↑ UP！
        </motion.div>

        {/* 光暈（投入成功） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 0, 1.8, 0], opacity: [0, 0, 0, 0, 0.25, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.52, 0.60, 0.76] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '8%', width: 44, height: 44, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,152,0,0.6), transparent)', zIndex: 5 }} />

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 拿起 + UP 舉高投入 = 開始學</div>
      </>}

      {/* ════ Scene B：佔掉時間
          TAKE = 拿走可用的時間
          UP   = 往上填滿直到沒剩 ════ */}
      {isTime && <>
        {/* 時間條外框 */}
        <div style={{ position: 'absolute', left: '14%', right: '14%', top: '22%', height: 36, border: '2px solid #b0bec5', borderRadius: 6, background: '#eceff1', overflow: 'hidden', zIndex: 3 }}>
          {/* 時間被吃掉（從左往右填滿） */}
          <motion.div
            animate={{ width: ['0%', '0%', '100%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.58, 0.76, 0.94], ease: 'easeInOut' }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #ef5350, #e53935)', borderRadius: 4 }} />
          {/* 文字 */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#546e7a', fontWeight: 700 }}>一天的時間</div>
        </div>

        {/* emoji */}
        <motion.div
          animate={{ x: [0, 0, 0, 0, 0], scale: [0.8, 0.8, 1.1, 1.0, 0.8], opacity: [0.7, 0.7, 1, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.58, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '46%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 佔用了幾小時 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.50, 0.62, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '68%', fontSize: 11, fontWeight: 900, color: '#e53935', zIndex: 7, whiteSpace: 'nowrap' }}>
          佔掉 2 小時！
        </motion.div>

        {/* TAKE UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.85, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.56, 0.64, 0.78] }}
          style={{ position: 'absolute', right: '12%', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          TAKE UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 拿走 + UP 填滿往上 = 吃掉時間</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take over  (take-occupy)
// TAKE 拿取 + OVER 越過蓋掉 = 接管 / 接替
// ─────────────────────────────────────────────────
function TakeOccupyScene({ obj }) {
  const isHandoff = obj.label === '工作';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：接管控制權
          TAKE = 藍色人走向位置
          OVER = 越過去把橘色人頂走，佔領位置 ════ */}
      {!isHandoff && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 椅子/位置（右側） */}
        <div style={{ position: 'absolute', right: '14%', top: '40%', zIndex: 3 }}>
          <div style={{ width: 30, height: 20, background: '#546e7a', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: 38, height: 4, background: '#455a64', borderRadius: 2, marginLeft: -4 }} />
        </div>

        {/* 原本佔位的橘色人 → 被頂走，往右退出 */}
        <motion.div
          animate={{ x: [0, 0, 0, 60, 120], opacity: [1, 1, 1, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.56, 0.70], ease: 'easeIn' }}
          style={{ position: 'absolute', right: '16%', top: '36%', zIndex: 5 }}>
          <svg width="36" height="50" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>

        {/* 藍色人 → 從左走到位置 */}
        <motion.div
          animate={{ x: [0, 0, 80, 108, 108, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '36%', zIndex: 6 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 22, height: 6, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="36" height="50" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* emoji（接管後出現） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.52, 0.60, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '18%', top: '20%', fontSize: 22, zIndex: 8 }}>
          {obj.emoji}
        </motion.div>

        {/* OVER 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '18%', fontSize: 10, fontWeight: 900, color: '#e53935', zIndex: 7 }}>
          TAKE OVER ！
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 拿走 + OVER 全面蓋掉 = 接管</div>
      </>}

      {/* ════ Scene B：接替工作（友好交接）
          TAKE = 藍色接手
          OVER = 橘色交棒往右離開 ════ */}
      {isHandoff && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 工作物件（💼 在中間交接） */}
        <motion.div
          animate={{ x: [50, 50, 0, -50, -50, 50], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '44%', top: '32%', fontSize: 26, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* 橘色人（持有工作，往右離開） */}
        <motion.div
          animate={{ x: [0, 0, 30, 80, 120], opacity: [1, 1, 0.8, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.58, 0.76] }}
          style={{ position: 'absolute', right: '18%', top: '36%', zIndex: 5 }}>
          <svg width="36" height="50" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>

        {/* 藍色人（從左走進，接棒） */}
        <motion.div
          animate={{ x: [0, 0, 60, 90, 90, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '36%', zIndex: 6 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 22, height: 6, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="36" height="50" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* OK 確認 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0.9, 0], scale: [0, 0, 0, 0, 1.2, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.54, 0.62, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '38%', top: '16%', fontSize: 20, zIndex: 8 }}>
          ✅
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接棒 + OVER 越過去換人 = 接替</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take out  (take-extract)
// TAKE 拿取 + OUT 往外 = 掏出 / 帶某人出去
// ─────────────────────────────────────────────────
function TakeExtractScene({ obj }) {
  const isDate = obj.label === '朋友';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：掏出、取出
          TAKE = 手伸進容器
          OUT  = 把東西拉出來 ════ */}
      {!isDate && <>
        {/* 包包/口袋（左側容器） */}
        <div style={{ position: 'absolute', left: '10%', top: '20%', zIndex: 3 }}>
          <svg width="72" height="88" viewBox="0 0 72 88">
            <rect x="4" y="20" width="64" height="64" rx="8" fill="#fff8e1" stroke="#f9a825" strokeWidth="2"/>
            <path d="M 22 20 L 22 10 Q 22 4 36 4 Q 50 4 50 10 L 50 20" fill="none" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4" y1="44" x2="68" y2="44" stroke="#f9a825" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>

        {/* 物件（從包包裡被拉出來） */}
        <motion.div
          animate={{ x: [0, 0, 90, 110, 110, 0], opacity: [0.3, 0.3, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.38, 0.52, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '22%', top: '36%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 手（從包包裡往右拉出） */}
        <motion.div
          animate={{ x: [0, 0, 80, 100, 100, 0], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.52, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '42%', width: 20, height: 14, background: '#FDBCB4', border: '1.5px solid #E59866', borderRadius: 5, zIndex: 7 }} />

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.38, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '24%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 8 }}>
          TAKE
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.50, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '58%', top: '24%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          → OUT
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 抓住 + OUT 拉出來 = 掏出</div>
      </>}

      {/* ════ Scene B：帶某人出去吃飯
          TAKE = 帶著對方
          OUT  = 出門到外面 ════ */}
      {isDate && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 門（左側，裡面） */}
        <div style={{ position: 'absolute', left: '10%', top: '22%', width: 28, height: 50, background: '#8d6e63', borderRadius: '3px 3px 0 0', zIndex: 3 }}>
          <div style={{ position: 'absolute', right: 4, top: '50%', width: 4, height: 4, borderRadius: '50%', background: '#ffd54f' }} />
        </div>

        {/* 餐廳（右側，外面） */}
        <div style={{ position: 'absolute', right: '8%', top: '26%', fontSize: 28, zIndex: 3 }}>🍽️</div>
        <div style={{ position: 'absolute', right: '6%', top: '60%', fontSize: 9, color: '#43a047', fontWeight: 700 }}>餐廳</div>

        {/* 兩人一起往右走（OUT = 出門） */}
        <motion.div
          animate={{ x: [0, 0, 100, 120, 120, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '32%', zIndex: 6, display: 'flex', gap: 6 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <svg width="32" height="46" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity, delay: 0.1 }}>
            <svg width="32" height="46" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* OUT 箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.56, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '16%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          → OUT（出門）
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 帶著 + OUT 出去 = 帶人出去吃</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take in  (take-absorb)
// TAKE 拿取 + IN 往裡面 = 吸收資訊 / 收留
// ─────────────────────────────────────────────────
function TakeAbsorbScene({ obj }) {
  const isShelter = obj.label === '流浪貓';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：吸收資訊
          TAKE = 從四面八方接收
          IN   = 全部進入腦中 ════ */}
      {!isShelter && <>
        {/* 大腦（中央） */}
        <div style={{
          position: 'absolute', left: '50%', marginLeft: -28, top: '14%',
          width: 56, height: 52, background: '#fce4ec',
          border: '2.5px solid #e91e63', borderRadius: '50% 50% 40% 40%',
          zIndex: 4, overflow: 'hidden',
        }}>
          {/* 腦紋 */}
          <svg width="56" height="52" viewBox="0 0 56 52" style={{ opacity: 0.3 }}>
            <path d="M 10 26 Q 20 16 28 26 Q 36 36 46 26" fill="none" stroke="#e91e63" strokeWidth="2"/>
            <path d="M 14 34 Q 22 44 34 36" fill="none" stroke="#e91e63" strokeWidth="1.5"/>
          </svg>
          {/* 光暈（資訊湧入時亮起） */}
          <motion.div
            animate={{ opacity: [0, 0, 0, 0.4, 0.4, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.50, 0.76, 0.94] }}
            style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(233,30,99,0.3), transparent 70%)' }} />
        </div>

        {/* 資訊粒子從四方飛入大腦 */}
        {[
          { from: { left: '4%',  top: '18%' }, color: '#42a5f5', delay: 0.8 },
          { from: { left: '78%', top: '14%' }, color: '#66bb6a', delay: 1.2 },
          { from: { left: '6%',  top: '62%' }, color: '#ffa726', delay: 1.6 },
          { from: { left: '76%', top: '58%' }, color: '#ab47bc', delay: 2.0 },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{
              left: [p.from.left, '50%'],
              top:  [p.from.top,  '38%'],
              scale: [1, 0.4],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1.4, repeat: Infinity, delay: p.delay, ease: 'easeIn' }}
            style={{ position: 'absolute', width: 10, height: 8, background: p.color, borderRadius: 3, marginLeft: -5, zIndex: 6 }}
          />
        ))}

        {/* emoji */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.2, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '72%', fontSize: 26, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '8%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          → IN（全進去）
        </motion.div>

        <div style={{ position: 'absolute', bottom: '6%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接收 + IN 進大腦 = 消化吸收</div>
      </>}

      {/* ════ Scene B：收留（流浪貓進家門）
          TAKE = 伸手迎接
          IN   = 帶進家門 ════ */}
      {isShelter && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 家（右側） */}
        <div style={{ position: 'absolute', right: '8%', top: '16%', zIndex: 3 }}>
          {/* 屋頂 */}
          <div style={{ width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '22px solid #8d6e63', marginLeft: -6 }} />
          {/* 牆 */}
          <div style={{ width: 48, height: 44, background: '#fff8e1', border: '2px solid #f9a825', borderRadius: '0 0 4px 4px', position: 'relative' }}>
            {/* 門 */}
            <div style={{ position: 'absolute', bottom: 0, left: '50%', marginLeft: -8, width: 16, height: 24, background: '#8d6e63', borderRadius: '3px 3px 0 0' }}>
              <div style={{ position: 'absolute', right: 3, top: '50%', width: 3, height: 3, borderRadius: '50%', background: '#ffd54f' }} />
            </div>
          </div>
        </div>

        {/* 流浪貓（從左邊，雨中） */}
        <motion.div
          animate={{ x: [0, 0, 90, 110, 110, 0], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '44%', fontSize: 28, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 雨（外面） */}
        {[0, 1, 2, 3].map(i => (
          <motion.div
            key={i}
            animate={{ y: [0, 30], opacity: [0.6, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2, ease: 'linear' }}
            style={{ position: 'absolute', left: `${8 + i * 8}%`, top: '22%', width: 2, height: 10, background: '#90caf9', borderRadius: 1, zIndex: 5 }} />
        ))}

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.40, 0.52, 0.94] }}
          style={{ position: 'absolute', left: '36%', top: '32%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 8 }}>
          TAKE ←
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.85, 0.85, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.60, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '14%', top: '32%', fontSize: 10, fontWeight: 900, color: '#43a047', zIndex: 8 }}>
          IN ✓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '6%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 迎接 + IN 進家門 = 收留</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take back  (take-retract)
// TAKE 拿取 + BACK 往回 = 收回話 / 退貨 / 勾起回憶
// ─────────────────────────────────────────────────
function TakeRetractScene({ obj }) {
  const isReturn  = obj.label === '商品';
  const isMemory  = obj.label === '回憶';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：收回說錯的話
          TAKE = 抓住說出去的話
          BACK = 拉回來 ════ */}
      {!isReturn && !isMemory && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 說話的人（左） */}
        <div style={{ position: 'absolute', left: '10%', top: '28%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 對話泡泡：先飛出去，再被拉回來 */}
        <motion.div
          animate={{ x: [0, 0, 80, 80, 0, 0], opacity: [0, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '20%', zIndex: 6 }}>
          <div style={{ background: '#ffecb3', border: '1.5px solid #ffa000', borderRadius: 8, padding: '4px 8px', fontSize: 11, fontWeight: 700, color: '#e65100', whiteSpace: 'nowrap' }}>
            {obj.emoji} 說錯了！
          </div>
          <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid #ffa000', marginLeft: 6 }} />
        </motion.div>

        {/* BACK 箭頭（往左） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.52, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '34%', top: '34%', fontSize: 10, fontWeight: 900, color: '#e53935', zIndex: 7 }}>
          ← BACK（收回）
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 抓住 + BACK 帶回來 = 收回</div>
      </>}

      {/* ════ Scene B：退回商品 TAKE = 帶著商品 BACK = 走回店裡 ════ */}
      {isReturn && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 店（右側） */}
        <motion.div
          animate={{ x: [0, 0, 90, 108, 108, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '28%', zIndex: 6 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 22, height: 6, background: 'linear-gradient(90deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* 商品 emoji（跟著人） */}
        <motion.div
          animate={{ x: [0, 0, 90, 108, 108, 0], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '18%', top: '24%', fontSize: 22, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.44, 0.56, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '14%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          → BACK（帶回去）
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 帶著 + BACK 走回去 = 退貨</div>
      </>}

      {/* ════ Scene C：勾起回憶
          TAKE = 某個觸發點把你帶走
          BACK = 帶回過去的時光 ════ */}
      {isMemory && <>
        {/* 時間軸（往左 = 過去） */}
        <div style={{ position: 'absolute', left: '8%', right: '8%', top: '50%', height: 2, background: '#e0e0e0', borderRadius: 1, zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '8%', top: '46%', fontSize: 9, color: '#9e9e9e', fontWeight: 700 }}>過去</div>
        <div style={{ position: 'absolute', right: '8%', top: '46%', fontSize: 9, color: '#9e9e9e', fontWeight: 700 }}>現在</div>

        {/* 觸發物（右側，現在） */}
        <div style={{ position: 'absolute', right: '12%', top: '26%', fontSize: 28, zIndex: 4 }}>🎵</div>

        {/* 回憶（左側，過去） */}
        <motion.div
          animate={{ scale: [0, 0, 0, 1.1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.50, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '10%', top: '18%', fontSize: 28, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 虛線箭頭（從右往左，BACK 到過去） */}
        <motion.svg
          width="60%" height="20"
          style={{ position: 'absolute', left: '20%', top: '46%', zIndex: 5 }}
          animate={{ opacity: [0, 0, 0.8, 0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.72, 0.94] }}>
          <defs>
            <marker id="arrowBack" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 6 0 L 0 3 L 6 6 Z" fill="#e65100"/>
            </marker>
          </defs>
          <line x1="95%" y1="10" x2="5%" y2="10"
            stroke="#e65100" strokeWidth="2" strokeDasharray="6 4"
            markerEnd="url(#arrowBack)"/>
        </motion.svg>

        {/* TAKE BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.62, 0.78] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          TAKES ME BACK ✨
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 帶著你 + BACK 回過去 = 勾起回憶</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take down  (take-descend)
// TAKE 拿取 + DOWN 往下 = 拆掉 / 記下來
// ─────────────────────────────────────────────────
function TakeDescendScene({ obj }) {
  const isNote = obj.label === '電話號碼';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：拆掉裝飾
          TAKE = 手伸上去抓住
          DOWN = 往下拉取下來 ════ */}
      {!isNote && <>
        {/* 牆 */}
        <div style={{ position: 'absolute', left: '22%', right: '22%', top: 0, height: '46%', background: '#eceff1', border: '1.5px solid #cfd8dc', borderTop: 'none', zIndex: 2 }} />

        {/* 掛鉤 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -3, top: '12%', width: 6, height: 8, background: '#90a4ae', borderRadius: '0 0 3px 3px', zIndex: 4 }} />

        {/* 裝飾 emoji：從牆上被拿下來 */}
        <motion.div
          animate={{ y: [0, 0, 0, 65, 75, 0], rotate: [0, 0, 0, 10, 0, 0], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.56, 0.72, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '16%', fontSize: 30, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 手（從下往上伸，抓住後往下） */}
        <motion.div
          animate={{ y: [60, 60, 10, 55, 70, 60], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.54, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '18%', width: 20, height: 14, background: '#FDBCB4', border: '1.5px solid #E59866', borderRadius: 5, zIndex: 6 }} />

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.38, 0.94] }}
          style={{ position: 'absolute', left: '60%', top: '28%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 7 }}>
          TAKE
        </motion.div>

        {/* DOWN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '60%', top: '48%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ↓ DOWN
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 抓住 + DOWN 拉下來 = 拆掉</div>
      </>}

      {/* ════ Scene B：記下來
          TAKE = 接住飄在空中的資訊
          DOWN = 落到紙上 ════ */}
      {isNote && <>
        {/* 紙（底部） */}
        <div style={{ position: 'absolute', left: '28%', right: '28%', top: '52%', height: 36, background: '#fff', border: '1.5px solid #b0bec5', borderRadius: 4, zIndex: 3 }}>
          {/* 橫線 */}
          {[0, 1].map(i => (
            <div key={i} style={{ position: 'absolute', left: 8, right: 8, top: 10 + i * 12, height: 1.5, background: '#e0e0e0', borderRadius: 1 }} />
          ))}
        </div>

        {/* 筆 */}
        <motion.div
          animate={{ y: [0, 0, 28, 28, 28, 0], rotate: [0, 0, -15, -15, -15, 0], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.52, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '56%', top: '22%', fontSize: 22, zIndex: 6 }}>
          ✏️
        </motion.div>

        {/* 資訊（從上方飄下來，落到紙上） */}
        <motion.div
          animate={{ y: [0, 0, 50, 58, 58, 0], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.54, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '12%', fontSize: 26, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 寫好的線（在紙上出現） */}
        <motion.div
          animate={{ scaleX: [0, 0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.60, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '32%', top: '58%', width: '36%', height: 3, background: '#1565c0', borderRadius: 2, transformOrigin: 'left', zIndex: 5 }} />

        {/* DOWN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.44, 0.56, 0.94] }}
          style={{ position: 'absolute', left: '14%', top: '34%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ↓ DOWN（落紙）
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 接住 + DOWN 寫落紙 = 記下來</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Take away  (take-depart)
// TAKE 拿取 + AWAY 離開 = 帶走 / 帶走的收穫
// ─────────────────────────────────────────────────
function TakeDepartScene({ obj }) {
  const isInsight = obj.label === '收穫';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：帶走盤子
          TAKE = 服務生拿起盤子
          AWAY = 端著走離桌子 ════ */}
      {!isInsight && <>
        {/* 桌子 */}
        <div style={{ position: 'absolute', left: '12%', top: '44%', width: 64, height: 6, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '20%', top: '50%', width: 6, height: 22, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '62%', top: '50%', width: 6, height: 22, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />

        {/* 盤子（在桌上，被拿走） */}
        <motion.div
          animate={{ x: [0, 0, 0, 90, 160, 0], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.28, 0.52, 0.70, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '24%', top: '31%', fontSize: 24, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 服務生（Person B，橘色，從右往左走來拿盤子再往右走） */}
        <motion.div
          animate={{ x: [70, 70, 0, 0, 90, 0], scaleX: [-1, -1, -1, 1, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.28, 0.36, 0.60, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '22%', zIndex: 6 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="22" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* TAKE 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.20, 0.30, 0.42, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '10%', top: '22%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 7 }}>
          TAKE
        </motion.div>

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.38, 0.50, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '22%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 拿走 + AWAY 帶離現場 = 帶走</div>
      </>}

      {/* ════ Scene B：帶走的收穫
          TAKE = 從旅途帶走一樣東西
          AWAY = 離開之後仍然帶著 ════ */}
      {isInsight && <>
        {/* 路（往右延伸的地平線） */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '68%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 遠方的山景（代表一段經歷） */}
        <div style={{ position: 'absolute', left: '8%', top: '34%', width: 0, height: 0, borderLeft: '28px solid transparent', borderRight: '28px solid transparent', borderBottom: '32px solid #b0bec5', zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '18%', top: '28%', width: 0, height: 0, borderLeft: '22px solid transparent', borderRight: '22px solid transparent', borderBottom: '40px solid #90a4ae', zIndex: 3 }} />

        {/* 收穫 emoji（跟著人往右走，代表帶在身上） */}
        <motion.div
          animate={{ x: [0, 0, 60, 120, 160, 0], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.40, 0.62, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '42%', top: '36%', fontSize: 22, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 發光效果（收穫閃一下） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.20, 0.32, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '32%', width: 32, height: 32, borderRadius: '50%', background: 'radial-gradient(circle, #fff59d 30%, transparent 70%)', zIndex: 5 }} />

        {/* 人（從左走向右，帶著收穫） */}
        <motion.div
          animate={{ x: [0, 0, 60, 120, 160, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.40, 0.62, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '32%', top: '36%', zIndex: 6 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <div style={{ position: 'absolute', left: '100%', top: '44%', width: 18, height: 5, background: 'linear-gradient(270deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="22" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.34, 0.46, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '30%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>TAKE 帶著 + AWAY 離開 = 帶走的收穫</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put on  (put-onto)
// PUT 放置 + ON 到上面 = 穿上 / 假裝 / 播放
// ─────────────────────────────────────────────────
function PutOntoScene({ obj }) {
  const isJacket = obj.label === '外套';
  const isSmile  = obj.label === '笑臉';
  // 電影 = default third branch

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：穿上外套
          PUT = 拿起外套
          ON  = 放到身體上 ════ */}
      {isJacket && <>
        {/* 人（穿外套動作） */}
        <motion.div
          animate={{ y: [0, 0, 0, 0] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '18%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 外套（從上方落下，套到人身上） */}
        <motion.div
          animate={{ y: [-50, -50, 10, 18, 18, -50], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.68, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '18%', fontSize: 28, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 穿好後的勾勾 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.60, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '64%', top: '22%', fontSize: 18, zIndex: 7 }}>
          ✓
        </motion.div>

        {/* ON 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.48, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '66%', top: '34%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ON ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿起 + ON 放到身上 = 穿上</div>
      </>}

      {/* ════ Scene B：假裝笑臉
          PUT = 拿起面具
          ON  = 蓋到臉上 ════ */}
      {isSmile && <>
        {/* 臉底部（有點難過的臉） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '14%', fontSize: 56, zIndex: 4 }}>
          😐
        </motion.div>

        {/* 笑臉面具（從上掉下來蓋住） */}
        <motion.div
          animate={{ y: [-60, -60, 0, 0, 0, -60], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.58, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '14%', fontSize: 56, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 虛線框（代表假裝） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.7, 0.7, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.50, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -32, top: '10%', width: 64, height: 64, border: '2px dashed #e65100', borderRadius: '50%', zIndex: 7 }} />

        {/* ON 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.46, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '72%', top: '22%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          ON ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿出面具 + ON 蓋臉上 = 假裝</div>
      </>}

      {/* ════ Scene C：播放電影
          PUT = 選好片
          ON  = 放到螢幕上播放 ════ */}
      {!isJacket && !isSmile && <>
        {/* 電視/螢幕（暗） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '24%', right: '24%', top: '18%', height: 70, background: '#263238', border: '3px solid #455a64', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
          <span style={{ fontSize: 28, filter: 'grayscale(100%) brightness(0.3)' }}>📺</span>
        </motion.div>

        {/* 電視/螢幕（亮，播放中） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.50, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '24%', right: '24%', top: '18%', height: 70, background: '#1a237e', border: '3px solid #3949ab', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4 }}>
          <span style={{ fontSize: 28 }}>{obj.emoji}</span>
        </motion.div>

        {/* 遙控器 emoji（按下） */}
        <motion.div
          animate={{ y: [0, 0, 4, 0, 0, 0], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.46, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '70%', fontSize: 22, zIndex: 6 }}>
          📱
        </motion.div>

        {/* ON 標示（螢幕亮起時出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.54, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '14%', top: '22%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ON!
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 選好 + ON 放上螢幕 = 播放</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put off  (put-aside)
// PUT 放置 + OFF 推開 = 推遲 / 讓人倒胃口
// ─────────────────────────────────────────────────
function PutAsideScene({ obj }) {
  const isDelay = obj.label === '牙醫預約';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：推遲預約
          PUT = 拿起任務卡
          OFF = 推到旁邊 ════ */}
      {isDelay && <>
        {/* 中央任務卡（被往右推走） */}
        <motion.div
          animate={{ x: [0, 0, 0, 90, 100, 0], opacity: [1, 1, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.52, 0.66, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '28%', top: '24%', background: '#fff3e0', border: '1.5px solid #ffa000', borderRadius: 8, padding: '6px 10px', zIndex: 5 }}>
          <div style={{ fontSize: 22, textAlign: 'center' }}>{obj.emoji}</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#e65100', marginTop: 2, whiteSpace: 'nowrap' }}>牙醫預約</div>
        </motion.div>

        {/* 手（往右推） */}
        <motion.div
          animate={{ x: [0, 0, 0, 50, 60, 0], opacity: [0, 0, 0.9, 0.9, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.50, 0.64, 0.94] }}
          style={{ position: 'absolute', left: '20%', top: '32%', fontSize: 20, zIndex: 6 }}>
          👋
        </motion.div>

        {/* 「明天再說」泡泡 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '18%', background: '#e3f2fd', border: '1.5px solid #1565c0', borderRadius: 8, padding: '4px 7px', fontSize: 9, fontWeight: 700, color: '#1565c0', zIndex: 7, whiteSpace: 'nowrap' }}>
          明天再說…
        </motion.div>

        {/* OFF 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.46, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '50%', top: '58%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OFF →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿到 + OFF 推開 = 拖著不做</div>
      </>}

      {/* ════ Scene B：讓人倒胃口
          PUT = 散發出某樣東西
          OFF = 把人推開 ════ */}
      {!isDelay && <>
        {/* 食物（在左邊） */}
        <div style={{ position: 'absolute', left: '12%', top: '28%', fontSize: 36, zIndex: 4 }}>
          🍲
        </div>

        {/* 臭氣波紋 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ x: [0, 30 + i * 12], opacity: [0.8, 0], scale: [0.6, 1.4] }}
            transition={{ duration: 1.6, delay: i * 0.5, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', left: '28%', top: '32%', fontSize: 14, zIndex: 5 }}>
            {obj.emoji}
          </motion.div>
        ))}

        {/* 人（往右退開） */}
        <motion.div
          animate={{ x: [0, 0, 0, 40, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.30, 0.52, 0.68, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '52%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 反感表情（在人頭上出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], y: [0, 0, 0, -8, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.36, 0.46, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '58%', top: '8%', fontSize: 18, zIndex: 7 }}>
          🤮
        </motion.div>

        {/* OFF 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.32, 0.44, 0.62, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '40%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OFF →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 散出 + OFF 把人推開 = 讓人倒胃口</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put up (with)  (put-erect)
// PUT 放置 + UP 往上 = 忍受 / 張貼 / 搭建
// ─────────────────────────────────────────────────
function PutErectScene({ obj }) {
  const isTolerate = obj.label === '噪音';
  const isPoster   = obj.label === '海報';
  // 帳篷 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：忍受噪音
          PUT UP WITH = 撐著重量不倒 ════ */}
      {isTolerate && <>
        {/* 音波從右方打來 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ x: [0, -30 - i * 14], opacity: [0.9, 0], scale: [0.7, 1.3] }}
            transition={{ duration: 1.4, delay: i * 0.45, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', right: '12%', top: '28%', fontSize: 18, zIndex: 5 }}>
            {obj.emoji}
          </motion.div>
        ))}

        {/* 人（被音波壓著，肩膀下沉但撐住） */}
        <motion.div
          animate={{ y: [0, 0, 4, 4, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.34, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="5"  y2="33" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="33" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="27" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="9"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="23" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 壓力箭頭（從上往下） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0.85, 0], y: [0, 0, 0, 3, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.30, 0.46, 0.60, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '10%', fontSize: 12, fontWeight: 900, color: '#e53935', zIndex: 7 }}>
          ↓↓
        </motion.div>

        {/* UP 標示（人往上撐） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.34, 0.56, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '16%', top: '32%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 7 }}>
          PUT UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 撐住 + UP 不倒 = 硬撐忍受</div>
      </>}

      {/* ════ Scene B：張貼海報
          PUT = 拿著海報
          UP  = 往上貼到牆面 ════ */}
      {isPoster && <>
        {/* 牆面 */}
        <div style={{ position: 'absolute', left: '14%', right: '14%', top: 0, height: '50%', background: '#eceff1', border: '1.5px solid #cfd8dc', borderTop: 'none', zIndex: 2 }} />

        {/* 海報（從手持到貼上牆） */}
        <motion.div
          animate={{ y: [60, 60, 0, 0, 0, 0], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '10%', zIndex: 6 }}>
          <div style={{ background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: 4, padding: '4px 6px', textAlign: 'center' }}>
            <div style={{ fontSize: 18 }}>{obj.emoji}</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: '#e65100', marginTop: 1 }}>海報</div>
          </div>
        </motion.div>

        {/* 大頭釘（貼上後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.48, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -4, top: '10%', fontSize: 12, zIndex: 7 }}>
          📌
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '66%', top: '30%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿著 + UP 放上牆 = 張貼</div>
      </>}

      {/* ════ Scene C：搭帳篷
          PUT = 插入帳篷桿
          UP  = 撐起來立好 ════ */}
      {!isTolerate && !isPoster && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '68%', height: 3, background: '#a5d6a7', borderRadius: 2, zIndex: 2 }} />

        {/* 帳篷（從小變大，立起來） */}
        <motion.div
          animate={{ scaleY: [0.1, 0.1, 1, 1, 1, 0.1], scaleX: [0.3, 0.3, 1, 1, 1, 0.3], opacity: [0.4, 0.4, 1, 1, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '24%', fontSize: 52, zIndex: 5, transformOrigin: 'bottom center' }}>
          {obj.emoji}
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.46, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '68%', top: '28%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        {/* 完成打勾 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '68%', top: '20%', fontSize: 18, zIndex: 7 }}>
          ✓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 插好 + UP 撐起來 = 搭建</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put down  (put-lower)
// PUT 放置 + DOWN 往下 = 放下 / 記下 / 貶低
// ─────────────────────────────────────────────────
function PutLowerScene({ obj }) {
  const isPhone = obj.label === '手機';
  const isList  = obj.label === '購物清單';
  // 自尊 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：放下手機
          PUT = 拿著手機
          DOWN = 輕放桌上 ════ */}
      {isPhone && <>
        {/* 桌子 */}
        <div style={{ position: 'absolute', left: '20%', right: '20%', top: '60%', height: 6, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />

        {/* 手機（從持握高度落到桌面） */}
        <motion.div
          animate={{ y: [0, 0, 50, 52, 52, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '20%', fontSize: 26, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* DOWN 箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '66%', top: '28%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ↓ DOWN
        </motion.div>

        {/* 放下後出現笑臉（放鬆） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '28%', fontSize: 24, zIndex: 6 }}>
          😌
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿著 + DOWN 放到桌上 = 放下</div>
      </>}

      {/* ════ Scene B：寫下清單
          PUT = 拿起筆
          DOWN = 把字寫到紙上 ════ */}
      {isList && <>
        {/* 紙 */}
        <div style={{ position: 'absolute', left: '24%', right: '24%', top: '22%', height: 80, background: '#fff', border: '1.5px solid #b0bec5', borderRadius: 4, zIndex: 3 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ position: 'absolute', left: 8, right: 8, top: 12 + i * 22, height: 1.5, background: '#e0e0e0', borderRadius: 1 }} />
          ))}
        </div>

        {/* 筆（寫字動作） */}
        <motion.div
          animate={{ x: [0, 0, 18, 36, 36, 0], y: [0, 0, 0, 22, 22, 0], opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.54, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '26%', top: '26%', fontSize: 18, zIndex: 6 }}>
          ✏️
        </motion.div>

        {/* 文字一條條出現 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ scaleX: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24 + i * 0.12, 0.36 + i * 0.12, 0.72, 0.94] }}
            style={{ position: 'absolute', left: '28%', top: `${30 + i * 22}%`, width: '46%', height: 3, background: '#1565c0', borderRadius: 2, transformOrigin: 'left', zIndex: 5 }} />
        ))}

        {/* DOWN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.36, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '30%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ↓ DOWN
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿筆 + DOWN 落紙 = 記下來</div>
      </>}

      {/* ════ Scene C：貶低自尊
          PUT = 言語指向對方
          DOWN = 把對方地位往下壓 ════ */}
      {!isPhone && !isList && <>
        {/* Person B（說話者，左邊，橘色） */}
        <div style={{ position: 'absolute', left: '10%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>

        {/* 話泡泡（帶刺的話） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0.9, 0], x: [0, 0, 0, 20, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.40, 0.58, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '18%', background: '#ffebee', border: '1.5px solid #e53935', borderRadius: 8, padding: '4px 7px', fontSize: 9, fontWeight: 700, color: '#c62828', zIndex: 7, whiteSpace: 'nowrap' }}>
          你真的很差！
        </motion.div>

        {/* Person A（被貶低者，右邊，藍色，慢慢縮小） */}
        <motion.div
          animate={{ scale: [1, 1, 1, 0.72, 0.72, 1], y: [0, 0, 0, 14, 14, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '22%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 自尊 emoji（在人頭上，跟著縮小） */}
        <motion.div
          animate={{ scale: [1, 1, 1, 0.5, 0.5, 1], y: [0, 0, 0, 16, 16, 0], opacity: [1, 1, 1, 0.5, 0.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '14%', top: '8%', fontSize: 18, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* DOWN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.48, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '44%', fontSize: 10, fontWeight: 900, color: '#e53935', zIndex: 7 }}>
          ↓ DOWN
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 言語指向 + DOWN 壓低地位 = 貶低</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put out  (put-outward)
// PUT 放置 + OUT 往外推 = 熄滅 / 發布
// ─────────────────────────────────────────────────
function PutOutwardScene({ obj }) {
  const isFire = obj.label === '火';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：熄火
          PUT = 往火的方向推
          OUT = 把火推出去消散 ════ */}
      {isFire && <>
        {/* 火焰（逐漸縮小消失） */}
        <motion.div
          animate={{ scale: [1, 1, 1, 0.4, 0, 0], opacity: [1, 1, 1, 0.6, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.62, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '16%', fontSize: 40, zIndex: 5, transformOrigin: 'bottom center' }}>
          {obj.emoji}
        </motion.div>

        {/* 水柱（從左下角往火噴） */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0, 0], rotate: [-20, -20, -20, -20, -20, -20] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.10, 0.28, 0.50, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '14%', top: '36%', width: 60, height: 6, background: 'linear-gradient(90deg, #29b6f6, transparent)', borderRadius: 3, transformOrigin: 'left center', transform: 'rotate(-25deg)', zIndex: 6 }} />

        {/* 消防水管 emoji */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.58, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '8%', top: '44%', fontSize: 22, zIndex: 6 }}>
          🚒
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.85, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '64%', top: '22%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT →
        </motion.div>

        {/* 熄滅後的煙 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.7, 0], y: [0, 0, 0, 0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.60, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '20%', fontSize: 22, zIndex: 6 }}>
          💨
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 推向 + OUT 能量散去 = 熄滅</div>
      </>}

      {/* ════ Scene B：發布新專輯
          PUT = 把作品準備好
          OUT = 推出去給大眾 ════ */}
      {!isFire && <>
        {/* 中央作品（往外擴散） */}
        <motion.div
          animate={{ scale: [0.6, 0.6, 1, 1, 1, 0.6], opacity: [0.4, 0.4, 1, 1, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.54, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '14%', fontSize: 40, zIndex: 5, transformOrigin: 'center' }}>
          {obj.emoji}
        </motion.div>

        {/* 擴散波（OUT 動感） */}
        {[0, 1].map(i => (
          <motion.div
            key={i}
            animate={{ scale: [0.6, 2.0], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, delay: i * 0.9, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '10%', width: 48, height: 48, borderRadius: '50%', border: '2px solid #1565c0', zIndex: 4 }} />
        ))}

        {/* 小人（接收者，右邊） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', right: '12%', top: '28%', fontSize: 22, zIndex: 6 }}>
          🧑‍🎤
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '14%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 準備好 + OUT 推給大眾 = 發布</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put away  (put-stow)
// PUT 放置 + AWAY 收起 = 歸位 / 存錢
// ─────────────────────────────────────────────────
function PutStowScene({ obj }) {
  const isClothes = obj.label === '衣服';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：衣服歸位
          PUT = 拿著衣服
          AWAY = 放回衣櫃裡 ════ */}
      {isClothes && <>
        {/* 衣櫃（右邊） */}
        <div style={{ position: 'absolute', right: '8%', top: '14%', width: 52, height: 72, background: '#e8eaf6', border: '2px solid #5c6bc0', borderRadius: 4, zIndex: 3 }}>
          <div style={{ position: 'absolute', left: '50%', marginLeft: -1, top: 0, bottom: 0, width: 2, background: '#5c6bc0' }} />
          <div style={{ position: 'absolute', left: '20%', top: '40%', width: 8, height: 8, borderRadius: '50%', background: '#5c6bc0' }} />
          <div style={{ position: 'absolute', right: '20%', top: '40%', width: 8, height: 8, borderRadius: '50%', background: '#5c6bc0' }} />
        </div>

        {/* 衣服（往右飛進衣櫃） */}
        <motion.div
          animate={{ x: [0, 0, 80, 100, 100, 0], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '16%', top: '26%', fontSize: 30, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.46, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '20%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        {/* 衣櫃關上（門閉合） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '14%', width: 52, height: 72, background: '#c5cae9', border: '2px solid #3949ab', borderRadius: 4, zIndex: 6 }}>
          <div style={{ position: 'absolute', left: '50%', marginLeft: -1, top: 0, bottom: 0, width: 2, background: '#3949ab' }} />
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿著 + AWAY 放回去 = 收起歸位</div>
      </>}

      {/* ════ Scene B：存錢
          PUT = 把錢拿出來
          AWAY = 放進存錢筒 ════ */}
      {!isClothes && <>
        {/* 存錢筒（右邊） */}
        <div style={{ position: 'absolute', right: '14%', top: '24%', fontSize: 42, zIndex: 4 }}>
          {obj.emoji}
        </div>

        {/* 存錢筒縫（硬幣投入槽） */}
        <div style={{ position: 'absolute', right: '25%', top: '24%', width: 14, height: 3, background: '#795548', borderRadius: 2, zIndex: 5 }} />

        {/* 硬幣（從左往右飛進存錢筒） */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ x: [0, 0, 80, 100, 100, 0], y: [0, 0, i * 8, i * 8, 0, 0], opacity: [0, 0, 1, 0, 0, 0] }}
            transition={{ duration: 5, delay: i * 0.18, repeat: Infinity, times: [0, 0.10, 0.42, 0.56, 0.70, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', left: '12%', top: `${30 + i * 6}%`, fontSize: 16, zIndex: 6 }}>
            🪙
          </motion.div>
        ))}

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '20%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        {/* 存夠了！提示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '10%', background: '#e8f5e9', border: '1.5px solid #2e7d32', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 7, whiteSpace: 'nowrap' }}>
          存起來 ✓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿出來 + AWAY 放進去 = 存起來</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put in  (put-insert)
// PUT 放置 + IN 進去 = 投入心力 / 安裝 / 提出申請
// ─────────────────────────────────────────────────
function PutInsertScene({ obj }) {
  const isEffort  = obj.label === '心力';
  const isShelf   = obj.label === '書架';
  // 假單 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：投入心力
          PUT = 拿著心力
          IN  = 全部放進去 ════ */}
      {isEffort && <>
        {/* 大桶子（代表「工作/目標」） */}
        <div style={{ position: 'absolute', left: '54%', top: '20%', width: 52, height: 62, background: '#e3f2fd', border: '2px solid #1565c0', borderRadius: '0 0 6px 6px', zIndex: 3 }}>
          <div style={{ position: 'absolute', left: -4, right: -4, top: -6, height: 8, background: '#1565c0', borderRadius: 3 }} />
        </div>

        {/* 心力粒子（不斷投入桶中） */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ x: [0, 60], y: [0, 20 + i * 10], opacity: [0.9, 0] }}
            transition={{ duration: 1.2, delay: i * 0.4, repeat: Infinity, ease: 'easeIn' }}
            style={{ position: 'absolute', left: '16%', top: `${24 + i * 8}%`, fontSize: 16, zIndex: 5 }}>
            {obj.emoji}
          </motion.div>
        ))}

        {/* 人（用力投入） */}
        <motion.div
          animate={{ rotate: [0, 0, -8, 0, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ position: 'absolute', left: '10%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="5"  y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 汗水 */}
        <motion.div
          animate={{ opacity: [0, 0.8, 0], y: [0, -8] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }}
          style={{ position: 'absolute', left: '28%', top: '14%', fontSize: 12, zIndex: 7 }}>
          💦
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0.85, 0.85] }}
          style={{ position: 'absolute', left: '52%', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          IN ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿出來 + IN 放進去 = 投入心力</div>
      </>}

      {/* ════ Scene B：安裝書架
          PUT = 拿著書架
          IN（位置上） = 裝進牆裡固定 ════ */}
      {isShelf && <>
        {/* 牆面 */}
        <div style={{ position: 'absolute', left: '14%', right: '14%', top: 0, height: '55%', background: '#eceff1', border: '1.5px solid #cfd8dc', borderTop: 'none', zIndex: 2 }} />

        {/* 書架（從外往牆上移動安裝） */}
        <motion.div
          animate={{ y: [60, 60, 0, 0, 0, 60], opacity: [0.5, 0.5, 1, 1, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '16%', fontSize: 38, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 螺絲起子 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0.9, 0], rotate: [0, 0, 360, 720, 720, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '18%', top: '24%', fontSize: 18, zIndex: 7 }}>
          🔩
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '66%', top: '36%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          IN ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿著 + IN 裝進位置 = 安裝</div>
      </>}

      {/* ════ Scene C：提出假單
          PUT = 填好表單
          IN  = 放進收件箱 ════ */}
      {!isEffort && !isShelf && <>
        {/* 收件箱（右邊） */}
        <div style={{ position: 'absolute', right: '10%', top: '28%', width: 50, height: 40, background: '#f3e5f5', border: '2px solid #7b1fa2', borderRadius: '0 0 4px 4px', zIndex: 3 }}>
          <div style={{ position: 'absolute', left: -2, right: -2, top: -8, height: 10, background: '#7b1fa2', borderRadius: '4px 4px 0 0' }} />
          <div style={{ position: 'absolute', left: '50%', marginLeft: -12, top: -14, fontSize: 12, color: '#fff', fontWeight: 700, fontSize: 9 }}>收件</div>
        </div>

        {/* 假單（飛進收件箱） */}
        <motion.div
          animate={{ x: [0, 0, 90, 110, 110, 0], y: [0, 0, 10, 15, 15, 0], rotate: [0, 0, 15, 20, 0, 0], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '12%', top: '26%', zIndex: 5 }}>
          <div style={{ background: '#fff', border: '1.5px solid #9c27b0', borderRadius: 4, padding: '5px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 18 }}>{obj.emoji}</div>
            <div style={{ fontSize: 7, fontWeight: 700, color: '#6a1b9a', marginTop: 1 }}>請假申請</div>
          </div>
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '14%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          IN →
        </motion.div>

        {/* 審核中 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '4%', top: '56%', background: '#fff8e1', border: '1.5px solid #f9a825', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          審核中…
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 填好 + IN 放進去 = 提出申請</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Put together  (put-assemble)
// PUT 放置 + TOGETHER 聚合 = 組裝 / 籌備
// ─────────────────────────────────────────────────
function PutAssembleScene({ obj }) {
  const isFurniture = obj.label === '家具';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：組裝家具
          PUT = 拿著零件
          TOGETHER = 把各件拼在一起 ════ */}
      {isFurniture && <>
        {/* 四個零件（從四角往中心聚合） */}
        {[
          { x: -50, y: -40, label: '🪵' },
          { x:  50, y: -40, label: '🔩' },
          { x: -50, y:  40, label: '🪵' },
          { x:  50, y:  40, label: '🔩' },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{ x: [p.x, p.x, 0, 0, p.x], y: [p.y, p.y, 0, 0, p.y], opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '36%', fontSize: 20, zIndex: 5 }}>
            {p.label}
          </motion.div>
        ))}

        {/* 完成品（組裝好後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.5, 0.5, 0.5, 1, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '22%', fontSize: 38, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* TOGETHER 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '68%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          TOGETHER ✕
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 拿出零件 + TOGETHER 拼起來 = 組裝</div>
      </>}

      {/* ════ Scene B：籌備生日派對
          PUT = 準備各項材料
          TOGETHER = 全部匯聚成一個活動 ════ */}
      {!isFurniture && <>
        {/* 各種派對元素從外圍飛向中心 */}
        {[
          { emoji: '🎈', sx: '-55%', sy: '10%' },
          { emoji: '🎁', sx: '55%',  sy: '10%' },
          { emoji: '🎉', sx: '-55%', sy: '60%' },
          { emoji: '🕯️', sx: '55%',  sy: '60%' },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 0, 0, 0, 0], opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94] }}
            style={{ position: 'absolute', left: `calc(50% + ${p.sx})`, top: p.sy, fontSize: 20, zIndex: 5 }}>
            <motion.div
              animate={{ x: [0, 0, parseInt(p.sx) > 0 ? -30 : 30, 0, 0], y: [0, 0, parseInt(p.sy) > 30 ? -20 : 20, 0, 0] }}
              transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.76, 0.94], ease: 'easeIn' }}>
              {p.emoji}
            </motion.div>
          </motion.div>
        ))}

        {/* 生日蛋糕（中央，聚合完成後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 1, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '24%', fontSize: 42, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* TOGETHER 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.48, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '68%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          TOGETHER ✕
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PUT 湊材料 + TOGETHER 合成 = 籌備</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come up  (come-surface)
// COME 往這邊 + UP 浮上來 = 話題被提起 / 快到了 / 想到
// ─────────────────────────────────────────────────
function ComeSurfaceScene({ obj }) {
  const isTopic   = obj.label === '話題';
  const isCalendar = obj.label === '生日';
  // 點子 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：話題被提起
          COME = 從對話深處往說話者方向
          UP   = 浮出水面 ════ */}
      {isTopic && <>
        {/* 水面（對話的底層） */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '58%', height: 3, background: '#b3e5fc', borderRadius: 2, zIndex: 3 }} />

        {/* 話題泡泡（從水下浮上來） */}
        <motion.div
          animate={{ y: [60, 60, 0, 0, 0, 60], opacity: [0.3, 0.3, 1, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '14%', zIndex: 5 }}>
          <div style={{ background: '#e3f2fd', border: '2px solid #1565c0', borderRadius: 12, padding: '6px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: 22 }}>{obj.emoji}</div>
            <div style={{ fontSize: 8, fontWeight: 700, color: '#1565c0', marginTop: 2 }}>你的名字</div>
          </div>
          <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '8px solid #1565c0', marginLeft: 14 }} />
        </motion.div>

        {/* 水泡（浮上來的動感） */}
        {[0, 1].map(i => (
          <motion.div
            key={i}
            animate={{ y: [0, -50], opacity: [0.7, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7, repeat: Infinity, ease: 'easeOut' }}
            style={{ position: 'absolute', left: `${42 + i * 10}%`, top: '60%', width: 8, height: 8, borderRadius: '50%', border: '1.5px solid #29b6f6', zIndex: 4 }} />
        ))}

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '72%', top: '30%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從深處 + UP 浮出來 = 被提起</div>
      </>}

      {/* ════ Scene B：事件快到了
          COME = 從遠處往你靠近
          UP   = 浮現在眼前 ════ */}
      {isCalendar && <>
        {/* 日曆 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -30, top: '16%', width: 60, height: 62, background: '#fff', border: '2px solid #e53935', borderRadius: 6, zIndex: 4 }}>
          <div style={{ height: 16, background: '#e53935', borderRadius: '4px 4px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 8, fontWeight: 700 }}>本週</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 46, fontSize: 24 }}>{obj.emoji}</div>
        </div>

        {/* 箭頭（從遠處往你衝來） */}
        <motion.div
          animate={{ x: [-80, -80, 0, 0, 0, -80], opacity: [0.3, 0.3, 1, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -4, top: '42%', fontSize: 10, fontWeight: 900, color: '#e53935', zIndex: 6 }}>
          →→→
        </motion.div>

        {/* 驚嘆 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0, 0], scale: [0.5, 0.5, 0.5, 1, 0.5, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '14%', fontSize: 22, zIndex: 7 }}>
          😱
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '72%', top: '36%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從遠處 + UP 靠近 = 快到了</div>
      </>}

      {/* ════ Scene C：想到點子
          COME = 從腦深處往外
          UP   = 冒出水面 ════ */}
      {!isTopic && !isCalendar && <>
        {/* 人頭輪廓 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -26, top: '28%', width: 52, height: 52, borderRadius: '50%', background: '#fff3e0', border: '2px solid #e59866', zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '13%', width: 16, height: 20, background: '#FDBCB4', borderRadius: '6px 6px 0 0', zIndex: 3 }} />

        {/* 燈泡（從頭頂冒上來） */}
        <motion.div
          animate={{ y: [30, 30, 0, -8, -8, 30], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.50, 0.72, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '6%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 閃光 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0, 0], scale: [0.3, 0.3, 0.3, 1.2, 0.3, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '2%', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, #fff59d 40%, transparent 70%)', zIndex: 5 }} />

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '70%', top: '14%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從腦裡 + UP 冒出來 = 想到</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come down (to)  (come-descend)
// COME 往這邊 + DOWN 降下來 = 下降 / 歸結為 / 生病
// ─────────────────────────────────────────────────
function ComeDescendScene({ obj }) {
  const isPrice = obj.label === '價格';
  const isKey   = obj.label === '關鍵';
  // 感冒 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：價格下降
          COME = 往觀看者方向
          DOWN = 落下來 ════ */}
      {isPrice && <>
        {/* 價格標籤（從高到低落下） */}
        <motion.div
          animate={{ y: [0, 0, 70, 78, 78, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '8%', zIndex: 5 }}>
          <div style={{ background: '#fff', border: '2px solid #e53935', borderRadius: 8, padding: '4px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 20 }}>{obj.emoji}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#e53935' }}>NT$ 120</div>
          </div>
        </motion.div>

        {/* 低價標籤（落到底） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '62%', zIndex: 6 }}>
          <div style={{ background: '#e8f5e9', border: '2px solid #2e7d32', borderRadius: 8, padding: '4px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 20 }}>{obj.emoji}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#2e7d32' }}>NT$ 60 ↓</div>
          </div>
        </motion.div>

        {/* 向下箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '72%', top: '30%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          DOWN ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 往你這邊 + DOWN 落下 = 下降</div>
      </>}

      {/* ════ Scene B：歸結為一個關鍵點
          COME = 各種因素往你面前收斂
          DOWN TO = 最後落到一個核心 ════ */}
      {isKey && <>
        {/* 上方三個因素 */}
        {[
          { emoji: '🍕', x: '-30%' },
          { emoji: '⭐', x: '0%' },
          { emoji: '💰', x: '30%' },
        ].map((p, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 0, 60, 68, 68, 0], x: [0, 0, `calc(${p.x === '0%' ? 0 : p.x === '-30%' ? 30 : -30}px)`, 0, 0, 0], opacity: [1, 1, 1, 0, 0, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.76, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', left: `calc(50% + ${p.x})`, marginLeft: -12, top: '10%', fontSize: 22, zIndex: 5 }}>
            {p.emoji}
          </motion.div>
        ))}

        {/* 關鍵點（三個因素收斂後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], scale: [0.4, 0.4, 0.4, 1, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '54%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* DOWN TO 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.46, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '70%', top: '32%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          DOWN ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 全部往下收 + DOWN TO 落到核心 = 歸結為</div>
      </>}

      {/* ════ Scene C：生病
          COME = 病毒從外面來
          DOWN = 落到人身上 ════ */}
      {!isPrice && !isKey && <>
        {/* 病毒從上方落下 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ y: [0, 0, 50 + i * 10, 70 + i * 10, 70 + i * 10, 0], opacity: [0.8, 0.8, 0.8, 0, 0, 0.8] }}
            transition={{ duration: 5, delay: i * 0.2, repeat: Infinity, times: [0, 0.06, 0.38, 0.52, 0.76, 0.94], ease: 'easeIn' }}
            style={{ position: 'absolute', left: `${36 + i * 10}%`, top: '4%', fontSize: 18, zIndex: 5 }}>
            🦠
          </motion.div>
        ))}

        {/* 人（被感染後縮下去） */}
        <motion.div
          animate={{ y: [0, 0, 0, 8, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '30%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 感冒 emoji 在頭上出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '62%', top: '24%', fontSize: 22, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* DOWN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '70%', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          DOWN ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 病毒來 + DOWN 降臨身上 = 生病</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come in  (come-enter)
// COME 往這邊 + IN 進入 = 進來 / 派上用場
// ─────────────────────────────────────────────────
function ComeEnterScene({ obj }) {
  const isDoor = obj.label === '門口';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：進來
          COME = 從外面往裡走
          IN   = 穿過門進入 ════ */}
      {isDoor && <>
        {/* 門框 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '14%', width: 44, height: 72, border: '3px solid #5d4037', borderBottom: 'none', borderRadius: '6px 6px 0 0', background: '#efebe9', zIndex: 3 }}>
          {/* 門把 */}
          <div style={{ position: 'absolute', right: 8, top: '44%', width: 6, height: 6, borderRadius: '50%', background: '#ffd54f' }} />
        </div>
        {/* 門框底線（門檻） */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '72%', width: 56, height: 4, background: '#5d4037', borderRadius: 2, zIndex: 4 }} />

        {/* 人（從左邊走進門） */}
        <motion.div
          animate={{ x: [-70, -70, 0, 18, 18, -70], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '20%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <div style={{ position: 'absolute', right: '100%', top: '44%', width: 18, height: 5, background: 'linear-gradient(270deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '70%', top: '28%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          IN →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 往這邊走 + IN 進門 = 進來</div>
      </>}

      {/* ════ Scene B：廚藝派上用場
          COME = 從旁邊走進舞台
          IN   = 進入關鍵情境 ════ */}
      {!isDoor && <>
        {/* 舞台（廚房場景） */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '66%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 鍋子（在右邊等著） */}
        <div style={{ position: 'absolute', right: '12%', top: '30%', fontSize: 32, zIndex: 4 }}>🍲</div>

        {/* 技能 emoji（從左邊走入場景） */}
        <motion.div
          animate={{ x: [-80, -80, 0, 0, 0, -80], opacity: [0.3, 0.3, 1, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '28%', top: '22%', fontSize: 32, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* ✓ 有用！ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '14%', background: '#e8f5e9', border: '1.5px solid #2e7d32', borderRadius: 8, padding: '3px 8px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 7, whiteSpace: 'nowrap' }}>
          派上用場了！✓
        </motion.div>

        {/* IN 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '46%', top: '26%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          IN →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 走進場 + IN 進入情境 = 派上用場</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come out  (come-emerge)
// COME 往這邊 + OUT 走出來 = 發布 / 結果顯現 / 出櫃
// ─────────────────────────────────────────────────
function ComeEmergeScene({ obj }) {
  const isAlbum  = obj.label === '新專輯';
  const isPhoto  = obj.label === '照片';
  // 自我 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：新專輯發布
          COME = 從幕後
          OUT  = 走出來公開 ════ */}
      {isAlbum && <>
        {/* 幕（左邊） */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '32%', background: '#4a148c', zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '30%', top: 0, bottom: 0, width: 6, background: '#7b1fa2', zIndex: 4 }} />

        {/* 歌手從幕後走出來 */}
        <motion.div
          animate={{ x: [-80, -80, 0, 0, 0, -80], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '42%', top: '18%', fontSize: 36, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 觀眾（右邊） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '26%', fontSize: 20, zIndex: 6 }}>
          🙌
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '52%', top: '56%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從幕後 + OUT 走出來 = 發布</div>
      </>}

      {/* ════ Scene B：照片顯現
          COME = 從沖印機裡
          OUT  = 出來看到成果 ════ */}
      {isPhoto && <>
        {/* 相機/沖印機 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '14%', width: 48, height: 36, background: '#37474f', borderRadius: 6, zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 20 }}>📷</span>
        </div>
        {/* 底部出紙口 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '44%', width: 32, height: 4, background: '#546e7a', borderRadius: 2, zIndex: 4 }} />

        {/* 照片從沖印機滑出 */}
        <motion.div
          animate={{ y: [0, 0, 40, 52, 52, 0], opacity: [0, 0, 0.4, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.52, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '40%', zIndex: 5 }}>
          <div style={{ width: 40, height: 36, background: '#fff', border: '2px solid #b0bec5', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
            {obj.emoji}
          </div>
        </motion.div>

        {/* 讚！ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '50%', fontSize: 18, zIndex: 7 }}>
          😍
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '38%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT ↓
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從裡面 + OUT 顯現出來 = 結果是</div>
      </>}

      {/* ════ Scene C：出櫃
          COME = 從封閉的空間
          OUT  = 走出來公開自我 ════ */}
      {!isAlbum && !isPhoto && <>
        {/* 關閉的門（左邊） */}
        <motion.div
          animate={{ rotateY: [0, 0, -80, -80, -80, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '16%', top: '20%', width: 36, height: 60, background: '#795548', border: '2px solid #4e342e', borderRadius: '0 4px 4px 0', zIndex: 4, transformOrigin: 'left center' }}>
          <div style={{ position: 'absolute', right: 6, top: '44%', width: 5, height: 5, borderRadius: '50%', background: '#ffd54f' }} />
        </motion.div>

        {/* 人（從門後走出來） */}
        <motion.div
          animate={{ x: [-40, -40, 0, 20, 20, -40], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '38%', top: '20%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 彩虹（出現在人旁邊） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 0], scale: [0.3, 0.3, 0.3, 0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '14%', fontSize: 32, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '56%', top: '28%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          OUT →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從封閉 + OUT 走出來 = 出櫃</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come back  (come-return)
// COME 往這邊 + BACK 回去 = 回來 / 再度流行
// ─────────────────────────────────────────────────
function ComeReturnScene({ obj }) {
  const isTravel = obj.label === '旅行';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：從旅行回來
          COME = 從遠方往家的方向
          BACK = 回到原點 ════ */}
      {isTravel && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 家（右邊） */}
        <div style={{ position: 'absolute', right: '8%', top: '24%', zIndex: 3 }}>
          <div style={{ width: 0, height: 0, borderLeft: '26px solid transparent', borderRight: '26px solid transparent', borderBottom: '20px solid #ef9a9a', marginLeft: -4 }} />
          <div style={{ width: 44, height: 30, background: '#ffccbc', border: '2px solid #ef9a9a', borderRadius: '0 0 4px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14 }}>🏠</span>
          </div>
        </div>

        {/* 飛機（從左飛回右邊） */}
        <motion.div
          animate={{ x: [-100, -100, 0, 60, 60, -100], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '28%', fontSize: 28, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '52%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          BACK →
        </motion.div>

        {/* 歡迎回來 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '4%', top: '12%', background: '#e8f5e9', border: '1.5px solid #2e7d32', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 7, whiteSpace: 'nowrap' }}>
          歡迎回來！
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從遠方 + BACK 回到原點 = 回來</div>
      </>}

      {/* ════ Scene B：黑膠唱片復活
          COME = 從過去走回來
          BACK = 重新回到主流 ════ */}
      {!isTravel && <>
        {/* 時間軸（左 = 過去，右 = 現在） */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '52%', height: 2, background: '#e0e0e0', zIndex: 2 }} />
        <div style={{ position: 'absolute', left: '8%', top: '56%', fontSize: 8, color: '#9e9e9e', fontWeight: 600 }}>過去</div>
        <div style={{ position: 'absolute', right: '8%', top: '56%', fontSize: 8, color: '#9e9e9e', fontWeight: 600 }}>現在</div>

        {/* 黑膠唱片（從左邊的「過去」走回現在） */}
        <motion.div
          animate={{ x: [-90, -90, 0, 0, 0, -90], opacity: [0.3, 0.3, 1, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '12%', fontSize: 42, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 旋轉動畫（播放中） */}
        <motion.div
          animate={{ rotate: [0, 0, 0, 360, 720, 0], opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.56, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '12%', fontSize: 42, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 流行標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '12%', background: '#fff3e0', border: '1.5px solid #ffa000', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          又流行了！
        </motion.div>

        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '36%', top: '56%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          BACK →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 從過去 + BACK 回到主流 = 再度流行</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come across  (come-cross)
// COME 往這邊 + ACROSS 橫穿 = 偶然發現 / 給人印象
// ─────────────────────────────────────────────────
function ComeCrossScene({ obj }) {
  const isDiary = obj.label === '日記';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：偶然發現日記
          COME = 人走著走著
          ACROSS = 橫向撞見某個東西 ════ */}
      {isDiary && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 人（從左往右走） */}
        <motion.div
          animate={{ x: [0, 0, 40, 60, 60, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '24%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <div style={{ position: 'absolute', left: '100%', top: '44%', width: 18, height: 5, background: 'linear-gradient(270deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* 日記（從上方橫切進入場景） */}
        <motion.div
          animate={{ x: [60, 60, 0, 0, 0, 60], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.54, 0.76, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', right: '18%', top: '22%', fontSize: 30, zIndex: 4 }}>
          {obj.emoji}
        </motion.div>

        {/* 驚喜感嘆 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.54, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', top: '8%', fontSize: 18, zIndex: 7 }}>
          😲
        </motion.div>

        {/* ACROSS 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', top: '60%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ACROSS →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 走著走著 + ACROSS 橫向撞見 = 偶然發現</div>
      </>}

      {/* ════ Scene B：給人印象
          COME = 某人走近你
          ACROSS = 形象穿越到你眼中 ════ */}
      {!isDiary && <>
        {/* Person B（橘色，從左走來，臉上表情嚴肅） */}
        <motion.div
          animate={{ x: [-60, -60, 0, 0, 0, -60] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.56, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '18%', top: '22%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <div style={{ position: 'absolute', left: '100%', top: '44%', width: 18, height: 5, background: 'linear-gradient(270deg, transparent, #ef9a9a)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* 第一印象泡泡（走近後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], x: [0, 0, 0, 20, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '14%', background: '#ffebee', border: '1.5px solid #e53935', borderRadius: 8, padding: '4px 7px', fontSize: 9, fontWeight: 700, color: '#c62828', zIndex: 7, whiteSpace: 'nowrap' }}>
          {obj.emoji} 感覺很傲慢…
        </motion.div>

        {/* 但其實很好！（後來的認知） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '36%', background: '#e8f5e9', border: '1.5px solid #2e7d32', borderRadius: 8, padding: '4px 7px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 7, whiteSpace: 'nowrap' }}>
          其實很好相處 😊
        </motion.div>

        {/* ACROSS 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', top: '60%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ACROSS →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 走近 + ACROSS 形象穿越 = 給人印象</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come along  (come-alongside)
// COME 往這邊 + ALONG 沿著 = 跟著來 / 進展
// ─────────────────────────────────────────────────
function ComeAlongsideScene({ obj }) {
  const isWalk = obj.label === '散步';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：一起來
          COME = 往同個方向
          ALONG = 沿著路一起走 ════ */}
      {isWalk && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 先走的兩人（藍色，一前一後） */}
        <motion.div
          animate={{ x: [0, 0, 60, 80, 80, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '22%', top: '24%', zIndex: 4 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <svg width="30" height="42" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* 新加入的人（橘色，從左邊跑來加入） */}
        <motion.div
          animate={{ x: [-60, -60, 0, 40, 60, 0], opacity: [1, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.44, 0.58, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '16%', top: '24%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -3, 0, -3, 0] }} transition={{ duration: 0.36, repeat: Infinity }}>
            <svg width="30" height="42" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* ALONG 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.38, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '48%', top: '54%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ALONG →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 過來 + ALONG 一起走 = 跟著來</div>
      </>}

      {/* ════ Scene B：畫作進展
          COME = 正在往前走
          ALONG = 沿著進度推進 ════ */}
      {!isWalk && <>
        {/* 畫框（逐漸填滿顏色） */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -36, top: '12%', width: 72, height: 60, border: '3px solid #795548', borderRadius: 4, background: '#fff', overflow: 'hidden', zIndex: 3 }}>
          {/* 底層空白 */}
          <div style={{ position: 'absolute', inset: 0, background: '#f5f5f5' }} />
          {/* 漸進填色（從左到右） */}
          <motion.div
            animate={{ width: ['0%', '0%', '60%', '90%', '90%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.62, 0.76, 0.94], ease: 'easeInOut' }}
            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: 'linear-gradient(90deg, #ffb74d, #ff7043, #ba68c8)', zIndex: 4 }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, fontSize: 28 }}>
            {obj.emoji}
          </div>
        </div>

        {/* 進度百分比 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.62, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '70%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 6 }}>
          進行中… 90%
        </motion.div>

        {/* ALONG 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '40%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          ALONG →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 往前走 + ALONG 沿著推進 = 進展</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Come over  (come-over)
// COME 往這邊 + OVER 越過來 = 拜訪 / 情緒湧上來
// ─────────────────────────────────────────────────
function ComeOverScene({ obj }) {
  const isVisit = obj.label === '拜訪';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：過來拜訪
          COME = 從自己家出發
          OVER = 越過距離到你家 ════ */}
      {isVisit && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 你的家（右邊） */}
        <div style={{ position: 'absolute', right: '6%', top: '22%', zIndex: 3 }}>
          <div style={{ width: 0, height: 0, borderLeft: '24px solid transparent', borderRight: '24px solid transparent', borderBottom: '18px solid #ef9a9a' }} />
          <div style={{ width: 44, height: 28, background: '#ffccbc', border: '2px solid #ef9a9a', borderRadius: '0 0 4px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 14 }}>🏠</span>
          </div>
        </div>

        {/* 餐桌（在家裡） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '44%', fontSize: 18, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 訪客（從左走到右邊） */}
        <motion.div
          animate={{ x: [0, 0, 80, 100, 100, 0], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.76, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '12%', top: '22%', zIndex: 5 }}>
          <motion.div animate={{ y: [0, -2, 0, -2, 0] }} transition={{ duration: 0.44, repeat: Infinity }}>
            <div style={{ position: 'absolute', left: '100%', top: '44%', width: 18, height: 5, background: 'linear-gradient(270deg, transparent, #90caf9)', borderRadius: 3 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
              <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* OVER 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '44%', top: '54%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OVER →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 出發 + OVER 越過來 = 來訪</div>
      </>}

      {/* ════ Scene B：情緒湧上來
          COME = 從遠處往人靠近
          OVER = 越過來籠罩全身 ════ */}
      {!isVisit && <>
        {/* 情緒波浪（從左向右越過人） */}
        {[0, 1].map(i => (
          <motion.div
            key={i}
            animate={{ x: [-120, 120], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.2, delay: i * 1.1, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '10%', top: `${26 + i * 12}%`, width: 80, height: 22, borderRadius: '50%', background: '#b3e5fc', opacity: 0, zIndex: 4 }} />
        ))}

        {/* 人（被情緒波浪蓋過） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0.5, 0.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.52, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 情緒 emoji（在頭上湧現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], y: [10, 10, 10, 0, 0, 10] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '6%', fontSize: 26, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>

        {/* OVER 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '34%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OVER →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>COME 情緒靠近 + OVER 越過籠罩 = 突然感到</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Give up  (give-release)
// GIVE 給出 + UP 往上攤手 = 放棄 / 戒掉
// ─────────────────────────────────────────────────
function GiveReleaseScene({ obj }) {
  const isPiano = obj.label === '鋼琴';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：放棄鋼琴
          GIVE = 把鋼琴給出去
          UP   = 往上攤手放掉 ════ */}
      {isPiano && <>
        {/* 鋼琴（往右飄走消失） */}
        <motion.div
          animate={{ x: [0, 0, 0, 60, 100, 0], opacity: [1, 1, 1, 0.5, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.52, 0.64, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '30%', top: '18%', fontSize: 36, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 人（攤手放棄） */}
        <motion.div
          animate={{ rotate: [0, 0, 0, 5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.44, 0.60, 0.94] }}
          style={{ position: 'absolute', left: '14%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            {/* 雙手往上攤開 */}
            <motion.line x1="19" y1="21" x2="2"  y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <motion.line x1="19" y1="21" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '16%', top: '8%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        {/* 放棄符號 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.48, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '18%', fontSize: 22, zIndex: 7 }}>
          🏳️
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 放開手 + UP 往上攤 = 放棄</div>
      </>}

      {/* ════ Scene B：戒菸
          GIVE = 把菸給出去
          UP   = 往上放掉，從此不碰 ════ */}
      {!isPiano && <>
        {/* 菸（往上飄走，打叉） */}
        <motion.div
          animate={{ y: [0, 0, 0, -60, -80, 0], opacity: [1, 1, 1, 0.5, 0, 1], rotate: [0, 0, 0, 20, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.52, 0.64, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '30%', fontSize: 30, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>

        {/* 禁止符號（出現在菸上） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0], scale: [0.4, 0.4, 0.4, 0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '18%', fontSize: 38, zIndex: 6 }}>
          🚫
        </motion.div>

        {/* 人（鬆手，往上攤） */}
        <div style={{ position: 'absolute', left: '14%', top: '22%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="2"  y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '16%', top: '8%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 放開手 + UP 往上鬆開 = 戒掉</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Give in  (give-yield)
// GIVE 給出 + IN 向內塌 = 屈服讓步
// ─────────────────────────────────────────────────
function GiveYieldScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ 抵抗力向內塌陷
          GIVE = 把堅持「給出去」
          IN   = 向內讓步 ════ */}

      {/* 防線（磚牆，從完整到裂開） */}
      <motion.div
        animate={{ scaleX: [1, 1, 1, 0.3, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.62, 0.94], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '36%', top: '18%', width: 44, height: 56, background: '#bf360c', borderRadius: 4, zIndex: 5, transformOrigin: 'center', display: 'flex', flexWrap: 'wrap', gap: 2, padding: 3 }}>
        {Array(12).fill(0).map((_, i) => (
          <div key={i} style={{ flex: '1 0 28%', height: 10, background: '#e64a19', borderRadius: 2 }} />
        ))}
      </motion.div>

      {/* 小狗（從左邊一直撒嬌） */}
      <motion.div
        animate={{ x: [0, 0, 5, -5, 5, -5, 0], y: [0, 0, -4, 4, -4, 4, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ position: 'absolute', left: '10%', top: '26%', fontSize: 30, zIndex: 4 }}>
        {obj.emoji}
      </motion.div>

      {/* 壓力箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.85, 0.85, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.46, 0.62, 0.94] }}
        style={{ position: 'absolute', left: '26%', top: '38%', fontSize: 14, fontWeight: 900, color: '#e65100', zIndex: 6 }}>
        →→
      </motion.div>

      {/* 父母（右邊，最後接受） */}
      <motion.div
        animate={{ x: [0, 0, 0, 0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.62, 0.72, 0.94] }}
        style={{ position: 'absolute', right: '10%', top: '22%', zIndex: 6 }}>
        <svg width="40" height="54" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="32" y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
        </svg>
      </motion.div>

      {/* OK 好啦！ */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.60, 0.70, 0.94] }}
        style={{ position: 'absolute', right: '4%', top: '10%', background: '#fff3e0', border: '1.5px solid #ffa000', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
        好啦好啦 😮‍💨
      </motion.div>

      {/* IN 標示 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.48, 0.76, 0.94] }}
        style={{ position: 'absolute', left: '50%', top: '72%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
        IN → （塌）
      </motion.div>

      <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 放開堅持 + IN 向內讓步 = 屈服</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Give out  (give-distribute)
// GIVE 給出 + OUT 往外 = 分發 / 耗盡撐不住
// ─────────────────────────────────────────────────
function GiveDistributeScene({ obj }) {
  const isHandout = obj.label === '講義';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：分發講義
          GIVE = 給出
          OUT  = 往外、到每個人手上 ════ */}
      {isHandout && <>
        {/* 老師（左側） */}
        <div style={{ position: 'absolute', left: '6%', top: '20%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 講義飛向 3 個學生 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{
              x: [0, 0, (i + 1) * 52, (i + 1) * 52, 0],
              y: [0, 0, (i - 1) * 18, (i - 1) * 18, 0],
              opacity: [0, 0.9, 0.9, 0, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.10 + i * 0.12, 0.28 + i * 0.12, 0.40 + i * 0.12, 0.94], ease: 'easeOut', delay: i * 0.1 }}
            style={{ position: 'absolute', left: '18%', top: '30%', fontSize: 16, zIndex: 6 }}>
            {obj.emoji}
          </motion.div>
        ))}

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.44, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '44%', top: '54%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 給出 + OUT 往外 = 分發</div>
      </>}

      {/* ════ Scene B：雙腿耗盡撐不住
          GIVE = 給出所有力氣
          OUT  = 全送出去後歸零 ════ */}
      {!isHandout && <>
        {/* 地面 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

        {/* 人（站立→膝蓋彎曲→癱下） */}
        <motion.div
          animate={{ y: [0, 0, 0, 18, 18, 0], rotate: [0, 0, 0, 8, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.56, 0.72, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '34%', top: '20%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>

        {/* 體力 emoji（從頭上飄散消失） */}
        <motion.div
          animate={{ y: [0, 0, 0, -30, -50, 0], opacity: [0.9, 0.9, 0.9, 0.3, 0, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.64, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '34%', top: '4%', fontSize: 24, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 虛脫符號 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '22%', fontSize: 18, zIndex: 7 }}>
          💫
        </motion.div>

        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '4%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT ↑
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 給出力氣 + OUT 全送光 = 撐不住</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Give away  (give-away)
// GIVE 給出 + AWAY 送到遠方 = 贈送 / 洩露秘密
// ─────────────────────────────────────────────────
function GiveAwayScene({ obj }) {
  const isClothes = obj.label === '舊衣';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：送舊衣
          GIVE = 給出去
          AWAY = 飛到遠方不回來 ════ */}
      {isClothes && <>
        {/* 人（左側，伸手送出） */}
        <div style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 衣服飛向右遠方 */}
        <motion.div
          animate={{ x: [0, 0, 60, 120, 180, 0], opacity: [1, 1, 1, 0.7, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.50, 0.64, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '26%', top: '26%', fontSize: 26, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '56%', top: '40%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        {/* 收件人（右邊出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 給出 + AWAY 送到遠方 = 贈送</div>
      </>}

      {/* ════ Scene B：笑容洩露秘密
          GIVE = 秘密跑出去
          AWAY = 飛遠被人知道 ════ */}
      {!isClothes && <>
        {/* 驚喜箱（中間） */}
        <motion.div
          animate={{ scale: [1, 1, 1, 1.15, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.52, 0.64, 0.94] }}
          style={{ position: 'absolute', left: '42%', top: '32%', fontSize: 28, zIndex: 4 }}>
          🎁
        </motion.div>

        {/* 笑容洩露：人在左邊忍不住笑 */}
        <div style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* 秘密 emoji 飛出去（往遠方洩露） */}
        <motion.div
          animate={{ x: [0, 0, 40, 80, 120, 0], y: [0, 0, -10, -20, -30, 0], opacity: [0, 0.9, 0.9, 0.6, 0, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.46, 0.60, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '20%', top: '18%', fontSize: 22, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 對方發現！ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.60, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '4%', top: '10%', background: '#fff3e0', border: '1.5px solid #ffa000', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#e65100', zIndex: 7, whiteSpace: 'nowrap' }}>
          你笑了！😂
        </motion.div>

        {/* AWAY 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '44%', top: '6%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          AWAY →
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 跑出去 + AWAY 傳到遠方 = 洩露</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Give back  (give-return)
// GIVE 給出 + BACK 回到原處 = 歸還 / 回饋
// ─────────────────────────────────────────────────
function GiveReturnScene({ obj }) {
  const isUmbrella = obj.label === '雨傘';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：還傘
          GIVE = 給出去
          BACK = 回到原主人手上 ════ */}
      {isUmbrella && <>
        {/* 持傘人（右側，原主人） */}
        <div style={{ position: 'absolute', right: '8%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>

        {/* 傘（從左往右飛回） */}
        <motion.div
          animate={{ x: [0, 0, 50, 100, 100, 0], opacity: [1, 1, 1, 0.6, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.54, 0.64, 0.94], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '16%', top: '26%', fontSize: 28, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>

        {/* 歸還人（左側） */}
        <div style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>

        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '40%', top: '54%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          BACK →
        </motion.div>

        {/* 謝謝泡泡 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '4%', top: '8%', background: '#e8f5e9', border: '1.5px solid #66bb6a', borderRadius: 8, padding: '3px 7px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 7, whiteSpace: 'nowrap' }}>
          謝謝你 🙏
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 給出 + BACK 回到原主 = 歸還</div>
      </>}

      {/* ════ Scene B：志願回饋社群
          GIVE = 把自己給出去
          BACK = 送回給社群 ════ */}
      {!isUmbrella && <>
        {/* 中心圓（社群） */}
        <div style={{ position: 'absolute', left: '50%', top: '30%', marginLeft: -22, width: 44, height: 44, borderRadius: '50%', background: '#e3f2fd', border: '2px solid #90caf9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, zIndex: 3 }}>
          👥
        </div>

        {/* 回饋 emoji 飛向社群 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{
              x: [0, 0, [50, 10, -30][i], [50, 10, -30][i], 0],
              y: [0, 0, [10, -30, 10][i], [10, -30, 10][i], 0],
              opacity: [0.9, 0.9, 0.5, 0, 0.9],
            }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.58, 0.94], delay: i * 0.3 }}
            style={{ position: 'absolute', left: '14%', top: '34%', fontSize: 18, zIndex: 5 }}>
            {obj.emoji}
          </motion.div>
        ))}

        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '32%', top: '68%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          BACK → 社群
        </motion.div>

        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>GIVE 給出 + BACK 回送給社群 = 回饋</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Make up  (make-assemble)  ── REWRITTEN
// MAKE 製造 + UP 往上拼齊 = 捏造/和好/化妝/組成/彌補
// ─────────────────────────────────────────────────
function MakeAssembleScene({ obj }) {
  const isLie      = obj.label === '謊話';
  const isRelation = obj.label === '關係';
  const isMakeup   = obj.label === '妝';
  const isCompose  = obj.label === '組成';
  // 彌補 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：捏造謊話
          人站著 → 空白對話框出現 → 線條一條條寫出來 → 📖 完成 ════ */}
      {isLie && <>
        {/* 人（左側） */}
        <div style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 空白對話框 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0, 0], scaleX: [0.2, 0.2, 1, 1, 0.2, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.20, 0.72, 0.82, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '30%', top: '12%', width: 80, height: 56, borderRadius: 10, border: '2px solid #bdbdbd', background: '#fff', zIndex: 4, transformOrigin: 'left center' }}>
          {/* ✏️ 在框裡從左往右寫 */}
          <motion.div
            animate={{ x: [0, 0, 60, 60, 0], opacity: [0, 0.9, 0.9, 0, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.54, 0.62, 0.94] }}
            style={{ position: 'absolute', top: 6, left: 4, fontSize: 14 }}>
            ✏️
          </motion.div>
          {/* 寫出的線條 1 */}
          <motion.div
            animate={{ scaleX: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 0.8, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.38, 0.72, 0.94] }}
            style={{ position: 'absolute', top: 14, left: 8, width: 60, height: 4, background: '#ef9a9a', borderRadius: 2, transformOrigin: 'left' }} />
          {/* 寫出的線條 2 */}
          <motion.div
            animate={{ scaleX: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 0.8, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.44, 0.72, 0.94] }}
            style={{ position: 'absolute', top: 24, left: 8, width: 50, height: 4, background: '#90caf9', borderRadius: 2, transformOrigin: 'left' }} />
          {/* 寫出的線條 3 */}
          <motion.div
            animate={{ scaleX: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 0.8, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.50, 0.72, 0.94] }}
            style={{ position: 'absolute', top: 34, left: 8, width: 55, height: 4, background: '#a5d6a7', borderRadius: 2, transformOrigin: 'left' }} />
        </motion.div>
        {/* 📖 在完成後從對話框飛出 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0], scale: [0.4, 0.4, 0.4, 0.4, 1, 0.4], x: [0,0,0,0,10,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.62, 0.74, 0.94] }}
          style={{ position: 'absolute', left: '56%', top: '8%', fontSize: 28, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE 製造 + UP 憑空寫出來 = 捏造</div>
      </>}

      {/* ════ Scene B：和好
          A 從左走來、B 從右走來，中間相遇，💕 出現 ════ */}
      {isRelation && <>
        {/* 人 A（從左走向中間） */}
        <motion.div
          animate={{ x: [0, 0, 60, 60, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 人 B（從右走向中間，面朝左） */}
        <motion.div
          animate={{ x: [0, 0, -60, -60, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        {/* 💕 在中間出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0], scale: [0.3, 0.3, 0.3, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.58, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '8%', fontSize: 28, zIndex: 7 }}>
          💕
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE 修復 + UP 補回來 = 和好</div>
      </>}

      {/* ════ Scene C：化妝
          素顏臉 → 💄 塗嘴唇 → 腮紅 → 完妝 ════ */}
      {isMakeup && <>
        {/* 素顏臉（一直在） */}
        <div style={{ position: 'absolute', left: '28%', top: '14%', zIndex: 3 }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5"/>
            {/* 眼睛 */}
            <ellipse cx="21" cy="26" rx="4" ry="4.5" fill="#fff" stroke="#888" strokeWidth="1"/>
            <ellipse cx="39" cy="26" rx="4" ry="4.5" fill="#fff" stroke="#888" strokeWidth="1"/>
            <circle cx="22" cy="27" r="2" fill="#555"/>
            <circle cx="40" cy="27" r="2" fill="#555"/>
            {/* 素唇（灰） */}
            <path d="M22 40 Q30 44 38 40" stroke="#bbb" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        {/* 💄 滑向嘴唇 */}
        <motion.div
          animate={{ x: [30, 30, 0, 0, 30, 30], opacity: [0, 0.9, 0.9, 0.5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.46, 0.56, 0.94] }}
          style={{ position: 'absolute', left: '52%', top: '38%', fontSize: 22, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        {/* 紅唇出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.52, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '14%', zIndex: 4 }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M22 40 Q30 46 38 40 Q33 43 27 40 Z" fill="#e53935" stroke="none"/>
            <path d="M22 40 Q30 44 38 40" stroke="#e53935" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 腮紅出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.7, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '14%', zIndex: 4 }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <ellipse cx="17" cy="35" rx="6" ry="3" fill="#ffb3c1" opacity="0.7"/>
            <ellipse cx="43" cy="35" rx="6" ry="3" fill="#ffb3c1" opacity="0.7"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE 製造 + UP 往上塗好 = 化妝</div>
      </>}

      {/* ════ Scene D：構成
          空圓餅 → 扇形一塊塊飛入 → 填滿 ════ */}
      {isCompose && <>
        {/* 底圓 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -32, top: '14%', zIndex: 2 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="none" stroke="#e0e0e0" strokeWidth="2"/>
          </svg>
        </div>
        {/* 扇形1（從左下飛入） */}
        <motion.div
          animate={{ x: [0, 0, 0, -28, -28, 0], y: [0, 0, 0, -20, -20, 0], opacity: [0, 0, 0.9, 0.9, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.20, 0.50, 0.64, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', marginLeft: 4, top: '42%', zIndex: 4 }}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 16 L16 2 A14 14 0 0 1 27.1 23 Z" fill="#ef9a9a"/>
          </svg>
        </motion.div>
        {/* 扇形2（從右上飛入） */}
        <motion.div
          animate={{ x: [0, 0, 0, -28, -28, 0], y: [0, 0, 0, 18, 18, 0], opacity: [0, 0, 0.9, 0.9, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.50, 0.64, 0.94], ease: 'easeOut', delay: 0.2 }}
          style={{ position: 'absolute', left: '50%', marginLeft: 4, top: '14%', zIndex: 4 }}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 16 L27.1 9 A14 14 0 0 1 27.1 23 Z" fill="#90caf9"/>
          </svg>
        </motion.div>
        {/* 扇形3（從左上飛入） */}
        <motion.div
          animate={{ x: [0, 0, 0, 28, 28, 0], y: [0, 0, 0, 18, 18, 0], opacity: [0, 0, 0.9, 0.9, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.50, 0.64, 0.94], ease: 'easeOut', delay: 0.4 }}
          style={{ position: 'absolute', left: '18%', top: '14%', zIndex: 4 }}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 16 L4.9 9 A14 14 0 0 1 27.1 9 Z" fill="#a5d6a7"/>
          </svg>
        </motion.div>
        {/* 完整派圖出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0], scale: [0.5, 0.5, 0.5, 0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.64, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '20%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE 製造 + UP 組合成整體 = 構成</div>
      </>}

      {/* ════ Scene E：彌補
          人 B 頭上 😞 → A 走來遞花 → 😞 換成 😊 ════ */}
      {!isLie && !isRelation && !isMakeup && !isCompose && <>
        {/* 人 B（右，固定） */}
        <div style={{ position: 'absolute', right: '8%', top: '26%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 😞 在 B 頭上（收到花後消失） */}
        <motion.div
          animate={{ opacity: [0.9, 0.9, 0.9, 0.9, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.58, 0.66, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '8%', fontSize: 22, zIndex: 6 }}>
          😞
        </motion.div>
        {/* 😊 在 B 頭上（收到花後出現） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.60, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '8%', fontSize: 22, zIndex: 6 }}>
          😊
        </motion.div>
        {/* 人 A（從左走向 B） */}
        <motion.div
          animate={{ x: [0, 0, 60, 60, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '8%', top: '26%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 💐 跟著 A 走，抵達後飛給 B */ }
        <motion.div
          animate={{ x: [0, 0, 60, 80, 60, 0], opacity: [1, 1, 1, 0.3, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.56, 0.66, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '18%', top: '20%', fontSize: 22, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE 做出行動 + UP 補上缺口 = 彌補</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Make out  (make-discern)
// MAKE 製造 + OUT 取出 = 辨認 / 搞懂
// ─────────────────────────────────────────────────
function MakeDiscernScene({ obj }) {
  const isShape = obj.label === '輪廓';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：暗室裡辨認人影
          觀察者湊近 → 暗色剪影 → 變成清楚的人 → ! ════ */}
      {isShape && <>
        {/* 暗室背景 */}
        <div style={{ position: 'absolute', left: '28%', right: '6%', top: '10%', bottom: '20%', background: '#37474f', borderRadius: 8, zIndex: 2 }} />
        {/* 暗色剪影（全黑，第一階段） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.50, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '52%', top: '18%', zIndex: 4 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#212121"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#212121" strokeWidth="4" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#212121" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#212121" strokeWidth="4" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#212121" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 清楚的人（第二階段 fade in） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.95, 0.95, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.58, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '52%', top: '18%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        {/* 觀察者（湊近） */}
        <motion.div
          animate={{ x: [0, 0, 14, 14, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.60, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* ! 認出來了 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.44, 0.56, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '10%', top: '10%', fontSize: 22, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          !
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE + OUT 從黑暗中辨認出來 = 看清楚</div>
      </>}

      {/* ════ Scene B：從打結的線團抽出答案
          中間一團亂線 → 人 A 伸手進去拉 → 💡 被抽出來 ════ */}
      {!isShape && <>
        {/* 中間：一團打結的亂線（混亂的情況） */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '20%', zIndex: 3 }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <path d="M10 28 Q18 10 28 20 Q38 30 46 14 Q50 8 44 20 Q38 32 28 24 Q18 16 14 28 Q10 40 20 38 Q32 36 38 44" stroke="#bdbdbd" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M14 18 Q22 30 30 18 Q38 6 44 20 Q48 30 38 36 Q28 42 18 34 Q8 26 14 18" stroke="#e0e0e0" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        {/* 人 A（左，手往右伸進亂線） */}
        <motion.div
          animate={{ x: [0, 0, 18, 18, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.58, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '6%', top: '22%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="38" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 💡 從亂線裡被抽出來（往左上飄） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0], x: [0, 0, 0, 0, -30, -30], y: [0, 0, 0, 0, -20, -20], scale: [0.3, 0.3, 0.3, 0.3, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.54, 0.66, 0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '24%', fontSize: 26, zIndex: 7 }}>
          💡
        </motion.div>
        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.40, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '70%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 6 }}>
          OUT → 抽出來
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>MAKE + OUT 把答案從混亂裡挖出來 = 搞懂</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Pick up  (pick-lift)
// PICK 挑選 + UP 往上 = 撿起/學會/接人/接電話/好轉
// ─────────────────────────────────────────────────
function PickLiftScene({ obj }) {
  const isCoin   = obj.label === '硬幣';
  const isLang   = obj.label === '語言';
  const isPickup = obj.label === '接人';
  const isPhone  = obj.label === '電話';
  // 業績 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：撿硬幣
          硬幣在地上 → 人彎腰 → 撿起往上 ════ */}
      {isCoin && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 硬幣（地上 → 被撿起） */}
        <motion.div
          animate={{ y: [0, 0, 0, -50, -50, 0], x: [0, 0, 0, 10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.68, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '42%', top: '56%', fontSize: 22, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>
        {/* 人（彎腰撿） */}
        <motion.div
          animate={{ rotate: [0, 0, 25, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '26%', top: '22%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 挑中 + UP 往上撿 = 撿起</div>
      </>}

      {/* ════ Scene B：學語言
          📖 地上 → 人彎腰（手到書位）→ 書彈起 → 頭頂亮 ════ */}
      {isLang && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 📖 語言書（書名標在旁）→ 撿起彈起 */}
        <motion.div
          animate={{ y: [0, 0, 0, -46, -46, 0], scale: [1, 1, 1, 1.2, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.54, 0.70, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '40%', top: '55%', zIndex: 5, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 22 }}>📖</span>
          <span style={{ fontSize: 9, fontWeight: 800, color: '#e65100', whiteSpace: 'nowrap', lineHeight: 1.2 }}>Español</span>
        </motion.div>
        {/* 人（腳踩在地上：top 38% = 64px，腳在 64+54=118px ≈ 70% ground） */}
        <motion.div
          animate={{ rotate: [0, 0, 28, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.56, 0.72, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '38%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 挑起 + UP 從地撿起一門語言 = 學會</div>
      </>}

      {/* ════ Scene C：接人
          B 帶🧳等在右 → 🚗從左開到B旁（x:206）→ B 踏入（UP）→ 🚗開走 ════ */}
      {isPickup && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人 B（唯一一個，腳踩地：top 40% = 68px, 68+54=122px ≈ 72% ground）*/}
        <motion.div
          animate={{ x: [0, 0, 0, 20, 20, 0], y: [0, 0, 0, -16, -16, 0], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '14%', top: '40%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        {/* 🧳 行李（B消失時一起淡出） */}
        <motion.div
          animate={{ opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.48, 0.56, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '62%', fontSize: 18, zIndex: 4 }}>
          🧳
        </motion.div>
        {/* 🚗 從左進來（-6px起），停在B旁（需移206px），再開走（再+120px） */}
        <motion.div
          animate={{ x: [0, 0, 206, 206, 326, 326] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.56, 0.76, 0.94], ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'absolute', left: '-2%', top: '44%', fontSize: 32, zIndex: 4 }}>
          🚗
        </motion.div>
        {/* UP 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.44, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '26%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          UP ↑
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>🚗 駛來 → B 踏入車（UP）→ 被接走</div>
      </>}

      {/* ════ Scene D：接電話
          📱 放桌上（低）→ 手伸下去撿起（UP）→ 到耳邊（高） ════ */}
      {isPhone && <>
        {/* 桌子 */}
        <div style={{ position: 'absolute', left: '20%', right: '20%', top: '58%', height: 5, background: '#bcaaa4', borderRadius: 2, zIndex: 3 }} />
        {/* 📱 從桌上被撿起到耳邊 */}
        <motion.div
          animate={{ y: [0, 0, 0, -44, -44, 0], x: [0, 0, 0, -8, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.32, 0.50, 0.68, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '44%', top: '40%', fontSize: 26, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>
        {/* 人（手往下撿，再起身） */}
        <motion.div
          animate={{ rotate: [0, 0, 18, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.52, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '26%', top: '14%', zIndex: 4, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* UP 箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.85, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.46, 0.76, 0.94] }}
          style={{ position: 'absolute', left: '44%', top: '20%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ↑
        </motion.div>
        {/* 喂？ */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.54, 0.64, 0.94] }}
          style={{ position: 'absolute', right: '8%', top: '10%', background: '#e8f5e9', border: '1.5px solid #66bb6a', borderRadius: 8, padding: '3px 8px', fontSize: 9, fontWeight: 700, color: '#2e7d32', zIndex: 6, whiteSpace: 'nowrap' }}>
          喂？
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 選中 + UP 從桌上拿起來 = 接電話</div>
      </>}

      {/* ════ Scene E：業績好轉
          3 根矮灰柱（Jan-Mar）→ Q4 藍柱從底往上長 + glow ════ */}
      {!isCoin && !isLang && !isPickup && !isPhone && <>
        {/* X 軸 */}
        <div style={{ position: 'absolute', left: '8%', right: '8%', top: '66%', height: 2, background: '#e0e0e0', zIndex: 3 }} />
        {/* 3 根矮灰柱 */}
        {['Jan','Feb','Mar'].map((m, i) => (
          <div key={i} style={{ position: 'absolute', left: `${12 + i*14}%`, bottom: '34%', width: '10%', height: '20%', background: '#d0d0d0', borderRadius: '3px 3px 0 0', zIndex: 3 }}>
            <div style={{ position: 'absolute', bottom: '-14px', width: '100%', fontSize: 7, color: '#9e9e9e', textAlign: 'center' }}>{m}</div>
          </div>
        ))}
        {/* Q4 藍柱（scaleY: 底部往上長） */}
        <motion.div
          animate={{ scaleY: [0.12, 0.12, 1, 1, 0.12], boxShadow: ['0 0 0px #90caf9', '0 0 0px #90caf9', '0 0 12px #42a5f5', '0 0 12px #42a5f5', '0 0 0px #90caf9'] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.46, 0.72, 0.94], ease: [0.34, 1.1, 0.64, 1] }}
          style={{ position: 'absolute', left: '58%', bottom: '34%', width: '10%', height: '52%', background: '#90caf9', borderRadius: '3px 3px 0 0', zIndex: 5, transformOrigin: 'bottom' }} />
        <div style={{ position: 'absolute', left: '58%', bottom: '20%', width: '10%', fontSize: 7, color: '#42a5f5', textAlign: 'center', fontWeight: 700, zIndex: 4 }}>Q4</div>
        {/* UP 箭頭 + 📈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [4, 4, 4, 0, 0, 4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.50, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '72%', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 6 }}>
          UP ↑
        </motion.div>
        <div style={{ position: 'absolute', left: '58%', top: '6%', fontSize: 22, zIndex: 5 }}>{obj.emoji}</div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>低迷 → Q4 PICKS UP 拉起來 = 好轉</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Hang out  (hang-idle)
// HANG 輕鬆晃著 + OUT 在外面 = 閒晃消磨時間
// ─────────────────────────────────────────────────
function HangIdleScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/* ════ 左半：室內（暖色）；右半：戶外（藍天）；中間有門
           人 B 從室內走 OUT 到外面，加入已在外面的人 A ════ */}

      {/* 室內背景 */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '36%', bottom: 0, background: '#fff8e1' }} />
      {/* 戶外背景 */}
      <div style={{ position: 'absolute', left: '36%', top: 0, right: 0, bottom: 0, background: '#e3f2fd' }} />

      {/* 地面 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: '72%', height: 3, background: '#bcaaa4', zIndex: 3 }} />

      {/* 牆壁（門左側） */}
      <div style={{ position: 'absolute', left: '20%', top: 0, width: 6, height: '72%', background: '#bcaaa4', zIndex: 6 }} />
      {/* 牆壁（門右側） */}
      <div style={{ position: 'absolute', left: '36%', top: 0, width: 6, height: '28%', background: '#bcaaa4', zIndex: 6 }} />
      <div style={{ position: 'absolute', left: '36%', top: '70%', width: 6, height: '2%', background: '#bcaaa4', zIndex: 6 }} />

      {/* 門（開關動畫）*/}
      <motion.div
        animate={{ scaleX: [1, 1, 0.15, 0.15, 0.15, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.22, 0.50, 0.68, 0.88], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '20%', top: '28%', width: '16%', height: '44%', background: '#8d6e63', borderRadius: '0 3px 3px 0', zIndex: 5, transformOrigin: 'left center' }}>
        <div style={{ position: 'absolute', right: '14%', top: '48%', width: 5, height: 5, borderRadius: '50%', background: '#ffd54f' }} />
      </motion.div>

      {/* ☀️ 戶外 */}
      <div style={{ position: 'absolute', right: '8%', top: '8%', fontSize: 18, zIndex: 4 }}>☀️</div>

      {/* 人 A（戶外，已在外面，輕鬆晃） */}
      <motion.div
        animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '62%', top: '30%', zIndex: 5, transformOrigin: 'bottom center' }}>
        <svg width="36" height="48" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="7"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="32" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="26" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="10" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>
      {/* ☕ 在人 A 旁邊 */}
      <div style={{ position: 'absolute', left: '74%', top: '36%', fontSize: 20, zIndex: 6 }}>{obj.emoji}</div>

      {/* 人 B（從室內走 OUT 到外面） */}
      <motion.div
        animate={{ x: [0, 0, 80, 80, 80, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.30, 0.52, 0.70, 0.90], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '4%', top: '30%', zIndex: 7 }}>
        <svg width="36" height="48" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="6"  y2="26" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="34" y2="20" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* OUT → 在過門瞬間出現 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.18, 0.28, 0.46, 0.58, 0.90] }}
        style={{ position: 'absolute', left: '26%', top: '16%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 9 }}>
        OUT →
      </motion.div>

      <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HANG 輕鬆晃著 + OUT 走出去 = 出去玩</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Hang up  (hang-mount)
// HANG 懸掛 + UP 往上 = 掛電話/掛起來
// ─────────────────────────────────────────────────
function HangMountScene({ obj }) {
  const isPhone = obj.label === '電話';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：掛電話
          人把電話大弧度抬起 → 咔嗒掛回牆上掛架 ════ */}
      {isPhone && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '76%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 牆面 */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '18%', bottom: 0, background: '#f5f5f5', borderLeft: '2px solid #e0e0e0', zIndex: 3 }} />
        {/* 掛架（T型） */}
        <div style={{ position: 'absolute', right: '12%', top: '20%', width: 22, height: 5, background: '#78909c', borderRadius: 3, zIndex: 5 }} />
        <div style={{ position: 'absolute', right: '16%', top: '20%', width: 5, height: 18, background: '#78909c', borderRadius: 2, zIndex: 5 }} />
        {/* 人：右臂先低後高舉起 */}
        <motion.div
          animate={{ rotate: [0, 0, -26, -26, 0, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, times: [0, 0.10, 0.34, 0.56, 0.72, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '14%', top: '24%', zIndex: 6, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 📞 大弧線 UP，咔嗒掛上架，landing bounce */}
        <motion.div
          animate={{
            x: [0, 0, 40, 56, 52, 0],
            y: [0, 0, -52, -36, -38, 0],
            scale: [1, 1, 1, 1.15, 1, 1],
          }}
          transition={{ duration: 5.2, repeat: Infinity, times: [0, 0.10, 0.36, 0.50, 0.60, 0.94], ease: ['linear', 'easeIn', [0.34, 1.1, 0.64, 1], 'easeOut', 'linear'] }}
          style={{ position: 'absolute', left: '36%', top: '52%', fontSize: 26, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>
        {/* UP ↑ 跟著電話往上時出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0, 0], y: [0, 0, -52, -36, 0, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, times: [0, 0.10, 0.36, 0.50, 0.60, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '52%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          UP ↑
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HANG 懸掛 + UP 往上掛回去 = 掛電話</div>
      </>}

      {/* ════ Scene B：掛衣服
          人手臂動態抬起 → 🧥 大弧線 UP 落到 🪝，落鉤後輕晃 ════ */}
      {!isPhone && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '76%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 牆面 */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '18%', bottom: 0, background: '#f5f5f5', borderLeft: '2px solid #e0e0e0', zIndex: 3 }} />
        {/* 鉤子 */}
        <div style={{ position: 'absolute', right: '12%', top: '18%', fontSize: 22, zIndex: 5 }}>🪝</div>
        {/* 人：手臂由低到高 */}
        <motion.div
          animate={{ rotate: [0, 0, -28, -28, 0, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, times: [0, 0.10, 0.32, 0.54, 0.72, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '14%', top: '24%', zIndex: 6, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 🧥 大弧線 UP，落鉤後左右晃 */}
        <motion.div
          animate={{
            x:      [0, 0, 55,  62,  58,  62,  60, 0],
            y:      [0, 0, -55, -42, -44, -42, -43, 0],
            rotate: [0, 0,   0,   0,  -8,   8,   0, 0],
          }}
          transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.10, 0.34, 0.48, 0.56, 0.64, 0.72, 0.94], ease: ['linear','easeIn',[0.34,1.1,0.64,1],'easeOut','easeInOut','easeInOut','easeOut','linear'] }}
          style={{ position: 'absolute', left: '26%', top: '56%', fontSize: 26, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>
        {/* UP ↑ */}
        <motion.div
          animate={{ opacity: [0, 0, 0.9, 0.9, 0, 0, 0, 0], y: [0, 0, -55, -42, 0, 0, 0, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.10, 0.34, 0.48, 0.56, 0.64, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '46%', top: '56%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          UP ↑
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HANG 懸掛 + UP 往上掛好 = 掛起來</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Hang on  (hang-cling)
// HANG 緊抓 + ON 持續 = 稍等/死命抓住
// ─────────────────────────────────────────────────
function HangClingScene({ obj }) {
  const isWait = obj.label === '手勢';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：稍等
          與 Hold on 相似，但強調「懸在空中等」的感覺 ════ */}
      {isWait && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        <div style={{ position: 'absolute', left: '10%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="8"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', left: '22%', top: '18%', fontSize: 22, zIndex: 6 }}>{obj.emoji}</div>
        {/* 人 B 原地晃（等待中） */}
        <motion.div
          animate={{ x: [0, 0, -6, -6, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.50, 0.68, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', right: '14%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.50, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '48%', top: '20%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 7 }}>
          ON ⏸
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HANG 懸在此刻 + ON 持續 = 稍等</div>
      </>}

      {/* ════ Scene B：緊抓撐住
          人吊在繩子上，繩子被往下拉扯，手死命抓著，ON = 不放手 ════ */}
      {!isWait && <>
        {/* 天花板/橫桿 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '12%', height: 5, background: '#78909c', borderRadius: 2, zIndex: 3 }} />
        {/* 繩子 */}
        <motion.div
          animate={{ scaleY: [1, 1, 1.04, 1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '48%', top: '17%', width: 4, height: 24, background: '#8d6e63', borderRadius: 2, zIndex: 4, transformOrigin: 'top' }} />
        {/* 人（懸空，身體輕微晃動） */}
        <motion.div
          animate={{ rotate: [0, 3, -3, 3, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '38%', top: '36%', zIndex: 5, transformOrigin: 'top center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="20" y2="7"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="20" y2="7"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="7"  x2="8"  y2="0"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="7"  x2="30" y2="0"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', left: '40%', top: '26%', fontSize: 16, zIndex: 6 }}>{obj.emoji}</div>
        <div style={{ position: 'absolute', right: '10%', top: '36%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 7 }}>ON →</div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HANG 懸吊著 + ON 死抓不放 = 撐住</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Carry on  (carry-on)
// CARRY（扛著）+ ON（持續往前）= 繼續做不停下
// ─────────────────────────────────────────────────
function CarryOnScene({ obj }) {
  const isLuggage = obj.label === '行李';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* Scene A: continue despite burden
          person carries a box, hits a bump, keeps going ON */}
      {!isLuggage && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* bump on road */}
        <div style={{ position: 'absolute', left: '48%', top: '67%', width: 20, height: 8, background: '#bdbdbd', borderRadius: '50% 50% 0 0', zIndex: 3 }} />
        {/* person + box, walk right, dip over bump, continue ON */}
        <motion.div
          animate={{ x: [0, 120, 120], y: [0, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'linear', times: [0, 0.70, 1] }}
          style={{ position: 'absolute', left: '-10%', top: '24%', zIndex: 5 }}>
          {/* box on top of person */}
          <motion.div
            animate={{ y: [0, 0, -3, 3, -2, 0, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.42, 0.50, 0.56, 0.62, 0.68, 1], ease: 'easeInOut' }}
            style={{ fontSize: 20, textAlign: 'center', marginBottom: 2 }}>
            {obj.emoji}
          </motion.div>
          <svg width="36" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="12" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="12" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="10" y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', right: '8%', top: '18%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 6 }}>ON →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CARRY + ON = 扛著繼續往前走</div>
      </>}

      {/* Scene B: carry-on luggage
          person rolls bag toward plane gate, bag goes ON (into overhead) */}
      {isLuggage && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* gate frame */}
        <div style={{ position: 'absolute', right: '8%', top: '18%', width: 6, height: '56%', background: '#90a4ae', zIndex: 4 }} />
        <div style={{ position: 'absolute', right: '8%', top: '18%', width: 36, height: 6, background: '#90a4ae', zIndex: 4 }} />
        <div style={{ position: 'absolute', right: '8%', top: '22%', fontSize: 14, zIndex: 5 }}>✈️</div>
        {/* person walks to gate */}
        <motion.div
          animate={{ x: [0, 150, 150] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: 'loop', ease: 'easeOut', times: [0, 0.65, 1] }}
          style={{ position: 'absolute', left: '4%', top: '28%', zIndex: 5 }}>
          <svg width="36" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="6"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="34" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="10" y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* rolling luggage follows person */}
        <motion.div
          animate={{ x: [0, 150, 150] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: 'loop', ease: 'easeOut', times: [0, 0.65, 1], delay: 0.15 }}
          style={{ position: 'absolute', left: '8%', top: '52%', fontSize: 20, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', right: '4%', top: '52%', fontSize: 9, fontWeight: 900, color: '#1a237e', zIndex: 6 }}>ON →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CARRY + ON = 帶著上飛機</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Carry out  (carry-out)
// CARRY（搬運）+ OUT（帶出去）= 把計畫付諸行動
// ─────────────────────────────────────────────────
function CarryOutScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* plan board on left, person picks it up and walks OUT right
          checkmarks appear as they execute */}
      <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
      {/* plan board */}
      <div style={{ position: 'absolute', left: '6%', top: '22%', width: 48, height: 52, background: '#fff', border: '2px solid #90a4ae', borderRadius: 4, zIndex: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '4px 6px' }}>
        {['Step 1', 'Step 2', 'Step 3'].map((s, i) => (
          <div key={i} style={{ fontSize: 7, color: '#546e7a', fontWeight: 600 }}>{s}</div>
        ))}
      </div>
      {/* person picks up plan and walks OUT */}
      <motion.div
        animate={{ x: [0, 0, 0, 130, 130, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.22, 0.52, 0.72, 0.94], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '18%', top: '26%', zIndex: 5 }}>
        <svg width="36" height="48" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="6"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="10" y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>
      {/* plan emoji carried by person */}
      <motion.div
        animate={{ x: [0, 0, 0, 130, 130, 0], opacity: [0, 0, 1, 1, 1, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.22, 0.52, 0.72, 0.94] }}
        style={{ position: 'absolute', left: '32%', top: '18%', fontSize: 18, zIndex: 6 }}>
        {obj.emoji}
      </motion.div>
      {/* checkmarks appear one by one as plan executes */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ opacity: [0,0,0, 1, 1, 0], scale: [0.3,0.3,0.3, 1.2, 1, 0.3] }}
          transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.30, 0.38+i*0.06, 0.46+i*0.06, 0.68, 0.94], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: `${56 + i*10}%`, top: '28%', fontSize: 16, zIndex: 7 }}>
          ✅
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.24, 0.38, 0.68, 0.94] }}
        style={{ position: 'absolute', right: '6%', top: '12%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
        OUT →
      </motion.div>
      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CARRY + OUT = 把計畫搬出去執行</div>
    </div>
  );
}

// ─────────────────────────────────────────────────


// ─────────────────────────────────────────────────
// Work on  (work-on)
// WORK（用力）+ ON（一直壓在上面）= 大工具反覆「壓在物件上」加工 → 物件慢慢變好
//   作品 ✏️ → 🌟（完成）   弱點 📉 → 📈（補強）
// ─────────────────────────────────────────────────
function WorkOnScene({ obj }) {
  const isProject = obj.label === '作品';
  const dur = 4.5;
  const tool = isProject ? '🖌️' : '🔧';
  const result = isProject ? '🌟' : '📈';

  // 一條時間軸：三次「壓下」(接觸點 0.18 / 0.38 / 0.58)，再展示成果，再重置
  const T = [0, 0.10, 0.18, 0.30, 0.38, 0.50, 0.58, 0.74, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 工作台 ── */}
      <div style={{ position: 'absolute', bottom: '34%', left: '12%', right: '10%', height: 8, background: '#8d6e63', borderRadius: 4, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: '16%', left: '18%', width: 5, height: '18%', background: '#795548', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: '16%', right: '14%', width: 5, height: '18%', background: '#795548', zIndex: 2 }} />

      {/* ── ON ↓ 標示（工具壓下的方向）── */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', fontSize: 12, fontWeight: 900, color: '#e65100', zIndex: 9 }}>ON ↓</div>

      {/* ── 大工具：反覆「壓下 → 抬起」，垂直位移約 36px，清楚可見 ── */}
      <motion.div
        animate={{
          y:      [-34, -34,  4, -34,  4, -34,  4, -34, -34],
          rotate: isProject ? [-18, -18, 6, -18, 6, -18, 6, -18, -18] : [0, 0, 0, 0, 0, 0, 0, 0, 0],
        }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: '40%', left: '50%', marginLeft: -18, fontSize: 36, zIndex: 7, transformOrigin: 'bottom center' }}
      >{tool}</motion.div>

      {/* ── 被加工的物件（每次壓到就壓扁回彈）── */}
      <motion.div
        animate={{ scaleY: [1, 1, 0.7, 1, 0.7, 1, 0.7, 1, 1] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'backOut' }}
        style={{ position: 'absolute', bottom: '35%', left: '50%', marginLeft: -16, fontSize: 30, lineHeight: 1, zIndex: 4, transformOrigin: 'bottom' }}
      >{obj.emoji}</motion.div>

      {/* ── 接觸火花（每次壓下時迸出）── */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 0, 1, 0, 1, 0, 0], scale: [0.4, 0.4, 1.4, 0.4, 1.4, 0.4, 1.4, 0.4, 0.4] }}
        transition={{ duration: dur, repeat: Infinity, times: T }}
        style={{ position: 'absolute', bottom: '40%', left: '50%', marginLeft: -8, fontSize: 16, zIndex: 8 }}>
        ✨
      </motion.div>

      {/* ── 進度條：每壓一次往上一階，逼近滿格 ── */}
      <div style={{ position: 'absolute', bottom: '26%', left: '50%', marginLeft: -40, width: 80, height: 8, background: '#e0e0e0', borderRadius: 4, zIndex: 5 }}>
        <motion.div
          animate={{ width: ['4%', '4%', '38%', '38%', '68%', '68%', '96%', '96%', '4%'] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
          style={{ height: 8, background: '#43a047', borderRadius: 4 }}
        />
      </div>

      {/* ── 成果：加工完成後彈出（作品→🌟 / 弱點→📈）── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 0, 0, 1, 0], scale: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1.3, 0.3], y: [0, 0, 0, 0, 0, 0, 0, -6, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', bottom: '44%', left: '50%', marginLeft: 20, fontSize: 30, zIndex: 9 }}>
        {result}
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>
        {isProject ? 'WORK + ON = 一直在作品上加工 → 越做越好' : 'WORK + ON = 一直修那個弱點 → 補強起來'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Work out  (work-out)
// WORK（用力做）+ OUT（結果出來）= 健身 / 解決 / 順利
// ─────────────────────────────────────────────────
function WorkOutScene({ obj }) {
  const isExercise = obj.label === '健身';
  const isPuzzle = obj.label === '問題';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* Scene A: 健身 — 人跑步，汗水往外噴，💪 從身體飛 OUT */}
      {isExercise && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '68%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        <motion.div
          animate={{ x: [0, 280] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          style={{ position: 'absolute', left: '-14%', top: '26%', zIndex: 5 }}>
          <svg width="40" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="4"  y2="22" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="36" y2="12" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="32" y2="42" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="8"  y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {[0,1,2].map(i => (
          <motion.div key={i}
            animate={{ x: [0, [-12,0,12][i]*1.4], y: [0, -22], opacity: [0, 1, 0], scale: [0.4, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.3, delay: i * 0.25, ease: 'easeOut' }}
            style={{ position: 'absolute', left: '44%', top: '32%', fontSize: 11, zIndex: 7 }}>
            💧
          </motion.div>
        ))}
        <motion.div
          animate={{ x: [0, 0, 40, 40, 0], y: [0, 0, -18, -18, 0], opacity: [0, 0, 1, 1, 0], scale: [0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.30, 0.55, 0.75, 0.95], ease: [0.34,1.56,0.64,1] }}
          style={{ position: 'absolute', left: '52%', top: '30%', fontSize: 24, zIndex: 8 }}>
          {obj.emoji}
        </motion.div>
        <div style={{ position: 'absolute', right: '6%', top: '14%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>OUT →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>WORK + OUT = 拼命用力，把結果逼出來</div>
      </>}

      {/* Scene B: 解決 — 上鎖箱子，鑰匙不斷嘗試，箱子打開 ✅ 飛 OUT */}
      {isPuzzle && <>
        <div style={{ position: 'absolute', left: '10%', top: '22%', width: 52, height: 48, background: '#fff3e0', border: '2.5px solid #ef6c00', borderRadius: 6, zIndex: 4 }}>
          <div style={{ textAlign: 'center', marginTop: 6, fontSize: 20 }}>🔒</div>
          <div style={{ textAlign: 'center', fontSize: 10, color: '#ef6c00', fontWeight: 700 }}>{obj.emoji}</div>
        </div>
        <motion.div
          animate={{ x: [0, 3, -3, 3, -2, 0, 0, 0], rotate: [0, 8, -8, 8, -4, 0, 0, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.10, 0.18, 0.26, 0.34, 0.44, 0.70, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '28%', fontSize: 22, zIndex: 6 }}>
          🔑
        </motion.div>
        <motion.div
          animate={{ scaleY: [1, 1, 1, 0.1, 0.1, 1], y: [0, 0, 0, -8, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.36, 0.46, 0.56, 0.70, 0.90], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '10%', top: '22%', width: 52, height: 16, background: '#ef6c00', borderRadius: '6px 6px 0 0', zIndex: 7, transformOrigin: 'top' }} />
        <motion.div
          animate={{ x: [0, 0, 0, 60, 60, 0], y: [0, 0, 0, -28, -28, 0], opacity: [0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 1.3, 1, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.36, 0.50, 0.62, 0.74, 0.92], ease: [0.34,1.56,0.64,1] }}
          style={{ position: 'absolute', left: '18%', top: '30%', fontSize: 26, zIndex: 8 }}>
          ✅
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.36, 0.52, 0.62, 0.74, 0.92] }}
          style={{ position: 'absolute', right: '6%', top: '18%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 9 }}>
          OUT →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>WORK + OUT = 努力解開，答案跑出來</div>
      </>}

      {/* Scene C: 順利 — 烏雲擔心，雲散去，☀️ 從雲後 OUT */}
      {!isExercise && !isPuzzle && <>
        <motion.div
          animate={{ x: [0, 0, 60, 60, 0], opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.48, 0.68, 0.92], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '18%', top: '10%', fontSize: 32, zIndex: 5 }}>
          ⛈️
        </motion.div>
        <div style={{ position: 'absolute', left: '26%', top: '38%', zIndex: 4 }}>
          <svg width="32" height="44" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <motion.div
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.46, 0.68, 0.90] }}
          style={{ position: 'absolute', left: '24%', top: '24%', fontSize: 14, zIndex: 6 }}>😟</motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.44, 0.58, 0.90] }}
          style={{ position: 'absolute', left: '24%', top: '24%', fontSize: 14, zIndex: 6 }}>😊</motion.div>
        <motion.div
          animate={{ x: [0, 0, 0, 50, 50, 0], opacity: [0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.44, 0.58, 0.74, 0.92], ease: [0.34,1.56,0.64,1] }}
          style={{ position: 'absolute', left: '22%', top: '10%', fontSize: 28, zIndex: 7 }}>
          {obj.emoji}
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.46, 0.58, 0.74, 0.92] }}
          style={{ position: 'absolute', right: '6%', top: '12%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 9 }}>
          OUT →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>WORK + OUT = 撐過去，好結果浮出來</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────

// ─────────────────────────────────────────────────
// Cut out  (cut-out)
// CUT（切）+ OUT（剪出去）= 停止/去掉/適合
// ─────────────────────────────────────────────────
function CutOutScene({ obj }) {
  const isStop = obj.label === '停止';
  const isFit = obj.label === '個性';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* Scene A: 停止 */}
      {isStop && <>
        <div style={{ position: 'absolute', left: '56%', top: '28%', zIndex: 4 }}>
          <svg width="32" height="44" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <motion.div
          animate={{ x: [0,0, 4,-4, 4,-2, 0, 0,0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0,0.30, 0.36,0.40,0.44,0.48,0.54, 0.80,1] }}
          style={{ position: 'absolute', left: '56%', top: '28%', zIndex: 5 }}>
          <svg width="32" height="44" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', left: '12%', top: '28%', zIndex: 4 }}>
          <svg width="32" height="44" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <motion.div
          animate={{ x: [0,0, 22, 22, 22, 80, 80, 0], opacity: [1,1, 1, 1, 1, 0, 0, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0,0.10, 0.28, 0.38, 0.50, 0.62, 0.78, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '38%', zIndex: 6 }}>
          <svg width="28" height="10" viewBox="0 0 28 10">
            <line x1="0" y1="5" x2="28" y2="5" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="26" cy="5" r="3" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity: [0,0, 0, 1, 0, 0], scale: [1,1,1, 1.3, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0,0.10, 0.34, 0.46, 0.56, 1] }}
          style={{ position: 'absolute', left: '36%', top: '30%', fontSize: 20, zIndex: 8 }}>
          ✂️
        </motion.div>
        <div style={{ position: 'absolute', left: '10%', top: '14%', fontSize: 14, zIndex: 5 }}>😤</div>
        <motion.div
          animate={{ opacity: [0,0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0,0.10, 0.34, 0.48, 0.56, 0.72, 0.88] }}
          style={{ position: 'absolute', right: '8%', top: '14%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 9 }}>
          CUT IT OUT!
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT + OUT = 把壞行為剪掉趕出去</div>
      </>}

      {/* Scene B: 去掉/省略 */}
      {!isStop && !isFit && <>
        <div style={{ position: 'absolute', left: '22%', top: '28%', fontSize: 30, zIndex: 4 }}>{obj.emoji}</div>
        <motion.div
          animate={{ scale: [1, 1, 1.3, 0.8, 0], opacity: [1, 1, 1, 0.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.22, 0.36, 0.50, 0.60], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '22%', top: '28%', fontSize: 30, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 0, -30, -30, 0], scale: [1, 1, 1.4, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.24, 0.38, 0.52, 0.70] }}
          style={{ position: 'absolute', left: '30%', top: '20%', fontSize: 22, zIndex: 7 }}>
          ✂️
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.34, 0.50, 0.72, 0.90] }}
          style={{ position: 'absolute', left: '50%', top: '24%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
          OUT →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT + OUT = 去掉不需要的</div>
      </>}

      {/* Scene C: 天生適合 */}
      {isFit && <>
        <div style={{ position: 'absolute', left: '8%', top: '16%', width: 52, height: 68, background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: 3, zIndex: 3 }} />
        <motion.div
          animate={{ x: [0,8,16,16,8,0,0], y: [0,0,8,24,36,36,0], rotate: [0,45,90,135,180,180,0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.12,0.24,0.36,0.48,0.62,0.88], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '10%', top: '18%', fontSize: 16, zIndex: 7 }}>
          ✂️
        </motion.div>
        <motion.div
          animate={{ x: [0,0,0, 140, 140, 0], opacity: [0,0,1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.50,0.60, 0.74, 0.84, 0.96], ease: [0.34,1.1,0.64,1] }}
          style={{ position: 'absolute', left: '12%', top: '20%', zIndex: 6 }}>
          <svg width="28" height="38" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#fff9c4" stroke="#f9a825" strokeWidth="2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#f9a825" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#f9a825" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#f9a825" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#f9a825" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#f9a825" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', right: '10%', top: '16%', width: 40, height: 56, border: '2px dashed #90a4ae', borderRadius: 4, background: '#f5f5f5', zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <span style={{ fontSize: 14 }}>👩‍🍳</span>
          <span style={{ fontSize: 7, color: '#90a4ae', fontWeight: 700 }}>這個角色</span>
        </div>
        <motion.div
          animate={{ opacity: [0,0,0,0, 1, 1, 0], scale: [0.3,0.3,0.3,0.3, 1.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.50,0.60,0.72, 0.80, 0.88, 0.96], ease: [0.34,1.56,0.64,1] }}
          style={{ position: 'absolute', right: '8%', top: '12%', fontSize: 16, zIndex: 9 }}>
          ✅
        </motion.div>
        <motion.div
          animate={{ opacity: [0,0,0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0,0.50,0.62, 0.70, 0.82, 0.94] }}
          style={{ position: 'absolute', left: '38%', top: '30%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
          OUT →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT OUT FOR = 被剪成這個形狀，天生吻合</div>
      </>}
    </div>
  );
}
function CutOffScene({ obj }) {
  const isTalk = obj.label === '話';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* Scene A: 切斷電源 — 電線中間被剪斷，兩端飛開 */}
      {!isTalk && <>
        {/* 左段電線 */}
        <motion.div
          animate={{ x: [0, 0, -28, -28, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.28, 0.46, 0.70, 0.92], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '8%', top: '49%', width: '28%', height: 5, background: '#f44336', borderRadius: 3, zIndex: 4 }} />
        {/* 右段電線 */}
        <motion.div
          animate={{ x: [0, 0, 28, 28, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.28, 0.46, 0.70, 0.92], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', top: '49%', width: '28%', height: 5, background: '#f44336', borderRadius: 3, zIndex: 4 }} />
        {/* 插頭 */}
        <div style={{ position: 'absolute', left: '8%', top: '34%', fontSize: 20, zIndex: 5 }}>{obj.emoji}</div>
        {/* 剪刀動畫 */}
        <motion.div
          animate={{ scale: [1, 1, 1.2, 0.9, 1], rotate: [0, 0, -20, 0, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.22, 0.34, 0.44, 0.58] }}
          style={{ position: 'absolute', left: '43%', top: '30%', fontSize: 22, zIndex: 6 }}>
          ✂️
        </motion.div>
        {/* OFF 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.30, 0.44, 0.70, 0.90] }}
          style={{ position: 'absolute', right: '8%', top: '28%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 7 }}>
          OFF ✂
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT + OFF = 切斷連接</div>
      </>}

      {/* Scene B: 打斷說話 — 對話泡被剪刀切斷 */}
      {isTalk && <>
        {/* Person A 說話泡泡 */}
        <motion.div
          animate={{ scaleX: [0, 1, 1, 0.1, 0], scaleY: [0, 1, 1, 0.1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.16, 0.34, 0.50, 0.60], ease: [0.34, 1.1, 0.64, 1] }}
          style={{ position: 'absolute', left: '6%', top: '14%', transformOrigin: 'left bottom', zIndex: 5 }}>
          <div style={{ background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 10, padding: '5px 8px', fontSize: 10, color: '#1565c0', fontWeight: 700, whiteSpace: 'nowrap' }}>
            {obj.emoji} I was saying...
          </div>
        </motion.div>
        {/* Person A */}
        <div style={{ position: 'absolute', left: '6%', top: '36%', zIndex: 4 }}>
          <svg width="32" height="44" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Person B 出現 + 剪刀打斷 */}
        <div style={{ position: 'absolute', left: '58%', top: '36%', zIndex: 4 }}>
          <svg width="32" height="44" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="6"  y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="17" x2="34" y2="24" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="12" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <motion.div
          animate={{ x: [30, 30, 0, 0, 30], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.28, 0.40, 0.72, 0.90] }}
          style={{ position: 'absolute', left: '50%', top: '22%', fontSize: 18, zIndex: 7 }}>
          ✂️
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.36, 0.46, 0.70, 0.90] }}
          style={{ position: 'absolute', left: '38%', top: '12%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
          CUT OFF
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT + OFF = 打斷說話</div>
      </>}
    </div>
  );
}


// ─────────────────────────────────────────────────
// Work on  (work-on)
// WORK（用力）+ ON（持續在上面）= 持續打磨
// ─────────────────────────────────────────────────
// // ─────────────────────────────────────────────────
function CutDownScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 長條柱被斧頭/剪刀砍矮 */}
      {/* 柱子底部 */}
      <div style={{ position: 'absolute', left: '38%', bottom: '20%', width: 44, background: '#e0e0e0', height: 10, borderRadius: '0 0 4px 4px', zIndex: 3 }} />
      {/* 柱子本體（高度 animate 縮短） */}
      <motion.div
        animate={{ height: [80, 80, 32, 32, 80] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.18, 0.44, 0.66, 0.90], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '38%', bottom: '30%', width: 44, background: '#ffb74d', borderRadius: '4px 4px 0 0', zIndex: 4, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 4, overflow: 'hidden' }}>
        <span style={{ fontSize: 18 }}>{obj.emoji}</span>
      </motion.div>
      {/* 斧頭/剪刀 animate 往下砍 */}
      <motion.div
        animate={{ y: [0, 0, 36, 24, 0], rotate: [0, 0, 20, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.36, 0.48, 0.88], ease: [0.34, 1.1, 0.64, 1] }}
        style={{ position: 'absolute', left: '44%', top: '10%', fontSize: 24, zIndex: 6 }}>
        ✂️
      </motion.div>
      {/* DOWN 標示 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.38, 0.66, 0.88] }}
        style={{ position: 'absolute', left: '60%', top: '28%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 7 }}>
        ↓ DOWN
      </motion.div>
      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>CUT + DOWN = 砍低用量，減少消耗</div>
    </div>
  );
}
// Fall through  (fall-through)
// FALL 掉落 + THROUGH 穿過 = 計畫告落空
// ─────────────────────────────────────────────────
function FallThroughScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* ════ 活板門打開，📋 往下掉穿過去失 ════ */}

      {/* 地台（活板門左半） */}
      <motion.div
        animate={{ x: [0, 0, -38, -38, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.32, 0.62, 0.88], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '22%', top: '46%', width: '18%', height: 8, background: '#90a4ae', borderRadius: '4px 0 0 4px', zIndex: 4 }} />
      {/* 地台（活板門右半） */}
      <motion.div
        animate={{ x: [0, 0, 38, 38, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.32, 0.62, 0.88], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '40%', top: '46%', width: '18%', height: 8, background: '#90a4ae', borderRadius: '0 4px 4px 0', zIndex: 4 }} />

      {/* 📋 坐在活板門上 → 往下掉穿過去 */}
      <motion.div
        animate={{ y: [0, 0, 0, 90, 90, 0], opacity: [1, 1, 1, 0, 0, 1], rotate: [0, 0, 0, 20, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.30, 0.52, 0.70, 0.88], ease: ['linear','linear','easeIn','linear','linear','linear'] }}
        style={{ position: 'absolute', left: '43%', top: '26%', fontSize: 28, zIndex: 5 }}>
        {obj.emoji}
      </motion.div>

      {/* ✗ 取消符號（告吹時出現） */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.5, 0.5, 0.5, 1.2, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.34, 0.46, 0.64, 0.88], ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '44%', top: '28%', fontSize: 22, zIndex: 7 }}>
        ❌
      </motion.div>

      {/* THROUGH ↓ 標示 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.14, 0.32, 0.44, 0.64, 0.88] }}
        style={{ position: 'absolute', left: '56%', top: '44%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
        THROUGH ↓
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 掉 + THROUGH 穿過去 = 計畫告吹</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Fall for  (fall-for)
// FALL 栽倒 + FOR 朝向 = 愛上/上當
// ─────────────────────────────────────────────────
function FallForScene({ obj }) {
  const isLove = obj.label === '心動';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：愛上
          人 A 看到人 B → 整個身體往前栽倒（FALL FOR）
          💘 從胸口飛出 ════ */}
      {isLove && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '74%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人 B（右，靜止，被仰慕） */}
        <div style={{ position: 'absolute', right: '12%', top: '28%', zIndex: 4 }}>
          <svg width="36" height="48" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="26" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="26" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="26" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="10" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 人 A：往右前栽倒（rotate + x） */}
        <motion.div
          animate={{ rotate: [0, 0, 42, 42, 0], x: [0, 0, 28, 28, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.34, 0.64, 0.88], ease: [0.34, 1.1, 0.64, 1] }}
          style={{ position: 'absolute', left: '10%', top: '28%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="36" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="6"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 💘 從人 A 胸口飛出 */}
        {[{ x: 30, y: -28 }, { x: 52, y: -14 }, { x: 22, y: -42 }].map((p, i) => (
          <motion.div key={i}
            animate={{ x: [0,0, p.x, p.x, 0], y: [0,0, p.y, p.y, 0], opacity: [0,0, 1, 1, 0], scale: [0.3,0.3, 1, 1, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.28, 0.44, 0.66, 0.88], ease: [0.34, 1.1, 0.64, 1], delay: i * 0.1 }}
            style={{ position: 'absolute', left: '20%', top: '34%', fontSize: 16, zIndex: 7 }}>
            {obj.emoji}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.28, 0.40, 0.66, 0.88] }}
          style={{ position: 'absolute', left: '40%', top: '10%', fontSize: 10, fontWeight: 900, color: '#c2185b', zIndex: 8 }}>
          FALL FOR →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 栽倒 + FOR 朝向 = 愛上</div>
      </>}

      {/* ════ Scene B：上當
          地板有陷阱，人走路 → 掉進去（FALL FOR = 栽進陷阱） ════ */}
      {!isLove && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 陷阱坑（地板凹陷） */}
        <div style={{ position: 'absolute', left: '48%', top: '63%', width: 38, height: 14, background: '#424242', borderRadius: '0 0 8px 8px', zIndex: 3 }} />
        <div style={{ position: 'absolute', left: '46%', top: '58%', fontSize: 16, zIndex: 4 }}>{obj.emoji}</div>
        {/* 人：走過去 → 掉進陷阱（y 大幅下降） */}
        <motion.div
          animate={{ x: [0, 0, 62,  62,  62, 0], y: [0, 0,  0,  22,  22, 0], rotate: [0, 0, 0, 20, 20, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.36, 0.52, 0.70, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 5 }}>
          <svg width="36" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 驚嘆號 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [0, 0, 0, -6, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.08, 0.40, 0.54, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '38%', top: '14%', fontSize: 18, zIndex: 8 }}>
          ❗
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 栽進 + FOR 那個陷阱 = 上當受騙</div>
      </>}
    </div>
  );
}

// ────────────────────────────────────────────────
// Fall behind  (fall-behind)
// FALL 掉落 + BEHIND 到後面 = 落後跟不上
// ─────────────────────────────────────────────────
function FallBehindScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
      {/* 終點線 */}
      <div style={{ position: 'absolute', right: '8%', top: '28%', width: 3, height: '46%', background: '#ef9a9a', borderRadius: 2, zIndex: 3 }} />
      <div style={{ position: 'absolute', right: '5%', top: '22%', fontSize: 16, zIndex: 4 }}>🏁</div>

      {/* 人 A（藍，穩定前進） */}
      <motion.div
        animate={{ x: [0, 160, 160] }}
        transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.60, 1], ease: 'easeOut', repeatType: 'loop' }}
        style={{ position: 'absolute', left: '8%', top: '28%', zIndex: 5 }}>
        <svg width="34" height="46" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="36" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="32" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="8"  y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* 人 B（橘，越來越掉到後面，帶 FALL 往下沉效果） */}
      <motion.div
        animate={{ x: [0, 60, 60], y: [0, 14, 14] }}
        transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.60, 1], ease: 'easeOut', repeatType: 'loop' }}
        style={{ position: 'absolute', left: '8%', top: '28%', zIndex: 5 }}>
        <svg width="34" height="46" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="4"  y2="22" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="34" y2="20" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="10" y2="44" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* BEHIND 差距箭頭（A 和 B 之間） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], x: [0, 0, 60, 60] }}
        transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.20, 0.55, 1], repeatType: 'loop' }}
        style={{ position: 'absolute', left: '24%', top: '16%', fontSize: 9, fontWeight: 900, color: '#c62828', zIndex: 8, whiteSpace: 'nowrap' }}>
        BEHIND ←
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 掉 + BEHIND 到後面 = 落後跟不上</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Fall apart  (fall-apart)
// FALL 掉落 + APART 四散 = 崩潰瓦解
// ─────────────────────────────────────────────────
function FallApartScene({ obj }) {
  const isStructure = obj.label === '結構';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：結構崩塌
          積木塔 → 四塊磚往四個方向 FALL + APART ════ */}
      {isStructure && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '74%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 塔（靜態，消失後被飛散的磚取代） */}
        <motion.div
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.22, 0.80, 0.94] }}
          style={{ position: 'absolute', left: '38%', top: '28%', zIndex: 4 }}>
          <div style={{ width: 44, height: 18, background: '#ef9a9a', borderRadius: 3, marginBottom: 3 }} />
          <div style={{ width: 44, height: 18, background: '#90caf9', borderRadius: 3, marginBottom: 3 }} />
          <div style={{ width: 44, height: 18, background: '#a5d6a7', borderRadius: 3, marginBottom: 3 }} />
          <div style={{ width: 44, height: 18, background: '#ffe082', borderRadius: 3 }} />
        </motion.div>
        {/* 四塊磚飛散（FALL ↓ + APART ← →） */}
        {[
          { color: '#ef9a9a', x: -55, y: -30 },
          { color: '#90caf9', x:  60, y: -10 },
          { color: '#a5d6a7', x: -40, y:  28 },
          { color: '#ffe082', x:  50, y:  40 },
        ].map((b, i) => (
          <motion.div key={i}
            animate={{
              x:       [0, 0, b.x, b.x, 0],
              y:       [0, 0, b.y, b.y, 0],
              opacity: [0, 0, 1,   1,   0],
              rotate:  [0, 0, (i%2===0?-30:30), (i%2===0?-30:30), 0],
            }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.18, 0.46, 0.76, 0.94], ease: [0.34, 1.1, 0.64, 1] }}
            style={{ position: 'absolute', left: '38%', top: `${28 + i*21}%`, width: 44, height: 18, background: b.color, borderRadius: 3, zIndex: 5 }} />
        ))}
        {/* APART 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.18, 0.32, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '8%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
          ← APART →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 掉落 + APART 四散 = 瓦解崩塌</div>
      </>}

      {/* ════ Scene B：精神崩潰
          人站著 → 蹲下崩潰，💔 從心口飛散 ════ */}
      {!isStructure && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '74%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人：站立 → 蹲下 */}
        <motion.div
          animate={{ scaleY: [1, 1, 0.62, 0.62, 1], y: [0, 0, 20, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.12, 0.30, 0.68, 0.90], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '38%', top: '22%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="6"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        {/* 💔 從胸口飛散到四個方向 */}
        {[
          { x: -42, y: -22 },
          { x:  36, y: -18 },
          { x: -28, y:  18 },
          { x:  32, y:  22 },
        ].map((p, i) => (
          <motion.div key={i}
            animate={{ x: [0,0, p.x, p.x, 0], y: [0,0, p.y, p.y, 0], opacity: [0,0, 0.9, 0.9, 0], scale: [0.4,0.4, 1, 1, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.42, 0.70, 0.92], ease: [0.34, 1.1, 0.64, 1] }}
            style={{ position: 'absolute', left: '47%', top: '36%', fontSize: 14, zIndex: 6 }}>
            {obj.emoji}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.22, 0.36, 0.70, 0.92] }}
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '8%', fontSize: 10, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
          ← APART →
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>FALL 倒下 + APART 碎散 = 精神崩潰</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Keep up  (keep-pace)
// KEEP 維持 + UP 在上面 = 跟上/維持水準
// ─────────────────────────────────────────────────
function KeepPaceScene({ obj }) {
  const isRun = obj.label === '腳步';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：跟上腳步
          藍色「高標準線」在上方，人 A 穩定跑在線上
          人 B 跑著跑著往下掉 → 奮力彈回（spring easing）
          UP = 那個彈回高度的動作 ════ */}
      {isRun && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '28%', height: 2, background: '#90caf9', borderRadius: 1, zIndex: 3 }} />
        <div style={{ position: 'absolute', right: '7%', top: '22%', fontSize: 9, color: '#1565c0', fontWeight: 900, zIndex: 4 }}>UP ↑</div>
        {/* 人 A（穩定跑在線上） */}
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: '38%', top: '20%', zIndex: 5 }}>
          <svg width="34" height="46" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="6"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="36" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="32" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="8"  y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 人 B：x loop 外層 + y spring 內層（dip → 彈回） */}
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: '6%', top: '20%', zIndex: 5 }}>
          <motion.div
            animate={{ y: [0, 0, 20, -6, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.28, 0.50, 0.68, 1], ease: ['linear', 'easeIn', [0.34, 1.56, 0.64, 1], 'easeOut'] }}>
            <svg width="34" height="46" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="4"  y2="18" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="20" x2="36" y2="14" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="33" x2="32" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
              <line x1="20" y1="33" x2="8"  y2="44" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>KEEP 維持 + UP 衝回高標準 = 跟上不落後</div>
      </>}

      {/* ════ Scene B：維持水準
          ⭐ 大幅下沉 → 人往上頂住彈回（互動感）
          ⭐ 回到高位時發出金色光暈 ════ */}
      {!isRun && <>
        <div style={{ position: 'absolute', left: '8%', right: '8%', top: '30%', height: 2, background: '#90caf9', borderRadius: 1, zIndex: 3, opacity: 0.6 }} />
        <div style={{ position: 'absolute', right: '8%', top: '24%', fontSize: 9, color: '#1565c0', fontWeight: 900, zIndex: 4 }}>UP ↑</div>
        {/* ⭐ 下沉後彈回，回到高位發光 */}
        <motion.div
          animate={{
            y:      [0, 0, 26, -8, 0],
            filter: ['drop-shadow(0 0 0px gold)', 'drop-shadow(0 0 0px gold)', 'drop-shadow(0 0 0px gold)', 'drop-shadow(0 0 10px gold)', 'drop-shadow(0 0 4px gold)'],
          }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.12, 0.40, 0.62, 1], ease: ['linear', 'easeIn', [0.34, 1.56, 0.64, 1], 'easeOut'] }}
          style={{ position: 'absolute', left: '44%', top: '12%', fontSize: 30, zIndex: 5 }}>
          {obj.emoji}
        </motion.div>
        {/* 人：隨 ⭐ 下沉微蹲 → 往上頂 */}
        <motion.div
          animate={{ y: [0, 0, 6, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.12, 0.40, 0.62, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '28%', top: '32%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="14" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>KEEP 維持 + UP 在高位 = 維持好表現</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Keep on  (keep-persist)
// KEEP 維持 + ON 持續 = 不斷繼續做
// ─────────────────────────────────────────────────
function KeepPersistScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: '0', right: '0', top: '70%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
      {/* 圓點路徑（全寬） */}
      {[0,1,2,3,4,5,6].map(i => (
        <div key={i} style={{ position: 'absolute', left: `${4 + i * 14}%`, top: '69%', width: 6, height: 6, background: '#90caf9', borderRadius: '50%', zIndex: 3, opacity: 0.5 }} />
      ))}
      {/* ON → 常駐右上角 */}
      <div style={{ position: 'absolute', right: '8%', top: '16%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 6 }}>ON →</div>
      {/* 人從左側畫面外走入、穿越至右側畫面外，seamless loop */}
      <motion.div
        animate={{ x: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        style={{ position: 'absolute', left: '-14%', top: '36%', zIndex: 5 }}>
        {/* 人上方的 emoji 一起跟著走 */}
        <div style={{ fontSize: 18, textAlign: 'center', marginBottom: 2 }}>{obj.emoji}</div>
        <svg width="36" height="48" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="6"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="20" x2="36" y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="10" y2="44" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>KEEP 維持 + ON 在軌道上 = 繼續不停</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Keep out  (keep-out)
// KEEP 維持 + OUT 在外面 = 不讓進/不介入
// ─────────────────────────────────────────────────
function KeepOutScene({ obj }) {
  const isDoor = obj.label === '門禁';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：禁止進入
          人走向門 → 門閃紅 → 人被彈回（spring bounce） ════ */}
      {isDoor && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 門框 */}
        <motion.div
          animate={{ x: [0, 0, 0, 3, -3, 3, -3, 0, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.40, 0.44, 0.48, 0.52, 0.56, 0.70, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '20%', width: 44, height: 54, background: '#bcaaa4', borderRadius: '4px 4px 0 0', zIndex: 4 }}>
          <motion.div
            animate={{ background: ['#b71c1c', '#b71c1c', '#b71c1c', '#ef5350', '#b71c1c', '#b71c1c', '#b71c1c'] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.36, 0.44, 0.56, 0.70, 0.94] }}
            style={{ position: 'absolute', top: '28%', left: '12%', right: '12%', borderRadius: 3, padding: '2px 3px', fontSize: 7, fontWeight: 900, color: '#fff', textAlign: 'center' }}>
            KEEP OUT
          </motion.div>
          <div style={{ position: 'absolute', right: '12%', top: '50%', width: 6, height: 6, background: '#ffd54f', borderRadius: '50%' }} />
        </motion.div>
        {/* 人走近 → 彈回（spring bounce） */}
        <motion.div
          animate={{ x: [0, 0, 100, -20, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.38, 0.58, 0.72, 0.94], ease: ['linear', 'easeIn', [0.34, 1.56, 0.64, 1], 'easeOut', 'linear'] }}
          style={{ position: 'absolute', left: '6%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="21" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.42, 0.52, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '18%', fontSize: 10, fontWeight: 900, color: '#b71c1c', zIndex: 7 }}>
          OUT ←
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>KEEP 維持 + OUT 在外面 = 禁止進入</div>
      </>}

      {/* ════ Scene B：不介入
          兩人吵架（💢 脈動），旁觀者往後退一步，舉雙手 ════ */}
      {!isDoor && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 💢 吵架氣泡 */}
        <motion.div
          animate={{ scale: [1, 1.3, 1, 1.3, 1], opacity: [0.7, 1, 0.7, 1, 0.7] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '40%', top: '10%', fontSize: 18, zIndex: 7 }}>
          💢
        </motion.div>
        {/* 吵架兩人（快速晃動） */}
        <motion.div
          animate={{ x: [0, 3, -3, 3, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '34%', top: '28%', zIndex: 5 }}>
          <svg width="36" height="48" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ x: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '50%', top: '28%', zIndex: 5 }}>
          <svg width="36" height="48" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="20" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 旁觀者往後退，OUT 標示 */}
        <motion.div
          animate={{ x: [0, 0, 0, -12, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.10, 0.30, 0.50, 0.70, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '8%', top: '26%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#78909c" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="5"  y2="12" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="33" y2="12" stroke="#78909c" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#78909c" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#78909c" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#78909c"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#78909c"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.10, 0.30, 0.50, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '4%', top: '14%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          OUT ←
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>KEEP 維持 + OUT 在外面 = 不介入</div>
      </>}
    </div>
  );
}

// ────────────────────────────────────────────────
// Hold on  (hold-grip)
// HOLD 抓住 + ON 持續 = 暫停/撐住不放
// ─────────────────────────────────────────────────
function HoldGripScene({ obj }) {
  const isGesture = obj.label === '手勢';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：等一下
          人 A 舉起手（✋ 暫停手勢）→ 人 B 正要走、停下來 ════ */}
      {isGesture && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人 A（左，舉手） */}
        <div style={{ position: 'absolute', left: '10%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="34" y2="8"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* ✋ 手勢 */}
        <div style={{ position: 'absolute', left: '22%', top: '18%', fontSize: 22, zIndex: 6 }}>{obj.emoji}</div>
        {/* 人 B（右，本來要走，被停下） */}
        <motion.div
          animate={{ x: [0, 0, -8, -8, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.50, 0.72, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', right: '14%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        {/* ON = 停住後保持靜止 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.50, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '50%', top: '20%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 7 }}>
          ON ⏸
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 抓住這刻 + ON 持續 = 等一下</div>
      </>}

      {/* ════ Scene B：撐住堅持
          繩子被拉扯 → 人雙手緊握不放 → 撐過去 ════ */}
      {!isGesture && <>
        {/* 繩子 */}
        <motion.div
          animate={{ scaleX: [1, 1, 1.08, 1, 1.08, 1, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.58, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '44%', width: '40%', height: 5, background: 'repeating-linear-gradient(90deg, #bcaaa4 0px, #bcaaa4 8px, #8d6e63 8px, #8d6e63 16px)', borderRadius: 3, zIndex: 4, transformOrigin: 'right' }} />
        {/* 繩子拉力方向（右側往右） */}
        <motion.div
          animate={{ x: [0, 0, 6, 0, 6, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.58, 0.72, 0.94] }}
          style={{ position: 'absolute', right: '10%', top: '38%', fontSize: 16, color: '#9e9e9e', zIndex: 3 }}>
          →→
        </motion.div>
        {/* 人（雙手握繩，身體後傾） */}
        <motion.div
          animate={{ rotate: [0, 0, -5, 0, -5, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.42, 0.58, 0.72, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '14%', top: '24%', zIndex: 5, transformOrigin: 'bottom center' }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="36" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
        <div style={{ position: 'absolute', left: '18%', top: '18%', fontSize: 18, zIndex: 6 }}>{obj.emoji}</div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 死握不放 + ON 持續 = 撐住堅持</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Hold up  (hold-brace)
// HOLD 抓住 + UP 往上撐 = 撐住/擋住
// ────────────────────────────────────────────────
function HoldBraceScene({ obj }) {
  const isBlock = obj.label === '路障';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：耽誤
          🚧 路障擋住 → 車/人排隊堆積 ════ */}
      {isBlock && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '68%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 路障 */}
        <div style={{ position: 'absolute', left: '50%', top: '46%', fontSize: 28, zIndex: 6 }}>{obj.emoji}</div>
        {/* 三輛被堵的車（往右排，第一輛最近） */}
        {['🚗', '🚙', '🚕'].map((car, i) => (
          <motion.div key={i}
            animate={{ x: [0, 0, -(i+1)*4, -(i+1)*4, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.70, 0.94], ease: 'easeOut', delay: i * 0.06 }}
            style={{ position: 'absolute', left: `${28 - i * 13}%`, top: '44%', fontSize: 22, zIndex: 5 - i }}>
            {car}
          </motion.div>
        ))}
        {/* UP 標示（被擋住撐著） */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.60, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '32%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          UP ⛔
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 擋住 + UP 撐在前方 = 耽誤</div>
      </>}

      {/* ════ Scene B：撐住不垮
          柱子撐著屋頂，壓力壓下來還撐得住 ════ */}
      {!isBlock && <>
        {/* 屋頂板（往下壓） */}
        <motion.div
          animate={{ y: [0, 0, 4, 4, 0, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.64, 0.78, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '12%', right: '12%', top: '18%', height: 10, background: '#78909c', borderRadius: 3, zIndex: 5 }} />
        {/* 兩根柱子 */}
        {['24%', '62%'].map((left, i) => (
          <motion.div key={i}
            animate={{ scaleY: [1, 1, 0.97, 0.97, 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.64, 0.78, 0.94], ease: 'easeInOut' }}
            style={{ position: 'absolute', left, top: '28%', width: 10, height: '42%', background: '#90a4ae', borderRadius: 3, zIndex: 4, transformOrigin: 'bottom' }} />
        ))}
        {/* UP 箭頭（柱子往上撐） */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '32%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 6 }}>UP ↑</div>
        <div style={{ position: 'absolute', left: '44%', top: '38%', fontSize: 22, zIndex: 6 }}>{obj.emoji}</div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 撐住 + UP 往上頂 = 經得起</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Hold back  (hold-restrain)
// HOLD 抓住 + BACK 往後拉 = 壓抑/阻礙/隱瞞
// ─────────────────────────────────────────────────
function HoldRestrainScene({ obj }) {
  const isEmotion = obj.label === '情緒';
  const isRun    = obj.label === '前進';
  // 秘密 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：壓抑情緒
          😢 在胸前冒出 → 人把它抓起來藏到背後（BACK）
          → 正面看起來若無其事，情緒偷偷躲在後面 ════ */}
      {isEmotion && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人（中央，正臉） */}
        <div style={{ position: 'absolute', left: '38%', top: '26%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            {/* 左臂：前伸抓情緒 → 往後藏 */}
            <line x1="19" y1="19" x2="6"  y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            {/* 右臂：也往後擺 */}
            <line x1="19" y1="19" x2="32" y2="26" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 😢 在胸前冒出，然後弧線移到背後（左後方，漸隱） */}
        <motion.div
          animate={{
            x:       [0,   0,  0, -46, -46,   0],
            y:       [0,   0,  0,  12,  12,   0],
            opacity: [1,   1,  1, 0.25, 0.25,  1],
            scale:   [1,   1,  1, 0.7,  0.7,   1],
          }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.46, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '52%', top: '30%', fontSize: 20, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        {/* BACK 標示：情緒藏到背後時出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.46, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '8%', top: '46%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          BACK ←
        </motion.div>
        {/* 「若無其事」文字，情緒藏好後出現 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 0.8, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.30, 0.50, 0.68, 0.94] }}
          style={{ position: 'absolute', right: '6%', top: '22%', fontSize: 9, color: '#78909c', zIndex: 7 }}>
          :)
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 抓住 + BACK 藏到背後 = 壓抑情緒</div>
      </>}

      {/* ════ Scene B：阻礙前進
          人 B 往前衝 → 人 A 從後抓住衣領拉回 ════ */}
      {isRun && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人 B（被阻礙者，往右跑，但被拉回） */}
        <motion.div
          animate={{ x: [0, 0, 14, 6, 14, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.38, 0.52, 0.66, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '38%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="20" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="6"  y2="26" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="20" x2="36" y2="18" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="30" y2="48" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="20" y1="33" x2="10" y2="44" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="46" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="6"  y="42" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </motion.div>
        {/* 人 A（左側，手伸過去抓住） */}
        <div style={{ position: 'absolute', left: '12%', top: '30%', zIndex: 6 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="38" y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.24, 0.38, 0.52, 0.72, 0.94] }}
          style={{ position: 'absolute', left: '30%', top: '18%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          BACK ←
        </motion.div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 抓住 + BACK 拉回去 = 阻礙前進</div>
      </>}

      {/* ════ Scene C：隱瞞資訊
          人手上有東西 → 藏到背後 → 面對另一人假裝沒有 ════ */}
      {!isEmotion && !isRun && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 人 A（左，手上有資訊 → 藏背後） */}
        <div style={{ position: 'absolute', left: '12%', top: '28%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 資訊（前方可見 → 移到背後） */}
        <motion.div
          animate={{ x: [0, 0, 0, -30, -30, 0], opacity: [1, 1, 1, 0.15, 0.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.46, 0.68, 0.94], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '20%', top: '30%', fontSize: 20, zIndex: 4 }}>
          {obj.emoji}
        </motion.div>
        {/* BACK 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.9, 0.9, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.28, 0.46, 0.68, 0.94] }}
          style={{ position: 'absolute', left: '6%', top: '18%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 8 }}>
          BACK ←
        </motion.div>
        {/* 人 B（右，詢問，A 卻搖頭沒有） */}
        <div style={{ position: 'absolute', right: '10%', top: '28%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', right: '8%', top: '16%', fontSize: 12, zIndex: 6 }}>🤔</div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>HOLD 扣住 + BACK 藏到背後 = 隱瞞不說</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Pick on  (pick-target)
// PICK 挑選 + ON 持續針對 = 反覆挑同一個人欺負
// ─────────────────────────────────────────────────
function PickTargetScene({ obj }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* ════ 找碴：A 反覆朝 B 戳手指，B 縮著，ON = 持續不停 ════ */}

      {/* 地板 */}
      <div style={{ position: 'absolute', left: '6%', right: '6%', top: '72%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />

      {/* 人 B（被欺負者，右側，一直在縮） */}
      <motion.div
        animate={{ x: [0, 0, 6, 0, 6, 0, 6, 0, 0], scale: [1, 1, 0.92, 1, 0.92, 1, 0.92, 1, 1] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.26, 0.38, 0.52, 0.62, 0.74, 0.84, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', right: '12%', top: '30%', zIndex: 5 }}>
        <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
          <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
        </svg>
      </motion.div>
      {/* 😟 表情在 B 上方 */}
      <div style={{ position: 'absolute', right: '13%', top: '18%', fontSize: 14, zIndex: 6 }}>{obj.emoji}</div>

      {/* 人 A（左側，手指反覆戳向 B） */}
      <motion.div
        animate={{ x: [0, 0, 12, 0, 12, 0, 12, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.34, 0.48, 0.58, 0.70, 0.82, 0.94], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '10%', top: '26%', zIndex: 5 }}>
        <svg width="40" height="54" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="7"  y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="19" y1="21" x2="36" y2="20" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
        </svg>
      </motion.div>

      {/* ON 標示（持續出現，表示一直在） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 0.3, 1, 0.3, 1, 0.3, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.22, 0.34, 0.48, 0.58, 0.70, 0.82, 0.94] }}
        style={{ position: 'absolute', left: '44%', top: '32%', fontSize: 10, fontWeight: 900, color: '#b71c1c', zIndex: 7 }}>
        ON
      </motion.div>

      {/* 戳的箭頭（→ 每次戳時出現） */}
      {[0.22, 0.48, 0.70].map((t, i) => (
        <motion.div key={i}
          animate={{ opacity: [0, 0, 0, 1, 0, 0, 0, 0, 0].map((v, j) => j === 3 + i * 2 || j === 3 + i * 2 + 1 ? 0.85 : 0) }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.18, 0.26, 0.34, 0.44, 0.52, 0.62, 0.94] }}
          style={{ position: 'absolute', left: '46%', top: '40%', fontSize: 12, color: '#b71c1c', zIndex: 6 }}>
          →
        </motion.div>
      ))}

      <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 挑中 + ON 持續針對 = 找碴霸凌</div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Pick out  (pick-select)
// PICK 挑選 + OUT 從裡面取出 = 從一堆裡挑出/認出
// ─────────────────────────────────────────────────
function PickSelectScene({ obj }) {
  const isClothes = obj.label === '衣服';
  // 目標 = default

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：挑選衣服
          衣架上幾件衣服 → 其中一件被挑 OUT（往外滑出）→ 人捧著 ════ */}
      {isClothes && <>
        {/* 衣架桿 */}
        <div style={{ position: 'absolute', left: '12%', right: '12%', top: '22%', height: 4, background: '#bcaaa4', borderRadius: 2, zIndex: 3 }} />
        {/* 左右兩件（留在架上，灰色） */}
        {[{ left: '14%', emoji: '🧥' }, { left: '62%', emoji: '👗' }].map((item, i) => (
          <div key={i} style={{ position: 'absolute', left: item.left, top: '28%', fontSize: 24, zIndex: 4, opacity: 0.45 }}>{item.emoji}</div>
        ))}
        {/* 中間那件（被挑出，往前滑 + scale 放大） */}
        <motion.div
          animate={{ y: [0, 0, 0, 28, 28, 0], scale: [1, 1, 1, 1.22, 1.22, 1], opacity: [0.9, 0.9, 0.9, 1, 1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.70, 0.94], ease: [0.34, 1.1, 0.64, 1] }}
          style={{ position: 'absolute', left: '38%', top: '24%', fontSize: 26, zIndex: 6 }}>
          {obj.emoji}
        </motion.div>
        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [0, 0, 0, 28, 28, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.52, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '54%', top: '26%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 7 }}>
          OUT
        </motion.div>
        {/* 人（右側，手伸向衣服） */}
        <div style={{ position: 'absolute', right: '6%', top: '38%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 挑中 + OUT 從一堆裡取出 = 挑選</div>
      </>}

      {/* ════ Scene B：認出目標
          人群（4個灰色輪廓）→ 其中一個被圈起（OUT 找到了）════ */}
      {!isClothes && <>
        {/* 4 個灰色人形（群眾） */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ position: 'absolute', left: `${10 + i * 18}%`, top: '22%', zIndex: 3, opacity: 0.3 }}>
            <svg width="28" height="38" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#9e9e9e"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#9e9e9e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="28" stroke="#9e9e9e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="28" stroke="#9e9e9e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="28" y2="46" stroke="#9e9e9e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="46" stroke="#9e9e9e" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        ))}
        {/* 目標人（第2個，橘色，被認出） */}
        <motion.div
          animate={{ opacity: [0.3, 0.3, 0.3, 1, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.50, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '28%', top: '22%', zIndex: 5 }}>
          <svg width="28" height="38" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </motion.div>
        {/* 圈起來（OUT = 從人群中識別出） */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [1.5, 1.5, 1.5, 1, 1, 1.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.50, 0.70, 0.94], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '25%', top: '18%', width: 36, height: 46, border: '2.5px solid #e65100', borderRadius: '50%', zIndex: 7 }} />
        {/* OUT 標示 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.50, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '34%', top: '10%', fontSize: 10, fontWeight: 900, color: '#e65100', zIndex: 8 }}>
          OUT
        </motion.div>
        {/* 觀察者（右側，眯眼看） */}
        <div style={{ position: 'absolute', right: '6%', top: '24%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54" style={{ transform: 'scaleX(-1)' }}>
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="4"  y2="21" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="28" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="28" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="24" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 目光連線 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.08, 0.34, 0.50, 0.70, 0.94] }}
          style={{ position: 'absolute', left: '36%', top: '30%', width: '42%', height: 1, background: 'linear-gradient(to right, #e65100, transparent)', zIndex: 4 }} />
        <div style={{ position: 'absolute', bottom: '7%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 4, whiteSpace: 'nowrap' }}>PICK 挑中 + OUT 從人群裡找出來 = 認出</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Break even  (break-balance)
// BREAK 打到那個點 + EVEN 兩邊相等、持平
// ─────────────────────────────────────────────────
function BreakBalanceScene({ obj }) {
  // 折線圖：虧損線從下往上爬，BREAK EVEN 那一刻穿越零線
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* ⚖️ */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '6%', fontSize: 20, zIndex: 5 }}>{obj.emoji}</div>

      {/* 圖表外框 */}
      <div style={{ position: 'absolute', left: '10%', right: '10%', top: '16%', bottom: '22%', border: '2px solid #bdbdbd', borderRadius: 6, background: 'white', zIndex: 3 }}>
        {/* 零線（損益平衡線）*/}
        <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: '#9e9e9e', zIndex: 4 }} />
        {/* 「虧損」標示（左下）*/}
        <div style={{ position: 'absolute', left: 6, bottom: 4, fontSize: 9, color: '#e53935', fontWeight: 700 }}>虧損</div>
        {/* 「獲利」標示（左上）*/}
        <div style={{ position: 'absolute', left: 6, top: 4, fontSize: 9, color: '#43a047', fontWeight: 700 }}>獲利</div>
        {/* ① 虧損折線（從左下角往右上爬）— 先出現 */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
          {/* 零線 */}
          <line x1="0" y1="50" x2="200" y2="50" stroke="#bdbdbd" strokeWidth="1" strokeDasharray="4 3"/>
          {/* 折線（從虧損一路爬到 break even 點）*/}
          <motion.polyline
            points="0,85 40,80 80,72 120,62 160,50"
            fill="none" stroke="#e53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            animate={{ pathLength:[0,0,1,1,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.52,0.62,0.76,0.86,0.94] }}
            style={{ pathLength: 0 }}
          />
        </svg>
        {/* ② BREAK：零線交叉點閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,0,2.4,0,0], opacity:[0,0,0,0,1,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.52,0.58,0.66,0.94] }}
          style={{ position: 'absolute', left: '79%', top: '48%', width: 8, height: 8, marginLeft: -4, marginTop: -4, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.9), transparent 70%)', zIndex: 6, transformOrigin: 'center' }}
        />
        {/* ③ EVEN：折線繼續往上（獲利），顏色變綠 */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 100" preserveAspectRatio="none">
          <motion.polyline
            points="160,50 180,40 200,32"
            fill="none" stroke="#43a047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            animate={{ pathLength:[0,0,0,0,0,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.62,0.70,0.86,0.94] }}
            style={{ pathLength: 0 }}
          />
        </svg>
        {/* break even 點標記 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0.9,0.9,0], scale:[0,0,0,0,1,1,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.56,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: '80%', top: '48%', width: 10, height: 10, marginLeft: -5, marginTop: -5, borderRadius: '50%', background: '#e53935', border: '2px solid white', zIndex: 7 }}
        />
      </div>

      {/* BREAK EVEN 文字 */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,1,1,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.58,0.64,0.70,0.86,0.94] }}
        style={{ position: 'absolute', left: '50%', transform:'translateX(-50%)', bottom: '10%', fontSize: 11, fontWeight: 900, color: '#e53935', letterSpacing: 1.5, zIndex: 8, whiteSpace: 'nowrap' }}
      >BREAK EVEN ±0</motion.div>

      {/* 左下角 💸 支出 */}
      <motion.div
        animate={{ opacity:[0.9,0.9,0.9,0.9,0.2,0,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.38,0.52,0.60,0.68,0.94] }}
        style={{ position: 'absolute', left: '12%', bottom: '24%', fontSize: 14, zIndex: 5 }}
      >💸</motion.div>
      {/* 右上角 💰 獲利 */}
      <motion.div
        animate={{ opacity:[0,0,0,0,0,0.9,0.9,0] }}
        transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.44,0.60,0.68,0.72,0.86,0.94] }}
        style={{ position: 'absolute', right: '12%', top: '18%', fontSize: 14, zIndex: 5 }}
      >💰</motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Break through  (break-pierce)
// BREAK 打穿障礙 + THROUGH 從這側穿到那側
// ─────────────────────────────────────────────────
function BreakPierceScene({ obj, meaning }) {
  const isClouds = obj.label === '雲層';
  const isShield = obj.label === '心防';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：突破難關（人跑向厚牆 → 打穿 → 穿透到另一側）════ */}
      {!isClouds && !isShield && <>
        {/* 厚磚牆（畫面右偏中）*/}
        <motion.div
          animate={{ x:[0,0,0,0,0,0,0] }}
          style={{ position: 'absolute', left: '52%', top: '8%', bottom: '8%', width: 28, zIndex: 5 }}>
          <svg width="28" height="100%" viewBox="0 0 28 200" preserveAspectRatio="none">
            {Array.from({length:10}).map((_,i) => (
              <g key={i}>
                <rect x={i%2===0?0:7} y={i*20} width="28" height="18" rx="2" fill="#8d6e63" stroke="#5d4037" strokeWidth="1"/>
              </g>
            ))}
          </svg>
        </motion.div>
        {/* 🧱 label */}
        <div style={{ position: 'absolute', left: '52%', top: '4%', fontSize: 16, zIndex: 6 }}>{obj.emoji}</div>
        {/* 人（從左邊跑向牆）*/}
        <motion.div
          animate={{ x:[0,0,0,70,70,70,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.28,0.40,0.54,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '14%', top: '30%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-4,0,-4,0] }} transition={{ duration: 0.46, repeat: Infinity }}>
            {/* 速度尾跡 */}
            <div style={{ position: 'absolute', right: '100%', top: '38%', width: 32, height: 7, background: 'linear-gradient(90deg, transparent, #ef9a9a)', borderRadius: 4 }} />
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* ① BREAK：牆壁裂縫閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.6,0,0,0], opacity:[0,0,0,1,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: '52%', top: '40%', width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.9), transparent 70%)', zIndex: 10 }}
        />
        {/* 牆碎片往兩側飛散 */}
        {[{x:-30,y:-20},{x:-20,y:18},{x:28,y:-14},{x:22,y:22}].map((p,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0.9,0.7,0], x:[0,0,0,0,p.x,p.x+4,0], y:[0,0,0,0,p.y,p.y+4,0], rotate:[0,0,0,0,i*40,i*45,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.40,0.52,0.66,0.94] }}
            style={{ position: 'absolute', left: '54%', top: '38%', width: 14, height: 10, background: '#8d6e63', borderRadius: 2, zIndex: 9 }}
          />
        ))}
        {/* ② THROUGH：人從牆的另一側衝出來（右側）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.95,0.8,0], x:[0,0,0,0,0,44,60,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.52,0.62,0.74,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: '52%', top: '30%', zIndex: 11 }}>
          <div style={{ position: 'absolute', right: '100%', top: '38%', width: 28, height: 7, background: 'linear-gradient(90deg, transparent, #ef9a9a)', borderRadius: 4 }} />
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
      </>}

      {/* ════ Scene B：陽光穿透雲層（雲裂開 → 光柱從上往下穿透）════ */}
      {isClouds && <>
        {/* 厚雲層（上方）*/}
        <motion.div
          animate={{ opacity:[1,1,1,1,1,1,1] }}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '42%', zIndex: 5 }}>
          <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
            <rect x="0" y="0" width="300" height="120" fill="#90a4ae"/>
            <ellipse cx="60"  cy="40" rx="70" ry="50" fill="#b0bec5"/>
            <ellipse cx="160" cy="30" rx="80" ry="55" fill="#90a4ae"/>
            <ellipse cx="260" cy="45" rx="65" ry="48" fill="#b0bec5"/>
            <ellipse cx="120" cy="60" rx="60" ry="40" fill="#cfd8dc"/>
          </svg>
        </motion.div>
        {/* ☀️ 太陽在雲後面（隱隱約約）*/}
        <motion.div
          animate={{ opacity:[0.3,0.35,0.35,0.3,0.3,0.3,0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '6%', fontSize: 28, zIndex: 4 }}
        >☀️</motion.div>
        {/* ① BREAK：雲層裂縫閃光 */}
        <motion.div
          animate={{ scaleX:[0,0,0,1,1,0.8,0], opacity:[0,0,0,0.9,0.7,0.4,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.54,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -3, top: '38%', width: 6, height: '55%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,235,59,0.6), transparent)', borderRadius: 3, zIndex: 8 }}
        />
        {/* ② THROUGH：光柱從雲縫穿下來 */}
        <motion.div
          animate={{ scaleY:[0,0,0,0,1,1,0], opacity:[0,0,0,0,0.85,0.75,0], originY:0 }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.52,0.68,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '40%', width: 36, bottom: '6%', background: 'linear-gradient(to bottom, rgba(255,235,59,0.7), rgba(255,235,59,0.2), transparent)', borderRadius: 18, zIndex: 7, transformOrigin: 'top center' }}
        />
        {/* 太陽完整露出 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,0.95,0.8,0], scale:[0.6,0.6,0.6,0.6,0.6,1,1,0.6] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.50,0.58,0.70,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '4%', fontSize: 28, zIndex: 9 }}
        >☀️</motion.div>
      </>}

      {/* ════ Scene C：穿透心防（話語打穿盾牌 → 穿透到對方心裡）════ */}
      {isShield && <>
        {/* 說話的人（左側）*/}
        <div style={{ position: 'absolute', left: '6%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#e65100" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#e65100"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#e65100"/>
          </svg>
        </div>
        {/* 話語泡泡（從左飛向盾牌）*/}
        <motion.div
          animate={{ x:[0,0,44,90,90,90,0], opacity:[0.9,0.9,0.9,0,0,0,0.9] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.28,0.40,0.54,0.76,0.94], ease:'easeIn' }}
          style={{ position: 'absolute', left: '20%', top: '26%', zIndex: 7, fontSize: 13, fontWeight: 700, color: '#e65100', background: 'rgba(255,224,178,0.9)', borderRadius: 8, padding: '3px 8px', border: '1.5px solid #ef6c00', whiteSpace: 'nowrap' }}
        >「聽我說」</motion.div>
        {/* 盾牌（右側人物前面）*/}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '56%', top: '22%', zIndex: 6 }}>
          <svg width="40" height="60" viewBox="0 0 40 60">
            <path d="M 20 2 L 38 12 L 38 34 Q 38 52 20 58 Q 2 52 2 34 L 2 12 Z" fill="#78909c" stroke="#37474f" strokeWidth="2"/>
            <path d="M 20 8 L 32 16 L 32 33 Q 32 46 20 52 Q 8 46 8 33 L 8 16 Z" fill="#90a4ae" stroke="#37474f" strokeWidth="1"/>
          </svg>
        </motion.div>
        {/* ① BREAK：盾牌裂縫閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.4,0,0,0], opacity:[0,0,0,0.9,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: '57%', top: '36%', width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.85), transparent 70%)', zIndex: 10 }}
        />
        {/* 盾牌碎裂（往兩側飛開）*/}
        {[{x:-20,y:-14,r:-30},{x:20,y:-10,r:30},{x:-12,y:16,r:-20},{x:18,y:18,r:25}].map((p,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0.9,0.7,0], x:[0,0,0,0,p.x,p.x+2,0], y:[0,0,0,0,p.y,p.y+2,0], rotate:[0,0,0,0,p.r,p.r+5,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.52,0.66,0.94] }}
            style={{ position: 'absolute', left: '58%', top: '34%', width: 12, height: 16, background: '#78909c', borderRadius: 3, zIndex: 9 }}
          />
        ))}
        {/* ② THROUGH：心形穿透過去（話語到達心裡）*/}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,1,0], scale:[0.3,0.3,0.3,0.3,0.3,1,1,0.3] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.52,0.62,0.76,0.94] }}
          style={{ position: 'absolute', left: '70%', top: '32%', fontSize: 22, zIndex: 8 }}
        >💛</motion.div>
        {/* 右側人物（冷漠→被打動）*/}
        <div style={{ position: 'absolute', right: '6%', top: '30%', zIndex: 5 }}>
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </div>
        {/* 🛡️ label */}
        <div style={{ position: 'absolute', left: '56%', top: '14%', fontSize: 16, zIndex: 6 }}>{obj.emoji}</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Break out  (break-burst)
// BREAK 打破邊界 + OUT 衝出來
// ─────────────────────────────────────────────────
function BreakBurstScene({ obj, meaning }) {
  const isPrison = obj.label === '牢籠';
  const isSkin   = obj.label === '皮膚';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ════ Scene A：逃脫（人在牢裡 → 打破欄杆 → 衝出去 OUT）════ */}
      {isPrison && <>
        {/* 牢房背景（左半邊）*/}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '50%', bottom: 0, background: '#e8e8e8', borderRight: '3px solid #9e9e9e' }} />
        {/* 鐵欄杆（完整狀態）*/}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '42%', top: '10%', bottom: '10%', width: 32, zIndex: 5 }}>
          <svg width="32" height="100%" viewBox="0 0 32 200" preserveAspectRatio="none">
            <rect x="0"  y="0" width="32" height="200" fill="#bdbdbd"/>
            {[20,80,140].map(y => <rect key={y} x="0" y={y} width="32" height="12" rx="4" fill="#757575"/>)}
            <rect x="2"  y="0" width="8"  height="200" rx="4" fill="#9e9e9e"/>
            <rect x="12" y="0" width="8"  height="200" rx="4" fill="#9e9e9e"/>
            <rect x="22" y="0" width="8"  height="200" rx="4" fill="#9e9e9e"/>
          </svg>
        </motion.div>
        {/* ① BREAK：欄杆裂縫閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,2.4,0,0,0], opacity:[0,0,0,1,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: 'calc(42% + 4px)', top: '44%', width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.9), transparent 70%)', zIndex: 9 }}
        />
        {/* ② 欄杆斷開往兩側飛開 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,1,0.7,0], x:[0,0,0,0,-26,-28,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.52,0.66,0.94] }}
          style={{ position: 'absolute', left: '42%', top: '10%', bottom: '10%', width: 14, zIndex: 6 }}>
          <svg width="14" height="100%" viewBox="0 0 14 200" preserveAspectRatio="none">
            <rect x="2" y="0" width="8" height="200" rx="4" fill="#757575"/>
          </svg>
        </motion.div>
        <motion.div
          animate={{ opacity:[0,0,0,0,1,0.7,0], x:[0,0,0,0,26,28,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.52,0.66,0.94] }}
          style={{ position: 'absolute', left: 'calc(42% + 18px)', top: '10%', bottom: '10%', width: 14, zIndex: 6 }}>
          <svg width="14" height="100%" viewBox="0 0 14 200" preserveAspectRatio="none">
            <rect x="2" y="0" width="8" height="200" rx="4" fill="#757575"/>
          </svg>
        </motion.div>
        {/* 🔒 */}
        <motion.div
          animate={{ opacity:[1,1,1,0,0,0,1] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '44%', top: '12%', fontSize: 16, zIndex: 7 }}
        >{obj.emoji}</motion.div>
        {/* 人（牢裡，等待）*/}
        <motion.div
          animate={{ x:[0,0,4,4,4,4,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.24,0.34,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: 'calc(42% - 48px)', top: '30%', zIndex: 8 }}>
          <motion.div animate={{ y:[0,-3,0,-3,0] }} transition={{ duration: 0.50, repeat: Infinity }}>
            <svg width="40" height="54" viewBox="0 0 40 54">
              <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
              <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
              <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
              <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
            </svg>
          </motion.div>
        </motion.div>
        {/* ③ OUT：人衝出去往右跑 */}
        <motion.div
          animate={{ opacity:[0,0,0,0,0,1,0.8,0], x:[0,0,0,0,0,80,100,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.34,0.42,0.50,0.60,0.72,0.94], ease:'easeOut' }}
          style={{ position: 'absolute', left: 'calc(42% - 48px)', top: '30%', zIndex: 10 }}>
          {/* 速度軌跡（紅色，破壞感）*/}
          <div style={{ position: 'absolute', right: '100%', top: '40%', width: 36, height: 8, background: 'linear-gradient(90deg, transparent, #ef9a9a)', borderRadius: 4 }} />
          <svg width="40" height="54" viewBox="0 0 40 54">
            <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
            <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
            <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
            <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
          </svg>
        </motion.div>
      </>}

      {/* ════ Scene B：火勢爆發（窗戶裂開 → 火衝出去 OUT）════ */}
      {!isPrison && !isSkin && <>
        {/* 房子輪廓 */}
        <div style={{ position: 'absolute', left: '10%', top: '20%', zIndex: 4 }}>
          <svg width="80" height="90" viewBox="0 0 80 90">
            <polygon points="40,4 76,36 4,36" fill="#8d6e63" stroke="#5d4037" strokeWidth="2"/>
            <rect x="8" y="36" width="64" height="54" rx="2" fill="#bcaaa4" stroke="#5d4037" strokeWidth="2"/>
            {/* 窗戶（先正常，之後裂縫）*/}
            <rect x="18" y="46" width="22" height="18" rx="3" fill="#b3e5fc" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="44" y="46" width="22" height="18" rx="3" fill="#b3e5fc" stroke="#5d4037" strokeWidth="1.5"/>
            <rect x="30" y="64" width="20" height="26" rx="2" fill="#795548" stroke="#5d4037" strokeWidth="1.5"/>
          </svg>
        </div>
        {/* 室內小火苗（BREAK 前，在窗戶裡）*/}
        <motion.div
          animate={{ scale:[1,1.1,1,0,0,0,1], opacity:[0.8,0.9,0.8,0,0,0,0.8] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '20%', top: '38%', fontSize: 20, zIndex: 5 }}
        >🔥</motion.div>
        {/* ① BREAK：窗戶爆裂閃光 */}
        <motion.div
          animate={{ scale:[0,0,0,3,0,0,0], opacity:[0,0,0,0.95,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: '22%', top: '38%', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,152,0,0.95), rgba(229,57,53,0.7), transparent 70%)', zIndex: 9 }}
        />
        {/* ② OUT：火焰衝出窗戶往右蔓延 */}
        {[{x:60,y:0,size:28,delay:0},{x:98,y:-10,size:22,delay:0.06},{x:136,y:4,size:18,delay:0.12},{x:168,y:-6,size:15,delay:0.18}].map((f,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,1,0.9,0], x:[0,0,0,0,0,f.x,f.x,0], y:[0,0,0,0,0,f.y,f.y,0], scale:[0,0,0,0,0,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.50,0.60,0.74,0.94], delay: f.delay }}
            style={{ position: 'absolute', left: '18%', top: '36%', fontSize: f.size, zIndex: 7 }}
          >🔥</motion.div>
        ))}
        {/* 🔥 label */}
        <div style={{ position: 'absolute', left: '10%', top: '12%', fontSize: 18, zIndex: 5 }}>{obj.emoji}</div>
      </>}

      {/* ════ Scene C：長痘（皮膚下 → 打破表面 → 冒出來 OUT）════ */}
      {isSkin && <>
        {/* 臉輪廓 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -40, top: '12%', zIndex: 4 }}>
          <svg width="80" height="90" viewBox="0 0 80 90">
            <ellipse cx="40" cy="44" rx="36" ry="40" fill="#FDBCB4" stroke="#E59866" strokeWidth="2"/>
            {/* 眼睛 */}
            <ellipse cx="26" cy="36" rx="5" ry="6" fill="white" stroke="#424242" strokeWidth="1"/>
            <ellipse cx="54" cy="36" rx="5" ry="6" fill="white" stroke="#424242" strokeWidth="1"/>
            <circle cx="27" cy="37" r="3" fill="#424242"/>
            <circle cx="55" cy="37" r="3" fill="#424242"/>
            {/* 嘴（正常→難受）*/}
            <path d="M 26 60 Q 40 66 54 60" stroke="#e65100" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        {/* 皮膚下的紅腫點（BREAK 前，在皮膚表面之下，稍淡）*/}
        <motion.div
          animate={{ opacity:[0.4,0.5,0.5,0,0,0,0.4] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.62,0.78,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -36, top: '20%', zIndex: 5 }}>
          {[{x:8,y:32},{x:28,y:20},{x:50,y:28},{x:38,y:44}].map((p,i) => (
            <div key={i} style={{ position: 'absolute', left: p.x, top: p.y, width: 12, height: 12, borderRadius: '50%', background: 'rgba(229,57,53,0.35)' }}/>
          ))}
        </motion.div>
        {/* ① BREAK：皮膚表面衝擊波 */}
        <motion.div
          animate={{ scale:[0,0,0,2.2,0,0,0], opacity:[0,0,0,0.8,0,0,0] }}
          transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.48,0.58,0.94] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '26%', width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle, rgba(229,57,53,0.8), transparent 70%)', zIndex: 9 }}
        />
        {/* ② OUT：紅點從皮膚裡面冒出來（往外彈）*/}
        {[{x:-28,y:-8},{x:-6,y:-18},{x:18,y:-10},{x:6,y:8}].map((p,i) => (
          <motion.div key={i}
            animate={{ opacity:[0,0,0,0,0,1,1,0], x:[0,0,0,0,0,p.x*0.5,p.x*0.5,0], y:[0,0,0,0,0,p.y*0.5,p.y*0.5,0], scale:[0,0,0,0,0,1,1,0] }}
            transition={{ duration: 5, repeat: Infinity, times:[0,0.08,0.32,0.40,0.50,0.60,0.74,0.94], delay: i*0.04 }}
            style={{ position: 'absolute', left: '50%', marginLeft: -34+i*16, top: '34%', width: 14, height: 14, borderRadius: '50%', background: '#e53935', border: '2px solid #b71c1c', zIndex: 8 }}
          />
        ))}
        {/* 😣 */}
        <div style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '8%', fontSize: 18, zIndex: 5 }}>{obj.emoji}</div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Sign up / in / out / off  (sign-*)
// SIGN（簽名）+ 方向 = 簽名加入名單 / 進系統 / 離開系統 / 簽核放行
// 共用一個簽名動作，再依方向給不同結果
// ─────────────────────────────────────────────────
function SignScene({ obj }) {
  const dur = 4.5;
  const kind = obj.label; // 報名 / 登入 / 登出 / 簽核
  // 流程：① 簽名 ② 名牌🪪冒出 ③ 名牌往 particle 方向跑 ④ 變成那個意思
  const T = [0, 0.16, 0.30, 0.58, 0.78, 0.92, 1];

  const cfg = {
    報名: { particle: 'UP',  pcolor: '#2e7d32', meaning: '報名' },
    登入: { particle: 'IN',  pcolor: '#1565c0', meaning: '登入' },
    登出: { particle: 'OUT', pcolor: '#e65100', meaning: '登出' },
    簽核: { particle: 'OFF', pcolor: '#6a1b9a', meaning: '放行' },
  }[kind];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 上方公式：SIGN ＋ particle ＝ 意思（說明為什麼合起來變這個意思）── */}
      <div style={{ position: 'absolute', top: '6%', left: '50%', transform: 'translateX(-50%)', fontSize: 14, fontWeight: 900, zIndex: 9, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ color: '#1a237e' }}>SIGN</span>
        <span style={{ color: '#bbb' }}>＋</span>
        <motion.span
          animate={{ scale: [1, 1, 1.3, 1.3, 1, 1, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ color: cfg.pcolor }}>{cfg.particle}</motion.span>
        <span style={{ color: '#bbb' }}>＝</span>
        <motion.span
          animate={{ opacity: [0.3, 0.3, 0.3, 0.3, 1, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ color: cfg.pcolor }}>{cfg.meaning}</motion.span>
      </div>

      {/* ── ① 簽名區（動詞 SIGN：寫名字）── */}
      <div style={{ position: 'absolute', left: '10%', top: '52%', width: 56, height: 1.5, background: '#ddd', zIndex: 3 }} />
      <motion.div
        animate={{ scaleX: [0, 1, 1, 1, 1, 1, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '10%', top: '46%', width: 52, height: 7, background: 'repeating-linear-gradient(90deg,#1a237e 0 3px,transparent 3px 6px)', borderRadius: 2, transformOrigin: 'left', zIndex: 4 }}
      />
      <motion.div
        animate={{ left: ['9%', '20%', '20%', '20%', '20%', '20%', '9%'], opacity: [1, 1, 1, 0, 0, 0, 1] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '40%', fontSize: 20, zIndex: 6 }}>
        ✍️
      </motion.div>

      {/* ── ② 名牌🪪 從簽名處冒出來（這就是「你簽下的名字」這個 token）── */}
      {/* ── ③ 名牌往 particle 方向跑 ④ 落點變成意思（每個分支不同）── */}

      {/* ════ 報名：🪪 往「上 ↑」貼到名單 📋 ════ */}
      {kind === '報名' && <>
        <div style={{ position: 'absolute', left: '54%', top: '22%', marginLeft: -30, width: 60, height: 64, background: '#fff', border: '2.5px solid #43a047', borderRadius: 6, zIndex: 4 }}>
          <div style={{ textAlign: 'center', fontSize: 16, marginTop: 2 }}>📋</div>
          {[0, 1].map(i => <div key={i} style={{ height: 5, margin: '5px 7px 0', background: '#c8e6c9', borderRadius: 3 }} />)}
        </div>
        <motion.div
          animate={{
            left: ['16%', '16%', '20%', '50%', '52%', '52%', '16%'],
            top:  ['50%', '50%', '50%', '30%', '30%', '30%', '50%'],
            opacity: [0, 0, 1, 1, 1, 1, 0],
            scale: [0.5, 0.5, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', fontSize: 26, zIndex: 7 }}>
          🪪
        </motion.div>
        {/* 往上的大箭頭 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0], y: [10, 10, 0, -10, -10, -10, 10] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '34%', top: '40%', fontSize: 22, fontWeight: 900, color: '#2e7d32', zIndex: 8 }}>
          ↑
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 0.3, 1.4, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '66%', top: '24%', fontSize: 18, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          簽名(SIGN) → 名字往「上(UP)」貼到名單 → 報名加入
        </div>
      </>}

      {/* ════ 登入：🪪 往右「進到 IN」系統框裡，框亮起 ════ */}
      {kind === '登入' && <>
        {/* 系統框 */}
        <motion.div
          animate={{ borderColor: ['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd', '#1565c0', '#1565c0', '#bdbdbd'], boxShadow: ['none', 'none', 'none', 'none', '0 0 12px #64b5f6', '0 0 12px #64b5f6', 'none'] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', right: '12%', top: '30%', width: 78, height: 58, background: '#fff', border: '2.5px solid #bdbdbd', borderRadius: 8, zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
          💻
        </motion.div>
        {/* 名牌從簽名處往右進入框內 */}
        <motion.div
          animate={{
            left: ['16%', '16%', '22%', '64%', '70%', '70%', '16%'],
            top:  ['50%', '50%', '48%', '40%', '40%', '40%', '50%'],
            opacity: [0, 0, 1, 1, 0, 0, 0],
            scale: [0.5, 0.5, 1, 0.9, 0.6, 0.6, 0.5],
          }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
          style={{ position: 'absolute', fontSize: 26, zIndex: 7 }}>
          🪪
        </motion.div>
        <div style={{ position: 'absolute', left: '46%', top: '34%', fontSize: 22, fontWeight: 900, color: '#1565c0', zIndex: 8 }}>→]</div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', right: '14%', top: '22%', fontSize: 20, zIndex: 8 }}>
          🔓
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          簽名(SIGN) → 名字往「裡面(IN)」進系統 → 登入
        </div>
      </>}

      {/* ════ 登出：🪪 從系統框裡往右「出來 OUT」，框暗掉（和登入相反）════ */}
      {kind === '登出' && <>
        <motion.div
          animate={{ borderColor: ['#1565c0', '#1565c0', '#1565c0', '#bdbdbd', '#bdbdbd', '#bdbdbd', '#1565c0'], boxShadow: ['0 0 12px #64b5f6', '0 0 12px #64b5f6', '0 0 12px #64b5f6', 'none', 'none', 'none', '0 0 12px #64b5f6'] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '14%', top: '30%', width: 78, height: 58, background: '#fff', border: '2.5px solid #1565c0', borderRadius: 8, zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
          💻
        </motion.div>
        {/* 名牌從框內往右跑出去 */}
        <motion.div
          animate={{
            left: ['24%', '24%', '26%', '64%', '84%', '84%', '24%'],
            top:  ['40%', '40%', '40%', '44%', '44%', '44%', '40%'],
            opacity: [0, 0, 1, 1, 1, 0, 0],
            scale: [0.6, 0.6, 0.9, 1, 1, 0.6, 0.6],
          }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
          style={{ position: 'absolute', fontSize: 26, zIndex: 7 }}>
          🪪
        </motion.div>
        <div style={{ position: 'absolute', left: '50%', top: '34%', fontSize: 22, fontWeight: 900, color: '#e65100', zIndex: 8 }}>]→</div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '18%', top: '22%', fontSize: 20, zIndex: 8 }}>
          🔒
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          簽名(SIGN) → 名字往「外面(OUT)」離開系統 → 登出
        </div>
      </>}

      {/* ════ 簽核：🪪 往「下 ↓ 蓋 OFF」到文件上 → 放行 ════ */}
      {kind === '簽核' && <>
        <div style={{ position: 'absolute', left: '54%', top: '46%', marginLeft: -24, width: 48, height: 56, background: '#fff', border: '2px solid #bdbdbd', borderRadius: 4, zIndex: 4 }}>
          <div style={{ height: 4, margin: '9px 7px 0', background: '#eee' }} />
          <div style={{ height: 4, margin: '5px 7px 0', background: '#eee' }} />
          <div style={{ height: 4, margin: '5px 7px 0', background: '#eee' }} />
        </div>
        {/* 名牌從簽名處往右上拿起，再往下蓋章 */}
        <motion.div
          animate={{
            left: ['16%', '16%', '22%', '52%', '52%', '52%', '16%'],
            top:  ['50%', '50%', '46%', '20%', '46%', '46%', '50%'],
            opacity: [0, 0, 1, 1, 1, 1, 0],
            scale: [0.5, 0.5, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
          style={{ position: 'absolute', fontSize: 26, zIndex: 7 }}>
          🪪
        </motion.div>
        <div style={{ position: 'absolute', left: '40%', top: '34%', fontSize: 22, fontWeight: 900, color: '#6a1b9a', zIndex: 8 }}>↓</div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 0.3, 1.5, 1.1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '52%', top: '50%', marginLeft: -14, fontSize: 26, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          簽名(SIGN) → 往「下蓋(OFF)」在文件上 → 簽核放行
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Blow up  (blow-up)
// BLOW（氣）+ UP（往上膨脹炸開）= 壓力累積一口氣炸開 / 暴怒 / 爆紅
// ─────────────────────────────────────────────────
function BlowUpScene({ obj }) {
  const dur = 4;
  const isBomb = obj.label === '爆炸';
  const isAnger = obj.label === '暴怒';
  // 累積 → 炸開 ≈ 0.55
  const T = [0, 0.3, 0.5, 0.58, 0.8, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 爆炸：💣 引信 → 💥 ── */}
      {isBomb && <>
        <motion.div
          animate={{ scale: [1, 1.15, 1.3, 0, 0, 1], opacity: [1, 1, 1, 0, 0, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
          style={{ position: 'absolute', left: '42%', top: '38%', fontSize: 42, zIndex: 5 }}>
          💣
        </motion.div>
      </>}

      {/* ── 暴怒：人 + 頭頂蒸汽 → 😡 → 💥 ── */}
      {isAnger && <>
        <div style={{ position: 'absolute', left: '44%', top: '44%', zIndex: 5 }}><StandPerson color="#c62828" /></div>
        <motion.div
          animate={{ scale: [0.6, 1, 1.3, 0, 0, 0.6], opacity: [0, 1, 1, 0, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '45%', top: '30%', fontSize: 26, zIndex: 7 }}>
          😡
        </motion.div>
        {[0, 1].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 0.8, 1, 0, 0, 0], y: [0, -8, -14, 0, 0, 0] }}
            transition={{ duration: dur, repeat: Infinity, times: T, delay: i * 0.15 }}
            style={{ position: 'absolute', left: `${42 + i * 8}%`, top: '32%', fontSize: 14, zIndex: 6 }}>
            💨
          </motion.div>
        ))}
      </>}

      {/* ── 爆紅：📱 + 數字往上飆 → 🔥🚀 ── */}
      {!isBomb && !isAnger && <>
        <div style={{ position: 'absolute', left: '20%', top: '38%', fontSize: 34, zIndex: 5 }}>📱</div>
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 1, 1, 0], y: [0, -30 - i * 6, -50 - i * 10, -60], scale: [0.6, 1, 1.1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: 'easeOut' }}
            style={{ position: 'absolute', left: `${30 + i * 6}%`, top: '40%', fontSize: 14, fontWeight: 900, color: '#e53935', zIndex: 6 }}>
            +1M
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 1, 0], scale: [0.3, 0.3, 1.3, 1.1, 1.1, 0.3], y: [0, 0, -6, -6, -6, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '52%', top: '24%', fontSize: 34, zIndex: 8 }}>
          🔥
        </motion.div>
      </>}

      {/* ── 💥 大爆炸（爆炸 / 暴怒共用） ── */}
      {(isBomb || isAnger) && (
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 0, 0], scale: [0.2, 0.2, 0.2, 1.8, 2.4, 0.2] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
          style={{ position: 'absolute', left: '50%', top: '34%', marginLeft: -30, fontSize: 60, zIndex: 9 }}>
          💥
        </motion.div>
      )}

      <div style={{ position: 'absolute', left: '50%', top: '8%', transform: 'translateX(-50%)', fontSize: 11, fontWeight: 900, color: '#c62828', zIndex: 9 }}>UP ↑ 炸開</div>
      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isBomb ? 'BLOW + UP = 壓力累積 → 砰一聲炸開'
          : isAnger ? 'BLOW + UP = 情緒膨脹到爆 → 突然抓狂'
          : 'BLOW + UP = 知名度爆炸式衝上去 → 爆紅'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Blow off  (blow-off)
// BLOW（吹）+ OFF（吹離開）= 把約定吹掉不去 / 把壓力吹出去發洩
// ─────────────────────────────────────────────────
function BlowOffScene({ obj }) {
  const dur = 4.5;
  const isSkip = obj.label === '放鴿子';
  const T = [0, 0.3, 0.5, 0.7, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 放鴿子：📅 約定被一吹就飛走 ── */}
      {isSkip && <>
        {/* 翹掉的人 😎 */}
        <div style={{ position: 'absolute', left: '12%', top: '36%', fontSize: 32, zIndex: 6 }}>😎</div>
        {/* 一陣風 */}
        <motion.div
          animate={{ opacity: [0, 1, 1, 0, 0], x: [0, 20, 40, 60, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '24%', top: '34%', fontSize: 22, zIndex: 7 }}>
          💨
        </motion.div>
        {/* 約定 📅 被吹飛走 */}
        <motion.div
          animate={{ x: [0, 0, 40, 110, 0], y: [0, 0, -10, -30, 0], rotate: [0, 0, 30, 90, 0], opacity: [1, 1, 1, 0, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
          style={{ position: 'absolute', left: '44%', top: '38%', fontSize: 30, zIndex: 5 }}>
          📅
        </motion.div>
        <div style={{ position: 'absolute', right: '12%', top: '20%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OFF →→</div>
        {/* 被放鴿子的人 😞 */}
        <div style={{ position: 'absolute', right: '10%', top: '50%', fontSize: 22, zIndex: 6 }}>😞</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          BLOW + OFF = 把約好的事一吹就掉 → 翹掉、放鴿子
        </div>
      </>}

      {/* ── 發洩：壓力像蒸汽吹出去 → 輕鬆 ── */}
      {!isSkip && <>
        {/* 人：先憋著 😤 → 吐氣 😌 */}
        <div style={{ position: 'absolute', left: '34%', top: '40%', zIndex: 5 }}><StandPerson color="#1565c0" /></div>
        <motion.div
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '35%', top: '30%', fontSize: 22, zIndex: 7 }}>
          😤
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '35%', top: '30%', fontSize: 22, zIndex: 7 }}>
          😌
        </motion.div>
        {/* 壓力蒸汽往外吹出 */}
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 0, 1, 0, 0], x: [0, 0, 30 + i * 12, 60 + i * 16, 0], y: [0, 0, -6 - i * 4, -12 - i * 6, 0], scale: [0.5, 0.5, 1.2, 1.5, 0.5] }}
            transition={{ duration: dur, repeat: Infinity, times: T, delay: i * 0.1 }}
            style={{ position: 'absolute', left: '44%', top: '32%', fontSize: 18, zIndex: 6 }}>
            💨
          </motion.div>
        ))}
        <div style={{ position: 'absolute', right: '14%', top: '22%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OFF →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          BLOW + OFF = 把累積的壓力吹出去 → 發洩一下
        </div>
      </>}
    </div>
  );
}

// 共用：站立的人
function StandPerson({ color = '#1a237e' }) {
  return (
    <svg width="30" height="48" viewBox="0 0 30 48">
      <circle cx="15" cy="7" r="6" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
      <line x1="15" y1="13" x2="15" y2="30" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="15" y1="17" x2="5"  y2="23" stroke={color} strokeWidth="2.3" strokeLinecap="round"/>
      <line x1="15" y1="17" x2="25" y2="23" stroke={color} strokeWidth="2.3" strokeLinecap="round"/>
      <line x1="15" y1="30" x2="22" y2="44" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="15" y1="30" x2="8"  y2="44" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────
// Stand out  (stand-out)
// STAND（站）+ OUT（突出來）= 站得比別人高、特別顯眼
// ─────────────────────────────────────────────────
function StandOutScene({ obj }) {
  const dur = 4.5;
  const T = [0, 0.3, 0.5, 0.8, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: '6%', right: '6%', top: '70%', height: 3, background: '#e0e0e0', zIndex: 2 }} />

      {/* 一排普通人（灰、矮） */}
      {[0, 1, 3, 4].map(i => (
        <div key={i} style={{ position: 'absolute', left: `${14 + i * 16}%`, top: '40%', transform: 'scale(0.85)', opacity: 0.45, zIndex: 4 }}>
          <StandPerson color="#9e9e9e" />
        </div>
      ))}

      {/* 你：站得更高、發光、🌟 */}
      <motion.div
        animate={{ y: [0, 0, -14, -14, 0], scale: [0.85, 0.85, 1.35, 1.35, 0.85] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: `${14 + 2 * 16}%`, top: '40%', transformOrigin: 'bottom', zIndex: 6 }}>
        <StandPerson color="#1565c0" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 0.7, 0.7, 0], scale: [0.8, 0.8, 1.2, 1.2, 0.8] }}
        transition={{ duration: dur, repeat: Infinity, times: T }}
        style={{ position: 'absolute', left: '44%', top: '30%', width: 52, height: 64, marginLeft: -10, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,213,79,0.5), transparent 70%)', zIndex: 5 }}
      />
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -4, -4, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T }}
        style={{ position: 'absolute', left: '47%', top: '22%', fontSize: 22, zIndex: 8 }}>
        🌟
      </motion.div>
      <div style={{ position: 'absolute', left: '58%', top: '30%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OUT ↑</div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        STAND + OUT = 站得比別人高 → 在人群中特別顯眼
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Stand up  (stand-up)
// STAND（站）+ UP（往上立起）= 站起來 / 被放鴿子空等 / 論點站得穩
// ─────────────────────────────────────────────────
function StandUpScene({ obj }) {
  const dur = 4.5;
  const isRise = obj.label === '站起來';
  const isStood = obj.label === '被放鴿子';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 站起來：坐 → 立起來 ── */}
      {isRise && <>
        <div style={{ position: 'absolute', left: '50%', top: '60%', width: 60, height: 4, marginLeft: -30, background: '#e0e0e0', zIndex: 2 }} />
        <motion.div
          animate={{ y: [16, 16, 0, 0, 16], scaleY: [0.7, 0.7, 1, 1, 0.7] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '50%', top: '30%', marginLeft: -15, transformOrigin: 'bottom', zIndex: 6 }}>
          <StandPerson color="#1565c0" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -6, -6, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
          style={{ position: 'absolute', left: '62%', top: '28%', fontSize: 13, fontWeight: 900, color: '#2e7d32', zIndex: 8 }}>
          ↑ UP
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + UP = 身體立起來 → 站起來
        </div>
      </>}

      {/* ── 被放鴿子：你站著空等，對方沒來 ── */}
      {isStood && <>
        {/* 你站著等 */}
        <div style={{ position: 'absolute', left: '20%', top: '34%', zIndex: 6 }}><StandPerson color="#1565c0" /></div>
        {/* 🕐 時間一直過 */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', left: '22%', top: '24%', fontSize: 18, zIndex: 7 }}>
          🕐
        </motion.div>
        {/* 空位（對方該來卻沒來） */}
        <div style={{ position: 'absolute', right: '22%', top: '40%', fontSize: 30, zIndex: 4 }}>🪑</div>
        <motion.div
          animate={{ opacity: [0, 0.4, 0, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
          style={{ position: 'absolute', right: '20%', top: '34%', fontSize: 28, zIndex: 5 }}>
          👤
        </motion.div>
        {/* 😞 + 「放鴿子」 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }}
          style={{ position: 'absolute', left: '24%', top: '24%', fontSize: 18, zIndex: 8 }}>
          😞
        </motion.div>
        <div style={{ position: 'absolute', right: '20%', top: '26%', fontSize: 20, zIndex: 8 }}>🕊️</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + UP = 讓你站著空等、人沒出現 → 被放鴿子
        </div>
      </>}

      {/* ── 站得住腳：論點被推也不倒 ── */}
      {!isRise && !isStood && <>
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '64%', height: 3, background: '#e0e0e0', zIndex: 2 }} />
        {/* 論點柱子 ⚖️ */}
        <motion.div
          animate={{ rotate: [0, -8, 4, -6, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.25, 0.4, 0.55, 0.7, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '44%', top: '32%', fontSize: 44, zIndex: 5, transformOrigin: 'bottom center' }}>
          🏛️
        </motion.div>
        {/* 質疑的箭頭撞上來 */}
        {[0, 1].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 1, 1, 0, 0, 0], x: [40, 10, 0, 0, 0, 40] }}
            transition={{ duration: dur, repeat: Infinity, times: [0, 0.2, 0.3, 0.4, 0.7, 1], delay: i * 0.15 }}
            style={{ position: 'absolute', left: `${64 - i * 4}%`, top: `${34 + i * 8}%`, fontSize: 18, zIndex: 6 }}>
            👊
          </motion.div>
        ))}
        {/* ✅ 站穩 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 1.4, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.6, 0.72, 0.88, 1], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '46%', top: '20%', fontSize: 24, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + UP = 被質疑也不倒 → 論點站得住腳
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Stand for  (stand-for)
// STAND（站）+ FOR（代表/支撐）= 站在背後代表某意思 / 撐著忍受
// ─────────────────────────────────────────────────
function StandForScene({ obj }) {
  const dur = 4.5;
  const isRepresent = obj.label === '代表';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 代表/縮寫：API = 完整意思 ── */}
      {isRepresent && <>
        <div style={{ position: 'absolute', left: '14%', top: '38%', padding: '8px 14px', background: '#1565c0', color: '#fff', fontSize: 22, fontWeight: 900, borderRadius: 8, zIndex: 5 }}>API</div>
        <motion.div
          animate={{ opacity: [0, 1, 1, 1, 0], x: [0, 6, 6, 6, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1] }}
          style={{ position: 'absolute', left: '38%', top: '40%', fontSize: 22, fontWeight: 900, color: '#757575', zIndex: 6 }}>
          =
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.6, 0.6, 1, 1, 0.6] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '48%', top: '36%', fontSize: 12, fontWeight: 700, color: '#1a237e', zIndex: 6, lineHeight: 1.4 }}>
          Application<br/>Programming<br/>Interface
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + FOR = 這個縮寫「代表」完整的意思
        </div>
      </>}

      {/* ── 容忍（不爽就不忍）：擋下來、拒絕 ── */}
      {!isRepresent && <>
        <div style={{ position: 'absolute', left: '18%', top: '32%', zIndex: 6 }}><StandPerson color="#c62828" /></div>
        {/* 舉手擋 ✋ */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '30%', top: '34%', fontSize: 26, zIndex: 7 }}>
          ✋
        </motion.div>
        {/* 討厭的東西衝過來被擋下 */}
        {[0, 1].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 1, 1, 0, 0], x: [40, 6, 0, -4, 40] }}
            transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.45, 0.55, 1], delay: i * 0.2 }}
            style={{ position: 'absolute', left: `${56 - i * 4}%`, top: `${32 + i * 8}%`, fontSize: 18, zIndex: 5 }}>
            💢
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.55, 0.8, 1], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '40%', top: '22%', fontSize: 26, zIndex: 8 }}>
          🚫
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + FOR = 站出來擋下 → 我不容忍這種事
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Stand by  (stand-by)
// STAND（站）+ BY（在旁邊）= 站在旁邊待命 / 站在你這邊挺你
// ─────────────────────────────────────────────────
function StandByScene({ obj }) {
  const dur = 4.5;
  const isReady = obj.label === '待命';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 待命：站旁邊，🟢 燈閃，隨時上 ── */}
      {isReady && <>
        <div style={{ position: 'absolute', left: '38%', top: '34%', zIndex: 6 }}><StandPerson color="#1565c0" /></div>
        {/* 待命綠燈閃爍 */}
        <motion.div
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '50%', top: '30%', fontSize: 20, zIndex: 7 }}>
          🟢
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '54%', top: '32%', fontSize: 11, fontWeight: 900, color: '#2e7d32', zIndex: 8 }}>
          READY
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + BY = 站在旁邊隨時準備上場 → 待命
        </div>
      </>}

      {/* ── 挺你：站你旁邊，批評也不離開 ── */}
      {!isReady && <>
        <div style={{ position: 'absolute', left: '34%', top: '34%', zIndex: 6 }}><StandPerson color="#1565c0" /></div>
        <div style={{ position: 'absolute', left: '46%', top: '34%', zIndex: 6 }}><StandPerson color="#6a1b9a" /></div>
        {/* 🤝 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '43%', top: '40%', fontSize: 20, zIndex: 7 }}>
          🤝
        </motion.div>
        {/* 批評箭頭飛來被彈開 */}
        {[0, 1].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 1, 1, 0, 0], x: [40, 8, 0, -6, 40] }}
            transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.45, 0.55, 1], delay: i * 0.25 }}
            style={{ position: 'absolute', left: `${62 - i * 4}%`, top: `${30 + i * 9}%`, fontSize: 16, zIndex: 5 }}>
            💬❌
          </motion.div>
        ))}
        {/* ❤️ 不離不棄 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -8, -8, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.55, 0.8, 1] }}
          style={{ position: 'absolute', left: '40%', top: '22%', fontSize: 20, zIndex: 8 }}>
          ❤️
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          STAND + BY = 站你旁邊不離開 → 不管怎樣都挺你
        </div>
      </>}
    </div>
  );
}

// 共用：丟東西的人（手舉高作勢扔出）
function Thrower({ color = '#1a237e', flip = false }) {
  return (
    <svg width="40" height="54" viewBox="0 0 40 54" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
      <line x1="20" y1="14" x2="20" y2="33" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      {/* 後手 */}
      <line x1="20" y1="18" x2="8"  y2="24" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      {/* 扔出去的手（高舉朝前） */}
      <line x1="20" y1="18" x2="36" y2="6"  stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="28" y2="48" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="12" y2="48" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────
// Throw away  (throw-away)
// THROW（扔）+ AWAY（往遠方離開）= 把東西扔到遠遠的，不要了 / 白白浪費
// ─────────────────────────────────────────────────
function ThrowAwayScene({ obj }) {
  const dur = 4.5;
  const isWaste = obj.label === '好機會';
  // 扔出 → 飛大弧線 → 遠方消失
  const T = [0, 0.22, 0.36, 0.56, 0.78, 0.96];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* 扔東西的人 */}
      <div style={{ position: 'absolute', left: '8%', top: '40%', zIndex: 5 }}><Thrower /></div>

      {/* 垃圾桶（丟掉時放遠方） */}
      {!isWaste && <div style={{ position: 'absolute', right: '6%', top: '46%', fontSize: 34, zIndex: 4 }}>🗑️</div>}

      {/* 飛出去的東西：大弧線飛到遠方 + 縮小消失 */}
      <motion.div
        animate={{
          left: ['18%', '30%', '46%', '66%', '84%', '18%'],
          top:  ['38%', '16%', '12%', '26%', '46%', '38%'],
          scale: [1, 1, 0.85, 0.6, 0.3, 1],
          opacity: [1, 1, 1, 1, 0, 0],
          rotate: [0, 180, 360, 540, 720, 0],
        }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeIn' }}
        style={{ position: 'absolute', fontSize: 26, zIndex: 6 }}>
        {obj.emoji}
      </motion.div>

      {/* AWAY →→ */}
      <div style={{ position: 'absolute', left: '46%', top: '6%', fontSize: 11, fontWeight: 900, color: '#c62828', zIndex: 8 }}>AWAY →→</div>

      {/* 浪費：💸 + 😢 可惜 */}
      {isWaste && <>
        <motion.div
          animate={{ opacity: [0, 0, 0, 0, 1, 0], y: [0, 0, 0, 0, -12, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', right: '14%', top: '34%', fontSize: 22, zIndex: 7 }}>
          💸
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '14%', top: '30%', fontSize: 18, zIndex: 7 }}>
          😢
        </motion.div>
      </>}

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isWaste ? 'THROW + AWAY = 好機會隨手扔掉 → 白白浪費' : 'THROW + AWAY = 把不要的扔到遠方 → 丟掉'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Throw out  (throw-out)
// THROW（扔）+ OUT（往外）= 把東西／人往外扔 / 把點子拋出來討論
// ─────────────────────────────────────────────────
function ThrowOutScene({ obj }) {
  const dur = 4.5;
  const isKick = obj.label === '鬧事的人';
  const isIdea = obj.label === '點子';
  const T = [0, 0.22, 0.4, 0.6, 0.8, 0.96];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* 扔東西的人 */}
      <div style={{ position: 'absolute', left: '8%', top: '40%', zIndex: 5 }}><Thrower color={isKick ? '#c62828' : '#1a237e'} /></div>

      {/* 場景道具：垃圾桶 / 門 / 一群人 */}
      {!isKick && !isIdea && <div style={{ position: 'absolute', right: '8%', top: '46%', fontSize: 32, zIndex: 4 }}>🗑️</div>}
      {isKick && <div style={{ position: 'absolute', right: '10%', top: '34%', fontSize: 40, zIndex: 4 }}>🚪</div>}
      {isIdea && <div style={{ position: 'absolute', right: '8%', top: '40%', fontSize: 30, zIndex: 4 }}>👥</div>}

      {/* 扔出去的東西：飛到右邊「外面」 */}
      <motion.div
        animate={{
          left: ['18%', '34%', '52%', '70%', '78%', '18%'],
          top:  ['38%', '24%', '24%', '36%', '40%', '38%'],
          rotate: [0, 120, 240, 360, 360, 0],
          opacity: [1, 1, 1, 1, isIdea ? 1 : 0, isIdea ? 1 : 0],
        }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', fontSize: 26, zIndex: 6 }}>
        {obj.emoji}
      </motion.div>

      {/* OUT → */}
      <div style={{ position: 'absolute', left: '50%', top: '12%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 8 }}>OUT →</div>

      {/* 趕人：😡 / 點子：🤔💬 反應 */}
      {isKick && (
        <motion.div
          animate={{ opacity: [0, 1, 1, 1, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', left: '16%', top: '32%', fontSize: 18, zIndex: 7 }}>
          😡
        </motion.div>
      )}
      {isIdea && (
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [0, 0, 0, -10, -14, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: T }}
          style={{ position: 'absolute', right: '6%', top: '28%', fontSize: 18, zIndex: 7 }}>
          🤔💬
        </motion.div>
      )}

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isKick ? 'THROW + OUT = 把鬧事的人扔到門外 → 趕出去'
          : isIdea ? 'THROW + OUT = 把點子拋出去 → 提出來討論'
          : 'THROW + OUT = 把不要的扔出去 → 丟掉'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Throw up  (throw-up)
// THROW（噴）+ UP（往上）= 胃裡的東西往上衝出來 → 吐
// ─────────────────────────────────────────────────
function ThrowUpScene({ obj }) {
  const dur = 3.5;
  const T = [0, 0.3, 0.45, 0.6, 0.8, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* 難受 → 嘔吐的人（身體前傾抖一下） */}
      <motion.div
        animate={{ rotate: [0, -3, -10, -6, 0, 0], x: [0, -2, -4, -2, 0, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '30%', top: '34%', zIndex: 5, transformOrigin: 'bottom center' }}>
        <svg width="44" height="58" viewBox="0 0 44 58">
          {/* 身體 */}
          <line x1="22" y1="20" x2="22" y2="40" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="22" y1="24" x2="10" y2="32" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="22" y1="24" x2="34" y2="30" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="22" y1="40" x2="30" y2="54" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="22" y1="40" x2="14" y2="54" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      </motion.div>
      {/* 🤮 臉 */}
      <motion.div
        animate={{ scale: [1, 1, 1.2, 1.1, 1, 1] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '30%', top: '24%', fontSize: 26, zIndex: 7 }}>
        🤮
      </motion.div>

      {/* 往上噴出來的東西（綠色顆粒，往上衝再灑落） */}
      {[0, 1, 2, 3].map(i => (
        <motion.div key={i}
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            x: [0, 0, 6 + i * 6, 14 + i * 10, 18 + i * 12, 0],
            y: [0, 0, -10, -24, -6, 0],
            scale: [0.4, 0.4, 1, 1, 0.6, 0.4],
          }}
          transition={{ duration: dur, repeat: Infinity, times: T, delay: i * 0.05, ease: 'easeOut' }}
          style={{ position: 'absolute', left: '40%', top: '28%', fontSize: 12, zIndex: 8 }}>
          🟢
        </motion.div>
      ))}
      {/* UP ↑ */}
      <div style={{ position: 'absolute', left: '56%', top: '18%', fontSize: 11, fontWeight: 900, color: '#2e7d32', zIndex: 9 }}>↑ UP</div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        THROW + UP = 胃裡的東西往上噴出來 → 吐了
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Point out  (point-out)
// POINT（用手指指）+ OUT（指出來）= 把一堆裡的重點/問題指出來，提醒大家
// ─────────────────────────────────────────────────
function PointOutScene({ obj }) {
  const dur = 4.5;
  // 手指指到的瞬間 ≈ 0.45
  const T = [0, 0.30, 0.45, 0.58, 0.82, 0.96];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 一排東西，中間那個是「重點/問題」── */}
      {[0, 1, 2].map(i => {
        const isTarget = i === 1;
        return (
          <motion.div key={i}
            animate={isTarget ? { scale: [1, 1, 1.35, 1.25, 1.25, 1] } : { scale: [1, 1, 0.9, 0.9, 0.9, 1], opacity: [1, 1, 0.5, 0.5, 0.5, 1] }}
            transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
            style={{ position: 'absolute', left: `${36 + i * 13}%`, top: '38%', fontSize: 30, zIndex: isTarget ? 6 : 4 }}>
            📄
          </motion.div>
        );
      })}

      {/* ── 紅圈圈住重點 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 1, 0], scale: [1.6, 1.6, 1.1, 1, 1, 1.6] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '49%', top: '36%', width: 42, height: 42, marginLeft: -21, borderRadius: '50%', border: '3px solid #e53935', zIndex: 7 }}
      />

      {/* ── 👉 手指從左下指過來，停在重點上 ── */}
      <motion.div
        animate={{ left: ['18%', '40%', '44%', '44%', '44%', '18%'], opacity: [0, 1, 1, 1, 1, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', top: '48%', fontSize: 30, zIndex: 8 }}>
        👉
      </motion.div>

      {/* ── ❗ 重點從上方彈出 + OUT ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 1.5, 1.1, 0.3], y: [0, 0, 0, -10, -10, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '50%', top: '20%', marginLeft: -12, fontSize: 30, zIndex: 9 }}>
        {obj.emoji}
      </motion.div>

      <div style={{ position: 'absolute', left: '64%', top: '24%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OUT ↑</div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        POINT + OUT = 從一堆裡把重點「指出來」→ 提醒大家注意
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Catch up  (catch-up)
// CATCH（追）+ UP（追到並排）= 加速追上落後的距離 / 追上彼此聊近況
// ─────────────────────────────────────────────────
function CatchUpScene({ obj }) {
  const dur = 4.5;
  const isProgress = obj.label === '進度';

  const Runner = ({ color = '#1a237e' }) => (
    <svg width="34" height="46" viewBox="0 0 40 54">
      <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
      <line x1="20" y1="14" x2="20" y2="33" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="17" x2="6"  y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="17" x2="34" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="32" y2="42" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="8"  y2="44" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 趕上進度：你在後面，加速追上前方標竿 ── */}
      {isProgress && <>
        {/* 跑道 */}
        <div style={{ position: 'absolute', left: '6%', right: '6%', top: '58%', height: 3, background: '#e0e0e0', borderRadius: 2, zIndex: 2 }} />
        {/* 前方進度標竿 🏁（在右邊，微微前進） */}
        <motion.div
          animate={{ left: ['66%', '72%', '74%', '74%', '66%'] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.6, 0.8, 1], ease: 'linear' }}
          style={{ position: 'absolute', top: '34%', fontSize: 30, zIndex: 4 }}>
          🏁
        </motion.div>
        {/* 你：從後面加速追上來，停在標竿旁 */}
        <motion.div
          animate={{ left: ['8%', '40%', '62%', '62%', '8%'] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.62, 0.8, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', top: '36%', zIndex: 6 }}>
          <Runner color="#1565c0" />
        </motion.div>
        {/* 速度線 */}
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            animate={{ opacity: [0, 0.8, 0, 0, 0], x: [0, -22, -22, -22, 0] }}
            transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.55, 0.8, 1], delay: i * 0.08 }}
            style={{ position: 'absolute', left: '34%', top: `${40 + i * 4}%`, width: 18, height: 2, background: '#90caf9', borderRadius: 1, zIndex: 5 }}
          />
        ))}
        {/* ✅ 趕上了 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 0], scale: [0.3, 0.3, 0.3, 1.4, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.62, 0.72, 0.92], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '64%', top: '22%', fontSize: 24, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', left: '80%', top: '32%', fontSize: 11, fontWeight: 900, color: '#2e7d32', zIndex: 9 }}>UP</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CATCH + UP = 加速追上 → 補回落後的進度
        </div>
      </>}

      {/* ── 敘舊：兩人從兩邊走近 → 碰面聊近況 ── */}
      {!isProgress && <>
        {/* 你（左→中） */}
        <motion.div
          animate={{ left: ['8%', '34%', '34%', '34%', '8%'] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.36, 0.6, 0.82, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', top: '38%', zIndex: 6 }}>
          <Runner color="#1565c0" />
        </motion.div>
        {/* 老友（右→中） */}
        <motion.div
          animate={{ left: ['86%', '54%', '54%', '54%', '86%'] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.36, 0.6, 0.82, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', top: '38%', zIndex: 6, transform: 'scaleX(-1)' }}>
          <Runner color="#6a1b9a" />
        </motion.div>
        {/* ☕ + 💬 碰面聊天 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 1.2, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.36, 0.55, 0.66, 0.85, 0.97], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '45%', top: '46%', fontSize: 22, zIndex: 7 }}>
          ☕
        </motion.div>
        {['💬', '😄', '❤️'].map((e, i) => (
          <motion.div key={i}
            animate={{ opacity: [0, 0, 0, 1, 0], y: [0, 0, 0, -14, -24] }}
            transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.6, 0.72, 0.95], delay: i * 0.12 }}
            style={{ position: 'absolute', left: `${42 + i * 6}%`, top: '26%', fontSize: 16, zIndex: 8 }}>
            {e}
          </motion.div>
        ))}
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CATCH + UP = 久違碰面 → 追上彼此的近況（敘舊）
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// End up  (end-up)
// END（結束）+ UP（停住定下來）= 繞來繞去，最後停在沒預期的結局
// ─────────────────────────────────────────────────
function EndUpScene({ obj }) {
  const dur = 4.5;
  // 球沿著彎彎曲曲的路走，最後「停」在意外終點
  const T = [0, 0.18, 0.34, 0.50, 0.66, 0.78, 0.90, 1];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 起點標示 ── */}
      <div style={{ position: 'absolute', left: '8%', top: '24%', fontSize: 11, fontWeight: 700, color: '#9e9e9e', zIndex: 4 }}>START</div>
      <div style={{ position: 'absolute', left: '9%', top: '34%', fontSize: 18, zIndex: 4 }}>📝</div>

      {/* ── 彎曲的路徑（虛線分段，表現繞來繞去）── */}
      {[
        { l: '16%', t: '40%', w: 60, r: 0 },
        { l: '34%', t: '30%', w: 60, r: 28 },
        { l: '50%', t: '46%', w: 60, r: -30 },
        { l: '66%', t: '34%', w: 56, r: 24 },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', left: s.l, top: s.t, width: s.w, height: 0, borderTop: '3px dashed #c5cae9', transform: `rotate(${s.r}deg)`, transformOrigin: 'left', zIndex: 2 }} />
      ))}

      {/* ── 球：沿路繞行，最後停住 ── */}
      <motion.div
        animate={{
          left: ['12%', '30%', '46%', '60%', '74%', '78%', '78%', '78%'],
          top:  ['36%', '40%', '30%', '46%', '34%', '40%', '40%', '40%'],
          rotate: [0, 180, 360, 540, 720, 760, 760, 760],
        }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeInOut' }}
        style={{ position: 'absolute', fontSize: 22, zIndex: 6 }}>
        🔵
      </motion.div>

      {/* ── 終點「停！」震一下 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 0.4, 0.4, 1.5, 1, 0.4] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '76%', top: '26%', fontSize: 16, fontWeight: 900, color: '#c62828', zIndex: 8 }}>
        STOP!
      </motion.div>

      {/* ── 意外結局 🤷 從終點彈出 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 0.3, 0.3, 1.4, 1.1, 0.3], y: [0, 0, 0, 0, 0, -10, -10, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '74%', top: '46%', fontSize: 32, zIndex: 8 }}>
        {obj.emoji}
      </motion.div>

      {/* ── UP（停下定住）標示 ── */}
      <div style={{ position: 'absolute', left: '84%', top: '38%', fontSize: 11, fontWeight: 900, color: '#2e7d32', zIndex: 9 }}>UP</div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        END + UP = 繞來繞去 → 最後竟然停在這裡（沒料到的結局）
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Check out  (check-out)
// CHECK（確認）+ OUT（往外）= 看一眼確認 / 結清走人
// ─────────────────────────────────────────────────
function CheckOutScene({ obj }) {
  const dur = 4.5;
  const isLook = obj.label === '看看';
  const isPay = obj.label === '結帳';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 看看：👀 投出目光瞄一眼 → ✓ ── */}
      {isLook && <>
        {/* 被看的東西 */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 1, 1, 0.9] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', right: '20%', top: '30%', fontSize: 44, zIndex: 4 }}>
          📦
        </motion.div>
        {/* 👀 從左邊把目光投出去 */}
        <motion.div
          animate={{ x: [0, 60, 60, 60, 0], opacity: [0.4, 1, 1, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.8, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '18%', top: '34%', fontSize: 30, zIndex: 6 }}>
          👀
        </motion.div>
        <div style={{ position: 'absolute', left: '40%', top: '24%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 8 }}>OUT →</div>
        {/* ✓ 看過了 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 1.4, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.6, 0.82, 0.96], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', right: '16%', top: '24%', fontSize: 26, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CHECK + OUT = 把目光投出去瞄一眼 → 來看看這個
        </div>
      </>}

      {/* ── 結帳：🛒 → 🧾 → 💰 付完走 OUT ── */}
      {isPay && <>
        <div style={{ position: 'absolute', left: '14%', top: '32%', fontSize: 40, zIndex: 4 }}>🛒</div>
        {/* 掃描收據 */}
        <motion.div
          animate={{ opacity: [0, 1, 1, 0, 0], y: [0, 0, 0, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.2, 0.45, 0.6, 1] }}
          style={{ position: 'absolute', left: '34%', top: '30%', fontSize: 26, zIndex: 6 }}>
          🧾
        </motion.div>
        {/* 💰 付款 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.45, 0.58, 0.78, 0.96], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '34%', top: '34%', fontSize: 26, zIndex: 7 }}>
          💰
        </motion.div>
        {/* ✅ + OUT */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], x: [0, 0, 0, 40, 60, 40], scale: [0.3, 0.3, 0.3, 1.3, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.45, 0.6, 0.7, 0.85, 0.96], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', right: '20%', top: '32%', fontSize: 26, zIndex: 8 }}>
          ✅
        </motion.div>
        <div style={{ position: 'absolute', right: '6%', top: '26%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OUT →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CHECK + OUT = 結算付完錢 → 走出去（結帳）
        </div>
      </>}

      {/* ── 退房：🏨 → 🔑 交回 → 人+🧳 走 OUT ── */}
      {!isLook && !isPay && <>
        <div style={{ position: 'absolute', left: '12%', top: '20%', fontSize: 46, zIndex: 4 }}>🏨</div>
        {/* 🔑 房卡交回櫃台 */}
        <motion.div
          animate={{ opacity: [0, 1, 1, 0, 0], x: [20, 0, 0, 0, 20], y: [0, 0, 0, 0, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.22, 0.4, 0.5, 1] }}
          style={{ position: 'absolute', left: '30%', top: '28%', fontSize: 22, zIndex: 6 }}>
          🔑
        </motion.div>
        {/* 人 + 行李 走出去 OUT → */}
        <motion.div
          animate={{ x: [0, 0, 0, 60, 110], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.42, 0.5, 0.78, 0.98], ease: 'easeIn' }}
          style={{ position: 'absolute', left: '40%', top: '34%', fontSize: 28, zIndex: 7 }}>
          🧍🧳
        </motion.div>
        <div style={{ position: 'absolute', right: '6%', top: '28%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OUT →</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CHECK + OUT = 交回房卡 → 走出飯店（退房）
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Check in  (check-in)
// CHECK（確認）+ IN（往內）= 走進櫃台報到 / 進去看一下對方狀況
// ─────────────────────────────────────────────────
function CheckInScene({ obj }) {
  const dur = 4.5;
  const isRegister = obj.label === '報到';

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 報到/入住：人+🧳 走進櫃台 🛎️ → ✓ → 🎫 ── */}
      {isRegister && <>
        {/* 櫃台 */}
        <div style={{ position: 'absolute', right: '16%', top: '24%', fontSize: 40, zIndex: 4 }}>🛎️</div>
        <div style={{ position: 'absolute', right: '8%', top: '22%', fontSize: 11, fontWeight: 900, color: '#1565c0', zIndex: 9 }}>← IN</div>
        {/* 人+行李 從左邊走進來 */}
        <motion.div
          animate={{ x: [-10, 70, 70, 70, -10], opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.5, 0.8, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '12%', top: '34%', fontSize: 28, zIndex: 6 }}>
          🧍🧳
        </motion.div>
        {/* ✅ 報到完成 + 🎫 */}
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.3, 0.3, 0.3, 1.4, 1, 0.3] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.55, 0.65, 0.85, 0.97], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', right: '20%', top: '40%', fontSize: 24, zIndex: 8 }}>
          ✅
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [0, 0, 0, -8, -8, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.4, 0.6, 0.7, 0.86, 0.97] }}
          style={{ position: 'absolute', right: '30%', top: '24%', fontSize: 22, zIndex: 8 }}>
          🎫
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CHECK + IN = 走進櫃台辦手續 → 報到入住
        </div>
      </>}

      {/* ── 關心一下：💬「還好嗎?」進去問 → 對方 🙂 回應 ── */}
      {!isRegister && <>
        {/* 你（左） */}
        <div style={{ position: 'absolute', left: '12%', top: '34%', fontSize: 34, zIndex: 5 }}>🧑</div>
        {/* 💬 關心訊息往對方那邊 IN */}
        <motion.div
          animate={{ opacity: [0, 1, 1, 1, 0], x: [0, 70, 70, 70, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1], ease: 'easeOut' }}
          style={{ position: 'absolute', left: '26%', top: '28%', fontSize: 24, zIndex: 7 }}>
          💬
        </motion.div>
        <div style={{ position: 'absolute', left: '44%', top: '20%', fontSize: 10, fontWeight: 900, color: '#1565c0', zIndex: 9 }}>還好嗎?</div>
        {/* 對方（右）收到 → 🙂 回應 */}
        <div style={{ position: 'absolute', right: '14%', top: '34%', fontSize: 34, zIndex: 5 }}>🧑‍💻</div>
        <motion.div
          animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.4, 0.4, 0.4, 1.3, 1, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.3, 0.55, 0.66, 0.85, 0.97], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', right: '12%', top: '24%', fontSize: 22, zIndex: 8 }}>
          🙂
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          CHECK + IN = 進去問一下近況 → 關心對方
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Show up  (show-up)
// SHOW（被看見）+ UP（冒上來）= 從沒人看到「冒出來」現身 / 太亮眼把人比下去
// ─────────────────────────────────────────────────
function ShowUpScene({ obj }) {
  const isAppear = obj.label === '人到場';
  const dur = 4.5;

  // 共用一個小人 SVG
  const Person = ({ color = '#1a237e' }) => (
    <svg width="34" height="48" viewBox="0 0 40 54">
      <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
      <line x1="20" y1="14" x2="20" y2="33" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="18" x2="7"  y2="26" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="18" x2="33" y2="26" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="28" y2="48" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="33" x2="12" y2="48" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── Scene A：現身/到場 — 空位 → 人「冒上來」現身 ── */}
      {isAppear && <>
        {/* 地點舞台 */}
        <div style={{ position: 'absolute', left: '50%', top: '64%', width: 70, height: 14, marginLeft: -35, background: '#e0e0e0', borderRadius: '50%', zIndex: 2 }} />
        {/* 虛線空位 + ❓（還沒人）*/}
        <motion.div
          animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.26, 0.40, 0.70, 0.88, 0.96] }}
          style={{ position: 'absolute', left: '50%', top: '30%', width: 40, height: 50, marginLeft: -20, border: '2.5px dashed #bdbdbd', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#bdbdbd', zIndex: 3 }}>
          ❓
        </motion.div>
        {/* 人從下方冒上來現身 */}
        <motion.div
          animate={{ y: [44, 44, 0, 0, 0, 44], opacity: [0, 0, 1, 1, 1, 0], scale: [0.7, 0.7, 1.1, 1, 1, 0.7] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.30, 0.46, 0.62, 0.82, 0.96], ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'absolute', left: '50%', top: '28%', marginLeft: -17, zIndex: 6 }}>
          <Person />
        </motion.div>
        {/* ✨ 現身亮光 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 0, 0, 0], scale: [0.4, 0.4, 1.6, 0.4, 0.4, 0.4] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.36, 0.48, 0.60, 0.80, 0.96] }}
          style={{ position: 'absolute', left: '50%', top: '34%', marginLeft: -12, fontSize: 22, zIndex: 7 }}>
          ✨
        </motion.div>
        {/* UP ↑ */}
        <div style={{ position: 'absolute', left: '63%', top: '32%', fontSize: 11, fontWeight: 900, color: '#2e7d32', zIndex: 8 }}>↑ UP</div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          SHOW + UP = 人「冒出來」現身 → 到場了
        </div>
      </>}

      {/* ── Scene B：把人比下去 — 你發光站挺，旁邊的人相形見絀 ── */}
      {!isAppear && <>
        {/* 你：發光、往上挺、頭上 🌟 */}
        <motion.div
          animate={{ y: [0, -6, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.5, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '24%', top: '34%', zIndex: 6 }}>
          <Person color="#1565c0" />
        </motion.div>
        {/* 光環 */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '24%', top: '32%', width: 50, height: 60, marginLeft: -8, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,213,79,0.55), transparent 70%)', zIndex: 4 }}
        />
        <motion.div
          animate={{ y: [0, -4, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '27%', top: '24%', fontSize: 20, zIndex: 7 }}>
          🌟
        </motion.div>
        {/* 旁邊的人：垂頭、縮小、冒汗 😓 */}
        <motion.div
          animate={{ y: [0, 6, 0], scale: [1, 0.82, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.5, 1], ease: 'easeInOut' }}
          style={{ position: 'absolute', left: '58%', top: '38%', zIndex: 5, transformOrigin: 'bottom' }}>
          <Person color="#9e9e9e" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: dur, repeat: Infinity, times: [0, 0.5, 1] }}
          style={{ position: 'absolute', left: '62%', top: '30%', fontSize: 18, zIndex: 7 }}>
          😓
        </motion.div>
        <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
          SHOW + UP = 你太亮眼 → 把旁邊的人比下去
        </div>
      </>}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Show off  (show-off)
// SHOW（亮出來）+ OFF（朝外秀出去）= 把東西轉向大家炫耀 / 展現成果
// ─────────────────────────────────────────────────
function ShowOffScene({ obj }) {
  const isFlaunt = obj.label === '炫耀的東西';
  const dur = 4.5;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 炫耀的人（左側，手舉高）── */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '8%', top: '34%', zIndex: 6 }}>
        <svg width="40" height="54" viewBox="0 0 40 54">
          <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
          <line x1="20" y1="14" x2="20" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          {/* 一手叉腰，一手高舉展示 */}
          <line x1="20" y1="18" x2="9"  y2="24" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="18" x2="34" y2="8"  stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="28" y2="48" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="33" x2="12" y2="48" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </motion.div>
      {/* 😎 / 😏 得意表情 */}
      <div style={{ position: 'absolute', left: '15%', top: '30%', fontSize: 14, zIndex: 7 }}>{isFlaunt ? '😎' : '😀'}</div>

      {/* ── 高舉的東西：轉一圈閃亮（OFF = 朝外秀）── */}
      <motion.div
        animate={{ rotate: [-12, 12, -12], scale: [1, 1.18, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '20%', top: '14%', fontSize: 32, zIndex: 8 }}>
        {obj.emoji}
      </motion.div>
      {/* 閃光 */}
      {[0, 1, 2].map(i => (
        <motion.div key={i}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
          style={{ position: 'absolute', left: `${24 + i * 4}%`, top: `${10 + i * 3}%`, fontSize: 12, zIndex: 9 }}>
          ✨
        </motion.div>
      ))}

      {/* ── 光線朝右邊觀眾「秀出去」── */}
      <motion.div
        animate={{ opacity: [0, 1, 0], x: [0, 40, 80], scale: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '32%', top: '20%', fontSize: 16, zIndex: 7 }}>
        ➡️
      </motion.div>
      <div style={{ position: 'absolute', left: '40%', top: '12%', fontSize: 11, fontWeight: 900, color: '#e65100', zIndex: 9 }}>OFF →</div>

      {/* ── 右邊觀眾：被秀到，反應 ── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: dur, repeat: Infinity, times: [0, 0.5, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', right: '10%', top: '40%', fontSize: 30, zIndex: 6 }}>
        {isFlaunt ? '😍' : '👏'}
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0], y: [0, -10, -18] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', right: '8%', top: '32%', fontSize: 14, zIndex: 7 }}>
        ❗
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isFlaunt ? 'SHOW + OFF = 把好東西亮出去 → 故意引人注目' : 'SHOW + OFF = 把成果秀出去 → 給大家看'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Figure out  (figure-out)
// FIGURE（腦中排列整理）+ OUT（答案理出來）= 把亂的線索在腦中排一排 → 想通了
// ─────────────────────────────────────────────────
function FigureOutScene({ obj }) {
  const isPuzzle = obj.label === '難題';
  const dur = 4.5;
  // aha 想通的瞬間 ≈ 0.55
  const ahaT = [0, 0.20, 0.50, 0.58, 0.78, 0.92];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 思考的人（手托下巴）── */}
      <motion.div
        animate={{ y: [0, -2, 0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '6%', bottom: '8%', zIndex: 6 }}>
        <svg width="64" height="78" viewBox="0 0 64 78">
          {/* 頭 */}
          <circle cx="24" cy="20" r="13" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.5"/>
          {/* 眼睛 */}
          <circle cx="20" cy="19" r="1.6" fill="#333"/>
          <circle cx="29" cy="19" r="1.6" fill="#333"/>
          {/* 身體 */}
          <line x1="24" y1="33" x2="23" y2="62" stroke="#1a237e" strokeWidth="4" strokeLinecap="round"/>
          {/* 托下巴的手臂：肩 → 肘 → 手到下巴 */}
          <line x1="24" y1="40" x2="36" y2="46" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
          <line x1="36" y1="46" x2="28" y2="30" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
          {/* 另一手 */}
          <line x1="24" y1="40" x2="11" y2="52" stroke="#1a237e" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* ── 思考泡泡的小尾巴（兩顆小圓往上接到泡泡）── */}
      {[0, 1].map(i => (
        <div key={i} style={{ position: 'absolute', left: `${26 + i * 3}%`, bottom: `${44 - i * 5}%`, width: 7 + i * 3, height: 7 + i * 3, borderRadius: '50%', background: '#fff', border: '2px solid #90caf9', zIndex: 5 }} />
      ))}

      {/* ── 大思考泡泡（橢圓）── */}
      <div style={{ position: 'absolute', left: '34%', top: '10%', width: '54%', height: '54%', background: '#fff', border: '3px solid #90caf9', borderRadius: '50%', zIndex: 4 }} />

      {/* ── 泡泡裡：兩個齒輪一直轉（=腦子在運轉），想通時停下淡出 ── */}
      <motion.div
        animate={{ rotate: [0, 360], opacity: [1, 1, 1, 0, 0, 1] }}
        transition={{ rotate: { duration: 2, repeat: Infinity, ease: 'linear' }, opacity: { duration: dur, repeat: Infinity, times: ahaT } }}
        style={{ position: 'absolute', left: '46%', top: '26%', fontSize: 26, zIndex: 6 }}>
        ⚙️
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -360], opacity: [1, 1, 1, 0, 0, 1] }}
        transition={{ rotate: { duration: 1.6, repeat: Infinity, ease: 'linear' }, opacity: { duration: dur, repeat: Infinity, times: ahaT } }}
        style={{ position: 'absolute', left: '58%', top: '34%', fontSize: 20, zIndex: 6 }}>
        ⚙️
      </motion.div>

      {/* ── 泡泡裡：被想的東西（難題🧩 / 邏輯🌀），想通前在抖，想通時淡出 ── */}
      <motion.div
        animate={{ rotate: isPuzzle ? [-10, 10, -10] : [0, 360], opacity: [1, 1, 1, 0, 0, 1] }}
        transition={{
          rotate: { duration: isPuzzle ? 0.6 : 1.4, repeat: Infinity, repeatType: isPuzzle ? 'mirror' : 'loop', ease: isPuzzle ? 'easeInOut' : 'linear' },
          opacity: { duration: dur, repeat: Infinity, times: ahaT },
        }}
        style={{ position: 'absolute', left: '40%', top: '22%', fontSize: 24, zIndex: 6 }}>
        {obj.emoji}
      </motion.div>

      {/* ── 想通閃光環 ── */}
      <motion.div
        animate={{ scale: [0, 0, 0, 2.6, 0, 0], opacity: [0, 0, 0.9, 0, 0, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: ahaT }}
        style={{ position: 'absolute', left: '54%', top: '22%', width: 40, height: 40, marginLeft: -20, marginTop: -20, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.9), transparent 70%)', zIndex: 7 }}
      />

      {/* ── 💡 想通！從泡泡裡冒出來，大大彈一下 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0], scale: [0.2, 0.2, 0.2, 1.4, 1.1, 0.2], y: [0, 0, 0, -8, -8, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: ahaT, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '50%', top: '18%', fontSize: 40, zIndex: 8 }}>
        💡
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isPuzzle ? 'FIGURE + OUT = 腦子轉一轉 → 💡 想通了！' : 'FIGURE + OUT = 把一團亂在腦中理順 → 💡 搞懂了！'}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// Find out  (find-out)
// FIND（去搜）+ OUT（翻到外面）= 把藏著的東西翻出來 → 查出真相 / 被抓包
// ─────────────────────────────────────────────────
function FindOutScene({ obj }) {
  const isTruth = obj.label === '真相';
  const dur = 4.5;
  // 蓋子掀開的瞬間 ≈ 0.42，掀開後真相曝光
  const T = [0, 0.30, 0.42, 0.56, 0.80, 0.94];
  const coverEmoji = isTruth ? '❓' : '🤫';   // 蓋子上代表「還不知道 / 還藏著」
  const reveal     = isTruth ? '💡' : '😱';   // 掀開後露出的東西
  const flyOut     = isTruth ? '✅' : '🚨';   // 往 OUT 飛出去的結果

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fafafa', overflow: 'hidden' }}>

      {/* ── 箱子本體（藏東西的地方）── */}
      <div style={{ position: 'absolute', left: '20%', top: '40%', width: 96, height: 56, background: '#d7ccc8', border: '3px solid #8d6e63', borderRadius: 6, zIndex: 3 }} />

      {/* ── 箱子裡藏的東西：掀蓋後才亮出來，發光放大 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 1, 0], scale: [0.4, 0.4, 1.3, 1.1, 1.1, 0.4] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '27%', top: '42%', fontSize: 34, zIndex: 5 }}>
        {reveal}
      </motion.div>

      {/* ── 曝光光環（掀蓋瞬間爆出）── */}
      <motion.div
        animate={{ scale: [0, 0, 2.4, 0, 0, 0], opacity: [0, 0, 0.9, 0, 0, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T }}
        style={{ position: 'absolute', left: '31%', top: '46%', width: 44, height: 44, marginLeft: -22, marginTop: -22, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.85), transparent 70%)', zIndex: 4 }}
      />

      {/* ── 蓋子：被「掀開」往上 + 往右飛走（= OUT），露出底下的真相 ── */}
      <motion.div
        animate={{ y: [0, -2, -46, -60, -60, 0], x: [0, 0, 20, 48, 48, 0], rotate: [0, -3, -22, -40, -40, 0], opacity: [1, 1, 1, 0, 0, 1] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '20%', top: '34%', width: 96, height: 22, background: '#8d6e63', borderRadius: '6px 6px 0 0', zIndex: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, transformOrigin: 'right center' }}>
        {coverEmoji}
      </motion.div>

      {/* ── 🔍 / 🔦 在掀蓋前湊近箱子 ── */}
      <motion.div
        animate={{ x: [40, 10, 0, 0, 0, 40], opacity: [0, 1, 1, 0, 0, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: 'easeOut' }}
        style={{ position: 'absolute', left: '40%', top: '30%', fontSize: 26, zIndex: 8 }}>
        {isTruth ? '🔍' : '🔦'}
      </motion.div>

      {/* ── 結果往 OUT 飛出去 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0], x: [0, 0, 0, 70, 90, 70], y: [0, 0, 0, -18, -22, -18], scale: [0.3, 0.3, 0.3, 1.3, 1.1, 0.3] }}
        transition={{ duration: dur, repeat: Infinity, times: T, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: 'absolute', left: '40%', top: '36%', fontSize: 28, zIndex: 8 }}>
        {flyOut}
      </motion.div>

      {/* ── OUT → 標示 ── */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: dur, repeat: Infinity, times: T }}
        style={{ position: 'absolute', right: '6%', top: '24%', fontSize: 10, fontWeight: 900, color: '#1a237e', zIndex: 9 }}>
        OUT →
      </motion.div>

      <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 700, color: '#757575', zIndex: 9, whiteSpace: 'nowrap' }}>
        {isTruth ? 'FIND + OUT = 掀開蓋子 → 藏著的真相露出來了' : 'FIND + OUT = 蓋子被掀開 → 偷偷做的事被抓包'}
      </div>
    </div>
  );
}

export default function CoreTrajectoryScene({ coreMotion, meanings }) {
  const [idx, setIdx] = useState(0);
  const count = meanings?.length || 1;

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => setIdx(i => (i + 1) % count), 4500);
    return () => clearInterval(timer);
  }, [count]);

  const m = meanings?.[idx] || {};
  const obj = m.sceneObject || { emoji: '❓', label: '?' };
  const meaning = m.meaning || '';

  const SpecificScene = SCENE_MAP[coreMotion];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          {SpecificScene
            ? <SpecificScene obj={obj} meaning={meaning} />
            : <FallbackScene obj={obj} meaning={meaning} coreMotion={coreMotion} />
          }
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <div style={{
          position: 'absolute', bottom: 4, right: 8,
          display: 'flex', gap: 4, zIndex: 20,
        }}>
          {meanings.map((_, i) => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: i === idx ? '#0070f3' : '#ddd',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>
      )}
    </div>
  );
}
