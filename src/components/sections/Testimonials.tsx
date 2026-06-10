"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const highlights = [
    {
      name: "Chow Express",
      category: "Restaurant Promotion",
      views: "3706+",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
    },
    {
      name: "Bombay Famous Shawarma",
      category: "Business Story",
      views: "3252+",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
    },
    {
      name: "Atala Pudina Chai",
      category: "Hidden Gem Discovery",
      views: "34600+",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80"
    },
    {
      name: "Vitthal International",
      category: "City Update",
      views: "1257+",
      img: "https://images.unsplash.com/photo-1543837173-6c26bc89937b?w=800&q=80"
    }
  ];

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Campaign <span className="text-gradient-primary">Highlights</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          We don't use fake testimonials. Our work speaks for itself through verifiable local awareness.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-6 px-6 w-max"
        >
          {[...highlights, ...highlights, ...highlights].map((highlight, i) => (
            <div key={i} className="glass-card rounded-3xl p-4 w-[350px] border border-white/10 shrink-0 flex items-center gap-4">
              <div className="w-20 h-20 relative rounded-2xl overflow-hidden shrink-0">
                <Image 
                  src={highlight.img} 
                  alt={highlight.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="font-bold text-white text-lg truncate w-36">{highlight.name}</h3>
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                </div>
                <div className="text-sm text-primary mb-1 font-medium">{highlight.views} Views</div>
                <div className="text-xs text-white/50">{highlight.category}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
