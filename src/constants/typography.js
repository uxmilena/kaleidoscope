/**
 * Typography constants
 * Font hierarchy for Kaleidoscope
 */

export const FONTS = {
  // At Quark - Body text, paragraphs, UI elements
  body: "'At Quark', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  // Metral - Eyebrows, headlines, section titles
  headline: "'Metral', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  // System monospace for technical elements
  mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",
};

export const FONT_WEIGHTS = {
  // At Quark weights
  light: 200,      // Air
  bold: 700,       // Bold
  black: 900,      // Black

  // Metral weights
  extraLight: 200, // ExtraLight
  metralLight: 300,// Light
  extraBold: 800,  // ExtraBold
  metralBlack: 900,// Black
};

// Common text styles
export const TEXT_STYLES = {
  // Headlines (Metral)
  h1: {
    fontFamily: FONTS.headline,
    fontWeight: FONT_WEIGHTS.black,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  h2: {
    fontFamily: FONTS.headline,
    fontWeight: FONT_WEIGHTS.extraBold,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },

  // Eyebrows (Metral)
  eyebrow: {
    fontFamily: FONTS.headline,
    fontWeight: FONT_WEIGHTS.extraBold,
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
  },

  // Body text (At Quark)
  body: {
    fontFamily: FONTS.body,
    fontWeight: FONT_WEIGHTS.light,
    lineHeight: 1.6,
  },
  bodyBold: {
    fontFamily: FONTS.body,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: 1.6,
  },
};
