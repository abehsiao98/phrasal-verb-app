import React from 'react';
import { VERBS, VERB_PARTICLES, phrasalVerbData } from '../data/phrasalVerbs';
import ModularAnim from './ModularAnim';
import IntegrationAnim from './IntegrationAnim';

const map = {};
VERBS.forEach(verb => {
  (VERB_PARTICLES[verb] || []).forEach(particle => {
    const key = `${verb}_${particle}`;
    map[key] = function AnimEntry() {
      // 為 Pick up, Get up, Take off, Break down, Run away, Look into 使用新的整合式動畫演示
      if (key === 'Pick_up' || key === 'Get_up' || key === 'Take_off' || key === 'Break_down' || key === 'Run_away' || key === 'Look_into') {
        const data = phrasalVerbData[verb]?.[particle];
        const meaning = data?.meanings?.[0]?.meaning || '';
        return <IntegrationAnim verb={verb} particle={particle} meaning={meaning} />;
      }
      return <ModularAnim verb={verb} particle={particle} animKey={key} />;
    };
  });
});

export const ANIM_MAP = map;
