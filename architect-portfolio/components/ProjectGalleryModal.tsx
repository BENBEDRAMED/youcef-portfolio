"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  cover: string;
};

export default function ProjectGalleryModal({ images, cover }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openImage = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const mainImage = images?.[0] || cover;

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* BIG IMAGE */}
        <div
          className="group relative h-[320px] md:h-[420px] w-full overflow-hidden cursor-pointer rounded-sm bg-neutral-800"
          onClick={() => openImage(0)}
        >
          <Image
            src={mainImage}
            alt="Concept presentation main"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* SMALL IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {images?.[1] && (
            <div
              className="group relative h-[180px] w-full overflow-hidden cursor-pointer rounded-sm bg-neutral-800"
              onClick={() => openImage(1)}
            >
              <Image
                src={images[1]}
                alt="Concept view 2"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {images?.[2] && (
            <div
              className="group relative h-[180px] w-full overflow-hidden cursor-pointer rounded-sm bg-neutral-800"
              onClick={() => openImage(2)}
            >
              <Image
                src={images[2]}
                alt="Concept view 3"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {images.length > 3 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-2xl tracking-widest font-light">
                    +{images.length - 3}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-75 transition"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <button
            onClick={() =>
              setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="absolute left-6 text-white text-4xl p-2 hover:opacity-75 transition select-none"
          >
            ‹
          </button>

          <div className="relative max-h-[85vh] max-w-[90vw] w-[1200px] h-[800px]">
            <Image
              src={images[active] || cover}
              alt="Expanded concept image"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={() =>
              setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-6 text-white text-4xl p-2 hover:opacity-75 transition select-none"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}