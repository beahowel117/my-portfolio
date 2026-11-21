import { motion } from "motion/react";

interface StarfishProps {
  /** Distance from left edge (e.g., "8vw" or "85vw") */
  xOffset?: number | string;
  /** Distance from bottom edge (e.g., "3vh" or 20) */
  bottomOffset?: number | string;
  /** Width & height in pixels */
  size?: number;
  /** Primary body color */
  color?: string;
  /** Dot texture color */
  spotColor?: string;
  /** Initial resting angle in degrees */
  initialRotate?: number;
  /** Opacity (0 to 1) */
  opacity?: number;
}

export default function Starfish({
  xOffset = "10vw",
  bottomOffset = "3vh",
  size = 48,
  color = "#FB7185",
  spotColor = "#FFE4E6",
  initialRotate = -12,
  opacity = 0.85,
}: StarfishProps) {
  return (
    <motion.div
      style={{
        position: "fixed",
        left: xOffset,
        bottom: bottomOffset,
        pointerEvents: "none",
        zIndex: 9,
        opacity,
      }}
      initial={{ rotate: initialRotate }}
      animate={{
        rotate: [initialRotate - 3, initialRotate + 3, initialRotate - 3],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        {/* Soft Rounded 5-Point Starfish */}
        <path
          d="M30 4 C33 4, 35 18, 38 20 C41 22, 55 21, 56 24 C57 27, 45 35, 44 38 C43 41, 49 54, 46 56 C43 58, 33 48, 30 48 C27 48, 17 58, 14 56 C11 54, 17 41, 16 38 C15 35, 3 27, 4 24 C5 21, 19 22, 22 20 C25 18, 27 4, 30 4 Z"
          fill={color}
        />
        {/* Decorative Texture Spots */}
        <circle cx="30" cy="31" r="2.2" fill={spotColor} fillOpacity="0.8" />
        <circle cx="30" cy="18" r="1.5" fill={spotColor} fillOpacity="0.7" />
        <circle cx="42" cy="27" r="1.5" fill={spotColor} fillOpacity="0.7" />
        <circle cx="38" cy="42" r="1.5" fill={spotColor} fillOpacity="0.7" />
        <circle cx="22" cy="42" r="1.5" fill={spotColor} fillOpacity="0.7" />
        <circle cx="18" cy="27" r="1.5" fill={spotColor} fillOpacity="0.7" />
      </svg>
    </motion.div>
  );
}