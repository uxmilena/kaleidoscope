import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

/**
 * CircularText component - renders rotating text along a circular path
 *
 * @param {Object} props
 * @param {string} props.text - Text to display along the circle
 * @param {string} props.size - CSS size of the container (default: '70%')
 * @param {string} props.fontSize - SVG font size (default: '1.4')
 * @param {number} props.opacity - Text opacity (default: 1)
 */
export default function CircularText({
  text,
  size = SIZES.circularText,
  fontSize = SIZES.circularTextFontSize,
  opacity = 1
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <defs>
        <path
          id="ambientCircle"
          d={`M50,50 m -${SIZES.circularTextRadius},0 a ${SIZES.circularTextRadius},${SIZES.circularTextRadius} 0 1,1 ${SIZES.circularTextRadius * 2},0 a ${SIZES.circularTextRadius},${SIZES.circularTextRadius} 0 1,1 -${SIZES.circularTextRadius * 2},0`}
        />
      </defs>

      <g transform="rotate(-90 50 50)" className="spinClockwise">
        <text
          fill={COLORS.circularTextFill}
          fontSize={fontSize}
          letterSpacing={SIZES.circularTextLetterSpacing}
          style={{
            textTransform: 'uppercase',
            opacity
          }}
        >
          <textPath
            href="#ambientCircle"
            startOffset="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {text}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
