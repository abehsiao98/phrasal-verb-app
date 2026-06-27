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

### 4. 動畫實作規則

#### A. 動詞視覺元素一致性

**每個動詞對應一個固定的視覺物件，在該動詞的所有片語場景中保持一致。**

| 動詞 | 視覺物件 | 核心物理動作 |
|------|----------|-------------|
| Look | 眼睛 + 視線光束 | 視線射出，方向由介係詞決定 |
| Turn | 旋鈕（dial） | 旋鈕旋轉，方向/幅度由介係詞決定 |
| Get / Break / Go / Run / Bring 等 | 人物（40×54 SVG）+ 場景環境 | 人物在空間中移動，方向由介係詞決定 |

*   Look/Turn 系列：以固定視覺物件（眼/旋鈕）為出發點，搭配介係詞方向。
*   Get/Break/Go 等動詞：以場景式動畫為主——人物在環境中按照「動詞動作＋介係詞方向」移動。
*   **不要** 為了「感覺更直觀」就換掉動詞元素——一致性才是學習價值所在。

#### B. CoreMotion 命名規則

格式：`動詞縮寫-粒子語意`

| 範例 | 說明 |
|------|------|
| `scan-penetrate` | Look（掃描）+ into（穿入）|
| `gaze-descend` | Look（凝視）+ down on（往下） |
| `spin-detach` | Turn（旋轉）+ off（脫離接觸）|
| `break-burst` | Break（打破）+ out（衝出來）|
| `go-descend` | Go（移動）+ down（往下）|
| `get-enter` | Get（進入）+ into（進去）|

*   粒子語意用英文描述**空間動作**，不直接用介係詞本身（因為同一介係詞可能對應多個不同 coreMotion）。
*   新增場景後**必須立刻**在 `SCENE_MAP` 中登錄，否則瀏覽器只會看到 FallbackScene 而無法除錯。

#### C. Scene 函式結構模式

Look/Turn 系列（固定元素型）：
```
1. 動詞元素（左側）  ── 旋鈕 / 眼睛
2. 軌跡連接（中段）  ── 連接線 / 光束 / 弧線
3. 結果物件（右側）  ── 由 obj.emoji / obj.label 決定
4. 意思文字（底部）  ── {meaning}
```

Get/Break/Go 等（場景式）：
```
1. 初始狀態（intact）  ── 展示事物原本的樣子
2. 動詞動作（VERB）    ── 衝擊、移動、力量爆發
3. 介係詞方向（PARTICLE） ── 往上/下/外/穿透/回去/越過
4. 結果狀態            ── 自然產生的意思
```

多意思分支用 `obj.label` 判斷（**不要用 `obj.emoji`**，emoji 可能被改掉）：

```jsx
const isReject = obj.label === '提議';  // ✅ 正確
const isReject = obj.emoji === '🙅';   // ❌ 脆弱，emoji 一換就壞
```

#### D. 對稱設計原則

**意思相反的片語，動畫應設計成彼此的鏡像。**

*   **Turn off vs Turn on**：旋鈕方向相反、連接線一縮一長、物件一暗一亮。
*   **Go up vs Go down**：折線一個從左下往右上、一個從左上往右下。
*   **Break up vs Break down**：up = 碎片往上彈飛；down = 東西往下垮塌。
*   設計新片語時，先想「這個片語有沒有反義詞？」——從反義詞的動畫鏡像出發往往最快。

#### E. SVG 技術規則

1.  **Gradient ID 必須全域唯一**：每個 Scene 函式自己的 `<radialGradient>` 必須用不同 `id`。

2.  **SVG 路徑繪製動畫**：用 Framer Motion 的 `pathLength` 屬性做「路徑逐漸畫出」效果。
    ```jsx
    <motion.path
      animate={{ pathLength: [0, 0, 1, 1, 0] }}
      transition={{ duration: 5, repeat: Infinity, times: [...] }}
    />
    ```

3.  **動畫時間軸（六段式，2024 確立標準）**：
    ```
    [0,    0.08,  0.34,  0.42,  0.60,  0.76,  0.94]
     靜置   醞釀   動作   粒子   結果   維持   重置
    ```
    - `0 → 0.08`：靜置，展示初始狀態
    - `0.08 → 0.34`：前置動作，醞釀、移動中
    - `0.34 → 0.42`：動詞動作（VERB）：衝擊/爆炸/打破/抵達
    - `0.42 → 0.60`：介係詞方向（PARTICLE）：碎片飛、人衝出、往上升
    - `0.60 → 0.76`：結果維持
    - `0.76 → 0.94`：淡出重置

---

#### F. 空間邏輯三段式（最重要，這次 session 確立）

**動畫的核心任務不是「呈現這個片語的意思」，而是「讓人看懂為什麼動詞＋介係詞會產生這個意思」。**

每個場景必須讓學習者看到：

```
① VERB 的物理動作   → Break = 打裂衝擊 / Go = 自己移動 / Get = 到達
② PARTICLE 的空間方向 → UP = 往上彈飛 / DOWN = 往下垮 / OUT = 往外衝出
③ 結果自然成立      → ① + ② 合起來就是這個意思
```

**空間邏輯對照表（已建立場景的規律）：**

| 介係詞 | 空間邏輯 | 動畫視覺 |
|--------|----------|----------|
| UP | 往上彈飛、往上長、往上升 | 碎片/火焰/折線往上弧飛 |
| DOWN | 往下垮、往下落、往下降 | 螢幕傾斜下掉、折線往右下走 |
| OUT | 往外衝出、往外散 | 人衝出門、火焰往外竄、煙往外散 |
| INTO | 打破後進入、穿進去 | 人穿越障礙衝進去 |
| THROUGH | 從頭穿透到尾 | 人穿越暗區、掃描線逐行掃過 |
| OVER | 越過、掠過、超過 | 掃描線從頭到尾、數字超過界線 |
| BACK | 往後走、縮回去、回到原點 | 人轉身走回、指針往左移動 |
| OFF | 脫離、爆出、離開 | 鬧鐘爆響、食物變色、火焰熄滅 |

**禁止只呈現結果**：不能只 show 一個東西壞掉/消失/移動，要讓人在動畫中同時感受到動詞的動作 + 介係詞的方向。

---

#### G. 人物 SVG 標準規格

所有場景的人物必須使用統一規格：

```jsx
<svg width="40" height="54" viewBox="0 0 40 54">
  {/* 頭部 */}
  <circle cx="20" cy="7" r="7" fill="#FDBCB4" stroke="#E59866" strokeWidth="1.2"/>
  {/* 身體（主線）*/}
  <line x1="20" y1="14" x2="18" y2="33" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
  {/* 左臂 */}
  <line x1="19" y1="21" x2="7"  y2="30" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
  {/* 右臂 */}
  <line x1="19" y1="21" x2="32" y2="27" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round"/>
  {/* 右腿 */}
  <line x1="18" y1="33" x2="30" y2="46" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
  {/* 左腿 */}
  <line x1="18" y1="33" x2="8"  y2="47" stroke="#1a237e" strokeWidth="3" strokeLinecap="round"/>
  {/* 右鞋 */}
  <rect x="26" y="44" width="11" height="5" rx="2.5" fill="#1a237e"/>
  {/* 左鞋 */}
  <rect x="4"  y="45" width="11" height="5" rx="2.5" fill="#1a237e"/>
</svg>
```

- **Person A（主角）**：身體 `#1a237e`（海軍藍）
- **Person B（第二人）**：身體 `#e65100`（橘紅），鞋子同色
- **鏡像**：往左走的人用 `transform: 'scaleX(-1)'` 翻轉，不用重新畫
- **走路彈動**：`animate={{ y:[0,-4,0,-4,0] }} transition={{ duration:0.50, repeat:Infinity }}`

---

#### H. 速度尾跡（Speed Trails）

水平移動時，人物後方加尾跡強化速度感：

```jsx
{/* 藍色尾跡（Go/Get 系列，一般正面動作）*/}
<div style={{
  position: 'absolute', right: '100%', top: '38%',
  width: 28, height: 7,
  background: 'linear-gradient(90deg, transparent, #90caf9)',
  borderRadius: 4
}} />

{/* 紅色尾跡（Break 系列，破壞/衝撞感）*/}
<div style={{
  position: 'absolute', right: '100%', top: '38%',
  width: 28, height: 7,
  background: 'linear-gradient(90deg, transparent, #ef9a9a)',
  borderRadius: 4
}} />
```

**規則：**
- Go/Get/Run/Come 等一般動詞 → 藍色尾跡 `#90caf9`
- Break/Throw/Hit 等破壞性動詞 → 紅色尾跡 `#ef9a9a`

---

#### I. 場景標準色盤

| 用途 | 色碼 |
|------|------|
| 人物頭部 | `#FDBCB4` / stroke `#E59866` |
| Person A 身體 | `#1a237e` |
| Person B 身體 | `#e65100` |
| 場景背景 | `#fafafa` |
| 牆/地面 | `#8d6e63` / `#5d4037` |
| 衝擊閃光（Break） | `rgba(229,57,53,0.9)` → radial gradient |
| 衝擊閃光（Go） | `rgba(255,152,0,0.9)` → radial gradient |
| 成功/完成 | `#43a047` |
| 危險/錯誤 | `#e53935` / `#b71c1c` |
| 藍色速度尾跡 | `#90caf9` |
| 紅色速度尾跡 | `#ef9a9a` |
| 天藍（室外/陽光） | `#87ceeb` |
| 室內背景 | `#fff8e1` |

---

#### J. 對稱設計原則（補充）

**意思相反的片語，動畫應設計成彼此的鏡像。**

*   **Turn off vs Turn on**：旋鈕方向相反、連接線一縮一長、物件一暗一亮。
*   **Go up vs Go down**：折線一個往右上、一個往右下。
*   **Break up vs Break down**：up = 碎片往上彈飛；down = 東西往下垮塌（transformOrigin: bottom center）。
*   設計新片語時，先想「這個片語有沒有反義詞？」——從反義詞的動畫鏡像出發往往最快。

---

### 3. 當前進度與已知問題 (Current Progress & Known Issues)

**已完成的動詞系列：**
- **Look** — 全系列（into / down on / up / out / over / back / after / for / forward to）
- **Turn** — 全系列（into / down / up / out / off / on / around）
- **Bring** — 全系列（down / up / out / back / in / about）
- **Run** — 全系列（into / down / out / over / through / away / across）
- **Get** — 全系列（into / down / up / out / over / through / along / back / away / on / off）
- **Break** — 全系列（into / down / up / out / through / even）
- **Go** — 部分完成（down / up / out / over / through / on / back 已完成；off / ahead / for / with 待完成）

**正確的工作流程：**
1. 每做一個動詞，同時做資料重構 + 動畫場景
2. 不要用腳本批量處理，逐一手動做，認真思考每個片語的口語中文、極簡英文、核心腦中畫面
3. 做完一個就在 TodoList.md 打勾，瀏覽器確認效果
4. 不要跳過、不要偷懶、有問題就問使用者

**已知問題：**
- 每個 coreMotion 都需要獨立場景，且多語意的片語每個語意要有自己的場景背景
- 副詞面板（AdverbialPanel）尚未更新 UI 來顯示 isFixedOrder / modificationType / 焊接方塊
