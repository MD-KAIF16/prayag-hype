"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Store, Camera, Megaphone, Video } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Restaurant Promotion",
      desc: "Fill your tables every night. We create mouth-watering content that drives foodies to your door."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Cafe Marketing",
      desc: "Make your cafe the next trending spot in Prayagraj. Aesthetically pleasing reels that attract crowds."
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Local Shops",
      desc: "Drive footfall to your retail store with targeted local awareness campaigns and unboxing experiences."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Influencer Campaigns",
      desc: "Leverage Prayagraj's top creators to validate your brand and tap into their loyal following."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Brand Awareness",
      desc: "Launching something new? We create the initial hype needed for a successful opening week."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Reel Production",
      desc: "High-retention, virality-optimized short form videos professionally shot and edited."
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-[#050505]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our <span className="text-gradient-primary">Growth Packages</span>
            </h2>
            <p className="text-lg text-white/60">
              We don&apos;t just make videos. We build comprehensive awareness campaigns tailored to your specific business type.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/80 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
