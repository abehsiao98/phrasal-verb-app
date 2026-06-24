// ═══════════════════════════════════════════════════════════════
// 五大感受參數資料 — 以認知語言學視角呈現外國人腦袋中的時間/空間畫面
// ═══════════════════════════════════════════════════════════════

export const SENSORY_CATEGORIES = ['時間感', '頻率感', '即時感', '方式感', '程度感', '空間感', '條件感'];

export const SENSORY_ITEMS = [
  // ── 時間感 ──
  'already',
  'yet',
  'still',
  'just',
  'soon',
  'recently',
  'eventually',
  'at first',
  'so far',
  'from now on',
  'in time',
  'for good',
  'for now',
  'all along',
  'sooner or later',
  'in the long run',
  // ── 頻率感 ──
  'always',
  'never',
  'often',
  'sometimes',
  'once in a while',
  'from time to time',
  'all the time',
  'every now and then',
  'for once',
  'more often than not',
  'on and off',
  'over and over',
  // ── 即時感 ──
  'right away',
  'right now',
  'all of a sudden',
  'in no time',
  'on the spot',
  // ── 方式感 ──
  'on purpose',
  'by accident',
  'little by little',
  'all at once',
  'one by one',
  'from scratch',
  'in a row',
  'in a hurry',
  'by yourself',
  // ── 程度感 ──
  'more or less',
  'at least',
  'at all',
  // ── 空間感 ──
  'back and forth',
  'all the way',
  'out of nowhere',
  'around the corner',
  'out of town',
  // ── 條件感 ──
  'no matter what',
  'just in case',
  'otherwise',
  'depending on',
];

// 每個感受參數的類別
export const SENSORY_CATEGORY = {
  'already':            '時間感',
  'yet':                '時間感',
  'still':              '時間感',
  'just':               '時間感',
  'soon':               '時間感',
  'recently':           '時間感',
  'eventually':         '時間感',
  'at first':           '時間感',
  'so far':             '時間感',
  'from now on':        '時間感',
  'in time':            '時間感',
  'for good':           '時間感',
  'for now':            '時間感',
  'all along':          '時間感',
  'sooner or later':    '時間感',
  'in the long run':    '時間感',
  'always':             '頻率感',
  'never':              '頻率感',
  'often':              '頻率感',
  'sometimes':          '頻率感',
  'once in a while':    '頻率感',
  'from time to time':  '頻率感',
  'all the time':       '頻率感',
  'every now and then': '頻率感',
  'for once':           '頻率感',
  'more often than not':'頻率感',
  'on and off':         '頻率感',
  'over and over':      '頻率感',
  'right away':         '即時感',
  'right now':          '即時感',
  'all of a sudden':    '即時感',
  'in no time':         '即時感',
  'on the spot':        '即時感',
  'on purpose':         '方式感',
  'by accident':        '方式感',
  'little by little':   '方式感',
  'all at once':        '方式感',
  'one by one':         '方式感',
  'from scratch':       '方式感',
  'in a row':           '方式感',
  'in a hurry':         '方式感',
  'by yourself':        '方式感',
  'more or less':       '程度感',
  'at least':           '程度感',
  'at all':             '程度感',
  'back and forth':     '空間感',
  'all the way':        '空間感',
  'out of nowhere':     '空間感',
  'around the corner':  '空間感',
  'out of town':        '空間感',
  'no matter what':     '條件感',
  'just in case':       '條件感',
  'otherwise':          '條件感',
  'depending on':       '條件感',
};

// 動畫場景對應（對應 SensoryScene.jsx 裡的場景名稱）
export const SENSORY_SCENE = {
  'already':            'already',
  'yet':                'yet',
  'still':              'still',
  'just':               'just',
  'soon':               'soon',
  'recently':           'recently',
  'eventually':         'eventually',
  'at first':           'atFirst',
  'so far':             'soFar',
  'from now on':        'fromNowOn',
  'in time':            'inTime',
  'for good':           'forGood',
  'for now':            'forNow',
  'all along':          'allAlong',
  'sooner or later':    'soonerOrLater',
  'in the long run':    'inTheLongRun',
  'always':             'always',
  'never':              'never',
  'often':              'often',
  'sometimes':          'sometimes',
  'once in a while':    'onceInAWhile',
  'from time to time':  'fromTimeToTime',
  'all the time':       'allTheTime',
  'every now and then': 'everyNowAndThen',
  'for once':           'forOnce',
  'more often than not':'moreOftenThanNot',
  'on and off':         'onAndOff',
  'over and over':      'overAndOver',
  'right away':         'rightAway',
  'right now':          'rightNow',
  'all of a sudden':    'allOfASudden',
  'out of nowhere':     'outOfNowhere',
  'in no time':         'inNoTime',
  'on the spot':        'onTheSpot',
  'on purpose':         'onPurpose',
  'by accident':        'byAccident',
  'little by little':   'littleByLittle',
  'all at once':        'allAtOnce',
  'one by one':         'oneByOne',
  'back and forth':     'backAndForth',
  'from scratch':       'fromScratch',
  'in a row':           'inARow',
  'all the way':        'allTheWay',
  'in a hurry':         'inAHurry',
  'by yourself':        'byYourself',
  'more or less':       'moreOrLess',
  'at least':           'atLeast',
  'at all':             'atAll',
  'around the corner':  'aroundTheCorner',
  'out of town':        'outOfTown',
  'no matter what':     'noMatterWhat',
  'just in case':       'justInCase',
  'otherwise':          'otherwise',
  'depending on':       'dependingOn',
};

// 每個感受參數的認知核心（給學習者看的畫面說明）
export const SENSORY_CORE = {
  'already': {
    spatial: '時間線已過臨界點',
    metaphor: '外國人腦袋畫面：時間軸上有條線，動作早就越過那條線了。',
    color: '#1565c0',
  },
  'yet': {
    spatial: '還沒抵達時間臨界點',
    metaphor: '腦袋畫面：時間軸上有條期待線，還沒到那裡。',
    color: '#6a1b9a',
  },
  'still': {
    spatial: '持續停留在同一狀態',
    metaphor: '腦袋畫面：一個畫面從過去延伸到現在，沒有改變。',
    color: '#00695c',
  },
  'just': {
    spatial: '剛剛越過那個點',
    metaphor: '腦袋畫面：時間線上的點，就在現在旁邊一點點。',
    color: '#e65100',
  },
  'soon': {
    spatial: '即將到達的未來點',
    metaphor: '腦袋畫面：時間線上前方不遠的地方有個點正在靠近。',
    color: '#f57f17',
  },
  'recently': {
    spatial: '剛剛過去的時間帶',
    metaphor: '腦袋畫面：緊貼在現在後面的一段時間區域。',
    color: '#4527a0',
  },
  'eventually': {
    spatial: '經過很長一段後終於到達',
    metaphor: '腦袋畫面：時間線很長，走了好久，終於到了一個點。',
    color: '#1b5e20',
  },
  'always': {
    spatial: '100% 時間軸全覆蓋',
    metaphor: '腦袋畫面：時間軸從頭到尾全部填滿，沒有空隙。',
    color: '#c62828',
  },
  'never': {
    spatial: '0% 時間軸完全空白',
    metaphor: '腦袋畫面：時間軸完全空的，一格都沒有。',
    color: '#37474f',
  },
  'often': {
    spatial: '時間軸上高密度出現',
    metaphor: '腦袋畫面：時間軸上有很多個點，但不是每格都有。',
    color: '#1565c0',
  },
  'sometimes': {
    spatial: '時間軸上散落幾個點',
    metaphor: '腦袋畫面：時間軸上有幾個點，不規律地散落。',
    color: '#6d4c41',
  },
  'once in a while': {
    spatial: '很長的空白後才出現一次',
    metaphor: '腦袋畫面：時間軸上很多空白，偶爾才有一個點。',
    color: '#558b2f',
  },
  'from time to time': {
    spatial: '有規律的間隔出現',
    metaphor: '腦袋畫面：時間軸上每隔一段距離出現一個點，有節奏感。',
    color: '#00838f',
  },
  'all the time': {
    spatial: '持續不斷地發生',
    metaphor: '腦袋畫面：就像水龍頭一直開著，停不下來。',
    color: '#e53935',
  },
  'right away': {
    spatial: '零延遲立刻行動',
    metaphor: '腦袋畫面：一個指令發出，馬上衝出去，中間沒有等待。',
    color: '#e65100',
  },
  'right now': {
    spatial: '就在這個時刻',
    metaphor: '腦袋畫面：時間軸上用手指著「這裡」，強調此刻。',
    color: '#d84315',
  },
  'all of a sudden': {
    spatial: '突然從平靜到爆發',
    metaphor: '腦袋畫面：平靜的水面突然炸開，完全意外的打斷。',
    color: '#6a1b9a',
  },
  'out of nowhere': {
    spatial: '空間上憑空出現',
    metaphor: '腦袋畫面：一片空曠的空間，什麼都沒有，然後某個東西從虛空中直接冒出來，沒有來的方向。',
    color: '#5c6bc0',
  },
  'on purpose': {
    spatial: '有意識地瞄準目標',
    metaphor: '腦袋畫面：有一條線從意圖指向行動，是有方向的箭頭。',
    color: '#1565c0',
  },
  'by accident': {
    spatial: '意外偏離原本軌道',
    metaphor: '腦袋畫面：原本直線走路，突然滑倒偏向，不是計畫中的事。',
    color: '#c62828',
  },
  'little by little': {
    spatial: '細小顆粒慢慢累積',
    metaphor: '腦袋畫面：一粒一粒加進去，慢慢堆高，沒有大動作。',
    color: '#2e7d32',
  },
  'all at once': {
    spatial: '所有事同時爆炸發生',
    metaphor: '腦袋畫面：多個箭頭同時發射，沒有順序，全部一起。',
    color: '#bf360c',
  },
  'one by one': {
    spatial: '有序地一個接著一個',
    metaphor: '腦袋畫面：排成一排，依序一個接一個地被處理掉。',
    color: '#00695c',
  },
  // ── 新增 ──
  'at first': {
    spatial: '時間線的最起始點',
    metaphor: '腦袋畫面：時間軸的最左邊，一切剛剛開始的那個原點。',
    color: '#1565c0',
  },
  'so far': {
    spatial: '從起點走到現在這段距離',
    metaphor: '腦袋畫面：用手比著「從起點到現在」這段路，強調走了多少。',
    color: '#00695c',
  },
  'from now on': {
    spatial: '現在起，時間線向未來全面延伸',
    metaphor: '腦袋畫面：站在「現在」這個點，面向未來，一條無限延伸的線往前鋪開。',
    color: '#6a1b9a',
  },
  'in time': {
    spatial: '在截止點之前剛好抵達',
    metaphor: '腦袋畫面：有條截止線，球飛奔過來，在線的前一刻剛好到達。',
    color: '#e65100',
  },
  'for good': {
    spatial: '永久、不可逆的終點',
    metaphor: '腦袋畫面：時間線走到某個點之後，背後的門永遠關上了，沒有回頭路。',
    color: '#37474f',
  },
  'every now and then': {
    spatial: '不規律但帶點節奏的閃現',
    metaphor: '腦袋畫面：時間軸上有幾個散落的點，不完全規律，但也不完全隨機。',
    color: '#6d4c41',
  },
  'for once': {
    spatial: '難得出現的一個例外點',
    metaphor: '腦袋畫面：幾乎全空的時間軸上，有一個特別亮的點，強調「這次很特別」。',
    color: '#4527a0',
  },
  'more often than not': {
    spatial: '超過一半的時間都是如此',
    metaphor: '腦袋畫面：時間軸上超過半數的格子是填滿的，天平偏向「發生」那一側。',
    color: '#c62828',
  },
  'in no time': {
    spatial: '時間距離幾乎為零',
    metaphor: '腦袋畫面：從現在到完成的時間距離被壓縮到極小，幾乎感覺不到有時間流過。',
    color: '#f57f17',
  },
  'at all': {
    spatial: '強調零程度（用於否定）',
    metaphor: '腦袋畫面：一個空量表，完全空的，沒有任何一格有東西，用來強調「一點都沒有」。',
    color: '#37474f',
  },
  'back and forth': {
    spatial: '空間上兩端之間的擺盪軌跡',
    metaphor: '腦袋畫面：一個球在 A 點和 B 點之間不停彈來彈去，是空間上的來回軌跡。',
    color: '#5c6bc0',
  },
  'from scratch': {
    spatial: '從最底部的零開始',
    metaphor: '腦袋畫面：完全空白的畫布，什麼都沒有，然後一點一點往上建起來。',
    color: '#558b2f',
  },
  'in a row': {
    spatial: '連續不間斷地排列',
    metaphor: '腦袋畫面：一列相連的點，緊密相接，中間沒有空隙，強調連貫性。',
    color: '#00838f',
  },
  'all the way': {
    spatial: '空間上從起點到終點的完整路徑',
    metaphor: '腦袋畫面：一條路從 A 延伸到 B，完整鋪滿，沒有中途斷掉，是空間距離的完整覆蓋。',
    color: '#5c6bc0',
  },
  'in a hurry': {
    spatial: '速度超過正常，匆忙中前進',
    metaphor: '腦袋畫面：動作很快、步伐亂，像在快轉，細節全部跳過。',
    color: '#e65100',
  },
  'by yourself': {
    spatial: '只有自己，沒有外力',
    metaphor: '腦袋畫面：一個人站在場景中，周圍沒有其他人，一切靠自己完成。',
    color: '#00695c',
  },
  'for now': {
    spatial: '暫時停在現在這個點',
    metaphor: '腦袋畫面：時間軸上現在這個點有個暫停標誌，不是永久，只是目前如此。',
    color: '#1565c0',
  },
  'all along': {
    spatial: '從頭到尾都是這樣，從未改變',
    metaphor: '腦袋畫面：整條時間軸從最左到現在一直有這個狀態，說話者剛發現這件事。',
    color: '#4e342e',
  },
  'sooner or later': {
    spatial: '未來某個不確定的點，但必然到來',
    metaphor: '腦袋畫面：時間軸前方有個必然出現的點，不知道早還是晚，但一定會來。',
    color: '#6a1b9a',
  },
  'in the long run': {
    spatial: '拉長時間軸看，最終結果如此',
    metaphor: '腦袋畫面：短期軌跡可能起伏，但把時間軸拉很長之後，趨勢和結果清晰可見。',
    color: '#1b5e20',
  },
  'on and off': {
    spatial: '開了又關、關了又開，不穩定',
    metaphor: '腦袋畫面：像一顆燈泡，忽明忽滅，沒有持續也沒有完全停止。',
    color: '#f57f17',
  },
  'over and over': {
    spatial: '同樣的動作一遍又一遍重複',
    metaphor: '腦袋畫面：一個動作循環不斷地播放，像是卡帶重複，強調厭倦或強調。',
    color: '#c62828',
  },
  'on the spot': {
    spatial: '就在那個當下，當場',
    metaphor: '腦袋畫面：事情發生，立刻在那個地點、那個瞬間就回應，沒有離開去思考。',
    color: '#e65100',
  },
  'more or less': {
    spatial: '在標準值上下的模糊範圍',
    metaphor: '腦袋畫面：量表上有個目標值，實際結果在它旁邊一點點，不精確但差不多。',
    color: '#00838f',
  },
  'at least': {
    spatial: '底線以上，確保最低標準',
    metaphor: '腦袋畫面：量表上有條底線，說話者指著那條線說：最少要到這裡，這是底線。',
    color: '#2e7d32',
  },
  'around the corner': {
    spatial: '空間上轉個彎就到了',
    metaphor: '腦袋畫面：你走在路上，前面有個轉角，轉過去就看到了。比喻某件事快到了、迫在眉睫。',
    color: '#5c6bc0',
  },
  'out of town': {
    spatial: '離開你的地盤，去了遠方',
    metaphor: '腦袋畫面：地圖上你的城市是個圓圈，人物跨出圓圈外，去了遠的地方。',
    color: '#5c6bc0',
  },
  'no matter what': {
    spatial: '防護罩全開，外面怎麼轟炸都不動',
    metaphor: '腦袋畫面：一道雷打下來，但防護罩依然張開，裡面的人不動如山，無論如何都雷打不動。',
    color: '#795548',
  },
  'just in case': {
    spatial: '多帶一把傘的防備動作',
    metaphor: '腦袋畫面：出門前天空有點灰，不確定會不會下雨，但先把傘塞進包包裡。',
    color: '#795548',
  },
  'otherwise': {
    spatial: '岔路口：不走 A 就掉進 B',
    metaphor: '腦袋畫面：站在岔路口，一條路通往目標，另一條路通往陷阱。不走對的那條，就會掉進去。',
    color: '#795548',
  },
  'depending on': {
    spatial: '天秤隨砝碼傾斜',
    metaphor: '腦袋畫面：一座天秤，左右各有砝碼，結果取決於哪邊比較重，隨時可能傾斜。',
    color: '#795548',
  },
};


// 每個感受參數的詳細資料
export const sensoryData = {
  'already': {
    title: 'already — 已經',
    meanings: [
      {
        meaning: '動作已完成（比預期更早）',
        note: '重點不是「做了」，而是「比想像中更早做了」，有一種「哇，這麼快？」的感覺',
        example: 'I\'ve already eaten. （我已經吃了。）',
      },
      {
        meaning: '對方表達驚訝或確認',
        note: '說話者用 already 強調時間感，有時帶有輕微的不耐煩',
        example: 'Are you done already? （你這麼快就做完了？）',
      },
    ],
    tip: '⏰ Already 是「站在現在，回頭看已越過的時間點」',
    compareWith: 'yet（還沒越過）、still（還停在那裡）',
  },

  'yet': {
    title: 'yet — 還沒 / 已經了嗎？',
    meanings: [
      {
        meaning: '（否定句）到現在還沒發生',
        note: '表示期待某件事發生，但時間還沒到',
        example: 'I haven\'t eaten yet. （我還沒吃。）',
      },
      {
        meaning: '（疑問句）期待中的事發生了嗎？',
        note: '問的是：那個我期待的點到了沒？',
        example: 'Have you finished yet? （你做完了嗎？）',
      },
    ],
    tip: '🎯 Yet 是看著前方那個「期待的點」，問它到了沒，或說還沒到',
    compareWith: 'already（已越過）、still（仍在等待）',
  },

  'still': {
    title: 'still — 仍然',
    meanings: [
      {
        meaning: '某狀態持續存在至今',
        note: '強調從過去到現在「沒有改變」，有一種時間暫停的感覺',
        example: 'She\'s still sleeping. （她還在睡。）',
      },
      {
        meaning: '表示驚訝、不滿（某事理應結束卻沒結束）',
        note: '說話者預期某狀態應該結束了，但它沒有',
        example: 'Are you still here? （你還在啊？）',
      },
    ],
    tip: '🔒 Still 是「時間流動了，但這件事像被釘住一樣沒動」',
    compareWith: 'already（已改變）、yet（期待改變但還沒）',
  },

  'just': {
    title: 'just — 剛剛 / 就是',
    meanings: [
      {
        meaning: '剛剛發生（非常靠近現在的過去）',
        note: '就在現在旁邊一點點，時間距離極近',
        example: 'I just got here. （我剛到。）',
      },
      {
        meaning: '強調「僅僅、只是」（減少重要性）',
        note: '把某事縮小，讓它顯得不嚴重',
        example: 'It\'s just a joke. （只是個玩笑啦。）',
      },
    ],
    tip: '📍 Just 是時間軸上貼著「現在」的那個點，或把某事縮到最小',
    compareWith: 'recently（稍遠的過去）、already（更前面的過去）',
  },

  'soon': {
    title: 'soon — 很快、即將',
    meanings: [
      {
        meaning: '不久後就會發生',
        note: '在時間軸前方，不遠處有一個即將到來的點',
        example: 'She\'ll be here soon. （她很快就到了。）',
      },
      {
        meaning: '強調反應迅速（as soon as）',
        note: '用於條件句，表示立刻接著發生',
        example: 'Call me as soon as you arrive. （一到就打給我。）',
      },
    ],
    tip: '🏃 Soon 是前方靠近現在的未來點，就快到了',
    compareWith: 'right away（現在立刻）、eventually（很久之後）',
  },

  'recently': {
    title: 'recently — 最近',
    meanings: [
      {
        meaning: '在最近這段時間發生的事',
        note: '比 just 更寬，是一個時間帶（zone），而非一個點',
        example: 'I\'ve been really busy recently. （我最近一直很忙。）',
      },
      {
        meaning: '說明近期的變化',
        note: '強調狀況有所不同了，跟以前相比',
        example: 'He\'s changed a lot recently. （他最近變很多。）',
      },
    ],
    tip: '📅 Recently 是貼著「現在」往後延伸的一段模糊時間帶',
    compareWith: 'just（更近的一個點）、lately（更口語）',
  },

  'eventually': {
    title: 'eventually — 終究、最後終於',
    meanings: [
      {
        meaning: '經過很長過程後終於發生',
        note: '時間軸很長，中間可能有很多障礙，但最後還是到達了',
        example: 'She eventually found the key. （她終於找到鑰匙了。）',
      },
      {
        meaning: '表示不可避免的結局',
        note: '不一定馬上，但遲早會發生',
        example: 'Everything eventually comes to an end. （所有事終究會結束。）',
      },
    ],
    tip: '🏁 Eventually 是「走了很長一段路之後，終於到達終點」的感覺',
    compareWith: 'finally（更強調解脫感）、soon（很快就到）',
  },

  'always': {
    title: 'always — 總是',
    meanings: [
      {
        meaning: '每次都、100% 頻率',
        note: '時間軸每個格子都填滿，沒有例外',
        example: 'She always arrives on time. （她總是準時到。）',
      },
      {
        meaning: '表達習慣或特質',
        note: '這個行為已是固定模式，是對方的特徵',
        example: 'He\'s always talking. （他就是一直說話。）',
      },
    ],
    tip: '████ Always 是把整條時間軸全部塗滿，一格不剩',
    compareWith: 'usually（大多數）、never（全部空白）',
  },

  'never': {
    title: 'never — 從不',
    meanings: [
      {
        meaning: '從來不、0% 頻率',
        note: '時間軸完全空白，一次都沒有',
        example: 'I never eat breakfast. （我從不吃早餐。）',
      },
      {
        meaning: '強調絕不（表決心）',
        note: '說話者明確拒絕，語氣強烈',
        example: 'I\'ll never give up. （我絕不放棄。）',
      },
    ],
    tip: '⬜ Never 是整條時間軸完全空白，一個點都沒有',
    compareWith: 'always（全滿）、sometimes（有幾個點）',
  },

  'often': {
    title: 'often — 經常',
    meanings: [
      {
        meaning: '頻繁地發生，但不是每次',
        note: '時間軸上有很多點，但不是全滿',
        example: 'We often go hiking on weekends. （我們週末常常健行。）',
      },
      {
        meaning: '表示某種傾向或習慣',
        note: '比 sometimes 更頻繁，比 usually 稍少',
        example: 'He often forgets his keys. （他很常忘記帶鑰匙。）',
      },
    ],
    tip: '●●○●●○ Often 是密度高但不滿，佔六七成的感覺',
    compareWith: 'usually（更常）、sometimes（更少）',
  },

  'sometimes': {
    title: 'sometimes — 有時候',
    meanings: [
      {
        meaning: '不規律地偶爾發生',
        note: '時間軸上有幾個點，散落而無固定規律',
        example: 'I sometimes work from home. （我有時在家工作。）',
      },
      {
        meaning: '表示例外或變化',
        note: '跟平常不一樣，偶爾發生的情形',
        example: 'Sometimes I just need a break. （有時我就是需要休息。）',
      },
    ],
    tip: '○●○○●○ Sometimes 是散落的點，不規律，低到中密度',
    compareWith: 'often（更密）、rarely（更稀）',
  },

  'once in a while': {
    title: 'once in a while — 偶爾',
    meanings: [
      {
        meaning: '很少發生，但確實會發生',
        note: '時間軸上很多空白，偶爾才有一個點',
        example: 'We eat out once in a while. （我們偶爾外出吃飯。）',
      },
    ],
    tip: '○○○○●○○○ Once in a while 是很稀疏的幾個點，大量空白',
    compareWith: 'sometimes（更頻繁）、rarely（語感更正式）',
  },

  'from time to time': {
    title: 'from time to time — 不時地',
    meanings: [
      {
        meaning: '不定期但有節奏地出現',
        note: '比 once in a while 更有規律感，像是「時間到了就會出現一次」',
        example: 'I check my old photos from time to time. （我不時翻翻舊照片。）',
      },
    ],
    tip: '○●○○●○○● From time to time 有一種節奏性的間隔，不是隨機',
    compareWith: 'once in a while（更隨機）、sometimes（更頻繁）',
  },

  'all the time': {
    title: 'all the time — 一直都是、隨時都在',
    meanings: [
      {
        meaning: '持續不斷，停不下來',
        note: '不強調頻率，而是強調「持續流動中」，像水龍頭一直開著',
        example: 'She\'s on her phone all the time. （她一直滑手機。）',
      },
      {
        meaning: '表示厭煩或強調',
        note: '說話者覺得這件事出現太頻繁，語氣帶有一點無奈',
        example: 'This happens all the time. （這種事常常發生。）',
      },
    ],
    tip: '🚰 All the time 像水龍頭一直開著，停不下來的感覺',
    compareWith: 'always（頻率 100%）、constantly（更書面）',
  },

  'right away': {
    title: 'right away — 立刻、馬上',
    meanings: [
      {
        meaning: '接到指令後立刻行動，零延遲',
        note: '沒有等待、思考、猶豫，收到就動',
        example: 'I\'ll do it right away. （我馬上去做。）',
      },
    ],
    tip: '⚡ Right away 是指令發出→立刻行動，中間沒有空隙',
    compareWith: 'right now（強調時刻）、immediately（更正式）',
  },

  'right now': {
    title: 'right now — 就是現在',
    meanings: [
      {
        meaning: '強調就在這個當下',
        note: '用手指著時間軸的「現在這一點」，強而有力地說：就是這裡',
        example: 'I need it right now! （我現在就需要！）',
      },
      {
        meaning: '表示當前狀況',
        note: '說明現在正在發生或存在的情形',
        example: 'What are you doing right now? （你現在在做什麼？）',
      },
    ],
    tip: '👆 Right now 是用力指著「現在」這個點，強調迫切感',
    compareWith: 'right away（動作立刻）、currently（更中性）',
  },

  'all of a sudden': {
    title: 'all of a sudden — 突然間',
    meanings: [
      {
        meaning: '沒有預警地突然發生',
        note: '外部世界原本平靜，突然被打斷，主語沒有預料到',
        example: 'All of a sudden, the lights went out. （突然間燈全滅了。）',
      },
    ],
    tip: '💥 All of a sudden 是平靜的水面突然爆炸，完全意外',
    compareWith: 'suddenly（更直接）、out of nowhere（更誇張）',
  },

  'out of nowhere': {
    title: 'out of nowhere — 突然冒出（完全沒預警）',
    meanings: [
      {
        meaning: '從虛空中突然出現，毫無跡象',
        note: '比 all of a sudden 更誇張，強調「根本不知道它會出現在哪」',
        example: 'A car came out of nowhere and nearly hit me. （一輛車突然冒出來，差點撞到我。）',
      },
    ],
    tip: '🌌 Out of nowhere 是空無一物的虛空中突然跳出一個東西',
    compareWith: 'all of a sudden（更常見）、suddenly（更簡單）',
  },

  'on purpose': {
    title: 'on purpose — 故意地',
    meanings: [
      {
        meaning: '有意識地，帶著明確意圖行動',
        note: '腦袋裡有條線從「意圖」直接指向「行動」，是有目的的',
        example: 'Did you do that on purpose? （你是故意的嗎？）',
      },
    ],
    tip: '🎯 On purpose 是從意圖瞄準目標後發射，有方向的箭頭',
    compareWith: 'intentionally（更正式）、deliberately（更強烈）',
  },

  'by accident': {
    title: 'by accident — 不小心、意外地',
    meanings: [
      {
        meaning: '不是計畫中的，意外偏離',
        note: '原本在直線走，突然滑了一下，撞到不該撞的東西',
        example: 'I found it by accident. （我意外找到的。）',
      },
    ],
    tip: '🤸 By accident 是偏離原本軌道，一個意外的偏折',
    compareWith: 'accidentally（相同意思）、on purpose（相反）',
  },

  'little by little': {
    title: 'little by little — 一點一點地',
    meanings: [
      {
        meaning: '慢慢地、漸進式地積累或改變',
        note: '一粒一粒加進去，沒有大動作，但持續累積',
        example: 'Little by little, he improved his English. （他的英文一點一點地進步了。）',
      },
    ],
    tip: '🪨 Little by little 是細小顆粒慢慢堆高，安靜但有力量的過程',
    compareWith: 'gradually（更正式）、step by step（更強調順序）',
  },

  'all at once': {
    title: 'all at once — 突然間全部一起',
    meanings: [
      {
        meaning: '所有事情同時爆發，沒有順序',
        note: '多個東西同時發生，沒有先後，一次全部出現',
        example: 'Don\'t do everything all at once. （不要一次把所有事都做了。）',
      },
    ],
    tip: '💣 All at once 是多個箭頭同時射出，沒有順序，同時爆發',
    compareWith: 'all of a sudden（強調意外）、simultaneously（更正式）',
  },

  'one by one': {
    title: 'one by one — 一個一個地',
    meanings: [
      {
        meaning: '有秩序地依序處理，一個接著一個',
        note: '排成一排，依序一個接一個地被處理，有清晰的先後順序',
        example: 'They entered the room one by one. （他們一個一個地進入房間。）',
      },
    ],
    tip: '🚶🚶🚶 One by one 是一排人依序前進，有序而清晰的過程',
    compareWith: 'little by little（強調累積）、in turn（更正式）',
  },

  'at first': {
    title: 'at first — 一開始',
    meanings: [
      {
        meaning: '在某件事剛剛開始的時候',
        note: '強調「起初的狀態」，通常暗示後來改變了',
        example: 'At first I was scared, but then I got used to it. （一開始我很害怕，但後來習慣了。）',
      },
      {
        meaning: '第一印象或初期反應',
        note: '常搭配 but later / but eventually，有轉折感',
        example: 'At first glance, it looks simple. （乍看之下，它看起來很簡單。）',
      },
    ],
    tip: '📍 At first 是站在時間軸的最左邊那個原點，說那時候的狀態',
    compareWith: 'at the beginning（更正式）、initially（書面語）',
  },

  'so far': {
    title: 'so far — 到目前為止',
    meanings: [
      {
        meaning: '從某個起點到現在的這段時間內',
        note: '強調「走過來的這段路」，不對未來作出判斷',
        example: 'So far, everything\'s going well. （到目前為止一切順利。）',
      },
      {
        meaning: '表示進度或目前的成果',
        note: '常用於說明現在做到哪裡了，還沒說「做完」',
        example: 'How much have you done so far? （你到目前做了多少？）',
      },
    ],
    tip: '📏 So far 是用手指著「從起點到現在」這段距離，強調已走過的路',
    compareWith: 'up to now（相同意思）、until now（更書面）',
  },

  'from now on': {
    title: 'from now on — 從現在起',
    meanings: [
      {
        meaning: '從這個當下開始，往後都是如此',
        note: '強調有一個切換點，在那之後事情將會不同',
        example: 'From now on, I\'ll exercise every day. （從現在起，我每天運動。）',
      },
      {
        meaning: '宣示未來的改變或決心',
        note: '有一種「過去的不算，現在開始才算」的宣言感',
        example: 'From now on, things will be different. （從現在起，事情將會不同。）',
      },
    ],
    tip: '🚀 From now on 是站在現在這個點，把所有未來都往前承諾出去',
    compareWith: 'from this point on（更正式）、starting now（更口語）',
  },

  'in time': {
    title: 'in time — 及時',
    meanings: [
      {
        meaning: '在截止點或壞事發生之前剛好到達',
        note: '強調「沒有太晚」，有一種驚險但成功的感覺',
        example: 'We got there just in time. （我們剛好及時趕到。）',
      },
      {
        meaning: '隨著時間推移，最終會...',
        note: '表示某件事不是現在，而是在未來某個時間點自然發生',
        example: 'You\'ll understand in time. （你遲早會明白的。）',
      },
    ],
    tip: '⏱️ In time 是在截止線之前剛好抵達，差一點就來不及的感覺',
    compareWith: 'on time（準時，強調準確）、just in time（更強調驚險）',
  },

  'for good': {
    title: 'for good — 永遠地、從此不再',
    meanings: [
      {
        meaning: '永久地，不再改變',
        note: '強調某個狀態是最終的，沒有回頭路，背後的門已關上',
        example: 'She left the country for good. （她永遠離開了這個國家。）',
      },
      {
        meaning: '徹底地結束某件事',
        note: '常用於表達決心，強調這次是真的結束了',
        example: 'I\'m quitting smoking for good. （我要永遠戒菸了。）',
      },
    ],
    tip: '🚪 For good 是背後的門關上後，再也打不開了的感覺',
    compareWith: 'forever（更誇張、情感性）、permanently（更書面）',
  },

  'every now and then': {
    title: 'every now and then — 偶爾',
    meanings: [
      {
        meaning: '不規律地，有時候會發生',
        note: '比 once in a while 稍微更頻繁，但仍是不規律的出現',
        example: 'Every now and then, we go camping. （我們偶爾去露營。）',
      },
    ],
    tip: '○○●○○○●○ Every now and then 是散落的點，有點節奏感但不固定',
    compareWith: 'once in a while（更稀少）、from time to time（更有節奏）',
  },

  'for once': {
    title: 'for once — 就這一次（難得）',
    meanings: [
      {
        meaning: '與平時不同，就這一次例外地發生',
        note: '暗示平常不是這樣，這次很特別，常帶輕微的驚訝或要求',
        example: 'For once, he arrived on time. （難得他這次準時到了。）',
      },
      {
        meaning: '說話者希望對方這次做到',
        note: '有一種「你平常不這樣，但這次至少...」的語氣',
        example: 'Could you just listen for once? （你能不能就這一次好好聽？）',
      },
    ],
    tip: '✨ For once 是時間軸上那個特別閃光的例外點，強調稀有性',
    compareWith: 'this time（更中性）、just this once（更口語）',
  },

  'more often than not': {
    title: 'more often than not — 多半、往往',
    meanings: [
      {
        meaning: '超過半數的情況下都是如此',
        note: '不說「總是」，但說「大部分時候都這樣」，比 often 更強調比例',
        example: 'More often than not, he\'s late. （他往往都會遲到。）',
      },
    ],
    tip: '⚖️ More often than not 是天平明顯偏向「發生」那側，超過 50%',
    compareWith: 'usually（更日常）、generally（更書面）',
  },

  'in no time': {
    title: 'in no time — 一下子、很快就',
    meanings: [
      {
        meaning: '非常快速地完成，時間幾乎感覺不到',
        note: '強調速度之快，好像沒花什麼時間',
        example: 'She finished the test in no time. （她一下子就把考試做完了。）',
      },
    ],
    tip: '⚡ In no time 是把從現在到完成的時間距離壓縮到接近零',
    compareWith: 'right away（強調立刻動作）、quickly（更普通）',
  },

  'at all': {
    title: 'at all — 根本（用於否定/疑問強調）',
    meanings: [
      {
        meaning: '（否定句）完全不、一點都沒有',
        note: '用來把否定的程度拉到最強，強調「零」',
        example: 'I don\'t mind at all. （我一點都不介意。）',
      },
      {
        meaning: '（疑問句）究竟、到底有沒有',
        note: '問的是「是否存在任何程度」，語氣有點懷疑',
        example: 'Did you sleep at all last night? （你昨晚到底有沒有睡？）',
      },
    ],
    tip: '⬜ At all 是一個量表被清空到零，強調完全的空白',
    compareWith: 'whatsoever（更強烈）、in the least（更正式）',
  },

  'back and forth': {
    title: 'back and forth — 來來回回',
    meanings: [
      {
        meaning: '在兩端之間重複地往返移動',
        note: '像鐘擺一樣，去了又回，回了又去，沒有固定停下來',
        example: 'He kept pacing back and forth. （他不停地來回踱步。）',
      },
      {
        meaning: '在觀點或決定之間反覆搖擺',
        note: '用於比喻，表示想法或立場搖擺不定',
        example: 'They went back and forth on the decision. （他們在這個決定上來回搖擺。）',
      },
    ],
    tip: '🏓 Back and forth 是乒乓球來回彈，沒有終點的往返',
    compareWith: 'to and fro（更書面）、repeatedly（更中性）',
  },

  'from scratch': {
    title: 'from scratch — 從零開始',
    meanings: [
      {
        meaning: '從完全空白的起點開始，沒有借助任何現有的東西',
        note: '強調「什麼都沒有」，一切靠自己建立起來',
        example: 'She built the company from scratch. （她從零開始建立這家公司。）',
      },
      {
        meaning: '重新來過，丟掉之前所有的',
        note: '有時帶有無奈，表示前面的努力白費了，要重新開始',
        example: 'We had to start from scratch. （我們不得不重頭開始。）',
      },
    ],
    tip: '📋 From scratch 是一塊完全空白的黑板，沒有任何底稿，從第一筆開始',
    compareWith: 'from the beginning（更一般）、from zero（相同意思）',
  },

  'in a row': {
    title: 'in a row — 連續地',
    meanings: [
      {
        meaning: '連續發生，中間沒有中斷',
        note: '像一排緊密相連的點，強調連貫性和重複性',
        example: 'She won three times in a row. （她連贏三次。）',
      },
      {
        meaning: '一個接著一個地，不間斷',
        note: '強調「連續」這個概念，通常後面會說幾次/幾天',
        example: 'It rained for five days in a row. （連續下了五天的雨。）',
      },
    ],
    tip: '●●●●● In a row 是緊密相連的一排點，沒有任何空隙',
    compareWith: 'consecutively（更正式）、straight（更口語，如 five days straight）',
  },

  'all the way': {
    title: 'all the way — 一路到底、全程',
    meanings: [
      {
        meaning: '從頭到尾完整地走完整段距離',
        note: '強調沒有中途停下來，一口氣走到底',
        example: 'She walked all the way home. （她一路走回家。）',
      },
      {
        meaning: '完全地、徹底地支持或同意',
        note: '比喻用法，表示全力支持，沒有保留',
        example: 'I\'m with you all the way. （我全程支持你。）',
      },
    ],
    tip: '🛤️ All the way 是一條路從起點鋪到終點，完整走完，一步都沒少',
    compareWith: 'the whole way（更口語）、fully（更抽象）',
  },

  'in a hurry': {
    title: 'in a hurry — 匆匆忙忙',
    meanings: [
      {
        meaning: '動作很快、沒時間細想地進行',
        note: '強調速度超過正常節奏，像快轉一樣，可能因此出錯',
        example: 'I left in a hurry and forgot my keys. （我匆匆忙忙就走了，忘了帶鑰匙。）',
      },
      {
        meaning: '急迫地、趕時間',
        note: '常暗示有時間壓力，或者某事讓人急著離開',
        example: 'She\'s always in a hurry. （她總是很趕。）',
      },
    ],
    tip: '🏃 In a hurry 是速度超過正常節奏，像快轉，細節全部跳過',
    compareWith: 'quickly（更中性）、in a rush（相同意思）',
  },

  'by yourself': {
    title: 'by yourself — 靠自己、獨自',
    meanings: [
      {
        meaning: '沒有他人幫助，獨立完成',
        note: '強調「沒有外力」，自己一個人做到',
        example: 'Did you do this by yourself? （這是你自己做的嗎？）',
      },
      {
        meaning: '一個人，沒有陪伴',
        note: '強調獨自一人的狀態，可以是主動也可以是被動',
        example: 'She sat by herself in the corner. （她獨自坐在角落。）',
      },
    ],
    tip: '🧍 By yourself 是一個人站在場景中，周圍沒有任何人',
    compareWith: 'on your own（相同意思）、alone（更強調孤獨感）',
  },

  'for now': {
    title: 'for now — 暫時、目前先這樣',
    meanings: [
      {
        meaning: '目前的狀況，但可能之後改變',
        note: '有個隱含的「以後再說」，不是最終決定',
        example: 'Let\'s leave it for now. （先這樣放著吧。）',
      },
      {
        meaning: '暫時夠用了',
        note: '說話者接受現況，但保留改變的可能性',
        example: 'That\'s enough for now. （目前夠了。）',
      },
    ],
    tip: '⏸️ For now 是時間軸上的暫停符號，不是永遠，只是目前如此',
    compareWith: 'for the time being（更正式）、temporarily（更書面）',
  },

  'all along': {
    title: 'all along — 一直以來、從頭到尾都是',
    meanings: [
      {
        meaning: '從一開始到現在，事情一直都是這樣',
        note: '常帶有「終於發現」的語氣，說話者剛意識到這個事實其實早就存在',
        example: 'She was right all along. （她從頭到尾都是對的。）',
      },
      {
        meaning: '某人其實從開始就知道或感覺到',
        note: '有一種「原來如此，早就應該知道」的頓悟感',
        example: 'I knew it all along. （我從一開始就知道了。）',
      },
    ],
    tip: '📽️ All along 是整條時間軸從最左邊到現在都填著同樣的顏色，只是剛被發現',
    compareWith: 'the whole time（更口語）、from the start（更直接）',
  },

  'sooner or later': {
    title: 'sooner or later — 遲早',
    meanings: [
      {
        meaning: '不確定什麼時候，但必然會發生',
        note: '強調結果的不可避免性，時間點不確定，但發生是確定的',
        example: 'Sooner or later, you\'ll have to face it. （你遲早要面對這件事的。）',
      },
    ],
    tip: '🎯 Sooner or later 是時間軸前方有個必然出現的點，不知早晚，但一定來',
    compareWith: 'eventually（更強調過了很久）、inevitably（更書面）',
  },

  'in the long run': {
    title: 'in the long run — 長遠來看',
    meanings: [
      {
        meaning: '考量長期結果，而非短期',
        note: '現在可能看起來不好，但從長遠角度來看是對的或划算的',
        example: 'It\'s worth it in the long run. （長遠來看，這是值得的。）',
      },
    ],
    tip: '🏔️ In the long run 是把時間軸拉很長，短期起伏不重要，最終趨勢才重要',
    compareWith: 'in the end（更強調最終結果）、eventually（更口語）',
  },

  'on and off': {
    title: 'on and off — 斷斷續續',
    meanings: [
      {
        meaning: '不持續、時有時無地發生',
        note: '像燈泡忽明忽滅，既沒有一直持續，也沒有完全停止',
        example: 'It\'s been raining on and off all day. （整天斷斷續續地下雨。）',
      },
      {
        meaning: '某段關係或狀況反覆開始和結束',
        note: '形容不穩定的狀態，來了又走，走了又來',
        example: 'They\'ve been dating on and off for years. （他們斷斷續續交往好幾年了。）',
      },
    ],
    tip: '💡 On and off 是燈泡忽明忽滅，沒有穩定狀態的感覺',
    compareWith: 'occasionally（更書面）、sometimes（更一般）',
  },

  'over and over': {
    title: 'over and over — 一遍又一遍',
    meanings: [
      {
        meaning: '同樣的事情不斷重複發生或被重複做',
        note: '強調重複的次數多到令人注意，常帶有厭倦、驚訝或強調的語氣',
        example: 'He makes the same mistake over and over. （他一遍又一遍地犯同樣的錯誤。）',
      },
      {
        meaning: '刻意重複練習或確認',
        note: '說話者故意多次做同一件事，有時是為了學習或確保正確',
        example: 'She practiced it over and over until she got it right. （她一遍遍練習，直到做對。）',
      },
    ],
    tip: '🔁 Over and over 是同一個動作的循環不停播放，像是卡帶重複',
    compareWith: 'again and again（相同意思）、repeatedly（更書面）',
  },

  'on the spot': {
    title: 'on the spot — 當場、立即',
    meanings: [
      {
        meaning: '就在那個當下、那個地點立刻發生',
        note: '強調沒有離開、沒有等待，事情就在「那裡」「那時」解決',
        example: 'He was hired on the spot. （他當場就被錄用了。）',
      },
      {
        meaning: '讓人當場答覆，形成壓力',
        note: '有時帶有被逼迫的感覺，必須即時回應',
        example: 'The question put me on the spot. （那個問題讓我當場為難。）',
      },
    ],
    tip: '📍 On the spot 是用手指著「就這個地方、就這個瞬間」，沒有移動或等待',
    compareWith: 'right away（強調立刻行動）、immediately（更書面）',
  },

  'more or less': {
    title: 'more or less — 差不多、大概',
    meanings: [
      {
        meaning: '大約是這樣，不精確但接近',
        note: '說話者不想給出精確數字或承諾，用模糊範圍帶過',
        example: 'It\'ll take an hour, more or less. （大概要一個小時左右。）',
      },
      {
        meaning: '基本上是這樣（帶有輕微保留）',
        note: '表示同意但不完全，保留一點點例外空間',
        example: 'Are you done? — More or less. （做完了嗎？——差不多吧。）',
      },
    ],
    tip: '〰️ More or less 是量表上目標值旁邊的模糊帶，不精確但差不多',
    compareWith: 'roughly（更書面）、about（更口語）、approximately（更正式）',
  },

  'at least': {
    title: 'at least — 至少',
    meanings: [
      {
        meaning: '最低限度，確保底線',
        note: '說話者指出一個最低標準，暗示就算其他不好，這點是有保障的',
        example: 'At least he tried. （至少他有試過。）',
      },
      {
        meaning: '找出壞情況中的積極面',
        note: '常用來安慰自己或他人，強調雖然不好，但還不算最糟',
        example: 'At least nobody got hurt. （至少沒有人受傷。）',
      },
    ],
    tip: '📊 At least 是量表上的底線，說話者指著那條線說：最低要到這裡',
    compareWith: 'at the very least（更強調）、if nothing else（更口語）',
  },

  'around the corner': {
    title: 'around the corner — 就在轉角（快到了）',
    meanings: [
      {
        meaning: '實際空間上在轉彎處附近',
        note: '字面意思是「轉個彎就到」，距離很近',
        example: 'The coffee shop is just around the corner. （咖啡店就在轉角。）',
      },
      {
        meaning: '某件事即將發生，迫在眉睫',
        note: '比喻用法，表示快到了、馬上就會出現',
        example: 'Summer is just around the corner. （夏天就快到了。）',
      },
    ],
    tip: '🏠 Around the corner 是走在路上，轉個彎就看到了的距離感',
    compareWith: 'coming soon（更抽象）、nearby（更靜態）',
  },

  'out of town': {
    title: 'out of town — 不在城裡、出遠門',
    meanings: [
      {
        meaning: '離開平常住的地方，去了別的城市',
        note: '強調物理上的大跨度位移，離開你的地盤',
        example: 'He\'s out of town this week. （他這週不在城裡。）',
      },
      {
        meaning: '暫時無法聯繫、不在原本的生活圈',
        note: '常用於解釋為什麼某人找不到、不在',
        example: 'Sorry, the manager is out of town. （抱歉，經理出差了。）',
      },
    ],
    tip: '🧳 Out of town 是在地圖上跨出你的城市圓圈，去了遠方',
    compareWith: 'away（更籠統）、overseas（跨國更遠）',
  },

  'no matter what': {
    title: 'no matter what — 無論如何',
    meanings: [
      {
        meaning: '不管發生什麼事，態度或行動都不改變',
        note: '強調堅定不移的決心，任何條件都無法動搖',
        example: 'I\'ll support you no matter what. （無論如何我都挺你。）',
      },
      {
        meaning: '用於讓步，承認困難但不退縮',
        note: '「就算最壞的情況也…」的語感',
        example: 'No matter what happens, stay calm. （無論發生什麼事，保持冷靜。）',
      },
    ],
    tip: '🛡️ No matter what 是防護罩全開，外面狂風暴雨也打不進來',
    compareWith: 'regardless（更書面）、whatever happens（更口語）',
  },

  'just in case': {
    title: 'just in case — 以防萬一',
    meanings: [
      {
        meaning: '為了可能（但不確定）的狀況提前準備',
        note: '不是因為一定會發生，而是「萬一呢？」的防備心態',
        example: 'Bring an umbrella just in case. （帶把傘以防萬一。）',
      },
      {
        meaning: '多做一步，多一份保險',
        note: '語氣輕鬆，像是「不會怎樣，但有備無患」',
        example: 'I saved the file twice, just in case. （我存了兩次，以防萬一。）',
      },
    ],
    tip: '☂️ Just in case 是出門前塞把傘進包包，不確定需不需要，但先準備好',
    compareWith: 'in case（更正式）、to be safe（更口語）',
  },

  'otherwise': {
    title: 'otherwise — 否則、不然的話',
    meanings: [
      {
        meaning: '如果前面的條件不成立，就會走向另一個（通常不好的）結果',
        note: '暗示「你應該做 A，不然就會變成 B」',
        example: 'Hurry up, otherwise we\'ll be late. （快點，不然我們會遲到。）',
      },
      {
        meaning: '除此之外（轉換話題的用法）',
        note: '比較中性，表示「在這件事以外，其他都…」',
        example: 'The food was cold. Otherwise, the restaurant was great. （菜是冷的，但除此之外餐廳很棒。）',
      },
    ],
    tip: '⚠️ Otherwise 是站在岔路口，不走 A 就會掉進 B 的陷阱',
    compareWith: 'or else（更口語、更威脅）、if not（更中性）',
  },

  'depending on': {
    title: 'depending on — 取決於…',
    meanings: [
      {
        meaning: '結果會隨條件改變而不同，不是固定的',
        note: '強調「要看情況」，沒有唯一答案',
        example: 'The price varies depending on the season. （價格隨季節而不同。）',
      },
      {
        meaning: '以某個因素為前提來判斷',
        note: '說話者把決定權交給一個外部條件',
        example: 'We might go hiking, depending on the weather. （我們可能去爬山，取決於天氣。）',
      },
    ],
    tip: '⚖️ Depending on 是天秤，哪邊的砝碼重，結果就往哪邊倒',
    compareWith: 'based on（更強調依據）、according to（更書面）',
  },
};
