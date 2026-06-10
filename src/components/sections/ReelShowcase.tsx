"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export function ReelShowcase() {
  // Using placeholder images for reels for now
  const reels = [
    { title: "El Chico Restaurant", views: "1.2M", reach: "850K", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
    { title: "The Beanery Cafe", views: "850K", reach: "600K", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
    { title: "Urban Wear Launch", views: "450K", reach: "300K", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
    { title: "Fitness Club Pro", views: "600K", reach: "420K", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
  ];

  return (
    <section id="work" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Work Goes <span className="text-gradient-primary">Viral</span>
            </h2>
            <p className="text-lg text-white/60">
              See how we capture the essence of Prayagraj businesses and present them to hundreds of thousands of local viewers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/10"
            >
              {/* Background Image Setup */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${reel.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-4">{reel.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-white/80">
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Play className="w-4 h-4 text-primary" /> {reel.views}
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 text-primary" /> {reel.reach}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
