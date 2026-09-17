type Props = {
  floors?: string[];
};

export default function ProjectPlans({ floors = [] }: Props) {
  return (
    
    <section className="w-full bg-neutral-900 text-white py-32 px-10 md:px-20">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="mb-16 md:w-1/2">
          <p className="text-sm tracking-[0.3em] uppercase text-white/40">
            Technical
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-wide">
            Floor Plans
          </h2>
        </div>

        {/* PLANS */}
        <div className="grid md:grid-cols-2 gap-12">

          {floors.map((plan, i) => (
            <div
              key={i}
              className="bg-white p-4"
            >
              <img
                src={plan}
                alt={`floor-${i}`}
                className="w-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}