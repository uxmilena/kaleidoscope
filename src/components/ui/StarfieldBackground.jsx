import { STARFIELD_CONFIG, STAR_POSITIONS } from '../../constants/starfield';

/**
 * StarfieldBackground component - renders flickering stars and shooting stars
 *
 * Features:
 * - Static stars: 1-2px dots that flicker in place
 * - Shooting stars: Diagonal streaks from top-right to bottom-left
 * - Sequence: 1-2-3 (pause) 1-2 (pause) 1-4 (repeats)
 *
 * @param {boolean} showShootingStars - Toggle shooting stars on/off
 */
export default function StarfieldBackground({ showShootingStars = true }) {
  // SVG viewBox was 1806x2377, normalize to viewport percentages
  const viewBoxWidth = 1806;
  const viewBoxHeight = 2377;

  // Generate shooting star starting positions (sporadic across screen)
  // Each star has position and rotation angle for variety
  const shootingStars = [
    { x: 85, y: 5, angle: 120 },   // Star 1 - top right
    { x: 50, y: 3, angle: 135 },   // Star 2 - top center
    { x: 70, y: 8, angle: 110 },   // Star 3 - top right-center
    { x: 40, y: 10, angle: 130 },  // Star 4 - top left-center
    { x: 90, y: 15, angle: 125 },  // Star 5 - right
    { x: 60, y: 5, angle: 115 },   // Star 6 - top center-right
    { x: 75, y: 12, angle: 140 },  // Star 7 - right-center
    { x: 55, y: 7, angle: 120 },   // Star 8 - center-top
    { x: 80, y: 4, angle: 135 },   // Star 9 - top right
  ];

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
      {/* Static flickering stars */}
      {STAR_POSITIONS.map((star, index) => {
        // Convert SVG coordinates to viewport percentages
        const xPercent = (star.x / viewBoxWidth) * 100;
        const yPercent = (star.y / viewBoxHeight) * 100;

        // Use different sizes: 3px or 5px
        const size = star.size === 'lg' ? STARFIELD_CONFIG.starSizeLarge : STARFIELD_CONFIG.starSizeSmall;

        // Stagger animations so stars don't flicker in sync
        const flickerClass = `star-flicker-${(index % 5) + 1}`;

        return (
          <div
            key={`star-${index}`}
            className={flickerClass}
            style={{
              position: 'absolute',
              left: `${xPercent}%`,
              top: `${yPercent}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: STARFIELD_CONFIG.starColor,
              borderRadius: '50%',
              filter: `blur(${STARFIELD_CONFIG.blurAmount})`,
              boxShadow: `0 0 ${size}px ${STARFIELD_CONFIG.starColor}`,
            }}
          />
        );
      })}

      {/* Shooting stars */}
      {showShootingStars && shootingStars.map((star, index) => (
        <div
          key={`shooting-${index}`}
          className={`shooting-star-${index + 1}`}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: STARFIELD_CONFIG.shootingStarLength,
            height: STARFIELD_CONFIG.shootingStarWidth,
            background: `linear-gradient(90deg, ${STARFIELD_CONFIG.shootingStarColor}, transparent)`,
            transformOrigin: 'left center',
            filter: 'blur(0.8px)',
            boxShadow: `0 0 8px ${STARFIELD_CONFIG.shootingStarColor}`,
            borderRadius: '50%',
            '--star-angle': `${star.angle}deg`,
          }}
        />
      ))}
    </div>
  );
}
