import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services as ServicesSection } from "@/components/sections/Services";

export const metadata = {
  title: "Services | Prayag Hype",
  description: "Explore our premium local media and business promotion services.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Our <span className="text-gradient-primary">Services</span>
        </h1>
        <p className="text-white/60 mb-12 text-lg max-w-2xl">
          We offer comprehensive promotion and visibility packages for restaurants, cafes, local shops, and brands across Prayagraj.
        </p>
      </div>
      <ServicesSection />
      <Footer />
    </main>
  );
}
