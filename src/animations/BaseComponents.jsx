import React from 'react';
import { motion } from 'framer-motion';

/**
 * 核心物理動態庫 (Base Physical Actions)
 * 這裡定義「動詞」的最基本物理動作
 */

// 1. 眼睛：Look (掃描、注視)
export const LookingEyes = ({ isScanning = true, color = "#333" }) => (
  <motion.div 
    style={{ display: 'flex', gap: 4, padding: '6px 10px', background: '#fff', borderRadius: 20, border: '2px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
    animate={isScanning ? { x: [0, 5, -5, 0] } : {}}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  >
    {[1, 2].map(i => (
      <div key={i} style={{ width: 12, height: 12, background: '#eee', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          style={{ width: 6, height: 6, background: color, borderRadius: '50%', position: 'absolute', left: 3, top: 3 }}
          animate={isScanning ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
    ))}
  </motion.div>
);

// 2. 手：Grab/Put/Take (抓取與放置)
export const GrabbingHand = ({ isGrabbing = false }) => (
  <motion.div
    style={{ fontSize: 32, cursor: 'default' }}
    animate={isGrabbing ? { scale: [1, 1.2, 0.9, 1], rotate: [0, -10, 10, 0] } : {}}
    transition={{ duration: 0.5 }}
  >
    {isGrabbing ? '✊' : '✋'}
  </motion.div>
);

// 3. 腳：Go/Run/Move (位移與踏步)
export const WalkingLegs = ({ isMoving = true }) => (
  <motion.div
    style={{ fontSize: 32 }}
    animate={isMoving ? { y: [0, -5, 0], rotate: [-5, 5, -5] } : {}}
    transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
  >
    🚶
  </motion.div>
);

/**
 * 空間方向模組 (Spatial Direction Wrappers)
 * 這裡定義「介係詞」的物理路徑
 */

// Into: 穿透邊界進入內部
export const IntoTransition = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ x: -60, opacity: 0 }}
    animate={{ 
      x: [-60, 20, 20, -60],
      scale: [1, 0.85, 1.1, 1],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ repeat: Infinity, duration: 4, times: [0, 0.3, 0.6, 1], delay }}
  >
    {children}
  </motion.div>
);

// Up: 克服阻力上升
export const UpTransition = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ 
      y: [40, -30, -30, 40],
      opacity: [0, 1, 1, 0],
      scale: [0.9, 1.1, 1.1, 0.9]
    }}
    transition={{ 
      repeat: Infinity, 
      duration: 3, 
      times: [0, 0.4, 0.8, 1],
      ease: "easeOut",
      delay 
    }}
  >
    {children}
  </motion.div>
);

// Down: 降落或沉下
export const DownTransition = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    animate={{ 
      y: [-40, 30, 30, -40],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ repeat: Infinity, duration: 3, delay }}
  >
    {children}
  </motion.div>
);

// Out: 脫離容器
export const OutTransition = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ x: 0, opacity: 0 }}
    animate={{ 
      x: [0, 60, 60, 0],
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1.1, 1.1, 0.8]
    }}
    transition={{ repeat: Infinity, duration: 3, delay }}
  >
    {children}
  </motion.div>
);
