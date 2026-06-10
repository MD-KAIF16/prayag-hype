"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, MapPin, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedCampaigns() {
  const campaigns = [
    {
      name: "Chow Express",
      category: "Restaurant Promotion",
      location: "Kareli Junction, Kareli, Prayagraj",
      desc: "Prayag Hype featured Chow Express, highlighting their Blue Lagoon Signature Drink, fast food menu, and hangout experience. Taste it once and you'll keep coming back.",
      views: "3706+",
      link: "https://www.instagram.com/reel/DZSoz0bo_-j/",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
    },
    {
      name: "Bombay Famous Shawarma",
      category: "Business Story",
      location: "Night Market, Platform No. 6",
      desc: "A storytelling campaign featuring the journey of Bombay Famous Shawarma. Focused on the founder's story, business journey, and customer love.",
      views: "3252+",
      link: "https://www.instagram.com/reel/DZAh7Ido07d/",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
    },
    {
      name: "Atala Pudina Chai",
      category: "Hidden Gem Discovery",
      location: "Atala Chauraha, Prayagraj",
      desc: "A feature highlighting one of Prayagraj's most iconic tea spots, known for Pudina Chai and a generational legacy.",
      views: "34600+",
      link: "https://www.instagram.com/reel/DYuhQ_locmZ/",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80"
    },
    {
      name: "Vitthal International",
      category: "City Update",
      location: "Prayagraj",
      desc: "Coverage of a major fire incident reported at Vitthal International, providing local news, city awareness, and community updates.",
      views: "1257+",
      link: "#",
      img: "https://images.unsplash.com/photo-1543837173-6c26bc89937b?w=800&q=80"
    }
  ];

  return (
    <section id="campaigns" className="py-32 relative bg-[#0a0a0a] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Explore Our <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-lg text-white/60">
              See how we've helped local businesses achieve massive reach and footfall through our strategic campaigns.
            </p>
          </div>
          <Link href="/campaigns" className="text-primary hover:text-white transition-colors flex items-center gap-2 font-medium">
            View All Campaigns <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 aspect-square relative overflow-hidden bg-neutral-900">
                <Image 
                  src={campaign.img}
                  alt={campaign.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                <a 
                  href={campaign.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Watch reel for ${campaign.name}`}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </a>
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-primary" /> {campaign.views} Views
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                    {campaign.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{campaign.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-white/50 mb-4">
                    <MapPin className="w-4 h-4" /> {campaign.location}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {campaign.desc}
                  </p>
                </div>
                
                <div>
                  <a 
                    href={campaign.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Watch reel for ${campaign.name}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-colors"
                  >
                    Watch Reel <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
