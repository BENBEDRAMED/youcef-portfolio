"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
/* 🎯 ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">

      {/* 🔥 BACKGROUND */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/about1.png')" }}
      />

      {/* 🌑 OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="pt-32 px-10 md:px-20 max-w-7xl mx-auto">

        {/* 🔷 TOP BLOCK */}
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* 🧊 PROFILE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative w-40 h-40"
          >
            {/* GLASS */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20"></div>

            {/* IMAGE */}
            <motion.img
              src="/fz.jpg"
              alt="profile"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full object-cover rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
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
          viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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
            <p>Project Planning</p>
            <p>Construction Scheduling</p>
            <p>Architectural Design</p>
            <p>Technical Drawings</p>
            <p>Cost Analysis</p>
            <p>Project Monitoring</p>
          </div>
        </motion.div>

        {/* 🏗 EXPERIENCE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
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
            <div>
              <p className="text-white">2025 — Today</p>
              <p>Project Planner — Cosider (In Salah)</p>
            </div>

            <div>
              <p className="text-white">2024 — 2025</p>
              <p>Planning Intern — Cosider (Tizi-Ouzou)</p>
            </div>

            <div>
              <p className="text-white">2023 — 2024</p>
              <p>Architect — Relizane</p>
            </div>
          </div>
        </motion.div>

        {/* 📩 CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
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
    className="flex items-center gap-4 group"
  >
    <FaWhatsapp className="text-white/60 group-hover:text-white transition" />
    <span className="group-hover:translate-x-1 transition">
      +213 676 846 386
    </span>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/youcef-sassi-ab041127a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
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