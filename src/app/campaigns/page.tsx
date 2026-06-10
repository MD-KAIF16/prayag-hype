"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Eye, Play, ArrowUpRight, Search, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function CampaignsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Food", "Business Stories", "Hidden Gems", "City Updates"];
  
  const allCampaigns = [
    {
      name: "Chow Express",
      category: "Food",
      location: "Kareli Junction, Kareli, Prayagraj",
      desc: "Prayag Hype featured Chow Express, highlighting their Blue Lagoon Signature Drink, fast food menu, and hangout experience.",
      views: "3706+",
      link: "https://www.instagram.com/reel/DZSoz0bo_-j/",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
    },
    {
      name: "Bombay Famous Shawarma",
      category: "Business Stories",
      location: "Night Market, Platform No. 6",
      desc: "A storytelling campaign featuring the journey of Bombay Famous Shawarma.",
      views: "3252+",
      link: "https://www.instagram.com/reel/DZAh7Ido07d/",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
    },
    {
      name: "Atala Pudina Chai",
      category: "Hidden Gems",
      location: "Atala Chauraha, Prayagraj",
      desc: "A feature highlighting one of Prayagraj's most iconic tea spots, known for Pudina Chai.",
      views: "34600+",
      link: "https://www.instagram.com/reel/DYuhQ_locmZ/",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80"
    },
    {
      name: "Vitthal International",
      category: "City Updates",
      location: "Prayagraj",
      desc: "Coverage of a major fire incident reported at Vitthal International.",
      views: "1257+",
      link: "#",
      img: "https://images.unsplash.com/photo-1543837173-6c26bc89937b?w=800&q=80"
    }
  ];

  const filteredCampaigns = allCampaigns.filter(c => {
    const matchesFilter = filter === "All" || c.category === filter;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Featured <span className="text-gradient-primary">Campaigns</span>
        </h1>
        <p className="text-white/60 mb-12 text-lg max-w-2xl">
          Explore our recent work across Prayagraj. From viral food discoveries to local business stories.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-label={`Filter by ${cat}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "bg-primary text-black" 
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search campaigns"
              className="w-full md:w-64 pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredCampaigns.map((campaign, i) => (
            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group glass border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
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
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit">
                    <BadgeCheck className="w-3 h-3" /> Verified Campaign
                  </span>
                  <span className="bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider w-fit">
                    {campaign.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{campaign.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-white/60 mb-4">
                  <MapPin className="w-4 h-4 text-primary" /> {campaign.location}
                </div>
                <p className="text-white/70 leading-relaxed mb-8 flex-grow text-sm">
                  {campaign.desc}
                </p>
                
                <div>
                  <a 
                    href={campaign.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Watch reel for ${campaign.name}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    Watch Reel <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
