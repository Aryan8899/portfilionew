"use client";
import { useEffect, useRef } from "react";
import { Layers, Code2, Server, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Blockchain & Smart Contracts",
    icon: Layers,
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Solidity", level: 95 },
      { name: "Smart Contract Dev", level: 92 },
      { name: "DeFi Architecture", level: 88 },
      { name: "ERC Standards", level: 90 },
      { name: "Gas Optimization", level: 85 },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "#10b981",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Solidity", level: 95 },
      { name: "C++", level: 75 },
      { name: "Python", level: 72 },
    ],
  },
  {
    title: "Frontend & Web",
    icon: Server,
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-500",
    skills: [
      { name: "React.js / Next.js", level: 88 },
      { name: "Ethers.js / Web3.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: Cpu,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
    skills: [
      { name: "Hardhat / Truffle", level: 88 },
      { name: "Node.js / Express", level: 82 },
      { name: "MongoDB / PostgreSQL", level: 78 },
      { name: "AWS / Render / Vultr", level: 75 },
    ],
  },
];

const techTags = [
  "Solidity", "Ethereum", "BSC", "LayerZero", "Blockscout", "MetaMask",
  "WalletConnect", "Chainlink", "IPFS", "React", "Next.js", "TypeScript",
  "Hardhat", "Ethers.js", "Web3.js", "MongoDB", "Node.js", "Tailwind CSS",
];

function SkillBar({ name, level, gradient, index }: { name: string; level: number; gradient: string; index: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = `${level}%`;
          }, index * 100);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-white/70 font-mono">{name}</span>
        <span className="text-xs text-white/40 font-mono">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          ref={barRef}
          className={`skill-bar-fill bg-gradient-to-r ${gradient}`}
          style={{ width: "0%", transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Background orb */}
      <div className="absolute left-0 top-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">My Toolkit</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-2">
            My <span className="gradient-text-cyan">Skills</span>
          </h2>
          <div className="section-underline" />
          <p className="text-white/40 text-sm mt-5 max-w-lg mx-auto">
            Specialized in blockchain development and full-stack engineering, with expertise in DeFi protocols and cross-chain architecture.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map(({ title, icon: Icon, color, gradient, skills }) => (
            <div key={title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">{title}</h3>
              </div>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} gradient={gradient} index={i} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="text-center">
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">Technologies & Tools</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {techTags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
