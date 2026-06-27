import { motion } from 'framer-motion';

// ═══════════════════════════════════════
// 動詞場景 — 認知語言學具象化核心動作
// ═══════════════════════════════════════

const S = { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' };

// ── Look：眼睛 + 錐形視線光束掃視 ──
function LookScene() {
  return (
    <div style={S}>
      {/* 眼睛外框 */}
      <svg width="70" height="40" viewBox="0 0 70 40" style={{ overflow: 'visible' }}>
        {/* 眼白 */}
        <path d="M 5 20 Q 35 -5 65 20 Q 35 45 5 20 Z" fill="#f5f5f5" stroke="#455a64" strokeWidth="2.5" />
        {/* 虹膜 */}
        <motion.g animate={{ x: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="35" cy="20" r="11" fill="#1565c0" />
          <circle cx="35" cy="20" r="5" fill="#0d47a1" />
          {/* 高光 */}
          <circle cx="31" cy="16" r="3" fill="#fff" opacity="0.8" />
        </motion.g>
      </svg>
      {/* 錐形視線光束 — 跟著瞳孔方向掃射 */}
      <motion.div
        animate={{ x: [-15, 15, -15], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', right: -5, width: 45, height: 30, background: 'linear-gradient(90deg, rgba(21,101,192,0.25), transparent)', borderRadius: '0 50% 50% 0', transformOrigin: 'left center', filter: 'blur(1px)' }}
      />
      <motion.div
        animate={{ x: [15, -15, 15], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: -5, width: 45, height: 30, background: 'linear-gradient(270deg, rgba(21,101,192,0.25), transparent)', borderRadius: '50% 0 0 50%', transformOrigin: 'right center', filter: 'blur(1px)' }}
      />
    </div>
  );
}

// ── Turn：旋轉刻度盤 + 指針明確轉動 ──
function TurnScene() {
  return (
    <div style={S}>
      <svg width="72" height="72" viewBox="0 0 72 72" style={{ overflow: 'visible' }}>
        {/* 外圈刻度 */}
        <circle cx="36" cy="36" r="32" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
          <line key={deg} x1="36" y1="6" x2="36" y2="10" stroke="#9e9e9e" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 36 36)`} />
        ))}
        {/* 內圈底盤 */}
        <circle cx="36" cy="36" r="26" fill="linear-gradient(135deg, #e8e8e8, #d0d0d0)" stroke="#757575" strokeWidth="2.5" />
        <defs>
          <linearGradient id="dialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eeeeee" />
            <stop offset="100%" stopColor="#bdbdbd" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="26" fill="url(#dialGrad)" stroke="#757575" strokeWidth="2.5" />
        {/* 中心軸 */}
        <circle cx="36" cy="36" r="5" fill="#424242" />
        <circle cx="36" cy="36" r="2.5" fill="#616161" />
      </svg>
      {/* 旋轉指針（明確的角度變化） */}
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: 48, height: 4, transformOrigin: 'center center' }}
      >
        <div style={{ width: '50%', height: '100%', background: '#d32f2f', borderRadius: '2px 0 0 2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
      </motion.div>
      {/* 旋轉方向弧線提示 */}
      <motion.svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', overflow: 'visible' }}>
        <motion.path
          d="M 58 15 A 28 28 0 0 1 65 40"
          fill="transparent" stroke="#d32f2f" strokeWidth="1.5" strokeDasharray="4 3"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 63 36 L 65 40 L 61 40"
          fill="transparent" stroke="#d32f2f" strokeWidth="1.5"
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

// ── Get：主動去「取得/達到」某個結果 — 人衝向目標，抵達後圓圈變綠 ✓ ──
function GetScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 虛線路徑 */}
      <svg style={{ position: 'absolute', bottom: 26, left: 0, width: '100%', height: 4, overflow: 'visible' }}>
        <line x1="14" y1="2" x2="82%" y2="2" stroke="#e0e0e0" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>

      {/* 目標圈：灰→綠＋✓（達到結果的瞬間）*/}
      <motion.div
        animate={{
          borderColor: ['#bdbdbd','#bdbdbd','#bdbdbd','#4caf50','#4caf50','#bdbdbd'],
          backgroundColor: ['transparent','transparent','transparent','#4caf50','#4caf50','transparent'],
          scale: [1,1,1,1.3,1,1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0,0.28,0.48,0.58,0.72,0.90] }}
        style={{ position: 'absolute', right: 12, bottom: 18, width: 22, height: 22, borderRadius: '50%', border: '2.5px solid #bdbdbd', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}
      >
        <motion.span
          animate={{ opacity: [0,0,0,1,1,0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0,0.28,0.50,0.60,0.72,0.90] }}
          style={{ fontSize: 10, color: '#fff', fontWeight: 900, lineHeight: 1 }}
        >✓</motion.span>
      </motion.div>

      {/* 成就閃光 */}
      <motion.div
        animate={{ scale: [0,0,0,2.4,0,0], opacity: [0,0,0,0.8,0,0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0,0.28,0.50,0.60,0.70,0.90] }}
        style={{ position: 'absolute', right: 6, bottom: 12, width: 34, height: 34, borderRadius: '50%', background: 'radial-gradient(circle, rgba(76,175,80,0.9), transparent 70%)', zIndex: 2 }}
      />

      {/* 人物：主動衝向目標，抵達後停下 */}
      <motion.div
        animate={{ x: [0,0,62,58,58,0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0,0.10,0.46,0.56,0.72,0.90], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 10, bottom: 18, zIndex: 5 }}
      >
        <svg width="16" height="30" viewBox="0 0 16 30">
          <circle cx="8" cy="5" r="4.5" fill="#FDBCB4" stroke="#E59866" strokeWidth="1"/>
          <line x1="8" y1="9"  x2="8"  y2="20" stroke="#1a237e" strokeWidth="3"   strokeLinecap="round"/>
          <line x1="8" y1="13" x2="1"  y2="18" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="8" y1="13" x2="15" y2="16" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="8" y1="20" x2="3"  y2="29" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="8" y1="20" x2="13" y2="29" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </div>
  );
}

// ── Take：機械爪張開→伸出→抓合→收回 ──
function TakeScene() {
  return (
    <div style={S}>
      {/* 目標物件 */}
      <motion.div
        animate={{ x: [0, 0, 0, -30], opacity: [1, 1, 1, 0], scale: [1, 1, 0.8, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.7] }}
        style={{ position: 'absolute', right: 18, width: 18, height: 18, background: '#ff9800', borderRadius: 3, border: '2px solid #e65100', zIndex: 2 }}
      />
      {/* 機械爪手臂 */}
      <motion.div
        animate={{ x: [-30, 25, 25, -30] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 0.75], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 0, zIndex: 5 }}
      >
        {/* 手臂 */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 30, height: 8, background: '#78909c', borderRadius: '4px 0 0 4px', border: '1.5px solid #546e7a' }} />
          {/* 爪子容器 */}
          <div style={{ position: 'relative', width: 22, height: 24 }}>
            {/* 上爪 */}
            <motion.div
              animate={{ rotate: [25, 25, 0, 0, 25] }}
              transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.28, 0.38, 0.65, 0.75] }}
              style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 6, background: '#546e7a', borderRadius: '0 4px 2px 0', transformOrigin: 'left center', border: '1px solid #37474f' }}
            >
              <div style={{ position: 'absolute', right: 0, top: 1, width: 5, height: 4, background: '#455a64', borderRadius: '0 3px 3px 0' }} />
            </motion.div>
            {/* 下爪 */}
            <motion.div
              animate={{ rotate: [-25, -25, 0, 0, -25] }}
              transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.28, 0.38, 0.65, 0.75] }}
              style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 6, background: '#546e7a', borderRadius: '0 2px 4px 0', transformOrigin: 'left center', border: '1px solid #37474f' }}
            >
              <div style={{ position: 'absolute', right: 0, bottom: 1, width: 5, height: 4, background: '#455a64', borderRadius: '0 3px 3px 0' }} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Put：手握物品→放到桌上→手鬆開離開 ──
function PutScene() {
  return (
    <div style={S}>
      {/* 桌面 */}
      <div style={{ position: 'absolute', bottom: 20, left: 12, right: 12, height: 4, background: '#795548', borderRadius: 2 }} />
      {/* 物品（先跟著手下來，放置後留在桌上） */}
      <motion.div
        animate={{ y: [-30, 2, 2, 2, -30] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.8, 0.95], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 24, left: '50%', marginLeft: -10, width: 20, height: 16, background: '#ff9800', borderRadius: 3, border: '1.5px solid #e65100', zIndex: 3 }}
      />
      {/* 手（帶著物品下來→放下→鬆手抬起） */}
      <motion.div
        animate={{ y: [-35, -2, -2, -35, -35], opacity: [1, 1, 1, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.6, 0.95], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 38, left: '50%', marginLeft: -8, zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ width: 5, height: 14, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 2 }} />
        <div style={{ width: 18, height: 8, background: '#F5CBA7', borderRadius: '0 0 4px 4px', border: '1.5px solid #E59866', borderTop: 'none' }} />
      </motion.div>
      {/* 放置成功的微光 */}
      <motion.div
        animate={{ scale: [0, 0, 1.3, 0], opacity: [0, 0, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.45, 0.6] }}
        style={{ position: 'absolute', bottom: 24, left: '50%', marginLeft: -15, width: 30, height: 6, background: '#4caf50', borderRadius: '50%', filter: 'blur(2px)' }}
      />
    </div>
  );
}

// ── Go：人自己向前移動（帶方向意志） ──
function GoScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人物行走 */}
      <motion.div
        animate={{ x: [-40, 45] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 22, zIndex: 5 }}
      >
        {/* 身體前傾（主動意志感） */}
        <div style={{ transform: 'rotate(8deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [18, -18, 18] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-18, 18, -18] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 速度線（身後殘留） */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-40, 45], opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.1 + i * 0.08 }}
          style={{ position: 'absolute', bottom: 30 + i * 5, width: 12, height: 2, background: '#90caf9', borderRadius: 1, marginLeft: -18 }}
        />
      ))}
    </div>
  );
}

// ── Come：人從遠處走來（從右到左 + 由小變大） ──
function ComeScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 「這裡」標記（目的地） */}
      <div style={{ position: 'absolute', bottom: 22, left: 10, width: 18, height: 3, borderRadius: 2, background: '#c8e6c9', border: '1px dashed #4caf50' }} />
      {/* 人從遠處走過來（從右到左 + 由小放大） */}
      <motion.div
        animate={{
          x: [40, -10, -10],
          scale: [0.35, 1, 1],
          opacity: [0.3, 1, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 1], ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 22, left: 15, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#4caf50', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#4caf50', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 腳印軌跡（從右到左漸淡） */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.25 - i * 0.06, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2 + i * 0.1, 0.35 + i * 0.1, 0.7] }}
          style={{ position: 'absolute', bottom: 21, right: 15 + i * 14, width: 4, height: 4, background: '#a5d6a7', borderRadius: 2 }}
        />
      ))}
    </div>
  );
}

// ── Break：發光結晶體 → 裂痕 → 碎裂爆開 ──
function BreakScene() {
  return (
    <div style={S}>
      {/* 完美結晶體（碎裂前發光） */}
      <motion.div
        animate={{ scale: [1, 1, 1.05, 0], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.35, 0.4] }}
        style={{ position: 'absolute', zIndex: 5 }}
      >
        <svg width="50" height="56" viewBox="0 0 50 56">
          {/* 結晶體（菱形） */}
          <polygon points="25,2 48,20 40,52 10,52 2,20" fill="#42a5f5" stroke="#1565c0" strokeWidth="2" />
          {/* 內部光澤 */}
          <polygon points="25,8 42,22 36,46 14,46 8,22" fill="rgba(255,255,255,0.15)" />
          <line x1="25" y1="2" x2="25" y2="52" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="2" y1="20" x2="40" y2="52" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
        {/* 發光光暈 */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ position: 'absolute', inset: -8, background: 'radial-gradient(circle, rgba(66,165,245,0.3), transparent)', borderRadius: '50%' }}
        />
      </motion.div>
      {/* 裂痕閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 2, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.33, 0.38, 0.45] }}
        style={{ position: 'absolute', width: 40, height: 40, background: 'radial-gradient(circle, #ffeb3b, rgba(255,235,59,0.3), transparent)', borderRadius: '50%', zIndex: 8 }}
      />
      {/* 碎片爆開 */}
      {[
        { x: -25, y: -20, r: -45, color: '#42a5f5', w: 12, h: 10 },
        { x: 22, y: -18, r: 30, color: '#64b5f6', w: 10, h: 12 },
        { x: -18, y: 22, r: -60, color: '#1e88e5', w: 14, h: 8 },
        { x: 20, y: 25, r: 50, color: '#42a5f5', w: 8, h: 14 },
        { x: -8, y: -28, r: 15, color: '#90caf9', w: 6, h: 8 },
        { x: 28, y: 5, r: -25, color: '#1565c0', w: 10, h: 6 },
      ].map((shard, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 0, shard.x * 1.5],
            y: [0, 0, shard.y * 1.5],
            rotate: [0, 0, shard.r],
            opacity: [0, 0, 1, 0],
            scale: [0, 0, 1, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.38, 0.55, 0.8] }}
          style={{ position: 'absolute', width: shard.w, height: shard.h, background: shard.color, zIndex: 6, clipPath: 'polygon(20% 0%, 100% 15%, 80% 100%, 0% 85%)' }}
        />
      ))}
    </div>
  );
}

// ── Run：高速奔跑剪影 + 速度殘影線 ──
function RunScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 奔跑的人（前傾衝刺姿態） */}
      <motion.div
        animate={{ x: [-55, 55] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 20, zIndex: 5 }}
      >
        <div style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
          <div style={{ width: 5, height: 14, background: '#e53935', margin: '0 auto', borderRadius: 2 }} />
        </div>
        {/* 跨步的腿 */}
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [30, -30, 30] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 14, background: '#e53935', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-30, 30, -30] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 14, background: '#e53935', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 速度殘影（半透明人形拖影） */}
      {[1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-55, 55] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: i * 0.08 }}
          style={{ position: 'absolute', bottom: 20, opacity: 0.15 / i, zIndex: 4 - i }}
        >
          <div style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom center' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
            <div style={{ width: 5, height: 14, background: '#e53935', margin: '0 auto', borderRadius: 2 }} />
          </div>
        </motion.div>
      ))}
      {/* 速度線 */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={`s${i}`}
          animate={{ x: [-55, 55], opacity: [0, 0.35, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.15 + i * 0.06 }}
          style={{ position: 'absolute', bottom: 26 + i * 5, width: 16 - i * 2, height: 2, background: '#ef9a9a', borderRadius: 1, marginLeft: -22 }}
        />
      ))}
    </div>
  );
}

// ── Give：手伸出把物品遞給對方 ──
function GiveScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 給的人（左邊） */}
      <div style={{ position: 'absolute', left: 10, bottom: 20 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </div>
      {/* 伸出的手 + 物品移向對方 */}
      <motion.div
        animate={{ x: [0, 22, 22, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.6, 0.85], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 22, top: '38%', display: 'flex', alignItems: 'center', zIndex: 5 }}
      >
        <div style={{ width: 12, height: 6, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866' }} />
        <div style={{ width: 14, height: 12, background: '#ff9800', borderRadius: 2, border: '1.5px solid #e65100', marginLeft: -1 }} />
      </motion.div>
      {/* 接收的人（右邊） */}
      <div style={{ position: 'absolute', right: 10, bottom: 20 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#546e7a', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#546e7a', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#546e7a', borderRadius: 1 }} />
        </div>
      </div>
      {/* 接收方伸出的手 */}
      <motion.div
        animate={{ x: [0, -10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 0.85] }}
        style={{ position: 'absolute', right: 20, top: '40%', width: 10, height: 6, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866' }}
      />
    </div>
  );
}

// ── Pick：挑選 ──
function PickScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 15 }}>
        <div style={{ width: 14, height: 14, background: '#f0f0f0', borderRadius: '50%' }} />
        <div style={{ position: 'relative', width: 14, height: 14, background: '#ff9800', borderRadius: 2, border: '1px solid #e65100' }}>
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6], delay: 0.1 }}
            style={{ position: 'absolute', inset: -4, border: '2px solid #ff9800', borderRadius: 4 }}
          />
        </div>
        <div style={{ width: 14, height: 14, background: '#f0f0f0', transform: 'rotate(45deg)' }} />
      </div>
      <motion.div
        animate={{ y: [-30, 20, 20, -30], scale: [1, 1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ width: 6, height: 25, background: '#F5CBA7', borderLeft: '1px solid #E59866' }} />
        <motion.div
          animate={{ width: [24, 24, 12, 24] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1], ease: "easeInOut" }}
          style={{ position: 'relative', height: 16, background: '#F5CBA7', borderRadius: '4px', border: '1px solid #E59866' }}
        >
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 4, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', borderRadius: '0 0 2px 2px' }} />
          <div style={{ position: 'absolute', bottom: -6, right: 0, width: 4, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', borderRadius: '0 0 2px 2px' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// 以下為新增的動詞場景動畫
// ═══════════════════════════════════════

// ── Bring：人捧著東西走向鏡頭（由遠→近，帶到這裡） ──
function BringScene() {
  return (
    <div style={S}>
      {/* 地面（透視感） */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 「這裡」的標記 — 目的地 */}
      <div style={{ position: 'absolute', bottom: 22, left: '50%', marginLeft: -15, width: 30, height: 4, background: '#c8e6c9', borderRadius: 2, border: '1px dashed #4caf50' }} />
      {/* 人捧著東西從遠處走來（scale 由小到大 = 走向鏡頭） */}
      <motion.div
        animate={{
          scale: [0.3, 1, 1],
          y: [-10, 0, 0],
          opacity: [0.3, 1, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 1], ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 22, transformOrigin: 'bottom center' }}
      >
        {/* 頭 */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        {/* 身體 */}
        <div style={{ width: 6, height: 18, background: '#455a64', margin: '0 auto', borderRadius: 2, position: 'relative' }}>
          {/* 雙手捧著的物品 */}
          <div style={{ position: 'absolute', top: 2, left: -10, width: 26, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* 左手 */}
            <div style={{ width: 6, height: 8, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866' }} />
            {/* 物品 */}
            <div style={{ width: 14, height: 12, background: '#ff9800', borderRadius: 2, border: '1.5px solid #e65100', margin: '0 1px' }} />
            {/* 右手 */}
            <div style={{ width: 6, height: 8, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866' }} />
          </div>
        </div>
        {/* 腿 */}
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 方向箭頭（朝向鏡頭 = 朝前） */}
      <motion.div
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -8, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #4caf50' }}
      />
    </div>
  );
}

// ── Set：精準設定/固定 — 齒輪嵌入機構卡入定位 ──
function SetScene() {
  return (
    <div style={S}>
      {/* 機構基座 */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -28, width: 56, height: 18, background: '#e0e0e0', borderRadius: '0 0 8px 8px', border: '2px solid #bdbdbd', borderTop: 'none' }}>
        {/* 凹槽 */}
        <div style={{ position: 'absolute', top: -2, left: '50%', marginLeft: -12, width: 24, height: 6, background: '#fff', borderRadius: '0 0 4px 4px', border: '1px solid #bdbdbd', borderTop: 'none' }} />
      </div>
      {/* 被設定的齒輪零件 — 精準下降卡入 */}
      <motion.div
        animate={{ y: [-45, 0, -3, 0], opacity: [0.5, 1, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.48, 0.55], ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', marginLeft: -10, zIndex: 5 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="8" fill="#546e7a" stroke="#37474f" strokeWidth="1.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <rect key={deg} x="8" y="-1" width="4" height="4" rx="1" fill="#546e7a" stroke="#37474f" strokeWidth="0.5" transform={`rotate(${deg} 10 10) translate(0 -8)`} />
          ))}
          <circle cx="10" cy="10" r="3" fill="#37474f" />
        </svg>
      </motion.div>
      {/* 卡入定位的閃光 + 勾勾 */}
      <motion.div
        animate={{ scale: [0, 0, 1.3, 0], opacity: [0, 0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.5, 0.65] }}
        style={{ position: 'absolute', bottom: 30, left: '50%', marginLeft: -16, width: 32, height: 10, background: 'radial-gradient(ellipse, rgba(76,175,80,0.4), transparent)', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Make：鐵砧上錘打原料 → 成品成形 + 火花 ──
function MakeScene() {
  return (
    <div style={S}>
      {/* 鐵砧 */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -18 }}>
        <div style={{ width: 36, height: 6, background: '#546e7a', borderRadius: 2 }} />
        <div style={{ width: 20, height: 10, background: '#455a64', margin: '0 auto', borderRadius: '0 0 3px 3px' }} />
      </div>
      {/* 原料→成品（形變） */}
      <motion.div
        animate={{
          borderRadius: ['50%', '50%', '4px', '4px', '50%'],
          backgroundColor: ['#bdbdbd', '#bdbdbd', '#ff9800', '#ff9800', '#bdbdbd'],
          scaleY: [1, 1, 0.7, 1, 1],
          scaleX: [1, 1, 1.2, 1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.42, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 26, left: '50%', marginLeft: -10, width: 20, height: 18, zIndex: 3 }}
      />
      {/* 錘子揮下 */}
      <motion.div
        animate={{ rotate: [0, 0, -55, 8, 0], y: [0, 0, -8, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.33, 0.42, 0.55] }}
        style={{ position: 'absolute', top: 5, right: 15, transformOrigin: 'bottom left', zIndex: 5 }}
      >
        <div style={{ width: 6, height: 28, background: '#795548', borderRadius: 2 }} />
        <div style={{ width: 18, height: 12, background: '#78909c', borderRadius: '3px 3px 2px 2px', marginLeft: -6, border: '1.5px solid #546e7a' }} />
      </motion.div>
      {/* 敲擊火花 */}
      {[{ x: -12, y: -15 }, { x: 14, y: -18 }, { x: -8, y: -22 }, { x: 10, y: -10 }].map((sp, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 0, sp.x], y: [0, 0, sp.y], opacity: [0, 0, 1, 0], scale: [0, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.38, 0.44, 0.6] }}
          style={{ position: 'absolute', bottom: 38, left: '50%', marginLeft: -2, width: 4, height: 4, background: '#ffeb3b', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ── Hold：雙手緊握 — 物體掙扎但被牢牢抓住 ──
function HoldScene() {
  return (
    <div style={S}>
      {/* 被握住的物體（掙扎顫抖） */}
      <motion.div
        animate={{ x: [-2, 2, -1.5, 1.5, 0], rotate: [-3, 3, -2, 2, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
        style={{ width: 22, height: 22, background: '#ff9800', borderRadius: 4, border: '2px solid #e65100', zIndex: 5 }}
      />
      {/* 左手（五指包覆） */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -24, top: '50%', marginTop: -12 }}>
        <div style={{ width: 10, height: 24, background: '#F5CBA7', borderRadius: '6px 0 0 6px', border: '1.5px solid #E59866', borderRight: 'none' }} />
        {/* 手指 */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }}
            style={{ position: 'absolute', top: 3 + i * 6, right: -4, width: 6, height: 4, background: '#F5CBA7', borderRadius: '0 3px 3px 0', border: '1px solid #E59866', borderLeft: 'none', transformOrigin: 'left center' }}
          />
        ))}
      </div>
      {/* 右手 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: 14, top: '50%', marginTop: -12 }}>
        <div style={{ width: 10, height: 24, background: '#F5CBA7', borderRadius: '0 6px 6px 0', border: '1.5px solid #E59866', borderLeft: 'none' }} />
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.05 }}
            style={{ position: 'absolute', top: 3 + i * 6, left: -4, width: 6, height: 4, background: '#F5CBA7', borderRadius: '3px 0 0 3px', border: '1px solid #E59866', borderRight: 'none', transformOrigin: 'right center' }}
          />
        ))}
      </div>
      {/* 緊握壓力波紋 */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ position: 'absolute', width: 50, height: 50, border: '1.5px solid #E59866', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Keep：保管守護 — 保險箱鎖住寶物 ──
function KeepScene() {
  return (
    <div style={S}>
      {/* 保險箱 */}
      <div style={{ position: 'relative', width: 54, height: 50, background: '#546e7a', borderRadius: 4, border: '2.5px solid #37474f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* 箱門邊框 */}
        <div style={{ position: 'absolute', inset: 4, border: '1.5px solid #455a64', borderRadius: 2 }} />
        {/* 轉盤鎖 */}
        <div style={{ position: 'relative', width: 20, height: 20, borderRadius: '50%', background: '#78909c', border: '2px solid #455a64' }}>
          <motion.div
            animate={{ rotate: [0, 120, 240, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '50%', left: '50%', width: 8, height: 2, background: '#fff', borderRadius: 1, transformOrigin: 'left center', marginTop: -1 }}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -2, marginLeft: -2, width: 4, height: 4, background: '#37474f', borderRadius: '50%' }} />
        </div>
        {/* 把手 */}
        <div style={{ position: 'absolute', right: 6, top: '50%', marginTop: -6, width: 4, height: 12, background: '#90a4ae', borderRadius: 2, border: '1px solid #455a64' }} />
        {/* 寶物隱約可見（透過小窗） */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 6, left: '50%', marginLeft: -4, width: 8, height: 8, background: '#ffd600', borderRadius: '50%', filter: 'blur(1px)' }}
        />
      </div>
      {/* 防護力場脈搏 */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', width: 66, height: 62, border: '2px solid #4caf50', borderRadius: 8 }}
      />
    </div>
  );
}

// ── Fall：自由落體下墜 — 人失足墜落 + 觸底擠壓 ──
function FallScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 10, right: 10, height: 2, background: '#bdbdbd' }} />
      {/* 墜落的人 */}
      <motion.div
        animate={{
          y: [-50, 28, 20, 24],
          rotate: [0, 15, -5, 0],
          scaleY: [1, 1, 0.6, 1],
          scaleX: [1, 1, 1.3, 1],
        }}
        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.45, 0.55, 0.65], ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: 18, zIndex: 5, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#c62828', margin: '0 auto' }} />
        <div style={{ width: 5, height: 14, background: '#c62828', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂亂揮 */}
        <motion.div
          animate={{ rotate: [-30, 30, -20] }}
          transition={{ duration: 0.3, repeat: Infinity }}
          style={{ position: 'absolute', top: 14, left: -6, width: 8, height: 3, background: '#c62828', borderRadius: 2, transformOrigin: 'right center' }}
        />
        <motion.div
          animate={{ rotate: [20, -30, 25] }}
          transition={{ duration: 0.3, repeat: Infinity }}
          style={{ position: 'absolute', top: 14, right: -6, width: 8, height: 3, background: '#c62828', borderRadius: 2, transformOrigin: 'left center' }}
        />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#c62828', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#c62828', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 觸地衝擊波 */}
      <motion.div
        animate={{ scaleX: [0, 2, 0], opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, times: [0.42, 0.52, 0.65] }}
        style={{ position: 'absolute', bottom: 16, left: '50%', marginLeft: -22, width: 44, height: 4, background: '#ef5350', borderRadius: '50%', filter: 'blur(2px)' }}
      />
    </div>
  );
}

// ── Stand：站立 — 從躺下撐起站穩（對抗重力） ──
function StandScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 10, right: 10, height: 2, background: '#ccc' }} />
      {/* 人從躺到站 */}
      <motion.div
        animate={{ rotate: [-90, -90, -45, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.6, 1], ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 18, left: '50%', marginLeft: -5, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 6, height: 24, background: '#546e7a', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂撐地姿勢 */}
        <motion.div
          animate={{ rotate: [30, 30, -20, -45, -45] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.6, 1] }}
          style={{ position: 'absolute', top: 16, left: -5, width: 10, height: 3, background: '#546e7a', borderRadius: 2, transformOrigin: 'right center' }}
        />
        <div style={{ display: 'flex', gap: 6, marginLeft: -3 }}>
          <div style={{ width: 3, height: 14, background: '#546e7a', borderRadius: 2 }} />
          <div style={{ width: 3, height: 14, background: '#546e7a', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 站起時的向上力量箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.5, 0], y: [0, 0, -8, -15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.55, 0.7] }}
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -5, width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '8px solid #4caf50' }}
      />
    </div>
  );
}

// ── Cut：剪刀剪斷 — 明確的切割動作 ──
function CutScene() {
  return (
    <div style={S}>
      {/* 被切的繩子/紙張 */}
      <div style={{ position: 'absolute', top: '50%', marginTop: -1, left: 10, right: 10, height: 3, background: '#90a4ae', borderRadius: 1, zIndex: 2 }} />
      {/* 切斷後兩端分離 */}
      <motion.div
        animate={{ x: [0, 0, -5], rotate: [0, 0, -8], opacity: [1, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7] }}
        style={{ position: 'absolute', top: '50%', marginTop: -1, left: 10, width: '35%', height: 3, background: '#90a4ae', borderRadius: 1, zIndex: 3, transformOrigin: 'left center' }}
      />
      <motion.div
        animate={{ x: [0, 0, 5], rotate: [0, 0, 6], opacity: [1, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7] }}
        style={{ position: 'absolute', top: '50%', marginTop: -1, right: 10, width: '35%', height: 3, background: '#90a4ae', borderRadius: 1, zIndex: 3, transformOrigin: 'right center' }}
      />
      {/* 剪刀 */}
      <motion.div
        animate={{ y: [-20, 0, 0, -20] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '20%', zIndex: 10 }}
      >
        <svg width="28" height="36" viewBox="0 0 28 36">
          {/* 上刃 */}
          <motion.g
            animate={{ rotate: [8, 8, -5, -5, 8] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.28, 0.38, 0.6, 0.7] }}
            style={{ transformOrigin: '14px 18px' }}
          >
            <path d="M 14 18 L 6 2 L 10 2 L 14 14 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="1" />
            <circle cx="8" cy="28" r="5" fill="none" stroke="#546e7a" strokeWidth="2" />
            <line x1="14" y1="18" x2="8" y2="23" stroke="#546e7a" strokeWidth="2" />
          </motion.g>
          {/* 下刃 */}
          <motion.g
            animate={{ rotate: [-8, -8, 5, 5, -8] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.28, 0.38, 0.6, 0.7] }}
            style={{ transformOrigin: '14px 18px' }}
          >
            <path d="M 14 18 L 22 2 L 18 2 L 14 14 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="1" />
            <circle cx="20" cy="28" r="5" fill="none" stroke="#546e7a" strokeWidth="2" />
            <line x1="14" y1="18" x2="20" y2="23" stroke="#546e7a" strokeWidth="2" />
          </motion.g>
        </svg>
      </motion.div>
      {/* 切斷瞬間閃光 */}
      <motion.div
        animate={{ scaleX: [0, 0, 2, 0], opacity: [0, 0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.42, 0.55] }}
        style={{ position: 'absolute', top: '50%', marginTop: -4, left: '50%', marginLeft: -2, width: 4, height: 8, background: '#ffeb3b', borderRadius: 1 }}
      />
    </div>
  );
}

// ── Blow：人臉鼓腮吹氣 — 強風吹出 ──
function BlowScene() {
  return (
    <div style={S}>
      {/* 人頭側面（鼓腮吹氣） */}
      <div style={{ position: 'absolute', left: 5, top: '50%', marginTop: -16, zIndex: 5 }}>
        <div style={{ width: 26, height: 28, borderRadius: '50%', background: '#F5CBA7', border: '2px solid #E59866', position: 'relative' }}>
          {/* 眼睛 */}
          <div style={{ position: 'absolute', top: 8, right: 5, width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
          {/* 鼓起的腮幫子 */}
          <motion.div
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: 5, right: -2, width: 10, height: 8, background: '#ffccbc', borderRadius: '50%', transformOrigin: 'left center' }}
          />
          {/* 嘴巴（噘嘴吹氣） */}
          <motion.div
            animate={{ width: [6, 8, 6] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: 6, right: -4, height: 4, background: '#d32f2f', borderRadius: '0 50% 50% 0' }}
          />
          {/* 頭髮 */}
          <div style={{ position: 'absolute', top: -2, left: 2, width: 18, height: 8, background: '#5d4037', borderRadius: '10px 10px 0 0' }} />
        </div>
      </div>
      {/* 風力線條（強風吹出） */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          animate={{ x: [0, 55], opacity: [0.7, 0], scaleX: [1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          style={{ position: 'absolute', left: 32, top: '45%', marginTop: (i - 2) * 8, width: 18 - Math.abs(i - 2) * 3, height: 2.5, background: '#90caf9', borderRadius: 2, transformOrigin: 'left center' }}
        />
      ))}
      {/* 被吹走的小物（落葉） */}
      <motion.div
        animate={{ x: [10, 55], y: [-5, 8], rotate: [0, 180], opacity: [0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        style={{ position: 'absolute', right: 10, top: '40%', width: 6, height: 4, background: '#8bc34a', borderRadius: '50% 0 50% 0' }}
      />
    </div>
  );
}

// ── Work：人在齒輪機構中工作 — 系統運轉 ──
function WorkScene() {
  return (
    <div style={S}>
      {/* 大齒輪 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: '25%', top: '25%', zIndex: 2 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="14" fill="none" stroke="#546e7a" strokeWidth="3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
            <rect key={deg} x="17" y="1" width="6" height="5" rx="1" fill="#546e7a" transform={`rotate(${deg} 20 20)`} />
          ))}
          <circle cx="20" cy="20" r="4" fill="#37474f" />
        </svg>
      </motion.div>
      {/* 小齒輪（反轉嚙合） */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', right: '22%', top: '42%', zIndex: 2 }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="9" fill="none" stroke="#e65100" strokeWidth="2.5" />
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <rect key={deg} x="12" y="1" width="4" height="4" rx="1" fill="#e65100" transform={`rotate(${deg} 14 14)`} />
          ))}
          <circle cx="14" cy="14" r="3" fill="#bf360c" />
        </svg>
      </motion.div>
      {/* 工作的人（在齒輪前操作） */}
      <div style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -6, zIndex: 5 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂操作 */}
        <motion.div
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ position: 'absolute', top: 12, right: -8, width: 10, height: 2, background: '#455a64', borderRadius: 1, transformOrigin: 'left center' }}
        />
      </div>
      {/* 底部進度條（工作產出） */}
      <div style={{ position: 'absolute', bottom: 6, left: 12, right: 12, height: 4, background: '#e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          animate={{ width: ['0%', '100%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.7, 0.85, 1] }}
          style={{ height: '100%', background: '#4caf50', borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

// ── Call：人張嘴喊話 — 聲波從嘴巴擴散 ──
function CallScene() {
  return (
    <div style={S}>
      {/* 人的側面（張嘴喊） */}
      <div style={{ position: 'absolute', left: 10, zIndex: 5 }}>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#455a64', position: 'relative' }}>
          {/* 眼睛 */}
          <div style={{ position: 'absolute', top: 8, right: 4, width: 4, height: 4, background: '#fff', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 1, right: 0, width: 2, height: 2, background: '#333', borderRadius: '50%' }} />
          </div>
          {/* 張開的嘴巴 */}
          <motion.div
            animate={{ height: [4, 8, 4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: 4, right: -2, width: 8, background: '#c62828', borderRadius: '0 4px 4px 0' }}
          />
        </div>
        <div style={{ width: 6, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 聲波弧線（從嘴巴向右擴散） */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 1 + i * 0.3], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
          style={{ position: 'absolute', left: 28, width: 16 + i * 12, height: 24 + i * 8, borderRight: '2.5px solid #1565c0', borderRadius: '0 50% 50% 0' }}
        />
      ))}
    </div>
  );
}

// ── Throw：人揮臂投擲 — 物體拋物線飛出 ──
function ThrowScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 拋物線軌跡 */}
      <svg width="70" height="35" style={{ position: 'absolute', bottom: 30, left: '50%', marginLeft: -35, opacity: 0.15 }}>
        <path d="M 5 30 Q 35 -10 65 30" fill="transparent" stroke="#c62828" strokeWidth="2" strokeDasharray="4 3" />
      </svg>
      {/* 投擲者 */}
      <div style={{ position: 'absolute', left: 8, bottom: 18, zIndex: 5 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 揮臂 */}
        <motion.div
          animate={{ rotate: [60, 60, -30, -30, 60] }}
          transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.6, 0.7] }}
          style={{ position: 'absolute', top: 14, right: -6, width: 14, height: 3, background: '#455a64', borderRadius: 2, transformOrigin: 'left center' }}
        />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </div>
      {/* 被丟出的球 */}
      <motion.div
        animate={{ x: [-30, 10, 45], y: [5, -35, 5], rotate: [0, 180, 360] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 25, left: '50%', width: 14, height: 14, background: '#c62828', borderRadius: '50%', zIndex: 3 }}
      />
    </div>
  );
}

// ── Drop：手指鬆開 → 物體自由落體下墜 + 觸底擠壓 ──
function DropScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 10, right: 10, height: 2, background: '#ccc' }} />
      {/* 手（鬆開動作） */}
      <div style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -12, zIndex: 5 }}>
        {/* 手掌 */}
        <div style={{ width: 24, height: 10, background: '#F5CBA7', borderRadius: '6px 6px 2px 2px', border: '1.5px solid #E59866', borderBottom: 'none' }} />
        {/* 手指（鬆開） */}
        <motion.div
          animate={{ rotate: [0, 0, 25, 25, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.25, 0.8, 0.9] }}
          style={{ position: 'absolute', bottom: -5, left: 2, width: 5, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '0 0 2px 2px', transformOrigin: 'top center' }}
        />
        <motion.div
          animate={{ rotate: [0, 0, -25, -25, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.25, 0.8, 0.9] }}
          style={{ position: 'absolute', bottom: -5, right: 2, width: 5, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '0 0 2px 2px', transformOrigin: 'top center' }}
        />
      </div>
      {/* 掉落的物件 */}
      <motion.div
        animate={{
          y: [-8, -8, 42, 36, 40],
          scaleY: [1, 1, 1, 0.65, 1],
          scaleX: [1, 1, 1, 1.3, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.55, 0.62, 0.7], ease: 'easeIn' }}
        style={{ position: 'absolute', top: 18, left: '50%', marginLeft: -8, width: 16, height: 16, background: '#90a4ae', borderRadius: 3, border: '2px solid #546e7a', transformOrigin: 'bottom center' }}
      />
      {/* 觸地衝擊 */}
      <motion.div
        animate={{ scaleX: [0, 0, 1.5, 0], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.52, 0.6, 0.72] }}
        style={{ position: 'absolute', bottom: 16, left: '50%', marginLeft: -16, width: 32, height: 4, background: '#78909c', borderRadius: '50%', filter: 'blur(1.5px)' }}
      />
    </div>
  );
}

// ── Pull：人身體後仰用力拉繩 — 重物被拖過來 ──
function PullScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 拉的人（身體後仰施力） */}
      <motion.div
        animate={{ x: [5, -3, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 5, bottom: 18, zIndex: 5, transform: 'rotate(-12deg)', transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂拉著繩子 */}
        <div style={{ position: 'absolute', top: 14, right: -12, width: 14, height: 3, background: '#455a64', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1, transform: 'rotate(10deg)' }} />
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1, transform: 'rotate(-5deg)' }} />
        </div>
      </motion.div>
      {/* 繩子 + 被拉的重物 */}
      <motion.div
        animate={{ x: [35, 0, 35] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 18, left: 20, display: 'flex', alignItems: 'center', zIndex: 3 }}
      >
        {/* 繩子（會被拉緊） */}
        <motion.div
          animate={{ width: [50, 35, 50] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ height: 3, background: '#795548', borderRadius: 1 }}
        />
        {/* 重物 */}
        <div style={{ width: 22, height: 20, background: '#1565c0', borderRadius: 3, border: '2px solid #0d47a1', marginLeft: -1 }} />
      </motion.div>
    </div>
  );
}

// ── Sign：簽名（筆在紙上書寫） ──
function SignScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -25, width: 50, height: 35, background: '#f5f5f5', border: '2px solid #e0e0e0', borderRadius: 3 }}>
        <div style={{ width: 30, height: 2, background: '#ccc', margin: '8px auto 4px' }} />
        <div style={{ width: 30, height: 2, background: '#ccc', margin: '4px auto' }} />
        <motion.div
          animate={{ width: [0, 30], opacity: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ height: 2, background: '#1565c0', margin: '6px auto 0', borderRadius: 1 }}
        />
      </div>
      <motion.div
        animate={{ x: [-15, 15], y: [5, 0, 5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 15, left: '50%', marginLeft: -2, width: 4, height: 28, background: '#546e7a', borderRadius: '2px 2px 0 0', transform: 'rotate(-15deg)', transformOrigin: 'bottom center' }}
      >
        <div style={{ position: 'absolute', bottom: -3, left: 0, width: 4, height: 6, background: '#1565c0', borderRadius: '0 0 2px 2px' }} />
      </motion.div>
    </div>
  );
}

// ── Shut：關閉（兩扇門合攏） ──
function ShutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'relative', width: 70, height: 60 }}>
        <div style={{ position: 'absolute', inset: 0, border: '3px solid #795548', borderRadius: 4 }} />
        <motion.div
          animate={{ x: [0, 20, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
          style={{ position: 'absolute', left: 0, top: 0, width: '48%', height: '100%', background: '#8d6e63', borderRadius: '4px 0 0 4px', zIndex: 5 }}
        >
          <div style={{ position: 'absolute', right: 4, top: '50%', marginTop: -3, width: 4, height: 6, background: '#FFD700', borderRadius: 1 }} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
          style={{ position: 'absolute', right: 0, top: 0, width: '48%', height: '100%', background: '#8d6e63', borderRadius: '0 4px 4px 0', zIndex: 5 }}
        >
          <div style={{ position: 'absolute', left: 4, top: '50%', marginTop: -3, width: 4, height: 6, background: '#FFD700', borderRadius: 1 }} />
        </motion.div>
      </div>
    </div>
  );
}

// ── Hang：衣架掛衣服 — 掛勾+衣物搖晃 ──
function HangScene() {
  return (
    <div style={S}>
      {/* 橫桿 */}
      <div style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -28, width: 56, height: 4, background: '#795548', borderRadius: 2 }} />
      {/* 衣架+衣物（搖擺） */}
      <motion.div
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 14, left: '50%', marginLeft: -1, transformOrigin: 'top center' }}
      >
        {/* 掛勾 */}
        <svg width="12" height="10" viewBox="0 0 12 10" style={{ marginLeft: -5 }}>
          <path d="M 6 0 Q 6 6 10 6 Q 6 10 2 6 Q 6 6 6 0" fill="none" stroke="#795548" strokeWidth="2" />
        </svg>
        {/* 衣架 */}
        <svg width="30" height="16" viewBox="0 0 30 16" style={{ marginLeft: -14, marginTop: -2 }}>
          <path d="M 15 0 L 28 12 L 2 12 Z" fill="none" stroke="#9e9e9e" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        {/* 掛著的衣服 */}
        <div style={{ width: 26, height: 28, background: '#42a5f5', borderRadius: '0 0 4px 4px', marginLeft: -12, marginTop: -4, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 8, height: 12, background: '#1e88e5', borderRadius: '0 0 0 4px' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 12, background: '#1e88e5', borderRadius: '0 0 4px 0' }} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Carry：人扛著重箱子吃力行走 ──
function CarryScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <motion.div
        animate={{ x: [-45, 45] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 18, zIndex: 5 }}
      >
        {/* 頭上的重箱子 */}
        <div style={{ width: 22, height: 16, background: '#8d6e63', border: '1.5px solid #5d4037', borderRadius: 2, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 3, right: 3, height: 1, background: '#6d4c41' }} />
        </div>
        {/* 人（微微彎腰承重） */}
        <div style={{ transform: 'rotate(3deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
          <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        </div>
        {/* 雙手舉著箱子 */}
        <div style={{ position: 'absolute', top: 14, left: -2, width: 8, height: 3, background: '#455a64', borderRadius: 1, transform: 'rotate(-60deg)', transformOrigin: 'right center' }} />
        <div style={{ position: 'absolute', top: 14, right: -2, width: 8, height: 3, background: '#455a64', borderRadius: 1, transform: 'rotate(60deg)', transformOrigin: 'left center' }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 吃力的汗水 */}
      <motion.div
        animate={{ y: [-2, 6], opacity: [0.5, 0], x: [-45, 45] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 48, left: '50%', marginLeft: 8, width: 3, height: 4, background: '#90caf9', borderRadius: 2 }}
      />
    </div>
  );
}

// ── Check：放大鏡逐項檢查清單+打勾 ──
function CheckScene() {
  return (
    <div style={S}>
      {/* 清單 */}
      <div style={{ width: 46, height: 56, background: '#f5f5f5', border: '2px solid #e0e0e0', borderRadius: 4, padding: 6, position: 'relative' }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 5 }}>
            <motion.div
              animate={{ borderColor: ['#e0e0e0', '#e0e0e0', '#4caf50', '#4caf50'], background: ['transparent', 'transparent', '#4caf50', '#4caf50'] }}
              transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15 + i * 0.1, 0.22 + i * 0.1, 1] }}
              style={{ width: 7, height: 7, border: '1.5px solid #e0e0e0', borderRadius: 1, flexShrink: 0 }}
            />
            <div style={{ flex: 1, height: 2, background: '#ddd', borderRadius: 1 }} />
          </div>
        ))}
      </div>
      {/* 放大鏡掃描 */}
      <motion.div
        animate={{ y: [-5, 40], opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.85, 1] }}
        style={{ position: 'absolute', right: 5, top: 8, zIndex: 10 }}
      >
        <div style={{ width: 14, height: 14, border: '2px solid #1565c0', borderRadius: '50%', background: 'rgba(21,101,192,0.05)' }} />
        <div style={{ width: 2, height: 8, background: '#1565c0', position: 'absolute', bottom: -5, right: -1, transform: 'rotate(-45deg)', borderRadius: 1 }} />
      </motion.div>
    </div>
  );
}

// ── Show：人拉開幕簾，展示物品 ──
function ShowScene() {
  return (
    <div style={S}>
      {/* 展示的物品（幕簾拉開後顯現） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1] }}
        style={{ width: 26, height: 26, background: '#ff9800', borderRadius: 4, border: '2px solid #e65100', zIndex: 5 }}
      />
      {/* 聚光燈 */}
      <div style={{ position: 'absolute', top: 2, left: '50%', marginLeft: -4, width: 8, height: 4, background: '#fdd835', borderRadius: '0 0 2px 2px' }} />
      {/* 光錐 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.2, 0.2, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.35, 0.8, 0.9] }}
        style={{ position: 'absolute', top: 6, left: '50%', marginLeft: -25, width: 0, height: 0, borderLeft: '25px solid transparent', borderRight: '25px solid transparent', borderTop: '55px solid rgba(255,235,59,0.2)' }}
      />
      {/* 展示者的手（拉開動作） */}
      <motion.div
        animate={{ x: [0, -20, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.8, 0.95] }}
        style={{ position: 'absolute', left: 5, top: '40%', width: 14, height: 6, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866', zIndex: 8 }}
      />
      <motion.div
        animate={{ x: [0, 20, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.8, 0.95] }}
        style={{ position: 'absolute', right: 5, top: '40%', width: 14, height: 6, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866', zIndex: 8 }}
      />
    </div>
  );
}

// ── Catch：手套接住飛來的球 + 衝擊波 ──
function CatchScene() {
  return (
    <div style={S}>
      {/* 接球手套（張開等待） */}
      <motion.div
        animate={{ scale: [1, 1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.45, 0.55, 0.65] }}
        style={{ position: 'absolute', right: 12, top: '50%', marginTop: -14, zIndex: 5 }}
      >
        <div style={{ width: 22, height: 26, background: '#8d6e63', borderRadius: '8px 12px 12px 8px', border: '2px solid #6d4c41', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 3, left: 3, width: 14, height: 18, background: '#a1887f', borderRadius: '4px 8px 8px 4px' }} />
        </div>
      </motion.div>
      {/* 飛來的球 */}
      <motion.div
        animate={{ x: [-55, 22, 22], scale: [0.8, 1, 0.7], opacity: [1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.5, 0.6] }}
        style={{ width: 14, height: 14, background: '#e53935', borderRadius: '50%', border: '1px solid #c62828', zIndex: 3 }}
      />
      {/* 接住衝擊波 */}
      <motion.div
        animate={{ scale: [0, 1.5, 0], opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0.47, 0.55, 0.65] }}
        style={{ position: 'absolute', right: 15, top: '50%', marginTop: -15, width: 30, height: 30, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Find：放大鏡搜索→發現目標高亮 ──
function FindScene() {
  return (
    <div style={S}>
      {/* 散落的物品 */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{ position: 'absolute', left: 8 + i * 20, bottom: 22, width: 10, height: 10, background: i === 2 ? '#ff9800' : '#e0e0e0', borderRadius: i % 2 === 0 ? '50%' : 2, opacity: i === 2 ? 1 : 0.35 }} />
      ))}
      {/* 放大鏡搜索 */}
      <motion.div
        animate={{ x: [-20, 5, 25, 5], y: [-5, 3, -5, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 10, left: '35%', zIndex: 10 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22">
          <circle cx="9" cy="9" r="7" fill="rgba(21,101,192,0.08)" stroke="#1565c0" strokeWidth="2.5" />
          <circle cx="7" cy="7" r="2" fill="rgba(255,255,255,0.4)" />
          <line x1="14" y1="14" x2="20" y2="20" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>
      {/* 發現！高亮光圈 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.52, 0.65] }}
        style={{ position: 'absolute', left: 46, bottom: 20, width: 16, height: 16, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Figure：思考推算 — 人頭上問號→齒輪轉→燈泡亮 ──
function FigureScene() {
  return (
    <div style={S}>
      {/* 思考的人頭 */}
      <div style={{ position: 'absolute', bottom: '25%', left: '50%', marginLeft: -14, width: 28, height: 28, borderRadius: '50%', background: '#455a64', zIndex: 5 }}>
        <div style={{ position: 'absolute', top: 8, left: 6, width: 5, height: 4, background: '#fff', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 8, right: 6, width: 5, height: 4, background: '#fff', borderRadius: '50%' }} />
      </div>
      {/* 問號（先出現） */}
      <motion.div
        animate={{ opacity: [1, 1, 0, 0], scale: [1, 1, 0.5, 0], y: [0, 0, -5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.35, 1] }}
        style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -6, fontSize: 16, fontWeight: 'bold', color: '#7b1fa2', zIndex: 10 }}
      >?</motion.div>
      {/* 思考齒輪（中間階段） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], rotate: [0, 0, 0, 180, 180] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.3, 0.5, 0.55] }}
        style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -8, zIndex: 10 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="5" fill="none" stroke="#78909c" strokeWidth="2" />
          {[0, 60, 120, 180, 240, 300].map(deg => (
            <rect key={deg} x="7" y="0" width="2" height="3" rx="0.5" fill="#78909c" transform={`rotate(${deg} 8 8)`} />
          ))}
        </svg>
      </motion.div>
      {/* 燈泡亮起（想通了） */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1], scale: [0, 0, 0, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 0.7] }}
        style={{ position: 'absolute', top: 2, left: '50%', marginLeft: -10, zIndex: 10 }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24">
          <path d="M 10 1 C 4 1 1 6 1 10 C 1 13 3 15 5 16 L 5 20 L 15 20 L 15 16 C 17 15 19 13 19 10 C 19 6 16 1 10 1 Z" fill="#ffd600" stroke="#f9a825" strokeWidth="1" />
          <line x1="6" y1="21" x2="14" y2="21" stroke="#bdbdbd" strokeWidth="1" />
        </svg>
      </motion.div>
      {/* 想通的光暈 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.3, 0], scale: [0, 0, 0, 1.5, 2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.6, 0.8] }}
        style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -20, width: 40, height: 40, background: 'radial-gradient(circle, rgba(255,214,0,0.4), transparent)', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Fill：填滿（容器逐漸注滿） ──
function FillScene() {
  return (
    <div style={S}>
      <div style={{ position: 'relative', width: 40, height: 55, border: '3px solid #546e7a', borderTop: 'none', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
        <motion.div
          animate={{ height: ['0%', '100%', '100%', '0%'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
          style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(0deg, #1565c0, #42a5f5)' }}
        />
      </div>
      <motion.div
        animate={{ opacity: [0, 1, 1, 0], y: [-20, -15, -15, -20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.5, 0.55] }}
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: 10, width: 4, height: 15, background: '#42a5f5', borderRadius: 2 }}
      />
    </div>
  );
}

// ── Point：手指指向目標 ──
function PointScene() {
  return (
    <div style={S}>
      {/* 目標 */}
      <div style={{ position: 'absolute', right: 12, top: '50%', marginTop: -10, width: 20, height: 20, border: '3px solid #e65100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 6, height: 6, background: '#e65100', borderRadius: '50%' }} />
      </div>
      {/* 手+食指指向 */}
      <motion.div
        animate={{ x: [-15, 10, -15] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 5, top: '50%', marginTop: -6, display: 'flex', alignItems: 'center', zIndex: 5 }}
      >
        {/* 拳頭 */}
        <div style={{ width: 14, height: 12, background: '#F5CBA7', borderRadius: 4, border: '1.5px solid #E59866' }} />
        {/* 食指 */}
        <div style={{ width: 18, height: 5, background: '#F5CBA7', borderRadius: '0 3px 3px 0', border: '1px solid #E59866', borderLeft: 'none', marginLeft: -1 }} />
      </motion.div>
      {/* 指向的虛線 */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', left: 35, top: '50%', marginTop: -1, width: 22, height: 2, borderTop: '2px dashed #e65100' }}
      />
    </div>
  );
}

// ── End：終點線 — 人衝過格紋終點 ──
function EndScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 終點線（格紋旗風格） */}
      <div style={{ position: 'absolute', right: 12, bottom: 20, width: 4, height: 40, zIndex: 3 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <div key={i} style={{ width: 4, height: 5, background: i % 2 === 0 ? '#333' : '#fff', border: '0.5px solid #ccc' }} />
        ))}
      </div>
      {/* 進度條 */}
      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, height: 5, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div
          animate={{ width: ['0%', '100%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #4caf50, #2e7d32)', borderRadius: 3 }}
        />
      </div>
      {/* 人衝過終點 */}
      <motion.div
        animate={{ x: [-40, 40] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: 20, left: 15, zIndex: 5 }}
      >
        <div style={{ transform: 'rotate(12deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [20, -20, 20] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-20, 20, -20] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Move：人推箱子從 A 移動到 B ──
function MoveScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* A 位置（虛線框） */}
      <div style={{ position: 'absolute', left: 8, bottom: 20, width: 18, height: 16, border: '1.5px dashed #bdbdbd', borderRadius: 2 }} />
      {/* B 位置（虛線框） */}
      <div style={{ position: 'absolute', right: 8, bottom: 20, width: 18, height: 16, border: '1.5px dashed #4caf50', borderRadius: 2 }} />
      {/* 人推著箱子移動 */}
      <motion.div
        animate={{ x: [-25, 28, 28, -25] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.7, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 20, left: '35%', display: 'flex', alignItems: 'flex-end', gap: 1, zIndex: 5 }}
      >
        {/* 人 */}
        <div style={{ marginBottom: 0 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
          <div style={{ width: 3, height: 10, background: '#455a64', margin: '0 auto', borderRadius: 1 }} />
          <div style={{ position: 'absolute', top: 10, right: 14, width: 8, height: 2, background: '#455a64', borderRadius: 1 }} />
        </div>
        {/* 箱子 */}
        <div style={{ width: 16, height: 14, background: '#1565c0', borderRadius: 2, border: '1px solid #0d47a1' }} />
      </motion.div>
    </div>
  );
}

// ── Wrap：手用紙張包住物體 + 緞帶 ──
function WrapScene() {
  return (
    <div style={S}>
      {/* 物品（中心） */}
      <div style={{ position: 'absolute', width: 24, height: 24, background: '#ff9800', borderRadius: 3, border: '2px solid #e65100', zIndex: 3 }} />
      {/* 包裝紙從四面包覆 */}
      <motion.div
        animate={{ scaleX: [0, 1, 1, 0], scaleY: [0.3, 1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        style={{ position: 'absolute', width: 32, height: 32, background: 'rgba(123,31,162,0.15)', border: '2px solid #7b1fa2', borderRadius: 4, zIndex: 5 }}
      />
      {/* 十字緞帶 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.35, 0.7, 0.8] }}
        style={{ position: 'absolute', width: 3, height: 32, background: '#7b1fa2', borderRadius: 1, zIndex: 6 }}
      />
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.35, 0.7, 0.8] }}
        style={{ position: 'absolute', width: 32, height: 3, background: '#7b1fa2', borderRadius: 1, zIndex: 6 }}
      />
      {/* 蝴蝶結 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.38, 0.45, 0.7, 0.8] }}
        style={{ position: 'absolute', top: -6, zIndex: 8, display: 'flex', gap: 1 }}
      >
        <div style={{ width: 6, height: 5, background: '#ce93d8', borderRadius: '50%' }} />
        <div style={{ width: 6, height: 5, background: '#ce93d8', borderRadius: '50%' }} />
      </motion.div>
    </div>
  );
}

// ── Clean：清除（掃把掃過，灰塵消失） ──
function CleanScene() {
  return (
    <div style={S}>
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0.6, 0.6, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2 + i * 0.08, 0.3 + i * 0.08, 1] }}
          style={{ position: 'absolute', left: 15 + i * 14, bottom: 25, width: 6, height: 6, background: '#bdbdbd', borderRadius: '50%' }}
        />
      ))}
      <motion.div
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ position: 'absolute', bottom: 20, zIndex: 5 }}
      >
        <div style={{ width: 6, height: 30, background: '#795548', borderRadius: 2, margin: '0 auto' }} />
        <div style={{ width: 20, height: 10, background: '#2e7d32', borderRadius: '0 0 4px 4px' }} />
      </motion.div>
      {[0, 1, 2].map(i => (
        <motion.div
          key={`s${i}`}
          animate={{ opacity: [0, 0, 1, 0], scale: [0, 0, 1, 0], y: [0, 0, -15 - i * 8, -25] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.8], delay: i * 0.1 }}
          style={{ position: 'absolute', right: 15 + i * 10, top: 20, width: 6, height: 6, background: '#ffeb3b', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ── Sort：分類（混合物分成兩組） ──
function SortScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 25, left: 10, width: 25, height: 20, border: '2px solid #1565c0', borderRadius: 4, borderTop: 'none' }} />
      <div style={{ position: 'absolute', bottom: 25, right: 10, width: 25, height: 20, border: '2px solid #e65100', borderRadius: 4, borderTop: 'none' }} />
      <motion.div
        animate={{ x: [0, -20], y: [0, 15], backgroundColor: ['#90a4ae', '#1565c0'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 20, left: '45%', width: 10, height: 10, borderRadius: '50%' }}
      />
      <motion.div
        animate={{ x: [0, 20], y: [0, 15], backgroundColor: ['#90a4ae', '#e65100'] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
        style={{ position: 'absolute', top: 20, left: '52%', width: 10, height: 10, borderRadius: 2 }}
      />
    </div>
  );
}

// ── Back（動詞）：支持/後退 — 人在後面撐住另一人 ──
function BackVerbScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前面的人（被支持者） */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -5, bottom: 18, zIndex: 5 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </div>
      {/* 後面支撐的人（雙手抵住） */}
      <motion.div
        animate={{ x: [5, 0, 5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', left: 8, bottom: 18, zIndex: 3 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
        {/* 雙手推撐 */}
        <div style={{ position: 'absolute', top: 12, right: -10, width: 12, height: 3, background: '#4caf50', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3 }}>
          <div style={{ width: 2, height: 8, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 2, height: 8, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 力量支撐箭頭 */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', left: 22, top: '40%', width: 14, height: 2, background: '#4caf50', borderRadius: 1 }}
      >
        <div style={{ position: 'absolute', right: -4, top: -2, width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '5px solid #4caf50' }} />
      </motion.div>
    </div>
  );
}

// ── Burn：燃燒（火焰跳動） ──
function BurnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -15, width: 30, height: 8, background: '#795548', borderRadius: 2 }} />
      <motion.div
        animate={{ scaleY: [0.8, 1.2, 0.9, 1.1, 0.8], scaleX: [1, 0.9, 1.1, 0.95, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 26, left: '50%', marginLeft: -12, width: 24, height: 35, transformOrigin: 'bottom center' }}
      >
        <div style={{ position: 'absolute', bottom: 0, left: 2, right: 2, height: '100%', background: 'linear-gradient(0deg, #ff6f00, #ff9800 40%, #ffeb3b 80%, transparent)', borderRadius: '50% 50% 20% 20%' }} />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], height: ['60%', '80%', '60%'] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 0, left: 6, right: 6, background: 'linear-gradient(0deg, #fff, #ffeb3b, transparent)', borderRadius: '50% 50% 20% 20%' }}
        />
      </motion.div>
    </div>
  );
}

// ── Calm：平靜（波浪逐漸平息） ──
function CalmScene() {
  return (
    <div style={S}>
      <motion.svg width="100" height="50" style={{ overflow: 'visible' }}>
        <motion.path
          animate={{
            d: [
              'M 0 25 Q 12 5 25 25 Q 38 45 50 25 Q 62 5 75 25 Q 88 45 100 25',
              'M 0 25 Q 12 18 25 25 Q 38 32 50 25 Q 62 18 75 25 Q 88 32 100 25',
              'M 0 25 Q 12 23 25 25 Q 38 27 50 25 Q 62 23 75 25 Q 88 27 100 25',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          fill="transparent" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}

// ── Grow：生長（植物長高） ──
function GrowScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -20, width: 40, height: 6, background: '#795548', borderRadius: 3 }} />
      <motion.div
        animate={{ height: [0, 45, 45, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 26, left: '50%', marginLeft: -2, width: 4, background: '#2e7d32', borderRadius: 2, transformOrigin: 'bottom center' }}
      />
      {[-1, 1].map(dir => (
        <motion.div
          key={dir}
          animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.4, 0.8, 1] }}
          style={{ position: 'absolute', bottom: 45, left: '50%', marginLeft: dir === -1 ? -16 : 4, width: 12, height: 8, background: '#4caf50', borderRadius: dir === -1 ? '8px 0 8px 0' : '0 8px 0 8px', transformOrigin: dir === -1 ? 'right bottom' : 'left bottom' }}
        />
      ))}
      <motion.div
        animate={{ scale: [0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.45, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 60, left: '50%', marginLeft: -6, width: 12, height: 12, background: '#e91e63', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Wake：甦醒（眼睛張開） ──
function WakeScene() {
  return (
    <div style={S}>
      <div style={{ position: 'relative', width: 60, height: 30 }}>
        <motion.div
          animate={{ scaleY: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1] }}
          style={{ position: 'absolute', inset: 0, background: '#f5f5f5', border: '3px solid #455a64', borderRadius: '50%', overflow: 'hidden', transformOrigin: 'center center' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -8, marginLeft: -8, width: 16, height: 16, background: '#1565c0', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 3, left: 3, width: 5, height: 5, background: '#fff', borderRadius: '50%' }} />
          </div>
        </motion.div>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 3, background: '#455a64', borderRadius: 2 }} />
      </div>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 0], y: [0, 0, -10, -20] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 0.7], delay: i * 0.1 }}
          style={{ position: 'absolute', top: 10, left: '40%' + i * 10, width: 4, height: 4, background: '#ffeb3b', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ── Mess：整齊排列被手一揮弄亂 ──
function MessScene() {
  return (
    <div style={S}>
      {/* 物件從整齊→散亂 */}
      {[
        { x0: -16, x1: -22, y0: 8, y1: -8, r1: -25, c: '#ef5350' },
        { x0: -8, x1: 18, y0: 8, y1: -12, r1: 30, c: '#42a5f5' },
        { x0: 0, x1: -8, y0: 8, y1: 15, r1: -35, c: '#66bb6a' },
        { x0: 8, x1: 20, y0: 8, y1: 10, r1: 20, c: '#ffa726' },
        { x0: 16, x1: -14, y0: 8, y1: 18, r1: 40, c: '#ab47bc' },
      ].map((item, i) => (
        <motion.div
          key={i}
          animate={{ x: [item.x0, item.x0, item.x1], y: [item.y0, item.y0, item.y1], rotate: [0, 0, item.r1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.65] }}
          style={{ position: 'absolute', left: '50%', top: '40%', width: 12, height: 12, background: item.c, borderRadius: i % 2 === 0 ? '50%' : 2 }}
        />
      ))}
      {/* 搗亂的手 */}
      <motion.div
        animate={{ x: [-20, -20, 25], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5] }}
        style={{ position: 'absolute', left: '25%', top: '38%', width: 16, height: 8, background: '#F5CBA7', borderRadius: 4, border: '1px solid #E59866', zIndex: 10 }}
      />
    </div>
  );
}

// ── Freak：驚恐 — 人嚇到後退，頭髮豎起 + 驚嘆號 ──
function FreakScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 驚恐的人（顫抖後退） */}
      <motion.div
        animate={{ x: [-2, 2, -3, 3, 0], y: [-1, 1, -1, 1, 0] }}
        transition={{ duration: 0.35, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 16, left: '35%', zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto', position: 'relative' }}>
          {/* 驚恐的眼睛（睜大） */}
          <div style={{ position: 'absolute', top: 4, left: 2, width: 4, height: 5, background: '#fff', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 1, left: 1, width: 2, height: 3, background: '#333', borderRadius: '50%' }} />
          </div>
          <div style={{ position: 'absolute', top: 4, right: 2, width: 4, height: 5, background: '#fff', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 1, right: 1, width: 2, height: 3, background: '#333', borderRadius: '50%' }} />
          </div>
          {/* 張開的嘴 */}
          <div style={{ position: 'absolute', bottom: 1, left: '50%', marginLeft: -2, width: 4, height: 4, background: '#c62828', borderRadius: '50%' }} />
          {/* 頭髮豎起 */}
          {[-6, -2, 2, 6].map((x, i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [1, 1.3, 1] }}
              transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
              style={{ position: 'absolute', top: -5, left: '50%', marginLeft: x - 1, width: 2, height: 6, background: '#455a64', borderRadius: 1, transformOrigin: 'bottom center' }}
            />
          ))}
        </div>
        <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂舉起防禦 */}
        <div style={{ position: 'absolute', top: 16, left: -6, width: 8, height: 3, background: '#455a64', borderRadius: 2, transform: 'rotate(-40deg)' }} />
        <div style={{ position: 'absolute', top: 16, right: -6, width: 8, height: 3, background: '#455a64', borderRadius: 2, transform: 'rotate(40deg)' }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 驚嘆號 */}
      <motion.div
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ position: 'absolute', top: 6, right: 18, fontSize: 20, fontWeight: 'bold', color: '#c62828' }}
      >
        !
      </motion.div>
      {/* 驚嚇波紋 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0.5, 1.5], opacity: [0.4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', top: 3, right: 12, width: 20, height: 20, border: '2px solid #ef5350', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ── Pay：手遞鈔票/硬幣給對方 ──
function PayScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 付款的人 */}
      <div style={{ position: 'absolute', left: 6, bottom: 20 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 收銀機/收款人 */}
      <div style={{ position: 'absolute', right: 6, bottom: 20 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2e7d32', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#2e7d32', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 硬幣飛過去 */}
      <motion.div
        animate={{ x: [-15, 20, 20, -15], y: [0, -18, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ width: 16, height: 16, background: '#ffd600', borderRadius: '50%', border: '2px solid #f9a825', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: 9, fontWeight: 'bold', color: '#f57f17' }}>$</span>
      </motion.div>
    </div>
  );
}

// ── Reach：人踮腳伸手夠高處的東西 ──
function ReachScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 高處的物品 */}
      <div style={{ position: 'absolute', right: 10, top: 8, width: 16, height: 14, background: '#ff9800', borderRadius: 3, border: '1.5px dashed #e65100' }} />
      {/* 架子 */}
      <div style={{ position: 'absolute', right: 5, top: 22, width: 28, height: 3, background: '#795548', borderRadius: 1 }} />
      {/* 人踮腳伸手 */}
      <div style={{ position: 'absolute', left: 10, bottom: 18, zIndex: 5 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 腿（踮腳） */}
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 8, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 3, height: 8, background: '#455a64', borderRadius: 1 }} />
        </div>
      </div>
      {/* 伸長的手臂 */}
      <motion.div
        animate={{ width: [18, 48, 48, 18], rotate: [-20, -45, -45, -20] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
        style={{ position: 'absolute', left: 18, top: '35%', height: 6, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866', transformOrigin: 'left center', zIndex: 5 }}
      />
    </div>
  );
}

// ── Kick：人踢球 — 腿擺動+球飛出+衝擊力 ──
function KickScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人的上半身 */}
      <div style={{ position: 'absolute', bottom: 30, left: 14 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
      </div>
      {/* 踢的腿（擺動） */}
      <motion.div
        animate={{ rotate: [0, 0, -55, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.45, 1] }}
        style={{ position: 'absolute', bottom: 18, left: 18, transformOrigin: 'top center', zIndex: 3 }}
      >
        <div style={{ width: 5, height: 20, background: '#455a64', borderRadius: 2 }} />
        <div style={{ width: 14, height: 6, background: '#e65100', borderRadius: 3, marginLeft: -4, marginTop: -1 }} />
      </motion.div>
      {/* 球被踢飛 */}
      <motion.div
        animate={{ x: [0, 0, 40], y: [0, 0, -12], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.8] }}
        style={{ position: 'absolute', bottom: 22, left: 36, width: 14, height: 14, background: '#fff', border: '2px solid #333', borderRadius: '50%', zIndex: 2 }}
      />
      {/* 踢擊衝擊 */}
      <motion.div
        animate={{ scale: [0, 0, 1.3, 0], opacity: [0, 0, 0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.38, 0.5] }}
        style={{ position: 'absolute', bottom: 20, left: 35, width: 16, height: 16, background: 'radial-gradient(circle, rgba(255,235,59,0.4), transparent)', borderRadius: '50%' }}
      />
    </div>
  );
}

// ── Roll：輪子沿地面滾動 + 旋轉線條 ──
function RollScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 5, right: 5, height: 2, background: '#e0e0e0' }} />
      {/* 滾動的輪子 */}
      <motion.div
        animate={{ x: [-40, 40], rotate: [0, 720] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -12 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#7b1fa2" strokeWidth="3" />
          <line x1="12" y1="2" x2="12" y2="22" stroke="#ce93d8" strokeWidth="1.5" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="#ce93d8" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#7b1fa2" />
        </svg>
      </motion.div>
      {/* 滾動揚塵 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-40, 40], opacity: [0, 0.25, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
          style={{ position: 'absolute', bottom: 20 + i * 4, left: '50%', marginLeft: -18, width: 8, height: 2, background: '#bdbdbd', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// ── Lay：人把東西平放到地上 ──
function LayScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 10, right: 10, height: 2, background: '#e0e0e0' }} />
      {/* 人彎腰放東西 */}
      <div style={{ position: 'absolute', left: 12, bottom: 20 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 手臂（放下動作） */}
      <motion.div
        animate={{ rotate: [0, 0, 40, 40, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.45, 0.75, 0.9] }}
        style={{ position: 'absolute', left: 20, top: '42%', width: 14, height: 3, background: '#455a64', borderRadius: 2, transformOrigin: 'left center' }}
      />
      {/* 物品從直立到平放 */}
      <motion.div
        animate={{ rotate: [0, 0, -90, -90, 0], y: [0, 0, 8, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 20, left: '55%', width: 12, height: 30, background: '#795548', borderRadius: 3, transformOrigin: 'bottom center' }}
      />
    </div>
  );
}

// ── Pass：經過 — 人從站著的人旁邊走過 ──
function PassScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 站著的人（靜止） */}
      <div style={{ position: 'absolute', right: 25, bottom: 18, zIndex: 5 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#bdbdbd', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <div style={{ width: 2, height: 8, background: '#bdbdbd', borderRadius: 1 }} />
          <div style={{ width: 2, height: 8, background: '#bdbdbd', borderRadius: 1 }} />
        </div>
      </div>
      {/* 走過的人 */}
      <motion.div
        animate={{ x: [-50, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 18, zIndex: 3 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Let：允許通過 — 守衛打開閘門讓人進入 ──
function LetScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 閘門柱 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -15, bottom: 16, width: 30, height: 4, background: '#546e7a', borderRadius: 1 }} />
      {/* 閘門桿（抬起/放下） */}
      <motion.div
        animate={{ rotate: [0, 0, -80, -80, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.7, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -1, bottom: 20, width: 3, height: 38, background: '#c62828', borderRadius: 2, transformOrigin: 'bottom center', zIndex: 3 }}
      >
        <div style={{ position: 'absolute', top: -2, left: -2, width: 7, height: 3, background: '#fff', borderRadius: 1 }} />
      </motion.div>
      {/* 守衛 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: 8, bottom: 18, zIndex: 5 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 3, height: 10, background: '#455a64', margin: '0 auto' }} />
      </div>
      {/* 通過的人 */}
      <motion.div
        animate={{ x: [-30, -30, 30, 30, -30], opacity: [1, 1, 1, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 0.75, 1] }}
        style={{ position: 'absolute', bottom: 18, left: '35%', zIndex: 2 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// 動詞場景映射
// ═══════════════════════════════════════

const VERB_SCENES = {
  Look: LookScene, Turn: TurnScene, Get: GetScene,
  Take: TakeScene, Put: PutScene, Go: GoScene,
  Come: ComeScene, Break: BreakScene, Run: RunScene,
  Give: GiveScene, Pick: PickScene,
  Bring: BringScene, Set: SetScene, Make: MakeScene,
  Hold: HoldScene, Keep: KeepScene, Fall: FallScene,
  Stand: StandScene, Cut: CutScene, Blow: BlowScene,
  Work: WorkScene, Call: CallScene, Throw: ThrowScene,
  Drop: DropScene, Pull: PullScene, Sign: SignScene,
  Shut: ShutScene, Hang: HangScene, Carry: CarryScene,
  Check: CheckScene, Show: ShowScene, Catch: CatchScene,
  Find: FindScene, Figure: FigureScene, Fill: FillScene,
  Point: PointScene, End: EndScene, Move: MoveScene,
  Wrap: WrapScene, Clean: CleanScene, Sort: SortScene,
  Back: BackVerbScene, Burn: BurnScene, Calm: CalmScene,
  Grow: GrowScene, Wake: WakeScene, Mess: MessScene,
  Freak: FreakScene, Pay: PayScene, Reach: ReachScene,
  Kick: KickScene, Roll: RollScene, Lay: LayScene,
  Pass: PassScene, Let: LetScene,
};

export default function VerbScene({ verb }) {
  const Scene = VERB_SCENES[verb];
  if (Scene) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 12 }}><Scene /></div>;
  }
  return null;
}
