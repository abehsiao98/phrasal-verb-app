import React from 'react';
import { motion } from 'framer-motion';

export default function ItemGrid({ items, selected, onChange, getColor }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '6px',
      marginBottom: '16px', padding: '12px',
      background: '#f9f9f9', borderRadius: '10px',
      border: '1px solid #eee',
    }}>
      {items.map(item => {
        const active = selected === item;
        const color = getColor(item);
        return (
          <motion.button
            key={item}
            onClick={() => onChange(item)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '5px 12px',
              borderRadius: '8px',
              border: `1.5px solid ${active ? color : '#ddd'}`,
              background: active ? color : '#fff',
              color: active ? '#fff' : '#555',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: active ? 700 : 400,
              transition: 'background 0.15s, color 0.15s, border 0.15s',
              boxShadow: active ? `0 2px 8px ${color}40` : 'none',
            }}
          >
            {item}
          </motion.button>
        );
      })}
    </div>
  );
}
