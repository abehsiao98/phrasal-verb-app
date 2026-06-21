import React, { useState } from 'react';

const CIRCLES = ['①', '②', '③', '④', '⑤'];

// ── 語法類型設定 ──────────────────────────────────────────────
const GRAMMAR_CONFIG = {
  separable: {
    label: '可分離',
    color: '#1b5e20',
    bg: '#e8f5e9',
    border: '#a5d6a7',
    icon: '✂️',
    desc: '受詞可放中間或後面，但代名詞必須放中間',
  },
  inseparable: {
    label: '不可分離',
    color: '#bf360c',
    bg: '#fbe9e7',
    border: '#ffab91',
    icon: '🔒',
    desc: '受詞只能放在片語後面，永遠不能插入中間',
  },
  intransitive: {
    label: '不及物',
    color: '#4527a0',
    bg: '#ede7f6',
    border: '#ce93d8',
    icon: '🚫',
    desc: '不需要受詞，直接使用即可',
  },
};

// ── 語法說明區塊 ──────────────────────────────────────────────
function GrammarSection({ grammar, verb, particle }) {
  const [open, setOpen] = useState(false);
  const cfg = GRAMMAR_CONFIG[grammar];
  if (!cfg) return null;

  const v = verb.toLowerCase();
  const p = particle.toLowerCase();

  return (
    <div style={{
      marginBottom: '14px',
      borderRadius: '8px',
      border: `1.5px solid ${cfg.border}`,
      overflow: 'hidden',
    }}>
      {/* 標題列（可點擊展開） */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
          padding: '8px 12px', background: cfg.bg,
          border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '15px' }}>{cfg.icon}</span>
        <span style={{ fontWeight: 700, color: cfg.color, fontSize: '13px' }}>
          {cfg.label}動詞片語
        </span>
        <span style={{ fontSize: '11px', color: '#888', flex: 1 }}>{cfg.desc}</span>
        <span style={{ color: cfg.color, fontSize: '12px', flexShrink: 0 }}>
          {open ? '▲' : '▼'} 查看用法
        </span>
      </button>

      {/* 展開的規則說明 */}
      {open && (
        <div style={{ padding: '12px 14px', background: '#fff', borderTop: `1px solid ${cfg.border}` }}>
          {grammar === 'separable' && (
            <>
              {/* 名詞受詞：兩種都行 */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{
                  fontSize: '11px', fontWeight: 700, color: '#888',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
                }}>受詞是名詞：兩種都行 ✅</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <SentenceRow
                    parts={[{ text: v, color: '#1565c0' }, { text: ' up ', color: '#7b1fa2' }, { text: 'John', color: '#333' }]}
                    result="ok"
                  />
                  <SentenceRow
                    parts={[{ text: v, color: '#1565c0' }, { text: ' ', color: '' }, { text: 'John', color: '#333' }, { text: ' ' + p, color: '#7b1fa2' }]}
                    result="ok"
                  />
                </div>
              </div>

              {/* 代名詞受詞：必須插中間 */}
              <div>
                <div style={{
                  fontSize: '11px', fontWeight: 700, color: '#888',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
                }}>受詞是代名詞（him/her/it/them）：必須放中間</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <SentenceRow
                    parts={[{ text: v, color: '#1565c0' }, { text: ' ', color: '' }, { text: 'him', color: '#e65100', bold: true }, { text: ' ' + p, color: '#7b1fa2' }]}
                    result="ok"
                    label="✅ 正確"
                  />
                  <SentenceRow
                    parts={[{ text: v, color: '#1565c0' }, { text: ' ' + p + ' ', color: '#7b1fa2' }, { text: 'him', color: '#e65100', bold: true, strikethrough: true }]}
                    result="wrong"
                    label="❌ 錯誤"
                  />
                </div>
                <div style={{
                  marginTop: '8px', padding: '6px 10px', borderRadius: '6px',
                  background: '#fff8e1', border: '1px solid #ffecb3',
                  fontSize: '12px', color: '#795548', lineHeight: '1.5',
                }}>
                  💡 記憶口訣：<strong>代名詞一定要夾在動詞和介係詞中間</strong>，就像三明治的夾層
                </div>
              </div>
            </>
          )}

          {grammar === 'inseparable' && (
            <>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#888',
                textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
              }}>受詞只能放在最後，不論名詞或代名詞 🔒</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <SentenceRow
                  parts={[{ text: v + ' ' + p, color: '#bf360c' }, { text: ' him', color: '#333' }]}
                  result="ok"
                  label="✅ 正確"
                />
                <SentenceRow
                  parts={[{ text: v, color: '#bf360c' }, { text: ' him', color: '#333', strikethrough: true }, { text: ' ' + p, color: '#bf360c', strikethrough: true }]}
                  result="wrong"
                  label="❌ 不存在的說法"
                />
              </div>
              <div style={{
                marginTop: '8px', padding: '6px 10px', borderRadius: '6px',
                background: '#fbe9e7', border: '1px solid #ffccbc',
                fontSize: '12px', color: '#795548', lineHeight: '1.5',
              }}>
                💡 這個片語是一個整體，動詞和介係詞永遠黏在一起，受詞只能接在最後面
              </div>
            </>
          )}

          {grammar === 'intransitive' && (
            <>
              <div style={{
                fontSize: '11px', fontWeight: 700, color: '#888',
                textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px',
              }}>不需要受詞，直接使用 🚫</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <SentenceRow
                  parts={[{ text: v + ' ' + p, color: '#4527a0' }]}
                  result="ok"
                  label="✅ 直接使用"
                />
                <SentenceRow
                  parts={[{ text: v + ' ' + p + ' ', color: '#4527a0' }, { text: 'him', color: '#888', strikethrough: true }]}
                  result="wrong"
                  label="❌ 不需要加受詞"
                />
              </div>
              <div style={{
                marginTop: '8px', padding: '6px 10px', borderRadius: '6px',
                background: '#ede7f6', border: '1px solid #ce93d8',
                fontSize: '12px', color: '#4527a0', lineHeight: '1.5',
              }}>
                💡 這個片語表達一個完整的動作，本身就完整，不需要接受詞
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── 句子顯示列 ─────────────────────────────────────────────────
function SentenceRow({ parts, result, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '5px 10px', borderRadius: '6px',
      background: result === 'ok' ? '#f1f8e9' : '#ffebee',
      border: `1px solid ${result === 'ok' ? '#c5e1a5' : '#ffcdd2'}`,
    }}>
      {label && (
        <span style={{ fontSize: '11px', fontWeight: 700, minWidth: '50px', color: result === 'ok' ? '#33691e' : '#b71c1c' }}>
          {label}
        </span>
      )}
      <code style={{
        fontFamily: 'monospace', fontSize: '14px', fontWeight: 600, flex: 1,
        textDecoration: result === 'wrong' ? 'line-through' : 'none',
        opacity: result === 'wrong' ? 0.7 : 1,
      }}>
        {parts.map((p, i) => (
          <span
            key={i}
            style={{
              color: p.color || '#333',
              fontWeight: p.bold ? 800 : 600,
              textDecoration: p.strikethrough ? 'line-through' : 'none',
            }}
          >
            {p.text}
          </span>
        ))}
      </code>
    </div>
  );
}

// ── 待補充佔位符 ───────────────────────────────────────────────
function GrammarPending() {
  return (
    <div style={{
      marginBottom: '14px', padding: '7px 12px',
      borderRadius: '8px', background: '#fafafa',
      border: '1.5px dashed #e0e0e0',
      display: 'flex', alignItems: 'center', gap: '8px',
      fontSize: '12px', color: '#bbb',
    }}>
      <span>🔧</span>
      <span>語法說明待補充（可分離 / 不可分離 / 不及物）</span>
    </div>
  );
}

// ── 主元件 ───────────────────────────────────────────────────
export default function PhraseCard({ data, verbCore, particleDir, verb, particle }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #0070f3' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#111', fontSize: '22px' }}>{data.title}</h3>

      {/* 推理公式 */}
      {verbCore && particleDir && (
        <div style={{ marginBottom: '14px', padding: '8px 12px', borderRadius: '6px', background: '#f5f5f5', border: '1px solid #e0e0e0', fontSize: '13px', color: '#555' }}>
          <span style={{ fontWeight: 'bold', color: '#1565c0' }}>{verb}</span>
          <span style={{ color: '#888' }}>（{verbCore.core}）</span>
          <span style={{ color: '#888', margin: '0 4px' }}>+</span>
          <span style={{ fontWeight: 'bold', color: '#7b1fa2' }}>{particle}</span>
          <span style={{ color: '#888' }}>（{particleDir.spatial}）</span>
        </div>
      )}

      {/* 語法說明 */}
      {data.grammar
        ? <GrammarSection grammar={data.grammar} verb={verb} particle={particle} />
        : <GrammarPending />
      }

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
