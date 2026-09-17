type Props = {
  title: string;
  type: string;
  year: string;
  cover: string;
};

export default function ProjectHero({ title, type, year, cover }: Props) {
  return (
    <section className="relative w-full h-[630px] flex items-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 px-10 md:px-20 max-w-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
          {title}
        </h1>

        <p className="mt-4 text-white/70 tracking-wider text-sm md:text-base">
          {type} — {year}
        </p>
      </div>

    </section>
  );
}