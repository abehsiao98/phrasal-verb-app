import React, { useState, useMemo } from 'react';
import { VERBS, VERB_PARTICLES, VERB_CORES, PARTICLE_DIRECTIONS, phrasalVerbData } from './data/phrasalVerbs';
import { ANIM_MAP } from './animations/index';
import STYLES from './animations/styles';
import VerbSelector from './components/VerbSelector';
import ParticleSelector from './components/ParticleSelector';
import AnimationPanel from './components/AnimationPanel';
import PhraseCard from './components/PhraseCard';
import ParticleScene from './animations/ParticleScene';
import VerbScene from './animations/VerbScene';

const ALL_PARTICLES = Object.keys(PARTICLE_DIRECTIONS);

function getVerbsWithParticle(particle) {
  return VERBS.filter(v => VERB_PARTICLES[v].includes(particle));
}

export default function App() {
  const [mode, setMode] = useState('verb');
  const [selectedVerb, setSelectedVerb] = useState(VERBS[0]);
  const [selectedParticle, setSelectedParticle] = useState(VERB_PARTICLES[VERBS[0]][0]);
  const [selectedGlobalParticle, setSelectedGlobalParticle] = useState('up');

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
  const verbCore = VERB_CORES[selectedVerb];

  const verbsForParticle = useMemo(() => getVerbsWithParticle(selectedGlobalParticle), [selectedGlobalParticle]);
  const particleInfo = PARTICLE_DIRECTIONS[selectedGlobalParticle];

  const usedParticles = useMemo(() => {
    const set = new Set();
    VERBS.forEach(v => VERB_PARTICLES[v].forEach(p => set.add(p)));
    return ALL_PARTICLES.filter(p => set.has(p));
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ maxWidth: '700px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #e0e0e0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '16px' }}>外國人大腦的片語畫面</h2>

        {/* 模式切換 */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', justifyContent: 'center' }}>
          <button onClick={() => setMode('verb')} style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '6px', backgroundColor: mode === 'verb' ? '#0070f3' : '#f5f5f5', color: mode === 'verb' ? '#fff' : '#333', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
            按動詞瀏覽
          </button>
          <button onClick={() => setMode('particle')} style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '6px', backgroundColor: mode === 'particle' ? '#7b1fa2' : '#f5f5f5', color: mode === 'particle' ? '#fff' : '#333', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
            按介係詞瀏覽
          </button>
        </div>

        {mode === 'verb' ? (
          <>
            <VerbSelector verbs={VERBS} selected={selectedVerb} onChange={handleVerbChange} />
            {/* 動詞核心動作場景 */}
            <div style={{
              height: '130px',
              background: 'linear-gradient(135deg, #e3f2fd, #e8eaf6)',
              borderRadius: '12px',
              marginBottom: '10px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #bbdefb',
            }}>
              <VerbScene key={selectedVerb} verb={selectedVerb} />
              {verbCore && (
                <div style={{
                  position: 'absolute', top: 6, left: 6, zIndex: 10,
                  background: 'rgba(255,255,255,0.9)', borderRadius: 6,
                  padding: '3px 8px', fontSize: 11, fontWeight: 'bold', color: '#1565c0',
                }}>
                  {verbCore.highlight && '⭐ '}{selectedVerb}：{verbCore.core}
                </div>
              )}
            </div>
            <ParticleSelector particles={particles} selected={selectedParticle} onChange={setSelectedParticle} />
            {/* 片語組合動畫 */}
            <AnimationPanel animKey={animKey} animMap={ANIM_MAP} />
            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 16px 0' }} />
            {currentData && <PhraseCard data={currentData} verbCore={verbCore} particleDir={PARTICLE_DIRECTIONS[selectedParticle]} verb={selectedVerb} particle={selectedParticle} />}
          </>
        ) : (
          <>
            {/* 介係詞選擇器 */}
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#666' }}>選擇介係詞（空間方向）</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {usedParticles.map(p => (
                  <button key={p} onClick={() => setSelectedGlobalParticle(p)} style={{ padding: '6px 12px', border: '1px solid #ccc', borderRadius: '6px', backgroundColor: selectedGlobalParticle === p ? '#7b1fa2' : '#f5f5f5', color: selectedGlobalParticle === p ? '#fff' : '#333', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', transition: 'all 0.2s' }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* 介係詞物理場景動畫 */}
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #f5f0ff, #f0f0ff)',
              borderRadius: '12px',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid #d1c4e9',
              position: 'relative',
            }}>
              <ParticleScene particle={selectedGlobalParticle} />
              <div style={{
                position: 'absolute', top: 8, right: 8,
                background: 'rgba(255,255,255,0.9)', borderRadius: '8px',
                padding: '4px 10px', fontSize: 13, fontWeight: 'bold', color: '#4a148c',
              }}>
                {selectedGlobalParticle.toUpperCase()}
              </div>
            </div>

            {/* 介係詞核心概念 */}
            {particleInfo && (
              <div style={{ marginBottom: '14px', padding: '10px 14px', borderRadius: '8px', background: 'linear-gradient(135deg, #f3e5f5, #e8eaf6)', border: '1px solid #ce93d8' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#4a148c', marginBottom: '4px' }}>
                  {selectedGlobalParticle.toUpperCase()} 的核心空間感：{particleInfo.spatial}
                </div>
                <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.5' }}>💡 {particleInfo.metaphor}</div>
              </div>
            )}

            {/* 所有包含該介係詞的片語列表 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {verbsForParticle.map(v => {
                const d = phrasalVerbData[v]?.[selectedGlobalParticle];
                if (!d) return null;
                const vc = VERB_CORES[v];
                return (
                  <PhraseCard key={v} data={d} verbCore={vc} particleDir={particleInfo} verb={v} particle={selectedGlobalParticle} />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
