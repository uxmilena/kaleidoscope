import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/sizes';
import Axis from '../ui/Axis';
import CircleBorder from '../ui/CircleBorder';
import EdgeMarkers from '../ui/EdgeMarkers';
import SideMarkers from './SideMarkers';
import CircularText from './CircularText';
import EnergyField from './EnergyField';
import CenterLogo from './CenterLogo';

/**
 * HeroFrame component - main 80vmin container with all hero elements
 * Contains axes, circles, text, energy field, logo, and markers
 */
export default function HeroFrame() {
  const rail = SIZES.railPercent;

  return (
    <div
      style={{
        width: SIZES.heroFrameSize,
        height: SIZES.heroFrameSize,
        border: `${SIZES.heroFrameBorder} solid rgba(255,255,255,0.25)`,
        position: 'relative',
      }}
    >
      {/* Diagonal axes */}
      <Axis type="diagonal-lr" />
      <Axis type="diagonal-rl" />

      {/* Circle borders */}
      <CircleBorder size={SIZES.circleOuter} />
      <CircleBorder size={SIZES.circleMid} />

      {/* Circular text */}
      <CircularText
        text="KALEIDOSCOPE TEAMS • GO FULL CIRCLE • KALEIDOSCOPE TEAMS • GO FULL CIRCLE •"
      />

      {/* Energy field with video and WebGL */}
      <EnergyField />

      {/* Center logo with core ring */}
      <CenterLogo />

      {/* Edge markers - top and bottom */}
      <EdgeMarkers
        position="top"
        rail={rail}
        labels={['Mind', 'Body', 'Team Spirit', '']}
        indicator={{ color: 'pink', position: 'end' }}
      />
      <EdgeMarkers
        position="bottom"
        rail={rail}
        labels={['', 'Mind', 'Body', 'Team Spirit']}
        indicator={{ color: 'white', position: 'start' }}
      />

      {/* Side markers - left ticks */}
      <SideMarkers position="left" />
    </div>
  );
}
