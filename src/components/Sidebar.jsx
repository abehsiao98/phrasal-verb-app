import React from 'react';

const CONTENT_TYPES = [
  { type: 'sentence-frame', label: '萬用框架', icon: '🧩' },
  { type: 'core-action', label: '核心動作', icon: '🎬' },
  { type: 'sensory', label: '感受參數', icon: '🎛️' },
];

export default function Sidebar({ contentType, onContentTypeChange, collapsed, onToggleCollapse }) {
  const width = collapsed ? 56 : 200;

  return (
    <nav
      role="navigation"
      style={{
        width,
        minWidth: width,
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg, #fff)',
        borderRight: '1px solid var(--border, #e0e0e0)',
        transition: 'width 0.2s ease, min-width 0.2s ease',
        overflow: 'hidden',
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* 收合/展開按鈕 */}
      <button
        onClick={onToggleCollapse}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-end',
          padding: collapsed ? '12px 0' : '12px 14px',
          background: 'none',
          border: 'none',
          borderBottom: '1px solid var(--border, #e0e0e0)',
          cursor: 'pointer',
          color: 'var(--text, #666)',
          fontSize: '18px',
          width: '100%',
          minHeight: 48,
        }}
        aria-label={collapsed ? '展開側邊欄' : '收合側邊欄'}
      >
        {collapsed ? '»' : '«'}
      </button>

      {/* 導覽項目 */}
      <div style={{ flex: 1, paddingTop: 8 }}>
        {CONTENT_TYPES.map(item => {
          const active = contentType === item.type;
          return (
            <button
              key={item.type}
              onClick={() => onContentTypeChange(item.type)}
              aria-label={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: collapsed ? '10px 0' : '10px 14px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                background: active ? 'rgba(0, 112, 243, 0.08)' : 'transparent',
                border: 'none',
                borderLeft: active ? '3px solid #0070f3' : '3px solid transparent',
                cursor: 'pointer',
                color: active ? '#0070f3' : 'var(--text-h, #333)',
                fontSize: '14px',
                fontWeight: active ? 600 : 400,
                whiteSpace: 'nowrap',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
