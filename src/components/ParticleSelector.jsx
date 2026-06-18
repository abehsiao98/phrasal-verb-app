import React from 'react';

export default function ParticleSelector({ particles, selected, onChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#666' }}>
        2. 選擇介系詞（空間方向）
      </label>
      <div style={{ display: 'flex', gap: '8px' }}>
        {particles.map(particle => (
          <button
            key={particle}
            onClick={() => onChange(particle)}
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: selected === particle ? '#00c853' : '#f5f5f5',
              color: selected === particle ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
            }}
          >
            {particle}
          </button>
        ))}
      </div>
    </div>
  );
}
