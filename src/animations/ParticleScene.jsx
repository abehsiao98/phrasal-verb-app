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
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 10, height: 40, background: '#5d4037', borderRadius: 2 }} />
      <motion.div
        animate={{ x: [-40, 40], y: [0, -30, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', width: 14, height: 14, borderRadius: '50%', background: '#4caf50' }}
      />
    </div>
  );
}

function ThroughScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', gap: 10 }}>
      <div style={{ width: 4, height: 50, background: '#ddd' }} />
      <div style={{ width: 4, height: 50, background: '#ddd' }} />
      <motion.div
        animate={{ x: [-60, 60] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', width: 14, height: 14, borderRadius: '50%', background: '#e53935' }}
      />
    </div>
  );
}

function BackScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', left: 20, width: 16, height: 16, borderRadius: '50%', background: '#4caf50' }} />
      <motion.div
        animate={{ x: [-10, 50, -10], scaleX: [1, 1, -1, -1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0' }}
      />
    </div>
  );
}

function AwayScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      {/* 起點標記 */}
      <div style={{ position: 'absolute', left: 20, top: '50%', marginTop: -4, width: 8, height: 8, borderRadius: '50%', border: '2px solid #ef5350' }} />
      {/* 逐漸遠離縮小 */}
      <motion.div
        animate={{ 
          x: [0, 60], 
          scale: [1, 0], 
          opacity: [1, 0] 
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeIn" }}
        style={{ position: 'absolute', left: 20, top: '50%', marginTop: -8, width: 16, height: 16, borderRadius: '50%', background: '#1565c0', zIndex: 5 }}
      />
      {/* 遠離的揚塵/速度線 */}
      <motion.div
        animate={{ x: [0, 30], opacity: [0, 0.5, 0], scaleX: [0, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        style={{ position: 'absolute', left: 25, top: '50%', marginTop: 2, width: 20, height: 2, background: '#90caf9', transformOrigin: 'left' }}
      />
    </div>
  );
}

function InScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 60, height: 60, border: '2px solid #90a4ae', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 20, height: 20, borderRadius: '50%', background: '#1565c0' }}
        />
      </div>
    </div>
  );
}

function ForScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 80, height: 40 }}>
        <div style={{ position: 'absolute', right: 0, top: '50%', marginTop: -15, width: 30, height: 30, border: '2px dashed #e65100', borderRadius: '50%' }} />
        <motion.div
          animate={{ x: [0, 50], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{ position: 'absolute', left: 0, top: '50%', marginTop: -4, width: 20, height: 8, background: '#e65100', borderRadius: 4 }}
        />
      </div>
    </div>
  );
}

function ForwardScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 100, height: 40 }}>
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ x: [-20, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
            style={{ position: 'absolute', top: '50%', marginTop: -6, width: 12, height: 12, borderRight: '3px solid #1565c0', borderTop: '3px solid #1565c0', transform: 'rotate(45deg)' }}
          />
        ))}
      </div>
    </div>
  );
}

function AlongScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', width: 120, height: 2, background: '#ddd', top: '55%' }} />
      <motion.div
        animate={{ x: [-60, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: 16, height: 16, borderRadius: '50%', background: '#2e7d32', border: '2px solid #1b5e20', marginBottom: 10 }}
      />
    </div>
  );
}

function AcrossScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', width: 2, height: 80, background: '#ddd' }} />
      <motion.div
        animate={{ x: [-50, 50], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 18, height: 18, background: '#c62828', borderRadius: 4 }}
      />
    </div>
  );
}

function AroundScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#ddd' }} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', width: 70, height: 70 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#7b1fa2', position: 'absolute', top: 0, left: '50%', marginLeft: -7 }} />
      </motion.div>
    </div>
  );
}

function TogetherScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 20, height: 20, borderRadius: '50%', background: '#2e7d32', position: 'absolute' }}
      />
      <motion.div
        animate={{ x: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 20, height: 20, borderRadius: '50%', background: '#2e7d32', position: 'absolute' }}
      />
    </div>
  );
}

function ApartScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ x: [0, -40], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 18, height: 18, background: '#c62828', borderRadius: 2, position: 'absolute' }}
      />
      <motion.div
        animate={{ x: [0, 40], opacity: [1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 18, height: 18, background: '#c62828', borderRadius: 2, position: 'absolute' }}
      />
    </div>
  );
}

function BehindScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 50, height: 50, background: '#ddd', borderRadius: 4, zIndex: 10 }} />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 25, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ width: 20, height: 20, borderRadius: '50%', background: '#546e7a', position: 'absolute', zIndex: 5 }}
      />
    </div>
  );
}

function ByScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 40, height: 40, border: '2px solid #ddd', borderRadius: 8 }} />
      <motion.div
        animate={{ x: [-60, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', position: 'absolute', top: '35%' }}
      />
    </div>
  );
}

function WithScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ x: [-50, 50] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: 10 }}
      >
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#2e7d32' }} />
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#2e7d32', opacity: 0.6 }} />
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
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', right: 40, height: 80, width: 4, background: '#f44336' }} />
      <motion.div
        animate={{ x: [-80, 60] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
        style={{ width: 20, height: 12, background: '#1565c0', borderRadius: '0 4px 4px 0' }}
      />
    </div>
  );
}

function AfterScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ x: [-40, 60] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ position: 'relative', width: 80 }}
      >
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#ddd', position: 'absolute', left: 40 }} />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', position: 'absolute', left: 0, top: 2 }}
        />
      </motion.div>
    </div>
  );
}

function AsideScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', width: 120, height: 20, borderTop: '2px dashed #ddd', borderBottom: '2px dashed #ddd' }} />
      <motion.div
        animate={{ x: [-60, 0, 0, 60], y: [0, 0, 30, 30], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
        style={{ width: 16, height: 16, borderRadius: '50%', background: '#7b1fa2' }}
      />
    </div>
  );
}

function AboutScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            x: [0, (i - 2) * 25],
            y: [0, (i % 2 === 0 ? 1 : -1) * 20]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: '#7b1fa2' }}
        />
      ))}
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
