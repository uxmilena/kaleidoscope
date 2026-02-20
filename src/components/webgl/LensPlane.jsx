import { useFrame } from "@react-three/fiber";
import { useVideoTexture } from "@react-three/drei";
import { useMemo } from "react";
import vertexShader from '../../shaders/lens.vert.glsl?raw';
import fragmentShader from '../../shaders/lens.frag.glsl?raw';
import { SHADER_PARAMS } from '../../constants/shaderParams';

/**
 * LensPlane component - renders the liquid lens distortion effect
 * Uses custom GLSL shaders for refraction, dispersion, and frost effects
 *
 * @param {Object} props
 * @param {string} props.videoSrc - Path to the video texture
 */
export default function LensPlane({ videoSrc }) {
  const tex = useVideoTexture(videoSrc, {
    muted: true,
    loop: true,
    start: true,
    crossOrigin: "anonymous",
  });

  const uniforms = useMemo(
    () => ({
      uTex: { value: tex },
      uTime: { value: 0 },
      uRefraction: { value: SHADER_PARAMS.uRefraction },
      uDispersion: { value: SHADER_PARAMS.uDispersion },
      uFrost: { value: SHADER_PARAMS.uFrost },
      uDebug: { value: SHADER_PARAMS.uDebug },
    }),
    [tex]
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
