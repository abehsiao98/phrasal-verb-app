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

      {/* ─── 人物：從左衝出（逃脫/離開）────────────── */}
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

// ─────────────────────────────────────────────
// Go down  (go-descend)
// GO 自己移動 + DOWN 往下
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go up  (go-ascend)
// GO 自己移動 + UP 往上
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go out  (go-outward)
// GO 自己移動 + OUT 往外/消失
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go over  (go-review)
// GO 自己移動 + OVER 越過/掠過
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go through  (go-traverse)
// GO 自己移動 + THROUGH 從頭穿透到尾
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go on  (go-continue)
// GO 自己移動 + ON 持續接上/保持進行
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Go back  (go-return)
// GO 自己移動 + BACK 往後/回到原點
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Break even  (break-balance)
// BREAK 打到那個點 + EVEN 兩邊相等、持平
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Break through  (break-pierce)
// BREAK 打穿障礙 + THROUGH 從這側穿到那側
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Break out  (break-burst)
// BREAK 打破邊界 + OUT 衝出來
// ─────────────────────────────────────────────
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
