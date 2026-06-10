"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is Prayag Hype different from a regular marketing agency?",
    answer: "We are a local media and discovery platform first. We have a built-in audience of Prayagraj locals who trust our recommendations. When we promote your business, you're not just buying an ad, you're getting an endorsement to our massive local audience."
  },
  {
    question: "Do you guarantee a certain number of customers?",
    answer: "While we cannot guarantee exact footfall, our track record shows significant growth for 95%+ of our partners. We guarantee high-quality content and targeted local reach that maximizes your chances of conversion."
  },
  {
    question: "How long does a typical campaign take?",
    answer: "From the initial shoot to the final content going live, a standard campaign takes about 7-10 days. We focus on rapid execution while maintaining ultra-premium quality."
  },
  {
    question: "Do you only work with restaurants and cafes?",
    answer: "No, we work with fashion boutiques, salons, gyms, real estate developers, and local events. If your target audience is in Prayagraj, we can help you reach them."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative bg-[#0a0a0a]">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass-card rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-transparent hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
