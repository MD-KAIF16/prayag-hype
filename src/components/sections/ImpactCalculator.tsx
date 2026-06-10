"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function ImpactCalculator() {
  const [customers, setCustomers] = useState(50);
  const [bill, setBill] = useState(500);

  // Simplified logic for calculation to show potential
  const currentMonthly = customers * bill * 30;
  // Assume a 20% increase in customers with Prayag Hype
  const newCustomers = Math.floor(customers * 1.2);
  const newMonthly = newCustomers * bill * 30;
  const growth = newMonthly - currentMonthly;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="py-32 relative bg-[#0a0a0a]">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Calculate Your <br />
                <span className="text-gradient-primary">Growth Potential</span>
              </h2>
              <p className="text-white/60 mb-10">
                See how even a small 20% increase in footfall driven by our local marketing can impact your monthly revenue.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white/80">Current Daily Customers</label>
                    <span className="text-primary font-bold">{customers}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    value={customers} 
                    onChange={(e) => setCustomers(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white/80">Average Bill Value (₹)</label>
                    <span className="text-primary font-bold">₹{bill}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={bill} 
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-black/40 rounded-3xl p-8 border border-white/5 space-y-8">
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider font-medium mb-1">Current Monthly Revenue</div>
                  <div className="text-3xl font-semibold text-white/80">{formatCurrency(currentMonthly)}</div>
                </div>
                
                <div className="h-px w-full bg-white/10" />
                
                <div>
                  <div className="text-sm text-white/50 uppercase tracking-wider font-medium mb-1">Projected Monthly Revenue</div>
                  <div className="text-4xl font-bold text-white">{formatCurrency(newMonthly)}</div>
                </div>

                <motion.div 
                  key={growth}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/20 border border-primary/30 rounded-2xl p-6"
                >
                  <div className="text-sm text-primary-100 font-medium mb-1">Potential Monthly Growth</div>
                  <div className="text-3xl font-bold text-primary">+{formatCurrency(growth)}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
