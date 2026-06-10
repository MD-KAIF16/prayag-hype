import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://prayaghype.com'),
  title: {
    default: "Prayag Hype | Local Business Promotion & City Discovery",
    template: "%s | Prayag Hype"
  },
  description: "Prayagraj's #1 Local Hype Page. We help local businesses, restaurants, and brands get discovered through high-performing content and influencer campaigns.",
  keywords: ["Prayagraj Promotion", "Restaurant Promotion Prayagraj", "Cafe Promotion Prayagraj", "Influencer Marketing Prayagraj", "Food Blogger Prayagraj", "Business Promotion Prayagraj"],
  authors: [{ name: "Prayag Hype" }],
  creator: "Prayag Hype",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prayaghype.com",
    title: "Prayag Hype | Local Business Promotion & City Discovery",
    description: "Prayagraj's #1 Local Hype Page. We help local businesses get discovered.",
    siteName: "Prayag Hype",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayag Hype",
    description: "Prayagraj's #1 Local Hype Page.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prayag Hype",
    "image": "https://prayaghype.com/logo.png",
    "description": "Prayagraj's #1 Local Hype Page and Business Growth Platform.",
    "url": "https://prayaghype.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Prayagraj",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/prayaghype"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
