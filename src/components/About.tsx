"use client";
import { Github, Linkedin, Twitter, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: image */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full mx-auto md:mx-0 max-w-sm sm:max-w-md md:max-w-full">
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-blue-500/20"
                style={{ height: "clamp(260px, 55vw, 420px)" }}
              >
                <img
                  src="/ARYANPHOTO.png"
                  alt="Aryan Pandita"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050508]/60 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-blue-500/8 blur-2xl -z-10 scale-105" />
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="mb-2">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-display font-bold text-white mb-2 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.5rem)" }}
            >
              Building the{" "}
              <span className="gradient-text-purple">Decentralized</span> Web
            </h2>
            <div className="section-underline ml-0 mb-5 sm:mb-6" />

            {/* Body text */}
            <div className="space-y-3 sm:space-y-4 text-white/60 leading-relaxed mb-6 sm:mb-8"
              style={{ fontSize: "clamp(0.78rem, 2.2vw, 0.875rem)" }}
            >
              <p>
                Blockchain Developer with{" "}
                <span className="text-white">2+ years</span> of experience designing
                and building decentralized applications and deploying smart contracts
                across Ethereum, BSC, and custom L2 networks.
              </p>
              <p>
                Proficient in end-to-end development with strong expertise in both
                backend systems and intuitive frontend interfaces. Experienced in
                developing{" "}
                <span className="text-cyan-400">DeFi protocols</span>,{" "}
                <span className="text-purple-400">DEXs</span>, cross-chain bridges,
                and blockchain explorers.
              </p>
              <p>
                Committed to writing secure, scalable, and high-performance code
                with a strong focus on{" "}
                <span className="text-green-400">gas optimization</span>.
              </p>
            </div>

            {/* Info tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {[
                {
                  icon: MapPin,
                  color: "text-blue-400",
                  text: "Noida, India",
                },
                {
                  icon: GraduationCap,
                  color: "text-purple-400",
                  text: "B.Tech CS — VIIT Pune (9.0 CGPA)",
                },
                {
                  icon: Briefcase,
                  color: "text-green-400",
                  text: "Currently @ Tarality",
                },
              ].map(({ icon: Icon, color, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 text-white/50 font-mono bg-white/4 border border-white/8 rounded-full px-3 py-1"
                  style={{ fontSize: "clamp(0.65rem, 2vw, 0.75rem)" }}
                >
                  <Icon size={11} className={`${color} flex-shrink-0`} />
                  {text}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: Github, href: "https://github.com/Aryan8899", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/aryan-pandita-b041a022a",
                  label: "LinkedIn",
                },
                { icon: Twitter, href: "https://x.com/aryan94492", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 flex items-center justify-center text-white/50 hover:text-blue-400 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}