"use client";
import { ExternalLink, Github, Layers, Link2, TrendingUp, Search, Coins, Wallet } from "lucide-react";

const projects = [
  {
    title: "Nowa Finance Blockchain Explorer",
    description:
      "Architected and deployed a fully functional blockchain explorer for the Nowa Network (custom L2 chain) using Blockscout, enabling real-time indexing of blocks, transactions, token balances, and wallet activity.",
    tags: ["Blockscout", "L2", "Next.js", "WebSockets", "Data Indexing"],
    icon: Search,
    color: "#3b82f6",
    link: "https://explorer.nowa.finance",
    github: null,
  },
  {
    title: "Leverage Trading System",
    description:
      "Created an on-chain leverage trading protocol allowing users to open long/short positions with up to 10x leverage. Built liquidation engine, collateral vault, and Chainlink price feeds for real-time mark price monitoring.",
    tags: ["Solidity", "Chainlink", "DeFi", "EVM"],
    icon: TrendingUp,
    color: "#10b981",
    link: null,
    github: null,
  },
  {
    title: "Cross-Chain Bridge — LayerZero",
    description:
      "Built a cross-chain bridge using LayerZero protocol enabling secure, trustless asset transfers across EVM-compatible networks. Applied smart contract logic for locking, minting, and burning tokens.",
    tags: ["LayerZero", "Solidity", "Cross-Chain", "IBC"],
    icon: Link2,
    color: "#8b5cf6",
    link: null,
    github: null,
  },
  {
    title: "SuiDex — DEX on Sui",
    description:
      "Delivered integration of SuiDex, a DEX built on the Sui blockchain. Implemented liquidity pool and yield farming modules enabling users to provide liquidity, earn LP tokens, and participate in farming rewards.",
    tags: ["Sui", "Move", "DEX", "Yield Farming", "AMM"],
    icon: Coins,
    color: "#f59e0b",
    link: "https://dex.suidex.org",
    github: null,
  },
  {
    title: "ICO Smart Contract — BSC Mainnet",
    description:
      "Engineered and designed a custom ICO smart contract on the Binance Smart Chain mainnet for secure token sales and investor vesting schedules.",
    tags: ["Solidity", "BSC", "ICO", "Vesting"],
    icon: Layers,
    color: "#06b6d4",
    link: null,
    github: "https://github.com/Aryan8899",
  },
  {
    title: "Multisignature Wallet",
    description:
      "Designed and contributed to a multi-signature wallet solution enhancing on-chain governance and fund security for DAOs and private organizations.",
    tags: ["Solidity", "DAO", "Governance", "Security"],
    icon: Wallet,
    color: "#ec4899",
    link: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute left-1/3 bottom-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Work</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-2">
            My <span className="gradient-text-cyan">Projects</span>
          </h2>
          <div className="section-underline" />
          <p className="text-white/40 text-sm mt-5 max-w-md mx-auto">
            DeFi protocols, DEXs, cross-chain bridges, and blockchain infrastructure.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 flex flex-col group"
                style={{
                  borderColor: `${project.color}18`,
                }}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: project.color }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-sm leading-tight pt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-white/50 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      Live / Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <Github size={11} />
                      Code
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <span className="flex items-center gap-1.5 text-xs text-white/25 font-mono">
                      Private / Enterprise
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
