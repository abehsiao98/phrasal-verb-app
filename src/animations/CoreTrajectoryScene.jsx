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

      {/* ─── 地面 ─── */}
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

      {/* ─── 地面 ─── */}
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
};

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
