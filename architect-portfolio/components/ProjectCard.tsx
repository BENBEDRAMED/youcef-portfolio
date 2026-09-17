"use client";

import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function ProjectCard({ title, subtitle, image, href }: Props) {
  return (
    <Link href={href} className="group block">
      
      <div className="overflow-hidden relative">

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* DARK OVERLAY (on hover) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      </div>

      {/* TEXT */}
      <div className="mt-4 text-white relative z-10">
        <h2 className="text-lg font-light tracking-wide">
          {title}
        </h2>
        <p className="text-sm text-white/50">
          {subtitle}
        </p>
      </div>

    </Link>
  );
}