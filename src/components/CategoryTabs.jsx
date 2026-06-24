import React from 'react';

export default function CategoryTabs({ categories, selected, onChange, colorMap, defaultColor = '#555' }) {
  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px', justifyContent: 'center' }}>
      {categories.map(cat => {
        const active = selected === cat;
        const color = colorMap[cat] || defaultColor;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: `2px solid ${active ? color : '#e0e0e0'}`,
              background: active ? color : '#fafafa',
              color: active ? '#fff' : '#666',
              cursor: 'pointer',
              fontWeight: active ? 700 : 400,
              fontSize: '13px',
              transition: 'all 0.15s',
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
