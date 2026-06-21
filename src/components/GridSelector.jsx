import React from 'react';

export default function GridSelector({ items, selected, onChange, color, label }) {
  const isRow = items.length <= 8;
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && (
        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#666', fontSize: '13px' }}>
          {label}
        </label>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {items.map(item => (
          <button
            key={item}
            onClick={() => onChange(item)}
            style={{
              flex: isRow ? 1 : '1 0 22%',
              padding: '8px 6px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: selected === item ? color : '#f5f5f5',
              color: selected === item ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '13px',
              transition: 'all 0.2s',
              minWidth: isRow ? '40px' : '50px',
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
