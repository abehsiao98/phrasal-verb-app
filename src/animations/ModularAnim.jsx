import React from 'react';
import { VERB_ICONS, MEANING_ICONS } from './modularData';
import VerbScene from './VerbScene';
import ParticleScene from './ParticleScene';

function getPhaseAnim(index, total) {
  if (total <= 1) return 'none';
  if (total === 2) return `phase-${index + 1}of2 6s ease-in-out infinite`;
  return `phase-${index + 1}of3 7.5s ease-in-out infinite`;
}

export default function ModularAnim({ verb, particle, animKey }) {
  const meanings = MEANING_ICONS[animKey] || [{ emoji: '❓', label: '?' }];
  const count = meanings.length;

  return (
    <div style={{ position: 'relative', width: 320, height: 170 }}>

      {/* ── 左半：動詞場景 ── */}
      <div style={{
        position: 'absolute', left: 0, top: 0, width: '48%', height: '100%',
        overflow: 'hidden', borderRadius: '12px 0 0 12px',
        background: 'linear-gradient(135deg, #e3f2fd, #e8eaf6)',
      }}>
        <VerbScene verb={verb} />
      </div>

      {/* ── 中間 + 號 ── */}
      <div style={{
        position: 'absolute', left: '48%', top: '50%', transform: 'translate(-50%, -50%)',
        zIndex: 20, width: 28, height: 28, borderRadius: '50%',
        background: '#fff', border: '2px solid #ddd',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, fontWeight: 'bold', color: '#888',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}>+</div>

      {/* ── 右半：介係詞場景 ── */}
      <div style={{
        position: 'absolute', right: 0, top: 0, width: '48%', height: '100%',
        overflow: 'hidden', borderRadius: '0 12px 12px 0',
        background: 'linear-gradient(135deg, #f3e5f5, #ede7f6)',
      }}>
        <ParticleScene particle={particle} />
      </div>

      {/* ── 意思 Icon（右下角浮動） ── */}
      <div style={{
        position: 'absolute', right: 4, bottom: 4, zIndex: 20,
        background: 'rgba(255,255,255,0.92)', borderRadius: '8px',
        padding: '4px 8px', boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        minWidth: 60, textAlign: 'center',
      }}>
        {meanings.map((m, i) => (
          <div key={i} style={{
            position: i === 0 ? 'relative' : 'absolute',
            top: i === 0 ? undefined : 0, left: i === 0 ? undefined : 0, right: i === 0 ? undefined : 0,
            display: 'flex', alignItems: 'center', gap: 3,
            justifyContent: 'center', padding: '1px 0',
            animation: getPhaseAnim(i, count),
            opacity: count <= 1 ? 1 : undefined,
          }}>
            <span style={{ fontSize: 18 }}>{m.emoji}</span>
            <span style={{ fontSize: 10, fontWeight: 'bold', color: '#333' }}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
