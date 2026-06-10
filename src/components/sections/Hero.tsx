"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
          >
            <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white/80">Prayagraj&apos;s #1 Growth Engine</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Turn Local Views Into <br className="hidden md:block" />
            <span className="text-gradient-primary">Customers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Prayagraj's Local Hype Page. Hidden Spots. City Updates. Viral Places. Reel by reel discovering the city.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:bg-primary/90 w-full sm:w-auto">
              Promote My Business
            </MagneticButton>
            <MagneticButton className="glass text-white px-8 py-4 text-lg hover:bg-white/10 w-full sm:w-auto gap-2">
              <Play className="w-5 h-5" /> View Our Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24"
        >
          {[
            { label: "Followers", value: 149, suffix: "" },
            { label: "Posts", value: 4, suffix: "" },
            { label: "Following", value: 5, suffix: "" },
            { label: "Prayagraj Focus", value: 100, suffix: "%" },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 text-center border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/50 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
