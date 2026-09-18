"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPageHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse movement to prevent jitter
  const smoothX = useSpring(x, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

  const moveX = useTransform(smoothX, [0, 1920], [-20, 20]);
  const moveY = useTransform(smoothY, [0, 1080], [-20, 20]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      {/* Optimized Background Image */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="fixed inset-0 -z-10 w-full h-full scale-110 pointer-events-none"
      >
        <Image
          src="/meusum.png"
          alt="Projects Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60 pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 z-10 pointer-events-none
        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />

      {/* Content */}
      <div className="relative z-20 px-10 md:px-20 pt-32 pb-20">
        <div className="mb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em]">
            PROJECTS
          </h1>
          <p className="text-white/60 mt-4">Selected Works</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.slug || project.title}>
              <ProjectCard
                title={project.title}
                subtitle={`${project.type} — ${project.year}`}
                image={project.cover}
                href={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}