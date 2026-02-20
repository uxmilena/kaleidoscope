/**
 * Size and spacing constants for Kaleidoscope UI
 * All dimensional values extracted from components
 */
export const SIZES = {
  // Hero frame
  heroFrameSize: '80vmin',
  heroFrameBorder: '0px',

  // Circle sizes (percentages of hero frame)
  circleOuter: '90%',
  circleMid: '65%',
  circleEnergy: '45%',
  circleLogo: '20%',
  coreRing: '25%',
  circularText: '70%',

  // Axis dimensions
  axisThickness: '1px',
  axisWidth: '140%', // diagonal axes

  // Rail inset (edge markers positioning)
  railPercent: 10,

  // Edge markers
  edgeMarkerFontSize: '10px',
  edgeMarkerLetterSpacing: '0.18em',
  indicatorWidth: '44px',
  indicatorHeight: '10px',
  indicatorBorderRadius: '999px',

  // Side markers
  sideMarkerWidth: '24px',
  sideMarkerHeight: '1px',
  sideMarkerGap: '10px',
  sideMarkerCount: 6,
  sideMarkerLeftOffset: '4%',

  // Circular text
  circularTextFontSize: '1.4',
  circularTextLetterSpacing: '2.0',
  circularTextRadius: '35', // SVG units

  // Energy field
  energyVideoOpacity: 0.9,
  energyVideoSaturate: 1.1,
  energyVideoContrast: 1.05,
  energyGlassShadowBlur: '40px',
  energySpecularOpacity: 0.6,

  // Logo
  logoOpacity: 0.95,
  logoGlowBlur: '12px',
  coreRingBorder: '1px',
  coreRingShadowBlur: '18px',
};
