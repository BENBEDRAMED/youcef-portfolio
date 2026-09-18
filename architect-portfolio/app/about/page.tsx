"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

/* 🎯 ANIMATIONS */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const stagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">

      {/* 🔥 BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/about1.png"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 🌑 OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="pt-32 px-10 md:px-20 max-w-7xl mx-auto">

        {/* 🔷 TOP BLOCK */}
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* 🧊 PROFILE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            className="relative w-40 h-40"
          >
            {/* GLASS */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />

            {/* IMAGE */}
            <Image
              src="/fz.jpg"
              alt="profile"
              fill
              className="object-cover rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* 📝 HERO TEXT */}
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

        {/* 🧠 ABOUT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-24 grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              About
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Philosophy
            </h2>
          </div>

          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              My work combines architectural design with project planning and control.
              I approach each project as a system where space, structure, and execution must align.
            </p>

            <p>
              Through my experience in large-scale infrastructure projects, I developed
              a strong ability to translate complex requirements into structured solutions.
              My focus is on clarity, precision, and coherence between design and construction.
            </p>
          </div>
        </motion.div>

        {/* 🧩 EXPERTISE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Expertise
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white/70">
            {[
              "Project Planning",
              "Construction Scheduling",
              "Architectural Design",
              "Technical Drawings",
              "Cost Analysis",
              "Project Monitoring",
            ].map((item, i) => (
              <motion.p
                key={i}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="cursor-default"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* 🏗 EXPERIENCE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Professional Path
            </h2>
          </div>

          <div className="space-y-6 text-white/70">
            {[
              ["2025 — Today", "Project Planner — Cosider (In Salah)"],
              ["2024 — 2025", "Planning Intern — Cosider (Tizi-Ouzou)"],
              ["2023 — 2024", "Architect — Relizane"],
            ].map(([date, role], i) => (
              <motion.div key={i} whileHover={{ x: 5 }}>
                <p className="text-white">{date}</p>
                <p>{role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 📩 CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 mb-20 grid md:grid-cols-2 gap-16"
          id="contact"
        >
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Get in Touch
            </h2>
          </div>

          <div className="text-white/80 space-y-6">

            {/* EMAIL */}
            <a
              href="mailto:youcefsassidz@gmail.com"
              className="flex items-center gap-4 group"
            >
              <FaEnvelope className="text-white/60 group-hover:text-white transition" />
              <span className="group-hover:translate-x-1 transition">
                youcefsassidz@gmail.com
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/213676846386"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <FaWhatsapp className="text-white/60 group-hover:text-white transition" />
              <span className="group-hover:translate-x-1 transition">
                +213 676 846 386
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/youcef-sassi-ab041127a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <FaLinkedin className="text-white/60 group-hover:text-white transition" />
              <span className="group-hover:translate-x-1 transition">
                Youcef Sassi
              </span>
            </a>

          </div>
        </motion.div>

      </div>
    </main>
  );
}