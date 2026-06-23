import React from 'react';
import { VERBS, VERB_PARTICLES, phrasalVerbData } from '../data/phrasalVerbs';
import ModularAnim from './ModularAnim';
import IntegrationAnim from './IntegrationAnim';
import CoreTrajectoryScene from './CoreTrajectoryScene';

const INTEGRATION_KEYS = new Set([
  'Pick_up', 'Get_up', 'Take_off', 'Break_down', 'Run_away', 'Look_into'
]);

const map = {};
VERBS.forEach(verb => {
  (VERB_PARTICLES[verb] || []).forEach(particle => {
    const key = `${verb}_${particle}`;
    map[key] = function AnimEntry() {
      const data = phrasalVerbData[verb]?.[particle];

      if (data?.coreMotion && data?.meanings?.some(m => m.sceneObject)) {
        return (
          <div style={{ width: 320, height: 170 }}>
            <CoreTrajectoryScene
              coreMotion={data.coreMotion}
              meanings={data.meanings}
            />
          </div>
        );
      }

      if (INTEGRATION_KEYS.has(key)) {
        const meaning = data?.meanings?.[0]?.meaning || '';
        return <IntegrationAnim verb={verb} particle={particle} meaning={meaning} />;
      }

      return <ModularAnim verb={verb} particle={particle} animKey={key} />;
    };
  });
});

export const ANIM_MAP = map;
