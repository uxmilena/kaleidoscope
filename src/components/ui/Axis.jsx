import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

/**
 * Axis component - renders horizontal, vertical, or diagonal axes
 *
 * @param {Object} props
 * @param {'horizontal' | 'vertical' | 'diagonal-lr' | 'diagonal-rl'} props.type - Type of axis
 * @param {number} props.opacity - Opacity value (0-1)
 * @param {number} props.zIndex - CSS z-index for layering
 */
export default function Axis({ type, opacity = 1, zIndex = 2 }) {
  const styles = {
    horizontal: {
      position: 'fixed',
      left: 0,
      top: '50%',
      width: '100vw',
      height: SIZES.axisThickness,
      background: COLORS.axisHorizontalVertical,
      transform: 'translateY(-0.5px)',
    },
    vertical: {
      position: 'fixed',
      top: 0,
      left: '50%',
      width: SIZES.axisThickness,
      height: '100vh',
      background: COLORS.axisHorizontalVertical,
      transform: 'translateX(-0.5px)',
    },
    'diagonal-lr': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: SIZES.axisWidth,
      height: SIZES.axisThickness,
      background: COLORS.axisDiagonal,
      transform: 'translate(-50%, -50%) rotate(45deg)',
    },
    'diagonal-rl': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: SIZES.axisWidth,
      height: SIZES.axisThickness,
      background: COLORS.axisDiagonal,
      transform: 'translate(-50%, -50%) rotate(-45deg)',
    },
  };

  return (
    <div
      style={{
        ...styles[type],
        opacity,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  );
}
