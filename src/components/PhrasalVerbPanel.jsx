import React, { useState, useMemo } from 'react';
import { VERBS, VERB_PARTICLES, VERB_CORES, PARTICLE_DIRECTIONS, phrasalVerbData } from '../data/phrasalVerbs';
import VerbScene from '../animations/VerbScene';
import ParticleScene from '../animations/ParticleScene';
import IntegrationAnim from '../animations/IntegrationAnim';
import GridSelector from './GridSelector';
import ScenePanel from './ScenePanel';
import PhraseCard from './PhraseCard';

const ALL_PARTICLES = Object.keys(PARTICLE_DIRECTIONS);

function getVerbsWithParticle(particle) {
  return VERBS.filter(v => VERB_PARTICLES[v]?.includes(particle));
}

const USED_PARTICLES = (() => {
  const set = new Set();
  VERBS.forEach(v => VERB_PARTICLES[v]?.forEach(p => set.add(p)));
  return ALL_PARTICLES.filter(p => set.has(p));
})();

export default function PhrasalVerbPanel() {
  const [mode, setMode] = useState('verb');
  const [selectedVerb, setSelectedVerb] = useState(VERBS[0]);
  const [selectedParticle, setSelectedParticle] = useState(VERB_PARTICLES[VERBS[0]][0]);

  const verbsForParticle = useMemo(
    () => getVerbsWithParticle(selectedParticle),
    [selectedParticle]
  );

  function handleModeChange(newMode) {
    setMode(newMode);
    if (newMode === 'particle') {
      const verbs = getVerbsWithParticle(selectedParticle);
      if (!verbs.includes(selectedVerb)) {
        setSelectedVerb(verbs[0]);
      }
    } else {
      const parts = VERB_PARTICLES[selectedVerb] || [];
      if (!parts.includes(selectedParticle)) {
        setSelectedParticle(parts[0]);
      }
    }
  }

  function handleVerbChange(verb) {
    setSelectedVerb(verb);
    if (mode === 'verb') {
      const parts = VERB_PARTICLES[verb] || [];
      if (!parts.includes(selectedParticle)) {
        setSelectedParticle(parts[0]);
      }
    }
  }

  function handleParticleChange(particle) {
    setSelectedParticle(particle);
    if (mode === 'particle') {
      const verbs = getVerbsWithParticle(particle);
      if (!verbs.includes(selectedVerb)) {
        setSelectedVerb(verbs[0]);
      }
    }
  }

  const particles = VERB_PARTICLES[selectedVerb] || [];
  const currentData = phrasalVerbData[selectedVerb]?.[selectedParticle];
  const verbCore = VERB_CORES[selectedVerb];
  const particleDir = PARTICLE_DIRECTIONS[selectedParticle];
  const meaning = currentData?.meanings?.[0]?.meaning || '';

  const verbLabel = verbCore
    ? `${verbCore.highlight ? '⭐ ' : ''}${selectedVerb}：${verbCore.core}`
    : selectedVerb;

  const particleLabel = particleDir
    ? `${selectedParticle.toUpperCase()}：${particleDir.spatial}`
    : selectedParticle;

  return (
    <div style={{
      maxWidth: '700px', margin: '20px auto', padding: '20px',
      fontFamily: 'sans-serif', border: '1px solid #e0e0e0',
      borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '16px' }}>
        外國人大腦的片語畫面
      </h2>

      {/* 模式切換 */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
        <button
          onClick={() => handleModeChange('verb')}
          style={{
            padding: '8px 16px', border: '1px solid #ccc', borderRadius: '6px',
            backgroundColor: mode === 'verb' ? '#0070f3' : '#f5f5f5',
            color: mode === 'verb' ? '#fff' : '#333',
            cursor: 'pointer', fontWeight: 'bold', fontSize: '13px',
          }}
        >
          按動詞瀏覽
        </button>
        <button
          onClick={() => handleModeChange('particle')}
          style={{
            padding: '8px 16px', border: '1px solid #ccc', borderRadius: '6px',
            backgroundColor: mode === 'particle' ? '#7b1fa2' : '#f5f5f5',
            color: mode === 'particle' ? '#fff' : '#333',
            cursor: 'pointer', fontWeight: 'bold', fontSize: '13px',
          }}
        >
          按介係詞瀏覽
        </button>
      </div>

      {mode === 'verb' ? (
        <>
          <GridSelector
            items={VERBS}
            selected={selectedVerb}
            onChange={handleVerbChange}
            color="#0070f3"
            label="1. 選擇核心動詞（基礎動作）"
          />
          <ScenePanel variant="verb" label={verbLabel}>
            <VerbScene key={selectedVerb} verb={selectedVerb} />
          </ScenePanel>
          <GridSelector
            items={particles}
            selected={selectedParticle}
            onChange={handleParticleChange}
            color="#7b1fa2"
            label="2. 選擇介系詞（空間方向）"
          />
        </>
      ) : (
        <>
          <GridSelector
            items={USED_PARTICLES}
            selected={selectedParticle}
            onChange={handleParticleChange}
            color="#7b1fa2"
            label="1. 選擇介係詞（空間方向）"
          />
          <ScenePanel variant="particle" label={particleLabel}>
            <ParticleScene key={selectedParticle} particle={selectedParticle} />
          </ScenePanel>
          {particleDir && (
            <div style={{
              marginBottom: '12px', padding: '8px 12px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #f3e5f5, #e8eaf6)',
              border: '1px solid #ce93d8', fontSize: '12px', color: '#666', lineHeight: '1.5',
            }}>
              💡 {particleDir.metaphor}
            </div>
          )}
          <GridSelector
            items={verbsForParticle}
            selected={selectedVerb}
            onChange={handleVerbChange}
            color="#0070f3"
            label="2. 選擇動詞"
          />
        </>
      )}

      <div style={{
        borderRadius: '12px',
        marginBottom: '16px',
        overflow: 'hidden',
        border: '1px solid #e0e0e0',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
      }}>
        <IntegrationAnim
          key={`${selectedVerb}_${selectedParticle}`}
          verb={selectedVerb}
          particle={selectedParticle}
          meaning={meaning}
        />
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 16px 0' }} />

      {currentData && (
        <PhraseCard
          data={currentData}
          verbCore={verbCore}
          particleDir={particleDir}
          verb={selectedVerb}
          particle={selectedParticle}
        />
      )}
    </div>
  );
}
