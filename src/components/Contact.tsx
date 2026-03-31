"use client";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Trophy, Star } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    sub: "Open Source",
    href: "https://github.com/Aryan8899",
    color: "#f0f0f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "Professional",
    href: "https://www.linkedin.com/in/aryan-pandita-b041a022a",
    color: "#0ea5e9",
  },
  {
    icon: Twitter,
    label: "Twitter",
    sub: "Thoughts & Updates",
    href: "https://x.com/aryan94492",
    color: "#38bdf8",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "aryanpandita003@gmail.com",
    href: "mailto:aryanpandita003@gmail.com",
    color: "#f59e0b",
  },
];

const achievements = [
  { icon: Trophy, text: "Ranked #10 in DAPP competition at Dapp World", color: "#f59e0b" },
  { icon: Star, text: "Shortlisted in Top 20 at DevFest Noida – AI challenge", color: "#a78bfa" },
  { icon: ExternalLink, text: "Live projects: explorer.nowa.finance, dex.suidex.org", color: "#10b981" },
];

export default function Contact() {
  return (
    <>
      {/* Achievements */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">Recognition</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2 mb-2">
              Achievements
            </h2>
            <div className="section-underline" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map(({ icon: Icon, text, color }, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <p className="text-xs text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Reach Out</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-2">
            Get In <span className="gradient-text-blue">Touch</span>
          </h2>
          <div className="section-underline" />

          <p className="text-white/40 text-sm mt-5 mb-12 max-w-md mx-auto">
            I&apos;m always open to discussing new projects, blockchain development opportunities, or interesting collaborations.
          </p>

          {/* Social grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {socials.map(({ icon: Icon, label, sub, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{label}</div>
                  <div className="text-white/35 text-xs mt-0.5 break-all">{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg">
            <span className="gradient-text-blue">Aryan</span>
            <span className="text-white/90">.</span>
          </div>
          <p className="text-white text-xs font-mono text-center">
            © 2025 Aryan Pandita. Built with ❤️
          </p>
          <div className="flex gap-3">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-white/60 hover:border-white/20 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
