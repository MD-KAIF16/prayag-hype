"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EyeOff } from "lucide-react";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.8], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);

  return (
    <section ref={containerRef} className="py-32 relative bg-[#050505]">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div 
          style={{ opacity, y, scale }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
            <EyeOff className="w-8 h-8 text-white/40" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Most Great Businesses <br />
            <span className="text-white/40">Stay Invisible.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
            You have the best food, the nicest store, or the most amazing service in Prayagraj. 
            <span className="text-white block mt-4 font-medium">But if people don&apos;t know you exist, it doesn&apos;t matter.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
