﻿export const VERBS = [
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
  Get:    { core: "主動去「取得/達到」某個結果（實體或狀態）", highlight: true },
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
  Break:  { core: "用力「打破」某個完整的結構或邊界，讓它裂開/穿透/或崩塌", highlight: true },
  Set:    { core: "「放置/固定」" },
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
  down:    { spatial: '往下', metaphor: '也代表「減少/崩塌」— 從高處垮下來' },
  in:      { spatial: '在裡面（靜態）', metaphor: '強調「已經處於容器內的狀態」' },
  into:    { spatial: '往裡面衝（動態）', metaphor: '帶有「破壞邊界/擠進去/產生質變」的動態箭頭' },
  out:     { spatial: '往外面', metaphor: '也代表「真相大白」或「消失歸零」— 東西拿出來就看清全貌；能量散出去就什麼都不剩' },
  on:      { spatial: '在上面 / 接觸', metaphor: '也代表「持續進行」— 腳踩在路上繼續走' },
  off:     { spatial: '離開 / 脫離', metaphor: '也代表「偏離正軌/取消」— 連接切斷後，原本的行程就被迫停下' },
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
  apart:   { spatial: '分離', metaphor: '各部分散開/崩解' },
  behind:  { spatial: '在後面', metaphor: '落後/跟不上' },
  by:      { spatial: '在旁邊', metaphor: '近距離待命或擦身而過' },
  with:    { spatial: '一起', metaphor: '伴隨/同行' },
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
        { meaning: "查一下/追一下", plainEnglish: "to check or investigate", grammar: ['transitive', 'inseparable'], followedBy: 'noun / V-ing', sceneObject: { emoji: "🔍", label: "文件" }, note: "視線「穿進去」內部 → 不看表面，直接追查根本原因", example: "I'll look into it and get back to you." },
      ]
    },
    down: {
      title: "Look down on",
      spatial: "視線從高處往下看。",
      coreMotion: 'gaze-descend',
      isWeldedBlock: true,
      meanings: [
        { meaning: "瞧不起/看扁", plainEnglish: "to think someone is below you", grammar: ['transitive', 'inseparable'], followedBy: 'noun', sceneObject: { emoji: "🧑", label: "被看扁的人" }, note: "從高處「往下看」對方 → 覺得別人比自己低", example: "You shouldn't look down on anyone just because of their job." },
      ]
    },
    up: {
      title: "Look up",
      spatial: "視線從低處往上搜尋。",
      coreMotion: 'scan-ascend',
      meanings: [
        { meaning: "查一下", plainEnglish: "to find information about it", grammar: ['transitive', 'separable'], followedBy: 'noun', sceneObject: { emoji: "📖", label: "翻書查字" }, note: "在資料裡「往上翻找」直到目標浮現", example: "If you don't know the word, look it up in the dictionary." },
        { meaning: "有起色", plainEnglish: "to start getting better", grammar: ['intransitive'], sceneObject: { emoji: "📈", label: "趨勢反彈" }, note: "觸底後「往上彈」→ 情況開始改善", example: "Things are finally looking up after a rough few months." },
        { meaning: "去看看", plainEnglish: "to go visit someone", grammar: ['transitive', 'separable'], followedBy: 'noun', sceneObject: { emoji: "🏠", label: "拜訪朋友" }, note: "在通訊錄裡「往上查到」某人，然後去拜訪", example: "Do look me up the next time you're in Taipei." },
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
        { meaning: "瞄一下/掃一眼", plainEnglish: "to quickly check something", grammar: ['transitive', 'separable'], followedBy: 'noun', sceneObject: { emoji: "📄", label: "掃過文件" }, note: "視線「掠過去」不深入 → 粗略瀏覽", example: "Can you look over my essay before I hand it in?" },
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
        { meaning: "顧/照顧", plainEnglish: "to watch and protect someone", grammar: ['transitive', 'inseparable'], followedBy: 'noun', sceneObject: { emoji: "👶", label: "顧小孩" }, note: "視線「黏在後面」不離開 → 持續盯著確保安全", example: "Can you look after my cat while I'm away this weekend?" },
      ]
    },
    for: {
      title: "Look for",
      spatial: "視線朝著目標方向搜尋。",
      coreMotion: 'gaze-target',
      meanings: [
        { meaning: "找", plainEnglish: "to try to find something", grammar: ['transitive', 'inseparable'], followedBy: 'noun', sceneObject: { emoji: "🔎", label: "掃射找目標" }, note: "視線「朝向」目標不斷掃射 → 帶著目的搜索", example: "I'm looking for my keys. Have you seen them?" },
      ]
    },
    forward: {
      title: "Look forward to",
      spatial: "視線投向前方的未來。",
      coreMotion: 'gaze-advance',
      isWeldedBlock: true,
      meanings: [
        { meaning: "超期待/好期待", plainEnglish: "to be excited about something coming", grammar: ['transitive', 'inseparable'], followedBy: 'V-ing / noun', sceneObject: { emoji: "🎉", label: "未來的好事" }, note: "目光「投向前方」即將到來的事 → 滿心期待", example: "I'm really looking forward to the summer vacation!" },
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
        { meaning: "婉拒/推掉", plainEnglish: "to say no to an offer", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "📋", label: "提議" }, note: "把對方的提議「往下轉」冷掉 → 回絕", example: "She turned down the job offer because the pay was too low." },
        { meaning: "調小聲/調低", plainEnglish: "to make it quieter or lower", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "🔉", label: "音量" }, note: "旋鈕「往下轉」→ 音量/溫度降低", example: "Can you turn down the TV? The baby is sleeping." },
      ]
    },
    up: {
      title: "Turn up",
      spatial: "旋轉往上 / 浮上來。",
      coreMotion: 'spin-ascend',
      meanings: [
        { meaning: "意外出現/冒出來", plainEnglish: "to show up unexpectedly", grammar: 'intransitive', sceneObject: { emoji: "🔑", label: "失蹤物" }, note: "沉底的東西「往上轉出來」→ 意外浮現", example: "Don't worry, your missing wallet will turn up." },
        { meaning: "調大聲/調高", plainEnglish: "to make it louder or higher", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "🔊", label: "音量" }, note: "旋鈕「往上轉」→ 音量/溫度升高", example: "Can you turn up the TV? I can barely hear it." },
      ]
    },
    out: {
      title: "Turn out",
      spatial: "轉動後結果跑到外面。",
      coreMotion: 'spin-exit',
      meanings: [
        { meaning: "結果竟然/沒想到", plainEnglish: "to end up a certain way", grammar: 'intransitive', followedBy: 'to V', sceneObject: { emoji: "🎁", label: "最終結果" }, note: "事情一番運轉後，真相「轉出來」→ 最終揭曉", example: "She turned out to be my old classmate." },
      ]
    },
    off: {
      title: "Turn off",
      spatial: "轉離，脫離接觸。",
      coreMotion: 'spin-detach',
      meanings: [
        { meaning: "關掉", plainEnglish: "to stop something from working", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "💡", label: "電器" }, note: "開關「轉離」接通位置 → 電流切斷，停止運作", example: "Don't forget to turn off the lights when you leave." },
        { meaning: "讓人倒胃口/掃興", plainEnglish: "to make someone lose interest", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "😒", label: "失去興趣" }, note: "好感的「電源被轉掉」→ 興趣斷電", example: "His bad attitude really turns me off." },
      ]
    },
    on: {
      title: "Turn on",
      spatial: "轉到，接上接觸。",
      coreMotion: 'spin-connect',
      meanings: [
        { meaning: "打開/開啟", plainEnglish: "to make something start working", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "💡", label: "電器" }, note: "開關「轉到」接通位置 → 電流接上，開始運作", example: "Can you turn on the lights? It's getting dark in here." },
        { meaning: "讓人來電/有吸引力", plainEnglish: "to make someone feel attracted", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "😍", label: "被吸引" }, note: "好感的「電源接上」→ 興趣通電，來電了", example: "Confidence is the thing that turns me on the most." },
      ]
    },
    around: {
      title: "Turn around",
      spatial: "整個轉一圈，方向相反。",
      coreMotion: 'spin-reverse',
      meanings: [
        { meaning: "轉身/調頭", plainEnglish: "to face or go the opposite way", grammar: 'intransitive', sceneObject: { emoji: "🚶", label: "人" }, note: "「轉 180 度」→ 整個面向反方向", example: "I called her name and she turned around and smiled." },
        { meaning: "扭轉局面/讓情況好轉", plainEnglish: "to make a bad situation better", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "📉", label: "壞局面" }, note: "把下滑的局面「整個轉過來」→ 從壞變好", example: "He was failing all his classes, but turned things around in the second semester." },
      ]
    }
  },

  Bring: {
    down: {
      title: "Bring down",
      spatial: "手把東西往下帶。",
      coreMotion: 'carry-descend',
      meanings: [
        {
          meaning: "降低/壓低",
          plainEnglish: "to reduce something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📉", label: "物價" },
          note: "手把東西「往下帶」→ 數字/價格往下壓",
          example: "The supermarket is trying hard to bring down the prices.",
        },
        {
          meaning: "讓人沮喪/打垮",
          plainEnglish: "to make someone feel sad",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "😔", label: "心情" },
          note: "把人的情緒「往下拉」→ 讓心情一落千丈",
          example: "Don't let one bad grade bring you down.",
        },
      ]
    },
    up: {
      title: "Bring up",
      spatial: "手把東西往上帶。",
      coreMotion: 'carry-ascend',
      meanings: [
        {
          meaning: "提到/講起",
          plainEnglish: "to mention something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💬", label: "話題" },
          note: "把話題「舉上桌面」→ 在對話中主動談起",
          example: "Please don't bring that up again — it's already settled.",
        },
        {
          meaning: "養大/扶養",
          plainEnglish: "to raise a child",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👦", label: "孩子" },
          note: "把孩子「一路帶著往上長」→ 養育到長大成人",
          example: "She was brought up by her grandparents in the countryside.",
        },
      ]
    },
    out: {
      title: "Bring out",
      spatial: "手把東西從裡面帶出來。",
      coreMotion: 'carry-exit',
      meanings: [
        {
          meaning: "推出/上市",
          plainEnglish: "to release something new",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📦", label: "新品" },
          note: "把東西從內部「帶出來」公開 → 正式發布上市",
          example: "They're bringing out a new flavor next month.",
        },
        {
          meaning: "激發/讓…展現",
          plainEnglish: "to reveal the best in someone",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "✨", label: "潛能" },
          note: "把藏在裡面的好東西「帶出來」→ 讓隱藏的才華顯現",
          example: "The new coach really brings out the best in everyone.",
        },
      ]
    },
    back: {
      title: "Bring back",
      spatial: "手把東西帶回原點。",
      coreMotion: 'carry-return',
      meanings: [
        {
          meaning: "帶回來",
          plainEnglish: "to return something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧳", label: "伴手禮" },
          note: "手把東西「帶回」原來的地方 → 歸還或從外地帶回",
          example: "Can you bring back some snacks when you come home?",
        },
        {
          meaning: "喚起回憶",
          plainEnglish: "to make you remember something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📸", label: "回憶" },
          note: "把沉睡在過去的畫面「帶回來」眼前 → 勾起懷念",
          example: "That song brings back so many good memories.",
        },
      ]
    },
    in: {
      title: "Bring in",
      spatial: "手把東西帶進來裡面。",
      coreMotion: 'carry-enter',
      meanings: [
        {
          meaning: "引進/請來",
          plainEnglish: "to bring someone in from outside",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👩‍💼", label: "外部專家" },
          note: "把外面的人才「帶進來」內部 → 引入新資源或新血",
          example: "They brought in a nutritionist to help design the menu.",
        },
        {
          meaning: "賺進來/帶來收入",
          plainEnglish: "to earn money",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💰", label: "收入" },
          note: "把錢「帶進來」口袋 → 創造收入",
          example: "Her part-time job brings in an extra few thousand a month.",
        },
      ]
    },
    about: {
      title: "Bring about",
      spatial: "把某件事帶過來，讓結果在我們眼前發生。",
      coreMotion: 'carry-circle',
      meanings: [
        {
          meaning: "造成/引發",
          plainEnglish: "to cause something to happen",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🌊", label: "影響" },
          note: "把那個「觸發點」帶過來，讓它在眼前發生 → 某個行動直接造成了後果",
          example: "The new policy brought about a lot of confusion at work.",
        },
        {
          meaning: "促成/帶來",
          plainEnglish: "to make a change happen",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🌱", label: "改變" },
          note: "把努力帶到眼前，讓改變在這裡發生 → 持續行動終於讓好事成真",
          example: "Years of hard work finally brought about the change she had been fighting for.",
        },
      ]
    }
  },

  Run: {
    into: {
      title: "Run into",
      spatial: "跑著跑著突然撞上某人或某事。",
      coreMotion: 'run-collide',
      meanings: [
        { meaning: "巧遇", plainEnglish: "to bump into someone", grammar: 'inseparable', followedBy: 'noun', sceneObject: { emoji: "🙋", label: "老朋友" }, note: "跑著跑著突然「撞見」熟人 → 意外碰到", example: "I ran into my old college roommate at the airport yesterday." },
        { meaning: "遭遇（問題）", plainEnglish: "to encounter a problem", grammar: 'inseparable', followedBy: 'noun', sceneObject: { emoji: "🧱", label: "障礙" }, note: "跑著跑著「撞上」障礙物 → 碰上麻煩", example: "We ran into a few problems while planning the trip." },
      ]
    },
    down: {
      title: "Run down",
      spatial: "跑著往下/能量一路流失。",
      coreMotion: 'run-descend',
      meanings: [
        { meaning: "耗盡（電力／能量）", plainEnglish: "to slowly lose power", grammar: 'intransitive', sceneObject: { emoji: "🔋", label: "電力" }, note: "能量「跑著往下墜」到零 → 電池快沒電了", example: "The battery is running down, I need to find a charger." },
        { meaning: "破舊荒廢", plainEnglish: "to get old and shabby", grammar: 'intransitive', sceneObject: { emoji: "🏚️", label: "廢墟" }, note: "狀態「一路往下滑」→ 年久失修/沒人維護", example: "That old house at the end of the street is really run-down." },
      ]
    },
    out: {
      title: "Run out (of)",
      spatial: "跑著跑著就跑光了——容器裡的東西全衝出去了。",
      coreMotion: 'run-exit',
      meanings: [
        { meaning: "用光（時間）", plainEnglish: "to have none left", grammar: 'inseparable', followedBy: 'noun', sceneObject: { emoji: "⏳", label: "時間" }, note: "時間「跑光了」→ 剩下的越來越少直到歸零", example: "We're running out of time — the train leaves in five minutes!" },
        { meaning: "用光（東西）", plainEnglish: "to use up all of something", grammar: 'inseparable', followedBy: 'noun', sceneObject: { emoji: "📦", label: "存貨" }, note: "庫存「跑光了」→ 箱子空了什麼都不剩", example: "The café ran out of oat milk by ten in the morning." },
      ]
    },
    over: {
      title: "Run over",
      spatial: "奔跑越過界線，或從某物上方輾過。",
      coreMotion: 'run-traverse',
      meanings: [
        { meaning: "超時/拖太久", plainEnglish: "to last longer than planned", grammar: 'intransitive', sceneObject: { emoji: "⏰", label: "時間" }, note: "跑者「衝過終點線」還停不下來 → 超出預定的時間", example: "The class ran over, so I missed my bus home." },
        { meaning: "輾過/壓過", plainEnglish: "to hit it with a car", grammar: 'separable', followedBy: 'noun', sceneObject: { emoji: "🧸", label: "被輾的東西" }, note: "從某物「上方輾壓過去」→ 車子或腳壓過", example: "Be careful not to run over the kid's toys in the driveway." },
      ]
    },
    through: {
      title: "Run through",
      spatial: "跑者從起點一路衝到底，從頭貫穿到尾。",
      coreMotion: 'run-pierce',
      meanings: [
        {
          meaning: "快速過一遍/排練一下",
          plainEnglish: "to quickly go over it",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "📋", label: "流程" },
          note: "跑者「從頭穿到尾」跑完整個場地 → 快速把整套流程演練一遍",
          example: "Let me run through the speech one more time before I go on stage.",
        },
        {
          meaning: "把錢燒個精光",
          plainEnglish: "to use up all the money",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "💰", label: "積蓄" },
          note: "錢「一路被跑穿過去」用完 → 快速把積蓄全部揮霍掉",
          example: "He ran through his entire savings in just a few months.",
        },
      ]
    },
    away: {
      title: "Run away",
      spatial: "奔跑遠離，距離越拉越遠直到消失。",
      coreMotion: 'run-flee',
      meanings: [
        {
          meaning: "落跑/逃避",
          plainEnglish: "to escape or flee",
          grammar: 'intransitive',
          sceneObject: { emoji: "🚨", label: "危險" },
          note: "腳一踏上遠離的路，越跑越遠 → 不回頭，選擇逃開而不是面對",
          example: "You can't just run away from your problems forever.",
        },
      ]
    },
    across: {
      title: "Run across",
      spatial: "橫穿某個空間的途中，意外與某物交叉相遇。",
      coreMotion: 'run-cross',
      meanings: [
        {
          meaning: "意外挖到/偶然撞見",
          plainEnglish: "to find something by chance",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "📸", label: "舊照片" },
          note: "橫穿某個空間的途中「撞見」那樣東西 → 不是刻意去找，是意外碰到",
          example: "I ran across some old photos while cleaning my room.",
        },
      ]
    }
  },

  Get: {
    into: {
      title: "Get into",
      spatial: "主動跨過門檻，進入某個全新的狀態或空間，並且確實抵達了裡面。",
      coreMotion: 'get-enter',
      meanings: [
        {
          meaning: "迷上了/愛上了",
          plainEnglish: "to start enjoying something",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "🎸", label: "新愛好" },
          note: "狀態從「局外人」跨過那條界線，進入新的領域 → 從零開始迷上",
          example: "She got into baking during the holidays and now makes bread every week.",
        },
        {
          meaning: "考上/進去",
          plainEnglish: "to enter or be accepted into",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎓", label: "學校" },
          note: "跨越那道審核的門檻，進到裡面 → 被錄取或成功進入",
          example: "My sister got into her first-choice school this year!",
        },
        {
          meaning: "惹麻煩/闖禍",
          plainEnglish: "to get in trouble",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "😬", label: "麻煩" },
          note: "不小心「踩進去」困境的坑 → 已經在裡面出不太來了",
          example: "He always gets into trouble when he stays out too late.",
        },
      ]
    },
    down: {
      title: "Get down (to)",
      spatial: "主動降下來，壓低去面對眼前的事；或是被某件事把情緒往下拉。",
      coreMotion: 'get-descend',
      meanings: [
        {
          meaning: "認真開始做/不再拖了",
          plainEnglish: "to seriously start doing it",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "📋", label: "任務" },
          note: "人「把身段壓低」蹲下去面對眼前的任務 → 從閒晃切換到認真執行",
          example: "Stop checking your phone — let's get down to studying.",
        },
        {
          meaning: "讓人很鬱悶/心情變差",
          plainEnglish: "to make you feel sad",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "😔", label: "心情" },
          note: "心情被某件事「往下拖」→ 情緒掉下去了",
          example: "Don't let one bad grade get you down.",
        },
      ]
    },
    up: {
      title: "Get up",
      spatial: "主動從低處往上升起，脫離原本的低位狀態。",
      coreMotion: 'get-ascend',
      meanings: [
        {
          meaning: "起床",
          plainEnglish: "to get out of bed",
          grammar: 'intransitive',
          sceneObject: { emoji: "🛏️", label: "床" },
          note: "從躺平的床上「往上升起來」→ 離開被窩/開始這一天",
          example: "I have to get up at six every morning.",
        },
        {
          meaning: "站起來",
          plainEnglish: "to stand up from sitting",
          grammar: 'intransitive',
          sceneObject: { emoji: "🪑", label: "椅子" },
          note: "從坐著的低位「往上站」→ 起身離座",
          example: "She got up from her chair and opened the door.",
        },
      ]
    },
    out: {
      title: "Get out (of)",
      spatial: "主動從封閉的裡面衝到外面，或是本來被困住的東西跑出去了。",
      coreMotion: 'get-exit',
      meanings: [
        {
          meaning: "逃脫/擺脫掉",
          plainEnglish: "to escape from something",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔒", label: "困境" },
          note: "從封閉的困境「衝出去」→ 脫身成功，不再被困住",
          example: "She finally got out of a toxic relationship.",
        },
        {
          meaning: "離開/出去走走",
          plainEnglish: "to leave a place",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🚪", label: "房間" },
          note: "從某個空間「走出去」→ 不待在裡面了",
          example: "Let's get out of the house and go for a walk.",
        },
        {
          meaning: "消息走漏/傳出去了",
          plainEnglish: "when news spreads out",
          grammar: 'intransitive',
          sceneObject: { emoji: "📢", label: "消息" },
          note: "本來藏在裡面的消息「跑到外面去」→ 已經人盡皆知了",
          example: "Word got out that the school was going to close.",
        },
      ]
    },
    over: {
      title: "Get over",
      spatial: "主動跨越橫在前面的障礙，從另一側走出來。",
      coreMotion: 'get-vault',
      meanings: [
        {
          meaning: "走出來/復原了",
          plainEnglish: "to recover from something hard",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "💔", label: "心碎" },
          note: "悲傷或失落像一堵牆擋在前面，「跨越過去」後走出來 → 不再被它困住",
          example: "It took her months to get over the breakup.",
        },
        {
          meaning: "克服/不再被卡住",
          plainEnglish: "to overcome a fear or difficulty",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧱", label: "障礙" },
          note: "困難像一道牆，「翻過去」就過了 → 不讓它繼續擋路",
          example: "You need to get over your fear of speaking in public.",
        },
      ]
    },
    through: {
      title: "Get through",
      spatial: "主動從一端穿透到另一端，把橫在中間的困難或阻礙穿越過去。",
      coreMotion: 'get-tunnel',
      meanings: [
        {
          meaning: "撐過去/熬過來了",
          plainEnglish: "to survive a hard period",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🌪️", label: "難關" },
          note: "困難就像要穿越的黑暗隧道，「穿到另一端」就出來了 → 熬過去了",
          example: "It was a really tough month, but we got through it together.",
        },
        {
          meaning: "聯繫上了/接通了",
          plainEnglish: "to successfully reach someone",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "📞", label: "電話" },
          note: "訊號「穿透」障礙到達對方 → 終於接通，不再打不進去",
          example: "I kept calling but couldn't get through until this morning.",
        },
      ]
    },
    along: {
      title: "Get along (with)",
      spatial: "沿著同一條路並肩前進：跟某人一起走得順，或是事情順著軌道往前推。",
      coreMotion: 'get-parallel',
      meanings: [
        {
          meaning: "相處融洽/處得來",
          plainEnglish: "to have a good relationship",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🤝", label: "關係" },
          note: "兩個人「沿著同一條路並排走」→ 步調合得來/沒有衝突",
          example: "She gets along really well with her new roommate.",
        },
        {
          meaning: "進展還不錯/做得怎麼樣了",
          plainEnglish: "to be making progress",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "📈", label: "進度" },
          note: "事情「沿著」軌道往前推進 → 不停滯/一直有在動",
          example: "How are you getting along with your Spanish lessons?",
        },
      ]
    },
    back: {
      title: "Get back",
      spatial: "主動往回走，讓人或東西回到原本的起點。",
      coreMotion: 'get-return',
      meanings: [
        {
          meaning: "回來了",
          plainEnglish: "to return to a place",
          grammar: 'intransitive',
          sceneObject: { emoji: "🏠", label: "家" },
          note: "人「往後走回」原本的地方 → 結束外出後回到起點",
          example: "What time did you get back last night?",
        },
        {
          meaning: "回覆你/再跟你聯繫",
          plainEnglish: "to reply or contact back",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "💬", label: "回覆" },
          note: "回應「帶回去」給對方 → 不是現在，但之後會告訴你",
          example: "I'll get back to you as soon as I have an answer.",
        },
        {
          meaning: "拿回來/要回來",
          plainEnglish: "to recover something taken",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📦", label: "東西" },
          note: "東西「回到」自己手上 → 原本屬於自己的，現在拿回來了",
          example: "I need to get my umbrella back from her.",
        },
      ]
    },
    away: {
      title: "Get away",
      spatial: "主動跑遠，讓距離越來越大，直到那件事追不上你。",
      coreMotion: 'get-flee',
      meanings: [
        {
          meaning: "逃離/去透透氣",
          plainEnglish: "to escape and take a break",
          grammar: 'intransitive',
          sceneObject: { emoji: "🏖️", label: "度假" },
          note: "「跑遠了」讓距離越來越大 → 從日常壓力中抽身，去放空",
          example: "I need to get away for a few days and just relax.",
        },
        {
          meaning: "做了壞事卻沒被抓/逍遙法外",
          plainEnglish: "to do wrong without punishment",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "😈", label: "壞事" },
          note: "做了壞事之後「跑遠了」→ 沒被追上/沒被懲罰",
          example: "He cheated on the test and got away with it.",
        },
      ]
    },
    on: {
      title: "Get on",
      spatial: "主動踩上去/登上那個平台，接觸後就開始往前推進。",
      coreMotion: 'get-mount',
      meanings: [
        {
          meaning: "上車/登上去",
          plainEnglish: "to board a vehicle",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🚌", label: "公車" },
          note: "「踩上」交通工具 → 人在裡面了，準備出發",
          example: "We need to get on the bus before it leaves.",
        },
        {
          meaning: "進展怎麼樣了/做到哪了",
          plainEnglish: "how far along you are",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "🛤️", label: "軌道" },
          note: "事情是一條鐵軌，你「踩在上面走」→ 問現在走到幾號站了",
          example: "How are you getting on with your homework?",
        },
        {
          meaning: "別拖了/繼續做下去",
          plainEnglish: "to keep doing it, stop stalling",
          grammar: 'inseparable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "⏩", label: "繼續" },
          note: "「踩上去」繼續走 → 別站在原地了，推進！",
          example: "Stop overthinking and just get on with it.",
        },
        {
          meaning: "相處融洽/處得來",
          plainEnglish: "to have a good relationship",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "😊", label: "相處" },
          note: "兩個人「在同一平台上」→ 沒摩擦/關係好（＝get along，英式更常用 get on）",
          example: "Do you get on well with your new neighbors?",
        },
      ]
    },
    off: {
      title: "Get off",
      spatial: "主動脫離接觸面，從「上面」下來，或從「束縛裡」掙脫出來。",
      coreMotion: 'get-dismount',
      meanings: [
        {
          meaning: "下車/下來",
          plainEnglish: "to get off a vehicle",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🚌", label: "公車" },
          note: "從交通工具「脫離下來」→ 腳落地，不在車上了",
          example: "We need to get off at the next stop.",
        },
        {
          meaning: "下班/結束了",
          plainEnglish: "to finish work",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏢", label: "公司" },
          note: "從「工作狀態」脫離 → 下班了，接下來是自己的時間",
          example: "What time do you usually get off work?",
        },
        {
          meaning: "開了個好頭/起步順不順",
          plainEnglish: "to start well or badly",
          grammar: 'intransitive',
          sceneObject: { emoji: "🚀", label: "起步" },
          note: "「脫離」起跑線的那一步 → 第一步踏出去的好壞決定整件事的氣勢",
          example: "We got off to a great start in the first game.",
        },
      ]
    }
  },

  Break: {
    into: {
      title: "Break into",
      spatial: "用力打破邊界之後衝進去，強行進入原本進不去的地方。",
      coreMotion: 'break-intrude',
      meanings: [
        {
          meaning: "闖入/破門而入",
          plainEnglish: "to force your way in",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏠", label: "房子" },
          note: "「打破」門鎖或牆然後「衝進去」→ 強行進入",
          example: "Someone broke into our neighbor's house last night.",
        },
        {
          meaning: "打入新領域/跨行",
          plainEnglish: "to enter a new field",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎬", label: "圈子" },
          note: "「打破」原本把你擋在外面的高牆然後「擠進去」→ 在很難進的地方搶到一席之地",
          example: "It's really hard to break into the acting world.",
        },
      ]
    },
    down: {
      title: "Break down",
      spatial: "結構被打破之後往下垮，可以是機器壞了/人崩潰了/或把大塊敲碎拆小。",
      coreMotion: 'break-collapse',
      meanings: [
        {
          meaning: "故障/壞掉了",
          plainEnglish: "to stop working",
          grammar: 'intransitive',
          sceneObject: { emoji: "🚗", label: "車子" },
          note: "機器「內部結構崩塌」→ 停止運作/叫不動了",
          example: "Our car broke down on the highway this morning.",
        },
        {
          meaning: "拆解分析/分成幾個部分",
          plainEnglish: "to divide into smaller parts",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📊", label: "大塊" },
          note: "把大塊「敲碎往下拆」成小塊 → 更容易理解或處理",
          example: "Can you break down the total cost for me?",
        },
        {
          meaning: "（人）情緒崩潰/撐不住了",
          plainEnglish: "to lose emotional control",
          grammar: 'intransitive',
          sceneObject: { emoji: "😭", label: "情緒" },
          note: "人的心理防線「崩塌往下」→ 再也壓不住，哭出來了",
          example: "She broke down in tears when she heard the news.",
        },
      ]
    },
    up: {
      title: "Break up",
      spatial: "整體「碎裂分開」，各部分往外四散，不再是一個完整的東西。",
      coreMotion: 'break-split',
      meanings: [
        {
          meaning: "分手/解散",
          plainEnglish: "to end a relationship or group",
          grammar: 'intransitive',
          sceneObject: { emoji: "💔", label: "關係" },
          note: "兩人的整體「裂開」各走各的 → 不再是一對了",
          example: "They broke up after dating for three years.",
        },
        {
          meaning: "把群體或整塊打散/驅散",
          plainEnglish: "to scatter a group apart",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👥", label: "人群" },
          note: "原本聚在一起的人或東西「被打碎分散」→ 各自散開/不再是一體（和 break down 的差別：這是結構性打散，不是邏輯性拆解）",
          example: "The police broke up the crowd after the concert.",
        },
        {
          meaning: "訊號斷斷續續/講話聽不清",
          plainEnglish: "when a signal cuts in and out",
          grammar: 'intransitive',
          sceneObject: { emoji: "📵", label: "訊號" },
          note: "通話的聲音「碎裂成片段」→ 一段一段不連續",
          example: "You're breaking up — can you move somewhere else?",
        },
      ]
    },
    out: {
      title: "Break out",
      spatial: "被關在裡面的東西，用力打破邊界衝出來。不管是人/火/還是痘痘，都是從「內部突破邊界往外爆發」。",
      coreMotion: 'break-burst',
      meanings: [
        {
          meaning: "逃脫/突圍",
          plainEnglish: "to escape confinement",
          grammar: 'intransitive',
          sceneObject: { emoji: "🔒", label: "牢籠" },
          note: "被關在牢裡的人，「打破」欄杆「衝出去」→ 從束縛中衝出來/自由了",
          example: "Two prisoners broke out of jail last night.",
        },
        {
          meaning: "（火災/衝突/疾病）突然爆發",
          plainEnglish: "to start suddenly and spread",
          grammar: 'intransitive',
          sceneObject: { emoji: "🔥", label: "火勢" },
          note: "火在某個點「打破」控制「衝出來」→ 開始往外蔓延/失控",
          example: "A fire broke out in the building early this morning.",
        },
        {
          meaning: "（臉/身體）突然長痘痘/起疹子",
          plainEnglish: "to get spots or a rash",
          grammar: 'intransitive',
          sceneObject: { emoji: "😣", label: "皮膚" },
          note: "痘痘「打破」皮膚表面「冒出來」→ 突然長東西了",
          example: "I always break out when I eat too much sugar.",
        },
      ]
    },
    through: {
      title: "Break through",
      spatial: "用力從一側打穿障礙，完整地穿透到另一側。障礙被打破，力量從這邊穿到那邊。",
      coreMotion: 'break-pierce',
      meanings: [
        {
          meaning: "突破難關/克服障礙",
          plainEnglish: "to overcome a barrier",
          grammar: 'intransitive',
          sceneObject: { emoji: "🧱", label: "障礙" },
          note: "「打穿」長期阻擋的難關「穿透過去」→ 衝到另一邊了，進入全新境界",
          example: "After months of struggling, the team finally broke through.",
        },
        {
          meaning: "（陽光）穿透雲層射出來",
          plainEnglish: "to shine through clouds",
          grammar: 'intransitive',
          sceneObject: { emoji: "☀️", label: "雲層" },
          note: "陽光「打破」雲的遮擋「穿透過來」→ 從厚厚的雲後面射出來了",
          example: "The sun finally broke through the clouds this afternoon.",
        },
        {
          meaning: "（情感/道理）穿透心防/讓人感受到",
          plainEnglish: "to get past someone's defenses",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🛡️", label: "心防" },
          note: "話語「打穿」對方的防線「穿透進去」→ 終於讓他有感覺了",
          example: "Nothing could break through his cold exterior.",
        },
      ]
    },
    even: {
      title: "Break even",
      spatial: "收入和支出「打到兩邊相等」的那個點。不賺也不虧，剛好平手。",
      coreMotion: 'break-balance',
      meanings: [
        {
          meaning: "損益兩平/收支平衡",
          plainEnglish: "to neither profit nor lose",
          grammar: 'intransitive',
          sceneObject: { emoji: "⚖️", label: "收支" },
          note: "花出去的錢和賺回來的錢「打到一樣多」→ 不賺也不虧，剛好平手",
          example: "The restaurant finally broke even after eighteen months.",
        },
      ]
    }
  },

  Go: {
    down: {
      title: "Go down",
      spatial: "GO（自己移動）+ DOWN（往下）= 東西自己往下走/下降/垮掉。",
      coreMotion: 'go-descend',
      meanings: [
        {
          meaning: "（價格/數量）下降/降低",
          plainEnglish: "to decrease or drop",
          grammar: 'intransitive',
          sceneObject: { emoji: "📉", label: "價格" },
          note: "數字「自己往下走」→ 價格/溫度/人數變少了",
          example: "Gas prices have gone down a lot this week.",
        },
        {
          meaning: "（太陽）西沉/落下",
          plainEnglish: "to set below the horizon",
          grammar: 'intransitive',
          sceneObject: { emoji: "🌅", label: "太陽" },
          note: "太陽「自己往下走」→ 慢慢沉到地平線以下",
          example: "The sun goes down around six in the evening these days.",
        },
        {
          meaning: "（系統/網站）當機/斷線",
          plainEnglish: "to stop working suddenly",
          grammar: 'intransitive',
          sceneObject: { emoji: "🖥️", label: "系統" },
          note: "系統「自己垮下去」→ 突然停擺/沒有反應了",
          example: "The school website went down right before the deadline.",
        },
      ]
    },
    up: {
      title: "Go up",
      spatial: "GO（自己移動）+ UP（往上）= 東西自己往上走/增加/升起。",
      coreMotion: 'go-ascend',
      meanings: [
        {
          meaning: "（價格/數量）上漲/增加",
          plainEnglish: "to increase or rise",
          grammar: 'intransitive',
          sceneObject: { emoji: "📈", label: "價格" },
          note: "數字「自己往上走」→ 價格/溫度/人數變多了",
          example: "The rent in this neighborhood has gone up every year.",
        },
        {
          meaning: "（建築）被蓋起來",
          plainEnglish: "to be built or erected",
          grammar: 'intransitive',
          sceneObject: { emoji: "🏗️", label: "建築" },
          note: "樓層「自己往上長」→ 一層一層蓋起來了",
          example: "A new apartment building went up on our street last year.",
        },
        {
          meaning: "著火/燒起來",
          plainEnglish: "to catch fire and burn",
          grammar: 'intransitive',
          sceneObject: { emoji: "🔥", label: "火焰" },
          note: "火焰「自己往上竄」→ 整個燒起來了，go up in flames",
          example: "The old barn went up in flames before the fire trucks arrived.",
        },
      ]
    },
    out: {
      title: "Go out",
      spatial: "GO（自己移動）+ OUT（往外）= 自己走出去/能量散出去消失。",
      coreMotion: 'go-outward',
      meanings: [
        {
          meaning: "（燈/火）熄滅",
          plainEnglish: "to stop burning or shining",
          grammar: 'intransitive',
          sceneObject: { emoji: "🕯️", label: "蠟燭" },
          note: "能量「自己散出去」歸零 → 火焰/燈光消失了",
          example: "The candle went out in the wind.",
        },
        {
          meaning: "外出/出去玩",
          plainEnglish: "to leave and go somewhere",
          grammar: 'intransitive',
          sceneObject: { emoji: "🚪", label: "門口" },
          note: "人「自己走出去」→ 離開家去外面社交/娛樂",
          example: "We went out for dinner and a movie last Saturday.",
        },
        {
          meaning: "跟某人交往/約會",
          plainEnglish: "to date someone",
          grammar: 'intransitive',
          sceneObject: { emoji: "💑", label: "約會" },
          note: "兩人經常「一起走出去」→ 正在交往中，go out with somebody",
          example: "They've been going out for about six months.",
        },
      ]
    },
    over: {
      title: "Go over",
      spatial: "GO（自己移動）+ OVER（越過）= 越過某個內容或界線，從頭到尾過一遍。",
      coreMotion: 'go-review',
      meanings: [
        {
          meaning: "複習/仔細看一遍",
          plainEnglish: "to review or check carefully",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📋", label: "報告" },
          note: "眼睛「越過」全部內容 → 從頭到尾看一遍，確認沒問題",
          example: "Can you go over my essay before I hand it in?",
        },
        {
          meaning: "超過（預算/時間/限制）",
          plainEnglish: "to exceed a limit",
          grammar: 'intransitive',
          sceneObject: { emoji: "💰", label: "預算" },
          note: "數字「越過」那條界線 → 超出了不能超的限制",
          example: "We went over budget by a lot this month.",
        },
      ]
    },
    through: {
      title: "Go through",
      spatial: "GO（自己移動）+ THROUGH（穿透）= 從頭到尾穿過去，不管是困難/清單還是資源。",
      coreMotion: 'go-traverse',
      meanings: [
        {
          meaning: "經歷（困難/痛苦的時期）",
          plainEnglish: "to experience something difficult",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🌧️", label: "難關" },
          note: "把艱難時期「一路穿過去」→ 撐過去/熬過去了",
          example: "She went through a really tough time after the breakup.",
        },
        {
          meaning: "仔細翻看/逐一確認",
          plainEnglish: "to look through carefully",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "📄", label: "文件" },
          note: "「從頭穿到尾」把每一頁翻過去 → 仔細審閱",
          example: "I went through all my old photos last weekend.",
        },
        {
          meaning: "用完（資源/食物）",
          plainEnglish: "to use up a supply",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧴", label: "存量" },
          note: "資源被「一路穿過」消耗殆盡 → 全都用完了",
          example: "We go through a bottle of ketchup every two weeks.",
        },
      ]
    },
    on: {
      title: "Go on",
      spatial: "GO（自己移動）+ ON（繼續向前）= 持續進行/繼續往前走/事情在發生。",
      coreMotion: 'go-continue',
      meanings: [
        {
          meaning: "繼續（做某件事）",
          plainEnglish: "to continue or keep going",
          grammar: 'intransitive',
          sceneObject: { emoji: "▶️", label: "進行" },
          note: "腳步「持續往前走」→ 不要停，繼續說/做",
          example: "Please go on — I didn't mean to interrupt you.",
        },
        {
          meaning: "發生（在進行中）",
          plainEnglish: "to happen or take place",
          grammar: 'intransitive',
          sceneObject: { emoji: "❓", label: "事件" },
          note: "事情正「在往前進行」→ What's going on? 在發生什麼？",
          example: "What's going on? Everyone looks really serious.",
        },
        {
          meaning: "（燈/設備）開起來/啟動",
          plainEnglish: "to start working or turn on",
          grammar: 'intransitive',
          sceneObject: { emoji: "💡", label: "電燈" },
          note: "電流「往上走接通」→ 燈/機器突然開了",
          example: "The lights went on as soon as I walked into the room.",
        },
      ]
    },
    back: {
      title: "Go back",
      spatial: "GO（自己移動）+ BACK（往後/回去）= 自己移動回到原來的地方或時間點。",
      coreMotion: 'go-return',
      meanings: [
        {
          meaning: "回去/返回",
          plainEnglish: "to return to a place",
          grammar: 'intransitive',
          sceneObject: { emoji: "🏠", label: "原點" },
          note: "「自己往回走」→ 回到原來的地方",
          example: "I want to go back to Japan someday.",
        },
        {
          meaning: "追溯/回溯（歷史/起源）",
          plainEnglish: "to date back to or originate from",
          grammar: 'intransitive',
          sceneObject: { emoji: "📜", label: "歷史" },
          note: "時間「往後走回去」→ 這個傳統/關係可以追溯到很久以前",
          example: "Our friendship goes back to primary school.",
        },
        {
          meaning: "食言/反悔（承諾）",
          plainEnglish: "to break a promise",
          grammar: 'intransitive',
          sceneObject: { emoji: "🤝", label: "承諾" },
          note: "走過去又「走回來」→ 說話不算話，go back on one's word",
          example: "He went back on his promise and didn't show up.",
        },
      ]
    },
    off: {
      title: "Go off",
      spatial: "GO（自己移動）+ OFF（離開/爆發）= 能量突然往外爆出去/自行離開啟動。",
      coreMotion: 'go-trigger',
      meanings: [
        {
          meaning: "（鬧鐘/警報）響起/觸發",
          plainEnglish: "to sound or activate suddenly",
          grammar: 'intransitive',
          sceneObject: { emoji: "⏰", label: "鬧鐘" },
          note: "聲音「自己往外爆出去」→ 鬧鐘/警報突然大聲響了",
          example: "My alarm went off at six but I slept through it.",
        },
        {
          meaning: "爆炸/爆開",
          plainEnglish: "to explode or go bang",
          grammar: 'intransitive',
          sceneObject: { emoji: "🎆", label: "煙火" },
          note: "能量「自己爆炸往外炸」→ 煙火/炸彈/鞭炮爆開",
          example: "The fireworks went off at midnight on New Year's Eve.",
        },
        {
          meaning: "（食物）變質/壞掉",
          plainEnglish: "to spoil or go bad",
          grammar: 'intransitive',
          sceneObject: { emoji: "🥛", label: "食物" },
          note: "食物「自己離開」好的狀態 → 壞掉了，不能吃了",
          example: "The milk went off because I forgot to put it back in the fridge.",
        },
      ]
    },
    ahead: {
      title: "Go ahead",
      spatial: "GO（自己移動）+ AHEAD（在前方）= 往前方踏出去，先行或許可對方行動。",
      coreMotion: 'go-proceed',
      meanings: [
        {
          meaning: "去吧/請便（表示許可）",
          plainEnglish: "to give permission to proceed",
          grammar: 'intransitive',
          sceneObject: { emoji: "👍", label: "許可" },
          note: "「往前走吧」→ 允許對方繼續，不用等了",
          example: "Go ahead and order — I'll be there in five minutes.",
        },
        {
          meaning: "（計畫/活動）如期進行",
          plainEnglish: "to proceed as planned",
          grammar: 'intransitive',
          sceneObject: { emoji: "📅", label: "計畫" },
          note: "計畫「往前踏出去」→ 沒有被取消，正式執行了",
          example: "The outdoor concert went ahead despite the rain.",
        },
      ]
    },
    for: {
      title: "Go for",
      spatial: "GO（自己移動）+ FOR（朝向目標）= 自己朝向某個目標衝過去，選擇它或追求它。",
      coreMotion: 'go-pursue',
      meanings: [
        {
          meaning: "選擇（某個選項）",
          plainEnglish: "to choose or decide on",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎯", label: "選項" },
          note: "「朝著」某個選項衝過去 → 決定就選這個了",
          example: "I'll go for the pasta — it looks amazing.",
        },
        {
          meaning: "全力追求/爭取",
          plainEnglish: "to try hard to get something",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏆", label: "目標" },
          note: "「衝向」目標不放棄 → 盡全力去爭取它",
          example: "If you really want that job, just go for it!",
        },
      ]
    },
    with: {
      title: "Go with",
      spatial: "GO（自己移動）+ WITH（一起）= 自己跟某個選項一起走，選它/搭配它。",
      coreMotion: 'go-match',
      meanings: [
        {
          meaning: "搭配/配得上",
          plainEnglish: "to match or look good together",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "👔", label: "搭配" },
          note: "兩個東西「一起走」很和諧 → 顏色/風格搭在一起好看",
          example: "Does this blue shirt go with these grey pants?",
        },
        {
          meaning: "選擇/決定採用",
          plainEnglish: "to choose or decide to use",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "✅", label: "決定" },
          note: "「帶著」某個選項一起往前走 → 就決定用這個了",
          example: "Let's go with the cheaper option this time.",
        },
      ]
    }
  },

  Set: {
    up: {
      title: "Set up",
      spatial: "SET（定位放置）+ UP（往上立起）= 把各個元件一一定位架起來，從無到有搭建完成。",
      coreMotion: 'set-erect',
      meanings: [
        {
          meaning: "建立/架設",
          plainEnglish: "to build or prepare something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "⛺", label: "架設" },
          note: "零件一個個「定位往上立起來」→ 從零搭建完成",
          example: "We set up the tent before it got dark.",
        },
        {
          meaning: "設局/陷害",
          plainEnglish: "to trick or frame someone",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🪤", label: "陷阱" },
          note: "預先把每個零件「定位布置好」→ 圈套架好等人掉進去",
          example: "She didn't steal anything — she was set up by her coworker.",
        },
      ]
    },
    out: {
      title: "Set out",
      spatial: "SET（在起點定位就緒）+ OUT（往外踏出去）= 站好起點，帶著裝備往外出發。",
      coreMotion: 'set-depart',
      meanings: [
        {
          meaning: "啟程/出發",
          plainEnglish: "to start a journey",
          grammar: 'intransitive',
          sceneObject: { emoji: "🎒", label: "出發" },
          note: "在起點「定位就緒」→「踏出去」開始旅程",
          example: "We set out early in the morning to beat the traffic.",
        },
        {
          meaning: "著手/打算做",
          plainEnglish: "to intend or aim to do",
          grammar: 'intransitive',
          followedBy: 'to V',
          sceneObject: { emoji: "🎯", label: "目標" },
          note: "帶著明確目的「踏出去」→ 開始朝目標執行（set out to do）",
          example: "She set out to learn Spanish and now she's almost fluent.",
        },
      ]
    },
    off: {
      title: "Set off",
      spatial: "SET（定位蓄力）+ OFF（彈離爆發）= 壓好之後瞬間釋放，爆炸性出發或觸發。",
      coreMotion: 'set-ignite',
      meanings: [
        {
          meaning: "出發（帶爆發感）",
          plainEnglish: "to start a journey suddenly",
          grammar: 'intransitive',
          sceneObject: { emoji: "🏃", label: "出發" },
          note: "在起點「蓄好力定位」→「彈離」出發，強調那一刻的爆發感",
          example: "We set off at dawn to catch the early train.",
        },
        {
          meaning: "觸發/引爆",
          plainEnglish: "to cause something to start",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔔", label: "觸發" },
          note: "把觸發點「定位設好」→ 一碰就「彈離爆發」，引發警報或連鎖反應",
          example: "The smoke in the kitchen set off the fire alarm.",
        },
      ]
    },
    back: {
      title: "Set back",
      spatial: "SET（把進度重新定位）+ BACK（往後推回去）= 原本的進展被強制推到更落後的位置。",
      coreMotion: 'set-regress',
      meanings: [
        {
          meaning: "延遲/使後退",
          plainEnglish: "to delay progress",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "⛈️", label: "延遲" },
          note: "進度被「定位推回去」→ 時程或計畫被迫倒退",
          example: "The heavy rain set our camping trip back by a day.",
        },
      ]
    },
    aside: {
      title: "Set aside",
      spatial: "SET（定位放置）+ ASIDE（往旁邊）= 特意把某件事/某筆錢挪到旁邊，讓主線空出來。",
      coreMotion: 'set-sideline',
      meanings: [
        {
          meaning: "擱置",
          plainEnglish: "to put off for later",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📋", label: "擱置" },
          note: "把事情「定位推到旁邊」→ 暫時不處理，先做別的",
          example: "Let's set aside the seating arrangement and figure out the menu first.",
        },
        {
          meaning: "留出/保留",
          plainEnglish: "to save or reserve",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💰", label: "保留" },
          note: "把錢或時間「特意撥到旁邊」保留 → 留給特定用途",
          example: "She sets aside some money every month for her vacation.",
        },
      ]
    }
  },

  Take: {
    off: {
      title: "Take off",
      spatial: "TAKE（拿取/執行動作）+ OFF（脫離接觸面）= 從原本貼合的地方脫開，或突然離地往上飛。",
      coreMotion: 'take-liftoff',
      meanings: [
        {
          meaning: "脫掉（衣物）",
          plainEnglish: "to remove clothing",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧥", label: "脫掉" },
          note: "把衣物從身上「拿離開接觸面」→ 脫下",
          example: "Take off your coat and make yourself comfortable.",
        },
        {
          meaning: "起飛",
          plainEnglish: "to leave the ground and fly",
          grammar: 'intransitive',
          sceneObject: { emoji: "✈️", label: "起飛" },
          note: "飛機從跑道「拿離地面接觸點」→ 升空起飛",
          example: "The plane took off twenty minutes late due to weather.",
        },
        {
          meaning: "突然爆紅/成功",
          plainEnglish: "to suddenly become popular",
          grammar: 'intransitive',
          sceneObject: { emoji: "🚀", label: "爆紅" },
          note: "像飛機一樣「突然脫離平地水準」→ 迅速竄升爆紅",
          example: "Her YouTube channel really took off after that viral video.",
        },
      ],
    },
    on: {
      title: "Take on",
      spatial: "TAKE（拿取接受）+ ON（到自己身上）= 把某件事/某個人/某個對手接過來放到自己身上扛。",
      coreMotion: 'take-shoulder',
      meanings: [
        {
          meaning: "扛下來/接起來",
          plainEnglish: "to accept a task or burden",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏋️", label: "責任" },
          note: "把責任/重量「拿取到自己身上」→ 接過來扛起來",
          example: "She took on extra shifts at the café to save for a trip.",
        },
        {
          meaning: "招人/請進來",
          plainEnglish: "to hire someone new",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧑‍💼", label: "新員工" },
          note: "把人「接到」自己的團隊裡 → 正式納入",
          example: "The bakery is taking on two more staff for the holidays.",
        },
        {
          meaning: "單挑/迎戰",
          plainEnglish: "to compete or fight against",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🥊", label: "對手" },
          note: "把對手的壓力「接到自己身上」→ 正面迎上去對抗",
          example: "The young player took on the reigning champion and won a set.",
        },
      ],
    },
    up: {
      title: "Take up",
      spatial: "TAKE（拿取）+ UP（往上）= 把某樣東西從低處拿起向上提，引申為「開始投入」或「把空間時間往上填滿」。",
      coreMotion: 'take-ascend',
      meanings: [
        {
          meaning: "開始學/入坑",
          plainEnglish: "to start a new hobby or activity",
          grammar: 'separable',
          followedBy: 'noun / V-ing',
          sceneObject: { emoji: "🎸", label: "嗜好" },
          note: "把一樣新東西「從架上拿起來往上提」→ 從零開始投入",
          example: "She took up yoga after her doctor told her to exercise more.",
        },
        {
          meaning: "佔掉/吃掉（時間/空間）",
          plainEnglish: "to use a lot of space or time",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "⏰", label: "時間" },
          note: "東西「往上撐滿」把可用的時間或空間全部吃掉",
          example: "The commute takes up almost two hours of my day.",
        },
      ],
    },
    over: {
      title: "Take over",
      spatial: "TAKE（拿取）+ OVER（越過/蓋掉）= 越過去把別人的位置整個拿走，全面接管。",
      coreMotion: 'take-occupy',
      meanings: [
        {
          meaning: "接管/全面掌控",
          plainEnglish: "to take control of something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏢", label: "控制權" },
          note: "越過去把對方的位置「拿走蓋掉」→ 全面佔領",
          example: "She took over the family restaurant after her parents retired.",
        },
        {
          meaning: "接替（工作/班）",
          plainEnglish: "to replace someone in a job",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💼", label: "工作" },
          note: "越過對方的位置站進去 → 替換掉，繼續做",
          example: "Can you take over for me? I need to leave early today.",
        },
      ],
    },
    out: {
      title: "Take out",
      spatial: "TAKE（拿取）+ OUT（往外）= 把某樣東西或某人從裡面帶到外面。",
      coreMotion: 'take-extract',
      meanings: [
        {
          meaning: "掏出/取出",
          plainEnglish: "to remove something from inside",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👛", label: "皮夾" },
          note: "把東西從裡面「拿出來」→ 掏出口袋/取出包包裡的東西",
          example: "Can you take out your ID? The guard needs to check it.",
        },
        {
          meaning: "帶某人出去（吃飯/約會）",
          plainEnglish: "to treat someone to a meal or outing",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🍽️", label: "朋友" },
          note: "把人「帶到外面去」→ 請客吃飯或約會，帶對方出門",
          example: "Let me take you out for dinner — it's my treat.",
        },
      ],
    },
    in: {
      title: "Take in",
      spatial: "TAKE（拿取）+ IN（往裡面）= 把某樣東西拿進自己的內部，可以是資訊進大腦，也可以是人進家門。",
      coreMotion: 'take-absorb',
      meanings: [
        {
          meaning: "消化/吸收（資訊）",
          plainEnglish: "to absorb and understand information",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧠", label: "資訊" },
          note: "把資訊「拿進」大腦裡 → 一下子太多東西要消化",
          example: "There was so much going on that I couldn't take it all in.",
        },
        {
          meaning: "收留/收容",
          plainEnglish: "to give shelter to someone",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🐱", label: "流浪貓" },
          note: "把外面的人或動物「帶進」家門 → 收留照顧",
          example: "She took in a stray cat she found outside the convenience store.",
        },
      ],
    },
    back: {
      title: "Take back",
      spatial: "TAKE（拿取）+ BACK（往回）= 把已經出去的東西拿回來，可以是話/商品/或記憶。",
      coreMotion: 'take-retract',
      meanings: [
        {
          meaning: "收回（說錯的話）",
          plainEnglish: "to retract what you said",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💬", label: "說錯的話" },
          note: "把已經說出去的話「拿回來」→ 承認說錯/撤回",
          example: "I take back what I said earlier — that was really unfair of me.",
        },
        {
          meaning: "退回（商品）",
          plainEnglish: "to return something to a store",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🛍️", label: "商品" },
          note: "把買回來的東西「帶回去」→ 退貨歸還",
          example: "The dress didn't fit, so I took it back to the store.",
        },
        {
          meaning: "勾起回憶",
          plainEnglish: "to remind you of the past",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📸", label: "回憶" },
          note: "某首歌/某個味道「把你帶回去」過去的時光",
          example: "That old song really takes me back to high school.",
        },
      ],
    },
    down: {
      title: "Take down",
      spatial: "TAKE（拿取）+ DOWN（往下）= 把高處的東西拿下來，或把飄在空中的話寫落地。",
      coreMotion: 'take-descend',
      meanings: [
        {
          meaning: "拆掉/取下",
          plainEnglish: "to remove something from a wall or high place",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎄", label: "裝飾" },
          note: "把掛在高處的東西「拿下來」→ 拆除/撤掉",
          example: "Can you help me take down the Christmas decorations this weekend?",
        },
        {
          meaning: "記下來/抄下來",
          plainEnglish: "to write something down",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📝", label: "電話號碼" },
          note: "把說出來的話「拿下來」落紙 → 記錄在紙上",
          example: "Take down my number in case you get lost.",
        },
      ],
    },
    away: {
      title: "Take away",
      spatial: "TAKE（拿取）+ AWAY（遠離）= 拿著東西離開，越走越遠。",
      coreMotion: 'take-depart',
      meanings: [
        {
          meaning: "帶走/拿走",
          plainEnglish: "to remove something from a place or person",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🍽️", label: "盤子" },
          note: "把東西「拿起來離開」→ 從原本的地方帶走",
          example: "The waiter took away our plates before we even finished.",
        },
        {
          meaning: "帶走的收穫",
          plainEnglish: "what you learn or gain from an experience",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💡", label: "收穫" },
          note: "從一個經歷中「帶著某樣東西離開」→ 留下的感受或啟發",
          example: "The biggest thing I took away from that trip was learning to slow down.",
        },
      ],
    },
  },

  Put: {
    on: {
      title: "Put on",
      spatial: "PUT（放置）+ ON（到上面）= 把東西放到某個表面上，可以是身體/臉/或舞台。",
      coreMotion: 'put-onto',
      meanings: [
        {
          meaning: "穿上/戴上",
          plainEnglish: "to dress in or wear something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧥", label: "外套" },
          note: "把衣物「放到」身上 → 穿戴",
          example: "It's getting cold — put on your jacket before you leave.",
        },
        {
          meaning: "假裝/裝出",
          plainEnglish: "to pretend or fake an emotion",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "😄", label: "笑臉" },
          note: "把面具「放到」臉上 → 表現出不真實的情緒",
          example: "She put on a smile for the photos even though she was exhausted.",
        },
        {
          meaning: "播放（音樂或電影）",
          plainEnglish: "to start playing music or a film",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎬", label: "電影" },
          note: "把節目「放到」螢幕上 → 開始播放",
          example: "Let's put on a movie — I'll make some popcorn.",
        },
      ],
    },
    off: {
      title: "Put off",
      spatial: "PUT（放置）+ OFF（推開）= 把事情推到一邊晚點再說，或把人的興趣推開。",
      coreMotion: 'put-aside',
      meanings: [
        {
          meaning: "推遲/拖延",
          plainEnglish: "to delay or postpone something",
          grammar: 'separable',
          followedBy: 'noun / verb-ing',
          sceneObject: { emoji: "🦷", label: "牙醫預約" },
          note: "把任務「推開到旁邊」→ 拖著不做",
          example: "Stop putting off going to the dentist — it's been six months!",
        },
        {
          meaning: "讓人倒胃口/使反感",
          plainEnglish: "to make someone not want to do something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🤢", label: "臭味" },
          note: "把人的興趣「推開」→ 讓人不想靠近",
          example: "The smell from the kitchen really put me off my food.",
        },
      ],
    },
    up: {
      title: "Put up (with)",
      spatial: "PUT（放置）+ UP（往上）= 把東西撐起來立好，或硬撐著忍受壓力。",
      coreMotion: 'put-erect',
      meanings: [
        {
          meaning: "忍受/硬撐",
          plainEnglish: "to tolerate something unpleasant",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔊", label: "噪音" },
          note: "把重壓「撐住不放下」→ 硬撐著不倒",
          example: "I can't put up with my neighbor's loud music anymore.",
        },
        {
          meaning: "張貼",
          plainEnglish: "to stick or hang something on a wall",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📌", label: "海報" },
          note: "把東西「放上」牆面 → 釘上去",
          example: "They put up missing cat posters all over the neighborhood.",
        },
        {
          meaning: "搭建/架設",
          plainEnglish: "to build or assemble a structure",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "⛺", label: "帳篷" },
          note: "把結構「立起來」→ 撐好骨架",
          example: "We put up a tent in the backyard for the birthday party.",
        },
      ],
    },
    down: {
      title: "Put down",
      spatial: "PUT（放置）+ DOWN（往下）= 把東西放到下面，或把人的地位壓下去。",
      coreMotion: 'put-lower',
      meanings: [
        {
          meaning: "放下",
          plainEnglish: "to set something on a surface",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📱", label: "手機" },
          note: "「往下放」→ 放到桌上或地上",
          example: "Put down your phone and enjoy dinner with your family.",
        },
        {
          meaning: "記下/寫下",
          plainEnglish: "to write something down",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📝", label: "購物清單" },
          note: "把想法「放下來」紙上 → 寫成文字",
          example: "Put down everything you need before you go to the supermarket.",
        },
        {
          meaning: "貶低/羞辱",
          plainEnglish: "to criticize or humiliate someone",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "😔", label: "自尊" },
          note: "把人的地位「往下壓」→ 讓人覺得自己很差",
          example: "A good friend would never put you down in front of others.",
        },
      ],
    },
    out: {
      title: "Put out",
      spatial: "PUT（放置）+ OUT（推出去）= 把東西往外推，火滅掉，或把作品送出去。",
      coreMotion: 'put-outward',
      meanings: [
        {
          meaning: "熄滅",
          plainEnglish: "to stop a fire from burning",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔥", label: "火" },
          note: "把火的能量「推出去」消散 → 撲滅",
          example: "The firefighters put out the blaze in under an hour.",
        },
        {
          meaning: "發布/推出",
          plainEnglish: "to release something to the public",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎵", label: "新專輯" },
          note: "把作品「推出去」給大眾 → 發行",
          example: "The singer put out a new album last Friday.",
        },
      ],
    },
    away: {
      title: "Put away",
      spatial: "PUT（放置）+ AWAY（收到一邊）= 把東西放回原位收好，或把錢存起來。",
      coreMotion: 'put-stow',
      meanings: [
        {
          meaning: "收起來/歸位",
          plainEnglish: "to put something back where it belongs",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👕", label: "衣服" },
          note: "把東西「放回」該在的地方 → 歸位整齊",
          example: "Put away your clothes after doing laundry — don't leave them on the bed.",
        },
        {
          meaning: "存錢",
          plainEnglish: "to save money regularly",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🐷", label: "存款" },
          note: "把錢「放進」安全的地方 → 儲蓄備用",
          example: "She puts away a little money every month for her trip to Japan.",
        },
      ],
    },
    in: {
      title: "Put in",
      spatial: "PUT（放置）+ IN（進去）= 把東西放到裡面，或把心力投進去。",
      coreMotion: 'put-insert',
      meanings: [
        {
          meaning: "投入（時間或心力）",
          plainEnglish: "to spend time or effort on something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "⏰", label: "心力" },
          note: "把心力「放進」某件事裡 → 下苦工",
          example: "She put in a lot of effort to make the birthday dinner perfect.",
        },
        {
          meaning: "安裝",
          plainEnglish: "to install or fit something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔧", label: "書架" },
          note: "把設備「放進」定位 → 裝好固定",
          example: "We put in new shelves in the living room last weekend.",
        },
        {
          meaning: "提出（申請）",
          plainEnglish: "to submit a request or application",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📋", label: "假單" },
          note: "把申請「放進」系統裡 → 遞出去等審核",
          example: "I put in a request for two weeks off before the holidays.",
        },
      ],
    },
    together: {
      title: "Put together",
      spatial: "PUT（放置）+ TOGETHER（聚在一起）= 把零散的東西拼在一起，或把各種素材湊成一件事。",
      coreMotion: 'put-assemble',
      meanings: [
        {
          meaning: "組合/組裝",
          plainEnglish: "to assemble parts into a whole",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🪑", label: "家具" },
          note: "零件「放到一起」→ 拼成完整的東西",
          example: "Can you help me put together this IKEA shelf? The instructions are confusing.",
        },
        {
          meaning: "策劃/籌備",
          plainEnglish: "to plan or organize something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎂", label: "生日派對" },
          note: "把各種素材「湊在一起」→ 籌備成一個完整的活動",
          example: "She put together a surprise birthday party for her mom.",
        },
      ],
    },
  },

  Come: {
    up: {
      title: "Come up",
      spatial: "COME（往這邊來）+ UP（浮上來）= 話題或事件突然冒出來，或靈感浮現。",
      coreMotion: 'come-surface',
      meanings: [
        {
          meaning: "出現/被提起",
          plainEnglish: "to be mentioned or arise unexpectedly",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "💬", label: "話題" },
          note: "話題「冒出水面」→ 突然被談起",
          example: "Your name came up at dinner — everyone wanted to know how you were doing.",
        },
        {
          meaning: "即將來臨",
          plainEnglish: "to be approaching in time",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📅", label: "生日" },
          note: "事件「往上浮」到眼前 → 快到了",
          example: "My birthday is coming up next week — I should plan something.",
        },
        {
          meaning: "想到（come up with）",
          plainEnglish: "to think of an idea or solution",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "💡", label: "點子" },
          note: "點子「從腦裡冒上來」→ 靈感浮現",
          example: "How did you come up with such a creative name for your cat?",
        },
      ],
    },
    down: {
      title: "Come down (to)",
      spatial: "COME（往這邊來）+ DOWN（降下來）= 數字或情勢往下掉，或問題降落到一個核心點。",
      coreMotion: 'come-descend',
      meanings: [
        {
          meaning: "下降/降低",
          plainEnglish: "to decrease or drop",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🥑", label: "價格" },
          note: "數字「往下掉落」→ 價格或溫度降低",
          example: "The price of avocados always comes down in summer.",
        },
        {
          meaning: "歸結為（come down to）",
          plainEnglish: "to be ultimately about one key thing",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "⚖️", label: "關鍵" },
          note: "所有因素「降落」到一個核心點 → 問題根本在於",
          example: "When choosing a restaurant, it all comes down to how hungry you are.",
        },
        {
          meaning: "生病（come down with）",
          plainEnglish: "to become ill with something",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🤧", label: "感冒" },
          note: "病「降臨」到身上 → 突然生病",
          example: "She came down with a cold the day before her trip.",
        },
      ],
    },
    in: {
      title: "Come in",
      spatial: "COME（往這邊來）+ IN（進入）= 從外面走進來，或在關鍵時刻走進舞台發揮作用。",
      coreMotion: 'come-enter',
      meanings: [
        {
          meaning: "進來",
          plainEnglish: "to enter a place",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🚪", label: "門口" },
          note: "人「走進」空間內 → 進門",
          example: "Come in! The door is open.",
        },
        {
          meaning: "派上用場",
          plainEnglish: "to become useful at the right moment",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🍳", label: "廚藝" },
          note: "在關鍵時刻「走進」舞台 → 發揮作用",
          example: "This is where your cooking skills really come in.",
        },
      ],
    },
    out: {
      title: "Come out",
      spatial: "COME（往這邊來）+ OUT（走出來）= 從裡面走到公開的地方，讓人看見。",
      coreMotion: 'come-emerge',
      meanings: [
        {
          meaning: "推出/發布",
          plainEnglish: "to be released to the public",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🎤", label: "新專輯" },
          note: "作品「走出來」公開 → 上市發行",
          example: "Taylor Swift's new album came out last Friday.",
        },
        {
          meaning: "結果是/顯現出",
          plainEnglish: "to turn out a certain way",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📸", label: "照片" },
          note: "結果「顯露出來」→ 照片洗出來的樣子",
          example: "The photos came out really well — we look great!",
        },
        {
          meaning: "出櫃",
          plainEnglish: "to openly reveal one's identity",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🌈", label: "自我" },
          note: "把隱藏的自我「帶出來」公開 → 出櫃",
          example: "He came out to his family last year.",
        },
      ],
    },
    back: {
      title: "Come back",
      spatial: "COME（往這邊來）+ BACK（回去）= 從遠處回到原點，或消失的東西重新回來。",
      coreMotion: 'come-return',
      meanings: [
        {
          meaning: "回來",
          plainEnglish: "to return to a place",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "✈️", label: "旅行" },
          note: "「返回」原本的地方 → 出去之後回來",
          example: "When are you coming back from Japan?",
        },
        {
          meaning: "再度流行/復活",
          plainEnglish: "to become popular or relevant again",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📻", label: "黑膠唱片" },
          note: "消失的東西「回到」主流 → 復興再流行",
          example: "Vinyl records have really come back — everyone has a turntable now.",
        },
      ],
    },
    across: {
      title: "Come across",
      spatial: "COME（往這邊來）+ ACROSS（橫穿過來）= 橫向撞見，意外遇到，或形象穿越到對方眼中。",
      coreMotion: 'come-cross',
      meanings: [
        {
          meaning: "偶然發現/巧遇",
          plainEnglish: "to find or meet something by chance",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "📔", label: "日記" },
          note: "「橫向撞見」→ 走著走著意外遇到",
          example: "I came across my old diary while cleaning out the closet.",
        },
        {
          meaning: "給人…的印象",
          plainEnglish: "to seem a certain way to others",
          grammar: 'inseparable',
          followedBy: 'adjective',
          sceneObject: { emoji: "😤", label: "第一印象" },
          note: "形象「穿越」到對方眼中 → 留下某種感覺",
          example: "He comes across as arrogant, but he's actually very helpful.",
        },
      ],
    },
    along: {
      title: "Come along",
      spatial: "COME（往這邊來）+ ALONG（沿著一起）= 跟著隊伍走，或事情沿著軌道往前推進。",
      coreMotion: 'come-alongside',
      meanings: [
        {
          meaning: "一起來/跟著來",
          plainEnglish: "to join someone going somewhere",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🚶", label: "散步" },
          note: "「跟著」隊伍走 → 一同前往",
          example: "We're going to the night market — want to come along?",
        },
        {
          meaning: "進展/進步",
          plainEnglish: "to make progress or improve",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🎨", label: "畫作" },
          note: "事情「沿著」軌道往前推進 → 逐漸成形",
          example: "Your painting is really coming along — it looks amazing!",
        },
      ],
    },
    over: {
      title: "Come over",
      spatial: "COME（往這邊來）+ OVER（越過距離）= 越過距離來到你這，或情緒越過來籠罩你。",
      coreMotion: 'come-over',
      meanings: [
        {
          meaning: "過來（拜訪）",
          plainEnglish: "to visit someone at their home",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🍽️", label: "拜訪" },
          note: "「越過」距離來到你這 → 登門拜訪",
          example: "Why don't you come over for dinner this weekend?",
        },
        {
          meaning: "突然感到（某種情緒）",
          plainEnglish: "to suddenly feel an emotion",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "😢", label: "情緒" },
          note: "某種情緒「越過來」籠罩全身 → 突然湧上來",
          example: "A wave of sadness came over her when she heard the news.",
        },
      ],
    },
  },

  Give: {
    up: {
      title: "Give up",
      spatial: "GIVE（給出去）+ UP（往上攤手）= 把手上的東西往上鬆開，投降放棄。",
      coreMotion: 'give-release',
      meanings: [
        {
          meaning: "放棄",
          plainEnglish: "to stop trying at something",
          grammar: 'separable',
          followedBy: 'noun / verb-ing',
          sceneObject: { emoji: "🎹", label: "鋼琴" },
          note: "「往上攤手」放掉 → 投降/不再嘗試",
          example: "Don't give up on learning piano — you're making great progress!",
        },
        {
          meaning: "戒掉",
          plainEnglish: "to stop doing a habit",
          grammar: 'separable',
          followedBy: 'noun / verb-ing',
          sceneObject: { emoji: "🚬", label: "菸" },
          note: "把壞習慣「往上放掉」→ 從此不再碰",
          example: "He gave up smoking after his doctor warned him.",
        },
      ],
    },
    in: {
      title: "Give in",
      spatial: "GIVE（給出去）+ IN（向內）= 抵抗力向內塌陷，承受不住壓力而妥協。",
      coreMotion: 'give-yield',
      meanings: [
        {
          meaning: "屈服/讓步",
          plainEnglish: "to stop resisting and agree",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🐶", label: "撒嬌" },
          note: "抵抗力「向內塌陷」→ 承受不住壓力而妥協",
          example: "My parents finally gave in and let me get a dog.",
        },
      ],
    },
    out: {
      title: "Give out",
      spatial: "GIVE（給出去）+ OUT（往外）= 把東西往外一個個遞出，或能量全送出去後停擺。",
      coreMotion: 'give-distribute',
      meanings: [
        {
          meaning: "分發/發放",
          plainEnglish: "to hand something out to people",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📄", label: "講義" },
          note: "「往外遞」→ 一張一張發給大家",
          example: "The teacher gave out worksheets at the start of class.",
        },
        {
          meaning: "耗盡/撐不住",
          plainEnglish: "to stop working due to exhaustion",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🦵", label: "體力" },
          note: "能量全「送出去」後歸零 → 撐不住停下來",
          example: "My legs finally gave out after the third hour of hiking.",
        },
      ],
    },
    away: {
      title: "Give away",
      spatial: "GIVE（給出去）+ AWAY（送往遠方）= 永遠給出去不收回，或秘密跑遠被知道。",
      coreMotion: 'give-away',
      meanings: [
        {
          meaning: "贈送/免費給",
          plainEnglish: "to give something for free",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👗", label: "舊衣" },
          note: "「送到遠方」不再收回 → 免費送出",
          example: "She gave away her old clothes to the neighbors before moving.",
        },
        {
          meaning: "洩露（秘密）",
          plainEnglish: "to reveal something by accident",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🤫", label: "秘密" },
          note: "秘密不小心「跑到遠方」→ 被發現了",
          example: "His smile gave away the surprise before we even said anything.",
        },
      ],
    },
    back: {
      title: "Give back",
      spatial: "GIVE（給出去）+ BACK（回到原處）= 物歸原主，或把收穫還給社群。",
      coreMotion: 'give-return',
      meanings: [
        {
          meaning: "歸還",
          plainEnglish: "to return something to its owner",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "☂️", label: "雨傘" },
          note: "「還回去」給原來的人",
          example: "Can you give back my umbrella? It's supposed to rain today.",
        },
        {
          meaning: "回饋",
          plainEnglish: "to contribute to help others",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🎁", label: "回饋" },
          note: "把收穫「回送」給社群 → 貢獻回報",
          example: "She volunteers every weekend to give back to the community.",
        },
      ],
    },
  },

  Make: {
    up: {
      title: "Make up",
      spatial: "MAKE（製造）+ UP（往上拼齊）= 把零散的東西拼湊成形，各種方向都適用。",
      coreMotion: 'make-assemble',
      meanings: [
        {
          meaning: "捏造/編造",
          plainEnglish: "to invent a story or excuse",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📖", label: "謊話" },
          note: "「拼湊」出不存在的故事 → 虛構",
          example: "Stop making up stories — just tell me what really happened.",
        },
        {
          meaning: "和好",
          plainEnglish: "to reconcile after a fight",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "💔", label: "關係" },
          note: "把裂開的關係「拼回去」→ 重歸於好",
          example: "They had a big argument but made up the next day.",
        },
        {
          meaning: "化妝",
          plainEnglish: "to apply cosmetics",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "💄", label: "妝" },
          note: "在臉上「塗拼」出更好的面貌；名詞 makeup",
          example: "She spent thirty minutes making up before the school dance.",
        },
        {
          meaning: "構成/佔",
          plainEnglish: "to form a percentage of a whole",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🍰", label: "組成" },
          note: "部分「拼湊成」整體 → 佔某個比例",
          example: "Sugar and butter make up most of this cookie recipe.",
        },
        {
          meaning: "彌補",
          plainEnglish: "to compensate for something",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "💐", label: "彌補" },
          note: "把缺口「補上」→ 補償過失；make up for",
          example: "He bought her flowers to make up for forgetting their anniversary.",
        },
      ],
    },
    out: {
      title: "Make out",
      spatial: "MAKE（製造）+ OUT（從裡面取出）= 把模糊的東西辨識出來，或把混亂的頭緒理出來。",
      coreMotion: 'make-discern',
      meanings: [
        {
          meaning: "辨認/看清楚",
          plainEnglish: "to see or read something with difficulty",
          grammar: 'separable',
          followedBy: 'noun / clause',
          sceneObject: { emoji: "👤", label: "輪廓" },
          note: "從模糊中把輪廓「辨認出來」→ 看清楚",
          example: "I could barely make out his face in the dark hallway.",
        },
        {
          meaning: "搞懂/理解",
          plainEnglish: "to understand something confusing",
          grammar: 'separable',
          followedBy: 'noun / clause',
          sceneObject: { emoji: "🤔", label: "困惑" },
          note: "答案藏在複雜情況裡，試著把它「挖出來」→ 搞懂",
          example: "I can't make out why she's so upset with me.",
        },
      ],
    },
  },

  Pick: {
    up: {
      title: "Pick up",
      spatial: "PICK（挑選）+ UP（往上）= 把東西從下面挑起來，延伸到各種「拾起」的場景。",
      coreMotion: 'pick-lift',
      meanings: [
        {
          meaning: "撿起/拿起",
          plainEnglish: "to lift something from the ground",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🪙", label: "硬幣" },
          note: "從地上把東西「撿起來」→ 拾取",
          example: "She bent down to pick up her keys from the floor.",
        },
        {
          meaning: "學會（快速）",
          plainEnglish: "to learn something quickly",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🗣️", label: "語言" },
          note: "像撿東西一樣「拾起」技能 → 快速學到",
          example: "She picked up Spanish really quickly after moving to Madrid.",
        },
        {
          meaning: "接人",
          plainEnglish: "to collect someone by vehicle",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "✈️", label: "接人" },
          note: "把人「接起來」帶走 → 去接送",
          example: "I'll pick you up at the airport at 3 PM.",
        },
        {
          meaning: "接電話",
          plainEnglish: "to answer the phone",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📱", label: "電話" },
          note: "把話筒「拿起來」→ 接聽",
          example: "Nobody picked up when I tried calling him last night.",
        },
        {
          meaning: "好轉",
          plainEnglish: "to improve or increase",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📈", label: "業績" },
          note: "數字「往上撿」→ 情況改善",
          example: "Sales usually pick up in the fourth quarter.",
        },
      ],
    },
    out: {
      title: "Pick out",
      spatial: "PICK（挑選）+ OUT（從裡面取出）= 從一堆東西裡把某個特定的挑出來。",
      coreMotion: 'pick-select',
      meanings: [
        {
          meaning: "挑選/選出",
          plainEnglish: "to choose one from many",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👕", label: "衣服" },
          note: "從一堆衣服裡把一件「挑出來」→ 選擇",
          example: "She spent an hour trying to pick out a dress for the wedding.",
        },
        {
          meaning: "認出/辨識",
          plainEnglish: "to identify someone in a crowd",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "👤", label: "目標" },
          note: "從人群中把某個人「找出來」→ 認出",
          example: "Can you pick out my sister in the crowd?",
        },
      ],
    },
    on: {
      title: "Pick on",
      spatial: "PICK（挑選）+ ON（持續接觸/針對）= 反覆挑同一個人，故意針對欺負。",
      coreMotion: 'pick-target',
      meanings: [
        {
          meaning: "找碴/霸凌",
          plainEnglish: "to repeatedly bully or tease someone",
          grammar: 'inseparable',
          followedBy: 'noun (person)',
          sceneObject: { emoji: "😟", label: "被欺負者" },
          note: "反覆「挑」同一個人 → 故意針對欺負",
          example: "The older kids kept picking on him at school.",
        },
      ],
    },
  },

  Hold: {
    on: {
      title: "Hold on",
      spatial: "HOLD（抓住）+ ON（持續/在上面）= 抓住現在這個狀態，暫停或撐住不放。",
      coreMotion: 'hold-grip',
      meanings: [
        {
          meaning: "等一下/暫停",
          plainEnglish: "wait a moment",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "✋", label: "手勢" },
          note: "「抓住」現在這個瞬間 → 請對方暫停等",
          example: "Hold on, I need to find my keys before we leave.",
        },
        {
          meaning: "撐住/堅持",
          plainEnglish: "to keep going despite difficulty",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🪢", label: "繩子" },
          note: "死命抓住不放手 → 撐過困難",
          example: "Just hold on a little longer — we're almost at the top of the mountain.",
        },
      ],
    },
    up: {
      title: "Hold up",
      spatial: "HOLD（抓住）+ UP（往上撐）= 撐住不讓倒，或擋在前方讓人過不去。",
      coreMotion: 'hold-brace',
      meanings: [
        {
          meaning: "耽誤/延誤",
          plainEnglish: "to delay or block",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🚧", label: "路障" },
          note: "「擋在路上撐著」→ 阻礙進行",
          example: "The accident on the highway is holding up traffic for miles.",
        },
        {
          meaning: "撐住/經得起",
          plainEnglish: "to stay strong under pressure",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🏛️", label: "建築" },
          note: "在重壓下「往上撐住」不垮 → 經得起考驗",
          example: "The old wooden bridge has been holding up for over a hundred years.",
        },
      ],
    },
    back: {
      title: "Hold back",
      spatial: "HOLD（抓住）+ BACK（往後拉）= 把東西拉住不讓前進，可以是情緒/人/或資訊。",
      coreMotion: 'hold-restrain',
      meanings: [
        {
          meaning: "壓抑（情緒）",
          plainEnglish: "to suppress emotions",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "😢", label: "情緒" },
          note: "把情緒「往後拉住」→ 強忍不發作",
          example: "She held back her tears as she waved goodbye at the airport.",
        },
        {
          meaning: "阻礙/拖累",
          plainEnglish: "to prevent someone from progressing",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🏃", label: "前進" },
          note: "抓住想往前的人「往後拉」→ 阻礙進步",
          example: "Don't let fear hold you back from trying new things.",
        },
        {
          meaning: "隱瞞/保留不說",
          plainEnglish: "to keep information secret",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🤐", label: "秘密" },
          note: "把資訊「扣在後面」不放出去 → 隱瞞",
          example: "I can tell he's holding something back — he won't look me in the eye.",
        },
      ],
    },
  },

  Keep: {
    up: {
      title: "Keep up (with)",
      spatial: "KEEP（維持）+ UP（在上面）= 保持在高水準，或跟上前方的速度不落後。",
      coreMotion: 'keep-pace',
      meanings: [
        {
          meaning: "跟上/不落後",
          plainEnglish: "to stay at the same level or speed",
          grammar: 'intransitive',
          followedBy: 'with + noun',
          sceneObject: { emoji: "🏃", label: "腳步" },
          note: "拼命「保持」在前方同速 → 跟上不掉隊",
          example: "It's hard to keep up with the latest fashion trends.",
        },
        {
          meaning: "維持（好表現）",
          plainEnglish: "to maintain a good standard",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "⭐", label: "水準" },
          note: "把水平「保持在上面」→ 維持好表現",
          example: "Keep up the great work — everyone loved your performance.",
        },
      ],
    },
    on: {
      title: "Keep on",
      spatial: "KEEP（維持）+ ON（持續在軌道上）= 持續不停做某件事，不中斷。",
      coreMotion: 'keep-persist',
      meanings: [
        {
          meaning: "繼續/持續做",
          plainEnglish: "to continue doing something",
          grammar: 'intransitive',
          followedBy: 'verb-ing',
          sceneObject: { emoji: "🚶", label: "前行" },
          note: "「持續在」軌道上不停 → 不斷往前走",
          example: "Even when it's hard, just keep on walking and you'll get there.",
        },
      ],
    },
    out: {
      title: "Keep out (of)",
      spatial: "KEEP（維持）+ OUT（在外面）= 維持在外面，不讓進入，或自己不插手。",
      coreMotion: 'keep-out',
      meanings: [
        {
          meaning: "禁止進入",
          plainEnglish: "to stay outside, not allowed in",
          grammar: 'intransitive',
          followedBy: 'of + noun',
          sceneObject: { emoji: "🚪", label: "門禁" },
          note: "把人「擋在外面」→ 不准進來",
          example: "The kids were told to keep out of the garden after the rain.",
        },
        {
          meaning: "別介入/不插手",
          plainEnglish: "to not get involved",
          grammar: 'intransitive',
          followedBy: 'of + noun',
          sceneObject: { emoji: "👥", label: "糾紛" },
          note: "自己「留在外面」不插手 → 不介入",
          example: "This is between the two of them — I'm going to keep out of it.",
        },
      ],
    },
  },

  Hang: {
    out: {
      title: "Hang out",
      spatial: "HANG（懸掛/輕鬆晃著）+ OUT（在外面）= 像衣服曬在外面，輕鬆地待著消磨時間。",
      coreMotion: 'hang-idle',
      meanings: [
        {
          meaning: "閒晃/出去玩",
          plainEnglish: "to spend time casually with someone",
          grammar: 'intransitive',
          followedBy: 'with + noun',
          sceneObject: { emoji: "☕", label: "閒晃" },
          note: "像衣服「掛在外面」→ 輕鬆待著不做什麼",
          example: "Do you want to hang out this weekend? We could grab some coffee.",
        },
      ],
    },
    up: {
      title: "Hang up",
      spatial: "HANG（懸掛）+ UP（往上）= 把東西往上掛好，或把話筒掛回去。",
      coreMotion: 'hang-mount',
      meanings: [
        {
          meaning: "掛電話/掛斷",
          plainEnglish: "to end a phone call",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📞", label: "電話" },
          note: "把話筒「掛回去」→ 結束通話",
          example: "She hung up without saying goodbye.",
        },
        {
          meaning: "掛起來",
          plainEnglish: "to hang something on a hook or wall",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧥", label: "衣服" },
          note: "把東西「往上掛」到牆上或架上",
          example: "Hang up your coat when you come in.",
        },
      ],
    },
    on: {
      title: "Hang on",
      spatial: "HANG（懸掛/緊抓）+ ON（持續）= 緊抓著不放，可以是請人等一下，或撐住不放棄。",
      coreMotion: 'hang-cling',
      meanings: [
        {
          meaning: "稍等一下",
          plainEnglish: "wait a moment",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "✋", label: "手勢" },
          note: "「抓住」現在這個瞬間 → 請對方稍等",
          example: "Hang on, I left my wallet inside — give me one second.",
        },
        {
          meaning: "緊抓/撐住",
          plainEnglish: "to hold on tightly, to endure",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🪢", label: "繩子" },
          note: "像抓住繩子懸在空中 → 死命撐住不放",
          example: "Hang on tight — the roller coaster is about to start!",
        },
      ],
    },
  },

  Fall: {
    apart: {
      title: "Fall apart",
      spatial: "FALL（掉落）+ APART（四散分離）= 原本在一起的東西掉落散開，可以是計畫瓦解，也可以是人崩潰。",
      coreMotion: 'fall-apart',
      meanings: [
        {
          meaning: "崩潰/瓦解",
          plainEnglish: "to completely collapse or fail",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "🧱", label: "結構" },
          note: "組成的部分「掉落散開」→ 整個計畫或關係崩壞",
          example: "Their friendship fell apart after they had a huge fight over money.",
        },
        {
          meaning: "精神崩潰",
          plainEnglish: "to emotionally break down",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "💔", label: "心情" },
          note: "心裡的東西「掉落四散」→ 情緒撐不住了",
          example: "She fell apart when she heard the bad news about her dog.",
        },
      ],
    },
    behind: {
      title: "Fall behind",
      spatial: "FALL（掉落）+ BEHIND（到後面）= 速度或進度跟不上，掉到別人後面。",
      coreMotion: 'fall-behind',
      meanings: [
        {
          meaning: "落後/跟不上",
          plainEnglish: "to fail to keep up with others",
          grammar: 'intransitive',
          followedBy: 'on / with + noun',
          sceneObject: { emoji: "🏃", label: "腳步" },
          note: "「掉落到後面」→ 速度或進度跟不上別人",
          example: "If you miss too many classes, you'll fall behind the rest of the group.",
        },
      ],
    },
    for: {
      title: "Fall for",
      spatial: "FALL（栽倒）+ FOR（朝向/為了）= 身不由己地往某人或某事栽過去，可以是愛上，也可以是上當。",
      coreMotion: 'fall-for',
      meanings: [
        {
          meaning: "愛上/迷上",
          plainEnglish: "to suddenly fall in love with",
          grammar: 'intransitive',
          followedBy: 'noun',
          sceneObject: { emoji: "💘", label: "心動" },
          note: "不受控地「栽倒」向某人 → 墜入愛河",
          example: "He fell for her the moment they met at the party.",
        },
        {
          meaning: "上當/受騙",
          plainEnglish: "to be tricked or deceived",
          grammar: 'intransitive',
          followedBy: 'noun',
          sceneObject: { emoji: "🪤", label: "陷阱" },
          note: "「栽進」陷阱裡 → 不小心被騙了",
          example: "Don't fall for it — he's just saying that to get what he wants.",
        },
      ],
    },
    through: {
      title: "Fall through",
      spatial: "FALL（掉落）+ THROUGH（穿過去）= 計畫從底部穿掉，徹底落空告吹。",
      coreMotion: 'fall-through',
      meanings: [
        {
          meaning: "（計畫）告吹/泡湯",
          plainEnglish: "to fail to happen as planned",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "📋", label: "計畫" },
          note: "計畫「掉穿地板」→ 落空，什麼都沒了",
          example: "Our trip to the beach fell through because of the rain.",
        },
      ],
    },
  },

  Carry: {
    on: {
      title: "Carry on",
      spatial: "CARRY（扛著）+ ON（持續往前）= 扛著事情繼續前進，不停下來。",
      coreMotion: 'carry-on',
      meanings: [
        {
          meaning: "繼續做",
          plainEnglish: "to continue doing something",
          grammar: 'intransitive',
          followedBy: 'with + noun',
          sceneObject: { emoji: "📦", label: "重擔" },
          note: "扛著東西「持續往前走」→ 不停下來繼續做",
          example: "Just carry on — I'll catch up with you in a minute.",
        },
        {
          meaning: "隨身帶上（飛機）",
          plainEnglish: "to bring onto a plane as hand luggage",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧳", label: "行李" },
          note: "把行李「帶著上去」飛機 → 隨身攜帶",
          example: "You're only allowed to carry on one small bag.",
        },
      ],
    },
    out: {
      title: "Carry out",
      spatial: "CARRY（搬運）+ OUT（帶出去）= 把計畫從腦海裡搬出去，付諸實行。",
      coreMotion: 'carry-out',
      meanings: [
        {
          meaning: "執行、實施",
          plainEnglish: "to do or complete a task",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "📋", label: "任務" },
          note: "把計畫「搬到外面」去做 → 付諸行動",
          example: "They carried out their plan to surprise her for her birthday.",
        },
      ],
    },
  },

  Cut: {
    off: {
      title: "Cut off",
      spatial: "CUT（切）+ OFF（斷開）= 把連接切斷、把話切斷。",
      coreMotion: 'cut-off',
      meanings: [
        {
          meaning: "切斷（供應/連線）",
          plainEnglish: "to stop the supply of something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🔌", label: "電源" },
          note: "把連結「切掉斷開」→ 供應中斷",
          example: "The landlord cut off the hot water because we forgot to pay the bill.",
        },
        {
          meaning: "打斷（別人說話）",
          plainEnglish: "to interrupt someone while speaking",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "💬", label: "話" },
          note: "把對話「切斷」→ 話還沒說完就被打斷",
          example: "Sorry to cut you off, but I really have to go now.",
        },
      ],
    },
    out: {
      title: "Cut out",
      spatial: "CUT（切）+ OUT（從裡面剪出去）= 剪掉、去掉、別再做了。",
      coreMotion: 'cut-out',
      meanings: [
        {
          meaning: "停止（別再做了）",
          plainEnglish: "to stop doing something annoying",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "✋", label: "停止" },
          note: "把壞習慣「剪掉去除」→ Cut it out! 別再鬧了",
          example: "Cut it out! Stop teasing your little brother.",
        },
        {
          meaning: "去掉/省略",
          plainEnglish: "to remove or eliminate something",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🍰", label: "甜食" },
          note: "把不需要的東西「剪出去」→ 刪掉省略",
          example: "I cut out sugar completely and I sleep so much better now.",
        },
        {
          meaning: "天生適合（be cut out for）",
          plainEnglish: "to be naturally suited for something",
          grammar: 'intransitive',
          followedBy: 'for + noun',
          sceneObject: { emoji: "🧩", label: "個性" },
          note: "像被「裁剪」成這個形狀，剛好吻合 → 天生適合",
          example: "She's not cut out for teaching — she has no patience with kids.",
        },
      ],
    },
    down: {
      title: "Cut down (on)",
      spatial: "CUT（切）+ DOWN（砍下來）= 把用量砍低，減少消耗。",
      coreMotion: 'cut-down',
      meanings: [
        {
          meaning: "減少（用量/頻率）",
          plainEnglish: "to reduce the amount of something",
          grammar: 'intransitive',
          followedBy: 'on + noun',
          sceneObject: { emoji: "🍬", label: "糖" },
          note: "把高的「砍矮」→ 降低用量、少用少吃",
          example: "I'm trying to cut down on sugar — my dentist found three cavities.",
        },
      ],
    },
  },

  Work: {
    out: {
      title: "Work out",
      spatial: "WORK（用力做）+ OUT（結果出來）= 把力氣用出去，讓結果跑出來。",
      coreMotion: 'work-out',
      meanings: [
        {
          meaning: "運動/健身",
          plainEnglish: "to exercise",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "💪", label: "健身" },
          note: "把力氣「全部使出去」→ 鍛鍊身體",
          example: "I try to work out at least three times a week.",
        },
        {
          meaning: "解決/算出",
          plainEnglish: "to find a solution",
          grammar: 'separable',
          followedBy: 'noun',
          sceneObject: { emoji: "🧩", label: "問題" },
          note: "把問題「做出來解開」→ 找到答案",
          example: "They worked out a way to split the bill without any argument.",
        },
        {
          meaning: "順利/成功",
          plainEnglish: "to end up going well",
          grammar: 'intransitive',
          followedBy: null,
          sceneObject: { emoji: "⭐", label: "結果" },
          note: "努力之後「結果跑出來」是好的 → 事情順利",
          example: "Don't worry — things will work out in the end.",
        },
      ],
    },
    on: {
      title: "Work on",
      spatial: "WORK（用力做）+ ON（持續在上面）= 持續對某件事施工、打磨。",
      coreMotion: 'work-on',
      meanings: [
        {
          meaning: "持續努力做",
          plainEnglish: "to keep working at",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎹", label: "作品" },
          note: "「一直在」某件事上面用力 → 持續投入",
          example: "She's been working on her piano piece for a whole month.",
        },
        {
          meaning: "改善/加強",
          plainEnglish: "to get better at",
          grammar: 'inseparable',
          followedBy: 'noun',
          sceneObject: { emoji: "🎯", label: "弱點" },
          note: "在某個弱點上「持續施工打磨」→ 讓它變好",
          example: "You really need to work on your punctuality — you're late every day.",
        },
      ],
    },
  },

  Find: {
    out: { title: "Find out", spatial: "找到後翻到外面。", meanings: [
      { meaning: "發現/查明", note: "把藏著的真相「翻出來」→ 得知原本不知道的事", example: "We need to find out what caused the outage last night." },
      { meaning: "被發現", note: "做的壞事被「翻出來」→ 秘密曝光", example: "He was copying code from Stack Overflow and got found out." },
    ]},
  },

  Figure: {
    out: { title: "Figure out", spatial: "推理把答案理出來。", meanings: [
      { meaning: "想出/弄清楚", note: "把混亂的線索「理出」邏輯 → 透過思考找到答案", example: "I finally figured out why the tests were failing — it was a race condition." },
      { meaning: "理解", note: "把看不懂的「理出」頭緒 → 搞懂", example: "I can't figure out how this legacy code works." },
    ]},
  },

  Show: {
    up: { title: "Show up", spatial: "展示往上現身。", meanings: [
      { meaning: "出現/到場", note: "從隱形「浮上來」被看見 → 人到了", example: "He didn't show up to the meeting — again." },
      { meaning: "使某人難堪", note: "表現「凸顯出來」讓別人相形見絀", example: "The intern's code quality showed up some of the senior engineers." },
    ]},
    off: { title: "Show off", spatial: "展示到外面。", meanings: [
      { meaning: "炫耀", note: "把東西「亮出去」讓大家看 → 故意引人注目", example: "He loves to show off his new mechanical keyboard." },
      { meaning: "展示", note: "正面地把成果「展現出來」", example: "Let me show off the new dashboard we just built." },
    ]},
  },

  Check: {
    out: { title: "Check out", spatial: "檢查看出去。", meanings: [
      { meaning: "查看/了解", note: "把視線「投出去」仔細看 → 看看這個東西", example: "Check out this new VS Code extension — it's really useful." },
      { meaning: "結帳", note: "結算完「走出去」→ 付款", example: "I added the items to my cart but haven't checked out yet." },
      { meaning: "退房", note: "辦完手續「走出去」→ 退房", example: "We need to check out of the hotel by noon." },
    ]},
    in: { title: "Check in", spatial: "檢查走進去登記。", meanings: [
      { meaning: "報到/登記", note: "「走進」櫃台辦手續 → 登記", example: "You can check in online 24 hours before your flight." },
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
      { meaning: "指出/提醒", note: "「指出去」讓大家注意 → 提醒某個事實或問題", example: "She pointed out a critical flaw in the database schema." },
    ]},
  },

  Throw: {
    away: { title: "Throw away", spatial: "扔向遠方。", meanings: [
      { meaning: "丟掉/扔掉", note: "把不要的「扔向遠方」→ 丟棄", example: "Don't throw away that old laptop — we can recycle it." },
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
      { meaning: "突出/引人注目", note: "「站得比別人高」→ 在人群中特別顯眼", example: "Her resume really stands out from the other candidates." },
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
      { meaning: "待命/備用", note: "「站在旁邊」隨時準備上場 → 待命支援", example: "The DevOps team is standing by during the server migration." },
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
      { meaning: "放鴿子/不去", note: "把約定「吹掉」→ 故意不出席", example: "He blew off the team meeting to play video games." },
      { meaning: "發洩", note: "把壓力像蒸汽「吹出去」；blow off steam", example: "I need to blow off some steam after that stressful sprint." },
    ]},
  },

  Sign: {
    up: { title: "Sign up", spatial: "簽上去。", meanings: [
      { meaning: "註冊/報名", note: "把名字「簽上」名單 → 加入或登記", example: "Over 500 people signed up for the free trial in the first week." },
    ]},
    in: { title: "Sign in", spatial: "簽進去。", meanings: [
      { meaning: "登入", note: "「簽名進入」系統 → 輸入帳密登入", example: "You need to sign in with your company email to access the dashboard." },
    ]},
    out: { title: "Sign out", spatial: "簽出去。", meanings: [
      { meaning: "登出", note: "「簽名離開」系統 → 結束連線", example: "Don't forget to sign out when you leave a shared computer." },
    ]},
    off: { title: "Sign off (on)", spatial: "簽完移開放行。", meanings: [
      { meaning: "簽核/批准", note: "簽完「移開放行」→ 同意通過；sign off on something", example: "We need the tech lead to sign off on this deployment." },
    ]},
  },

  Shut: {
    down: { title: "Shut down", spatial: "全關死往下停。", meanings: [
      { meaning: "關閉/停止運作", note: "把開口「全關死」→ 系統完全停擺", example: "We need to shut down the server for maintenance tonight." },
      { meaning: "駁倒/使閉嘴", note: "把對方的論點「關死」→ 讓人無話可說", example: "She shut down every objection with solid data." },
    ]},
    up: { title: "Shut up", spatial: "把嘴關上。", meanings: [
      { meaning: "閉嘴", note: "把嘴「關住」→ 停止說話（不太禮貌）", example: "I wish the noisy neighbors would shut up after midnight." },
    ]},
  },

  Drop: {
    out: { title: "Drop out", spatial: "掉出隊伍。", meanings: [
      { meaning: "退學/退出", note: "從隊伍「掉出去」→ 中途放棄離開", example: "He dropped out of college to start his own company." },
    ]},
    off: { title: "Drop off", spatial: "放下離開。", meanings: [
      { meaning: "放下/送達", note: "把人或物「放下」後離開 → 順路送到", example: "Can you drop off the documents at the front desk?" },
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
      { meaning: "撤出/退出", note: "把自己「拉出」某個局面 → 撤退", example: "The investor decided to pull out of the deal at the last minute." },
      { meaning: "拿出", note: "「拉出來」到外面", example: "He pulled out his laptop and started coding right away." },
    ]},
    over: { title: "Pull over", spatial: "拉到旁邊。", meanings: [
      { meaning: "靠邊停車", note: "把車「拉向」路邊 → 停到旁邊", example: "The police officer asked the driver to pull over." },
    ]},
  },

  Clean: {
    up: { title: "Clean up", spatial: "往上收攏清乾淨。", meanings: [
      { meaning: "清理/打掃", note: "把髒亂「收攏清乾淨」→ 恢復整潔", example: "We need to clean up this legacy code before adding new features." },
    ]},
  },

  Wrap: {
    up: { title: "Wrap up", spatial: "包起來收好。", meanings: [
      { meaning: "結束/收尾", note: "「打包完成」→ 結束會議或工作", example: "Let's wrap up the meeting and grab some lunch." },
    ]},
  },

  Move: {
    on: { title: "Move on", spatial: "移動繼續往前。", meanings: [
      { meaning: "繼續前進/放下", note: "離開原地「往前走」→ 進入下一個話題或放下過去", example: "This bug is fixed, let's move on to the next ticket." },
    ]},
  },

  Fill: {
    out: { title: "Fill out", spatial: "填到滿出來。", meanings: [
      { meaning: "填寫（表格）", note: "把空白「填滿」→ 完成表格或文件", example: "Please fill out this form before the interview." },
    ]},
  },

  Back: {
    up: { title: "Back up", spatial: "在後面支撐。", meanings: [
      { meaning: "支持/挺某人", note: "「站在後面」當靠山 → 支持某人的決定", example: "Don't worry, whatever you decide, I will back you up." },
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
      { meaning: "解決/搞定", note: "把混亂的「分好理順」→ 把問題處理好", example: "Don't worry about the configuration issue, I'll sort it out." },
    ]},
  },

  Burn: {
    out: { title: "Burn out", spatial: "燒光熄滅。", meanings: [
      { meaning: "筋疲力竭/倦怠", note: "「燒光」歸零 → 過度工作導致身心耗盡", example: "If you keep working 12 hours a day, you are going to burn out very soon." },
    ]},
  },

  Calm: {
    down: { title: "Calm down", spatial: "往下沉靜。", meanings: [
      { meaning: "冷靜/平靜下來", note: "情緒「往下降」→ 從激動恢復平靜", example: "Calm down — it's just a staging bug, not production." },
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
      { meaning: "醒悟/認清現實", note: "大腦「醒過來」→ 不再自欺欺人", example: "Wake up — the deadline is tomorrow and we haven't even started testing." },
    ]},
  },

  Mess: {
    up: { title: "Mess up", spatial: "全翻亂了。", meanings: [
      { meaning: "搞砸", note: "把原本好的「弄亂」→ 犯錯/搞砸事情", example: "I messed up the deployment and the whole site went down." },
    ]},
  },

  Freak: {
    out: { title: "Freak out", spatial: "情緒炸出去。", meanings: [
      { meaning: "抓狂/嚇壞", note: "情緒「炸出去」無法控制 → 極度緊張或恐慌", example: "Don't freak out, but I think I just deleted the production database." },
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
      { meaning: "開始/啟動", note: "像開球「踢出去」→ 正式啟動活動或專案", example: "Let's kick off the sprint with a quick planning session." },
    ]},
  },

  Roll: {
    out: { title: "Roll out", spatial: "滾出去鋪開。", meanings: [
      { meaning: "推出/部署", note: "把準備好的「滾展開」→ 正式發布給用戶", example: "We're planning to roll out the new feature next Monday." },
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
      { meaning: "放棄/錯過機會", note: "機會「經過」卻讓它「飄走」→ 主動放棄", example: "You'd be crazy to pass up this job offer." },
    ]},
  },

  Let: {
    down: { title: "Let down", spatial: "把期望放下。", meanings: [
      { meaning: "讓人失望", note: "把別人的期望「放下」摔碎 → 辜負信任", example: "I trusted you with this project — don't let me down." },
    ]},
  },
};
