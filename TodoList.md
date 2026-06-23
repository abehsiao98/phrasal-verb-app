# 重構進度追蹤

## 資料結構重構規則
1. [ ] 多重語意平鋪化：grammar/particleRole 移入每個 meaning
2. [ ] 過濾非口語定義：刪除冷門正式解釋
3. [ ] 極簡英文替換：3 字以內 Plain English
4. [ ] 在地口語中文翻譯：台灣口語化
5. [ ] 副詞片語屬性擴充：isFixedOrder + modificationType

## 動態引擎與動畫邏輯
6. [ ] 核心動畫模組化：coreMotion（169 entries）+ sceneObject（279 meanings）+ CoreTrajectoryScene.jsx
7. [ ] 三字片語與副詞方塊焊接：WeldedBlock.jsx + ThreeWordPhrasalBlock + AdverbWeldedBlock

---

## 動詞片語 (Phrasal Verbs)

### Look
- [x] Look into
- [x] Look down on
- [x] Look up
- [x] Look out
- [x] Look over
- [x] Look back
- [x] Look after
- [x] Look for
- [x] Look forward to

### Turn
- [x] Turn into
- [ ] Turn down
- [ ] Turn up
- [ ] Turn out
- [ ] Turn off
- [ ] Turn on
- [ ] Turn around

### Bring
- [ ] Bring down
- [ ] Bring up
- [ ] Bring out
- [ ] Bring back
- [ ] Bring in
- [ ] Bring about

### Run
- [ ] Run into
- [ ] Run down
- [ ] Run out (of)
- [ ] Run over
- [ ] Run through
- [ ] Run away
- [ ] Run across

### Get
- [ ] Get into
- [ ] Get down (to)
- [ ] Get up
- [ ] Get out (of)
- [ ] Get over
- [ ] Get through
- [ ] Get along (with)
- [ ] Get back
- [ ] Get away
- [ ] Get on
- [ ] Get off

### Break
- [ ] Break into
- [ ] Break down
- [ ] Break up
- [ ] Break out
- [ ] Break through
- [ ] Break even

### Go
- [ ] Go down
- [ ] Go up
- [ ] Go out
- [ ] Go over
- [ ] Go through
- [ ] Go on
- [ ] Go back
- [ ] Go off
- [ ] Go ahead
- [ ] Go for
- [ ] Go with

### Set
- [ ] Set up
- [ ] Set out
- [ ] Set off
- [ ] Set back
- [ ] Set aside

### Take
- [ ] Take off
- [ ] Take on
- [ ] Take up
- [ ] Take over
- [ ] Take out
- [ ] Take in
- [ ] Take back
- [ ] Take down
- [ ] Take away

### Put
- [ ] Put on
- [ ] Put off
- [ ] Put up (with)
- [ ] Put down
- [ ] Put out
- [ ] Put away
- [ ] Put in
- [ ] Put together

### Come
- [ ] Come up
- [ ] Come down (to)
- [ ] Come in
- [ ] Come out
- [ ] Come back
- [ ] Come across
- [ ] Come along
- [ ] Come over

### Give
- [ ] Give up
- [ ] Give in
- [ ] Give out
- [ ] Give away
- [ ] Give back

### Make
- [ ] Make up
- [ ] Make out

### Pick
- [ ] Pick up
- [ ] Pick out
- [ ] Pick on

### Hold
- [ ] Hold on
- [ ] Hold up
- [ ] Hold back

### Keep
- [ ] Keep up (with)
- [ ] Keep on
- [ ] Keep out (of)

### Hang
- [ ] Hang out
- [ ] Hang up
- [ ] Hang on

### Fall
- [ ] Fall apart
- [ ] Fall behind
- [ ] Fall for
- [ ] Fall through

### Carry
- [ ] Carry on
- [ ] Carry out

### Cut
- [ ] Cut off
- [ ] Cut out
- [ ] Cut down (on)

### Work
- [ ] Work out
- [ ] Work on

### Find
- [ ] Find out

### Figure
- [ ] Figure out

### Show
- [ ] Show up
- [ ] Show off

### Check
- [ ] Check out
- [ ] Check in

### End
- [ ] End up

### Catch
- [ ] Catch up

### Point
- [ ] Point out

### Throw
- [ ] Throw away
- [ ] Throw out
- [ ] Throw up

### Stand
- [ ] Stand out
- [ ] Stand up
- [ ] Stand for
- [ ] Stand by

### Blow
- [ ] Blow up
- [ ] Blow off

### Sign
- [ ] Sign up
- [ ] Sign in
- [ ] Sign out
- [ ] Sign off (on)

### Shut
- [ ] Shut down
- [ ] Shut up

### Drop
- [ ] Drop out
- [ ] Drop off
- [ ] Drop by

### Pull
- [ ] Pull off
- [ ] Pull out
- [ ] Pull over

### Clean
- [ ] Clean up

### Wrap
- [ ] Wrap up

### Move
- [ ] Move on

### Fill
- [ ] Fill out

### Back
- [ ] Back up

### Call
- [ ] Call off
- [ ] Call back

### Sort
- [ ] Sort out

### Burn
- [ ] Burn out

### Calm
- [ ] Calm down

### Grow
- [ ] Grow up

### Wake
- [ ] Wake up

### Mess
- [ ] Mess up

### Freak
- [ ] Freak out

### Pay
- [ ] Pay off

### Reach
- [ ] Reach out

### Kick
- [ ] Kick off

### Roll
- [ ] Roll out

### Lay
- [ ] Lay off

### Pass
- [ ] Pass out
- [ ] Pass up

### Let
- [ ] Let down

---

## 副詞片語 (Adverbial Phrases)

### 時間感
- [ ] already
- [ ] yet
- [ ] still
- [ ] just
- [ ] soon
- [ ] recently
- [ ] eventually
- [ ] at first
- [ ] so far
- [ ] from now on
- [ ] in time
- [ ] for good
- [ ] for now
- [ ] all along
- [ ] sooner or later
- [ ] in the long run

### 頻率感
- [ ] always
- [ ] never
- [ ] often
- [ ] sometimes
- [ ] once in a while
- [ ] from time to time
- [ ] all the time
- [ ] every now and then
- [ ] for once
- [ ] more often than not
- [ ] on and off
- [ ] over and over

### 即時感
- [ ] right away
- [ ] right now
- [ ] all of a sudden
- [ ] out of nowhere
- [ ] in no time
- [ ] on the spot

### 轉折感
- [ ] after all
- [ ] no wonder
- [ ] no matter what
- [ ] at all
- [ ] above all
- [ ] as a matter of fact
- [ ] believe it or not

### 方式感
- [ ] on purpose
- [ ] by accident
- [ ] little by little
- [ ] all at once
- [ ] one by one
- [ ] back and forth
- [ ] from scratch
- [ ] in a row
- [ ] all the way
- [ ] in a hurry
- [ ] by yourself

### 程度感
- [ ] more or less
- [ ] at least
