"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-black/0 z-50">

<div className="w-full h-full flex items-center justify-between px-8 text-white">

  {/* 🔷 LEFT (Logo) */}
<div className="group relative flex items-center">

  {/* soft glow */}
  <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition duration-500 group-hover:opacity-100"></div>

  {/* logo */}
  <img
    src="/logo2.png"
    alt="logo"
    className="relative h-16 w-auto transition duration-300 group-hover:scale-105 group-hover:-translate-y-1"
  />

</div>
  {/* 🔷 CENTER (Links) */}
  <div className="flex gap-10 text-sm tracking-widest uppercase">

       <Link href="/">
  <span className="relative group cursor-pointer">
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>
</Link>

    <Link href="/projects">
  <span className="relative group cursor-pointer">
    Projects
    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
  </span>
</Link>
<Link href="/about" className="relative group cursor-pointer">
  About Me
  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</Link>

  </div>

  {/* 🔷 RIGHT (CTA Button) */}
  <Link href="/about#contact">
  <button className="relative px-6 py-2 border border-white text-sm tracking-widest uppercase overflow-hidden group">
    
    <span className="relative z-10">Contact</span>

    <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

    <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-300">
      Contact
    </span>

  </button>
</Link>

</div>

    </nav>
  );
}