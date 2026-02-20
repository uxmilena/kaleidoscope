import { useState } from "react";
import Axis from "./components/ui/Axis";
import HeroFrame from "./components/hero/HeroFrame";
import StarfieldBackground from "./components/ui/StarfieldBackground";
import StarToggle from "./components/ui/StarToggle";
import Pillars from "./sections/Pillars/Pillars";
import { COLORS } from "./constants/colors";

/**
 * Main App component
 * Renders the full-screen background with global axes and hero frame
 */
export default function App() {
  const [showShootingStars, setShowShootingStars] = useState(true);

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
      <StarfieldBackground showShootingStars={showShootingStars} />

      {/* Global axes */}
      <Axis type="horizontal" />
      <Axis type="vertical" />

      {/* Hero system frame */}
      <HeroFrame />

      {/* Star toggle control */}
      <StarToggle onToggle={setShowShootingStars} />
    </div>
  );
}
