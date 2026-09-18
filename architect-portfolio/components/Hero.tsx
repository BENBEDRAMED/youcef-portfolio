"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse coordinates
  const smoothX = useSpring(x, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  // Normalized transforms (handles any screen size dynamically via window bounds)
  const bgX = useTransform(smoothX, [0, 1920], [-20, 20]);
  const bgY = useTransform(smoothY, [0, 1080], [-20, 20]);

  // Derive linked layers directly (pure GPU transforms, zero React re-renders)
  const gridX = useTransform(bgX, (val) => val * 0.5);
  const gridY = useTransform(bgY, (val) => val * 0.5);

  const contentX = useTransform(bgX, (val) => val * -0.2);
  const contentY = useTransform(bgY, (val) => val * -0.2);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* BACKGROUND IMAGE - Next.js optimized with priority loading */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 w-full h-full scale-110"
      >
        <Image
          src="/overlay2.jpg"
          alt="Hero Background"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* GRID */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 z-10 pointer-events-none
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:60px_60px]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-20 w-full h-full flex items-center px-10 md:px-20"
      >
        <div className="max-w-xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-white/60"
          >
            Architect Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.08em] leading-[1.1]"
          >
            YOUCEF <br />
            <span className="text-white/70">MERINE SASSI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 w-16 h-[1px] bg-white/40 origin-left"
          />

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
      </motion.div>
    </section>
  );
}