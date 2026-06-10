"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, TrendingUp, Users } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      name: "The Beanery Cafe",
      challenge: "Opened a new location, needed initial footfall and awareness among college students.",
      results: {
        views: "850K+",
        reach: "600K+",
        engagement: "12%",
        outcome: "300% increase in daily walk-ins within first week."
      }
    },
    {
      name: "El Chico Restaurant",
      challenge: "Wanted to promote their new weekend buffet to a premium audience.",
      results: {
        views: "1.2M+",
        reach: "850K+",
        engagement: "9%",
        outcome: "Fully booked weekends for the next 2 months."
      }
    }
  ];

  return (
    <section id="results" className="py-32 relative bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Real Results for <br />
            <span className="text-gradient-primary">Prayagraj Businesses</span>
          </h2>
          <p className="text-lg text-white/60">
            We don&apos;t just sell views. We sell growth. Here&apos;s how we&apos;ve transformed local businesses.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-primary font-medium mb-6">
                    Case Study {index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{study.name}</h3>
                  <p className="text-white/60 mb-8">
                    <strong className="text-white block mb-2">The Challenge:</strong>
                    {study.challenge}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-medium hover:text-white transition-colors group">
                    View Full Campaign <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <BarChart3 className="w-6 h-6 text-primary mb-4" />
                    <div className="text-2xl font-bold text-white mb-1">{study.results.views}</div>
                    <div className="text-sm text-white/50 font-medium">TOTAL VIEWS</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <Users className="w-6 h-6 text-primary mb-4" />
                    <div className="text-2xl font-bold text-white mb-1">{study.results.reach}</div>
                    <div className="text-sm text-white/50 font-medium">LOCAL REACH</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <TrendingUp className="w-6 h-6 text-primary mb-4" />
                    <div className="text-2xl font-bold text-white mb-1">{study.results.engagement}</div>
                    <div className="text-sm text-white/50 font-medium">ENGAGEMENT</div>
                  </div>
                  <div className="bg-primary/20 rounded-2xl p-6 border border-primary/30 col-span-2 md:col-span-1 flex flex-col justify-center">
                    <div className="text-lg font-bold text-white mb-2 leading-tight">Business Outcome</div>
                    <div className="text-sm text-primary-100">{study.results.outcome}</div>
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
