"use client";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter, ChevronDown, Download } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: "80px 16px 40px" }}
    >
      {/* Floating orbs — desktop only */}
      <div
        className="hidden lg:block absolute top-32 right-32 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          opacity: 0.25,
          animation: "float 7s ease-in-out infinite",
          filter: "blur(20px)",
        }}
      />
      <div className="hidden lg:block absolute top-20 right-20 w-8 h-8 rounded-full bg-blue-400 pointer-events-none" style={{ animation: "float 5s ease-in-out infinite 1s" }} />
      <div className="hidden lg:block absolute top-28 right-64 w-4 h-4 rounded-full bg-green-400 pointer-events-none" style={{ animation: "float 4s ease-in-out infinite 0.5s" }} />
      <div className="hidden lg:block absolute top-40 right-16 w-5 h-5 rounded-full bg-purple-500 pointer-events-none" style={{ animation: "float 6s ease-in-out infinite 2s" }} />
      <div className="hidden lg:block absolute top-52 right-36 w-4 h-4 rounded-full bg-red-400 pointer-events-none" style={{ animation: "float 5.5s ease-in-out infinite 1.5s" }} />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-mono mb-6 sm:mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          Available for opportunities
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="font-display font-bold leading-tight mb-3 sm:mb-4 w-full"
          style={{ fontSize: "clamp(2rem, 8vw, 4.5rem)" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-blue">Aryan</span>{" "}
          <span className="text-white">Pandita</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-semibold text-white/80 mb-2 sm:mb-3 w-full"
          style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.25rem)" }}
        >
          <span className="gradient-text-cyan">Blockchain Developer</span>
          {" & "}
          <span className="gradient-text-purple">Full Stack Engineer</span>
        </p>

        {/* Description */}
        <p
          className="text-white/50 mb-8 sm:mb-10 max-w-[90%] sm:max-w-xl mx-auto font-mono leading-relaxed"
          style={{ fontSize: "clamp(0.7rem, 2.5vw, 0.875rem)" }}
        >
          Specializing in{" "}
          <span className="text-cyan-400">Smart Contracts</span>,{" "}
          <span className="text-purple-400">DeFi Protocols</span>,{" "}
          <span className="text-blue-400">Cross-Chain Architecture</span>,{" "}
          <span className="text-green-400">Full Stack dApps</span>, and{" "}
          <span className="text-pink-400">DApp Development</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto mb-10 sm:mb-12 px-4 sm:px-0">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Explore My Work
            <ChevronDown size={16} />
          </a>
          <a
            href="/AryanPandita_Resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-white/15 hover:border-blue-500/40 text-white/70 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-3 sm:gap-4 justify-center">
          {[
            { icon: Github, href: "https://github.com/Aryan8899", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aryan-pandita-b041a022a", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/aryan94492", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 flex items-center justify-center text-white/50 hover:text-blue-400 transition-all duration-200 backdrop-blur-sm"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 text-[10px] sm:text-xs font-mono">
        <span>Scroll Down</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}