import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | Prayag Hype",
  description: "Prayag Hype is a local discovery and promotion platform dedicated to showcasing the best of Prayagraj.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <section className="pt-40 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            About <span className="text-gradient-primary">Prayag Hype</span>
          </h1>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Prayag Hype is a local discovery and promotion platform dedicated to showcasing the best of Prayagraj.
          </p>
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            From iconic food spots and hidden gems to inspiring business stories and city updates, we help people discover what makes Prayagraj special. At the same time, we help local businesses gain visibility through powerful digital storytelling.
          </p>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              We don't just create content. We help local businesses get discovered. Our mission is to be the definitive bridge between high-quality local businesses and the people of Prayagraj.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <div className="text-4xl font-bold text-primary mb-2">Discovery</div>
              <p className="text-white/60">Helping locals and visitors find the absolute best food, shops, and experiences.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
              <div className="text-4xl font-bold text-primary mb-2">Growth</div>
              <p className="text-white/60">Turning views into footfall, and footfall into revenue for local founders.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
