"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Rahul S.",
      role: "Restaurant Owner",
      text: "Prayag Hype completely changed our weekend footfall. The reel they made went viral locally and we had lines outside the door.",
    },
    {
      name: "Priya M.",
      role: "Boutique Founder",
      text: "Their aesthetic and understanding of the local market is unmatched. The ROI on our campaign was over 500%.",
    },
    {
      name: "Aman V.",
      role: "Cafe Manager",
      text: "Professional, creative, and highly effective. They are definitely Prayagraj's premium marketing agency.",
    },
    {
      name: "Karan D.",
      role: "Event Organizer",
      text: "We sold out our event 3 days early thanks to their targeted local promotion. Absolutely brilliant work.",
    }
  ];

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Loved by <span className="text-gradient-primary">Local Founders</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-6 w-max"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 w-[400px] border border-white/10 shrink-0">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-lg text-white/80 leading-relaxed mb-8">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-white/50">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
