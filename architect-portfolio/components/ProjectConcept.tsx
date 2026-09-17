"use client";

import { useState } from "react";

type Props = {
  description?: string;
  images: string[];
  cover: string;
};

export default function ProjectConcept({ description, images, cover }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-neutral-900 text-white py-32 px-10 md:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* TEXT */}
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

          <div className="mt-8 w-12 h-[1px] bg-white/30"></div>
        </div>

        {/* IMAGES */}
        <div className="flex flex-col gap-6">

          {/* BIG */}
          <img
            src={images?.[0] || cover}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />

          <div className="grid grid-cols-2 gap-6">

            {images?.[1] && (
              <img
                src={images[1]}
                className="w-full h-[180px] object-cover"
              />
            )}

            {images?.[2] && (
              <div
                className="relative cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <img
                  src={images[2]}
                  className="w-full h-[180px] object-cover"
                />

                {images.length > 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-2xl">
                      +{images.length - 3}
                    </span>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 max-w-6xl w-full">
            {images.map((img, i) => (
              <img key={i} src={img} className="w-full object-cover" />
            ))}
          </div>

        </div>
      )}

    </section>
  );
}