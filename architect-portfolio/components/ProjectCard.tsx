import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

export default function ProjectCard({ title, subtitle, image, href }: Props) {
  return (
    <Link href={href} className="group block w-full">
      <div className="relative h-[320px] w-full overflow-hidden rounded-sm bg-neutral-900">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="border border-white/80 bg-black/30 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            View Project
          </span>
        </div>
      </div>

      <div className="mt-4 text-white">
        <h2 className="text-lg font-light tracking-wide transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h2>
        <p className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white/70">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}