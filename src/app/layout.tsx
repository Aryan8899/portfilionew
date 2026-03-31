import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Pandita — Blockchain Developer",
  description: "Blockchain Developer with 2+ years of experience. Smart contracts, DeFi, DEX, cross-chain bridges.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050508] text-white antialiased">{children}</body>
    </html>
  );
}
