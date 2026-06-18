// ═══════════════════════════════════════
// Layer 1: 動詞核心圖標 + 微動畫
// ═══════════════════════════════════════
export const VERB_ICONS = {
  Look:   { emoji: '👁️',  anim: 'verb-pulse' },
  Turn:   { emoji: '🔄',  anim: 'verb-spin-slow' },
  Bring:  { emoji: '🫴',  anim: 'verb-reach' },
  Run:    { emoji: '🏃',  anim: 'verb-walk' },
  Get:    { emoji: '🫳',  anim: 'verb-reach' },
  Break:  { emoji: '💥',  anim: 'verb-shake' },
  Go:     { emoji: '🚶',  anim: 'verb-walk' },
  Set:    { emoji: '📌',  anim: 'verb-hold-still' },
  Take:   { emoji: '✊',  anim: 'verb-grab' },
  Put:    { emoji: '🤚',  anim: 'verb-reach' },
  Come:   { emoji: '🚶',  anim: 'verb-walk-left' },
  Give:   { emoji: '🤲',  anim: 'verb-reach' },
  Make:   { emoji: '🛠️',  anim: 'verb-hammer' },
  Pick:   { emoji: '👌',  anim: 'verb-grab' },
  Hold:   { emoji: '✋',  anim: 'verb-hold-still' },
  Keep:   { emoji: '🤲',  anim: 'verb-hold-still' },
  Hang:   { emoji: '🪝',  anim: 'verb-swing' },
  Fall:   { emoji: '⬇️',  anim: 'verb-reach' },
  Carry:  { emoji: '📦',  anim: 'verb-walk' },
  Cut:    { emoji: '✂️',  anim: 'verb-grab' },
  Work:   { emoji: '⚒️',  anim: 'verb-hammer' },
  Find:   { emoji: '🔍',  anim: 'verb-pulse' },
  Figure: { emoji: '🧩',  anim: 'verb-pulse' },
  Show:   { emoji: '👐',  anim: 'verb-reach' },
  Check:  { emoji: '✅',  anim: 'verb-pulse' },
  End:    { emoji: '🏁',  anim: 'verb-hold-still' },
  Catch:  { emoji: '🧤',  anim: 'verb-grab' },
  Point:  { emoji: '👆',  anim: 'verb-pulse' },
  Throw:  { emoji: '🤾',  anim: 'verb-shake' },
  Stand:  { emoji: '🧍',  anim: 'verb-hold-still' },
  Blow:   { emoji: '💨',  anim: 'verb-pulse' },
  Sign:   { emoji: '✍️',  anim: 'verb-pulse' },
  Shut:   { emoji: '🚪',  anim: 'verb-grab' },
  Drop:   { emoji: '🫳',  anim: 'verb-reach' },
  Pull:   { emoji: '🤜',  anim: 'verb-grab' },
  Clean:  { emoji: '🧹',  anim: 'verb-swing' },
  Wrap:   { emoji: '🎁',  anim: 'verb-pulse' },
  Move:   { emoji: '➡️',  anim: 'verb-walk' },
  Fill:   { emoji: '🪣',  anim: 'verb-reach' },
  Back:   { emoji: '🔙',  anim: 'verb-walk-left' },
  Call:   { emoji: '📞',  anim: 'verb-shake' },
  Sort:   { emoji: '📊',  anim: 'verb-pulse' },
  Burn:   { emoji: '🔥',  anim: 'verb-burn' },
  Calm:   { emoji: '😌',  anim: 'verb-hold-still' },
  Grow:   { emoji: '🌱',  anim: 'verb-grow' },
  Wake:   { emoji: '⏰',  anim: 'verb-shake' },
  Mess:   { emoji: '🌀',  anim: 'verb-shake' },
  Freak:  { emoji: '😱',  anim: 'verb-shake' },
  Pay:    { emoji: '💰',  anim: 'verb-pulse' },
  Reach:  { emoji: '🤚',  anim: 'verb-reach' },
  Kick:   { emoji: '🦶',  anim: 'verb-shake' },
  Roll:   { emoji: '🛞',  anim: 'verb-spin-slow' },
  Lay:    { emoji: '🤲',  anim: 'verb-reach' },
  Pass:   { emoji: '🚶',  anim: 'verb-walk' },
  Let:    { emoji: '🫳',  anim: 'verb-reach' },
};

// ═══════════════════════════════════════
// Layer 2: 介係詞方向動畫
// ═══════════════════════════════════════
export const PARTICLE_ANIMS = {
  up:       { symbol: '⬆️',  anim: 'particle-rise',      label: '往上' },
  down:     { symbol: '⬇️',  anim: 'particle-drop',      label: '往下' },
  in:       { symbol: '📥',  anim: 'particle-enter',     label: '進入' },
  into:     { symbol: '⤵️',  anim: 'particle-dive',      label: '衝進' },
  out:      { symbol: '📤',  anim: 'particle-exit',      label: '出去' },
  on:       { symbol: '🔛',  anim: 'particle-connect',   label: '接上' },
  off:      { symbol: '✂️',  anim: 'particle-detach',    label: '脫離' },
  over:     { symbol: '⤴️',  anim: 'particle-arc',       label: '越過' },
  through:  { symbol: '🔀',  anim: 'particle-penetrate', label: '穿透' },
  back:     { symbol: '↩️',  anim: 'particle-return',    label: '返回' },
  away:     { symbol: '💨',  anim: 'particle-fade-away', label: '遠離' },
  for:      { symbol: '🎯',  anim: 'particle-target',    label: '朝向' },
  forward:  { symbol: '⏩',  anim: 'particle-forward',   label: '向前' },
  along:    { symbol: '➡️',  anim: 'particle-forward',   label: '沿著' },
  across:   { symbol: '↔️',  anim: 'particle-penetrate', label: '橫穿' },
  around:   { symbol: '🔄',  anim: 'particle-orbit',     label: '繞圈' },
  together: { symbol: '🤝',  anim: 'particle-merge',     label: '聚合' },
  about:    { symbol: '🔄',  anim: 'particle-orbit',     label: '周圍' },
  apart:    { symbol: '💔',  anim: 'particle-split',     label: '分離' },
  behind:   { symbol: '⬅️',  anim: 'particle-lag',       label: '在後' },
  by:       { symbol: '📍',  anim: 'particle-standby',   label: '在旁' },
  with:     { symbol: '👥',  anim: 'particle-accompany', label: '一起' },
  even:     { symbol: '⚖️',  anim: 'particle-balance',   label: '平衡' },
  ahead:    { symbol: '⏩',  anim: 'particle-forward',   label: '往前' },
  after:    { symbol: '👁️',  anim: 'particle-follow',    label: '跟著' },
  aside:    { symbol: '↗️',  anim: 'particle-aside',     label: '旁邊' },
};

// ═══════════════════════════════════════
// Layer 3: 每個片語的意思 Icon（唯一的 per-phrasal-verb 資料）
// ═══════════════════════════════════════
export const MEANING_ICONS = {
  // ── Look ──
  Look_into:    [{ emoji: '🔍', label: '調查' }],
  Look_down:    [{ emoji: '😤', label: '瞧不起' }],
  Look_up:      [{ emoji: '📖', label: '查資料' }, { emoji: '📈', label: '好轉' }, { emoji: '👋', label: '探望' }],
  Look_out:     [{ emoji: '⚠️', label: '當心' }],
  Look_over:    [{ emoji: '📄', label: '審閱' }],
  Look_back:    [{ emoji: '🕰️', label: '回顧' }],
  Look_after:   [{ emoji: '👶', label: '照顧' }],
  Look_for:     [{ emoji: '🔎', label: '尋找' }],
  Look_forward: [{ emoji: '🌟', label: '期待' }],

  // ── Turn ──
  Turn_into:    [{ emoji: '🦋', label: '變成' }],
  Turn_down:    [{ emoji: '🔇', label: '調低' }, { emoji: '🚫', label: '拒絕' }],
  Turn_up:      [{ emoji: '👻', label: '出現' }, { emoji: '🔊', label: '調高' }],
  Turn_out:     [{ emoji: '📦', label: '結果是' }, { emoji: '👥', label: '出席' }],
  Turn_off:     [{ emoji: '⏹️', label: '關閉' }, { emoji: '😒', label: '反感' }],
  Turn_on:      [{ emoji: '▶️', label: '開啟' }],
  Turn_around:  [{ emoji: '🔄', label: '轉身' }, { emoji: '📈', label: '扭轉' }],

  // ── Bring ──
  Bring_down:   [{ emoji: '📉', label: '降低' }, { emoji: '😞', label: '擊垮' }],
  Bring_up:     [{ emoji: '💬', label: '提及' }, { emoji: '👶', label: '撫養' }],
  Bring_out:    [{ emoji: '🆕', label: '推出' }, { emoji: '✨', label: '激發' }],
  Bring_back:   [{ emoji: '↩️', label: '帶回' }, { emoji: '🕰️', label: '喚起' }],
  Bring_in:     [{ emoji: '🧑‍💼', label: '引入' }, { emoji: '💵', label: '賺取' }],
  Bring_about:  [{ emoji: '⚡', label: '促成' }],

  // ── Run ──
  Run_into:     [{ emoji: '🤝', label: '巧遇' }, { emoji: '🐛', label: '遭遇' }],
  Run_down:     [{ emoji: '🪫', label: '耗盡' }, { emoji: '🏚️', label: '破舊' }],
  Run_out:      [{ emoji: '0️⃣', label: '用光' }],
  Run_over:     [{ emoji: '⏰', label: '超時' }, { emoji: '🚗', label: '輾過' }],
  Run_through:  [{ emoji: '📋', label: '過一遍' }, { emoji: '💸', label: '花光' }],
  Run_away:     [{ emoji: '🏃', label: '逃跑' }],
  Run_across:   [{ emoji: '💡', label: '偶然發現' }],

  // ── Get ──
  Get_into:     [{ emoji: '🎯', label: '涉足' }, { emoji: '🚪', label: '進入' }, { emoji: '😰', label: '陷入' }],
  Get_down:     [{ emoji: '💪', label: '開始做' }, { emoji: '😔', label: '沮喪' }],
  Get_up:       [{ emoji: '🛏️', label: '起床' }, { emoji: '🧍', label: '站起' }],
  Get_out:      [{ emoji: '🏃', label: '逃脫' }, { emoji: '🚪', label: '離開' }, { emoji: '📢', label: '洩漏' }],
  Get_over:     [{ emoji: '💪', label: '克服' }],
  Get_through:  [{ emoji: '🏋️', label: '撐過' }, { emoji: '📞', label: '聯繫上' }],
  Get_along:    [{ emoji: '🤝', label: '相處' }, { emoji: '📊', label: '進展' }],
  Get_back:     [{ emoji: '🏠', label: '回來' }, { emoji: '↩️', label: '回覆' }, { emoji: '🔙', label: '取回' }],
  Get_away:     [{ emoji: '🏖️', label: '逃脫' }, { emoji: '😈', label: '逍遙法外' }],
  Get_on:       [{ emoji: '🚌', label: '上車' }, { emoji: '📊', label: '進展' }, { emoji: '🤝', label: '相處' }],
  Get_off:      [{ emoji: '🚏', label: '下車' }, { emoji: '🏠', label: '下班' }, { emoji: '🚀', label: '開始' }],

  // ── Break ──
  Break_into:   [{ emoji: '🔓', label: '闖入' }, { emoji: '📊', label: '打入市場' }],
  Break_down:   [{ emoji: '💻', label: '故障' }, { emoji: '🧩', label: '拆解' }, { emoji: '😭', label: '崩潰' }],
  Break_up:     [{ emoji: '💔', label: '分手' }, { emoji: '🧩', label: '拆分' }, { emoji: '📶', label: '斷訊' }],
  Break_out:    [{ emoji: '🔥', label: '爆發' }, { emoji: '🏃', label: '逃脫' }],
  Break_through:[{ emoji: '🚀', label: '突破' }],
  Break_even:   [{ emoji: '⚖️', label: '損益兩平' }],

  // ── Go ──
  Go_down:      [{ emoji: '📉', label: '下降' }, { emoji: '💀', label: '當機' }],
  Go_up:        [{ emoji: '📈', label: '上漲' }],
  Go_out:       [{ emoji: '🕯️', label: '熄滅' }, { emoji: '🍽️', label: '外出' }, { emoji: '💑', label: '交往' }],
  Go_over:      [{ emoji: '📖', label: '複習' }, { emoji: '📊', label: '超過' }],
  Go_through:   [{ emoji: '😰', label: '經歷' }, { emoji: '🔍', label: '審查' }, { emoji: '☕', label: '用完' }],
  Go_on:        [{ emoji: '▶️', label: '繼續' }, { emoji: '❓', label: '發生' }],
  Go_back:      [{ emoji: '↩️', label: '回去' }],
  Go_off:       [{ emoji: '⏰', label: '響' }, { emoji: '💥', label: '爆炸' }],
  Go_ahead:     [{ emoji: '✅', label: '去吧' }],
  Go_for:       [{ emoji: '🎯', label: '選擇' }, { emoji: '🏆', label: '爭取' }],
  Go_with:      [{ emoji: '🤝', label: '選擇' }],

  // ── Set ──
  Set_up:       [{ emoji: '🏗️', label: '架設' }, { emoji: '🪤', label: '設局' }],
  Set_out:      [{ emoji: '🗺️', label: '出發' }, { emoji: '🎯', label: '著手' }],
  Set_off:      [{ emoji: '🚀', label: '出發' }, { emoji: '🔔', label: '觸發' }],
  Set_back:     [{ emoji: '⏪', label: '延遲' }],
  Set_aside:    [{ emoji: '📌', label: '擱置' }, { emoji: '💰', label: '留出' }],

  // ── Take ──
  Take_off:     [{ emoji: '👔', label: '脫掉' }, { emoji: '✈️', label: '起飛' }, { emoji: '🚀', label: '爆紅' }],
  Take_on:      [{ emoji: '📦', label: '承擔' }, { emoji: '🤝', label: '聘用' }, { emoji: '🥊', label: '挑戰' }],
  Take_up:      [{ emoji: '🎸', label: '從事' }, { emoji: '📐', label: '佔據' }],
  Take_over:    [{ emoji: '👑', label: '接管' }],
  Take_out:     [{ emoji: '📤', label: '取出' }, { emoji: '🍽️', label: '帶出去' }, { emoji: '🥡', label: '外帶' }],
  Take_in:      [{ emoji: '🧠', label: '吸收' }],
  Take_back:    [{ emoji: '🗣️', label: '收回' }, { emoji: '🔙', label: '退回' }],
  Take_down:    [{ emoji: '🏗️', label: '拆除' }, { emoji: '📝', label: '記下' }],
  Take_away:    [{ emoji: '🚚', label: '拿走' }, { emoji: '💡', label: '重點' }],

  // ── Put ──
  Put_on:       [{ emoji: '👕', label: '穿上' }, { emoji: '🎭', label: '假裝' }, { emoji: '🎬', label: '上演' }],
  Put_off:      [{ emoji: '⏰', label: '推遲' }, { emoji: '🤢', label: '反感' }],
  Put_up:       [{ emoji: '😤', label: '忍受' }, { emoji: '📌', label: '張貼' }, { emoji: '🏗️', label: '搭建' }],
  Put_down:     [{ emoji: '📱', label: '放下' }, { emoji: '📝', label: '記下' }, { emoji: '👎', label: '貶低' }],
  Put_out:      [{ emoji: '🧑‍🚒', label: '熄滅' }, { emoji: '📢', label: '發布' }],
  Put_away:     [{ emoji: '📦', label: '收起來' }, { emoji: '💰', label: '存錢' }],
  Put_in:       [{ emoji: '⏱️', label: '投入' }, { emoji: '🔧', label: '安裝' }, { emoji: '📋', label: '提出' }],
  Put_together: [{ emoji: '🧩', label: '組合' }, { emoji: '📊', label: '策劃' }],

  // ── Come ──
  Come_up:      [{ emoji: '💡', label: '出現' }, { emoji: '📅', label: '來臨' }, { emoji: '🧠', label: '想出' }],
  Come_down:    [{ emoji: '📉', label: '下降' }, { emoji: '⭐', label: '歸結為' }, { emoji: '🤒', label: '生病' }],
  Come_in:      [{ emoji: '🚪', label: '進來' }, { emoji: '🎯', label: '派上用場' }],
  Come_out:     [{ emoji: '🆕', label: '推出' }, { emoji: '📊', label: '結果是' }, { emoji: '🏳️‍🌈', label: '出櫃' }],
  Come_back:    [{ emoji: '↩️', label: '回來' }, { emoji: '🔄', label: '復興' }],
  Come_across:  [{ emoji: '🤝', label: '偶遇' }, { emoji: '🎭', label: '印象' }],
  Come_along:   [{ emoji: '🚶', label: '一起來' }, { emoji: '📊', label: '進展' }],
  Come_over:    [{ emoji: '🏠', label: '拜訪' }, { emoji: '🌊', label: '突然感到' }],

  // ── Give ──
  Give_up:      [{ emoji: '🏳️', label: '放棄' }, { emoji: '🚭', label: '戒掉' }],
  Give_in:      [{ emoji: '😔', label: '屈服' }],
  Give_out:     [{ emoji: '📄', label: '分發' }, { emoji: '🪫', label: '耗盡' }],
  Give_away:    [{ emoji: '🎁', label: '贈送' }, { emoji: '🤫', label: '洩露' }],
  Give_back:    [{ emoji: '↩️', label: '歸還' }, { emoji: '❤️', label: '回饋' }],

  // ── Make ──
  Make_up:      [{ emoji: '🤥', label: '捏造' }, { emoji: '🤝', label: '和好' }, { emoji: '💄', label: '化妝' }],
  Make_out:     [{ emoji: '👁️', label: '辨認' }, { emoji: '🧠', label: '理解' }],

  // ── Pick ──
  Pick_up:      [{ emoji: '📦', label: '撿起' }, { emoji: '🎓', label: '學會' }, { emoji: '🚗', label: '接人' }],
  Pick_out:     [{ emoji: '👆', label: '挑選' }, { emoji: '🔍', label: '認出' }],
  Pick_on:      [{ emoji: '😠', label: '找碴' }],

  // ── Hold ──
  Hold_on:      [{ emoji: '⏸️', label: '等等' }, { emoji: '💪', label: '堅持' }],
  Hold_up:      [{ emoji: '⏰', label: '耽誤' }, { emoji: '💪', label: '撐住' }],
  Hold_back:    [{ emoji: '😶', label: '壓抑' }, { emoji: '🚫', label: '阻礙' }, { emoji: '🤐', label: '隱瞞' }],

  // ── Keep ──
  Keep_up:      [{ emoji: '🏃', label: '跟上' }, { emoji: '📊', label: '維持' }],
  Keep_on:      [{ emoji: '▶️', label: '繼續' }],
  Keep_out:     [{ emoji: '🚫', label: '禁入' }, { emoji: '🙈', label: '別介入' }],

  // ── Hang ──
  Hang_out:     [{ emoji: '☕', label: '閒逛' }],
  Hang_up:      [{ emoji: '📞', label: '掛電話' }, { emoji: '🧥', label: '掛起' }],
  Hang_on:      [{ emoji: '⏸️', label: '稍等' }, { emoji: '💪', label: '堅持' }],

  // ── Fall ──
  Fall_apart:   [{ emoji: '💔', label: '瓦解' }, { emoji: '😭', label: '崩潰' }],
  Fall_behind:  [{ emoji: '🐢', label: '落後' }],
  Fall_for:     [{ emoji: '💘', label: '愛上' }, { emoji: '🪤', label: '上當' }],
  Fall_through: [{ emoji: '📋', label: '泡湯' }],

  // ── Carry ──
  Carry_on:     [{ emoji: '▶️', label: '繼續' }, { emoji: '🧳', label: '隨身' }],
  Carry_out:    [{ emoji: '✅', label: '執行' }],

  // ── Cut ──
  Cut_off:      [{ emoji: '🔌', label: '切斷' }, { emoji: '🤐', label: '打斷' }],
  Cut_out:      [{ emoji: '🛑', label: '停止' }, { emoji: '🗑️', label: '省略' }, { emoji: '🎯', label: '適合' }],
  Cut_down:     [{ emoji: '📉', label: '減少' }],

  // ── Work ──
  Work_out:     [{ emoji: '🏋️', label: '運動' }, { emoji: '🧮', label: '解決' }, { emoji: '✅', label: '順利' }],
  Work_on:      [{ emoji: '💻', label: '致力於' }, { emoji: '📈', label: '改善' }],

  // ── Find / Figure ──
  Find_out:     [{ emoji: '💡', label: '發現' }, { emoji: '😱', label: '被發現' }],
  Figure_out:   [{ emoji: '💡', label: '想通' }, { emoji: '🧠', label: '理解' }],

  // ── Show ──
  Show_up:      [{ emoji: '👋', label: '出現' }, { emoji: '😳', label: '難堪' }],
  Show_off:     [{ emoji: '🏆', label: '炫耀' }, { emoji: '📊', label: '展示' }],

  // ── Check ──
  Check_out:    [{ emoji: '👀', label: '查看' }, { emoji: '💳', label: '結帳' }, { emoji: '🏨', label: '退房' }],
  Check_in:     [{ emoji: '📋', label: '報到' }, { emoji: '💬', label: '關心' }],

  // ── End / Catch ──
  End_up:       [{ emoji: '❓', label: '最終' }],
  Catch_up:     [{ emoji: '🏃', label: '趕上' }, { emoji: '💬', label: '敘舊' }],

  // ── Point / Throw ──
  Point_out:    [{ emoji: '☝️', label: '指出' }],
  Throw_away:   [{ emoji: '🗑️', label: '丟掉' }, { emoji: '😞', label: '浪費' }],
  Throw_out:    [{ emoji: '🗑️', label: '丟掉' }, { emoji: '👋', label: '趕走' }, { emoji: '💡', label: '提出' }],
  Throw_up:     [{ emoji: '🤮', label: '嘔吐' }],

  // ── Stand ──
  Stand_out:    [{ emoji: '🌟', label: '突出' }],
  Stand_up:     [{ emoji: '🧍', label: '站起' }, { emoji: '😤', label: '放鴿子' }, { emoji: '✅', label: '站得住' }],
  Stand_for:    [{ emoji: '🏷️', label: '代表' }, { emoji: '😤', label: '容忍' }],
  Stand_by:     [{ emoji: '🔔', label: '待命' }, { emoji: '🤝', label: '支持' }],

  // ── Blow ──
  Blow_up:      [{ emoji: '💥', label: '爆炸' }, { emoji: '😡', label: '暴怒' }, { emoji: '📈', label: '爆紅' }],
  Blow_off:     [{ emoji: '🚫', label: '放鴿子' }, { emoji: '😤', label: '發洩' }],

  // ── Sign ──
  Sign_up:      [{ emoji: '📝', label: '註冊' }],
  Sign_in:      [{ emoji: '🔑', label: '登入' }],
  Sign_out:     [{ emoji: '🔓', label: '登出' }],
  Sign_off:     [{ emoji: '✅', label: '批准' }],

  // ── Shut ──
  Shut_down:    [{ emoji: '⏹️', label: '關閉' }, { emoji: '🤐', label: '駁倒' }],
  Shut_up:      [{ emoji: '🤐', label: '閉嘴' }],

  // ── Drop ──
  Drop_out:     [{ emoji: '🏃', label: '退出' }],
  Drop_off:     [{ emoji: '📦', label: '送達' }, { emoji: '📉', label: '下降' }, { emoji: '😴', label: '睡著' }],
  Drop_by:      [{ emoji: '🏠', label: '順訪' }],

  // ── Pull ──
  Pull_off:     [{ emoji: '🏆', label: '成功' }],
  Pull_out:     [{ emoji: '🏳️', label: '撤出' }, { emoji: '📱', label: '拿出' }],
  Pull_over:    [{ emoji: '🚗', label: '靠邊停' }],

  // ── Clean / Wrap / Move / Fill ──
  Clean_up:     [{ emoji: '✨', label: '清理' }],
  Wrap_up:      [{ emoji: '🎬', label: '收尾' }],
  Move_on:      [{ emoji: '▶️', label: '繼續' }],
  Fill_out:     [{ emoji: '📝', label: '填寫' }],

  // ── Back / Call / Sort / Burn ──
  Back_up:      [{ emoji: '🛡️', label: '支持' }, { emoji: '💾', label: '備份' }, { emoji: '🚗', label: '倒車' }],
  Call_off:     [{ emoji: '❌', label: '取消' }],
  Call_back:    [{ emoji: '📞', label: '回電' }, { emoji: '💻', label: '回呼' }],
  Sort_out:     [{ emoji: '✅', label: '搞定' }],
  Burn_out:     [{ emoji: '😵', label: '倦怠' }],

  // ── Calm / Grow / Wake / Mess / Freak ──
  Calm_down:    [{ emoji: '😌', label: '冷靜' }],
  Grow_up:      [{ emoji: '🌳', label: '長大' }, { emoji: '😤', label: '成熟點' }],
  Wake_up:      [{ emoji: '☀️', label: '醒來' }, { emoji: '💡', label: '醒悟' }],
  Mess_up:      [{ emoji: '💥', label: '搞砸' }],
  Freak_out:    [{ emoji: '😱', label: '抓狂' }],

  // ── Pay / Reach / Kick / Roll / Lay ──
  Pay_off:      [{ emoji: '🏆', label: '有回報' }, { emoji: '✅', label: '還清' }],
  Reach_out:    [{ emoji: '🤝', label: '聯繫' }],
  Kick_off:     [{ emoji: '⚽', label: '開始' }],
  Roll_out:     [{ emoji: '🚀', label: '推出' }],
  Lay_off:      [{ emoji: '📋', label: '裁員' }],

  // ── Pass / Let ──
  Pass_out:     [{ emoji: '😵', label: '昏倒' }, { emoji: '📄', label: '分發' }],
  Pass_up:      [{ emoji: '😞', label: '錯過' }],
  Let_down:     [{ emoji: '😞', label: '失望' }],
};
