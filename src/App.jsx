import React, { useState } from 'react';
import STYLES from './animations/styles';
import Sidebar from './components/Sidebar';
import CoreActionPanel from './components/CoreActionPanel';
import SensoryPanel from './components/SensoryPanel';

export default function App() {
  const [contentType, setContentType] = useState('core-action');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => window.innerWidth < 768
  );

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar
          contentType={contentType}
          onContentTypeChange={setContentType}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(prev => !prev)}
        />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {contentType === 'sentence-frame' && (
            <div style={{
              maxWidth: '700px', margin: '20px auto', padding: '40px 20px',
              textAlign: 'center', color: '#999', fontFamily: 'sans-serif',
              border: '1px solid #e0e0e0', borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#fff',
            }}>
              <span style={{ fontSize: '48px' }}>🧩</span>
              <h2 style={{ color: '#333', marginTop: '12px' }}>萬用框架</h2>
              <p style={{ fontSize: '14px' }}>建置中⋯</p>
            </div>
          )}
          {contentType === 'core-action' && <CoreActionPanel />}
          {contentType === 'sensory' && <SensoryPanel />}
        </main>
      </div>
    </>
  );
}
