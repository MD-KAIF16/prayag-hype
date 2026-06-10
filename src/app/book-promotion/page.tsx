import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export const metadata = {
  title: "Book Promotion | Prayag Hype",
  description: "Start promoting your local business today.",
};

export default function BookPromotionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 pt-24">
      <Navbar />
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Book Your <span className="text-gradient-primary">Promotion</span></h1>
        <p className="text-white/60 mb-12 text-lg">
          Please fill out the details below to help us understand your business better before we hop on a strategy call.
        </p>
      </div>
      <EnquiryForm />
      <Footer />
    </main>
  );
}
