"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
export default function ProjectsPageHero() {

    // ✅ PUT IT HERE


  return (
   
    <section
      className="relative w-full min-h-screen overflow-hidden"
 
    >
      {/* 🔥 PARALLAX BACKGROUND */}
      <div
  className="fixed inset-0 -z-10 bg-cover bg-center"
  style={{ backgroundImage: "url('/meusum.png')" }}
/>
        {/* 🔲 GRID LINES */}
<div className="absolute inset-0 z-10 pointer-events-none
  bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
  bg-[size:60px_60px]">
</div>
      {/* 🌑 OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/60"></div>

      {/* CONTENT */}
      <div className="px-10 md:px-20 pt-32 pb-20">

        {/* TITLE */}
        <div className="mb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em]">
            PROJECTS
          </h1>
          <p className="text-white/60 mt-4">
            Selected Works
          </p>
        </div>

       
         {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {projects.map((project, i) => (
            <div
              key={i}
              className={i >= 6 ? "md:col-start-2" : ""}
            >
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