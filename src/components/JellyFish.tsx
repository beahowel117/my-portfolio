import { motion } from "motion/react";

interface JellyfishProps {
  /** Horizontal position (e.g., "15vw" or "80%") */
  xOffset?: number | string;
  /** Vertical starting position (e.g., "60vh") */
  yOffset?: number | string;
  /** Width in pixels (height scales automatically) */
  size?: number;
  /** Main bell color */
  bellColor?: string;
  /** Tentacle and inner glow color */
  tentacleColor?: string;
  /** Pulse cycle duration in seconds */
  duration?: number;
  /** Animation start delay in seconds */
  delay?: number;
  /** Opacity (0 to 1) for depth layering */
  opacity?: number;
}

export default function Jellyfish({
  xOffset = "18vw",
  yOffset = "55vh",
  size = 54,
  bellColor = "#C084FC",
  tentacleColor = "#E879F9",
  duration = 5,
  delay = 0,
  opacity = 0.85,
}: JellyfishProps) {
  return (
    <motion.div
      style={{
        position: "fixed",
        left: xOffset,
        top: yOffset,
        pointerEvents: "none",
        zIndex: 9,
        opacity,
      }}
      // Organic upward pulse and slow sink
      animate={{
        y: [0, -28, -22, 0],
        x: [0, 8, -6, 0],
        rotate: [-3, 4, -2, -3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 60 90"
        fill="none"
        style={{ overflow: "visible" }}
      >
        {/* Swaying Tentacles */}
        {[
          { d: "M18 38 Q12 58 20 78", delay: 0 },
          { d: "M26 40 Q32 62 24 85", delay: 0.3 },
          { d: "M34 40 Q28 62 36 85", delay: 0.6 },
          { d: "M42 38 Q48 58 40 78", delay: 0.2 },
        ].map((tentacle, i) => (
          <motion.path
            key={i}
            d={tentacle.d}
            stroke={tentacleColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            style={{ transformOrigin: "30px 38px" }}
            animate={{
              rotate: [-6, 6, -6],
              scaleY: [0.95, 1.06, 0.95],
            }}
            transition={{
              duration: duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + tentacle.delay,
            }}
          />
        ))}

        {/* Pulsing Jellyfish Bell (Dome) */}
        <motion.path
          d="M10 38 C10 14, 50 14, 50 38 C42 34, 36 40, 30 36 C24 40, 18 34, 10 38 Z"
          fill={bellColor}
          fillOpacity="0.85"
          style={{ transformOrigin: "30px 28px" }}
          animate={{
            scaleX: [1, 0.86, 1.05, 1], // Contracts on push, expands on glide
            scaleY: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />

        {/* Subtle Inner Highlight */}
        <path
          d="M18 28 C18 19, 42 19, 42 28"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}