import ProjectGalleryModal from "@/components/ProjectGalleryModal";

type Props = {
  description?: string;
  images: string[];
  cover: string;
};

export default function ProjectConcept({ description, images, cover }: Props) {
  return (
    <section className="w-full bg-neutral-900 text-white py-32 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* TEXT (Rendered on Server) */}
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-white/40">
            Project
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide">
            Concept
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70">
            {description || "Concept description here..."}
          </p>
          <div className="mt-8 w-12 h-[1px] bg-white/30" />
        </div>

        {/* CLIENT ISLAND */}
        <ProjectGalleryModal images={images} cover={cover} />
      </div>
    </section>
  );
}