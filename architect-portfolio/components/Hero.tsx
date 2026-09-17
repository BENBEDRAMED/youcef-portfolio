"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use fixed range (safe for React)
  const moveX = useTransform(x, [0, 1000], [-15, 15]);
  const moveY = useTransform(y, [0, 1000], [-15, 15]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* 🔥 PARALLAX BACKGROUND */}
      <motion.div
        style={{
          x: moveX,
          y: moveY,
          backgroundImage: "url('/overlay2.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />
        {/* 🔲 GRID LINES */}
<div className="absolute inset-0 z-10 pointer-events-none
  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
  bg-[size:60px_60px]">
</div>
      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex items-center px-10 md:px-20">
        <div className="max-w-xl text-white">

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/60"
          >
            Architect Engineer
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.08em] leading-[1.1]"
          >
            YOUCEF <br />
            <span className="text-white/70">MERINE SASSI</span>
          </motion.h1>

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 w-16 h-[1px] bg-white/40 origin-left"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-white/60 leading-relaxed max-w-md"
          >
            Designing spaces where structure meets emotion, combining modern
            architecture with precision and clarity.
          </motion.p>

        </div>
      </div>
    </section>
  );
}