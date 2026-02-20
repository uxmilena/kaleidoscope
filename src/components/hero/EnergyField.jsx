import LiquidLensWebGL from '../webgl/LiquidLensWebGL';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import { ASSETS } from '../../constants/assets';

/**
 * EnergyField component - renders the energy field with video, WebGL lens, and glass effects
 *
 * @param {Object} props
 * @param {string} props.videoSrc - Path to video source
 * @param {string} props.size - CSS size of energy field (default: '45%')
 */
export default function EnergyField({
  videoSrc = ASSETS.video.neonFlashing,
  size = SIZES.circleEnergy
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        overflow: 'hidden',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Video layer */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: SIZES.energyVideoOpacity,
          filter: `saturate(${SIZES.energyVideoSaturate}) contrast(${SIZES.energyVideoContrast})`,
        }}
      />

      {/* WebGL lens layer (fills this circle) */}
      <LiquidLensWebGL videoSrc={videoSrc} zIndex={2} />

      {/* Glass edge + thickness */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          zIndex: 3,
          boxShadow: `
            inset 0 1px 0 ${COLORS.energyGlassEdge},
            inset 0 -18px ${SIZES.energyGlassShadowBlur} ${COLORS.energyGlassShadow},
            inset 0 0 0 1px ${COLORS.energyGlassBorder}
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Soft specular highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          zIndex: 4,
          background: `radial-gradient(circle at 30% 25%, ${COLORS.energySpecularHighlight}, ${COLORS.energySpecularHighlightMid} 35%, rgba(255,255,255,0) 60%)`,
          opacity: SIZES.energySpecularOpacity,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
