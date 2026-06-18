import React from 'react';
import { motion } from 'framer-motion';

// --- 基礎組件 (未來可以移到單獨文件) ---

// 核心動詞：Look (眼神掃描)
const LookingEyes = ({ isScanning = true }) => {
  return (
    <motion.div 
      style={{ display: 'flex', gap: 4, padding: 8, background: '#fff', borderRadius: 20, border: '2px solid #ddd' }}
      animate={isScanning ? { x: [0, 10, -10, 0] } : {}}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <div style={{ width: 12, height: 12, background: '#eee', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ width: 6, height: 6, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 3 }}
          animate={isScanning ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
      <div style={{ width: 12, height: 12, background: '#eee', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ width: 6, height: 6, background: '#333', borderRadius: '50%', position: 'absolute', left: 3, top: 3 }}
          animate={isScanning ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    </motion.div>
  );
};

// 介係詞核心：Into (穿透與深入)
const IntoAction = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 1, x: -50 }}
      animate={{ 
        x: [ -50, 20, 20, -50 ], // 靠近 -> 鑽進去 -> 停一下 -> 重置
        scale: [ 1, 0.8, 1.2, 1 ], // 準備 -> 擠壓 -> 穿透後的放大感 -> 重置
      }}
      transition={{ repeat: Infinity, duration: 4, times: [0, 0.3, 0.6, 1] }}
      style={{ position: 'relative', zIndex: 10 }}
    >
      {children}
    </motion.div>
  );
};

// --- 片語組合：Look Into ---

export function LookIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 210, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', overflow: 'hidden' }}>
      
      {/* 標靶物：資料夾 (代表調查的對象) */}
      <motion.div 
        style={{ position: 'absolute', right: 40, fontSize: 60, opacity: 0.3 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        📁
      </motion.div>

      {/* 動作主體：眼睛 + Into 動作 */}
      <IntoAction>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LookingEyes />
          <motion.div 
            style={{ fontSize: 24, marginTop: -5 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            🔍
          </motion.div>
        </div>
      </IntoAction>

      {/* 內部真相：當眼睛「鑽進去」時浮現 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 0, 1, 0], 
          scale: [0.5, 0.5, 1.2, 0.5],
          x: [0, 0, 40, 0]
        }}
        transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.6, 1] }}
        style={{ position: 'absolute', right: 30, fontSize: 20, color: '#d32f2f', fontWeight: 'bold', background: '#fff', padding: '2px 8px', borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      >
        Found it! 💡
      </motion.div>

      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>
        眼神搜尋 → 穿透表面 → 發現核心
      </div>
    </div>
  );
}

// 暫存原本的其他組件，避免報錯 (之後可以一個個用 Framer Motion 升級)
export function LookDownAnim() { return <div>Look Down (Pending Upgrade)</div> }
export function LookUpAnim() { return <div>Look Up (Pending Upgrade)</div> }
export function LookOutAnim() { return <div>Look Out (Pending Upgrade)</div> }
export function LookOverAnim() { return <div>Look Over (Pending Upgrade)</div> }
export function LookThroughAnim() { return <div>Look Through (Pending Upgrade)</div> }
export function LookBackAnim() { return <div>Look Back (Pending Upgrade)</div> }
export function LookAfterAnim() { return <div>Look After (Pending Upgrade)</div> }
export function LookForAnim() { return <div>Look For (Pending Upgrade)</div> }
export function LookForwardAnim() { return <div>Look Forward (Pending Upgrade)</div> }
