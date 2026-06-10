"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

export function CityDiscovery() {
  const places = [
    { name: "Civil Lines Hub", category: "Featured Area", rating: 4.8, img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" },
    { name: "Old City Cafe", category: "Hidden Gem", rating: 4.9, img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
    { name: "Riverside Dining", category: "Trending", rating: 4.7, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Discover <span className="text-gradient-primary">Prayagraj</span>
            </h2>
            <p className="text-lg text-white/60">
              We don&apos;t just promote businesses, we build the culture of the city. Here are some of our featured partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
                <Image 
                  src={place.img}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/20 z-20">
                  {place.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{place.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-white/60">
                    <MapPin className="w-4 h-4 text-primary" /> Prayagraj
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-white">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" /> {place.rating}
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
