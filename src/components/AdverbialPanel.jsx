import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ADVERBIALS,
  ADVERB_CATEGORY,
  ADVERB_CORE,
  ADVERB_SCENE,
  adverbialData,
  ADVERBIAL_CATEGORIES,
} from '../data/adverbialPhrases';
import AdverbScene from '../animations/AdverbScene';
import ScenePanel from './ScenePanel';

const CATEGORY_COLORS = {
  '時間感': '#1565c0',
  '頻率感': '#c62828',
  '即時感': '#e65100',
  '轉折感': '#4e342e',
  '方式感': '#2e7d32',
  '程度感': '#00838f',
};

const CIRCLES = ['①', '②', '③', '④', '⑤'];

export default function AdverbialPanel() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selected, setSelected] = useState(ADVERBIALS[0]);

  const categories = ['全部', ...ADVERBIAL_CATEGORIES];

  const filtered =
    selectedCategory === '全部'
      ? ADVERBIALS
      : ADVERBIALS.filter(a => ADVERB_CATEGORY[a] === selectedCategory);

  const core = ADVERB_CORE[selected];
  const data = adverbialData[selected];
  const sceneKey = ADVERB_SCENE[selected];
  const catColor = CATEGORY_COLORS[ADVERB_CATEGORY[selected]] || '#555';

  return (
    <div style={{
      maxWidth: '700px', margin: '20px auto', padding: '20px',
      fontFamily: 'sans-serif', border: '1px solid #e0e0e0',
      borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '6px' }}>
        外國人大腦的副詞片語畫面
      </h2>
      <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginBottom: '18px' }}>
        看懂時間感、頻率感、方式感背後的認知邏輯
      </p>

      {/* 類別篩選 */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px', justifyContent: 'center' }}>
        {categories.map(cat => {
          const active = selectedCategory === cat;
          const color = cat === '全部' ? '#555' : CATEGORY_COLORS[cat];
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                // 切換類別時自動選第一個
                const next = cat === '全部'
                  ? ADVERBIALS[0]
                  : ADVERBIALS.find(a => ADVERB_CATEGORY[a] === cat) || ADVERBIALS[0];
                setSelected(next);
              }}
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

      {/* 副詞片語選擇器 */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '6px',
        marginBottom: '16px', padding: '12px',
        background: '#f9f9f9', borderRadius: '10px',
        border: '1px solid #eee',
      }}>
        {filtered.map(adv => {
          const active = selected === adv;
          const color = CATEGORY_COLORS[ADVERB_CATEGORY[adv]] || '#555';
          return (
            <motion.button
              key={adv}
              onClick={() => setSelected(adv)}
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
              {adv}
            </motion.button>
          );
        })}
      </div>

      {/* 動畫場景 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <ScenePanel
            variant="adverb"
            label={`${selected.toUpperCase()} — ${core?.spatial || ''}`}
            labelColor={catColor}
          >
            {/* 自定義漸層背景 */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${catColor}12, ${catColor}06)`,
              border: `1px solid ${catColor}30`,
              borderRadius: '12px',
            }} />
            <AdverbScene key={selected} sceneKey={sceneKey} />
          </ScenePanel>

          {/* 認知說明框 */}
          {core && (
            <div style={{
              marginBottom: '14px', padding: '10px 14px',
              borderRadius: '8px',
              background: `linear-gradient(135deg, ${catColor}10, ${catColor}06)`,
              border: `1px solid ${catColor}30`,
              fontSize: '12px', color: '#555', lineHeight: '1.6',
            }}>
              <span style={{ fontWeight: 700, color: catColor }}>🧠 外國人的腦袋畫面：</span>
              {' '}{core.metaphor}
            </div>
          )}

          {/* 詳細卡片 */}
          {data && (
            <div style={{
              backgroundColor: '#f9f9f9', padding: '20px',
              borderRadius: '8px', borderLeft: `5px solid ${catColor}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, color: '#111', fontSize: '20px' }}>{data.title}</h3>
                <span style={{
                  fontSize: '11px', padding: '2px 8px', borderRadius: '12px',
                  background: `${catColor}18`, color: catColor, fontWeight: 600,
                }}>
                  {ADVERB_CATEGORY[selected]}
                </span>
              </div>

              {/* 意思列表 */}
              <div style={{ marginBottom: '14px' }}>
                {data.meanings.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: i < data.meanings.length - 1 ? '14px' : 0,
                      paddingLeft: '10px',
                      borderLeft: `3px solid ${catColor}50`,
                    }}
                  >
                    <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '4px', fontSize: '15px' }}>
                      {CIRCLES[i]} {m.meaning}
                    </div>
                    {m.note && (
                      <div style={{ fontSize: '13px', color: '#666', marginBottom: '6px', lineHeight: '1.5' }}>
                        {m.note}
                      </div>
                    )}
                    <code style={{
                      display: 'block',
                      background: '#eaeaea', padding: '7px 12px',
                      borderRadius: '6px', color: '#333',
                      fontFamily: 'monospace', fontSize: '13px',
                    }}>
                      {m.example}
                    </code>
                  </div>
                ))}
              </div>

              {/* 提示 */}
              {data.tip && (
                <div style={{
                  padding: '8px 12px', borderRadius: '6px',
                  background: '#fff', border: '1px solid #eee',
                  fontSize: '12px', color: '#555', marginBottom: '10px',
                }}>
                  {data.tip}
                </div>
              )}

              {/* 比較 */}
              {data.compareWith && (
                <div style={{ fontSize: '12px', color: '#888' }}>
                  <span style={{ fontWeight: 600, color: '#666' }}>比較：</span>
                  {' '}{data.compareWith}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
