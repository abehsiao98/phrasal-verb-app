import { motion } from 'framer-motion';

// ═══════════════════════════════════════
// 介係詞物理場景 — 純 CSS div，不用 emoji
// ═══════════════════════════════════════

function UpScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 46, height: 70, borderLeft: '2px solid #f0f0f0', borderRight: '2px solid #f0f0f0' }}>
        <motion.div
          animate={{ height: ['0%', '100%', '0%'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 1] }}
          style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(0deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.3) 100%)' }}
        />
        <motion.div
          animate={{ 
            y: [50, -35, -28, -30],
            scaleY: [1.2, 0.8, 1.1, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.6], ease: "easeOut" }}
          style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '50%', zIndex: 10 }}
        >
          <div style={{ width: 0, height: 0, borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '16px solid #1565c0' }} />
          <div style={{ width: 8, height: 18, background: '#1565c0', margin: '-2px auto 0', borderRadius: '0 0 2px 2px' }} />
        </motion.div>
        <motion.div
          animate={{ scale: [0, 1.2], opacity: [0, 0.4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.4, 1] }}
          style={{ position: 'absolute', top: -10, left: '50%', marginLeft: -20, width: 40, height: 40, border: '2px solid #1565c0', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
}

function DownScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 60, height: 100 }}>
        {/* 背景重力場 */}
        <div style={{ position: 'absolute', inset: '0 15px', background: 'linear-gradient(180deg, transparent, rgba(239,83,80,0.05))', borderRadius: 4 }} />
        
        {/* 下降箭頭物件 */}
        <motion.div
          animate={{ 
            y: [-40, 50, 42, 45],
            scaleY: [0.8, 1.2, 0.9, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.3, 0.5], ease: "easeIn" }}
          style={{ position: 'absolute', left: '50%', marginLeft: -15, top: '20%', zIndex: 10 }}
        >
          <div style={{ width: 30, height: 25, background: '#ef5350', borderRadius: '2px 2px 0 0', margin: '0 auto' }} />
          <div style={{ width: 0, height: 0, borderLeft: '22px solid transparent', borderRight: '22px solid transparent', borderTop: '25px solid #ef5350', marginLeft: -7 }} />
        </motion.div>

        {/* 撞擊地面效果 */}
        <motion.div
          animate={{ 
            scaleX: [0, 1.5],
            opacity: [0, 0.6, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.25, 0.5] }}
          style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -30, width: 60, height: 4, background: '#ef5350', borderRadius: '50%', filter: 'blur(1px)' }}
        />

        {/* 地面線 */}
        <div style={{ position: 'absolute', bottom: 22, left: 0, right: 0, height: 2, background: '#ddd', borderRadius: 1 }} />
      </div>
    </div>
  );
}

function IntoScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 120, height: 60 }}>
        {/* 障礙壁層 */}
        <div style={{ position: 'absolute', right: 30, top: 10, bottom: 10, width: 6, background: 'rgba(144,164,174,0.2)', borderRadius: 3 }} />
        <motion.div
          animate={{ 
            x: [0, -10, 0],
            backgroundColor: ['#cfd8dc', '#90a4ae', '#cfd8dc']
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.3] }}
          style={{ position: 'absolute', right: 30, top: 10, bottom: 10, width: 6, borderRadius: 3, zIndex: 5 }}
        />

        {/* 衝擊物件 */}
        <motion.div
          animate={{ 
            x: [-40, 75, 70],
            scaleX: [1.5, 0.8, 1],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.25, 0.6], ease: "easeIn" }}
          style={{ position: 'absolute', left: 10, top: '50%', marginTop: -10, width: 30, height: 20, background: 'linear-gradient(90deg, #1565c0, #42a5f5)', borderRadius: '4px 12px 12px 4px', zIndex: 10 }}
        />

        {/* 穿透瞬間的火花 */}
        <motion.div
          animate={{ 
            scale: [0, 2],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.22, 0.5] }}
          style={{ position: 'absolute', right: 25, top: '50%', marginTop: -20, width: 40, height: 40, border: '2px solid #ffb74d', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
}

function OutScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        {/* 盒子底座 */}
        <div style={{ position: 'absolute', bottom: 10, left: 15, right: 15, height: 35, border: '3px solid #546e7a', borderTop: 'none', borderRadius: '0 0 12px 12px', background: '#f5f7f8' }} />
        
        {/* 蓋子 (打開動畫) */}
        <motion.div
          animate={{ 
            rotate: [0, -110, -110, 0],
            x: [0, -15, -15, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.7, 1] }}
          style={{ position: 'absolute', bottom: 45, left: 15, width: 50, height: 6, background: '#546e7a', borderRadius: 3, transformOrigin: 'left center', zIndex: 15 }}
        />

        {/* 噴發出的能量球 */}
        <motion.div
          animate={{ 
            y: [0, -60, -70],
            scale: [0.5, 1.2, 1.5],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.45, 0.7], delay: 0.15 }}
          style={{ position: 'absolute', bottom: 30, left: '50%', marginLeft: -12, width: 24, height: 24, borderRadius: '50%', background: 'radial-gradient(circle, #ffeb3b, #fbc02d)', boxShadow: '0 0 15px rgba(251,192,45,0.6)', zIndex: 10 }}
        />
      </div>
    </div>
  );
}

function OffScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 100, height: 60 }}>
        {/* 磁力連接座 */}
        <div style={{ position: 'absolute', left: 15, top: '50%', marginTop: -20, width: 25, height: 40, background: '#455a64', borderRadius: '6px 2px 2px 6px', borderRight: '4px solid #263238' }} />
        
        {/* 被彈開的插頭 */}
        <motion.div
          animate={{ 
            x: [0, 5, -2, 60],
            rotate: [0, 0, 0, 15],
            opacity: [1, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.35, 0.6], ease: "easeIn" }}
          style={{ position: 'absolute', left: 40, top: '50%', marginTop: -15, width: 35, height: 30, background: 'linear-gradient(135deg, #ef5350, #b71c1c)', borderRadius: '2px 8px 8px 2px', borderLeft: '4px solid #d32f2f', zIndex: 10 }}
        >
          <div style={{ position: 'absolute', right: 6, top: '50%', marginTop: -2, width: 8, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
        </motion.div>

        {/* 斷開瞬間的電弧效應 */}
        <motion.div
          animate={{ 
            scale: [0, 1.8],
            opacity: [0, 1, 0],
            rotate: [0, 90]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.38, 0.6] }}
          style={{ position: 'absolute', left: 30, top: '50%', marginTop: -20, width: 20, height: 40, borderLeft: '3px solid #ff9800', borderRight: '3px solid #ff9800', borderRadius: '50%' }}
        />
      </div>
    </div>
  );
}

function OnScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        {/* 底座平面 */}
        <div style={{ position: 'absolute', bottom: 20, left: 10, right: 10, height: 6, background: '#795548', borderRadius: 3 }} />
        
        {/* 接通指示燈 (背景) */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.1, 1, 1, 0.1],
            scale: [0.8, 0.8, 1.1, 1, 0.8]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.4, 0.8, 1] }}
          style={{ position: 'absolute', bottom: 26, left: '50%', marginLeft: -25, width: 50, height: 10, background: 'rgba(76,175,80,0.3)', filter: 'blur(4px)', borderRadius: '50%' }}
        />

        {/* 降落並接通的方塊 */}
        <motion.div
          animate={{ 
            y: [-50, 0, -5, 0],
            backgroundColor: ['#fff', '#fff', '#4caf50', '#4caf50'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.4, 0.8, 1] }}
          style={{ position: 'absolute', left: '50%', bottom: 26, marginLeft: -15, width: 30, height: 30, borderRadius: 6, border: '3px solid #2e7d32', zIndex: 10 }}
        />
      </div>
    </div>
  );
}

function OverScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 跨欄障礙 */}
      <div style={{ position: 'absolute', bottom: 16, left: '50%', marginLeft: -10 }}>
        <div style={{ width: 20, height: 3, background: '#e65100', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 3, height: 20, background: '#795548', borderRadius: 1 }} />
          <div style={{ width: 3, height: 20, background: '#795548', borderRadius: 1 }} />
        </div>
      </div>
      {/* 金色弧形軌跡線（apex 時亮起） */}
      <motion.svg
        width="80" height="40"
        style={{ position: 'absolute', bottom: 30, left: '50%', marginLeft: -40, zIndex: 3 }}
        animate={{ opacity: [0, 0, 0.8, 0.8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.38, 0.55, 0.7] }}
      >
        <path d="M 5 35 Q 40 -15 75 35" fill="transparent" stroke="#ffd600" strokeWidth="2.5" strokeLinecap="round" />
      </motion.svg>
      {/* 跨欄選手 — apex 處拉長停留（慢動作效果） */}
      <motion.div
        animate={{
          x: [-35, -8, 0, 8, 38],
          y: [0, -18, -32, -18, 0],
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.6, 0.85], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 18, left: '50%', marginLeft: -6, zIndex: 5 }}
      >
        {/* 頭 */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        {/* 身體 */}
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        {/* 腿（跨欄姿勢：apex時前後劈開） */}
        <motion.div
          animate={{ rotate: [-5, 20, 55, 20, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.6, 0.85] }}
          style={{ display: 'flex', gap: 4, marginLeft: -2, transformOrigin: 'top center' }}
        >
          <div style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1 }} />
          <div style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1 }} />
        </motion.div>
      </motion.div>
      {/* Apex 定格光圈效果 */}
      <motion.div
        animate={{ scale: [0, 0, 1.2, 1.2, 0], opacity: [0, 0, 0.4, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.42, 0.52, 0.6] }}
        style={{ position: 'absolute', bottom: 48, left: '50%', marginLeft: -16, width: 32, height: 32, border: '2px solid #ffd600', borderRadius: '50%', zIndex: 4 }}
      />
    </div>
  );
}

function ThroughScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 隧道山體（實體 → 火車進入後變半透明 X-Ray） */}
      <motion.div
        animate={{
          backgroundColor: ['#8d6e63', '#8d6e63', 'rgba(141,110,99,0.25)', 'rgba(141,110,99,0.25)', '#8d6e63'],
          borderColor: ['transparent', 'transparent', '#8d6e63', '#8d6e63', 'transparent'],
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.3, 0.65, 0.75] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -30, top: 6, width: 60, height: 52, borderRadius: '30px 30px 0 0', border: '2px solid transparent', zIndex: 6 }}
      >
        {/* 隧道口（左） */}
        <div style={{ position: 'absolute', bottom: 0, left: -2, width: 14, height: 32, background: 'inherit', borderRadius: '14px 0 0 0' }} />
        {/* 隧道口（右） */}
        <div style={{ position: 'absolute', bottom: 0, right: -2, width: 14, height: 32, background: 'inherit', borderRadius: '0 14px 0 0' }} />
      </motion.div>
      {/* 隧道內部空洞 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -16, top: 26, width: 32, height: 32, background: '#3e2723', borderRadius: '16px 16px 0 0', zIndex: 5 }} />
      {/* 鐵軌 */}
      <div style={{ position: 'absolute', bottom: 16, left: 3, right: 3, height: 3, background: '#9e9e9e', borderRadius: 1 }} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 14, left: 6 + i * 11, width: 5, height: 3, background: '#795548', borderRadius: 1 }} />
      ))}
      {/* 火車 */}
      <motion.div
        animate={{ x: [-75, 85] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 19, left: '50%', marginLeft: -14, zIndex: 10, display: 'flex' }}
      >
        {/* 車頭燈光（穿透隧道的光束） */}
        <motion.div
          style={{ position: 'absolute', top: -2, right: -20, width: 24, height: 20, background: 'linear-gradient(90deg, rgba(255,235,59,0.5), transparent)', borderRadius: '0 50% 50% 0', filter: 'blur(2px)' }}
        />
        {/* 車頭 */}
        <div style={{ width: 22, height: 16, background: '#1565c0', borderRadius: '4px 8px 2px 2px', border: '1.5px solid #0d47a1', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 3, left: 3, width: 6, height: 5, background: '#90caf9', borderRadius: 1 }} />
          {/* 車頭燈 */}
          <div style={{ position: 'absolute', top: 5, right: -1, width: 3, height: 4, background: '#ffeb3b', borderRadius: '0 2px 2px 0' }} />
          <div style={{ position: 'absolute', bottom: -4, left: 2, width: 5, height: 4, background: '#37474f', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -4, right: 2, width: 5, height: 4, background: '#37474f', borderRadius: '50%' }} />
        </div>
        {/* 車廂 */}
        <div style={{ width: 16, height: 13, background: '#42a5f5', borderRadius: 2, marginLeft: 2, marginTop: 3, border: '1px solid #1e88e5', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: -4, left: 2, width: 4, height: 4, background: '#37474f', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -4, right: 2, width: 4, height: 4, background: '#37474f', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* 隧道內遮罩（火車進入前蓋住洞口） */}
      <motion.div
        animate={{
          opacity: [1, 1, 0, 0, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.3, 0.65, 0.75] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -14, top: 28, width: 28, height: 30, background: '#3e2723', zIndex: 12 }}
      />
    </div>
  );
}

function BackScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人物（站在左邊丟迴力鏢） */}
      <div style={{ position: 'absolute', left: 12, bottom: 20 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </div>
      {/* 伸出的手 */}
      <motion.div
        animate={{ rotate: [0, -20, 0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.3, 0.7, 0.8] }}
        style={{ position: 'absolute', left: 24, top: 34, width: 12, height: 5, background: '#F5CBA7', borderRadius: 3, border: '1px solid #E59866', transformOrigin: 'left center' }}
      />
      {/* 迴力鏢 */}
      <motion.div
        animate={{
          x: [0, 55, 55, 0],
          y: [0, -25, -20, 0],
          rotate: [0, 360, 720, 1080],
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 0.85], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 35, top: 30, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 5, width: 4, height: 12, background: '#e65100', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 4, left: 0, width: 14, height: 4, background: '#e65100', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 飛行弧線 */}
      <svg width="70" height="30" style={{ position: 'absolute', left: 28, top: 10, opacity: 0.12 }}>
        <path d="M 5 25 Q 35 -5 65 25" fill="transparent" stroke="#e65100" strokeWidth="2" strokeDasharray="4 3" />
      </svg>
    </div>
  );
}

function AwayScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面（透視延伸感） */}
      <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 門框（固定在近景） */}
      <div style={{ position: 'absolute', left: 2, top: 4, bottom: 16, width: 28 }}>
        <div style={{ position: 'absolute', inset: 0, border: '3px solid #795548', borderBottom: 'none', borderRadius: '3px 3px 0 0' }} />
        {/* 推開的門（往左開） */}
        <motion.div
          animate={{ rotateY: [0, 0, -60, -60, -60, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.15, 0.6, 0.85, 0.95] }}
          style={{ position: 'absolute', top: 3, left: 3, width: 22, height: '100%', background: '#8d6e63', borderRadius: 2, transformOrigin: 'left center' }}
        >
          <div style={{ position: 'absolute', right: 3, top: '50%', marginTop: -2, width: 3, height: 4, background: '#ffd600', borderRadius: '50%' }} />
        </motion.div>
      </div>
      {/* 人的背影越走越遠 — 縮小 + 失焦 */}
      <motion.div
        animate={{
          x: [5, 8, 55],
          scale: [0.9, 0.9, 0.3],
          opacity: [0, 1, 0.25],
          filter: ['blur(0px)', 'blur(0px)', 'blur(1.5px)'],
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.8], ease: 'easeIn' }}
        style={{ position: 'absolute', left: 20, bottom: 17, transformOrigin: 'bottom center', zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 腳印（漸淡排列） */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.4 - i * 0.08, 0.4 - i * 0.08, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.15 + i * 0.08, 0.22 + i * 0.08, 0.75, 0.85] }}
          style={{ position: 'absolute', bottom: 17, left: 26 + i * 10, width: 3, height: 4, background: '#b0bec5', borderRadius: 2 }}
        />
      ))}
    </div>
  );
}

function InScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 信箱 */}
      <div style={{ position: 'absolute', right: 15, bottom: 16 }}>
        {/* 信箱柱子 */}
        <div style={{ width: 4, height: 28, background: '#795548', margin: '0 auto', borderRadius: 1 }} />
        {/* 信箱本體 */}
        <div style={{ position: 'absolute', top: 0, left: -10, width: 24, height: 18, background: '#1565c0', borderRadius: '4px 4px 2px 2px', border: '1px solid #0d47a1' }}>
          {/* 投信口 */}
          <div style={{ position: 'absolute', top: 4, left: 3, right: 3, height: 3, background: '#0d47a1', borderRadius: 1 }} />
        </div>
      </div>
      {/* 信封投入 */}
      <motion.div
        animate={{
          x: [0, 20, 28],
          y: [-15, -8, 8],
          rotate: [15, 5, 0],
          opacity: [1, 1, 0],
        }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.5, 0.7], ease: 'easeIn' }}
        style={{ position: 'absolute', left: 22, top: 18, zIndex: 10 }}
      >
        {/* 信封 */}
        <div style={{ width: 18, height: 12, background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '6px solid #bdbdbd' }} />
        </div>
      </motion.div>
      {/* 手（投信的手） */}
      <motion.div
        animate={{ x: [0, 15, 15], y: [0, 5, 5], opacity: [1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.55] }}
        style={{ position: 'absolute', left: 8, top: 20, width: 18, height: 8, background: '#F5CBA7', borderRadius: 4, border: '1px solid #E59866' }}
      />
    </div>
  );
}

function ForScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 靶 */}
      <div style={{ position: 'absolute', right: 8, top: '50%', marginTop: -22, width: 8, height: 44, borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#ef5350', borderRadius: 4 }} />
        <div style={{ position: 'absolute', top: 6, left: 1, right: 1, bottom: 6, background: '#fff', borderRadius: 3 }} />
        <div style={{ position: 'absolute', top: 12, left: 2, right: 2, bottom: 12, background: '#ef5350', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -3, marginLeft: -3, width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />
      </div>
      {/* 靶座 */}
      <div style={{ position: 'absolute', right: 10, bottom: 14, width: 4, height: 20, background: '#795548', borderRadius: 1 }} />
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 弓 */}
      <div style={{ position: 'absolute', left: 8, top: '50%', marginTop: -18 }}>
        <svg width="14" height="36">
          <path d="M 12 2 Q -4 18 12 34" fill="transparent" stroke="#795548" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="2" x2="12" y2="34" stroke="#bdbdbd" strokeWidth="1" />
        </svg>
      </div>
      {/* 箭矢射出 */}
      <motion.div
        animate={{ x: [0, 58], opacity: [1, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.6, 0.65], ease: 'easeIn' }}
        style={{ position: 'absolute', left: 18, top: '50%', marginTop: -2, display: 'flex', alignItems: 'center', zIndex: 5 }}
      >
        <div style={{ width: 22, height: 2, background: '#795548', borderRadius: 1 }} />
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '8px solid #455a64' }} />
      </motion.div>
      {/* 命中效果 */}
      <motion.div
        animate={{ scale: [0, 1.5, 0], opacity: [0, 0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, times: [0.55, 0.65, 0.8] }}
        style={{ position: 'absolute', right: 6, top: '50%', marginTop: -12, width: 24, height: 24, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
    </div>
  );
}

function ForwardScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前方目標旗幟 */}
      <div style={{ position: 'absolute', right: 10, bottom: 20 }}>
        <div style={{ width: 2, height: 32, background: '#795548' }} />
        <motion.div
          animate={{ skewX: [0, 3, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ position: 'absolute', top: 0, left: 2, width: 14, height: 10, background: '#4caf50', borderRadius: '0 2px 2px 0' }}
        />
      </div>
      {/* 前方箭頭路標 */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -6, width: 12, height: 2, background: '#bdbdbd' }}>
        <div style={{ position: 'absolute', right: -4, top: -3, width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #bdbdbd' }} />
      </div>
      {/* 人物大步向前 */}
      <motion.div
        animate={{ x: [-20, 35] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 15, bottom: 20, transformOrigin: 'bottom center' }}
      >
        {/* 身體前傾 */}
        <div style={{ transform: 'rotate(8deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
        {/* 走路的腿 */}
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div
            animate={{ rotate: [20, -20, 20] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }}
          />
          <motion.div
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function AlongScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 河流 */}
      <div style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: 22, background: 'linear-gradient(180deg, #bbdefb, #90caf9)' }} />
      {/* 河岸上方 */}
      <div style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: 3, background: '#8d6e63', borderRadius: 1 }} />
      {/* 河岸下方 */}
      <div style={{ position: 'absolute', top: 'calc(45% + 22px)', left: 0, right: 0, height: 3, background: '#8d6e63', borderRadius: 1 }} />
      {/* 岸邊的樹 */}
      {[12, 52].map(x => (
        <div key={x} style={{ position: 'absolute', left: x, top: '22%' }}>
          <div style={{ width: 14, height: 14, background: '#4caf50', borderRadius: '50%', margin: '0 auto' }} />
          <div style={{ width: 4, height: 10, background: '#795548', margin: '0 auto', borderRadius: 1 }} />
        </div>
      ))}
      {/* 小船沿河流漂 */}
      <motion.div
        animate={{ x: [-50, 70] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '47%', left: '50%', marginLeft: -10, zIndex: 5 }}
      >
        {/* 船身 */}
        <div style={{ width: 22, height: 8, background: '#795548', borderRadius: '2px 2px 6px 6px', position: 'relative' }}>
          {/* 人 */}
          <div style={{ position: 'absolute', top: -10, left: 7 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
            <div style={{ width: 3, height: 6, background: '#455a64', margin: '0 auto' }} />
          </div>
        </div>
      </motion.div>
      {/* 水波紋 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-10, 10], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          style={{ position: 'absolute', top: `calc(45% + ${6 + i * 6}px)`, left: 20 + i * 20, width: 12, height: 2, background: '#fff', borderRadius: 1, opacity: 0.5 }}
        />
      ))}
    </div>
  );
}

function AcrossScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 馬路 */}
      <div style={{ position: 'absolute', top: '30%', left: 0, right: 0, height: 34, background: '#616161' }}>
        {/* 斑馬線 */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ position: 'absolute', top: 3, left: 6 + i * 14, width: 9, height: 28, background: '#fff', borderRadius: 1 }} />
        ))}
      </div>
      {/* 人從左走到右 */}
      <motion.div
        animate={{ x: [-20, 75] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 5, top: '35%', zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.45, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.45, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 橫切雷射綠線 — 人走到正中央時亮起 */}
      <motion.div
        animate={{
          scaleX: [0, 0, 1, 1, 0],
          opacity: [0, 0, 0.8, 0.8, 0],
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.42, 0.55, 0.62] }}
        style={{ position: 'absolute', top: 'calc(30% + 17px)', left: 0, right: 0, height: 2, background: '#00e676', zIndex: 8, boxShadow: '0 0 8px #00e676, 0 0 16px rgba(0,230,118,0.3)', transformOrigin: 'center' }}
      />
      {/* 雷射綠線上的小箭頭標記（強調橫跨方向） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.38, 0.44, 0.52, 0.58] }}
        style={{ position: 'absolute', top: 'calc(30% + 12px)', left: 4, zIndex: 9, display: 'flex', alignItems: 'center' }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderRight: '6px solid #00e676' }} />
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.38, 0.44, 0.52, 0.58] }}
        style={{ position: 'absolute', top: 'calc(30% + 12px)', right: 4, zIndex: 9 }}
      >
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #00e676' }} />
      </motion.div>
    </div>
  );
}

function AroundScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 中心物體（大樹） */}
      <div style={{ position: 'absolute', zIndex: 8 }}>
        <div style={{ width: 22, height: 18, background: '#4caf50', borderRadius: '50%', margin: '0 auto', marginBottom: -3 }} />
        <div style={{ width: 6, height: 12, background: '#795548', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 發光圓形軌道 */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', width: 72, height: 72, border: '2px solid #42a5f5', borderRadius: '50%', boxShadow: '0 0 8px rgba(66,165,245,0.3), inset 0 0 8px rgba(66,165,245,0.1)' }}
      />
      {/* 軌道上的小點（裝飾） */}
      {[0, 90, 180, 270].map(deg => (
        <div key={deg} style={{ position: 'absolute', width: 3, height: 3, background: '#90caf9', borderRadius: '50%', transform: `rotate(${deg}deg) translateY(-36px)`, opacity: 0.4 }} />
      ))}
      {/* 人繞著軌道跑（行星軌道） */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 72, height: 72, zIndex: 10 }}
      >
        <div style={{ position: 'absolute', top: -6, left: '50%', marginLeft: -5 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto', boxShadow: '0 0 6px rgba(21,101,192,0.4)' }} />
          <div style={{ width: 4, height: 10, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 軌跡拖尾（跑過的發光痕跡） */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 72, height: 72, zIndex: 9 }}
      >
        <motion.div
          style={{ position: 'absolute', top: -2, left: '50%', marginLeft: -15, width: 20, height: 4, background: 'linear-gradient(90deg, rgba(21,101,192,0.3), transparent)', borderRadius: 2, transformOrigin: 'right center' }}
        />
      </motion.div>
    </div>
  );
}

function TogetherScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 左邊拼圖 */}
      <motion.div
        animate={{ x: [-25, 0, 0, -25] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.75, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', zIndex: 5 }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path d="M 0 4 Q 0 0 4 0 L 14 0 L 14 6 Q 14 10 18 10 Q 22 10 22 6 L 22 0 L 32 0 Q 36 0 36 4 L 36 14 L 30 14 Q 26 14 26 18 Q 26 22 30 22 L 36 22 L 36 32 Q 36 36 32 36 L 0 36 Z" fill="#42a5f5" />
        </svg>
      </motion.div>
      {/* 右邊拼圖 */}
      <motion.div
        animate={{ x: [25, 0, 0, 25] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.75, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', zIndex: 3 }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path d="M 36 4 Q 36 0 32 0 L 22 0 L 22 6 Q 22 10 18 10 Q 14 10 14 6 L 14 0 L 4 0 Q 0 0 0 4 L 0 14 L 6 14 Q 10 14 10 18 Q 10 22 6 22 L 0 22 L 0 32 Q 0 36 4 36 L 36 36 Z" fill="#ff9800" />
        </svg>
      </motion.div>
      {/* 合體閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.4, 0.55] }}
        style={{ position: 'absolute', width: 50, height: 50, background: 'radial-gradient(circle, rgba(255,235,59,0.4), transparent)', borderRadius: '50%' }}
      />
    </div>
  );
}

function ApartScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 積木塔（先完整，然後裂開） */}
      {/* 左半邊 */}
      <motion.div
        animate={{ x: [0, 0, -18], rotate: [0, 0, -15], opacity: [1, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -16, bottom: 16, transformOrigin: 'bottom left' }}
      >
        <div style={{ width: 14, height: 10, background: '#42a5f5', borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: 14, height: 10, background: '#66bb6a', borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: 14, height: 10, background: '#ffa726', borderRadius: 1 }} />
      </motion.div>
      {/* 右半邊 */}
      <motion.div
        animate={{ x: [0, 0, 18], rotate: [0, 0, 12], opacity: [1, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '50%', marginLeft: 2, bottom: 16, transformOrigin: 'bottom right' }}
      >
        <div style={{ width: 14, height: 10, background: '#42a5f5', borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: 14, height: 10, background: '#66bb6a', borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: 14, height: 10, background: '#ffa726', borderRadius: 1 }} />
      </motion.div>
      {/* 頂部積木飛出 */}
      <motion.div
        animate={{ y: [0, 0, -20], x: [0, 0, 8], rotate: [0, 0, 30], opacity: [1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.65] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -7, bottom: 52, width: 14, height: 10, background: '#ef5350', borderRadius: 1 }}
      />
      {/* 裂開瞬間的碎屑 */}
      {[{ x: -10, y: -8 }, { x: 12, y: -12 }, { x: -5, y: 5 }].map((d, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 0, d.x], y: [0, 0, d.y], opacity: [0, 0, 0.8, 0], scale: [0, 0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.5, 0.7] }}
          style={{ position: 'absolute', left: '50%', bottom: 35, width: 4, height: 4, background: '#bdbdbd', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

function BehindScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 大人（前面） */}
      <div style={{ position: 'absolute', left: '42%', bottom: 16, zIndex: 10 }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 6, height: 22, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 6, marginLeft: -3 }}>
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {/* 小孩躲在後面偷看 */}
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '55%', bottom: 16, zIndex: 5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: 'bottom center' }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9800', margin: '0 auto' }}>
            {/* 眼睛 */}
            <div style={{ position: 'absolute', top: 3, right: 1, width: 3, height: 2, background: '#fff', borderRadius: '50%' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 1.5, height: 1.5, background: '#333', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ width: 4, height: 14, background: '#ff9800', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
            <div style={{ width: 2, height: 8, background: '#ff9800', borderRadius: 1 }} />
            <div style={{ width: 2, height: 8, background: '#ff9800', borderRadius: 1 }} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ByScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 整體場景（車經過時震動） */}
      <motion.div
        animate={{ x: [0, 0, -2, 2, -1, 1, 0, 0], y: [0, 0, 1, -1, 0.5, -0.5, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.38, 0.42, 0.46, 0.5, 0.54, 1] }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {/* 地面 */}
        <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
        {/* 站牌 */}
        <div style={{ position: 'absolute', right: 25, bottom: 16 }}>
          <div style={{ width: 3, height: 36, background: '#546e7a', margin: '0 auto' }} />
          <div style={{ position: 'absolute', top: 0, left: -6, width: 15, height: 10, background: '#1565c0', borderRadius: 2 }} />
        </div>
        {/* 路人 */}
        <div style={{ position: 'absolute', right: 14, bottom: 16, zIndex: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto', position: 'relative' }}>
            {/* 頭髮被風吹動 */}
            <motion.div
              animate={{ rotate: [0, 0, -40, -30, -35, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.45, 0.5, 0.6, 1] }}
              style={{ position: 'absolute', top: -1, left: 0, width: 8, height: 4, background: '#455a64', borderRadius: '4px 4px 0 0', transformOrigin: 'right bottom' }}
            />
          </div>
          <div style={{ width: 4, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
          {/* 衣服被吹 */}
          <motion.div
            animate={{ skewX: [0, 0, -15, -10, -12, 0, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.45, 0.5, 0.6, 1] }}
            style={{ width: 10, height: 4, background: '#78909c', borderRadius: 2, marginLeft: -3, marginTop: -6 }}
          />
          <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
            <div style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1 }} />
            <div style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1 }} />
          </div>
        </div>
      </motion.div>
      {/* 跑車極速駛過（在震動層外面，讓車本身不震） */}
      <motion.div
        animate={{ x: [-80, 100] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: 16, left: 0, zIndex: 15 }}
      >
        {/* 動態模糊拖影 */}
        <div style={{ position: 'absolute', top: 1, left: -18, width: 18, height: 10, background: 'linear-gradient(90deg, transparent, rgba(239,83,80,0.3))', borderRadius: 2 }} />
        {/* 車身 */}
        <div style={{ width: 30, height: 10, background: '#ef5350', borderRadius: '4px 6px 2px 2px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 1, left: 5, width: 8, height: 5, background: '#ffcdd2', borderRadius: 1 }} />
          <div style={{ position: 'absolute', top: 1, right: 3, width: 5, height: 5, background: '#ffcdd2', borderRadius: 1 }} />
          <div style={{ position: 'absolute', bottom: -3, left: 3, width: 5, height: 3, background: '#37474f', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -3, right: 3, width: 5, height: 3, background: '#37474f', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* 風壓速度線 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [40, -20], opacity: [0, 0, 0.6, 0, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.32, 0.42, 0.55, 1], delay: i * 0.04 }}
          style={{ position: 'absolute', bottom: 20 + i * 5, left: 20, width: 18, height: 2, background: '#ef9a9a', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

function WithScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 兩人一起走 */}
      <motion.div
        animate={{ x: [-30, 40] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 16, left: '30%', display: 'flex', alignItems: 'flex-end', gap: 2 }}
      >
        {/* 左邊的人 */}
        <div>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
            <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
            <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          </div>
        </div>
        {/* 手牽手的連接 */}
        <div style={{ width: 6, height: 2, background: '#F5CBA7', borderRadius: 1, marginBottom: 14 }} />
        {/* 右邊的人 */}
        <div>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
          <div style={{ width: 4, height: 14, background: '#e53935', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
            <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#e53935', borderRadius: 1, transformOrigin: 'top center' }} />
            <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#e53935', borderRadius: 1, transformOrigin: 'top center' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EvenScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 100, height: 4, background: '#333', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div style={{ width: 20, height: 20, background: '#ff8f00', marginBottom: 4, marginLeft: 5 }} />
        <div style={{ width: 20, height: 20, background: '#ff8f00', marginBottom: 4, marginRight: 5 }} />
        <div style={{ position: 'absolute', left: '50%', bottom: -15, marginLeft: -10, width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '15px solid #333' }} />
      </motion.div>
    </div>
  );
}

function AheadScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 後面的人（灰色，較小） */}
      <motion.div
        animate={{ x: [-5, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 8, bottom: 16 }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ width: 3, height: 10, background: '#bdbdbd', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 2 }}>
          <motion.div animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 6, background: '#bdbdbd', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 6, background: '#bdbdbd', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 前面的人（藍色，領先） */}
      <motion.div
        animate={{ x: [-5, 15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 42, bottom: 16 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 前方的路標 */}
      <div style={{ position: 'absolute', right: 8, bottom: 16 }}>
        <div style={{ width: 3, height: 28, background: '#795548', margin: '0 auto' }} />
        <div style={{ position: 'absolute', top: 2, left: -6, width: 16, height: 8, background: '#4caf50', borderRadius: '0 3px 3px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '4px solid #fff' }} />
        </div>
      </div>
    </div>
  );
}

function AfterScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前面的老鼠 */}
      <motion.div
        animate={{ x: [-15, 55] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 16, left: 30, zIndex: 5 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 尾巴 */}
          <div style={{ width: 10, height: 2, background: '#bdbdbd', borderRadius: 1 }} />
          {/* 身體 */}
          <div style={{ width: 12, height: 8, background: '#bdbdbd', borderRadius: '4px 6px 4px 2px', position: 'relative' }}>
            {/* 耳朵 */}
            <div style={{ position: 'absolute', top: -3, right: 2, width: 4, height: 4, background: '#e0e0e0', borderRadius: '50%' }} />
            {/* 眼睛 */}
            <div style={{ position: 'absolute', top: 2, right: 1, width: 2, height: 2, background: '#333', borderRadius: '50%' }} />
          </div>
        </div>
      </motion.div>
      {/* 後面追的貓 */}
      <motion.div
        animate={{ x: [-15, 55] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 16, left: 5 }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          {/* 尾巴 */}
          <motion.div
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{ width: 3, height: 14, background: '#ff9800', borderRadius: 2, transformOrigin: 'bottom center', marginRight: -1 }}
          />
          {/* 身體 */}
          <div style={{ width: 18, height: 10, background: '#ff9800', borderRadius: '6px 8px 4px 4px', position: 'relative' }}>
            {/* 耳朵 */}
            <div style={{ position: 'absolute', top: -4, right: 2, width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '5px solid #ff9800' }} />
            <div style={{ position: 'absolute', top: -4, right: 7, width: 0, height: 0, borderLeft: '3px solid transparent', borderRight: '3px solid transparent', borderBottom: '5px solid #ff9800' }} />
            {/* 眼睛 */}
            <div style={{ position: 'absolute', top: 2, right: 2, width: 3, height: 3, background: '#333', borderRadius: '50%' }} />
          </div>
        </div>
        {/* 腿 */}
        <div style={{ display: 'flex', gap: 8, marginLeft: 3 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 2, height: 6, background: '#ff9800', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 2, height: 6, background: '#ff9800', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
    </div>
  );
}

function AsideScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 桌面 */}
      <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, height: 4, background: '#8d6e63', borderRadius: 1, zIndex: 2 }} />
      {/* 桌腿 */}
      <div style={{ position: 'absolute', bottom: 6, left: 8, width: 3, height: 14, background: '#795548' }} />
      <div style={{ position: 'absolute', bottom: 6, right: 8, width: 3, height: 14, background: '#795548' }} />
      {/* 桌上散亂的書本 — 被一次 swipe 撥開 */}
      {[
        { left: 12, w: 12, h: 16, bg: '#7b1fa2', r: -5, dx: -30, dr: -25 },
        { left: 26, w: 14, h: 12, bg: '#1565c0', r: 8, dx: -35, dr: -20 },
        { left: 42, w: 10, h: 14, bg: '#e65100', r: -3, dx: 30, dr: 18 },
        { left: 56, w: 12, h: 10, bg: '#2e7d32', r: 6, dx: 35, dr: 25 },
      ].map((book, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 0, book.dx],
            rotate: [book.r, book.r, book.dr],
            opacity: [1, 1, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.5], ease: 'easeOut' }}
          style={{ position: 'absolute', bottom: 24, left: book.left, width: book.w, height: book.h, background: book.bg, borderRadius: 2, transform: `rotate(${book.r}deg)`, zIndex: 3 }}
        >
          <div style={{ margin: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <div style={{ width: '70%', height: 1, background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ width: '50%', height: 1, background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </motion.div>
      ))}
      {/* Swipe 的手 */}
      <motion.div
        animate={{ x: [-15, -15, 60], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5], ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 30, left: 10, zIndex: 10, display: 'flex', alignItems: 'center' }}
      >
        <div style={{ width: 20, height: 10, background: '#F5CBA7', borderRadius: '4px 8px 8px 4px', border: '1.5px solid #E59866' }} />
      </motion.div>
      {/* 清空後的桌面高光 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.15, 0.15, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.85, 1] }}
        style={{ position: 'absolute', bottom: 24, left: '50%', marginLeft: -20, width: 40, height: 14, background: 'radial-gradient(ellipse, rgba(255,235,59,0.3), transparent)', borderRadius: '50%', zIndex: 4 }}
      />
    </div>
  );
}

function AboutScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 地面 */}
      <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 風的弧線 */}
      <motion.svg width="90" height="70" style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -45, opacity: 0.1 }}>
        <motion.path
          animate={{ d: [
            'M 5 50 Q 20 10 45 30 Q 70 50 85 15',
            'M 5 40 Q 25 20 50 40 Q 75 60 85 25',
            'M 5 50 Q 20 10 45 30 Q 70 50 85 15',
          ]}}
          transition={{ duration: 3, repeat: Infinity }}
          fill="transparent" stroke="#78909c" strokeWidth="2"
        />
      </motion.svg>
      {/* 落葉（混亂物理粒子軌跡） */}
      {[
        { x1: 40, y1: 55, x2: -15, y2: 10, r1: 0, r2: 180, c: '#ff9800', sz: 7 },
        { x1: 30, y1: 50, x2: 65, y2: 5, r1: 45, r2: -120, c: '#ef5350', sz: 6 },
        { x1: 45, y1: 58, x2: 75, y2: 30, r1: -20, r2: 200, c: '#8bc34a', sz: 8 },
        { x1: 35, y1: 52, x2: -5, y2: 35, r1: 30, r2: -150, c: '#ffc107', sz: 5 },
        { x1: 50, y1: 56, x2: 20, y2: 3, r1: -45, r2: 160, c: '#795548', sz: 7 },
        { x1: 38, y1: 54, x2: 80, y2: 50, r1: 15, r2: -200, c: '#ff7043', sz: 6 },
        { x1: 42, y1: 60, x2: 5, y2: 55, r1: -10, r2: 130, c: '#4caf50', sz: 5 },
      ].map((leaf, i) => (
        <motion.div
          key={i}
          animate={{
            left: [leaf.x1, leaf.x2],
            top: [leaf.y1, leaf.y2],
            rotate: [leaf.r1, leaf.r2],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: leaf.sz, height: leaf.sz * 0.6,
            background: leaf.c,
            borderRadius: '50% 0 50% 0',
          }}
        />
      ))}
      {/* 落葉原本堆積的地方（地面小堆） */}
      <div style={{ position: 'absolute', bottom: 14, left: '50%', marginLeft: -8 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', bottom: 0, left: i * 5 - 3, width: 6, height: 4, background: ['#795548', '#ff9800', '#4caf50'][i], borderRadius: '3px 3px 1px 1px', opacity: 0.4 }} />
        ))}
      </div>
    </div>
  );
}

const PARTICLE_SCENES = {
  up: UpScene, down: DownScene, into: IntoScene, out: OutScene,
  off: OffScene, on: OnScene, over: OverScene, through: ThroughScene,
  back: BackScene, away: AwayScene,
  in: InScene, for: ForScene, forward: ForwardScene,
  along: AlongScene, across: AcrossScene, around: AroundScene,
  together: TogetherScene, apart: ApartScene, behind: BehindScene,
  by: ByScene, with: WithScene, even: EvenScene,
  ahead: AheadScene, after: AfterScene, aside: AsideScene,
  about: AboutScene,
};

export default function ParticleScene({ particle }) {
  const Scene = PARTICLE_SCENES[particle];
  if (Scene) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 12 }}><Scene /></div>;
  }
  return null;
}
