import { motion } from 'framer-motion';
import VerbScene from './VerbScene';
import ParticleScene from './ParticleScene';
import { VERB_CORES, PARTICLE_DIRECTIONS } from '../data/phrasalVerbs';
import { PHRASAL_SCENES } from './PhrasalScenes';

export default function IntegrationAnim({ verb, particle, meaning }) {
  const rawVerbCore = VERB_CORES[verb]?.core || '核心動作';
  // 移除「」符號，讓排版更乾淨
  const verbCoreText = rawVerbCore.replace(/[「」]/g, '');
  const particleSpatialText = PARTICLE_DIRECTIONS[particle]?.spatial || '空間方向';

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      borderRadius: '12px',
      padding: '10px',
      overflow: 'hidden',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        
        {/* 動詞部分 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '100px', height: '100px', background: '#fff', borderRadius: '16px', 
            border: '1px solid #e0e0e0', position: 'relative', overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <VerbScene verb={verb} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#1565c0', letterSpacing: '0.5px' }}>{verb.toUpperCase()}</span>
            <span style={{ fontSize: '10px', color: '#999' }}>{verbCoreText}</span>
          </div>
        </div>

        <div style={{ fontSize: '24px', fontWeight: '300', color: '#ddd', marginTop: '-25px' }}>+</div>

        {/* 介係詞部分 */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '100px', height: '100px', background: '#fff', borderRadius: '16px', 
            border: '1px solid #e0e0e0', position: 'relative', overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <ParticleScene particle={particle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#7b1fa2', letterSpacing: '0.5px' }}>{particle.toUpperCase()}</span>
            <span style={{ fontSize: '10px', color: '#999' }}>{particleSpatialText}</span>
          </div>
        </div>

        <div style={{ fontSize: '24px', fontWeight: '300', color: '#ddd', marginTop: '-25px' }}>=</div>

        {/* 整合結果部分 */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              width: '150px', height: '100px', background: '#fff', 
              borderRadius: '16px', border: '2px solid #0070f3', position: 'relative', overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,112,243,0.08)'
            }}
          >
            <PhrasalVerbScene verb={verb} particle={particle} />
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '800', color: '#0070f3', letterSpacing: '0.5px' }}>{verb.toUpperCase()} {particle.toUpperCase()}</span>
            <span style={{ fontSize: '11px', color: '#444', fontWeight: '500' }}>{meaning}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

const LEGACY_SCENES = {
  Pick_up: PickUpDetailed,
  Get_up: GetUpDetailed,
  Take_off: TakeOffDetailed,
  Break_down: BreakDownDetailed,
  Run_away: RunAwayDetailed,
  Look_into: LookIntoDetailed,
};

function PhrasalVerbScene({ verb, particle }) {
  const key = `${verb}_${particle}`;
  const Scene = PHRASAL_SCENES[key] || LEGACY_SCENES[key];
  if (Scene) return <Scene />;

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #0070f3, #7b1fa2)', borderRadius: 10, boxShadow: '0 4px 15px rgba(0,112,243,0.15)' }}
      />
    </div>
  );
}

function PickUpDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      {/* 陰影 */}
      <motion.div
        animate={{ 
          scale: [1, 1, 1.5, 1.5],
          opacity: [0.2, 0.2, 0.1, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{
          position: 'absolute', bottom: 15, left: '50%', marginLeft: -15,
          width: 30, height: 6, background: '#000', borderRadius: '50%', filter: 'blur(2px)'
        }}
      />

      {/* 箱子 - 增加細節 */}
      <motion.div
        animate={{ 
          y: [60, 60, 15, 15],
          rotate: [0, 0, -2, -2],
          opacity: [1, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{
          position: 'absolute', left: '50%', marginLeft: -18,
          width: 36, height: 32, background: '#D2B48C', border: '2px solid #8B4513', borderRadius: 2,
          zIndex: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}
      >
        <div style={{ width: '100%', height: 2, background: '#8B4513', marginBottom: 4 }} />
        <div style={{ width: 12, height: 8, border: '1px solid #8B4513', borderRadius: 2 }} />
      </motion.div>

      {/* 手臂與細節手掌 - 增加指節感 */}
      <motion.div
        animate={{ 
          y: [-30, 32, -10, -10],
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, zIndex: 10 }}
      >
        {/* 手臂 */}
        <div style={{ width: 10, height: 45, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        {/* 手掌 */}
        <div style={{ position: 'relative', width: 30, height: 18, background: '#F5CBA7', borderRadius: '4px 4px 10px 10px', border: '2px solid #E59866', borderTop: 'none' }}>
           {/* 手指細節 */}
           <div style={{ position: 'absolute', bottom: 2, left: 4, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
           <div style={{ position: 'absolute', bottom: 2, left: 11, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
           <div style={{ position: 'absolute', bottom: 2, left: 18, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
        </div>
      </motion.div>

      {/* 抓取瞬間的衝擊波 */}
      <motion.div
        animate={{ 
          scale: [0, 1.5],
          opacity: [0, 0.8, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 1] }}
        style={{
          position: 'absolute', left: '50%', top: '65%', marginLeft: -20,
          width: 40, height: 40, border: '2px solid #FFD700', borderRadius: '50%'
        }}
      />

      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 2, background: '#ddd' }} />
    </div>
  );
}

function GetUpDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      {/* 陰影 */}
      <motion.div
        animate={{ opacity: [0.3, 0.3, 0.1, 0.1], scaleX: [1, 1, 0.8, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -30, width: 60, height: 6, background: '#000', borderRadius: '50%', filter: 'blur(2px)' }}
      />

      {/* 床架與枕頭 */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', width: 90, height: 8, background: '#8D6E63', borderRadius: 4, borderBottom: '2px solid #5D4037' }} />
      <div style={{ position: 'absolute', bottom: 28, left: '25%', width: 24, height: 12, background: '#ECEFF1', borderRadius: '4px 4px 0 0', border: '1px solid #CFD8DC' }} />
      <div style={{ position: 'absolute', bottom: 20, left: '35%', width: 8, height: 12, background: '#795548' }} /> {/* 床腳 */}
      <div style={{ position: 'absolute', bottom: 20, right: '35%', width: 8, height: 12, background: '#795548' }} />

      {/* 火柴人 - 帶有坐起的物理反彈 (Overshoot & Settle) */}
      <motion.div
        animate={{ 
          rotate: [-90, -90, 5, 0], // 躺著 -> 坐起衝過頭 -> 穩定
          y: [62, 62, 28, 30],
          x: [40, 40, 60, 60]
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.5, 1], ease: "easeOut" }}
        style={{ position: 'absolute', transformOrigin: 'bottom center', zIndex: 10 }}
      >
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#455a64', border: '2px solid #263238' }} />
        <div style={{ width: 6, height: 22, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 24, marginLeft: -4, marginTop: -2 }}>
          <div style={{ width: 4, height: 18, background: '#455a64', transform: 'rotate(15deg)', borderRadius: 2 }} />
          <div style={{ width: 4, height: 18, background: '#455a64', transform: 'rotate(-15deg)', borderRadius: 2 }} />
        </div>
      </motion.div>

      {/* ZZZ 睡覺符號 */}
      <motion.div
        animate={{ opacity: [1, 0, 0, 0], y: [45, 20, 20, 20], x: [20, 10, 10, 10] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.35, 1] }}
        style={{ position: 'absolute', fontSize: '12px', color: '#90a4ae', fontWeight: 'bold' }}
      >
        Z<span style={{ fontSize: 10 }}>z</span><span style={{ fontSize: 8 }}>z</span>
      </motion.div>

      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 2, background: '#ddd' }} />
    </div>
  );
}

function TakeOffDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' }}>
      {/* 跑道 */}
      <motion.div 
        animate={{ x: [0, -100] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', bottom: 15, left: 0, width: '200%', height: 4, background: 'repeating-linear-gradient(90deg, #9e9e9e, #9e9e9e 20px, transparent 20px, transparent 40px)' }} 
      />
      
      {/* 飛機 - 準備、拉起、起飛 */}
      <motion.div
        animate={{ 
          x: [-20, 20, 80, 150], // 滑行 -> 拉升 -> 飛出畫面
          y: [70, 70, 20, -30],
          rotate: [0, -10, -30, -30],
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.6, 1], ease: "easeIn" }}
        style={{ position: 'absolute', width: 45, height: 18, zIndex: 10 }}
      >
        {/* 機身 */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', background: '#1565C0', borderRadius: '20px 100% 100% 20px', border: '1px solid #0D47A1' }} />
        {/* 尾翼 */}
        <div style={{ position: 'absolute', top: -8, left: 5, width: 12, height: 15, background: '#1565C0', borderRadius: '4px 4px 0 0', transform: 'skewX(-20deg)', border: '1px solid #0D47A1', borderBottom: 'none' }} />
        {/* 窗戶 */}
        <div style={{ position: 'absolute', top: 4, right: 10, width: 6, height: 6, background: '#90CAF9', borderRadius: '50%' }} />
        
        {/* 噴射氣流 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1], scaleX: [0, 0, 1, 1.5] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
          style={{ position: 'absolute', top: 6, left: -25, width: 25, height: 6, background: 'linear-gradient(90deg, transparent, #FF9800, #FFEB3B)', borderRadius: '10px 0 0 10px', transformOrigin: 'right center' }}
        />
      </motion.div>
    </div>
  );
}

function BreakDownDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      {/* 機器本體 */}
      <motion.div
        animate={{ 
          y: [30, 30, 30, 35], // 運作 -> 震動 -> 崩塌
          rotate: [0, -5, 5, -2, 2, 0],
          scaleY: [1, 1, 1, 0.8] // 垮下去
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -25, width: 50, height: 45, background: '#78909c', borderRadius: 6, border: '2px solid #455a64', transformOrigin: 'bottom center', overflow: 'hidden' }}
      >
        {/* 齒輪 */}
        <motion.div 
          animate={{ rotate: [0, 360, 360, 360] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          style={{ position: 'absolute', top: 10, left: 15, width: 16, height: 16, border: '3px dashed #cfd8dc', borderRadius: '50%' }} 
        />
        
        {/* 裂痕 (故障瞬間出現) */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
          style={{ position: 'absolute', top: -5, left: 20, width: 3, height: 60, background: '#ef5350', transform: 'rotate(25deg)' }}
        />
        <motion.div
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
          style={{ position: 'absolute', top: 15, left: 5, width: 30, height: 3, background: '#ef5350', transform: 'rotate(-15deg)' }}
        />
      </motion.div>

      {/* 冒煙特效 */}
      <motion.div
        animate={{ y: [20, -10], opacity: [0, 0, 0.8, 0], scale: [0.5, 1.5] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
        style={{ position: 'absolute', top: 15, left: '50%', marginLeft: -10, width: 20, height: 20, background: '#9e9e9e', borderRadius: '50%', filter: 'blur(4px)' }}
      />
      
      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 2, background: '#ddd' }} />
    </div>
  );
}


function RunAwayDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#fff' }}>
      {/* 危險標誌 (危險源) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', left: 10, top: '40%', fontSize: 24 }}
      >
        ⚠️
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -10, 120, 120], // 看到危險先往後退一步 -> 轉身狂奔 -> 跑出畫面
          skewX: [0, 10, -25, -25], // 奔跑時的前傾物理感
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.7, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', left: 45, top: 30 }}
      >
        {/* 奔跑的人形 */}
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935' }} />
        <div style={{ width: 4, height: 18, background: '#e53935', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 8, marginTop: -4 }}>
           <motion.div animate={{ rotate: [45, -45, 45] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 12, background: '#e53935', transformOrigin: 'top' }} />
           <motion.div animate={{ rotate: [-45, 45, -45] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 12, background: '#e53935', transformOrigin: 'top' }} />
        </div>
      </motion.div>

      {/* 揚塵/速度線 (只有在奔跑階段才出現) */}
      <motion.div
        animate={{ x: [45, -10], opacity: [0, 0, 0.8, 0], scaleX: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.4, 0.7] }}
        style={{ position: 'absolute', top: 55, left: 45, width: 30, height: 2, background: '#ffcdd2', transformOrigin: 'right' }}
      />
      <div style={{ position: 'absolute', bottom: 15, left: 10, right: 10, height: 2, background: '#eee' }} />
    </div>
  );
}

function LookIntoDetailed() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      {/* 被觀察的文件 (File) */}
      <div style={{ position: 'absolute', top: 25, left: '50%', marginLeft: -25, width: 50, height: 60, background: '#f5f5f5', border: '2px solid #cfd8dc', borderRadius: 4, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '70%', height: 2, background: '#b0bec5', margin: '10px auto 6px' }} />
        <div style={{ width: '70%', height: 2, background: '#b0bec5', margin: '6px auto' }} />
        <div style={{ width: '40%', height: 2, background: '#b0bec5', margin: '6px auto' }} />
        
        {/* 隱藏的秘密/BUG (被放大鏡掃到才會變大) */}
        <motion.div
          animate={{ scale: [1, 1, 2, 2, 1], color: ['#90a4ae', '#90a4ae', '#d32f2f', '#d32f2f', '#90a4ae'], opacity: [0.5, 0.5, 1, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.8, 0.9] }}
          style={{ position: 'absolute', top: 35, left: 15, fontSize: 8, fontWeight: 'bold' }}
        >
          BUG
        </motion.div>
      </div>

      {/* 放大鏡 - 掃描並穿透/放大 */}
      <motion.div
        animate={{ 
          x: [-20, 20, 0, 0, -20], // 左右掃描 -> 定格在 BUG 上
          y: [-10, -10, 10, 10, -10],
          scale: [1, 1, 1.5, 1.5, 1] // 找到目標後放大 (Into 的深入感)
        }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', top: 25, left: '50%', marginLeft: -15, zIndex: 10 }}
      >
        <div style={{ width: 30, height: 30, border: '4px solid #546e7a', borderRadius: '50%', background: 'rgba(227, 242, 253, 0.6)', backdropFilter: 'blur(1px)' }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', transform: 'rotate(-45deg)', position: 'absolute', bottom: -8, right: -4, borderRadius: 2 }} />
      </motion.div>
    </div>
  );
}
