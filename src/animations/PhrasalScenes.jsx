import { motion } from 'framer-motion';

const S = { position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden' };

// ═══════════════════════════════════════
// Look 片語場景
// ═══════════════════════════════════════

// Look into = 調查：放大鏡深入掃描文件找到 BUG
function LookIntoScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', top: 25, left: '50%', marginLeft: -25, width: 50, height: 60, background: '#f5f5f5', border: '2px solid #cfd8dc', borderRadius: 4, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '70%', height: 2, background: '#b0bec5', margin: '10px auto 6px' }} />
        <div style={{ width: '70%', height: 2, background: '#b0bec5', margin: '6px auto' }} />
        <div style={{ width: '40%', height: 2, background: '#b0bec5', margin: '6px auto' }} />
        <motion.div
          animate={{ scale: [1, 1, 2, 2, 1], color: ['#90a4ae', '#90a4ae', '#d32f2f', '#d32f2f', '#90a4ae'], opacity: [0.5, 0.5, 1, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.8, 0.9] }}
          style={{ position: 'absolute', top: 35, left: 15, fontSize: 8, fontWeight: 'bold' }}
        >
          BUG
        </motion.div>
      </div>
      <motion.div
        animate={{ x: [-20, 20, 0, 0, -20], y: [-10, -10, 10, 10, -10], scale: [1, 1, 1.5, 1.5, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', top: 25, left: '50%', marginLeft: -15, zIndex: 10 }}
      >
        <div style={{ width: 30, height: 30, border: '4px solid #546e7a', borderRadius: '50%', background: 'rgba(227, 242, 253, 0.6)' }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', transform: 'rotate(-45deg)', position: 'absolute', bottom: -8, right: -4, borderRadius: 2 }} />
      </motion.div>
    </div>
  );
}

// Look down on = 瞧不起：高處的人俯視低處的小人
function LookDownScene() {
  return (
    <div style={S}>
      {/* 高台 */}
      <div style={{ position: 'absolute', left: 10, bottom: 15, width: 35, height: 55, background: '#e0e0e0', borderRadius: '4px 4px 0 0' }} />
      {/* 高處的人 */}
      <div style={{ position: 'absolute', left: 18, bottom: 70 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 6, height: 18, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 俯視的眼神線（往下看） */}
      <motion.div
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.7, 1] }}
        style={{ position: 'absolute', left: 32, top: 35, width: 2, height: 35, background: 'linear-gradient(180deg, #1565c0, transparent)', transform: 'rotate(30deg)', transformOrigin: 'top center' }}
      />
      {/* 地面的小人（被瞧不起的） */}
      <motion.div
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', right: 22, bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#90a4ae', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Look up = 查資料：翻開書本查找，手指掃過文字
function LookUpScene() {
  return (
    <div style={S}>
      {/* 打開的書 */}
      <div style={{ position: 'absolute', bottom: 18, left: '50%', marginLeft: -40, width: 80, height: 50, display: 'flex' }}>
        {/* 左頁 */}
        <div style={{ flex: 1, background: '#fff', border: '2px solid #cfd8dc', borderRadius: '4px 0 0 4px', padding: 4 }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ width: '80%', height: 2, background: '#e0e0e0', marginBottom: 4 }} />
          ))}
        </div>
        {/* 右頁 */}
        <div style={{ flex: 1, background: '#fff', border: '2px solid #cfd8dc', borderLeft: 'none', borderRadius: '0 4px 4px 0', padding: 4 }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ width: '80%', height: 2, background: '#e0e0e0', marginBottom: 4 }} />
          ))}
          {/* 找到的目標行（高亮） */}
          <motion.div
            animate={{ opacity: [0, 0, 1, 1, 0], backgroundColor: ['transparent', 'transparent', '#fff9c4', '#fff9c4', 'transparent'] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.8, 1] }}
            style={{ width: '80%', height: 3, borderRadius: 1 }}
          />
        </div>
        {/* 書脊 */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#90a4ae' }} />
      </div>
      {/* 掃描的手指 */}
      <motion.div
        animate={{ x: [-10, 10, 10], y: [-20, 5, 15, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.8] }}
        style={{ position: 'absolute', top: 15, right: 15, zIndex: 10 }}
      >
        <div style={{ width: 5, height: 20, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '3px 3px 2px 2px' }} />
      </motion.div>
    </div>
  );
}

// Look out = 當心：人從牆後探頭，前方有危險三角標誌
function LookOutScene() {
  return (
    <div style={S}>
      {/* 牆壁 */}
      <div style={{ position: 'absolute', left: 15, top: 10, bottom: 15, width: 18, background: '#8d6e63', borderRadius: 3 }} />
      {/* 探頭的人 */}
      <motion.div
        animate={{ x: [0, 12, 12, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.6, 0.8] }}
        style={{ position: 'absolute', left: 28, top: 25 }}
      >
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#455a64' }}>
          {/* 眼睛 */}
          <div style={{ position: 'absolute', top: 6, right: 2, width: 4, height: 3, background: '#fff', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 0.5, right: 0.5, width: 2, height: 2, background: '#1565c0', borderRadius: '50%' }} />
          </div>
        </div>
      </motion.div>
      {/* 危險警告三角 */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', right: 15, top: '40%' }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '16px solid transparent', borderRight: '16px solid transparent', borderBottom: '28px solid #ff9800' }} />
        <div style={{ position: 'absolute', top: 14, left: '50%', marginLeft: -2, width: 4, height: 8, background: '#fff', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 24, left: '50%', marginLeft: -2, width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Look over = 審閱：手持文件，眼睛從上掃到下，打勾
function LookOverScene() {
  return (
    <div style={S}>
      {/* 文件 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -22, top: 12, width: 44, height: 58, background: '#fff', border: '2px solid #cfd8dc', borderRadius: 3, padding: 6 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
            <motion.div
              animate={{ borderColor: ['#e0e0e0', '#e0e0e0', '#4caf50', '#4caf50'], background: ['transparent', 'transparent', '#4caf50', '#4caf50'] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.15 + i * 0.12, 0.2 + i * 0.12, 1], delay: 0 }}
              style={{ width: 6, height: 6, border: '1.5px solid #e0e0e0', borderRadius: 1, flexShrink: 0 }}
            />
            <div style={{ flex: 1, height: 2, background: '#e0e0e0', borderRadius: 1 }} />
          </div>
        ))}
      </div>
      {/* 掃描線 */}
      <motion.div
        animate={{ y: [-5, 55], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -20, top: 15, width: 40, height: 2, background: '#1565c0', borderRadius: 1, zIndex: 5, filter: 'blur(0.5px)' }}
      />
    </div>
  );
}

// Look back = 回顧：人走向前方，頭轉回看身後漸淡的腳印
function LookBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 15, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 身後的腳印（漸淡） */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 18, left: 10 + i * 15, width: 6, height: 8, background: '#cfd8dc', borderRadius: 3, opacity: 0.3 + i * 0.15 }} />
      ))}
      {/* 人物 — 身體朝右，頭轉回左 */}
      <div style={{ position: 'absolute', right: 20, bottom: 17 }}>
        <motion.div
          animate={{ rotate: [0, -30, -30, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.7, 0.9] }}
          style={{ width: 16, height: 16, borderRadius: '50%', background: '#455a64', margin: '0 auto', transformOrigin: 'bottom center' }}
        >
          <div style={{ position: 'absolute', top: 6, left: 1, width: 4, height: 3, background: '#fff', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 0.5, left: 0.5, width: 2, height: 2, background: '#333', borderRadius: '50%' }} />
          </div>
        </motion.div>
        <div style={{ width: 6, height: 22, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 6, marginLeft: -3 }}>
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {/* 回望的視線 */}
      <motion.div
        animate={{ opacity: [0, 0.4, 0.4, 0], scaleX: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.7, 0.9] }}
        style={{ position: 'absolute', right: 36, top: 30, width: 25, height: 2, background: 'linear-gradient(270deg, #1565c0, transparent)', transformOrigin: 'right center' }}
      />
    </div>
  );
}

// Look after = 照顧：眼睛(Look)跟在(after)小人後面，視線不離開
function LookAfterScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 小孩在前面走 */}
      <motion.div
        animate={{ x: [15, 55, 15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9800', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#ff9800', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <motion.div style={{ width: 2, height: 8, background: '#ff9800' }} animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 8, background: '#ff9800' }} animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
      {/* 後方的大眼睛（Look = 眼睛，After = 跟在後面盯著） */}
      <div style={{ position: 'absolute', left: 3, top: 12 }}>
        <svg width="30" height="18" viewBox="0 0 30 18">
          <path d="M 2 9 Q 15 -2 28 9 Q 15 20 2 9 Z" fill="#f5f5f5" stroke="#455a64" strokeWidth="2" />
          <motion.g animate={{ x: [1, 7, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <circle cx="15" cy="9" r="5" fill="#1565c0" />
            <circle cx="15" cy="9" r="2.5" fill="#0d47a1" />
            <circle cx="13" cy="7" r="1.5" fill="#fff" opacity="0.7" />
          </motion.g>
        </svg>
      </div>
      {/* 視線追蹤線（眼睛→小孩，隨小孩移動） */}
      <motion.div
        animate={{ width: [20, 50, 20], rotate: [-8, 12, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 28, top: 21, height: 2, background: 'linear-gradient(90deg, rgba(21,101,192,0.25), transparent)', transformOrigin: 'left center' }}
      />
    </div>
  );
}

// Look for = 尋找：眼睛(Look)朝目標(for)方向射出搜索光束，掃射尋找目標
function LookForScene() {
  return (
    <div style={S}>
      {/* 眼睛（左邊） */}
      <div style={{ position: 'absolute', left: 5, top: '50%', marginTop: -10 }}>
        <svg width="28" height="18" viewBox="0 0 28 18">
          <path d="M 2 9 Q 14 -2 26 9 Q 14 20 2 9 Z" fill="#f5f5f5" stroke="#455a64" strokeWidth="2" />
          <circle cx="14" cy="9" r="5" fill="#1565c0" />
          <circle cx="14" cy="9" r="2.5" fill="#0d47a1" />
          <circle cx="12" cy="7" r="1.5" fill="#fff" opacity="0.7" />
        </svg>
      </div>
      {/* 搜索光束（錐形，左右掃射） */}
      <motion.div
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 30, top: '50%', marginTop: -12, width: 45, height: 24, background: 'linear-gradient(90deg, rgba(21,101,192,0.2), rgba(21,101,192,0.05))', borderRadius: '0 50% 50% 0', transformOrigin: 'left center' }}
      />
      {/* 搜索目標物（在光束掃到時高亮） */}
      {[{ x: 55, y: 18, c: '#bdbdbd' }, { x: 70, y: 50, c: '#bdbdbd' }, { x: 62, y: 35, c: '#ff9800' }].map((item, i) => (
        <motion.div
          key={i}
          animate={i === 2 ? { scale: [1, 1, 1.3, 1.3, 1], borderColor: ['#bdbdbd', '#bdbdbd', '#1565c0', '#1565c0', '#bdbdbd'] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.7, 0.8] }}
          style={{ position: 'absolute', left: item.x, top: item.y, width: 10, height: 10, background: item.c, borderRadius: 2, border: '2px solid #bdbdbd' }}
        />
      ))}
      {/* 找到時的十字準星（聚焦） */}
      <motion.div
        animate={{ opacity: [0, 0, 0.7, 0.7, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.7, 0.8] }}
        style={{ position: 'absolute', left: 58, top: 31, width: 18, height: 18, border: '2px solid #1565c0', borderRadius: '50%' }}
      >
        <div style={{ position: 'absolute', top: '50%', left: -3, right: -3, height: 1, background: '#1565c0' }} />
        <div style={{ position: 'absolute', left: '50%', top: -3, bottom: -3, width: 1, background: '#1565c0' }} />
      </motion.div>
    </div>
  );
}

// Look forward to = 期待：人向前探身，前方有閃亮的星星/目標
function LookForwardScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 人物（前傾、期待姿勢） */}
      <div style={{ position: 'absolute', left: 12, bottom: 15, transform: 'rotate(10deg)', transformOrigin: 'bottom center' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 20, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {/* 前方發光的目標/星星 */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', right: 15, top: 20, width: 28, height: 28 }}
      >
        {/* 十字星芒 */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -1, marginLeft: -12, width: 24, height: 3, background: '#ffd600', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -12, marginLeft: -1, width: 3, height: 24, background: '#ffd600', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -5, marginLeft: -5, width: 10, height: 10, background: '#ffd600', borderRadius: '50%' }} />
      </motion.div>
      {/* 光線 */}
      <motion.div
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', right: 0, top: 0, width: 60, height: 80, background: 'radial-gradient(circle at 80% 30%, rgba(255,214,0,0.15), transparent 70%)' }}
      />
    </div>
  );
}

// ═══════════════════════════════════════
// Turn 片語場景
// ═══════════════════════════════════════

// Turn into = 變成：毛毛蟲→繭→蝴蝶
function TurnIntoScene() {
  return (
    <div style={S}>
      {/* 毛毛蟲（消失） */}
      <motion.div
        animate={{ opacity: [1, 1, 0, 0], x: [0, 0, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.35, 1] }}
        style={{ position: 'absolute', left: 15, bottom: 35 }}
      >
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#558b2f' : '#7cb342', marginRight: -2 }} />
        ))}
      </motion.div>
      {/* 繭（出現又消失） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.5, 0.5, 1, 1, 1.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.25, 0.35, 0.5, 0.6, 0.65] }}
        style={{ position: 'absolute', left: '45%', bottom: 30, width: 16, height: 22, background: '#8d6e63', borderRadius: '8px 8px 4px 4px', border: '1px solid #5d4037' }}
      />
      {/* 蝴蝶（展翅飛出） */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1], y: [10, 10, 10, -5, -15], x: [0, 0, 0, 10, 20] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 0.75, 1] }}
        style={{ position: 'absolute', right: 20, top: 25 }}
      >
        <motion.div
          animate={{ scaleX: [1, 0.3, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div style={{ width: 14, height: 18, background: '#ab47bc', borderRadius: '10px 2px 10px 2px', transformOrigin: 'right center' }} />
          <div style={{ width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
          <div style={{ width: 14, height: 18, background: '#ce93d8', borderRadius: '2px 10px 2px 10px', transformOrigin: 'left center' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Turn down = 拒絕/調低：手把音量旋鈕往下轉，音量條降低
function TurnDownScene() {
  return (
    <div style={S}>
      {/* 音量條背景 */}
      <div style={{ position: 'absolute', left: 15, top: 15, bottom: 15, width: 12, background: '#f5f5f5', borderRadius: 6, border: '2px solid #e0e0e0' }}>
        {/* 音量填充（往下降） */}
        <motion.div
          animate={{ height: ['80%', '80%', '20%', '20%'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
          style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(0deg, #4caf50, #8bc34a)', borderRadius: '0 0 4px 4px' }}
        />
      </div>
      {/* 旋鈕 */}
      <div style={{ position: 'absolute', left: 45, top: '50%', marginTop: -22, width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #e0e0e0, #bdbdbd)', border: '3px solid #757575' }}>
        <motion.div
          animate={{ rotate: [0, 0, -120, -120] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 18, height: 3, background: '#d32f2f', borderRadius: 2, transformOrigin: 'left center', marginTop: -1.5 }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 6, height: 6, background: '#424242', borderRadius: '50%' }} />
      </div>
      {/* 聲波消失 */}
      <motion.div
        animate={{ opacity: [0.5, 0.5, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
        style={{ position: 'absolute', right: 10, top: '35%' }}
      >
        {[0, 1].map(i => (
          <div key={i} style={{ width: 10 + i * 6, height: 20 + i * 8, border: `2px solid rgba(33,150,243,${0.5 - i * 0.2})`, borderLeft: 'none', borderRadius: '0 50% 50% 0', position: 'absolute', left: i * 8, top: -i * 4 }} />
        ))}
      </motion.div>
    </div>
  );
}

// Turn up = 出現/調高：埋在地下的東西旋轉(Turn)浮上來(up)
function TurnUpScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', top: '55%', left: 5, right: 5, height: 4, background: '#8d6e63', borderRadius: 2 }} />
      {/* 地下的土 */}
      <div style={{ position: 'absolute', top: '57%', left: 5, right: 5, bottom: 5, background: '#d7ccc8', borderRadius: '0 0 4px 4px' }} />
      {/* 埋在地下的東西旋轉浮上來 */}
      <motion.div
        animate={{ y: [25, 25, -20, -25], rotate: [0, 180, 360, 360], opacity: [0.3, 0.5, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -10, top: '30%', zIndex: 5 }}
      >
        <div style={{ width: 20, height: 20, background: '#ffd600', border: '2px solid #f9a825', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 8, height: 8, background: '#f9a825', borderRadius: '50%' }} />
        </div>
      </motion.div>
      {/* 土塊噴出效果 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ y: [0, 0, -10 - i * 5, -5], x: [0, 0, (i - 1) * 12, (i - 1) * 15], opacity: [0, 0, 0.6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.7] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -2, top: '52%', width: 5, height: 4, background: '#a1887f', borderRadius: 2 }}
        />
      ))}
      {/* 上升箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.5, 0], y: [0, 0, -8, -15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.8] }}
        style={{ position: 'absolute', top: 5, right: 12 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '6px solid #4caf50', margin: '0 auto' }} />
        <div style={{ width: 2, height: 8, background: '#4caf50', margin: '0 auto' }} />
      </motion.div>
    </div>
  );
}

// Turn out = 結果是：迷霧散去→顯現出結果
function TurnOutScene() {
  return (
    <div style={S}>
      {/* 結果（先被遮住，後來顯現） */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '25%', width: 40, height: 36, background: '#4caf50', borderRadius: 6, border: '2px solid #2e7d32', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <svg width="22" height="18"><path d="M 3 9 L 8 14 L 19 3" fill="transparent" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      {/* 迷霧遮罩（從完全遮住→散開消失） */}
      <motion.div
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -28, top: '18%', width: 56, height: 48, zIndex: 5, display: 'flex', flexWrap: 'wrap', gap: 2 }}
      >
        {[0, 1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            animate={{ x: [0, (i % 2 === 0 ? -1 : 1) * 15], y: [0, (i < 3 ? -1 : 1) * 12], opacity: [1, 0], scale: [1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.3, delay: i * 0.08 }}
            style={{ width: 18, height: 14, background: '#b0bec5', borderRadius: 4, filter: 'blur(2px)' }}
          />
        ))}
      </motion.div>
      {/* 上方問號（先出現，後消失） */}
      <motion.div
        animate={{ opacity: [1, 1, 0, 0], scale: [1, 1, 0.5, 0], y: [0, 0, -8, -8] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 0.45] }}
        style={{ position: 'absolute', top: 4, left: '50%', marginLeft: -8, fontSize: 16, fontWeight: 'bold', color: '#757575', zIndex: 10 }}
      >?</motion.div>
      {/* 結果揭曉的光芒 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -25, top: '25%', width: 50, height: 40, background: 'radial-gradient(circle, rgba(76,175,80,0.3), transparent)', borderRadius: '50%', zIndex: 1 }}
      />
    </div>
  );
}

// Turn off = 關閉：燈泡開關拉下，燈熄滅
function TurnOffScene() {
  return (
    <div style={S}>
      {/* 燈泡 */}
      <motion.div
        animate={{ opacity: [1, 1, 0.15, 0.15], filter: ['brightness(1)', 'brightness(1)', 'brightness(0.3)', 'brightness(0.3)'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
        style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -16 }}
      >
        {/* 光暈 */}
        <motion.div
          animate={{ opacity: [0.3, 0.3, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
          style={{ position: 'absolute', top: -8, left: -8, width: 48, height: 48, background: 'radial-gradient(circle, rgba(255,235,59,0.4), transparent)', borderRadius: '50%' }}
        />
        <div style={{ width: 32, height: 32, background: '#ffeb3b', borderRadius: '50% 50% 30% 30%', border: '2px solid #f9a825' }} />
        <div style={{ width: 16, height: 8, background: '#bdbdbd', margin: '0 auto', borderRadius: '0 0 4px 4px', border: '1px solid #9e9e9e', borderTop: 'none' }} />
      </motion.div>
      {/* 開關 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -12, width: 24, height: 30, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 4 }}>
        <motion.div
          animate={{ y: [0, 0, 12, 12] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
          style={{ position: 'absolute', top: 3, left: '50%', marginLeft: -6, width: 12, height: 12, background: '#546e7a', borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

// Turn on = 開啟：開關撥上，燈泡亮起
function TurnOnScene() {
  return (
    <div style={S}>
      {/* 燈泡 */}
      <motion.div
        animate={{ opacity: [0.15, 0.15, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
        style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -16 }}
      >
        <motion.div
          animate={{ opacity: [0, 0, 0.4, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
          style={{ position: 'absolute', top: -8, left: -8, width: 48, height: 48, background: 'radial-gradient(circle, rgba(255,235,59,0.5), transparent)', borderRadius: '50%' }}
        />
        <div style={{ width: 32, height: 32, background: '#ffeb3b', borderRadius: '50% 50% 30% 30%', border: '2px solid #f9a825' }} />
        <div style={{ width: 16, height: 8, background: '#bdbdbd', margin: '0 auto', borderRadius: '0 0 4px 4px', border: '1px solid #9e9e9e', borderTop: 'none' }} />
      </motion.div>
      {/* 開關 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -12, width: 24, height: 30, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 4 }}>
        <motion.div
          animate={{ y: [12, 12, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
          style={{ position: 'absolute', top: 3, left: '50%', marginLeft: -6, width: 12, height: 12, background: '#4caf50', borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

// Turn around = 轉身/扭轉：車子(Turn)掉頭180度(around)，方向完全反轉
function TurnAroundScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 道路 */}
      <div style={{ position: 'absolute', bottom: 15, left: 5, right: 5, height: 16, background: '#78909c', borderRadius: 2 }}>
        <div style={{ position: 'absolute', top: 7, left: 0, right: 0, height: 2, borderTop: '2px dashed #fff', opacity: 0.3 }} />
      </div>
      {/* 車子轉180度 */}
      <motion.div
        animate={{ x: [0, 20, 30, 20, 0], rotate: [0, 0, 180, 180, 180] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 18, left: '30%', transformOrigin: 'center center', zIndex: 5 }}
      >
        <div style={{ width: 24, height: 10, background: '#1565c0', borderRadius: 3, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -4, left: 5, width: 12, height: 6, background: '#1565c0', borderRadius: '3px 3px 0 0' }} />
          <div style={{ position: 'absolute', top: -2, left: 7, width: 8, height: 3, background: '#bbdefb', borderRadius: 1, opacity: 0.7 }} />
        </div>
        <div style={{ position: 'absolute', bottom: -2, left: 3, width: 4, height: 4, background: '#37474f', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -2, right: 3, width: 4, height: 4, background: '#37474f', borderRadius: '50%' }} />
      </motion.div>
      {/* U-turn 弧線箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0.15, 0.3, 0.55, 0.7] }}
        style={{ position: 'absolute', top: 10, left: '40%' }}
      >
        <svg width="30" height="24" viewBox="0 0 30 24">
          <path d="M 5 20 C 5 5, 25 5, 25 20" fill="transparent" stroke="#ff9800" strokeWidth="2" strokeDasharray="3 2" />
          <polygon points="23,18 27,22 23,22" fill="#ff9800" />
        </svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Bring 片語場景
// ═══════════════════════════════════════

// Bring down = 降低/擊垮：柱狀圖的柱子被壓低
function BringDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 15, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 柱狀圖 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ height: [30 + i * 12, 30 + i * 12, 10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1], delay: i * 0.08 }}
          style={{ position: 'absolute', bottom: 17, left: 15 + i * 22, width: 16, background: i === 2 ? '#ef5350' : '#42a5f5', borderRadius: '3px 3px 0 0' }}
        />
      ))}
      {/* 往下的手/壓力 */}
      <motion.div
        animate={{ y: [-15, -15, 25, 25] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.55, 1] }}
        style={{ position: 'absolute', top: 5, right: 12, zIndex: 10 }}
      >
        <div style={{ width: 10, height: 30, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        <div style={{ width: 22, height: 10, background: '#F5CBA7', borderRadius: '0 0 6px 6px', border: '2px solid #E59866', borderTop: 'none', marginLeft: -6 }} />
      </motion.div>
      {/* 下降箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 1] }}
        style={{ position: 'absolute', right: 8, bottom: 25, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '10px solid #ef5350' }}
      />
    </div>
  );
}

// Bring up = 提及/撫養：對話氣泡中出現話題
function BringUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 說話的人 */}
      <div style={{ position: 'absolute', left: 12, bottom: 15 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 對話氣泡浮上來 */}
      <motion.div
        animate={{ y: [15, 15, -5, -5], opacity: [0, 0, 1, 1], scale: [0.5, 0.5, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
        style={{ position: 'absolute', left: 35, top: 10, background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 10, padding: '6px 10px', zIndex: 5 }}
      >
        <div style={{ width: 30, height: 2, background: '#64b5f6', borderRadius: 1, marginBottom: 3 }} />
        <div style={{ width: 20, height: 2, background: '#64b5f6', borderRadius: 1 }} />
        {/* 氣泡三角 */}
        <div style={{ position: 'absolute', bottom: -7, left: 8, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #90caf9' }} />
      </motion.div>
    </div>
  );
}

// Bring out = 推出/激發：從幕後推出新產品
function BringOutScene() {
  return (
    <div style={S}>
      {/* 舞台幕簾 */}
      <div style={{ position: 'absolute', top: 5, left: 0, right: 0, height: 12, background: '#c62828', borderRadius: '0 0 4px 4px' }} />
      <div style={{ position: 'absolute', top: 17, left: 0, width: 20, height: 55, background: '#d32f2f', borderRadius: '0 0 8px 0' }} />
      <div style={{ position: 'absolute', top: 17, right: 0, width: 20, height: 55, background: '#d32f2f', borderRadius: '0 0 0 8px' }} />
      {/* 產品從幕後被推出 */}
      <motion.div
        animate={{ x: [-30, -30, 0, 0], opacity: [0, 0, 1, 1], scale: [0.8, 0.8, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, bottom: 20, zIndex: 5 }}
      >
        <div style={{ width: 30, height: 28, background: '#ff9800', border: '2px solid #e65100', borderRadius: 4 }}>
          <div style={{ width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%', margin: '8px auto 0' }} />
        </div>
      </motion.div>
      {/* 聚光燈 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.2, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 1] }}
        style={{ position: 'absolute', top: 17, left: '50%', marginLeft: -30, width: 60, height: 50, background: 'linear-gradient(180deg, rgba(255,235,59,0.3), transparent)', borderRadius: '0 0 50% 50%' }}
      />
    </div>
  );
}

// Bring back = 帶回/喚起：手把物品帶回原位（往左移動回來）
function BringBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 原位標記（虛線框） */}
      <div style={{ position: 'absolute', left: 12, bottom: 18, width: 22, height: 22, border: '2px dashed #4caf50', borderRadius: 4 }} />
      {/* 物件被帶回來 */}
      <motion.div
        animate={{ x: [50, 50, 0, 0], opacity: [0.4, 0.4, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
        style={{ position: 'absolute', left: 14, bottom: 20, width: 18, height: 18, background: '#1565c0', borderRadius: 4, border: '2px solid #0d47a1', zIndex: 5 }}
      />
      {/* 回來的箭頭軌跡 */}
      <motion.div
        animate={{ opacity: [0, 0.4, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.5, 0.65] }}
      >
        <svg width="60" height="20" style={{ position: 'absolute', left: 30, bottom: 30 }}>
          <path d="M 50 10 Q 25 -5 5 10" fill="transparent" stroke="#90caf9" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 10 5 L 5 10 L 10 15" fill="transparent" stroke="#90caf9" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}

// Bring in = 引入/賺取：從門外引進人才
function BringInScene() {
  return (
    <div style={S}>
      {/* 門框 */}
      <div style={{ position: 'absolute', right: 15, top: 8, width: 35, height: 65, border: '3px solid #795548', borderBottom: 'none', borderRadius: '3px 3px 0 0', background: '#efebe9' }} />
      {/* 人被引進來 */}
      <motion.div
        animate={{ x: [25, 25, -20, -20], opacity: [0, 0.5, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
        style={{ position: 'absolute', right: 22, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 引導的手 */}
      <motion.div
        animate={{ x: [0, 0, -15, -15] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
        style={{ position: 'absolute', left: 15, top: '40%' }}
      >
        <div style={{ width: 25, height: 8, background: '#F5CBA7', borderRadius: 4, border: '1px solid #E59866' }} />
        <div style={{ position: 'absolute', right: -8, top: -2, width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderRight: '10px solid #F5CBA7' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Bring about = 促成：手(Bring)推著球繞一圈(about)，球撞擊後產生結果
function BringAboutScene() {
  return (
    <div style={S}>
      {/* 環形軌道（about = 繞了一圈） */}
      <svg width="70" height="60" viewBox="0 0 70 60" style={{ position: 'absolute', top: 8, left: 6 }}>
        <ellipse cx="35" cy="30" rx="28" ry="22" fill="none" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="4 3" />
      </svg>
      {/* 球沿著軌道繞 */}
      <motion.div
        animate={{
          x: [0, 22, 35, 22, 0],
          y: [-18, -4, 8, 20, -18],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', left: 18, top: 26, width: 10, height: 10, background: '#1565c0', borderRadius: '50%', zIndex: 5 }}
      />
      {/* 推動的手（Bring = 帶著推） */}
      <motion.div
        animate={{ opacity: [1, 1, 0.5, 0, 0], x: [0, 5, 10, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.25, 0.35, 1] }}
        style={{ position: 'absolute', left: 3, top: 20 }}
      >
        <div style={{ width: 14, height: 8, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }} />
      </motion.div>
      {/* 結果（球繞完一圈後撞出結果） */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1.2, 1], opacity: [0, 0, 0, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.75, 0.85, 1] }}
        style={{ position: 'absolute', right: 5, top: '50%', marginTop: -12, width: 24, height: 24, background: '#4caf50', borderRadius: 5, border: '2px solid #2e7d32', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="14" height="10"><path d="M 1 5 L 5 9 L 13 1" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Run 片語場景
// ═══════════════════════════════════════

// Run into = 巧遇：兩人轉角撞在一起
function RunIntoScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 牆角 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -3, top: 10, bottom: 15, width: 6, background: '#8d6e63', borderRadius: 2 }} />
      {/* 左邊的人 */}
      <motion.div
        animate={{ x: [0, 0, 15, 12] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.45, 0.6] }}
        style={{ position: 'absolute', left: 12, bottom: 15 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* 右邊的人 */}
      <motion.div
        animate={{ x: [0, 0, -15, -12] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.45, 0.6] }}
        style={{ position: 'absolute', right: 12, bottom: 15 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#e53935', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* 碰撞星星 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.5, 0.65] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -10, top: 25, width: 20, height: 20, background: 'radial-gradient(circle, #ffeb3b, transparent)', borderRadius: '50%' }}
      />
    </div>
  );
}

// Run down = 耗盡：電池電量逐漸流失
function RunDownScene() {
  return (
    <div style={S}>
      {/* 電池外殼 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '50%', marginTop: -30, width: 40, height: 60, border: '3px solid #546e7a', borderRadius: 4, background: '#f5f5f5' }}>
        {/* 電池頭 */}
        <div style={{ position: 'absolute', top: -8, left: '50%', marginLeft: -8, width: 16, height: 8, background: '#546e7a', borderRadius: '3px 3px 0 0' }} />
        {/* 電量（逐漸減少） */}
        <motion.div
          animate={{ height: ['85%', '85%', '10%', '10%'], backgroundColor: ['#4caf50', '#4caf50', '#ef5350', '#ef5350'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.7, 1] }}
          style={{ position: 'absolute', bottom: 3, left: 3, right: 3, borderRadius: 2 }}
        />
      </div>
      {/* 閃電（低電量警告） */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.65, 0.7, 0.75, 0.8, 0.85] }}
        style={{ position: 'absolute', right: 15, top: 15 }}
      >
        <svg width="16" height="22"><path d="M 10 0 L 3 10 L 8 10 L 6 22 L 13 10 L 8 10 Z" fill="#ef5350" /></svg>
      </motion.div>
    </div>
  );
}

// Run out = 用光：容器倒空，最後一滴流出
function RunOutScene() {
  return (
    <div style={S}>
      {/* 容器（逐漸倒空） */}
      <div style={{ position: 'absolute', left: 15, top: 15, width: 35, height: 50, border: '3px solid #546e7a', borderTop: 'none', borderRadius: '0 0 6px 6px', overflow: 'hidden' }}>
        <motion.div
          animate={{ height: ['80%', '80%', '0%', '0%'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.6, 1] }}
          style={{ position: 'absolute', bottom: 0, width: '100%', background: 'linear-gradient(0deg, #1565c0, #42a5f5)' }}
        />
      </div>
      {/* 流出的液體 */}
      <motion.div
        animate={{ height: [0, 0, 25, 30, 0], opacity: [0, 0, 1, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.4, 0.6, 0.7] }}
        style={{ position: 'absolute', left: 48, top: 60, width: 3, background: '#42a5f5', borderRadius: 2 }}
      />
      {/* 空了之後的紅色 0 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1], scale: [0.5, 0.5, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.6, 0.75] }}
        style={{ position: 'absolute', right: 15, top: '50%', marginTop: -12, width: 24, height: 24, border: '3px solid #ef5350', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: 11, fontWeight: 'bold', color: '#ef5350' }}>0</span>
      </motion.div>
    </div>
  );
}

// Run over = 超時/輾過：車輪碾過東西
function RunOverScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 18, left: 5, right: 5, height: 3, background: '#616161', borderRadius: 1 }} />
      {/* 被碾的物體 */}
      <motion.div
        animate={{ scaleY: [1, 1, 0.2, 0.2], opacity: [1, 1, 0.5, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', bottom: 21, left: '50%', marginLeft: -6, width: 12, height: 10, background: '#ff9800', borderRadius: 2 }}
      />
      {/* 車子碾過去 */}
      <motion.div
        animate={{ x: [-60, -60, 60, 60] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.7, 1] }}
        style={{ position: 'absolute', bottom: 21, zIndex: 10 }}
      >
        <div style={{ width: 40, height: 18, background: '#455a64', borderRadius: '5px 5px 2px 2px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 3, left: 5, width: 10, height: 8, background: '#90caf9', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 3, right: 5, width: 10, height: 8, background: '#90caf9', borderRadius: 2 }} />
        </div>
        {/* 輪子 */}
        <div style={{ position: 'absolute', bottom: -4, left: 5, width: 8, height: 8, background: '#212121', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 5, width: 8, height: 8, background: '#212121', borderRadius: '50%' }} />
      </motion.div>
    </div>
  );
}

// Run through = 過一遍：手指快速滑過清單
function RunThroughScene() {
  return (
    <div style={S}>
      {/* 清單 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -25, top: 10, width: 50, height: 65, background: '#fff', border: '2px solid #cfd8dc', borderRadius: 3, padding: 5 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 3 }}>
            <div style={{ width: 4, height: 4, background: '#546e7a', borderRadius: '50%', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 2, background: '#e0e0e0', borderRadius: 1 }} />
          </div>
        ))}
      </div>
      {/* 掃過的高亮線 */}
      <motion.div
        animate={{ y: [-5, 60], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -22, top: 12, width: 44, height: 3, background: 'rgba(21,101,192,0.3)', borderRadius: 1, zIndex: 5 }}
      />
      {/* 手指 */}
      <motion.div
        animate={{ y: [-5, 60] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', right: 12, top: 12, width: 6, height: 16, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 3, zIndex: 10 }}
      />
    </div>
  );
}

// Run away = 逃跑（已在 IntegrationAnim 中有 RunAwayDetailed）
// Run across = 偶然發現：走著走著腳踢到寶物
function RunAcrossScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 走路的人 */}
      <motion.div
        animate={{ x: [-30, -30, 10, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.4, 1] }}
        style={{ position: 'absolute', bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 地上的寶物/發現 */}
      <div style={{ position: 'absolute', bottom: 15, left: '55%', width: 14, height: 10, background: '#ffd600', border: '2px solid #f9a825', borderRadius: 2 }} />
      {/* 發現的驚嘆效果 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.65] }}
        style={{ position: 'absolute', left: '55%', bottom: 30, width: 20, height: 20, border: '2px solid #ffd600', borderRadius: '50%' }}
      />
      <motion.div
        animate={{ opacity: [0, 0, 1, 0], y: [0, 0, -10, -15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7] }}
        style={{ position: 'absolute', left: '62%', top: 15, fontWeight: 'bold', fontSize: 14, color: '#f9a825' }}
      >
        !
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Get 片語場景
// ═══════════════════════════════════════

// Get into = 涉足/進入：人踏過門框進入房間
function GetIntoScene() {
  return (
    <div style={S}>
      {/* 門框 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -20, top: 8, width: 40, height: 62, border: '3px solid #795548', borderBottom: 'none', borderRadius: '3px 3px 0 0', background: '#efebe9' }}>
        <div style={{ position: 'absolute', left: 5, top: '50%', width: 4, height: 4, background: '#ffd600', borderRadius: '50%' }} />
      </div>
      {/* 人物走入門內 */}
      <motion.div
        animate={{ x: [-30, -30, 5, 5], opacity: [1, 1, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -8, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 踏入的腳步痕跡 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2 + i * 0.1, 0.35 + i * 0.1, 0.6 + i * 0.1] }}
          style={{ position: 'absolute', bottom: 16, left: '30%', marginLeft: i * 12, width: 5, height: 3, background: '#90a4ae', borderRadius: 2 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Get down = 開始做/沮喪：人蹲下捲袖子準備開工
function GetDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 工作桌 */}
      <div style={{ position: 'absolute', bottom: 15, right: 10, width: 35, height: 22, background: '#8d6e63', borderRadius: '3px 3px 0 0' }}>
        <div style={{ position: 'absolute', top: 4, left: 5, width: 12, height: 8, background: '#d7ccc8', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 6, right: 5, width: 8, height: 6, background: '#a1887f', borderRadius: 1 }} />
      </div>
      {/* 人物蹲下準備工作 */}
      <motion.div
        animate={{ y: [0, 0, 12, 12], rotate: [0, 0, 15, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 1] }}
        style={{ position: 'absolute', left: 18, bottom: 15, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 6, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        {/* 手臂捲袖動作 */}
        <motion.div
          animate={{ rotate: [0, 0, -40, -60, -40] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.7, 0.85] }}
          style={{ position: 'absolute', top: 16, left: -2, width: 3, height: 12, background: '#1565c0', borderRadius: 2, transformOrigin: 'top center' }}
        />
        <motion.div
          animate={{ rotate: [0, 0, 40, 60, 40] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.7, 0.85] }}
          style={{ position: 'absolute', top: 16, right: -2, width: 3, height: 12, background: '#1565c0', borderRadius: 2, transformOrigin: 'top center' }}
        />
      </motion.div>
      {/* 幹勁線條 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 0], x: [0, 0, 5 + i * 3, 10 + i * 3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.55, 0.7, 0.9], delay: i * 0.05 }}
          style={{ position: 'absolute', top: 20 + i * 8, left: 35, width: 8, height: 2, background: '#ff9800', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// Get out = 逃脫/離開：人從箱子裡爬出來
function GetOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 箱子/容器 */}
      <div style={{ position: 'absolute', bottom: 15, left: 15, width: 40, height: 40, border: '3px solid #546e7a', borderTop: 'none', borderRadius: '0 0 4px 4px', background: '#eceff1' }} />
      {/* 人物爬出箱子 */}
      <motion.div
        animate={{ y: [5, 5, -20, -25], x: [0, 0, 15, 25], rotate: [0, 0, -20, -10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.55, 0.8] }}
        style={{ position: 'absolute', left: 25, bottom: 40, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        {/* 抓住邊緣的手 */}
        <div style={{ position: 'absolute', top: 14, right: -8, width: 10, height: 4, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 2 }} />
      </motion.div>
      {/* 掙脫的動態線 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.6, 0], scale: [0.5, 0.5, 1.2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.7], delay: i * 0.1 }}
          style={{ position: 'absolute', left: 50 + i * 8, top: 20 + i * 5, width: 8, height: 2, background: '#90a4ae', borderRadius: 1, transform: `rotate(${-30 + i * 20}deg)` }}
        />
      ))}
    </div>
  );
}

// Get over = 克服：人翻過高牆到另一邊
function GetOverScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 高牆 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -4, width: 8, height: 50, background: '#8d6e63', borderRadius: 2 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ width: '100%', height: 1, background: '#6d4c41', marginTop: 9 }} />
        ))}
      </div>
      {/* 人物翻越牆壁 */}
      <motion.div
        animate={{
          x: [-15, -15, 0, 15, 15],
          y: [0, 0, -35, 0, 0],
          rotate: [0, 0, -30, 0, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.45, 0.7, 1], ease: "easeInOut" }}
        style={{ position: 'absolute', left: '50%', marginLeft: -7, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <div style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 成功的光效 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.3, 0], scale: [0, 0, 0, 1.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.75, 0.9] }}
        style={{ position: 'absolute', right: 15, bottom: 25, width: 20, height: 20, border: '2px solid #4caf50', borderRadius: '50%' }}
      />
    </div>
  );
}

// Get through = 撐過：人在窄隧道中艱難前行
function GetThroughScene() {
  return (
    <div style={S}>
      {/* 隧道上壁 */}
      <div style={{ position: 'absolute', top: 15, left: 15, right: 15, height: 8, background: '#546e7a', borderRadius: '4px 4px 0 0' }} />
      {/* 隧道下壁 */}
      <div style={{ position: 'absolute', bottom: 15, left: 15, right: 15, height: 8, background: '#546e7a', borderRadius: '0 0 4px 4px' }} />
      {/* 隧道內部（窄縫） */}
      <div style={{ position: 'absolute', top: 23, left: 15, right: 15, bottom: 23, background: '#eceff1' }} />
      {/* 人物在隧道中擠過 */}
      <motion.div
        animate={{ x: [-30, -30, 30, 30], scaleX: [1, 0.7, 0.7, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.7, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -6, top: '50%', marginTop: -15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* 掙扎的汗滴 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0.6, 0], y: [0, 8] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.5 }}
          style={{ position: 'absolute', left: '50%', marginLeft: -8 + i * 14, top: 28, width: 3, height: 5, background: '#42a5f5', borderRadius: '0 0 3px 3px' }}
        />
      ))}
      {/* 出口的光 */}
      <motion.div
        animate={{ opacity: [0.1, 0.1, 0.4, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', right: 10, top: 23, bottom: 23, width: 15, background: 'linear-gradient(270deg, rgba(255,235,59,0.3), transparent)' }}
      />
    </div>
  );
}

// Get along = 相處：兩個人並肩同行
function GetAlongScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 兩人一起走 */}
      <motion.div
        animate={{ x: [-15, -15, 20, 20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.7, 1] }}
        style={{ position: 'absolute', bottom: 15, left: '30%', display: 'flex', gap: 8, alignItems: 'flex-end' }}
      >
        {/* 左邊的人 */}
        <div>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
            <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
            <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          </div>
        </div>
        {/* 右邊的人 */}
        <div>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
          <div style={{ width: 5, height: 18, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
            <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#4caf50', borderRadius: 2 }} />
            <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 3, height: 12, background: '#4caf50', borderRadius: 2 }} />
          </div>
        </div>
      </motion.div>
      {/* 和諧音符 */}
      <motion.div
        animate={{ opacity: [0, 0.6, 0], y: [0, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 15, left: '55%', fontSize: 10, color: '#ff9800', fontWeight: 'bold' }}
      >
        ~
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0.6, 0], y: [0, -8] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        style={{ position: 'absolute', top: 12, left: '45%', fontSize: 10, color: '#ff9800', fontWeight: 'bold' }}
      >
        ~
      </motion.div>
    </div>
  );
}

// Get back = 回來：人走回家/旗標處
function GetBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 家（目的地） */}
      <div style={{ position: 'absolute', left: 8, bottom: 15 }}>
        {/* 屋頂 */}
        <div style={{ width: 0, height: 0, borderLeft: '18px solid transparent', borderRight: '18px solid transparent', borderBottom: '14px solid #ef5350', marginLeft: -2 }} />
        {/* 屋身 */}
        <div style={{ width: 32, height: 22, background: '#ffcc80', border: '2px solid #e65100', borderRadius: '0 0 2px 2px' }}>
          <div style={{ position: 'absolute', bottom: 2, left: '50%', marginLeft: -5, width: 10, height: 14, background: '#8d6e63', borderRadius: '2px 2px 0 0' }} />
        </div>
      </div>
      {/* 人走回來 */}
      <motion.div
        animate={{ x: [30, 30, -10, -10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.65, 1] }}
        style={{ position: 'absolute', left: 30, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 回來的箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.4, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.7] }}
      >
        <svg width="40" height="14" style={{ position: 'absolute', left: 35, bottom: 50 }}>
          <path d="M 35 7 L 5 7" fill="transparent" stroke="#90caf9" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 10 2 L 5 7 L 10 12" fill="transparent" stroke="#90caf9" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}

// Get away = 逃脫：人從牢籠跑開，越跑越遠
function GetAwayScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 牢籠 */}
      <div style={{ position: 'absolute', left: 8, bottom: 15, width: 28, height: 40, border: '3px solid #546e7a', borderRadius: 3 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', left: 5 + i * 8, top: 0, width: 2, height: '100%', background: '#546e7a' }} />
        ))}
        {/* 打開的門 */}
        <motion.div
          animate={{ rotate: [0, -80, -80, -80] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.8, 1] }}
          style={{ position: 'absolute', right: -2, top: 0, width: 12, height: '100%', border: '2px solid #546e7a', borderLeft: 'none', transformOrigin: 'right center', background: '#eceff1' }}
        />
      </div>
      {/* 逃跑的人（越跑越小） */}
      <motion.div
        animate={{ x: [5, 5, 45, 45], scale: [1, 1, 0.6, 0.6], opacity: [1, 1, 0.6, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.7, 1] }}
        style={{ position: 'absolute', left: 32, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [20, -20, 20] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-20, 20, -20] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 塵煙 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.4, 0], x: [-3, -3, -8, -12], scale: [0.5, 0.5, 1.5, 2] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.65], delay: i * 0.08 }}
          style={{ position: 'absolute', bottom: 18 + i * 5, left: 35, width: 6, height: 6, background: '#bdbdbd', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// Get on = 上車：人踏上公車/平台階梯
function GetOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 公車/平台 */}
      <div style={{ position: 'absolute', right: 5, bottom: 15, width: 50, height: 45, background: '#ff9800', borderRadius: '6px 6px 0 0', border: '2px solid #e65100' }}>
        {/* 窗戶 */}
        <div style={{ position: 'absolute', top: 8, left: 6, width: 14, height: 12, background: '#bbdefb', borderRadius: 2, border: '1px solid #e65100' }} />
        <div style={{ position: 'absolute', top: 8, right: 6, width: 14, height: 12, background: '#bbdefb', borderRadius: 2, border: '1px solid #e65100' }} />
        {/* 門口 */}
        <div style={{ position: 'absolute', bottom: 0, left: -2, width: 14, height: 22, background: '#fff3e0', borderRadius: '3px 3px 0 0', border: '1px solid #e65100', borderBottom: 'none' }} />
        {/* 輪子 */}
        <div style={{ position: 'absolute', bottom: -5, left: 8, width: 8, height: 8, background: '#333', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -5, right: 8, width: 8, height: 8, background: '#333', borderRadius: '50%' }} />
      </div>
      {/* 階梯 */}
      <div style={{ position: 'absolute', right: 49, bottom: 15, width: 12, height: 8, background: '#bdbdbd', borderRadius: '2px 0 0 2px' }} />
      {/* 人踏上去 */}
      <motion.div
        animate={{ x: [0, 0, 18, 18], y: [0, 0, -10, -10] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
        style={{ position: 'absolute', left: 15, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Get off = 下車：人從平台踏下來
function GetOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 平台/公車 */}
      <div style={{ position: 'absolute', left: 5, bottom: 15, width: 45, height: 35, background: '#ff9800', borderRadius: '6px 6px 0 0', border: '2px solid #e65100' }}>
        <div style={{ position: 'absolute', top: 8, left: 6, width: 12, height: 10, background: '#bbdefb', borderRadius: 2, border: '1px solid #e65100' }} />
        <div style={{ position: 'absolute', top: 8, right: 6, width: 12, height: 10, background: '#bbdefb', borderRadius: 2, border: '1px solid #e65100' }} />
        {/* 門口 */}
        <div style={{ position: 'absolute', bottom: 0, right: -2, width: 14, height: 20, background: '#fff3e0', borderRadius: '3px 3px 0 0', border: '1px solid #e65100', borderBottom: 'none' }} />
      </div>
      {/* 階梯 */}
      <div style={{ position: 'absolute', left: 48, bottom: 15, width: 10, height: 7, background: '#bdbdbd', borderRadius: '0 2px 2px 0' }} />
      {/* 人踏下來 */}
      <motion.div
        animate={{ x: [0, 0, 20, 20], y: [-10, -10, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.6, 1] }}
        style={{ position: 'absolute', left: 42, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 下車箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.5, 0.7] }}
        style={{ position: 'absolute', right: 15, top: 20, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '10px solid #4caf50' }}
      />
    </div>
  );
}

// ═══════════════════════════════════════
// Break 片語場景
// ═══════════════════════════════════════

// Break into = 闖入：門被踢開，鎖被破壞
function BreakIntoScene() {
  return (
    <div style={S}>
      {/* 門框 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -22, top: 8, width: 44, height: 62, border: '3px solid #795548', borderBottom: 'none', borderRadius: '3px 3px 0 0', background: '#efebe9' }} />
      {/* 門（被踢開） */}
      <motion.div
        animate={{ rotate: [0, 0, -70, -70], x: [0, 0, -5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -20, top: 10, width: 20, height: 58, background: '#8d6e63', borderRadius: 2, transformOrigin: 'left center', zIndex: 5 }}>
        {/* 門把 */}
        <div style={{ position: 'absolute', right: 4, top: '50%', width: 4, height: 4, background: '#ffd600', borderRadius: '50%' }} />
      </motion.div>
      {/* 鎖碎片飛出 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 0], x: [0, 0, 10 + i * 8, 15 + i * 12], y: [0, 0, -10 + i * 8, 5 + i * 12], rotate: [0, 0, 90 * i, 180 * i] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.7] }}
          style={{ position: 'absolute', left: '55%', top: '45%', width: 4, height: 4, background: '#546e7a', borderRadius: 1 }}
        />
      ))}
      {/* 踢門的腳 */}
      <motion.div
        animate={{ x: [35, 35, 5, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 0.55] }}
        style={{ position: 'absolute', right: 5, top: '55%', zIndex: 10 }}
      >
        <div style={{ width: 18, height: 6, background: '#455a64', borderRadius: 3 }} />
        <div style={{ width: 10, height: 8, background: '#333', borderRadius: '2px 4px 4px 2px', marginLeft: -2, marginTop: -1 }} />
      </motion.div>
      {/* 衝擊波 */}
      <motion.div
        animate={{ scale: [0, 0, 2, 2], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.65] }}
        style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -10, marginTop: -10, width: 20, height: 20, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Break up = 分手：愛心裂開成兩半
function BreakUpScene() {
  return (
    <div style={S}>
      {/* 左半心 */}
      <motion.div
        animate={{ x: [0, 0, -12, -12], rotate: [0, 0, -10, -10], opacity: [1, 1, 0.6, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '50%', marginTop: -20 }}
      >
        <svg width="22" height="40" viewBox="0 0 22 40">
          <path d="M 22 35 Q 0 25 0 12 A 11 11 0 0 1 22 12 Z" fill="#ef5350" />
        </svg>
      </motion.div>
      {/* 右半心 */}
      <motion.div
        animate={{ x: [0, 0, 12, 12], rotate: [0, 0, 10, 10], opacity: [1, 1, 0.6, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -2, top: '50%', marginTop: -20 }}
      >
        <svg width="22" height="40" viewBox="0 0 22 40">
          <path d="M 0 35 Q 22 25 22 12 A 11 11 0 0 0 0 12 Z" fill="#ef5350" />
        </svg>
      </motion.div>
      {/* 裂縫閃電效果 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 0], scaleY: [0.5, 0.5, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.35, 0.5] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -3, top: '50%', marginTop: -18, zIndex: 10 }}
      >
        <svg width="6" height="36"><path d="M 3 0 L 1 12 L 5 16 L 2 28 L 4 36" fill="none" stroke="#fff" strokeWidth="2" /></svg>
      </motion.div>
      {/* 碎片 */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.8, 0], y: [0, 0, 10 + i * 5, 20 + i * 5], x: [0, 0, (i % 2 === 0 ? -1 : 1) * (5 + i * 3), (i % 2 === 0 ? -1 : 1) * (10 + i * 3)] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.6, 0.8] }}
          style={{ position: 'absolute', left: '50%', top: '50%', width: 3, height: 3, background: '#ef5350', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// Break out = 爆發：火/能量從容器中迸發
function BreakOutScene() {
  return (
    <div style={S}>
      {/* 容器 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -18, bottom: 15, width: 36, height: 40, border: '3px solid #546e7a', borderRadius: '0 0 6px 6px', background: '#eceff1', overflow: 'hidden' }}>
        {/* 內部能量蓄積 */}
        <motion.div
          animate={{ scale: [0.5, 1, 1.2, 0.3], background: ['#ff9800', '#ff9800', '#ef5350', '#ff9800'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.4, 0.6] }}
          style={{ position: 'absolute', bottom: 5, left: '50%', marginLeft: -10, width: 20, height: 20, borderRadius: '50%' }}
        />
      </div>
      {/* 爆發的火焰/能量 */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          animate={{
            y: [0, 0, -20 - i * 6, -30 - i * 8],
            x: [0, 0, (i - 2) * 8, (i - 2) * 12],
            opacity: [0, 0, 1, 0],
            scale: [0.3, 0.3, 1, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.55, 0.8] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -4, top: '40%', width: 8, height: 12, background: i % 2 === 0 ? '#ef5350' : '#ff9800', borderRadius: '4px 4px 50% 50%' }}
        />
      ))}
      {/* 容器裂縫 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.45, 1] }}
      >
        <svg width="10" height="20" style={{ position: 'absolute', left: '50%', marginLeft: 10, bottom: 25, zIndex: 5 }}>
          <path d="M 0 0 L 4 7 L 1 13 L 5 20" fill="none" stroke="#546e7a" strokeWidth="1.5" />
        </svg>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Break through = 突破：人/箭穿破磚牆
function BreakThroughScene() {
  return (
    <div style={S}>
      {/* 磚牆 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -6, top: 5, bottom: 5, width: 12, background: '#8d6e63', borderRadius: 2 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ height: 1, background: '#5d4037', marginTop: i === 0 ? 10 : 11 }}>
            <div style={{ position: 'absolute', left: i % 2 === 0 ? 4 : 0, width: 1, height: 11, background: '#5d4037' }} />
          </div>
        ))}
      </div>
      {/* 箭頭/人衝破牆壁 */}
      <motion.div
        animate={{ x: [-35, -35, 0, 35, 35] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.4, 0.65, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '50%', marginTop: -8, zIndex: 10 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0' }} />
          <div style={{ width: 16, height: 6, background: '#1565c0', borderRadius: '0 3px 3px 0', marginLeft: -3 }} />
        </div>
      </motion.div>
      {/* 牆壁碎片飛出 */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0, 1, 0],
            x: [0, 0, (i % 2 === 0 ? -1 : 1) * (8 + i * 4), (i % 2 === 0 ? -1 : 1) * (15 + i * 5)],
            y: [0, 0, (i < 2 ? -1 : 1) * (5 + i * 3), (i < 2 ? -1 : 1) * (12 + i * 4)],
            rotate: [0, 0, 45 * i, 90 * i]
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.5, 0.7] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -2, top: '50%', marginTop: -2, width: 5, height: 5, background: '#a1887f', borderRadius: 1 }}
        />
      ))}
      {/* 衝擊波紋 */}
      <motion.div
        animate={{ scale: [0, 0, 2.5], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.38, 0.6] }}
        style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -8, marginTop: -8, width: 16, height: 16, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
    </div>
  );
}

// Break even = 損益兩平：天秤達到完美平衡
function BreakEvenScene() {
  return (
    <div style={S}>
      {/* 天秤支柱 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -3, width: 6, height: 35, background: '#546e7a', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 50, left: '50%', marginLeft: -5, width: 10, height: 10, background: '#546e7a', borderRadius: '50%' }} />
      {/* 天秤橫桿 */}
      <motion.div
        animate={{ rotate: [12, 12, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', bottom: 52, left: '50%', marginLeft: -35, width: 70, height: 3, background: '#78909c', borderRadius: 2, transformOrigin: 'center center' }}
      >
        {/* 左盤 */}
        <div style={{ position: 'absolute', left: -2, top: 3, width: 20, height: 3, background: '#90a4ae', borderRadius: '0 0 4px 4px' }}>
          <div style={{ position: 'absolute', top: -10, left: '50%', marginLeft: -1, width: 2, height: 10, background: '#90a4ae' }} />
          {/* 紅色方塊（支出） */}
          <div style={{ position: 'absolute', top: 5, left: 3, width: 14, height: 10, background: '#ef5350', borderRadius: 2 }} />
        </div>
        {/* 右盤 */}
        <div style={{ position: 'absolute', right: -2, top: 3, width: 20, height: 3, background: '#90a4ae', borderRadius: '0 0 4px 4px' }}>
          <div style={{ position: 'absolute', top: -10, left: '50%', marginLeft: -1, width: 2, height: 10, background: '#90a4ae' }} />
          {/* 綠色方塊（收入） */}
          <div style={{ position: 'absolute', top: 5, left: 3, width: 14, height: 10, background: '#4caf50', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 平衡達成標記 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0, 0, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.55, 0.7, 0.85] }}
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -8, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: 10, fontWeight: 'bold', color: '#4caf50' }}>=</span>
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// ═══════════════════════════════════════
// Go 片語場景
// ═══════════════════════════════════════

// Go down = 下降/當機：電腦螢幕閃爍後熄滅
function GoDownScene() {
  return (
    <div style={S}>
      {/* 電腦螢幕 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -28, top: 12, width: 56, height: 40, background: '#333', borderRadius: 4, border: '3px solid #212121', padding: 3 }}>
        <motion.div
          animate={{
            opacity: [1, 1, 0.5, 1, 0.2, 0, 0],
            background: ['#4caf50', '#4caf50', '#ff9800', '#ff9800', '#ef5350', '#333', '#333']
          }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.4, 0.5, 0.6, 1] }}
          style={{ width: '100%', height: '100%', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* 螢幕內容線條 */}
          <div>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 30 - i * 6, height: 2, background: 'rgba(255,255,255,0.5)', marginBottom: 4, borderRadius: 1 }} />
            ))}
          </div>
        </motion.div>
      </div>
      {/* 螢幕支架 */}
      <div style={{ position: 'absolute', bottom: 18, left: '50%', marginLeft: -4, width: 8, height: 15, background: '#757575' }} />
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -12, width: 24, height: 4, background: '#9e9e9e', borderRadius: 2 }} />
      {/* 當機閃爍線 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 0, 0], scaleX: [0, 0, 1, 0, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.32 + i * 0.04, 0.36 + i * 0.04, 0.4 + i * 0.04, 1] }}
          style={{ position: 'absolute', left: '50%', marginLeft: -25, top: 22 + i * 12, width: 50, height: 2, background: '#fff', zIndex: 5 }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Go up = 上漲：股市折線圖攀升
function GoUpScene() {
  return (
    <div style={S}>
      {/* 座標軸 */}
      <div style={{ position: 'absolute', left: 12, top: 10, bottom: 18, width: 2, background: '#bdbdbd' }} />
      <div style={{ position: 'absolute', bottom: 16, left: 12, right: 8, height: 2, background: '#bdbdbd' }} />
      {/* 折線圖上升 */}
      <motion.svg
        width="70" height="55"
        style={{ position: 'absolute', left: 14, top: 10 }}
      >
        <motion.path
          d="M 0 45 L 15 38 L 30 35 L 42 25 L 55 12 L 65 5"
          fill="transparent"
          stroke="#4caf50"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.7, 1] }}
        />
      </motion.svg>
      {/* 上升箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], y: [5, 5, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.75, 1] }}
        style={{ position: 'absolute', right: 10, top: 8 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '10px solid #4caf50', margin: '0 auto' }} />
        <div style={{ width: 4, height: 8, background: '#4caf50', margin: '0 auto' }} />
      </motion.div>
      {/* 數值標籤 */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', left: 4, top: 15 + i * 16, fontSize: 5, color: '#bdbdbd' }}>
          --
        </div>
      ))}
    </div>
  );
}

// Go out = 熄滅：蠟燭火焰搖晃後熄滅，煙上升
function GoOutScene() {
  return (
    <div style={S}>
      {/* 蠟燭 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -8, width: 16, height: 35, background: '#fff9c4', border: '2px solid #f9a825', borderRadius: '2px 2px 4px 4px' }}>
        {/* 蠟芯 */}
        <div style={{ position: 'absolute', top: -8, left: '50%', marginLeft: -1, width: 2, height: 8, background: '#333' }} />
      </div>
      {/* 火焰（搖晃後熄滅） */}
      <motion.div
        animate={{
          scaleX: [1, 1.2, 0.8, 1.3, 0.5, 0, 0],
          scaleY: [1, 1.1, 0.9, 0.7, 0.3, 0, 0],
          opacity: [1, 1, 1, 0.8, 0.4, 0, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.4, 0.5, 0.55, 1] }}
        style={{ position: 'absolute', bottom: 53, left: '50%', marginLeft: -6, width: 12, height: 16, background: 'radial-gradient(ellipse, #ffeb3b, #ff9800)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
      />
      {/* 光暈 */}
      <motion.div
        animate={{ opacity: [0.25, 0.25, 0.1, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.55, 1] }}
        style={{ position: 'absolute', bottom: 40, left: '50%', marginLeft: -20, width: 40, height: 40, background: 'radial-gradient(circle, rgba(255,235,59,0.3), transparent)', borderRadius: '50%' }}
      />
      {/* 煙霧上升 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.4, 0], y: [0, 0, -15, -30], x: [0, 0, (i - 1) * 5, (i - 1) * 8] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.55, 0.7 + i * 0.05, 0.9 + i * 0.03] }}
          style={{ position: 'absolute', bottom: 60, left: '50%', marginLeft: -2, width: 4, height: 4, background: '#bdbdbd', borderRadius: '50%' }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Go over = 複習：眼睛掃描文件從上到下
function GoOverScene() {
  return (
    <div style={S}>
      {/* 文件 */}
      <div style={{ position: 'absolute', left: 12, top: 8, width: 40, height: 60, background: '#fff', border: '2px solid #cfd8dc', borderRadius: 3, padding: 5 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ width: i === 3 ? '50%' : '80%', height: 2, background: '#e0e0e0', marginBottom: 5, borderRadius: 1 }} />
        ))}
      </div>
      {/* 眼睛掃描 */}
      <motion.div
        animate={{ y: [0, 55] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', right: 12, top: 12, zIndex: 10 }}
      >
        {/* 眼睛形狀 */}
        <div style={{ width: 20, height: 12, borderRadius: '50%', background: '#fff', border: '2px solid #455a64', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 6, height: 6, background: '#1565c0', borderRadius: '50%' }}>
            <div style={{ width: 2, height: 2, background: '#fff', borderRadius: '50%', margin: '1px 0 0 1px' }} />
          </div>
        </div>
      </motion.div>
      {/* 掃描線 */}
      <motion.div
        animate={{ y: [0, 55], opacity: [1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', left: 14, top: 14, width: 36, height: 2, background: 'rgba(21,101,192,0.2)', borderRadius: 1, zIndex: 5 }}
      />
    </div>
  );
}

// Go through = 經歷困難：人在暴風雨中行走，走向陽光
function GoThroughScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 烏雲區域（左半） */}
      <div style={{ position: 'absolute', left: 0, top: 5, width: '55%', height: 20, background: '#78909c', borderRadius: '0 10px 10px 0' }} />
      {/* 陽光區域（右半） */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: '45%', height: 30, background: 'linear-gradient(180deg, rgba(255,235,59,0.15), transparent)' }} />
      <motion.div
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', right: 8, top: 5, width: 18, height: 18, background: '#ffd600', borderRadius: '50%' }}
      />
      {/* 雨滴 */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ y: [-5, 50], opacity: [0.5, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.25 }}
          style={{ position: 'absolute', left: 5 + i * 12, top: 22, width: 2, height: 5, background: '#90caf9', borderRadius: 2 }}
        />
      ))}
      {/* 人物前進 */}
      <motion.div
        animate={{ x: [-15, -15, 25, 25] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.65, 1] }}
        style={{ position: 'absolute', left: '35%', bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 2 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Go on = 繼續：人不停前行，前方箭頭
function GoOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 前進箭頭 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0.15, 0.6, 0.15], x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', top: '45%', right: 8 + i * 14, width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #4caf50' }}
        />
      ))}
      {/* 人物持續行走 */}
      <motion.div
        animate={{ x: [-20, 25, -20] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        style={{ position: 'absolute', left: '35%', bottom: 15 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 腳印 */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 16, left: 8 + i * 18, width: 5, height: 3, background: '#cfd8dc', borderRadius: 2, opacity: 0.3 + i * 0.15 }} />
      ))}
    </div>
  );
}

// Go back = 回去：人的腳步反向
function GoBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 前方腳印（往右漸淡） */}
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'absolute', bottom: 16, right: 10 + i * 14, width: 5, height: 3, background: '#90a4ae', borderRadius: 2, opacity: 0.5 - i * 0.12 }} />
      ))}
      {/* 人物轉身回走 */}
      <motion.div
        animate={{ x: [20, 20, 0, -20, -20], scaleX: [1, 1, -1, -1, -1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.25, 0.65, 1] }}
        style={{ position: 'absolute', left: '45%', bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 12, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 回轉箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.7] }}
      >
        <svg width="30" height="16" style={{ position: 'absolute', left: '40%', top: 18 }}>
          <path d="M 25 12 A 12 8 0 0 0 5 12" fill="transparent" stroke="#90caf9" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 9 8 L 5 12 L 9 16" fill="transparent" stroke="#90caf9" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}

// Go off = 響/爆炸：鬧鐘劇烈搖晃，聲波擴散
function GoOffScene() {
  return (
    <div style={S}>
      {/* 鬧鐘 */}
      <motion.div
        animate={{ rotate: [-5, 5, -5, 5, -3, 3, 0], x: [-2, 2, -2, 2, -1, 1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '50%', marginTop: -18 }}
      >
        {/* 鈴鐺 */}
        <div style={{ position: 'absolute', top: -5, left: -3, width: 10, height: 10, background: '#546e7a', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: -5, right: -3, width: 10, height: 10, background: '#546e7a', borderRadius: '50%' }} />
        {/* 鐘體 */}
        <div style={{ width: 36, height: 36, background: '#ef5350', borderRadius: '50%', border: '3px solid #c62828', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 26, height: 26, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* 時針 */}
            <div style={{ position: 'absolute', width: 2, height: 8, background: '#333', bottom: '50%', left: '50%', marginLeft: -1, transformOrigin: 'bottom center' }} />
            {/* 分針 */}
            <div style={{ position: 'absolute', width: 1.5, height: 10, background: '#333', bottom: '50%', left: '50%', marginLeft: -0.75, transformOrigin: 'bottom center', transform: 'rotate(90deg)' }} />
          </div>
        </div>
        {/* 腳 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
          <div style={{ width: 4, height: 5, background: '#546e7a', borderRadius: '0 0 2px 2px' }} />
          <div style={{ width: 4, height: 5, background: '#546e7a', borderRadius: '0 0 2px 2px' }} />
        </div>
      </motion.div>
      {/* 聲波 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.5 + i * 0.5], opacity: [0.6, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -25 - i * 8, marginTop: -25 - i * 8, width: 50 + i * 16, height: 50 + i * 16, border: '2px solid #ff9800', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// Go ahead = 去吧：綠燈亮起，車子前行
function GoAheadScene() {
  return (
    <div style={S}>
      {/* 紅綠燈 */}
      <div style={{ position: 'absolute', left: 10, top: 8, width: 16, height: 44, background: '#333', borderRadius: 4, padding: 3, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        {/* 紅燈 */}
        <motion.div
          animate={{ opacity: [0.8, 0.8, 0.2, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.3, 1] }}
          style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef5350' }}
        />
        {/* 黃燈 */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#333', border: '1px solid #555' }} />
        {/* 綠燈 */}
        <motion.div
          animate={{ opacity: [0.2, 0.2, 1, 1], boxShadow: ['none', 'none', '0 0 8px #4caf50', '0 0 8px #4caf50'] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.35, 1] }}
          style={{ width: 10, height: 10, borderRadius: '50%', background: '#4caf50' }}
        />
      </div>
      {/* 燈柱 */}
      <div style={{ position: 'absolute', left: 16, top: 52, width: 4, height: 15, background: '#546e7a' }} />
      {/* 道路 */}
      <div style={{ position: 'absolute', bottom: 15, left: 5, right: 5, height: 18, background: '#616161', borderRadius: 3 }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, borderTop: '2px dashed #fff', opacity: 0.4 }} />
      </div>
      {/* 車子前進 */}
      <motion.div
        animate={{ x: [-25, -25, 50, 50] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 5 }}
      >
        <div style={{ width: 24, height: 12, background: '#1565c0', borderRadius: 3, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 2, left: 3, width: 7, height: 5, background: '#90caf9', borderRadius: 1 }} />
          <div style={{ position: 'absolute', top: 2, right: 3, width: 7, height: 5, background: '#90caf9', borderRadius: 1 }} />
        </div>
        <div style={{ position: 'absolute', bottom: -3, left: 3, width: 5, height: 5, background: '#212121', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -3, right: 3, width: 5, height: 5, background: '#212121', borderRadius: '50%' }} />
      </motion.div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Go for = 爭取：手向上伸向獎盃/星星
function GoForScene() {
  return (
    <div style={S}>
      {/* 獎盃/星星（目標） */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -10 }}
      >
        {/* 星星 */}
        <svg width="20" height="20">
          <path d="M 10 0 L 12.5 7 L 20 7 L 14 11.5 L 16 19 L 10 14 L 4 19 L 6 11.5 L 0 7 L 7.5 7 Z" fill="#ffd600" />
        </svg>
      </motion.div>
      {/* 光芒 */}
      <motion.div
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -20, width: 40, height: 30, background: 'radial-gradient(circle, rgba(255,214,0,0.3), transparent)', borderRadius: '50%' }}
      />
      {/* 伸出的手臂 */}
      <motion.div
        animate={{ y: [5, -8, 5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', left: '50%', marginLeft: -6, top: 30 }}
      >
        {/* 手臂 */}
        <div style={{ width: 8, height: 30, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        {/* 手掌張開 */}
        <div style={{ width: 18, height: 10, background: '#F5CBA7', borderRadius: '8px 8px 3px 3px', border: '2px solid #E59866', borderBottom: 'none', marginLeft: -5, marginTop: -2, transform: 'rotate(180deg)' }}>
          <div style={{ position: 'absolute', top: 1, left: 2, width: 3, height: 6, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 1, left: 7, width: 3, height: 6, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 1, right: 2, width: 3, height: 6, background: '#E59866', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 人物身體 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -7 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 10, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
      </div>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
    </div>
  );
}

// Go with = 選擇：手指指向兩個選項中的一個（被選中的高亮）
function GoWithScene() {
  return (
    <div style={S}>
      {/* 選項 A */}
      <motion.div
        animate={{
          borderColor: ['#cfd8dc', '#cfd8dc', '#1565c0', '#1565c0'],
          background: ['#fff', '#fff', '#e3f2fd', '#e3f2fd'],
          scale: [1, 1, 1.08, 1.08]
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', left: 10, top: '50%', marginTop: -18, width: 30, height: 36, border: '2px solid #cfd8dc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: 12, fontWeight: 'bold', color: '#546e7a' }}>A</span>
      </motion.div>
      {/* 選項 B */}
      <motion.div
        animate={{
          opacity: [1, 1, 0.4, 0.4]
        }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', right: 10, top: '50%', marginTop: -18, width: 30, height: 36, border: '2px solid #cfd8dc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}
      >
        <span style={{ fontSize: 12, fontWeight: 'bold', color: '#546e7a' }}>B</span>
      </motion.div>
      {/* 手指指向A */}
      <motion.div
        animate={{ x: [15, 15, -8, -8], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.45, 1] }}
        style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -12, zIndex: 10 }}
      >
        <div style={{ width: 5, height: 18, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 3, margin: '0 auto' }} />
        <div style={{ width: 14, height: 8, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', borderRadius: '0 0 4px 4px', marginLeft: -4.5 }} />
      </motion.div>
      {/* 選中勾勾 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.5, 0.5, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.6, 1] }}
        style={{ position: 'absolute', left: 32, top: '50%', marginTop: -25 }}
      >
        <svg width="12" height="10"><path d="M 1 5 L 4 8 L 11 1" fill="transparent" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Set 片語場景
// ═══════════════════════════════════════

// Set up = 架設：鷹架/結構一層層往上搭建
function SetUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 鷹架柱子 */}
      <div style={{ position: 'absolute', bottom: 15, left: 20, width: 4, height: 60, background: '#546e7a' }} />
      <div style={{ position: 'absolute', bottom: 15, right: 20, width: 4, height: 60, background: '#546e7a' }} />
      {/* 橫樑逐層搭建 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 1], scaleX: [0, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15 + i * 0.2, 0.25 + i * 0.2, 1] }}
          style={{ position: 'absolute', bottom: 20 + i * 18, left: 20, right: 20, height: 4, background: '#ff9800', borderRadius: 1 }}
        />
      ))}
      {/* 完成旗幟 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1], y: [5, 5, 5, 0], scale: [0, 0, 0, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.75, 0.9] }}
        style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -4 }}
      >
        <div style={{ width: 2, height: 14, background: '#546e7a' }} />
        <div style={{ position: 'absolute', top: 0, left: 2, width: 12, height: 8, background: '#ef5350', borderRadius: '0 2px 2px 0' }} />
      </motion.div>
    </div>
  );
}

// Set out = 出發：人帶背包從房子走向遠方
function SetOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 房子 */}
      <div style={{ position: 'absolute', left: 8, bottom: 15, width: 22, height: 24, background: '#8d6e63', borderRadius: '2px 2px 0 0' }}>
        <div style={{ position: 'absolute', top: -10, left: -3, width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '12px solid #5d4037' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 7, width: 8, height: 12, background: '#3e2723', borderRadius: '2px 2px 0 0' }} />
      </div>
      {/* 路徑虛線 */}
      <div style={{ position: 'absolute', bottom: 14, left: 35, right: 10, height: 2, background: 'repeating-linear-gradient(90deg, #90caf9, #90caf9 6px, transparent 6px, transparent 12px)' }} />
      {/* 人帶背包出發 */}
      <motion.div
        animate={{ x: [-5, -5, 55, 55], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.7, 0.9] }}
        style={{ position: 'absolute', left: 30, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 背包 */}
        <div style={{ position: 'absolute', top: 12, left: -4, width: 8, height: 10, background: '#4caf50', borderRadius: 2, border: '1px solid #2e7d32' }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Set off = 出發/觸發：火箭從發射台升空
function SetOffScene() {
  return (
    <div style={S}>
      {/* 發射台 */}
      <div style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -18, width: 36, height: 8, background: '#546e7a', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -4, width: 8, height: 16, background: '#78909c' }} />
      {/* 火箭 */}
      <motion.div
        animate={{ y: [0, 0, -60, -90], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.65, 0.85] }}
        style={{ position: 'absolute', bottom: 28, left: '50%', marginLeft: -10, zIndex: 5 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '14px solid #ef5350', margin: '0 auto' }} />
        <div style={{ width: 20, height: 28, background: '#f5f5f5', border: '2px solid #bdbdbd', borderTop: 'none', borderRadius: '0 0 4px 4px' }}>
          <div style={{ width: 6, height: 6, background: '#1565c0', borderRadius: '50%', margin: '6px auto 0' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: -5, width: 8, height: 10, background: '#ef5350', borderRadius: '0 0 0 4px', transform: 'skewX(10deg)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: -5, width: 8, height: 10, background: '#ef5350', borderRadius: '0 0 4px 0', transform: 'skewX(-10deg)' }} />
      </motion.div>
      {/* 噴射火焰 */}
      <motion.div
        animate={{ scaleY: [0, 0, 1, 1.5], opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 0.8] }}
        style={{ position: 'absolute', bottom: 20, left: '50%', marginLeft: -8, width: 16, height: 20, background: 'linear-gradient(180deg, #ff9800, #ffeb3b, transparent)', borderRadius: '0 0 8px 8px', transformOrigin: 'top center', zIndex: 4 }}
      />
      {/* 煙霧 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0, 0, 1.5, 2.5], opacity: [0, 0, 0.4, 0], x: [0, 0, i === 0 ? -15 : 15, i === 0 ? -25 : 25] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.5, 0.8] }}
          style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -6, width: 12, height: 12, background: '#bdbdbd', borderRadius: '50%', filter: 'blur(3px)' }}
        />
      ))}
    </div>
  );
}

// Set back = 延遲：進度條前進後又跳回
function SetBackScene() {
  return (
    <div style={S}>
      {/* 進度條外框 */}
      <div style={{ position: 'absolute', top: '50%', marginTop: -8, left: 10, right: 10, height: 16, background: '#f5f5f5', border: '2px solid #e0e0e0', borderRadius: 8 }}>
        <motion.div
          animate={{ width: ['20%', '75%', '75%', '35%', '35%'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.45, 0.65, 1] }}
          style={{ height: '100%', borderRadius: 6 }}
        >
          <motion.div
            animate={{ backgroundColor: ['#4caf50', '#4caf50', '#4caf50', '#ef5350', '#ef5350'] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.45, 0.65, 1] }}
            style={{ width: '100%', height: '100%', borderRadius: 6 }}
          />
        </motion.div>
      </div>
      {/* 向後箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], x: [10, 10, 0, -5, -5] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.5, 0.65, 0.8] }}
        style={{ position: 'absolute', top: '50%', marginTop: -20, right: 25, zIndex: 5 }}
      >
        <svg width="24" height="16"><path d="M 22 8 L 6 8 M 10 2 L 4 8 L 10 14" fill="transparent" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.div>
      {/* 百分比文字 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 0.95] }}
        style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -10, fontSize: 10, fontWeight: 'bold', color: '#ef5350' }}
      >
        -40%
      </motion.div>
    </div>
  );
}

// Set aside = 擱置：手把物品從主桌移到旁邊架子
function SetAsideScene() {
  return (
    <div style={S}>
      {/* 主桌面 */}
      <div style={{ position: 'absolute', bottom: 25, left: 5, width: 45, height: 4, background: '#795548', borderRadius: 2 }} />
      {/* 旁邊架子 */}
      <div style={{ position: 'absolute', bottom: 25, right: 5, width: 30, height: 4, background: '#a1887f', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 15, right: 10, width: 4, height: 14, background: '#a1887f' }} />
      <div style={{ position: 'absolute', bottom: 15, right: 30, width: 4, height: 14, background: '#a1887f' }} />
      {/* 文件被移走 */}
      <motion.div
        animate={{ x: [0, 0, 35, 35], y: [0, -15, -15, 0], opacity: [1, 1, 0.5, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.7] }}
        style={{ position: 'absolute', bottom: 29, left: 15, width: 16, height: 20, background: '#fff', border: '2px solid #cfd8dc', borderRadius: 2, zIndex: 5 }}
      >
        <div style={{ width: 8, height: 2, background: '#90caf9', margin: '4px auto 2px' }} />
        <div style={{ width: 10, height: 2, background: '#90caf9', margin: '2px auto' }} />
      </motion.div>
      {/* 搬移的手 */}
      <motion.div
        animate={{ x: [0, 0, 35, 35], y: [-5, -20, -20, -5], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.65] }}
        style={{ position: 'absolute', top: 15, left: 18, zIndex: 10 }}
      >
        <div style={{ width: 18, height: 10, background: '#F5CBA7', borderRadius: '6px 6px 3px 3px', border: '1px solid #E59866' }} />
        <div style={{ width: 3, height: 8, background: '#F5CBA7', border: '1px solid #E59866', borderTop: 'none', position: 'absolute', bottom: -7, left: 2, borderRadius: '0 0 2px 2px' }} />
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Take 片語場景
// ═══════════════════════════════════════

// Take on = 承擔：人彎腰扛起重箱子到肩上
function TakeOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 人物 */}
      <div style={{ position: 'absolute', left: 18, bottom: 15 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <motion.div
          animate={{ scaleY: [1, 0.85, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.7] }}
          style={{ transformOrigin: 'bottom center' }}
        >
          <div style={{ width: 6, height: 22, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 6, marginLeft: -3 }}>
            <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
            <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
          </div>
        </motion.div>
      </div>
      {/* 重箱子落到肩上 */}
      <motion.div
        animate={{ y: [-30, -30, 0, 0], x: [15, 15, 0, 0], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.5, 1] }}
        style={{ position: 'absolute', left: 12, top: 15, zIndex: 5 }}
      >
        <div style={{ width: 24, height: 20, background: '#795548', border: '2px solid #5d4037', borderRadius: 3 }}>
          <div style={{ width: '80%', height: 2, background: '#5d4037', margin: '6px auto 0' }} />
          <div style={{ width: 10, height: 6, border: '1.5px solid #5d4037', borderRadius: 2, margin: '2px auto 0' }} />
        </div>
      </motion.div>
      {/* 重量線條 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 0], y: [0, 0, 3, 6] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.6, 0.8] }}
        style={{ position: 'absolute', left: 8, top: 38, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 6 + i * 2, height: 1.5, background: '#ef5350', borderRadius: 1, opacity: 0.6 + i * 0.15 }} />
        ))}
      </motion.div>
    </div>
  );
}

// Take up = 從事：手伸向吉他並拿起
function TakeUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 吉他 */}
      <motion.div
        animate={{ y: [0, 0, -20, -20], rotate: [0, 0, -15, -15], opacity: [0.5, 0.5, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -10, bottom: 20, zIndex: 5 }}
      >
        <div style={{ width: 4, height: 28, background: '#795548', margin: '0 auto', borderRadius: 1 }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ position: 'absolute', top: 4 + i * 6, left: -1, width: 6, height: 1, background: '#bdbdbd' }} />
          ))}
        </div>
        <div style={{ width: 20, height: 16, background: '#ff9800', borderRadius: '50%', border: '2px solid #e65100', marginTop: -2, marginLeft: -8 }}>
          <div style={{ width: 6, height: 6, background: '#5d4037', borderRadius: '50%', margin: '4px auto 0' }} />
        </div>
      </motion.div>
      {/* 伸出的手 */}
      <motion.div
        animate={{ y: [20, 0, -15, -15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.5, 0.9] }}
        style={{ position: 'absolute', bottom: 8, left: '50%', marginLeft: -12, zIndex: 10 }}
      >
        <div style={{ width: 8, height: 25, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        <div style={{ width: 20, height: 10, background: '#F5CBA7', borderRadius: '4px 4px 8px 8px', border: '2px solid #E59866', borderTop: 'none', marginLeft: -6 }} />
      </motion.div>
    </div>
  );
}

// Take over = 接管：新人坐上王座，舊人退開
function TakeOverScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 椅子/王座 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -12, width: 24, height: 28, background: '#ff9800', borderRadius: '4px 4px 0 0', border: '2px solid #e65100' }}>
        <div style={{ position: 'absolute', top: -8, left: '50%', marginLeft: -4, width: 8, height: 8, background: '#ffd600', borderRadius: '50%' }} />
      </div>
      {/* 舊人退開 */}
      <motion.div
        animate={{ x: [0, 0, -25, -25], opacity: [1, 1, 0.3, 0.3], scale: [1, 1, 0.8, 0.8] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -5, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#90a4ae', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* 新人坐上 */}
      <motion.div
        animate={{ x: [30, 30, 0, 0], y: [0, 0, -2, -2], opacity: [0, 0.5, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.55, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -7, bottom: 17, zIndex: 10 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
    </div>
  );
}

// Take out = 取出：手伸進袋子裡拿出物品
function TakeOutScene() {
  return (
    <div style={S}>
      {/* 袋子 */}
      <div style={{ position: 'absolute', bottom: 15, left: 12, width: 35, height: 40, background: '#efebe9', border: '3px solid #8d6e63', borderRadius: '0 0 6px 6px' }}>
        <div style={{ position: 'absolute', top: -5, left: -3, right: -3, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      </div>
      {/* 被取出的物品 */}
      <motion.div
        animate={{ x: [0, 0, 25, 30], y: [0, -10, -25, -25], opacity: [0.3, 1, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: 22, bottom: 35, zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, background: '#1565c0', borderRadius: 3, border: '2px solid #0d47a1' }} />
      </motion.div>
      {/* 手 */}
      <motion.div
        animate={{ y: [0, 8, -20, -20], x: [0, 0, 20, 20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.55, 1] }}
        style={{ position: 'absolute', top: 10, left: 20, zIndex: 10 }}
      >
        <div style={{ width: 8, height: 25, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        <div style={{ width: 20, height: 10, background: '#F5CBA7', borderRadius: '4px 4px 8px 8px', border: '2px solid #E59866', borderTop: 'none', marginLeft: -6 }} />
      </motion.div>
    </div>
  );
}

// Take in = 吸收：大腦吸收知識水滴
function TakeInScene() {
  return (
    <div style={S}>
      {/* 大腦形狀 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '50%', marginTop: -16, width: 36, height: 32, background: '#f8bbd0', borderRadius: '16px 16px 12px 12px', border: '2px solid #e91e63', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 8, left: '50%', width: 2, height: 16, background: '#e91e63', opacity: 0.4 }} />
        <svg width="36" height="32" style={{ position: 'absolute', top: 0, left: 0 }}>
          <path d="M 6 12 Q 14 6 18 14 Q 22 8 30 12" fill="transparent" stroke="#e91e63" strokeWidth="1.5" opacity="0.4" />
        </svg>
        <motion.div
          animate={{ opacity: [0, 0, 0.4, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.65, 0.8] }}
          style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(255,255,255,0.6), transparent)' }}
        />
      </div>
      {/* 知識水滴飛向大腦 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{
            x: [i === 0 ? -20 : i === 1 ? 0 : 20, 0],
            y: [i === 1 ? -25 : -15, 0],
            scale: [1, 0],
            opacity: [0.8, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          style={{ position: 'absolute', left: '50%', marginLeft: -4 + (i - 1) * 20, top: '50%', marginTop: -4 - (i === 1 ? 20 : 10), width: 8, height: 8, borderRadius: '50%', background: i === 0 ? '#42a5f5' : i === 1 ? '#66bb6a' : '#ff9800' }}
        />
      ))}
    </div>
  );
}

// Take back = 收回：話/對話泡被拉回嘴邊
function TakeBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 人物 */}
      <div style={{ position: 'absolute', left: 12, bottom: 15 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }}>
          <div style={{ position: 'absolute', bottom: 2, left: '50%', marginLeft: -3, width: 6, height: 3, background: '#263238', borderRadius: '0 0 3px 3px' }} />
        </div>
        <div style={{ width: 5, height: 18, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 對話泡被拉回 */}
      <motion.div
        animate={{ x: [40, 40, 5, 5], opacity: [1, 1, 0.3, 0], scale: [1, 1, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.6, 0.75] }}
        style={{ position: 'absolute', left: 28, top: 15, background: '#e3f2fd', border: '2px solid #90caf9', borderRadius: 8, padding: '4px 8px', zIndex: 5 }}
      >
        <div style={{ width: 20, height: 2, background: '#64b5f6', borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: 14, height: 2, background: '#64b5f6', borderRadius: 1 }} />
      </motion.div>
      {/* 拉回弧線 */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.5, 0.7] }}
      >
        <svg width="50" height="20" style={{ position: 'absolute', left: 20, top: 30 }}>
          <path d="M 45 10 Q 25 -5 5 10" fill="transparent" stroke="#ef5350" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 10 5 L 5 10 L 10 15" fill="transparent" stroke="#ef5350" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
}

// Take down = 拆除：建築物一層層被拆掉
function TakeDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [1, 1, 0, 0], x: [0, 0, i % 2 === 0 ? -10 : 10, i % 2 === 0 ? -15 : 15], rotate: [0, 0, i % 2 === 0 ? -8 : 8, i % 2 === 0 ? -12 : 12] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2 + i * 0.12, 0.35 + i * 0.12, 0.5 + i * 0.1] }}
          style={{ position: 'absolute', bottom: 15 + i * 14, left: '50%', marginLeft: -15, width: 30, height: 12, background: i === 0 ? '#8d6e63' : i === 1 ? '#a1887f' : i === 2 ? '#bcaaa4' : '#d7ccc8', borderRadius: 1, border: '1px solid rgba(0,0,0,0.1)' }}
        />
      ))}
      {/* 碎片 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={`d${i}`}
          animate={{ y: [-10, -10, 20, 30], x: [-5 + i * 10, -5 + i * 10, -15 + i * 15, -20 + i * 20], opacity: [0, 0, 0.6, 0], rotate: [0, 0, 45 * i, 90 * i] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.8] }}
          style={{ position: 'absolute', top: 25, left: '50%', marginLeft: -3, width: 5, height: 5, background: '#8d6e63', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// Take away = 拿走：卡車載著箱子駛離
function TakeAwayScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <motion.div
        animate={{ x: [-10, -10, 80, 80], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.7, 0.85] }}
        style={{ position: 'absolute', bottom: 15, left: 5, zIndex: 5 }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ width: 30, height: 24, background: '#546e7a', borderRadius: '3px 3px 0 0', border: '2px solid #37474f', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 3, left: 3, width: 10, height: 8, background: '#795548', borderRadius: 1 }} />
            <div style={{ position: 'absolute', top: 3, right: 3, width: 10, height: 10, background: '#8d6e63', borderRadius: 1 }} />
          </div>
          <div style={{ width: 16, height: 18, background: '#1565c0', borderRadius: '3px 3px 0 0', border: '2px solid #0d47a1', borderLeft: 'none' }}>
            <div style={{ width: 8, height: 6, background: '#90caf9', borderRadius: 1, margin: '3px auto 0' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: -4, left: 5, width: 8, height: 8, background: '#212121', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 3, width: 8, height: 8, background: '#212121', borderRadius: '50%' }} />
      </motion.div>
      {/* 灰塵 */}
      <motion.div
        animate={{ opacity: [0, 0.3, 0], scaleX: [0.5, 1.5, 2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7] }}
        style={{ position: 'absolute', bottom: 14, left: 5, width: 15, height: 4, background: '#bdbdbd', borderRadius: '50%', filter: 'blur(2px)', transformOrigin: 'left center' }}
      />
    </div>
  );
}

// ═══════════════════════════════════════
// Put 片語場景
// ═══════════════════════════════════════

// Put on = 穿上：帽子從上方落到人頭上
function PutOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', left: '50%', marginLeft: -7, bottom: 15 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 20, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      <motion.div
        animate={{ y: [-30, -30, 0, 0], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.45, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -12, top: 17, zIndex: 5 }}
      >
        <div style={{ width: 24, height: 6, background: '#1565c0', borderRadius: '6px 6px 0 0' }} />
        <div style={{ width: 18, height: 10, background: '#1565c0', borderRadius: '8px 8px 0 0', margin: '-2px auto 0' }} />
      </motion.div>
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.55, 0.7] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, top: 20, width: 30, height: 20, border: '2px solid #90caf9', borderRadius: '50%' }}
      />
    </div>
  );
}

// Put off = 推遲：日曆頁被推向右邊
function PutOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '50%', marginLeft: -20, top: '50%', marginTop: -25, width: 40, height: 50, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: 10, background: '#ef5350' }} />
        <div style={{ padding: 4, textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>15</div>
          <div style={{ fontSize: 7, color: '#888' }}>MON</div>
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 0, 35, 35], rotate: [0, 0, 10, 10], opacity: [1, 1, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -18, top: '50%', marginTop: -23, width: 36, height: 46, background: '#fff', border: '2px solid #e0e0e0', borderRadius: 3, overflow: 'hidden', zIndex: 5 }}
      >
        <div style={{ height: 9, background: '#ef5350' }} />
        <div style={{ padding: 3, textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>15</div>
        </div>
      </motion.div>
      <motion.div
        animate={{ x: [-15, -15, 20, 20], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.6, 0.75] }}
        style={{ position: 'absolute', left: 8, top: '50%', marginTop: -6, zIndex: 10 }}
      >
        <div style={{ width: 20, height: 10, background: '#F5CBA7', borderRadius: 5, border: '1px solid #E59866' }} />
      </motion.div>
    </div>
  );
}

// Put up = 忍受：人站穩，雨和物品砸下來
function PutUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', left: '50%', marginLeft: -7, bottom: 15, zIndex: 5 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 20, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 5, marginLeft: -2 }}>
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          animate={{ y: [-10, 65], opacity: [0.7, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.35 }}
          style={{ position: 'absolute', top: 0, left: 10 + i * 16, width: 3, height: 8, background: '#90caf9', borderRadius: 3 }}
        />
      ))}
      <motion.div
        animate={{ y: [-20, 25], opacity: [0.8, 0], rotate: [0, 30] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        style={{ position: 'absolute', top: 0, left: '50%', marginLeft: 8, width: 10, height: 10, background: '#ef5350', borderRadius: 2, zIndex: 3 }}
      />
    </div>
  );
}

// Put down = 放下：手把手機放到桌面上
function PutDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 22, left: 10, right: 10, height: 5, background: '#795548', borderRadius: 2 }} />
      <div style={{ position: 'absolute', bottom: 10, left: 18, width: 4, height: 14, background: '#795548' }} />
      <div style={{ position: 'absolute', bottom: 10, right: 18, width: 4, height: 14, background: '#795548' }} />
      <motion.div
        animate={{ y: [-25, -25, 0, 0], opacity: [0, 1, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.45, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -8, bottom: 27, zIndex: 5 }}
      >
        <div style={{ width: 16, height: 24, background: '#263238', borderRadius: 3, border: '1px solid #37474f' }}>
          <div style={{ width: 12, height: 16, background: '#42a5f5', borderRadius: 1, margin: '2px auto' }} />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [-30, -30, -5, -30], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.4, 0.6] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -10, top: 5, zIndex: 10 }}
      >
        <div style={{ width: 8, height: 20, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        <div style={{ width: 18, height: 8, background: '#F5CBA7', borderRadius: '3px 3px 6px 6px', border: '1px solid #E59866', borderTop: 'none', marginLeft: -5 }} />
      </motion.div>
    </div>
  );
}

// Put out = 熄滅：滅火器噴射灭火
function PutOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <motion.div
        animate={{ scale: [1, 1, 0.3, 0], opacity: [1, 1, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.75] }}
        style={{ position: 'absolute', left: 15, bottom: 15, zIndex: 3 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '22px solid #ff9800' }} />
        <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '14px solid #ffeb3b', position: 'absolute', bottom: 0, left: 4 }} />
      </motion.div>
      <div style={{ position: 'absolute', right: 12, bottom: 15 }}>
        <div style={{ width: 14, height: 28, background: '#ef5350', borderRadius: '4px 4px 2px 2px', border: '1px solid #c62828' }}>
          <div style={{ width: 6, height: 4, background: '#212121', borderRadius: 1, margin: '-2px auto 0' }} />
        </div>
      </div>
      <motion.div
        animate={{ scaleX: [0, 0, 1, 1.2], opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.5, 0.7] }}
        style={{ position: 'absolute', right: 25, bottom: 28, width: 30, height: 8, background: 'linear-gradient(270deg, #e0e0e0, rgba(255,255,255,0.3))', borderRadius: 4, transformOrigin: 'right center', zIndex: 5 }}
      />
    </div>
  );
}

// Put away = 收起來：手把物品放進抽屜
function PutAwayScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', right: 8, top: '50%', marginTop: -22, width: 35, height: 44, background: '#795548', borderRadius: 3, border: '2px solid #5d4037' }}>
        <motion.div
          animate={{ x: [8, 8, 0, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.65, 1] }}
          style={{ position: 'absolute', top: 10, left: 3, right: 3, height: 16, background: '#8d6e63', borderRadius: 2, border: '1px solid #5d4037' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: -4, marginTop: -2, width: 8, height: 3, background: '#ffd600', borderRadius: 1 }} />
        </motion.div>
      </div>
      <motion.div
        animate={{ x: [0, 0, 28, 28], opacity: [1, 1, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.55, 1] }}
        style={{ position: 'absolute', left: 15, top: '50%', marginTop: -8, width: 16, height: 16, background: '#1565c0', borderRadius: 3, border: '2px solid #0d47a1', zIndex: 5 }}
      />
      <motion.div
        animate={{ x: [-5, -5, 25, 25], opacity: [1, 1, 0.5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.5, 0.65] }}
        style={{ position: 'absolute', left: 5, top: '50%', marginTop: -14, zIndex: 10 }}
      >
        <div style={{ width: 16, height: 8, background: '#F5CBA7', borderRadius: 4, border: '1px solid #E59866' }} />
      </motion.div>
    </div>
  );
}

// Put in = 投入：硬幣投進存錢罐
function PutInScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -20, width: 40, height: 32, background: '#f8bbd0', borderRadius: '20px 20px 16px 16px', border: '2px solid #e91e63' }}>
        <div style={{ position: 'absolute', top: -2, left: '50%', marginLeft: -8, width: 16, height: 3, background: '#c2185b', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 10, left: 10, width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 14, right: 6, width: 8, height: 6, background: '#e91e63', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -4, left: 8, width: 6, height: 4, background: '#f8bbd0', border: '1px solid #e91e63', borderRadius: '0 0 3px 3px' }} />
        <div style={{ position: 'absolute', bottom: -4, right: 8, width: 6, height: 4, background: '#f8bbd0', border: '1px solid #e91e63', borderRadius: '0 0 3px 3px' }} />
      </div>
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ y: [-20, -20, 12, 12], opacity: [0, 1, 1, 0], rotate: [0, 0, 180, 180] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.4, 0.5], delay: i * 1.2 }}
          style={{ position: 'absolute', left: '50%', marginLeft: -5 + i * 4, top: 8, width: 10, height: 10, background: '#ffd600', borderRadius: '50%', border: '2px solid #f9a825', zIndex: 10 }}
        />
      ))}
    </div>
  );
}

// Put together = 組合：拼圖從四角飛來組成完整圖
function PutTogetherScene() {
  return (
    <div style={S}>
      {[
        { x: [-30, 0], y: [-20, 0], color: '#1565c0', left: '35%', top: '35%', radius: '8px 2px 2px 2px' },
        { x: [30, 0], y: [-20, 0], color: '#4caf50', left: '50%', top: '35%', radius: '2px 8px 2px 2px' },
        { x: [-30, 0], y: [20, 0], color: '#ff9800', left: '35%', top: '50%', radius: '2px 2px 2px 8px' },
        { x: [30, 0], y: [20, 0], color: '#ef5350', left: '50%', top: '50%', radius: '2px 2px 8px 2px' },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ x: p.x, y: p.y, opacity: [0, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4], delay: i * 0.15 }}
          style={{ position: 'absolute', left: p.left, top: p.top, width: 16, height: 16, background: p.color, borderRadius: p.radius, border: '1px solid rgba(0,0,0,0.15)', zIndex: 5 }}
        />
      ))}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.45, 0.6, 0.75] }}
        style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -20, marginTop: -20, width: 40, height: 40, border: '2px solid #ffd600', borderRadius: '50%' }}
      />
    </div>
  );
}

// ═══════════════════════════════════════
// Come 片語場景
// ═══════════════════════════════════════

// Come up = 提出/出現：會議桌，中間藍色主角舉起手臂，巨大對話泡泡從上方浮出
function ComeUpScene() {
  return (
    <div style={S}>
      {/* 地面線 */}
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 會議桌（夠寬、夠厚，一眼就看出是桌子） */}
      <div style={{ position: 'absolute', bottom: 15, left: 5, right: 5, height: 10, background: '#6d4c41', borderRadius: 3, boxShadow: '0 3px 6px rgba(0,0,0,0.2)' }} />
      {/* 左邊小人（灰色，旁聽者） */}
      <div style={{ position: 'absolute', bottom: 25, left: 8 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#9e9e9e', margin: '0 auto' }} />
        <div style={{ width: 16, height: 8, background: '#9e9e9e', borderRadius: 2, margin: '0 auto' }} />
      </div>
      {/* 右邊小人（灰色，旁聽者） */}
      <div style={{ position: 'absolute', bottom: 25, right: 8 }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#9e9e9e', margin: '0 auto' }} />
        <div style={{ width: 16, height: 8, background: '#9e9e9e', borderRadius: 2, margin: '0 auto' }} />
      </div>
      {/* 中間主角（藍色，發言者） */}
      <div style={{ position: 'absolute', bottom: 25, left: '50%', marginLeft: -9 }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#1565c0', margin: '0 auto', border: '2px solid #0d47a1' }} />
        <div style={{ width: 20, height: 10, background: '#1565c0', borderRadius: 2, margin: '0 auto' }} />
      </div>
      {/* 手臂（夠粗：10px，從身側舉起） */}
      <motion.div
        animate={{ rotate: [0, 0, -80, -80, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.25, 0.65, 0.82], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 38, left: '50%', marginLeft: 6, width: 10, height: 28, background: '#F5CBA7', borderLeft: '2px solid #E59866', borderRadius: 4, transformOrigin: 'bottom center', zIndex: 6 }}
      />
      {/* 對話泡泡（大：38×28px，清楚可見） */}
      <motion.div
        animate={{ y: [20, 20, 0, 0, 0], opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.18, 0.38, 0.72, 0.92] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -18, top: 4, zIndex: 10 }}
      >
        <div style={{ width: 38, height: 28, background: '#e3f2fd', border: '2.5px solid #42a5f5', borderRadius: 10, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 22, height: 3, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 16, height: 3, background: '#1565c0', borderRadius: 2 }} />
          {/* 尾巴 */}
          <div style={{ position: 'absolute', bottom: -9, left: 10, width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '9px solid #42a5f5' }} />
          <div style={{ position: 'absolute', bottom: -6, left: 12, width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid #e3f2fd' }} />
        </div>
      </motion.div>
      {/* 提出瞬間的金色衝擊波 */}
      <motion.div
        animate={{ scale: [0, 0, 1.8, 0], opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.32, 0.42, 0.6] }}
        style={{ position: 'absolute', left: '50%', top: 10, marginLeft: -20, width: 40, height: 40, border: '2px solid #FFD700', borderRadius: '50%', zIndex: 9 }}
      />
    </div>
  );
}

// Come down = 下降：電梯下降，樓層數字變化
function ComeDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '50%', marginLeft: -18, top: 5, bottom: 10, width: 36, border: '3px solid #546e7a', borderRadius: 4, background: '#f5f5f5', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#90a4ae' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 2, background: '#90a4ae' }} />
        <motion.div
          animate={{ y: [-5, -5, 45, 45] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.65, 1] }}
          style={{ position: 'absolute', left: 3, right: 3, height: 28, background: '#78909c', borderRadius: 2, border: '1px solid #455a64' }}
        >
          <div style={{ position: 'absolute', left: '50%', top: 2, bottom: 2, width: 2, background: '#455a64' }} />
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 1] }}
        style={{ position: 'absolute', right: 12, top: 12, fontSize: 12, fontWeight: 'bold', color: '#1565c0' }}
      >
        5F
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 1] }}
        style={{ position: 'absolute', right: 12, top: 12, fontSize: 12, fontWeight: 'bold', color: '#ef5350' }}
      >
        1F
      </motion.div>
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', left: 10, top: '50%', marginTop: -6 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid #ef5350' }} />
      </motion.div>
    </div>
  );
}

// Come in = 進來：門打開，人走進來
function ComeInScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', left: '50%', marginLeft: -16, top: 8, width: 32, height: 58, border: '3px solid #795548', borderBottom: 'none', borderRadius: '4px 4px 0 0', background: '#efebe9' }}>
        <div style={{ position: 'absolute', right: 5, top: '50%', width: 4, height: 4, background: '#ffd600', borderRadius: '50%' }} />
      </div>
      <motion.div
        animate={{ rotateY: [0, 0, -60, -60] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.35, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -14, top: 11, width: 26, height: 53, background: '#8d6e63', borderRadius: 2, transformOrigin: 'left center', zIndex: 3 }}
      />
      <motion.div
        animate={{ x: [30, 30, 0, 0], opacity: [0, 0, 1, 1], scale: [0.7, 0.7, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -5, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 3, height: 10, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Come out = 推出/出來：幕簾拉開，產品出現
function ComeOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', top: 5, left: 0, right: 0, height: 8, background: '#c62828', borderRadius: '0 0 2px 2px', zIndex: 10 }} />
      <motion.div
        animate={{ x: [0, 0, -22, -22] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 1] }}
        style={{ position: 'absolute', top: 13, left: 0, width: '50%', height: 55, background: '#d32f2f', borderRadius: '0 0 8px 0', zIndex: 8 }}
      />
      <motion.div
        animate={{ x: [0, 0, 22, 22] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 1] }}
        style={{ position: 'absolute', top: 13, right: 0, width: '50%', height: 55, background: '#d32f2f', borderRadius: '0 0 0 8px', zIndex: 8 }}
      />
      <motion.div
        animate={{ scale: [0.5, 0.5, 0.5, 1], opacity: [0, 0, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.6] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -14, top: 25, zIndex: 5 }}
      >
        <div style={{ width: 28, height: 28, background: '#ff9800', borderRadius: 6, border: '2px solid #e65100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 10, background: '#ffeb3b', borderRadius: '50%' }} />
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7] }}
        style={{ position: 'absolute', top: 13, left: '50%', marginLeft: -25, width: 50, height: 45, background: 'linear-gradient(180deg, rgba(255,235,59,0.3), transparent)', borderRadius: '0 0 50% 50%', zIndex: 6 }}
      />
    </div>
  );
}

// Come back = 回來：飛去標被丟出又飛回
function ComeBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', left: 10, bottom: 15 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      <motion.div
        animate={{
          x: [5, 50, 60, 50, 5],
          y: [0, -30, -15, 5, 0],
          rotate: [0, 360, 720, 1080, 1440]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', left: 20, top: '45%', zIndex: 5 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M 8 2 L 2 8 L 5 8 L 5 14 L 8 8 L 11 14 L 11 8 L 14 8 Z" fill="#1565c0" stroke="#0d47a1" strokeWidth="1" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 0.3, 0.3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.5, 0.7] }}
      >
        <svg width="70" height="40" style={{ position: 'absolute', left: 20, top: 15 }}>
          <path d="M 5 25 Q 35 -10 65 15 Q 55 30 5 25" fill="transparent" stroke="#90caf9" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
      </motion.div>
    </div>
  );
}

// Come across = 偶然遇到：人走路轉角撞見另一人+驚嘆
function ComeAcrossScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 轉角牆壁 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -3, top: 15, bottom: 15, width: 6, background: '#8d6e63', borderRadius: 2, zIndex: 3 }} />
      {/* 左邊走來的人 */}
      <motion.div
        animate={{ x: [0, 0, 18, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.4, 0.5] }}
        style={{ position: 'absolute', left: 8, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 右邊走來的人 */}
      <motion.div
        animate={{ x: [0, 0, -18, -15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.15, 0.4, 0.5] }}
        style={{ position: 'absolute', right: 8, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#ef5350', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <div style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1 }} />
          <div style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 撞見驚嘆號 */}
      <motion.div
        animate={{ scale: [0, 0, 1.3, 1, 0], opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.38, 0.48, 0.7, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -5, top: 5, fontSize: 14, fontWeight: 'bold', color: '#ff9800', zIndex: 10 }}
      >!</motion.div>
    </div>
  );
}

// Come along = 一起來/進展：一人走路，另一人加入同行
function ComeAlongScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', bottom: 14, left: 10, right: 10, height: 2, background: '#a5d6a7' }} />
      <motion.div
        animate={{ x: [-15, 40] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 15, left: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 8, background: '#1565c0', borderRadius: 1 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 8, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </motion.div>
      <motion.div
        animate={{ x: [-30, -30, -15, 25], y: [10, 10, 0, 0], opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 1] }}
        style={{ position: 'absolute', bottom: 15, left: 10, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 8, background: '#4caf50', borderRadius: 1 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 8, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Come over = 拜訪：人從遠處房子走向近處房子
function ComeOverScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 遠處小房子 */}
      <div style={{ position: 'absolute', left: 8, bottom: 15, opacity: 0.5 }}>
        <div style={{ width: 14, height: 14, background: '#8d6e63', borderRadius: '1px 1px 0 0' }}>
          <div style={{ position: 'absolute', top: -6, left: -2, width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderBottom: '7px solid #5d4037' }} />
        </div>
      </div>
      {/* 近處大房子 */}
      <div style={{ position: 'absolute', right: 8, bottom: 15 }}>
        <div style={{ width: 24, height: 26, background: '#8d6e63', borderRadius: '2px 2px 0 0' }}>
          <div style={{ position: 'absolute', top: -10, left: -3, width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '12px solid #5d4037' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 8, width: 8, height: 12, background: '#3e2723', borderRadius: '2px 2px 0 0' }} />
        </div>
      </div>
      {/* 走路的人 */}
      <motion.div
        animate={{ x: [-5, -5, 35, 35], scale: [0.7, 0.7, 1, 1], opacity: [0.5, 0.8, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1, 0.6, 1] }}
        style={{ position: 'absolute', left: 18, bottom: 15, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 9, background: '#1565c0', borderRadius: 1 }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 3, height: 9, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Give 片語場景
// ═══════════════════════════════════════

// Give up = 放棄：人丟下工具走開，白旗飄揚
function GiveUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      {/* 白旗 */}
      <div style={{ position: 'absolute', left: 10, bottom: 15, width: 2, height: 50, background: '#bdbdbd' }} />
      <motion.div
        style={{ position: 'absolute', left: 12, top: 12, width: 22, height: 14, background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 1 }}
        animate={{ skewX: [0, 3, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* 人低頭走開 */}
      <motion.div
        style={{ position: 'absolute', bottom: 15 }}
        animate={{ x: [35, 35, 75], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 1] }}
      >
        <motion.div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} animate={{ y: [0, 0, 3] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 1] }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
          <div style={{ width: 2, height: 10, background: '#546e7a' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Give in = 屈服：人推牆最後倒下
function GiveInScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', right: 10, top: 5, bottom: 5, width: 8, background: '#78909c', borderRadius: 2 }} />
      <motion.div
        animate={{ rotate: [5, 5, 30], y: [0, 0, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
        style={{ position: 'absolute', left: '35%', top: '30%', transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 12, right: -10, width: 12, height: 2, background: '#546e7a' }} />
      </motion.div>
      {[0, 1, 2].map(i => (
        <motion.div key={i} style={{ position: 'absolute', right: 20, top: 15 + i * 16 }} animate={{ x: [5, 0, 5], opacity: [0, 0.7, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderRight: '5px solid #ef5350' }} />
            <div style={{ width: 8, height: 2, background: '#ef5350' }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Give out = 分發：左側人員手持一疊傳單遞出，右側三人排隊伸手接收
function GiveOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 發傳單的人（左邊，藍色，完整身形） */}
      <div style={{ position: 'absolute', left: 3, bottom: 15 }}>
        {/* 頭 */}
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#1565c0', margin: '0 auto', border: '2px solid #0d47a1' }} />
        {/* 身體 */}
        <div style={{ width: 22, height: 10, background: '#1565c0', borderRadius: 2, margin: '0 auto' }} />
        {/* 腳 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          <div style={{ width: 4, height: 14, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 4, height: 14, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </div>
      {/* 手臂（粗：10px寬，從肩部伸出） */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 25, bottom: 32, width: 30, height: 10, background: '#F5CBA7', borderRadius: '0 6px 6px 0', border: '2px solid #E59866', borderLeft: 'none', zIndex: 5 }}
      />
      {/* 手持的一疊傳單（明顯可見） */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 54, bottom: 30, width: 16, height: 22, background: '#fff', border: '2px solid #1565c0', borderRadius: 2, zIndex: 6, boxShadow: '2px 2px 0 #e3f2fd, 4px 4px 0 #bbdefb' }}
      >
        <div style={{ margin: '4px 3px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: 8, height: 2, background: '#90caf9', borderRadius: 1 }} />
          <div style={{ width: 6, height: 2, background: '#90caf9', borderRadius: 1 }} />
          <div style={{ width: 7, height: 2, background: '#90caf9', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 飛出的傳單（一次一張，清楚飛向每個人） */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [0, 38], y: [0, i === 0 ? -22 : i === 1 ? 0 : 22], opacity: [1, 0.5], rotate: [0, i === 0 ? -15 : i === 2 ? 15 : 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: i * 0.65 }}
          style={{ position: 'absolute', left: 58, bottom: 30, width: 14, height: 20, background: '#e3f2fd', border: '1.5px solid #42a5f5', borderRadius: 2, zIndex: 7 }}
        >
          <div style={{ margin: '3px 2px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ width: 8, height: 2, background: '#1565c0', borderRadius: 1 }} />
            <div style={{ width: 6, height: 2, background: '#1565c0', borderRadius: 1 }} />
          </div>
        </motion.div>
      ))}
      {/* 三個排隊的人（右側，每人都有伸出的手） */}
      {[{ top: 8, color: '#455a64' }, { top: 34, color: '#37474f' }, { top: 60, color: '#546e7a' }].map((p, i) => (
        <div key={i} style={{ position: 'absolute', right: 4, top: p.top }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: p.color, margin: '0 auto' }} />
          <div style={{ width: 16, height: 6, background: p.color, borderRadius: 2, margin: '0 auto' }} />
          {/* 伸出的左手（10px高，夠粗看得清楚） */}
          <div style={{ position: 'absolute', top: 12, left: -14, width: 14, height: 8, background: '#F5CBA7', borderRadius: '4px 0 0 4px', border: '1.5px solid #E59866', borderRight: 'none' }} />
        </div>
      ))}
    </div>
  );
}

// Give away = 贈送：禮物從左人移到右人
function GiveAwayScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', left: 8, bottom: 15 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', margin: '0 auto' }} />
      </div>
      <div style={{ position: 'absolute', right: 8, bottom: 15 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        <div style={{ width: 4, height: 16, background: '#546e7a', margin: '0 auto' }} />
      </div>
      <motion.div animate={{ x: [0, 45] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', left: 22, top: '40%' }}>
        <div style={{ width: 16, height: 14, background: '#ef5350', borderRadius: 2, border: '1px solid #c62828', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: '#ffd600', marginTop: -1 }} />
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#ffd600', marginLeft: -1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Give back = 歸還：右側藍人手持物品遞向左側灰人，物品從右到左飛過去，移交完成
function GiveBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 左側原主人（灰色，面向右，等著接收） */}
      <div style={{ position: 'absolute', left: 3, bottom: 15 }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#455a64', margin: '0 auto', border: '2px solid #263238' }} />
        <div style={{ width: 20, height: 10, background: '#455a64', borderRadius: 2, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
          <div style={{ width: 4, height: 14, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {/* 左側人的右手（伸出來等接） */}
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 23, bottom: 32, width: 20, height: 10, background: '#F5CBA7', borderRadius: '0 6px 6px 0', border: '2px solid #E59866', borderLeft: 'none', zIndex: 5 }}
      />
      {/* 右側歸還者（藍色，面向左，手持物品遞出） */}
      <div style={{ position: 'absolute', right: 3, bottom: 15 }}>
        <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#1565c0', margin: '0 auto', border: '2px solid #0d47a1' }} />
        <div style={{ width: 20, height: 10, background: '#1565c0', borderRadius: 2, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
          <div style={{ width: 4, height: 14, background: '#1565c0', borderRadius: 2 }} />
          <div style={{ width: 4, height: 14, background: '#1565c0', borderRadius: 2 }} />
        </div>
      </div>
      {/* 右側人的左手（伸出來遞出） */}
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', right: 23, bottom: 32, width: 20, height: 10, background: '#F5CBA7', borderRadius: '6px 0 0 6px', border: '2px solid #E59866', borderRight: 'none', zIndex: 5 }}
      />
      {/* 物品（大：24×24px，從右往左清楚移動） */}
      <motion.div
        animate={{ x: [30, 30, -28, -28, 30], opacity: [1, 1, 1, 0.4, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.55, 0.72, 0.88], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -12, top: '28%', zIndex: 8 }}
      >
        <div style={{ width: 24, height: 24, background: '#ff9800', borderRadius: 4, border: '2.5px solid #e65100', boxShadow: '0 3px 8px rgba(230,81,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 10, background: '#fff3e0', borderRadius: 2, border: '1.5px solid #e65100' }} />
        </div>
      </motion.div>
      {/* 物品陰影（跟著物品移動） */}
      <motion.div
        animate={{ x: [30, 30, -28, -28, 30], scaleX: [1, 1, 1, 0.5, 1], opacity: [0.15, 0.15, 0.15, 0.05, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.55, 0.72, 0.88], ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, top: '58%', width: 30, height: 6, background: '#000', borderRadius: '50%', filter: 'blur(3px)', zIndex: 2 }}
      />
      {/* 移交瞬間的金色衝擊波 */}
      <motion.div
        animate={{ scale: [0, 0, 1.6, 0], opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.58, 0.75] }}
        style={{ position: 'absolute', left: '35%', top: '22%', width: 36, height: 36, border: '2px solid #FFD700', borderRadius: '50%', zIndex: 9 }}
      />
    </div>
  );
}

// ═══════════════════════════════════════
// Pick 片語場景
// ═══════════════════════════════════════

// Pick up = 撿起：和 PickUpDetailed 同規格，手臂粗、物件大、有陰影有衝擊波
function PickUpScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      {/* 陰影（物件抬起後陰影擴散） */}
      <motion.div
        animate={{ scale: [1, 1, 1.5, 1.5], opacity: [0.2, 0.2, 0.1, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -15, width: 30, height: 6, background: '#000', borderRadius: '50%', filter: 'blur(2px)' }}
      />
      {/* 箱子（36×32px，有膠帶線和提把，視覺清楚） */}
      <motion.div
        animate={{ y: [60, 60, 15, 15], rotate: [0, 0, -2, -2], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -18, width: 36, height: 32, background: '#D2B48C', border: '2px solid #8B4513', borderRadius: 2, zIndex: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ width: '100%', height: 2, background: '#8B4513', marginBottom: 4 }} />
        <div style={{ width: 12, height: 8, border: '1px solid #8B4513', borderRadius: 2 }} />
      </motion.div>
      {/* 手臂與手掌（10px 寬臂 + 30×18 手掌 + 3指細節） */}
      <motion.div
        animate={{ y: [-30, 32, -10, -10] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, zIndex: 10 }}
      >
        <div style={{ width: 10, height: 45, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        <div style={{ position: 'relative', width: 30, height: 18, background: '#F5CBA7', borderRadius: '4px 4px 10px 10px', border: '2px solid #E59866', borderTop: 'none' }}>
          <div style={{ position: 'absolute', bottom: 2, left: 4, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', bottom: 2, left: 11, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', bottom: 2, left: 18, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 抓取衝擊波（FFD700金色） */}
      <motion.div
        animate={{ scale: [0, 1.5], opacity: [0, 0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.45, 1] }}
        style={{ position: 'absolute', left: '50%', top: '65%', marginLeft: -20, width: 40, height: 40, border: '2px solid #FFD700', borderRadius: '50%' }}
      />
      <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10, height: 2, background: '#ddd' }} />
    </div>
  );
}

// Pick out = 挑選：5個球排成一列，手臂（10px粗）從上伸下夾住中間藍球提起，雙層光圈擴散
function PickOutScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 5個球（直徑18px，中間藍色目標更大更顯眼） */}
      {[8, 24, 43, 62, 78].map((x, i) => (
        <div key={i} style={{ position: 'absolute', bottom: 15 + (i === 2 ? 0 : 0), left: x }}>
          <motion.div
            animate={i === 2 ? { y: [0, 0, -30, -30, 0], scale: [1, 1, 1.3, 1.3, 1] } : {}}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.5, 0.72, 0.9] }}
            style={{
              width: i === 2 ? 18 : 14,
              height: i === 2 ? 18 : 14,
              borderRadius: '50%',
              background: i === 2 ? '#1565c0' : '#bdbdbd',
              border: i === 2 ? '2.5px solid #0d47a1' : '2px solid #9e9e9e',
              position: 'relative',
              marginBottom: i === 2 ? 2 : 2,
            }}
          >
            {/* 雙層高亮光圈（只有藍色目標） */}
            {i === 2 && (
              <>
                <motion.div
                  animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                  style={{ position: 'absolute', inset: -4, border: '2.5px solid #42a5f5', borderRadius: '50%' }}
                />
                <motion.div
                  animate={{ scale: [1, 3.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 0.35 }}
                  style={{ position: 'absolute', inset: -4, border: '2px solid #90caf9', borderRadius: '50%' }}
                />
              </>
            )}
          </motion.div>
        </div>
      ))}
      {/* 手臂（10px寬，40px長，從頂部伸下） */}
      <motion.div
        animate={{ y: [-30, 28, -10, -10] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -5, top: 0, zIndex: 10 }}
      >
        <div style={{ width: 10, height: 42, background: '#F5CBA7', borderLeft: '2px solid #E59866', margin: '0 auto' }} />
        {/* 手掌（30×18px，有3指細節） */}
        <div style={{ position: 'relative', width: 30, height: 18, background: '#F5CBA7', borderRadius: '4px 4px 10px 10px', border: '2px solid #E59866', borderTop: 'none' }}>
          <div style={{ position: 'absolute', bottom: 2, left: 4, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', bottom: 2, left: 11, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
          <div style={{ position: 'absolute', bottom: 2, left: 18, width: 4, height: 8, background: '#E59866', borderRadius: 2 }} />
        </div>
      </motion.div>
      {/* 抓取衝擊波（金色，抓住瞬間出現） */}
      <motion.div
        animate={{ scale: [0, 1.6], opacity: [0, 0.8, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.48, 1] }}
        style={{ position: 'absolute', left: '50%', top: '55%', marginLeft: -22, width: 44, height: 44, border: '2px solid #FFD700', borderRadius: '50%', zIndex: 9 }}
      />
    </div>
  );
}

// Pick on = 找碴/霸凌：大人（粗壯）的粗手臂反覆猛戳小人，小人劇烈搖晃+冒汗+衝擊波
function PickOnScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff' }}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 10, height: 2, background: '#e0e0e0' }} />
      {/* 大人（霸凌者，深色，明顯更大更粗壯） */}
      <div style={{ position: 'absolute', left: 4, bottom: 15 }}>
        {/* 頭（大：20px） */}
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#263238', margin: '0 auto', border: '2px solid #000' }} />
        {/* 身體（寬：24px） */}
        <div style={{ width: 24, height: 14, background: '#263238', borderRadius: 2, margin: '0 auto' }} />
        {/* 腳（粗：5px） */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 5, height: 18, background: '#263238', borderRadius: 2 }} />
          <div style={{ width: 5, height: 18, background: '#263238', borderRadius: 2 }} />
        </div>
      </div>
      {/* 戳的手臂（10px粗，40px長，前後猛戳） */}
      <motion.div
        animate={{ x: [0, 0, 32, 4, 32, 4, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: 26, top: '35%', zIndex: 5, display: 'flex', alignItems: 'center' }}
      >
        {/* 手臂主體 */}
        <div style={{ width: 30, height: 10, background: '#F5CBA7', borderRadius: '5px 0 0 5px', border: '2px solid #E59866', borderRight: 'none' }} />
        {/* 手掌+食指尖 */}
        <div style={{ width: 18, height: 10, background: '#F5CBA7', borderRadius: '0 4px 4px 0', border: '2px solid #E59866', borderLeft: 'none', position: 'relative' }}>
          {/* 食指伸出 */}
          <div style={{ position: 'absolute', right: -12, top: 1, width: 12, height: 5, background: '#F5CBA7', borderRadius: '0 4px 4px 0', border: '2px solid #E59866', borderLeft: 'none' }} />
        </div>
      </motion.div>
      {/* 戳擊衝擊波（紅色，每次戳到小人都出現） */}
      <motion.div
        animate={{ scale: [0, 0, 1.4, 0, 1.4, 0], opacity: [0, 0, 0.9, 0, 0.9, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{ position: 'absolute', right: 28, top: '28%', width: 30, height: 30, border: '2.5px solid #ef5350', borderRadius: '50%', zIndex: 8 }}
      />
      {/* 小人（被欺負，明顯更小，劇烈搖晃） */}
      <motion.div
        animate={{ x: [0, 6, -7, 5, -6, 4, -4, 0], rotate: [0, 5, -6, 5, -5, 4, -4, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{ position: 'absolute', right: 6, bottom: 15 }}
      >
        {/* 頭（小：12px） */}
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#78909c', margin: '0 auto', border: '1.5px solid #546e7a' }} />
        {/* 身體（細：12×8px） */}
        <div style={{ width: 14, height: 8, background: '#78909c', borderRadius: 2, margin: '0 auto' }} />
        {/* 腳（細：3px） */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 3, height: 12, background: '#78909c', borderRadius: 1 }} />
          <div style={{ width: 3, height: 12, background: '#78909c', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 汗水（3滴，清楚可見） */}
      {[{ right: 16, top: '22%', h: 7, delay: 0.1 }, { right: 22, top: '26%', h: 5, delay: 0.5 }, { right: 12, top: '30%', h: 6, delay: 0.9 }].map((d, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 10], opacity: [0.9, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: d.delay }}
          style={{ position: 'absolute', right: d.right, top: d.top, width: 4, height: d.h, background: '#64b5f6', borderRadius: '0 0 4px 4px', zIndex: 9 }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// Hold 片語場景
// ═══════════════════════════════════════

// Hold on = 堅持：人吊在懸崖邊
function HoldOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '60%', height: 14, background: '#6d4c41', borderRadius: '0 0 4px 0' }} />
      <motion.div style={{ position: 'absolute', top: 12, left: '42%' }} animate={{ y: [0, 2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <div style={{ width: 10, height: 8, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: '3px 3px 0 0' }} />
      </motion.div>
      <motion.div style={{ position: 'absolute', top: 20, left: '38%' }} animate={{ x: [-2, 2, -2], rotate: [-2, 2, -2] }} transition={{ duration: 2.5, repeat: Infinity }}>
        <div style={{ width: 12, height: 12, background: '#546e7a', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#546e7a', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}><div style={{ width: 2, height: 12, background: '#546e7a' }} /><div style={{ width: 2, height: 12, background: '#546e7a' }} /></div>
      </motion.div>
    </div>
  );
}

// Hold up = 耽誤：車被紅色路障擋住
function HoldUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <div style={{ position: 'absolute', bottom: 15, right: 15, width: 4, height: 30, background: '#546e7a' }} />
      <div style={{ position: 'absolute', bottom: 40, left: 10, width: 55, height: 5, background: '#ef5350', borderRadius: 2 }}>
        <div style={{ position: 'absolute', left: 10, width: 8, height: 5, background: '#fff', opacity: 0.5 }} />
        <div style={{ position: 'absolute', left: 28, width: 8, height: 5, background: '#fff', opacity: 0.5 }} />
      </div>
      {[0, 1, 2].map(i => (
        <motion.div key={i} style={{ position: 'absolute', bottom: 16, left: 5 + i * 18, width: 16, height: 10, background: ['#1565c0', '#4caf50', '#ff9800'][i], borderRadius: 2 }} animate={{ y: [0, -1, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </div>
  );
}

// Hold back = 壓抑：人擋住洪水
function HoldBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', top: 5, left: '55%', width: 6, height: '80%', background: '#78909c', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: 18, left: '30%' }}>
        <div style={{ width: 12, height: 12, background: '#546e7a', borderRadius: '50%' }} />
        <div style={{ width: 4, height: 14, background: '#546e7a', margin: '0 auto' }} />
        <div style={{ position: 'absolute', top: 12, right: -8, width: 10, height: 2, background: '#546e7a' }} />
      </div>
      <motion.div style={{ position: 'absolute', top: 5, left: '62%', width: '35%', height: '80%', background: 'linear-gradient(90deg, #42a5f5, #1565c0)', borderRadius: '0 4px 4px 0', opacity: 0.6 }} animate={{ x: [-2, 3, -2] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </div>
  );
}

// ═══════════════════════════════════════
// Make 片語場景
// ═══════════════════════════════════════

// Make up = 和好：兩人握手+愛心
function MakeUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 5, right: 5, height: 2, background: '#ccc' }} />
      <motion.div style={{ position: 'absolute', bottom: 15 }} animate={{ x: [5, 28, 28] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#1565c0', margin: '0 auto' }} />
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: 15 }} animate={{ x: [75, 52, 52] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#e53935', margin: '0 auto' }} />
      </motion.div>
      <motion.div animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1, 1], y: [5, 5, 0, 0] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.6, 1] }} style={{ position: 'absolute', top: 6, left: '50%', marginLeft: -6, width: 12, height: 10, zIndex: 5 }}>
        <div style={{ position: 'relative', width: 12, height: 10 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, width: 7, height: 7, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, width: 7, height: 7, background: '#ef5350', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 1, top: 3, width: 10, height: 8, background: '#ef5350', transform: 'rotate(45deg)' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Make out = 辨認：模糊物體漸漸清晰
function MakeOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: 8, top: '30%', width: 24, height: 16, border: '2px solid #546e7a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div style={{ width: 8, height: 8, background: '#1565c0', borderRadius: '50%' }} animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      </div>
      <motion.div animate={{ opacity: [0.2, 1, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 1] }} style={{ position: 'absolute', right: 8, top: '25%' }}>
        <div style={{ width: 24, height: 24, background: '#ff9800', borderRadius: 3, border: '2px solid #e65100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 10, height: 10, background: '#fff', borderRadius: '50%' }} />
        </div>
      </motion.div>
      <motion.div style={{ position: 'absolute', left: 34, top: '38%', display: 'flex', gap: 3 }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: 4, height: 2, background: '#90a4ae', borderRadius: 1 }} />)}
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Fall / Keep / Hang / Cut / Work / 其他缺少的片語場景
// ═══════════════════════════════════════

// Fall apart = 崩解：完整物體裂開碎片四散
function FallApartScene() {
  return (
    <div style={S}>
      {/* 完整的花瓶（崩解前） */}
      <motion.div
        animate={{ opacity: [1, 1, 0], scale: [1, 1.02, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.42] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, top: '15%', zIndex: 5 }}
      >
        <svg width="30" height="45" viewBox="0 0 30 45">
          <path d="M 8 0 L 22 0 L 24 12 L 28 30 L 24 42 L 6 42 L 2 30 L 6 12 Z" fill="#78909c" stroke="#546e7a" strokeWidth="1.5" />
          <path d="M 10 0 L 12 12 L 8 30 L 10 42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      </motion.div>
      {/* 裂痕閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.4, 0.5] }}
        style={{ position: 'absolute', width: 30, height: 30, background: 'radial-gradient(circle, rgba(255,235,59,0.5), transparent)', borderRadius: '50%', zIndex: 8 }}
      />
      {/* 碎片四散 */}
      {[
        { x: -22, y: -12, r: -35, c: '#78909c' },
        { x: 20, y: -15, r: 40, c: '#90a4ae' },
        { x: -18, y: 18, r: -50, c: '#607d8b' },
        { x: 22, y: 20, r: 30, c: '#78909c' },
        { x: -5, y: -22, r: 20, c: '#b0bec5' },
        { x: 15, y: 8, r: -25, c: '#546e7a' },
      ].map((f, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 0, f.x * 1.3], y: [0, 0, f.y * 1.3], rotate: [0, 0, f.r], opacity: [0, 0, 0.9, 0], scale: [0, 0, 1, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.6, 0.85] }}
          style={{ position: 'absolute', width: 10, height: 8, background: f.c, clipPath: 'polygon(15% 0%, 100% 20%, 85% 100%, 0% 80%)' }}
        />
      ))}
    </div>
  );
}

// Fall behind = 落後：一人跑在前面，另一人越來越遠
function FallBehindScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前面的人（快速移動） */}
      <motion.div
        animate={{ x: [15, 75, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 落後的人（越來越慢+越來越小） */}
      <motion.div
        animate={{ x: [10, 35, 10], scale: [0.9, 0.7, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#ef5350', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.6, repeat: Infinity }} style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 距離拉大的虛線 */}
      <motion.div
        animate={{ width: [10, 35, 10], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 22, left: '35%', height: 2, borderTop: '2px dashed #ef5350' }}
      />
    </div>
  );
}

// Fall for = 上當/愛上：人被偽裝的陷阱吸引墜落
function FallForScene() {
  return (
    <div style={S}>
      {/* 地面 */}
      <div style={{ position: 'absolute', left: 5, top: '62%', right: 5, height: 3, background: '#8d6e63', zIndex: 3 }} />
      {/* 陷阱洞 */}
      <div style={{ position: 'absolute', left: '38%', top: '62%', width: 25, height: 14, background: '#263238', borderRadius: '0 0 6px 6px', zIndex: 2 }} />
      {/* 誘餌愛心（閃爍吸引） */}
      <motion.div
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', left: '42%', top: '42%', zIndex: 5 }}
      >
        <svg width="16" height="14" viewBox="0 0 16 14">
          <path d="M 8 13 L 1 6 A 3.5 3.5 0 0 1 8 3 A 3.5 3.5 0 0 1 15 6 Z" fill="#ef5350" />
        </svg>
      </motion.div>
      {/* 人被吸引然後墜入 */}
      <motion.div
        animate={{ x: [-15, 5, 5], y: [-5, -5, 20], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '30%', top: '25%', zIndex: 4 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
    </div>
  );
}

// Fall through = 計劃泡湯：文件掉入碎紙機消失
function FallThroughScene() {
  return (
    <div style={S}>
      {/* 桌面 */}
      <div style={{ position: 'absolute', left: 5, top: '52%', right: 5, height: 4, background: '#8d6e63', zIndex: 5 }} />
      {/* 桌面裂縫 */}
      <div style={{ position: 'absolute', left: '40%', top: '52%', width: 20, height: 18, background: '#263238', borderRadius: '0 0 4px 4px', zIndex: 4 }} />
      {/* 計劃文件掉落穿過 */}
      <motion.div
        animate={{ y: [2, 2, 40, 60], opacity: [1, 1, 0.6, 0], rotate: [0, 0, 5, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.55, 0.8], ease: 'easeIn' }}
        style={{ position: 'absolute', left: '38%', top: '20%', zIndex: 6 }}
      >
        <div style={{ width: 22, height: 28, background: '#fff', border: '1.5px solid #90a4ae', borderRadius: 2 }}>
          <div style={{ margin: '4px 3px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ width: 14, height: 1.5, background: '#b0bec5' }} />
            <div style={{ width: 10, height: 1.5, background: '#b0bec5' }} />
            <div style={{ width: 12, height: 1.5, background: '#b0bec5' }} />
          </div>
          {/* 紅色 X（失敗標記） */}
          <motion.div
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.4, 1] }}
            style={{ position: 'absolute', top: 5, left: 5, fontSize: 12, fontWeight: 'bold', color: '#ef5350' }}
          >✕</motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Keep up = 跟上進度：人努力追趕前方不掉隊
function KeepUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前方的人（穩定前進） */}
      <motion.div
        animate={{ x: [35, 70, 35] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 努力跟上的人（喘著追） */}
      <motion.div
        animate={{ x: [8, 60, 8] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ transform: 'rotate(12deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
          <div style={{ width: 4, height: 12, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#4caf50', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#4caf50', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 努力的汗水 */}
      <motion.div
        animate={{ y: [-2, 8], opacity: [0.6, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 42, left: 22, width: 3, height: 4, background: '#90caf9', borderRadius: 2 }}
      />
    </div>
  );
}

// Keep on = 持續做：人不停地走，不管風雨
function KeepOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 逆風行走的人（堅持不停） */}
      <motion.div
        animate={{ x: [5, 75, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15, zIndex: 5 }}
      >
        <div style={{ transform: 'rotate(10deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
          <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 10, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-12, 12, -12] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 10, background: '#455a64', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 逆風雨滴 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [50, -10], y: [-5, 50], opacity: [0.4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          style={{ position: 'absolute', top: 5, left: 20 + i * 15, width: 2, height: 6, background: '#90caf9', borderRadius: 2, transform: 'rotate(-20deg)' }}
        />
      ))}
      {/* 持續前進箭頭 */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 8, right: 8 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 14, height: 2, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #4caf50' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Keep out = 禁止進入：圍欄+警告標誌擋住人
function KeepOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 鐵柵欄 */}
      {[42, 52, 62, 72].map(x => (
        <div key={x} style={{ position: 'absolute', top: 8, left: x, width: 3, height: 55, background: '#546e7a', borderRadius: 1 }} />
      ))}
      {/* 柵欄橫桿 */}
      <div style={{ position: 'absolute', top: 18, left: 40, width: 35, height: 3, background: '#78909c', borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 40, left: 40, width: 35, height: 3, background: '#78909c', borderRadius: 1 }} />
      {/* 禁止進入標誌 */}
      <div style={{ position: 'absolute', top: 23, left: 50, width: 16, height: 14, background: '#fff', border: '2px solid #ef5350', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 8, fontWeight: 'bold', color: '#ef5350' }}>✕</div>
      </div>
      {/* 人被擋住走不進去 */}
      <motion.div
        animate={{ x: [5, 28, 18, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.55, 0.8] }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <div style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 2, height: 8, background: '#455a64', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Hang out = 閒晃/聚會：兩人坐在長椅上聊天
function HangOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 公園長椅 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -25 }}>
        <div style={{ width: 50, height: 4, background: '#8d6e63', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: 3, height: 10, background: '#6d4c41', borderRadius: 1 }} />
          <div style={{ width: 3, height: 10, background: '#6d4c41', borderRadius: 1 }} />
        </div>
      </div>
      {/* 兩個人坐著聊天 */}
      {[{ x: -18, c: '#1565c0' }, { x: 12, c: '#e53935' }].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
          style={{ position: 'absolute', left: '50%', marginLeft: p.x, bottom: 19 }}
        >
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.c, margin: '0 auto' }} />
          <div style={{ width: 12, height: 3, background: p.c, borderRadius: 1, margin: '0 auto' }} />
        </motion.div>
      ))}
      {/* 聊天氣泡 */}
      <motion.div
        animate={{ opacity: [0, 1, 0], y: [-2, -6, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 8, left: '40%' }}
      >
        <div style={{ width: 12, height: 8, background: '#e3f2fd', border: '1px solid #90caf9', borderRadius: 4 }}>
          <div style={{ width: 6, height: 1, background: '#90caf9', margin: '2px auto' }} />
          <div style={{ width: 4, height: 1, background: '#90caf9', margin: '1px auto' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Hang up = 掛斷電話：話筒放回座機
function HangUpScene() {
  return (
    <div style={S}>
      {/* 座機底座 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -18, bottom: 15 }}>
        <div style={{ width: 36, height: 10, background: '#37474f', borderRadius: '3px 3px 6px 6px' }}>
          <div style={{ position: 'absolute', top: -3, left: 3, right: 3, height: 4, background: '#455a64', borderRadius: 2 }} />
        </div>
      </div>
      {/* 話筒放回去 */}
      <motion.div
        animate={{ y: [0, 0, 32, 32], rotate: [8, 8, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -15, top: '15%' }}
      >
        <div style={{ width: 30, height: 8, background: '#263238', borderRadius: 4, position: 'relative' }}>
          <div style={{ position: 'absolute', left: -1, top: -3, width: 10, height: 12, background: '#263238', borderRadius: 4 }} />
          <div style={{ position: 'absolute', right: -1, top: -3, width: 10, height: 12, background: '#263238', borderRadius: 4 }} />
        </div>
      </motion.div>
      {/* 掛斷的紅色標記 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1], scale: [0, 0, 0, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.7, 1] }}
        style={{ position: 'absolute', right: 10, top: 8, width: 14, height: 14, background: '#ef5350', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ width: 8, height: 2, background: '#fff', borderRadius: 1 }} />
      </motion.div>
    </div>
  );
}

// Hang on = 堅持住/稍等：人抓著懸崖邊緣
function HangOnScene() {
  return (
    <div style={S}>
      {/* 懸崖 */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '55%', height: 16, background: '#6d4c41', borderRadius: '0 0 4px 0' }} />
      <div style={{ position: 'absolute', top: 16, left: 0, width: '50%', height: '100%', background: '#8d6e63' }} />
      {/* 抓住邊緣的手 */}
      <motion.div
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 12, left: '42%' }}
      >
        <div style={{ display: 'flex', gap: 2 }}>
          <div style={{ width: 5, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '3px 3px 0 0' }} />
          <div style={{ width: 5, height: 6, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '3px 3px 0 0' }} />
        </div>
      </motion.div>
      {/* 吊著的人 */}
      <motion.div
        animate={{ x: [-2, 2, -2], rotate: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 18, left: '38%', transformOrigin: 'top center' }}
      >
        {/* 手臂 */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 2, height: 8, background: '#546e7a' }} />
          <div style={{ width: 2, height: 8, background: '#546e7a' }} />
        </div>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#546e7a', marginLeft: -1 }} />
        <div style={{ width: 12, height: 4, background: '#546e7a', borderRadius: 1, marginLeft: -2 }} />
        <div style={{ width: 3, height: 12, background: '#546e7a', margin: '0 auto', borderRadius: 1 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
          <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 危險的深淵 */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '45%', height: '70%', background: 'linear-gradient(180deg, #37474f, #263238)' }} />
    </div>
  );
}

// Cut off = 切斷/中斷：剪刀剪斷電話線
function CutOffScene() {
  return (
    <div style={S}>
      {/* 電話線（連接中） */}
      <div style={{ position: 'absolute', top: '48%', left: 0, width: '46%', height: 3, background: '#90a4ae', borderRadius: 1 }} />
      {/* 被切斷的右半段（掉落） */}
      <motion.div
        animate={{ y: [0, 0, 25], rotate: [0, 0, 15], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.8] }}
        style={{ position: 'absolute', top: '48%', left: '54%', width: '46%', height: 3, background: '#90a4ae', borderRadius: 1, transformOrigin: 'left center' }}
      />
      {/* 剪刀（切斷動作） */}
      <motion.div
        animate={{ y: [-20, -20, 0, 0, -20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.38, 0.6, 0.75] }}
        style={{ position: 'absolute', top: '25%', left: '46%', zIndex: 5 }}
      >
        <svg width="16" height="20" viewBox="0 0 16 20">
          <motion.g animate={{ rotate: [5, 5, -5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.38, 0.6, 0.75] }} style={{ transformOrigin: '8px 12px' }}>
            <path d="M 8 12 L 3 2 L 6 2 L 8 8 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="0.5" />
          </motion.g>
          <motion.g animate={{ rotate: [-5, -5, 5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.38, 0.6, 0.75] }} style={{ transformOrigin: '8px 12px' }}>
            <path d="M 8 12 L 13 2 L 10 2 L 8 8 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="0.5" />
          </motion.g>
          <circle cx="8" cy="12" r="2" fill="#546e7a" />
        </svg>
      </motion.div>
      {/* 切斷火花 */}
      <motion.div
        animate={{ scale: [0, 0, 1.5, 0], opacity: [0, 0, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.42, 0.55] }}
        style={{ position: 'absolute', top: '42%', left: '47%', width: 8, height: 8, background: '#ffeb3b', borderRadius: '50%' }}
      />
    </div>
  );
}

// Cut down = 削減：柱狀圖被砍低
function CutDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 柱狀圖（被削減） */}
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ height: [38 - i * 4, 38 - i * 4, 10, 10] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 1], delay: i * 0.06 }}
          style={{ position: 'absolute', bottom: 15, left: 10 + i * 18, width: 14, background: i === 3 ? '#ef5350' : '#42a5f5', borderRadius: '2px 2px 0 0' }}
        />
      ))}
      {/* 向下的刀（砍下來） */}
      <motion.div
        animate={{ y: [-10, -10, 20, 20], opacity: [0.5, 0.5, 0.8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.8] }}
        style={{ position: 'absolute', right: 8, top: 5, width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '10px solid #ef5350' }}
      />
    </div>
  );
}

// Work out = 健身/解決：人舉啞鈴
function WorkOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 舉啞鈴的人 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 14, height: 4, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 3, height: 12, background: '#455a64', borderRadius: 1 }} />
        </div>
      </div>
      {/* 啞鈴（上下舉） */}
      <motion.div
        animate={{ y: [30, 8, 30] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -16, display: 'flex', alignItems: 'center', zIndex: 5 }}
      >
        <div style={{ width: 8, height: 12, background: '#1565c0', borderRadius: 2 }} />
        <div style={{ width: 16, height: 3, background: '#78909c', borderRadius: 1 }} />
        <div style={{ width: 8, height: 12, background: '#1565c0', borderRadius: 2 }} />
      </motion.div>
      {/* 汗水 */}
      <motion.div
        animate={{ y: [-2, 8], opacity: [0.6, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ position: 'absolute', top: 18, right: 22, width: 3, height: 4, background: '#90caf9', borderRadius: 2 }}
      />
    </div>
  );
}

// Work on = 專注做某事：人在桌前工作+進度條
function WorkOnScene() {
  return (
    <div style={S}>
      {/* 桌子 */}
      <div style={{ position: 'absolute', top: '55%', left: 5, right: 5, height: 4, background: '#795548', borderRadius: 1 }} />
      {/* 工作的人 */}
      <div style={{ position: 'absolute', top: '22%', left: 8 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
        {/* 手臂伸向桌面 */}
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ position: 'absolute', top: 10, right: -8, width: 10, height: 2, background: '#455a64', borderRadius: 1, transformOrigin: 'left center' }}
        />
      </div>
      {/* 桌上的筆電 */}
      <div style={{ position: 'absolute', top: '35%', left: 28, width: 28, height: 18, background: '#e3f2fd', border: '1.5px solid #90a4ae', borderRadius: 2 }}>
        <div style={{ margin: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: '80%', height: 1.5, background: '#90caf9' }} />
          <div style={{ width: '60%', height: 1.5, background: '#90caf9' }} />
          <div style={{ width: '70%', height: 1.5, background: '#90caf9' }} />
        </div>
      </div>
      {/* 進度條 */}
      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, height: 5, background: '#e0e0e0', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div
          animate={{ width: ['0%', '100%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.7, 0.85, 1] }}
          style={{ height: '100%', background: '#4caf50', borderRadius: 3 }}
        />
      </div>
    </div>
  );
}

// Find out = 發現真相：幕簾拉開，露出隱藏的燈泡
function FindOutScene2() {
  return (
    <div style={S}>
      {/* 頂部橫桿 */}
      <div style={{ position: 'absolute', top: 6, left: 5, right: 5, height: 3, background: '#37474f', borderRadius: 1 }} />
      {/* 隱藏的真相（燈泡） */}
      <motion.div
        animate={{ scale: [0.5, 0.5, 1.1, 1], opacity: [0.2, 0.2, 1, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.4, 0.5] }}
        style={{ position: 'absolute', top: '28%', left: '50%', marginLeft: -12, zIndex: 3 }}
      >
        <svg width="24" height="28" viewBox="0 0 24 28">
          <path d="M 12 2 C 5 2 1 8 1 14 C 1 18 4 21 7 22 L 7 26 L 17 26 L 17 22 C 20 21 23 18 23 14 C 23 8 19 2 12 2 Z" fill="#ffd600" stroke="#f9a825" strokeWidth="1" />
          <line x1="8" y1="26" x2="16" y2="26" stroke="#bdbdbd" strokeWidth="1.5" />
          <line x1="8" y1="28" x2="16" y2="28" stroke="#bdbdbd" strokeWidth="1.5" />
        </svg>
        {/* 光暈 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.4, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.6] }}
          style={{ position: 'absolute', inset: -10, background: 'radial-gradient(circle, rgba(255,214,0,0.3), transparent)', borderRadius: '50%' }}
        />
      </motion.div>
      {/* 左幕簾 */}
      <motion.div
        animate={{ x: [0, 0, -38, -38, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.75, 0.9] }}
        style={{ position: 'absolute', top: 9, left: 5, width: '48%', height: '78%', background: '#546e7a', borderRadius: '0 3px 3px 0', zIndex: 5 }}
      />
      {/* 右幕簾 */}
      <motion.div
        animate={{ x: [0, 0, 38, 38, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.75, 0.9] }}
        style={{ position: 'absolute', top: 9, right: 5, width: '48%', height: '78%', background: '#546e7a', borderRadius: '3px 0 0 3px', zIndex: 5 }}
      />
    </div>
  );
}

// Figure out = 想通：迷宮中找到出路 → 燈泡亮
function FigureOutScene2() {
  return (
    <div style={S}>
      {/* 迷宮路徑 */}
      <div style={{ position: 'absolute', top: 5, left: 8, width: 3, height: '65%', background: '#cfd8dc' }} />
      <div style={{ position: 'absolute', top: 5, left: 8, width: 28, height: 3, background: '#cfd8dc' }} />
      <div style={{ position: 'absolute', top: '33%', left: 20, width: 28, height: 3, background: '#cfd8dc' }} />
      <div style={{ position: 'absolute', top: 5, right: 18, width: 3, height: '28%', background: '#cfd8dc' }} />
      <div style={{ position: 'absolute', top: '52%', right: 18, width: 22, height: 3, background: '#cfd8dc' }} />
      {/* 球在迷宮中尋路 */}
      <motion.div
        animate={{ left: [12, 12, 32, 32, 50, 50, 65], top: [10, 28, 28, 42, 42, 28, 55] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 8, height: 8, background: '#1565c0', borderRadius: '50%', zIndex: 5 }}
      />
      {/* 終點燈泡（找到出路時亮起） */}
      <motion.div
        animate={{ opacity: [0.15, 0.15, 0.15, 1], scale: [0.8, 0.8, 0.8, 1.1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.7, 0.85] }}
        style={{ position: 'absolute', bottom: 6, right: 6, width: 14, height: 14, background: '#4caf50', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8"><path d="M 1 4 L 3 6 L 7 2" fill="transparent" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// Show up = 出現/現身：舞台聚光燈下人登場
function ShowUpScene2() {
  return (
    <div style={S}>
      {/* 舞台地板 */}
      <div style={{ position: 'absolute', bottom: 10, left: 5, right: 5, height: 6, background: '#37474f', borderRadius: 1 }} />
      {/* 聚光燈 */}
      <div style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -5, width: 10, height: 4, background: '#fdd835', borderRadius: '0 0 2px 2px' }} />
      {/* 光錐 */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 4, left: '50%', marginLeft: -20, width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderTop: '58px solid rgba(255,235,59,0.15)' }}
      />
      {/* 人登場 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1, 1], y: [10, 10, 0, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.45, 1] }}
        style={{ position: 'absolute', bottom: 16, left: '50%', marginLeft: -7, zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, background: '#1565c0', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 12, background: '#1565c0', borderRadius: 1 }} />
          <div style={{ width: 2, height: 12, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Show off = 炫耀：人站在台上張手 + 閃爍星星
function ShowOffScene2() {
  return (
    <div style={S}>
      {/* 舞台 */}
      <div style={{ position: 'absolute', bottom: 10, left: '25%', width: '50%', height: 6, background: '#8d6e63', borderRadius: '2px 2px 0 0' }} />
      {/* 炫耀的人（張開雙臂） */}
      <div style={{ position: 'absolute', bottom: 16, left: '50%', marginLeft: -7 }}>
        <div style={{ width: 12, height: 12, background: '#1565c0', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#1565c0', borderRadius: 1, margin: '0 auto' }} />
        {/* 張開的手臂 */}
        <div style={{ position: 'absolute', top: 8, left: -10, width: 12, height: 2, background: '#1565c0', transform: 'rotate(-40deg)', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 8, right: -10, width: 12, height: 2, background: '#1565c0', transform: 'rotate(40deg)', borderRadius: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 10, background: '#1565c0', borderRadius: 1 }} />
          <div style={{ width: 2, height: 10, background: '#1565c0', borderRadius: 1 }} />
        </div>
      </div>
      {/* 閃爍的星星（炫耀光芒） */}
      {[{ x: 12, y: 6 }, { x: 70, y: 4 }, { x: 8, y: 28 }, { x: 74, y: 25 }].map((p, i) => (
        <motion.div
          key={i}
          animate={{ scale: [0.4, 1.3, 0.4], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35 }}
          style={{ position: 'absolute', left: p.x, top: p.y, width: 6, height: 6, background: '#ffd600', transform: 'rotate(45deg)' }}
        />
      ))}
    </div>
  );
}

// Check out = 看看/結帳：眼睛看向閃亮的物品
function CheckOutScene2() {
  return (
    <div style={S}>
      {/* 眼睛（看向物品） */}
      <div style={{ position: 'absolute', left: 5, top: '30%' }}>
        <svg width="28" height="16" viewBox="0 0 28 16">
          <path d="M 2 8 Q 14 -2 26 8 Q 14 18 2 8 Z" fill="#f5f5f5" stroke="#455a64" strokeWidth="1.5" />
          <motion.circle cx="14" cy="8" r="4" fill="#1565c0" animate={{ cx: [14, 18, 14] }} transition={{ duration: 3, repeat: Infinity }} />
          <circle cx="12" cy="6" r="1.5" fill="#fff" opacity="0.7" />
        </svg>
      </div>
      {/* 視線 */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', left: 30, top: '35%', width: 25, height: 8, background: 'linear-gradient(90deg, rgba(21,101,192,0.15), transparent)', borderRadius: '0 50% 50% 0' }}
      />
      {/* 閃亮的物品 */}
      <motion.div
        animate={{ boxShadow: ['0 0 4px #ffd600', '0 0 12px #ffd600', '0 0 4px #ffd600'] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', right: 8, top: '22%', width: 22, height: 30, background: '#ffd600', borderRadius: 3, border: '1.5px solid #f9a825', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ width: 12, height: 12, background: '#fff', borderRadius: '50%', opacity: 0.5 }} />
      </motion.div>
    </div>
  );
}

// Check in = 報到/入住：人拿行李到櫃台+打勾確認
function CheckInScene2() {
  return (
    <div style={S}>
      {/* 櫃台 */}
      <div style={{ position: 'absolute', top: '50%', left: 5, right: 5, height: 6, background: '#8d6e63', borderRadius: 2 }} />
      {/* 櫃台後的服務員 */}
      <div style={{ position: 'absolute', top: '18%', right: 12 }}>
        <div style={{ width: 10, height: 10, background: '#4caf50', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#4caf50', borderRadius: 1, margin: '0 auto' }} />
      </div>
      {/* 人走向櫃台 */}
      <motion.div
        animate={{ x: [0, 25, 25, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.7, 1] }}
        style={{ position: 'absolute', top: '18%', left: 5 }}
      >
        <div style={{ width: 10, height: 10, background: '#455a64', borderRadius: '50%', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
      </motion.div>
      {/* 行李 */}
      <motion.div
        animate={{ x: [0, 20, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.7, 1] }}
        style={{ position: 'absolute', top: '38%', left: 15, width: 12, height: 10, background: '#1565c0', borderRadius: 2, border: '1px solid #0d47a1' }}
      />
      {/* 確認打勾 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.3, 0.3, 1, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.7, 0.85] }}
        style={{ position: 'absolute', top: '15%', right: 5 }}
      >
        <svg width="14" height="12"><path d="M 2 6 L 5 9 L 12 2" fill="transparent" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// End up = 最終結果（意料之外）：人走曲折路線到意外終點
function EndUpScene2() {
  return (
    <div style={S}>
      {/* 曲折的路線 */}
      <svg width="80" height="65" style={{ position: 'absolute', top: 3, left: '50%', marginLeft: -40, opacity: 0.2 }}>
        <path d="M 8 58 Q 15 45 25 48 Q 35 52 40 38 Q 45 24 55 28 Q 65 32 70 18" fill="transparent" stroke="#90a4ae" strokeWidth="2" strokeDasharray="3 3" />
      </svg>
      {/* 起點 A */}
      <div style={{ position: 'absolute', bottom: 8, left: 6, fontSize: 8, fontWeight: 'bold', color: '#90a4ae' }}>A</div>
      {/* 沿路移動的人 */}
      <motion.div
        animate={{ left: [8, 22, 38, 52, 66], top: [52, 42, 34, 24, 14] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 8, height: 8, background: '#1565c0', borderRadius: '50%', zIndex: 5 }}
      />
      {/* 意外終點（問號 → 驚嘆號） */}
      <motion.div
        animate={{ scale: [0.6, 0.6, 1.2, 1], opacity: [0.3, 0.3, 1, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.8, 0.9] }}
        style={{ position: 'absolute', top: 4, right: 5, width: 16, height: 16, background: '#ef5350', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.7, 0.75, 1] }}
          style={{ color: '#fff', fontSize: 9, fontWeight: 'bold', position: 'absolute' }}
        >?</motion.span>
        <motion.span
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.7, 0.8, 1] }}
          style={{ color: '#fff', fontSize: 9, fontWeight: 'bold', position: 'absolute' }}
        >!</motion.span>
      </motion.div>
    </div>
  );
}

// Catch up = 追上：後面的人加速追上前面的人
function CatchUpScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 前面的人（穩定速度） */}
      <motion.div
        animate={{ x: [40, 65, 40] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#90a4ae', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#90a4ae', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#90a4ae', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 追上的人（從遠到近） */}
      <motion.div
        animate={{ x: [5, 58, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ transform: 'rotate(12deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.35, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Point out = 指出：手指指向文件中的重點行
function PointOutScene2() {
  return (
    <div style={S}>
      {/* 文件 */}
      <div style={{ position: 'absolute', left: '35%', top: 5, width: 42, height: 62, background: '#f5f5f5', border: '1.5px solid #bdbdbd', borderRadius: 2 }}>
        {[10, 18, 26, 42, 50].map(y => (
          <div key={y} style={{ position: 'absolute', top: y, left: 5, right: 5, height: 2, background: '#ccc', borderRadius: 1 }} />
        ))}
        {/* 被指出的重點行（高亮） */}
        <motion.div
          animate={{ backgroundColor: ['#e0e0e0', '#fff9c4', '#fff9c4', '#e0e0e0'] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.7, 0.85] }}
          style={{ position: 'absolute', top: 34, left: 4, right: 4, height: 5, borderRadius: 1 }}
        />
      </div>
      {/* 指向的手+食指 */}
      <motion.div
        animate={{ x: [-18, 20, 20, -18] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.7, 0.85] }}
        style={{ position: 'absolute', top: '38%', left: 5, zIndex: 5 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 10, height: 8, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: 3 }} />
          {/* 食指 */}
          <div style={{ width: 10, height: 4, background: '#F5CBA7', border: '1px solid #E59866', borderRadius: '0 4px 4px 0', borderLeft: 'none' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Throw away = 丟掉：人把東西扔進垃圾桶
function ThrowAwayScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 垃圾桶 */}
      <div style={{ position: 'absolute', right: 8, bottom: 15 }}>
        <div style={{ width: 22, height: 26, background: '#78909c', borderRadius: '0 0 3px 3px' }} />
        <div style={{ position: 'absolute', top: -3, left: -3, width: 28, height: 4, background: '#546e7a', borderRadius: 2 }} />
      </div>
      {/* 人丟東西 */}
      <div style={{ position: 'absolute', left: 5, bottom: 15 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </div>
      {/* 丟出的垃圾（拋物線進桶） */}
      <motion.div
        animate={{ x: [0, 28, 52], y: [0, -28, 2], rotate: [0, 180, 360] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', left: 18, top: '42%', width: 10, height: 8, background: '#ef5350', borderRadius: 2, zIndex: 5 }}
      />
    </div>
  );
}

// Throw out = 扔出去/趕走：人被推出門外
function ThrowOutScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 門框 */}
      <div style={{ position: 'absolute', left: 5, top: 5, width: 32, height: 60, border: '2px solid #8d6e63', borderRadius: 2, borderBottom: 'none' }}>
        <div style={{ position: 'absolute', right: 4, top: '45%', width: 4, height: 4, background: '#ffd600', borderRadius: '50%' }} />
      </div>
      {/* 被扔出去的人 */}
      <motion.div
        animate={{ x: [0, 20, 45], rotate: [0, 8, 20], opacity: [1, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        style={{ position: 'absolute', left: 30, top: '25%', zIndex: 5 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <div style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1 }} />
          <div style={{ width: 2, height: 8, background: '#ef5350', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Throw up = 嘔吐：人彎腰+嘔吐物噴出
function ThrowUpScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 彎腰的人 */}
      <div style={{ position: 'absolute', left: 12, bottom: 15, transform: 'rotate(25deg)', transformOrigin: 'bottom center' }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#a5d6a7', margin: '0 auto' }} />
        <div style={{ width: 14, height: 3, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
      </div>
      {/* 嘔吐物噴出 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [0, 22], y: [0, 6 + i * 3], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
          style={{ position: 'absolute', left: 32, top: '28%', width: 8 - i * 2, height: 3, background: '#81c784', borderRadius: 2 }}
        />
      ))}
      {/* 不適的表情符號 */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 5, right: 10, width: 14, height: 14, borderRadius: '50%', background: '#c8e6c9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8"><path d="M 1 6 Q 5 3 9 6" fill="transparent" stroke="#2e7d32" strokeWidth="1.5" /></svg>
      </motion.div>
    </div>
  );
}

// Stand out = 突出/脫穎而出：一排灰人中藍色那個更大更亮
function StandOutScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {[5, 20, 38, 56, 72].map((x, i) => {
        const special = i === 2;
        return (
          <motion.div
            key={i}
            style={{ position: 'absolute', left: x, bottom: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            {...(special ? { animate: { scale: [1, 1.1, 1], y: [0, -4, 0] }, transition: { duration: 2.5, repeat: Infinity } } : {})}
          >
            <div style={{ width: special ? 12 : 8, height: special ? 12 : 8, borderRadius: '50%', background: special ? '#1565c0' : '#bdbdbd' }} />
            <div style={{ width: special ? 14 : 10, height: 3, background: special ? '#1565c0' : '#bdbdbd', borderRadius: 1 }} />
            <div style={{ display: 'flex', gap: special ? 4 : 2 }}>
              <div style={{ width: 2, height: special ? 12 : 8, background: special ? '#1565c0' : '#bdbdbd', borderRadius: 1 }} />
              <div style={{ width: 2, height: special ? 12 : 8, background: special ? '#1565c0' : '#bdbdbd', borderRadius: 1 }} />
            </div>
            {special && (
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', inset: -6, border: '1.5px solid #1565c0', borderRadius: '50%' }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// Stand for = 代表：字母 A → 等號 → 具體圖像
function StandForScene2() {
  return (
    <div style={S}>
      {/* 符號 A */}
      <div style={{ position: 'absolute', left: 8, top: '50%', marginTop: -14, width: 28, height: 28, borderRadius: '50%', background: '#1565c0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>A</span>
      </div>
      {/* 等號（代表） */}
      <motion.div
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.7, 0.9] }}
        style={{ position: 'absolute', left: '42%', top: '42%' }}
      >
        <div style={{ width: 14, height: 3, background: '#546e7a', borderRadius: 1, marginBottom: 4 }} />
        <div style={{ width: 14, height: 3, background: '#546e7a', borderRadius: 1 }} />
      </motion.div>
      {/* 代表的實體（從無到有出現） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.45, 1] }}
        style={{ position: 'absolute', right: 8, top: '50%', marginTop: -14, width: 28, height: 28, background: '#ff9800', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ width: 12, height: 12, background: '#fff', borderRadius: '50%' }} />
      </motion.div>
    </div>
  );
}

// Sign up = 註冊：筆在表格上填寫+打勾
function SignUpScene2() {
  return (
    <div style={S}>
      {/* 表格 */}
      <div style={{ position: 'absolute', left: '25%', top: 5, width: 46, height: 62, background: '#f5f5f5', border: '1.5px solid #bdbdbd', borderRadius: 3 }}>
        {[12, 24, 36, 48].map(y => (
          <div key={y} style={{ position: 'absolute', top: y, left: 5, right: 5, height: 2, background: '#e0e0e0' }} />
        ))}
      </div>
      {/* 筆書寫 */}
      <motion.div
        animate={{ x: [0, 30, 30, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 0.9] }}
        style={{ position: 'absolute', left: '28%', top: '32%', zIndex: 5 }}
      >
        <div style={{ width: 3, height: 16, background: '#37474f', borderRadius: 1, transform: 'rotate(-15deg)' }}>
          <div style={{ position: 'absolute', bottom: -2, width: 3, height: 3, background: '#1565c0', borderRadius: '0 0 1px 1px' }} />
        </div>
      </motion.div>
      {/* 填寫的藍線 */}
      <motion.div
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 0.85] }}
        style={{ position: 'absolute', left: '30%', top: '36%', width: 30, height: 2, background: '#1565c0', transformOrigin: 'left center', borderRadius: 1 }}
      />
      {/* 完成打勾 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1], scale: [0.5, 0.5, 0.5, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.75] }}
        style={{ position: 'absolute', right: '18%', top: '50%' }}
      >
        <svg width="14" height="12"><path d="M 2 6 L 5 9 L 12 2" fill="transparent" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// Shut down = 關機：電腦螢幕變黑+電源燈熄滅
function ShutDownScene2() {
  return (
    <div style={S}>
      {/* 電腦螢幕 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -24, top: 6, width: 48, height: 36, border: '2px solid #78909c', borderRadius: 3, background: '#e3f2fd', overflow: 'hidden' }}>
        {/* 螢幕內容（會消失） */}
        <motion.div
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.8, 0.95] }}
        >
          <div style={{ margin: '6px 5px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ width: '80%', height: 2, background: '#90caf9', borderRadius: 1 }} />
            <div style={{ width: '60%', height: 2, background: '#90caf9', borderRadius: 1 }} />
            <div style={{ width: '70%', height: 2, background: '#90caf9', borderRadius: 1 }} />
          </div>
        </motion.div>
        {/* 關機黑屏擴散 */}
        <motion.div
          animate={{ scale: [0, 0, 4, 4, 0], opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.8, 0.95] }}
          style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -8, marginLeft: -8, width: 16, height: 16, background: '#263238', borderRadius: '50%' }}
        />
      </div>
      {/* 底座 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -4, top: 42, width: 8, height: 5, background: '#90a4ae' }} />
      <div style={{ position: 'absolute', left: '50%', marginLeft: -12, top: 47, width: 24, height: 3, background: '#90a4ae', borderRadius: 1 }} />
      {/* 電源指示燈（綠→灰） */}
      <motion.div
        animate={{ backgroundColor: ['#4caf50', '#4caf50', '#78909c', '#78909c', '#4caf50'] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.45, 0.8, 0.95] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -3, top: 53, width: 6, height: 6, borderRadius: '50%' }}
      />
    </div>
  );
}

// Drop out = 退出/輟學：一人離開隊伍
function DropOutScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 隊伍中的人 */}
      {[8, 25, 55, 70].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: '30%' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#bdbdbd', margin: '0 auto' }} />
          <div style={{ width: 10, height: 3, background: '#bdbdbd', borderRadius: 1, margin: '0 auto' }} />
          <div style={{ display: 'flex', gap: 2, marginLeft: 1 }}>
            <div style={{ width: 2, height: 6, background: '#bdbdbd', borderRadius: 1 }} />
            <div style={{ width: 2, height: 6, background: '#bdbdbd', borderRadius: 1 }} />
          </div>
        </div>
      ))}
      {/* 退出的人（離開隊伍） */}
      <motion.div
        animate={{ x: [0, 0, 0, 35], y: [0, -8, -8, -8], opacity: [1, 1, 1, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.4, 0.85] }}
        style={{ position: 'absolute', left: 40, top: '30%', zIndex: 5 }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef5350', margin: '0 auto' }} />
        <div style={{ width: 10, height: 3, background: '#ef5350', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 2, marginLeft: 1 }}>
          <div style={{ width: 2, height: 6, background: '#ef5350', borderRadius: 1 }} />
          <div style={{ width: 2, height: 6, background: '#ef5350', borderRadius: 1 }} />
        </div>
      </motion.div>
    </div>
  );
}

// Pull off = 成功做到（困難的事）：魔術師拉出兔子+星星
function PullOffScene2() {
  return (
    <div style={S}>
      {/* 魔術帽 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -16, top: '45%' }}>
        <div style={{ width: 26, height: 20, background: '#263238', borderRadius: '3px 3px 0 0' }} />
        <div style={{ width: 34, height: 4, background: '#263238', borderRadius: 2, marginLeft: -4 }}>
          <div style={{ position: 'absolute', bottom: 3, left: 0, right: 0, height: 2, background: '#ef5350' }} />
        </div>
      </div>
      {/* 兔子耳朵（從帽子裡拉出來） */}
      <motion.div
        animate={{ y: [18, 18, 0, 0, 18] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.45, 0.7, 0.85] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -6, top: '15%', zIndex: 5 }}
      >
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 5, height: 14, background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px 4px 0 0' }} />
          <div style={{ width: 5, height: 14, background: '#fff', border: '1px solid #e0e0e0', borderRadius: '4px 4px 0 0' }} />
        </div>
        <div style={{ width: 14, height: 10, background: '#fff', border: '1px solid #e0e0e0', borderRadius: '50%', marginTop: -2, marginLeft: -1 }} />
      </motion.div>
      {/* 成功的星星 */}
      {[{ x: 12, y: 10 }, { x: 68, y: 8 }].map((p, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 1, 0], scale: [0.5, 0.5, 1.2, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.75], delay: i * 0.2 }}
          style={{ position: 'absolute', left: p.x, top: p.y, width: 6, height: 6, background: '#ffd600', transform: 'rotate(45deg)' }}
        />
      ))}
    </div>
  );
}

// Clean up = 清理乾淨：掃把掃走垃圾，地面發亮
function CleanUpScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 散落的垃圾（被掃走消失） */}
      {[8, 22, 36, 50].map((x, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.1 + i * 0.08, 0.2 + i * 0.08, 0.8, 1] }}
          style={{ position: 'absolute', bottom: 15, left: x, width: 6, height: 6, background: ['#ef5350', '#ff9800', '#1565c0', '#4caf50'][i], borderRadius: i % 2 ? '50%' : 2 }}
        />
      ))}
      {/* 掃把 */}
      <motion.div
        animate={{ x: [0, 62, 62, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
        style={{ position: 'absolute', bottom: 14, left: 0, zIndex: 5 }}
      >
        <div style={{ width: 3, height: 32, background: '#8d6e63', borderRadius: 1, margin: '0 auto' }} />
        <div style={{ width: 16, height: 8, background: '#2e7d32', borderRadius: '0 0 4px 4px' }} />
      </motion.div>
      {/* 清理後地面高光 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.2, 0.2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 0.9] }}
        style={{ position: 'absolute', bottom: 14, left: '50%', marginLeft: -20, width: 40, height: 4, background: 'radial-gradient(ellipse, rgba(255,235,59,0.3), transparent)' }}
      />
    </div>
  );
}

// Wrap up = 完成/收尾：禮物被包裝紙包好+蝴蝶結
function WrapUpScene2() {
  return (
    <div style={S}>
      {/* 禮物盒 */}
      <div style={{ position: 'absolute', top: '25%', left: '50%', marginLeft: -20, width: 40, height: 36, background: '#1565c0', borderRadius: 2 }} />
      <div style={{ position: 'absolute', top: '20%', left: '50%', marginLeft: -22, width: 44, height: 6, background: '#1976d2', borderRadius: '2px 2px 0 0' }} />
      {/* 十字絲帶 */}
      <motion.div
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', top: '20%', left: '50%', marginLeft: -2, width: 5, height: 42, background: '#ef5350', transformOrigin: 'top center' }}
      />
      <motion.div
        animate={{ scaleX: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', top: '42%', left: '50%', marginLeft: -20, width: 40, height: 5, background: '#ef5350', transformOrigin: 'center' }}
      />
      {/* 蝴蝶結 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1.1, 1], opacity: [0, 0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.6, 0.7] }}
        style={{ position: 'absolute', top: '14%', left: '50%', marginLeft: -6, width: 12, height: 8, zIndex: 5 }}
      >
        <div style={{ display: 'flex', gap: 2 }}>
          <div style={{ width: 6, height: 8, background: '#c62828', borderRadius: '50%' }} />
          <div style={{ width: 6, height: 8, background: '#c62828', borderRadius: '50%' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Burn out = 精疲力竭：蠟燭火焰逐漸熄滅
function BurnOutScene2() {
  return (
    <div style={S}>
      {/* 蠟燭 */}
      <div style={{ position: 'absolute', bottom: 10, left: '50%', marginLeft: -5, width: 10, height: 35, background: '#fff9c4', border: '1.5px solid #e0e0e0', borderRadius: '1px 1px 0 0' }} />
      <div style={{ position: 'absolute', bottom: 8, left: '50%', marginLeft: -10, width: 20, height: 4, background: '#e0e0e0', borderRadius: 2 }} />
      {/* 燈芯 */}
      <div style={{ position: 'absolute', bottom: 44, left: '50%', marginLeft: -1, width: 2, height: 6, background: '#546e7a' }} />
      {/* 火焰（逐漸變小熄滅） */}
      <motion.div
        animate={{ scaleX: [1, 0.7, 0.3, 0], scaleY: [1, 0.6, 0.2, 0], opacity: [1, 0.7, 0.3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 48, left: '50%', marginLeft: -6, width: 12, height: 18, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(0deg, #ff6f00, #ff9800 40%, #ffeb3b 80%, transparent)', borderRadius: '50% 50% 20% 20%' }} />
      </motion.div>
      {/* 冒出的最後一縷煙 */}
      <motion.div
        animate={{ y: [0, -15], opacity: [0, 0, 0.4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.6, 0.75, 0.9] }}
        style={{ position: 'absolute', bottom: 58, left: '50%', marginLeft: -1, width: 3, height: 8, background: '#bdbdbd', borderRadius: 2 }}
      />
    </div>
  );
}

// Calm down = 冷靜下來：紅色球彈跳漸低→變藍靜止
function CalmDownScene2() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 12, left: 5, right: 5, height: 2, background: '#b0bec5' }} />
      {/* 球從激動（紅、跳高）→冷靜（藍、靜止） */}
      <motion.div
        animate={{
          bottom: [60, 14, 45, 14, 30, 14, 18, 14],
          backgroundColor: ['#ef5350', '#ef5350', '#e57373', '#7986cb', '#42a5f5', '#42a5f5', '#1565c0', '#1565c0'],
          scaleY: [1, 0.7, 1, 0.8, 1, 0.85, 1, 1],
          scaleX: [1, 1.2, 1, 1.15, 1, 1.1, 1, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ position: 'absolute', left: '50%', marginLeft: -6, width: 12, height: 12, borderRadius: '50%', transformOrigin: 'bottom center' }}
      />
    </div>
  );
}

// Pay off = 值得/還清：債務卡被錢幣填滿→變成綠色 PAID
function PayOffScene2() {
  return (
    <div style={S}>
      {/* 債務卡 (DEBT → PAID) */}
      <div style={{ position: 'absolute', left: 3, top: 5, width: 34, height: 52, background: '#ffebee', borderRadius: 4, border: '1.5px solid #ef9a9a' }}>
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 7, color: '#c62828', fontWeight: 'bold' }}>DEBT</div>
      </div>
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.8, 0.8, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
        style={{ position: 'absolute', right: 3, top: 5, width: 34, height: 52, background: '#e8f5e9', borderRadius: 4, border: '1.5px solid #a5d6a7' }}
      >
        <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 7, color: '#2e7d32', fontWeight: 'bold' }}>PAID</div>
        <svg width="18" height="14" style={{ position: 'absolute', bottom: 8, left: '50%', marginLeft: -9 }}>
          <path d="M 3 7 L 7 11 L 15 3" fill="transparent" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
      {/* 硬幣飛過去 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [0, 42], opacity: [1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', left: 15, top: 22 + i * 10, width: 8, height: 8, background: '#fdd835', borderRadius: '50%', border: '1.5px solid #f9a825', zIndex: 5 }}
        />
      ))}
    </div>
  );
}

// Grow up = 長大：小人逐漸變成大人
function GrowUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人逐漸長大（scale 從小到大） */}
      <motion.div
        animate={{ scale: [0.4, 1, 1, 0.4], y: [12, 0, 0, 12] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.8, 1], ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: 14, left: '50%', marginLeft: -6, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4caf50', margin: '0 auto' }} />
        <div style={{ width: 5, height: 18, background: '#4caf50', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 3, height: 12, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 3, height: 12, background: '#4caf50', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 向上的箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.4, 0], y: [0, -8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 5, left: '50%', marginLeft: -5, width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '8px solid #4caf50' }}
      />
    </div>
  );
}

// Wake up = 醒來：眼睛從閉到張開+光芒
function WakeUpScene() {
  return (
    <div style={S}>
      {/* 眼睛 */}
      <div style={{ position: 'relative', width: 42, height: 22, margin: '12px auto 0' }}>
        {/* 眼球（張開動畫） */}
        <motion.div
          animate={{ scaleY: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.4, 0.8, 1] }}
          style={{ position: 'absolute', inset: 0, background: '#f5f5f5', border: '2.5px solid #455a64', borderRadius: '50%', overflow: 'hidden', transformOrigin: 'center center' }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -6, marginLeft: -6, width: 12, height: 12, background: '#1565c0', borderRadius: '50%' }}>
            <div style={{ position: 'absolute', top: 2, left: 2, width: 4, height: 4, background: '#fff', borderRadius: '50%' }} />
          </div>
        </motion.div>
        {/* 閉眼線 */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2.5, background: '#455a64', borderRadius: 2 }} />
      </div>
      {/* 覺醒的光芒 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.6, 0], y: [0, 0, -10, -16], scale: [0, 0, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.5, 0.7], delay: i * 0.08 }}
          style={{ position: 'absolute', top: 8, left: `${38 + i * 10}%`, width: 4, height: 4, background: '#ffeb3b', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// Move on = 往前走/放下過去：人離開碎裂的心，走向前方
function MoveOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 身後留下的過去（灰色殘影） */}
      <div style={{ position: 'absolute', left: 8, bottom: 15, opacity: 0.25 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#90a4ae', margin: '0 auto' }} />
        <div style={{ width: 3, height: 10, background: '#90a4ae', margin: '0 auto' }} />
      </div>
      {/* 前進的人 */}
      <motion.div
        animate={{ x: [5, 65, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 15, zIndex: 5 }}
      >
        <div style={{ transform: 'rotate(8deg)', transformOrigin: 'bottom center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1565c0', margin: '0 auto' }} />
          <div style={{ width: 4, height: 12, background: '#1565c0', margin: '0 auto', borderRadius: 2 }} />
        </div>
        <div style={{ display: 'flex', gap: 3, marginLeft: -1 }}>
          <motion.div animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
          <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} style={{ width: 2, height: 8, background: '#1565c0', borderRadius: 1, transformOrigin: 'top center' }} />
        </div>
      </motion.div>
      {/* 前方箭頭 */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 8, right: 8 }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 12, height: 2, background: '#4caf50', borderRadius: 1 }} />
          <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #4caf50' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Blow up = 爆炸：物體膨脹→爆炸碎片四散+衝擊波
function BlowUpScene() {
  return (
    <div style={S}>
      {/* 膨脹的球體 → 爆炸 */}
      <motion.div
        animate={{ scale: [0.8, 1, 1.8, 0], opacity: [1, 1, 0.8, 0], backgroundColor: ['#ff9800', '#ff9800', '#ef5350', '#ef5350'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.4, 0.5] }}
        style={{ position: 'absolute', width: 20, height: 20, borderRadius: '50%', zIndex: 5 }}
      />
      {/* 爆炸衝擊波 */}
      <motion.div
        animate={{ scale: [0, 0, 2.5, 3], opacity: [0, 0, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.5, 0.7] }}
        style={{ position: 'absolute', width: 30, height: 30, border: '2px solid #ff9800', borderRadius: '50%' }}
      />
      {/* 碎片四散 */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <motion.div
          key={i}
          animate={{
            x: [0, 0, Math.cos(i * 1.05) * 30],
            y: [0, 0, Math.sin(i * 1.05) * 30],
            opacity: [0, 0, 1, 0],
            scale: [0.5, 0.5, 1, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.38, 0.55, 0.8] }}
          style={{ position: 'absolute', width: 7, height: 5, background: i % 2 ? '#ef5350' : '#ffeb3b', borderRadius: 1, clipPath: 'polygon(20% 0%, 100% 30%, 70% 100%, 0% 70%)' }}
        />
      ))}
      {/* 火焰閃光 */}
      <motion.div
        animate={{ scale: [0, 0, 2, 0], opacity: [0, 0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.42, 0.55] }}
        style={{ position: 'absolute', width: 30, height: 30, background: 'radial-gradient(circle, rgba(255,235,59,0.6), rgba(255,152,0,0.3), transparent)', borderRadius: '50%', zIndex: 8 }}
      />
    </div>
  );
}

// Sort out = 解決/整理：混亂物品分類到正確箱子
function SortOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 12, left: 3, width: 20, height: 16, border: '1.5px solid #1565c0', borderRadius: 2, borderTop: 'none' }} />
      <div style={{ position: 'absolute', bottom: 12, right: 3, width: 20, height: 16, border: '1.5px solid #e65100', borderRadius: 2, borderTop: 'none' }} />
      <motion.div
        animate={{ x: [0, -15], y: [0, 12], backgroundColor: ['#90a4ae', '#1565c0'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', top: '22%', left: '44%', width: 8, height: 8, borderRadius: '50%' }}
      />
      <motion.div
        animate={{ x: [0, 15], y: [0, 12], backgroundColor: ['#90a4ae', '#e65100'] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
        style={{ position: 'absolute', top: '22%', left: '51%', width: 8, height: 8, borderRadius: 2 }}
      />
    </div>
  );
}

// Mess up = 搞砸：整齊的積木被手一掃全亂
function MessUpScene() {
  return (
    <div style={S}>
      {/* 整齊的積木（被弄亂前） → 散亂 */}
      {[
        { x0: -16, x1: -25, y0: 0, y1: -10, r: 0, r1: -30, c: '#ef5350' },
        { x0: -8, x1: 15, y0: 0, y1: -15, r: 0, r1: 25, c: '#42a5f5' },
        { x0: 0, x1: -10, y0: 0, y1: 12, r: 0, r1: -40, c: '#66bb6a' },
        { x0: 8, x1: 22, y0: 0, y1: 8, r: 0, r1: 35, c: '#ffa726' },
        { x0: 16, x1: -5, y0: 0, y1: 18, r: 0, r1: 20, c: '#ab47bc' },
      ].map((b, i) => (
        <motion.div
          key={i}
          animate={{ x: [b.x0, b.x0, b.x1], y: [b.y0, b.y0, b.y1], rotate: [b.r, b.r, b.r1], opacity: [1, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.65] }}
          style={{ position: 'absolute', left: '50%', top: '45%', width: 10, height: 10, background: b.c, borderRadius: i % 2 === 0 ? '50%' : 2 }}
        />
      ))}
      {/* 搞砸的手（揮過去） */}
      <motion.div
        animate={{ x: [-25, -25, 30], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5] }}
        style={{ position: 'absolute', left: '30%', top: '40%', width: 18, height: 8, background: '#F5CBA7', borderRadius: 4, border: '1px solid #E59866', zIndex: 10 }}
      />
    </div>
  );
}

// Freak out = 嚇壞/抓狂：人頭髮豎起後退尖叫
function FreakOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 驚恐的人 */}
      <motion.div
        animate={{ x: [-1, 1, -2, 2, 0], y: [-1, 1, -1, 1, 0] }}
        transition={{ duration: 0.3, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 15, left: '35%', zIndex: 5 }}
      >
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#455a64', margin: '0 auto', position: 'relative' }}>
          {/* 張大的眼睛 */}
          <div style={{ position: 'absolute', top: 4, left: 2, width: 4, height: 5, background: '#fff', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: 4, right: 2, width: 4, height: 5, background: '#fff', borderRadius: '50%' }} />
          {/* 張嘴 */}
          <div style={{ position: 'absolute', bottom: 1, left: '50%', marginLeft: -3, width: 6, height: 4, background: '#c62828', borderRadius: '0 0 50% 50%' }} />
          {/* 頭髮豎起 */}
          {[-4, 0, 4].map((x, i) => (
            <motion.div key={i} animate={{ scaleY: [1, 1.4, 1] }} transition={{ duration: 0.25, repeat: Infinity, delay: i * 0.04 }} style={{ position: 'absolute', top: -5, left: '50%', marginLeft: x - 1, width: 2, height: 6, background: '#455a64', borderRadius: 1, transformOrigin: 'bottom center' }} />
          ))}
        </div>
        <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 手舉起防禦 */}
        <div style={{ position: 'absolute', top: 16, left: -8, width: 10, height: 3, background: '#455a64', borderRadius: 2, transform: 'rotate(-40deg)' }} />
        <div style={{ position: 'absolute', top: 16, right: -8, width: 10, height: 3, background: '#455a64', borderRadius: 2, transform: 'rotate(40deg)' }} />
      </motion.div>
      {/* 驚嘆號 */}
      <motion.div
        animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ position: 'absolute', top: 5, right: 15, fontSize: 18, fontWeight: 'bold', color: '#c62828' }}
      >!</motion.div>
      {/* 衝擊波紋 */}
      {[0, 1].map(i => (
        <motion.div key={i} animate={{ scale: [0.5, 1.5], opacity: [0.4, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }} style={{ position: 'absolute', top: 2, right: 10, width: 16, height: 16, border: '2px solid #ef5350', borderRadius: '50%' }} />
      ))}
    </div>
  );
}

// Back up = 備份/支援：文件複製到安全處
function BackUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '18%', top: '18%', width: 30, height: 36, background: '#e3f2fd', border: '1.5px solid #546e7a', borderRadius: 3 }}>
        <div style={{ margin: '5px 3px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '70%', height: 2, background: '#90a4ae' }} />
          <div style={{ width: '50%', height: 2, background: '#90a4ae' }} />
          <div style={{ width: '60%', height: 2, background: '#90a4ae' }} />
        </div>
      </div>
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', left: '50%', top: '35%' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 8, height: 2, background: '#4caf50' }} />
          <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '5px solid #4caf50' }} />
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ position: 'absolute', right: '10%', top: '22%', width: 28, height: 32, background: '#fff', border: '1.5px dashed #4caf50', borderRadius: 3 }}
      >
        <div style={{ margin: '5px 3px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '70%', height: 2, background: '#a5d6a7' }} />
          <div style={{ width: '50%', height: 2, background: '#a5d6a7' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Call off = 取消：行事曆被大紅 X 蓋掉
function CallOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '50%', marginLeft: -22, top: '15%', width: 44, height: 34, background: '#f5f5f5', border: '1.5px solid #bdbdbd', borderRadius: 3 }}>
        <div style={{ margin: '6px 5px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div style={{ width: '80%', height: 2, background: '#ccc' }} />
          <div style={{ width: '60%', height: 2, background: '#ccc' }} />
          <div style={{ width: '70%', height: 2, background: '#ccc' }} />
        </div>
      </div>
      <motion.div
        animate={{ rotate: [0, 0, -8, -8], scale: [0, 0, 1.1, 1.1], opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '18%', fontSize: 28, fontWeight: 'bold', color: '#ef5350', zIndex: 5 }}
      >✕</motion.div>
    </div>
  );
}

// Call back = 回電：電話+回撥弧線
function CallBackScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '50%', marginLeft: -8, top: '22%', width: 16, height: 22, background: '#263238', borderRadius: 3, border: '1px solid #37474f' }}>
        <div style={{ width: 10, height: 14, background: '#42a5f5', borderRadius: 1, margin: '2px auto' }} />
      </div>
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0.8, 1.4 + i * 0.3], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', left: '50%', marginLeft: -14, top: '18%', width: 28, height: 30, border: '1.5px solid #1565c0', borderRadius: '50%' }}
        />
      ))}
      <motion.div
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 12, left: '50%', marginLeft: -18 }}
      >
        <svg width="36" height="14">
          <path d="M 32 7 Q 18 -3 4 7" fill="transparent" stroke="#4caf50" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M 8 3 L 4 7 L 8 11" fill="transparent" stroke="#4caf50" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
}

// Fill out = 填寫表格
function FillOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', left: '50%', marginLeft: -25, top: 4, width: 50, height: 64, background: '#f5f5f5', border: '1.5px solid #bdbdbd', borderRadius: 3 }}>
        {[12, 24, 36, 48].map(y => (
          <div key={y} style={{ position: 'absolute', top: y, left: 6, right: 6, height: 2, background: '#e0e0e0' }} />
        ))}
      </div>
      {[0, 1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5 }}
          style={{ position: 'absolute', top: 16 + i * 12, left: '50%', marginLeft: -18, width: 34, height: 2, background: '#1565c0', transformOrigin: 'left center', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// Roll out = 推出/展開：紅毯鋪展
function RollOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 15, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      <motion.div
        animate={{ width: [5, 75, 75, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 15, left: 5, height: 5, background: '#c62828', borderRadius: 1, transformOrigin: 'left center' }}
      />
      <motion.div
        animate={{ x: [0, 70, 70, 0], rotate: [0, 720, 720, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 13, left: 3, width: 10, height: 10, background: '#b71c1c', borderRadius: '50%', border: '1px solid #7f0000', zIndex: 5 }}
      />
    </div>
  );
}

// Let down = 失望：氣球洩氣+人低頭
function LetDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 失望低頭的人 */}
      <div style={{ position: 'absolute', left: '35%', bottom: 15 }}>
        <motion.div animate={{ y: [0, 0, 3, 3] }} transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#546e7a', margin: '0 auto' }} />
        </motion.div>
        <div style={{ width: 4, height: 16, background: '#546e7a', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
          <div style={{ width: 2, height: 10, background: '#546e7a', borderRadius: 1 }} />
        </div>
      </div>
      {/* 洩氣的氣球 */}
      <motion.div
        animate={{ scale: [1, 1, 0.3, 0.3], y: [0, 0, 18, 18], opacity: [1, 1, 0.4, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        style={{ position: 'absolute', right: 15, top: 6, transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 18, height: 22, background: '#ef5350', borderRadius: '50%' }}>
          <div style={{ position: 'absolute', top: 3, left: 4, width: 5, height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
        </div>
        <div style={{ width: 1, height: 8, background: '#bdbdbd', margin: '0 auto' }} />
      </motion.div>
      {/* 失望表情 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.7, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.65, 1] }}
        style={{ position: 'absolute', top: 8, left: '28%' }}
      >
        <svg width="14" height="10"><path d="M 2 8 Q 7 4 12 8" fill="transparent" stroke="#90a4ae" strokeWidth="1.5" /></svg>
      </motion.div>
    </div>
  );
}

// Kick off = 啟動/開始：開賽踢球
function KickOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人的上半身 */}
      <div style={{ position: 'absolute', bottom: 33, left: '22%' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#455a64', borderRadius: 1, margin: '0 auto' }} />
      </div>
      {/* 踢的腿 */}
      <motion.div
        animate={{ rotate: [0, 0, -55, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.2, 0.35, 0.45, 1] }}
        style={{ position: 'absolute', bottom: 15, left: '25%', transformOrigin: 'top center' }}
      >
        <div style={{ width: 5, height: 18, background: '#455a64', borderRadius: 2 }} />
        <div style={{ width: 12, height: 6, background: '#e65100', borderRadius: 3, marginLeft: -3 }} />
      </motion.div>
      {/* 球被踢出 */}
      <motion.div
        animate={{ x: [0, 0, 38], y: [0, 0, -12], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.3, 0.65, 0.85] }}
        style={{ position: 'absolute', bottom: 20, left: '40%', width: 12, height: 12, background: '#fff', border: '2px solid #333', borderRadius: '50%' }}
      />
    </div>
  );
}

// Reach out = 伸出援手/聯繫：手向對方伸出
function ReachOutScene() {
  return (
    <div style={S}>
      {/* 對方 */}
      <div style={{ position: 'absolute', right: 8, top: '30%' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9800', margin: '0 auto' }} />
        <div style={{ width: 12, height: 3, background: '#ff9800', borderRadius: 1, margin: '0 auto' }} />
      </div>
      {/* 自己 */}
      <div style={{ position: 'absolute', left: 5, top: '28%' }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64' }} />
        <div style={{ width: 14, height: 3, background: '#455a64', borderRadius: 1 }} />
      </div>
      {/* 伸出的手臂 */}
      <motion.div
        animate={{ width: [15, 50, 50, 15] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
        style={{ position: 'absolute', left: 16, top: '38%', height: 8, background: '#F5CBA7', borderRadius: 4, border: '1.5px solid #E59866', transformOrigin: 'left center', zIndex: 5 }}
      />
    </div>
  );
}

// Lay off = 裁員：人離開公司+解僱通知
function LayOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 公司 */}
      <div style={{ position: 'absolute', left: 5, top: 6, width: 30, height: 40, background: '#78909c', borderRadius: 3, border: '1.5px solid #546e7a' }}>
        <div style={{ position: 'absolute', top: 5, left: 4, width: 8, height: 6, background: '#90caf9', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 5, right: 4, width: 8, height: 6, background: '#90caf9', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 16, left: 4, width: 8, height: 6, background: '#90caf9', borderRadius: 1 }} />
        <div style={{ position: 'absolute', top: 16, right: 4, width: 8, height: 6, background: '#90caf9', borderRadius: 1 }} />
      </div>
      {/* 被裁的人離開 */}
      <motion.div
        animate={{ x: [0, 0, 28], opacity: [1, 1, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.85] }}
        style={{ position: 'absolute', left: 32, bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* 解僱通知 */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 1] }}
        style={{ position: 'absolute', right: 5, top: 8, width: 18, height: 14, background: '#ffebee', border: '1px solid #ef5350', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ fontSize: 8, fontWeight: 'bold', color: '#ef5350' }}>✕</div>
      </motion.div>
    </div>
  );
}

// Pass out = 昏倒：人倒下+暈眩星星
function PassOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人倒下 */}
      <motion.div
        animate={{ rotate: [0, 0, 75, 75] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
        style={{ position: 'absolute', left: '35%', bottom: 15, transformOrigin: 'bottom right' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', gap: 4, marginLeft: -1 }}>
          <div style={{ width: 2, height: 10, background: '#455a64', borderRadius: 1 }} />
          <div style={{ width: 2, height: 10, background: '#455a64', borderRadius: 1 }} />
        </div>
      </motion.div>
      {/* 暈眩星星 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0, 0.7, 0], y: [0, 0, -10, -16], rotate: [0, 0, 120, 240] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.55, 0.75], delay: i * 0.1 }}
          style={{ position: 'absolute', top: 8, left: '42%', marginLeft: (i - 1) * 8, width: 5, height: 5, background: '#ffeb3b', borderRadius: 1, transform: 'rotate(45deg)' }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// Run away / Get up / Break down / Take off 補充場景
// ═══════════════════════════════════════

// Run away = 逃跑：人看到危險快跑，速度線+揚塵
function RunAwayScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 危險標誌（紅色三角驚嘆號） */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', left: 5, top: '35%' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <polygon points="10,2 19,18 1,18" fill="#fff" stroke="#ef5350" strokeWidth="2" />
          <text x="10" y="16" textAnchor="middle" fill="#ef5350" fontSize="11" fontWeight="bold">!</text>
        </svg>
      </motion.div>
      {/* 人跑走 */}
      <motion.div
        animate={{ x: [20, 15, 80, 80] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.15, 0.65, 1], ease: 'easeIn' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e53935', margin: '0 auto' }} />
        <div style={{ width: 4, height: 14, background: '#e53935', margin: '0 auto' }} />
        <div style={{ display: 'flex', gap: 5, marginTop: -3 }}>
          <motion.div animate={{ rotate: [35, -35, 35] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 2, height: 10, background: '#e53935', transformOrigin: 'top' }} />
          <motion.div animate={{ rotate: [-35, 35, -35] }} transition={{ duration: 0.3, repeat: Infinity }} style={{ width: 2, height: 10, background: '#e53935', transformOrigin: 'top' }} />
        </div>
      </motion.div>
      {/* 速度線 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [-5, -15], opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 + i * 0.15 }}
          style={{ position: 'absolute', top: 38 + i * 6, left: 35, width: 10 + i * 3, height: 2, background: '#ffcdd2', borderRadius: 1 }}
        />
      ))}
    </div>
  );
}

// Get up = 起床：人從床上坐起來
function GetUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 床 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -30, width: 60, height: 6, background: '#8d6e63', borderRadius: 3 }} />
      <div style={{ position: 'absolute', bottom: 21, left: '50%', marginLeft: -30, width: 14, height: 8, background: '#eceff1', borderRadius: '3px 3px 0 0', border: '1px solid #cfd8dc' }} />
      {/* 床腳 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -25, width: 4, height: 8, background: '#795548' }} />
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: 21, width: 4, height: 8, background: '#795548' }} />
      {/* 人坐起來 */}
      <motion.div
        animate={{ rotate: [-80, -80, 5, 0], y: [42, 42, 18, 20] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 1], ease: 'easeOut' }}
        style={{ position: 'absolute', left: '50%', marginLeft: -4, transformOrigin: 'bottom center', zIndex: 5 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', border: '1.5px solid #263238' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
      </motion.div>
      {/* ZZZ 消失 */}
      <motion.div
        animate={{ opacity: [0.7, 0.7, 0, 0], y: [28, 20, 15, 15] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.35, 1] }}
        style={{ position: 'absolute', left: '65%', fontSize: 9, color: '#90a4ae', fontWeight: 'bold' }}
      >
        Z<span style={{ fontSize: 7 }}>z</span><span style={{ fontSize: 5 }}>z</span>
      </motion.div>
    </div>
  );
}

// Break down = 故障：機器震動冒煙裂開
function BreakDownScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 機器 */}
      <motion.div
        animate={{ rotate: [0, -3, 3, -2, 2, 0, 0], scaleY: [1, 1, 1, 1, 1, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.35, 0.4, 0.45, 0.5, 0.7] }}
        style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -16, width: 32, height: 35, background: '#78909c', borderRadius: 4, border: '2px solid #455a64', transformOrigin: 'bottom center', overflow: 'hidden' }}
      >
        {/* 齒輪 */}
        <motion.div
          animate={{ rotate: [0, 360, 360, 360] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.45, 0.55, 1] }}
          style={{ position: 'absolute', top: 8, left: 8, width: 14, height: 14, border: '2.5px dashed #cfd8dc', borderRadius: '50%' }}
        />
        {/* 裂痕 */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.6, 1] }}
          style={{ position: 'absolute', top: -3, left: 12, width: 2, height: 42, background: '#ef5350', transform: 'rotate(20deg)' }}
        />
      </motion.div>
      {/* 冒煙 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ y: [15, -10], opacity: [0, 0, 0.6, 0], scale: [0.5, 0.5, 1.2, 1.5] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.85], delay: i * 0.15 }}
          style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -5 + i * 8, width: 10, height: 10, background: '#9e9e9e', borderRadius: '50%', filter: 'blur(2px)' }}
        />
      ))}
    </div>
  );
}

// Take off = 起飛：飛機從跑道加速升空
function TakeOffScene() {
  return (
    <div style={S}>
      {/* 跑道 */}
      <motion.div
        animate={{ x: [0, -60] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', bottom: 12, left: 0, width: '200%', height: 3, background: 'repeating-linear-gradient(90deg, #9e9e9e, #9e9e9e 14px, transparent 14px, transparent 28px)' }}
      />
      {/* 飛機 */}
      <motion.div
        animate={{ x: [-10, 15, 60, 95], y: [52, 52, 18, -10], rotate: [0, -5, -25, -30] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 0.85], ease: 'easeIn' }}
        style={{ position: 'absolute', width: 30, height: 12, zIndex: 5 }}
      >
        {/* 機身 */}
        <div style={{ width: '100%', height: '100%', background: '#1565c0', borderRadius: '14px 70% 70% 14px', border: '1px solid #0d47a1' }} />
        {/* 尾翼 */}
        <div style={{ position: 'absolute', top: -5, left: 3, width: 8, height: 10, background: '#1565c0', borderRadius: '3px 3px 0 0', transform: 'skewX(-20deg)', border: '1px solid #0d47a1', borderBottom: 'none' }} />
        {/* 窗 */}
        <div style={{ position: 'absolute', top: 2, right: 6, width: 4, height: 4, background: '#90caf9', borderRadius: '50%' }} />
        {/* 噴射 */}
        <motion.div
          animate={{ opacity: [0, 0, 0.8, 1], scaleX: [0, 0, 1, 1.3] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 0.85] }}
          style={{ position: 'absolute', top: 3, left: -14, width: 14, height: 4, background: 'linear-gradient(90deg, transparent, #ff9800, #ffeb3b)', borderRadius: '6px 0 0 6px', transformOrigin: 'right center' }}
        />
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Carry 片語場景
// ═══════════════════════════════════════

// Carry on = 繼續：人扛著行李繼續往前走
function CarryOnScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人 + 行李往前走 */}
      <motion.div
        animate={{ x: [-10, 80, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        {/* 腿 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <motion.div style={{ width: 2, height: 10, background: '#455a64' }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 10, background: '#455a64' }} animate={{ rotate: [15, -15, 15] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
        {/* 肩上的箱子 */}
        <div style={{ position: 'absolute', top: -2, left: 10, width: 14, height: 10, background: '#8d6e63', border: '1.5px solid #5d4037', borderRadius: 2 }} />
      </motion.div>
      {/* 前進箭頭 */}
      <motion.div
        animate={{ x: [-3, 3, -3], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', top: 12, right: 8, display: 'flex', alignItems: 'center' }}
      >
        <div style={{ width: 12, height: 2, background: '#4caf50' }} />
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #4caf50' }} />
      </motion.div>
    </div>
  );
}

// Carry out = 執行：手把計畫搬出門外落實
function CarryOutScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 門框 */}
      <div style={{ position: 'absolute', left: '50%', marginLeft: -1, top: 5, width: 3, height: 70, background: '#90a4ae', borderRadius: 1 }} />
      {/* 室內標籤: PLAN */}
      <div style={{ position: 'absolute', top: 8, left: 8, fontSize: 7, color: '#b0bec5', fontWeight: 'bold' }}>PLAN</div>
      {/* 室外標籤: ACTION */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 1] }}
        style={{ position: 'absolute', top: 8, right: 5, fontSize: 7, color: '#4caf50', fontWeight: 'bold' }}
      >
        ACTION
      </motion.div>
      {/* 人搬著文件夾走出門 */}
      <motion.div
        animate={{ x: [10, 10, 55, 55] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 1] }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
        </div>
        {/* 剪貼板 */}
        <div style={{ position: 'absolute', top: 4, left: 12, width: 10, height: 14, background: '#fff9c4', border: '1.5px solid #f9a825', borderRadius: 2 }}>
          <div style={{ marginTop: 3, marginLeft: 2, width: 5, height: 1.5, background: '#bdbdbd' }} />
          <div style={{ marginTop: 2, marginLeft: 2, width: 5, height: 1.5, background: '#bdbdbd' }} />
        </div>
      </motion.div>
      {/* 完成打勾 */}
      <motion.div
        animate={{ scale: [0, 0, 0, 1.2, 1], opacity: [0, 0, 0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.8, 1] }}
        style={{ position: 'absolute', bottom: 45, right: 12 }}
      >
        <svg width="14" height="10"><path d="M 1 5 L 5 9 L 13 1" fill="none" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Cut out 片語場景
// ═══════════════════════════════════════

// Cut out = 停止/移除：剪刀從紙上剪掉一塊
function CutOutScene() {
  return (
    <div style={S}>
      {/* 文件 */}
      <div style={{ position: 'absolute', top: 10, left: '50%', marginLeft: -20, width: 40, height: 55, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 3 }}>
        <div style={{ marginTop: 8, marginLeft: 6, width: 22, height: 2, background: '#ccc', borderRadius: 1 }} />
        <div style={{ marginTop: 4, marginLeft: 6, width: 18, height: 2, background: '#ccc', borderRadius: 1 }} />
        {/* 被剪掉的塊 */}
        <motion.div
          animate={{ x: [0, 0, 28, 35], y: [0, 0, 5, 20], rotate: [0, 0, 10, 25], opacity: [1, 1, 0.7, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
          style={{ position: 'absolute', top: 25, left: 8, width: 14, height: 14, background: '#ef5350', borderRadius: 2, opacity: 0.6 }}
        />
        <div style={{ marginTop: 20, marginLeft: 6, width: 14, height: 2, background: '#ccc', borderRadius: 1 }} />
      </div>
      {/* 剪刀 */}
      <motion.div
        animate={{ x: [-15, -15, 5, 5], y: [-10, -10, 0, 0], rotate: [0, 0, -10, -10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        style={{ position: 'absolute', top: 25, left: '30%', zIndex: 5 }}
      >
        <svg width="16" height="18" viewBox="0 0 16 18">
          <motion.g animate={{ rotate: [8, 8, -8, -8, 8] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.6, 0.75] }} style={{ transformOrigin: '8px 10px' }}>
            <path d="M 8 10 L 3 1 L 6 1 L 8 7 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="0.5" />
          </motion.g>
          <motion.g animate={{ rotate: [-8, -8, 8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.6, 0.75] }} style={{ transformOrigin: '8px 10px' }}>
            <path d="M 8 10 L 13 1 L 10 1 L 8 7 Z" fill="#bdbdbd" stroke="#9e9e9e" strokeWidth="0.5" />
          </motion.g>
          <circle cx="8" cy="10" r="2" fill="#546e7a" />
        </svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Stand up / Stand by 片語場景
// ═══════════════════════════════════════

// Stand up = 站起來/放鴿子：人從椅子站起
function StandUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 椅子 */}
      <div style={{ position: 'absolute', bottom: 15, left: '45%' }}>
        <div style={{ width: 16, height: 3, background: '#8d6e63', borderRadius: 1 }} />
        <div style={{ width: 3, height: 10, background: '#8d6e63', marginLeft: 1 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 3, height: 10, background: '#8d6e63' }} />
        <div style={{ position: 'absolute', top: -14, right: 0, width: 3, height: 17, background: '#8d6e63', borderRadius: '2px 2px 0 0' }} />
      </div>
      {/* 人站起來 */}
      <motion.div
        animate={{
          y: [35, 35, 10, 10],
          rotate: [15, 15, 0, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.6, 1] }}
        style={{ position: 'absolute', left: '38%', transformOrigin: 'bottom center' }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <motion.div
            animate={{ rotate: [30, 30, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.6, 1] }}
            style={{ width: 2, height: 12, background: '#455a64', transformOrigin: 'top' }}
          />
          <motion.div
            animate={{ rotate: [-10, -10, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.6, 1] }}
            style={{ width: 2, height: 12, background: '#455a64', transformOrigin: 'top' }}
          />
        </div>
      </motion.div>
      {/* 上升箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.6, 0], y: [5, 5, -8, -15] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.6, 0.8] }}
        style={{ position: 'absolute', top: 6, right: 15 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderBottom: '6px solid #4caf50', margin: '0 auto' }} />
        <div style={{ width: 2, height: 8, background: '#4caf50', margin: '0 auto' }} />
      </motion.div>
    </div>
  );
}

// Stand by = 待命：人站在信號燈旁邊，燈閃綠色
function StandByScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 信號塔/控制台 */}
      <div style={{ position: 'absolute', right: 15, bottom: 15, width: 20, height: 45, background: '#546e7a', borderRadius: '4px 4px 0 0' }}>
        {/* 信號燈（閃爍） */}
        <motion.div
          animate={{ background: ['#bdbdbd', '#4caf50', '#bdbdbd', '#4caf50'], boxShadow: ['none', '0 0 6px #4caf50', 'none', '0 0 6px #4caf50'] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -4, width: 8, height: 8, borderRadius: '50%' }}
        />
        <div style={{ position: 'absolute', top: 22, left: '50%', marginLeft: -4, width: 8, height: 8, borderRadius: '50%', background: '#37474f' }} />
      </div>
      {/* 人站在旁邊待命 */}
      <motion.div
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', left: '30%', bottom: 15 }}
      >
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 16, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 12, background: '#455a64' }} />
          <div style={{ width: 2, height: 12, background: '#455a64' }} />
        </div>
      </motion.div>
      {/* READY 文字閃爍 */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 8, left: '50%', marginLeft: -16, fontSize: 8, fontWeight: 'bold', color: '#4caf50', letterSpacing: 1 }}
      >
        READY
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Blow off 片語場景
// ═══════════════════════════════════════

// Blow off = 放鴿子/發洩：風把邀請函吹飛，人轉身離開
function BlowOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 邀請函/信件被風吹飛 */}
      <motion.div
        animate={{ x: [40, 40, 70, 85], y: [30, 30, 10, -10], rotate: [0, 0, 25, 45], opacity: [1, 1, 0.6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 1] }}
        style={{ position: 'absolute', width: 14, height: 10, background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: 1 }}
      >
        <div style={{ marginTop: 2, marginLeft: 2, width: 8, height: 1.5, background: '#e0e0e0' }} />
        <div style={{ marginTop: 1, marginLeft: 2, width: 6, height: 1.5, background: '#e0e0e0' }} />
      </motion.div>
      {/* 風的線條 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ x: [0, 20, 30], opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          style={{ position: 'absolute', top: 25 + i * 8, left: 30, width: 12 + i * 3, height: 2, background: '#90caf9', borderRadius: 1 }}
        />
      ))}
      {/* 人轉身離開（向左走） */}
      <motion.div
        animate={{ x: [40, 40, 10, 10] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <motion.div style={{ width: 2, height: 8, background: '#455a64' }} animate={{ rotate: [10, -10, 10] }} transition={{ duration: 0.5, repeat: Infinity }} />
          <motion.div style={{ width: 2, height: 8, background: '#455a64' }} animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Sign in / out / off 片語場景
// ═══════════════════════════════════════

// Sign in = 登入：筆簽進登入框，鎖打開
function SignInScene() {
  return (
    <div style={S}>
      {/* 登入框 */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -20, marginLeft: -22, width: 44, height: 40, background: '#f5f5f5', border: '2px solid #bdbdbd', borderRadius: 6 }}>
        {/* 使用者圖示 */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#90a4ae', margin: '6px auto 2px' }} />
        {/* 輸入框 */}
        <div style={{ width: 30, height: 4, background: '#e0e0e0', borderRadius: 2, margin: '4px auto' }} />
        {/* 填入的內容 */}
        <motion.div
          animate={{ width: [0, 0, 24, 24] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.6, 1] }}
          style={{ height: 3, background: '#1565c0', borderRadius: 1, margin: '0 auto', marginTop: -3.5 }}
        />
      </div>
      {/* 鎖→開 */}
      <motion.div
        animate={{ rotate: [0, 0, 0, -30], y: [0, 0, 0, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.8] }}
        style={{ position: 'absolute', top: 8, right: 12, transformOrigin: 'bottom left' }}
      >
        <div style={{ width: 10, height: 6, border: '2.5px solid #78909c', borderBottom: 'none', borderRadius: '5px 5px 0 0' }} />
      </motion.div>
      <motion.div
        animate={{ background: ['#78909c', '#78909c', '#78909c', '#4caf50'] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 0.65, 0.8] }}
        style={{ position: 'absolute', top: 14, right: 10, width: 14, height: 10, borderRadius: 3 }}
      />
      {/* 筆（簽進去） */}
      <motion.div
        animate={{ x: [-20, -20, 0, 0], opacity: [0.5, 0.5, 1, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.2, 0.55, 0.75] }}
        style={{ position: 'absolute', top: '50%', left: 6, marginTop: 2, width: 3, height: 16, background: '#1565c0', borderRadius: '1px 1px 0 0', transform: 'rotate(25deg)' }}
      >
        <div style={{ position: 'absolute', bottom: -3, left: 0, width: 3, height: 4, background: '#0d47a1', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
      </motion.div>
    </div>
  );
}

// Sign out = 登出：人走出螢幕框，框變灰
function SignOutScene() {
  return (
    <div style={S}>
      {/* 螢幕/系統框 */}
      <motion.div
        animate={{ borderColor: ['#1565c0', '#1565c0', '#bdbdbd', '#bdbdbd'] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.65, 1] }}
        style={{ position: 'absolute', top: 10, left: 8, width: 40, height: 50, border: '2px solid #1565c0', borderRadius: 4, background: '#f8f8f8' }}
      >
        <div style={{ width: 24, height: 2, background: '#e0e0e0', margin: '8px auto' }} />
        <div style={{ width: 20, height: 2, background: '#e0e0e0', margin: '0 auto' }} />
      </motion.div>
      {/* 人走出框 */}
      <motion.div
        animate={{ x: [18, 18, 55, 55] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.65, 1] }}
        style={{ position: 'absolute', top: 22 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
        </div>
      </motion.div>
      {/* 登出箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.7, 0.7], x: [0, 0, 5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
        style={{ position: 'absolute', top: 30, right: 8, display: 'flex', alignItems: 'center' }}
      >
        <div style={{ width: 10, height: 2, background: '#ef5350' }} />
        <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #ef5350' }} />
      </motion.div>
    </div>
  );
}

// Sign off = 簽核批准：章蓋在文件上，勾出現
function SignOffScene() {
  return (
    <div style={S}>
      {/* 文件 */}
      <div style={{ position: 'absolute', top: 15, left: '50%', marginLeft: -18, width: 36, height: 48, background: '#fff', border: '2px solid #bdbdbd', borderRadius: 3 }}>
        <div style={{ marginTop: 6, marginLeft: 5, width: 20, height: 2, background: '#e0e0e0' }} />
        <div style={{ marginTop: 3, marginLeft: 5, width: 16, height: 2, background: '#e0e0e0' }} />
        <div style={{ marginTop: 3, marginLeft: 5, width: 22, height: 2, background: '#e0e0e0' }} />
      </div>
      {/* 印章蓋下 */}
      <motion.div
        animate={{ y: [-25, -25, 0, -5, 0, 0], scale: [1, 1, 1, 1, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.45, 0.5, 0.55, 1] }}
        style={{ position: 'absolute', top: 30, left: '50%', marginLeft: -8, zIndex: 5 }}
      >
        {/* 印章把手 */}
        <div style={{ width: 8, height: 10, background: '#8d6e63', borderRadius: '3px 3px 0 0', margin: '0 auto' }} />
        {/* 印章底部 */}
        <div style={{ width: 16, height: 4, background: '#5d4037', borderRadius: 1 }} />
      </motion.div>
      {/* 紅色「核准」印記 */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0.8, 0.8], scale: [0.5, 0.5, 0.5, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.5, 0.58, 1] }}
        style={{ position: 'absolute', top: 35, left: '50%', marginLeft: -10, width: 20, height: 12, border: '2px solid #ef5350', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}
      >
        <svg width="10" height="8"><path d="M 1 4 L 4 7 L 9 1" fill="none" stroke="#ef5350" strokeWidth="2" strokeLinecap="round" /></svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Shut up 片語場景
// ═══════════════════════════════════════

// Shut up = 閉嘴：嘴巴闔上，聲波消失
function ShutUpScene() {
  return (
    <div style={S}>
      {/* 頭 */}
      <div style={{ position: 'absolute', top: '50%', left: '35%', marginTop: -18, width: 28, height: 28, background: '#F5CBA7', border: '2px solid #E59866', borderRadius: '50%' }}>
        {/* 眼睛 */}
        <div style={{ position: 'absolute', top: 9, left: 6, width: 4, height: 4, background: '#455a64', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: 9, right: 6, width: 4, height: 4, background: '#455a64', borderRadius: '50%' }} />
      </div>
      {/* 嘴巴（闔上） */}
      <motion.div
        animate={{ height: [6, 6, 1, 1], borderRadius: ['3px', '3px', '1px', '1px'] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.55, 1] }}
        style={{ position: 'absolute', top: '50%', left: '35%', marginTop: 6, marginLeft: 8, width: 12, background: '#e57373', overflow: 'hidden' }}
      />
      {/* 聲波（消失） */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0.6, 0.6, 0, 0], scaleX: [1, 1, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
          style={{ position: 'absolute', top: '50%', marginTop: -8 + i * 6, right: 15 + i * 5, width: 8, height: 3, background: '#90caf9', borderRadius: 2 }}
        />
      ))}
      {/* X 標誌（靜音） */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1], scale: [0.5, 0.5, 1, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.65, 1] }}
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        <svg width="14" height="14">
          <line x1="2" y1="2" x2="12" y2="12" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="2" x2="2" y2="12" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Drop off / Drop by 片語場景
// ═══════════════════════════════════════

// Drop off = 放下送達：人把包裹放在門口離開
function DropOffScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 門 */}
      <div style={{ position: 'absolute', bottom: 15, right: 15, width: 18, height: 50, background: '#8d6e63', borderRadius: '3px 3px 0 0' }}>
        <div style={{ position: 'absolute', top: 25, right: 3, width: 3, height: 3, background: '#fdd835', borderRadius: '50%' }} />
      </div>
      {/* 包裹（被放下） */}
      <motion.div
        animate={{ y: [20, 20, 45, 45], x: [20, 35, 52, 52] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 1] }}
        style={{ position: 'absolute', width: 12, height: 10, background: '#D2B48C', border: '1.5px solid #8B4513', borderRadius: 1 }}
      >
        <div style={{ width: '100%', height: 1.5, background: '#8B4513', marginTop: 4 }} />
      </motion.div>
      {/* 人（放下後離開） */}
      <motion.div
        animate={{ x: [15, 35, 35, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.3, 0.55, 0.9] }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
        </div>
      </motion.div>
    </div>
  );
}

// Drop by = 順道拜訪：人走過門口，停一下敲門，繼續走
function DropByScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 門 */}
      <div style={{ position: 'absolute', bottom: 15, left: '50%', marginLeft: -8, width: 16, height: 48, background: '#8d6e63', borderRadius: '3px 3px 0 0' }}>
        <div style={{ position: 'absolute', top: 24, right: 2, width: 3, height: 3, background: '#fdd835', borderRadius: '50%' }} />
      </div>
      {/* 人走過去、停、繼續走 */}
      <motion.div
        animate={{ x: [-10, 25, 25, 70] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.6, 0.9], ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 15 }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 4, height: 12, background: '#455a64', margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
          <div style={{ width: 2, height: 8, background: '#455a64' }} />
        </div>
      </motion.div>
      {/* 敲門效果 */}
      {[0, 1].map(i => (
        <motion.div
          key={i}
          animate={{ scale: [0, 0, 1.5, 0, 0], opacity: [0, 0, 0.5, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.35, 0.45, 0.55, 1], delay: i * 0.08 }}
          style={{ position: 'absolute', top: 20, left: '50%', marginLeft: -6 - i * 3, width: 12 + i * 6, height: 12 + i * 6, border: '1.5px solid #ff9800', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// Pull out / Pull over 片語場景
// ═══════════════════════════════════════

// Pull out = 撤出/拿出：手從箱子裡拉出物件
function PullOutScene() {
  return (
    <div style={S}>
      {/* 容器/箱子 */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -15, marginLeft: -18, width: 36, height: 30, background: '#e0e0e0', border: '2px solid #9e9e9e', borderRadius: 3, borderTop: '3px solid #78909c' }} />
      {/* 被拉出的物件 */}
      <motion.div
        animate={{ y: [5, 5, -30, -30], x: [0, 0, 10, 10], rotate: [0, 0, -5, -5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.65, 1] }}
        style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -12, marginLeft: -6, width: 12, height: 16, background: '#1565c0', borderRadius: 2, zIndex: 5 }}
      />
      {/* 手拉 */}
      <motion.div
        animate={{ y: [8, 8, -25, -25] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.65, 1] }}
        style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -22, marginLeft: 2, zIndex: 10 }}
      >
        <div style={{ width: 16, height: 10, background: '#F5CBA7', border: '1.5px solid #E59866', borderRadius: 4 }} />
      </motion.div>
      {/* 拉出的動態線 */}
      <motion.div
        animate={{ opacity: [0, 0, 0.5, 0], scaleY: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.5, 0.65] }}
        style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -8, marginLeft: -2, width: 2, height: 20, background: '#90a4ae', transformOrigin: 'bottom center' }}
      />
    </div>
  );
}

// Pull over = 靠邊停車：車從路中間移到路邊
function PullOverScene() {
  return (
    <div style={S}>
      {/* 路面 */}
      <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, height: 30, background: '#78909c' }}>
        {/* 道路中線（虛線） */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{ position: 'absolute', top: 13, left: 5 + i * 16, width: 10, height: 3, background: '#fff', borderRadius: 1, opacity: 0.6 }} />
        ))}
      </div>
      {/* 路肩 */}
      <div style={{ position: 'absolute', bottom: 38, left: 0, right: 0, height: 3, background: '#b0bec5' }} />
      {/* 車 */}
      <motion.div
        animate={{ y: [25, 25, 12, 12], x: [10, 50, 60, 60] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.35, 0.65, 1] }}
        style={{ position: 'absolute', bottom: 10 }}
      >
        <div style={{ width: 28, height: 10, background: '#1565c0', borderRadius: 3, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -5, left: 6, width: 14, height: 7, background: '#1565c0', borderRadius: '3px 3px 0 0' }} />
          <div style={{ position: 'absolute', top: -3, left: 8, width: 10, height: 4, background: '#bbdefb', borderRadius: 1, opacity: 0.7 }} />
        </div>
        {/* 輪子 */}
        <div style={{ position: 'absolute', bottom: -2, left: 3, width: 5, height: 5, background: '#37474f', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -2, right: 3, width: 5, height: 5, background: '#37474f', borderRadius: '50%' }} />
      </motion.div>
      {/* 靠邊箭頭 */}
      <motion.div
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', top: 15, right: 10 }}
      >
        <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '7px solid #ff9800', margin: '0 auto' }} />
        <div style={{ width: 2, height: 6, background: '#ff9800', margin: '0 auto' }} />
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════
// Pass up 片語場景
// ═══════════════════════════════════════

// Pass up = 放棄機會：金色星星往上飄走，人看著它走
function PassUpScene() {
  return (
    <div style={S}>
      <div style={{ position: 'absolute', bottom: 13, left: 0, right: 0, height: 2, background: '#e0e0e0' }} />
      {/* 人看著機會飄走 */}
      <div style={{ position: 'absolute', bottom: 15, left: '35%' }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#455a64', margin: '0 auto' }} />
        <div style={{ width: 5, height: 14, background: '#455a64', margin: '0 auto', borderRadius: 2 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <div style={{ width: 2, height: 10, background: '#455a64' }} />
          <div style={{ width: 2, height: 10, background: '#455a64' }} />
        </div>
      </div>
      {/* 金色機會星星往上飄 */}
      <motion.div
        animate={{ y: [40, 40, -15, -25], opacity: [0.3, 1, 0.6, 0], scale: [0.8, 1.2, 0.9, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.25, 0.65, 1] }}
        style={{ position: 'absolute', left: '55%' }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <polygon points="9,1 11.5,6.5 17,7 13,11 14,17 9,14 4,17 5,11 1,7 6.5,6.5" fill="#fdd835" stroke="#f9a825" strokeWidth="0.5" />
        </svg>
      </motion.div>
      {/* 上升的虛線軌跡 */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 + i * 0.3 }}
          style={{ position: 'absolute', top: 30 - i * 10, left: '58%', width: 3, height: 3, background: '#fdd835', borderRadius: '50%' }}
        />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// 匯出場景映射
// ═══════════════════════════════════════

export const PHRASAL_SCENES = {
  // Look
  Look_into: LookIntoScene,
  Look_down: LookDownScene,
  Look_up: LookUpScene,
  Look_out: LookOutScene,
  Look_over: LookOverScene,
  Look_back: LookBackScene,
  Look_after: LookAfterScene,
  Look_for: LookForScene,
  Look_forward: LookForwardScene,
  // Turn
  Turn_into: TurnIntoScene,
  Turn_down: TurnDownScene,
  Turn_up: TurnUpScene,
  Turn_out: TurnOutScene,
  Turn_off: TurnOffScene,
  Turn_on: TurnOnScene,
  Turn_around: TurnAroundScene,
  // Bring
  Bring_down: BringDownScene,
  Bring_up: BringUpScene,
  Bring_out: BringOutScene,
  Bring_back: BringBackScene,
  Bring_in: BringInScene,
  Bring_about: BringAboutScene,
  // Run
  Run_into: RunIntoScene,
  Run_down: RunDownScene,
  Run_out: RunOutScene,
  Run_over: RunOverScene,
  Run_through: RunThroughScene,
  Run_away: RunAwayScene,
  Run_across: RunAcrossScene,
  // Get
  Get_into: GetIntoScene,
  Get_down: GetDownScene,
  Get_up: GetUpScene,
  Get_out: GetOutScene,
  Get_over: GetOverScene,
  Get_through: GetThroughScene,
  Get_along: GetAlongScene,
  Get_back: GetBackScene,
  Get_away: GetAwayScene,
  Get_on: GetOnScene,
  Get_off: GetOffScene,
  // Break
  Break_into: BreakIntoScene,
  Break_down: BreakDownScene,
  Break_up: BreakUpScene,
  Break_out: BreakOutScene,
  Break_through: BreakThroughScene,
  Break_even: BreakEvenScene,
  // Go
  Go_down: GoDownScene,
  Go_up: GoUpScene,
  Go_out: GoOutScene,
  Go_over: GoOverScene,
  Go_through: GoThroughScene,
  Go_on: GoOnScene,
  Go_back: GoBackScene,
  Go_off: GoOffScene,
  Go_ahead: GoAheadScene,
  Go_for: GoForScene,
  Go_with: GoWithScene,
  // Set
  Set_up: SetUpScene,
  Set_out: SetOutScene,
  Set_off: SetOffScene,
  Set_back: SetBackScene,
  Set_aside: SetAsideScene,
  // Take
  Take_off: TakeOffScene,
  Take_on: TakeOnScene,
  Take_up: TakeUpScene,
  Take_over: TakeOverScene,
  Take_out: TakeOutScene,
  Take_in: TakeInScene,
  Take_back: TakeBackScene,
  Take_down: TakeDownScene,
  Take_away: TakeAwayScene,
  // Put
  Put_on: PutOnScene,
  Put_off: PutOffScene,
  Put_up: PutUpScene,
  Put_down: PutDownScene,
  Put_out: PutOutScene,
  Put_away: PutAwayScene,
  Put_in: PutInScene,
  Put_together: PutTogetherScene,
  // Come
  Come_up: ComeUpScene,
  Come_down: ComeDownScene,
  Come_in: ComeInScene,
  Come_out: ComeOutScene,
  Come_back: ComeBackScene,
  Come_across: ComeAcrossScene,
  Come_along: ComeAlongScene,
  Come_over: ComeOverScene,
  // Give
  Give_up: GiveUpScene,
  Give_in: GiveInScene,
  Give_out: GiveOutScene,
  Give_away: GiveAwayScene,
  Give_back: GiveBackScene,
  // Pick
  Pick_up: PickUpScene,
  Pick_out: PickOutScene,
  Pick_on: PickOnScene,
  // Hold
  Hold_on: HoldOnScene,
  Hold_up: HoldUpScene,
  Hold_back: HoldBackScene,
  // Make
  Make_up: MakeUpScene,
  Make_out: MakeOutScene,
  // Fall
  Fall_apart: FallApartScene,
  Fall_behind: FallBehindScene,
  Fall_for: FallForScene,
  Fall_through: FallThroughScene,
  // Keep
  Keep_up: KeepUpScene,
  Keep_on: KeepOnScene,
  Keep_out: KeepOutScene,
  // Hang
  Hang_out: HangOutScene,
  Hang_up: HangUpScene,
  Hang_on: HangOnScene,
  // Cut
  Cut_off: CutOffScene,
  Cut_out: CutOutScene,
  Cut_down: CutDownScene,
  // Work
  Work_out: WorkOutScene,
  Work_on: WorkOnScene,
  // Find / Figure / Show / Check / End / Catch / Point
  Find_out: FindOutScene2,
  Figure_out: FigureOutScene2,
  Show_up: ShowUpScene2,
  Show_off: ShowOffScene2,
  Check_out: CheckOutScene2,
  Check_in: CheckInScene2,
  End_up: EndUpScene2,
  Catch_up: CatchUpScene2,
  Point_out: PointOutScene2,
  // Throw
  Throw_away: ThrowAwayScene2,
  Throw_out: ThrowOutScene2,
  Throw_up: ThrowUpScene2,
  // Stand
  Stand_out: StandOutScene2,
  Stand_up: StandUpScene,
  Stand_for: StandForScene2,
  Stand_by: StandByScene,
  // Sign / Shut / Drop / Pull / Clean / Wrap
  Sign_up: SignUpScene2,
  Sign_in: SignInScene,
  Sign_out: SignOutScene,
  Sign_off: SignOffScene,
  Shut_down: ShutDownScene2,
  Shut_up: ShutUpScene,
  Drop_out: DropOutScene2,
  Drop_off: DropOffScene,
  Drop_by: DropByScene,
  Pull_off: PullOffScene2,
  Pull_out: PullOutScene,
  Pull_over: PullOverScene,
  Clean_up: CleanUpScene2,
  Wrap_up: WrapUpScene2,
  // Burn / Calm / Pay / Grow / Wake / Move / Blow / Sort / Mess / Freak / Back / Call / Fill / Roll / Let / Kick / Reach / Lay / Pass
  Burn_out: BurnOutScene2,
  Calm_down: CalmDownScene2,
  Pay_off: PayOffScene2,
  Grow_up: GrowUpScene,
  Wake_up: WakeUpScene,
  Move_on: MoveOnScene,
  Blow_up: BlowUpScene,
  Blow_off: BlowOffScene,
  Sort_out: SortOutScene,
  Mess_up: MessUpScene,
  Freak_out: FreakOutScene,
  Back_up: BackUpScene,
  Call_off: CallOffScene,
  Call_back: CallBackScene,
  Fill_out: FillOutScene,
  Roll_out: RollOutScene,
  Let_down: LetDownScene,
  Kick_off: KickOffScene,
  Reach_out: ReachOutScene,
  Lay_off: LayOffScene,
  Pass_out: PassOutScene,
  Pass_up: PassUpScene,
  // Carry
  Carry_on: CarryOnScene,
  Carry_out: CarryOutScene,
};
