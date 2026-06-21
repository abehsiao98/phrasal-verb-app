import React from 'react';

export default function ScenePanel({ children, variant, label, labelColor }) {
  const isVerb = variant === 'verb';
  const isAdverb = variant === 'adverb';
  return (
    <div style={{
      height: '130px',
      background: isVerb
        ? 'linear-gradient(135deg, #e3f2fd, #e8eaf6)'
        : isAdverb
        ? '#fff'
        : 'linear-gradient(135deg, #f5f0ff, #f0f0ff)',
      borderRadius: '12px',
      marginBottom: '10px',
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid ${isVerb ? '#bbdefb' : isAdverb ? '#e0e0e0' : '#d1c4e9'}`,
    }}>
      {children}
      {label && (
        <div style={{
          position: 'absolute', top: 6, left: 6, zIndex: 10,
          background: 'rgba(255,255,255,0.9)', borderRadius: 6,
          padding: '3px 8px', fontSize: 11, fontWeight: 'bold',
          color: labelColor || (isVerb ? '#1565c0' : '#4a148c'),
          maxWidth: '90%',
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
