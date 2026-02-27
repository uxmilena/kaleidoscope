/**
 * AxisDot - Animated glowing dot that travels along the axes
 */
export default function AxisDot() {
  return (
    <>
      {/* Horizontal axis dot */}
      <div
        className="axis-dot-horizontal"
        style={{
          position: 'fixed',
          top: '50%',
          left: '0%',
          width: '8px',
          height: '8px',
          background: 'rgba(255, 100, 200, 0.9)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          pointerEvents: 'none',
          boxShadow: `
            0 0 10px rgba(255, 100, 200, 0.8),
            0 0 20px rgba(255, 100, 200, 0.5),
            0 0 30px rgba(255, 100, 200, 0.3)
          `,
          filter: 'blur(0.5px)',
        }}
      />

      {/* Vertical axis dot */}
      <div
        className="axis-dot-vertical"
        style={{
          position: 'fixed',
          left: '50%',
          top: '0%',
          width: '8px',
          height: '8px',
          background: 'rgba(100, 200, 255, 0.9)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          pointerEvents: 'none',
          boxShadow: `
            0 0 10px rgba(100, 200, 255, 0.8),
            0 0 20px rgba(100, 200, 255, 0.5),
            0 0 30px rgba(100, 200, 255, 0.3)
          `,
          filter: 'blur(0.5px)',
        }}
      />
    </>
  );
}
