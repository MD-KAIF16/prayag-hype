"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export function Solution() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Get Discovered",
      description: "Reach thousands of local customers who are looking for what you offer but don't know you exist."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Build Awareness",
      description: "Make your brand the talk of the town with high-quality, engaging visual content."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Generate Enquiries",
      description: "Turn those views and attention into actual foot traffic, orders, and business growth."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Meet Prayag <span className="text-gradient-primary">Hype</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            We are the bridge between your business and the people of Prayagraj. 
            We build awareness that translates directly into revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:bg-white/[0.08] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
