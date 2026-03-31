"use client";
import { useState, useEffect } from "react";
import { Home, Code2, BookOpen, Zap, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Skills", href: "#skills", icon: Zap },
  { label: "Experience", href: "#experience", icon: BookOpen },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Show border only after hero section ends
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setPastHero(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/80 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      } ${
        pastHero
          ? "border-b border-blue-500/20"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-xl tracking-tight">
          <span className="gradient-text-blue">Aryan</span>
          <span className="text-white/90">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-2 backdrop-blur-sm">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === label
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-white/60 hover:text-white/90 hover:bg-white/8"
              }`}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="mailto:aryanpandita003@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
        >
          Contact
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-[#0a0a18]/95 border border-white/10 backdrop-blur-xl p-4 flex flex-col gap-2">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActive(label); setMenuOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active === label
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}