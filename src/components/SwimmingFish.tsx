import { motion } from "motion/react";

interface SwimmingFishProps {
  /** Time in seconds to cross the screen (lower = faster) */
  duration?: number;
  /** Vertical starting position in pixels or viewport units (e.g., "20vh" or 150) */
  yOffset?: number | string;
  /** Delay in seconds before entering the screen */
  delay?: number;
  /** Swim direction */
  direction?: "right" | "left";
  /** Width of the fish in pixels (height scales automatically) */
  size?: number;
  /** Primary body color */
  bodyColor?: string;
  /** Tail fin color */
  tailColor?: string;
  /** Opacity (0 to 1) to create depth for distant fish */
  opacity?: number;
}

export default function SwimmingFish({
  duration = 18,
  yOffset = 100,
  delay = 0,
  direction = "right",
  size = 60,
  bodyColor = "#38BDF8",
  tailColor = "#0284C7",
  opacity = 1,
}: SwimmingFishProps) {
  const isRight = direction === "right";
  const startX = isRight ? "-15vw" : "115vw";
  const endX = isRight ? "115vw" : "-15vw";

  // Faster fish wag their tails slightly quicker
  const tailSpeed = Math.max(0.35, Math.min(0.9, duration / 25));

  return (
    <motion.div
      style={{
        position: "fixed",
        top: yOffset,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
        opacity,
      }}
      initial={{ x: startX, y: 0 }}
      animate={{
        x: endX,
        y: [0, -15, 0, 15, 0],
      }}
      transition={{
        x: {
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        width={size}
        height={size / 2}
        viewBox="0 0 60 30"
        fill="none"
        style={{
          // SVG naturally faces left; flip horizontally when swimming right
          transform: isRight ? "scaleX(-1)" : "scaleX(1)",
          overflow: "visible",
        }}
      >
        {/* Wagging tail */}
        <motion.polygon
          points="42,15 58,5 54,15 58,25"
          fill={tailColor}
          style={{ transformOrigin: "42px 15px" }}
          animate={{
            rotate: [-16, 16, -16],
            scaleX: [1, 0.85, 1],
          }}
          transition={{
            duration: tailSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Fish body */}
        <path
          d="M45 15C45 22 32 28 18 28C8 28 0 15 0 15C0 15 8 2 18 2C32 2 45 8 45 15Z"
          fill={bodyColor}
        />
        {/* Eye */}
        <circle cx="12" cy="12" r="2.5" fill="#0F172A" />
      </svg>
    </motion.div>
  );
}