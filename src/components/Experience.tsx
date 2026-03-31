"use client";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const timeline = [
  {
    type: "work",
    title: "Blockchain Developer",
    company: "Tarality",
    period: "Jun 2025 – Present",
    location: "Noida, India",
    bullets: [
      "Built a leverage trading system with 10x leverage — liquidation engine, collateral management, and Chainlink oracle integration.",
      "Architected and deployed a Blockchain Explorer for the Nowa Network (custom L2 chain) using Blockscout.",
      "Built a cross-chain bridge using LayerZero and contributed to a DEX with AMM logic, liquidity pools, and yield farming.",
      "Reduced gas costs by ~30% through restructuring loop logic in core ERC-20 contracts.",
    ],
    tags: ["Solidity", "LayerZero", "Blockscout", "AMM", "Chainlink"],
  },
  {
    type: "work",
    title: "Full Stack Blockchain Developer",
    company: "Stack Meridian",
    period: "Dec 2024 – May 2025",
    location: "Remote",
    bullets: [
      "Deployed and maintained Solidity smart contracts on Ethereum and Binance Smart Chain for multiple client projects.",
      "Integrated blockchain functionality into frontend applications using Hardhat, Ethers.js, and Web3.js.",
      "Engineered wallet authentication and transaction flows using MetaMask and WalletConnect.",
    ],
    tags: ["Solidity", "Ethers.js", "React", "Hardhat", "MetaMask"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "PM Interview Prep Club",
    period: "Sep 2024 – Dec 2024",
    location: "Remote",
    bullets: [
      "Developed 15+ reusable UI components using React and Tailwind CSS.",
      "Built RESTful APIs using Node.js and Express.js for authentication, data handling, and scoring logic.",
    ],
    tags: ["React", "Node.js", "Tailwind CSS", "Express"],
  },
  {
    type: "work",
    title: "Full Stack Blockchain Developer",
    company: "AD99 India",
    period: "Jan 2024 – Aug 2024",
    location: "Noida, India",
    bullets: [
      "Built and enhanced blockchain-based web applications using React, Node.js, MongoDB, and Solidity.",
      "Deployed applications on cloud platforms including AWS, Render, and Vultr.",
      "Optimized APIs and database queries to improve backend responsiveness.",
    ],
    tags: ["React", "MongoDB", "AWS", "Solidity"],
  },
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "VIIT Pune",
    period: "2021 – 2025",
    location: "Pune, India",
    bullets: [
      "CGPA: 9.0",
      "Ranked #10 in DAPP competition at Dapp World out of hundreds of participants.",
      "Shortlisted in Top 20 candidates at DevFest Noida for AI-focused development challenge.",
    ],
    tags: ["Computer Science", "Algorithms", "Distributed Systems"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineTrackRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = lineTrackRef.current;
      if (!section || !track) return;

      const trackRect = track.getBoundingClientRect();
      const trackTop = trackRect.top;
      const trackTotal = trackRect.height;
      const viewportH = window.innerHeight;

      // How far the line has been "revealed" — starts when top enters viewport center
      const scrolled = viewportH * 0.5 - trackTop;
      const progress = Math.min(Math.max(scrolled / trackTotal, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 px-6">
      <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Career</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-2">
            Professional <span className="gradient-text-purple">Journey</span>
          </h2>
          <div className="section-underline" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ghost track (full height, invisible) */}
          <div
            ref={lineTrackRef}
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "transparent" }}
          />

          {/* Static dim background line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block -translate-x-1/2"
            style={{ background: "rgba(59,130,246,0.10)" }}
          />

          {/* Animated fill line */}
          <div
            className="absolute left-1/2 top-0 w-px hidden md:block -translate-x-1/2 origin-top transition-none"
            style={{
              height: `${lineHeight}%`,
              background: "linear-gradient(to bottom, #3b82f6, #6366f1)",
              boxShadow: "0 0 8px 1px rgba(99,102,241,0.45)",
              transition: "height 0.1s linear",
            }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] glass-card rounded-2xl p-6 ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.type === "education"
                          ? "bg-purple-500/15 border border-purple-500/25"
                          : "bg-blue-500/15 border border-blue-500/25"
                      }`}>
                        {item.type === "education"
                          ? <GraduationCap size={15} className="text-purple-400" />
                          : <Briefcase size={15} className="text-blue-400" />
                        }
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-white text-sm">{item.title}</h3>
                        <p className={`text-xs font-semibold ${
                          item.type === "education" ? "text-purple-400" : "text-blue-400"
                        }`}>{item.company}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/55">
                          <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span key={t} className="tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#050508] z-10 shadow-lg shadow-blue-500/40" />

                  {/* Date label */}
                  <div className={`md:w-[calc(50%-2rem)] flex flex-col gap-1 ${
                    isLeft
                      ? "md:ml-8 md:items-start"
                      : "md:mr-8 md:items-end"
                  } items-start pt-5`}>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-blue-400">
                      <Calendar size={11} />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-white/35">
                      <MapPin size={11} />
                      {item.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}