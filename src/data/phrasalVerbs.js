export const VERBS = [
  'Look', 'Turn', 'Bring', 'Run', 'Get', 'Break', 'Go', 'Set',
  'Take', 'Put', 'Come', 'Give',
  'Make', 'Pick', 'Hold', 'Keep', 'Hang', 'Fall', 'Carry', 'Cut',
  'Work', 'Find', 'Figure', 'Show', 'Check', 'End', 'Catch',
  'Point', 'Throw', 'Stand', 'Blow', 'Sign', 'Shut', 'Drop', 'Pull',
  'Clean', 'Wrap', 'Move', 'Fill',
  'Back', 'Call', 'Sort', 'Burn',
  'Calm', 'Grow', 'Wake', 'Mess', 'Freak', 'Pay', 'Reach', 'Kick', 'Roll', 'Lay',
  'Pass', 'Let',
];

// ★ 核心引擎：每個動詞的語義邏輯（配合介係詞方向，就能「推理」出片語意思）
export const VERB_CORES = {
  Get:    { core: "狀態改變：從 A 到 B", highlight: true },
  Take:   { core: "用手「拿取」帶離原位", highlight: true },
  Make:   { core: "「製造」從無到有", highlight: true },
  Go:     { core: "自己「移動」離開", highlight: true },
  Keep:   { core: "「維持」不讓改變", highlight: true },
  Put:    { core: "用手「放到」某位置", highlight: true },
  Come:   { core: "「朝說話者」移動過來", highlight: true },
  Look:   { core: "用眼睛「看」" },
  Turn:   { core: "「旋轉」改變方向" },
  Bring:  { core: "「帶來」到這裡" },
  Run:    { core: "快速「奔跑」" },
  Break:  { core: "「打破」" },
  Set:    { core: "「放置、固定」" },
  Give:   { core: "「給出去」" },
  Hold:   { core: "「抓住」不放" },
  Fall:   { core: "「掉落」" },
  Stand:  { core: "「站立」" },
  Cut:    { core: "「切割」" },
  Blow:   { core: "「吹」出力量" },
  Work:   { core: "「勞動」產出" },
  Call:   { core: "「呼叫」" },
  Pick:   { core: "「挑選」" },
  Throw:  { core: "「扔」出去" },
  Drop:   { core: "「掉落」" },
  Pull:   { core: "「拉」向自己" },
  Sign:   { core: "「簽名」" },
  Shut:   { core: "「關閉」" },
  Hang:   { core: "「懸掛」" },
  Carry:  { core: "「搬運」" },
  Check:  { core: "「檢查」" },
  Show:   { core: "「展示」" },
  Catch:  { core: "「抓住」" },
  Find:   { core: "「找到」" },
  Figure: { core: "「推算」" },
  Fill:   { core: "「填滿」" },
  Point:  { core: "「指向」" },
  End:    { core: "「結束」" },
  Move:   { core: "「移動」" },
  Wrap:   { core: "「包裹」" },
  Clean:  { core: "「清除」" },
  Sort:   { core: "「分類」" },
  Back:   { core: "「往後」" },
  Burn:   { core: "「燃燒」" },
  Calm:   { core: "「平靜」" },
  Grow:   { core: "「生長」" },
  Wake:   { core: "「甦醒」" },
  Mess:   { core: "「弄亂」" },
  Freak:  { core: "「驚嚇」" },
  Pay:    { core: "「支付」" },
  Reach:  { core: "「伸手」" },
  Kick:   { core: "「踢」" },
  Roll:   { core: "「滾動」" },
  Lay:    { core: "「放下」" },
  Pass:   { core: "「經過」" },
  Let:    { core: "「允許」" },
};

// ★ 介係詞的空間方向 + 抽象隱喻
export const PARTICLE_DIRECTIONS = {
  up:      { spatial: '往上', metaphor: '也代表「徹底完成」— 水倒滿到頂端，沒空間了，結束了' },
  down:    { spatial: '往下', metaphor: '也代表「減少、崩塌」— 從高處垮下來' },
  in:      { spatial: '在裡面（靜態）', metaphor: '強調「已經處於容器內的狀態」' },
  into:    { spatial: '往裡面衝（動態）', metaphor: '帶有「破壞邊界、擠進去、產生質變」的動態箭頭' },
  out:     { spatial: '往外面', metaphor: '也代表「真相大白」或「消失歸零」— 東西拿出來就看清全貌；能量散出去就什麼都不剩' },
  on:      { spatial: '在上面 / 接觸', metaphor: '也代表「持續進行」— 腳踩在路上繼續走' },
  off:     { spatial: '離開 / 脫離', metaphor: '也代表「偏離正軌、取消」— 連接切斷後，原本的行程就被迫停下' },
  over:    { spatial: '越過', metaphor: '也代表「克服障礙」或「從頭到尾掃過」' },
  through: { spatial: '穿透', metaphor: '也代表「撐過困難」或「徹底完成」— 從頭穿到尾' },
  back:    { spatial: '往後', metaphor: '也代表「回到原點」或「歸還」' },
  away:    { spatial: '遠離（拉長距離直到看不見）', metaphor: '和 off 的區別：away 是「距離越來越遠」，off 是「接觸面啪一聲分開」' },
  for:     { spatial: '朝向', metaphor: '帶有目的性的方向' },
  forward: { spatial: '向前', metaphor: '面向未來' },
  along:   { spatial: '沿著', metaphor: '和某人/某事一起向前推進' },
  across:  { spatial: '橫穿', metaphor: '意外地「穿越」碰到' },
  around:  { spatial: '繞圈', metaphor: '也代表「全面地」涵蓋' },
  together:{ spatial: '聚合', metaphor: '零散的東西組裝成一體' },
  about:   { spatial: '在周圍', metaphor: '繞了一圈最終產生影響' },
  apart:   { spatial: '分離', metaphor: '各部分散開、崩解' },
  behind:  { spatial: '在後面', metaphor: '落後、跟不上' },
  by:      { spatial: '在旁邊', metaphor: '近距離待命或擦身而過' },
  with:    { spatial: '一起', metaphor: '伴隨、同行' },
  even:    { spatial: '平衡', metaphor: '兩邊打平' },
  ahead:   { spatial: '往前方', metaphor: '不猶豫地向前進' },
  after:   { spatial: '在後面（跟著）', metaphor: '視線跟在某人後面' },
};

export const VERB_PARTICLES = {
  Look:   ['into', 'down', 'up', 'out', 'over', 'back', 'after', 'for', 'forward'],
  Turn:   ['into', 'down', 'up', 'out', 'off', 'on', 'around'],
  Bring:  ['down', 'up', 'out', 'back', 'in', 'about'],
  Run:    ['into', 'down', 'out', 'over', 'through', 'away', 'across'],
  Get:    ['into', 'down', 'up', 'out', 'over', 'through', 'along', 'back', 'away', 'on', 'off'],
  Break:  ['into', 'down', 'up', 'out', 'through', 'even'],
  Go:     ['down', 'up', 'out', 'over', 'through', 'on', 'back', 'off', 'ahead', 'for', 'with'],
  Set:    ['up', 'out', 'off', 'back', 'aside'],
  Take:   ['off', 'on', 'up', 'over', 'out', 'in', 'back', 'down', 'away'],
  Put:    ['on', 'off', 'up', 'down', 'out', 'away', 'in', 'together'],
  Come:   ['up', 'down', 'in', 'out', 'back', 'across', 'along', 'over'],
  Give:   ['up', 'in', 'out', 'away', 'back'],
  Make:   ['up', 'out'],
  Pick:   ['up', 'out', 'on'],
  Hold:   ['on', 'up', 'back'],
  Keep:   ['up', 'on', 'out'],
  Hang:   ['out', 'up', 'on'],
  Fall:   ['apart', 'behind', 'for', 'through'],
  Carry:  ['on', 'out'],
  Cut:    ['off', 'out', 'down'],
  Work:   ['out', 'on'],
  Find:   ['out'],
  Figure: ['out'],
  Show:   ['up', 'off'],
  Check:  ['out', 'in'],
  End:    ['up'],
  Catch:  ['up'],
  Point:  ['out'],
  Throw:  ['away', 'out', 'up'],
  Stand:  ['out', 'up', 'for', 'by'],
  Blow:   ['up', 'off'],
  Sign:   ['up', 'in', 'out', 'off'],
  Shut:   ['down', 'up'],
  Drop:   ['out', 'off', 'by'],
  Pull:   ['off', 'out', 'over'],
  Clean:  ['up'],
  Wrap:   ['up'],
  Move:   ['on'],
  Fill:   ['out'],
  Back:   ['up'],
  Call:   ['off', 'back'],
  Sort:   ['out'],
  Burn:   ['out'],
  Calm:   ['down'],
  Grow:   ['up'],
  Wake:   ['up'],
  Mess:   ['up'],
  Freak:  ['out'],
  Pay:    ['off'],
  Reach:  ['out'],
  Kick:   ['off'],
  Roll:   ['out'],
  Lay:    ['off'],
  Pass:   ['out', 'up'],
  Let:    ['down'],
};

export const phrasalVerbData = {
  Look: {
    into: {
      title: "Look into",
      spatial: "視線穿進內部去看。",
      coreMotion: 'scan-penetrate',
      meanings: [
        { meaning: "查一下、追一下", plainEnglish: "to check or investigate", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "🔍", label: "文件" }, note: "視線「穿進去」內部 → 不看表面，直接追查根本原因", example: "I'll look into it and get back to you." },
      ]
    },
    down: {
      title: "Look down on",
      spatial: "視線從高處往下看。",
      coreMotion: 'gaze-descend',
      isWeldedBlock: true,
      meanings: [
        { meaning: "瞧不起、看扁", plainEnglish: "to think someone is below you", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "🧑", label: "被看扁的人" }, note: "從高處「往下看」對方 → 覺得別人比自己低", example: "You shouldn't look down on anyone just because of their job." },
      ]
    },
    up: {
      title: "Look up",
      spatial: "視線從低處往上搜尋。",
      coreMotion: 'scan-ascend',
      meanings: [
        { meaning: "查一下", plainEnglish: "to find information about it", grammar: ['transitive', 'separable'], sceneObject: { emoji: "📖", label: "翻書查字" }, note: "在資料裡「往上翻找」直到目標浮現", example: "If you don't know the word, look it up in the dictionary." },
        { meaning: "有起色", plainEnglish: "to start getting better", grammar: ['intransitive'], sceneObject: { emoji: "📈", label: "趨勢反彈" }, note: "觸底後「往上彈」→ 情況開始改善", example: "Things are finally looking up after a rough few months." },
        { meaning: "去看看", plainEnglish: "to go visit someone", grammar: ['transitive', 'separable'], sceneObject: { emoji: "🏠", label: "拜訪朋友" }, note: "在通訊錄裡「往上查到」某人，然後去拜訪", example: "Do look me up the next time you're in Taipei." },
      ]
    },
    out: {
      title: "Look out",
      spatial: "視線投射到外面。",
      coreMotion: 'gaze-exit',
      meanings: [
        { meaning: "小心！", plainEnglish: "be careful", grammar: ['intransitive'], sceneObject: { emoji: "⚠️", label: "外面的危險" }, note: "注意力「射向外面」→ 警覺外部的危險", example: "Look out! There is a car coming!" },
      ]
    },
    over: {
      title: "Look over",
      spatial: "視線越過表面掃一遍。",
      coreMotion: 'gaze-sweep',
      meanings: [
        { meaning: "瞄一下、掃一眼", plainEnglish: "to quickly check something", grammar: ['transitive', 'separable'], sceneObject: { emoji: "📄", label: "掃過文件" }, note: "視線「掠過去」不深入 → 粗略瀏覽", example: "Can you look over my essay before I hand it in?" },
      ]
    },
    back: {
      title: "Look back",
      spatial: "視線轉向後方。",
      coreMotion: 'gaze-return',
      meanings: [
        { meaning: "回頭看", plainEnglish: "to think about the past", grammar: ['intransitive'], sceneObject: { emoji: "🕰️", label: "過去的路" }, note: "視線「轉回去」看走過的路 → 回頭審視過去", example: "Looking back, I wish I had studied harder in school." },
      ]
    },
    after: {
      title: "Look after",
      spatial: "視線跟在某人後面。",
      coreMotion: 'gaze-follow',
      meanings: [
        { meaning: "顧、照顧", plainEnglish: "to watch and protect someone", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "👶", label: "顧小孩" }, note: "視線「黏在後面」不離開 → 持續盯著確保安全", example: "Can you look after my cat while I'm away this weekend?" },
      ]
    },
    for: {
      title: "Look for",
      spatial: "視線朝著目標方向搜尋。",
      coreMotion: 'gaze-target',
      meanings: [
        { meaning: "找", plainEnglish: "to try to find something", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "🔎", label: "掃射找目標" }, note: "視線「朝向」目標不斷掃射 → 帶著目的搜索", example: "I'm looking for my keys. Have you seen them?" },
      ]
    },
    forward: {
      title: "Look forward to",
      spatial: "視線投向前方的未來。",
      coreMotion: 'gaze-advance',
      isWeldedBlock: true,
      meanings: [
        { meaning: "超期待、好期待", plainEnglish: "to be excited about something coming", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "🎉", label: "未來的好事" }, note: "目光「投向前方」即將到來的事 → 滿心期待", example: "I'm really looking forward to the summer vacation!" },
      ]
    }
  },

  Turn: {
    into: {
      title: "Turn into",
      spatial: "轉動方向，進入全新狀態。",
      coreMotion: 'spin-penetrate',
      meanings: [
        { meaning: "變成", plainEnglish: "to change into something different", grammar: ['transitive', 'inseparable'], sceneObject: { emoji: "🦋", label: "蛹→蝴蝶" }, note: "旋轉著「穿進」一個全新狀態 → A 質變成 B", example: "The rain turned into snow as the temperature dropped." },
      ]
    },
    down: {
      title: "Turn down",
      spatial: "旋轉往下。",
      coreMotion: 'spin-descend',
      meanings: [
        { meaning: "拒絕", plainEnglish: "to say no to an offer", grammar: ['transitive', 'separable'], sceneObject: { emoji: "🙅", label: "拒絕提議" }, note: "把對方的提議「往下轉」冷掉 → 回絕", example: "She turned down the job offer because she didn't want to move." },
        { meaning: "調低", plainEnglish: "to make it lower or quieter", grammar: ['transitive', 'separable'], sceneObject: { emoji: "🔉", label: "轉小聲" }, note: "旋鈕「往下轉」→ 音量、溫度降低", example: "Could you turn down the music? I'm trying to concentrate." },
      ]
    },
    up: {
      title: "Turn up",
      spatial: "旋轉往上 / 浮上來。",
      meanings: [
        { meaning: "出現、現身", note: "原本沉底的東西「轉上來」→ 意外浮現", example: "Don't worry, your missing keys will turn up sooner or later." },
        { meaning: "調高", note: "「往上轉」→ 音量、溫度升高", example: "Turn up the volume — I can't hear the meeting." },
      ]
    },
    out: {
      title: "Turn out",
      spatial: "轉動後結果跑到外面。",
      meanings: [
        { meaning: "結果是...", note: "經過一番運作，結果「轉出來」→ 最終呈現的結局", example: "The weather was bad, but the event turned out to be a huge success." },
        { meaning: "出席、到場", note: "人們「走出來」到場 → 大量出席", example: "A large crowd turned out for the product launch." },
      ]
    },
    off: {
      title: "Turn off",
      spatial: "轉離，脫離接觸。",
      meanings: [
        { meaning: "關閉", note: "開關「轉離」接通位置 → 停止運作", example: "Don't forget to turn off the dev server before you leave for the weekend." },
        { meaning: "令人反感", note: "興趣「被轉掉」→ 失去好感；和關閉同一套邏輯", example: "The messy codebase really turned off the new hire." },
      ]
    },
    on: {
      title: "Turn on",
      spatial: "轉到，接上接觸。",
      meanings: [
        { meaning: "開啟", note: "開關「轉到」接通位置 → 開始運作", example: "Turn on the VPN before you access the production database." },
      ]
    },
    around: {
      title: "Turn around",
      spatial: "整個轉一圈，方向相反。",
      meanings: [
        { meaning: "轉身、調頭", note: "「轉 180 度」→ 改變方向", example: "I forgot my badge and had to turn around and go back home." },
        { meaning: "扭轉局面", note: "把下滑的局面「整個轉過來」→ 從壞變好", example: "The new product manager helped turn the failing project completely around." },
      ]
    }
  },

  Bring: {
    down: {
      title: "Bring down",
      spatial: "帶往下。",
      meanings: [
        { meaning: "降低", note: "把數字「帶下來」→ 降低成本、價格", example: "The company is trying to bring down production costs." },
        { meaning: "擊垮、令人沮喪", note: "把人「帶垮往下」→ 讓人或情緒崩掉", example: "Don't let one bad code review bring you down." },
      ]
    },
    up: {
      title: "Bring up",
      spatial: "帶往上。",
      meanings: [
        { meaning: "提及、提出", note: "把話題「帶上來」桌面 → 主動談起", example: "Please don't bring up that issue during the meeting." },
        { meaning: "撫養", note: "把孩子一路「帶上去」長高 → 養育長大", example: "She was brought up in a small town in southern Taiwan." },
      ]
    },
    out: {
      title: "Bring out",
      spatial: "帶往外面。",
      meanings: [
        { meaning: "推出產品", note: "把東西「帶出來」公開 → 正式發布上市", example: "Apple brings out a new iPhone every year." },
        { meaning: "激發潛能", note: "把內在的優點「帶出來」→ 讓隱藏的才華顯現", example: "The coach knows how to bring out the best in his players." },
      ]
    },
    back: {
      title: "Bring back",
      spatial: "帶回原點。",
      meanings: [
        { meaning: "帶回、恢復", note: "把消失的東西「帶回來」→ 恢復原本的狀態", example: "The team decided to bring back the old feature after user complaints." },
        { meaning: "喚起回憶", note: "把過去的記憶「帶回來」眼前", example: "This old code style brings back memories of my very first internship." },
      ]
    },
    in: {
      title: "Bring in",
      spatial: "帶進裡面。",
      meanings: [
        { meaning: "引入、引進", note: "把外部的人才或技術「帶進來」內部", example: "We need to bring in a security consultant to audit the entire codebase." },
        { meaning: "賺取收入", note: "把錢「帶進來」→ 創造營收", example: "The new product is bringing in a lot of revenue." },
      ]
    },
    about: {
      title: "Bring about",
      spatial: "帶著繞一圈產生結果。",
      meanings: [
        { meaning: "導致、促成", note: "行動「繞一圈」帶出新結果 → 使某事發生", example: "The new deployment strategy brought about a huge improvement in uptime." },
      ]
    }
  },

  Run: {
    into: {
      title: "Run into",
      spatial: "奔跑撞進去。",
      meanings: [
        { meaning: "巧遇", note: "跑著「撞進」某人 → 意外碰到", example: "I ran into my old college roommate at the airport yesterday." },
        { meaning: "遭遇問題", note: "跑著「撞進」障礙 → 碰上麻煩；同一套邏輯", example: "I ran into a serious system error while deploying the container." },
      ]
    },
    down: {
      title: "Run down",
      spatial: "奔跑往下。",
      meanings: [
        { meaning: "耗盡、電力不足", note: "能量「跑著往下墜」到零 → 電池沒電", example: "The battery is running down, I need to find a charger." },
        { meaning: "破舊荒廢", note: "狀態一路「往下滑」→ 年久失修", example: "The office building is looking really run-down these days." },
      ]
    },
    out: {
      title: "Run out (of)",
      spatial: "奔跑出容器。",
      meanings: [
        { meaning: "用光、耗盡", note: "東西「跑出」容器 → 裡面空了什麼都不剩", example: "We are running out of time, we must make a decision now." },
      ]
    },
    over: {
      title: "Run over",
      spatial: "奔跑越過。",
      meanings: [
        { meaning: "超出時間", note: "時間「跑過界」→ 超出預定的限制", example: "The meeting ran over by thirty minutes because of too many questions." },
        { meaning: "輾過", note: "從某物「上面碾過去」", example: "Be careful not to run over the cable on the floor." },
      ]
    },
    through: {
      title: "Run through",
      spatial: "奔跑穿透。",
      meanings: [
        { meaning: "快速審查、排練", note: "「從頭穿到尾」跑一遍 → 快速過一遍流程", example: "Let me run through the deployment checklist one more time before we push." },
        { meaning: "花光", note: "錢被「一路穿過」花完 → 快速揮霍；同一套邏輯", example: "He ran through his entire savings in just six months." },
      ]
    },
    away: {
      title: "Run away",
      spatial: "奔跑遠離。",
      meanings: [
        { meaning: "逃跑、逃避", note: "「跑離」危險 → 面對困難時選擇迴避", example: "Don't run away from hard bugs — they will only get worse if ignored." },
      ]
    },
    across: {
      title: "Run across",
      spatial: "奔跑橫穿撞見。",
      meanings: [
        { meaning: "偶然發現", note: "跑著「橫向撞見」→ 意外碰到", example: "I ran across a really useful open-source tool while researching." },
      ]
    }
  },

  Get: {
    into: {
      title: "Get into",
      spatial: "狀態改變：穿進去某個領域裡面。",
      meanings: [
        { meaning: "開始涉足、產生興趣", note: "從外面「進入」一個新領域 → 投入其中", example: "She got into machine learning after watching an online course." },
        { meaning: "進入", note: "「進入」學校、公司、車子", example: "He got into his dream university last month." },
        { meaning: "陷入（麻煩）", note: "不小心「掉進」困境裡；get into trouble", example: "You'll get into trouble if you push to production without testing." },
      ]
    },
    down: {
      title: "Get down (to)",
      spatial: "狀態改變：壓低往下。",
      meanings: [
        { meaning: "認真開始做", note: "把身段「壓下去」正面迎擊 → 不再拖延；get down to business", example: "Let's get down to work and stop scrolling social media." },
        { meaning: "令人沮喪", note: "心情被「壓下去」→ 變得低落", example: "Don't let the failed deployment get you down." },
      ]
    },
    up: {
      title: "Get up",
      spatial: "狀態改變：從低處往上。",
      meanings: [
        { meaning: "起床", note: "從躺著「往上起來」→ 離開被窩", example: "I have to get up at six every morning to catch the 7 o'clock standup." },
        { meaning: "站起來", note: "從坐著「往上站」→ 起身", example: "He got up from his chair and walked to the whiteboard." },
      ]
    },
    out: {
      title: "Get out (of)",
      spatial: "狀態改變：從裡面跑到外面。",
      meanings: [
        { meaning: "逃脫、擺脫", note: "從困境「脫出去」→ 脫身", example: "We need to get out of this vendor lock-in before the contract renews." },
        { meaning: "離開", note: "從某處「走出去」", example: "Let's get out of the office and grab some fresh air." },
        { meaning: "消息洩漏", note: "消息「跑出去」→ 被外界知道了；同一個 out = 跑到外面", example: "Word got out that the company was planning layoffs." },
      ]
    },
    over: {
      title: "Get over",
      spatial: "狀態改變：越過障礙。",
      meanings: [
        { meaning: "克服、恢復", note: "把悲傷或困難「跨越過去」→ 從另一側走出來", example: "It took the team a whole week to get over the production incident." },
      ]
    },
    through: {
      title: "Get through",
      spatial: "狀態改變：穿透到另一端。",
      meanings: [
        { meaning: "撐過、度過", note: "把困難時期「穿過去」→ 熬到最後", example: "We somehow got through the holiday traffic spike without any downtime." },
        { meaning: "聯繫上", note: "訊號「穿透」障礙到達對方 → 接通；同一個 through", example: "I couldn't get through to the API — it kept timing out after 30 seconds." },
      ]
    },
    along: {
      title: "Get along (with)",
      spatial: "狀態改變：沿著同一條路並肩前進。",
      meanings: [
        { meaning: "相處融洽", note: "兩人「並肩走」→ 步調一致、關係好", example: "How are you getting along with the new tech lead?" },
        { meaning: "進展", note: "事情「沿著」計畫往前推進", example: "How are you getting along with the new tech stack so far?" },
      ]
    },
    back: {
      title: "Get back",
      spatial: "狀態改變：回到原點。",
      meanings: [
        { meaning: "回來", note: "人「回到」原來的地方", example: "What time did you get back from the conference?" },
        { meaning: "回覆", note: "把回應「帶回去」給對方；get back to somebody", example: "I'll get back to you with the test results by end of day." },
        { meaning: "取回", note: "把東西「拿回來」→ 三個意思都是「回到原點」", example: "I need to get back the money I lent him." },
      ]
    },
    away: {
      title: "Get away",
      spatial: "狀態改變：遠離。",
      meanings: [
        { meaning: "逃脫、離開", note: "「遠離」束縛 → 獲得自由", example: "I need to get away from the computer and take a proper break this weekend." },
        { meaning: "逍遙法外", note: "做壞事後「跑遠了」沒被抓到；get away with", example: "You can't get away with skipping code reviews forever." },
      ]
    },
    on: {
      title: "Get on",
      spatial: "狀態改變：踩上去、接觸。",
      meanings: [
        { meaning: "上車、登上", note: "「踩上」交通工具", example: "We need to get on the bus before it leaves." },
        { meaning: "進展如何", note: "事情「在軌道上」持續走 → 進行得如何", example: "How is the new developer getting on with the onboarding process?" },
        { meaning: "相處", note: "兩人「在同一平台上」→ 相處融洽（＝get along）", example: "Do the frontend and backend teams get on well?" },
      ]
    },
    off: {
      title: "Get off",
      spatial: "狀態改變：脫離、下來。",
      meanings: [
        { meaning: "下車", note: "從交通工具「脫離下來」", example: "We need to get off at the next stop." },
        { meaning: "下班", note: "從工作狀態「脫離」→ 結束", example: "What time do you usually get off work?" },
        { meaning: "開始", note: "「脫離」起點踏出第一步；get off to a good/bad start", example: "Get off to a good start by reading all the documentation first." },
      ]
    }
  },

  Break: {
    into: {
      title: "Break into",
      spatial: "打破後衝進去。",
      meanings: [
        { meaning: "闖入", note: "「打破」障礙然後「進去」→ 非法侵入", example: "Hackers broke into the company's database last night." },
        { meaning: "打入市場", note: "「打破」壁壘然後「進入」→ 進軍新領域；同一套邏輯", example: "It is very hard to break into the AI chip market right now." },
      ]
    },
    down: {
      title: "Break down",
      spatial: "破碎往下垮。",
      meanings: [
        { meaning: "故障、停止運作", note: "「壞掉垮下」→ 無法運作", example: "The build pipeline broke down right before the product launch." },
        { meaning: "分解、拆解分析", note: "把大東西「敲碎往下拆」成小塊 → 分析", example: "Let's break down this user story into smaller tasks." },
        { meaning: "（人）情緒崩潰", note: "防線「崩塌往下」→ 承受不住壓力", example: "She broke down in tears after working three all-nighters in a row." },
      ]
    },
    up: {
      title: "Break up",
      spatial: "碎裂分開。",
      meanings: [
        { meaning: "分手、解散", note: "整體「裂開」各走各的 → 關係結束", example: "The band broke up after ten years together." },
        { meaning: "拆分", note: "把整塊「敲碎拆開」→ 分成小部分", example: "The team lead decided to break up the monolith into microservices." },
        { meaning: "訊號中斷", note: "通話「碎裂」→ 斷斷續續", example: "You're breaking up — can you move to a better signal area?" },
      ]
    },
    out: {
      title: "Break out",
      spatial: "打破後衝出去。",
      meanings: [
        { meaning: "爆發", note: "被壓抑的東西「衝破」束縛往外 → 突然發生", example: "A critical security vulnerability broke out over the weekend." },
        { meaning: "逃脫", note: "「打破」邊界跑出去 → 從限制中逃出", example: "Three prisoners broke out of the facility last night." },
      ]
    },
    through: {
      title: "Break through",
      spatial: "打破後穿透過去。",
      meanings: [
        { meaning: "突破", note: "「打穿」長期的瓶頸 → 進入全新境界", example: "The research team finally broke through and achieved a new benchmark score." },
      ]
    },
    even: {
      title: "Break even",
      spatial: "打到兩邊平衡。",
      meanings: [
        { meaning: "損益兩平", note: "投入和回收「打成平手」→ 不賺也不虧", example: "The product finally broke even after twelve months on the market." },
      ]
    }
  },

  Go: {
    down: {
      title: "Go down",
      spatial: "自己移動：往下。",
      meanings: [
        { meaning: "下降", note: "數字「往下走」→ 價格、品質降低", example: "The stock price went down by 15% after the earnings report." },
        { meaning: "當機", note: "系統「自己垮下去」→ 網站、伺服器停擺", example: "The entire production environment went down at 3 AM on Sunday." },
      ]
    },
    up: {
      title: "Go up",
      spatial: "自己移動：往上。",
      meanings: [
        { meaning: "上漲、增加", note: "數字「往上走」→ 價格、流量增加", example: "Cloud costs went up by 40% after we launched the new feature." },
      ]
    },
    out: {
      title: "Go out",
      spatial: "自己移動：往外面。",
      meanings: [
        { meaning: "熄滅", note: "能量「散出去」歸零 → 燈光、火熄滅", example: "The office lights went out during the storm and we lost all unsaved work." },
        { meaning: "外出", note: "人「自己走出去」→ 出去社交", example: "Do you want to go out for dinner after work?" },
        { meaning: "交往", note: "兩人經常一起「走出去」→ 約會中；go out with somebody", example: "They've been going out for two years now." },
      ]
    },
    over: {
      title: "Go over",
      spatial: "自己移動：越過。",
      meanings: [
        { meaning: "複習、仔細審閱", note: "「越過」全部內容 → 從頭到尾看一遍", example: "Let's go over the sprint review before the client demo starts." },
        { meaning: "超過", note: "數字「越過」界線 → 超出預算或限制", example: "We went over budget by 20% this quarter." },
      ]
    },
    through: {
      title: "Go through",
      spatial: "自己移動：穿透。",
      meanings: [
        { meaning: "經歷", note: "把困難時期「一路穿過去」→ 熬過", example: "The team went through a very rough quarter after the layoffs." },
        { meaning: "仔細審查", note: "「從頭穿到尾」→ 逐一檢查", example: "I went through the entire codebase looking for the memory leak." },
        { meaning: "用完", note: "資源被「一路穿過」消耗殆盡；同一套邏輯", example: "We go through two pots of coffee every morning." },
      ]
    },
    on: {
      title: "Go on",
      spatial: "自己移動：繼續往前。",
      meanings: [
        { meaning: "繼續", note: "腳步持續「往前走」→ 不要停", example: "Please go on — I didn't mean to interrupt you." },
        { meaning: "發生", note: "事情正「在進行中」往前走；What's going on?", example: "Something weird is going on with the CI pipeline." },
      ]
    },
    back: {
      title: "Go back",
      spatial: "自己移動：回到原點。",
      meanings: [
        { meaning: "回去、追溯", note: "「往後轉」→ 回到原點", example: "We had to go back to the drawing board after the whole pivot failed." },
      ]
    },
    off: {
      title: "Go off",
      spatial: "自己移動：能量往外爆。",
      meanings: [
        { meaning: "（警報）響起", note: "聲音「往外爆發」→ 鬧鐘、警報突然響", example: "The production alarm went off at 3 AM because of a false positive alert." },
        { meaning: "爆炸", note: "能量「往外炸開」", example: "The fireworks went off at midnight on New Year's Eve." },
      ]
    },
    ahead: {
      title: "Go ahead",
      spatial: "自己移動：往前方踏出。",
      meanings: [
        { meaning: "去吧、請便", note: "允許對方「往前走」→ 表示許可或鼓勵", example: "The client gave us the green light — go ahead and deploy to production." },
      ]
    },
    for: {
      title: "Go for",
      spatial: "自己移動：朝向目標衝。",
      meanings: [
        { meaning: "選擇", note: "「朝」某一個選項衝 → 決定選它", example: "We decided to go for a microservices architecture instead of a monolith." },
        { meaning: "追求、爭取", note: "全力「朝著」目標衝 → 努力爭取", example: "If you want the promotion, go for it!" },
      ]
    },
    with: {
      title: "Go with",
      spatial: "自己移動：跟某選項一起走。",
      meanings: [
        { meaning: "選擇、決定用", note: "跟某選項「一起走」→ 決定選它", example: "Let's go with this open-source library." },
      ]
    }
  },

  Set: {
    up: {
      title: "Set up",
      spatial: "定位往上立起。",
      meanings: [
        { meaning: "建立、架設", note: "零件一個個「立起來」定位 → 從零搭建", example: "It took the DevOps team a week to set up the new Kubernetes cluster." },
        { meaning: "設局、陷害", note: "預先「布置好」圈套 → 讓人掉進去", example: "He claimed he was set up and didn't actually commit the crime." },
      ]
    },
    out: {
      title: "Set out",
      spatial: "定位踏出去。",
      meanings: [
        { meaning: "啟程、出發", note: "「踏出去」起點 → 開始旅程", example: "We set out early in the morning to avoid traffic." },
        { meaning: "著手、打算做", note: "帶著目的「出發」→ 開始執行計畫；set out to do", example: "The startup set out to solve the problem of food waste in cities." },
      ]
    },
    off: {
      title: "Set off",
      spatial: "定位後彈離。",
      meanings: [
        { meaning: "出發", note: "「踏離」起點 → 啟程", example: "We set off at dawn to catch the first flight." },
        { meaning: "觸發", note: "「彈離」定位 → 觸發警報或連鎖反應", example: "The new deploy accidentally set off the production alarm system at midnight." },
      ]
    },
    back: {
      title: "Set back",
      spatial: "定位往後推。",
      meanings: [
        { meaning: "延遲、使後退", note: "進度被「推回去」→ 讓計畫倒退", example: "The critical bug set us back by two weeks on the release schedule." },
      ]
    },
    aside: {
      title: "Set aside",
      spatial: "定位放到旁邊。",
      meanings: [
        { meaning: "擱置", note: "把事情「放到一旁」→ 暫時不處理", example: "Let's set aside the refactoring task and focus on the bug fix first." },
        { meaning: "留出、保留", note: "特意「撥到一旁」保留 → 預留時間或金錢", example: "Set aside at least two hours a week for learning new technologies." },
      ]
    }
  },

  Take: {
    off: { title: "Take off", spatial: "拿取後脫離。", meanings: [
      { meaning: "脫掉", note: "把衣物從身上「拿離」→ 脫下", example: "Take off your coat and make yourself comfortable." },
      { meaning: "起飛", note: "「離開」地面往上飛", example: "The plane took off twenty minutes late due to weather." },
      { meaning: "（事業）突然成功", note: "像「離地起飛」一樣迅速竄升 → 爆紅；同一套邏輯", example: "The new framework really took off after the conference demo." },
    ]},
    on: { title: "Take on", spatial: "拿取到自己身上。", meanings: [
      { meaning: "承擔", note: "把責任「接到身上」→ 扛起來", example: "She took on the role of tech lead when the team expanded." },
      { meaning: "聘用", note: "把人「接進」團隊裡", example: "The company is taking on fifty new engineers this quarter." },
      { meaning: "挑戰", note: "把對手的壓力「接到身上」→ 迎戰", example: "No one wants to take on the legacy codebase." },
    ]},
    up: { title: "Take up", spatial: "拿取往上。", meanings: [
      { meaning: "開始從事", note: "「拿起」一項新活動 → 投入學習", example: "He took up programming as a hobby and now he's a senior engineer." },
      { meaning: "佔據", note: "「拿起」空間或時間 → 佔用", example: "This database is taking up too much disk space." },
    ]},
    over: { title: "Take over", spatial: "拿取越過接管。", meanings: [
      { meaning: "接管、接手", note: "把控制權「拿過來」→ 全面掌控", example: "The new CTO took over the company's entire technical strategy." },
    ]},
    out: { title: "Take out", spatial: "拿取到外面。", meanings: [
      { meaning: "取出、拿出", note: "從裡面「拿到外面」", example: "Take out the hardcoded values and move them to the config file." },
      { meaning: "帶出去", note: "把人「帶出去」吃飯或約會", example: "Let me take you out to lunch — my treat." },
      { meaning: "外帶", note: "食物「帶出去」店外吃；同一個 out", example: "I'll take out a pizza on my way home." },
    ]},
    in: { title: "Take in", spatial: "拿取進裡面。", meanings: [
      { meaning: "理解、吸收", note: "把資訊「拿進」大腦裡 → 消化理解", example: "There was so much new information that I couldn't take it all in." },
    ]},
    back: { title: "Take back", spatial: "拿取回原點。", meanings: [
      { meaning: "收回（話語）", note: "把說出去的話「拿回來」→ 撤回", example: "I take back what I said — this architecture actually scales really well." },
      { meaning: "退回（商品）", note: "把商品「帶回去」→ 退貨", example: "This laptop is defective — I'm going to take it back to the store." },
    ]},
    down: { title: "Take down", spatial: "拿取往下。", meanings: [
      { meaning: "拆除、下架", note: "從高處「拿下來」→ 關閉或移除", example: "We need to take down the old API before launching the new version." },
      { meaning: "記下筆記", note: "把空中的話「拿下來」寫定 → 記錄", example: "Let me take down the meeting notes real quick." },
    ]},
    away: { title: "Take away", spatial: "拿取遠離。", meanings: [
      { meaning: "拿走、移除", note: "把東西「拿離」原位", example: "Please take away these old monitors from the office." },
      { meaning: "學到的重點", note: "從經驗中「帶走」的收穫；key takeaway", example: "The key takeaway from the postmortem is that we need better monitoring." },
    ]},
  },

  Put: {
    on: { title: "Put on", spatial: "放置到上面。", meanings: [
      { meaning: "穿上", note: "把衣物「放到」身上 → 穿戴", example: "Put on your headphones — the open office is too noisy for deep work." },
      { meaning: "假裝、裝出", note: "把面具「放到」臉上 → 假裝某種態度", example: "She put on a brave face even though the demo was failing." },
      { meaning: "上演", note: "把表演「放上」舞台 → 舉辦活動", example: "The engineering team put on a great tech talk last Friday." },
    ]},
    off: { title: "Put off", spatial: "放置推開到旁邊。", meanings: [
      { meaning: "推遲、拖延", note: "把任務「推離」自己 → 延後處理", example: "Don't put off the code review — the PR has been open for a week." },
      { meaning: "使反感", note: "把人的興趣「推開」→ 讓人倒胃口", example: "The terrible documentation put off a lot of potential contributors." },
    ]},
    up: { title: "Put up (with)", spatial: "放置往上撐。", meanings: [
      { meaning: "忍受", note: "把重壓「撐住不放下」→ 勉強忍受；put up with", example: "I can't put up with these flaky tests anymore — we need to fix them." },
      { meaning: "張貼", note: "把東西「放上」牆面 → 張貼公告", example: "They put up a notice about the server maintenance window." },
      { meaning: "搭建", note: "把結構「立起來」→ 建造", example: "The team put up a temporary staging environment in just two hours." },
    ]},
    down: { title: "Put down", spatial: "放置到下面。", meanings: [
      { meaning: "放下", note: "「往下放」→ 放開", example: "Put down your phone and focus on the sprint planning meeting." },
      { meaning: "記下", note: "把想法「放下來」紙上 → 書寫記錄", example: "Put down your ideas in a design doc before you start coding." },
      { meaning: "貶低", note: "把人的地位「往下壓」→ 批評羞辱", example: "A good leader never puts down their team members in public." },
    ]},
    out: { title: "Put out", spatial: "放置推出去。", meanings: [
      { meaning: "熄滅", note: "把火的能量「推出去」消散 → 撲滅", example: "The firefighters put out the blaze in under an hour." },
      { meaning: "發布", note: "把東西「推出去」給大眾 → 發布聲明或產品", example: "The team put out a hotfix within thirty minutes of the incident." },
    ]},
    away: { title: "Put away", spatial: "放置回去收起。", meanings: [
      { meaning: "收起來", note: "把東西「放回」該在的地方 → 歸位", example: "Put away your phone and focus on the meeting." },
      { meaning: "存錢", note: "把錢「放進」安全的地方 → 儲蓄", example: "She puts away 20% of her salary every month." },
    ]},
    in: { title: "Put in", spatial: "放置進裡面。", meanings: [
      { meaning: "投入（時間精力）", note: "把心力「放進」工作裡", example: "She put in a lot of extra hours to ship the feature on time." },
      { meaning: "安裝", note: "把設備「放進」定位 → 安裝", example: "We need to put in a new firewall before the audit." },
      { meaning: "提出（申請）", note: "把申請「放進」系統；put in a request", example: "I put in a request for a new laptop two weeks ago." },
    ]},
    together: { title: "Put together", spatial: "放置聚合在一起。", meanings: [
      { meaning: "組合、組裝", note: "零件「放到一起」→ 拼成完整的東西", example: "Let's put together a quick prototype before the stakeholder meeting." },
      { meaning: "策劃、準備", note: "把素材「湊在一起」→ 準備報告或計畫", example: "Can you put together a presentation for the board meeting?" },
    ]},
  },

  Come: {
    up: { title: "Come up", spatial: "朝說話者：浮上來。", meanings: [
      { meaning: "出現、被提起", note: "「冒上來」→ 突然被談起", example: "A critical issue came up during the code review this morning." },
      { meaning: "即將來臨", note: "事件「往上浮」到眼前 → 快到了", example: "The deadline is coming up fast — we need to prioritize." },
      { meaning: "想出", note: "點子「冒上來」→ 想到；come up with", example: "She came up with a brilliant solution to the scaling problem." },
    ]},
    down: { title: "Come down (to)", spatial: "朝說話者：降下來。", meanings: [
      { meaning: "下降", note: "數字「掉下來」→ 價格降低", example: "Prices will come down once the supply chain stabilizes." },
      { meaning: "歸結為", note: "所有因素「降落」到一個關鍵點；come down to", example: "It all comes down to whether we can ship before the deadline." },
      { meaning: "生病", note: "病「降臨」到身上；come down with", example: "Half the team came down with the flu last week." },
    ]},
    in: { title: "Come in", spatial: "朝說話者：走進來。", meanings: [
      { meaning: "進來", note: "「走進」空間內", example: "Come in! The door is open." },
      { meaning: "派上用場", note: "在關鍵時刻「走進」舞台 → 發揮作用", example: "This is where your expertise in distributed systems comes in." },
    ]},
    out: { title: "Come out", spatial: "朝說話者：走出來。", meanings: [
      { meaning: "推出、發布", note: "「走出來」公開 → 上市", example: "The new version came out with a completely redesigned API." },
      { meaning: "結果是", note: "結果「顯露出來」", example: "The tests came out positive — the fix works." },
      { meaning: "出櫃", note: "把隱藏的自我「拿出來」公開；同一個 out", example: "He came out to his family last year." },
    ]},
    back: { title: "Come back", spatial: "朝說話者：回原點。", meanings: [
      { meaning: "回來", note: "「返回」原本的地方", example: "When are you coming back from the business trip?" },
      { meaning: "再度流行", note: "潮流「回到」主流 → 復興", example: "Functional programming has really come back in recent years." },
    ]},
    across: { title: "Come across", spatial: "朝說話者：橫穿撞見。", meanings: [
      { meaning: "偶然遇到", note: "「橫向撞見」→ 意外發現", example: "I came across a useful library that solves exactly our problem." },
      { meaning: "給人...的印象", note: "形象「穿越」到對方眼中呈現的樣子", example: "He comes across as arrogant, but he's actually very helpful." },
    ]},
    along: { title: "Come along", spatial: "朝說話者：沿路一起來。", meanings: [
      { meaning: "一起來", note: "「跟著」隊伍走 → 一同前往", example: "We're going to lunch — want to come along?" },
      { meaning: "進展", note: "事情「沿著」軌道往前推進", example: "The refactoring project is coming along nicely — we're almost done." },
    ]},
    over: { title: "Come over", spatial: "朝說話者方向，越過來。", meanings: [
      { meaning: "過來拜訪", note: "「越過」距離來到你這 → 來訪", example: "Why don't you come over for dinner this weekend?" },
      { meaning: "突然感到", note: "某種情緒「越過來」籠罩全身", example: "A wave of relief came over the team when all tests passed." },
    ]},
  },

  Give: {
    up: { title: "Give up", spatial: "給出往上攤手。", meanings: [
      { meaning: "放棄", note: "「往上攤手」放掉 → 投降、不再嘗試", example: "Never give up on debugging — the answer is always in the logs." },
      { meaning: "戒掉", note: "把壞習慣「放掉」→ 不再做", example: "He gave up smoking after his doctor warned him." },
    ]},
    in: { title: "Give in", spatial: "給出向內塌陷。", meanings: [
      { meaning: "屈服、讓步", note: "抵抗力「向內塌陷」→ 承受不住壓力而妥協", example: "After hours of debate, the team gave in and adopted the new framework." },
    ]},
    out: { title: "Give out", spatial: "給出往外遞。", meanings: [
      { meaning: "分發", note: "「往外遞」→ 發放", example: "The organizers gave out free T-shirts at the tech conference." },
      { meaning: "耗盡、故障", note: "能量全「送出去」後歸零 → 用盡停擺", example: "The old server finally gave out after running nonstop for five years." },
    ]},
    away: { title: "Give away", spatial: "給出送往遠方。", meanings: [
      { meaning: "贈送", note: "「送到遠方」不再收回 → 免費送出", example: "The company is giving away free trials to attract new users." },
      { meaning: "洩露", note: "秘密「跑到遠方」→ 被知道了", example: "The error message gave away the internal file structure of the server." },
    ]},
    back: { title: "Give back", spatial: "給回原主人。", meanings: [
      { meaning: "歸還", note: "「還回去」給原來的人", example: "Can you give back the adapter when you're done?" },
      { meaning: "回饋", note: "把收穫「回送」給社群 → 貢獻回報", example: "Contributing to open source is a great way to give back to the community." },
    ]},
  },

  Make: {
    up: { title: "Make up", spatial: "製造拼湊往上補齊。", meanings: [
      { meaning: "捏造、編造", note: "「拼湊」出不存在的故事 → 虛構", example: "Don't make up excuses — just tell the client the real reason for the delay." },
      { meaning: "和好", note: "把裂開的關係「拼回去」→ 重歸於好", example: "They had a big argument but made up the next day." },
      { meaning: "化妝", note: "在臉上「塗拼」出更好的面貌；名詞 makeup", example: "She spent thirty minutes making up before the video interview." },
      { meaning: "構成、組成", note: "部分「拼湊成」整體 → 佔某個比例", example: "Women make up 30% of the engineering team." },
      { meaning: "彌補", note: "把缺口「補上」→ 補償過失；make up for", example: "We'll work overtime this week to make up for the lost sprint." },
    ]},
    out: { title: "Make out", spatial: "製造把形狀辨認出來。", meanings: [
      { meaning: "辨認、看清", note: "從模糊中把輪廓「辨認出來」→ 辨識", example: "I can barely make out what this error message is trying to say." },
      { meaning: "理解", note: "把混亂的事「理出」頭緒 → 搞懂；同一套邏輯", example: "I can't make out why the test keeps failing." },
    ]},
  },

  Pick: {
    up: { title: "Pick up", spatial: "挑選撿起往上。", meanings: [
      { meaning: "撿起、拿起", note: "把東西「撿起來」", example: "Can you pick up that cable from the floor?" },
      { meaning: "學會", note: "像撿東西一樣「拾起」新技能 → 快速學到", example: "She picked up Python really quickly — within a month she was writing scripts." },
      { meaning: "接人", note: "把人「接起來」帶走", example: "I'll pick you up at the airport at 3 PM." },
      { meaning: "接電話", note: "把話筒「拿起來」", example: "Nobody picked up when I called the support line." },
      { meaning: "好轉", note: "數字「往上撿」→ 業績好轉", example: "Sales usually pick up in the fourth quarter." },
    ]},
    out: { title: "Pick out", spatial: "挑選出來。", meanings: [
      { meaning: "挑選", note: "從一堆中「挑出來」→ 選擇", example: "It's hard to pick out the right database when there are so many options." },
      { meaning: "認出", note: "從一堆中「辨認出來」→ 找到特定目標", example: "Can you pick out the bug in this code?" },
    ]},
    on: { title: "Pick on", spatial: "挑選針對在某人上。", meanings: [
      { meaning: "找碴、霸凌", note: "反覆「挑」同一人 → 故意針對欺負", example: "Stop picking on the junior devs — help them grow instead." },
    ]},
  },

  Hold: {
    on: { title: "Hold on", spatial: "抓住在上面。", meanings: [
      { meaning: "等一下", note: "「抓住」不動 → 請對方暫停", example: "Hold on — let me check the logs before we restart the service." },
      { meaning: "堅持住", note: "「死命抓住」不放手 → 撐住不放棄", example: "Hold on, the fix is almost deployed!" },
    ]},
    up: { title: "Hold up", spatial: "抓住往上撐。", meanings: [
      { meaning: "耽誤、延遲", note: "「撐在路上」擋住 → 阻礙進度", example: "The code review is holding up the entire release pipeline." },
      { meaning: "經得住考驗", note: "在壓力下「撐住」沒垮 → 經得起", example: "The old codebase is still holding up surprisingly well." },
    ]},
    back: { title: "Hold back", spatial: "抓住往後拉。", meanings: [
      { meaning: "壓抑", note: "把情緒「往後拉住」→ 強忍", example: "She held back her frustration during the entire meeting." },
      { meaning: "阻礙", note: "把想前進的東西「拉住」→ 阻止進步", example: "Legacy code is holding back our development velocity." },
      { meaning: "隱瞞", note: "把資訊「扣住」不放出去 → 保留不說", example: "Don't hold back your ideas in the brainstorming session." },
    ]},
  },

  Keep: {
    up: { title: "Keep up (with)", spatial: "維持：保持在上面。", meanings: [
      { meaning: "跟上", note: "拼命「保持」在前方同速 → 不掉隊；keep up with", example: "It's hard to keep up with all the new JavaScript frameworks." },
      { meaning: "維持", note: "把水平「保持在上面」→ 維持好表現", example: "Keep up the good work — the sprint velocity looks great!" },
    ]},
    on: { title: "Keep on", spatial: "維持：持續踩在軌道上。", meanings: [
      { meaning: "繼續", note: "「持續在」軌道上不停 → 不斷重複做", example: "Keep on trying — you'll eventually find the root cause of the bug." },
    ]},
    out: { title: "Keep out (of)", spatial: "維持：擋在外面。", meanings: [
      { meaning: "禁止進入", note: "把人「擋在外面」→ 不准進來", example: "Keep out of the production server unless you have admin access." },
      { meaning: "別介入", note: "自己「留在外面」不插手", example: "This is between the two of them — I'm going to keep out of it." },
    ]},
  },

  Hang: {
    out: { title: "Hang out", spatial: "懸掛在外面。", meanings: [
      { meaning: "閒逛、出去玩", note: "像衣服「掛在外面」→ 輕鬆地待著消磨時間", example: "The team likes to hang out at the coffee shop after standup." },
    ]},
    up: { title: "Hang up", spatial: "懸掛回上面。", meanings: [
      { meaning: "掛電話", note: "把話筒「掛回去」→ 結束通話", example: "She hung up before I could explain why the deployment failed." },
      { meaning: "掛起來", note: "把東西「掛到」牆上或架上", example: "Hang up your coat when you come in." },
    ]},
    on: { title: "Hang on", spatial: "懸掛死命抓在上面。", meanings: [
      { meaning: "稍等", note: "「抓住」現狀不動 → 等一下（同 hold on）", example: "Hang on, I need to double-check this config before you push." },
      { meaning: "堅持、緊抓", note: "「死命抓住」不放 → 撐住", example: "Hang on tight — this refactoring is going to be a bumpy ride." },
    ]},
  },

  Fall: {
    apart: { title: "Fall apart", spatial: "掉落散開分離。", meanings: [
      { meaning: "崩潰、瓦解", note: "組成部分「掉散」→ 計畫或系統完全崩壞", example: "The whole migration plan fell apart when we discovered the data format was wrong." },
      { meaning: "（人）精神崩潰", note: "心理「碎裂散開」→ 撐不住了", example: "He completely fell apart after working 80-hour weeks for three months." },
    ]},
    behind: { title: "Fall behind", spatial: "掉到後面。", meanings: [
      { meaning: "落後", note: "「掉到後面」→ 進度跟不上", example: "We're falling behind on the sprint — we need to cut some scope." },
    ]},
    for: { title: "Fall for", spatial: "栽倒向前撲向。", meanings: [
      { meaning: "愛上", note: "不受控地「栽倒」向某人 → 墜入愛河", example: "He fell for her the moment they met at the tech conference." },
      { meaning: "上當", note: "「栽進」陷阱 → 被騙了；同一套邏輯", example: "Don't fall for phishing emails — always check the sender's domain." },
    ]},
    through: { title: "Fall through", spatial: "掉穿過去落空。", meanings: [
      { meaning: "計畫泡湯、告吹", note: "計畫「掉穿」地板 → 落空失敗", example: "The acquisition deal fell through at the last minute." },
    ]},
  },

  Carry: {
    on: { title: "Carry on", spatial: "搬運著繼續往前。", meanings: [
      { meaning: "繼續", note: "扛著「繼續走」→ 持續做正在做的事", example: "Let's carry on with the meeting — we only have ten minutes left." },
      { meaning: "隨身攜帶", note: "「扛著」上飛機的行李；carry-on", example: "You can carry on one bag and one personal item." },
    ]},
    out: { title: "Carry out", spatial: "搬到外面去做。", meanings: [
      { meaning: "執行、實施", note: "把計畫「搬出去」變成行動 → 落實", example: "The QA team carried out a full regression test before the release." },
    ]},
  },

  Cut: {
    off: { title: "Cut off", spatial: "切斷分離。", meanings: [
      { meaning: "切斷", note: "把連接「切斷」→ 切斷供應或通路", example: "The API was cut off after exceeding the rate limit." },
      { meaning: "打斷", note: "把別人的話「切斷」→ 中斷發言", example: "Sorry to cut you off, but we're running out of time." },
    ]},
    out: { title: "Cut out", spatial: "切割剪出去。", meanings: [
      { meaning: "停止", note: "把壞行為「剪掉」→ 別再做了；cut it out!", example: "Cut it out! Stop pushing directly to main." },
      { meaning: "省略、移除", note: "把不需要的部分「剪出去」→ 去掉", example: "Cut out the unnecessary dependencies — they're slowing down the build." },
      { meaning: "適合做", note: "像被「裁剪」出來剛好對上 → 天生適合；be cut out for", example: "Not everyone is cut out for on-call duty." },
    ]},
    down: { title: "Cut down (on)", spatial: "切割砍下來。", meanings: [
      { meaning: "減少、削減", note: "把高的「砍矮」→ 降低使用量或消費", example: "We need to cut down on cloud spending before the budget runs out." },
    ]},
  },

  Work: {
    out: { title: "Work out", spatial: "勞動把力氣使出去。", meanings: [
      { meaning: "運動、健身", note: "把力氣「使出去」→ 鍛鍊身體", example: "I try to work out at least three times a week." },
      { meaning: "解決、算出", note: "把問題「做出來」→ 找到答案", example: "We need to work out a solution before the deadline." },
      { meaning: "成功、順利", note: "努力最終「做出」好結果 → 事情順利；同一套邏輯", example: "Don't worry — things will work out in the end." },
    ]},
    on: { title: "Work on", spatial: "勞動持續在上面施工。", meanings: [
      { meaning: "致力於、開發", note: "「持續在」某件事上面做", example: "I've been working on this feature for two weeks now." },
      { meaning: "改善", note: "在某方面「用力加工」→ 努力改進", example: "You need to work on your communication skills." },
    ]},
  },

  Find: {
    out: { title: "Find out", spatial: "找到後翻到外面。", meanings: [
      { meaning: "發現、查明", note: "把藏著的真相「翻出來」→ 得知原本不知道的事", example: "We need to find out what caused the outage last night." },
      { meaning: "被發現", note: "做的壞事被「翻出來」→ 秘密曝光", example: "He was copying code from Stack Overflow and got found out." },
    ]},
  },

  Figure: {
    out: { title: "Figure out", spatial: "推理把答案理出來。", meanings: [
      { meaning: "想出、弄清楚", note: "把混亂的線索「理出」邏輯 → 透過思考找到答案", example: "I finally figured out why the tests were failing — it was a race condition." },
      { meaning: "理解", note: "把看不懂的「理出」頭緒 → 搞懂", example: "I can't figure out how this legacy code works." },
    ]},
  },

  Show: {
    up: { title: "Show up", spatial: "展示往上現身。", meanings: [
      { meaning: "出現、到場", note: "從隱形「浮上來」被看見 → 人到了", example: "He didn't show up to the meeting — again." },
      { meaning: "使某人難堪", note: "表現「凸顯出來」讓別人相形見絀", example: "The intern's code quality showed up some of the senior engineers." },
    ]},
    off: { title: "Show off", spatial: "展示到外面。", meanings: [
      { meaning: "炫耀", note: "把東西「亮出去」讓大家看 → 故意引人注目", example: "He loves to show off his new mechanical keyboard." },
      { meaning: "展示", note: "正面地把成果「展現出來」", example: "Let me show off the new dashboard we just built." },
    ]},
  },

  Check: {
    out: { title: "Check out", spatial: "檢查看出去。", meanings: [
      { meaning: "查看、了解", note: "把視線「投出去」仔細看 → 看看這個東西", example: "Check out this new VS Code extension — it's really useful." },
      { meaning: "結帳", note: "結算完「走出去」→ 付款", example: "I added the items to my cart but haven't checked out yet." },
      { meaning: "退房", note: "辦完手續「走出去」→ 退房", example: "We need to check out of the hotel by noon." },
    ]},
    in: { title: "Check in", spatial: "檢查走進去登記。", meanings: [
      { meaning: "報到、登記", note: "「走進」櫃台辦手續 → 登記", example: "You can check in online 24 hours before your flight." },
      { meaning: "關心問候", note: "「走進」對方的狀況了解一下；check in with somebody", example: "I'll check in with the team to see how the sprint is going." },
    ]},
  },

  End: {
    up: { title: "End up", spatial: "結束走到底停住。", meanings: [
      { meaning: "最終（成為/到達）", note: "「走到最後」停在意外的結局 → 結果竟然...", example: "We started with a simple script and ended up building a whole framework." },
    ]},
  },

  Catch: {
    up: { title: "Catch up", spatial: "抓住往上追趕。", meanings: [
      { meaning: "趕上進度", note: "加速「追上」前方 → 補上落後的部分；catch up on", example: "I need to catch up on the emails I missed while on vacation." },
      { meaning: "敘舊", note: "走散後「追上」彼此 → 聊聊近況", example: "Let's grab coffee and catch up — it's been ages!" },
    ]},
  },

  Point: {
    out: { title: "Point out", spatial: "指向外面。", meanings: [
      { meaning: "指出、提醒", note: "「指出去」讓大家注意 → 提醒某個事實或問題", example: "She pointed out a critical flaw in the database schema." },
    ]},
  },

  Throw: {
    away: { title: "Throw away", spatial: "扔向遠方。", meanings: [
      { meaning: "丟掉、扔掉", note: "把不要的「扔向遠方」→ 丟棄", example: "Don't throw away that old laptop — we can recycle it." },
      { meaning: "浪費", note: "把好東西「扔掉」→ 白白浪費機會", example: "Don't throw away this opportunity by being unprepared." },
    ]},
    out: { title: "Throw out", spatial: "扔到外面。", meanings: [
      { meaning: "丟掉", note: "「扔出去」→ 丟棄", example: "We should throw out these outdated config files." },
      { meaning: "趕出去", note: "把人「扔到外面」→ 驅逐", example: "The bouncer threw him out of the club for causing trouble." },
      { meaning: "提出（想法）", note: "把點子「拋出去」給大家討論", example: "Let me throw out a few ideas and see what sticks." },
    ]},
    up: { title: "Throw up", spatial: "往上噴。", meanings: [
      { meaning: "嘔吐", note: "胃的內容物「往上噴出」→ 吐", example: "He felt so sick that he threw up in the bathroom." },
    ]},
  },

  Stand: {
    out: { title: "Stand out", spatial: "站出來。", meanings: [
      { meaning: "突出、引人注目", note: "「站得比別人高」→ 在人群中特別顯眼", example: "Her resume really stands out from the other candidates." },
    ]},
    up: { title: "Stand up", spatial: "站起來。", meanings: [
      { meaning: "站起來", note: "身體「立起來」", example: "Everyone stood up when the CEO walked in." },
      { meaning: "放鴿子", note: "讓對方「站著等」卻沒出現 → 爽約", example: "She stood me up — I waited at the restaurant for an hour." },
      { meaning: "站得住腳", note: "論點能「站穩」不倒 → 經得起檢驗", example: "Will this argument stand up in a code review?" },
    ]},
    for: { title: "Stand for", spatial: "站在前面代表。", meanings: [
      { meaning: "代表", note: "「站在」符號前面 → 象徵某個意思", example: "What does API stand for? Application Programming Interface." },
      { meaning: "容忍", note: "「站著」承受壓力 → 忍受（常用否定）", example: "I won't stand for this kind of behavior in the workplace." },
    ]},
    by: { title: "Stand by", spatial: "站在旁邊。", meanings: [
      { meaning: "待命、備用", note: "「站在旁邊」隨時準備上場 → 待命支援", example: "The DevOps team is standing by during the server migration." },
      { meaning: "支持", note: "「站在旁邊」不離開 → 堅定支持", example: "She stood by her decision despite all the criticism." },
    ]},
  },

  Blow: {
    up: { title: "Blow up", spatial: "氣往上炸。", meanings: [
      { meaning: "爆炸", note: "壓力累積「往上炸開」", example: "The gas pipeline blew up and caused a massive fire." },
      { meaning: "暴怒", note: "情緒「膨脹爆炸」→ 突然大發脾氣", example: "The manager blew up when he saw the production bug." },
      { meaning: "爆紅", note: "知名度「爆炸式擴大」→ 突然走紅；同一套邏輯", example: "That TikTok video blew up overnight — it got 10 million views." },
    ]},
    off: { title: "Blow off", spatial: "吹離。", meanings: [
      { meaning: "放鴿子、不去", note: "把約定「吹掉」→ 故意不出席", example: "He blew off the team meeting to play video games." },
      { meaning: "發洩", note: "把壓力像蒸汽「吹出去」；blow off steam", example: "I need to blow off some steam after that stressful sprint." },
    ]},
  },

  Sign: {
    up: { title: "Sign up", spatial: "簽上去。", meanings: [
      { meaning: "註冊、報名", note: "把名字「簽上」名單 → 加入或登記", example: "Over 500 people signed up for the free trial in the first week." },
    ]},
    in: { title: "Sign in", spatial: "簽進去。", meanings: [
      { meaning: "登入", note: "「簽名進入」系統 → 輸入帳密登入", example: "You need to sign in with your company email to access the dashboard." },
    ]},
    out: { title: "Sign out", spatial: "簽出去。", meanings: [
      { meaning: "登出", note: "「簽名離開」系統 → 結束連線", example: "Don't forget to sign out when you leave a shared computer." },
    ]},
    off: { title: "Sign off (on)", spatial: "簽完移開放行。", meanings: [
      { meaning: "簽核、批准", note: "簽完「移開放行」→ 同意通過；sign off on something", example: "We need the tech lead to sign off on this deployment." },
    ]},
  },

  Shut: {
    down: { title: "Shut down", spatial: "全關死往下停。", meanings: [
      { meaning: "關閉、停止運作", note: "把開口「全關死」→ 系統完全停擺", example: "We need to shut down the server for maintenance tonight." },
      { meaning: "駁倒、使閉嘴", note: "把對方的論點「關死」→ 讓人無話可說", example: "She shut down every objection with solid data." },
    ]},
    up: { title: "Shut up", spatial: "把嘴關上。", meanings: [
      { meaning: "閉嘴", note: "把嘴「關住」→ 停止說話（不太禮貌）", example: "I wish the noisy neighbors would shut up after midnight." },
    ]},
  },

  Drop: {
    out: { title: "Drop out", spatial: "掉出隊伍。", meanings: [
      { meaning: "退學、退出", note: "從隊伍「掉出去」→ 中途放棄離開", example: "He dropped out of college to start his own company." },
    ]},
    off: { title: "Drop off", spatial: "放下離開。", meanings: [
      { meaning: "放下、送達", note: "把人或物「放下」後離開 → 順路送到", example: "Can you drop off the documents at the front desk?" },
      { meaning: "（數量）下降", note: "數字「掉下來」→ 減少", example: "Website traffic usually drops off after the holidays." },
      { meaning: "睡著", note: "意識「掉下去」→ 不知不覺睡著", example: "I was so tired that I dropped off during the meeting." },
    ]},
    by: { title: "Drop by", spatial: "經過旁邊停一下。", meanings: [
      { meaning: "順道拜訪", note: "「經過」順便停一下", example: "Feel free to drop by my office if you have any questions." },
    ]},
  },

  Pull: {
    off: { title: "Pull off", spatial: "拉離困境。", meanings: [
      { meaning: "成功做到", note: "在困難中「拉出」好結果 → 出乎意料地成功", example: "I can't believe we pulled off the launch with only three engineers." },
    ]},
    out: { title: "Pull out", spatial: "拉出來。", meanings: [
      { meaning: "撤出、退出", note: "把自己「拉出」某個局面 → 撤退", example: "The investor decided to pull out of the deal at the last minute." },
      { meaning: "拿出", note: "「拉出來」到外面", example: "He pulled out his laptop and started coding right away." },
    ]},
    over: { title: "Pull over", spatial: "拉到旁邊。", meanings: [
      { meaning: "靠邊停車", note: "把車「拉向」路邊 → 停到旁邊", example: "The police officer asked the driver to pull over." },
    ]},
  },

  Clean: {
    up: { title: "Clean up", spatial: "往上收攏清乾淨。", meanings: [
      { meaning: "清理、打掃", note: "把髒亂「收攏清乾淨」→ 恢復整潔", example: "We need to clean up this legacy code before adding new features." },
    ]},
  },

  Wrap: {
    up: { title: "Wrap up", spatial: "包起來收好。", meanings: [
      { meaning: "結束、收尾", note: "「打包完成」→ 結束會議或工作", example: "Let's wrap up the meeting and grab some lunch." },
    ]},
  },

  Move: {
    on: { title: "Move on", spatial: "移動繼續往前。", meanings: [
      { meaning: "繼續前進、放下", note: "離開原地「往前走」→ 進入下一個話題或放下過去", example: "This bug is fixed, let's move on to the next ticket." },
    ]},
  },

  Fill: {
    out: { title: "Fill out", spatial: "填到滿出來。", meanings: [
      { meaning: "填寫（表格）", note: "把空白「填滿」→ 完成表格或文件", example: "Please fill out this form before the interview." },
    ]},
  },

  Back: {
    up: { title: "Back up", spatial: "在後面支撐。", meanings: [
      { meaning: "支持、挺某人", note: "「站在後面」當靠山 → 支持某人的決定", example: "Don't worry, whatever you decide, I will back you up." },
      { meaning: "備份", note: "在「後面」留一份副本 → 備份資料", example: "Remember to back up the production database before making any changes." },
      { meaning: "倒車", note: "車子「往後退」", example: "Can you back up a little? You're too close to the wall." },
    ]},
  },

  Call: {
    off: { title: "Call off", spatial: "喊掉移走。", meanings: [
      { meaning: "取消", note: "用聲音把安排「喊掉」→ 取消活動或計畫", example: "The manager called off the meeting at the last minute." },
    ]},
    back: { title: "Call back", spatial: "喊回去。", meanings: [
      { meaning: "回電話", note: "把電話「打回去」→ 稍後回撥", example: "I'm in a meeting right now, I'll call you back later." },
      { meaning: "回呼（程式）", note: "完成後「呼叫回去」通知 → callback function", example: "The API will call back your webhook when the job is done." },
    ]},
  },

  Sort: {
    out: { title: "Sort out", spatial: "分好理出去。", meanings: [
      { meaning: "解決、搞定", note: "把混亂的「分好理順」→ 把問題處理好", example: "Don't worry about the configuration issue, I'll sort it out." },
    ]},
  },

  Burn: {
    out: { title: "Burn out", spatial: "燒光熄滅。", meanings: [
      { meaning: "筋疲力竭、倦怠", note: "「燒光」歸零 → 過度工作導致身心耗盡", example: "If you keep working 12 hours a day, you are going to burn out very soon." },
    ]},
  },

  Calm: {
    down: { title: "Calm down", spatial: "往下沉靜。", meanings: [
      { meaning: "冷靜、平靜下來", note: "情緒「往下降」→ 從激動恢復平靜", example: "Calm down — it's just a staging bug, not production." },
    ]},
  },

  Grow: {
    up: { title: "Grow up", spatial: "往上長。", meanings: [
      { meaning: "長大", note: "「往上長」→ 從小孩變成大人", example: "I grew up in Taipei and moved to the US for college." },
      { meaning: "成熟點", note: "叫對方趕快「長上來」→ 行為成熟一點", example: "Oh, grow up! Stop complaining about the code review." },
    ]},
  },

  Wake: {
    up: { title: "Wake up", spatial: "意識浮上來。", meanings: [
      { meaning: "醒來", note: "意識「浮上」水面 → 從睡眠中清醒", example: "I usually wake up at 7 and start coding by 8." },
      { meaning: "醒悟、認清現實", note: "大腦「醒過來」→ 不再自欺欺人", example: "Wake up — the deadline is tomorrow and we haven't even started testing." },
    ]},
  },

  Mess: {
    up: { title: "Mess up", spatial: "全翻亂了。", meanings: [
      { meaning: "搞砸", note: "把原本好的「弄亂」→ 犯錯、搞砸事情", example: "I messed up the deployment and the whole site went down." },
    ]},
  },

  Freak: {
    out: { title: "Freak out", spatial: "情緒炸出去。", meanings: [
      { meaning: "抓狂、嚇壞", note: "情緒「炸出去」無法控制 → 極度緊張或恐慌", example: "Don't freak out, but I think I just deleted the production database." },
    ]},
  },

  Pay: {
    off: { title: "Pay off", spatial: "全部付清離開。", meanings: [
      { meaning: "有回報", note: "長期投入終於「付清」→ 努力得到了回報", example: "All those late nights finally paid off — we launched on time." },
      { meaning: "還清", note: "把欠款「全部付掉」→ 清償債務", example: "It took me five years to pay off my student loans." },
    ]},
  },

  Reach: {
    out: { title: "Reach out", spatial: "手伸出去。", meanings: [
      { meaning: "主動聯繫", note: "手「伸出去」和對方連結 → 主動找某人溝通（職場超常用）", example: "Feel free to reach out if you have any questions about the API." },
    ]},
  },

  Kick: {
    off: { title: "Kick off", spatial: "把球踢出去。", meanings: [
      { meaning: "開始、啟動", note: "像開球「踢出去」→ 正式啟動活動或專案", example: "Let's kick off the sprint with a quick planning session." },
    ]},
  },

  Roll: {
    out: { title: "Roll out", spatial: "滾出去鋪開。", meanings: [
      { meaning: "推出、部署", note: "把準備好的「滾展開」→ 正式發布給用戶", example: "We're planning to roll out the new feature next Monday." },
    ]},
  },

  Lay: {
    off: { title: "Lay off", spatial: "把人放下來移開。", meanings: [
      { meaning: "裁員", note: "把人從崗位「放下移走」→ 因經濟因素解僱（非表現問題）", example: "The company laid off 200 engineers due to budget cuts." },
    ]},
  },

  Pass: {
    out: { title: "Pass out", spatial: "意識散出去。", meanings: [
      { meaning: "昏倒", note: "意識「散出去」歸零 → 失去知覺倒下", example: "He passed out from exhaustion after the 24-hour hackathon." },
      { meaning: "分發", note: "「一份份遞出去」→ 發放", example: "Can you pass out these handouts to everyone in the meeting?" },
    ]},
    up: { title: "Pass up", spatial: "讓機會往上飄走。", meanings: [
      { meaning: "放棄、錯過機會", note: "機會「經過」卻讓它「飄走」→ 主動放棄", example: "You'd be crazy to pass up this job offer." },
    ]},
  },

  Let: {
    down: { title: "Let down", spatial: "把期望放下。", meanings: [
      { meaning: "讓人失望", note: "把別人的期望「放下」摔碎 → 辜負信任", example: "I trusted you with this project — don't let me down." },
    ]},
  },
};
