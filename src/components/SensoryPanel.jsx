import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SENSORY_ITEMS,
  SENSORY_CATEGORY,
  SENSORY_CORE,
  SENSORY_SCENE,
  sensoryData,
  SENSORY_CATEGORIES,
} from '../data/sensoryParams';
import SensoryScene from '../animations/SensoryScene';
import ScenePanel from './ScenePanel';
import CategoryTabs from './CategoryTabs';
import ItemGrid from './ItemGrid';

const CATEGORY_COLORS = {
  '時間感': '#1565c0',
  '頻率感': '#c62828',
  '即時感': '#e65100',
  '方式感': '#2e7d32',
  '程度感': '#00838f',
};

const CIRCLES = ['①', '②', '③', '④', '⑤'];

export default function SensoryPanel() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selected, setSelected] = useState(SENSORY_ITEMS[0]);

  const filtered =
    selectedCategory === '全部'
      ? SENSORY_ITEMS
      : SENSORY_ITEMS.filter(a => SENSORY_CATEGORY[a] === selectedCategory);

  const core = SENSORY_CORE[selected];
  const data = sensoryData[selected];
  const sceneKey = SENSORY_SCENE[selected];
  const catColor = CATEGORY_COLORS[SENSORY_CATEGORY[selected]] || '#555';

  return (
    <div style={{
      maxWidth: '700px', margin: '20px auto', padding: '20px',
      fontFamily: 'sans-serif', border: '1px solid #e0e0e0',
      borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '6px' }}>
        外國人大腦的感受參數畫面
      </h2>
      <p style={{ textAlign: 'center', fontSize: '13px', color: '#888', marginBottom: '18px' }}>
        看懂五大感受參數背後的認知邏輯
      </p>

      <CategoryTabs
        categories={['全部', ...SENSORY_CATEGORIES]}
        selected={selectedCategory}
        onChange={(cat) => {
          setSelectedCategory(cat);
          const next = cat === '全部'
            ? SENSORY_ITEMS[0]
            : SENSORY_ITEMS.find(a => SENSORY_CATEGORY[a] === cat) || SENSORY_ITEMS[0];
          setSelected(next);
        }}
        colorMap={CATEGORY_COLORS}
        defaultColor="#555"
      />

      <ItemGrid
        items={filtered}
        selected={selected}
        onChange={setSelected}
        getColor={(item) => CATEGORY_COLORS[SENSORY_CATEGORY[item]] || '#555'}
      />

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
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${catColor}12, ${catColor}06)`,
              border: `1px solid ${catColor}30`,
              borderRadius: '12px',
            }} />
            <SensoryScene key={selected} sceneKey={sceneKey} />
          </ScenePanel>

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
                  {SENSORY_CATEGORY[selected]}
                </span>
              </div>

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

              {data.tip && (
                <div style={{
                  padding: '8px 12px', borderRadius: '6px',
                  background: '#fff', border: '1px solid #eee',
                  fontSize: '12px', color: '#555', marginBottom: '10px',
                }}>
                  {data.tip}
                </div>
              )}

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
