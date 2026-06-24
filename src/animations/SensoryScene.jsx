import { motion } from 'framer-motion';

// ════════════════════════════════════════════════════════
// 感受參數動畫場景 — 用認知語言學畫面具象化時間/頻率概念
// ════════════════════════════════════════════════════════

const S = {
  position: 'absolute', inset: 0,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  background: '#fff',
};

// ── already：時間軸 + 箭頭已越過一條線 ──
function AlreadyScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 時間軸 */}
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 臨界線 */}
        <line x1="120" y1="18" x2="120" y2="62" stroke="#c62828" strokeWidth="2" strokeDasharray="4 3" />
        <text x="120" y="13" textAnchor="middle" fontSize="9" fill="#c62828">臨界點</text>
        {/* 「現在」標記 */}
        <text x="190" y="55" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        <line x1="190" y1="34" x2="190" y2="46" stroke="#888" strokeWidth="1.5" />
        {/* 移動中的球：從左邊越過臨界線 */}
        <motion.circle
          cx={0} cy={40} r={8}
          fill="#1565c0"
          animate={{ cx: [30, 175] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', repeatDelay: 0.6 }}
        />
        {/* 尾跡 */}
        <motion.rect
          x={0} y={36} height={8} rx={4}
          fill="rgba(21,101,192,0.15)"
          animate={{ x: [30, 55], width: [0, 120] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', repeatDelay: 0.6 }}
        />
        {/* 已完成打勾 */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.65, 0.75, 0.9, 1] }}
        >
          <circle cx="160" cy="28" r="9" fill="#4caf50" />
          <path d="M 155 28 L 159 32 L 165 24" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

// ── yet：朝向期待線但還沒抵達 ──
function YetScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 期待線 */}
        <line x1="170" y1="18" x2="170" y2="62" stroke="#6a1b9a" strokeWidth="2" strokeDasharray="4 3" />
        <text x="170" y="13" textAnchor="middle" fontSize="9" fill="#6a1b9a">期待點</text>
        {/* 現在標記 */}
        <text x="30" y="55" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        <line x1="30" y1="34" x2="30" y2="46" stroke="#888" strokeWidth="1.5" />
        {/* 球在期待線前面晃動，但過不去 */}
        <motion.circle
          cx={0} cy={40} r={8}
          fill="#6a1b9a"
          animate={{ cx: [50, 145, 130] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: [0.25, 0.46, 0.45, 0.94], repeatDelay: 0.5 }}
        />
        {/* 問號 */}
        <motion.text
          x="170" y="75" textAnchor="middle" fontSize="12" fill="#6a1b9a"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
        >?</motion.text>
      </svg>
    </div>
  );
}

// ── still：畫面從左延伸到右，顏色不變 ──
function StillScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 時間軸 */}
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 過去標 */}
        <text x="20" y="30" fontSize="9" fill="#888">過去</text>
        <text x="185" y="30" fontSize="9" fill="#888">現在</text>
        {/* 持續色帶 — 從過去滿到現在 */}
        <motion.rect
          x="30" y="34" height="12" rx="6"
          fill="rgba(0,105,92,0.25)"
          animate={{ width: [0, 160] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.8 }}
        />
        {/* 核心圓靜止不動 */}
        <motion.circle
          cx={110} cy={40} r={10}
          fill="#00695c"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 釘住符號 */}
        <motion.g animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
          <line x1="110" y1="18" x2="110" y2="26" stroke="#00695c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="110" cy="16" r="4" fill="#00695c" />
        </motion.g>
      </svg>
    </div>
  );
}

// ── just：極近的過去點，緊貼現在 ──
function JustScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 現在線 */}
        <line x1="170" y1="20" x2="170" y2="60" stroke="#e65100" strokeWidth="2" />
        <text x="170" y="16" textAnchor="middle" fontSize="9" fill="#e65100">現在</text>
        {/* just 的點——靠近現在的左邊很近的地方 */}
        <motion.circle
          cx={148} cy={40} r={9}
          fill="#e65100"
          animate={{ cx: [50, 148], opacity: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
        />
        {/* 尾跡 */}
        <motion.rect
          x={0} y={36} height={8} rx={4}
          fill="rgba(230,81,0,0.12)"
          animate={{ x: [50, 80], width: [0, 68] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.2, ease: 'easeOut' }}
        />
        {/* 箭頭靠近標示 */}
        <motion.text
          x="148" y="65" textAnchor="middle" fontSize="9" fill="#e65100"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 2.7, repeat: Infinity, times: [0, 0.5, 0.65, 0.85, 1] }}
        >just!</motion.text>
      </svg>
    </div>
  );
}

// ── soon：前方不遠處有個靠近的點 ──
function SoonScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 現在 */}
        <line x1="50" y1="22" x2="50" y2="58" stroke="#888" strokeWidth="1.5" />
        <text x="50" y="18" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        {/* soon 目標點 */}
        <motion.circle
          cx={130} cy={40} r={9}
          fill="#f57f17"
          animate={{ cx: [190, 130], opacity: [0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        />
        {/* 靠近的箭頭 */}
        <motion.g
          animate={{ x: [40, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        >
          <polygon points="75,36 90,40 75,44" fill="#f57f17" opacity="0.7" />
        </motion.g>
        <text x="130" y="68" textAnchor="middle" fontSize="9" fill="#f57f17">快到了</text>
      </svg>
    </div>
  );
}

// ── recently：緊貼現在的一段時間帶 ──
function RecentlyScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        <line x1="185" y1="22" x2="185" y2="58" stroke="#888" strokeWidth="1.5" />
        <text x="185" y="18" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        {/* 時間帶（模糊的一段） */}
        <motion.rect
          x="90" y="30" width="95" height="20" rx="10"
          fill="rgba(74,39,160,0.18)"
          stroke="#4527a0"
          strokeWidth="1.5"
          strokeDasharray="5 3"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="137" y="44" textAnchor="middle" fontSize="9" fill="#4527a0">recently</text>
        {/* 幾個散點 */}
        {[105, 125, 150, 168].map((cx, i) => (
          <motion.circle
            key={i} cx={cx} cy={40} r={4} fill="#4527a0"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, repeatDelay: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
}

// ── eventually：很長的時間軸，最後才到終點 ──
function EventuallyScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 障礙物 */}
        {[60, 100, 140].map((x, i) => (
          <rect key={i} x={x - 4} y={30} width={8} height={20} rx={2} fill="#ffcc02" opacity="0.8" />
        ))}
        {/* 旗標終點 */}
        <line x1="190" y1="20" x2="190" y2="55" stroke="#1b5e20" strokeWidth="2" />
        <polygon points="190,20 210,28 190,36" fill="#1b5e20" />
        {/* 球慢慢前進，遇到障礙會停一下 */}
        <motion.circle
          cx={0} cy={40} r={8} fill="#388e3c"
          animate={{ cx: [18, 50, 50, 75, 80, 90, 90, 115, 118, 130, 130, 185] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.15, 0.25, 0.35, 0.4, 0.48, 0.55, 0.65, 0.7, 0.78, 0.85, 1],
            ease: 'easeInOut',
            repeatDelay: 0.8,
          }}
        />
        {/* 終點慶祝 */}
        <motion.text
          x="190" y="72" textAnchor="middle" fontSize="11"
          animate={{ opacity: [0, 0, 0, 0, 1, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, times: [0, 0.7, 0.75, 0.88, 0.94, 1] }}
        >🎉</motion.text>
      </svg>
    </div>
  );
}

// ── always：時間軸完全填滿 ──
function AlwaysScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <text x="15" y="26" fontSize="9" fill="#888">過去</text>
        <text x="183" y="26" fontSize="9" fill="#888">未來</text>
        {/* 完全填滿的色帶 */}
        <motion.rect
          x="10" y="32" width="200" height="16" rx="8"
          fill="#c62828"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 每個格子 */}
        {[20, 46, 72, 98, 124, 150, 176, 200].map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={5} fill="#fff"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
        ))}
        <text x="110" y="70" textAnchor="middle" fontSize="10" fill="#c62828" fontWeight="bold">100% — 全部填滿</text>
      </svg>
    </div>
  );
}

// ── never：時間軸空白，球碰到就消失 ──
function NeverScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <text x="15" y="26" fontSize="9" fill="#888">過去</text>
        <text x="183" y="26" fontSize="9" fill="#888">未來</text>
        {/* 空白時間軸 */}
        <rect x="10" y="34" width="200" height="12" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5" />
        {/* X 標記掃過 */}
        <motion.g
          animate={{ x: [-20, 220] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
        >
          <line x1="0" y1="30" x2="16" y2="50" stroke="#37474f" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="30" x2="0" y2="50" stroke="#37474f" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <text x="110" y="70" textAnchor="middle" fontSize="10" fill="#37474f" fontWeight="bold">0% — 完全空白</text>
      </svg>
    </div>
  );
}

// ── often：密度高的點 ──
function OftenScene() {
  const positions = [18, 38, 58, 85, 105, 132, 152, 178, 198];
  const visible =  [ 1,  1,  0,  1,   1,   1,   0,   1,   1];
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {positions.map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={7}
            fill={visible[i] ? '#1565c0' : '#e0e0e0'}
            animate={visible[i] ? { scale: [0.8, 1.2, 0.8] } : { scale: [1, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
          />
        ))}
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#888">●●○●●●○●● ≈ 70%</text>
      </svg>
    </div>
  );
}

// ── sometimes：稀疏散落 ──
function SometimesScene() {
  const positions = [18, 48, 88, 130, 168, 198];
  const visible =  [ 0,  1,  0,   1,   0,   1];
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {positions.map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={7}
            fill={visible[i] ? '#6d4c41' : '#f0f0f0'}
            stroke={visible[i] ? 'none' : '#e0e0e0'}
            animate={visible[i] ? {
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
          />
        ))}
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#888">○●○○●○ ≈ 30-40%</text>
      </svg>
    </div>
  );
}

// ── once in a while：大量空白，只有一個點 ──
function OnceInAWhileScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {/* 空白格子 */}
        {[20, 48, 76, 104, 160, 188].map((x, i) => (
          <circle key={i} cx={x} cy={40} r={6} fill="#f5f5f5" stroke="#e8e8e8" strokeWidth="1" />
        ))}
        {/* 唯一亮起的點 */}
        <motion.circle
          cx={132} cy={40} r={9} fill="#558b2f"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#558b2f">○○○○●○○ ≈ 偶爾</text>
      </svg>
    </div>
  );
}

// ── from time to time：有規律的間隔 ──
function FromTimeToTimeScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {[30, 80, 130, 180].map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={8} fill="#00838f"
            animate={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }}
          />
        ))}
        {/* 節奏弧線 */}
        {[30, 80, 130].map((x, i) => (
          <motion.path
            key={i}
            d={`M ${x + 8} 40 Q ${x + 25} 20 ${x + 42} 40`}
            fill="none" stroke="#00838f" strokeWidth="1.5" strokeDasharray="3 3"
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 + 0.4 }}
          />
        ))}
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#00838f">●⌒●⌒●⌒● 有節奏</text>
      </svg>
    </div>
  );
}

// ── all the time：水龍頭持續流動 ──
function AllTheTimeScene() {
  return (
    <div style={S}>
      <svg width="220" height="90" viewBox="0 0 220 90">
        {/* 水龍頭主體 */}
        <rect x="85" y="10" width="50" height="22" rx="4" fill="#e53935" />
        <rect x="103" y="32" width="14" height="10" rx="2" fill="#b71c1c" />
        {/* 水流 */}
        {[0, 1, 2, 3].map(i => (
          <motion.ellipse
            key={i} cx={110} cy={52 + i * 10} rx={5 - i * 0.8} ry={4}
            fill="rgba(229,57,53,0.25)"
            animate={{ cy: [52 + i * 10, 90 + i * 10], opacity: [0.8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: 'easeIn' }}
          />
        ))}
        {/* 強調標籤 */}
        <motion.text
          x="110" y="8" textAnchor="middle" fontSize="10" fill="#e53935" fontWeight="bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >持續不斷</motion.text>
      </svg>
    </div>
  );
}

// ── right away：發令→立刻衝出 ──
function RightAwayScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 指令方塊 */}
        <motion.rect
          x="8" y="26" width="50" height="28" rx="6"
          fill="#e65100"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <text x="33" y="45" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">GO!</text>
        {/* 動作箭頭 */}
        <motion.g
          animate={{ x: [0, 145] }}
          transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.6, ease: 'easeOut' }}
        >
          <rect x="58" y="36" width="40" height="8" rx="4" fill="#e65100" />
          <polygon points="98,32 110,40 98,48" fill="#e65100" />
        </motion.g>
        {/* 閃電符號 */}
        <motion.text
          x="80" y="22" textAnchor="middle" fontSize="18"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, times: [0, 0.3, 0.7] }}
        >⚡</motion.text>
      </svg>
    </div>
  );
}

// ── right now：手指指著「現在」這個點 ──
function RightNowScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" />
        {/* 現在點 */}
        <motion.circle
          cx={110} cy={40} r={12}
          fill="#d84315"
          animate={{ r: [11, 15, 11], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 脈動環 */}
        <motion.circle
          cx={110} cy={40} r={12}
          fill="none" stroke="#d84315" strokeWidth="2"
          animate={{ r: [12, 28], opacity: [0.7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
        {/* 箭頭指向 */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="110" y1="66" x2="110" y2="56" stroke="#d84315" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="104,58 116,58 110,50" fill="#d84315" />
        </motion.g>
        <text x="110" y="78" textAnchor="middle" fontSize="10" fill="#d84315" fontWeight="bold">就是現在</text>
      </svg>
    </div>
  );
}

// ── all of a sudden：平靜水面爆炸 ──
function AllOfASuddenScene() {
  return (
    <div style={S}>
      <svg width="220" height="90" viewBox="0 0 220 90">
        {/* 平靜水面 */}
        <motion.rect
          x="20" y="52" width="180" height="12" rx="6"
          fill="rgba(21,101,192,0.15)"
          animate={{ scaleX: [1, 0.95, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 爆炸衝擊波 */}
        <motion.circle
          cx={110} cy={50} r={0}
          fill="none" stroke="#6a1b9a" strokeWidth="3"
          animate={{ r: [0, 55], opacity: [1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }}
        />
        <motion.circle
          cx={110} cy={50} r={0}
          fill="none" stroke="#9c27b0" strokeWidth="2"
          animate={{ r: [0, 40], opacity: [0.8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut', delay: 0.15 }}
        />
        {/* 爆炸核心 */}
        <motion.circle
          cx={110} cy={50} r={8}
          fill="#6a1b9a"
          animate={{ scale: [0, 1.5, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.15, 0.3, 0.7] }}
        />
        {/* 驚嘆號 */}
        <motion.text
          x="110" y="30" textAnchor="middle" fontSize="20"
          animate={{ scale: [0, 1.3, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.2, 0.35, 0.7] }}
        >!</motion.text>
      </svg>
    </div>
  );
}

// ── out of nowhere：虛空中冒出 ──
function OutOfNowhereScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 空曠背景 */}
        <rect x="10" y="20" width="200" height="40" rx="8" fill="#f8f8ff" stroke="#e8e8f0" strokeWidth="1" />
        {/* 突然出現的物體 */}
        <motion.circle
          cx={110} cy={40} r={0}
          fill="#1a237e"
          animate={{ r: [0, 18, 16] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: [0.34, 1.56, 0.64, 1] }}
        />
        {/* 出現的震動線 */}
        {[-1, 1].map((dir, i) => (
          <motion.line
            key={i}
            x1={110} y1={40}
            x2={110 + dir * 30} y2={20}
            stroke="#1a237e" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0, 0.7, 0], x2: [110, 110 + dir * 35] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, delay: 0.1 }}
          />
        ))}
        {/* 問號 */}
        <motion.text
          x="110" y="70" textAnchor="middle" fontSize="10" fill="#1a237e"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.4, 0.55, 0.85, 1] }}
        >從哪來的？！</motion.text>
      </svg>
    </div>
  );
}

// ── on purpose：瞄準線箭頭 ──
function OnPurposeScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 腦袋（意圖）框 */}
        <ellipse cx="38" cy="40" rx="24" ry="20" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" />
        <text x="38" y="38" textAnchor="middle" fontSize="9" fill="#1565c0">意圖</text>
        <text x="38" y="52" textAnchor="middle" fontSize="9" fill="#888">🧠</text>
        {/* 瞄準箭頭 */}
        <motion.g
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="62" y1="40" x2="138" y2="40" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="138,34 152,40 138,46" fill="#1565c0" />
        </motion.g>
        {/* 目標 */}
        <circle cx="175" cy="40" r="22" fill="none" stroke="#e0e0e0" strokeWidth="1.5" />
        <circle cx="175" cy="40" r="14" fill="none" stroke="#ef9a9a" strokeWidth="1.5" />
        <circle cx="175" cy="40" r="7" fill="#c62828" />
        <motion.circle
          cx="175" cy="40" r="3" fill="#fff"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x="110" y="74" textAnchor="middle" fontSize="9" fill="#888">有方向→有意圖</text>
      </svg>
    </div>
  );
}

// ── by accident：直線→意外偏折 ──
function ByAccidentScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 預期路徑（虛線） */}
        <line x1="20" y1="35" x2="200" y2="35" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="5 3" />
        <text x="200" y="30" fontSize="9" fill="#888" textAnchor="end">預期</text>
        {/* 偏折路徑 */}
        <motion.path
          d="M 20 35 L 110 35 L 160 65"
          fill="none" stroke="#c62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="160" strokeDashoffset="160"
          animate={{ strokeDashoffset: [160, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
        />
        {/* 球 */}
        <motion.circle
          cx={0} cy={0} r={8} fill="#c62828"
          animate={{
            cx: [20, 110, 160],
            cy: [35, 35, 65],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
        />
        {/* 撞擊點 */}
        <motion.text
          x="110" y="35" textAnchor="middle" fontSize="16"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.55, 0.65, 0.85, 1] }}
        >💥</motion.text>
        <text x="160" y="78" textAnchor="middle" fontSize="9" fill="#c62828">不是計畫中的！</text>
      </svg>
    </div>
  );
}

// ── little by little：顆粒慢慢堆高 ──
function LittleByLittleScene() {
  return (
    <div style={S}>
      <svg width="220" height="90" viewBox="0 0 220 90">
        {/* 容器 */}
        <rect x="75" y="20" width="70" height="58" rx="4" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        {/* 填充液體 */}
        <motion.rect
          x="77" y="76" width="66" height="0" rx="2"
          fill="rgba(46,125,50,0.2)"
          animate={{ height: [0, 54], y: [76, 22] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.5 }}
        />
        {/* 掉落顆粒 */}
        {[0, 1, 2, 3].map(i => (
          <motion.circle
            key={i} cx={110} cy={0} r={4} fill="#2e7d32"
            animate={{ cy: [8, 72], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4, ease: 'easeIn' }}
          />
        ))}
        <text x="110" y="88" textAnchor="middle" fontSize="9" fill="#2e7d32">一點一點地累積</text>
      </svg>
    </div>
  );
}

// ── all at once：多箭頭同時射出 ──
function AllAtOnceScene() {
  const rays = [
    { angle: -70, len: 55 }, { angle: -40, len: 65 }, { angle: 0, len: 70 },
    { angle: 40, len: 65 }, { angle: 70, len: 55 },
  ];
  return (
    <div style={S}>
      <svg width="220" height="90" viewBox="0 0 220 90">
        {/* 中心爆炸點 */}
        <motion.circle
          cx={110} cy={45} r={12}
          fill="#bf360c"
          animate={{ scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {rays.map((r, i) => {
          const rad = (r.angle * Math.PI) / 180;
          const ex = 110 + Math.sin(rad) * r.len;
          const ey = 45 - Math.cos(rad) * r.len;
          return (
            <motion.line
              key={i}
              x1={110} y1={45} x2={ex} y2={ey}
              stroke="#bf360c" strokeWidth="3" strokeLinecap="round"
              animate={{ x2: [110, ex], y2: [45, ey], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
          );
        })}
        <text x="110" y="86" textAnchor="middle" fontSize="9" fill="#bf360c">同時爆發！</text>
      </svg>
    </div>
  );
}

// ── one by one：排隊依序前進 ──
function OneByOneScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 目標框 */}
        <rect x="162" y="22" width="46" height="36" rx="6" fill="#e0f2f1" stroke="#00695c" strokeWidth="2" />
        <text x="185" y="45" textAnchor="middle" fontSize="18">✓</text>
        {/* 等待的球 */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={i} cx={30 + i * 30} cy={40} r={10}
            fill={i === 0 ? '#00695c' : '#b2dfdb'}
            animate={i === 0 ? { cx: [30, 158] } : { cx: [30 + i * 30, 30 + (i - 1) * 30] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: 'easeInOut',
              delay: i === 0 ? 0 : 1.5,
            }}
          />
        ))}
        {/* 箭頭 */}
        <motion.g
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <line x1="115" y1="40" x2="155" y2="40" stroke="#00695c" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points="155,35 165,40 155,45" fill="#00695c" />
        </motion.g>
        <text x="80" y="68" textAnchor="middle" fontSize="9" fill="#00695c">有序地一個一個</text>
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 場景對照表
// ═══════════════════════════════════════════════════════

// ── at first：時間軸最左邊的原點 ──
function AtFirstScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 原點閃光 */}
        <motion.circle
          cx={30} cy={40} r={12} fill="#1565c0"
          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx={30} cy={40} r={12} fill="none" stroke="#1565c0" strokeWidth="2"
          animate={{ r: [12, 26], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <text x="30" y="62" textAnchor="middle" fontSize="9" fill="#1565c0">START</text>
        {/* 之後的變化箭頭 */}
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}>
          <line x1="50" y1="40" x2="160" y2="40" stroke="#bbb" strokeWidth="1.5" strokeDasharray="5 4" />
          <polygon points="160,35 172,40 160,45" fill="#bbb" />
          <text x="130" y="32" fontSize="9" fill="#888">…但後來</text>
        </motion.g>
      </svg>
    </div>
  );
}

// ── so far：從起點量到現在的距離 ──
function SoFarScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 起點 */}
        <circle cx={20} cy={40} r={5} fill="#00695c" />
        <text x="20" y="58" textAnchor="middle" fontSize="9" fill="#00695c">起點</text>
        {/* 現在標記 */}
        <line x1="150" y1="25" x2="150" y2="55" stroke="#00695c" strokeWidth="2" />
        <text x="150" y="20" textAnchor="middle" fontSize="9" fill="#00695c">現在</text>
        {/* 走過的距離 — 雙向括號 */}
        <motion.rect
          x="20" y="36" height="8" rx="4" fill="rgba(0,105,92,0.2)"
          animate={{ width: [0, 130] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.5 }}
        />
        {/* 量尺刻度 */}
        {[50, 80, 110, 140].map((x, i) => (
          <line key={i} x1={x} y1={36} x2={x} y2={44} stroke="#00695c" strokeWidth="1" opacity="0.5" />
        ))}
        <motion.text
          x="85" y="32" textAnchor="middle" fontSize="9" fill="#00695c" fontWeight="bold"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.5, 1] }}
        >so far…</motion.text>
      </svg>
    </div>
  );
}

// ── from now on：現在起向右無限延伸 ──
function FromNowOnScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 過去（灰、虛線） */}
        <line x1="10" y1="40" x2="80" y2="40" stroke="#ddd" strokeWidth="2" strokeDasharray="5 3" />
        {/* 現在切換點 */}
        <line x1="80" y1="22" x2="80" y2="58" stroke="#6a1b9a" strokeWidth="2.5" />
        <text x="80" y="17" textAnchor="middle" fontSize="9" fill="#6a1b9a">現在</text>
        {/* 未來線（彩色、實線、動畫延伸） */}
        <motion.line
          x1="80" y1="40" x2="80" y2="40"
          stroke="#6a1b9a" strokeWidth="3" strokeLinecap="round"
          animate={{ x2: [80, 210] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        />
        {/* 箭頭 */}
        <motion.polygon
          points="200,35 215,40 200,45" fill="#6a1b9a"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        />
        <text x="155" y="62" textAnchor="middle" fontSize="9" fill="#6a1b9a">從今以後…</text>
      </svg>
    </div>
  );
}

// ── in time：截止線前驚險抵達 ──
function InTimeScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 截止線（紅色） */}
        <line x1="170" y1="18" x2="170" y2="62" stroke="#c62828" strokeWidth="2.5" />
        <text x="170" y="14" textAnchor="middle" fontSize="9" fill="#c62828">截止！</text>
        {/* 球快速飛奔 */}
        <motion.circle
          cx={0} cy={40} r={9} fill="#e65100"
          animate={{ cx: [20, 158] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* 尾跡 */}
        <motion.rect
          x={0} y={36} height={8} rx={4} fill="rgba(230,81,0,0.15)"
          animate={{ x: [20, 80], width: [0, 78] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        {/* 剛好！ */}
        <motion.text
          x="158" y="65" textAnchor="middle" fontSize="10" fill="#e65100" fontWeight="bold"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.56, 0.68, 0.85, 1] }}
        >及時！</motion.text>
      </svg>
    </div>
  );
}

// ── for good：門關上，背後路消失 ──
function ForGoodScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 來時的路 */}
        <line x1="10" y1="40" x2="120" y2="40" stroke="#e0e0e0" strokeWidth="2.5" strokeLinecap="round" />
        {/* 門框 */}
        <rect x="118" y="20" width="24" height="40" rx="3" fill="none" stroke="#37474f" strokeWidth="2" />
        {/* 門板（關閉動畫） */}
        <motion.rect
          x="118" y="20" width="24" height="40" rx="3"
          fill="#455a64"
          animate={{ scaleX: [0, 1] }}
          style={{ transformOrigin: '118px 40px' }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeIn' }}
        />
        {/* X 符號 */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 2.7, repeat: Infinity, times: [0, 0.42, 0.55, 0.85, 1] }}
        >
          <line x1="122" y1="32" x2="138" y2="48" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="138" y1="32" x2="122" y2="48" stroke="#ef5350" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        {/* 之後沒有路 */}
        <line x1="148" y1="40" x2="200" y2="40" stroke="#f5f5f5" strokeWidth="2" strokeDasharray="4 6" />
        <text x="175" y="30" textAnchor="middle" fontSize="9" fill="#bbb">沒有回頭路</text>
      </svg>
    </div>
  );
}

// ── every now and then：散落但有一點節奏 ──
function EveryNowAndThenScene() {
  const dots = [20, 65, 95, 148, 178];
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {dots.map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={7} fill="#6d4c41"
            animate={{ scale: [0.5, 1.3, 1], opacity: [0, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.45, ease: 'easeOut' }}
          />
        ))}
        <text x="110" y="68" textAnchor="middle" fontSize="9" fill="#6d4c41">散落、偶爾</text>
      </svg>
    </div>
  );
}

// ── for once：難得一次特別的亮點 ──
function ForOnceScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {/* 幾乎都是空的 */}
        {[25, 55, 85, 145, 175, 205].map((x, i) => (
          <circle key={i} cx={x} cy={40} r={5} fill="#f0f0f0" stroke="#e0e0e0" strokeWidth="1" />
        ))}
        {/* 唯一特別的點，大而亮 */}
        <motion.circle
          cx={115} cy={40} r={12} fill="#4527a0"
          animate={{ scale: [0.8, 1.5, 1], opacity: [0.6, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 星光 */}
        {[-35, -15, 15, 35].map((dx, i) => (
          <motion.line
            key={i} x1={115} y1={40} x2={115 + dx} y2={40 + (i % 2 === 0 ? -22 : 22)}
            stroke="#4527a0" strokeWidth="1.5"
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        <text x="115" y="68" textAnchor="middle" fontSize="9" fill="#4527a0" fontWeight="bold">就這一次！</text>
      </svg>
    </div>
  );
}

// ── more often than not：天平偏向發生那側 ──
function MoreOftenThanNotScene() {
  return (
    <div style={S}>
      <svg width="220" height="90" viewBox="0 0 220 90">
        {/* 天平支點 */}
        <line x1="110" y1="20" x2="110" y2="50" stroke="#888" strokeWidth="2" />
        <polygon points="105,50 115,50 110,58" fill="#888" />
        {/* 天平橫桿（向左傾=發生側） */}
        <motion.g
          animate={{ rotate: [-12, -12] }}
          style={{ transformOrigin: '110px 36px' }}
        >
          <line x1="40" y1="36" x2="180" y2="36" stroke="#c62828" strokeWidth="3" strokeLinecap="round" />
          {/* 左側（發生） */}
          <rect x="25" y="38" width="38" height="22" rx="4" fill="rgba(198,40,40,0.15)" stroke="#c62828" strokeWidth="1.5" />
          <text x="44" y="54" textAnchor="middle" fontSize="10" fill="#c62828" fontWeight="bold">發生</text>
          {/* 右側（不發生） */}
          <rect x="157" y="28" width="36" height="18" rx="4" fill="rgba(200,200,200,0.3)" stroke="#bbb" strokeWidth="1.5" />
          <text x="175" y="41" textAnchor="middle" fontSize="9" fill="#999">沒有</text>
        </motion.g>
        <text x="110" y="82" textAnchor="middle" fontSize="9" fill="#c62828">發生 &gt; 50%</text>
      </svg>
    </div>
  );
}

// ── in no time：時間被壓縮到零 ──
function InNoTimeScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 時間軸 */}
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 現在 */}
        <line x1="40" y1="24" x2="40" y2="56" stroke="#888" strokeWidth="1.5" />
        <text x="40" y="20" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        {/* 完成點 — 緊貼現在 */}
        <motion.circle
          cx={68} cy={40} r={10} fill="#f57f17"
          animate={{ cx: [180, 68], opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.8, ease: 'easeOut' }}
        />
        {/* 壓縮符號 */}
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, times: [0, 0.4, 1] }}
        >
          <line x1="42" y1="40" x2="58" y2="40" stroke="#f57f17" strokeWidth="3" strokeLinecap="round" />
          <text x="54" y="62" textAnchor="middle" fontSize="9" fill="#f57f17" fontWeight="bold">幾乎為零！</text>
        </motion.g>
        {/* 閃電 */}
        <motion.text
          x="110" y="28" textAnchor="middle" fontSize="20"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, times: [0, 0.35, 0.8] }}
        >⚡</motion.text>
      </svg>
    </div>
  );
}

// ── at all：空量表，強調零 ──
function AtAllScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 量表外框 */}
        <rect x="20" y="28" width="180" height="24" rx="12" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="2" />
        {/* 量表格子 — 全空 */}
        {[38, 62, 86, 110, 134, 158, 182].map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={7}
            fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
        {/* NOT 大字 */}
        <motion.text
          x="110" y="18" textAnchor="middle" fontSize="11" fill="#37474f" fontWeight="bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >NOT AT ALL — 完全沒有</motion.text>
        {/* 大叉 */}
        <motion.g
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <line x1="88" y1="56" x2="132" y2="72" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
          <line x1="132" y1="56" x2="88" y2="72" stroke="#37474f" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

// ── back and forth：鐘擺來回 ──
function BackAndForthScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 左右端點 */}
        <circle cx={22} cy={48} r={8} fill="#e0e0e0" />
        <text x="22" y="68" textAnchor="middle" fontSize="9" fill="#888">A</text>
        <circle cx={198} cy={48} r={8} fill="#e0e0e0" />
        <text x="198" y="68" textAnchor="middle" fontSize="9" fill="#888">B</text>
        {/* 路徑軌跡 */}
        <line x1="30" y1="48" x2="190" y2="48" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="5 3" />
        {/* 鐘擺球 */}
        <motion.circle
          cx={0} cy={48} r={12} fill="#1565c0"
          animate={{ cx: [30, 190, 30] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 方向箭頭（交替顯示） */}
        <motion.g animate={{ opacity: [1, 1, 0, 0] }} transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.5, 1] }}>
          <polygon points="170,42 185,48 170,54" fill="#1565c0" opacity="0.5" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 2.5, repeat: Infinity, times: [0, 0.4, 0.5, 1] }}>
          <polygon points="50,42 35,48 50,54" fill="#1565c0" opacity="0.5" />
        </motion.g>
        <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#888">來——回——來——回</text>
      </svg>
    </div>
  );
}

// ── from scratch：空白畫布，一點點建立 ──
function FromScratchScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 空白畫布 */}
        <rect x="60" y="10" width="100" height="65" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="2" />
        {/* 逐行填入 */}
        {[20, 32, 44, 56].map((y, i) => (
          <motion.rect
            key={i}
            x="68" y={y} height="8" rx="3"
            fill={`hsl(${120 + i * 15}, 50%, 55%)`}
            animate={{ width: [0, 84] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut', repeatDelay: 2.5 - i * 0.5 }}
          />
        ))}
        {/* 鉛筆圖示 */}
        <motion.g
          animate={{ x: [0, 10, 0], y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="152" y="5" width="8" height="22" rx="2" fill="#f9a825" transform="rotate(30 156 16)" />
          <polygon points="152,25 160,25 156,32" fill="#795548" transform="rotate(30 156 16)" />
        </motion.g>
        <text x="110" y="82" textAnchor="middle" fontSize="9" fill="#558b2f">從零開始建立</text>
      </svg>
    </div>
  );
}

// ── in a row：緊密相連的點串 ──
function InARowScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="2" />
        {/* 緊密相連的點，依序亮起 */}
        {[35, 65, 95, 125, 155, 185].map((x, i) => (
          <motion.circle
            key={i} cx={x} cy={40} r={9} fill="#00838f"
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.22, ease: 'easeOut', repeatDelay: 0.8 }}
          />
        ))}
        {/* 連接線 */}
        {[35, 65, 95, 125, 155].map((x, i) => (
          <motion.line
            key={i} x1={x + 9} y1={40} x2={x + 21} y2={40}
            stroke="#00838f" strokeWidth="3"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: (i + 1) * 0.22, ease: 'easeOut', repeatDelay: 0.8 }}
          />
        ))}
        <text x="110" y="66" textAnchor="middle" fontSize="9" fill="#00838f" fontWeight="bold">●—●—●—●—● 連續！</text>
      </svg>
    </div>
  );
}

// ── all the way：從起點到終點的完整路徑 ──
function AllTheWayScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 路徑 */}
        <motion.line
          x1="20" y1="40" x2="20" y2="40"
          stroke="#4527a0" strokeWidth="4" strokeLinecap="round"
          animate={{ x2: [20, 196] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.5 }}
        />
        {/* 起點 */}
        <circle cx={20} cy={40} r={7} fill="#4527a0" />
        <text x="20" y="58" textAnchor="middle" fontSize="9" fill="#4527a0">START</text>
        {/* 終點旗 */}
        <line x1="200" y1="18" x2="200" y2="55" stroke="#4527a0" strokeWidth="2" />
        <motion.polygon
          points="200,18 218,26 200,34" fill="#4527a0"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x="200" y="68" textAnchor="middle" fontSize="9" fill="#4527a0">END</text>
        {/* 球 */}
        <motion.circle
          cx={0} cy={40} r={8} fill="#7c4dff"
          animate={{ cx: [20, 196] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.5 }}
        />
        <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#4527a0">一路到底，不停歇</text>
      </svg>
    </div>
  );
}

// ── in a hurry：快轉中，步伐凌亂 ──
function InAHurryScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 腳步軌跡（左右交錯快速） */}
        {[20, 50, 80, 110, 140, 170, 200].map((x, i) => (
          <motion.ellipse
            key={i} cx={x} cy={i % 2 === 0 ? 52 : 28} rx={9} ry={5}
            fill={i % 2 === 0 ? '#e65100' : '#ff8f00'}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.15, ease: 'easeOut' }}
          />
        ))}
        {/* 快轉符號 */}
        <motion.text
          x="110" y="20" textAnchor="middle" fontSize="16"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >⏩</motion.text>
        <text x="110" y="72" textAnchor="middle" fontSize="9" fill="#e65100">速度超快，細節全跳過</text>
      </svg>
    </div>
  );
}

// ── by yourself：一個人在場景中 ──
function ByYourselfScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 場景框 */}
        <rect x="20" y="18" width="180" height="44" rx="8" fill="#f9f9f9" stroke="#e0e0e0" strokeWidth="1.5" />
        {/* 唯一的人形 */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          style={{ transformOrigin: '110px 40px' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx={110} cy={30} r={8} fill="#00695c" />
          <line x1={110} y1={38} x2={110} y2={55} stroke="#00695c" strokeWidth="3" strokeLinecap="round" />
          <line x1={110} y1={44} x2={100} y2={52} stroke="#00695c" strokeWidth="2.5" strokeLinecap="round" />
          <line x1={110} y1={44} x2={120} y2={52} stroke="#00695c" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        {/* 空曠的周圍（無其他人） */}
        {[55, 165].map((x, i) => (
          <motion.g key={i} animate={{ opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 2, repeat: Infinity }}>
            <circle cx={x} cy={30} r={7} fill="none" stroke="#e0e0e0" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1={x} y1={37} x2={x} y2={52} stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
          </motion.g>
        ))}
        <text x="110" y="72" textAnchor="middle" fontSize="9" fill="#00695c">只有你一個人</text>
      </svg>
    </div>
  );
}

// ── for now：時間軸上的暫停鍵 ──
function ForNowScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 現在點有個暫停符號 */}
        <motion.g
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          style={{ transformOrigin: '110px 40px' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx={110} cy={40} r={18} fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" />
          {/* 暫停符號 ▐▐ */}
          <rect x="103" y="31" width="5" height="18" rx="2" fill="#1565c0" />
          <rect x="112" y="31" width="5" height="18" rx="2" fill="#1565c0" />
        </motion.g>
        {/* 後面虛線（未來未確定） */}
        <line x1="133" y1="40" x2="205" y2="40" stroke="#ccc" strokeWidth="2" strokeDasharray="5 5" />
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#1565c0">暫時如此，之後再說</text>
      </svg>
    </div>
  );
}

// ── all along：整條時間軸填滿同色 ──
function AllAlongScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <text x="15" y="26" fontSize="9" fill="#888">過去</text>
        <text x="190" y="26" fontSize="9" fill="#888">現在</text>
        {/* 整條時間軸都有顏色（一直都是這樣） */}
        <rect x="15" y="34" width="195" height="12" rx="6" fill="rgba(78,52,46,0.2)" stroke="#4e342e" strokeWidth="1.5" />
        {/* 突然「發現」的閃光 */}
        <motion.g
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.6, 0.72, 0.88, 1] }}
        >
          <circle cx={195} cy={40} r={14} fill="#fff9c4" stroke="#f9a825" strokeWidth="2" />
          <text x="195" y="45" textAnchor="middle" fontSize="13">💡</text>
        </motion.g>
        <text x="90" y="62" textAnchor="middle" fontSize="9" fill="#4e342e">原來一直都是這樣！</text>
      </svg>
    </div>
  );
}

// ── sooner or later：前方必然的點，早晚會到 ──
function SoonerOrLaterScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        <line x1="10" y1="40" x2="210" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="24" x2="40" y2="56" stroke="#888" strokeWidth="1.5" />
        <text x="40" y="20" textAnchor="middle" fontSize="9" fill="#888">現在</text>
        {/* 必然出現的點（位置在前方某處，左右游移） */}
        <motion.circle
          cx={0} cy={40} r={11} fill="#6a1b9a"
          animate={{ cx: [120, 165, 140, 180] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
        />
        <motion.text
          x={0} y={62} textAnchor="middle" fontSize="9" fill="#6a1b9a"
          animate={{ x: [120, 165, 140, 180], opacity: [0.7, 1, 0.7, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
        >必然…</motion.text>
        <text x="160" y="20" textAnchor="middle" fontSize="9" fill="#6a1b9a">遲早會到！</text>
      </svg>
    </div>
  );
}

// ── in the long run：短期起伏，長期趨勢清晰 ──
function InTheLongRunScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 短期起伏折線 */}
        <motion.path
          d="M 15 50 L 45 30 L 75 55 L 105 35 L 135 48 L 165 25 L 195 38"
          fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="240" strokeDashoffset="240"
          animate={{ strokeDashoffset: [240, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
        />
        {/* 長期趨勢線（向上） */}
        <motion.line
          x1="15" y1="55" x2="15" y2="55"
          stroke="#4caf50" strokeWidth="3" strokeLinecap="round"
          strokeDasharray="5 3"
          animate={{ x2: [15, 200], y2: [55, 22] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: 'linear' }}
        />
        <text x="15" y="75" fontSize="9" fill="#888">短期起伏</text>
        <text x="150" y="14" fontSize="9" fill="#4caf50">長期趨勢↗</text>
      </svg>
    </div>
  );
}

// ── on and off：燈泡忽明忽滅 ──
function OnAndOffScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 燈泡主體 */}
        <ellipse cx={110} cy={32} rx={18} ry={20} fill="#fff9c4" stroke="#f9a825" strokeWidth="2" />
        <rect x="104" y="50" width="12" height="8" rx="2" fill="#888" />
        <rect x="106" y="58" width="8" height="4" rx="1" fill="#666" />
        {/* 閃爍效果 */}
        <motion.ellipse
          cx={110} cy={32} rx={18} ry={20}
          fill="#ffee58"
          animate={{ opacity: [1, 0, 1, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.35, 0.55, 0.65, 0.85, 1] }}
        />
        {/* 光芒 */}
        <motion.g
          animate={{ opacity: [1, 0, 1, 0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.35, 0.55, 0.65, 0.85, 1] }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = deg * Math.PI / 180;
            return <line key={i} x1={110 + Math.cos(rad) * 22} y1={32 + Math.sin(rad) * 22}
              x2={110 + Math.cos(rad) * 30} y2={32 + Math.sin(rad) * 30}
              stroke="#f9a825" strokeWidth="1.5" strokeLinecap="round" />;
          })}
        </motion.g>
        <text x="110" y="76" textAnchor="middle" fontSize="9" fill="#f57f17">忽明忽滅，不穩定</text>
      </svg>
    </div>
  );
}

// ── over and over：同樣動作循環播放 ──
function OverAndOverScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 循環箭頭 */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          style={{ transformOrigin: '110px 38px' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <path d="M 110 14 A 24 24 0 1 1 86 38" fill="none" stroke="#c62828" strokeWidth="3" strokeLinecap="round" />
          <polygon points="82,30 86,42 94,35" fill="#c62828" />
        </motion.g>
        {/* 重複符號 */}
        <motion.text
          x="110" y="44" textAnchor="middle" fontSize="14" fill="#c62828" fontWeight="bold"
          animate={{ scale: [0.9, 1.2, 0.9] }}
          style={{ transformOrigin: '110px 44px' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >又一次</motion.text>
        <text x="110" y="72" textAnchor="middle" fontSize="9" fill="#c62828">一遍又一遍，停不下來</text>
      </svg>
    </div>
  );
}

// ── on the spot：地點標記 + 立即回應 ──
function OnTheSpotScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 地點 pin */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx={110} cy={18} rx={14} ry={14} fill="#e65100" />
          <polygon points="100,26 120,26 110,42" fill="#e65100" />
          <circle cx={110} cy={18} r={6} fill="#fff" />
        </motion.g>
        {/* 脈動圈 */}
        <motion.circle
          cx={110} cy={42} r={4} fill="none" stroke="#e65100" strokeWidth="2"
          animate={{ r: [4, 22], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
        {/* 立刻閃電 */}
        <motion.text
          x="148" y="30" fontSize="18"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        >⚡</motion.text>
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#e65100">就在這裡，當場！</text>
      </svg>
    </div>
  );
}

// ── more or less：目標值附近的模糊帶 ──
function MoreOrLessScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 量表背景 */}
        <rect x="20" y="34" width="180" height="12" rx="6" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5" />
        {/* 目標值 */}
        <line x1="110" y1="22" x2="110" y2="58" stroke="#00838f" strokeWidth="2" strokeDasharray="3 3" />
        <text x="110" y="18" textAnchor="middle" fontSize="9" fill="#00838f">目標</text>
        {/* 模糊帶 */}
        <motion.rect
          x="88" y="34" width="44" height="12" rx="6"
          fill="rgba(0,131,143,0.25)"
          animate={{ x: [88, 84, 94, 88], width: [44, 52, 36, 44] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 指針在附近游移 */}
        <motion.line
          x1={0} y1={24} x2={0} y2={46}
          stroke="#00838f" strokeWidth="2.5"
          animate={{ x1: [100, 90, 118, 100], x2: [100, 90, 118, 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="110" y="70" textAnchor="middle" fontSize="9" fill="#00838f">不精確，但差不多</text>
      </svg>
    </div>
  );
}

// ── at least：量表底線，確保最低 ──
function AtLeastScene() {
  return (
    <div style={S}>
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* 量表 */}
        <rect x="30" y="20" width="16" height="44" rx="4" fill="#f5f5f5" stroke="#e0e0e0" strokeWidth="1.5" />
        {/* 填充（從底部到底線） */}
        <motion.rect
          x="32" y="42" width="12" height="20" rx="2"
          fill="rgba(46,125,50,0.3)"
          animate={{ height: [0, 20], y: [62, 42] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        />
        {/* 底線標記 */}
        <line x1="22" y1="42" x2="56" y2="42" stroke="#2e7d32" strokeWidth="2.5" />
        <text x="62" y="46" fontSize="9" fill="#2e7d32" fontWeight="bold">← 底線</text>
        {/* 箭頭指向底線 */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="38" y1="10" x2="38" y2="22" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
          <polygon points="32,20 44,20 38,28" fill="#2e7d32" />
        </motion.g>
        <text x="130" y="44" textAnchor="middle" fontSize="10" fill="#2e7d32" fontWeight="bold">最少要到這裡</text>
        <text x="110" y="72" textAnchor="middle" fontSize="9" fill="#2e7d32">At least = 保障底線</text>
      </svg>
    </div>
  );
}

// ── around the corner：轉角就到了 ──
function AroundTheCornerScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 道路 — L 型轉角 */}
        <line x1="20" y1="45" x2="120" y2="45" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="45" x2="120" y2="10" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" />
        {/* 轉角弧線 */}
        <path d="M 108 45 Q 120 45 120 33" fill="none" stroke="#5c6bc0" strokeWidth="2" strokeDasharray="4 3" />
        {/* 行走的球 */}
        <motion.circle
          cx={0} cy={0} r={9} fill="#5c6bc0"
          animate={{ cx: [28, 115, 120, 120], cy: [45, 45, 40, 15] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
        />
        {/* 轉角後的目標（星星） */}
        <motion.text
          x="140" y="18" fontSize="18"
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.5, 0.7, 0.78, 0.9, 1] }}
        >⭐</motion.text>
        {/* 快到了！ */}
        <motion.text
          x="165" y="40" fontSize="9" fill="#5c6bc0"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.65, 0.75, 0.9, 1] }}
        >快到了！</motion.text>
        <text x="70" y="70" textAnchor="middle" fontSize="9" fill="#888">轉個彎就看到了</text>
      </svg>
    </div>
  );
}

// ── out of town：離開城市圓圈 ──
function OutOfTownScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 城市圓圈 */}
        <circle cx={70} cy={42} r={32} fill="#f5f5f5" stroke="#bbb" strokeWidth="2" strokeDasharray="5 3" />
        <text x="70" y="46" textAnchor="middle" fontSize="10" fill="#888">🏠 城市</text>
        {/* 離開的軌跡 */}
        <motion.line
          x1="102" y1="42" x2="102" y2="42"
          stroke="#5c6bc0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3"
          animate={{ x2: [102, 195] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        />
        {/* 移動的人 */}
        <motion.g
          animate={{ x: [0, 93] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', repeatDelay: 0.4 }}
        >
          <circle cx={108} cy={36} r={6} fill="#5c6bc0" />
          <line x1={108} y1={42} x2={108} y2={56} stroke="#5c6bc0" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
        <text x="110" y="78" textAnchor="middle" fontSize="9" fill="#5c6bc0">離開地盤，去了遠方</text>
      </svg>
    </div>
  );
}

// ── no matter what：防護罩擋住閃電 ──
function NoMatterWhatScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 防護罩 */}
        <motion.path
          d="M 75 65 Q 75 15 110 12 Q 145 15 145 65"
          fill="rgba(121,85,72,0.1)" stroke="#795548" strokeWidth="2.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* 裡面的人（不動） */}
        <circle cx={110} cy={45} r={8} fill="#795548" />
        <line x1={110} y1={53} x2={110} y2={65} stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
        {/* 閃電攻擊 — 左右各一道 */}
        <motion.text
          x="55" y="30" fontSize="18"
          animate={{ opacity: [0, 1, 0], x: [45, 65] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        >⚡</motion.text>
        <motion.text
          x="165" y="35" fontSize="16"
          animate={{ opacity: [0, 1, 0], x: [175, 155] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        >💥</motion.text>
        {/* 反彈線 */}
        {[-1, 1].map((dir, i) => (
          <motion.line
            key={i}
            x1={110 + dir * 35} y1={35}
            x2={110 + dir * 55} y2={20}
            stroke="#795548" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
        <text x="110" y="80" textAnchor="middle" fontSize="9" fill="#795548" fontWeight="bold">無論如何，雷打不動</text>
      </svg>
    </div>
  );
}

// ── just in case：多帶一把傘 ──
function JustInCaseScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 天空（有點灰） */}
        <rect x="10" y="5" width="200" height="30" rx="6" fill="#eceff1" />
        <motion.g
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx={80} cy={18} rx={25} ry={10} fill="#cfd8dc" />
          <ellipse cx={140} cy={15} rx={20} ry={8} fill="#cfd8dc" />
        </motion.g>
        {/* 人 */}
        <circle cx={90} cy={48} r={7} fill="#795548" />
        <line x1={90} y1={55} x2={90} y2={70} stroke="#795548" strokeWidth="2.5" strokeLinecap="round" />
        {/* 包包 */}
        <rect x="100" y="58" width="16" height="12" rx="3" fill="#a1887f" stroke="#795548" strokeWidth="1" />
        {/* 傘放進包包的動畫 */}
        <motion.g
          animate={{ y: [0, 15], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeIn' }}
        >
          <line x1="108" y1="38" x2="108" y2="52" stroke="#5d4037" strokeWidth="2" strokeLinecap="round" />
          <path d="M 100 38 Q 108 30 116 38" fill="#42a5f5" stroke="#1e88e5" strokeWidth="1.5" />
        </motion.g>
        <text x="160" y="65" textAnchor="middle" fontSize="9" fill="#795548">先準備好，有備無患</text>
      </svg>
    </div>
  );
}

// ── otherwise：岔路口，不走 A 就掉進 B ──
function OtherwiseScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 主路 */}
        <line x1="20" y1="40" x2="95" y2="40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
        {/* 岔路 A（好路 — 向右上） */}
        <line x1="95" y1="40" x2="185" y2="18" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" />
        <text x="190" y="22" fontSize="9" fill="#4caf50">✓ 目標</text>
        {/* 岔路 B（陷阱 — 向右下） */}
        <line x1="95" y1="40" x2="185" y2="68" stroke="#c62828" strokeWidth="3" strokeLinecap="round" />
        <text x="190" y="72" fontSize="9" fill="#c62828">✗ 陷阱</text>
        {/* 岔路口標記 */}
        <circle cx={95} cy={40} r={6} fill="#795548" />
        {/* 球走向好路，然後回頭走壞路 */}
        <motion.circle
          cx={0} cy={0} r={8} fill="#795548"
          animate={{
            cx: [30, 95, 185, 185, 95, 185],
            cy: [40, 40, 18,  18,  40, 68],
          }}
          transition={{
            duration: 4, repeat: Infinity,
            times: [0, 0.2, 0.45, 0.55, 0.7, 0.95],
            ease: 'easeInOut', repeatDelay: 0.8,
          }}
        />
        <text x="95" y="80" textAnchor="middle" fontSize="9" fill="#795548">不走 A → 掉進 B</text>
      </svg>
    </div>
  );
}

// ── depending on：天秤傾斜 ──
function DependingOnScene() {
  return (
    <div style={S}>
      <svg width="220" height="85" viewBox="0 0 220 85">
        {/* 天秤支點 */}
        <line x1="110" y1="12" x2="110" y2="42" stroke="#888" strokeWidth="2" />
        <polygon points="105,42 115,42 110,50" fill="#888" />
        {/* 天秤橫桿（搖擺） */}
        <motion.g
          animate={{ rotate: [-14, 14, -14] }}
          style={{ transformOrigin: '110px 28px' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="40" y1="28" x2="180" y2="28" stroke="#795548" strokeWidth="3" strokeLinecap="round" />
          {/* 左側砝碼 */}
          <rect x="28" y="30" width="28" height="18" rx="4" fill="rgba(121,85,72,0.2)" stroke="#795548" strokeWidth="1.5" />
          <text x="42" y="43" textAnchor="middle" fontSize="9" fill="#795548">A</text>
          {/* 右側砝碼 */}
          <rect x="164" y="30" width="28" height="18" rx="4" fill="rgba(121,85,72,0.2)" stroke="#795548" strokeWidth="1.5" />
          <text x="178" y="43" textAnchor="middle" fontSize="9" fill="#795548">B</text>
        </motion.g>
        {/* 砝碼變化 */}
        <motion.circle
          cx={42} cy={22} r={5} fill="#795548"
          animate={{ cy: [10, 22], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeIn' }}
        />
        <text x="110" y="74" textAnchor="middle" fontSize="9" fill="#795548">取決於哪邊比較重</text>
      </svg>
    </div>
  );
}

const SCENE_MAP = {
  already:          AlreadyScene,
  yet:              YetScene,
  still:            StillScene,
  just:             JustScene,
  soon:             SoonScene,
  recently:         RecentlyScene,
  eventually:       EventuallyScene,
  atFirst:          AtFirstScene,
  soFar:            SoFarScene,
  fromNowOn:        FromNowOnScene,
  inTime:           InTimeScene,
  forGood:          ForGoodScene,
  forNow:           ForNowScene,
  allAlong:         AllAlongScene,
  soonerOrLater:    SoonerOrLaterScene,
  inTheLongRun:     InTheLongRunScene,
  always:           AlwaysScene,
  never:            NeverScene,
  often:            OftenScene,
  sometimes:        SometimesScene,
  onceInAWhile:     OnceInAWhileScene,
  fromTimeToTime:   FromTimeToTimeScene,
  allTheTime:       AllTheTimeScene,
  everyNowAndThen:  EveryNowAndThenScene,
  forOnce:          ForOnceScene,
  moreOftenThanNot: MoreOftenThanNotScene,
  onAndOff:         OnAndOffScene,
  overAndOver:      OverAndOverScene,
  rightAway:        RightAwayScene,
  rightNow:         RightNowScene,
  allOfASudden:     AllOfASuddenScene,
  outOfNowhere:     OutOfNowhereScene,
  inNoTime:         InNoTimeScene,
  onTheSpot:        OnTheSpotScene,
  atAll:            AtAllScene,
  onPurpose:        OnPurposeScene,
  byAccident:       ByAccidentScene,
  littleByLittle:   LittleByLittleScene,
  allAtOnce:        AllAtOnceScene,
  oneByOne:         OneByOneScene,
  backAndForth:     BackAndForthScene,
  fromScratch:      FromScratchScene,
  inARow:           InARowScene,
  allTheWay:        AllTheWayScene,
  inAHurry:         InAHurryScene,
  byYourself:       ByYourselfScene,
  moreOrLess:       MoreOrLessScene,
  atLeast:          AtLeastScene,
  aroundTheCorner:  AroundTheCornerScene,
  outOfTown:        OutOfTownScene,
  noMatterWhat:     NoMatterWhatScene,
  justInCase:       JustInCaseScene,
  otherwise:        OtherwiseScene,
  dependingOn:      DependingOnScene,
};

export default function SensoryScene({ sceneKey }) {
  const Scene = SCENE_MAP[sceneKey];
  if (!Scene) return <div style={{ ...S, color: '#999', fontSize: 13 }}>動畫建置中…</div>;
  return <Scene />;
}


