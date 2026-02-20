import { useState } from 'react';

/**
 * StarToggle - Minimal terminal-style button to toggle shooting stars
 */
export default function StarToggle({ onToggle }) {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    onToggle(newState);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '8px 16px',
        background: 'rgba(0, 0, 0, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '4px',
        color: isActive ? '#00ff88' : 'rgba(255, 255, 255, 0.4)',
        fontSize: '11px',
        fontFamily: 'monospace',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'all 0.2s ease',
        textTransform: 'uppercase',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        e.target.style.background = 'rgba(0, 0, 0, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        e.target.style.background = 'rgba(0, 0, 0, 0.6)';
      }}
    >
      <span style={{ marginRight: '8px' }}>
        {isActive ? '●' : '○'}
      </span>
      STARS {isActive ? 'ON' : 'OFF'}
    </button>
  );
}
