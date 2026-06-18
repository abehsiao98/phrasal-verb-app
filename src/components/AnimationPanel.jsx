import React from 'react';

export default function AnimationPanel({ animKey, animMap }) {
  const AnimComponent = animMap[animKey];
  return (
    <div style={{
      height: '240px',
      borderRadius: '12px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #e0e0e0',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
    }}>
      {AnimComponent ? <AnimComponent key={animKey} /> : null}
    </div>
  );
}
