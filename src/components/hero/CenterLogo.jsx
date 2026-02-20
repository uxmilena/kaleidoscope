import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import { ASSETS } from '../../constants/assets';

/**
 * CenterLogo component - renders the centered logo with glow and core ring
 *
 * @param {Object} props
 * @param {string} props.logoSrc - Path to logo image
 * @param {string} props.size - CSS size of logo container (default: '20%')
 */
export default function CenterLogo({
  logoSrc = ASSETS.images.logo,
  size = SIZES.circleLogo
}) {
  return (
    <>
      {/* Logo */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: size,
          height: size,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 40,
          pointerEvents: 'none',
        }}
      >
        <img
          src={logoSrc}
          alt="Kaleidoscope logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: SIZES.logoOpacity,
            filter: `drop-shadow(0 0 ${SIZES.logoGlowBlur} ${COLORS.logoGlow})`,
          }}
        />
      </div>

      {/* Core ring (+5% around logo) */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: SIZES.coreRing,
          height: SIZES.coreRing,
          borderRadius: '9999px',
          transform: 'translate(-50%, -50%)',
          border: `${SIZES.coreRingBorder} solid ${COLORS.coreRingBorder}`,
          boxShadow: `0 0 ${SIZES.coreRingShadowBlur} ${COLORS.coreRingShadow}`,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
