"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `relative group cursor-pointer ${
      pathname === path ? "text-white" : "text-white/70"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/80 to-transparent z-50 backdrop-blur-md">

      <div className="w-full h-full flex items-center justify-between px-8 text-white">

        {/* 🔷 LOGO */}
        <Link href="/" className="group relative flex items-center">

          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition duration-500 group-hover:opacity-100"></div>

          <Image
            src="/logo2.avif"
            alt="logo"
            width={64}
            height={64}
            priority
            className="relative h-16 w-auto transition duration-300 group-hover:scale-105 group-hover:-translate-y-1"
          />

        </Link>

        {/* 🔷 LINKS */}
        <div className="flex gap-10 text-sm tracking-widest uppercase">

          <Link href="/" className={`hidden md:block ${linkStyle("/")}`}>
            Home
            <span
              className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <Link href="/projects" className={linkStyle("/projects")}>
            Projects
            <span
              className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                pathname === "/projects"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <Link href="/about" className={linkStyle("/about")}>
            About Me
            <span
              className={`absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300 ${
                pathname === "/about"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

        </div>

        {/* 🔷 CTA (CONTACT → SCROLL) */}
        <Link
          href="/about#contact"
          className="relative px-6 py-2 border border-white text-sm tracking-widest uppercase overflow-hidden group hidden md:block"
        >
          {/* text */}
          <span className="relative z-10">Contact</span>

          {/* animated bg */}
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

          {/* hover text */}
          <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-300">
            Contact
          </span>
        </Link>

      </div>
    </nav>
  );
}