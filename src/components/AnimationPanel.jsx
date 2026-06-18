import React from 'react';

export default function AnimationPanel({ animKey, animMap }) {
  const AnimComponent = animMap[animKey];
  return (
    <div style={{
      height: '150px',
      background: 'linear-gradient(135deg, #f0f4ff, #e8f5e9)',
      borderRadius: '10px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      border: '1px solid #dce8ff',
      position: 'relative',
    }}>
      {AnimComponent ? <AnimComponent key={animKey} /> : null}
    </div>
  );
}
