import React, { useState } from 'react';
import STYLES from './animations/styles';
import Sidebar from './components/Sidebar';
import PhrasalVerbPanel from './components/PhrasalVerbPanel';
import AdverbialPanel from './components/AdverbialPanel';

export default function App() {
  const [contentType, setContentType] = useState('phrasal-verb');
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
          {contentType === 'phrasal-verb' && <PhrasalVerbPanel />}
          {contentType === 'adverbial' && <AdverbialPanel />}
        </main>
      </div>
    </>
  );
}
