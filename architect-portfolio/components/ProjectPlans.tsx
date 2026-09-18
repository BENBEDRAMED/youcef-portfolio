import Image from "next/image";

type Props = {
  floors?: string[];
};

export default function ProjectPlans({ floors = [] }: Props) {
  if (!floors.length) return null;

  return (
    <section className="w-full bg-neutral-900 text-white py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:w-1/2">
          <p className="text-sm tracking-[0.3em] uppercase text-white/40">
            Technical
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide">
            Floor Plans
          </h2>
          <div className="mt-6 w-12 h-[1px] bg-white/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {floors.map((plan, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-white/30 transition duration-500 rounded-sm"
            >
              {/* Contained responsive wrapper */}
              <div className="relative w-full h-[380px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <Image
                  src={plan}
                  alt={`Floor plan ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex items-center justify-between text-xs tracking-widest uppercase text-white/50">
                <span>Floor {i + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition duration-300">
                  Technical Drawing
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}