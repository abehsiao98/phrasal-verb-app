import React, { useState } from 'react';
import PhrasalVerbPanel from './PhrasalVerbPanel';

const TABS = [
  { key: 'phrasal-verb', label: '動詞片語', desc: '動詞＋介係詞', color: '#0070f3' },
  { key: 'collocation', label: '搭配詞組', desc: '動詞＋名詞', color: '#7b1fa2' },
];

export default function CoreActionPanel() {
  const [activeTab, setActiveTab] = useState('phrasal-verb');

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '8px',
        padding: '16px 20px 0', maxWidth: '700px', margin: '0 auto',
      }}>
        {TABS.map(tab => {
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                flex: 1, maxWidth: '260px',
                padding: '10px 16px',
                borderRadius: '10px',
                border: `2px solid ${active ? tab.color : '#e0e0e0'}`,
                background: active ? tab.color : '#fafafa',
                color: active ? '#fff' : '#666',
                cursor: 'pointer',
                fontWeight: active ? 700 : 400,
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <div>{tab.label}</div>
              <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '2px' }}>{tab.desc}</div>
            </button>
          );
        })}
      </div>

      {activeTab === 'phrasal-verb' && <PhrasalVerbPanel />}
      {activeTab === 'collocation' && (
        <div style={{
          maxWidth: '700px', margin: '20px auto', padding: '40px 20px',
          textAlign: 'center', color: '#999', fontFamily: 'sans-serif',
          border: '1px solid #e0e0e0', borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#fff',
        }}>
          <span style={{ fontSize: '48px' }}>🔗</span>
          <h2 style={{ color: '#333', marginTop: '12px' }}>搭配詞組</h2>
          <p style={{ fontSize: '14px' }}>建置中⋯</p>
        </div>
      )}
    </div>
  );
}
