"use client";

import { Check, X } from "lucide-react";

export function Comparison() {
  const features = [
    { name: "Targeted Local Reach", hype: true, traditional: false },
    { name: "Measurable ROI", hype: true, traditional: false },
    { name: "High Engagement", hype: true, traditional: false },
    { name: "Visual Storytelling", hype: true, traditional: false },
    { name: "Cost Effective", hype: true, traditional: false },
    { name: "Gen-Z & Millennial Focus", hype: true, traditional: false },
  ];

  return (
    <section className="py-32 relative bg-[#050505]">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why Choose <span className="text-gradient-primary">Prayag Hype</span>?
          </h2>
          <p className="text-lg text-white/60">
            Stop wasting money on traditional ads that people ignore.
          </p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6">
            <div className="font-medium text-white/60">Feature</div>
            <div className="font-bold text-primary text-center text-lg">Prayag Hype</div>
            <div className="font-medium text-white/40 text-center text-lg">Traditional Ads</div>
          </div>

          <div className="divide-y divide-white/5">
            {features.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 p-6 hover:bg-white/[0.02] transition-colors">
                <div className="font-medium text-white/80">{feature.name}</div>
                <div className="flex justify-center items-center">
                  {feature.hype ? (
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  {feature.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 text-white/30 flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
