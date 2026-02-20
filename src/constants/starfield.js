/**
 * Starfield animation constants
 * Star positions extracted from Figma design
 */

export const STARFIELD_CONFIG = {
  // Static star settings (flickering in place)
  flickerDuration: '3s',        // How long one flicker cycle takes
  starColor: '#ffffff',         // White stars
  starSizeSmall: 2,             // Small stars (2px)
  starSizeLarge: 3,             // Large stars (3px)
  blurAmount: '1px',            // Subtle blur for glow
  opacityMin: 0.1,              // Minimum opacity when flickering (10%)
  opacityMax: 1.0,              // Maximum opacity when flickering (100%)

  // Shooting star settings
  shootingStarColor: '#fff',    // White shooting stars
  shootingStarOpacity: 0.7,     // 70% opacity
  shootingStarWidth: '1px',     // Thin trail
  shootingStarLength: '200px',  // Length of the trail (much longer)
  shootingStarDuration: '2s',   // How long each shooting star takes (slower)
  shootingStarGap: '0.4s',      // Gap between stars in a sequence
  sequencePause: '0.8s',        // Pause between sequences
};

/**
 * Star positions extracted from SVG (x, y, size)
 * Size: 'lg' = 5.5x4.5, 'sm' = 4.5x3.5
 */
export const STAR_POSITIONS = [
  // Large stars (5.5x4.5)
  { x: 947.5, y: 1360.55, size: 'lg' },
  { x: 956.5, y: 840.55, size: 'lg' },
  { x: 307.5, y: 1584.55, size: 'lg' },
  { x: 644.5, y: 1457.55, size: 'lg' },
  { x: 792.5, y: 1356.55, size: 'lg' },
  { x: 801.5, y: 836.55, size: 'lg' },
  { x: 152.5, y: 1580.55, size: 'lg' },
  { x: 489.5, y: 1453.55, size: 'lg' },
  { x: 1516.5, y: 1360.55, size: 'lg' },
  { x: 1525.5, y: 840.55, size: 'lg' },
  { x: 1525.5, y: 394.55, size: 'lg' },
  { x: 1361.5, y: 1356.55, size: 'lg' },
  { x: 1370.5, y: 836.55, size: 'lg' },
  { x: 1370.5, y: 390.55, size: 'lg' },

  // Small stars (4.5x3.5)
  { x: 1023.5, y: 1202.55, size: 'sm' },
  { x: 383.5, y: 1872.55, size: 'sm' },
  { x: 720.5, y: 1745.55, size: 'sm' },
  { x: 8.5, y: 1195.55, size: 'sm' },
  { x: 972.5, y: 1324.55, size: 'sm' },
  { x: 981.5, y: 804.55, size: 'sm' },
  { x: 332.5, y: 1548.55, size: 'sm' },
  { x: 669.5, y: 1421.55, size: 'sm' },
  { x: 1179.5, y: 1289.55, size: 'sm' },
  { x: 1188.5, y: 769.55, size: 'sm' },
  { x: 164.5, y: 1282.55, size: 'sm' },
  { x: 1093.5, y: 1190.55, size: 'sm' },
  { x: 1102.5, y: 670.55, size: 'sm' },
  { x: 78.5, y: 1183.55, size: 'sm' },
  { x: 1119.5, y: 1177.55, size: 'sm' },
  { x: 1128.5, y: 657.55, size: 'sm' },
  { x: 104.5, y: 1170.55, size: 'sm' },
  { x: 1219.5, y: 1286.55, size: 'sm' },
  { x: 1228.5, y: 766.55, size: 'sm' },
  { x: 204.5, y: 1279.55, size: 'sm' },
  { x: 920.5, y: 1524.55, size: 'sm' },
  { x: 929.5, y: 1004.55, size: 'sm' },
  { x: 280.5, y: 1748.55, size: 'sm' },
  { x: 617.5, y: 1621.55, size: 'sm' },
  { x: 827.5, y: 1517.55, size: 'sm' },
  { x: 836.5, y: 997.55, size: 'sm' },
  { x: 187.5, y: 1741.55, size: 'sm' },
  { x: 524.5, y: 1614.55, size: 'sm' },
  { x: 750.5, y: 1499.55, size: 'sm' },
  { x: 759.5, y: 979.55, size: 'sm' },
  { x: 110.5, y: 1723.55, size: 'sm' },
  { x: 447.5, y: 1596.55, size: 'sm' },
  { x: 797.5, y: 1585.55, size: 'sm' },
  { x: 806.5, y: 1065.55, size: 'sm' },
  { x: 157.5, y: 1809.55, size: 'sm' },
  { x: 494.5, y: 1682.55, size: 'sm' },
  { x: 1592.5, y: 1202.55, size: 'sm' },
  { x: 1601.5, y: 682.55, size: 'sm' },
  { x: 1601.5, y: 236.55, size: 'sm' },
  { x: 1541.5, y: 1324.55, size: 'sm' },
  { x: 1550.5, y: 804.55, size: 'sm' },
  { x: 1550.5, y: 358.55, size: 'sm' },
  { x: 1748.5, y: 1289.55, size: 'sm' },
  { x: 1757.5, y: 769.55, size: 'sm' },
  { x: 1757.5, y: 323.55, size: 'sm' },
  { x: 1662.5, y: 1190.55, size: 'sm' },
  { x: 1671.5, y: 670.55, size: 'sm' },
  { x: 1671.5, y: 224.55, size: 'sm' },
  { x: 1688.5, y: 1177.55, size: 'sm' },
  { x: 1697.5, y: 657.55, size: 'sm' },
  { x: 1697.5, y: 211.55, size: 'sm' },
  { x: 1788.5, y: 1286.55, size: 'sm' },
  { x: 1797.5, y: 766.55, size: 'sm' },
  { x: 1797.5, y: 320.55, size: 'sm' },
  { x: 1489.5, y: 1524.55, size: 'sm' },
  { x: 1498.5, y: 1004.55, size: 'sm' },
  { x: 1498.5, y: 558.55, size: 'sm' },
  { x: 1319.5, y: 1499.55, size: 'sm' },
  { x: 1328.5, y: 979.55, size: 'sm' },
  { x: 1328.5, y: 533.55, size: 'sm' },
  { x: 1366.5, y: 1585.55, size: 'sm' },
  { x: 1375.5, y: 1065.55, size: 'sm' },
  { x: 1375.5, y: 619.55, size: 'sm' },
];
