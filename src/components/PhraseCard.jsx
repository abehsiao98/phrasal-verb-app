import React from 'react';

export default function PhraseCard({ data }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #0070f3' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#111', fontSize: '22px' }}>{data.title}</h3>
      <div style={{ marginBottom: '12px' }}>
        <strong style={{ color: '#d32f2f', display: 'block', marginBottom: '4px' }}>👁️ 字面上的物理畫面：</strong>
        <span style={{ color: '#444', lineHeight: '1.5' }}>{data.spatial}</span>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong style={{ color: '#0070f3', display: 'block', marginBottom: '4px' }}>🧠 外國人大腦的抽象比喻：</strong>
        <span style={{ color: '#444', lineHeight: '1.5' }}>{data.mental}</span>
      </div>
      <div style={{ paddingTop: '12px', borderTop: '1px dashed #ddd' }}>
        <strong style={{ color: '#388e3c', display: 'block', marginBottom: '4px' }}>💻 實戰造句示範：</strong>
        <code style={{ display: 'block', backgroundColor: '#eaeaea', padding: '8px 12px', borderRadius: '4px', color: '#333', fontFamily: 'monospace', fontSize: '14px' }}>
          {data.example}
        </code>
      </div>
    </div>
  );
}
