import AxisDot from "./components/ui/AxisDot";
import HeroFrame from "./components/hero/HeroFrame";
import StarfieldBackground from "./components/ui/StarfieldBackground";
import OurBigWhy from "./sections/OurBigWhy/OurBigWhy";
import ProgramsIntro from "./sections/ProgramsIntro/ProgramsIntro";
import { COLORS } from "./constants/colors";

/**
 * Main App component
 * Renders the hero section followed by the OurBigWhy section.
 *
 * Layout notes:
 * - StarfieldBackground is position:fixed (hero only) — OurBigWhy's
 *   solid navy background (z-index:1) covers it when scrolled into view.
 * - The Axis + AxisDot components are position:fixed, so they persist
 *   across both sections as continuous cross-hair guides.
 * - OurBigWhy contains its own absolute axis element that covers the
 *   full section height, ready for per-section GSAP control.
 */
export default function App() {
  return (
    <div
      style={{
        width: "100%",
        background: `linear-gradient(180deg, ${COLORS.gradientStart} 0%, ${COLORS.gradientEnd} 100%)`,
        position: "relative",
      }}
    >
      {/* Milky Way starfield — fixed to viewport, visible in hero */}
      <StarfieldBackground />

      <AxisDot />

      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Nebula — behind axes and all hero elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/nebula.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            mixBlendMode: "screen",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Vertical axis — local to hero, does not follow scroll */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "1px",
            height: "100%",
            background: "rgba(255,255,255,0.18)",
            transform: "translateX(-0.5px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Horizontal axis — local to hero, does not follow scroll */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.18)",
            transform: "translateY(-0.5px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <HeroFrame />
      </div>

      {/* ── Our Big Why ───────────────────────────────────── */}
      <OurBigWhy />

      {/* ── Programs Intro ────────────────────────────────── */}
      <ProgramsIntro />
    </div>
  );
}
