## 📋 動詞與副詞片語網站：重構規格與任務清單

請依照以下具體的語言邏輯與範例對照，對目前的專案進行資料結構與自動動畫引擎的重構。**本網站主打「純動畫視覺呈現」，不包含使用者拖曳或答題等互動功能。**

---

### 0. 核心設計哲學（最重要，所有工作的根基）

**一個片語只有一個「腦中畫面」，所有衍生意思都是同一個畫面套在不同情境上。**

以 `up to` 為例，英語母語者的腦中只有一個核心畫面：「從低處一路往上延伸，直到碰到某條界線。」掌握這條「界線」的邏輯，5 個意思瞬間融會貫通：

1. **數字的界線 → 最多、高達**：刻度表從 0 往上跑，頂到那條線。Up to 50% off = 折扣力度封頂在 50%。
2. **時間的界線 → 直到…為止**：時間軸從過去走到某個時間點。Up to now = 時間走到「現在」這條線。
3. **能力的界線 → 夠格、勝任**：工作有一條合格標準線，你的能力要從下面往上爬。He is not up to the job = 能力沒碰到標準線。
4. **責任的界線 → 由你決定**：決定權降落到你身上（你的防守範圍內）。It's up to you = 球落到你這條線了。
5. **行動的界線 → 在忙什麼**：某人在水面下醞釀，等累積到水面線就浮上檯面。What are you up to? = 你在搞什麼？

**動畫的設計原則：**
- **動詞動畫**：獨立展示該動詞的「核心物理動作」。例如 Look = 眼睛射出一條視線。
- **介係詞動畫**：獨立展示該介係詞的「空間方向概念」。例如 into = 一個東西穿過表面進入容器內部。
- **片語動畫 = 動詞動畫 + 介係詞動畫的組合**：把動詞的動作套用在介係詞的方向上。Look + into = 視線穿進容器內部 → 調查、深挖。

**這意味著：**
- 同一個 `Look` 動畫可以跟不同介係詞組合（Look + up = 視線往上掃，Look + out = 視線射向外面）
- 同一個 `into` 動畫可以跟不同動詞組合（Look + into = 視線穿進去，Break + into = 打破後衝進去，Run + into = 跑著撞進去）
- 片語的不同語意共用同一個核心軌跡動畫，只換「被作用的物件」（sceneObject）

**思考方式：你是外國人，聽到這個詞時腦海中抽象的畫面是什麼？為什麼這個動詞加上這個介係詞會變成這個意思？**

---

### 1. 資料結構重構 (Data Schema Refactoring)

*   [ ] **多重語意平鋪化**：將片語屬性移入個別定義（Definition）層級。`grammar` 使用陣列格式，包含兩個維度的標籤：
    *   **及物性**：`'transitive'`（及物）或 `'intransitive'`（不及物）
    *   **分離性**（僅及物時）：`'separable'`（可分離）或 `'inseparable'`（不可分離）
    *   **範例對照：** 以 `take off` 為例：
        *   意思「脫衣服」→ `grammar: ['transitive', 'separable']`（Take it off）
        *   意思「起飛」→ `grammar: ['intransitive']`（The plane takes off）
    *   **note 只寫腦中畫面**：文法規則由標籤呈現，例句示範用法，note 不需要重複寫「代名詞放中間」「常用進行式」等文法說明。
*   [ ] **過濾非口語定義**：刪除字典般冷門、正式的解釋，只保留日常口語高頻使用的語意。
    *   **範例對照：** 以 `bring up` 為例。直接刪除法律上的「正式起訴」或生理上的「嘔吐」，只保留口語常用的「扶養長大」與聊天時的「突然提到某個話題」。
*   [ ] **簡單英文描述（Plain English）**：不是一個字的翻譯，而是用簡單英文「描述」這個意思（2-5 字），讓學習者慢慢習慣用英文表達英文。不可以直接重複片語本身。
    *   **範例對照：**
        *   `look into` -> **= to check or investigate**
        *   `look down on` -> **= to think someone is below you**
        *   `look up`（查） -> **= to find information about it**
        *   `look up`（起色） -> **= to start getting better**
        *   `run into` -> **= to meet someone by accident**
        *   `call off` -> **= to cancel something**
*   [ ] **在地口語中文翻譯**：中文翻譯揚棄「字典體」，改用最接地氣的台灣口語流行話。
    *   **範例對照：**
        *   `blow up` -> **「氣炸、發飆、理智線斷掉」**
        *   `freak out` -> **「嚇死、崩潰、發瘋」**
        *   `show up` -> **「現身、露面、出席」**
        *   `wear out` -> **「累癱、磨損」**
*   [ ] **例句必須日常化**：例句要用日常生活語境，不要用工程師/科技/創業等特定領域用語。要讓任何學英文的台灣人都能代入的情境。
    *   **範例對照：**
        *   ❌ `"We need to look into this bug as soon as possible."`
        *   ✅ `"I'll look into it and get back to you."`
        *   ❌ `"Things are finally looking up for our startup after months of struggle."`
        *   ✅ `"Things are finally looking up after a rough few months."`
*   [ ] **sceneObject 代表被作用的對象**：sceneObject 的 emoji 和 label 應該代表「被動詞片語作用的東西」，而非動作本身。
    *   **範例對照：**
        *   `look into` → 🔍「文件」（被調查的東西）✅ — 不是 👁️「眼睛」（那是動作）
        *   `look down on` → 🧑「被看扁的人」✅ — 不是 😤「生氣」（那是情緒）
*   [ ] **三字片語加 isWeldedBlock**：三字片語（如 look down on、look forward to、put up with）必須加上 `isWeldedBlock: true`，代表不可拆分。
*   [ ] **副詞片語屬性擴充**：為副詞片語加入 `isFixedOrder`（不可顛倒）與 `modificationType`（修飾整句或單一動作）的標籤。
    *   **範例對照：**
        *   `sooner or later`（遲早） -> 屬於「字序固定、修飾整句話」（絕對不能講成 `later or sooner`）。
        *   `to be honest`（老實說） -> 屬於「字序固定、修飾整句話」（通常放句首且後面會加逗號）。

---

### 2. 動態引擎與動畫邏輯 (Animation State Machine)

*   [ ] **核心動畫模組化（核心視覺線）**：實作「核心物理動態」的複用邏輯。**每個語意需要自己的視覺場景**，展示「為什麼動詞＋介係詞能聯想到這個意思」，而不是只換 emoji。
    *   **呈現方式：三格方程式** `[動詞動畫] + [介係詞動畫] = [動詞片語動畫]`
    *   **動詞片語動畫規則：**
        *   核心軌跡（眼睛方向、力量方向）在同一片語的不同語意間保持一致
        *   但每個語意有自己的場景背景，讓學習者理解「為什麼這個組合 = 這個意思」
    *   **範例對照（Look up 的三個語意）：**
        *   語意【查一下】📖：眼睛往上掃 + 書頁堆疊 → 掃到最上層找到答案 → 「查資料」
        *   語意【有起色】📈：眼睛往上看 + 折線圖觸底反彈 → 情況往上走 → 「改善」
        *   語意【去看看】🏠：眼睛往上掃 + 通訊錄名單 → 找到某個人 → 「去拜訪」
*   [ ] **三字片語與副詞片語方塊焊接**：三字片語與多字副詞片語必須被視為單一、不可拆分的巨型方塊。
    *   **範例對照：**
        *   三字片語 `look forward to` -> 必須牢牢焊接成單一方塊，受詞 `it` 只能排在最後面。
        *   多字副詞 `in no time` -> 必須焊接為單一方塊，在句子中移動時必須整塊一起移動。

---

### 3. 當前進度與已知問題 (Current Progress & Known Issues)

**已完成的檔案變更：**
- `src/components/PhraseCard.jsx` — 已改成 per-meaning 顯示 grammar badge + plainEnglish 標籤 + sceneObject emoji
- `src/components/PhrasalVerbPanel.jsx` — 動畫區改為三格方程式排版：`[動詞動畫] + [介係詞動畫] = [動詞片語動畫]`；已移除紅色 debug 標記
- `src/animations/CoreTrajectoryScene.jsx` — 已建立場景：`ScanPenetrateScene`（Look into）、`GazeDescendScene`（Look down on）、`ScanAscendScene`（Look up，含三個語意各自的場景）
- `src/animations/WeldedBlock.jsx` — 已建立焊接方塊元件
- `src/animations/index.jsx` — 已更新優先使用 CoreTrajectoryScene
- `src/data/phrasalVerbs.js` — **Look into / Look down on / Look up 完成完整重構（資料 + 動畫）**；Turn / Bring / Run 有部分資料但缺新欄位；其他動詞還是原始格式
- `src/data/adverbialPhrases.js` — 還是原始格式，尚未加入 isFixedOrder / modificationType
- `TodoList.md` — Look into ✅ / Look down on ✅ / Look up 待確認打勾

**已知問題：**
- 每個 coreMotion 都需要獨立場景，且多語意的片語每個語意要有自己的場景背景
- 副詞面板（AdverbialPanel）尚未更新 UI 來顯示 isFixedOrder / modificationType / 焊接方塊

**正確的工作流程：**
1. 每做一個動詞，同時做資料重構（7條規則全部）+ 動畫場景
2. 不要用腳本批量處理，逐一手動做，認真思考每個片語的口語中文、極簡英文、核心腦中畫面
3. 做完一個就在 TodoList.md 打勾，瀏覽器確認效果
4. 不要跳過、不要偷懶、有問題就問使用者