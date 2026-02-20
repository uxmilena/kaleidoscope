import { COLORS } from '../../constants/colors';

/**
 * CircleBorder component - renders circular borders
 *
 * @param {Object} props
 * @param {string} props.size - CSS size value (e.g., '90%', '65%')
 * @param {string} props.borderColor - CSS color for the border
 * @param {string} props.borderWidth - CSS border width (default: '1px')
 */
export default function CircleBorder({
  size,
  borderColor = COLORS.circleBorder,
  borderWidth = '1px'
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius: '9999px',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    />
  );
}
