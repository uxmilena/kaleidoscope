import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

/**
 * SideMarkers component - renders tick marks on the side of the hero frame
 *
 * @param {Object} props
 * @param {'left' | 'right'} props.position - Side to render markers on
 * @param {number} props.count - Number of tick marks (default: 6)
 */
export default function SideMarkers({ position = 'left', count = SIZES.sideMarkerCount }) {
  const leftOffset = position === 'left' ? SIZES.sideMarkerLeftOffset : 'auto';
  const rightOffset = position === 'right' ? SIZES.sideMarkerLeftOffset : 'auto';

  return (
    <div
      style={{
        position: 'absolute',
        left: leftOffset,
        right: rightOffset,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: SIZES.sideMarkerGap,
        pointerEvents: 'none',
      }}
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width: SIZES.sideMarkerWidth,
            height: SIZES.sideMarkerHeight,
            background: COLORS.sideMarkerLine,
            opacity: i === 2 || i === 3 ? 0.7 : 0.35,
          }}
        />
      ))}
    </div>
  );
}
