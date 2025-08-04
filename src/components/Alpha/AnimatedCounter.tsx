"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate, useMotionValue } from "framer-motion";

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  targetNumber,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, targetNumber, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [inView, targetNumber, duration]);

  return (
    <div ref={ref} className={className}>
      {displayCount}
    </div>
  );
}
