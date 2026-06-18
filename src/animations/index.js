import {
  LookIntoAnim, LookDownAnim, LookUpAnim, LookOutAnim,
  LookOverAnim, LookThroughAnim, LookBackAnim, LookAfterAnim, LookForAnim,
} from './Look';

import {
  TurnIntoAnim, TurnDownAnim, TurnUpAnim, TurnOutAnim,
  TurnOverAnim, TurnOffAnim, TurnOnAnim, TurnAroundAnim, TurnBackAnim,
} from './Turn';

import {
  BringIntoAnim, BringDownAnim, BringUpAnim, BringOutAnim,
  BringBackAnim, BringAboutAnim, BringForwardAnim, BringTogetherAnim, BringInAnim,
} from './Bring';

import {
  RunIntoAnim, RunDownAnim, RunUpAnim, RunOutAnim,
  RunOverAnim, RunThroughAnim, RunAwayAnim, RunAcrossAnim, RunOffAnim,
} from './Run';

import {
  GetIntoAnim, GetDownAnim, GetUpAnim, GetOutAnim,
  GetOverAnim, GetThroughAnim, GetAlongAnim, GetBackAnim,
  GetAwayAnim, GetOnAnim, GetOffAnim, GetByAnim,
} from './Get';

import {
  BreakIntoAnim, BreakDownAnim, BreakUpAnim, BreakOutAnim,
  BreakThroughAnim, BreakOffAnim, BreakAwayAnim, BreakEvenAnim,
} from './Break';

import {
  GoIntoAnim, GoDownAnim, GoUpAnim, GoOutAnim,
  GoOverAnim, GoThroughAnim, GoOnAnim, GoBackAnim,
  GoOffAnim, GoAheadAnim, GoForAnim,
} from './Go';

import {
  SetIntoAnim, SetDownAnim, SetUpAnim, SetOutAnim,
  SetOffAnim, SetBackAnim, SetAsideAnim, SetAboutAnim,
} from './Set';

export const ANIM_MAP = {
  // Look (9)
  Look_into:    LookIntoAnim,
  Look_down:    LookDownAnim,
  Look_up:      LookUpAnim,
  Look_out:     LookOutAnim,
  Look_over:    LookOverAnim,
  Look_through: LookThroughAnim,
  Look_back:    LookBackAnim,
  Look_after:   LookAfterAnim,
  Look_for:     LookForAnim,

  // Turn (9)
  Turn_into:    TurnIntoAnim,
  Turn_down:    TurnDownAnim,
  Turn_up:      TurnUpAnim,
  Turn_out:     TurnOutAnim,
  Turn_over:    TurnOverAnim,
  Turn_off:     TurnOffAnim,
  Turn_on:      TurnOnAnim,
  Turn_around:  TurnAroundAnim,
  Turn_back:    TurnBackAnim,

  // Bring (9)
  Bring_into:    BringIntoAnim,
  Bring_down:    BringDownAnim,
  Bring_up:      BringUpAnim,
  Bring_out:     BringOutAnim,
  Bring_back:    BringBackAnim,
  Bring_about:   BringAboutAnim,
  Bring_forward: BringForwardAnim,
  Bring_together:BringTogetherAnim,
  Bring_in:      BringInAnim,

  // Run (9)
  Run_into:    RunIntoAnim,
  Run_down:    RunDownAnim,
  Run_up:      RunUpAnim,
  Run_out:     RunOutAnim,
  Run_over:    RunOverAnim,
  Run_through: RunThroughAnim,
  Run_away:    RunAwayAnim,
  Run_across:  RunAcrossAnim,
  Run_off:     RunOffAnim,

  // Get (12)
  Get_into:    GetIntoAnim,
  Get_down:    GetDownAnim,
  Get_up:      GetUpAnim,
  Get_out:     GetOutAnim,
  Get_over:    GetOverAnim,
  Get_through: GetThroughAnim,
  Get_along:   GetAlongAnim,
  Get_back:    GetBackAnim,
  Get_away:    GetAwayAnim,
  Get_on:      GetOnAnim,
  Get_off:     GetOffAnim,
  Get_by:      GetByAnim,

  // Break (8)
  Break_into:    BreakIntoAnim,
  Break_down:    BreakDownAnim,
  Break_up:      BreakUpAnim,
  Break_out:     BreakOutAnim,
  Break_through: BreakThroughAnim,
  Break_off:     BreakOffAnim,
  Break_away:    BreakAwayAnim,
  Break_even:    BreakEvenAnim,

  // Go (11)
  Go_into:    GoIntoAnim,
  Go_down:    GoDownAnim,
  Go_up:      GoUpAnim,
  Go_out:     GoOutAnim,
  Go_over:    GoOverAnim,
  Go_through: GoThroughAnim,
  Go_on:      GoOnAnim,
  Go_back:    GoBackAnim,
  Go_off:     GoOffAnim,
  Go_ahead:   GoAheadAnim,
  Go_for:     GoForAnim,

  // Set (8)
  Set_into:  SetIntoAnim,
  Set_down:  SetDownAnim,
  Set_up:    SetUpAnim,
  Set_out:   SetOutAnim,
  Set_off:   SetOffAnim,
  Set_back:  SetBackAnim,
  Set_aside: SetAsideAnim,
  Set_about: SetAboutAnim,
};

// ── How to add a new verb ──────────────────────────────────────────────────
// 1. src/data/phrasalVerbs.js  → add to VERBS[], VERB_PARTICLES{}, phrasalVerbData{}
// 2. src/animations/NewVerb.jsx → export one Anim component per particle
// 3. Here → import and register in ANIM_MAP as `NewVerb_particle`
