import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { MessageCircle, Mail, Camera } from "lucide-react";

export const metadata = {
  title: "Contact Us | Prayag Hype",
  description: "Get in touch with Prayagraj's #1 growth engine.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 pt-24">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get in <span className="text-gradient-primary">Touch</span>
          </h1>
          <p className="text-white/60 text-lg">
            Ready to grow your business in Prayagraj? Send us an enquiry or reach out through our social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-20">
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
            <p className="text-white/50 text-sm">Message us directly</p>
          </a>
          
          <a href="https://instagram.com/prayaghype" target="_blank" rel="noreferrer" className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
            <div className="w-16 h-16 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-1">Instagram</h3>
            <p className="text-white/50 text-sm">@prayaghype</p>
          </a>
          
          <a href="mailto:hello@prayaghype.com" className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-white/50 text-sm">hello@prayaghype.com</p>
          </a>
        </div>
      </div>
      
      {/* Enquiry Form handles its own top padding, we negative margin it or just let it sit below */}
      <div className="-mt-16">
        <EnquiryForm />
      </div>
      
      <Footer />
    </main>
  );
}
