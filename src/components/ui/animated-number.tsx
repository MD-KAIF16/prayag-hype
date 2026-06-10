"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

export function AnimatedNumber({ 
  value, 
  suffix = "", 
  className = "" 
}: { 
  value: number; 
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2500,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(latest.toFixed(0) as unknown as number) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
