"use client";

import { motion } from "framer-motion";
import { Eye, MapPin } from "lucide-react";
import Image from "next/image";

export function CityDiscovery() {
  const campaigns = [
    {
      name: "Chow Express",
      category: "Restaurant Promotion",
      views: "3.7K+",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
    },
    {
      name: "Bombay Famous Shawarma",
      category: "Business Story",
      views: "3.2K+",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
    },
    {
      name: "Atala Pudina Chai",
      category: "Hidden Gem Discovery",
      views: "34.6K+",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80"
    },
    {
      name: "Vitthal International",
      category: "City Update",
      views: "1.2K+",
      img: "https://images.unsplash.com/photo-1543837173-6c26bc89937b?w=800&q=80"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Businesses & Stories <span className="text-gradient-primary">Featured</span>
            </h2>
            <p className="text-lg text-white/60">
              We don't just promote businesses, we build the culture of the city through verifiable reach and authentic storytelling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer flex flex-col"
            >
              <div className="aspect-square relative overflow-hidden bg-neutral-900">
                <Image 
                  src={campaign.img}
                  alt={campaign.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/20 z-20">
                  {campaign.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{campaign.name}</h3>
                <div className="flex items-center gap-1.5 text-sm font-medium text-white bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
                  <Eye className="w-4 h-4 text-primary" /> {campaign.views} Views
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
