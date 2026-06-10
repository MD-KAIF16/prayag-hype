"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Trust() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  const logos = [
    "RESTAURANTS", "CAFES", "FASHION BRANDS", "CLINICS", "GYMS", "REAL ESTATE", "EVENTS", "SALONS"
  ];

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-8">
          Trusted by Prayagraj&apos;s Fastest Growing Brands
        </p>
      </div>

      <div className="relative flex flex-col gap-6 -mx-10 md:-mx-20 z-10 opacity-70">
        <motion.div style={{ x: x1 }} className="flex gap-8 whitespace-nowrap px-10">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/40 transition-colors cursor-default">
                {logo}
              </span>
              <span className="text-primary/50 text-xl">•</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap px-10">
          {[...logos, ...logos].reverse().map((logo, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/40 transition-colors cursor-default">
                {logo}
              </span>
              <span className="text-primary/50 text-xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="container max-w-4xl mx-auto px-6 mt-24 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">The Prayag Hype Network</h3>
              <p className="text-white/60">Connecting businesses with millions of local consumers every month.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-2xl font-bold text-gradient-primary mb-1">150K+</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Followers</div>
              </div>
              <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-2xl font-bold text-gradient-primary mb-1">45M+</div>
                <div className="text-xs text-white/50 uppercase tracking-wide">Monthly Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
