"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const lightRef = useRef<HTMLDivElement>(null);

  // Smooth cursor motion values (zero React re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, { stiffness: 400, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    setMounted(true);

    const move = (e: PointerEvent) => {
      // Offset by half of cursor size (32px / 2 = 16px)
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Move radial light directly via CSS variables without re-rendering React
      if (lightRef.current) {
        lightRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        lightRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    const hoverCheck = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        "a, button, input, textarea, [role='button'], .cursor-pointer, [data-cursor]"
      );

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", hoverCheck, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", hoverCheck);
    };
  }, [cursorX, cursorY]);

  // Prevent SSR hydration mismatch and hide on touch devices
  if (!mounted) return null;

  return (
    <>
      {/* 💡 LIGHT SPOTLIGHT FOLLOW (Smooth & Zero Re-render) */}
      <div
        ref={lightRef}
        style={
          {
            "--mouse-x": "-1000px",
            "--mouse-y": "-1000px",
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 60%)",
          } as React.CSSProperties
        }
        className="fixed inset-0 pointer-events-none z-[5] hidden md:block"
      />

      {/* 🖱 CUSTOM CURSOR */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden md:block"
      >
        {/* 🔵 HOVER GLASS AURA */}
        <motion.div
          animate={{
            scale: isHovering ? 1.6 : 0.8,
            opacity: isHovering ? 0.35 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 w-8 h-8 rounded-full bg-white/20 blur-sm -z-10"
        />

        {/* 🖱 CURSOR GRAPHIC */}
        <motion.div
          animate={{
            scale: isHovering ? 1.15 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative w-8 h-8"
        >
          <Image
            src="/cursor.avif"
            alt="Cursor pointer"
            width={32}
            height={32}
            priority
            className="w-full h-full object-contain select-none"
          />
        </motion.div>
      </motion.div>
    </>
  );
}