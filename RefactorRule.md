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

每個 meaning 需要的欄位：

| 欄位 | 說明 | 範例 |
|------|------|------|
| `meaning` | 台灣口語中文翻譯 | `"查一下、追一下"` |
| `plainEnglish` | 簡單英文描述（2-5 字） | `"to check or investigate"` |
| `grammar` | 單一字串，三種之一 | `'separable'` / `'inseparable'` / `'intransitive'` |
| `followedBy` | 後面接什麼文法形式（銜接面） | `'noun'` / `'noun / V-ing'` / 省略=不及物 |
| `sceneObject` | 被作用的對象 emoji + label | `{ emoji: "🔍", label: "文件" }` |
| `note` | 腦中畫面（為什麼這個組合 = 這個意思） | `"視線「穿進去」內部 → 追查根本原因"` |
| `example` | 日常生活例句 | `"I'll look into it and get back to you."` |

**已移除的欄位（不需要填）：** `type`、`particleRole`

**grammar 欄位規則：**
*   只填一個字串值，不用陣列：
    *   `'separable'` — 可分離（代名詞一定夾中間，名詞前後都行）
    *   `'inseparable'` — 不可分離（受詞只能放最後）
    *   `'intransitive'` — 不及物（不用接受詞）
*   同一片語不同意思可能不同。以 `take off` 為例：
    *   意思「脫衣服」→ `grammar: 'separable'`（take it off）
    *   意思「起飛」→ `grammar: 'intransitive'`（The plane takes off）
*   PhraseCard 會根據 grammar 自動產生一行用法提示：
    *   `✂️ 代名詞一定夾中間：take it off ／名詞前後都行`
    *   `🔒 不能拆：look into it`
    *   `（不用接受詞，直接說 take off）`

**followedBy 欄位規則（銜接面 — 解決「文法黑洞」）：**
*   告訴學習者：這個片語後面要接什麼形式的東西。
*   常見值：
    *   `'noun'` — 接名詞（最常見）。例：look after **my cat**
    *   `'V-ing'` — 接動名詞。例：end up **doing** it
    *   `'noun / V-ing'` — 兩種都行。例：look forward to **seeing** you / look forward to **the trip**
    *   `'to V'` — 接不定詞。例：turn out **to be** wrong
    *   `'noun / wh-clause'` — 接名詞或疑問子句。例：figure out **the answer** / figure out **how to do it**
    *   `'adj'` — 接形容詞。例：calm **down** → feel calm
*   **排序規則：更常見的形式寫前面。** 例如 `look into` 多數時候接名詞 → `'noun / V-ing'`；`look forward to` 更常接動名詞 → `'V-ing / noun'`。順序本身就是頻率暗示。
*   如果 grammar 是 `'intransitive'`（不及物），不填 followedBy（省略即可）。
*   **為什麼重要：** 這就是「鏡頭一」和「鏡頭二」的銜接面。如果學習者不知道 `look forward to` 後面接 V-ing，就會寫出 "I'm looking forward to fix the bug"（車禍）。記住起手式的同時，大腦要一起記住它的「接槽形狀」。
*   **範例對照：**
    *   `look into` → `followedBy: 'noun / V-ing'`（I'll look into **buying** a new laptop.）
    *   `look forward to` → `followedBy: 'V-ing / noun'`（⚠️ to 是介係詞不是不定詞，所以後面接 V-ing）
    *   `look up`（查） → `followedBy: 'noun'`（Look **the word** up.）
    *   `look out` → 不填（不及物，直接喊 Look out!）

**其他規則：**
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
*   [ ] **note 只寫腦中畫面**：文法規則由 UsageLine 自動產生，例句示範用法，note 不需要重複寫「代名詞放中間」「常用進行式」等文法說明。

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

### 4. 動畫實作規則（從 Look 系列 + Turn 系列歸納）

#### A. 動詞視覺元素一致性

**每個動詞對應一個固定的視覺物件，在該動詞的所有片語場景中保持一致。**

| 動詞 | 視覺物件 | 核心物理動作 |
|------|----------|-------------|
| Look | 眼睛 + 視線光束 | 視線射出，方向由介係詞決定 |
| Turn | 旋鈕（dial） | 旋鈕旋轉，方向/幅度由介係詞決定 |

*   同一動詞的所有 Xxxscene 都以這個視覺物件為左側出發點。
*   **不要** 為了「感覺更直觀」就換掉動詞元素——一致性才是學習價值所在。

#### B. CoreMotion 命名規則

格式：`動詞縮寫-粒子語意`

| 範例 | 說明 |
|------|------|
| `scan-penetrate` | Look（掃描）+ into（穿入）|
| `gaze-descend` | Look（凝視）+ down on（往下） |
| `spin-detach` | Turn（旋轉）+ off（脫離接觸）|
| `spin-connect` | Turn（旋轉）+ on（接上）|
| `spin-reverse` | Turn（旋轉）+ around（逆轉方向）|

*   粒子語意用英文描述**空間動作**，不直接用介係詞本身（因為同一介係詞可能對應多個不同 coreMotion）。
*   新增場景後**必須立刻**在 `SCENE_MAP` 中登錄，否則瀏覽器只會看到 FallbackScene 而無法除錯。

#### C. Scene 函式結構模式

每個 `SpinXxxScene`（或 `GazeXxxScene`）遵循同一結構：

```
1. 動詞元素（左側）  ── 旋鈕 / 眼睛
2. 軌跡連接（中段）  ── 連接線 / 光束 / 弧線
3. 結果物件（右側）  ── 由 obj.emoji / obj.label 決定
4. 意思文字（底部）  ── {meaning}
```

多意思分支用 `obj.label` 判斷（**不要用 `obj.emoji`**，emoji 可能被改掉）：

```jsx
const isReject = obj.label === '提議';  // ✅ 正確
const isReject = obj.emoji === '🙅';   // ❌ 脆弱，emoji 一換就壞
```

#### D. 對稱設計原則

**意思相反的片語，動畫應設計成彼此的鏡像。** 這讓學習者能感受到語言本身的對稱邏輯。

*   **Turn off vs Turn on**：旋鈕方向相反（ON→OFF 逆時針 / OFF→ON 順時針）、連接線一縮一長、物件一暗一亮。
*   **Turn down vs Turn up**：旋鈕從 H→L（逆時針）vs L→H（順時針），音量/提議視覺一降一升。
*   設計新片語時，先想「這個片語有沒有反義詞？」——如果有，從反義詞的動畫鏡像出發往往最快。

#### E. SVG 技術規則

1.  **Gradient ID 必須全域唯一**：每個 Scene 函式自己的 `<radialGradient>` 必須用不同 `id`。
    *   命名規則：`dialBG`（基礎）、`dialBGUp`、`dialBGDetach`、`dialBGConnect`... 依此類推。
    *   ID 衝突會導致所有使用相同 ID 的場景共用同一個漸層，顏色全部跑掉。

2.  **SVG 路徑繪製動畫**：用 Framer Motion 的 `pathLength` 屬性做「路徑逐漸畫出」效果。
    ```jsx
    <motion.path
      d="M 70 38 L 162 38 A 27 27 0 0 1 162 92 L 70 92"
      animate={{ pathLength: [0, 0, 1, 1, 0] }}
      transition={{ duration: 5, repeat: Infinity, times: [...] }}
    />
    ```
    *   不需要手動計算 `strokeDashoffset`，Framer Motion 內建支援。
    *   `pathLength` 值範圍 0～1，0 = 未畫，1 = 全部畫完。

3.  **動畫時間軸（五段式）**：所有 `times` 陣列遵循同一節奏：
    ```
    [0,    0.08,  0.44,  0.76,  0.94]
     靜止   開始   到位   維持   還原
    ```
    *   動詞元素（旋鈕）與軌跡連接共用同一時間軸基準，確保視覺同步。

---

### 3. 當前進度與已知問題 (Current Progress & Known Issues)

**已完成的檔案變更：**
- `src/components/PhraseCard.jsx` — 簡化為：標題 + 每個意思（meaning / plainEnglish / note / UsageLine 用法提示 / example）。已移除推理公式、語法標籤、語法展開區。
- `src/components/PhrasalVerbPanel.jsx` — 動畫區為三格方程式排版：`[動詞動畫] + [介係詞動畫] = [動詞片語動畫]`
- `src/animations/CoreTrajectoryScene.jsx` — 已建立場景：`ScanPenetrateScene`（Look into）、`GazeDescendScene`（Look down on）、`ScanAscendScene`（Look up，含三個語意各自的場景）
- `src/animations/WeldedBlock.jsx` — 已建立焊接方塊元件
- `src/animations/index.jsx` — 已更新優先使用 CoreTrajectoryScene
- `src/data/phrasalVerbs.js` — **Look 系列完成完整重構**；其他動詞還是原始格式，重構時只需填：meaning / plainEnglish / grammar / sceneObject / note / example

**已知問題：**
- 每個 coreMotion 都需要獨立場景，且多語意的片語每個語意要有自己的場景背景
- 副詞面板（AdverbialPanel）尚未更新 UI 來顯示 isFixedOrder / modificationType / 焊接方塊

**正確的工作流程：**
1. 每做一個動詞，同時做資料重構 + 動畫場景
2. 不要用腳本批量處理，逐一手動做，認真思考每個片語的口語中文、極簡英文、核心腦中畫面
3. 做完一個就在 TodoList.md 打勾，瀏覽器確認效果
4. 不要跳過、不要偷懶、有問題就問使用者
