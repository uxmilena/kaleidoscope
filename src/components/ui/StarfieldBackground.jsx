import { useMemo } from 'react';
import { STARFIELD_CONFIG } from '../../constants/starfield';

/**
 * StarfieldBackground component - renders Milky Way-inspired starfield
 *
 * Features:
 * - Dense starfield with 250+ stars
 * - Milky Way band with clustered stars
 * - Nebula gradient overlays (purple, blue, pink)
 * - Horizon glow effect
 * - Varied star sizes and colors
 */
export default function StarfieldBackground() {
  // Generate stars procedurally
  const stars = useMemo(() => {
    const starArray = [];
    const starCount = 250;

    for (let i = 0; i < starCount; i++) {
      // Random position
      let x = Math.random() * 100;
      let y = Math.random() * 100;

      // Check if in Milky Way band (diagonal from top-left to bottom-right)
      const distanceFromBand = Math.abs((y - x * Math.tan(STARFIELD_CONFIG.milkyWayAngle * Math.PI / 180)) / Math.sqrt(1 + Math.pow(Math.tan(STARFIELD_CONFIG.milkyWayAngle * Math.PI / 180), 2)));
      const inMilkyWay = distanceFromBand < 25; // Band width

      // Denser in Milky Way, sparser outside
      if (!inMilkyWay && Math.random() > 0.4) continue;

      // Pick size (larger stars in Milky Way)
      const sizeIndex = inMilkyWay
        ? Math.floor(Math.random() * STARFIELD_CONFIG.starSizes.length)
        : Math.floor(Math.random() * 3); // Smaller stars outside band
      const size = STARFIELD_CONFIG.starSizes[sizeIndex];

      // Pick color (more blue-white in Milky Way)
      let color;
      const colorRand = Math.random();
      if (inMilkyWay) {
        color = colorRand < 0.5
          ? STARFIELD_CONFIG.starColors.blueWhite
          : STARFIELD_CONFIG.starColors.white;
      } else {
        if (colorRand < 0.7) color = STARFIELD_CONFIG.starColors.white;
        else if (colorRand < 0.85) color = STARFIELD_CONFIG.starColors.blueWhite;
        else color = STARFIELD_CONFIG.starColors.warmWhite;
      }

      starArray.push({ x, y, size, color });
    }

    return starArray;
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Nebula image layer - organic, natural look */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/nebula.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.25,
          mixBlendMode: 'screen',
        }}
      />

      {/* Static flickering stars */}
      {stars.map((star, index) => {
        const flickerClass = `star-flicker-${(index % 5) + 1}`;

        return (
          <div
            key={`star-${index}`}
            className={flickerClass}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: star.color,
              borderRadius: '50%',
              filter: `blur(${STARFIELD_CONFIG.blurAmount})`,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            }}
          />
        );
      })}
    </div>
  );
}
