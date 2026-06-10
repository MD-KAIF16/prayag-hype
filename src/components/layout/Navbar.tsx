"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-6 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-6"
      }`}
    >
      <div className={`flex w-full max-w-7xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${isScrolled ? "glass shadow-xl" : "bg-transparent"}`}>
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-xl font-bold tracking-tight text-white">
            Prayag<span className="text-primary">Hype</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {[
            { name: "Services", href: "/services" },
            { name: "Campaigns", href: "/campaigns" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 text-sm hover:bg-primary/90">
            Promote Business
          </MagneticButton>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
