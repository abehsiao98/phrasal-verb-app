import React from 'react';

const CIRCLES = ['①', '②', '③', '④', '⑤'];

function UsageLine({ grammar, followedBy, title }) {
  if (!grammar) return null;
  const tags = Array.isArray(grammar) ? grammar : [grammar];
  const phrase = title.toLowerCase();
  const words = phrase.split(' ');

  const style = {
    fontSize: '12px', color: '#888', marginBottom: '4px', lineHeight: '1.5',
  };
  const slotStyle = {
    fontSize: '12px', color: '#6a1b9a', marginBottom: '4px', lineHeight: '1.5',
  };
  const it = <span style={{ fontWeight: 700, color: '#e65100' }}>it</span>;

  let grammarLine = null;
  if (tags.includes('separable')) {
    const verbPart = words.slice(0, -1).join(' ');
    const lastWord = words[words.length - 1];
    grammarLine = (
      <div style={style}>
        ✂️ 代名詞一定夾中間：{verbPart} {it} {lastWord} ／名詞前後都行
      </div>
    );
  } else if (tags.includes('inseparable')) {
    grammarLine = (
      <div style={style}>
        🔒 不能拆：{phrase} {it}
      </div>
    );
  } else if (tags.includes('intransitive')) {
    grammarLine = (
      <div style={style}>
        （不用接受詞，直接說 {phrase}）
      </div>
    );
  }

  const slotLine = followedBy ? (
    <div style={slotStyle}>
      🔌 後面接：<span style={{ fontWeight: 700 }}>{followedBy}</span>
    </div>
  ) : null;

  return <>{grammarLine}{slotLine}</>;
}

export default function PhraseCard({ data }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #0070f3' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#111', fontSize: '22px' }}>{data.title}</h3>

      <div>
        {data.meanings.map((m, i) => (
          <div key={i} style={{
            marginBottom: i < data.meanings.length - 1 ? '16px' : '0',
            paddingLeft: '10px',
            borderLeft: '3px solid #e0e0e0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
              {m.sceneObject && (
                <span style={{ fontSize: '18px' }}>{m.sceneObject.emoji}</span>
              )}
              <span style={{ fontWeight: 'bold', color: '#333', fontSize: '15px' }}>
                {CIRCLES[i]} {m.meaning}
              </span>
              {m.plainEnglish && (
                <span style={{
                  fontSize: '12px', fontWeight: 700, color: '#0070f3',
                  background: '#e3f2fd', padding: '1px 8px', borderRadius: '10px',
                }}>
                  = {m.plainEnglish}
                </span>
              )}
            </div>

            {m.note && (
              <div style={{ fontSize: '13px', color: '#555', marginBottom: '4px', lineHeight: '1.5' }}>{m.note}</div>
            )}

            <UsageLine grammar={m.grammar} followedBy={m.followedBy} title={data.title} />

            <code style={{ display: 'block', backgroundColor: '#eaeaea', padding: '6px 10px', borderRadius: '4px', color: '#333', fontFamily: 'monospace', fontSize: '13px' }}>
              {m.example}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
