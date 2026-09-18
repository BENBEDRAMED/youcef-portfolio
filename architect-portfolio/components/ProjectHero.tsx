"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

type Props = {
  title: string;
  type: string;
  year: string;
  cover: string;
};

export default function ProjectHero({ title, type, year, cover }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse input to eliminate stutter
  const smoothX = useSpring(x, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  const moveX = useTransform(smoothX, [0, 1920], [-20, 20]);
  const moveY = useTransform(smoothY, [0, 1080], [-20, 20]);

  return (
    <section
      className="relative w-full h-[630px] overflow-hidden flex items-center"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* Optimized Next.js image layer */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 w-full h-full scale-110"
      >
        <Image
          src={cover}
          alt={title}
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark & Gradient overlays */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 px-10 md:px-20 max-w-2xl text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light tracking-wide leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-white/70 tracking-wider text-sm md:text-base"
        >
          {type} — {year}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 w-16 h-[1px] bg-white/40 origin-left"
        />
      </div>
    </section>
  );
}