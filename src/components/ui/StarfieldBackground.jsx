import { STARFIELD_CONFIG, STAR_POSITIONS } from '../../constants/starfield';

/**
 * StarfieldBackground component - renders animated falling and flickering stars
 * Extracted from Figma design, converted to CSS-animated divs
 *
 * Features:
 * - 79 stars at authentic Figma positions
 * - Subtle flickering (opacity 0.3-0.85)
 * - Slow downward drift animation
 * - Gaussian blur effect
 * - Positioned behind all content (z-index: 0)
 */
export default function StarfieldBackground() {
  // SVG viewBox was 1806x2377, normalize to viewport percentages
  const viewBoxWidth = 1806;
  const viewBoxHeight = 2377;

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
      {STAR_POSITIONS.map((star, index) => {
        // Convert SVG coordinates to viewport percentages
        const xPercent = (star.x / viewBoxWidth) * 100;
        const yPercent = (star.y / viewBoxHeight) * 100;

        // Size based on design (lg: 5.5x4.5, sm: 4.5x3.5)
        const width = star.size === 'lg' ? 5.5 : 4.5;
        const height = star.size === 'lg' ? 4.5 : 3.5;

        // Stagger animations so stars don't flicker in sync
        const flickerClass = `star-flicker-${(index % 5) + 1}`;

        // Random delay for fall animation (0-80s)
        const fallDelay = -(Math.random() * 80);

        return (
          <div
            key={index}
            className={flickerClass}
            style={{
              position: 'absolute',
              left: `${xPercent}%`,
              top: `${yPercent}%`,
              width: `${width}px`,
              height: `${height}px`,
              background: STARFIELD_CONFIG.starColor,
              borderRadius: '50%',
              filter: `blur(${STARFIELD_CONFIG.blurAmount})`,
              mixBlendMode: 'lighten',
              animation: `
                ${flickerClass} ${STARFIELD_CONFIG.flickerDuration} ease-in-out infinite,
                starFall ${STARFIELD_CONFIG.fallDuration} linear infinite
              `,
              animationDelay: `0s, ${fallDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
