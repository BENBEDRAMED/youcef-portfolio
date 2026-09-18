import Image from "next/image";

type Props = {
  sections?: string[];
};

export default function ProjectSections({ sections = [] }: Props) {
  if (!sections.length) return null;

  return (
    <section className="w-full bg-neutral-900 text-white py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:w-1/2">
          <p className="text-sm tracking-[0.3em] uppercase text-white/40">
            Technical
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide">
            Sections
          </h2>
          <div className="mt-6 w-12 h-[1px] bg-white/30" />
        </div>

        <div className="flex flex-col gap-20">
          {sections.map((sec, i) => (
            <div key={i} className="group relative">
              <div className="relative w-full h-[450px] overflow-hidden border border-white/10 group-hover:border-white/30 transition duration-500 bg-white/5 flex items-center justify-center">
                <Image
                  src={sec}
                  alt={`Architectural Section ${i + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain transition duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              </div>

              <div className="mt-6 flex items-center justify-between text-xs tracking-widest uppercase text-white/50">
                <span>Section {i + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                  Elevation / Section Detail
                </span>
              </div>

              <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}