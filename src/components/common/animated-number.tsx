"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

export const AnimatedNumber = ({ value, suffix = "" }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const displayValue = Math.floor(latest);
        ref.current.textContent = displayValue.toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  // Set initial value immediately
  useEffect(() => {
    if (ref.current && !isInView) {
      ref.current.textContent = value.toString() + suffix;
    }
  }, [value, suffix, isInView]);

  return <span ref={ref}>{value.toString() + suffix}</span>;
};
