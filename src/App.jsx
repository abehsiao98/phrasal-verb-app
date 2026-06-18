import React, { useState } from 'react';
import { VERBS, VERB_PARTICLES, phrasalVerbData } from './data/phrasalVerbs';
import { ANIM_MAP } from './animations/index';
import STYLES from './animations/styles';
import VerbSelector from './components/VerbSelector';
import ParticleSelector from './components/ParticleSelector';
import AnimationPanel from './components/AnimationPanel';
import PhraseCard from './components/PhraseCard';

export default function App() {
  const [selectedVerb, setSelectedVerb] = useState(VERBS[0]);
  const [selectedParticle, setSelectedParticle] = useState(VERB_PARTICLES[VERBS[0]][0]);

  function handleVerbChange(verb) {
    setSelectedVerb(verb);
    const particles = VERB_PARTICLES[verb];
    if (!particles.includes(selectedParticle)) {
      setSelectedParticle(particles[0]);
    }
  }

  const particles = VERB_PARTICLES[selectedVerb];
  const currentData = phrasalVerbData[selectedVerb]?.[selectedParticle];
  const animKey = `${selectedVerb}_${selectedParticle}`;

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ maxWidth: '650px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #e0e0e0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>外國人大腦的片語畫面</h2>
        <VerbSelector verbs={VERBS} selected={selectedVerb} onChange={handleVerbChange} />
        <ParticleSelector particles={particles} selected={selectedParticle} onChange={setSelectedParticle} />
        <AnimationPanel animKey={animKey} animMap={ANIM_MAP} />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 20px 0' }} />
        {currentData && <PhraseCard data={currentData} />}
      </div>
    </>
  );
}
