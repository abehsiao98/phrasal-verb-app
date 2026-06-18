import { motion } from 'framer-motion';

// ═══════════════════════════════════════
// 動詞場景 — 純 CSS/SVG 刻畫核心動作
// ═══════════════════════════════════════

function LookScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 60, height: 34, background: '#f8f9fa', border: '2px solid #455a64', borderRadius: '80% 10%' }}>
        <motion.div
          animate={{ x: [-12, 12, -12] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -10, marginLeft: -10, width: 20, height: 20, background: '#1565c0', borderRadius: '50%' }}
        >
          <div style={{ position: 'absolute', top: 4, left: 4, width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />
        </motion.div>
      </div>
      <motion.div
        animate={{ scaleX: [0, 1.5], opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', left: '60%', width: 40, height: 20, background: 'linear-gradient(90deg, rgba(21,101,192,0.2), transparent)', borderRadius: '0 50% 50% 0', transformOrigin: 'left center' }}
      />
    </div>
  );
}

function TurnScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #e0e0e0, #bdbdbd)', border: '3px solid #757575' }}>
        <motion.div 
          animate={{ rotate: [0, 180, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 24, height: 3, background: '#d32f2f', borderRadius: 2, transformOrigin: 'left center', marginTop: -1.5 }} 
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 8, background: '#424242', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

function GetScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      {/* 狀態 A 的平台 */}
      <div style={{ position: 'absolute', bottom: 25, left: 15, width: 30, height: 6, background: '#e0e0e0', borderRadius: 3 }} />
      <div style={{ position: 'absolute', bottom: 10, left: 20, fontSize: 10, fontWeight: 'bold', color: '#9e9e9e' }}>A</div>
      
      {/* 狀態 B 的平台 */}
      <div style={{ position: 'absolute', bottom: 25, right: 15, width: 30, height: 6, background: '#c8e6c9', borderRadius: 3 }} />
      <div style={{ position: 'absolute', bottom: 10, right: 20, fontSize: 10, fontWeight: 'bold', color: '#4caf50' }}>B</div>

      {/* 跨越軌跡線 */}
      <motion.svg width="100" height="40" style={{ position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', overflow: 'visible' }}>
        <path d="M 15 30 Q 50 -10 85 30" fill="transparent" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="4 4" />
      </motion.svg>

      {/* 發生狀態改變的物體 */}
      <motion.div 
        animate={{ 
          x: [-35, 35, 35, -35], // 從 A 跳到 B
          y: [30, 30, 30, 30],
          scale: [1, 1, 1, 1],
          backgroundColor: ['#90a4ae', '#4caf50', '#4caf50', '#90a4ae'], // 顏色隨狀態改變
          borderRadius: ['50%', '8px', '8px', '50%'] // 形狀隨狀態改變
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.9], ease: "easeInOut" }}
        style={{ position: 'absolute', top: 5, width: 20, height: 20, zIndex: 5 }}
      />
    </div>
  );
}

function TakeScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      {/* 目標物體 */}
      <motion.div 
        animate={{ x: [0, 0, -40, 0], opacity: [1, 1, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', right: 25, width: 18, height: 18, background: '#ff9800', borderRadius: 3, border: '1px solid #e65100', zIndex: 2 }} 
      />
      
      {/* 拿取的手臂 - 橫向 snatch */}
      <motion.div
        animate={{ 
          x: [-40, 20, -40, -40], // 伸出去 -> 抓到 -> 拿回來
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center', zIndex: 5 }}
      >
        {/* 手臂 */}
        <div style={{ width: 40, height: 12, background: '#F5CBA7', borderTop: '2px solid #E59866', borderBottom: '2px solid #E59866' }} />
        {/* 手掌 (側視) */}
        <div style={{ position: 'relative', width: 18, height: 20, background: '#F5CBA7', borderRadius: '4px 8px 8px 4px', border: '2px solid #E59866', borderLeft: 'none' }}>
           {/* 大拇指 */}
           <motion.div 
             animate={{ rotate: [0, 30, 0, 0] }}
             transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
             style={{ position: 'absolute', top: -4, right: 2, width: 8, height: 6, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: '4px 4px 0 0', borderBottom: 'none', transformOrigin: 'bottom left' }} 
           />
           {/* 其他手指 */}
           <motion.div 
             animate={{ rotate: [0, -20, 0, 0] }}
             transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
             style={{ position: 'absolute', bottom: -4, right: 2, width: 8, height: 6, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: '0 0 4px 4px', borderTop: 'none', transformOrigin: 'top left' }} 
           />
        </div>
      </motion.div>
    </div>
  );
}

function PutScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', bottom: 25, left: 25, right: 25, height: 3, background: '#795548', borderRadius: 1 }} />
      <motion.div 
        animate={{ y: [-30, 10, -30] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ width: 26, height: 26, borderRadius: 4, background: '#ff9800', border: '1px solid #e65100' }} 
      />
    </div>
  );
}

function GoScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div 
        animate={{ x: [-50, 50] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: 20, height: 20, borderRadius: '50%', background: '#1565c0' }} 
      />
    </div>
  );
}

function ComeScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'absolute', left: 25, width: 14, height: 14, borderRadius: '50%', background: '#4caf50' }} />
      <motion.div 
        animate={{ x: [60, -10], scale: [0.5, 1.2], opacity: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ width: 18, height: 18, borderRadius: '50%', background: '#1565c0' }} 
      />
    </div>
  );
}

function BreakScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ position: 'relative', width: 40, height: 40 }}>
        {/* 左半塊 */}
        <motion.div 
          animate={{ x: [0, -4, -4, 0], y: [0, 2, 2, 0], rotate: [0, -10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
          style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 40, background: '#42a5f5', borderRadius: '4px 0 0 4px', transformOrigin: 'bottom right' }}
        />
        {/* 右半塊 */}
        <motion.div 
          animate={{ x: [0, 4, 4, 0], y: [0, 4, 4, 0], rotate: [0, 15, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
          style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 40, background: '#42a5f5', borderRadius: '0 4px 4px 0', transformOrigin: 'bottom left' }}
        />
        {/* 爆裂瞬間高光 */}
        <motion.div
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.05, 0.15] }}
          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -15, marginLeft: -15, width: 30, height: 30, background: 'radial-gradient(circle, #ffeb3b 0%, transparent 70%)' }}
        />
      </div>
    </div>
  );
}

function RunScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div 
        animate={{ x: [-60, 60], y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{ width: 18, height: 18, borderRadius: '50%', background: '#e53935' }} 
      />
    </div>
  );
}

function GiveScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#546e7a', marginRight: 20 }} />
      <motion.div 
        animate={{ x: [-10, 30, -10], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ width: 18, height: 18, borderRadius: 4, background: '#ff9800' }} 
      />
    </div>
  );
}

function PickScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
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
      {/* 挑選的手 - 直接、果斷地捏取目標 */}
      <motion.div
        animate={{ y: [-30, 20, 20, -30], scale: [1, 1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {/* 手臂 */}
        <div style={{ width: 6, height: 25, background: '#F5CBA7', borderLeft: '1px solid #E59866' }} />
        {/* 手指/鑷子捏合動作 */}
        <motion.div 
          animate={{ width: [24, 24, 12, 24] }} // 寬度縮小代表「捏住」
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1], ease: "easeInOut" }}
          style={{ position: 'relative', height: 16, background: '#F5CBA7', borderRadius: '4px', border: '1px solid #E59866' }}
        >
          {/* 左指 */}
          <div style={{ position: 'absolute', bottom: -6, left: 0, width: 4, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', borderRadius: '0 0 2px 2px' }} />
          {/* 右指 */}
          <div style={{ position: 'absolute', bottom: -6, right: 0, width: 4, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', borderRadius: '0 0 2px 2px' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function SimpleVerbScene({ color }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 30, height: 30, borderRadius: '50%', background: color || '#7b1fa2', boxShadow: `0 3px 10px ${color || '#7b1fa2'}44` }} 
      />
    </div>
  );
}

const VERB_SCENES = {
  Look: LookScene, Turn: TurnScene, Get: GetScene,
  Take: TakeScene, Put: PutScene, Go: GoScene,
  Come: ComeScene, Break: BreakScene, Run: RunScene, Give: GiveScene,
  Pick: PickScene,
};

const SIMPLE_VERB_SCENES = {
  Bring: { color: '#1565c0' },
  Set:   { color: '#546e7a' },
  Make:  { color: '#e65100' },
  Hold:  { color: '#546e7a' },
  Keep:  { color: '#2e7d32' },
  Fall:  { color: '#c62828' },
  Stand: { color: '#546e7a' },
  Cut:   { color: '#c62828' },
  Blow:  { color: '#64b5f6' },
  Work:  { color: '#e65100' },
  Call:  { color: '#1565c0' },
  Pick:  { color: '#ff9800' },
  Throw: { color: '#c62828' },
  Drop:  { color: '#90a4ae' },
  Pull:  { color: '#1565c0' },
  Sign:  { color: '#546e7a' },
  Shut:  { color: '#424242' },
  Hang:  { color: '#795548' },
  Carry: { color: '#1565c0' },
  Check: { color: '#2e7d32' },
  Show:  { color: '#ff9800' },
  Catch: { color: '#e65100' },
  Find:  { color: '#1565c0' },
  Figure:{ color: '#7b1fa2' },
  Fill:  { color: '#1565c0' },
  Point: { color: '#e65100' },
  End:   { color: '#546e7a' },
  Move:  { color: '#1565c0' },
  Wrap:  { color: '#7b1fa2' },
  Clean: { color: '#2e7d32' },
  Sort:  { color: '#1565c0' },
  Back:  { color: '#546e7a' },
  Burn:  { color: '#e65100' },
  Calm:  { color: '#64b5f6' },
  Grow:  { color: '#2e7d32' },
  Wake:  { color: '#ff9800' },
  Mess:  { color: '#c62828' },
  Freak: { color: '#c62828' },
  Pay:   { color: '#2e7d32' },
  Reach: { color: '#1565c0' },
  Kick:  { color: '#e65100' },
  Roll:  { color: '#7b1fa2' },
  Lay:   { color: '#795548' },
  Pass:  { color: '#1565c0' },
  Let:   { color: '#90a4ae' },
};

export default function VerbScene({ verb }) {
  const Scene = VERB_SCENES[verb];
  if (Scene) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 12 }}><Scene /></div>;
  }
  const simple = SIMPLE_VERB_SCENES[verb];
  if (simple) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 12 }}><SimpleVerbScene {...simple} /></div>;
  }
  return null;
}
