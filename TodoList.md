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
- [x] Turn down
- [x] Turn up
- [x] Turn out
- [x] Turn off
- [x] Turn on
- [x] Turn around

### Bring
- [x] Bring down
- [x] Bring up
- [x] Bring out
- [x] Bring back
- [x] Bring in
- [x] Bring about

### Run
- [x] Run into
- [x] Run down
- [x] Run out (of)
- [x] Run over
- [x] Run through
- [x] Run away
- [x] Run across

### Get
- [x] Get into
- [x] Get down (to)
- [x] Get up
- [x] Get out (of)
- [x] Get over
- [x] Get through
- [x] Get along (with)
- [x] Get back
- [x] Get away
- [x] Get on
- [x] Get off

### Break
- [x] Break into
- [x] Break down
- [x] Break up
- [x] Break out
- [x] Break through
- [x] Break even

### Go
- [x] Go down
- [x] Go up
- [x] Go out
- [x] Go over
- [x] Go through
- [x] Go on
- [x] Go back
- [x] Go off
- [x] Go ahead
- [x] Go for
- [x] Go with

### Set
- [x] Set up
- [x] Set out
- [x] Set off
- [x] Set back
- [x] Set aside

### Take
- [x] Take off
- [x] Take on
- [x] Take up
- [x] Take over
- [x] Take out
- [x] Take in
- [x] Take back
- [x] Take down
- [x] Take away

### Put
- [x] Put on
- [x] Put off
- [x] Put up (with)
- [x] Put down
- [x] Put out
- [x] Put away
- [x] Put in
- [x] Put together

### Come
- [x] Come up
- [x] Come down (to)
- [x] Come in
- [x] Come out
- [x] Come back
- [x] Come across
- [x] Come along
- [x] Come over

### Give
- [x] Give up
- [x] Give in
- [x] Give out
- [x] Give away
- [x] Give back

### Make
- [x] Make up
- [x] Make out

### Pick
- [x] Pick up
- [x] Pick out
- [x] Pick on

### Hold
- [x] Hold on
- [x] Hold up
- [x] Hold back

### Keep
- [x] Keep up (with)
- [x] Keep on
- [x] Keep out (of)

### Hang
- [x] Hang out
- [x] Hang up
- [x] Hang on

### Fall
- [x] Fall apart
- [x] Fall behind
- [x] Fall for
- [x] Fall through

### Carry
- [x] Carry on
- [x] Carry out

### Cut
- [x] Cut off
- [x] Cut out
- [x] Cut down (on)

### Work
- [x] Work out
- [x] Work on

### Find
- [x] Find out

### Figure
- [x] Figure out

### Show
- [x] Show up
- [x] Show off

### Check
- [x] Check out
- [x] Check in

### End
- [x] End up

### Catch
- [x] Catch up

### Point
- [x] Point out

### Throw
- [x] Throw away
- [x] Throw out
- [x] Throw up

### Stand
- [x] Stand out
- [x] Stand up
- [x] Stand for
- [x] Stand by

### Blow
- [x] Blow up
- [x] Blow off

### Sign
- [x] Sign up
- [x] Sign in
- [x] Sign out
- [x] Sign off (on)

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
