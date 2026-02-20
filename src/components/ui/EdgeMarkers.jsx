import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';

/**
 * EdgeMarkers component - renders labeled edge markers with indicator bars
 *
 * @param {Object} props
 * @param {'top' | 'bottom'} props.position - Position of the markers
 * @param {number} props.rail - Rail inset percentage (default: 10)
 * @param {Array<string>} props.labels - Text labels for the markers
 * @param {Object} props.indicator - Indicator bar configuration
 * @param {'pink' | 'white'} props.indicator.color - Color of indicator
 * @param {'start' | 'end'} props.indicator.position - Position in grid
 */
export default function EdgeMarkers({ position, rail = SIZES.railPercent, labels, indicator }) {
  const positionStyle = position === 'top'
    ? { top: `calc(${rail}% + 1px)` }
    : { bottom: `calc(${rail}% + 1px)` };

  const indicatorColors = {
    pink: {
      background: COLORS.indicatorPink,
      boxShadow: `0 0 18px ${COLORS.indicatorPinkShadow}`,
    },
    white: {
      background: COLORS.indicatorWhite,
      boxShadow: `0 0 12px ${COLORS.indicatorWhiteShadow}`,
    },
  };

  const indicatorStyle = {
    ...indicatorColors[indicator.color],
    width: SIZES.indicatorWidth,
    height: SIZES.indicatorHeight,
    borderRadius: SIZES.indicatorBorderRadius,
    justifySelf: indicator.position,
  };

  return (
    <div
      style={{
        position: 'absolute',
        ...positionStyle,
        left: `calc(${rail}% + 1px)`,
        right: `calc(${rail}% + 1px)`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        alignItems: 'center',
        fontSize: SIZES.edgeMarkerFontSize,
        letterSpacing: SIZES.edgeMarkerLetterSpacing,
        color: COLORS.edgeMarkerText,
        textTransform: 'uppercase',
        zIndex: 30,
        pointerEvents: 'none',
      }}
    >
      {labels.map((label, index) => {
        const isIndicatorPosition =
          (indicator.position === 'start' && index === 0) ||
          (indicator.position === 'end' && index === labels.length - 1);

        if (isIndicatorPosition) {
          return <div key={index} style={indicatorStyle} />;
        }

        const justify = index === 0 ? 'start' : index === labels.length - 1 ? 'end' : 'center';
        return (
          <div key={index} style={{ justifySelf: justify }}>
            {label}
          </div>
        );
      })}
    </div>
  );
}
