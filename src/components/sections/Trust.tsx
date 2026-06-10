"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function Trust() {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "Instagram Followers", value: 149, suffix: "+" },
    { label: "Campaign Views Generated", value: 42, suffix: "K+" },
    { label: "Featured Campaigns", value: 4, suffix: "" },
    { label: "Best Campaign Performance", value: 34.6, suffix: "K+" },
  ];

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Real Campaigns. Real Reach. <br className="hidden md:block" />
            <span className="text-gradient-primary">Real Local Impact.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            We don't deal in fake numbers. We deliver verifiable awareness, discovery, and business growth across Prayagraj.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/10 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-wider relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
