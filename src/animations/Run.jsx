import React from 'react';
import { C } from './utils';

export function RunIntoAnim() {
  return (
    <div style={{ position: 'relative', width: 250, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 38, left: 55, width: 46, height: 46, background: 'linear-gradient(135deg, #1565c0, #1e88e5)', borderRadius: 8, animation: 'rush 2.8s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold', boxShadow: '0 3px 8px rgba(0,0,0,0.3)' }}>▶</div>
      <div style={{ position: 'absolute', top: 18, right: 25, width: 75, height: 75, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #ef5350, #b71c1c)', animation: 'wall-shake 2.8s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 'bold', boxShadow: '0 3px 10px rgba(183,28,28,0.4)' }}>WALL</div>
      <div style={{ position: 'absolute', top: 4, right: 18, animation: 'bug-pop 2.8s ease-in-out infinite', fontSize: 16, fontWeight: 'bold', color: '#b71c1c', whiteSpace: 'nowrap' }}>🐛 Bug!</div>
      <div style={{ position: 'absolute', top: 50, left: 10, width: 35, height: 2, background: '#90caf9', opacity: 0.6, borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 58, left: 5, width: 25, height: 2, background: '#90caf9', opacity: 0.4, borderRadius: 1 }} />
      <div style={{ position: 'absolute', top: 66, left: 15, width: 30, height: 2, background: '#90caf9', opacity: 0.5, borderRadius: 1 }} />
    </div>
  );
}

export function RunDownAnim() {
  return (
    <div style={{ ...C, flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 12, color: '#666' }}>電池電量</div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 74, height: 32, border: '3px solid #424242', borderRadius: 5, overflow: 'hidden', position: 'relative', background: '#fafafa' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, animation: 'drain 3.2s linear infinite' }} />
        </div>
        <div style={{ width: 7, height: 16, background: '#424242', borderRadius: '0 3px 3px 0', marginLeft: -1 }} />
      </div>
      <div style={{ fontSize: 11, color: '#e53935', fontWeight: 'bold', animation: 'blink 3.2s ease-in-out infinite' }}>⚡ 精疲力竭...</div>
      <div style={{ fontSize: 10, color: '#888' }}>體力耗盡/破舊衰敗</div>
    </div>
  );
}

export function RunUpAnim() {
  const bills = ['$100', '$500', '$1,200', '$2,800', '$5,000', '$8,000', '$100'];
  return (
    <div style={{ ...C, gap: 18 }}>
      <div style={{ fontSize: 38 }}>💳</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>帳單累積中</div>
        <div style={{ width: 76, height: 72, overflow: 'hidden', border: '2px solid #ef9a9a', borderRadius: 8, background: '#fff8f8' }}>
          <div style={{ animation: 'scroll-up 2.5s linear infinite', paddingLeft: 6 }}>
            {bills.map((v, i) => (
              <div key={i} style={{ height: 21, lineHeight: '21px', fontSize: 13, color: '#c62828', fontWeight: 'bold' }}>{v}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 22, color: '#e53935', fontWeight: 'bold' }}>↑↑</div>
    </div>
  );
}

export function RunOutAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130 }}>
      <div style={{ position: 'absolute', left: 45, top: 10 }}>
        <div style={{ fontSize: 10, color: '#888', marginBottom: 4, textAlign: 'center' }}>存量</div>
        <div style={{ width: 60, height: 80, border: '4px solid #546e7a', borderTop: 'none', borderRadius: '0 0 10px 10px', position: 'relative', overflow: 'hidden', background: '#fafafa' }}>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, #81d4fa 0%, #0288d1 100%)', animation: 'water-drop 3.2s ease-in-out infinite' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 32, fontSize: 12, color: '#e53935', fontWeight: 'bold', animation: 'blink 3.2s ease-in-out infinite' }}>用光了！</div>
      <div style={{ position: 'absolute', bottom: 14, right: 0, fontSize: 24, animation: 'run-away 3.2s linear infinite' }}>🏃</div>
      <div style={{ position: 'absolute', bottom: 4, right: 8, fontSize: 10, color: '#888' }}>耗盡</div>
    </div>
  );
}

export function RunOverAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 12, left: 16 }}>
        <div style={{ fontSize: 38 }}>⏰</div>
        <div style={{ fontSize: 11, color: '#555', textAlign: 'center', marginTop: 2 }}>30 min</div>
      </div>
      <div style={{ position: 'absolute', top: 10, left: 72 }}>
        <div style={{ fontSize: 11, color: '#555', marginBottom: 4 }}>會議時間</div>
        <div style={{ fontSize: 13, color: '#e53935', fontWeight: 'bold' }}>+30min</div>
      </div>
      <div style={{ position: 'absolute', top: 8, right: 12, animation: 'bug-pop 2.5s ease-in-out infinite' }}>
        <div style={{ background: '#e53935', color: '#fff', fontSize: 11, fontWeight: 'bold', padding: '2px 7px', borderRadius: 4 }}>OVER</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>超出時限</div>
    </div>
  );
}

export function RunThroughAnim() {
  const items = ['完成報告', '回覆郵件', '更新文件'];
  const delays = ['0s', '0.8s', '1.6s'];
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 14, right: 16 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <div style={{ fontSize: 14, animation: `blink 2.5s ease-in-out ${delays[i]} infinite` }}>✅</div>
            <div style={{ fontSize: 11, color: '#444' }}>{item}</div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', top: '40%', left: 8, transform: 'translateY(-50%)', animation: 'pass-thru 2.5s ease-in-out infinite', fontSize: 22 }}>→</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>快速過一遍</div>
    </div>
  );
}

export function RunAwayAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '28%', right: 16, transform: 'translateY(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 36 }}>⚠️</div>
        <div style={{ fontSize: 9, color: '#e53935', marginTop: 2 }}>問題</div>
      </div>
      <div style={{ position: 'absolute', top: '28%', left: 8, transform: 'translateY(-50%)', animation: 'move-away 3s ease-in-out infinite', fontSize: 34 }}>🏃</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>逃避問題</div>
    </div>
  );
}

export function RunAcrossAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '32%', left: 4, transform: 'translateY(-50%)', animation: 'cross-path 3s linear infinite', fontSize: 30 }}>🧑</div>
      <div style={{ position: 'absolute', top: '28%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'bug-pop 2.8s ease-in-out infinite', textAlign: 'center' }}>
        <div style={{ fontSize: 28 }}>💡</div>
        <div style={{ fontSize: 10, color: '#f57f17', fontWeight: 'bold', whiteSpace: 'nowrap' }}>找到了！</div>
      </div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>偶然發現</div>
    </div>
  );
}

export function RunOffAnim() {
  return (
    <div style={{ position: 'relative', width: 220, height: 130, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '28%', left: 14, transform: 'translateY(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 38 }}>🖨️</div>
        <div style={{ fontSize: 9, color: '#888', marginTop: 2 }}>印表機</div>
      </div>
      <div style={{ position: 'absolute', top: '34%', left: 62, transform: 'translateY(-50%)', animation: 'depart-right 2.5s ease-in-out infinite', fontSize: 30 }}>📄</div>
      <div style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 10, color: '#888' }}>列印輸出 / 跑走</div>
    </div>
  );
}
