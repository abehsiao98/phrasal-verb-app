export const VERBS = ['Look', 'Turn', 'Bring', 'Run', 'Get', 'Break', 'Go', 'Set'];

export const VERB_PARTICLES = {
  Look:  ['into', 'down', 'up', 'out', 'over', 'through', 'back', 'after', 'for'],
  Turn:  ['into', 'down', 'up', 'out', 'over', 'off', 'on', 'around', 'back'],
  Bring: ['into', 'down', 'up', 'out', 'back', 'about', 'forward', 'together', 'in'],
  Run:   ['into', 'down', 'up', 'out', 'over', 'through', 'away', 'across', 'off'],
  Get:   ['into', 'down', 'up', 'out', 'over', 'through', 'along', 'back', 'away', 'on', 'off', 'by'],
  Break: ['into', 'down', 'up', 'out', 'through', 'off', 'away', 'even'],
  Go:    ['into', 'down', 'up', 'out', 'over', 'through', 'on', 'back', 'off', 'ahead', 'for'],
  Set:   ['into', 'down', 'up', 'out', 'off', 'back', 'aside', 'about'],
};

export const phrasalVerbData = {
  Look: {
    into: {
      title: "Look into",
      spatial: "把頭湊過去，探進一個箱子或黑乎乎的洞穴「裡面」看。",
      mental: "遇到 Bug 或系統出問題，不能只看表面，大腦要把視線「穿透進去內部」看個究竟（調查、研究）。",
      example: "We need to look into this bug as soon as possible."
    },
    down: {
      title: "Look down on",
      spatial: "站在高處，收起下巴，眼睛「往下」看著地上的人。",
      mental: "在心態上把自己放得很高，把別人看得低低的、小小的（瞧不起、輕視）。",
      example: "You shouldn't look down on anyone just because of their job."
    },
    up: {
      title: "Look up",
      spatial: "抬頭「往上看」尋找掛在高處的公告板或厚重字典。",
      mental: "在密密麻麻的資料中抬頭搜尋目標（查資料）；或者低迷的行情跌到谷底後，箭頭開始「往上仰」（事情好轉）。",
      example: "If you don't know the word, look it up in the dictionary."
    },
    out: {
      title: "Look out",
      spatial: "把頭伸出窗戶「外面」觀察外面的風吹草動。",
      mental: "你原本待在屋子內不知道外面有危險，突然有人大喊，你趕快注意「外面」的狀況（當心、小心）。",
      example: "Look out! There is a car coming!"
    },
    over: {
      title: "Look over",
      spatial: "視線從文件的一頭「越過去」快速掃到另一頭，沒有深入停留。",
      mental: "快速翻過一份文件粗略過目（快速審閱、略讀）。",
      example: "Can you look over my pull request before I merge it?"
    },
    through: {
      title: "Look through",
      spatial: "視線穿「透」過一疊文件，一頁一頁往後翻，把整疊全部看完。",
      mental: "把整份文件從頭到尾仔細翻閱（仔細查看）；或者把謊言看穿（識破）。",
      example: "Please look through the logs and find where the error occurred."
    },
    back: {
      title: "Look back",
      spatial: "往前走了一段路之後，脖子一轉，視線往「後」看剛才走過的路。",
      mental: "時間走到現在，把思緒往「後」拉回去，回顧過去的事（回顧）。",
      example: "Looking back, I realize we should have written more tests from the start."
    },
    after: {
      title: "Look after",
      spatial: "跟在一個人或東西的「後面」，眼睛一直盯著看，確保他沒事。",
      mental: "像保母或警衛一樣，視線一直追著對方，確保平安（照顧）。",
      example: "Can you look after the server while I'm on vacation next week?"
    },
    for: {
      title: "Look for",
      spatial: "眼睛掃遍整個空間，帶著明確目的朝著目標的方向搜尋。",
      mental: "帶著目標，視線不斷投射出去搜尋（尋找）。",
      example: "We are looking for a senior backend engineer to join the team."
    }
  },
  Turn: {
    into: {
      title: "Turn into",
      spatial: "開車開到一半，方向盤一轉，開「進去」了另一條完全不同的車道。",
      mental: "原本是 A 狀態，經過一個轉折和改變，整個人或物直接進到了 B 的全新領域（變成、轉化為）。",
      example: "The small workshop turned into a global manufacturer."
    },
    down: {
      title: "Turn down",
      spatial: "手指捏著收音機、熱水器或瓦斯爐的旋鈕，「向下」旋轉。",
      mental: "別人帶著高度熱情來提議，你不想接受，於是把那個熱度的開關「往下扭」，讓氣氛冷卻（拒絕）。",
      example: "They turned down our proposal because the cost was too high."
    },
    up: {
      title: "Turn up",
      spatial: "把開關「向上」旋轉放大，或是沉在底下的東西浮上水面。",
      mental: "把音量開大；或者是東西/人原本失蹤了，突然像潛水艇一樣「轉上來」浮出水面（突然出現、現身）。",
      example: "Don't worry, your missing keys will turn up sooner or later."
    },
    out: {
      title: "Turn out",
      spatial: "工廠的機器齒輪轉動，把製作好的成品推到工廠「外面」亮相。",
      mental: "一件事情經歷了各種轉變與過程，最後攤在陽光下、呈現在眼前的最終結局（結果竟然是...）。",
      example: "The weather was bad, but the event turned out to be a huge success."
    },
    over: {
      title: "Turn over",
      spatial: "手壓著一個東西，把它從這一面翻「越過」去，底部朝上。",
      mental: "把職位、任務或一件事從一個人手上「翻轉」移交給另一人（移交、交接）。",
      example: "The outgoing CTO turned over all responsibilities to the new team lead."
    },
    off: {
      title: "Turn off",
      spatial: "手指往「外面」一推，讓機器、燈光的電路切斷，停止運作。",
      mental: "把正在運作的機器或系統的電源「斷掉」（關閉）；也指讓人感到厭惡（令人倒胃口）。",
      example: "Don't forget to turn off the dev server before you leave for the weekend."
    },
    on: {
      title: "Turn on",
      spatial: "手指往「裡面」一按，讓電流接通，機器開始運轉。",
      mental: "把靜止的機器或系統的電源「接上」（開啟）；突然轉變態度（攻擊）。",
      example: "Turn on the VPN before you access the production database."
    },
    around: {
      title: "Turn around",
      spatial: "原本往一個方向走，整個身體「轉一圈」，現在朝著完全相反的方向走。",
      mental: "本來業績下滑，整個局面逆轉好轉（反轉局面）；或把方向整個調頭（調頭）。",
      example: "The new product manager helped turn the failing project completely around."
    },
    back: {
      title: "Turn back",
      spatial: "往前走了一半，發現路被封了，只好把腳步「轉回去」原點。",
      mental: "放棄繼續前進，把方向「轉回去」起點（折返）；讓時間倒轉（倒回）。",
      example: "We had to turn back to the old architecture after the migration failed badly."
    }
  },
  Bring: {
    into: {
      title: "Bring into",
      spatial: "雙手抱著一件原本放在外面的重物，走「進來」房間。",
      mental: "把一個原本不存在的新觀念、新演算法或新系統，引進、帶入現有的框架或團隊圈子裡。",
      example: "We need to bring new technology into our workflow."
    },
    down: {
      title: "Bring down",
      spatial: "把架子上高處的東西硬拉「下來」，或者一拳把站著的人揍到倒地。",
      mental: "把原本高昂的成本、數字「往下拉」（降低）；或者是把高高在上的人或很好的心情狠狠拉垮（擊垮、令人沮喪）。",
      example: "The company is trying to bring down production costs."
    },
    up: {
      title: "Bring up",
      spatial: "雙手捧著東西往上拿、往上提，高過原本的高度。",
      mental: "養小孩時，小孩本來很矮，你照顧他一路往上帶高（撫養）；開會時，把一個沉在桌底的話題撈起來拿到桌面上（主動提及）。",
      example: "Please don't bring up that issue during the meeting."
    },
    out: {
      title: "Bring out",
      spatial: "把藏在口袋、倉庫或後車廂裡的東西，拿到「外面」給大家看。",
      mental: "研發完畢後，把產品拿出來上市（推出產品）；或者是把某人內心深處、原本看不見的優點與潛能引導出來（激發潛能）。",
      example: "The coach knows how to bring out the best in his players."
    },
    back: {
      title: "Bring back",
      spatial: "雙手從外面把某個東西「帶回來」，回到原本的起點。",
      mental: "把已消失的功能或記憶「帶回來」恢復（恢復）；某個場景喚起往事（喚起回憶）。",
      example: "This old code style brings back memories of my very first internship."
    },
    about: {
      title: "Bring about",
      spatial: "一個動作在周圍「繞了一圈」，最終把一個結果從無到有「帶」出來。",
      mental: "主動促使某個變化或結果發生（引發、導致）。",
      example: "The new deployment strategy brought about a huge improvement in uptime."
    },
    forward: {
      title: "Bring forward",
      spatial: "把原本排在後面的東西，拿到「前面」來擺放。",
      mental: "把計畫中排在未來的事情往「前」提早（提前）；把一個想法拿到大家面前討論（提出）。",
      example: "The client asked us to bring forward the launch date by two weeks."
    },
    together: {
      title: "Bring together",
      spatial: "雙手把分散在各處的東西全部往中間攏，聚合在一起。",
      mental: "把不同部門、不同意見或不同資料整合成一個（整合、聚集）。",
      example: "The hackathon brought together engineers from five different countries."
    },
    in: {
      title: "Bring in",
      spatial: "把外面的東西，抱著走進室「內」帶進來。",
      mental: "引入外部的人才、資金或新制度（引入）；賺進收入（帶入收益）。",
      example: "We need to bring in a security consultant to audit the entire codebase."
    }
  },
  Run: {
    into: {
      title: "Run into",
      spatial: "往前快跑，結果速度太快剎車不及，一頭撞「進去」某個東西裡面。",
      mental: "在路上走著，一轉角直接撞進熟人懷裡（巧遇）；或者是專案跑得很順，突然一頭撞進一個大錯誤裡（遭遇困難/Bug）。",
      example: "I ran into a serious system error while deploying the container."
    },
    down: {
      title: "Run down",
      spatial: "發條時鐘或發電機的齒輪越跑越慢，指針一路「往下墜」到停擺。",
      mental: "工作過度，身體這台機器運作效率一路下滑（精疲力竭）；或者是房子老了沒人修，狀態一路衰敗（破舊荒廢）。",
      example: "The battery is running down, I need to find a charger."
    },
    up: {
      title: "Run up",
      spatial: "兩條腿往上瘋狂奔跑，高度迅速攀升。",
      mental: "信用卡一直刷、帳單一直來，債務或費用像計費表一樣，數字往上狂飆累積（迅速累積費用）。",
      example: "He ran up a huge bill staying at that luxury hotel."
    },
    out: {
      title: "Run out (of)",
      spatial: "原本待在裝滿物資的圈圈裡，一邊消耗一邊跑，最後跑到了圈圈的「外面」。",
      mental: "雙腳跑到了邊界外面，回頭一看圈圈內空空如也，什麼都不剩了（用光、耗盡）。",
      example: "We are running out of time, we must make a decision now."
    },
    over: {
      title: "Run over",
      spatial: "一台車往前開，「越過」了路上的時間或計畫邊界。",
      mental: "時間、預算「跑過界」超出限制（超出）；快速「跑過」一遍複習（快速過）。",
      example: "The meeting ran over by thirty minutes because of too many questions."
    },
    through: {
      title: "Run through",
      spatial: "雙腳不停往前跑，「穿透」整個清單從頭跑到尾。",
      mental: "快速把步驟或程式碼「跑過一遍」（快速審查）；資源被一路花穿用完（花光）。",
      example: "Let me run through the deployment checklist one more time before we push."
    },
    away: {
      title: "Run away",
      spatial: "雙腳使勁往「後方」跑，離開某個令你恐懼的地方。",
      mental: "遇到困難或責任時，選擇「跑走」逃避（逃跑、逃避）。",
      example: "Don't run away from hard bugs — they will only get worse if ignored."
    },
    across: {
      title: "Run across",
      spatial: "往前走著，突然「橫越過去」遇到一個意外的東西。",
      mental: "在搜尋或工作中，意外「穿越」碰到有趣的東西（偶然發現）。",
      example: "I ran across this clever algorithm while reading an open-source repository."
    },
    off: {
      title: "Run off",
      spatial: "腳步往「外面」的方向快速跑離，或機器把資料「跑出去」。",
      mental: "突然跑掉逃跑（跑走）；機器把資料輸出印出（輸出）。",
      example: "Run off a copy of the report and bring it to the client meeting."
    }
  },
  Get: {
    into: {
      title: "Get into",
      spatial: "用肩膀頂開一扇緊閉的門，整個身體擠進狹窄的縫隙裡，勉強鑽進去。",
      mental: "從外圍進入一個新的領域、圈子或麻煩裡面（開始涉足、陷入某事）。",
      example: "She got into machine learning after watching an online course."
    },
    down: {
      title: "Get down (to)",
      spatial: "原本站著，彎腰把腰線壓低，膝蓋彎曲，整個人「俯身向下」準備認真工作。",
      mental: "把所有藉口和廢話全部拋掉，身體壓低「正面迎擊」任務（認真開始做）；心情被某事壓得低沉（令人沮喪）。",
      example: "Let's get down to work and stop scrolling social media."
    },
    up: {
      title: "Get up",
      spatial: "從睡著後的最低點——躺在床上——把全身的重量用手撐起來，站到最高點。",
      mental: "每天與鬧鐘對抗，把自己從被窩的溫柔中「硬撐起來」（起床）；在情緒跌入谷底後重新站起（振作）。",
      example: "I have to get up at six every morning to catch the 7 o'clock standup."
    },
    out: {
      title: "Get out (of)",
      spatial: "本來被困在一個密閉的箱子裡，找到縫隙，用力推開，跑到「外面」了。",
      mental: "從一個困境、壞合約或麻煩情況裡脫身（逃脫、擺脫）；消息從密閉空間不小心「洩漏出去」。",
      example: "We need to get out of this vendor lock-in before the contract renews."
    },
    over: {
      title: "Get over",
      spatial: "遇到一道矮牆擋在前面，一個跨步「越過去」，繼續往前。",
      mental: "把悲傷、失敗、疾病「越過去」，從另一側走出來（克服、恢復）。",
      example: "It took the team a whole week to get over the production incident."
    },
    through: {
      title: "Get through",
      spatial: "前方有一條很長、很窄的通道，一步一步「穿透」走完，終於出來了。",
      mental: "把困難的事情或困難的時期「一路穿過去」完成（撐過）；電話終於接通（聯繫上）。",
      example: "I couldn't get through to the API — it kept timing out after 30 seconds."
    },
    along: {
      title: "Get along",
      spatial: "兩個人並排走著，沿著同一條路「一起走下去」。",
      mental: "和別人「並肩走下去」，相處得好（相處融洽）；事情照著計畫往下走（進行）。",
      example: "How are you getting along with the new tech stack so far?"
    },
    back: {
      title: "Get back",
      spatial: "離開原本的地方，後來「跑回來」回到起點。",
      mental: "從某處回來（回來）；把之前欠你的東西討回來（取回、報復）。",
      example: "I'll get back to you with the test results by end of day, I promise."
    },
    away: {
      title: "Get away",
      spatial: "原本被困在某個地方，費力往「外」跑，終於脫離了範圍。",
      mental: "從繁忙的工作或困境中脫身（逃脫、離開）。",
      example: "I need to get away from the computer and take a proper break this weekend."
    },
    on: {
      title: "Get on",
      spatial: "腳踩上去，登上一個比地面高的平台或交通工具。",
      mental: "登上車或船（上去）；事情持續往前走（進展）；人際關係和睦（相處）。",
      example: "How is the new developer getting on with the onboarding process?"
    },
    off: {
      title: "Get off",
      spatial: "從高處往「下」移動，踏到比較低的地面上。",
      mental: "下車（下去）；逃脫懲罰（脫身）；「踏出去」開始（開始）。",
      example: "Get off to a good start by reading all the documentation first."
    },
    by: {
      title: "Get by",
      spatial: "一條窄縫，勉強擠著「過去」，只差一點點就過不去了。",
      mental: "資源不足但還是勉強「擠過去」維持下去（勉強度過）。",
      example: "Our team got by with just two developers during the crunch period."
    }
  },
  Break: {
    into: {
      title: "Break into",
      spatial: "小偷撬開門鎖，「打破」障礙然後強行「進入」屋子裡面。",
      mental: "打破一個市場或行業的入場壁壘，強行進入（打入市場）；系統遭到入侵（駭入）。",
      example: "It is very hard to break into the AI chip market right now."
    },
    down: {
      title: "Break down",
      spatial: "一台老舊的機器，齒輪卡死，發出異響，最終轟然崩潰解體。",
      mental: "設備或系統「垮掉」無法運作（故障）；把複雜問題拆解成小塊（分解分析）；人在壓力下情緒崩潰（崩潰）。",
      example: "The build pipeline broke down right before the product launch."
    },
    up: {
      title: "Break up",
      spatial: "把一大塊岩石用鐵錘敲中，它沿著裂縫往兩邊分裂、碎裂開來。",
      mental: "兩個人或組織「裂開」各走各的（分手、解散）；把大型任務敲碎拆分成小部分（拆分）。",
      example: "The team lead decided to break up the monolith into microservices."
    },
    out: {
      title: "Break out",
      spatial: "被關在牢裡的囚犯，撞開牆壁，衝出去外面，自由了。",
      mental: "戰火、疫情、火警突然「爆發出來」（爆發）；某人衝破限制嶄露頭角（突圍）。",
      example: "A critical security vulnerability broke out over the weekend."
    },
    through: {
      title: "Break through",
      spatial: "面前有一道厚厚的牆壁，用全力衝撞，最終「穿透過去」到了另一側。",
      mental: "打破長期的瓶頸或障礙，進入全新的境界（突破）。",
      example: "The research team finally broke through and achieved a new benchmark score."
    },
    off: {
      title: "Break off",
      spatial: "原本連在一起的東西，被一個力量從連接點「切斷、折掉」分離。",
      mental: "談判、關係、對話突然「斷掉」（中斷）；一小塊東西從大物體上被折斷（折斷）。",
      example: "The company broke off negotiations with the vendor at the very last minute."
    },
    away: {
      title: "Break away",
      spatial: "原本被某個東西抓住，用力往「外」一扯，掙脫開來。",
      mental: "從一個群體、舊習慣或束縛裡「脫離出來」（脫離、掙脫）。",
      example: "The startup broke away from the old enterprise model and went fully agile."
    },
    even: {
      title: "Break even",
      spatial: "天平的兩端完全平衡，不傾向任何一邊，恰好相等。",
      mental: "投入的成本和賺回來的收益「恰好打平」，不賺也不虧（損益兩平）。",
      example: "The product finally broke even after twelve months on the market."
    }
  },
  Go: {
    into: {
      title: "Go into",
      spatial: "人走著走著跨過一條線，整個人進入了一個更深、更內部的空間裡面。",
      mental: "把話題「走進去」深處仔細說明（深入探討）；進入某個職業或狀態（從事、進入）。",
      example: "I won't go into the technical debt right now, let's ship first."
    },
    down: {
      title: "Go down",
      spatial: "電梯指針從頂樓一格格往下降，直到地下室停止。",
      mental: "網站、伺服器、服務「掛掉」停止運作（當機）；價格、溫度、品質往下掉（下降）。",
      example: "The entire production environment went down at 3 AM on Sunday."
    },
    up: {
      title: "Go up",
      spatial: "熱氣球點火，繩索一鬆，一路往上飄，高度不斷上升。",
      mental: "價格、流量、評分一路往上竄（上漲、增加）；建築物被蓋起來愈來愈高（建起）。",
      example: "Cloud costs went up by 40% after we launched the new feature."
    },
    out: {
      title: "Go out",
      spatial: "蠟燭的火焰在夜風中左搖右晃，漸漸縮小，最後徹底熄滅。",
      mental: "光、電力熄滅（熄滅）；人走到外面（外出）；廣播、通知「播送出去」（播出）。",
      example: "The office lights went out during the storm and we lost all unsaved work."
    },
    over: {
      title: "Go over",
      spatial: "視線「越過」整個區域，從頭到尾掃過一遍。",
      mental: "把一份文件或計畫「越過一遍」仔細審閱（複習、審閱）；數字超出了界線（超過）。",
      example: "Let's go over the sprint review before the client demo starts."
    },
    through: {
      title: "Go through",
      spatial: "一步一步「穿越」一個漫長的隧道，從入口走到出口。",
      mental: "把困難的時期「穿過去」熬過來（經歷）；仔細把文件「從頭穿到尾」審查（仔細審查）。",
      example: "I went through the entire codebase looking for the memory leak."
    },
    on: {
      title: "Go on",
      spatial: "腳步沒有停下來，繼續往「前」走。",
      mental: "事情繼續進行沒有停（繼續）；某件事正在「進行中」（發生）。",
      example: "The deployment went on for three hours without any issues at all."
    },
    back: {
      title: "Go back",
      spatial: "原本往前走，現在調頭往「後」走，回到原來的地方。",
      mental: "回到原本的做法、地方或時間點（回去、追溯）。",
      example: "We had to go back to the drawing board after the whole pivot failed."
    },
    off: {
      title: "Go off",
      spatial: "一個原本靜止的東西，突然往「外面」爆發出聲音或能量。",
      mental: "鬧鐘響了（響）；炸彈爆炸（爆炸）；食物壞掉（壞掉）。",
      example: "The production alarm went off at 3 AM because of a false positive alert."
    },
    ahead: {
      title: "Go ahead",
      spatial: "腳步往「前方」踏出去，不猶豫地繼續向前。",
      mental: "得到許可，放心往前進行（繼續、去吧）。",
      example: "The client gave us the green light — go ahead and deploy to production."
    },
    for: {
      title: "Go for",
      spatial: "腳步和眼神同時對準「前方」的目標衝過去。",
      mental: "全力去爭取某個目標（追求）；選擇某個東西（選擇）。",
      example: "We decided to go for a microservices architecture instead of a monolith."
    }
  },
  Set: {
    into: {
      title: "Set in",
      spatial: "液態的水泥被澆進磚縫裡，慢慢冷卻變硬，固定成一個無法輕易改變的狀態。",
      mental: "某種狀態（壞天氣、恐慌、冬天）緩緩鑲嵌進來，開始持續主導局面（開始並蔓延）。",
      example: "Panic set in when the team realized they had deployed to production by mistake."
    },
    down: {
      title: "Set down",
      spatial: "雙手捧著一個重物，找到穩固的桌面，輕輕地把它「放下來」停在上面。",
      mental: "把規則、標準、決定從腦子裡「落地」寫成文字（制定規定、記錄下來）。",
      example: "The CTO set down the coding standards in a shared Notion document."
    },
    up: {
      title: "Set up",
      spatial: "把所有零件從箱子裡拿出來，一個個組合安裝，最後「架設好」整套系統。",
      mental: "從零開始把環境、系統、公司搭建起來（建立、架設）；陷害某人（設局）。",
      example: "It took the DevOps team a week to set up the new Kubernetes cluster."
    },
    out: {
      title: "Set out",
      spatial: "探險家在地圖上畫好路線，背上行囊，踏出家門第一步，正式「出發」。",
      mental: "出發去執行一個計畫或旅程（啟程、開始）；在一開始就把目標清楚地攤開來說明（闡明目的）。",
      example: "The startup set out to solve the problem of food waste in cities."
    },
    off: {
      title: "Set off",
      spatial: "腳步踏「出去」，正式離開起點；或彈簧被壓縮後「向外彈出」觸發機制。",
      mental: "出發（啟程）；觸發警報或連鎖反應（觸發）；引爆某人的情緒（引爆）。",
      example: "The new deploy accidentally set off the production alarm system at midnight."
    },
    back: {
      title: "Set back",
      spatial: "原本往前走的進度被推「向後」，退回了幾步。",
      mental: "把進度、計畫往後推延（延遲）；讓某人退步或蒙受損失（使後退）。",
      example: "The critical bug set us back by two weeks on the release schedule."
    },
    aside: {
      title: "Set aside",
      spatial: "把某個東西從主要堆裡拿出來，「放到旁邊」留著。",
      mental: "把一件事、一筆錢或爭議「放到一旁」留待之後處理（擱置、留出）。",
      example: "Let's set aside the refactoring task and focus on the bug fix first."
    },
    about: {
      title: "Set about",
      spatial: "轉動身體「對準」目標，然後開始動工。",
      mental: "不再拖延，直接「面對著」任務開始著手（開始著手）。",
      example: "After the planning session, the team set about implementing the new features."
    }
  }
};
