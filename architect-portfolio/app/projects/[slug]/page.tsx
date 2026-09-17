import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import ProjectHero from "@/components/ProjectHero";
import ProjectConcept from "@/components/ProjectConcept";
import ProjectPlans from "@/components/ProjectPlans";
import ProjectSections from "@/components/ProjectSections";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main>

      <Navbar />

      <ProjectHero
        title={project.title}
        type={project.type}
        year={project.year}
        cover={project.cover}
      />

      <ProjectConcept
        description={project.description}
        images={project.images}
        cover={project.cover}
      />

      <ProjectPlans floors={project.floors} />

      <ProjectSections sections={project.sections} />

    </main>
  );
}