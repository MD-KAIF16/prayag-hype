import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to grow your<br />
              <span className="text-gradient-primary">business locally?</span>
            </h2>
            <p className="text-white/60 max-w-sm text-lg">
              Join the hundreds of Prayagraj businesses that trust us to turn attention into customers.
            </p>
            <div className="pt-4">
              <Link 
                href="/book-promotion" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Start Promotion <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Restaurant Promotion</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Local Shop Marketing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Influencer Campaigns</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Brand Awareness</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Connect</h3>
            <ul className="space-y-4 text-white/60">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Camera className="w-5 h-5" /> @prayag.hype
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" /> hello@prayaghype.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Prayag Hype. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
