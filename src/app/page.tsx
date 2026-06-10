import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Services } from "@/components/sections/Services";
import { FeaturedCampaigns } from "@/components/sections/FeaturedCampaigns";
import { ImpactCalculator } from "@/components/sections/ImpactCalculator";
import { Dashboard } from "@/components/sections/Dashboard";
import { Comparison } from "@/components/sections/Comparison";
import { CityDiscovery } from "@/components/sections/CityDiscovery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Solution />
      <Services />
      <FeaturedCampaigns />
      <ImpactCalculator />
      <Dashboard />
      <Comparison />
      <CityDiscovery />
      <Testimonials />
      <Faq />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
