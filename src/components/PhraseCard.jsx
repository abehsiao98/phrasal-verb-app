import React from 'react';

const CIRCLES = ['①', '②', '③', '④', '⑤'];

export default function PhraseCard({ data, verbCore, particleDir, verb, particle }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #0070f3' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#111', fontSize: '22px' }}>{data.title}</h3>

      {/* 推理公式：動詞核心 + 介係詞方向（極簡版） */}
      {verbCore && particleDir && (
        <div style={{ marginBottom: '14px', padding: '8px 12px', borderRadius: '6px', background: '#f5f5f5', border: '1px solid #e0e0e0', fontSize: '13px', color: '#555' }}>
          <span style={{ fontWeight: 'bold', color: '#1565c0' }}>{verb}</span>
          <span style={{ color: '#888' }}>（{verbCore.core}）</span>
          <span style={{ color: '#888', margin: '0 4px' }}>+</span>
          <span style={{ fontWeight: 'bold', color: '#7b1fa2' }}>{particle}</span>
          <span style={{ color: '#888' }}>（{particleDir.spatial}）</span>
        </div>
      )}

      {/* 延伸意思 */}
      <div>
        {data.meanings.map((m, i) => (
          <div key={i} style={{ marginBottom: i < data.meanings.length - 1 ? '14px' : '0', paddingLeft: '8px', borderLeft: '3px solid #e0e0e0' }}>
            <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '3px', fontSize: '15px' }}>
              {CIRCLES[i]} {m.meaning}
            </div>
            {m.note && (
              <div style={{ fontSize: '13px', color: '#555', marginBottom: '4px', lineHeight: '1.5' }}>{m.note}</div>
            )}
            <code style={{ display: 'block', backgroundColor: '#eaeaea', padding: '6px 10px', borderRadius: '4px', color: '#333', fontFamily: 'monospace', fontSize: '13px' }}>
              {m.example}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
