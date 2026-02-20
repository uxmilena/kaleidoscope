import { Canvas } from "@react-three/fiber";
import LensPlane from "./LensPlane";

/**
 * LiquidLensWebGL component - WebGL wrapper for the liquid lens effect
 * Provides a Three.js canvas with transparent background for overlay effects
 *
 * @param {Object} props
 * @param {string} props.videoSrc - Path to the video texture (default: "/neon-flashing.mp4")
 * @param {number} props.zIndex - CSS z-index for layering (default: 1)
 */
export default function LiquidLensWebGL({
  videoSrc = "/neon-flashing.mp4",
  zIndex = 1,
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        overflow: "hidden",
        zIndex,
        pointerEvents: "none",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true, antialias: true }}
      >
        <LensPlane videoSrc={videoSrc} />
      </Canvas>
    </div>
  );
}
