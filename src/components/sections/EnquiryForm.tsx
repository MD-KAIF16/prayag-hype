"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    instagram: "",
    businessType: "Restaurant",
    location: "",
    goal: "More Footfall",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate WhatsApp message
    const text = `Hello Prayag Hype,
    
Business Name: ${formData.businessName}
Owner Name: ${formData.ownerName}
Location: ${formData.location}
Instagram: ${formData.instagram}
Business Type: ${formData.businessType}

I want to promote my business through Prayag Hype.

Please contact me.
${formData.message ? `\nAdditional Message: ${formData.message}` : ''}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919876543210?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 relative bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 lg:py-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s build your <br />
              <span className="text-gradient-primary">Growth Engine</span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Ready to reach thousands of local customers? Fill out the form and we&apos;ll get back to you within 24 hours with a customized growth plan.
            </p>
            
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <div className="font-bold text-white mb-1">Submit Details</div>
                  <div className="text-sm text-white/50">Tell us about your business and goals.</div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4 opacity-70">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 font-bold">2</div>
                <div>
                  <div className="font-bold text-white mb-1">Strategy Call</div>
                  <div className="text-sm text-white/50">We craft a custom promotion plan.</div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4 opacity-50">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/50 font-bold">3</div>
                <div>
                  <div className="font-bold text-white mb-1">Execution</div>
                  <div className="text-sm text-white/50">Content goes live, footfall increases.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Business Name</label>
                    <input 
                      required name="businessName" value={formData.businessName} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="The Beanery"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Owner Name</label>
                    <input 
                      required name="ownerName" value={formData.ownerName} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Rahul Sharma"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Phone Number</label>
                    <input 
                      required name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Instagram Handle</label>
                    <input 
                      name="instagram" value={formData.instagram} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="@thebeanery"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Business Type</label>
                    <select 
                      name="businessType" value={formData.businessType} onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option>Restaurant</option>
                      <option>Cafe</option>
                      <option>Food Brand</option>
                      <option>Local Shop</option>
                      <option>Salon</option>
                      <option>Gym</option>
                      <option>Coaching Institute</option>
                      <option>Event Organizer</option>
                      <option>Local Startup</option>
                      <option>Hotel</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Business Location</label>
                    <input 
                      required name="location" value={formData.location} onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="e.g. Civil Lines, Prayagraj"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Primary Goal</label>
                    <select 
                      name="goal" value={formData.goal} onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option>More Footfall</option>
                      <option>Brand Awareness</option>
                      <option>Promote Specific Event</option>
                      <option>Influencer Marketing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Monthly Budget (₹)</label>
                    <select 
                      name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                    >
                      <option>Under 10k</option>
                      <option>10k - 25k</option>
                      <option>25k - 50k</option>
                      <option>50k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Message (Optional)</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors min-h-[120px] resize-none"
                    placeholder="Tell us a bit more about what you're looking for..."
                  />
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  Submit Enquiry <Send className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-white/40 mt-4">
                  By submitting, you will be redirected to WhatsApp to send these details to our team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
