import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutContact from "@/components/AboutContact";

const capabilities = [
  "Project Planning",
  "Construction Scheduling",
  "Architectural Design",
  "Technical Drawings",
  "Cost Analysis",
  "Project Monitoring",
];

const experience = [
  { date: "2025 — Today", role: "Project Planner — Cosider (In Salah)" },
  { date: "2024 — 2025", role: "Planning Intern — Cosider (Tizi-Ouzou)" },
  { date: "2023 — 2024", role: "Architect — Relizane" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/about1.avif"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="pt-32 px-10 md:px-20 max-w-7xl mx-auto">
        {/* 1. HERO (CLIENT ISLAND) */}
        <AboutHero />

        {/* 2. PHILOSOPHY (SERVER HTML) */}
        <section className="mt-24 grid md:grid-cols-2 gap-16">
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
        </section>

        {/* 3. CAPABILITIES (SERVER HTML) */}
        <section className="mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Expertise
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 text-white/70">
            {capabilities.map((item) => (
              <p
                key={item}
                className="cursor-default transition-transform duration-200 hover:translate-x-1"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE (SERVER HTML) */}
        <section className="mt-24 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide">
              Professional Path
            </h2>
          </div>

          <div className="space-y-6 text-white/70">
            {experience.map((item) => (
              <div
                key={item.role}
                className="transition-transform duration-200 hover:translate-x-1"
              >
                <p className="text-white font-medium">{item.date}</p>
                <p>{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CONTACT (SERVER HTML) */}
        <AboutContact />
      </div>
    </main>
  );
}