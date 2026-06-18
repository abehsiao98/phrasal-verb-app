import React from 'react';

export default function VerbSelector({ verbs, selected, onChange }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#666' }}>
        1. 選擇核心動詞（基礎動作）
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {verbs.map(verb => (
          <button
            key={verb}
            onClick={() => onChange(verb)}
            style={{
              flex: '1 0 22%',
              padding: '10px 6px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: selected === verb ? '#0070f3' : '#f5f5f5',
              color: selected === verb ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              transition: 'all 0.2s',
              minWidth: '60px',
            }}
          >
            {verb}
          </button>
        ))}
      </div>
    </div>
  );
}
