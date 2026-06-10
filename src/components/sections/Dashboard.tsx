"use client";

import { motion } from "framer-motion";

export function Dashboard() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-gradient-primary">SaaS-Level</span> Insights
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We don&apos;t just guess. We track, measure, and scale what works. 
            Get transparent reporting on your campaign&apos;s local reach and business discovery.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-2 md:p-4 border border-white/10"
        >
          <div className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Campaign Performance</h3>
                <p className="text-white/50 text-sm">Showing data from last 30 days</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                  +324% Growth
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Total Views", value: "42K+", trend: "Verified" },
                { label: "Local Reach", value: "15K+", trend: "Verified" },
                { label: "Business Discovery", value: "8,400", trend: "Verified" },
                { label: "Shares", value: "1.2K", trend: "Verified" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/5">
                  <div className="text-white/50 text-sm mb-2 font-medium">{stat.label}</div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-green-400 text-xs font-semibold">{stat.trend} Analytics</div>
                </div>
              ))}
            </div>

            <div className="h-[300px] w-full">
              {/* Fallback chart styling since we didn't install recharts, using pure CSS/SVG approach or just a visual mock */}
              <div className="relative w-full h-full flex items-end justify-between pt-10">
                {/* Y-axis labels */}
                <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between text-xs text-white/30 py-4">
                  <span>1.5M</span>
                  <span>1.0M</span>
                  <span>500K</span>
                  <span>0</span>
                </div>
                
                {/* Chart Grid */}
                <div className="absolute inset-0 ml-12 border-l border-b border-white/10 flex flex-col justify-between py-4">
                  <div className="w-full border-t border-white/5 border-dashed" />
                  <div className="w-full border-t border-white/5 border-dashed" />
                  <div className="w-full border-t border-white/5 border-dashed" />
                  <div className="w-full border-t border-white/5 border-dashed" />
                </div>

                {/* Bars / Area mock */}
                <div className="relative z-10 ml-12 w-full h-full flex items-end justify-around pb-4">
                  {[20, 45, 60, 30, 80, 100].map((height, i) => (
                    <div key={i} className="relative group w-1/12 flex justify-center">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full max-w-[40px] bg-gradient-to-t from-primary/40 to-primary rounded-t-sm"
                      />
                      <div className="absolute -bottom-8 text-xs text-white/50">Wk {i+1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
