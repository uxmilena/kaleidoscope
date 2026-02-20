import Axis from "./components/ui/Axis";
import HeroFrame from "./components/hero/HeroFrame";
import StarfieldBackground from "./components/ui/StarfieldBackground";
import Pillars from "./sections/Pillars/Pillars";
import { COLORS } from "./constants/colors";

/**
 * Main App component
 * Renders the full-screen background with global axes and hero frame
 */
export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: `linear-gradient(180deg, ${COLORS.gradientStart} 0%, ${COLORS.gradientEnd} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated starfield background */}
      <StarfieldBackground />

      {/* Global axes */}
      <Axis type="horizontal" />
      <Axis type="vertical" />

      {/* Hero system frame */}
      <HeroFrame />
    </div>
  );
}
