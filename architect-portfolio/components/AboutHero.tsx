"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // Crisp out-cubic curve
    },
  },
};

const stagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function AboutHero() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-16">
      {/* PROFILE IMAGE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-40 h-40 shrink-0 transform-gpu"
      >
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-colors duration-300 hover:border-white/40" />
        <Image
          src="/fz.jpg"
          alt="Youcef Merine Sassi"
          fill
          sizes="160px"
          priority
          fetchPriority="high"
          className="object-cover rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        />
      </motion.div>

      {/* HERO TEXT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-xl"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-light tracking-wide leading-tight"
        >
          YOUCEF MERINE SASSI
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-white/70 tracking-wider text-sm md:text-base"
        >
          Architect & Project Planning Specialist
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-white/60 leading-relaxed"
        >
          Bridging architectural design with planning, control, and execution.
        </motion.p>
      </motion.div>
    </div>
  );
}