const STYLES = `
  /* ── Look into ── */
  @keyframes mag-move {
    0%   { transform: translate(0px, 0px) scale(1); }
    50%  { transform: translate(-28px, 14px) scale(1.8); }
    88%  { transform: translate(-28px, 14px) scale(1.8); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  @keyframes code-glow {
    0%, 38%  { opacity: 0; }
    62%, 88% { opacity: 1; }
    100%     { opacity: 0; }
  }

  /* ── Look down ── */
  @keyframes down-bob {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(8px); }
  }
  @keyframes small-shrink {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50%       { transform: scale(0.8); opacity: 0.3; }
  }

  /* ── Look up ── */
  @keyframes up-bob {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes fade-cycle {
    0%, 100% { opacity: 0; transform: translateY(-10px); }
    40%, 70% { opacity: 1; transform: translateY(0px); }
  }

  /* ── Look out ── */
  @keyframes warn-flash {
    0%, 35%, 100% { opacity: 1; transform: scale(1); }
    20%, 55%      { opacity: 0.1; transform: scale(0.8); }
  }
  @keyframes eye-slide {
    0%, 100% { transform: translateX(0px); }
    50%       { transform: translateX(7px); }
  }

  /* ── Look forward ── */
  @keyframes look-fwd-arrow {
    0%, 100% { transform: translateX(0px); opacity: 0.4; }
    50%       { transform: translateX(12px); opacity: 1; }
  }

  /* ── Make out ── */
  @keyframes make-out-focus {
    0%   { filter: blur(4px); opacity: 0.4; }
    60%  { filter: blur(0px); opacity: 1; }
    85%  { filter: blur(0px); opacity: 1; }
    100% { filter: blur(4px); opacity: 0.4; }
  }

  /* ── Take off ── */
  @keyframes take-off-fly {
    0%   { transform: translateX(0px) translateY(0px) rotate(0deg); }
    80%  { transform: translateX(60px) translateY(-70px) rotate(-25deg); }
    100% { transform: translateX(70px) translateY(-80px) rotate(-25deg); opacity: 0; }
  }

  /* ── Turn into ── */
  @keyframes morph {
    0%   { border-radius: 50%; background: #42a5f5; transform: scale(1); }
    45%  { border-radius: 20%; background: #66bb6a; transform: scale(1.12); }
    100% { border-radius: 4px; background: #ef5350; transform: scale(1); }
  }
  @keyframes arrow-beat {
    0%, 100% { opacity: 0.3; transform: scaleX(0.9); }
    50%       { opacity: 1; transform: scaleX(1.15); }
  }

  /* ── Turn down ── */
  @keyframes knob-left {
    0%   { transform: rotate(40deg); }
    70%  { transform: rotate(-130deg); }
    100% { transform: rotate(-130deg); }
  }
  @keyframes dim-out {
    0%, 15%  { opacity: 1; }
    70%, 100%{ opacity: 0.07; }
  }

  /* ── Turn up ── */
  @keyframes knob-right {
    0%   { transform: rotate(-130deg); }
    70%  { transform: rotate(40deg); }
    100% { transform: rotate(40deg); }
  }
  @keyframes bars-up {
    0%   { transform: scaleY(0.05); opacity: 0.2; }
    100% { transform: scaleY(1); opacity: 1; }
  }

  /* ── Turn out ── */
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes slide-reveal {
    0%, 30%  { transform: translateX(-18px); opacity: 0; }
    65%, 100%{ transform: translateX(0px); opacity: 1; }
  }

  /* ── Bring into ── */
  @keyframes carry-in {
    0%   { transform: translateX(-110px); opacity: 0; }
    55%  { transform: translateX(6px); opacity: 1; }
    70%  { transform: translateX(-3px); }
    100% { transform: translateX(0px); opacity: 1; }
  }

  /* ── Bring down ── */
  @keyframes drop-in {
    0%   { transform: translateY(-75px); opacity: 0; }
    60%  { transform: translateY(6px); opacity: 1; }
    75%  { transform: translateY(-3px); }
    100% { transform: translateY(0px); opacity: 1; }
  }

  /* ── Bring up ── */
  @keyframes rise-up {
    0%   { transform: translateY(65px); opacity: 0; }
    55%  { transform: translateY(-5px); opacity: 1; }
    70%  { transform: translateY(2px); }
    100% { transform: translateY(0px); opacity: 1; }
  }
  @keyframes hand-up {
    0%, 28% { transform: translateY(50px); opacity: 0; }
    48%      { transform: translateY(50px); opacity: 1; }
    100%     { transform: translateY(5px); opacity: 0.7; }
  }

  /* ── Bring out ── */
  @keyframes pop-out {
    0%, 18%  { transform: scale(0.1) translateX(-8px); opacity: 0; }
    58%      { transform: scale(1.2) translateX(3px); opacity: 1; }
    100%     { transform: scale(1) translateX(0px); opacity: 1; }
  }

  /* ── Run into ── */
  @keyframes rush {
    0%   { transform: translateX(-110px); }
    50%  { transform: translateX(12px); }
    60%  { transform: translateX(-9px) rotate(-7deg); }
    70%  { transform: translateX(6px) rotate(3deg); }
    80%  { transform: translateX(-3px) rotate(0deg); }
    100% { transform: translateX(0px) rotate(0deg); }
  }
  @keyframes wall-shake {
    0%, 46%  { transform: translateX(0px); }
    54%      { transform: translateX(-8px); }
    62%      { transform: translateX(8px); }
    70%      { transform: translateX(-5px); }
    78%      { transform: translateX(4px); }
    86%      { transform: translateX(-2px); }
    100%     { transform: translateX(0px); }
  }
  @keyframes bug-pop {
    0%, 47%  { opacity: 0; transform: scale(0) translateY(0px); }
    57%      { opacity: 1; transform: scale(1.5) translateY(-6px); }
    67%      { transform: scale(0.9) translateY(0px); }
    100%     { opacity: 1; transform: scale(1) translateY(0px); }
  }

  /* ── Run down ── */
  @keyframes drain {
    0%    { width: 66px; background: #4caf50; }
    40%   { width: 36px; background: #ff9800; }
    82%   { width: 4px;  background: #f44336; }
    93%   { width: 4px;  background: #f44336; }
    100%  { width: 66px; background: #4caf50; }
  }
  @keyframes blink {
    0%, 76%, 100% { opacity: 1; }
    82%, 92%      { opacity: 0.1; }
  }

  /* ── Run up ── */
  @keyframes scroll-up {
    0%   { transform: translateY(0px); }
    100% { transform: translateY(-84px); }
  }

  /* ── Run out ── */
  @keyframes water-drop {
    0%   { height: 70px; }
    78%  { height: 2px; }
    90%  { height: 2px; }
    100% { height: 70px; }
  }
  @keyframes run-away {
    0%   { transform: translateX(-50px); opacity: 0; }
    12%  { opacity: 1; }
    82%  { transform: translateX(70px); opacity: 1; }
    100% { transform: translateX(90px); opacity: 0; }
  }

  /* ── Get into ── */
  @keyframes squeeze-in {
    0%   { transform: translateX(-90px) scaleX(0.5); opacity: 0; }
    55%  { transform: translateX(5px) scaleX(1); opacity: 1; }
    70%  { transform: translateX(-3px) scaleX(1); }
    100% { transform: translateX(0px) scaleX(1); opacity: 1; }
  }
  @keyframes circle-highlight {
    0%, 40%  { box-shadow: 0 0 0px #42a5f5; border-color: #90caf9; }
    60%, 80% { box-shadow: 0 0 16px #42a5f5; border-color: #1e88e5; }
    100%     { box-shadow: 0 0 0px #42a5f5; border-color: #90caf9; }
  }

  /* ── Get down ── */
  @keyframes crouch {
    0%, 100% { transform: scaleY(1) translateY(0px); transform-origin: bottom; }
    50%       { transform: scaleY(0.65) translateY(10px); transform-origin: bottom; }
  }
  @keyframes task-pop {
    0%, 35%  { opacity: 0; transform: scale(0.4); }
    60%, 100%{ opacity: 1; transform: scale(1); }
  }

  /* ── Get up ── */
  @keyframes rise-from-bed {
    0%, 18%  { transform: translateY(32px); opacity: 0.3; }
    62%      { transform: translateY(-5px); opacity: 1; }
    78%      { transform: translateY(3px); }
    100%     { transform: translateY(0px); opacity: 1; }
  }
  @keyframes alarm-ring {
    0%, 60%, 100% { transform: rotate(0deg); }
    65%           { transform: rotate(-12deg); }
    70%           { transform: rotate(12deg); }
    75%           { transform: rotate(-8deg); }
    80%           { transform: rotate(8deg); }
    85%           { transform: rotate(-4deg); }
    90%           { transform: rotate(4deg); }
  }

  /* ── Get out ── */
  @keyframes escape {
    0%   { transform: translateX(-30px); opacity: 0; }
    15%  { opacity: 1; }
    85%  { transform: translateX(80px); opacity: 1; }
    100% { transform: translateX(100px); opacity: 0; }
  }
  @keyframes door-open {
    0%, 30%  { transform: perspective(200px) rotateY(0deg); }
    60%, 100%{ transform: perspective(200px) rotateY(-55deg); }
  }

  /* ── Break into ── */
  @keyframes lock-shake {
    0%, 38%  { transform: rotate(0deg); }
    48%      { transform: rotate(-16deg); }
    57%      { transform: rotate(16deg); }
    65%      { transform: rotate(-10deg); }
    73%      { transform: rotate(10deg); }
    81%      { transform: rotate(0deg); }
    100%     { transform: rotate(0deg); }
  }
  @keyframes shackle-open {
    0%, 60%  { transform: translateY(0px) rotate(0deg); opacity: 1; }
    78%      { transform: translateY(-18px) rotate(35deg); opacity: 0.6; }
    90%, 100%{ transform: translateY(-25px) rotate(50deg); opacity: 0; }
  }
  @keyframes market-enter {
    0%, 55%  { opacity: 0; transform: scale(0.3); }
    72%      { opacity: 1; transform: scale(1.2); }
    100%     { opacity: 1; transform: scale(1); }
  }

  /* ── Break down ── */
  @keyframes status-drain {
    0%    { width: 60px; background: #4caf50; }
    40%   { width: 30px; background: #ff9800; }
    75%   { width: 3px;  background: #f44336; }
    90%   { width: 3px;  background: #f44336; }
    100%  { width: 60px; background: #4caf50; }
  }
  @keyframes collapse-tilt {
    0%, 45%  { transform: rotate(0deg) translateY(0px); opacity: 1; }
    65%      { transform: rotate(-4deg) translateY(3px); opacity: 1; }
    80%      { transform: rotate(-10deg) translateY(8px); opacity: 0.7; }
    90%      { transform: rotate(-10deg) translateY(8px); opacity: 0.7; }
    100%     { transform: rotate(0deg) translateY(0px); opacity: 1; }
  }

  /* ── Break up ── */
  @keyframes split-left {
    0%, 22%  { transform: translateX(0px); opacity: 1; }
    68%      { transform: translateX(-42px); opacity: 1; }
    100%     { transform: translateX(-42px); opacity: 1; }
  }
  @keyframes split-right {
    0%, 22%  { transform: translateX(0px); opacity: 1; }
    68%      { transform: translateX(42px); opacity: 1; }
    100%     { transform: translateX(42px); opacity: 1; }
  }
  @keyframes crack-show {
    0%, 18%  { opacity: 0; }
    30%, 100%{ opacity: 1; }
  }

  /* ── Break out ── */
  @keyframes burst-through {
    0%   { transform: translateX(-80px); opacity: 0; }
    48%  { transform: translateX(8px); opacity: 1; }
    58%  { transform: translateX(-6px) rotate(-5deg); }
    68%  { transform: translateX(4px) rotate(2deg); }
    100% { transform: translateX(0px) rotate(0deg); opacity: 1; }
  }
  @keyframes explosion {
    0%, 44%  { transform: scale(0); opacity: 0; }
    55%      { transform: scale(1.6); opacity: 1; }
    70%      { transform: scale(0.9); }
    100%     { transform: scale(1); opacity: 1; }
  }
  @keyframes wall-break {
    0%, 44%  { transform: translateX(0px); filter: none; }
    50%      { transform: translateX(-6px); filter: brightness(1.4); }
    58%      { transform: translateX(6px); }
    66%      { transform: translateX(-4px); }
    74%      { transform: translateX(3px); }
    82%      { transform: translateX(0px); filter: none; }
    100%     { transform: translateX(0px); }
  }

  /* ── Go into ── */
  @keyframes dive-deep {
    0%   { transform: translateX(0px) scale(1); opacity: 1; }
    55%  { transform: translateX(45px) scale(0.35); opacity: 0.8; }
    88%  { transform: translateX(45px) scale(0.35); opacity: 0.8; }
    100% { transform: translateX(0px) scale(1); opacity: 1; }
  }
  @keyframes layer-highlight {
    0%, 40%  { background: #e3f2fd; }
    55%, 88% { background: #bbdefb; }
    100%     { background: #e3f2fd; }
  }

  /* ── Go down ── */
  @keyframes status-red-flash {
    0%, 38%  { background: #4caf50; box-shadow: 0 0 8px #4caf50; }
    52%, 100%{ background: #f44336; box-shadow: 0 0 12px #f44336; }
  }
  @keyframes down-arrow-drop {
    0%, 100% { transform: translateY(0px); opacity: 0.4; }
    50%       { transform: translateY(8px); opacity: 1; }
  }

  /* ── Go up ── */
  @keyframes rocket-rise {
    0%   { transform: translateY(65px); opacity: 0; }
    68%  { transform: translateY(-5px); opacity: 1; }
    82%  { transform: translateY(3px); }
    100% { transform: translateY(0px); opacity: 1; }
  }
  @keyframes trail-fade {
    0%, 20% { opacity: 0; height: 0px; }
    50%      { opacity: 0.7; height: 50px; }
    80%      { opacity: 0.3; height: 60px; }
    100%     { opacity: 0; height: 0px; }
  }

  /* ── Go out ── */
  @keyframes flicker-die {
    0%   { opacity: 1; transform: scale(1); filter: brightness(1); }
    25%  { opacity: 0.8; transform: scale(0.92) translateX(2px); }
    50%  { opacity: 0.5; transform: scale(0.75); }
    75%  { opacity: 0.2; transform: scale(0.5); filter: brightness(0.5); }
    90%  { opacity: 0; transform: scale(0.1); }
    95%, 100% { opacity: 0; transform: scale(0); }
  }
  @keyframes smoke-drift {
    0%, 70%  { opacity: 0; transform: translateY(0px) scale(0.5); }
    82%      { opacity: 0.5; transform: translateY(-14px) scale(1); }
    100%     { opacity: 0; transform: translateY(-28px) scale(1.3); }
  }

  /* ── Set into ── */
  @keyframes solidify {
    0%   { border-radius: 50%; background: #64b5f6; transform: scale(1.15); opacity: 0.6; }
    50%  { border-radius: 25%; background: #546e7a; transform: scale(1.05); opacity: 0.85; }
    100% { border-radius: 5px; background: #37474f; transform: scale(1); opacity: 1; }
  }
  @keyframes crack-appear {
    0%, 55%  { opacity: 0; }
    70%, 100%{ opacity: 1; }
  }

  /* ── Set down ── */
  @keyframes place-down {
    0%   { transform: translateY(-55px); opacity: 0; }
    55%  { transform: translateY(5px); opacity: 1; }
    70%  { transform: translateY(-3px); }
    100% { transform: translateY(0px); opacity: 1; }
  }
  @keyframes rule-write {
    0%, 50%  { width: 0px; opacity: 0; }
    70%, 100%{ width: 80px; opacity: 1; }
  }

  /* ── Set up ── */
  @keyframes block1-slide {
    0%, 8%   { transform: translateX(-55px); opacity: 0; }
    38%, 100%{ transform: translateX(0px); opacity: 1; }
  }
  @keyframes block2-slide {
    0%, 22%  { transform: translateX(-55px); opacity: 0; }
    52%, 100%{ transform: translateX(0px); opacity: 1; }
  }
  @keyframes block3-slide {
    0%, 38%  { transform: translateX(-55px); opacity: 0; }
    68%, 100%{ transform: translateX(0px); opacity: 1; }
  }
  @keyframes check-pop {
    0%, 65%  { transform: scale(0); opacity: 0; }
    80%      { transform: scale(1.4); opacity: 1; }
    100%     { transform: scale(1); opacity: 1; }
  }

  /* ── Set out ── */
  @keyframes march-forward {
    0%   { transform: translateX(-40px); opacity: 0; }
    15%  { opacity: 1; }
    88%  { transform: translateX(65px); opacity: 1; }
    100% { transform: translateX(80px); opacity: 0; }
  }
  @keyframes goal-pulse {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px gold); }
    50%       { transform: scale(1.15); filter: drop-shadow(0 0 12px gold); }
  }

  /* ── Shared: scan over ── */
  @keyframes scan-sweep {
    0%   { transform: translateX(-40px); opacity: 0.3; }
    50%  { transform: translateX(0px); opacity: 1; }
    100% { transform: translateX(40px); opacity: 0.3; }
  }

  /* ── Shared: flip over ── */
  @keyframes flip-over {
    0%   { transform: perspective(300px) rotateY(0deg); }
    45%  { transform: perspective(300px) rotateY(90deg); }
    50%  { transform: perspective(300px) rotateY(90deg); }
    100% { transform: perspective(300px) rotateY(0deg); }
  }

  /* ── Shared: pass through ── */
  @keyframes pass-thru {
    0%   { transform: translateX(-65px); opacity: 0; }
    25%  { opacity: 1; }
    75%  { transform: translateX(0px); opacity: 1; }
    100% { transform: translateX(65px); opacity: 0; }
  }

  /* ── Shared: return / look back ── */
  @keyframes return-slide {
    0%   { transform: translateX(50px); opacity: 0; }
    40%  { transform: translateX(0px); opacity: 1; }
    80%  { transform: translateX(0px); opacity: 1; }
    100% { transform: translateX(50px); opacity: 0; }
  }
  @keyframes look-backward {
    0%, 100% { transform: scaleX(1); }
    45%, 55%  { transform: scaleX(-1); }
  }

  /* ── Shared: follow behind ── */
  @keyframes follow-trail {
    0%, 100% { transform: translateX(0px); opacity: 0.7; }
    50%       { transform: translateX(-8px); opacity: 1; }
  }

  /* ── Shared: search forward ── */
  @keyframes search-fwd {
    0%, 100% { transform: translateX(0px) scale(1); opacity: 0.6; }
    50%       { transform: translateX(12px) scale(1.1); opacity: 1; }
  }

  /* ── Shared: power off ── */
  @keyframes power-off {
    0%, 15%  { opacity: 1; background: #4caf50; box-shadow: 0 0 12px #4caf50; }
    55%, 100%{ opacity: 0.15; background: #424242; box-shadow: none; }
  }
  @keyframes screen-dark {
    0%, 15%  { filter: brightness(1); }
    55%, 100%{ filter: brightness(0.05); }
  }

  /* ── Shared: power on ── */
  @keyframes power-on {
    0%, 15%  { opacity: 0.15; background: #424242; box-shadow: none; }
    55%, 100%{ opacity: 1; background: #4caf50; box-shadow: 0 0 12px #4caf50; }
  }
  @keyframes screen-bright {
    0%, 15%  { filter: brightness(0.05); }
    55%, 100%{ filter: brightness(1); }
  }

  /* ── Shared: orbit / around ── */
  @keyframes orbit-around {
    from { transform: rotate(0deg) translateX(36px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(36px) rotate(-360deg); }
  }

  /* ── Shared: move away ── */
  @keyframes move-away {
    0%   { transform: translateX(0px) scale(1); opacity: 1; }
    80%  { transform: translateX(75px) scale(0.4); opacity: 0.6; }
    100% { transform: translateX(85px) scale(0.2); opacity: 0; }
  }

  /* ── Shared: cross sideways ── */
  @keyframes cross-path {
    0%   { transform: translateX(-75px); opacity: 0; }
    18%  { opacity: 1; }
    80%  { transform: translateX(0px); opacity: 1; }
    100% { transform: translateX(75px); opacity: 0; }
  }

  /* ── Shared: go ahead ── */
  @keyframes march-ahead {
    0%   { transform: translateX(-20px); opacity: 0.3; }
    60%  { transform: translateX(20px); opacity: 1; }
    100% { transform: translateX(40px); opacity: 0; }
  }

  /* ── Shared: squeeze by ── */
  @keyframes squeeze-by {
    0%   { transform: translateX(-60px) scaleX(0.7); opacity: 0; }
    25%  { opacity: 1; }
    75%  { transform: translateX(0px) scaleX(0.7); opacity: 1; }
    100% { transform: translateX(60px) scaleX(1); opacity: 0.3; }
  }

  /* ── Shared: merge together ── */
  @keyframes merge-left {
    0%, 100% { transform: translateX(-28px); opacity: 0.6; }
    50%       { transform: translateX(0px); opacity: 1; }
  }
  @keyframes merge-right {
    0%, 100% { transform: translateX(28px); opacity: 0.6; }
    50%       { transform: translateX(0px); opacity: 1; }
  }

  /* ── Shared: bring forward ── */
  @keyframes advance-fwd {
    0%   { transform: translateX(-30px); opacity: 0; }
    55%  { transform: translateX(5px); opacity: 1; }
    70%  { transform: translateX(-2px); }
    100% { transform: translateX(0px); opacity: 1; }
  }

  /* ── Shared: push back / set back ── */
  @keyframes pushed-back {
    0%, 15%  { transform: translateX(0px); }
    55%      { transform: translateX(-30px); }
    70%      { transform: translateX(-27px); }
    100%     { transform: translateX(-30px); }
  }
  @keyframes delay-bar {
    0%, 15%  { width: 80px; background: #66bb6a; }
    55%, 100%{ width: 50px; background: #ef5350; }
  }

  /* ── Shared: set aside ── */
  @keyframes slide-aside {
    0%, 15%  { transform: translateX(0px); opacity: 1; }
    60%, 100%{ transform: translateX(55px); opacity: 0.25; }
  }

  /* ── Shared: alarm trigger ── */
  @keyframes alarm-shake {
    0%, 40%, 100% { transform: rotate(0deg) scale(1); }
    45%           { transform: rotate(-12deg) scale(1.1); }
    50%           { transform: rotate(12deg) scale(1.15); }
    55%           { transform: rotate(-8deg) scale(1.1); }
    60%           { transform: rotate(8deg) scale(1.05); }
    65%           { transform: rotate(0deg) scale(1); }
  }
  @keyframes ripple-out {
    0%, 35%  { transform: scale(0.5); opacity: 0; }
    55%      { transform: scale(1.5); opacity: 0.8; }
    75%      { transform: scale(2.5); opacity: 0; }
    100%     { transform: scale(0.5); opacity: 0; }
  }

  /* ── Shared: balance / break even ── */
  @keyframes balance-settle {
    0%   { transform: rotate(-18deg); }
    60%  { transform: rotate(0deg); }
    80%  { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
  }

  /* ── Shared: depart / run off ── */
  @keyframes depart-right {
    0%   { transform: translateX(0px) scale(1); opacity: 1; }
    75%  { transform: translateX(65px) scale(0.5); opacity: 0.7; }
    100% { transform: translateX(80px) scale(0.2); opacity: 0; }
  }

  /* ── Shared: gear start (set about) ── */
  @keyframes gear-start {
    0%, 25%  { transform: rotate(0deg) scale(0.7); opacity: 0.3; }
    55%, 100%{ transform: rotate(360deg) scale(1); opacity: 1; }
  }
  @keyframes task-reveal {
    0%, 40%  { opacity: 0; transform: translateX(-20px); }
    70%, 100%{ opacity: 1; transform: translateX(0px); }
  }

  /* ── Meaning cycle: 3-phase switch ── */
  @keyframes phase-1of3 {
    0%, 30%   { opacity: 1; }
    35%, 100% { opacity: 0; }
  }
  @keyframes phase-2of3 {
    0%, 33%   { opacity: 0; }
    38%, 63%  { opacity: 1; }
    68%, 100% { opacity: 0; }
  }
  @keyframes phase-3of3 {
    0%, 66%   { opacity: 0; }
    71%, 95%  { opacity: 1; }
    100%      { opacity: 0; }
  }

  /* ── Meaning cycle: 2-phase switch ── */
  @keyframes phase-1of2 {
    0%, 45%   { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  @keyframes phase-2of2 {
    0%, 48%   { opacity: 0; }
    53%, 95%  { opacity: 1; }
    100%      { opacity: 0; }
  }
`;

import MODULAR_STYLES from './modularStyles';

export default STYLES + MODULAR_STYLES;
