const MODULAR_STYLES = `
  /* ═══════════════════════════════════════ */
  /*  VERB micro-animations (Layer 1)       */
  /* ═══════════════════════════════════════ */

  @keyframes verb-pulse {
    0%, 100% { transform: scale(1); }
    30%      { transform: scale(1.12); }
    60%      { transform: scale(0.95); }
  }
  @keyframes verb-spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes verb-reach {
    0%, 100% { transform: translateY(0) scale(1); }
    50%      { transform: translateY(-6px) scale(1.08); }
  }
  @keyframes verb-grab {
    0%, 100% { transform: scale(1) rotate(0deg); }
    30%      { transform: scale(0.78) rotate(-6deg); }
    60%      { transform: scale(1.12) rotate(3deg); }
  }
  @keyframes verb-walk {
    0%, 100% { transform: translateX(0) translateY(0); }
    25%      { transform: translateX(3px) translateY(-3px); }
    50%      { transform: translateX(6px) translateY(0); }
    75%      { transform: translateX(3px) translateY(-3px); }
  }
  @keyframes verb-walk-left {
    0%, 100% { transform: translateX(0) scaleX(-1); }
    25%      { transform: translateX(-3px) translateY(-3px) scaleX(-1); }
    50%      { transform: translateX(-6px) scaleX(-1); }
    75%      { transform: translateX(-3px) translateY(-3px) scaleX(-1); }
  }
  @keyframes verb-shake {
    0%, 100% { transform: rotate(0deg); }
    15%      { transform: rotate(-8deg); }
    30%      { transform: rotate(8deg); }
    45%      { transform: rotate(-5deg); }
    60%      { transform: rotate(5deg); }
  }
  @keyframes verb-hammer {
    0%, 100% { transform: rotate(0deg); }
    40%      { transform: rotate(-18deg) translateY(-3px); }
    55%      { transform: rotate(4deg) translateY(2px); }
  }
  @keyframes verb-hold-still {
    0%, 100% { transform: scale(1); }
    50%      { transform: scale(1.04); opacity: 0.85; }
  }
  @keyframes verb-swing {
    0%, 100% { transform: rotate(-8deg); }
    50%      { transform: rotate(8deg); }
  }
  @keyframes verb-burn {
    0%, 100% { transform: scale(1); filter: brightness(1); }
    50%      { transform: scale(1.2) translateY(-3px); filter: brightness(1.4); }
  }
  @keyframes verb-grow {
    0%   { transform: scale(0.6); opacity: 0.5; }
    50%  { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0.6); opacity: 0.5; }
  }

  /* ═══════════════════════════════════════ */
  /*  VERB SCENE animations                 */
  /* ═══════════════════════════════════════ */

  /* Look: 瞳孔左右掃描 */
  @keyframes verb-eye-scan {
    0%, 100% { left: 12px; }
    30%      { left: 52px; }
    60%      { left: 22px; }
    80%      { left: 42px; }
  }
  @keyframes verb-eye-ray {
    0%, 100% { opacity: 0.2; width: 40px; }
    30%      { opacity: 0.8; width: 70px; }
    60%      { opacity: 0.3; width: 50px; }
  }

  /* Turn: 指針旋轉 */
  @keyframes verb-knob-turn {
    0%   { transform: rotate(-60deg); }
    50%  { transform: rotate(120deg); }
    100% { transform: rotate(-60deg); }
  }

  /* Get: 狀態 A→B */
  @keyframes verb-state-a {
    0%, 30%  { opacity: 1; transform: scale(1); }
    50%, 70% { opacity: 0.3; transform: scale(0.8); }
    100%     { opacity: 1; transform: scale(1); }
  }
  @keyframes verb-state-arrow {
    0%, 20%  { opacity: 0.3; }
    35%, 65% { opacity: 1; transform: translateX(5px) scale(1.2); }
    80%, 100% { opacity: 0.3; transform: translateX(0) scale(1); }
  }
  @keyframes verb-state-b {
    0%, 30%  { opacity: 0.3; transform: scale(0.8); }
    50%, 70% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 6px #4caf50); }
    100%     { opacity: 0.3; transform: scale(0.8); }
  }

  /* Take: 手伸出去抓取 */
  @keyframes verb-take-hand {
    0%   { left: 30px; transform: scale(1); }
    40%  { left: 90px; transform: scale(0.85); }
    50%  { left: 90px; transform: scale(1.1); }
    100% { left: 30px; transform: scale(1); }
  }
  @keyframes verb-take-target {
    0%, 35% { left: 55%; opacity: 1; }
    50%     { left: 48%; transform: scale(0.85); }
    80%     { left: 25%; opacity: 0.5; transform: scale(0.7); }
    100%    { left: 55%; opacity: 1; transform: scale(1); }
  }

  /* Put: 放下 */
  @keyframes verb-put-place {
    0%   { top: 10px; }
    50%  { top: 42px; }
    60%  { top: 38px; }
    70%, 85% { top: 40px; }
    100% { top: 10px; }
  }
  @keyframes verb-put-object {
    0%   { top: 18px; }
    50%  { top: 50px; transform: translateX(-50%) scaleY(0.85); }
    60%  { top: 46px; transform: translateX(-50%) scaleY(1.05); }
    70%, 85% { top: 48px; transform: translateX(-50%) scaleY(1); }
    100% { top: 18px; }
  }

  /* Go: 走路 */
  @keyframes verb-go-walk {
    0%   { left: 20px; }
    100% { left: 200px; }
  }
  @keyframes verb-go-footprints {
    0%   { left: 10px; opacity: 0.6; }
    100% { left: 180px; opacity: 0; }
  }

  /* Come: 朝觀眾走來，越來越大 */
  @keyframes verb-come-approach {
    0%   { right: 20px; transform: scale(0.5); opacity: 0.3; }
    70%  { right: 110px; transform: scale(1.2); opacity: 1; }
    80%  { right: 115px; transform: scale(1.15); }
    90%, 100% { right: 110px; transform: scale(1.2); opacity: 0.3; }
  }

  /* Break: 裂開 */
  @keyframes verb-break-crack {
    0%, 40%  { transform: translate(-50%,-50%) scale(1); border-radius: 8px; }
    50%      { transform: translate(-50%,-50%) scale(1.05); }
    55%      { transform: translate(-50%,-50%) scale(0.95); }
    60%, 100% { transform: translate(-50%,-50%) scale(1); }
  }
  @keyframes verb-break-line {
    0%, 45%  { opacity: 0; }
    55%, 100% { opacity: 1; }
  }
  @keyframes verb-break-shard-l {
    0%, 50%  { opacity: 0; transform: translate(0,0) rotate(0deg); }
    60%      { opacity: 1; }
    100%     { opacity: 0; transform: translate(-25px, 15px) rotate(-20deg); }
  }
  @keyframes verb-break-shard-r {
    0%, 50%  { opacity: 0; transform: translate(0,0) rotate(0deg); }
    60%      { opacity: 1; }
    100%     { opacity: 0; transform: translate(25px, 15px) rotate(20deg); }
  }

  /* Run: 衝刺 */
  @keyframes verb-run-sprint {
    0%   { left: 15px; }
    100% { left: 210px; }
  }
  @keyframes verb-run-speedline {
    0%   { opacity: 0; transform: translateX(30px); }
    30%  { opacity: 0.7; }
    100% { opacity: 0; transform: translateX(-20px); }
  }

  /* Give: 遞出去 */
  @keyframes verb-give-offer {
    0%   { left: 50%; opacity: 1; }
    50%  { left: 68%; opacity: 1; transform: translateX(-50%) scale(1.1); }
    80%  { left: 75%; opacity: 0.4; transform: translateX(-50%) scale(0.8); }
    100% { left: 50%; opacity: 1; transform: translateX(-50%) scale(1); }
  }

  /* ═══════════════════════════════════════ */
  /*  PARTICLE SCENE animations             */
  /*  這些是物理過程，不是 Icon 閃爍        */
  /* ═══════════════════════════════════════ */

  /* ── UP: 從底部漲滿到頂部 ── */
  @keyframes scene-fill-up {
    0%   { height: 0; }
    70%  { height: 100%; }
    85%  { height: 100%; }
    100% { height: 0; }
  }
  @keyframes scene-rise-break {
    0%   { top: 75px; opacity: 0; transform: translateX(-50%) scale(0.5); }
    30%  { opacity: 1; transform: translateX(-50%) scale(1); }
    60%  { top: 30px; transform: translateX(-50%) scale(1.1); }
    75%  { top: 28px; transform: translateX(-50%) scale(1); }
    85%  { top: 28px; opacity: 1; }
    100% { top: 75px; opacity: 0; transform: translateX(-50%) scale(0.5); }
  }
  @keyframes scene-target-glow {
    0%, 30%  { opacity: 0; transform: translateX(-50%) scale(0.5); }
    60%, 80% { opacity: 1; transform: translateX(-50%) scale(1.2); filter: drop-shadow(0 0 8px gold); }
    100%     { opacity: 0; transform: translateX(-50%) scale(0.5); }
  }

  /* ── DOWN: 崩塌下墜 ── */
  @keyframes scene-collapse-fall {
    0%   { top: 10px; transform: translateX(-50%) scale(1) rotate(0deg); opacity: 1; }
    60%  { top: 65px; transform: translateX(-50%) scale(0.9) rotate(8deg); opacity: 1; }
    70%  { top: 70px; transform: translateX(-50%) scale(1.2, 0.7) rotate(0deg); }
    80%  { top: 68px; transform: translateX(-50%) scale(0.95) rotate(-3deg); }
    90%, 100% { top: 68px; transform: translateX(-50%) scale(1) rotate(0deg); opacity: 0.3; }
  }
  @keyframes scene-debris-left {
    0%, 65% { opacity: 0; transform: translate(0, 0); }
    75%     { opacity: 1; transform: translate(-12px, -8px); }
    100%    { opacity: 0; transform: translate(-20px, -15px); }
  }
  @keyframes scene-debris-right {
    0%, 65% { opacity: 0; transform: translate(0, 0); }
    75%     { opacity: 1; transform: translate(12px, -8px); }
    100%    { opacity: 0; transform: translate(20px, -15px); }
  }

  /* ── INTO: 擠壓穿透邊界 ── */
  @keyframes scene-force-into {
    0%   { left: 15px; transform: scale(1); }
    40%  { left: 42%; transform: scale(1.1); }
    50%  { left: 42%; transform: scale(0.7, 1.3); }
    60%  { left: 62%; transform: scale(1.15); }
    70%  { left: 65%; transform: scale(1); }
    80%, 100% { left: 65%; transform: scale(0.95); opacity: 0.7; }
  }
  @keyframes scene-wall-squeeze {
    0%, 35% { transform: scaleX(1); }
    45%     { transform: scaleX(2.5); background: #ffab91; }
    55%     { transform: scaleX(0.6); }
    65%, 100% { transform: scaleX(1); }
  }

  /* ── OUT: 容器清空、粒子飛出 ── */
  @keyframes scene-drain-out {
    0%   { height: 90%; }
    70%  { height: 5%; }
    85%  { height: 5%; }
    100% { height: 90%; }
  }
  @keyframes scene-particle-fly-1 {
    0%, 20%  { transform: translate(0, 0) scale(1); opacity: 0; }
    30%      { opacity: 1; }
    90%      { transform: translate(65px, -15px) scale(0.4); opacity: 0; }
    100%     { transform: translate(65px, -15px) scale(0.4); opacity: 0; }
  }
  @keyframes scene-particle-fly-2 {
    0%, 20%  { transform: translate(0, 0) scale(1); opacity: 0; }
    30%      { opacity: 1; }
    90%      { transform: translate(55px, 5px) scale(0.3); opacity: 0; }
    100%     { transform: translate(55px, 5px) scale(0.3); opacity: 0; }
  }
  @keyframes scene-particle-fly-3 {
    0%, 20%  { transform: translate(0, 0) scale(1); opacity: 0; }
    30%      { opacity: 1; }
    90%      { transform: translate(60px, -5px) scale(0.3); opacity: 0; }
    100%     { transform: translate(60px, -5px) scale(0.3); opacity: 0; }
  }
  @keyframes scene-last-drop {
    0%, 70%  { opacity: 0; }
    80%, 90% { opacity: 1; }
    100%     { opacity: 0; }
  }

  /* ── OFF: 連接斷裂飛走 ── */
  @keyframes scene-link-snap {
    0%, 40%  { transform: scaleX(1); opacity: 1; }
    50%      { transform: scaleX(1.3); opacity: 1; }
    55%      { transform: scaleX(0); opacity: 0; }
    100%     { transform: scaleX(0); opacity: 0; }
  }
  @keyframes scene-detach-fly {
    0%, 45%  { transform: translateX(0) rotate(0deg); }
    55%      { transform: translateX(5px) rotate(3deg); }
    100%     { transform: translateX(70px) rotate(15deg); opacity: 0.2; }
  }

  /* ── ON: 落下貼合 ── */
  @keyframes scene-place-on {
    0%   { top: 5px; opacity: 0; transform: translateX(-50%); }
    40%  { top: 32px; opacity: 1; transform: translateX(-50%); }
    50%  { top: 40px; transform: translateX(-50%) scaleY(0.85); }
    60%  { top: 36px; transform: translateX(-50%) scaleY(1.05); }
    70%, 85% { top: 38px; transform: translateX(-50%) scaleY(1); }
    100% { top: 5px; opacity: 0; transform: translateX(-50%); }
  }
  @keyframes scene-contact-ripple {
    0%, 40%  { opacity: 0; transform: translateX(-50%) scaleX(0.3); }
    55%      { opacity: 0.7; transform: translateX(-50%) scaleX(1.5); }
    70%      { opacity: 0; transform: translateX(-50%) scaleX(2.5); }
    100%     { opacity: 0; }
  }

  /* ── OVER: 拋物線越過障礙 ── */
  @keyframes scene-arc-over {
    0%   { left: 20px; top: 65px; opacity: 0; }
    10%  { opacity: 1; }
    25%  { left: 60px; top: 15px; }
    50%  { left: 120px; top: 10px; }
    75%  { left: 180px; top: 15px; }
    90%  { left: 210px; top: 65px; opacity: 1; }
    100% { left: 210px; top: 65px; opacity: 0; }
  }

  /* ── THROUGH: 穿透多層 ── */
  @keyframes scene-penetrate-through {
    0%   { left: 15px; opacity: 0; transform: scale(0.7); }
    15%  { left: 30px; opacity: 1; transform: scale(1); }
    35%  { left: 55px; transform: scale(1.15); }
    40%  { left: 65px; transform: scale(0.9); }
    55%  { left: 105px; transform: scale(1.15); }
    60%  { left: 115px; transform: scale(0.9); }
    75%  { left: 155px; transform: scale(1.15); }
    80%  { left: 170px; transform: scale(1); }
    95%  { left: 210px; opacity: 1; }
    100% { left: 230px; opacity: 0; }
  }
  @keyframes scene-crack-flash {
    0%, 70%  { opacity: 0; transform: scale(0.5); }
    80%      { opacity: 1; transform: scale(1.3); }
    100%     { opacity: 0; transform: scale(0.5); }
  }

  /* ── BACK: 走出去折返 ── */
  @keyframes scene-go-and-return {
    0%   { left: 55px; }
    40%  { left: 180px; }
    45%  { left: 180px; transform: scaleX(-1); }
    90%  { left: 55px; transform: scaleX(-1); }
    95%  { left: 55px; transform: scaleX(1); }
    100% { left: 55px; transform: scaleX(1); }
  }
  @keyframes scene-return-arrow {
    0%, 42% { opacity: 0; }
    45%, 88% { opacity: 1; }
    92%, 100% { opacity: 0; }
  }

  /* ── AWAY: 越走越遠消失 ── */
  @keyframes scene-shrink-away {
    0%   { left: 40px; transform: scale(1); opacity: 1; }
    80%  { left: 200px; transform: scale(0.3); opacity: 0.3; }
    85%, 100% { left: 220px; transform: scale(0.1); opacity: 0; }
  }
  @keyframes scene-footprint {
    0%, 60%  { opacity: 0; }
    70%, 85% { opacity: 0.5; }
    100%     { opacity: 0; }
  }

  /* ── Simple particle fallbacks ── */
  @keyframes particle-enter {
    0%   { transform: translateX(18px) scale(0.5); opacity: 0; }
    50%  { transform: translateX(-2px) scale(1.05); opacity: 1; }
    100% { transform: translateX(18px) scale(0.5); opacity: 0; }
  }
  @keyframes particle-target {
    0%, 100% { transform: scale(1); filter: drop-shadow(0 0 3px #ff8f00); }
    50%      { transform: scale(1.2); filter: drop-shadow(0 0 10px #ff8f00); }
  }
  @keyframes particle-forward {
    0%   { transform: translateX(-8px); opacity: 0; }
    40%  { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(12px); opacity: 0; }
  }
  @keyframes particle-orbit {
    from { transform: rotate(0deg) translateX(16px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(16px) rotate(-360deg); }
  }
  @keyframes particle-merge {
    0%, 100% { transform: scaleX(1.3); opacity: 0.3; }
    50%      { transform: scaleX(1); opacity: 1; }
  }
  @keyframes particle-split {
    0%, 100% { transform: scaleX(1); }
    50%      { transform: scaleX(1.5); opacity: 0.4; }
  }
  @keyframes particle-lag {
    0%, 100% { transform: translateX(0); }
    50%      { transform: translateX(-10px); opacity: 0.4; }
  }
  @keyframes particle-standby {
    0%, 100% { opacity: 0.4; transform: scale(0.9); }
    50%      { opacity: 1; transform: scale(1.05); }
  }
  @keyframes particle-accompany {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-4px); }
  }
  @keyframes particle-balance {
    0%, 100% { transform: rotate(-5deg); }
    50%      { transform: rotate(5deg); }
  }
  @keyframes particle-aside {
    0%, 100% { transform: translateX(0); }
    50%      { transform: translateX(10px); opacity: 0.4; }
  }
  @keyframes particle-follow {
    0%   { transform: translateX(10px); opacity: 0; }
    50%  { transform: translateX(-3px); opacity: 1; }
    100% { transform: translateX(10px); opacity: 0; }
  }
`;

export default MODULAR_STYLES;
