import { motion } from "motion/react";

interface SwimmingFishProps {
  duration?: number;
  yOffset?: number;
  delay?: number;
}

export default function SwimmingFish({
  duration = 25,
  yOffset = 100,
  delay = 0,
}: SwimmingFishProps) {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: yOffset,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
      initial={{ x: "110vw", y: 0 }}
      animate={{
        x: "-10vw",
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
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none" >
        <path
          d="M45 15C45 22 32 28 18 28C8 28 0 15 0 15C0 15 8 2 18 2C32 2 45 8 45 15Z"
          fill="#38BDF8"
        />
        <motion.polygon points="42,15 58,5 54,15 58,25" fill="#0284C7" />
        <circle cx="12" cy="12" r="2.5" fill="#0F172A" />
      </svg>
    </motion.div>
  );
}